(ns ingestion.core
  (:gen-class)
  (:require [clojure.java.io :as io])
  (:require [ingestion.config :as config]
            [ingestion.processors.adi :as adi]
            [ingestion.database.db :as db]))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (let [config (config/parse-config-file (io/resource "config.clj"))
        all-resources (:resources config)]
        (do
          (db/open! (:db config)) ; setup the database
          (adi/process-adi-resources! (:adi-resources (:resources config)))))) ; Process information from the ADI