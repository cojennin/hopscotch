// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.button');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.mixin');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om_bootstrap.mixins');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om.core');
goog.require('om.core');
goog.require('om_bootstrap.types');
goog.require('om_tools.dom');
om_bootstrap.button.Button = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"block?","block?",1102479923)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004)),schema.core.Bool], true, false));
om_bootstrap.button.ButtonGroup = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.Bool], true, false));
var ufv___14221 = schema.utils.use_fn_validation;var output_schema14215_14222 = schema.core.Any;var input_schema14216_14223 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.maybe.call(null,schema.core.Bool),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker14217_14224 = schema.core.checker.call(null,input_schema14216_14223);var output_checker14218_14225 = schema.core.checker.call(null,output_schema14215_14222);/**
* Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? (s/maybe s/Bool), :props {s/Any s/Any}} children]
*/
om_bootstrap.button.render_anchor = ((function (ufv___14221,output_schema14215_14222,input_schema14216_14223,input_checker14217_14224,output_checker14218_14225){
return (function render_anchor(G__14219,G__14220){var validate__5372__auto__ = ufv___14221.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___14226 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14219,G__14220], null);var temp__4126__auto___14227 = input_checker14217_14224.call(null,args__5373__auto___14226);if(cljs.core.truth_(temp__4126__auto___14227))
{var error__5374__auto___14228 = temp__4126__auto___14227;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),cljs.core.pr_str.call(null,error__5374__auto___14228)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14228,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___14226,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14216_14223,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var opts = G__14219;var children = G__14220;while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___14229 = output_checker14218_14225.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___14229))
{var error__5374__auto___14230 = temp__4126__auto___14229;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),cljs.core.pr_str.call(null,error__5374__auto___14230)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14230,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14215_14222,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___14221,output_schema14215_14222,input_schema14216_14223,input_checker14217_14224,output_checker14218_14225))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema14215_14222,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14216_14223], null)));
var ufv___14239 = schema.utils.use_fn_validation;var output_schema14231_14240 = om_bootstrap.types.Component;var input_schema14232_14241 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,new cljs.core.Symbol(null,"props","props",2093813254,null)),schema.core.Any], null);var input_checker14233_14242 = schema.core.checker.call(null,input_schema14232_14241);var output_checker14234_14243 = schema.core.checker.call(null,output_schema14231_14240);/**
* Inputs: [props :- Button & children]
* Returns: t/Component
* 
* Renders a button.
* @param {...*} var_args
*/
om_bootstrap.button.button = ((function (ufv___14239,output_schema14231_14240,input_schema14232_14241,input_checker14233_14242,output_checker14234_14243){
return (function() { 
var button__delegate = function (G__14235,rest14236){var validate__5372__auto__ = ufv___14239.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___14244 = cljs.core.list_STAR_.call(null,G__14235,rest14236);var temp__4126__auto___14245 = input_checker14233_14242.call(null,args__5373__auto___14244);if(cljs.core.truth_(temp__4126__auto___14245))
{var error__5374__auto___14246 = temp__4126__auto___14245;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.pr_str.call(null,error__5374__auto___14246)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14246,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___14244,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14232_14241,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var props = G__14235;var children = rest14236;while(true){
var vec__14238 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));var bs = cljs.core.nth.call(null,vec__14238,(0),null);var props__$1 = cljs.core.nth.call(null,vec__14238,(1),null);var klasses = (cljs.core.truth_(new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core.PersistentArrayMap.EMPTY:om_bootstrap.types.bs_class_set.call(null,bs));var klasses__$1 = cljs.core.merge.call(null,klasses,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-block","btn-block",967079535),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(bs)], null));if(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs)))
{return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs)], null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children)],null))));
} else
{if(cljs.core.truth_((function (){var or__3558__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props__$1);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs);
}
})()))
{return om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children);
} else
{return om_tools.dom.element.call(null,React.DOM.button,om_bootstrap.util.merge_props.call(null,props__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,klasses__$1),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

}
}
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___14247 = output_checker14234_14243.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___14247))
{var error__5374__auto___14248 = temp__4126__auto___14247;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.pr_str.call(null,error__5374__auto___14248)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14248,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14231_14240,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
};
var button = function (G__14235,var_args){
var rest14236 = null;if (arguments.length > 1) {
  rest14236 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return button__delegate.call(this,G__14235,rest14236);};
button.cljs$lang$maxFixedArity = 1;
button.cljs$lang$applyTo = (function (arglist__14249){
var G__14235 = cljs.core.first(arglist__14249);
var rest14236 = cljs.core.rest(arglist__14249);
return button__delegate(G__14235,rest14236);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;})(ufv___14239,output_schema14231_14240,input_schema14232_14241,input_checker14233_14242,output_checker14234_14243))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema14231_14240,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14232_14241], null)));
var ufv___14258 = schema.utils.use_fn_validation;var output_schema14250_14259 = om_bootstrap.types.Component;var input_schema14251_14260 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker14252_14261 = schema.core.checker.call(null,input_schema14251_14260);var output_checker14253_14262 = schema.core.checker.call(null,output_schema14250_14259);/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Renders a button toolbar.
* @param {...*} var_args
*/
om_bootstrap.button.toolbar = ((function (ufv___14258,output_schema14250_14259,input_schema14251_14260,input_checker14252_14261,output_checker14253_14262){
return (function() { 
var toolbar__delegate = function (G__14254,rest14255){var validate__5372__auto__ = ufv___14258.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___14263 = cljs.core.list_STAR_.call(null,G__14254,rest14255);var temp__4126__auto___14264 = input_checker14252_14261.call(null,args__5373__auto___14263);if(cljs.core.truth_(temp__4126__auto___14264))
{var error__5374__auto___14265 = temp__4126__auto___14264;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),cljs.core.pr_str.call(null,error__5374__auto___14265)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14265,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___14263,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14251_14260,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var opts = G__14254;var children = rest14255;while(true){
var vec__14257 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));var bs = cljs.core.nth.call(null,vec__14257,(0),null);var props = cljs.core.nth.call(null,vec__14257,(1),null);return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs))), "role": "toolbar"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___14266 = output_checker14253_14262.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___14266))
{var error__5374__auto___14267 = temp__4126__auto___14266;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),cljs.core.pr_str.call(null,error__5374__auto___14267)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14267,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14250_14259,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
};
var toolbar = function (G__14254,var_args){
var rest14255 = null;if (arguments.length > 1) {
  rest14255 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return toolbar__delegate.call(this,G__14254,rest14255);};
toolbar.cljs$lang$maxFixedArity = 1;
toolbar.cljs$lang$applyTo = (function (arglist__14268){
var G__14254 = cljs.core.first(arglist__14268);
var rest14255 = cljs.core.rest(arglist__14268);
return toolbar__delegate(G__14254,rest14255);
});
toolbar.cljs$core$IFn$_invoke$arity$variadic = toolbar__delegate;
return toolbar;
})()
;})(ufv___14258,output_schema14250_14259,input_schema14251_14260,input_checker14252_14261,output_checker14253_14262))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema14250_14259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14251_14260], null)));
var ufv___14277 = schema.utils.use_fn_validation;var output_schema14269_14278 = om_bootstrap.types.Component;var input_schema14270_14279 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker14271_14280 = schema.core.checker.call(null,input_schema14270_14279);var output_checker14272_14281 = schema.core.checker.call(null,output_schema14269_14278);/**
* Inputs: [opts :- ButtonGroup & children]
* Returns: t/Component
* 
* Renders the supplied children in a wrapping button-group div.
* @param {...*} var_args
*/
om_bootstrap.button.button_group = ((function (ufv___14277,output_schema14269_14278,input_schema14270_14279,input_checker14271_14280,output_checker14272_14281){
return (function() { 
var button_group__delegate = function (G__14273,rest14274){var validate__5372__auto__ = ufv___14277.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___14282 = cljs.core.list_STAR_.call(null,G__14273,rest14274);var temp__4126__auto___14283 = input_checker14271_14280.call(null,args__5373__auto___14282);if(cljs.core.truth_(temp__4126__auto___14283))
{var error__5374__auto___14284 = temp__4126__auto___14283;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"button-group","button-group",108385979,null),cljs.core.pr_str.call(null,error__5374__auto___14284)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14284,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___14282,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14270_14279,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var opts = G__14273;var children = rest14274;while(true){
var vec__14276 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));var bs = cljs.core.nth.call(null,vec__14276,(0),null);var props = cljs.core.nth.call(null,vec__14276,(1),null);var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___14285 = output_checker14272_14281.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___14285))
{var error__5374__auto___14286 = temp__4126__auto___14285;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"button-group","button-group",108385979,null),cljs.core.pr_str.call(null,error__5374__auto___14286)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14286,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14269_14278,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
};
var button_group = function (G__14273,var_args){
var rest14274 = null;if (arguments.length > 1) {
  rest14274 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return button_group__delegate.call(this,G__14273,rest14274);};
button_group.cljs$lang$maxFixedArity = 1;
button_group.cljs$lang$applyTo = (function (arglist__14287){
var G__14273 = cljs.core.first(arglist__14287);
var rest14274 = cljs.core.rest(arglist__14287);
return button_group__delegate(G__14273,rest14274);
});
button_group.cljs$core$IFn$_invoke$arity$variadic = button_group__delegate;
return button_group;
})()
;})(ufv___14277,output_schema14269_14278,input_schema14270_14279,input_checker14271_14280,output_checker14272_14281))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema14269_14278,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14270_14279], null)));
om_bootstrap.button.DropdownButton = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool], true, false));
om_bootstrap.button.render_nav_item = (function render_nav_item(props,open_QMARK_,children){var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dropdown","dropdown",1343185805),true,new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
});
om_bootstrap.button.render_button_group = (function render_button_group(props,open_QMARK_,children){var group_classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,group_classes)], null),children);
});
om_bootstrap.button.MenuItem = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"key","key",-1516042587),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header?","header?",-106649173)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"divider?","divider?",1882560157)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
/**
* Generates an Om component of a menu item. Done this way so that
* wrapping dropdowns will have access to the Om state.
* @param {...*} var_args
*/
om_bootstrap.button.menu_item_STAR_ = (function() { 
var menu_item_STAR___delegate = function (data__9146__auto__,owner14288,p__14290){var vec__14309 = p__14290;var opts__9147__auto__ = cljs.core.nth.call(null,vec__14309,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema14312 = schema.core.Any;var input_schema14313 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map14310","map14310",2118916920,null))], null);var input_checker14314 = schema.core.checker.call(null,input_schema14313);var output_checker14315 = schema.core.checker.call(null,output_schema14312);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema14312,input_schema14313,input_checker14314,output_checker14315,vec__14309,opts__9147__auto__){
return (function fnk14311(G__14316){var validate__5372__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___14327 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14316], null);var temp__4126__auto___14328 = input_checker14314.call(null,args__5373__auto___14327);if(cljs.core.truth_(temp__4126__auto___14328))
{var error__5374__auto___14329 = temp__4126__auto___14328;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk14311","fnk14311",751704092,null),cljs.core.pr_str.call(null,error__5374__auto___14329)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14329,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___14327,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14313,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var map14310 = G__14316;while(true){
if(cljs.core.map_QMARK_.call(null,map14310))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map14310)));
}
var owner = plumbing.fnk.schema.safe_get.call(null,map14310,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.button.t14322 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.button.t14322 = (function (owner,p__14290,input_schema14313,owner14288,vec__14309,opts__9147__auto__,input_checker14314,menu_item_STAR_,G__14316,output_checker14315,map14310,validate__5372__auto__,output_schema14312,fnk14311,data__9146__auto__,ufv__,meta14323){
this.owner = owner;
this.p__14290 = p__14290;
this.input_schema14313 = input_schema14313;
this.owner14288 = owner14288;
this.vec__14309 = vec__14309;
this.opts__9147__auto__ = opts__9147__auto__;
this.input_checker14314 = input_checker14314;
this.menu_item_STAR_ = menu_item_STAR_;
this.G__14316 = G__14316;
this.output_checker14315 = output_checker14315;
this.map14310 = map14310;
this.validate__5372__auto__ = validate__5372__auto__;
this.output_schema14312 = output_schema14312;
this.fnk14311 = fnk14311;
this.data__9146__auto__ = data__9146__auto__;
this.ufv__ = ufv__;
this.meta14323 = meta14323;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t14322.cljs$lang$type = true;
om_bootstrap.button.t14322.cljs$lang$ctorStr = "om-bootstrap.button/t14322";
om_bootstrap.button.t14322.cljs$lang$ctorPrWriter = ((function (owner,validate__5372__auto__,ufv__,output_schema14312,input_schema14313,input_checker14314,output_checker14315,vec__14309,opts__9147__auto__){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"om-bootstrap.button/t14322");
});})(owner,validate__5372__auto__,ufv__,output_schema14312,input_schema14313,input_checker14314,output_checker14315,vec__14309,opts__9147__auto__))
;
om_bootstrap.button.t14322.prototype.om$core$IDisplayName$ = true;
om_bootstrap.button.t14322.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__5372__auto__,ufv__,output_schema14312,input_schema14313,input_checker14314,output_checker14315,vec__14309,opts__9147__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "menu-item*";
});})(owner,validate__5372__auto__,ufv__,output_schema14312,input_schema14313,input_checker14314,output_checker14315,vec__14309,opts__9147__auto__))
;
om_bootstrap.button.t14322.prototype.om$core$IRender$ = true;
om_bootstrap.button.t14322.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__5372__auto__,ufv__,output_schema14312,input_schema14313,input_checker14314,output_checker14315,vec__14309,opts__9147__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var map__14325 = om.core.get_props.call(null,self__.owner);var map__14325__$1 = ((cljs.core.seq_QMARK_.call(null,map__14325))?cljs.core.apply.call(null,cljs.core.hash_map,map__14325):map__14325);var children = cljs.core.get.call(null,map__14325__$1,new cljs.core.Keyword(null,"children","children",-940561982));var opts = cljs.core.get.call(null,map__14325__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var vec__14326 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));var bs = cljs.core.nth.call(null,vec__14326,(0),null);var props = cljs.core.nth.call(null,vec__14326,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);var handle_click = ((function (map__14325,map__14325__$1,children,opts,vec__14326,bs,props,classes,___$1,owner,validate__5372__auto__,ufv__,output_schema14312,input_schema14313,input_checker14314,output_checker14315,vec__14309,opts__9147__auto__){
return (function (e){var temp__4126__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto__))
{var on_select = temp__4126__auto__;e.preventDefault();
return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else
{return null;
}
});})(map__14325,map__14325__$1,children,opts,vec__14326,bs,props,classes,___$1,owner,validate__5372__auto__,ufv__,output_schema14312,input_schema14313,input_checker14314,output_checker14315,vec__14309,opts__9147__auto__))
;var children__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs))?children:cljs.core.apply.call(null,React.DOM.a,{"tabIndex": "-1", "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs)), "onClick": om_tools.dom.format_opts.call(null,handle_click)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)))));var li_attrs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null);return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,li_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
});})(owner,validate__5372__auto__,ufv__,output_schema14312,input_schema14313,input_checker14314,output_checker14315,vec__14309,opts__9147__auto__))
;
om_bootstrap.button.t14322.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__5372__auto__,ufv__,output_schema14312,input_schema14313,input_checker14314,output_checker14315,vec__14309,opts__9147__auto__){
return (function (_14324){var self__ = this;
var _14324__$1 = this;return self__.meta14323;
});})(owner,validate__5372__auto__,ufv__,output_schema14312,input_schema14313,input_checker14314,output_checker14315,vec__14309,opts__9147__auto__))
;
om_bootstrap.button.t14322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__5372__auto__,ufv__,output_schema14312,input_schema14313,input_checker14314,output_checker14315,vec__14309,opts__9147__auto__){
return (function (_14324,meta14323__$1){var self__ = this;
var _14324__$1 = this;return (new om_bootstrap.button.t14322(self__.owner,self__.p__14290,self__.input_schema14313,self__.owner14288,self__.vec__14309,self__.opts__9147__auto__,self__.input_checker14314,self__.menu_item_STAR_,self__.G__14316,self__.output_checker14315,self__.map14310,self__.validate__5372__auto__,self__.output_schema14312,self__.fnk14311,self__.data__9146__auto__,self__.ufv__,meta14323__$1));
});})(owner,validate__5372__auto__,ufv__,output_schema14312,input_schema14313,input_checker14314,output_checker14315,vec__14309,opts__9147__auto__))
;
om_bootstrap.button.__GT_t14322 = ((function (owner,validate__5372__auto__,ufv__,output_schema14312,input_schema14313,input_checker14314,output_checker14315,vec__14309,opts__9147__auto__){
return (function __GT_t14322(owner__$1,p__14290__$1,input_schema14313__$1,owner14288__$1,vec__14309__$1,opts__9147__auto____$1,input_checker14314__$1,menu_item_STAR___$1,G__14316__$1,output_checker14315__$1,map14310__$1,validate__5372__auto____$1,output_schema14312__$1,fnk14311__$1,data__9146__auto____$1,ufv____$1,meta14323){return (new om_bootstrap.button.t14322(owner__$1,p__14290__$1,input_schema14313__$1,owner14288__$1,vec__14309__$1,opts__9147__auto____$1,input_checker14314__$1,menu_item_STAR___$1,G__14316__$1,output_checker14315__$1,map14310__$1,validate__5372__auto____$1,output_schema14312__$1,fnk14311__$1,data__9146__auto____$1,ufv____$1,meta14323));
});})(owner,validate__5372__auto__,ufv__,output_schema14312,input_schema14313,input_checker14314,output_checker14315,vec__14309,opts__9147__auto__))
;
}
return (new om_bootstrap.button.t14322(owner,p__14290,input_schema14313,owner14288,vec__14309,opts__9147__auto__,input_checker14314,menu_item_STAR_,G__14316,output_checker14315,map14310,validate__5372__auto__,output_schema14312,fnk14311,data__9146__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___14330 = output_checker14315.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___14330))
{var error__5374__auto___14331 = temp__4126__auto___14330;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk14311","fnk14311",751704092,null),cljs.core.pr_str.call(null,error__5374__auto___14331)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14331,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14312,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv__,output_schema14312,input_schema14313,input_checker14314,output_checker14315,vec__14309,opts__9147__auto__))
,schema.core.make_fn_schema.call(null,output_schema14312,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14313], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__9147__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner14288,new cljs.core.Keyword(null,"data","data",-232669377),data__9146__auto__], null));
};
var menu_item_STAR_ = function (data__9146__auto__,owner14288,var_args){
var p__14290 = null;if (arguments.length > 2) {
  p__14290 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return menu_item_STAR___delegate.call(this,data__9146__auto__,owner14288,p__14290);};
menu_item_STAR_.cljs$lang$maxFixedArity = 2;
menu_item_STAR_.cljs$lang$applyTo = (function (arglist__14332){
var data__9146__auto__ = cljs.core.first(arglist__14332);
arglist__14332 = cljs.core.next(arglist__14332);
var owner14288 = cljs.core.first(arglist__14332);
var p__14290 = cljs.core.rest(arglist__14332);
return menu_item_STAR___delegate(data__9146__auto__,owner14288,p__14290);
});
menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = menu_item_STAR___delegate;
return menu_item_STAR_;
})()
;
om_bootstrap.button.__GT_menu_item_STAR_ = (function() {
var __GT_menu_item_STAR_ = null;
var __GT_menu_item_STAR___1 = (function (cursor__9115__auto__){return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__9115__auto__);
});
var __GT_menu_item_STAR___2 = (function (cursor__9115__auto__,m14289){return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__9115__auto__,m14289);
});
__GT_menu_item_STAR_ = function(cursor__9115__auto__,m14289){
switch(arguments.length){
case 1:
return __GT_menu_item_STAR___1.call(this,cursor__9115__auto__);
case 2:
return __GT_menu_item_STAR___2.call(this,cursor__9115__auto__,m14289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_menu_item_STAR___1;
__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_menu_item_STAR___2;
return __GT_menu_item_STAR_;
})()
;
var ufv___14339 = schema.utils.use_fn_validation;var output_schema14333_14340 = om_bootstrap.types.Component;var input_schema14334_14341 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker14335_14342 = schema.core.checker.call(null,input_schema14334_14341);var output_checker14336_14343 = schema.core.checker.call(null,output_schema14333_14340);/**
* Inputs: [opts :- MenuItem & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.button.menu_item = ((function (ufv___14339,output_schema14333_14340,input_schema14334_14341,input_checker14335_14342,output_checker14336_14343){
return (function() { 
var menu_item__delegate = function (G__14337,rest14338){var validate__5372__auto__ = ufv___14339.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___14344 = cljs.core.list_STAR_.call(null,G__14337,rest14338);var temp__4126__auto___14345 = input_checker14335_14342.call(null,args__5373__auto___14344);if(cljs.core.truth_(temp__4126__auto___14345))
{var error__5374__auto___14346 = temp__4126__auto___14345;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),cljs.core.pr_str.call(null,error__5374__auto___14346)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14346,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___14344,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14334_14341,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var opts = G__14337;var children = rest14338;while(true){
return om_bootstrap.button.__GT_menu_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___14347 = output_checker14336_14343.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___14347))
{var error__5374__auto___14348 = temp__4126__auto___14347;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),cljs.core.pr_str.call(null,error__5374__auto___14348)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14348,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14333_14340,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
};
var menu_item = function (G__14337,var_args){
var rest14338 = null;if (arguments.length > 1) {
  rest14338 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return menu_item__delegate.call(this,G__14337,rest14338);};
menu_item.cljs$lang$maxFixedArity = 1;
menu_item.cljs$lang$applyTo = (function (arglist__14349){
var G__14337 = cljs.core.first(arglist__14349);
var rest14338 = cljs.core.rest(arglist__14349);
return menu_item__delegate(G__14337,rest14338);
});
menu_item.cljs$core$IFn$_invoke$arity$variadic = menu_item__delegate;
return menu_item;
})()
;})(ufv___14339,output_schema14333_14340,input_schema14334_14341,input_checker14335_14342,output_checker14336_14343))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema14333_14340,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14334_14341], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___14359 = schema.utils.use_fn_validation;var output_schema14351_14360 = om_bootstrap.types.Component;var input_schema14352_14361 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker14353_14362 = schema.core.checker.call(null,input_schema14352_14361);var output_checker14354_14363 = schema.core.checker.call(null,output_schema14351_14360);/**
* Inputs: [opts :- DropdownMenu & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.button.dropdown_menu = ((function (ufv___14359,output_schema14351_14360,input_schema14352_14361,input_checker14353_14362,output_checker14354_14363){
return (function() { 
var dropdown_menu__delegate = function (G__14355,rest14356){var validate__5372__auto__ = ufv___14359.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___14364 = cljs.core.list_STAR_.call(null,G__14355,rest14356);var temp__4126__auto___14365 = input_checker14353_14362.call(null,args__5373__auto___14364);if(cljs.core.truth_(temp__4126__auto___14365))
{var error__5374__auto___14366 = temp__4126__auto___14365;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),cljs.core.pr_str.call(null,error__5374__auto___14366)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14366,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___14364,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14352_14361,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var opts = G__14355;var children = rest14356;while(true){
var vec__14358 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);var bs = cljs.core.nth.call(null,vec__14358,(0),null);var props = cljs.core.nth.call(null,vec__14358,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4124__auto__))
{var on_select = temp__4124__auto__;return cljs.core.map.call(null,((function (on_select,temp__4124__auto__,vec__14358,bs,props,classes,ul_attrs,validate__5372__auto__,ufv___14359,output_schema14351_14360,input_schema14352_14361,input_checker14353_14362,output_checker14354_14363){
return (function (p1__14350_SHARP_){return om_bootstrap.util.clone_with_props.call(null,p1__14350_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4124__auto__,vec__14358,bs,props,classes,ul_attrs,validate__5372__auto__,ufv___14359,output_schema14351_14360,input_schema14352_14361,input_checker14353_14362,output_checker14354_14363))
,children);
} else
{return children;
}
})()],null)));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___14367 = output_checker14354_14363.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___14367))
{var error__5374__auto___14368 = temp__4126__auto___14367;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),cljs.core.pr_str.call(null,error__5374__auto___14368)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14368,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14351_14360,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
};
var dropdown_menu = function (G__14355,var_args){
var rest14356 = null;if (arguments.length > 1) {
  rest14356 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dropdown_menu__delegate.call(this,G__14355,rest14356);};
dropdown_menu.cljs$lang$maxFixedArity = 1;
dropdown_menu.cljs$lang$applyTo = (function (arglist__14369){
var G__14355 = cljs.core.first(arglist__14369);
var rest14356 = cljs.core.rest(arglist__14369);
return dropdown_menu__delegate(G__14355,rest14356);
});
dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = dropdown_menu__delegate;
return dropdown_menu;
})()
;})(ufv___14359,output_schema14351_14360,input_schema14352_14361,input_checker14353_14362,output_checker14354_14363))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema14351_14360,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14352_14361], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__9117__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));(descriptor__9117__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);
return descriptor__9117__auto__;
})();
/**
* Generates a dropdown button component responsible for its own
* toggled state. The open? toggling is handled through a dropdown
* mixin.
* @param {...*} var_args
*/
om_bootstrap.button.dropdown_STAR_ = (function() { 
var dropdown_STAR___delegate = function (data__9146__auto__,owner14371,p__14373){var vec__14392 = p__14373;var opts__9147__auto__ = cljs.core.nth.call(null,vec__14392,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema14395 = schema.core.Any;var input_schema14396 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map14393","map14393",314836483,null))], null);var input_checker14397 = schema.core.checker.call(null,input_schema14396);var output_checker14398 = schema.core.checker.call(null,output_schema14395);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema14395,input_schema14396,input_checker14397,output_checker14398,vec__14392,opts__9147__auto__){
return (function fnk14394(G__14399){var validate__5372__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___14410 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14399], null);var temp__4126__auto___14411 = input_checker14397.call(null,args__5373__auto___14410);if(cljs.core.truth_(temp__4126__auto___14411))
{var error__5374__auto___14412 = temp__4126__auto___14411;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk14394","fnk14394",1694168715,null),cljs.core.pr_str.call(null,error__5374__auto___14412)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14412,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___14410,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14396,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var map14393 = G__14399;while(true){
if(cljs.core.map_QMARK_.call(null,map14393))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map14393)));
}
var owner = plumbing.fnk.schema.safe_get.call(null,map14393,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var state = plumbing.fnk.schema.safe_get.call(null,map14393,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.button.t14405 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.button.t14405 = (function (input_checker14397,map14393,owner,output_checker14398,fnk14394,opts__9147__auto__,owner14371,vec__14392,input_schema14396,state,p__14373,output_schema14395,dropdown_STAR_,validate__5372__auto__,G__14399,data__9146__auto__,ufv__,meta14406){
this.input_checker14397 = input_checker14397;
this.map14393 = map14393;
this.owner = owner;
this.output_checker14398 = output_checker14398;
this.fnk14394 = fnk14394;
this.opts__9147__auto__ = opts__9147__auto__;
this.owner14371 = owner14371;
this.vec__14392 = vec__14392;
this.input_schema14396 = input_schema14396;
this.state = state;
this.p__14373 = p__14373;
this.output_schema14395 = output_schema14395;
this.dropdown_STAR_ = dropdown_STAR_;
this.validate__5372__auto__ = validate__5372__auto__;
this.G__14399 = G__14399;
this.data__9146__auto__ = data__9146__auto__;
this.ufv__ = ufv__;
this.meta14406 = meta14406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t14405.cljs$lang$type = true;
om_bootstrap.button.t14405.cljs$lang$ctorStr = "om-bootstrap.button/t14405";
om_bootstrap.button.t14405.cljs$lang$ctorPrWriter = ((function (state,owner,validate__5372__auto__,ufv__,output_schema14395,input_schema14396,input_checker14397,output_checker14398,vec__14392,opts__9147__auto__){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"om-bootstrap.button/t14405");
});})(state,owner,validate__5372__auto__,ufv__,output_schema14395,input_schema14396,input_checker14397,output_checker14398,vec__14392,opts__9147__auto__))
;
om_bootstrap.button.t14405.prototype.om$core$IDisplayName$ = true;
om_bootstrap.button.t14405.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__5372__auto__,ufv__,output_schema14395,input_schema14396,input_checker14397,output_checker14398,vec__14392,opts__9147__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "dropdown*";
});})(state,owner,validate__5372__auto__,ufv__,output_schema14395,input_schema14396,input_checker14397,output_checker14398,vec__14392,opts__9147__auto__))
;
om_bootstrap.button.t14405.prototype.om$core$IRender$ = true;
om_bootstrap.button.t14405.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__5372__auto__,ufv__,output_schema14395,input_schema14396,input_checker14397,output_checker14398,vec__14392,opts__9147__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);var map__14408 = om.core.get_props.call(null,self__.owner);var map__14408__$1 = ((cljs.core.seq_QMARK_.call(null,map__14408))?cljs.core.apply.call(null,cljs.core.hash_map,map__14408):map__14408);var children = cljs.core.get.call(null,map__14408__$1,new cljs.core.Keyword(null,"children","children",-940561982));var opts = cljs.core.get.call(null,map__14408__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var vec__14409 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));var bs = cljs.core.nth.call(null,vec__14409,(0),null);var props = cljs.core.nth.call(null,vec__14409,(1),null);var set_dropdown = (self__.owner["setDropdownState"]);var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__14408,map__14408__$1,children,opts,vec__14409,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__5372__auto__,ufv__,output_schema14395,input_schema14396,input_checker14397,output_checker14398,vec__14392,opts__9147__auto__){
return (function (e){e.preventDefault();
return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__14408,map__14408__$1,children,opts,vec__14409,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__5372__auto__,ufv__,output_schema14395,input_schema14396,input_checker14397,output_checker14398,vec__14392,opts__9147__auto__))
], null);var update_child_props = ((function (open_QMARK_,map__14408,map__14408__$1,children,opts,vec__14409,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__5372__auto__,ufv__,output_schema14395,input_schema14396,input_checker14397,output_checker14398,vec__14392,opts__9147__auto__){
return (function (props__$1){var handle = (cljs.core.truth_((function (){var or__3558__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__14408,map__14408__$1,children,opts,vec__14409,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__5372__auto__,ufv__,output_schema14395,input_schema14396,input_checker14397,output_checker14398,vec__14392,opts__9147__auto__){
return (function (key){var temp__4124__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4124__auto__))
{var os = temp__4124__auto__;return os.call(null,key);
} else
{return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__14408,map__14408__$1,children,opts,vec__14409,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__5372__auto__,ufv__,output_schema14395,input_schema14396,input_checker14397,output_checker14398,vec__14392,opts__9147__auto__))
:null);return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__14408,map__14408__$1,children,opts,vec__14409,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__5372__auto__,ufv__,output_schema14395,input_schema14396,input_checker14397,output_checker14398,vec__14392,opts__9147__auto__))
;return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span({"className": "caret"})),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__14408,map__14408__$1,children,opts,vec__14409,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__5372__auto__,ufv__,output_schema14395,input_schema14396,input_checker14397,output_checker14398,vec__14392,opts__9147__auto__){
return (function (p1__14370_SHARP_){return om_bootstrap.util.clone_with_props.call(null,p1__14370_SHARP_,update_child_props);
});})(open_QMARK_,map__14408,map__14408__$1,children,opts,vec__14409,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__5372__auto__,ufv__,output_schema14395,input_schema14396,input_checker14397,output_checker14398,vec__14392,opts__9147__auto__))
,children))], null));
});})(state,owner,validate__5372__auto__,ufv__,output_schema14395,input_schema14396,input_checker14397,output_checker14398,vec__14392,opts__9147__auto__))
;
om_bootstrap.button.t14405.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__5372__auto__,ufv__,output_schema14395,input_schema14396,input_checker14397,output_checker14398,vec__14392,opts__9147__auto__){
return (function (_14407){var self__ = this;
var _14407__$1 = this;return self__.meta14406;
});})(state,owner,validate__5372__auto__,ufv__,output_schema14395,input_schema14396,input_checker14397,output_checker14398,vec__14392,opts__9147__auto__))
;
om_bootstrap.button.t14405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__5372__auto__,ufv__,output_schema14395,input_schema14396,input_checker14397,output_checker14398,vec__14392,opts__9147__auto__){
return (function (_14407,meta14406__$1){var self__ = this;
var _14407__$1 = this;return (new om_bootstrap.button.t14405(self__.input_checker14397,self__.map14393,self__.owner,self__.output_checker14398,self__.fnk14394,self__.opts__9147__auto__,self__.owner14371,self__.vec__14392,self__.input_schema14396,self__.state,self__.p__14373,self__.output_schema14395,self__.dropdown_STAR_,self__.validate__5372__auto__,self__.G__14399,self__.data__9146__auto__,self__.ufv__,meta14406__$1));
});})(state,owner,validate__5372__auto__,ufv__,output_schema14395,input_schema14396,input_checker14397,output_checker14398,vec__14392,opts__9147__auto__))
;
om_bootstrap.button.__GT_t14405 = ((function (state,owner,validate__5372__auto__,ufv__,output_schema14395,input_schema14396,input_checker14397,output_checker14398,vec__14392,opts__9147__auto__){
return (function __GT_t14405(input_checker14397__$1,map14393__$1,owner__$1,output_checker14398__$1,fnk14394__$1,opts__9147__auto____$1,owner14371__$1,vec__14392__$1,input_schema14396__$1,state__$1,p__14373__$1,output_schema14395__$1,dropdown_STAR___$1,validate__5372__auto____$1,G__14399__$1,data__9146__auto____$1,ufv____$1,meta14406){return (new om_bootstrap.button.t14405(input_checker14397__$1,map14393__$1,owner__$1,output_checker14398__$1,fnk14394__$1,opts__9147__auto____$1,owner14371__$1,vec__14392__$1,input_schema14396__$1,state__$1,p__14373__$1,output_schema14395__$1,dropdown_STAR___$1,validate__5372__auto____$1,G__14399__$1,data__9146__auto____$1,ufv____$1,meta14406));
});})(state,owner,validate__5372__auto__,ufv__,output_schema14395,input_schema14396,input_checker14397,output_checker14398,vec__14392,opts__9147__auto__))
;
}
return (new om_bootstrap.button.t14405(input_checker14397,map14393,owner,output_checker14398,fnk14394,opts__9147__auto__,owner14371,vec__14392,input_schema14396,state,p__14373,output_schema14395,dropdown_STAR_,validate__5372__auto__,G__14399,data__9146__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___14413 = output_checker14398.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___14413))
{var error__5374__auto___14414 = temp__4126__auto___14413;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk14394","fnk14394",1694168715,null),cljs.core.pr_str.call(null,error__5374__auto___14414)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14414,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14395,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv__,output_schema14395,input_schema14396,input_checker14397,output_checker14398,vec__14392,opts__9147__auto__))
,schema.core.make_fn_schema.call(null,output_schema14395,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14396], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner14371),new cljs.core.Keyword(null,"opts","opts",155075701),opts__9147__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner14371,new cljs.core.Keyword(null,"data","data",-232669377),data__9146__auto__], null));
};
var dropdown_STAR_ = function (data__9146__auto__,owner14371,var_args){
var p__14373 = null;if (arguments.length > 2) {
  p__14373 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return dropdown_STAR___delegate.call(this,data__9146__auto__,owner14371,p__14373);};
dropdown_STAR_.cljs$lang$maxFixedArity = 2;
dropdown_STAR_.cljs$lang$applyTo = (function (arglist__14415){
var data__9146__auto__ = cljs.core.first(arglist__14415);
arglist__14415 = cljs.core.next(arglist__14415);
var owner14371 = cljs.core.first(arglist__14415);
var p__14373 = cljs.core.rest(arglist__14415);
return dropdown_STAR___delegate(data__9146__auto__,owner14371,p__14373);
});
dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = dropdown_STAR___delegate;
return dropdown_STAR_;
})()
;
om_bootstrap.button.__GT_dropdown_STAR_ = (function() {
var __GT_dropdown_STAR_ = null;
var __GT_dropdown_STAR___1 = (function (cursor__9115__auto__){return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__9115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});
var __GT_dropdown_STAR___2 = (function (cursor__9115__auto__,m14372){return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__9115__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m14372));
});
__GT_dropdown_STAR_ = function(cursor__9115__auto__,m14372){
switch(arguments.length){
case 1:
return __GT_dropdown_STAR___1.call(this,cursor__9115__auto__);
case 2:
return __GT_dropdown_STAR___2.call(this,cursor__9115__auto__,m14372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_dropdown_STAR___1;
__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_dropdown_STAR___2;
return __GT_dropdown_STAR_;
})()
;
var ufv___14422 = schema.utils.use_fn_validation;var output_schema14416_14423 = om_bootstrap.types.Component;var input_schema14417_14424 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker14418_14425 = schema.core.checker.call(null,input_schema14417_14424);var output_checker14419_14426 = schema.core.checker.call(null,output_schema14416_14423);/**
* Inputs: [opts :- DropdownButton & children]
* Returns: t/Component
* 
* Returns a dropdown button component. The component manages its own
* dropdown state.
* @param {...*} var_args
*/
om_bootstrap.button.dropdown = ((function (ufv___14422,output_schema14416_14423,input_schema14417_14424,input_checker14418_14425,output_checker14419_14426){
return (function() { 
var dropdown__delegate = function (G__14420,rest14421){var validate__5372__auto__ = ufv___14422.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___14427 = cljs.core.list_STAR_.call(null,G__14420,rest14421);var temp__4126__auto___14428 = input_checker14418_14425.call(null,args__5373__auto___14427);if(cljs.core.truth_(temp__4126__auto___14428))
{var error__5374__auto___14429 = temp__4126__auto___14428;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),cljs.core.pr_str.call(null,error__5374__auto___14429)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14429,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___14427,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14417_14424,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var opts = G__14420;var children = rest14421;while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___14430 = output_checker14419_14426.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___14430))
{var error__5374__auto___14431 = temp__4126__auto___14430;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),cljs.core.pr_str.call(null,error__5374__auto___14431)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14431,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14416_14423,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
};
var dropdown = function (G__14420,var_args){
var rest14421 = null;if (arguments.length > 1) {
  rest14421 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dropdown__delegate.call(this,G__14420,rest14421);};
dropdown.cljs$lang$maxFixedArity = 1;
dropdown.cljs$lang$applyTo = (function (arglist__14432){
var G__14420 = cljs.core.first(arglist__14432);
var rest14421 = cljs.core.rest(arglist__14432);
return dropdown__delegate(G__14420,rest14421);
});
dropdown.cljs$core$IFn$_invoke$arity$variadic = dropdown__delegate;
return dropdown;
})()
;})(ufv___14422,output_schema14416_14423,input_schema14417_14424,input_checker14418_14425,output_checker14419_14426))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema14416_14423,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14417_14424], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__9117__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));(descriptor__9117__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);
return descriptor__9117__auto__;
})();
/**
* Generates a split button component responsible for its own
* toggled state. The open? toggling is handled through a dropdown
* mixin.
* @param {...*} var_args
*/
om_bootstrap.button.split_STAR_ = (function() { 
var split_STAR___delegate = function (data__9146__auto__,owner14433,p__14435){var vec__14454 = p__14435;var opts__9147__auto__ = cljs.core.nth.call(null,vec__14454,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema14457 = schema.core.Any;var input_schema14458 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map14455","map14455",-440360533,null))], null);var input_checker14459 = schema.core.checker.call(null,input_schema14458);var output_checker14460 = schema.core.checker.call(null,output_schema14457);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema14457,input_schema14458,input_checker14459,output_checker14460,vec__14454,opts__9147__auto__){
return (function fnk14456(G__14461){var validate__5372__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___14472 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14461], null);var temp__4126__auto___14473 = input_checker14459.call(null,args__5373__auto___14472);if(cljs.core.truth_(temp__4126__auto___14473))
{var error__5374__auto___14474 = temp__4126__auto___14473;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk14456","fnk14456",1052403600,null),cljs.core.pr_str.call(null,error__5374__auto___14474)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14474,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___14472,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14458,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var map14455 = G__14461;while(true){
if(cljs.core.map_QMARK_.call(null,map14455))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map14455)));
}
var owner = plumbing.fnk.schema.safe_get.call(null,map14455,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var state = plumbing.fnk.schema.safe_get.call(null,map14455,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.button.t14467 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.button.t14467 = (function (owner14433,split_STAR_,input_checker14459,owner,output_schema14457,p__14435,map14455,opts__9147__auto__,fnk14456,input_schema14458,state,G__14461,validate__5372__auto__,output_checker14460,data__9146__auto__,ufv__,vec__14454,meta14468){
this.owner14433 = owner14433;
this.split_STAR_ = split_STAR_;
this.input_checker14459 = input_checker14459;
this.owner = owner;
this.output_schema14457 = output_schema14457;
this.p__14435 = p__14435;
this.map14455 = map14455;
this.opts__9147__auto__ = opts__9147__auto__;
this.fnk14456 = fnk14456;
this.input_schema14458 = input_schema14458;
this.state = state;
this.G__14461 = G__14461;
this.validate__5372__auto__ = validate__5372__auto__;
this.output_checker14460 = output_checker14460;
this.data__9146__auto__ = data__9146__auto__;
this.ufv__ = ufv__;
this.vec__14454 = vec__14454;
this.meta14468 = meta14468;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t14467.cljs$lang$type = true;
om_bootstrap.button.t14467.cljs$lang$ctorStr = "om-bootstrap.button/t14467";
om_bootstrap.button.t14467.cljs$lang$ctorPrWriter = ((function (state,owner,validate__5372__auto__,ufv__,output_schema14457,input_schema14458,input_checker14459,output_checker14460,vec__14454,opts__9147__auto__){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"om-bootstrap.button/t14467");
});})(state,owner,validate__5372__auto__,ufv__,output_schema14457,input_schema14458,input_checker14459,output_checker14460,vec__14454,opts__9147__auto__))
;
om_bootstrap.button.t14467.prototype.om$core$IDisplayName$ = true;
om_bootstrap.button.t14467.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__5372__auto__,ufv__,output_schema14457,input_schema14458,input_checker14459,output_checker14460,vec__14454,opts__9147__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "split*";
});})(state,owner,validate__5372__auto__,ufv__,output_schema14457,input_schema14458,input_checker14459,output_checker14460,vec__14454,opts__9147__auto__))
;
om_bootstrap.button.t14467.prototype.om$core$IRender$ = true;
om_bootstrap.button.t14467.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__5372__auto__,ufv__,output_schema14457,input_schema14458,input_checker14459,output_checker14460,vec__14454,opts__9147__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);var map__14470 = om.core.get_props.call(null,self__.owner);var map__14470__$1 = ((cljs.core.seq_QMARK_.call(null,map__14470))?cljs.core.apply.call(null,cljs.core.hash_map,map__14470):map__14470);var children = cljs.core.get.call(null,map__14470__$1,new cljs.core.Keyword(null,"children","children",-940561982));var opts = cljs.core.get.call(null,map__14470__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var vec__14471 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));var bs = cljs.core.nth.call(null,vec__14471,(0),null);var props = cljs.core.nth.call(null,vec__14471,(1),null);var set_dropdown = (self__.owner["setDropdownState"]);var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__14470,map__14470__$1,children,opts,vec__14471,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__5372__auto__,ufv__,output_schema14457,input_schema14458,input_checker14459,output_checker14460,vec__14454,opts__9147__auto__){
return (function (e){if(cljs.core.truth_(open_QMARK_))
{set_dropdown.call(null,false);
} else
{}
var temp__4126__auto__ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;return f.call(null,e);
} else
{return null;
}
});})(open_QMARK_,map__14470,map__14470__$1,children,opts,vec__14471,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__5372__auto__,ufv__,output_schema14457,input_schema14458,input_checker14459,output_checker14460,vec__14454,opts__9147__auto__))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__14470,map__14470__$1,children,opts,vec__14471,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__5372__auto__,ufv__,output_schema14457,input_schema14458,input_checker14459,output_checker14460,vec__14454,opts__9147__auto__){
return (function (e){e.preventDefault();
return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__14470,map__14470__$1,children,opts,vec__14471,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__5372__auto__,ufv__,output_schema14457,input_schema14458,input_checker14459,output_checker14460,vec__14454,opts__9147__auto__))
], null)),cljs.core.apply.call(null,React.DOM.span,{"className": "sr-only"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span({"className": "caret"}));var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__14470,map__14470__$1,children,opts,vec__14471,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__5372__auto__,ufv__,output_schema14457,input_schema14458,input_checker14459,output_checker14460,vec__14454,opts__9147__auto__){
return (function (k){var temp__4126__auto___14475 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto___14475))
{var f_14476 = temp__4126__auto___14475;f_14476.call(null,k);
} else
{}
return set_dropdown.call(null,false);
});})(open_QMARK_,map__14470,map__14470__$1,children,opts,vec__14471,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__5372__auto__,ufv__,output_schema14457,input_schema14458,input_checker14459,output_checker14460,vec__14454,opts__9147__auto__))
], null),children);return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__5372__auto__,ufv__,output_schema14457,input_schema14458,input_checker14459,output_checker14460,vec__14454,opts__9147__auto__))
;
om_bootstrap.button.t14467.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__5372__auto__,ufv__,output_schema14457,input_schema14458,input_checker14459,output_checker14460,vec__14454,opts__9147__auto__){
return (function (_14469){var self__ = this;
var _14469__$1 = this;return self__.meta14468;
});})(state,owner,validate__5372__auto__,ufv__,output_schema14457,input_schema14458,input_checker14459,output_checker14460,vec__14454,opts__9147__auto__))
;
om_bootstrap.button.t14467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__5372__auto__,ufv__,output_schema14457,input_schema14458,input_checker14459,output_checker14460,vec__14454,opts__9147__auto__){
return (function (_14469,meta14468__$1){var self__ = this;
var _14469__$1 = this;return (new om_bootstrap.button.t14467(self__.owner14433,self__.split_STAR_,self__.input_checker14459,self__.owner,self__.output_schema14457,self__.p__14435,self__.map14455,self__.opts__9147__auto__,self__.fnk14456,self__.input_schema14458,self__.state,self__.G__14461,self__.validate__5372__auto__,self__.output_checker14460,self__.data__9146__auto__,self__.ufv__,self__.vec__14454,meta14468__$1));
});})(state,owner,validate__5372__auto__,ufv__,output_schema14457,input_schema14458,input_checker14459,output_checker14460,vec__14454,opts__9147__auto__))
;
om_bootstrap.button.__GT_t14467 = ((function (state,owner,validate__5372__auto__,ufv__,output_schema14457,input_schema14458,input_checker14459,output_checker14460,vec__14454,opts__9147__auto__){
return (function __GT_t14467(owner14433__$1,split_STAR___$1,input_checker14459__$1,owner__$1,output_schema14457__$1,p__14435__$1,map14455__$1,opts__9147__auto____$1,fnk14456__$1,input_schema14458__$1,state__$1,G__14461__$1,validate__5372__auto____$1,output_checker14460__$1,data__9146__auto____$1,ufv____$1,vec__14454__$1,meta14468){return (new om_bootstrap.button.t14467(owner14433__$1,split_STAR___$1,input_checker14459__$1,owner__$1,output_schema14457__$1,p__14435__$1,map14455__$1,opts__9147__auto____$1,fnk14456__$1,input_schema14458__$1,state__$1,G__14461__$1,validate__5372__auto____$1,output_checker14460__$1,data__9146__auto____$1,ufv____$1,vec__14454__$1,meta14468));
});})(state,owner,validate__5372__auto__,ufv__,output_schema14457,input_schema14458,input_checker14459,output_checker14460,vec__14454,opts__9147__auto__))
;
}
return (new om_bootstrap.button.t14467(owner14433,split_STAR_,input_checker14459,owner,output_schema14457,p__14435,map14455,opts__9147__auto__,fnk14456,input_schema14458,state,G__14461,validate__5372__auto__,output_checker14460,data__9146__auto__,ufv__,vec__14454,null));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___14477 = output_checker14460.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___14477))
{var error__5374__auto___14478 = temp__4126__auto___14477;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk14456","fnk14456",1052403600,null),cljs.core.pr_str.call(null,error__5374__auto___14478)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14478,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14457,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv__,output_schema14457,input_schema14458,input_checker14459,output_checker14460,vec__14454,opts__9147__auto__))
,schema.core.make_fn_schema.call(null,output_schema14457,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14458], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner14433),new cljs.core.Keyword(null,"opts","opts",155075701),opts__9147__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner14433,new cljs.core.Keyword(null,"data","data",-232669377),data__9146__auto__], null));
};
var split_STAR_ = function (data__9146__auto__,owner14433,var_args){
var p__14435 = null;if (arguments.length > 2) {
  p__14435 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return split_STAR___delegate.call(this,data__9146__auto__,owner14433,p__14435);};
split_STAR_.cljs$lang$maxFixedArity = 2;
split_STAR_.cljs$lang$applyTo = (function (arglist__14479){
var data__9146__auto__ = cljs.core.first(arglist__14479);
arglist__14479 = cljs.core.next(arglist__14479);
var owner14433 = cljs.core.first(arglist__14479);
var p__14435 = cljs.core.rest(arglist__14479);
return split_STAR___delegate(data__9146__auto__,owner14433,p__14435);
});
split_STAR_.cljs$core$IFn$_invoke$arity$variadic = split_STAR___delegate;
return split_STAR_;
})()
;
om_bootstrap.button.__GT_split_STAR_ = (function() {
var __GT_split_STAR_ = null;
var __GT_split_STAR___1 = (function (cursor__9115__auto__){return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__9115__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});
var __GT_split_STAR___2 = (function (cursor__9115__auto__,m14434){return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__9115__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m14434));
});
__GT_split_STAR_ = function(cursor__9115__auto__,m14434){
switch(arguments.length){
case 1:
return __GT_split_STAR___1.call(this,cursor__9115__auto__);
case 2:
return __GT_split_STAR___2.call(this,cursor__9115__auto__,m14434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_split_STAR___1;
__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_split_STAR___2;
return __GT_split_STAR_;
})()
;
var ufv___14486 = schema.utils.use_fn_validation;var output_schema14480_14487 = schema.core.Any;var input_schema14481_14488 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker14482_14489 = schema.core.checker.call(null,input_schema14481_14488);var output_checker14483_14490 = schema.core.checker.call(null,output_schema14480_14487);/**
* Inputs: [opts :- SplitButton & children]
* @param {...*} var_args
*/
om_bootstrap.button.split = ((function (ufv___14486,output_schema14480_14487,input_schema14481_14488,input_checker14482_14489,output_checker14483_14490){
return (function() { 
var split__delegate = function (G__14484,rest14485){var validate__5372__auto__ = ufv___14486.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___14491 = cljs.core.list_STAR_.call(null,G__14484,rest14485);var temp__4126__auto___14492 = input_checker14482_14489.call(null,args__5373__auto___14491);if(cljs.core.truth_(temp__4126__auto___14492))
{var error__5374__auto___14493 = temp__4126__auto___14492;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split","split",1041096409,null),cljs.core.pr_str.call(null,error__5374__auto___14493)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14493,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___14491,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14481_14488,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var opts = G__14484;var children = rest14485;while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___14494 = output_checker14483_14490.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___14494))
{var error__5374__auto___14495 = temp__4126__auto___14494;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split","split",1041096409,null),cljs.core.pr_str.call(null,error__5374__auto___14495)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14495,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14480_14487,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
};
var split = function (G__14484,var_args){
var rest14485 = null;if (arguments.length > 1) {
  rest14485 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return split__delegate.call(this,G__14484,rest14485);};
split.cljs$lang$maxFixedArity = 1;
split.cljs$lang$applyTo = (function (arglist__14496){
var G__14484 = cljs.core.first(arglist__14496);
var rest14485 = cljs.core.rest(arglist__14496);
return split__delegate(G__14484,rest14485);
});
split.cljs$core$IFn$_invoke$arity$variadic = split__delegate;
return split;
})()
;})(ufv___14486,output_schema14480_14487,input_schema14481_14488,input_checker14482_14489,output_checker14483_14490))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema14480_14487,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14481_14488], null)));

//# sourceMappingURL=button.js.map