// Compiled by ClojureScript 1.9.93 {}
goog.provide('table_tmpl.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('markdown.core');
goog.require('goog.history.EventType');
goog.require('reagent.session');
goog.require('table_tmpl.ajax');
goog.require('reagent.core');
goog.require('goog.History');
goog.require('goog.events');
table_tmpl.core.app = reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"template-string-sample","template-string-sample",-1726791291),new cljs.core.Keyword(null,"uploading?","uploading?",316182892),new cljs.core.Keyword(null,"head?","head?",-736487119),new cljs.core.Keyword(null,"sample-page","sample-page",-857184941),new cljs.core.Keyword(null,"max-sample","max-sample",-291634089),new cljs.core.Keyword(null,"template-string","template-string",-2136089705),new cljs.core.Keyword(null,"data-section-close?","data-section-close?",-366350371),new cljs.core.Keyword(null,"max-sample-col","max-sample-col",-1536241985),new cljs.core.Keyword(null,"data","data",-232669377)],["your template string like: select * from {{col1}} where price = {{col2}} and created_date = '{{#date}}col3|MM-DD-YYYY{{/date}}';",false,true,(0),(3),"select * from {{col1}} where price = {{col2}} and created_date = '{{#date}}col3|MM-DD-YYYY{{/date}}';",true,(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"col1","col1",-30021953),"table_name",new cljs.core.Keyword(null,"col2","col2",1353393028),123.2,new cljs.core.Keyword(null,"col3","col3",59480205),(new Date())], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"col1","col1",-30021953),"table_name",new cljs.core.Keyword(null,"col2","col2",1353393028),(28),new cljs.core.Keyword(null,"col3","col3",59480205),(new Date())], null)], null)]));
table_tmpl.core.date_format = (function table_tmpl$core$date_format(){
var this$ = this;
return ((function (this$){
return (function (text,render){
var vec__11694 = clojure.string.split.call(null,text,/\|/);
var field = cljs.core.nth.call(null,vec__11694,(0),null);
var fmt = cljs.core.nth.call(null,vec__11694,(1),null);
var val = (this$[field]);
return (new moment(val)).format(fmt);
});
;})(this$))
});
table_tmpl.core.csv_data = (function table_tmpl$core$csv_data(all){
var map__11700 = cljs.core.deref.call(null,all);
var map__11700__$1 = ((((!((map__11700 == null)))?((((map__11700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11700):map__11700);
var template_string = cljs.core.get.call(null,map__11700__$1,new cljs.core.Keyword(null,"template-string","template-string",-2136089705));
var data = cljs.core.get.call(null,map__11700__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var data_uri = cljs.core.get.call(null,map__11700__$1,new cljs.core.Keyword(null,"data-uri","data-uri",1087820220));
var csv_str = clojure.string.join.call(null,"\n",cljs.core.map.call(null,((function (map__11700,map__11700__$1,template_string,data,data_uri){
return (function (p1__11697_SHARP_){
return Mustache.render(template_string,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,p1__11697_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"date","date",-1463434462),table_tmpl.core.date_format], null))));
});})(map__11700,map__11700__$1,template_string,data,data_uri))
,data));
var blob = (new Blob([csv_str],{"type": "text/plain"}));
window.URL.revokeObjectURL(data_uri);

return cljs.core.swap_BANG_.call(null,all,cljs.core.assoc,new cljs.core.Keyword(null,"data-uri","data-uri",1087820220),window.URL.createObjectURL(blob));
});
table_tmpl.core.convert_file = (function table_tmpl$core$convert_file(form){
cljs.core.swap_BANG_.call(null,table_tmpl.core.app,cljs.core.assoc,new cljs.core.Keyword(null,"uploading?","uploading?",316182892),true);

return ajax.core.POST.call(null,[cljs.core.str("/api/any2json?head="),cljs.core.str(new cljs.core.Keyword(null,"head?","head?",-736487119).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_tmpl.core.app)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),(new FormData(form)),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__11702_SHARP_){
cljs.core.swap_BANG_.call(null,table_tmpl.core.app,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),p1__11702_SHARP_,new cljs.core.Keyword(null,"uploading?","uploading?",316182892),false);

return table_tmpl.core.csv_data.call(null,table_tmpl.core.app);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return cljs.core.swap_BANG_.call(null,table_tmpl.core.app,cljs.core.assoc,new cljs.core.Keyword(null,"uploading?","uploading?",316182892),false);
})], null));
});
table_tmpl.core.nav_link = (function table_tmpl$core$nav_link(uri,title,page,collapsed_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,page,reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),uri,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,collapsed_QMARK_,true);
})], null),title], null)], null);
});
table_tmpl.core.navbar = (function table_tmpl$core$navbar(){
var collapsed_QMARK_ = reagent.core.atom.call(null,true);
return ((function (collapsed_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar.navbar-light.bg-faded","nav.navbar.navbar-light.bg-faded",244269307),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.navbar-toggler.hidden-sm-up","button.navbar-toggler.hidden-sm-up",-398271905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (collapsed_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,collapsed_QMARK_,cljs.core.not);
});})(collapsed_QMARK_))
], null),"\u2630"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.collapse.navbar-toggleable-xs","div.collapse.navbar-toggleable-xs",-474131623),(cljs.core.truth_(cljs.core.deref.call(null,collapsed_QMARK_))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"in"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"Table Templating"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",1805559761)], null)], null)], null);
});
;})(collapsed_QMARK_))
});
table_tmpl.core.spinner = (function table_tmpl$core$spinner(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spinner","div.spinner",-1989566624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rect1","div.rect1",1412522864)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rect2","div.rect2",-1080337538)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rect3","div.rect3",-53603390)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rect4","div.rect4",-1156492781)], null)], null);
});
table_tmpl.core.uploadarea = (function table_tmpl$core$uploadarea(){
var drag_QMARK_ = reagent.core.atom.call(null,false);
return ((function (drag_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form#inputform","form#inputform",-1193071480),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-dragover","on-dragover",2008175133),((function (drag_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,drag_QMARK_,true);
});})(drag_QMARK_))
,new cljs.core.Keyword(null,"on-drag","on-drag",-69159091),((function (drag_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,drag_QMARK_,true);
});})(drag_QMARK_))
,new cljs.core.Keyword(null,"on-dragenter","on-dragenter",-317732928),((function (drag_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,drag_QMARK_,true);
});})(drag_QMARK_))
,new cljs.core.Keyword(null,"on-dragend","on-dragend",-1728592540),((function (drag_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,drag_QMARK_,false);
});})(drag_QMARK_))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (drag_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,drag_QMARK_,false);
});})(drag_QMARK_))
,new cljs.core.Keyword(null,"on-dragleave","on-dragleave",-1803324433),((function (drag_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,drag_QMARK_,cljs.core.assoc,new cljs.core.Keyword(null,"dragfile?","dragfile?",-1648539988),false);
});})(drag_QMARK_))
,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"uploading?","uploading?",316182892).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_tmpl.core.app)))?"uploading":null)),cljs.core.str(" "),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,drag_QMARK_))?"dragover":null))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uploadarea","div.uploadarea",973857355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"name","name",1843675177),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (drag_QMARK_){
return (function (){
return table_tmpl.core.convert_file.call(null,document.getElementById("inputform"));
});})(drag_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_tmpl.core.spinner], null)], null);
});
;})(drag_QMARK_))
});
table_tmpl.core.output_table = (function table_tmpl$core$output_table(app){
return (function (){
var rows = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app));
var map__11789 = cljs.core.deref.call(null,app);
var map__11789__$1 = ((((!((map__11789 == null)))?((((map__11789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11789):map__11789);
var template_type = cljs.core.get.call(null,map__11789__$1,new cljs.core.Keyword(null,"template-type","template-type",-172610993));
var template_string = cljs.core.get.call(null,map__11789__$1,new cljs.core.Keyword(null,"template-string","template-string",-2136089705));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),((((cljs.core.count.call(null,rows) > (0))) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,rows))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.call(null,(function (){var iter__6839__auto__ = ((function (rows,map__11789,map__11789__$1,template_type,template_string){
return (function table_tmpl$core$output_table_$_iter__11791(s__11792){
return (new cljs.core.LazySeq(null,((function (rows,map__11789,map__11789__$1,template_type,template_string){
return (function (){
var s__11792__$1 = s__11792;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11792__$1);
if(temp__4657__auto__){
var s__11792__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11792__$2)){
var c__6837__auto__ = cljs.core.chunk_first.call(null,s__11792__$2);
var size__6838__auto__ = cljs.core.count.call(null,c__6837__auto__);
var b__11794 = cljs.core.chunk_buffer.call(null,size__6838__auto__);
if((function (){var i__11793 = (0);
while(true){
if((i__11793 < size__6838__auto__)){
var vec__11801 = cljs.core._nth.call(null,c__6837__auto__,i__11793);
var nam = cljs.core.nth.call(null,vec__11801,(0),null);
var val = cljs.core.nth.call(null,vec__11801,(1),null);
cljs.core.chunk_append.call(null,b__11794,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.sample-col","th.sample-col",-1455555221),nam], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nam], null)));

var G__11875 = (i__11793 + (1));
i__11793 = G__11875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11794),table_tmpl$core$output_table_$_iter__11791.call(null,cljs.core.chunk_rest.call(null,s__11792__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11794),null);
}
} else {
var vec__11804 = cljs.core.first.call(null,s__11792__$2);
var nam = cljs.core.nth.call(null,vec__11804,(0),null);
var val = cljs.core.nth.call(null,vec__11804,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.sample-col","th.sample-col",-1455555221),nam], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nam], null)),table_tmpl$core$output_table_$_iter__11791.call(null,cljs.core.rest.call(null,s__11792__$2)));
}
} else {
return null;
}
break;
}
});})(rows,map__11789,map__11789__$1,template_type,template_string))
,null,null));
});})(rows,map__11789,map__11789__$1,template_type,template_string))
;
return iter__6839__auto__.call(null,cljs.core.take.call(null,new cljs.core.Keyword(null,"max-sample-col","max-sample-col",-1536241985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)),cljs.core.first.call(null,rows)));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null),"Output"], null))], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,(function (){var iter__6839__auto__ = ((function (rows,map__11789,map__11789__$1,template_type,template_string){
return (function table_tmpl$core$output_table_$_iter__11807(s__11808){
return (new cljs.core.LazySeq(null,((function (rows,map__11789,map__11789__$1,template_type,template_string){
return (function (){
var s__11808__$1 = s__11808;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11808__$1);
if(temp__4657__auto__){
var s__11808__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11808__$2)){
var c__6837__auto__ = cljs.core.chunk_first.call(null,s__11808__$2);
var size__6838__auto__ = cljs.core.count.call(null,c__6837__auto__);
var b__11810 = cljs.core.chunk_buffer.call(null,size__6838__auto__);
if((function (){var i__11809 = (0);
while(true){
if((i__11809 < size__6838__auto__)){
var row = cljs.core._nth.call(null,c__6837__auto__,i__11809);
cljs.core.chunk_append.call(null,b__11810,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__6839__auto__ = ((function (i__11809,row,c__6837__auto__,size__6838__auto__,b__11810,s__11808__$2,temp__4657__auto__,rows,map__11789,map__11789__$1,template_type,template_string){
return (function table_tmpl$core$output_table_$_iter__11807_$_iter__11843(s__11844){
return (new cljs.core.LazySeq(null,((function (i__11809,row,c__6837__auto__,size__6838__auto__,b__11810,s__11808__$2,temp__4657__auto__,rows,map__11789,map__11789__$1,template_type,template_string){
return (function (){
var s__11844__$1 = s__11844;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__11844__$1);
if(temp__4657__auto____$1){
var s__11844__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11844__$2)){
var c__6837__auto____$1 = cljs.core.chunk_first.call(null,s__11844__$2);
var size__6838__auto____$1 = cljs.core.count.call(null,c__6837__auto____$1);
var b__11846 = cljs.core.chunk_buffer.call(null,size__6838__auto____$1);
if((function (){var i__11845 = (0);
while(true){
if((i__11845 < size__6838__auto____$1)){
var vec__11853 = cljs.core._nth.call(null,c__6837__auto____$1,i__11845);
var nam = cljs.core.nth.call(null,vec__11853,(0),null);
var val = cljs.core.nth.call(null,vec__11853,(1),null);
cljs.core.chunk_append.call(null,b__11846,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.sample-col","td.sample-col",-1873752889),((typeof val === 'string')?val:[cljs.core.str(val)].join('')
)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),val], null)));

var G__11876 = (i__11845 + (1));
i__11845 = G__11876;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11846),table_tmpl$core$output_table_$_iter__11807_$_iter__11843.call(null,cljs.core.chunk_rest.call(null,s__11844__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11846),null);
}
} else {
var vec__11856 = cljs.core.first.call(null,s__11844__$2);
var nam = cljs.core.nth.call(null,vec__11856,(0),null);
var val = cljs.core.nth.call(null,vec__11856,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.sample-col","td.sample-col",-1873752889),((typeof val === 'string')?val:[cljs.core.str(val)].join('')
)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),val], null)),table_tmpl$core$output_table_$_iter__11807_$_iter__11843.call(null,cljs.core.rest.call(null,s__11844__$2)));
}
} else {
return null;
}
break;
}
});})(i__11809,row,c__6837__auto__,size__6838__auto__,b__11810,s__11808__$2,temp__4657__auto__,rows,map__11789,map__11789__$1,template_type,template_string))
,null,null));
});})(i__11809,row,c__6837__auto__,size__6838__auto__,b__11810,s__11808__$2,temp__4657__auto__,rows,map__11789,map__11789__$1,template_type,template_string))
;
return iter__6839__auto__.call(null,cljs.core.take.call(null,new cljs.core.Keyword(null,"max-sample-col","max-sample-col",-1536241985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)),row));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),Mustache.render(template_string,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"date","date",-1463434462),table_tmpl.core.date_format], null))))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row], null)));

var G__11877 = (i__11809 + (1));
i__11809 = G__11877;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11810),table_tmpl$core$output_table_$_iter__11807.call(null,cljs.core.chunk_rest.call(null,s__11808__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11810),null);
}
} else {
var row = cljs.core.first.call(null,s__11808__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__6839__auto__ = ((function (row,s__11808__$2,temp__4657__auto__,rows,map__11789,map__11789__$1,template_type,template_string){
return (function table_tmpl$core$output_table_$_iter__11807_$_iter__11859(s__11860){
return (new cljs.core.LazySeq(null,((function (row,s__11808__$2,temp__4657__auto__,rows,map__11789,map__11789__$1,template_type,template_string){
return (function (){
var s__11860__$1 = s__11860;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__11860__$1);
if(temp__4657__auto____$1){
var s__11860__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11860__$2)){
var c__6837__auto__ = cljs.core.chunk_first.call(null,s__11860__$2);
var size__6838__auto__ = cljs.core.count.call(null,c__6837__auto__);
var b__11862 = cljs.core.chunk_buffer.call(null,size__6838__auto__);
if((function (){var i__11861 = (0);
while(true){
if((i__11861 < size__6838__auto__)){
var vec__11869 = cljs.core._nth.call(null,c__6837__auto__,i__11861);
var nam = cljs.core.nth.call(null,vec__11869,(0),null);
var val = cljs.core.nth.call(null,vec__11869,(1),null);
cljs.core.chunk_append.call(null,b__11862,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.sample-col","td.sample-col",-1873752889),((typeof val === 'string')?val:[cljs.core.str(val)].join('')
)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),val], null)));

var G__11878 = (i__11861 + (1));
i__11861 = G__11878;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11862),table_tmpl$core$output_table_$_iter__11807_$_iter__11859.call(null,cljs.core.chunk_rest.call(null,s__11860__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11862),null);
}
} else {
var vec__11872 = cljs.core.first.call(null,s__11860__$2);
var nam = cljs.core.nth.call(null,vec__11872,(0),null);
var val = cljs.core.nth.call(null,vec__11872,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.sample-col","td.sample-col",-1873752889),((typeof val === 'string')?val:[cljs.core.str(val)].join('')
)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),val], null)),table_tmpl$core$output_table_$_iter__11807_$_iter__11859.call(null,cljs.core.rest.call(null,s__11860__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__11808__$2,temp__4657__auto__,rows,map__11789,map__11789__$1,template_type,template_string))
,null,null));
});})(row,s__11808__$2,temp__4657__auto__,rows,map__11789,map__11789__$1,template_type,template_string))
;
return iter__6839__auto__.call(null,cljs.core.take.call(null,new cljs.core.Keyword(null,"max-sample-col","max-sample-col",-1536241985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)),row));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),Mustache.render(template_string,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"date","date",-1463434462),table_tmpl.core.date_format], null))))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row], null)),table_tmpl$core$output_table_$_iter__11807.call(null,cljs.core.rest.call(null,s__11808__$2)));
}
} else {
return null;
}
break;
}
});})(rows,map__11789,map__11789__$1,template_type,template_string))
,null,null));
});})(rows,map__11789,map__11789__$1,template_type,template_string))
;
return iter__6839__auto__.call(null,cljs.core.take.call(null,new cljs.core.Keyword(null,"max-sample","max-sample",-291634089).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)),cljs.core.drop.call(null,(new cljs.core.Keyword(null,"sample-page","sample-page",-857184941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)) * new cljs.core.Keyword(null,"max-sample","max-sample",-291634089).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app))),rows)));
})())], null)], null);
});
});
table_tmpl.core.data_table = (function table_tmpl$core$data_table(app){
return (function (){
var rows = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),((((cljs.core.count.call(null,rows) > (0))) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,rows))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__6839__auto__ = ((function (rows){
return (function table_tmpl$core$data_table_$_iter__11963(s__11964){
return (new cljs.core.LazySeq(null,((function (rows){
return (function (){
var s__11964__$1 = s__11964;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11964__$1);
if(temp__4657__auto__){
var s__11964__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11964__$2)){
var c__6837__auto__ = cljs.core.chunk_first.call(null,s__11964__$2);
var size__6838__auto__ = cljs.core.count.call(null,c__6837__auto__);
var b__11966 = cljs.core.chunk_buffer.call(null,size__6838__auto__);
if((function (){var i__11965 = (0);
while(true){
if((i__11965 < size__6838__auto__)){
var vec__11973 = cljs.core._nth.call(null,c__6837__auto__,i__11965);
var nam = cljs.core.nth.call(null,vec__11973,(0),null);
var val = cljs.core.nth.call(null,vec__11973,(1),null);
cljs.core.chunk_append.call(null,b__11966,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),nam], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nam], null)));

var G__12047 = (i__11965 + (1));
i__11965 = G__12047;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11966),table_tmpl$core$data_table_$_iter__11963.call(null,cljs.core.chunk_rest.call(null,s__11964__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11966),null);
}
} else {
var vec__11976 = cljs.core.first.call(null,s__11964__$2);
var nam = cljs.core.nth.call(null,vec__11976,(0),null);
var val = cljs.core.nth.call(null,vec__11976,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),nam], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),nam], null)),table_tmpl$core$data_table_$_iter__11963.call(null,cljs.core.rest.call(null,s__11964__$2)));
}
} else {
return null;
}
break;
}
});})(rows))
,null,null));
});})(rows))
;
return iter__6839__auto__.call(null,cljs.core.take.call(null,(12),cljs.core.first.call(null,rows)));
})()], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__6839__auto__ = ((function (rows){
return (function table_tmpl$core$data_table_$_iter__11979(s__11980){
return (new cljs.core.LazySeq(null,((function (rows){
return (function (){
var s__11980__$1 = s__11980;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11980__$1);
if(temp__4657__auto__){
var s__11980__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11980__$2)){
var c__6837__auto__ = cljs.core.chunk_first.call(null,s__11980__$2);
var size__6838__auto__ = cljs.core.count.call(null,c__6837__auto__);
var b__11982 = cljs.core.chunk_buffer.call(null,size__6838__auto__);
if((function (){var i__11981 = (0);
while(true){
if((i__11981 < size__6838__auto__)){
var row = cljs.core._nth.call(null,c__6837__auto__,i__11981);
cljs.core.chunk_append.call(null,b__11982,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__6839__auto__ = ((function (i__11981,row,c__6837__auto__,size__6838__auto__,b__11982,s__11980__$2,temp__4657__auto__,rows){
return (function table_tmpl$core$data_table_$_iter__11979_$_iter__12015(s__12016){
return (new cljs.core.LazySeq(null,((function (i__11981,row,c__6837__auto__,size__6838__auto__,b__11982,s__11980__$2,temp__4657__auto__,rows){
return (function (){
var s__12016__$1 = s__12016;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__12016__$1);
if(temp__4657__auto____$1){
var s__12016__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12016__$2)){
var c__6837__auto____$1 = cljs.core.chunk_first.call(null,s__12016__$2);
var size__6838__auto____$1 = cljs.core.count.call(null,c__6837__auto____$1);
var b__12018 = cljs.core.chunk_buffer.call(null,size__6838__auto____$1);
if((function (){var i__12017 = (0);
while(true){
if((i__12017 < size__6838__auto____$1)){
var vec__12025 = cljs.core._nth.call(null,c__6837__auto____$1,i__12017);
var nam = cljs.core.nth.call(null,vec__12025,(0),null);
var val = cljs.core.nth.call(null,vec__12025,(1),null);
cljs.core.chunk_append.call(null,b__12018,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((typeof val === 'string')?val:[cljs.core.str(val)].join('')
)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),val], null)));

var G__12048 = (i__12017 + (1));
i__12017 = G__12048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12018),table_tmpl$core$data_table_$_iter__11979_$_iter__12015.call(null,cljs.core.chunk_rest.call(null,s__12016__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12018),null);
}
} else {
var vec__12028 = cljs.core.first.call(null,s__12016__$2);
var nam = cljs.core.nth.call(null,vec__12028,(0),null);
var val = cljs.core.nth.call(null,vec__12028,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((typeof val === 'string')?val:[cljs.core.str(val)].join('')
)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),val], null)),table_tmpl$core$data_table_$_iter__11979_$_iter__12015.call(null,cljs.core.rest.call(null,s__12016__$2)));
}
} else {
return null;
}
break;
}
});})(i__11981,row,c__6837__auto__,size__6838__auto__,b__11982,s__11980__$2,temp__4657__auto__,rows))
,null,null));
});})(i__11981,row,c__6837__auto__,size__6838__auto__,b__11982,s__11980__$2,temp__4657__auto__,rows))
;
return iter__6839__auto__.call(null,cljs.core.take.call(null,(12),row));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row], null)));

var G__12049 = (i__11981 + (1));
i__11981 = G__12049;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11982),table_tmpl$core$data_table_$_iter__11979.call(null,cljs.core.chunk_rest.call(null,s__11980__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11982),null);
}
} else {
var row = cljs.core.first.call(null,s__11980__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__6839__auto__ = ((function (row,s__11980__$2,temp__4657__auto__,rows){
return (function table_tmpl$core$data_table_$_iter__11979_$_iter__12031(s__12032){
return (new cljs.core.LazySeq(null,((function (row,s__11980__$2,temp__4657__auto__,rows){
return (function (){
var s__12032__$1 = s__12032;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__12032__$1);
if(temp__4657__auto____$1){
var s__12032__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12032__$2)){
var c__6837__auto__ = cljs.core.chunk_first.call(null,s__12032__$2);
var size__6838__auto__ = cljs.core.count.call(null,c__6837__auto__);
var b__12034 = cljs.core.chunk_buffer.call(null,size__6838__auto__);
if((function (){var i__12033 = (0);
while(true){
if((i__12033 < size__6838__auto__)){
var vec__12041 = cljs.core._nth.call(null,c__6837__auto__,i__12033);
var nam = cljs.core.nth.call(null,vec__12041,(0),null);
var val = cljs.core.nth.call(null,vec__12041,(1),null);
cljs.core.chunk_append.call(null,b__12034,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((typeof val === 'string')?val:[cljs.core.str(val)].join('')
)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),val], null)));

var G__12050 = (i__12033 + (1));
i__12033 = G__12050;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12034),table_tmpl$core$data_table_$_iter__11979_$_iter__12031.call(null,cljs.core.chunk_rest.call(null,s__12032__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12034),null);
}
} else {
var vec__12044 = cljs.core.first.call(null,s__12032__$2);
var nam = cljs.core.nth.call(null,vec__12044,(0),null);
var val = cljs.core.nth.call(null,vec__12044,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((typeof val === 'string')?val:[cljs.core.str(val)].join('')
)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),val], null)),table_tmpl$core$data_table_$_iter__11979_$_iter__12031.call(null,cljs.core.rest.call(null,s__12032__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__11980__$2,temp__4657__auto__,rows))
,null,null));
});})(row,s__11980__$2,temp__4657__auto__,rows))
;
return iter__6839__auto__.call(null,cljs.core.take.call(null,(12),row));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row], null)),table_tmpl$core$data_table_$_iter__11979.call(null,cljs.core.rest.call(null,s__11980__$2)));
}
} else {
return null;
}
break;
}
});})(rows))
,null,null));
});})(rows))
;
return iter__6839__auto__.call(null,cljs.core.take.call(null,new cljs.core.Keyword(null,"max-sample","max-sample",-291634089).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)),cljs.core.drop.call(null,(new cljs.core.Keyword(null,"sample-page","sample-page",-857184941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)) * new cljs.core.Keyword(null,"max-sample","max-sample",-291634089).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app))),rows)));
})()], null)], null);
});
});
table_tmpl.core.home_page = (function table_tmpl$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.section-head","h4.section-head",-265971684),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Upload Any Data in CSV Excel JSON Format"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_tmpl.core.uploadarea], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"load with header? ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"head?","head?",-736487119).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_tmpl.core.app)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.call(null,table_tmpl.core.app,cljs.core.update,new cljs.core.Keyword(null,"head?","head?",-736487119),cljs.core.not);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.section-head","h4.section-head",-265971684),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Template"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.string-template-wrap","div.string-template-wrap",-1700726433),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.string-template","textarea.string-template",1045014671),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12051_SHARP_){
cljs.core.swap_BANG_.call(null,table_tmpl.core.app,cljs.core.assoc,new cljs.core.Keyword(null,"template-string","template-string",-2136089705),p1__12051_SHARP_.target.value);

