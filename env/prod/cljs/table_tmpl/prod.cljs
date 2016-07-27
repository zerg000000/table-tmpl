(ns table-tmpl.app
  (:require [table-tmpl.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
