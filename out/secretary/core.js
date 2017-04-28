// Compiled by ClojureScript 1.9.93 {}
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');

/**
 * @interface
 */
secretary.core.IRouteMatches = function(){};

secretary.core.route_matches = (function secretary$core$route_matches(this$,route){
if((!((this$ == null))) && (!((this$.secretary$core$IRouteMatches$route_matches$arity$2 == null)))){
return this$.secretary$core$IRouteMatches$route_matches$arity$2(this$,route);
} else {
var x__6722__auto__ = (((this$ == null))?null:this$);
var m__6723__auto__ = (secretary.core.route_matches[goog.typeOf(x__6722__auto__)]);
if(!((m__6723__auto__ == null))){
return m__6723__auto__.call(null,this$,route);
} else {
var m__6723__auto____$1 = (secretary.core.route_matches["_"]);
if(!((m__6723__auto____$1 == null))){
return m__6723__auto____$1.call(null,this$,route);
} else {
throw cljs.core.missing_protocol.call(null,"IRouteMatches.route-matches",this$);
}
}
}
});


/**
 * @interface
 */
secretary.core.IRouteValue = function(){};

secretary.core.route_value = (function secretary$core$route_value(this$){
if((!((this$ == null))) && (!((this$.secretary$core$IRouteValue$route_value$arity$1 == null)))){
return this$.secretary$core$IRouteValue$route_value$arity$1(this$);
} else {
var x__6722__auto__ = (((this$ == null))?null:this$);
var m__6723__auto__ = (secretary.core.route_value[goog.typeOf(x__6722__auto__)]);
if(!((m__6723__auto__ == null))){
return m__6723__auto__.call(null,this$);
} else {
var m__6723__auto____$1 = (secretary.core.route_value["_"]);
if(!((m__6723__auto____$1 == null))){
return m__6723__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRouteValue.route-value",this$);
}
}
}
});


/**
 * @interface
 */
secretary.core.IRenderRoute = function(){};

secretary.core.render_route = (function secretary$core$render_route(var_args){
var args16634 = [];
var len__7134__auto___16637 = arguments.length;
var i__7135__auto___16638 = (0);
while(true){
if((i__7135__auto___16638 < len__7134__auto___16637)){
args16634.push((arguments[i__7135__auto___16638]));

var G__16639 = (i__7135__auto___16638 + (1));
i__7135__auto___16638 = G__16639;
continue;
} else {
}
break;
}

var G__16636 = args16634.length;
switch (G__16636) {
case 1:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16634.length)].join('')));

}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.secretary$core$IRenderRoute$render_route$arity$1 == null)))){
return this$.secretary$core$IRenderRoute$render_route$arity$1(this$);
} else {
var x__6722__auto__ = (((this$ == null))?null:this$);
var m__6723__auto__ = (secretary.core.render_route[goog.typeOf(x__6722__auto__)]);
if(!((m__6723__auto__ == null))){
return m__6723__auto__.call(null,this$);
} else {
var m__6723__auto____$1 = (secretary.core.render_route["_"]);
if(!((m__6723__auto____$1 == null))){
return m__6723__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderRoute.render-route",this$);
}
}
}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$2 = (function (this$,params){
if((!((this$ == null))) && (!((this$.secretary$core$IRenderRoute$render_route$arity$2 == null)))){
return this$.secretary$core$IRenderRoute$render_route$arity$2(this$,params);
} else {
var x__6722__auto__ = (((this$ == null))?null:this$);
var m__6723__auto__ = (secretary.core.render_route[goog.typeOf(x__6722__auto__)]);
if(!((m__6723__auto__ == null))){
return m__6723__auto__.call(null,this$,params);
} else {
var m__6723__auto____$1 = (secretary.core.render_route["_"]);
if(!((m__6723__auto____$1 == null))){
return m__6723__auto____$1.call(null,this$,params);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderRoute.render-route",this$);
}
}
}
});

secretary.core.render_route.cljs$lang$maxFixedArity = 2;


secretary.core._STAR_config_STAR_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null));
/**
 * Gets a value for *config* at path.
 */
