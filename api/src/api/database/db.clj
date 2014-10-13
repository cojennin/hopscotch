(ns api.database.db
  (:require [clojure.java.jdbc :as postgres]))

(declare ^:dynamic *db*)

(defn set-db! [db]
  (alter-var-root (var *db*) (constantly db)))

(defn open! [conn]
  (do
    (set-db! {:subprotocol "postgresql"
              :subname (str "//" (or (:host conn) "127.0.0.1") ":" (or (:port conn) 5432) "/" (or (:db conn)))
              ; Any additional keys are passed to the driver
              ; as driver-specific properties.
              (or (:user conn) "")
              (or (:password conn) "")})))

(defn execute! [query]
  (try
    (postgres/execute! *db* query)
    (catch Exception e (.printStackTrace (.getNextException e)))))

(defn create-table! [table specs]
  (try
    (jdbc/db-do-commands *db*
      (jdbc/create-table-ddl table specs))
    (catch Exception e (.printStackTrace (.getNextException e)))))

(defn query [query]
  (try
    (postgres/query *db* query)
    (catch Exception e (.printStackTrace (.getNextException e)))))

(defn debug-execute! [query]
  (println query))

(defn create-hopscotch-schmema []
  (spirits-db/create-spirits-table!)
  (distilleries-db/create-distilleries-table!)
  (bottles-db/create-bottles-table!))