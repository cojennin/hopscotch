(ns ingestion.core
  (:gen-class)
  (:require [clojure.java.io :as io]
            [clojure.string :as str])
  (:require [ingestion.config :as config]
            [ingestion.database.db :as db])
  (:require [clj-http.client :as client])
  (:require [cheshire.core :refer :all]))

(defn simple-get [endpoint opts]
  (let [options (merge {:follow-redirects true, :insecure? true, :query-params {}} opts)]
    (:body (client/get endpoint))))

(defn parse-json [data]
  (parse-string data true))

(defn get-spreadsheet-entry-value-from-dsl [dsl entry]
  (do
    (let [props (str/split dsl #"\.")]
      (loop [list-key props
             map-val entry]
        (if (= (count props) 1)
          ((keyword (first props)) map-val)
          (do
            (recur (next props) ((keyword (first props)) entry))))))))

(defn map-props-from-spreadsheet [properties data]
  (loop [finished-map {}
         props properties]
    (let [prop-key (key (first props))
          prop-val (val (first props))]
         (if (empty? props)
           finished-map
           (if (map? prop-val)
             (recur (assoc finished-map prop-key prop-val) prop-val)
             (recur (assoc finished-map prop-key (get-spreadsheet-entry-value-from-dsl prop-val data)) (next props)))))))

; Takes a goole spreadsheet as json
(defn process-google-spreadsheet [spreadsheet mapping]
  (let [obj (:entry (:feed (parse-json spreadsheet)))]
    (loop [remaining-entries obj
           mapped-entries []]
      (if (empty? remaining-entries)
        mapped-entries
        (let [[is-mapping & to-map] remaining-entries
              mapped-entries (conj mapped-entries (map-props-from-spreadsheet mapping is-mapping))]
          (recur to-map mapped-entries))))))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (let [config (config/parse-config-file (io/resource "config.clj"))
        all-resources (:resources config)]
    (db/open! (:mongo config))
    (loop [resources (:resources config)]
      (if (empty? resources)
        (print "Done")
        (let [[resource & whats-left] resources]
          (db/save-batch (:name resource)
            (process-google-spreadsheet
              (simple-get (:location resource) {})
                (:mapping resource)))
          (recur whats-left))))))