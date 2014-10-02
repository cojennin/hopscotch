(ns hopscotch.handler
  (:require [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route])
  (:require [ring.util.response :refer :all]
            [ring.middleware.json :as json]
            [ring.util.response :only [response]])
  (:require [hopscotch.database.db :as db]))

(defn get-bottle [id] (response "Implement"))

(defn find-bottles [] (response (db/query-bottles)))

(defn save-bottle [bottle] (response (db/save-bottle! bottle)))

(defn get-distillery [] (response "Implement"))

(defn find-distilleries [] (response "Implement"))

(defn save-distillery [] (response "Implement"))

(defroutes app-routes
  (GET "/bottle/:id" [id] (get-bottle id))
  (GET "/bottles" [] (find-bottles))
  (POST "/bottles" {body :body} (save-bottle body))
  (GET "/distillery/:id" [id], (get-distillery id))
  (GET "/distilleries", [], (find-distilleries))
  (POST "/distilleries", [], (save-distillery))
  (route/not-found "Not Found"))



(def app
  (->
  (handler/site app-routes)
  (json/wrap-json-body)
  (json/wrap-json-response)))

(def init
  (db/open!))