secretary.core.get_config = (function secretary$core$get_config(path){
var path__$1 = ((cljs.core.sequential_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.get_in.call(null,cljs.core.deref.call(null,secretary.core._STAR_config_STAR_),path__$1);
});
/**
 * Associates a value val for *config* at path.
 */
secretary.core.set_config_BANG_ = (function secretary$core$set_config_BANG_(path,val){
var path__$1 = ((cljs.core.sequential_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.swap_BANG_.call(null,secretary.core._STAR_config_STAR_,cljs.core.assoc_in,path__$1,val);
});
secretary.core.encode = encodeURIComponent;
if(typeof secretary.core.encode_pair !== 'undefined'){
} else {
/**
 * Given a key and a value return and encoded key-value pair.
 */
secretary.core.encode_pair = (function (){var method_table__6984__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6985__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6986__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6987__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6988__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"secretary.core","encode-pair"),((function (method_table__6984__auto__,prefer_table__6985__auto__,method_cache__6986__auto__,cached_hierarchy__6987__auto__,hierarchy__6988__auto__){
return (function (p__16641){
var vec__16642 = p__16641;
var k = cljs.core.nth.call(null,vec__16642,(0),null);
var v = cljs.core.nth.call(null,vec__16642,(1),null);
if((cljs.core.sequential_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v))){
return new cljs.core.Keyword("secretary.core","sequential","secretary.core/sequential",-347187207);
} else {
if((function (){var or__6059__auto__ = cljs.core.map_QMARK_.call(null,v);
if(or__6059__auto__){
return or__6059__auto__;
} else {
if(!((v == null))){
if(((v.cljs$lang$protocol_mask$partition0$ & (67108864))) || (v.cljs$core$IRecord$)){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,v);
}
}
})()){
return new cljs.core.Keyword("secretary.core","map","secretary.core/map",-31086646);
} else {
return null;
}
}
});})(method_table__6984__auto__,prefer_table__6985__auto__,method_cache__6986__auto__,cached_hierarchy__6987__auto__,hierarchy__6988__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__6988__auto__,method_table__6984__auto__,prefer_table__6985__auto__,method_cache__6986__auto__,cached_hierarchy__6987__auto__));
})();
}
secretary.core.key_index = (function secretary$core$key_index(var_args){
var args16647 = [];
var len__7134__auto___16650 = arguments.length;
var i__7135__auto___16651 = (0);
while(true){
if((i__7135__auto___16651 < len__7134__auto___16650)){
args16647.push((arguments[i__7135__auto___16651]));

var G__16652 = (i__7135__auto___16651 + (1));
i__7135__auto___16651 = G__16652;
continue;
} else {
}
break;
}

var G__16649 = args16647.length;
switch (G__16649) {
case 1:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16647.length)].join('')));

}
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$1 = (function (k){
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("[]")].join('');
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$2 = (function (k,index){
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("["),cljs.core.str(index),cljs.core.str("]")].join('');
});

secretary.core.key_index.cljs$lang$maxFixedArity = 2;

cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword("secretary.core","sequential","secretary.core/sequential",-347187207),(function (p__16654){
var vec__16655 = p__16654;
var k = cljs.core.nth.call(null,vec__16655,(0),null);
var v = cljs.core.nth.call(null,vec__16655,(1),null);
var encoded = cljs.core.map_indexed.call(null,((function (vec__16655,k,v){
return (function (i,x){
var pair = ((cljs.core.coll_QMARK_.call(null,x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k,i),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k),x], null));
return secretary.core.encode_pair.call(null,pair);
});})(vec__16655,k,v))
,v);
return clojure.string.join.call(null,"&",encoded);
}));
cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword("secretary.core","map","secretary.core/map",-31086646),(function (p__16658){
var vec__16659 = p__16658;
var k = cljs.core.nth.call(null,vec__16659,(0),null);
var v = cljs.core.nth.call(null,vec__16659,(1),null);
var encoded = cljs.core.map.call(null,((function (vec__16659,k,v){
return (function (p__16662){
var vec__16663 = p__16662;
var ik = cljs.core.nth.call(null,vec__16663,(0),null);
var iv = cljs.core.nth.call(null,vec__16663,(1),null);
return secretary.core.encode_pair.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k,cljs.core.name.call(null,ik)),iv], null));
});})(vec__16659,k,v))
,v);
return clojure.string.join.call(null,"&",encoded);
}));
cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__16666){
var vec__16667 = p__16666;
var k = cljs.core.nth.call(null,vec__16667,(0),null);
var v = cljs.core.nth.call(null,vec__16667,(1),null);
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(secretary.core.encode.call(null,[cljs.core.str(v)].join('')))].join('');
}));
/**
 * Convert a map of query parameters into url encoded string.
 */
