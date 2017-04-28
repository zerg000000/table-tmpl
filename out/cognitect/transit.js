// Compiled by ClojureScript 1.9.93 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__13507_13511 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__13508_13512 = null;
var count__13509_13513 = (0);
var i__13510_13514 = (0);
while(true){
if((i__13510_13514 < count__13509_13513)){
var k_13515 = cljs.core._nth.call(null,chunk__13508_13512,i__13510_13514);
var v_13516 = (b[k_13515]);
(a[k_13515] = v_13516);

var G__13517 = seq__13507_13511;
var G__13518 = chunk__13508_13512;
var G__13519 = count__13509_13513;
var G__13520 = (i__13510_13514 + (1));
seq__13507_13511 = G__13517;
chunk__13508_13512 = G__13518;
count__13509_13513 = G__13519;
i__13510_13514 = G__13520;
continue;
} else {
var temp__4657__auto___13521 = cljs.core.seq.call(null,seq__13507_13511);
if(temp__4657__auto___13521){
var seq__13507_13522__$1 = temp__4657__auto___13521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13507_13522__$1)){
var c__6870__auto___13523 = cljs.core.chunk_first.call(null,seq__13507_13522__$1);
var G__13524 = cljs.core.chunk_rest.call(null,seq__13507_13522__$1);
var G__13525 = c__6870__auto___13523;
var G__13526 = cljs.core.count.call(null,c__6870__auto___13523);
var G__13527 = (0);
seq__13507_13511 = G__13524;
chunk__13508_13512 = G__13525;
count__13509_13513 = G__13526;
i__13510_13514 = G__13527;
continue;
} else {
var k_13528 = cljs.core.first.call(null,seq__13507_13522__$1);
var v_13529 = (b[k_13528]);
(a[k_13528] = v_13529);

var G__13530 = cljs.core.next.call(null,seq__13507_13522__$1);
var G__13531 = null;
var G__13532 = (0);
var G__13533 = (0);
seq__13507_13511 = G__13530;
chunk__13508_13512 = G__13531;
count__13509_13513 = G__13532;
i__13510_13514 = G__13533;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__6665__auto__,writer__6666__auto__,opt__6667__auto__){
return cljs.core._write.call(null,writer__6666__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__6665__auto__,writer__6666__auto__,opt__6667__auto__){
return cljs.core._write.call(null,writer__6666__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args13534 = [];
var len__7134__auto___13537 = arguments.length;
var i__7135__auto___13538 = (0);
while(true){
if((i__7135__auto___13538 < len__7134__auto___13537)){
args13534.push((arguments[i__7135__auto___13538]));

var G__13539 = (i__7135__auto___13538 + (1));
i__7135__auto___13538 = G__13539;
continue;
} else {
}
break;
}

var G__13536 = args13534.length;
switch (G__13536) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13534.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__13541 = (i + (2));
var G__13542 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__13541;
ret = G__13542;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__6665__auto__,writer__6666__auto__,opt__6667__auto__){
return cljs.core._write.call(null,writer__6666__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__6665__auto__,writer__6666__auto__,opt__6667__auto__){
return cljs.core._write.call(null,writer__6666__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__13543_13547 = cljs.core.seq.call(null,v);
var chunk__13544_13548 = null;
var count__13545_13549 = (0);
var i__13546_13550 = (0);
while(true){
if((i__13546_13550 < count__13545_13549)){
var x_13551 = cljs.core._nth.call(null,chunk__13544_13548,i__13546_13550);
ret.push(x_13551);

var G__13552 = seq__13543_13547;
var G__13553 = chunk__13544_13548;
var G__13554 = count__13545_13549;
var G__13555 = (i__13546_13550 + (1));
seq__13543_13547 = G__13552;
chunk__13544_13548 = G__13553;
count__13545_13549 = G__13554;
i__13546_13550 = G__13555;
continue;
} else {
var temp__4657__auto___13556 = cljs.core.seq.call(null,seq__13543_13547);
if(temp__4657__auto___13556){
var seq__13543_13557__$1 = temp__4657__auto___13556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13543_13557__$1)){
var c__6870__auto___13558 = cljs.core.chunk_first.call(null,seq__13543_13557__$1);
var G__13559 = cljs.core.chunk_rest.call(null,seq__13543_13557__$1);
var G__13560 = c__6870__auto___13558;
var G__13561 = cljs.core.count.call(null,c__6870__auto___13558);
var G__13562 = (0);
seq__13543_13547 = G__13559;
chunk__13544_13548 = G__13560;
count__13545_13549 = G__13561;
i__13546_13550 = G__13562;
continue;
} else {
var x_13563 = cljs.core.first.call(null,seq__13543_13557__$1);
ret.push(x_13563);

var G__13564 = cljs.core.next.call(null,seq__13543_13557__$1);
var G__13565 = null;
var G__13566 = (0);
var G__13567 = (0);
seq__13543_13547 = G__13564;
chunk__13544_13548 = G__13565;
count__13545_13549 = G__13566;
i__13546_13550 = G__13567;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__6665__auto__,writer__6666__auto__,opt__6667__auto__){
return cljs.core._write.call(null,writer__6666__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__6665__auto__,writer__6666__auto__,opt__6667__auto__){
return cljs.core._write.call(null,writer__6666__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__13568_13572 = cljs.core.seq.call(null,v);
var chunk__13569_13573 = null;
var count__13570_13574 = (0);
var i__13571_13575 = (0);
while(true){
if((i__13571_13575 < count__13570_13574)){
var x_13576 = cljs.core._nth.call(null,chunk__13569_13573,i__13571_13575);
ret.push(x_13576);

var G__13577 = seq__13568_13572;
var G__13578 = chunk__13569_13573;
var G__13579 = count__13570_13574;
var G__13580 = (i__13571_13575 + (1));
seq__13568_13572 = G__13577;
chunk__13569_13573 = G__13578;
count__13570_13574 = G__13579;
i__13571_13575 = G__13580;
continue;
} else {
var temp__4657__auto___13581 = cljs.core.seq.call(null,seq__13568_13572);
if(temp__4657__auto___13581){
var seq__13568_13582__$1 = temp__4657__auto___13581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13568_13582__$1)){
var c__6870__auto___13583 = cljs.core.chunk_first.call(null,seq__13568_13582__$1);
var G__13584 = cljs.core.chunk_rest.call(null,seq__13568_13582__$1);
var G__13585 = c__6870__auto___13583;
var G__13586 = cljs.core.count.call(null,c__6870__auto___13583);
var G__13587 = (0);
seq__13568_13572 = G__13584;
chunk__13569_13573 = G__13585;
count__13570_13574 = G__13586;
i__13571_13575 = G__13587;
continue;
} else {
var x_13588 = cljs.core.first.call(null,seq__13568_13582__$1);
ret.push(x_13588);

var G__13589 = cljs.core.next.call(null,seq__13568_13582__$1);
var G__13590 = null;
var G__13591 = (0);
var G__13592 = (0);
seq__13568_13572 = G__13589;
chunk__13569_13573 = G__13590;
count__13570_13574 = G__13591;
i__13571_13575 = G__13592;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__6665__auto__,writer__6666__auto__,opt__6667__auto__){
return cljs.core._write.call(null,writer__6666__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__13593_13597 = cljs.core.seq.call(null,v);
var chunk__13594_13598 = null;
var count__13595_13599 = (0);
var i__13596_13600 = (0);
while(true){
if((i__13596_13600 < count__13595_13599)){
var x_13601 = cljs.core._nth.call(null,chunk__13594_13598,i__13596_13600);
ret.push(x_13601);

var G__13602 = seq__13593_13597;
var G__13603 = chunk__13594_13598;
var G__13604 = count__13595_13599;
var G__13605 = (i__13596_13600 + (1));
seq__13593_13597 = G__13602;
chunk__13594_13598 = G__13603;
count__13595_13599 = G__13604;
i__13596_13600 = G__13605;
continue;
} else {
var temp__4657__auto___13606 = cljs.core.seq.call(null,seq__13593_13597);
if(temp__4657__auto___13606){
var seq__13593_13607__$1 = temp__4657__auto___13606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13593_13607__$1)){
var c__6870__auto___13608 = cljs.core.chunk_first.call(null,seq__13593_13607__$1);
var G__13609 = cljs.core.chunk_rest.call(null,seq__13593_13607__$1);
var G__13610 = c__6870__auto___13608;
var G__13611 = cljs.core.count.call(null,c__6870__auto___13608);
var G__13612 = (0);
seq__13593_13597 = G__13609;
chunk__13594_13598 = G__13610;
count__13595_13599 = G__13611;
i__13596_13600 = G__13612;
continue;
} else {
var x_13613 = cljs.core.first.call(null,seq__13593_13607__$1);
ret.push(x_13613);

var G__13614 = cljs.core.next.call(null,seq__13593_13607__$1);
var G__13615 = null;
var G__13616 = (0);
var G__13617 = (0);
seq__13593_13597 = G__13614;
chunk__13594_13598 = G__13615;
count__13595_13599 = G__13616;
i__13596_13600 = G__13617;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__6665__auto__,writer__6666__auto__,opt__6667__auto__){
return cljs.core._write.call(null,writer__6666__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__6665__auto__,writer__6666__auto__,opt__6667__auto__){
return cljs.core._write.call(null,writer__6666__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args13618 = [];
var len__7134__auto___13633 = arguments.length;
var i__7135__auto___13634 = (0);
while(true){
if((i__7135__auto___13634 < len__7134__auto___13633)){
args13618.push((arguments[i__7135__auto___13634]));

var G__13635 = (i__7135__auto___13634 + (1));
i__7135__auto___13634 = G__13635;
continue;
} else {
}
break;
}

var G__13620 = args13618.length;
switch (G__13620) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13618.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__13621 = obj;
G__13621.push(kfn.call(null,k),vfn.call(null,v));

return G__13621;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x13622 = cljs.core.clone.call(null,handlers);
x13622.forEach = ((function (x13622,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__13623 = cljs.core.seq.call(null,coll);
var chunk__13624 = null;
var count__13625 = (0);
var i__13626 = (0);
while(true){
if((i__13626 < count__13625)){
var vec__13627 = cljs.core._nth.call(null,chunk__13624,i__13626);
var k = cljs.core.nth.call(null,vec__13627,(0),null);
var v = cljs.core.nth.call(null,vec__13627,(1),null);
f.call(null,v,k);

var G__13637 = seq__13623;
var G__13638 = chunk__13624;
var G__13639 = count__13625;
var G__13640 = (i__13626 + (1));
seq__13623 = G__13637;
chunk__13624 = G__13638;
count__13625 = G__13639;
i__13626 = G__13640;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13623);
if(temp__4657__auto__){
var seq__13623__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13623__$1)){
var c__6870__auto__ = cljs.core.chunk_first.call(null,seq__13623__$1);
var G__13641 = cljs.core.chunk_rest.call(null,seq__13623__$1);
var G__13642 = c__6870__auto__;
var G__13643 = cljs.core.count.call(null,c__6870__auto__);
var G__13644 = (0);
seq__13623 = G__13641;
chunk__13624 = G__13642;
count__13625 = G__13643;
i__13626 = G__13644;
continue;
} else {
var vec__13630 = cljs.core.first.call(null,seq__13623__$1);
var k = cljs.core.nth.call(null,vec__13630,(0),null);
var v = cljs.core.nth.call(null,vec__13630,(1),null);
f.call(null,v,k);

var G__13645 = cljs.core.next.call(null,seq__13623__$1);
var G__13646 = null;
var G__13647 = (0);
var G__13648 = (0);
seq__13623 = G__13645;
chunk__13624 = G__13646;
count__13625 = G__13647;
i__13626 = G__13648;
continue;
}
} else {
return null;
}
}
break;
}
});})(x13622,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x13622;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args13649 = [];
var len__7134__auto___13655 = arguments.length;
var i__7135__auto___13656 = (0);
while(true){
if((i__7135__auto___13656 < len__7134__auto___13655)){
args13649.push((arguments[i__7135__auto___13656]));

var G__13657 = (i__7135__auto___13656 + (1));
i__7135__auto___13656 = G__13657;
continue;
} else {
}
break;
}

var G__13651 = args13649.length;
switch (G__13651) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13649.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit13652 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit13652 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta13653){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta13653 = meta13653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit13652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13654,meta13653__$1){
var self__ = this;
var _13654__$1 = this;
return (new cognitect.transit.t_cognitect$transit13652(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta13653__$1));
});

cognitect.transit.t_cognitect$transit13652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13654){
var self__ = this;
var _13654__$1 = this;
return self__.meta13653;
});

cognitect.transit.t_cognitect$transit13652.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit13652.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit13652.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit13652.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit13652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta13653","meta13653",-648770304,null)], null);
});

cognitect.transit.t_cognitect$transit13652.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit13652.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit13652";

cognitect.transit.t_cognitect$transit13652.cljs$lang$ctorPrWriter = (function (this__6665__auto__,writer__6666__auto__,opt__6667__auto__){
return cljs.core._write.call(null,writer__6666__auto__,"cognitect.transit/t_cognitect$transit13652");
});

cognitect.transit.__GT_t_cognitect$transit13652 = (function cognitect$transit$__GT_t_cognitect$transit13652(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta13653){
return (new cognitect.transit.t_cognitect$transit13652(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta13653));
});

}

return (new cognitect.transit.t_cognitect$transit13652(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__6059__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__6059__auto__)){
return or__6059__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});
