// Compiled by ClojureScript 1.9.93 {}
goog.provide('table_tmpl.ajax');
goog.require('cljs.core');
goog.require('ajax.core');
table_tmpl.ajax.default_headers = (function table_tmpl$ajax$default_headers(request){
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),(function (p1__16611_SHARP_){
return [cljs.core.str(context),cljs.core.str(p1__16611_SHARP_)].join('');
})),new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__16612_SHARP_){
return cljs.core.merge.call(null,p1__16612_SHARP_,new cljs.core.PersistentArrayMap(null, 2, ["Accept","application/transit+json","x-csrf-token",csrfToken], null));
}));
});
table_tmpl.ajax.load_interceptors_BANG_ = (function table_tmpl$ajax$load_interceptors_BANG_(){
return cljs.core.swap_BANG_.call(null,ajax.core.default_interceptors,cljs.core.conj,ajax.core.to_interceptor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default headers",new cljs.core.Keyword(null,"request","request",1772954723),table_tmpl.ajax.default_headers], null)));
});
