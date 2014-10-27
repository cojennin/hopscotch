(ns webapp.core
  (:require
    [om.core :as om :include-macros true]
    [om-tools.core :refer-macros [defcomponent]]
    [om-tools.dom :as dom]
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
        (dom/input {:type "text" :class "form-control pull-left" :placeholder "What're you having?"})
        (b/button {:bs-style "primary" :bs-size "large" :class "pull-right glyphicon glyphicon-search"})))))