// Compiled by ClojureScript 1.9.93 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__14521){
var map__14532 = p__14521;
var map__14532__$1 = ((((!((map__14532 == null)))?((((map__14532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14532):map__14532);
var replacement_transformers = cljs.core.get.call(null,map__14532__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__14532__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__14532,map__14532__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_14534 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__14535 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_14534,map__14532,map__14532__$1,replacement_transformers,custom_transformers){
return (function (p__14538,transformer){
var vec__14539 = p__14538;
var text = cljs.core.nth.call(null,vec__14539,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__14539,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_14534,map__14532,map__14532__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__6059__auto__ = replacement_transformers;
if(cljs.core.truth_(or__6059__auto__)){
return or__6059__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__14535,(0),null);
var new_state = cljs.core.nth.call(null,vec__14535,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_14534;
}});
;})(map__14532,map__14532__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__7141__auto__ = [];
var len__7134__auto___14544 = arguments.length;
var i__7135__auto___14545 = (0);
while(true){
if((i__7135__auto___14545 < len__7134__auto___14544)){
args__7141__auto__.push((arguments[i__7135__auto___14545]));

var G__14546 = (i__7135__auto___14545 + (1));
i__7135__auto___14545 = G__14546;
continue;
} else {
}
break;
}

var argseq__7142__auto__ = ((((1) < args__7141__auto__.length))?(new cljs.core.IndexedSeq(args__7141__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7142__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq14542){
var G__14543 = cljs.core.first.call(null,seq14542);
var seq14542__$1 = cljs.core.next.call(null,seq14542);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__14543,seq14542__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__14551_14555 = cljs.core.seq.call(null,lines);
var chunk__14552_14556 = null;
var count__14553_14557 = (0);
var i__14554_14558 = (0);
while(true){
if((i__14554_14558 < count__14553_14557)){
var line_14559 = cljs.core._nth.call(null,chunk__14552_14556,i__14554_14558);
markdown.links.parse_reference_link.call(null,line_14559,references);

var G__14560 = seq__14551_14555;
var G__14561 = chunk__14552_14556;
var G__14562 = count__14553_14557;
var G__14563 = (i__14554_14558 + (1));
seq__14551_14555 = G__14560;
chunk__14552_14556 = G__14561;
count__14553_14557 = G__14562;
i__14554_14558 = G__14563;
continue;
} else {
var temp__4657__auto___14564 = cljs.core.seq.call(null,seq__14551_14555);
if(temp__4657__auto___14564){
var seq__14551_14565__$1 = temp__4657__auto___14564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14551_14565__$1)){
var c__6870__auto___14566 = cljs.core.chunk_first.call(null,seq__14551_14565__$1);
var G__14567 = cljs.core.chunk_rest.call(null,seq__14551_14565__$1);
var G__14568 = c__6870__auto___14566;
var G__14569 = cljs.core.count.call(null,c__6870__auto___14566);
var G__14570 = (0);
seq__14551_14555 = G__14567;
chunk__14552_14556 = G__14568;
count__14553_14557 = G__14569;
i__14554_14558 = G__14570;
continue;
} else {
var line_14571 = cljs.core.first.call(null,seq__14551_14565__$1);
markdown.links.parse_reference_link.call(null,line_14571,references);

var G__14572 = cljs.core.next.call(null,seq__14551_14565__$1);
var G__14573 = null;
var G__14574 = (0);
var G__14575 = (0);
seq__14551_14555 = G__14572;
chunk__14552_14556 = G__14573;
count__14553_14557 = G__14574;
i__14554_14558 = G__14575;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__14580_14584 = cljs.core.seq.call(null,lines);
var chunk__14581_14585 = null;
var count__14582_14586 = (0);
var i__14583_14587 = (0);
while(true){
if((i__14583_14587 < count__14582_14586)){
var line_14588 = cljs.core._nth.call(null,chunk__14581_14585,i__14583_14587);
markdown.links.parse_footnote_link.call(null,line_14588,footnotes);

var G__14589 = seq__14580_14584;
var G__14590 = chunk__14581_14585;
var G__14591 = count__14582_14586;
var G__14592 = (i__14583_14587 + (1));
seq__14580_14584 = G__14589;
chunk__14581_14585 = G__14590;
count__14582_14586 = G__14591;
i__14583_14587 = G__14592;
continue;
} else {
var temp__4657__auto___14593 = cljs.core.seq.call(null,seq__14580_14584);
if(temp__4657__auto___14593){
var seq__14580_14594__$1 = temp__4657__auto___14593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14580_14594__$1)){
var c__6870__auto___14595 = cljs.core.chunk_first.call(null,seq__14580_14594__$1);
var G__14596 = cljs.core.chunk_rest.call(null,seq__14580_14594__$1);
var G__14597 = c__6870__auto___14595;
var G__14598 = cljs.core.count.call(null,c__6870__auto___14595);
var G__14599 = (0);
seq__14580_14584 = G__14596;
chunk__14581_14585 = G__14597;
count__14582_14586 = G__14598;
i__14583_14587 = G__14599;
continue;
} else {
var line_14600 = cljs.core.first.call(null,seq__14580_14594__$1);
markdown.links.parse_footnote_link.call(null,line_14600,footnotes);

var G__14601 = cljs.core.next.call(null,seq__14580_14594__$1);
var G__14602 = null;
var G__14603 = (0);
var G__14604 = (0);
seq__14580_14584 = G__14601;
chunk__14581_14585 = G__14602;
count__14582_14586 = G__14603;
i__14583_14587 = G__14604;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__14609 = cljs.core.split_with.call(null,(function (p1__14605_SHARP_){
return cljs.core.not_empty.call(null,p1__14605_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__14609,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__14609,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_14627 = markdown.common._STAR_substring_STAR_;
var formatter14628 = markdown.transformers.formatter;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_14627,formatter14628){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_14627,formatter14628))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str(text),cljs.core.str("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__14629 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__14629,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__14629,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__14635_14642 = lines__$1;
var vec__14636_14643 = G__14635_14642;
var seq__14637_14644 = cljs.core.seq.call(null,vec__14636_14643);
var first__14638_14645 = cljs.core.first.call(null,seq__14637_14644);
var seq__14637_14646__$1 = cljs.core.next.call(null,seq__14637_14644);
var line_14647 = first__14638_14645;
var more_14648 = seq__14637_14646__$1;
var state_14649 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__14635_14650__$1 = G__14635_14642;
var state_14651__$1 = state_14649;
while(true){
var vec__14639_14652 = G__14635_14650__$1;
var seq__14640_14653 = cljs.core.seq.call(null,vec__14639_14652);
var first__14641_14654 = cljs.core.first.call(null,seq__14640_14653);
var seq__14640_14655__$1 = cljs.core.next.call(null,seq__14640_14653);
var line_14656__$1 = first__14641_14654;
var more_14657__$1 = seq__14640_14655__$1;
var state_14658__$2 = state_14651__$1;
var state_14659__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_14658__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_14658__$2),cljs.core.first.call(null,more_14657__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_14658__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_14658__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_14657__$1))){
var G__14660 = more_14657__$1;
var G__14661 = cljs.core.assoc.call(null,transformer.call(null,html,line_14656__$1,cljs.core.first.call(null,more_14657__$1),state_14659__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_14656__$1));
G__14635_14650__$1 = G__14660;
state_14651__$1 = G__14661;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_14659__$3))),line_14656__$1,"",cljs.core.assoc.call(null,state_14659__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers.formatter = formatter14628;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_14627;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__7141__auto__ = [];
var len__7134__auto___14664 = arguments.length;
var i__7135__auto___14665 = (0);
while(true){
if((i__7135__auto___14665 < len__7134__auto___14664)){
args__7141__auto__.push((arguments[i__7135__auto___14665]));

var G__14666 = (i__7135__auto___14665 + (1));
i__7135__auto___14665 = G__14666;
continue;
} else {
}
break;
}

var argseq__7142__auto__ = ((((1) < args__7141__auto__.length))?(new cljs.core.IndexedSeq(args__7141__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7142__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq14662){
var G__14663 = cljs.core.first.call(null,seq14662);
var seq14662__$1 = cljs.core.next.call(null,seq14662);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__14663,seq14662__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__7141__auto__ = [];
var len__7134__auto___14669 = arguments.length;
var i__7135__auto___14670 = (0);
while(true){
if((i__7135__auto___14670 < len__7134__auto___14669)){
args__7141__auto__.push((arguments[i__7135__auto___14670]));

var G__14671 = (i__7135__auto___14670 + (1));
i__7135__auto___14670 = G__14671;
continue;
} else {
}
break;
}

var argseq__7142__auto__ = ((((1) < args__7141__auto__.length))?(new cljs.core.IndexedSeq(args__7141__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7142__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq14667){
var G__14668 = cljs.core.first.call(null,seq14667);
var seq14667__$1 = cljs.core.next.call(null,seq14667);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__14668,seq14667__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__7141__auto__ = [];
var len__7134__auto___14673 = arguments.length;
var i__7135__auto___14674 = (0);
while(true){
if((i__7135__auto___14674 < len__7134__auto___14673)){
args__7141__auto__.push((arguments[i__7135__auto___14674]));

var G__14675 = (i__7135__auto___14674 + (1));
i__7135__auto___14674 = G__14675;
continue;
} else {
}
break;
}

var argseq__7142__auto__ = ((((0) < args__7141__auto__.length))?(new cljs.core.IndexedSeq(args__7141__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__7142__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq14672){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14672));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__7141__auto__ = [];
var len__7134__auto___14677 = arguments.length;
var i__7135__auto___14678 = (0);
while(true){
if((i__7135__auto___14678 < len__7134__auto___14677)){
args__7141__auto__.push((arguments[i__7135__auto___14678]));

var G__14679 = (i__7135__auto___14678 + (1));
i__7135__auto___14678 = G__14679;
continue;
} else {
}
break;
}

var argseq__7142__auto__ = ((((0) < args__7141__auto__.length))?(new cljs.core.IndexedSeq(args__7141__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__7142__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq14676){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14676));
});

