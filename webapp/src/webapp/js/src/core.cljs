(ns webapp.core
  (:require
    [webapp.header :as header]
    [webapp.search :as search]
    [webapp.footer :as footer])
  (:require
    [om.core :as om :include-macros true]
    [om-tools.core :refer-macros [defcomponent]]
    [om-tools.dom :as dom :include-macros true]
    [om-tools.mixin :refer-macros [defmixin]]
    [om-bootstrap.grid :as g]
    [om-bootstrap.nav :as n]
    [om-bootstrap.input :as i]
    [om-bootstrap.button :as b]))

(defcomponent body [data owner]
  (render [_]
    (g/grid {:class "body light" :fluid? true}
      (g/row {}
        (g/col {:xs 8 :xs-offset 2 }
          (->search.search {}))))))

; https://github.com/Prismatic/om-tools/blob/master/src/om_tools/core.cljx#L77
; https://github.com/swannodette/om/blob/8fcbcf4c8037b3cbe033d6ad5d96b3c5a864a804/src/om/core.cljs#L611
; Using -> will actually build the component for us instead of just returning an object?
(defcomponent app [data owner]
  (render [_]
    (dom/div {:id "app" :class "dark"} ; Can we just render and not wrap in dom/div?
      (->header.header {})
      (->body {})
      (->footer.footer {}))))

(om/root app {}
  {:target (. js/document (getElementById "hopscotch"))})