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

(def app
  (r/atom
      {:data [{:col1 "table_name" :col2 123.2 :col3 (js/Date.)} {:col1 "table_name" :col2 28 :col3 (js/Date.)}]
       :template-string-sample "your template string like: select * from {{col1}} where price = {{col2}} and created_date = '{{#date}}col3|MM-DD-YYYY{{/date}}';"
       :template-string "select * from {{col1}} where price = {{col2}} and created_date = '{{#date}}col3|MM-DD-YYYY{{/date}}';"
       :max-sample-col 1
       :max-sample 3
       :sample-page 0
       :uploading? false
       :head? true
       :data-section-close? true}))

(defn date-format []
  (this-as this
    (fn [text render]
      (let [[field fmt] (clojure.string/split text #"\|")
            val (aget this field)]
        (.format (js/moment. val) fmt)))))

(defn csv-data [all]
  (let [{:keys [template-string data data-uri]} @all
        csv-str (clojure.string/join
                  "\n"
                  (map
                    #(js/Mustache.render template-string (clj->js (merge % {:date date-format})))
                    data))
        blob (js/Blob. #js [csv-str] #js {:type "text/plain"})]
    (.revokeObjectURL js/window.URL data-uri)
    (swap! all assoc :data-uri (.createObjectURL js/window.URL blob))))

(defn convert-file [form]
  (swap! app assoc :uploading? true)
  (POST (str "/api/any2json?head=" (:head? @app))
        {:body (js/FormData. form)
         :handler #(do (swap! app assoc :data % :uploading? false)
                       (csv-data app))
         :error-handler #(swap! app assoc :uploading? false)}))

(defn nav-link [uri title page collapsed?]
  [:li.nav-item
   {:class (when (= page (session/get :page)) "active")}
   [:a.nav-link
    {:href uri
     :on-click #(reset! collapsed? true)} title]])

(defn navbar []
  (let [collapsed? (r/atom true)]
    (fn []
      [:nav.navbar.navbar-light.bg-faded
       [:button.navbar-toggler.hidden-sm-up
        {:on-click #(swap! collapsed? not)} "☰"]
       [:div.collapse.navbar-toggleable-xs
        (when-not @collapsed? {:class "in"})
        [:a.navbar-brand {:href "#/"} "Table Templating"]
        [:ul.nav.navbar-nav
         [nav-link "#/" "Home" :home collapsed?]]]])))

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
        [:div.spinner
          [:div.rect1]
          [:div.rect2]
          [:div.rect3]
          [:div.rect4]]])))

(defn output-table [app]
  (fn []
    (let [rows (:data @app)
          {:keys [template-type template-string]} @app]
      [:table.table
        (if (and (> (count rows) 0) (map? (first rows)))
          [:thead
            [:tr
              (doall
                (for [[nam val] (take (:max-sample-col @app) (first rows))]
                  ^{:key nam}
                  [:th.sample-col nam])
                [:th {:style {:width "90%"}} "Output"])]])
        [:tbody
          (doall
            (for [row (take (:max-sample @app) (drop (* (:sample-page @app) (:max-sample @app)) rows))]
              ^{:key row}
              [:tr
                (for [[nam val] (take (:max-sample-col @app) row)]
                  ^{:key val}
                  [:td.sample-col
                    (cond
                      (string? val)
                      val
                      :default (str val))])
                [:td
                  [:pre
                    (js/Mustache.render template-string (clj->js (merge row {:date date-format})))]]]))]])))

(defn data-table [app]
  (fn []
    (let [rows (:data @app)]
      [:table.table
        (if (and (> (count rows) 0) (map? (first rows)))
          [:thead
            [:tr
              (for [[nam val] (take 12 (first rows))]
                ^{:key nam}
                [:th nam])]])
        [:tbody
          (for [row (take (:max-sample @app) (drop (* (:sample-page @app) (:max-sample @app)) rows))]
            ^{:key row}
            [:tr
              (for [[nam val] (take 12 row)]
                ^{:key val}
                [:td
                  (cond
                    (string? val)
                    val
                    :default (str val))])])]])))

(defn home-page []
  [:div.container
    [:div.row
      [:h4.section-head
        [:span "Upload Any Data in CSV Excel JSON Format"]]
      [uploadarea]
      [:label "load with header? "
        [:input {:type "checkbox"
                 :checked (:head? @app)
                 :on-change #(swap! app update :head? not)}]]
      [:h4.section-head
        [:span "Template"]]
      [:div.string-template-wrap
        [:textarea.string-template
          {:on-change #(do (swap! app assoc :template-string (-> % .-target .-value))
                           (csv-data app))
           :placeholder (:template-string-sample @app)
           :value (:template-string @app)}]]
     [:hr]
     [:div.row
       [:div.output.col-lg-10
         {:class (if (:data-section-close? @app) "col-lg-10" "col-lg-12")}
         [:h4.section-head
           [:span "Output"]
           [:a
             {:href (:data-uri @app)
              :download "export.txt"
              :title "Export all output"}
             [:i.fa.fa-download]]]
         [output-table app]]
       [:div.data
         {:class (if (:data-section-close? @app) "col-lg-2" "col-lg-12")}
         [:h4.section-head
           [:span (str "Data (" (count (:data @app)) ")")]
           [:span
             (when-not (:data-section-close? @app)
               [:a {:href "/#/"
                    :on-click #(swap! app update :sample-page dec)}
                 [:i.fa.fa-chevron-left]])
             [:span (str " [" (inc (:sample-page @app)) "] ")]
             (when-not (:data-section-close? @app)
               [:a
                   {:href "/#/"
                    :on-click #(swap! app update :sample-page inc)}
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




;(defn home-page []
;  [:div.container
;   [:div.jumbotron
;    [:h1 "Welcome to table-tmpl"]
;    [:p "Time to start building your site!"]
;    [:p [:a.btn.btn-primary.btn-lg {:href "http://luminusweb.net"} "Learn more »"]]]
;   [:div.row
;    [:div.col-md-12
;     [:h2 "Welcome to ClojureScript"]]]
;   (when-let [docs (session/get :docs)]
;     [:div.row
;      [:div.col-md-12
;       [:div {:dangerouslySetInnerHTML
;              {:__html (md->html docs)}}]]])])

(def pages
  {:home #'home-page
   :about #'home-page})

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
(defn fetch-docs! []
  (GET (str js/context "/docs") {:handler #(session/put! :docs %)}))

(defn mount-components []
  (r/render [#'navbar] (.getElementById js/document "navbar"))
  (r/render [#'page] (.getElementById js/document "app")))

(defn init! []
  (load-interceptors!)
  (fetch-docs!)
  (hook-browser-navigation!)
  (mount-components))
