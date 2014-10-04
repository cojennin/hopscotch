// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.input');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('schema.core');
goog.require('clojure.string');
goog.require('om_bootstrap.util');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om_bootstrap.types');
goog.require('om_tools.dom');
om_bootstrap.input.Addons = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384)),schema.core.either.call(null,schema.core.Str,om_bootstrap.types.Component),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"addon-after","addon-after",634985306)),schema.core.either.call(null,schema.core.Str,om_bootstrap.types.Component)], true, false);
/**
* Helps render feedback icons.
*/
om_bootstrap.input.FeedbackIcons = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)),schema.core.enum$.call(null,"success","warning","error"),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821)),schema.core.Bool], true, false);
/**
* Input fields that match these bad dawgs:
* https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Input.jsx
*/
om_bootstrap.input.Input = cljs.core.merge.call(null,om_bootstrap.input.Addons,om_bootstrap.input.FeedbackIcons,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"type","type",1174270348)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"label","label",1718410804)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261)),schema.core.named.call(null,schema.core.Bool,"DON'T render a wrapping form group?"),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"help","help",-439233446)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212)),schema.core.Str], true, false));
om_bootstrap.input.Radio = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"checked?","checked?",2024809091)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"inline?","inline?",-1674483791)),schema.core.Bool], true, false));
var ufv___23670 = schema.utils.use_fn_validation;var output_schema23661_23671 = schema.core.Str;var input_schema23662_23672 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.Str,schema.core.Keyword),schema.core.Bool], true, false),new cljs.core.Symbol(null,"klasses","klasses",-380235757,null))], null);var input_checker23663_23673 = schema.core.checker.call(null,input_schema23662_23672);var output_checker23664_23674 = schema.core.checker.call(null,output_schema23661_23671);/**
* Inputs: [klasses :- {(s/either s/Str s/Keyword) s/Bool}]
* Returns: s/Str
* 
* Mimics the class-set behavior from React. Pass in a map of
* potential class to Boolean; you'll get back a class string that
* represents the final class to apply.
* 
* TODO: Use class-set from om-tools.
*/
om_bootstrap.input.class_set = ((function (ufv___23670,output_schema23661_23671,input_schema23662_23672,input_checker23663_23673,output_checker23664_23674){
return (function class_set(G__23665){var validate__5372__auto__ = ufv___23670.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___23675 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23665], null);var temp__4126__auto___23676 = input_checker23663_23673.call(null,args__5373__auto___23675);if(cljs.core.truth_(temp__4126__auto___23676))
{var error__5374__auto___23677 = temp__4126__auto___23676;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.call(null,error__5374__auto___23677)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23677,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___23675,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23662_23672,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var klasses = G__23665;while(true){
return clojure.string.join.call(null," ",cljs.core.mapcat.call(null,((function (validate__5372__auto__,ufv___23670,output_schema23661_23671,input_schema23662_23672,input_checker23663_23673,output_checker23664_23674){
return (function (p__23668){var vec__23669 = p__23668;var k = cljs.core.nth.call(null,vec__23669,(0),null);var keep_QMARK_ = cljs.core.nth.call(null,vec__23669,(1),null);if(cljs.core.truth_(keep_QMARK_))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k)], null);
} else
{return null;
}
});})(validate__5372__auto__,ufv___23670,output_schema23661_23671,input_schema23662_23672,input_checker23663_23673,output_checker23664_23674))
,klasses));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___23678 = output_checker23664_23674.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___23678))
{var error__5374__auto___23679 = temp__4126__auto___23678;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),cljs.core.pr_str.call(null,error__5374__auto___23679)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23679,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23661_23671,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___23670,output_schema23661_23671,input_schema23662_23672,input_checker23663_23673,output_checker23664_23674))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.class_set),schema.core.make_fn_schema.call(null,output_schema23661_23671,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23662_23672], null)));
var ufv___23685 = schema.utils.use_fn_validation;var output_schema23680_23686 = om_bootstrap.types.Component;var input_schema23681_23687 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"glyph-name","glyph-name",350405338,null))], null);var input_checker23682_23688 = schema.core.checker.call(null,input_schema23681_23687);var output_checker23683_23689 = schema.core.checker.call(null,output_schema23680_23686);/**
* Inputs: [glyph-name :- s/Str]
* Returns: t/Component
* 
* To be used with :addon-before or :addon-after.
*/
om_bootstrap.input.glyph = ((function (ufv___23685,output_schema23680_23686,input_schema23681_23687,input_checker23682_23688,output_checker23683_23689){
return (function glyph(G__23684){var validate__5372__auto__ = ufv___23685.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___23690 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23684], null);var temp__4126__auto___23691 = input_checker23682_23688.call(null,args__5373__auto___23690);if(cljs.core.truth_(temp__4126__auto___23691))
{var error__5374__auto___23692 = temp__4126__auto___23691;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.call(null,error__5374__auto___23692)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23692,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___23690,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23681_23687,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var glyph_name = G__23684;while(true){
return React.DOM.span({"className": om_tools.dom.format_opts.call(null,("glyphicon glyphicon-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(glyph_name)))});
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___23693 = output_checker23683_23689.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___23693))
{var error__5374__auto___23694 = temp__4126__auto___23693;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),cljs.core.pr_str.call(null,error__5374__auto___23694)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23694,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23680_23686,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___23685,output_schema23680_23686,input_schema23681_23687,input_checker23682_23688,output_checker23683_23689))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.glyph),schema.core.make_fn_schema.call(null,output_schema23680_23686,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23681_23687], null)));
var ufv___23708 = schema.utils.use_fn_validation;var output_schema23695_23709 = om_bootstrap.types.Component;var input_schema23696_23710 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.FeedbackIcons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker23697_23711 = schema.core.checker.call(null,input_schema23696_23710);var output_checker23698_23712 = schema.core.checker.call(null,output_schema23695_23709);/**
* Inputs: [{:keys [feedback? bs-style]} :- FeedbackIcons]
* Returns: t/Component
*/
om_bootstrap.input.render_icon = ((function (ufv___23708,output_schema23695_23709,input_schema23696_23710,input_checker23697_23711,output_checker23698_23712){
return (function render_icon(G__23699){var validate__5372__auto__ = ufv___23708.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___23713 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23699], null);var temp__4126__auto___23714 = input_checker23697_23711.call(null,args__5373__auto___23713);if(cljs.core.truth_(temp__4126__auto___23714))
{var error__5374__auto___23715 = temp__4126__auto___23714;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.call(null,error__5374__auto___23715)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23715,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___23713,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23696_23710,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var G__23705 = G__23699;var map__23706 = G__23705;var map__23706__$1 = ((cljs.core.seq_QMARK_.call(null,map__23706))?cljs.core.apply.call(null,cljs.core.hash_map,map__23706):map__23706);var bs_style = cljs.core.get.call(null,map__23706__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK_ = cljs.core.get.call(null,map__23706__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));var G__23705__$1 = G__23705;while(true){
var map__23707 = G__23705__$1;var map__23707__$1 = ((cljs.core.seq_QMARK_.call(null,map__23707))?cljs.core.apply.call(null,cljs.core.hash_map,map__23707):map__23707);var bs_style__$1 = cljs.core.get.call(null,map__23707__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var feedback_QMARK___$1 = cljs.core.get.call(null,map__23707__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));if(cljs.core.truth_(feedback_QMARK___$1))
{var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"glyphicon","glyphicon",-2083132161),true,new cljs.core.Keyword(null,"form-control-feedback","form-control-feedback",-26248681),true,new cljs.core.Keyword(null,"glyphicon-ok","glyphicon-ok",-980475854),cljs.core._EQ_.call(null,"success",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-warning-sign","glyphicon-warning-sign",-715964093),cljs.core._EQ_.call(null,"warning",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-remove","glyphicon-remove",16420020),cljs.core._EQ_.call(null,"error",bs_style__$1)], null);return React.DOM.span({"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,klasses))});
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___23716 = output_checker23698_23712.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___23716))
{var error__5374__auto___23717 = temp__4126__auto___23716;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),cljs.core.pr_str.call(null,error__5374__auto___23717)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23717,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23695_23709,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___23708,output_schema23695_23709,input_schema23696_23710,input_checker23697_23711,output_checker23698_23712))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_icon),schema.core.make_fn_schema.call(null,output_schema23695_23709,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23696_23710], null)));
var ufv___23723 = schema.utils.use_fn_validation;var output_schema23718_23724 = schema.core.Any;var input_schema23719_23725 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.maybe.call(null,schema.core.Str),new cljs.core.Symbol(null,"help","help",1201298081,null))], null);var input_checker23720_23726 = schema.core.checker.call(null,input_schema23719_23725);var output_checker23721_23727 = schema.core.checker.call(null,output_schema23718_23724);/**
* Inputs: [help :- (s/maybe s/Str)]
*/
om_bootstrap.input.render_help = ((function (ufv___23723,output_schema23718_23724,input_schema23719_23725,input_checker23720_23726,output_checker23721_23727){
return (function render_help(G__23722){var validate__5372__auto__ = ufv___23723.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___23728 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23722], null);var temp__4126__auto___23729 = input_checker23720_23726.call(null,args__5373__auto___23728);if(cljs.core.truth_(temp__4126__auto___23729))
{var error__5374__auto___23730 = temp__4126__auto___23729;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.call(null,error__5374__auto___23730)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23730,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___23728,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23719_23725,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var help = G__23722;while(true){
if(cljs.core.truth_(help))
{return cljs.core.apply.call(null,React.DOM.span,{"className": "help-block"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[help],null))));
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___23731 = output_checker23721_23727.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___23731))
{var error__5374__auto___23732 = temp__4126__auto___23731;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),cljs.core.pr_str.call(null,error__5374__auto___23732)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23732,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23718_23724,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___23723,output_schema23718_23724,input_schema23719_23725,input_checker23720_23726,output_checker23721_23727))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_help),schema.core.make_fn_schema.call(null,output_schema23718_23724,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23719_23725], null)));
var ufv___23747 = schema.utils.use_fn_validation;var output_schema23733_23748 = schema.core.Any;var input_schema23734_23749 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Addons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"items","items",-1622480831,null))], null);var input_checker23735_23750 = schema.core.checker.call(null,input_schema23734_23749);var output_checker23736_23751 = schema.core.checker.call(null,output_schema23733_23748);/**
* Inputs: [{:keys [addon-before addon-after]} :- Addons items :- s/Any]
* 
* Items is a vector of render instances.
*/
om_bootstrap.input.render_input_group = ((function (ufv___23747,output_schema23733_23748,input_schema23734_23749,input_checker23735_23750,output_checker23736_23751){
return (function render_input_group(G__23737,G__23738){var validate__5372__auto__ = ufv___23747.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___23752 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23737,G__23738], null);var temp__4126__auto___23753 = input_checker23735_23750.call(null,args__5373__auto___23752);if(cljs.core.truth_(temp__4126__auto___23753))
{var error__5374__auto___23754 = temp__4126__auto___23753;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.call(null,error__5374__auto___23754)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23754,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___23752,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23734_23749,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var G__23744 = G__23737;var map__23745 = G__23744;var map__23745__$1 = ((cljs.core.seq_QMARK_.call(null,map__23745))?cljs.core.apply.call(null,cljs.core.hash_map,map__23745):map__23745);var addon_after = cljs.core.get.call(null,map__23745__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before = cljs.core.get.call(null,map__23745__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items = G__23738;var G__23744__$1 = G__23744;var items__$1 = items;while(true){
var map__23746 = G__23744__$1;var map__23746__$1 = ((cljs.core.seq_QMARK_.call(null,map__23746))?cljs.core.apply.call(null,cljs.core.hash_map,map__23746):map__23746);var addon_after__$1 = cljs.core.get.call(null,map__23746__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));var addon_before__$1 = cljs.core.get.call(null,map__23746__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));var items__$2 = items__$1;if(cljs.core.truth_((function (){var or__3558__auto__ = addon_before__$1;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return addon_after__$1;
}
})()))
{return cljs.core.apply.call(null,React.DOM.div,{"className": "input-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(addon_before__$1)?cljs.core.apply.call(null,React.DOM.span,{"className": "input-group-addon"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[addon_before__$1],null)))):null),items__$2,(cljs.core.truth_(addon_after__$1)?cljs.core.apply.call(null,React.DOM.span,{"className": "input-group-addon"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[addon_after__$1],null)))):null)],null))));
} else
{return items__$2;
}
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___23755 = output_checker23736_23751.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___23755))
{var error__5374__auto___23756 = temp__4126__auto___23755;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),cljs.core.pr_str.call(null,error__5374__auto___23756)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23756,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23733_23748,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___23747,output_schema23733_23748,input_schema23734_23749,input_checker23735_23750,output_checker23736_23751))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_input_group),schema.core.make_fn_schema.call(null,output_schema23733_23748,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23734_23749], null)));
var ufv___23770 = schema.utils.use_fn_validation;var output_schema23757_23771 = schema.core.Bool;var input_schema23758_23772 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker23759_23773 = schema.core.checker.call(null,input_schema23758_23772);var output_checker23760_23774 = schema.core.checker.call(null,output_schema23757_23771);/**
* Inputs: [{type :type} :- Input]
* Returns: s/Bool
* 
* Returns true if the supplied input is of type checkbox or radio,
* false otherwise.
*/
om_bootstrap.input.checkbox_or_radio_QMARK_ = ((function (ufv___23770,output_schema23757_23771,input_schema23758_23772,input_checker23759_23773,output_checker23760_23774){
return (function checkbox_or_radio_QMARK_(G__23761){var validate__5372__auto__ = ufv___23770.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___23775 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23761], null);var temp__4126__auto___23776 = input_checker23759_23773.call(null,args__5373__auto___23775);if(cljs.core.truth_(temp__4126__auto___23776))
{var error__5374__auto___23777 = temp__4126__auto___23776;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.call(null,error__5374__auto___23777)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23777,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___23775,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23758_23772,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var G__23767 = G__23761;var map__23768 = G__23767;var map__23768__$1 = ((cljs.core.seq_QMARK_.call(null,map__23768))?cljs.core.apply.call(null,cljs.core.hash_map,map__23768):map__23768);var type = cljs.core.get.call(null,map__23768__$1,new cljs.core.Keyword(null,"type","type",1174270348));var G__23767__$1 = G__23767;while(true){
var map__23769 = G__23767__$1;var map__23769__$1 = ((cljs.core.seq_QMARK_.call(null,map__23769))?cljs.core.apply.call(null,cljs.core.hash_map,map__23769):map__23769);var type__$1 = cljs.core.get.call(null,map__23769__$1,new cljs.core.Keyword(null,"type","type",1174270348));return (cljs.core._EQ_.call(null,type__$1,"checkbox")) || (cljs.core._EQ_.call(null,type__$1,"radio"));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___23778 = output_checker23760_23774.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___23778))
{var error__5374__auto___23779 = temp__4126__auto___23778;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),cljs.core.pr_str.call(null,error__5374__auto___23779)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23779,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23757_23771,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___23770,output_schema23757_23771,input_schema23758_23772,input_checker23759_23773,output_checker23760_23774))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.checkbox_or_radio_QMARK_),schema.core.make_fn_schema.call(null,output_schema23757_23771,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23758_23772], null)));
var ufv___23794 = schema.utils.use_fn_validation;var output_schema23780_23795 = om_bootstrap.types.Component;var input_schema23781_23796 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker23782_23797 = schema.core.checker.call(null,input_schema23781_23796);var output_checker23783_23798 = schema.core.checker.call(null,output_schema23780_23795);/**
* Inputs: [{type :type} :- Input children]
* Returns: t/Component
* 
* Wraps this business in a div.
*/
om_bootstrap.input.checkbox_or_radio_wrapper = ((function (ufv___23794,output_schema23780_23795,input_schema23781_23796,input_checker23782_23797,output_checker23783_23798){
return (function checkbox_or_radio_wrapper(G__23784,G__23785){var validate__5372__auto__ = ufv___23794.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___23799 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23784,G__23785], null);var temp__4126__auto___23800 = input_checker23782_23797.call(null,args__5373__auto___23799);if(cljs.core.truth_(temp__4126__auto___23800))
{var error__5374__auto___23801 = temp__4126__auto___23800;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.call(null,error__5374__auto___23801)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23801,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___23799,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23781_23796,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var G__23791 = G__23784;var map__23792 = G__23791;var map__23792__$1 = ((cljs.core.seq_QMARK_.call(null,map__23792))?cljs.core.apply.call(null,cljs.core.hash_map,map__23792):map__23792);var type = cljs.core.get.call(null,map__23792__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children = G__23785;var G__23791__$1 = G__23791;var children__$1 = children;while(true){
var map__23793 = G__23791__$1;var map__23793__$1 = ((cljs.core.seq_QMARK_.call(null,map__23793))?cljs.core.apply.call(null,cljs.core.hash_map,map__23793):map__23793);var type__$1 = cljs.core.get.call(null,map__23793__$1,new cljs.core.Keyword(null,"type","type",1174270348));var children__$2 = children__$1;var klasses = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cljs.core._EQ_.call(null,"checkbox",type__$1),new cljs.core.Keyword(null,"radio","radio",1323726374),cljs.core._EQ_.call(null,"radio",type__$1)], null);return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,klasses))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___23802 = output_checker23783_23798.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___23802))
{var error__5374__auto___23803 = temp__4126__auto___23802;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),cljs.core.pr_str.call(null,error__5374__auto___23803)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23803,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23780_23795,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___23794,output_schema23780_23795,input_schema23781_23796,input_checker23782_23797,output_checker23783_23798))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.checkbox_or_radio_wrapper),schema.core.make_fn_schema.call(null,output_schema23780_23795,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23781_23796], null)));
var ufv___23822 = schema.utils.use_fn_validation;var output_schema23804_23823 = schema.core.Any;var input_schema23805_23824 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null))], null);var input_schema23809_23825 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker23806_23826 = schema.core.checker.call(null,input_schema23805_23824);var output_checker23807_23827 = schema.core.checker.call(null,output_schema23804_23823);var input_checker23810_23828 = schema.core.checker.call(null,input_schema23809_23825);var output_checker23811_23829 = schema.core.checker.call(null,output_schema23804_23823);/**
* Inputs: ([input :- Input] [{lc :label-classname, label :label, :as input} :- Input child])
* 
* This doesn't handle any control group stuff.
*/
om_bootstrap.input.render_label = ((function (ufv___23822,output_schema23804_23823,input_schema23805_23824,input_schema23809_23825,input_checker23806_23826,output_checker23807_23827,input_checker23810_23828,output_checker23811_23829){
return (function() {
var render_label = null;
var render_label__1 = (function (G__23808){var validate__5372__auto__ = ufv___23822.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___23830 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23808], null);var temp__4126__auto___23831 = input_checker23806_23826.call(null,args__5373__auto___23830);if(cljs.core.truth_(temp__4126__auto___23831))
{var error__5374__auto___23832 = temp__4126__auto___23831;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__5374__auto___23832)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23832,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___23830,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23805_23824,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var input = G__23808;while(true){
return render_label.call(null,input,null);
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___23833 = output_checker23807_23827.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___23833))
{var error__5374__auto___23834 = temp__4126__auto___23833;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__5374__auto___23834)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23834,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23804_23823,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});
var render_label__2 = (function (G__23812,G__23813){var validate__5372__auto__ = ufv___23822.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___23835 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23812,G__23813], null);var temp__4126__auto___23836 = input_checker23810_23828.call(null,args__5373__auto___23835);if(cljs.core.truth_(temp__4126__auto___23836))
{var error__5374__auto___23837 = temp__4126__auto___23836;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__5374__auto___23837)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23837,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___23835,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23809_23825,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var G__23819 = G__23812;var map__23820 = G__23819;var map__23820__$1 = ((cljs.core.seq_QMARK_.call(null,map__23820))?cljs.core.apply.call(null,cljs.core.hash_map,map__23820):map__23820);var input = map__23820__$1;var lc = cljs.core.get.call(null,map__23820__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label = cljs.core.get.call(null,map__23820__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child = G__23813;var G__23819__$1 = G__23819;var child__$1 = child;while(true){
var map__23821 = G__23819__$1;var map__23821__$1 = ((cljs.core.seq_QMARK_.call(null,map__23821))?cljs.core.apply.call(null,cljs.core.hash_map,map__23821):map__23821);var input__$1 = map__23821__$1;var lc__$1 = cljs.core.get.call(null,map__23821__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));var label__$1 = cljs.core.get.call(null,map__23821__$1,new cljs.core.Keyword(null,"label","label",1718410804));var child__$2 = child__$1;var classes = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"control-label","control-label",1226436372),!(om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input__$1))], null),(cljs.core.truth_(lc__$1)?new cljs.core.PersistentArrayMap.fromArray([lc__$1,cljs.core.boolean$.call(null,lc__$1)], true, false):null));if(cljs.core.truth_(label__$1))
{return cljs.core.apply.call(null,React.DOM.label,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2,label__$1],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___23838 = output_checker23811_23829.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___23838))
{var error__5374__auto___23839 = temp__4126__auto___23838;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),cljs.core.pr_str.call(null,error__5374__auto___23839)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23839,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23804_23823,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});
render_label = function(G__23812,G__23813){
switch(arguments.length){
case 1:
return render_label__1.call(this,G__23812);
case 2:
return render_label__2.call(this,G__23812,G__23813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_label.cljs$core$IFn$_invoke$arity$1 = render_label__1;
render_label.cljs$core$IFn$_invoke$arity$2 = render_label__2;
return render_label;
})()
;})(ufv___23822,output_schema23804_23823,input_schema23805_23824,input_schema23809_23825,input_checker23806_23826,output_checker23807_23827,input_checker23810_23828,output_checker23811_23829))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_label),schema.core.make_fn_schema.call(null,output_schema23804_23823,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23805_23824,input_schema23809_23825], null)));
var ufv___23854 = schema.utils.use_fn_validation;var output_schema23840_23855 = schema.core.Any;var input_schema23841_23856 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);var input_checker23842_23857 = schema.core.checker.call(null,input_schema23841_23856);var output_checker23843_23858 = schema.core.checker.call(null,output_schema23840_23855);/**
* Inputs: [{wc :wrapper-classname} :- Input child]
*/
om_bootstrap.input.render_wrapper = ((function (ufv___23854,output_schema23840_23855,input_schema23841_23856,input_checker23842_23857,output_checker23843_23858){
return (function render_wrapper(G__23844,G__23845){var validate__5372__auto__ = ufv___23854.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___23859 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23844,G__23845], null);var temp__4126__auto___23860 = input_checker23842_23857.call(null,args__5373__auto___23859);if(cljs.core.truth_(temp__4126__auto___23860))
{var error__5374__auto___23861 = temp__4126__auto___23860;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.call(null,error__5374__auto___23861)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23861,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___23859,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23841_23856,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var G__23851 = G__23844;var map__23852 = G__23851;var map__23852__$1 = ((cljs.core.seq_QMARK_.call(null,map__23852))?cljs.core.apply.call(null,cljs.core.hash_map,map__23852):map__23852);var wc = cljs.core.get.call(null,map__23852__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child = G__23845;var G__23851__$1 = G__23851;var child__$1 = child;while(true){
var map__23853 = G__23851__$1;var map__23853__$1 = ((cljs.core.seq_QMARK_.call(null,map__23853))?cljs.core.apply.call(null,cljs.core.hash_map,map__23853):map__23853);var wc__$1 = cljs.core.get.call(null,map__23853__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));var child__$2 = child__$1;if(cljs.core.truth_(wc__$1))
{return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,wc__$1)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2],null))));
} else
{return child__$2;
}
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___23862 = output_checker23843_23858.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___23862))
{var error__5374__auto___23863 = temp__4126__auto___23862;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),cljs.core.pr_str.call(null,error__5374__auto___23863)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23863,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23840_23855,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___23854,output_schema23840_23855,input_schema23841_23856,input_checker23842_23857,output_checker23843_23858))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_wrapper),schema.core.make_fn_schema.call(null,output_schema23840_23855,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23841_23856], null)));
var ufv___23878 = schema.utils.use_fn_validation;var output_schema23864_23879 = om_bootstrap.types.Component;var input_schema23865_23880 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker23866_23881 = schema.core.checker.call(null,input_schema23865_23880);var output_checker23867_23882 = schema.core.checker.call(null,output_schema23864_23879);/**
* Inputs: [{bs-style :bs-style, cn :group-classname, :as input} :- Input children]
* Returns: t/Component
* 
* Wraps the entire form group.
*/
om_bootstrap.input.render_form_group = ((function (ufv___23878,output_schema23864_23879,input_schema23865_23880,input_checker23866_23881,output_checker23867_23882){
return (function render_form_group(G__23868,G__23869){var validate__5372__auto__ = ufv___23878.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___23883 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23868,G__23869], null);var temp__4126__auto___23884 = input_checker23866_23881.call(null,args__5373__auto___23883);if(cljs.core.truth_(temp__4126__auto___23884))
{var error__5374__auto___23885 = temp__4126__auto___23884;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.call(null,error__5374__auto___23885)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23885,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___23883,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23865_23880,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var G__23875 = G__23868;var map__23876 = G__23875;var map__23876__$1 = ((cljs.core.seq_QMARK_.call(null,map__23876))?cljs.core.apply.call(null,cljs.core.hash_map,map__23876):map__23876);var input = map__23876__$1;var bs_style = cljs.core.get.call(null,map__23876__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn = cljs.core.get.call(null,map__23876__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children = G__23869;var G__23875__$1 = G__23875;var children__$1 = children;while(true){
var map__23877 = G__23875__$1;var map__23877__$1 = ((cljs.core.seq_QMARK_.call(null,map__23877))?cljs.core.apply.call(null,cljs.core.hash_map,map__23877):map__23877);var input__$1 = map__23877__$1;var bs_style__$1 = cljs.core.get.call(null,map__23877__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));var cn__$1 = cljs.core.get.call(null,map__23877__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));var children__$2 = children__$1;var classes = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-group","form-group",-267875328),cljs.core.not.call(null,new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-feedback","has-feedback",1328001802),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-success","has-success",685004255),cljs.core._EQ_.call(null,"success",bs_style__$1),new cljs.core.Keyword(null,"has-warning","has-warning",1993894136),cljs.core._EQ_.call(null,"warning",bs_style__$1),new cljs.core.Keyword(null,"has-error","has-error",-786302929),cljs.core._EQ_.call(null,"error",bs_style__$1)], null),(cljs.core.truth_(cn__$1)?new cljs.core.PersistentArrayMap.fromArray([cn__$1,cljs.core.boolean$.call(null,cn__$1)], true, false):null));return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___23886 = output_checker23867_23882.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___23886))
{var error__5374__auto___23887 = temp__4126__auto___23886;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),cljs.core.pr_str.call(null,error__5374__auto___23887)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23887,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23864_23879,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___23878,output_schema23864_23879,input_schema23865_23880,input_checker23866_23881,output_checker23867_23882))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_form_group),schema.core.make_fn_schema.call(null,output_schema23864_23879,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23865_23880], null)));
var ufv___23897 = schema.utils.use_fn_validation;var output_schema23888_23898 = om_bootstrap.types.Component;var input_schema23889_23899 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"attrs","attrs",-450137186,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);var input_checker23890_23900 = schema.core.checker.call(null,input_schema23889_23899);var output_checker23891_23901 = schema.core.checker.call(null,output_schema23888_23898);/**
* Inputs: [input :- Input attrs children]
* Returns: t/Component
*/
om_bootstrap.input.render_input = ((function (ufv___23897,output_schema23888_23898,input_schema23889_23899,input_checker23890_23900,output_checker23891_23901){
return (function render_input(G__23892,G__23893,G__23894){var validate__5372__auto__ = ufv___23897.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___23902 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23892,G__23893,G__23894], null);var temp__4126__auto___23903 = input_checker23890_23900.call(null,args__5373__auto___23902);if(cljs.core.truth_(temp__4126__auto___23903))
{var error__5374__auto___23904 = temp__4126__auto___23903;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.call(null,error__5374__auto___23904)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23904,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___23902,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23889_23899,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var input = G__23892;var attrs = G__23893;var children = G__23894;while(true){
var props = ((function (validate__5372__auto__,ufv___23897,output_schema23888_23898,input_schema23889_23899,input_checker23890_23900,output_checker23891_23901){
return (function (klass){return om_bootstrap.util.merge_props.call(null,attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),klass,new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input"], null));
});})(validate__5372__auto__,ufv___23897,output_schema23888_23898,input_schema23889_23899,input_checker23890_23900,output_checker23891_23901))
;if(cljs.core.not.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input)))
{return children;
} else
{var G__23896 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input);switch (G__23896) {
case "select":
return om_tools.dom.element.call(null,React.DOM.select,props.call(null,"form-control"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

break;
case "textarea":
return om_tools.dom.element.call(null,om.dom.textarea,props.call(null,"form-control"),cljs.core.PersistentVector.EMPTY);

break;
case "static":
return om_tools.dom.element.call(null,React.DOM.p,props.call(null,"form-control-static"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(attrs)],null)));

break;
default:
return om_tools.dom.element.call(null,om.dom.input,cljs.core.assoc.call(null,props.call(null,((om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input))?"":"form-control")),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

}
}
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___23906 = output_checker23891_23901.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___23906))
{var error__5374__auto___23907 = temp__4126__auto___23906;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-input","render-input",243083212,null),cljs.core.pr_str.call(null,error__5374__auto___23907)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23907,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23888_23898,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___23897,output_schema23888_23898,input_schema23889_23899,input_checker23890_23900,output_checker23891_23901))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_input),schema.core.make_fn_schema.call(null,output_schema23888_23898,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23889_23899], null)));
var ufv___23916 = schema.utils.use_fn_validation;var output_schema23908_23917 = om_bootstrap.types.Component;var input_schema23909_23918 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker23910_23919 = schema.core.checker.call(null,input_schema23909_23918);var output_checker23911_23920 = schema.core.checker.call(null,output_schema23908_23917);/**
* Inputs: [opts :- Input & children]
* Returns: t/Component
* 
* Returns an input component. This currently does NOT handle any of
* the default values or validation messages that we'll need to make
* this work, though.
* @param {...*} var_args
*/
om_bootstrap.input.input = ((function (ufv___23916,output_schema23908_23917,input_schema23909_23918,input_checker23910_23919,output_checker23911_23920){
return (function() { 
var input__delegate = function (G__23912,rest23913){var validate__5372__auto__ = ufv___23916.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___23921 = cljs.core.list_STAR_.call(null,G__23912,rest23913);var temp__4126__auto___23922 = input_checker23910_23919.call(null,args__5373__auto___23921);if(cljs.core.truth_(temp__4126__auto___23922))
{var error__5374__auto___23923 = temp__4126__auto___23922;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.call(null,error__5374__auto___23923)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23923,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___23921,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23909_23918,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var opts = G__23912;var children = rest23913;while(true){
var vec__23915 = om_bootstrap.types.separate.call(null,om_bootstrap.input.Input,opts);var input__$1 = cljs.core.nth.call(null,vec__23915,(0),null);var attrs = cljs.core.nth.call(null,vec__23915,(1),null);if(om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input__$1))
{return om_bootstrap.input.render_form_group.call(null,input__$1,om_bootstrap.input.render_wrapper.call(null,input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.checkbox_or_radio_wrapper.call(null,input__$1,om_bootstrap.input.render_label.call(null,input__$1,om_bootstrap.input.render_input.call(null,input__$1,attrs,children))),om_bootstrap.input.render_help.call(null,new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null)));
} else
{return om_bootstrap.input.render_form_group.call(null,input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_label.call(null,input__$1),om_bootstrap.input.render_wrapper.call(null,input__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_input_group.call(null,cljs.core.select_keys.call(null,input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addon-before","addon-before",-500360384),new cljs.core.Keyword(null,"addon-after","addon-after",634985306)], null)),om_bootstrap.input.render_input.call(null,input__$1,attrs,children)),om_bootstrap.input.render_icon.call(null,cljs.core.select_keys.call(null,input__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)], null))),om_bootstrap.input.render_help.call(null,new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input__$1))], null))], null));
}
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___23924 = output_checker23911_23920.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___23924))
{var error__5374__auto___23925 = temp__4126__auto___23924;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.pr_str.call(null,error__5374__auto___23925)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23925,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23908_23917,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
};
var input = function (G__23912,var_args){
var rest23913 = null;if (arguments.length > 1) {
  rest23913 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return input__delegate.call(this,G__23912,rest23913);};
input.cljs$lang$maxFixedArity = 1;
input.cljs$lang$applyTo = (function (arglist__23926){
var G__23912 = cljs.core.first(arglist__23926);
var rest23913 = cljs.core.rest(arglist__23926);
return input__delegate(G__23912,rest23913);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;})(ufv___23916,output_schema23908_23917,input_schema23909_23918,input_checker23910_23919,output_checker23911_23920))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.input),schema.core.make_fn_schema.call(null,output_schema23908_23917,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23909_23918], null)));
var ufv___23936 = schema.utils.use_fn_validation;var output_schema23927_23937 = om_bootstrap.types.Component;var input_schema23928_23938 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Radio,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker23929_23939 = schema.core.checker.call(null,input_schema23928_23938);var output_checker23930_23940 = schema.core.checker.call(null,output_schema23927_23937);/**
* Inputs: [opts :- Radio]
* Returns: t/Component
* 
* Generates a radio button entry, to place into a radio button
* grouping.
*/
om_bootstrap.input.radio_option = ((function (ufv___23936,output_schema23927_23937,input_schema23928_23938,input_checker23929_23939,output_checker23930_23940){
return (function radio_option(G__23931){var validate__5372__auto__ = ufv___23936.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___23941 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23931], null);var temp__4126__auto___23942 = input_checker23929_23939.call(null,args__5373__auto___23941);if(cljs.core.truth_(temp__4126__auto___23942))
{var error__5374__auto___23943 = temp__4126__auto___23942;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.call(null,error__5374__auto___23943)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23943,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___23941,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23928_23938,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var opts = G__23931;while(true){
var vec__23934 = om_bootstrap.types.separate.call(null,om_bootstrap.input.Radio,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input",new cljs.core.Keyword(null,"type","type",1174270348),"radio"], null));var bs = cljs.core.nth.call(null,vec__23934,(0),null);var props = cljs.core.nth.call(null,vec__23934,(1),null);var map__23935 = bs;var map__23935__$1 = ((cljs.core.seq_QMARK_.call(null,map__23935))?cljs.core.apply.call(null,cljs.core.hash_map,map__23935):map__23935);var inline_QMARK_ = cljs.core.get.call(null,map__23935__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));var checked_QMARK_ = cljs.core.get.call(null,map__23935__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));var label = cljs.core.get.call(null,map__23935__$1,new cljs.core.Keyword(null,"label","label",1718410804));var core = om_tools.dom.element.call(null,om.dom.input,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_),cljs.core.PersistentVector.EMPTY);if(cljs.core.truth_(inline_QMARK_))
{return cljs.core.apply.call(null,React.DOM.label,{"className": "radio-inline"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))));
} else
{return cljs.core.apply.call(null,React.DOM.div,{"className": "radio"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.label,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))))],null))));
}
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___23944 = output_checker23930_23940.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___23944))
{var error__5374__auto___23945 = temp__4126__auto___23944;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),cljs.core.pr_str.call(null,error__5374__auto___23945)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23945,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23927_23937,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___23936,output_schema23927_23937,input_schema23928_23938,input_checker23929_23939,output_checker23930_23940))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.radio_option),schema.core.make_fn_schema.call(null,output_schema23927_23937,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23928_23938], null)));
var ufv___23968 = schema.utils.use_fn_validation;var output_schema23946_23969 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.types.Component], null);var input_schema23947_23970 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"header","header",1759972661,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.pair.call(null,schema.core.Str,"option value",schema.core.Str,"option label")], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker23948_23971 = schema.core.checker.call(null,input_schema23947_23970);var output_checker23949_23972 = schema.core.checker.call(null,output_schema23946_23969);/**
* Inputs: [header :- s/Str opts :- [(s/pair s/Str "option value" s/Str "option label")]]
* Returns: [t/Component]
* 
* Returns a sequence of options for use as the children of a select
* input.
*/
om_bootstrap.input.options = ((function (ufv___23968,output_schema23946_23969,input_schema23947_23970,input_checker23948_23971,output_checker23949_23972){
return (function options(G__23950,G__23951){var validate__5372__auto__ = ufv___23968.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___23973 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23950,G__23951], null);var temp__4126__auto___23974 = input_checker23948_23971.call(null,args__5373__auto___23973);if(cljs.core.truth_(temp__4126__auto___23974))
{var error__5374__auto___23975 = temp__4126__auto___23974;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.call(null,error__5374__auto___23975)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23975,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___23973,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23947_23970,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var header = G__23950;var opts = G__23951;while(true){
return cljs.core.cons.call(null,cljs.core.apply.call(null,om.dom.option,{"value": ""},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[header],null)))),(function (){var iter__4283__auto__ = ((function (validate__5372__auto__,ufv___23968,output_schema23946_23969,input_schema23947_23970,input_checker23948_23971,output_checker23949_23972){
return (function iter__23960(s__23961){return (new cljs.core.LazySeq(null,((function (validate__5372__auto__,ufv___23968,output_schema23946_23969,input_schema23947_23970,input_checker23948_23971,output_checker23949_23972){
return (function (){var s__23961__$1 = s__23961;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23961__$1);if(temp__4126__auto__)
{var s__23961__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23961__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__23961__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__23963 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__23962 = (0);while(true){
if((i__23962 < size__4282__auto__))
{var vec__23966 = cljs.core._nth.call(null,c__4281__auto__,i__23962);var v = cljs.core.nth.call(null,vec__23966,(0),null);var label = cljs.core.nth.call(null,vec__23966,(1),null);cljs.core.chunk_append.call(null,b__23963,cljs.core.apply.call(null,om.dom.option,{"value": om_tools.dom.format_opts.call(null,v)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))));
{
var G__23976 = (i__23962 + (1));
i__23962 = G__23976;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23963),iter__23960.call(null,cljs.core.chunk_rest.call(null,s__23961__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23963),null);
}
} else
{var vec__23967 = cljs.core.first.call(null,s__23961__$2);var v = cljs.core.nth.call(null,vec__23967,(0),null);var label = cljs.core.nth.call(null,vec__23967,(1),null);return cljs.core.cons.call(null,cljs.core.apply.call(null,om.dom.option,{"value": om_tools.dom.format_opts.call(null,v)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))),iter__23960.call(null,cljs.core.rest.call(null,s__23961__$2)));
}
} else
{return null;
}
break;
}
});})(validate__5372__auto__,ufv___23968,output_schema23946_23969,input_schema23947_23970,input_checker23948_23971,output_checker23949_23972))
,null,null));
});})(validate__5372__auto__,ufv___23968,output_schema23946_23969,input_schema23947_23970,input_checker23948_23971,output_checker23949_23972))
;return iter__4283__auto__.call(null,opts);
})());
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___23977 = output_checker23949_23972.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___23977))
{var error__5374__auto___23978 = temp__4126__auto___23977;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"options","options",1740170016,null),cljs.core.pr_str.call(null,error__5374__auto___23978)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___23978,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23946_23969,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___23968,output_schema23946_23969,input_schema23947_23970,input_checker23948_23971,output_checker23949_23972))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.options),schema.core.make_fn_schema.call(null,output_schema23946_23969,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23947_23970], null)));

//# sourceMappingURL=input.js.map