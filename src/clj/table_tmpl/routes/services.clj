(ns table-tmpl.routes.services
  (:require [ring.util.http-response :refer :all]
            [compojure.api.sweet :refer :all]
            [ring.swagger.upload :as upload]
            [schema.core :as s]
            [cheshire.core :as json]
            [dk.ative.docjure.spreadsheet :as excel]
            [clostache.parser :as mustache]))

(def AZ (map #(keyword (str %)) "ABCDEFGHIJKLMNOPQRSTUVWXYZ"))

(defn read-xls [f head?]
  (let [wb (excel/load-workbook-from-file (.getAbsolutePath f))
        sht (excel/select-sheet (fn [_] true) wb)
        head (map excel/read-cell (-> sht excel/row-seq first excel/cell-seq))
        head-map (zipmap (take (count head) AZ) (if head? head (map #(keyword (str "col" %)) (range (count head)))))
        vals (excel/select-columns head-map sht)]
    (if head?
      (rest vals)
      vals)))

(defapi service-routes
  {:swagger {:ui "/swagger-ui"
             :spec "/swagger.json"
             :data {:info {:version "1.0.0"
                           :title "Sample API"
                           :description "Sample Services"}}}}
  (context "/api" []
    :tags ["thingie"]
    (POST "/any2json" []
      :return s/Any
      :query-params [{head :- Boolean true}]
      :multipart-params [file :- upload/TempFileUpload]
      :middleware [upload/wrap-multipart-params]
      :summary "convert excel to json"
      (ok
        (cond
          (.endsWith (:filename file) ".csv")
          [{:error "not supported"}]
          (.endsWith (:filename file) ".json")
          (json/parse-stream (clojure.java.io/reader (:tempfile file)))
          (or (.endsWith (:filename file) ".xlsx") (.endsWith (:filename file) ".xls"))
          (read-xls (:tempfile file) head)
          :default
          [{:error "not supported"}])))
    (GET "/plus" []
      :return       Long
      :query-params [x :- Long, {y :- Long 1}]
      :summary      "x+y with query-parameters. y defaults to 1."
      (ok (+ x y)))

    (POST "/minus" []
      :return      Long
      :body-params [x :- Long, y :- Long]
      :summary     "x-y with body-parameters."
      (ok (- x y)))

    (GET "/times/:x/:y" []
      :return      Long
      :path-params [x :- Long, y :- Long]
      :summary     "x*y with path-parameters"
      (ok (* x y)))

    (POST "/divide" []
      :return      Double
      :form-params [x :- Long, y :- Long]
      :summary     "x/y with form-parameters"
      (ok (/ x y)))

    (GET "/power" []
      :return      Long
      :header-params [x :- Long, y :- Long]
      :summary     "x^y with header-parameters"
      (ok (long (Math/pow x y))))))
