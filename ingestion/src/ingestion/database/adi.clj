(ns ingestion.database.adi
  (:require [ingestion.database.db :as db])
  (:use [sqlingvo.core])
  (:refer-clojure :exclude [distinct group-by replace]))

(def ADI-Distilleries :adi-distilleries)
(def ADI-Spirits :adi-spirits)

(defn create-adi-distilleries-table! []
  (db/execute!
    (sql
      (create-table ADI-Distilleries
        (if-not-exists true)
        (column :id :serial :primary-key? true)
        (column :name :varchar :length 255)
        (column :state :varchar :length 53)))))

(defn create-adi-spirits-table! []
  (db/execute!
    (sql
      (create-table ADI-Spirits
        (if-not-exists true)
        (column :id :serial :primary-key? true)
        (column :name :varchar :length 255)
        (column :class :varchar :length 255)
        (column :certification :varchar :length 255)
        (column :distillery :int)))))

(defn drop-adi-distilleries-table! []
  (db/execute!
    (sql
      (drop-table [ADI-Distilleries]
        (if-exists true)))))

(defn drop-adi-spirits-table! []
  (db/execute!
    (sql
      (drop-table [ADI-Spirits]
        (if-exists true)))))

(defn prepare-save [table objects]
  (sql
    (insert table []
      (values objects))))

(defn save-adi-spirits! [spirits]
  (db/execute!
    (prepare-save ADI-Spirits spirits)))

(defn save-adi-distilleries! [distilleries]
  (db/execute!
    (prepare-save ADI-Distilleries distilleries)))

(defn find-distillery [distillery-info]
  (db/query
    (sql
      (select [*]
        (from ADI-Distilleries)
        (where `(= :name ~(:name distillery-info)) `(= :state ~(:state distillery-info)))))))

(defn create-adi-schema! []
  (do
    (drop-adi-spirits-table!)
    (drop-adi-distilleries-table!)
    (create-adi-spirits-table!)
    (create-adi-distilleries-table!)))