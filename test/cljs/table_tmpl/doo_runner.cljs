(ns table-tmpl.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [table-tmpl.core-test]))

(doo-tests 'table-tmpl.core-test)

