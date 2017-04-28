// Compiled by ClojureScript 1.9.93 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__13461,handler){
var map__13462 = p__13461;
var map__13462__$1 = ((((!((map__13462 == null)))?((((map__13462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13462):map__13462);
var uri = cljs.core.get.call(null,map__13462__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__13462__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__13462__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__13462__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__13462__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__13462__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__13462__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__13462,map__13462__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__13460_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__13460_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__13462,map__13462__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___13474 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___13474)){
var response_type_13475 = temp__4657__auto___13474;
this$__$1.responseType = cljs.core.name.call(null,response_type_13475);
} else {
}

var seq__13464_13476 = cljs.core.seq.call(null,headers);
var chunk__13465_13477 = null;
var count__13466_13478 = (0);
var i__13467_13479 = (0);
while(true){
if((i__13467_13479 < count__13466_13478)){
var vec__13468_13480 = cljs.core._nth.call(null,chunk__13465_13477,i__13467_13479);
var k_13481 = cljs.core.nth.call(null,vec__13468_13480,(0),null);
var v_13482 = cljs.core.nth.call(null,vec__13468_13480,(1),null);
this$__$1.setRequestHeader(k_13481,v_13482);

var G__13483 = seq__13464_13476;
var G__13484 = chunk__13465_13477;
var G__13485 = count__13466_13478;
var G__13486 = (i__13467_13479 + (1));
seq__13464_13476 = G__13483;
chunk__13465_13477 = G__13484;
count__13466_13478 = G__13485;
i__13467_13479 = G__13486;
continue;
} else {
var temp__4657__auto___13487 = cljs.core.seq.call(null,seq__13464_13476);
if(temp__4657__auto___13487){
var seq__13464_13488__$1 = temp__4657__auto___13487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13464_13488__$1)){
var c__6870__auto___13489 = cljs.core.chunk_first.call(null,seq__13464_13488__$1);
var G__13490 = cljs.core.chunk_rest.call(null,seq__13464_13488__$1);
var G__13491 = c__6870__auto___13489;
var G__13492 = cljs.core.count.call(null,c__6870__auto___13489);
var G__13493 = (0);
seq__13464_13476 = G__13490;
chunk__13465_13477 = G__13491;
count__13466_13478 = G__13492;
i__13467_13479 = G__13493;
continue;
} else {
var vec__13471_13494 = cljs.core.first.call(null,seq__13464_13488__$1);
var k_13495 = cljs.core.nth.call(null,vec__13471_13494,(0),null);
var v_13496 = cljs.core.nth.call(null,vec__13471_13494,(1),null);
this$__$1.setRequestHeader(k_13495,v_13496);

var G__13497 = cljs.core.next.call(null,seq__13464_13488__$1);
var G__13498 = null;
var G__13499 = (0);
var G__13500 = (0);
seq__13464_13476 = G__13497;
chunk__13465_13477 = G__13498;
count__13466_13478 = G__13499;
i__13467_13479 = G__13500;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6059__auto__ = body;
if(cljs.core.truth_(or__6059__auto__)){
return or__6059__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});
