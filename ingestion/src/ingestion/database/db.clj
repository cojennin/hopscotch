(ns ingestion.database.db
  (:use [clojure.java.jdbc :as postgres]))

(declare ^:dynamic *db*)

(defn set-db! [db]
  (alter-var-root (var *db*) (constantly db)))

(defn open! [conn]
  (do
    (set-db! {:subprotocol "postgresql"
              :subname (str "//" (or (:host conn) "127.0.0.1") ":" (or (:port conn) 5432) "/" (or (:db conn)))
                         ; Any additional keys are passed to the driver
                         ; as driver-specific properties.
                         :user "root"
                         :password "root"})))

(defn create-table! [name & specs]
  (postgres/db-do-commands
    db (postgres/create-table-ddl
         name
         specs)))

(defn create-distillery-table!
  (create-table! "distillery"
    [:id :int "PRIMARY KEY AUTO_INCREMENT"]
    [:name "VARCHAR(255)"]
    [:state "VARCHAR(53)"]))

(defn create-spirits-table!
  (create-table! "spirits"
    [:id :int "PRIMARY KEY AUTO_INCREMENT"]
    [:name "VARCHAR(255)"]
    [:class "VARCHAR(255)"]
    [:certification "VARCHAR(255)"]
    [:distllery :int]))

(defn create-initial-schema!
  (create-spirits-table!)
  (create-distillery-table!))

(defn insert-objects! [table objects]
  (loop [[object & left] objects]
    (do
      (insert-object! table object)
      (recur left ))))

(defn insert-object! [table object]
  (postgres/insert! db table object))