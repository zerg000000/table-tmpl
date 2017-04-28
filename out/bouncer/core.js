// Compiled by ClojureScript 1.9.93 {}
goog.provide('bouncer.core');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
bouncer.core.build_multi_step = (function bouncer$core$build_multi_step(var_args){
var args17214 = [];
var len__7134__auto___17224 = arguments.length;
var i__7135__auto___17225 = (0);
while(true){
if((i__7135__auto___17225 < len__7134__auto___17224)){
args17214.push((arguments[i__7135__auto___17225]));

var G__17226 = (i__7135__auto___17225 + (1));
i__7135__auto___17225 = G__17226;
continue;
} else {
}
break;
}

var G__17216 = args17214.length;
switch (G__17216) {
case 2:
return bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17214.length)].join('')));

}
});

bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$2 = (function (key_or_vec,fn_vec){
return bouncer.core.build_multi_step.call(null,key_or_vec,fn_vec,cljs.core.PersistentVector.EMPTY);
});

bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$3 = (function (key_or_vec,p__17217,acc){
while(true){
var vec__17218 = p__17217;
var seq__17219 = cljs.core.seq.call(null,vec__17218);
var first__17220 = cljs.core.first.call(null,seq__17219);
var seq__17219__$1 = cljs.core.next.call(null,seq__17219);
var f_or_list = first__17220;
var rest = seq__17219__$1;
if(cljs.core.not.call(null,f_or_list)){
return acc;
} else {
if(cljs.core.sequential_QMARK_.call(null,f_or_list)){
var vec__17221 = f_or_list;
var seq__17222 = cljs.core.seq.call(null,vec__17221);
var first__17223 = cljs.core.first.call(null,seq__17222);
var seq__17222__$1 = cljs.core.next.call(null,seq__17222);
var f = first__17223;
var opts = seq__17222__$1;
var G__17228 = key_or_vec;
var G__17229 = rest;
var G__17230 = cljs.core.conj.call(null,acc,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,key_or_vec], null),opts));
key_or_vec = G__17228;
p__17217 = G__17229;
acc = G__17230;
continue;
} else {
var G__17231 = key_or_vec;
var G__17232 = rest;
var G__17233 = cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f_or_list,key_or_vec], null));
key_or_vec = G__17231;
p__17217 = G__17232;
acc = G__17233;
continue;

}
}
break;
}
});

bouncer.core.build_multi_step.cljs$lang$maxFixedArity = 3;

/**
 * Takes two arguments:
 * 
 *   `parent-keyword` is a :keyword - or a vector of :keywords denoting a path in a associative structure
 * 
 *   `validations-map` is a map of forms following this spec:
 * 
 * 
 *    {:keyword [f g] :another-keyword h}
 * 
 * 
 *   Merges `:parent-keyword` with every first element of validations-map, transforming it into:
 * 
 * 
 *    ([:parent-keyword :keyword] [f g] [:parent-keyword :another-keyword] h)
 */
