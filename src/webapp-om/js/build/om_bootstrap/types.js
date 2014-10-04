// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
var ufv___14502 = schema.utils.use_fn_validation;var output_schema14497_14503 = schema.core.Any;var input_schema14498_14504 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker14499_14505 = schema.core.checker.call(null,input_schema14498_14504);var output_checker14500_14506 = schema.core.checker.call(null,output_schema14497_14503);/**
* Inputs: [schema :- {s/Any s/Any}]
* 
* Returns all keys from a schema.
*/
om_bootstrap.types.schema_keys = ((function (ufv___14502,output_schema14497_14503,input_schema14498_14504,input_checker14499_14505,output_checker14500_14506){
return (function schema_keys(G__14501){var validate__5372__auto__ = ufv___14502.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___14507 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14501], null);var temp__4126__auto___14508 = input_checker14499_14505.call(null,args__5373__auto___14507);if(cljs.core.truth_(temp__4126__auto___14508))
{var error__5374__auto___14509 = temp__4126__auto___14508;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.call(null,error__5374__auto___14509)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14509,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___14507,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14498_14504,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var schema__$1 = G__14501;while(true){
return cljs.core.map.call(null,((function (validate__5372__auto__,ufv___14502,output_schema14497_14503,input_schema14498_14504,input_checker14499_14505,output_checker14500_14506){
return (function (k){if(schema.core.optional_key_QMARK_.call(null,k))
{return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else
{return k;
}
});})(validate__5372__auto__,ufv___14502,output_schema14497_14503,input_schema14498_14504,input_checker14499_14505,output_checker14500_14506))
,cljs.core.keys.call(null,schema__$1));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___14510 = output_checker14500_14506.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___14510))
{var error__5374__auto___14511 = temp__4126__auto___14510;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.call(null,error__5374__auto___14511)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14511,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14497_14503,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___14502,output_schema14497_14503,input_schema14498_14504,input_checker14499_14505,output_checker14500_14506))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.schema_keys),schema.core.make_fn_schema.call(null,output_schema14497_14503,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14498_14504], null)));
var ufv___14517 = schema.utils.use_fn_validation;var output_schema14512_14518 = schema.core.Any;var input_schema14513_14519 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);var input_checker14514_14520 = schema.core.checker.call(null,input_schema14513_14519);var output_checker14515_14521 = schema.core.checker.call(null,output_schema14512_14518);/**
* Inputs: [schema]
* 
* Returns a map schema that accepts the supplied map schema, plus any
* other optional keys that show up in the map. Such a schema can only
* enforce that required keys are missing.
*/
om_bootstrap.types.at_least = ((function (ufv___14517,output_schema14512_14518,input_schema14513_14519,input_checker14514_14520,output_checker14515_14521){
return (function at_least(G__14516){var validate__5372__auto__ = ufv___14517.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___14522 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14516], null);var temp__4126__auto___14523 = input_checker14514_14520.call(null,args__5373__auto___14522);if(cljs.core.truth_(temp__4126__auto___14523))
{var error__5374__auto___14524 = temp__4126__auto___14523;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.call(null,error__5374__auto___14524)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14524,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___14522,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14513_14519,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var schema__$1 = G__14516;while(true){
return cljs.core.assoc.call(null,schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___14525 = output_checker14515_14521.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___14525))
{var error__5374__auto___14526 = temp__4126__auto___14525;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.call(null,error__5374__auto___14526)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14526,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14512_14518,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___14517,output_schema14512_14518,input_schema14513_14519,input_checker14514_14520,output_checker14515_14521))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.at_least),schema.core.make_fn_schema.call(null,output_schema14512_14518,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14513_14519], null)));
om_bootstrap.types.Component = schema.core.named.call(null,schema.core.Any,"Alias for an om component, since I don't know what type to put here.");
om_bootstrap.types.Renderable = schema.core.named.call(null,schema.core.Any,"Anything that can get rendered.");
/**
* Map of keyword to the proper bootstrap class name.
*/
om_bootstrap.types.class_map = cljs.core.PersistentHashMap.fromArrays(["alert","label","form","progress-bar","modal","navbar","button-toolbar","panel-group","nav","column","row","input-group","panel","well","button-group","button","glyphicon"],["alert","label","form","progress-bar","modal","navbar","btn-toolbar","panel-group","nav","col","row","input-group","panel","well","btn-group","btn","glyphicon"]);
/**
* Map of style keywords -> styles.
*/
om_bootstrap.types.style_map = cljs.core.PersistentHashMap.fromArrays(["success","warning","inline","pills","info","tabs","primary","danger","link","default"],["success","warning","inline","pills","info","tabs","primary","danger","link","default"]);
om_bootstrap.types.size_map = new cljs.core.PersistentArrayMap(null, 4, ["large","lg","medium","md","small","sm","xsmall","xs"], null);
om_bootstrap.types.BSClass = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.class_map));
om_bootstrap.types.BSStyle = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.style_map));
om_bootstrap.types.BSSize = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.size_map));
om_bootstrap.types.BootstrapClass = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590)),om_bootstrap.types.BSClass,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)),om_bootstrap.types.BSStyle,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)),om_bootstrap.types.BSSize], true, false);
/**
* Applies all default bootstrap options to the supplied schema. If
* the incoming schema has one of the the keys from BootstrapClass,
* that wins (even if it's required).
*/
om_bootstrap.types.bootstrap = (function bootstrap(schema__$1){var bootstrap_schema = cljs.core.apply.call(null,cljs.core.dissoc,om_bootstrap.types.BootstrapClass,cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,cljs.core.select_keys.call(null,schema__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)], null)))));return om_bootstrap.types.at_least.call(null,cljs.core.merge.call(null,bootstrap_schema,schema__$1));
});
var ufv___14539 = schema.utils.use_fn_validation;var output_schema14527_14540 = schema.core.pair.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");var input_schema14528_14541 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_schema14533_14542 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null))], null);var input_checker14529_14543 = schema.core.checker.call(null,input_schema14528_14541);var output_checker14530_14544 = schema.core.checker.call(null,output_schema14527_14540);var input_checker14534_14545 = schema.core.checker.call(null,input_schema14533_14542);var output_checker14535_14546 = schema.core.checker.call(null,output_schema14527_14540);/**
* Inputs: ([schema opts] [schema opts defaults])
* Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
* 
* Returns two maps; the first is all of the schema options, the
* second is the REST of the options.
*/
om_bootstrap.types.separate = ((function (ufv___14539,output_schema14527_14540,input_schema14528_14541,input_schema14533_14542,input_checker14529_14543,output_checker14530_14544,input_checker14534_14545,output_checker14535_14546){
return (function() {
var separate = null;
var separate__2 = (function (G__14531,G__14532){var validate__5372__auto__ = ufv___14539.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___14547 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14531,G__14532], null);var temp__4126__auto___14548 = input_checker14529_14543.call(null,args__5373__auto___14547);if(cljs.core.truth_(temp__4126__auto___14548))
{var error__5374__auto___14549 = temp__4126__auto___14548;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__5374__auto___14549)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14549,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___14547,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14528_14541,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var schema__$1 = G__14531;var opts = G__14532;while(true){
return separate.call(null,schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___14550 = output_checker14530_14544.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___14550))
{var error__5374__auto___14551 = temp__4126__auto___14550;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__5374__auto___14551)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14551,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14527_14540,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});
var separate__3 = (function (G__14536,G__14537,G__14538){var validate__5372__auto__ = ufv___14539.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___14552 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14536,G__14537,G__14538], null);var temp__4126__auto___14553 = input_checker14534_14545.call(null,args__5373__auto___14552);if(cljs.core.truth_(temp__4126__auto___14553))
{var error__5374__auto___14554 = temp__4126__auto___14553;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__5374__auto___14554)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14554,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___14552,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14533_14542,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var schema__$1 = G__14536;var opts = G__14537;var defaults = G__14538;while(true){
var ks = cljs.core.set.call(null,om_bootstrap.types.schema_keys.call(null,om_bootstrap.types.bootstrap.call(null,schema__$1)));var opts__$1 = cljs.core.merge.call(null,defaults,opts);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1))], null);
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___14555 = output_checker14535_14546.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___14555))
{var error__5374__auto___14556 = temp__4126__auto___14555;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__5374__auto___14556)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14556,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14527_14540,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});
separate = function(G__14536,G__14537,G__14538){
switch(arguments.length){
case 2:
return separate__2.call(this,G__14536,G__14537);
case 3:
return separate__3.call(this,G__14536,G__14537,G__14538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
separate.cljs$core$IFn$_invoke$arity$2 = separate__2;
separate.cljs$core$IFn$_invoke$arity$3 = separate__3;
return separate;
})()
;})(ufv___14539,output_schema14527_14540,input_schema14528_14541,input_schema14533_14542,input_checker14529_14543,output_checker14530_14544,input_checker14534_14545,output_checker14535_14546))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.separate),schema.core.make_fn_schema.call(null,output_schema14527_14540,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14528_14541,input_schema14533_14542], null)));
var ufv___14570 = schema.utils.use_fn_validation;var output_schema14557_14571 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);var input_schema14558_14572 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.types.at_least.call(null,om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker14559_14573 = schema.core.checker.call(null,input_schema14558_14572);var output_checker14560_14574 = schema.core.checker.call(null,output_schema14557_14571);/**
* Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
* Returns: {s/Str s/Bool}
* 
* Returns input for class-set.
*/
om_bootstrap.types.bs_class_set = ((function (ufv___14570,output_schema14557_14571,input_schema14558_14572,input_checker14559_14573,output_checker14560_14574){
return (function bs_class_set(G__14561){var validate__5372__auto__ = ufv___14570.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___14575 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14561], null);var temp__4126__auto___14576 = input_checker14559_14573.call(null,args__5373__auto___14575);if(cljs.core.truth_(temp__4126__auto___14576))
{var error__5374__auto___14577 = temp__4126__auto___14576;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.call(null,error__5374__auto___14577)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14577,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___14575,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14558_14572,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var G__14567 = G__14561;var map__14568 = G__14567;var map__14568__$1 = ((cljs.core.seq_QMARK_.call(null,map__14568))?cljs.core.apply.call(null,cljs.core.hash_map,map__14568):map__14568);var bs_size = cljs.core.get.call(null,map__14568__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style = cljs.core.get.call(null,map__14568__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class = cljs.core.get.call(null,map__14568__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var G__14567__$1 = G__14567;while(true){
var map__14569 = G__14567__$1;var map__14569__$1 = ((cljs.core.seq_QMARK_.call(null,map__14569))?cljs.core.apply.call(null,cljs.core.hash_map,map__14569):map__14569);var bs_size__$1 = cljs.core.get.call(null,map__14569__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));var bs_style__$1 = cljs.core.get.call(null,map__14569__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var bs_class__$1 = cljs.core.get.call(null,map__14569__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));var temp__4124__auto__ = om_bootstrap.types.class_map.call(null,bs_class__$1);if(cljs.core.truth_(temp__4124__auto__))
{var klass = temp__4124__auto__;var prefix = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,klass))+"-");return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4126__auto__ = om_bootstrap.types.size_map.call(null,bs_size__$1);if(cljs.core.truth_(temp__4126__auto__))
{var size = temp__4126__auto__;return new cljs.core.PersistentArrayMap.fromArray([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size))),true], true, false);
} else
{return null;
}
})(),(function (){var temp__4126__auto__ = om_bootstrap.types.style_map.call(null,bs_style__$1);if(cljs.core.truth_(temp__4126__auto__))
{var style = temp__4126__auto__;return new cljs.core.PersistentArrayMap.fromArray([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,style))),true], true, false);
} else
{return null;
}
})());
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___14578 = output_checker14560_14574.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___14578))
{var error__5374__auto___14579 = temp__4126__auto___14578;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.call(null,error__5374__auto___14579)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14579,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14557_14571,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___14570,output_schema14557_14571,input_schema14558_14572,input_checker14559_14573,output_checker14560_14574))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.bs_class_set),schema.core.make_fn_schema.call(null,output_schema14557_14571,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14558_14572], null)));

//# sourceMappingURL=types.js.map