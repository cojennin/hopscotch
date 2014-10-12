(ns ingestion.database.db
  (:require [clojure.java.jdbc :as postgres])
  (:require [sqlingvo.core])
  (:refer-clojure :exclude [distinct group-by replace]))

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

(defn create-table! [name & rest] ; destructure rest so it can be passed to create-table-ddl
  (try
    (postgres/db-do-commands *db* (sql (create-table name rest)))
    (catch Exception e (.printStackTrace (.getNextException e)))))

(defn debug-table [name & rest]
  (println (sql (create-table name rest))))


(defn insert-object! [table object]
  (postgres/insert! *db* table object))

(defn insert-objects! [table objects]
  (loop [[object & left] objects]
    (do
      (insert-object! table object)
      (recur left ))))