secretary.core.encode_query_params = (function secretary$core$encode_query_params(query_params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,secretary.core.encode_pair,query_params));
});
/**
 * Like js/encodeURIComponent excepts ignore slashes.
 */
secretary.core.encode_uri = (function secretary$core$encode_uri(uri){
return clojure.string.join.call(null,"/",cljs.core.map.call(null,secretary.core.encode,clojure.string.split.call(null,uri,/\//)));
});
secretary.core.decode = decodeURIComponent;
/**
 * Parse a value from a serialized query-string key index. If the
 *   index value is empty 0 is returned, if it's a digit it returns the
 *   js/parseInt value, otherwise it returns the extracted index.
 */
secretary.core.parse_path = (function secretary$core$parse_path(path){
var index_re = /\[([^\]]*)\]*/;
var parts = cljs.core.re_seq.call(null,index_re,path);
return cljs.core.map.call(null,((function (index_re,parts){
return (function (p__16674){
var vec__16675 = p__16674;
var _ = cljs.core.nth.call(null,vec__16675,(0),null);
var part = cljs.core.nth.call(null,vec__16675,(1),null);
if(cljs.core.empty_QMARK_.call(null,part)){
return (0);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/\d+/,part))){
return parseInt(part);
} else {
return part;

}
}
});})(index_re,parts))
,parts);
});
/**
 * Return a key path for a serialized query-string entry.
 * 
 *   Ex.
 * 
 *  (key-parse "foo[][a][][b]")
 *  ;; => ("foo" 0 "a" 0 "b")
 *   
 */
secretary.core.key_parse = (function secretary$core$key_parse(k){
var re = /([^\[\]]+)((?:\[[^\]]*\])*)?/;
var vec__16681 = cljs.core.re_matches.call(null,re,k);
var _ = cljs.core.nth.call(null,vec__16681,(0),null);
var key = cljs.core.nth.call(null,vec__16681,(1),null);
var path = cljs.core.nth.call(null,vec__16681,(2),null);
var parsed_path = (cljs.core.truth_(path)?secretary.core.parse_path.call(null,path):null);
return cljs.core.cons.call(null,key,parsed_path);
});
/**
 * Like assoc-in but numbers in path create vectors instead of maps.
 * 
 *   Ex.
 * 
 *  (assoc-in-query-params {} ["foo" 0] 1)
 *  ;; => {"foo" [1]}
 * 
 *  (assoc-in-query-params {} ["foo" 0 "a"] 1)
 *  ;; => {"foo" [{"a" 1}]}
 *   
 */
secretary.core.assoc_in_query_params = (function secretary$core$assoc_in_query_params(m,path,v){
var heads = (function (xs){
return cljs.core.map_indexed.call(null,(function (i,_){
return cljs.core.take.call(null,(i + (1)),xs);
}),xs);
});
var hs = heads.call(null,path);
var m__$1 = cljs.core.reduce.call(null,((function (heads,hs){
return (function (m__$1,h){
if((typeof cljs.core.last.call(null,h) === 'number') && (!(cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,m__$1,cljs.core.butlast.call(null,h)))))){
return cljs.core.assoc_in.call(null,m__$1,cljs.core.butlast.call(null,h),cljs.core.PersistentVector.EMPTY);
} else {
return m__$1;
}
});})(heads,hs))
,m,hs);
if((cljs.core.last.call(null,path) === (0))){
return cljs.core.update_in.call(null,m__$1,cljs.core.butlast.call(null,path),cljs.core.conj,v);
} else {
return cljs.core.assoc_in.call(null,m__$1,path,v);
}
});
/**
 * Extract a map of query parameters from a query string.
 */
