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

(defn get-data-from-dsl [dsl data]
  (let [props (str/split dsl #"\.")]
    (loop [[prop & rest-of-props] props
           val data]
      (if (nil? prop)
        val
        (do
          (recur rest-of-props ((keyword prop) val)))))))

(defn map-to-data [the-map]
  (let [props-to-map the-map]
    (fn [object-to-extract-values-from]
        (loop [properties props-to-map
               finished-mapping {}]
          (let [key (first (keys properties))
                val (first (vals properties))]
            (if (empty? properties)
              finished-mapping
              (if (map? val)
                (recur (next properties) (assoc finished-mapping key ((map-to-data val) object-to-extract-values-from)))
                (recur (next properties) (assoc finished-mapping key (get-data-from-dsl val object-to-extract-values-from))))))))))

; Takes a goole spreadsheet as json
(defn process-google-spreadsheet [spreadsheet mapping]
  (let [objs (:entry (:feed (parse-json spreadsheet)))]
    (map (map-to-data mapping) objs)))

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