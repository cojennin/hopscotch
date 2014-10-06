(ns whiskey-river.database.db
  (:import  [org.bson.types ObjectId])
  (:require  [monger.joda-time]
             [monger.json]
             [monger.operators :refer :all]
             [monger.result :as result]
             [monger.core :as mongo]
             [monger.collection :as collection]
             [monger.query :as q]
             [monger.conversion :refer [from-db-object]]))

(declare ^:dynamic *conn*)
(declare ^:dynamic *db*)

(defn set-connection! [conn]
  (alter-var-root (var *conn*) (constantly conn)))

(defn set-db! [db]
  (alter-var-root (var *db*) (constantly db)))

(defn open! [conn]
  (do
    (set-connection! (mongo/connect (mongo/server-address (:host conn) 27017) ))
    (set-db! (mongo/get-db *conn* (:database conn)))))

(defn to-object-id [s]
  "An extension of Monger's to-object-id. Handles nils or non-objectId strings and returns nil."
  (try
    (monger.conversion/to-object-id s)
    (catch Exception e nil)))