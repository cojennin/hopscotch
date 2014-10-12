(ns ingestion.core
  (:gen-class)
  (:require [ingestion.config :as config]
            [ingestion.processors.adi]))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (let [config (config/parse-config-file (io/resource "config.clj"))
        all-resources (:resources config)]
        (do
          (db/open! (:db config))
          (adi/process-adi-resources (:adi-resources (:resources config))))))