// Compiled by ClojureScript 1.9.93 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__13415__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13416__i = 0, G__13416__a = new Array(arguments.length -  0);
while (G__13416__i < G__13416__a.length) {G__13416__a[G__13416__i] = arguments[G__13416__i + 0]; ++G__13416__i;}
  args = new cljs.core.IndexedSeq(G__13416__a,0);
} 
return G__13415__delegate.call(this,args);};
G__13415.cljs$lang$maxFixedArity = 0;
G__13415.cljs$lang$applyTo = (function (arglist__13417){
var args = cljs.core.seq(arglist__13417);
return G__13415__delegate(args);
});
G__13415.cljs$core$IFn$_invoke$arity$variadic = G__13415__delegate;
return G__13415;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13418__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13418 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13419__i = 0, G__13419__a = new Array(arguments.length -  0);
while (G__13419__i < G__13419__a.length) {G__13419__a[G__13419__i] = arguments[G__13419__i + 0]; ++G__13419__i;}
  args = new cljs.core.IndexedSeq(G__13419__a,0);
} 
return G__13418__delegate.call(this,args);};
G__13418.cljs$lang$maxFixedArity = 0;
G__13418.cljs$lang$applyTo = (function (arglist__13420){
var args = cljs.core.seq(arglist__13420);
return G__13418__delegate(args);
});
G__13418.cljs$core$IFn$_invoke$arity$variadic = G__13418__delegate;
return G__13418;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
