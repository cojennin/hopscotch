(ns hopscotch-webapp.core
  (:require
    [om.core :as om :include-macros true]
    [om-tools.core :refer-macros [defcomponent]]
    [om-tools.dom :as dom :include-macros true]
    [om-tools.mixin :refer-macros [defmixin]]
    [om-bootstrap.grid :as g]
    [om-bootstrap.nav :as n]
    [om-bootstrap.input :as i]
    [om-bootstrap.button :as b]))

(defcomponent search [data owner]
  (render [_]
    (dom/div {:class "search"}
      (dom/h3 {:class "text-center"} (str "\"Too much of anything is bad, but too much of good whiskey is barely enough.\""))
      (dom/p {:class "text-right byline" } (str "- Mark Twain"))
        (dom/form
          (i/input {:type "text" :placeholder "Find a spirit"})
          (dom/p (b/button {:bs-style "primary" :bs-size "large" :class "pull-right"} "Find"))))))

(defcomponent header [data owner]
  (render [_]
    (g/grid {:class "header" :fluid? true}
      (g/row {}
        (g/col {:xs 12}
          (dom/h1 (str "Hopscotch")))))))

(defcomponent body [data owner]
  (render [_]
    (g/grid {:class "body light" :fluid? true}
      (g/row {}
        (g/col {:xs 8 :xs-offset 2 }
          (->search {}))))))

(defcomponent footer [data owner]
  (render [_]
    (g/grid {:class "footer" :fluid? true}
      (g/row {}
        (g/col {:xs 12}
          (n/nav {:bs-style "pills"
                  :active-key 1
                  :class "flat"
                  :on-select (fn [k _] (js/console (str "Selected")))}
            (n/nav-item {:key 1 :href "/search"}
              "Search")
            (n/nav-item {:key 2 :href "/enjoyed"}
              "Enoyed")
            (n/nav-item {:key 3 :href "/cellar"}
              "Cellar")
            (n/nav-item {:key 4 :href "/account"}
              "Account")))))))

; https://github.com/Prismatic/om-tools/blob/master/src/om_tools/core.cljx#L77
; https://github.com/swannodette/om/blob/8fcbcf4c8037b3cbe033d6ad5d96b3c5a864a804/src/om/core.cljs#L611
; Using -> will actually build the component for us instead of just returning an object?
(defcomponent app [data owner]
  (render [_]
    (dom/div {:id "app" :class "dark"} ; Can we just render and not wrap in dom/div?
      (->header {})
      (->body {})
      (->footer {}))))

(om/root app {}
  {:target (. js/document (getElementById "hopscotch"))})