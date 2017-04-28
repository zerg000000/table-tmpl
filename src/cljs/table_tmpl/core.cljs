(ns table-tmpl.core
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [cljsjs.mustache]
            [cljsjs.moment]
            [markdown.core :refer [md->html]]
            [table-tmpl.ajax :refer [load-interceptors!]]
            [ajax.core :refer [GET POST]])
  (:import goog.History))

(defonce app
  (r/atom
      {:data [{:col1 "table_name" :col2 123.2 :col3 (js/Date.)} {:col1 "table_name" :col2 28 :col3 (js/Date.)}]
       :sample-data [{:col1 "table_name" :col2 123.2 :col3 (js/Date.)} {:col1 "table_name" :col2 28 :col3 (js/Date.)}]
       :template-string-sample "your template string like: select * from {{col1}} where price = {{col2}} and created_date = '{{#date}}col3|MM-DD-YYYY{{/date}}';"
       :template-string "select * from {{col1}} where price = {{col2}} and created_date = '{{#date}}col3|MM-DD-YYYY{{/date}}';"
       :max-sample-col 0
       :max-sample 3
       :sample-page 0
       :uploading? false
       :head? true
       :csv-status :not-ready
       :data-section-close? true}))

(defn date-format []
  (this-as this
    (fn [text render]
      (let [[field fmt] (clojure.string/split text #"\|")
            val (aget this field)]
        (.format (js/moment. val) fmt)))))

(defn csv-data [all]
  (swap! all assoc :csv-status :processing)
  (let [{:keys [template-string data data-uri]} @all
        csv-str (clojure.string/join
                  "\n"
                  (map
                    #(js/Mustache.render template-string (clj->js (merge % {:date date-format})))
                    data))
        blob (js/Blob. #js [csv-str] #js {:type "text/plain"})]
    (.revokeObjectURL js/window.URL data-uri)
    (swap! all assoc :data-uri (.createObjectURL js/window.URL blob) :csv-status :ready)))

(defn convert-file [form]
  (swap! app assoc :uploading? true)
  (POST (str "/api/any2json?head=" (:head? @app))
        {:body (js/FormData. form)
         :handler #(do (swap! app assoc :data % :sample-data (take (:max-sample @app) %) :sample-keys (keys (first %)) :sample-page 0 :uploading? false)
                       (csv-data app))
         :error-handler #(swap! app assoc :uploading? false)}))

(defn spinner []
  [:div.spinner
    [:div.rect1]
    [:div.rect2]
    [:div.rect3]
    [:div.rect4]])


(defn uploadarea []
  (let [drag? (r/atom false)]
    (fn []
      [:form#inputform
        {:on-dragover #(reset! drag? true)
         :on-drag #(reset! drag? true)
         :on-dragenter #(reset! drag? true)
         :on-dragend #(reset! drag? false)
         :on-drop #(reset! drag? false)
         :on-dragleave #(reset! drag? assoc :dragfile? false)
         :class (str (when (:uploading? @app) "uploading") " " (when @drag? "dragover"))}
        [:div.uploadarea
          [:input {:type "file" :name "file"
                   :on-change #(convert-file (.getElementById js/document "inputform"))}]]
        [spinner]])))

(defn output-table [app]
  (fn []
    (let [rows (:sample-data @app)
          {:keys [template-type template-string]} @app]
      [:table.table
        [:tbody
          (doall
            (for [row rows]
              ^{:key row}
              [:tr
                [:td
                  [:pre
                    (js/Mustache.render template-string (clj->js (merge row {:date date-format})))]]]))]])))

(defn data-table [app]
  (fn []
    (let [rows (:sample-data @app)
          names (:sample-keys @app)]
      [:table.table
        (if (> (count rows) 0)
          [:thead
            [:tr
              (for [nam names]
                ^{:key nam}
                [:th nam])]])
        [:tbody
          (for [row rows]
            ^{:key row}
            [:tr
              (for [nam names]
                ^{:key (str nam row)}
                [:td (str (nam row))])])]])))

(defn update-sample [app counter]
  (let [sample-page (+ (:sample-page app) counter)
        max-sample (:max-sample app)
        sample-data (take max-sample (drop (* sample-page max-sample) (:data app)))]
    (assoc app :sample-page sample-page :sample-data sample-data)))

(defn home-page []
  [:div.container
    [:div.row
      [:h4.section-head
        [:span "Upload Any Data (e.g CSV, Excel, JSON)"]]
      [uploadarea]
      [:label "load with header? "
        [:input {:type "checkbox"
                 :checked (:head? @app)
                 :on-change #(swap! app update :head? not)}]]
      [:h4.section-head
        [:span "Template"]
        [:span 
             [:a {:href "https://mustache.github.io/mustache.5.html" :self "_blank"} "Syntax"]]]
      [:div.string-template-wrap
        [:textarea.string-template
          {:on-change #(do (swap! app assoc :template-string (-> % .-target .-value) :csv-status :not-ready))
           :placeholder (:template-string-sample @app)
           :value (:template-string @app)}]]
     [:hr]
     [:div.row
       [:div.output.col-lg-10
         {:class (if (:data-section-close? @app) "col-lg-10" "col-lg-12")}
         [:h4.section-head
           [:span "Output"]
           (condp = (:csv-status @app)
             :ready
             [:a
               {:href (:data-uri @app)
                :download "export.txt"
                :title "Export all output"}
               [:i.fa.fa-download]]
             :processing
             [:a "Processing"]
             :not-ready
             [:a {:href "#" :on-click #(csv-data app)} "Export"])]
         [output-table app]]
       [:div.data
         {:class (if (:data-section-close? @app) "col-lg-2" "col-lg-12")}
         [:h4.section-head
           [:span (str "Data (" (count (:data @app)) ")")]
           [:span
             (when-not (:data-section-close? @app)
               [:a {:href "/#/"
                    :on-click #(swap! app update-sample -1)}
                 [:i.fa.fa-chevron-left]])
             [:span (str " [" (inc (:sample-page @app)) "] ")]
             (when-not (:data-section-close? @app)
               [:a
                   {:href "/#/"
                    :on-click #(swap! app update-sample 1)}
                 [:i.fa.fa-chevron-right]])
             [:a.some-space
                 {:href "/#/"
                  :on-click #(swap! app update :data-section-close? not)}
               [:i.fa
                 {:class (if (:data-section-close? @app) "fa-plus-square-o" "fa-minus-square-o")}]]]]
         (if (:data-section-close? @app)
           [:ul.field-list
             (for [[nam val] (-> @app :data first)]
               ^{:key (str "{{" (name nam) "}}")}
               [:li (str "{{" (name nam) "}}")])]
           [data-table app])]]]])

(def pages
  {:home #'home-page})

(defn page []
  [(pages (session/get :page))])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (session/put! :page :home))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
        (events/listen
          HistoryEventType/NAVIGATE
          (fn [event]
              (secretary/dispatch! (.-token event))))
        (.setEnabled true)))

;; -------------------------
;; Initialize app

(defn mount-components []
  (r/render [#'page] (.getElementById js/document "app")))

(defn init! []
  (load-interceptors!)
  (hook-browser-navigation!)
  (mount-components))