secretary.core.decode_query_params = (function secretary$core$decode_query_params(query_string){
var parts = clojure.string.split.call(null,query_string,/&/);
var params = cljs.core.reduce.call(null,((function (parts){
return (function (m,part){
var vec__16687 = clojure.string.split.call(null,part,/=/,(2));
var k = cljs.core.nth.call(null,vec__16687,(0),null);
var v = cljs.core.nth.call(null,vec__16687,(1),null);
return secretary.core.assoc_in_query_params.call(null,m,secretary.core.key_parse.call(null,k),secretary.core.decode.call(null,v));
});})(parts))
,cljs.core.PersistentArrayMap.EMPTY,parts);
var params__$1 = clojure.walk.keywordize_keys.call(null,params);
return params__$1;
});
/**
 * Like re-matches but result is a always vector. If re does not
 *   capture matches then it will return a vector of [m m] as if it had a
 *   single capture. Other wise it maintains consistent behavior with
 *   re-matches. 
 */
secretary.core.re_matches_STAR_ = (function secretary$core$re_matches_STAR_(re,s){
var ms = cljs.core.re_matches.call(null,re,s);
if(cljs.core.truth_(ms)){
if(cljs.core.sequential_QMARK_.call(null,ms)){
return ms;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms,ms], null);
}
} else {
return null;
}
});
secretary.core.re_escape_chars = cljs.core.set.call(null,"\\.*+|?()[]{}$^");
secretary.core.re_escape = (function secretary$core$re_escape(s){
return cljs.core.reduce.call(null,(function (s__$1,c){
if(cljs.core.truth_(secretary.core.re_escape_chars.call(null,c))){
return [cljs.core.str(s__$1),cljs.core.str("\\"),cljs.core.str(c)].join('');
} else {
return [cljs.core.str(s__$1),cljs.core.str(c)].join('');
}
}),"",s);
});
/**
 * Attempt to lex a single token from s with clauses. Each clause is a
 *   pair of [regexp action] where action is a function. regexp is
 *   expected to begin with ^ and contain a single capture. If the
 *   attempt is successful a vector of [s-without-token (action capture)]
 *   is returned. Otherwise the result is nil.
 */
secretary.core.lex_STAR_ = (function secretary$core$lex_STAR_(s,clauses){
return cljs.core.some.call(null,(function (p__16697){
var vec__16698 = p__16697;
var re = cljs.core.nth.call(null,vec__16698,(0),null);
var action = cljs.core.nth.call(null,vec__16698,(1),null);
var temp__4657__auto__ = cljs.core.re_find.call(null,re,s);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__16701 = temp__4657__auto__;
var m = cljs.core.nth.call(null,vec__16701,(0),null);
var c = cljs.core.nth.call(null,vec__16701,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,cljs.core.count.call(null,m)),action.call(null,c)], null);
} else {
return null;
}
}),clauses);
});
/**
 * Return a pair of [regex params]. regex is a compiled regular
 *   expression for matching routes. params is a list of route param
 *   names (:*, :id, etc.). 
 */
secretary.core.lex_route = (function secretary$core$lex_route(s,clauses){
var s__$1 = s;
var pattern = "";
var params = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,s__$1)){
var vec__16710 = secretary.core.lex_STAR_.call(null,s__$1,clauses);
var s__$2 = cljs.core.nth.call(null,vec__16710,(0),null);
var vec__16713 = cljs.core.nth.call(null,vec__16710,(1),null);
var r = cljs.core.nth.call(null,vec__16713,(0),null);
var p = cljs.core.nth.call(null,vec__16713,(1),null);
var G__16716 = s__$2;
var G__16717 = [cljs.core.str(pattern),cljs.core.str(r)].join('');
var G__16718 = cljs.core.conj.call(null,params,p);
s__$1 = G__16716;
pattern = G__16717;
params = G__16718;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(pattern),cljs.core.str("$")].join('')),cljs.core.remove.call(null,cljs.core.nil_QMARK_,params)], null);
}
break;
}
});
/**
 * Given a route return an instance of IRouteMatches.
 */
