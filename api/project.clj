(defproject hopscotch/api "0.1.0-SNAPSHOT"
  :description "Hopscotch API"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.1.9"]
                 [com.novemberain/monger "2.0.0"]
                 [environ "1.0.0"]
                 [cheshire "5.3.1"]
                 [ring/ring-json "0.3.1"]
                 [ring-cors "0.1.4"]]
  :plugins [[lein-ring "0.8.12"]]
  :ring {:handler hopscotch-api.core/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring-mock "0.1.5"]]}})
