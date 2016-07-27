(ns table-tmpl.core-test
  (:require [cljs.test :refer-macros [is are deftest testing use-fixtures]]
            [reagent.core :as reagent :refer [atom]]
            [table-tmpl.core :as rc]))

(deftest test-home
  (is (= true true)))