secretary.core.compile_route = (function secretary$core$compile_route(orig_route){
var clauses = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\*([^\s.:*\/]*)/,(function (v){
var r = "(.*?)";
var p = ((cljs.core.seq.call(null,v))?cljs.core.keyword.call(null,v):new cljs.core.Keyword(null,"*","*",-1294732318));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\:([^\s.:*\/]+)/,(function (v){
var r = "([^,;?/]+)";
var p = cljs.core.keyword.call(null,v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^([^:*]+)/,(function (v){
var r = secretary.core.re_escape.call(null,v);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);
})], null)], null);
var vec__16728 = secretary.core.lex_route.call(null,orig_route,clauses);
var re = cljs.core.nth.call(null,vec__16728,(0),null);
var params = cljs.core.nth.call(null,vec__16728,(1),null);
if(typeof secretary.core.t_secretary$core16731 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {secretary.core.IRouteValue}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {secretary.core.IRouteMatches}
*/
secretary.core.t_secretary$core16731 = (function (compile_route,orig_route,clauses,vec__16728,re,params,meta16732){
this.compile_route = compile_route;
this.orig_route = orig_route;
this.clauses = clauses;
this.vec__16728 = vec__16728;
this.re = re;
this.params = params;
this.meta16732 = meta16732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
secretary.core.t_secretary$core16731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (clauses,vec__16728,re,params){
return (function (_16733,meta16732__$1){
var self__ = this;
var _16733__$1 = this;
return (new secretary.core.t_secretary$core16731(self__.compile_route,self__.orig_route,self__.clauses,self__.vec__16728,self__.re,self__.params,meta16732__$1));
});})(clauses,vec__16728,re,params))
;

secretary.core.t_secretary$core16731.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (clauses,vec__16728,re,params){
return (function (_16733){
var self__ = this;
var _16733__$1 = this;
return self__.meta16732;
});})(clauses,vec__16728,re,params))
;

secretary.core.t_secretary$core16731.prototype.secretary$core$IRouteValue$ = true;

secretary.core.t_secretary$core16731.prototype.secretary$core$IRouteValue$route_value$arity$1 = ((function (clauses,vec__16728,re,params){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.orig_route;
});})(clauses,vec__16728,re,params))
;

secretary.core.t_secretary$core16731.prototype.secretary$core$IRouteMatches$ = true;

secretary.core.t_secretary$core16731.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = ((function (clauses,vec__16728,re,params){
return (function (_,route){
var self__ = this;
var ___$1 = this;
var temp__4657__auto__ = secretary.core.re_matches_STAR_.call(null,self__.re,route);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__16734 = temp__4657__auto__;
var seq__16735 = cljs.core.seq.call(null,vec__16734);
var first__16736 = cljs.core.first.call(null,seq__16735);
var seq__16735__$1 = cljs.core.next.call(null,seq__16735);
var ___$2 = first__16736;
var ms = seq__16735__$1;
return cljs.core.merge_with.call(null,cljs.core.vector,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,self__.params,cljs.core.map.call(null,secretary.core.decode,ms))));
} else {
return null;
}
});})(clauses,vec__16728,re,params))
;

secretary.core.t_secretary$core16731.getBasis = ((function (clauses,vec__16728,re,params){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"compile-route","compile-route",-1479918120,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"orig-route","orig-route",899103121,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a route return an instance of IRouteMatches."], null)),new cljs.core.Symbol(null,"orig-route","orig-route",899103121,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null),new cljs.core.Symbol(null,"vec__16728","vec__16728",-608379929,null),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"meta16732","meta16732",957930052,null)], null);
});})(clauses,vec__16728,re,params))
;

secretary.core.t_secretary$core16731.cljs$lang$type = true;

secretary.core.t_secretary$core16731.cljs$lang$ctorStr = "secretary.core/t_secretary$core16731";

secretary.core.t_secretary$core16731.cljs$lang$ctorPrWriter = ((function (clauses,vec__16728,re,params){
return (function (this__6665__auto__,writer__6666__auto__,opt__6667__auto__){
return cljs.core._write.call(null,writer__6666__auto__,"secretary.core/t_secretary$core16731");
});})(clauses,vec__16728,re,params))
;

