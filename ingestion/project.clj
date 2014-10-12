(defproject ingestion "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [clj-http "1.0.0"]
                 [cheshire "5.3.1"]
                 [clojure.joda-time "0.2.0"]
                 [org.clojure/java.jdbc "0.3.5"]
                 [sqlingvo "0.6.5"]
                 [org.postgresql/postgresql "9.2-1002-jdbc4"]]
  :main ^:skip-aot ingestion.core
  :target-path "target/%s"
  :resource-paths ["resources"]
  :profiles {:uberjar {:aot :all}})