bouncer.core.merge_path = (function bouncer$core$merge_path(parent_key,validations_map){
var parent_key__$1 = (((parent_key instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_key], null):parent_key);
return cljs.core.mapcat.call(null,((function (parent_key__$1){
return (function (p__17238){
var vec__17239 = p__17238;
var key = cljs.core.nth.call(null,vec__17239,(0),null);
var validations = cljs.core.nth.call(null,vec__17239,(1),null);
if(cljs.core.vector_QMARK_.call(null,key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.vector,cljs.core.concat.call(null,parent_key__$1,key)),validations], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.vector,cljs.core.concat.call(null,parent_key__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null))),validations], null);
}
});})(parent_key__$1))
,validations_map);
});
bouncer.core.build_steps = (function bouncer$core$build_steps(p__17242){
var vec__17250 = p__17242;
var seq__17251 = cljs.core.seq.call(null,vec__17250);
var first__17252 = cljs.core.first.call(null,seq__17251);
var seq__17251__$1 = cljs.core.next.call(null,seq__17251);
var head = first__17252;
var tail = seq__17251__$1;
var forms = vec__17250;
var forms__$1 = ((cljs.core.map_QMARK_.call(null,head))?cljs.core.vec.call(null,cljs.core.mapcat.call(null,cljs.core.identity,head)):forms);
return cljs.core.reduce.call(null,((function (forms__$1,vec__17250,seq__17251,first__17252,seq__17251__$1,head,tail,forms){
return (function (acc,p__17253){
var vec__17254 = p__17253;
var key_or_vec = cljs.core.nth.call(null,vec__17254,(0),null);
var sym_or_coll = cljs.core.nth.call(null,vec__17254,(1),null);
var rule = vec__17254;
if(cljs.core.vector_QMARK_.call(null,sym_or_coll)){
return cljs.core.concat.call(null,acc,bouncer.core.build_multi_step.call(null,key_or_vec,sym_or_coll));
} else {
if(cljs.core.map_QMARK_.call(null,sym_or_coll)){
return cljs.core.concat.call(null,acc,bouncer$core$build_steps.call(null,bouncer.core.merge_path.call(null,key_or_vec,sym_or_coll)));
} else {
return cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym_or_coll,key_or_vec], null));

}
}
});})(forms__$1,vec__17250,seq__17251,first__17252,seq__17251__$1,head,tail,forms))
,cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),forms__$1));
});
bouncer.core.pre_condition_met_QMARK_ = (function bouncer$core$pre_condition_met_QMARK_(pre_fn,map){
var or__6059__auto__ = (pre_fn == null);
if(or__6059__auto__){
return or__6059__auto__;
} else {
return pre_fn.call(null,map);
}
});
/**
 * Wraps pred in the context of validating a single value
 * 
 *   - `acc`  is the map being validated
 * 
 *   - `pred` is a validator
 * 
 *   - `k`    the path to the value to be validated in the associative structure `acc`
 * 
 *   - `args` any extra args to pred
 * 
 *   It only runs pred if:
 * 
 *   - the validator contains a pre-condition *and* it is met or;
 *   - the validator is optional  *and* there is a non-nil value to be validated (this information is read from pred's metadata) or;
 *   - there are no previous errors for the given path
 * 
 *   Returns `acc` augmented with a namespace qualified ::errors keyword
 */
