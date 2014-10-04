// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.util');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by looking up the proper merge function and in the
* supplied map of key -> merge-fn and using that for the big merge. If
* a key doesn't have a merge function, the right value wins (as with
* merge).
*/
om_bootstrap.util.merge_with_fns = (function merge_with_fns(k__GT_fn,maps){var merge_entry = (function merge_entry(m,e){var k = cljs.core.key.call(null,e);var v = cljs.core.val.call(null,e);var temp__4124__auto__ = (function (){var and__3546__auto__ = cljs.core.contains_QMARK_.call(null,m,k);if(and__3546__auto__)
{return k__GT_fn.call(null,k);
} else
{return and__3546__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var f = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),v));
} else
{return cljs.core.assoc.call(null,m,k,v);
}
});
var merge = (function merge(m1,m2){return cljs.core.reduce.call(null,merge_entry,(function (){var or__3558__auto__ = m1;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___14585 = schema.utils.use_fn_validation;var output_schema14580_14586 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);var input_schema14581_14587 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);var input_checker14582_14588 = schema.core.checker.call(null,input_schema14581_14587);var output_checker14583_14589 = schema.core.checker.call(null,output_schema14580_14586);/**
* Inputs: [x :- s/Any]
* Returns: [s/Any]
*/
om_bootstrap.util.collectify = ((function (ufv___14585,output_schema14580_14586,input_schema14581_14587,input_checker14582_14588,output_checker14583_14589){
return (function collectify(G__14584){var validate__5372__auto__ = ufv___14585.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___14590 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14584], null);var temp__4126__auto___14591 = input_checker14582_14588.call(null,args__5373__auto___14590);if(cljs.core.truth_(temp__4126__auto___14591))
{var error__5374__auto___14592 = temp__4126__auto___14591;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.call(null,error__5374__auto___14592)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14592,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___14590,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14581_14587,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var x = G__14584;while(true){
if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___14593 = output_checker14583_14589.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___14593))
{var error__5374__auto___14594 = temp__4126__auto___14593;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.call(null,error__5374__auto___14594)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14594,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14580_14586,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___14585,output_schema14580_14586,input_schema14581_14587,input_checker14582_14588,output_checker14583_14589))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema14580_14586,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14581_14587], null)));
var ufv___14600 = schema.utils.use_fn_validation;var output_schema14595_14601 = schema.core.Bool;var input_schema14596_14602 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker14597_14603 = schema.core.checker.call(null,input_schema14596_14602);var output_checker14598_14604 = schema.core.checker.call(null,output_schema14595_14601);/**
* Inputs: [child]
* Returns: s/Bool
* 
* TODO: Once Om updates its externs to include this file, we can
* remove the janky aget call.
*/
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___14600,output_schema14595_14601,input_schema14596_14602,input_checker14597_14603,output_checker14598_14604){
return (function strict_valid_component_QMARK_(G__14599){var validate__5372__auto__ = ufv___14600.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___14605 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14599], null);var temp__4126__auto___14606 = input_checker14597_14603.call(null,args__5373__auto___14605);if(cljs.core.truth_(temp__4126__auto___14606))
{var error__5374__auto___14607 = temp__4126__auto___14606;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.call(null,error__5374__auto___14607)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14607,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___14605,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14596_14602,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var child = G__14599;while(true){
return (React["isValidComponent"]).call(null,child);
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___14608 = output_checker14598_14604.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___14608))
{var error__5374__auto___14609 = temp__4126__auto___14608;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.call(null,error__5374__auto___14609)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14609,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14595_14601,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___14600,output_schema14595_14601,input_schema14596_14602,input_checker14597_14603,output_checker14598_14604))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema14595_14601,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14596_14602], null)));
var ufv___14615 = schema.utils.use_fn_validation;var output_schema14610_14616 = schema.core.Bool;var input_schema14611_14617 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker14612_14618 = schema.core.checker.call(null,input_schema14611_14617);var output_checker14613_14619 = schema.core.checker.call(null,output_schema14610_14616);/**
* Inputs: [child]
* Returns: s/Bool
* 
* Returns true if the supplied argument is a valid React component,
* false otherwise.
*/
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___14615,output_schema14610_14616,input_schema14611_14617,input_checker14612_14618,output_checker14613_14619){
return (function valid_component_QMARK_(G__14614){var validate__5372__auto__ = ufv___14615.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___14620 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14614], null);var temp__4126__auto___14621 = input_checker14612_14618.call(null,args__5373__auto___14620);if(cljs.core.truth_(temp__4126__auto___14621))
{var error__5374__auto___14622 = temp__4126__auto___14621;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.call(null,error__5374__auto___14622)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14622,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___14620,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14611_14617,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var child = G__14614;while(true){
var or__3558__auto__ = typeof child === 'string';if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = typeof child === 'number';if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{return om_bootstrap.util.strict_valid_component_QMARK_.call(null,child);
}
}
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___14623 = output_checker14613_14619.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___14623))
{var error__5374__auto___14624 = temp__4126__auto___14623;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.call(null,error__5374__auto___14624)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14624,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14610_14616,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___14615,output_schema14610_14616,input_schema14611_14617,input_checker14612_14618,output_checker14613_14619))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema14610_14616,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14611_14617], null)));
var ufv___14630 = schema.utils.use_fn_validation;var output_schema14625_14631 = schema.core.Bool;var input_schema14626_14632 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker14627_14633 = schema.core.checker.call(null,input_schema14626_14632);var output_checker14628_14634 = schema.core.checker.call(null,output_schema14625_14631);/**
* Inputs: [children]
* Returns: s/Bool
* 
* Returns true if the supplied sequence contains some valid React component,
* false otherwise.
*/
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___14630,output_schema14625_14631,input_schema14626_14632,input_checker14627_14633,output_checker14628_14634){
return (function some_valid_component_QMARK_(G__14629){var validate__5372__auto__ = ufv___14630.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___14635 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14629], null);var temp__4126__auto___14636 = input_checker14627_14633.call(null,args__5373__auto___14635);if(cljs.core.truth_(temp__4126__auto___14636))
{var error__5374__auto___14637 = temp__4126__auto___14636;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.call(null,error__5374__auto___14637)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14637,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___14635,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14626_14632,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var children = G__14629;while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___14638 = output_checker14628_14634.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___14638))
{var error__5374__auto___14639 = temp__4126__auto___14638;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.call(null,error__5374__auto___14639)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14639,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14625_14631,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___14630,output_schema14625_14631,input_schema14626_14632,input_checker14627_14633,output_checker14628_14634))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema14625_14631,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14626_14632], null)));
/**
* Generates a new function that calls each supplied side-effecting
* function.
*/
om_bootstrap.util.chain_fns = (function chain_fns(l,r){if(cljs.core.truth_((function (){var and__3546__auto__ = l;if(cljs.core.truth_(and__3546__auto__))
{return r;
} else
{return and__3546__auto__;
}
})()))
{return (function() { 
var G__14640__delegate = function (args){cljs.core.apply.call(null,l,args);
return cljs.core.apply.call(null,r,args);
};
var G__14640 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14640__delegate.call(this,args);};
G__14640.cljs$lang$maxFixedArity = 0;
G__14640.cljs$lang$applyTo = (function (arglist__14641){
var args = cljs.core.seq(arglist__14641);
return G__14640__delegate(args);
});
G__14640.cljs$core$IFn$_invoke$arity$variadic = G__14640__delegate;
return G__14640;
})()
;
} else
{var or__3558__auto__ = l;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return r;
}
}
});
/**
* Map of React keyword to a custom function for its merge. Tries to
* do a decent job with event handlers as well; currently only
* handles :on-select :on-click, :on-blur, kebab-cased as om-tools
* prefers.
*/
om_bootstrap.util.react_merges = (function (){var merge_class = (function (l,r){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(l)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r));
});var orig_fn = ((function (merge_class){
return (function (l,r){var or__3558__auto__ = l;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return r;
}
});})(merge_class))
;var empty_fn = ((function (merge_class,orig_fn){
return (function (_,___$1){return null;
});})(merge_class,orig_fn))
;return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"class","class",-2030961996)],[empty_fn,empty_fn,orig_fn,om_bootstrap.util.chain_fns,om_bootstrap.util.chain_fns,merge_class,cljs.core.merge,om_bootstrap.util.chain_fns,merge_class]);
})();
/**
* Merges two maps that represent React properties. Merges occur
* according to the functions defined in `react-merges`.
* @param {...*} var_args
*/
om_bootstrap.util.merge_props = (function() { 
var merge_props__delegate = function (prop_maps){var react_merge = (function react_merge(xs){return om_bootstrap.util.merge_with_fns.call(null,om_bootstrap.util.react_merges,xs);
});
var normalize_class = (function normalize_class(m){if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996)))
{return react_merge.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(m)], null)], null));
} else
{return m;
}
});
return react_merge.call(null,cljs.core.map.call(null,normalize_class,prop_maps));
};
var merge_props = function (var_args){
var prop_maps = null;if (arguments.length > 0) {
  prop_maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return merge_props__delegate.call(this,prop_maps);};
merge_props.cljs$lang$maxFixedArity = 0;
merge_props.cljs$lang$applyTo = (function (arglist__14642){
var prop_maps = cljs.core.seq(arglist__14642);
return merge_props__delegate(prop_maps);
});
merge_props.cljs$core$IFn$_invoke$arity$variadic = merge_props__delegate;
return merge_props;
})()
;
/**
* Returns a basic, shallow copy of the supplied JS object.
*/
om_bootstrap.util.copy_js = (function copy_js(arr){var ret = (function (){var obj14650 = {};return obj14650;
})();var seq__14651_14655 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));var chunk__14652_14656 = null;var count__14653_14657 = (0);var i__14654_14658 = (0);while(true){
if((i__14654_14658 < count__14653_14657))
{var k_14659 = cljs.core._nth.call(null,chunk__14652_14656,i__14654_14658);if(cljs.core.truth_(arr.hasOwnProperty(k_14659)))
{(ret[k_14659] = (arr[k_14659]));
} else
{}
{
var G__14660 = seq__14651_14655;
var G__14661 = chunk__14652_14656;
var G__14662 = count__14653_14657;
var G__14663 = (i__14654_14658 + (1));
seq__14651_14655 = G__14660;
chunk__14652_14656 = G__14661;
count__14653_14657 = G__14662;
i__14654_14658 = G__14663;
continue;
}
} else
{var temp__4126__auto___14664 = cljs.core.seq.call(null,seq__14651_14655);if(temp__4126__auto___14664)
{var seq__14651_14665__$1 = temp__4126__auto___14664;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14651_14665__$1))
{var c__4314__auto___14666 = cljs.core.chunk_first.call(null,seq__14651_14665__$1);{
var G__14667 = cljs.core.chunk_rest.call(null,seq__14651_14665__$1);
var G__14668 = c__4314__auto___14666;
var G__14669 = cljs.core.count.call(null,c__4314__auto___14666);
var G__14670 = (0);
seq__14651_14655 = G__14667;
chunk__14652_14656 = G__14668;
count__14653_14657 = G__14669;
i__14654_14658 = G__14670;
continue;
}
} else
{var k_14671 = cljs.core.first.call(null,seq__14651_14665__$1);if(cljs.core.truth_(arr.hasOwnProperty(k_14671)))
{(ret[k_14671] = (arr[k_14671]));
} else
{}
{
var G__14672 = cljs.core.next.call(null,seq__14651_14665__$1);
var G__14673 = null;
var G__14674 = (0);
var G__14675 = (0);
seq__14651_14655 = G__14672;
chunk__14652_14656 = G__14673;
count__14653_14657 = G__14674;
i__14654_14658 = G__14675;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
/**
* Merges the supplied extra properties into the underlying Om cursor
* and calls the constructor to clone the React component.
* 
* Requires that the supplied child has an Om cursor attached to it!
*/
om_bootstrap.util.clone_om = (function clone_om(child,extra_props){var om_props = om.core.get_props.call(null,child);return child.constructor((function (){var G__14677 = om_bootstrap.util.copy_js.call(null,child.props);(G__14677["__om_cursor"] = ((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,om_props):om_bootstrap.util.merge_props.call(null,om_props,extra_props)));
return G__14677;
})());
});
/**
* This function is called if the React component child was NOT
* generated by Om. Merges the supplied properties into the -props
* field of the supplied React component and creates a shallow copy.
*/
om_bootstrap.util.clone_basic_react = (function clone_basic_react(child,extra_props){var props = cljs.core.js__GT_clj.call(null,child.props,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);var new_props = cljs.core.merge.call(null,((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,props):om_bootstrap.util.merge_props.call(null,props,extra_props)),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props);if(cljs.core.truth_(temp__4126__auto__))
{var children = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),children], null);
} else
{return null;
}
})());return child.constructor(cljs.core.clj__GT_js.call(null,new_props));
});
/**
* Returns a shallow copy of the supplied component (child); the copy
* will have any props provided by extra-props merged in. Props are
* merged in the same manner as merge-props, so props like :class will
* be merged intelligently.
* 
* extra-props can be a function of the old props that returns new
* props, OR it can be a map of props.
* 
* If the supplied child is an Om component, any supplied extra
* properties will be merged into the underlying cursor and accessible
* in the Om constructor.
*/
om_bootstrap.util.clone_with_props = (function() {
var clone_with_props = null;
var clone_with_props__1 = (function (child){return clone_with_props.call(null,child,cljs.core.PersistentArrayMap.EMPTY);
});
var clone_with_props__2 = (function (child,extra_props){if(cljs.core.not.call(null,om_bootstrap.util.strict_valid_component_QMARK_.call(null,child)))
{return child;
} else
{if((cljs.core.map_QMARK_.call(null,extra_props)) && (cljs.core.empty_QMARK_.call(null,extra_props)))
{return child.constructor(child.props);
} else
{if(cljs.core.truth_(om.core.get_props.call(null,child)))
{return om_bootstrap.util.clone_om.call(null,child,extra_props);
} else
{return om_bootstrap.util.clone_basic_react.call(null,child,extra_props);

}
}
}
});
clone_with_props = function(child,extra_props){
switch(arguments.length){
case 1:
return clone_with_props__1.call(this,child);
case 2:
return clone_with_props__2.call(this,child,extra_props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_with_props.cljs$core$IFn$_invoke$arity$1 = clone_with_props__1;
clone_with_props.cljs$core$IFn$_invoke$arity$2 = clone_with_props__2;
return clone_with_props;
})()
;

//# sourceMappingURL=util.js.map