// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__5397__5398__auto__){var G__10338 = p1__5397__5398__auto__;if(G__10338)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__10338.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__10338.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__10338);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__10338);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__10339_SHARP_){return (cljs.core.val.call(null,p1__10339_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__10341 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__10341,(0),null);var v = cljs.core.nth.call(null,vec__10341,(1),null);var p = vec__10341;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___10347 = schema.utils.use_fn_validation;var output_schema10342_10348 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema10343_10349 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker10344_10350 = schema.core.checker.call(null,input_schema10343_10349);var output_checker10345_10351 = schema.core.checker.call(null,output_schema10342_10348);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___10347,output_schema10342_10348,input_schema10343_10349,input_checker10344_10350,output_checker10345_10351){
return (function unwrap_schema_form_key(G__10346){var validate__5367__auto__ = ufv___10347.get_cell();if(cljs.core.truth_(validate__5367__auto__))
{var args__5368__auto___10352 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10346], null);var temp__4126__auto___10353 = input_checker10344_10350.call(null,args__5368__auto___10352);if(cljs.core.truth_(temp__4126__auto___10353))
{var error__5369__auto___10354 = temp__4126__auto___10353;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__5369__auto___10354)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10343_10349,new cljs.core.Keyword(null,"value","value",305978217),args__5368__auto___10352,new cljs.core.Keyword(null,"error","error",-978969032),error__5369__auto___10354], null));
} else
{}
} else
{}
var o__5370__auto__ = (function (){var k = G__10346;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__5367__auto__))
{var temp__4126__auto___10355 = output_checker10345_10351.call(null,o__5370__auto__);if(cljs.core.truth_(temp__4126__auto___10355))
{var error__5369__auto___10356 = temp__4126__auto___10355;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__5369__auto___10356)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10342_10348,new cljs.core.Keyword(null,"value","value",305978217),o__5370__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5369__auto___10356], null));
} else
{}
} else
{}
return o__5370__auto__;
});})(ufv___10347,output_schema10342_10348,input_schema10343_10349,input_checker10344_10350,output_checker10345_10351))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema10342_10348,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10343_10349], null)));
var ufv___10362 = schema.utils.use_fn_validation;var output_schema10357_10363 = schema.core.Any;var input_schema10358_10364 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker10359_10365 = schema.core.checker.call(null,input_schema10358_10364);var output_checker10360_10366 = schema.core.checker.call(null,output_schema10357_10363);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___10362,output_schema10357_10363,input_schema10358_10364,input_checker10359_10365,output_checker10360_10366){
return (function explicit_schema_key_map(G__10361){var validate__5367__auto__ = ufv___10362.get_cell();if(cljs.core.truth_(validate__5367__auto__))
{var args__5368__auto___10367 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10361], null);var temp__4126__auto___10368 = input_checker10359_10365.call(null,args__5368__auto___10367);if(cljs.core.truth_(temp__4126__auto___10368))
{var error__5369__auto___10369 = temp__4126__auto___10368;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__5369__auto___10369)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10358_10364,new cljs.core.Keyword(null,"value","value",305978217),args__5368__auto___10367,new cljs.core.Keyword(null,"error","error",-978969032),error__5369__auto___10369], null));
} else
{}
} else
{}
var o__5370__auto__ = (function (){var s = G__10361;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__5367__auto__))
{var temp__4126__auto___10370 = output_checker10360_10366.call(null,o__5370__auto__);if(cljs.core.truth_(temp__4126__auto___10370))
{var error__5369__auto___10371 = temp__4126__auto___10370;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__5369__auto___10371)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10357_10363,new cljs.core.Keyword(null,"value","value",305978217),o__5370__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5369__auto___10371], null));
} else
{}
} else
{}
return o__5370__auto__;
});})(ufv___10362,output_schema10357_10363,input_schema10358_10364,input_checker10359_10365,output_checker10360_10366))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema10357_10363,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10358_10364], null)));
var ufv___10377 = schema.utils.use_fn_validation;var output_schema10372_10378 = schema.core.Any;var input_schema10373_10379 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker10374_10380 = schema.core.checker.call(null,input_schema10373_10379);var output_checker10375_10381 = schema.core.checker.call(null,output_schema10372_10378);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___10377,output_schema10372_10378,input_schema10373_10379,input_checker10374_10380,output_checker10375_10381){
return (function split_schema_keys(G__10376){var validate__5367__auto__ = ufv___10377.get_cell();if(cljs.core.truth_(validate__5367__auto__))
{var args__5368__auto___10382 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10376], null);var temp__4126__auto___10383 = input_checker10374_10380.call(null,args__5368__auto___10382);if(cljs.core.truth_(temp__4126__auto___10383))
{var error__5369__auto___10384 = temp__4126__auto___10383;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__5369__auto___10384)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10373_10379,new cljs.core.Keyword(null,"value","value",305978217),args__5368__auto___10382,new cljs.core.Keyword(null,"error","error",-978969032),error__5369__auto___10384], null));
} else
{}
} else
{}
var o__5370__auto__ = (function (){var s = G__10376;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__5367__auto__))
{var temp__4126__auto___10385 = output_checker10375_10381.call(null,o__5370__auto__);if(cljs.core.truth_(temp__4126__auto___10385))
{var error__5369__auto___10386 = temp__4126__auto___10385;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__5369__auto___10386)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10372_10378,new cljs.core.Keyword(null,"value","value",305978217),o__5370__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5369__auto___10386], null));
} else
{}
} else
{}
return o__5370__auto__;
});})(ufv___10377,output_schema10372_10378,input_schema10373_10379,input_checker10374_10380,output_checker10375_10381))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema10372_10378,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10373_10379], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__10390){var vec__10391 = p__10390;var k = cljs.core.nth.call(null,vec__10391,(0),null);var v = cljs.core.nth.call(null,vec__10391,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__10392 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__10392,(0),null);var ov = cljs.core.nth.call(null,vec__10392,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__10393){
var key_project = cljs.core.first(arglist__10393);
arglist__10393 = cljs.core.next(arglist__10393);
var key_combine = cljs.core.first(arglist__10393);
arglist__10393 = cljs.core.next(arglist__10393);
var val_combine = cljs.core.first(arglist__10393);
var maps = cljs.core.rest(arglist__10393);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___10401 = schema.utils.use_fn_validation;var output_schema10395_10402 = plumbing.fnk.schema.InputSchema;var input_schema10396_10403 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker10397_10404 = schema.core.checker.call(null,input_schema10396_10403);var output_checker10398_10405 = schema.core.checker.call(null,output_schema10395_10402);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___10401,output_schema10395_10402,input_schema10396_10403,input_checker10397_10404,output_checker10398_10405){
return (function union_input_schemata(G__10399,G__10400){var validate__5367__auto__ = ufv___10401.get_cell();if(cljs.core.truth_(validate__5367__auto__))
{var args__5368__auto___10406 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10399,G__10400], null);var temp__4126__auto___10407 = input_checker10397_10404.call(null,args__5368__auto___10406);if(cljs.core.truth_(temp__4126__auto___10407))
{var error__5369__auto___10408 = temp__4126__auto___10407;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__5369__auto___10408)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10396_10403,new cljs.core.Keyword(null,"value","value",305978217),args__5368__auto___10406,new cljs.core.Keyword(null,"error","error",-978969032),error__5369__auto___10408], null));
} else
{}
} else
{}
var o__5370__auto__ = (function (){var i1 = G__10399;var i2 = G__10400;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__5367__auto__,ufv___10401,output_schema10395_10402,input_schema10396_10403,input_checker10397_10404,output_checker10398_10405){
return (function (p1__10394_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__10394_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__10394_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__5367__auto__,ufv___10401,output_schema10395_10402,input_schema10396_10403,input_checker10397_10404,output_checker10398_10405))
,((function (validate__5367__auto__,ufv___10401,output_schema10395_10402,input_schema10396_10403,input_checker10397_10404,output_checker10398_10405){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__5367__auto__,ufv___10401,output_schema10395_10402,input_schema10396_10403,input_checker10397_10404,output_checker10398_10405))
,((function (validate__5367__auto__,ufv___10401,output_schema10395_10402,input_schema10396_10403,input_checker10397_10404,output_checker10398_10405){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__5367__auto__,ufv___10401,output_schema10395_10402,input_schema10396_10403,input_checker10397_10404,output_checker10398_10405))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__5367__auto__))
{var temp__4126__auto___10409 = output_checker10398_10405.call(null,o__5370__auto__);if(cljs.core.truth_(temp__4126__auto___10409))
{var error__5369__auto___10410 = temp__4126__auto___10409;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__5369__auto___10410)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10395_10402,new cljs.core.Keyword(null,"value","value",305978217),o__5370__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5369__auto___10410], null));
} else
{}
} else
{}
return o__5370__auto__;
});})(ufv___10401,output_schema10395_10402,input_schema10396_10403,input_checker10397_10404,output_checker10398_10405))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema10395_10402,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10396_10403], null)));
var ufv___10416 = schema.utils.use_fn_validation;var output_schema10411_10417 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema10412_10418 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker10413_10419 = schema.core.checker.call(null,input_schema10412_10418);var output_checker10414_10420 = schema.core.checker.call(null,output_schema10411_10417);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___10416,output_schema10411_10417,input_schema10412_10418,input_checker10413_10419,output_checker10414_10420){
return (function required_toplevel_keys(G__10415){var validate__5367__auto__ = ufv___10416.get_cell();if(cljs.core.truth_(validate__5367__auto__))
{var args__5368__auto___10421 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10415], null);var temp__4126__auto___10422 = input_checker10413_10419.call(null,args__5368__auto___10421);if(cljs.core.truth_(temp__4126__auto___10422))
{var error__5369__auto___10423 = temp__4126__auto___10422;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__5369__auto___10423)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10412_10418,new cljs.core.Keyword(null,"value","value",305978217),args__5368__auto___10421,new cljs.core.Keyword(null,"error","error",-978969032),error__5369__auto___10423], null));
} else
{}
} else
{}
var o__5370__auto__ = (function (){var input_schema = G__10415;while(true){
return cljs.core.keep.call(null,((function (validate__5367__auto__,ufv___10416,output_schema10411_10417,input_schema10412_10418,input_checker10413_10419,output_checker10414_10420){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__5367__auto__,ufv___10416,output_schema10411_10417,input_schema10412_10418,input_checker10413_10419,output_checker10414_10420))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__5367__auto__))
{var temp__4126__auto___10424 = output_checker10414_10420.call(null,o__5370__auto__);if(cljs.core.truth_(temp__4126__auto___10424))
{var error__5369__auto___10425 = temp__4126__auto___10424;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__5369__auto___10425)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10411_10417,new cljs.core.Keyword(null,"value","value",305978217),o__5370__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5369__auto___10425], null));
} else
{}
} else
{}
return o__5370__auto__;
});})(ufv___10416,output_schema10411_10417,input_schema10412_10418,input_checker10413_10419,output_checker10414_10420))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema10411_10417,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10412_10418], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__10434(s__10435){return (new cljs.core.LazySeq(null,(function (){var s__10435__$1 = s__10435;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10435__$1);if(temp__4126__auto__)
{var s__10435__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10435__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__10435__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__10437 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__10436 = (0);while(true){
if((i__10436 < size__4282__auto__))
{var vec__10440 = cljs.core._nth.call(null,c__4281__auto__,i__10436);var k = cljs.core.nth.call(null,vec__10440,(0),null);var v = cljs.core.nth.call(null,vec__10440,(1),null);cljs.core.chunk_append.call(null,b__10437,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__10442 = (i__10436 + (1));
i__10436 = G__10442;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10437),iter__10434.call(null,cljs.core.chunk_rest.call(null,s__10435__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10437),null);
}
} else
{var vec__10441 = cljs.core.first.call(null,s__10435__$2);var k = cljs.core.nth.call(null,vec__10441,(0),null);var v = cljs.core.nth.call(null,vec__10441,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__10434.call(null,cljs.core.rest.call(null,s__10435__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__10451(s__10452){return (new cljs.core.LazySeq(null,(function (){var s__10452__$1 = s__10452;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10452__$1);if(temp__4126__auto__)
{var s__10452__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10452__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__10452__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__10454 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__10453 = (0);while(true){
if((i__10453 < size__4282__auto__))
{var vec__10457 = cljs.core._nth.call(null,c__4281__auto__,i__10453);var k = cljs.core.nth.call(null,vec__10457,(0),null);var v = cljs.core.nth.call(null,vec__10457,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__10454,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__10459 = (i__10453 + (1));
i__10453 = G__10459;
continue;
}
} else
{{
var G__10460 = (i__10453 + (1));
i__10453 = G__10460;
continue;
}
}
} else
{{
var G__10461 = (i__10453 + (1));
i__10453 = G__10461;
continue;
}
}
} else
{{
var G__10462 = (i__10453 + (1));
i__10453 = G__10462;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10454),iter__10451.call(null,cljs.core.chunk_rest.call(null,s__10452__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10454),null);
}
} else
{var vec__10458 = cljs.core.first.call(null,s__10452__$2);var k = cljs.core.nth.call(null,vec__10458,(0),null);var v = cljs.core.nth.call(null,vec__10458,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__10451.call(null,cljs.core.rest.call(null,s__10452__$2)));
} else
{{
var G__10463 = cljs.core.rest.call(null,s__10452__$2);
s__10452__$1 = G__10463;
continue;
}
}
} else
{{
var G__10464 = cljs.core.rest.call(null,s__10452__$2);
s__10452__$1 = G__10464;
continue;
}
}
} else
{{
var G__10465 = cljs.core.rest.call(null,s__10452__$2);
s__10452__$1 = G__10465;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___10488 = schema.utils.use_fn_validation;var output_schema10466_10489 = schema.core.Any;var input_schema10467_10490 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker10468_10491 = schema.core.checker.call(null,input_schema10467_10490);var output_checker10469_10492 = schema.core.checker.call(null,output_schema10466_10489);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___10488,output_schema10466_10489,input_schema10467_10490,input_checker10468_10491,output_checker10469_10492){
return (function compose_schemata(G__10470,G__10471){var validate__5367__auto__ = true;if(validate__5367__auto__)
{var args__5368__auto___10493 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10470,G__10471], null);var temp__4126__auto___10494 = input_checker10468_10491.call(null,args__5368__auto___10493);if(cljs.core.truth_(temp__4126__auto___10494))
{var error__5369__auto___10495 = temp__4126__auto___10494;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__5369__auto___10495)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10467_10490,new cljs.core.Keyword(null,"value","value",305978217),args__5368__auto___10493,new cljs.core.Keyword(null,"error","error",-978969032),error__5369__auto___10495], null));
} else
{}
} else
{}
var o__5370__auto__ = (function (){var G__10482 = G__10470;var vec__10484 = G__10482;var i2 = cljs.core.nth.call(null,vec__10484,(0),null);var o2 = cljs.core.nth.call(null,vec__10484,(1),null);var G__10483 = G__10471;var vec__10485 = G__10483;var i1 = cljs.core.nth.call(null,vec__10485,(0),null);var o1 = cljs.core.nth.call(null,vec__10485,(1),null);var G__10482__$1 = G__10482;var G__10483__$1 = G__10483;while(true){
var vec__10486 = G__10482__$1;var i2__$1 = cljs.core.nth.call(null,vec__10486,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__10486,(1),null);var vec__10487 = G__10483__$1;var i1__$1 = cljs.core.nth.call(null,vec__10487,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__10487,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__5367__auto__)
{var temp__4126__auto___10496 = output_checker10469_10492.call(null,o__5370__auto__);if(cljs.core.truth_(temp__4126__auto___10496))
{var error__5369__auto___10497 = temp__4126__auto___10496;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__5369__auto___10497)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10466_10489,new cljs.core.Keyword(null,"value","value",305978217),o__5370__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5369__auto___10497], null));
} else
{}
} else
{}
return o__5370__auto__;
});})(ufv___10488,output_schema10466_10489,input_schema10467_10490,input_checker10468_10491,output_checker10469_10492))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema10466_10489,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10467_10490], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___10576 = schema.utils.use_fn_validation;var output_schema10498_10577 = schema.core.Any;var input_schema10499_10578 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker10500_10579 = schema.core.checker.call(null,input_schema10499_10578);var output_checker10501_10580 = schema.core.checker.call(null,output_schema10498_10577);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___10576,output_schema10498_10577,input_schema10499_10578,input_checker10500_10579,output_checker10501_10580){
return (function split_schema(G__10502,G__10503){var validate__5367__auto__ = ufv___10576.get_cell();if(cljs.core.truth_(validate__5367__auto__))
{var args__5368__auto___10581 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10502,G__10503], null);var temp__4126__auto___10582 = input_checker10500_10579.call(null,args__5368__auto___10581);if(cljs.core.truth_(temp__4126__auto___10582))
{var error__5369__auto___10583 = temp__4126__auto___10582;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__5369__auto___10583)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10499_10578,new cljs.core.Keyword(null,"value","value",305978217),args__5368__auto___10581,new cljs.core.Keyword(null,"error","error",-978969032),error__5369__auto___10583], null));
} else
{}
} else
{}
var o__5370__auto__ = (function (){var s = G__10502;var ks = G__10503;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4283__auto__ = ((function (ks__$1,validate__5367__auto__,ufv___10576,output_schema10498_10577,input_schema10499_10578,input_checker10500_10579,output_checker10501_10580){
return (function iter__10540(s__10541){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__5367__auto__,ufv___10576,output_schema10498_10577,input_schema10499_10578,input_checker10500_10579,output_checker10501_10580){
return (function (){var s__10541__$1 = s__10541;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10541__$1);if(temp__4126__auto__)
{var s__10541__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10541__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__10541__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__10543 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__10542 = (0);while(true){
if((i__10542 < size__4282__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4281__auto__,i__10542);cljs.core.chunk_append.call(null,b__10543,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (i__10542,in_QMARK_,c__4281__auto__,size__4282__auto__,b__10543,s__10541__$2,temp__4126__auto__,ks__$1,validate__5367__auto__,ufv___10576,output_schema10498_10577,input_schema10499_10578,input_checker10500_10579,output_checker10501_10580){
return (function iter__10560(s__10561){return (new cljs.core.LazySeq(null,((function (i__10542,in_QMARK_,c__4281__auto__,size__4282__auto__,b__10543,s__10541__$2,temp__4126__auto__,ks__$1,validate__5367__auto__,ufv___10576,output_schema10498_10577,input_schema10499_10578,input_checker10500_10579,output_checker10501_10580){
return (function (){var s__10561__$1 = s__10561;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10561__$1);if(temp__4126__auto____$1)
{var s__10561__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10561__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__10561__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__10563 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__10562 = (0);while(true){
if((i__10562 < size__4282__auto____$1))
{var vec__10566 = cljs.core._nth.call(null,c__4281__auto____$1,i__10562);var k = cljs.core.nth.call(null,vec__10566,(0),null);var v = cljs.core.nth.call(null,vec__10566,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__10563,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__10584 = (i__10562 + (1));
i__10562 = G__10584;
continue;
}
} else
{{
var G__10585 = (i__10562 + (1));
i__10562 = G__10585;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10563),iter__10560.call(null,cljs.core.chunk_rest.call(null,s__10561__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10563),null);
}
} else
{var vec__10567 = cljs.core.first.call(null,s__10561__$2);var k = cljs.core.nth.call(null,vec__10567,(0),null);var v = cljs.core.nth.call(null,vec__10567,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__10560.call(null,cljs.core.rest.call(null,s__10561__$2)));
} else
{{
var G__10586 = cljs.core.rest.call(null,s__10561__$2);
s__10561__$1 = G__10586;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__10542,in_QMARK_,c__4281__auto__,size__4282__auto__,b__10543,s__10541__$2,temp__4126__auto__,ks__$1,validate__5367__auto__,ufv___10576,output_schema10498_10577,input_schema10499_10578,input_checker10500_10579,output_checker10501_10580))
,null,null));
});})(i__10542,in_QMARK_,c__4281__auto__,size__4282__auto__,b__10543,s__10541__$2,temp__4126__auto__,ks__$1,validate__5367__auto__,ufv___10576,output_schema10498_10577,input_schema10499_10578,input_checker10500_10579,output_checker10501_10580))
;return iter__4283__auto__.call(null,s);
})()));
{
var G__10587 = (i__10542 + (1));
i__10542 = G__10587;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10543),iter__10540.call(null,cljs.core.chunk_rest.call(null,s__10541__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10543),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__10541__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (in_QMARK_,s__10541__$2,temp__4126__auto__,ks__$1,validate__5367__auto__,ufv___10576,output_schema10498_10577,input_schema10499_10578,input_checker10500_10579,output_checker10501_10580){
return (function iter__10568(s__10569){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__10541__$2,temp__4126__auto__,ks__$1,validate__5367__auto__,ufv___10576,output_schema10498_10577,input_schema10499_10578,input_checker10500_10579,output_checker10501_10580){
return (function (){var s__10569__$1 = s__10569;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10569__$1);if(temp__4126__auto____$1)
{var s__10569__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10569__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__10569__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__10571 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__10570 = (0);while(true){
if((i__10570 < size__4282__auto__))
{var vec__10574 = cljs.core._nth.call(null,c__4281__auto__,i__10570);var k = cljs.core.nth.call(null,vec__10574,(0),null);var v = cljs.core.nth.call(null,vec__10574,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__10571,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__10588 = (i__10570 + (1));
i__10570 = G__10588;
continue;
}
} else
{{
var G__10589 = (i__10570 + (1));
i__10570 = G__10589;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10571),iter__10568.call(null,cljs.core.chunk_rest.call(null,s__10569__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10571),null);
}
} else
{var vec__10575 = cljs.core.first.call(null,s__10569__$2);var k = cljs.core.nth.call(null,vec__10575,(0),null);var v = cljs.core.nth.call(null,vec__10575,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__10568.call(null,cljs.core.rest.call(null,s__10569__$2)));
} else
{{
var G__10590 = cljs.core.rest.call(null,s__10569__$2);
s__10569__$1 = G__10590;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__10541__$2,temp__4126__auto__,ks__$1,validate__5367__auto__,ufv___10576,output_schema10498_10577,input_schema10499_10578,input_checker10500_10579,output_checker10501_10580))
,null,null));
});})(in_QMARK_,s__10541__$2,temp__4126__auto__,ks__$1,validate__5367__auto__,ufv___10576,output_schema10498_10577,input_schema10499_10578,input_checker10500_10579,output_checker10501_10580))
;return iter__4283__auto__.call(null,s);
})()),iter__10540.call(null,cljs.core.rest.call(null,s__10541__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__5367__auto__,ufv___10576,output_schema10498_10577,input_schema10499_10578,input_checker10500_10579,output_checker10501_10580))
,null,null));
});})(ks__$1,validate__5367__auto__,ufv___10576,output_schema10498_10577,input_schema10499_10578,input_checker10500_10579,output_checker10501_10580))
;return iter__4283__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__5367__auto__))
{var temp__4126__auto___10591 = output_checker10501_10580.call(null,o__5370__auto__);if(cljs.core.truth_(temp__4126__auto___10591))
{var error__5369__auto___10592 = temp__4126__auto___10591;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__5369__auto___10592)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10498_10577,new cljs.core.Keyword(null,"value","value",305978217),o__5370__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5369__auto___10592], null));
} else
{}
} else
{}
return o__5370__auto__;
});})(ufv___10576,output_schema10498_10577,input_schema10499_10578,input_checker10500_10579,output_checker10501_10580))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema10498_10577,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10499_10578], null)));
var ufv___10623 = schema.utils.use_fn_validation;var output_schema10593_10624 = plumbing.fnk.schema.GraphIOSchemata;var input_schema10594_10625 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker10595_10626 = schema.core.checker.call(null,input_schema10594_10625);var output_checker10596_10627 = schema.core.checker.call(null,output_schema10593_10624);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___10623,output_schema10593_10624,input_schema10594_10625,input_checker10595_10626,output_checker10596_10627){
return (function sequence_schemata(G__10597,G__10598){var validate__5367__auto__ = ufv___10623.get_cell();if(cljs.core.truth_(validate__5367__auto__))
{var args__5368__auto___10628 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10597,G__10598], null);var temp__4126__auto___10629 = input_checker10595_10626.call(null,args__5368__auto___10628);if(cljs.core.truth_(temp__4126__auto___10629))
{var error__5369__auto___10630 = temp__4126__auto___10629;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__5369__auto___10630)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10594_10625,new cljs.core.Keyword(null,"value","value",305978217),args__5368__auto___10628,new cljs.core.Keyword(null,"error","error",-978969032),error__5369__auto___10630], null));
} else
{}
} else
{}
var o__5370__auto__ = (function (){var G__10614 = G__10597;var vec__10616 = G__10614;var i1 = cljs.core.nth.call(null,vec__10616,(0),null);var o1 = cljs.core.nth.call(null,vec__10616,(1),null);var G__10615 = G__10598;var vec__10617 = G__10615;var k = cljs.core.nth.call(null,vec__10617,(0),null);var vec__10618 = cljs.core.nth.call(null,vec__10617,(1),null);var i2 = cljs.core.nth.call(null,vec__10618,(0),null);var o2 = cljs.core.nth.call(null,vec__10618,(1),null);var G__10614__$1 = G__10614;var G__10615__$1 = G__10615;while(true){
var vec__10619 = G__10614__$1;var i1__$1 = cljs.core.nth.call(null,vec__10619,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__10619,(1),null);var vec__10620 = G__10615__$1;var k__$1 = cljs.core.nth.call(null,vec__10620,(0),null);var vec__10621 = cljs.core.nth.call(null,vec__10620,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__10621,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__10621,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__10622 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__10622,(0),null);var unused = cljs.core.nth.call(null,vec__10622,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__5367__auto__))
{var temp__4126__auto___10631 = output_checker10596_10627.call(null,o__5370__auto__);if(cljs.core.truth_(temp__4126__auto___10631))
{var error__5369__auto___10632 = temp__4126__auto___10631;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__5369__auto___10632)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10593_10624,new cljs.core.Keyword(null,"value","value",305978217),o__5370__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5369__auto___10632], null));
} else
{}
} else
{}
return o__5370__auto__;
});})(ufv___10623,output_schema10593_10624,input_schema10594_10625,input_checker10595_10626,output_checker10596_10627))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema10593_10624,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10594_10625], null)));

//# sourceMappingURL=schema.js.map