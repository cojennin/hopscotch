(ns api.database.spirits
  (:use [sqlingvo.core])
  (:refer-clojure :exclude [distinct group-by replace]))

(def Spirits :spirits)

; needs foreign key constraint
(defn create-spirits-table! []
  (db/execute!
    (sql
      (create-table bottles
        (if-not-exists true)
        (column :id :serial :primary-key? true)
        (column :name :varchar :length 255)
        (column :class :varchar :length 255)
        (column :certification :varchar :length 255)
        (column :distillery :int)))))

