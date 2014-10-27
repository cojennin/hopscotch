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

(defcomponent footer [data owner]
  (render [_]
    (g/grid {:class "footer" :fluid? true}
      (g/row {}
        (g/col {:xs 12}
          (n/nav {:bs-style "pills"
                  :active-key 1
                  :class "flat center"
                  :on-select (fn [k _] (js/console (str "Selected")))}
            (n/nav-item {:key 1 :href "/search"}
              "Search")
            (n/nav-item {:key 2 :href "/enjoyed"}
              "Enoyed")
            (n/nav-item {:key 3 :href "/cellar"}
              "Cellar")
            (n/nav-item {:key 4 :href "/account"}
              "Account")))))))