bouncer.core.wrap = (function bouncer$core$wrap(message_fn,acc,p__17258){
var vec__17269 = p__17258;
var seq__17270 = cljs.core.seq.call(null,vec__17269);
var first__17271 = cljs.core.first.call(null,seq__17270);
var seq__17270__$1 = cljs.core.next.call(null,seq__17270);
var pred = first__17271;
var first__17271__$1 = cljs.core.first.call(null,seq__17270__$1);
var seq__17270__$2 = cljs.core.next.call(null,seq__17270__$1);
var k = first__17271__$1;
var args = seq__17270__$2;
var k__$1 = ((cljs.core.vector_QMARK_.call(null,k))?k:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var error_path = cljs.core.cons.call(null,new cljs.core.Keyword("bouncer.core","errors","bouncer.core/errors",-444562289),k__$1);
var map__17272 = cljs.core.meta.call(null,pred);
var map__17272__$1 = ((((!((map__17272 == null)))?((((map__17272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17272):map__17272);
var metadata = map__17272__$1;
var optional = cljs.core.get.call(null,map__17272__$1,new cljs.core.Keyword(null,"optional","optional",2053951509),false);
var default_message_format = cljs.core.get.call(null,map__17272__$1,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"Custom validation failed for %s");
var meta_with_defaults = cljs.core.merge.call(null,metadata,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),default_message_format,new cljs.core.Keyword(null,"optional","optional",2053951509),optional], null));
var vec__17273 = cljs.core.split_with.call(null,cljs.core.complement.call(null,cljs.core.keyword_QMARK_),args);
var args__$1 = cljs.core.nth.call(null,vec__17273,(0),null);
var opts = cljs.core.nth.call(null,vec__17273,(1),null);
var map__17276 = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var map__17276__$1 = ((((!((map__17276 == null)))?((((map__17276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17276):map__17276);
var message = cljs.core.get.call(null,map__17276__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var pre = cljs.core.get.call(null,map__17276__$1,new cljs.core.Keyword(null,"pre","pre",2118456869));
var pred_subject = cljs.core.get_in.call(null,acc,k__$1);
if(cljs.core.truth_(bouncer.core.pre_condition_met_QMARK_.call(null,pre,acc))){
if(cljs.core.truth_((function (){var or__6059__auto__ = (function (){var and__6047__auto__ = optional;
if(cljs.core.truth_(and__6047__auto__)){
return (pred_subject == null);
} else {
return and__6047__auto__;
}
})();
if(cljs.core.truth_(or__6059__auto__)){
return or__6059__auto__;
} else {
var or__6059__auto____$1 = !(cljs.core.empty_QMARK_.call(null,cljs.core.get_in.call(null,acc,error_path)));
if(or__6059__auto____$1){
return or__6059__auto____$1;
} else {
return cljs.core.apply.call(null,pred,pred_subject,args__$1);
}
}
})())){
return acc;
} else {
return cljs.core.update_in.call(null,acc,error_path,((function (k__$1,error_path,map__17272,map__17272__$1,metadata,optional,default_message_format,meta_with_defaults,vec__17273,args__$1,opts,map__17276,map__17276__$1,message,pre,pred_subject,vec__17269,seq__17270,first__17271,seq__17270__$1,pred,first__17271__$1,seq__17270__$2,k,args){
return (function (p1__17257_SHARP_){
return cljs.core.conj.call(null,p1__17257_SHARP_,message_fn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),k__$1,new cljs.core.Keyword(null,"value","value",305978217),pred_subject,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.seq.call(null,args__$1),new cljs.core.Keyword(null,"metadata","metadata",1799301597),meta_with_defaults,new cljs.core.Keyword(null,"message","message",-406056002),message], null)));
});})(k__$1,error_path,map__17272,map__17272__$1,metadata,optional,default_message_format,meta_with_defaults,vec__17273,args__$1,opts,map__17276,map__17276__$1,message,pre,pred_subject,vec__17269,seq__17270,first__17271,seq__17270__$1,pred,first__17271__$1,seq__17270__$2,k,args))
);
}
} else {
return acc;
}
});
/**
 * Internal Use.
 * 
 *   Chain of responsibility.
 * 
 *   Takes the current state and a collection of validators `fs`
 * 
 *   Will run all validators against `old-state` and eventually return a vector with the result - the errors map - and the new state - the original map augmented with the errors map.
 * 
 *   See also `wrap`
 */
bouncer.core.wrap_chain = (function bouncer$core$wrap_chain(var_args){
var args__7141__auto__ = [];
var len__7134__auto___17282 = arguments.length;
var i__7135__auto___17283 = (0);
while(true){
if((i__7135__auto___17283 < len__7134__auto___17282)){
args__7141__auto__.push((arguments[i__7135__auto___17283]));

var G__17284 = (i__7135__auto___17283 + (1));
i__7135__auto___17283 = G__17284;
continue;
} else {
}
break;
}

var argseq__7142__auto__ = ((((2) < args__7141__auto__.length))?(new cljs.core.IndexedSeq(args__7141__auto__.slice((2)),(0),null)):null);
return bouncer.core.wrap_chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7142__auto__);
});

bouncer.core.wrap_chain.cljs$core$IFn$_invoke$arity$variadic = (function (old_state,message_fn,fs){
var new_state = cljs.core.reduce.call(null,cljs.core.partial.call(null,bouncer.core.wrap,message_fn),old_state,fs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bouncer.core","errors","bouncer.core/errors",-444562289).cljs$core$IFn$_invoke$arity$1(new_state),new_state], null);
});

bouncer.core.wrap_chain.cljs$lang$maxFixedArity = (2);

bouncer.core.wrap_chain.cljs$lang$applyTo = (function (seq17279){
var G__17280 = cljs.core.first.call(null,seq17279);
var seq17279__$1 = cljs.core.next.call(null,seq17279);
var G__17281 = cljs.core.first.call(null,seq17279__$1);
var seq17279__$2 = cljs.core.next.call(null,seq17279__$1);
return bouncer.core.wrap_chain.cljs$core$IFn$_invoke$arity$variadic(G__17280,G__17281,seq17279__$2);
});

/**
 * Internal use.
 * 
 *   Validates the map m using the validation functions fs.
 * 
 *   Returns a vector where the first element is the map of validation errors if any and the second is the original map (possibly) augmented with the errors map.
 */
bouncer.core.validate_STAR_ = (function bouncer$core$validate_STAR_(message_fn,m,fs){
var G__17298 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,m], null);
var vec__17299 = G__17298;
var errors = cljs.core.nth.call(null,vec__17299,(0),null);
var state = cljs.core.nth.call(null,vec__17299,(1),null);
var ret = vec__17299;
var fs__$1 = fs;
var G__17298__$1 = G__17298;
var fs__$2 = fs__$1;
while(true){
var vec__17302 = G__17298__$1;
var errors__$1 = cljs.core.nth.call(null,vec__17302,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__17302,(1),null);
var ret__$1 = vec__17302;
var fs__$3 = fs__$2;
if(cljs.core.seq.call(null,fs__$3)){
var G__17305 = bouncer.core.wrap_chain.call(null,state__$1,message_fn,cljs.core.first.call(null,fs__$3));
var G__17306 = cljs.core.rest.call(null,fs__$3);
G__17298__$1 = G__17305;
fs__$2 = G__17306;
continue;
} else {
return ret__$1;
}
break;
}
});
/**
 * Use together with `validate`, e.g.:
 * 
 * 
 *    (core/validate core/with-default-messages {}
 *                   :name v/required)
 */
bouncer.core.with_default_messages = (function bouncer$core$with_default_messages(error){
var map__17309 = error;
var map__17309__$1 = ((((!((map__17309 == null)))?((((map__17309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17309):map__17309);
var message = cljs.core.get.call(null,map__17309__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var path = cljs.core.get.call(null,map__17309__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var metadata = cljs.core.get.call(null,map__17309__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
return goog.string.format((function (){var or__6059__auto__ = message;
if(cljs.core.truth_(or__6059__auto__)){
return or__6059__auto__;
} else {
return new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141).cljs$core$IFn$_invoke$arity$1(metadata);
}
})(),cljs.core.name.call(null,cljs.core.peek.call(null,path)));
});
/**
 * Takes a
 * 
 *   - `message-fn` (optional) responsible for transforming error metadata into
 *   the validation result (defaults to `with-default-messages`)
 * 
 *   - `m` map to be validated
 * 
 *   - `forms` validations to be performed on the map
 * 
 *   forms can be a single validator set or a sequence of key/value pairs where:
 * 
 *   key   ==> :keyword or [:a :path]
 * 
 *   value ==> validation-function or
 *          validator-set or
 *         [[validation-function args+opts]] or
 *         [validation-function another-validation-function] or
 *         [validation-function [another-validation-function args+opts]]
 * 
 *   e.g.:
 * 
 * 
 *    (core/validate a-map
 *             :name v/required
 *             :age  [v/required
 *                   [v/number :message "age must be a number"]]
 *             [:passport :number] v/positive)
 * 
 * 
 *   Returns a vector where the first element is the map of validation errors if
 *   any and the second is the original map (possibly) augmented with the errors
 *   map.
 * 
 *   See also `defvalidator`
 */
bouncer.core.validate = (function bouncer$core$validate(var_args){
var args__7141__auto__ = [];
var len__7134__auto___17318 = arguments.length;
var i__7135__auto___17319 = (0);
while(true){
if((i__7135__auto___17319 < len__7134__auto___17318)){
args__7141__auto__.push((arguments[i__7135__auto___17319]));

var G__17320 = (i__7135__auto___17319 + (1));
i__7135__auto___17319 = G__17320;
continue;
} else {
}
break;
}

var argseq__7142__auto__ = ((((0) < args__7141__auto__.length))?(new cljs.core.IndexedSeq(args__7141__auto__.slice((0)),(0),null)):null);
return bouncer.core.validate.cljs$core$IFn$_invoke$arity$variadic(argseq__7142__auto__);
});

bouncer.core.validate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__17312 = ((cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.next.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.core.with_default_messages,args], null));
var message_fn = cljs.core.nth.call(null,vec__17312,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__17312,(1),null);
var vec__17315 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__$1),cljs.core.next.call(null,args__$1)], null);
var m = cljs.core.nth.call(null,vec__17315,(0),null);
var forms = cljs.core.nth.call(null,vec__17315,(1),null);
return bouncer.core.validate_STAR_.call(null,message_fn,m,bouncer.core.build_steps.call(null,forms));
});

bouncer.core.validate.cljs$lang$maxFixedArity = (0);

bouncer.core.validate.cljs$lang$applyTo = (function (seq17311){
return bouncer.core.validate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17311));
});

/**
 * Takes a map and one or more validation functions with semantics provided by "validate". Returns true if the map passes all validations. False otherwise.
 */
bouncer.core.valid_QMARK_ = (function bouncer$core$valid_QMARK_(var_args){
var args__7141__auto__ = [];
var len__7134__auto___17322 = arguments.length;
var i__7135__auto___17323 = (0);
while(true){
if((i__7135__auto___17323 < len__7134__auto___17322)){
args__7141__auto__.push((arguments[i__7135__auto___17323]));

var G__17324 = (i__7135__auto___17323 + (1));
i__7135__auto___17323 = G__17324;
continue;
} else {
}
break;
}

var argseq__7142__auto__ = ((((0) < args__7141__auto__.length))?(new cljs.core.IndexedSeq(args__7141__auto__.slice((0)),(0),null)):null);
return bouncer.core.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__7142__auto__);
});

bouncer.core.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,cljs.core.apply.call(null,bouncer.core.validate,args)));
});

bouncer.core.valid_QMARK_.cljs$lang$maxFixedArity = (0);

bouncer.core.valid_QMARK_.cljs$lang$applyTo = (function (seq17321){
return bouncer.core.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17321));
});

