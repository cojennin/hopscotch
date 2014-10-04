// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.grid');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om_bootstrap.util');
goog.require('om_bootstrap.util');
goog.require('om_bootstrap.types');
goog.require('om_bootstrap.types');
om_bootstrap.grid.Grid = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fluid?","fluid?",-742121890)),schema.core.Bool], true, false));
om_bootstrap.grid.col_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"md-pull","md-pull",979081250),null,new cljs.core.Keyword(null,"lg","lg",-80787836),null,new cljs.core.Keyword(null,"lg-push","lg-push",606284103),null,new cljs.core.Keyword(null,"sm","sm",-1402575065),null,new cljs.core.Keyword(null,"lg-pull","lg-pull",70082794),null,new cljs.core.Keyword(null,"xs-push","xs-push",-1878478835),null,new cljs.core.Keyword(null,"xs","xs",649443341),null,new cljs.core.Keyword(null,"sm-offset","sm-offset",229619439),null,new cljs.core.Keyword(null,"sm-pull","sm-pull",-368259600),null,new cljs.core.Keyword(null,"lg-offset","lg-offset",-429200045),null,new cljs.core.Keyword(null,"md-push","md-push",288470810),null,new cljs.core.Keyword(null,"sm-push","sm-push",1835708573),null,new cljs.core.Keyword(null,"md-offset","md-offset",1274386877),null,new cljs.core.Keyword(null,"xs-pull","xs-pull",-132686786),null,new cljs.core.Keyword(null,"md","md",707286655),null,new cljs.core.Keyword(null,"xs-offset","xs-offset",-1940326689),null], null), null);
om_bootstrap.grid.Col = om_bootstrap.types.bootstrap.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,schema.core.optional_key,om_bootstrap.grid.col_keys),cljs.core.repeat.call(null,schema.core.Int)));
var ufv___17477 = schema.utils.use_fn_validation;var output_schema17469_17478 = om_bootstrap.types.Component;var input_schema17470_17479 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Grid,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker17471_17480 = schema.core.checker.call(null,input_schema17470_17479);var output_checker17472_17481 = schema.core.checker.call(null,output_schema17469_17478);/**
* Inputs: [opts :- Grid & children]
* Returns: t/Component
* 
* Generates a wrapper for a bootstrap grid.
* @param {...*} var_args
*/
om_bootstrap.grid.grid = ((function (ufv___17477,output_schema17469_17478,input_schema17470_17479,input_checker17471_17480,output_checker17472_17481){
return (function() { 
var grid__delegate = function (G__17473,rest17474){var validate__5372__auto__ = ufv___17477.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___17482 = cljs.core.list_STAR_.call(null,G__17473,rest17474);var temp__4126__auto___17483 = input_checker17471_17480.call(null,args__5373__auto___17482);if(cljs.core.truth_(temp__4126__auto___17483))
{var error__5374__auto___17484 = temp__4126__auto___17483;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.call(null,error__5374__auto___17484)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___17484,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___17482,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17470_17479,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var opts = G__17473;var children = rest17474;while(true){
var vec__17476 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);var bs = cljs.core.nth.call(null,vec__17476,(0),null);var props = cljs.core.nth.call(null,vec__17476,(1),null);var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___17485 = output_checker17472_17481.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___17485))
{var error__5374__auto___17486 = temp__4126__auto___17485;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"grid","grid",2043510127,null),cljs.core.pr_str.call(null,error__5374__auto___17486)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___17486,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17469_17478,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
};
var grid = function (G__17473,var_args){
var rest17474 = null;if (arguments.length > 1) {
  rest17474 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return grid__delegate.call(this,G__17473,rest17474);};
grid.cljs$lang$maxFixedArity = 1;
grid.cljs$lang$applyTo = (function (arglist__17487){
var G__17473 = cljs.core.first(arglist__17487);
var rest17474 = cljs.core.rest(arglist__17487);
return grid__delegate(G__17473,rest17474);
});
grid.cljs$core$IFn$_invoke$arity$variadic = grid__delegate;
return grid;
})()
;})(ufv___17477,output_schema17469_17478,input_schema17470_17479,input_checker17471_17480,output_checker17472_17481))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.grid),schema.core.make_fn_schema.call(null,output_schema17469_17478,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17470_17479], null)));
var ufv___17494 = schema.utils.use_fn_validation;var output_schema17488_17495 = om_bootstrap.types.Component;var input_schema17489_17496 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker17490_17497 = schema.core.checker.call(null,input_schema17489_17496);var output_checker17491_17498 = schema.core.checker.call(null,output_schema17488_17495);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Generates a Bootstrap row element.
* @param {...*} var_args
*/
om_bootstrap.grid.row = ((function (ufv___17494,output_schema17488_17495,input_schema17489_17496,input_checker17490_17497,output_checker17491_17498){
return (function() { 
var row__delegate = function (G__17492,rest17493){var validate__5372__auto__ = ufv___17494.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___17499 = cljs.core.list_STAR_.call(null,G__17492,rest17493);var temp__4126__auto___17500 = input_checker17490_17497.call(null,args__5373__auto___17499);if(cljs.core.truth_(temp__4126__auto___17500))
{var error__5374__auto___17501 = temp__4126__auto___17500;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.call(null,error__5374__auto___17501)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___17501,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___17499,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17489_17496,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var opts = G__17492;var children = rest17493;while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___17502 = output_checker17491_17498.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___17502))
{var error__5374__auto___17503 = temp__4126__auto___17502;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"row","row",1070392006,null),cljs.core.pr_str.call(null,error__5374__auto___17503)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___17503,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17488_17495,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
};
var row = function (G__17492,var_args){
var rest17493 = null;if (arguments.length > 1) {
  rest17493 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return row__delegate.call(this,G__17492,rest17493);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__17504){
var G__17492 = cljs.core.first(arglist__17504);
var rest17493 = cljs.core.rest(arglist__17504);
return row__delegate(G__17492,rest17493);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;})(ufv___17494,output_schema17488_17495,input_schema17489_17496,input_checker17490_17497,output_checker17491_17498))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.row),schema.core.make_fn_schema.call(null,output_schema17488_17495,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17489_17496], null)));
var ufv___17517 = schema.utils.use_fn_validation;var output_schema17505_17518 = om_bootstrap.types.Component;var input_schema17506_17519 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Col,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker17507_17520 = schema.core.checker.call(null,input_schema17506_17519);var output_checker17508_17521 = schema.core.checker.call(null,output_schema17505_17518);/**
* Inputs: [opts :- Col & children]
* Returns: t/Component
* 
* Generates a Bootstrap column element.
* @param {...*} var_args
*/
om_bootstrap.grid.col = ((function (ufv___17517,output_schema17505_17518,input_schema17506_17519,input_checker17507_17520,output_checker17508_17521){
return (function() { 
var col__delegate = function (G__17509,rest17510){var validate__5372__auto__ = ufv___17517.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___17522 = cljs.core.list_STAR_.call(null,G__17509,rest17510);var temp__4126__auto___17523 = input_checker17507_17520.call(null,args__5373__auto___17522);if(cljs.core.truth_(temp__4126__auto___17523))
{var error__5374__auto___17524 = temp__4126__auto___17523;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.call(null,error__5374__auto___17524)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___17524,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___17522,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17506_17519,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var opts = G__17509;var children = rest17510;while(true){
var vec__17514 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);var bs = cljs.core.nth.call(null,vec__17514,(0),null);var props = cljs.core.nth.call(null,vec__17514,(1),null);var class$ = om_tools.dom.class_set.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,((function (vec__17514,bs,props,validate__5372__auto__,ufv___17517,output_schema17505_17518,input_schema17506_17519,input_checker17507_17520,output_checker17508_17521){
return (function (p__17515){var vec__17516 = p__17515;var k = cljs.core.nth.call(null,vec__17516,(0),null);var v = cljs.core.nth.call(null,vec__17516,(1),null);return ("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
});})(vec__17514,bs,props,validate__5372__auto__,ufv___17517,output_schema17505_17518,input_schema17506_17519,input_checker17507_17520,output_checker17508_17521))
,cljs.core.select_keys.call(null,bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.call(null,true)));return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___17525 = output_checker17508_17521.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___17525))
{var error__5374__auto___17526 = temp__4126__auto___17525;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"col","col",-318831557,null),cljs.core.pr_str.call(null,error__5374__auto___17526)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___17526,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17505_17518,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
};
var col = function (G__17509,var_args){
var rest17510 = null;if (arguments.length > 1) {
  rest17510 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return col__delegate.call(this,G__17509,rest17510);};
col.cljs$lang$maxFixedArity = 1;
col.cljs$lang$applyTo = (function (arglist__17527){
var G__17509 = cljs.core.first(arglist__17527);
var rest17510 = cljs.core.rest(arglist__17527);
return col__delegate(G__17509,rest17510);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;})(ufv___17517,output_schema17505_17518,input_schema17506_17519,input_checker17507_17520,output_checker17508_17521))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.col),schema.core.make_fn_schema.call(null,output_schema17505_17518,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17506_17519], null)));

//# sourceMappingURL=grid.js.map