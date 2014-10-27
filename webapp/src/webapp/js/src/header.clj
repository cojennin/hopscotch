(ns webapp.header
  (:require
    [om.core :as om :include-macros true]
    [om-tools.core :refer-macros [defcomponent]]
    [om-tools.dom :as dom]
    [om-tools.mixin :refer-macros [defmixin]]
    [om-bootstrap.grid :as g]
    [om-bootstrap.nav :as n]
    [om-bootstrap.input :as i]
    [om-bootstrap.button :as b]))

(defcomponent header [data owner]
  (render [_]
    (g/grid {:class "header" :fluid? true}
      (g/row {}
        (g/col {:xs 12}
          (dom/h1 (str "Hopscotch")))))))