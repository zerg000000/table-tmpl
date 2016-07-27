(ns table-tmpl.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[table-tmpl started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[table-tmpl has shut down successfully]=-"))
   :middleware identity})
