(ns ingestion.config
  (:require [clojure.java.io :as io])
  (:require [clojure.edn :as edn])
  (:import [java.io PushbackReader]))

(defn parse-config-file
  [config]
  (binding [*read-eval* false]
    (edn/read-string (slurp config))))