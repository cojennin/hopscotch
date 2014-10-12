(ns ingestion.processors.adi
  (:require [ingestion.utils :as utils])
  (:require [ingestion.database.adi :as db]))

(defn swap-distillery-info-for-id [spirit]
  (let [distilleries (db/find-distillery (:distillery spirit))]
    (assoc spirit :distillery (:id (first distilleries)))))

(defn process-adi-resources! [adi-resources]
  (let [processed-adi-resources (mapv utils/process-resource adi-resources)]
    (do
      (db/create-adi-schema!)
      (db/save-adi-distilleries! (distinct (:objects (first (utils/filter-by-keyword-value :name "adi-distilleries" processed-adi-resources)))))
      (db/save-adi-spirits! (mapv swap-distillery-info-for-id (:objects (first (utils/filter-by-keyword-value :name "adi-spirits" processed-adi-resources))))))))