(ns hopscotch-api.core
  (:require [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route])
  (:require [ring.util.response :refer :all]
            [ring.middleware.json :as json]
            [ring.util.response :only [response]])
  (:require [hopscotch-api.database.db :as db])
  (:require [ring.middleware.cors :refer [wrap-cors]]))

(defn get-bottle [id] (response "Implement"))

(defn find-bottles [] (response (db/query-bottles)))

(defn save-bottle [bottle] (response (db/save-bottle! bottle)))

(defn get-distillery [] (response "Implement"))

(defn find-distilleries [] (response (db/query-distilleries)))

(defn save-distillery [distillery] (response (db/save-distillery! distillery)))

(defroutes app-routes
  (GET "/bottles/:id" [id] (get-bottle id))
  (GET "/bottles" [] (find-bottles))
  (POST "/bottles" {body :body} (save-bottle body))
  (GET "/distilleries/:id" [id] (get-distillery id))
  (GET "/distilleries" [] (find-distilleries))
  (POST "/distilleries" {body :body} (save-distillery body))
  (route/not-found "Not Found"))

(def app
  (->
  (handler/site app-routes)
  (json/wrap-json-body)
  (json/wrap-json-response)
  (wrap-cors :access-control-allow-origin #"http://localhost:8080" :access-control-allow-methods [:get :put :post :delete])))

(def init
  (db/open!))
