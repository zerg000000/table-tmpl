(ns table-tmpl.routes.services
  (:require [ring.util.http-response :refer :all]
            [compojure.api.sweet :refer :all]
            [ring.swagger.upload :as upload]
            [schema.core :as s]
            [cheshire.core :as json]
            [dk.ative.docjure.spreadsheet :as excel]
            [clojure-csv.core :as csv]
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

(defn read-csv [f head?]
  (let [wb (csv/parse-csv (clojure.java.io/reader f))
        head (map keyword (first wb))
        vals (if head?
                   (map #(zipmap head %) (rest wb))
                   (map #(keyword (str "col" %)) (range (count head))))]
    vals))

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
          (read-csv (:tempfile file) head)
          (.endsWith (:filename file) ".json")
          (json/parse-stream (clojure.java.io/reader (:tempfile file)))
          (or (.endsWith (:filename file) ".xlsx") (.endsWith (:filename file) ".xls"))
          (read-xls (:tempfile file) head)
          :default
          [{:error "not supported"}])))))
