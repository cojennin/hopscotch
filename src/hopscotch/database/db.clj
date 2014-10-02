(ns hopscotch.database.db
  (:import  [org.bson.types ObjectId])
  (:require [environ.core :refer :all])
  (:require  monger.joda-time
             monger.json
             [environ.core :refer :all]
             [monger.operators :refer :all]
             [monger.result :as result]
             [monger.core :as mongo]
             [monger.collection :as collection]
             [monger.query :as q]
             [monger.conversion :refer [from-db-object]]))

(def mongo-creds
  {:host     (or (env :mongo-host) "127.0.0.1")
  :database (or (env :mongo-database) "hopscotch")})

(declare ^:dynamic *conn*)
(declare ^:dynamic *db*)

(defn set-connection! [conn]
  (alter-var-root (var *conn*) (constantly conn)))

(defn set-db! [db]
  (alter-var-root (var *db*) (constantly db)))

(def Bottles "Bottles")

(defn update-collection! [coll id update]
  (collection/update *db* coll {:_id id} update {:upsert true}))

(defn find-collection [coll]
  (collection/find-maps *db* coll))

(defn to-object-id [s]
  "An extension of Monger's to-object-id. Handles nils or non-objectId strings and returns nil."
  (try
    (monger.conversion/to-object-id s)
    (catch Exception e nil)))


(defn save-bottle! [bottle]
  (result/ok? (update-collection! Bottles {:_id (ObjectId.)} bottle)))

(defn update-bottle! [id bottle]
  (result/ok? (update-collection! Bottles (to-object-id id) {$set (dissoc bottle :_id)})))

(defn query-bottles []
  (find-collection Bottles))

(defn open! []
  (do
    (set-connection! (mongo/connect (mongo/server-address (:host mongo-creds) 27017) ))
    (set-db! (mongo/get-db *conn* (:database mongo-creds)))))