(ns api.core
  (:require [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route])
  (:require [ring.util.response :refer :all]
            [ring.middleware.json :as json]
            [ring.util.response :only [response]])
  (:require [api.database.db :as db])
  (:require [ring.middleware.cors :refer [wrap-cors]]))

(defn get-spirit [id] (response "Implement"))

(defn find-spirit [] (response (db/query-bottles)))

(defn save-spirit [bottle] (response (db/save-bottle! bottle)))

(defn get-distillery [] (response "Implement"))

(defn find-distilleries [] (response (db/query-distilleries)))

(defn save-distillery [distillery] (response (db/save-distillery! distillery)))

(defroutes app-routes
  (GET "/spirits/:id" [id] (get-bottle id))
  (GET "/spirits" [] (find-bottles))
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
  (let [config (config/parse-config-file (io/resource "config.clj"))]
    (db/open! (:db config))))