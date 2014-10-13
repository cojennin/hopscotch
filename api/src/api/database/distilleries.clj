(ns api.database.distilleries
  (:use [sqlingvo.core])
  (:refer-clojure :exclude [distinct group-by replace]))

(def Distilleries :distilleries)

(defn create-distilleries-table! []
  (db/execute!
    (sql
      (create-table bottles
        (if-not-exists true)
        (column :id :serial :primary-key? true)
        (column :name :varchar :length 255)
        (column :state :varchar :length 53)))))

