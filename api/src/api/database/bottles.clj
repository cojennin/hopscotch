(ns api.database.bottles
  (:use [sqlingvo.core])
  (:refer-clojure :exclude [distinct group-by replace]))

(def Bottles :bottles)

; needs foreign key constraint
(defn create-bottles-table! []
  (db/create-table! Bottles
        (if-not-exists true)
        (column :id :serial :primary-key? true)
        (column :spirit :int)
        (column :bottling-year :int)
        (column :size :int)))

