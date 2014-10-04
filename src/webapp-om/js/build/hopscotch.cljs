(ns hopscotch
  (:require
    [om.core :as om :include-macros true]
    [om-tools.core :refer-macros [defcomponent]]
    [om-tools.dom :as dom :include-macros true]
    [om-tools.mixin :refer-macros [defmixin]]))

(defcomponent header [data owner]
  (render [this]
    (dom/div {:className "header dark"}
      (dom/h1 (str "Hopscotch")))))

(om/root header {}
  {:target (. js/document (getElementById "hopscotch"))})