return table_tmpl.core.csv_data.call(null,table_tmpl.core.app);
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"template-string-sample","template-string-sample",-1726791291).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_tmpl.core.app)),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"template-string","template-string",-2136089705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_tmpl.core.app))], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.output.col-lg-10","div.output.col-lg-10",-942884547),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"data-section-close?","data-section-close?",-366350371).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_tmpl.core.app)))?"col-lg-10":"col-lg-12")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.section-head","h4.section-head",-265971684),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Output"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"data-uri","data-uri",1087820220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_tmpl.core.app)),new cljs.core.Keyword(null,"download","download",-300081668),"export.txt",new cljs.core.Keyword(null,"title","title",636505583),"Export all output"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-download","i.fa.fa-download",-637194109)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_tmpl.core.output_table,table_tmpl.core.app], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.data","div.data",1292614281),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"data-section-close?","data-section-close?",-366350371).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_tmpl.core.app)))?"col-lg-2":"col-lg-12")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.section-head","h4.section-head",-265971684),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str("Data ("),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_tmpl.core.app)))),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(new cljs.core.Keyword(null,"data-section-close?","data-section-close?",-366350371).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_tmpl.core.app)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"/#/",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,table_tmpl.core.app,cljs.core.update,new cljs.core.Keyword(null,"sample-page","sample-page",-857184941),cljs.core.dec);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-chevron-left","i.fa.fa-chevron-left",-1827496633)], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str(" ["),cljs.core.str((new cljs.core.Keyword(null,"sample-page","sample-page",-857184941).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_tmpl.core.app)) + (1))),cljs.core.str("] ")].join('')], null),(cljs.core.truth_(new cljs.core.Keyword(null,"data-section-close?","data-section-close?",-366350371).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_tmpl.core.app)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"/#/",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,table_tmpl.core.app,cljs.core.update,new cljs.core.Keyword(null,"sample-page","sample-page",-857184941),cljs.core.inc);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-chevron-right","i.fa.fa-chevron-right",-1939934594)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.some-space","a.some-space",-1974217010),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"/#/",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,table_tmpl.core.app,cljs.core.update,new cljs.core.Keyword(null,"data-section-close?","data-section-close?",-366350371),cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa","i.fa",1579647453),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"data-section-close?","data-section-close?",-366350371).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_tmpl.core.app)))?"fa-plus-square-o":"fa-minus-square-o")], null)], null)], null)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"data-section-close?","data-section-close?",-366350371).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_tmpl.core.app)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.field-list","ul.field-list",1862502970),(function (){var iter__6839__auto__ = (function table_tmpl$core$home_page_$_iter__12068(s__12069){
return (new cljs.core.LazySeq(null,(function (){
var s__12069__$1 = s__12069;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12069__$1);
if(temp__4657__auto__){
var s__12069__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12069__$2)){
var c__6837__auto__ = cljs.core.chunk_first.call(null,s__12069__$2);
var size__6838__auto__ = cljs.core.count.call(null,c__6837__auto__);
var b__12071 = cljs.core.chunk_buffer.call(null,size__6838__auto__);
if((function (){var i__12070 = (0);
while(true){
if((i__12070 < size__6838__auto__)){
var vec__12078 = cljs.core._nth.call(null,c__6837__auto__,i__12070);
var nam = cljs.core.nth.call(null,vec__12078,(0),null);
var val = cljs.core.nth.call(null,vec__12078,(1),null);
cljs.core.chunk_append.call(null,b__12071,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str("{{"),cljs.core.str(cljs.core.name.call(null,nam)),cljs.core.str("}}")].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("{{"),cljs.core.str(cljs.core.name.call(null,nam)),cljs.core.str("}}")].join('')], null)));

var G__12084 = (i__12070 + (1));
i__12070 = G__12084;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12071),table_tmpl$core$home_page_$_iter__12068.call(null,cljs.core.chunk_rest.call(null,s__12069__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12071),null);
}
} else {
var vec__12081 = cljs.core.first.call(null,s__12069__$2);
var nam = cljs.core.nth.call(null,vec__12081,(0),null);
var val = cljs.core.nth.call(null,vec__12081,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str("{{"),cljs.core.str(cljs.core.name.call(null,nam)),cljs.core.str("}}")].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("{{"),cljs.core.str(cljs.core.name.call(null,nam)),cljs.core.str("}}")].join('')], null)),table_tmpl$core$home_page_$_iter__12068.call(null,cljs.core.rest.call(null,s__12069__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6839__auto__.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_tmpl.core.app))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_tmpl.core.data_table,table_tmpl.core.app], null))], null)], null)], null)], null);
});
table_tmpl.core.pages = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Var(function(){return table_tmpl.core.home_page;},new cljs.core.Symbol("table-tmpl.core","home-page","table-tmpl.core/home-page",-13633822,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"table-tmpl.core","table-tmpl.core",1916046746,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/kayulai/git/table-tmpl/src/cljs/table_tmpl/core.cljs",16,1,145,145,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(table_tmpl.core.home_page)?table_tmpl.core.home_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Var(function(){return table_tmpl.core.home_page;},new cljs.core.Symbol("table-tmpl.core","home-page","table-tmpl.core/home-page",-13633822,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"table-tmpl.core","table-tmpl.core",1916046746,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/kayulai/git/table-tmpl/src/cljs/table_tmpl/core.cljs",16,1,145,145,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(table_tmpl.core.home_page)?table_tmpl.core.home_page.cljs$lang$test:null)]))], null);
table_tmpl.core.page = (function table_tmpl$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_tmpl.core.pages.call(null,reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397)))], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__9594__auto___12090 = (function (params__9595__auto__){
if(cljs.core.map_QMARK_.call(null,params__9595__auto__)){
var map__12085 = params__9595__auto__;
var map__12085__$1 = ((((!((map__12085 == null)))?((((map__12085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12085):map__12085);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__9595__auto__)){
var vec__12087 = params__9595__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__9594__auto___12090);

table_tmpl.core.hook_browser_navigation_BANG_ = (function table_tmpl$core$hook_browser_navigation_BANG_(){
var G__12092 = (new goog.History());
goog.events.listen(G__12092,goog.history.EventType.NAVIGATE,((function (G__12092){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__12092))
);

G__12092.setEnabled(true);

return G__12092;
});
table_tmpl.core.fetch_docs_BANG_ = (function table_tmpl$core$fetch_docs_BANG_(){
return ajax.core.GET.call(null,[cljs.core.str(context),cljs.core.str("/docs")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__12093_SHARP_){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"docs","docs",-1974280502),p1__12093_SHARP_);
})], null));
});
table_tmpl.core.mount_components = (function table_tmpl$core$mount_components(){
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return table_tmpl.core.navbar;},new cljs.core.Symbol("table-tmpl.core","navbar","table-tmpl.core/navbar",-1771427111,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"table-tmpl.core","table-tmpl.core",1916046746,null),new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),"/Users/kayulai/git/table-tmpl/src/cljs/table_tmpl/core.cljs",13,1,59,59,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(table_tmpl.core.navbar)?table_tmpl.core.navbar.cljs$lang$test:null)]))], null),document.getElementById("navbar"));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return table_tmpl.core.page;},new cljs.core.Symbol("table-tmpl.core","page","table-tmpl.core/page",-944358673,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"table-tmpl.core","table-tmpl.core",1916046746,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"/Users/kayulai/git/table-tmpl/src/cljs/table_tmpl/core.cljs",11,1,224,224,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(table_tmpl.core.page)?table_tmpl.core.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
table_tmpl.core.init_BANG_ = (function table_tmpl$core$init_BANG_(){
table_tmpl.ajax.load_interceptors_BANG_.call(null);

table_tmpl.core.fetch_docs_BANG_.call(null);

table_tmpl.core.hook_browser_navigation_BANG_.call(null);

return table_tmpl.core.mount_components.call(null);
});
