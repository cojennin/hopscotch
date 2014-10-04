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
(def Distilleries "Distilleries")

(defn update-collection! [coll id update]
  (collection/update *db* coll {:_id id} update {:upsert true}))

(defn find-collection [coll]
  (collection/find-maps *db* coll))

(defn get-from-collection [coll id]
  (collection/find-by-id *db* coll))

(defn to-object-id [s]
  "An extension of Monger's to-object-id. Handles nils or non-objectId strings and returns nil."
  (try
    (monger.conversion/to-object-id s)
    (catch Exception e nil)))

(defn get-bottle [id]
  (get-from-collection Bottles id))

(defn get-distillery [id]
  (get-from-collection Distilleries id))

(defn query-bottles []
  (find-collection Bottles))

(defn query-distilleries []
  (find-collection Distilleries))

(defn save-bottle! [bottle]
  (let [bottleId {:_id (ObjectId.)}]
    (if (result/ok? (update-collection! Bottles bottleId bottle))
      (get-bottle bottleId))))

(defn update-bottle! [id bottle]
  (result/ok? (update-collection! Bottles (to-object-id id) {$set (dissoc bottle :_id)})))

(defn save-distillery! [distillery]
  (let [distilleryId {:_id (ObjectId.)}]
    (if (result/ok? (update-collection! Distilleries distilleryId distillery))
      (get-distillery distilleryId))))

(defn update-distillery! [id distillery]
  (result/ok? (update-collection! Distilleries (to-object-id id) {$set (dissoc distillery :_id)})))

(defn open! []
  (do
    (set-connection! (mongo/connect (mongo/server-address (:host mongo-creds) 27017) ))
    (set-db! (mongo/get-db *conn* (:database mongo-creds)))))