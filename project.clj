(defproject hopscotch "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.1.9"]
                 [com.novemberain/monger "2.0.0"]
                 [environ "1.0.0"]
                 [cheshire "5.3.1"]
                 [ring/ring-json "0.3.1"]
                 [ring-cors "0.1.4"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [om "0.7.3"]
                 [prismatic/schema "0.3.0"]
                 [prismatic/om-tools "0.3.3" :exclusions [org.clojure/clojure]]
                 [racehub/om-bootstrap "0.3.0" :exclusions [org.clojure/clojure]]
                 [secretary "1.2.1"]]
  :plugins [[lein-ring "0.8.12"]
            [lein-cljsbuild "1.0.3"]]
  :ring {:handler hopscotch.handler/app}
  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src/webapp-om/js/src"]
              :compiler {
                :output-to "src/webapp-om/js/build/main.js"
                :output-dir "src/webapp-om/js/build"
                :optimizations :none
                :source-map true}}]}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring-mock "0.1.5"]]}})
