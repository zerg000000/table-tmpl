// Compiled by ClojureScript 1.9.93 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__7141__auto__ = [];
var len__7134__auto___16560 = arguments.length;
var i__7135__auto___16561 = (0);
while(true){
if((i__7135__auto___16561 < len__7134__auto___16560)){
args__7141__auto__.push((arguments[i__7135__auto___16561]));

var G__16562 = (i__7135__auto___16561 + (1));
i__7135__auto___16561 = G__16562;
continue;
} else {
}
break;
}

var argseq__7142__auto__ = ((((1) < args__7141__auto__.length))?(new cljs.core.IndexedSeq(args__7141__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7142__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__16556){
var vec__16557 = p__16556;
var default$ = cljs.core.nth.call(null,vec__16557,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq16554){
var G__16555 = cljs.core.first.call(null,seq16554);
var seq16554__$1 = cljs.core.next.call(null,seq16554);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__16555,seq16554__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__7141__auto__ = [];
var len__7134__auto___16569 = arguments.length;
var i__7135__auto___16570 = (0);
while(true){
if((i__7135__auto___16570 < len__7134__auto___16569)){
args__7141__auto__.push((arguments[i__7135__auto___16570]));

var G__16571 = (i__7135__auto___16570 + (1));
i__7135__auto___16570 = G__16571;
continue;
} else {
}
break;
}

var argseq__7142__auto__ = ((((1) < args__7141__auto__.length))?(new cljs.core.IndexedSeq(args__7141__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7142__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__16565){
var vec__16566 = p__16565;
var default$ = cljs.core.nth.call(null,vec__16566,(0),null);
var or__6059__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__6059__auto__)){
return or__6059__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq16563){
var G__16564 = cljs.core.first.call(null,seq16563);
var seq16563__$1 = cljs.core.next.call(null,seq16563);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__16564,seq16563__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__7141__auto__ = [];
var len__7134__auto___16574 = arguments.length;
var i__7135__auto___16575 = (0);
while(true){
if((i__7135__auto___16575 < len__7134__auto___16574)){
args__7141__auto__.push((arguments[i__7135__auto___16575]));

var G__16576 = (i__7135__auto___16575 + (1));
i__7135__auto___16575 = G__16576;
continue;
} else {
}
break;
}

var argseq__7142__auto__ = ((((1) < args__7141__auto__.length))?(new cljs.core.IndexedSeq(args__7141__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7142__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq16572){
var G__16573 = cljs.core.first.call(null,seq16572);
var seq16572__$1 = cljs.core.next.call(null,seq16572);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16573,seq16572__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__7141__auto__ = [];
var len__7134__auto___16583 = arguments.length;
var i__7135__auto___16584 = (0);
while(true){
if((i__7135__auto___16584 < len__7134__auto___16583)){
args__7141__auto__.push((arguments[i__7135__auto___16584]));

var G__16585 = (i__7135__auto___16584 + (1));
i__7135__auto___16584 = G__16585;
continue;
} else {
}
break;
}

var argseq__7142__auto__ = ((((1) < args__7141__auto__.length))?(new cljs.core.IndexedSeq(args__7141__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7142__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__16579){
var vec__16580 = p__16579;
var default$ = cljs.core.nth.call(null,vec__16580,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq16577){
var G__16578 = cljs.core.first.call(null,seq16577);
var seq16577__$1 = cljs.core.next.call(null,seq16577);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16578,seq16577__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__7141__auto__ = [];
var len__7134__auto___16592 = arguments.length;
var i__7135__auto___16593 = (0);
while(true){
if((i__7135__auto___16593 < len__7134__auto___16592)){
args__7141__auto__.push((arguments[i__7135__auto___16593]));

var G__16594 = (i__7135__auto___16593 + (1));
i__7135__auto___16593 = G__16594;
continue;
} else {
}
break;
}

var argseq__7142__auto__ = ((((1) < args__7141__auto__.length))?(new cljs.core.IndexedSeq(args__7141__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7142__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__16588){
var vec__16589 = p__16588;
var default$ = cljs.core.nth.call(null,vec__16589,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq16586){
var G__16587 = cljs.core.first.call(null,seq16586);
var seq16586__$1 = cljs.core.next.call(null,seq16586);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16587,seq16586__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__7141__auto__ = [];
var len__7134__auto___16599 = arguments.length;
var i__7135__auto___16600 = (0);
while(true){
if((i__7135__auto___16600 < len__7134__auto___16599)){
args__7141__auto__.push((arguments[i__7135__auto___16600]));

var G__16601 = (i__7135__auto___16600 + (1));
i__7135__auto___16600 = G__16601;
continue;
} else {
}
break;
}

var argseq__7142__auto__ = ((((2) < args__7141__auto__.length))?(new cljs.core.IndexedSeq(args__7141__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7142__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__16595_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__16595_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq16596){
var G__16597 = cljs.core.first.call(null,seq16596);
var seq16596__$1 = cljs.core.next.call(null,seq16596);
var G__16598 = cljs.core.first.call(null,seq16596__$1);
var seq16596__$2 = cljs.core.next.call(null,seq16596__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16597,G__16598,seq16596__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__7141__auto__ = [];
var len__7134__auto___16606 = arguments.length;
var i__7135__auto___16607 = (0);
while(true){
if((i__7135__auto___16607 < len__7134__auto___16606)){
args__7141__auto__.push((arguments[i__7135__auto___16607]));

var G__16608 = (i__7135__auto___16607 + (1));
i__7135__auto___16607 = G__16608;
continue;
} else {
}
break;
}

var argseq__7142__auto__ = ((((2) < args__7141__auto__.length))?(new cljs.core.IndexedSeq(args__7141__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7142__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__16602_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__16602_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq16603){
var G__16604 = cljs.core.first.call(null,seq16603);
var seq16603__$1 = cljs.core.next.call(null,seq16603);
var G__16605 = cljs.core.first.call(null,seq16603__$1);
var seq16603__$2 = cljs.core.next.call(null,seq16603__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16604,G__16605,seq16603__$2);
});

