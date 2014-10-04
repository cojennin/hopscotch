(defproject hopscotch/webapp "0.1.0-SNAPSHOT"
:description "Hopscotch webapp"
:url "http://example.com/FIXME"
:min-lein-version "2.0.0"
:dependencies [[org.clojure/clojure "1.6.0"]
               [org.clojure/clojurescript "0.0-2322"]
               [om "0.7.3"]
               [prismatic/schema "0.3.0"]
               [prismatic/om-tools "0.3.3" :exclusions [org.clojure/clojure]]
               [racehub/om-bootstrap "0.3.0" :exclusions [org.clojure/clojure]]
               [secretary "1.2.1"]]
:plugins [[lein-cljsbuild "1.0.3"]]
:cljsbuild {
             :builds [{:id "dev"
                       :source-paths ["src/js/src"]
                       :compiler {
                                   :output-to "src/js/build/main.js"
                                   :output-dir "src/js/build"
                                   :optimizations :none
                                   :source-map true}}]})