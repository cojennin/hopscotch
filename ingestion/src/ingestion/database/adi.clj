(ns ingestion.database.adi
  (:require [ingestion.database.db :as db]))

(def ADI-Distilleries :adi-distilleries)
(def ADI-Spirits :adi-spirits)

(defn create-adi-distillery-table! []
  (db/debug-table ADI-Distilleries
    (column :id :serial :primary-key? true)
    (column :name :varchar :length 255)
    (column :state :varachar :length 3)))

(defn create-adi-spirits-table! []
  (db/debug-table ADI-Spirits
    (column :id :serial :primary-key? true)
    (column :name :varchar :length 255)
    (column :class :varchar :length 255)
    (column :certification :varchar :length 255)
    (column :distillery :int)))

(defn create-initial-schema! []
  (create-adi-spirits-table!)
  (create-adi-distillery-table!))

(defn save-adi-spirits! [spirits]
  (insert-objects! Spirits spirits))

(defn save-adi-distilleries! [distilleries]
  (insert-objects! Distilleries distilleries))