secretary.core.__GT_t_secretary$core16731 = ((function (clauses,vec__16728,re,params){
return (function secretary$core$compile_route_$___GT_t_secretary$core16731(compile_route__$1,orig_route__$1,clauses__$1,vec__16728__$1,re__$1,params__$1,meta16732){
return (new secretary.core.t_secretary$core16731(compile_route__$1,orig_route__$1,clauses__$1,vec__16728__$1,re__$1,params__$1,meta16732));
});})(clauses,vec__16728,re,params))
;

}

return (new secretary.core.t_secretary$core16731(secretary$core$compile_route,orig_route,clauses,vec__16728,re,params,cljs.core.PersistentArrayMap.EMPTY));
});
secretary.core.render_route_STAR_ = (function secretary$core$render_route_STAR_(var_args){
var args__7141__auto__ = [];
var len__7134__auto___16740 = arguments.length;
var i__7135__auto___16741 = (0);
while(true){
if((i__7135__auto___16741 < len__7134__auto___16740)){
args__7141__auto__.push((arguments[i__7135__auto___16741]));

var G__16742 = (i__7135__auto___16741 + (1));
i__7135__auto___16741 = G__16742;
continue;
} else {
}
break;
}

var argseq__7142__auto__ = ((((1) < args__7141__auto__.length))?(new cljs.core.IndexedSeq(args__7141__auto__.slice((1)),(0),null)):null);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7142__auto__);
});

secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,args){
if(((!((obj == null)))?(((false) || (obj.secretary$core$IRenderRoute$))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,secretary.core.IRenderRoute,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,secretary.core.IRenderRoute,obj))){
return cljs.core.apply.call(null,secretary.core.render_route,obj,args);
} else {
return null;
}
});

secretary.core.render_route_STAR_.cljs$lang$maxFixedArity = (1);

secretary.core.render_route_STAR_.cljs$lang$applyTo = (function (seq16737){
var G__16738 = cljs.core.first.call(null,seq16737);
var seq16737__$1 = cljs.core.next.call(null,seq16737);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__16738,seq16737__$1);
});

secretary.core._STAR_routes_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
secretary.core.add_route_BANG_ = (function secretary$core$add_route_BANG_(obj,action){
var obj__$1 = ((typeof obj === 'string')?secretary.core.compile_route.call(null,obj):obj);
return cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1,action], null));
});
secretary.core.remove_route_BANG_ = (function secretary$core$remove_route_BANG_(obj){
return cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,(function (rs){
return cljs.core.filterv.call(null,(function (p__16747){
var vec__16748 = p__16747;
var x = cljs.core.nth.call(null,vec__16748,(0),null);
var _ = cljs.core.nth.call(null,vec__16748,(1),null);
return cljs.core.not_EQ_.call(null,x,obj);
}),rs);
}));
});
secretary.core.reset_routes_BANG_ = (function secretary$core$reset_routes_BANG_(){
return cljs.core.reset_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.PersistentVector.EMPTY);
});
secretary.core.locate_route = (function secretary$core$locate_route(route){
return cljs.core.some.call(null,(function (p__16755){
var vec__16756 = p__16755;
var compiled_route = cljs.core.nth.call(null,vec__16756,(0),null);
var action = cljs.core.nth.call(null,vec__16756,(1),null);
var temp__4657__auto__ = secretary.core.route_matches.call(null,compiled_route,route);
if(cljs.core.truth_(temp__4657__auto__)){
var params = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"route","route",329891309),compiled_route], null);
} else {
return null;
}
}),cljs.core.deref.call(null,secretary.core._STAR_routes_STAR_));
});
/**
 * Returns original route value as set in defroute when passed a URI path.
 */
secretary.core.locate_route_value = (function secretary$core$locate_route_value(uri){
return secretary.core.route_value.call(null,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(secretary.core.locate_route.call(null,uri)));
});
secretary.core.prefix = (function secretary$core$prefix(){
return [cljs.core.str(secretary.core.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null)))].join('');
});
secretary.core.uri_without_prefix = (function secretary$core$uri_without_prefix(uri){
return clojure.string.replace.call(null,uri,cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(secretary.core.prefix.call(null))].join('')),"");
});
/**
 * Ensures that the uri has a leading slash
 */
