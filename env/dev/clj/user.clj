(ns user
  (:require [mount.core :as mount]
            [table-tmpl.figwheel :refer [start-fw stop-fw cljs]]
            table-tmpl.core))

(defn start []
  (mount/start-without #'table-tmpl.core/repl-server))

(defn stop []
  (mount/stop-except #'table-tmpl.core/repl-server))

(defn restart []
  (stop)
  (start))


