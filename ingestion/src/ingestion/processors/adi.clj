(ns ingestion.processors.adi
  (:require [ingestion.utils :as utils])
  (:require [ingestion.database.adi :as db]))

; This should identify what the resouce is and call the correct
; processing function.
(defn process-adi-resource [resource]
  (utils/process-google-spreadsheet
    (utils/simple-get (:location resource)) resource))

(defn swap-distillery-info-for-id [spirit]
  (let [distilleries (db/find-distillery (:distillery spirit))]
    (assoc spirit :distillery (:id (first distilleries)))))

(defn get-objects-from-set [name sets]
  (:objects (first (utils/filter-by-keyword-value :name name sets))))

; This function doesn't feel very clojurey. Too many side effects.
(defn process-adi-resources! [adi-resources]
  (let [processed-adi-resources (mapv process-adi-resource adi-resources)]
    (do
      (db/create-adi-schema!)
      (db/save-adi-distilleries! (distinct (get-objects-from-set "adi-distilleries" processed-adi-resources)))
      (db/save-adi-spirits! (mapv swap-distillery-info-for-id (get-objects-from-set "adi-spirits" processed-adi-resources))))))