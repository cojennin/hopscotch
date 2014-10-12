(ns ingestion.processors.adi
  (:require [ingestion.utils :as utils])
  (:require [ingestion.database.adi :as db]))

(defn swap-distillery-info-for-id [spirit]
  (assoc spirit :distillery (:id (db/find-distillery (:distillery spirit)))))

; Map over spirits and swap out their distillery objects for distillery id
(defn save-spirits! [spirits]
  (db/save-spirits! (map swap-distillery-info-for-id spirits spirits)))

(defn process-adi-resources [adi-resources]
  (let [processed-adi-resources (map utils/process-resource adi-resources)]
    (do
      (db/create-adi-schema!)
      (db/save-distilleries! (filter-by-keyword-value :name "distilleries"))
      (save-spirits! (filter-by-keyword-value :name "spirits")))))