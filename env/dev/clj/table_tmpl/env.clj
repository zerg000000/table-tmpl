(ns table-tmpl.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [table-tmpl.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[table-tmpl started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[table-tmpl has shut down successfully]=-"))
   :middleware wrap-dev})