secretary.core.uri_with_leading_slash = (function secretary$core$uri_with_leading_slash(uri){
if(cljs.core._EQ_.call(null,"/",cljs.core.first.call(null,uri))){
return uri;
} else {
return [cljs.core.str("/"),cljs.core.str(uri)].join('');
}
});
/**
 * Dispatch an action for a given route if it matches the URI path.
 */
secretary.core.dispatch_BANG_ = (function secretary$core$dispatch_BANG_(uri){
var vec__16764 = clojure.string.split.call(null,secretary.core.uri_without_prefix.call(null,uri),/\?/);
var uri_path = cljs.core.nth.call(null,vec__16764,(0),null);
var query_string = cljs.core.nth.call(null,vec__16764,(1),null);
var uri_path__$1 = secretary.core.uri_with_leading_slash.call(null,uri_path);
var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),secretary.core.decode_query_params.call(null,query_string)], null):null);
var map__16767 = secretary.core.locate_route.call(null,uri_path__$1);
var map__16767__$1 = ((((!((map__16767 == null)))?((((map__16767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16767):map__16767);
var action = cljs.core.get.call(null,map__16767__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var params = cljs.core.get.call(null,map__16767__$1,new cljs.core.Keyword(null,"params","params",710516235));
var action__$1 = (function (){var or__6059__auto__ = action;
if(cljs.core.truth_(or__6059__auto__)){
return or__6059__auto__;
} else {
return cljs.core.identity;
}
})();
var params__$1 = cljs.core.merge.call(null,params,query_params);
return action__$1.call(null,params__$1);
});
secretary.core.invalid_params = (function secretary$core$invalid_params(params,validations){
return cljs.core.reduce.call(null,(function (m,p__16773){
var vec__16774 = p__16773;
var key = cljs.core.nth.call(null,vec__16774,(0),null);
var validation = cljs.core.nth.call(null,vec__16774,(1),null);
var value = cljs.core.get.call(null,params,key);
if(cljs.core.truth_(cljs.core.re_matches.call(null,validation,value))){
return m;
} else {
return cljs.core.assoc.call(null,m,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,validation], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),validations));
});
secretary.core.params_valid_QMARK_ = (function secretary$core$params_valid_QMARK_(params,validations){
return cljs.core.empty_QMARK_.call(null,secretary.core.invalid_params.call(null,params,validations));
});
(secretary.core.IRouteMatches["string"] = true);

(secretary.core.route_matches["string"] = (function (this$,route){
return secretary.core.route_matches.call(null,secretary.core.compile_route.call(null,this$),route);
}));

RegExp.prototype.secretary$core$IRouteMatches$ = true;

RegExp.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (this$,route){
var this$__$1 = this;
var temp__4657__auto__ = secretary.core.re_matches_STAR_.call(null,this$__$1,route);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__16777 = temp__4657__auto__;
var seq__16778 = cljs.core.seq.call(null,vec__16777);
var first__16779 = cljs.core.first.call(null,seq__16778);
var seq__16778__$1 = cljs.core.next.call(null,seq__16778);
var _ = first__16779;
var ms = seq__16778__$1;
return cljs.core.vec.call(null,ms);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (p__16780,route){
var vec__16781 = p__16780;
var seq__16782 = cljs.core.seq.call(null,vec__16781);
var first__16783 = cljs.core.first.call(null,seq__16782);
var seq__16782__$1 = cljs.core.next.call(null,seq__16782);
var route_string = first__16783;
var validations = seq__16782__$1;
var vec__16784 = this;
var seq__16785 = cljs.core.seq.call(null,vec__16784);
var first__16786 = cljs.core.first.call(null,seq__16785);
var seq__16785__$1 = cljs.core.next.call(null,seq__16785);
var route_string__$1 = first__16786;
var validations__$1 = seq__16785__$1;
var params = secretary.core.route_matches.call(null,secretary.core.compile_route.call(null,route_string__$1),route);
if(cljs.core.truth_(secretary.core.params_valid_QMARK_.call(null,params,validations__$1))){
return params;
} else {
return null;
}
});
(secretary.core.IRouteValue["string"] = true);

(secretary.core.route_value["string"] = (function (this$){
return secretary.core.route_value.call(null,secretary.core.compile_route.call(null,this$));
}));

RegExp.prototype.secretary$core$IRouteValue$ = true;

RegExp.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (p__16787){
var vec__16788 = p__16787;
var seq__16789 = cljs.core.seq.call(null,vec__16788);
var first__16790 = cljs.core.first.call(null,seq__16789);
var seq__16789__$1 = cljs.core.next.call(null,seq__16789);
var route_string = first__16790;
var validations = seq__16789__$1;
var vec__16791 = this;
var seq__16792 = cljs.core.seq.call(null,vec__16791);
var first__16793 = cljs.core.first.call(null,seq__16792);
var seq__16792__$1 = cljs.core.next.call(null,seq__16792);
var route_string__$1 = first__16793;
var validations__$1 = seq__16792__$1;
return cljs.core.vec.call(null,cljs.core.cons.call(null,secretary.core.route_value.call(null,route_string__$1),validations__$1));
});
(secretary.core.IRenderRoute["string"] = true);

(secretary.core.render_route["string"] = (function() {
var G__16803 = null;
var G__16803__1 = (function (this$){
return secretary.core.render_route.call(null,this$,cljs.core.PersistentArrayMap.EMPTY);
});
var G__16803__2 = (function (this$,params){
var map__16794 = params;
var map__16794__$1 = ((((!((map__16794 == null)))?((((map__16794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16794):map__16794);
var m = map__16794__$1;
var query_params = cljs.core.get.call(null,map__16794__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var a = cljs.core.atom.call(null,m);
var path = this$.replace((new RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*","g")),((function (map__16794,map__16794__$1,m,query_params,a){
return (function ($1){
var lookup = cljs.core.keyword.call(null,((cljs.core._EQ_.call(null,$1,"*"))?$1:cljs.core.subs.call(null,$1,(1))));
var v = cljs.core.get.call(null,cljs.core.deref.call(null,a),lookup);
var replacement = ((cljs.core.sequential_QMARK_.call(null,v))?(function (){
cljs.core.swap_BANG_.call(null,a,cljs.core.assoc,lookup,cljs.core.next.call(null,v));

return secretary.core.encode_uri.call(null,cljs.core.first.call(null,v));
})()
:(cljs.core.truth_(v)?secretary.core.encode_uri.call(null,v):$1));
return replacement;
});})(map__16794,map__16794__$1,m,query_params,a))
);
var path__$1 = [cljs.core.str(secretary.core.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null))),cljs.core.str(path)].join('');
var temp__4655__auto__ = (function (){var and__6047__auto__ = query_params;
if(cljs.core.truth_(and__6047__auto__)){
return secretary.core.encode_query_params.call(null,query_params);
} else {
return and__6047__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var query_string = temp__4655__auto__;
return [cljs.core.str(path__$1),cljs.core.str("?"),cljs.core.str(query_string)].join('');
} else {
return path__$1;
}
});
G__16803 = function(this$,params){
switch(arguments.length){
case 1:
return G__16803__1.call(this,this$);
case 2:
return G__16803__2.call(this,this$,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16803.cljs$core$IFn$_invoke$arity$1 = G__16803__1;
G__16803.cljs$core$IFn$_invoke$arity$2 = G__16803__2;
return G__16803;
})()
);

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$1 = (function (this$){
var this$__$1 = this;
return secretary.core.render_route.call(null,this$__$1,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$2 = (function (p__16796,params){
var vec__16797 = p__16796;
var seq__16798 = cljs.core.seq.call(null,vec__16797);
var first__16799 = cljs.core.first.call(null,seq__16798);
var seq__16798__$1 = cljs.core.next.call(null,seq__16798);
var route_string = first__16799;
var validations = seq__16798__$1;
var vec__16800 = this;
var seq__16801 = cljs.core.seq.call(null,vec__16800);
var first__16802 = cljs.core.first.call(null,seq__16801);
var seq__16801__$1 = cljs.core.next.call(null,seq__16801);
var route_string__$1 = first__16802;
var validations__$1 = seq__16801__$1;
var invalid = secretary.core.invalid_params.call(null,params,validations__$1);
if(cljs.core.empty_QMARK_.call(null,invalid)){
return secretary.core.render_route.call(null,route_string__$1,params);
} else {
throw cljs.core.ex_info.call(null,"Could not build route: invalid params",invalid);
}
});
