// Compiled by ClojureScript 0.0-2322
goog.provide('hopscotch.core');
goog.require('cljs.core');
goog.require('om_bootstrap.input');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om_bootstrap.grid');
goog.require('om_tools.mixin');
goog.require('om_tools.core');
goog.require('om_bootstrap.nav');
goog.require('om_bootstrap.nav');
goog.require('om.core');
goog.require('om.core');
goog.require('om_bootstrap.grid');
goog.require('om_bootstrap.button');
goog.require('om_bootstrap.button');
goog.require('om_bootstrap.input');
var ufv___28477 = schema.utils.use_fn_validation;var output_schema28465_28478 = schema.core.Any;var input_schema28466_28479 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker28467_28480 = schema.core.checker.call(null,input_schema28466_28479);var output_checker28468_28481 = schema.core.checker.call(null,output_schema28465_28478);/**
* Inputs: [data owner]
*/
hopscotch.core.search = ((function (ufv___28477,output_schema28465_28478,input_schema28466_28479,input_checker28467_28480,output_checker28468_28481){
return (function search(G__28469,G__28470){var validate__5372__auto__ = ufv___28477.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___28482 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28469,G__28470], null);var temp__4126__auto___28483 = input_checker28467_28480.call(null,args__5373__auto___28482);if(cljs.core.truth_(temp__4126__auto___28483))
{var error__5374__auto___28484 = temp__4126__auto___28483;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"search","search",-1089495947,null),cljs.core.pr_str.call(null,error__5374__auto___28484)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___28484,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___28482,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28466_28479,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var data = G__28469;var owner = G__28470;while(true){
if(typeof hopscotch.core.t28474 !== 'undefined')
{} else
{
/**
* @constructor
*/
hopscotch.core.t28474 = (function (G__28470,owner,data,input_checker28467,G__28469,output_checker28468,output_schema28465,search,input_schema28466,validate__5372__auto__,ufv__,meta28475){
this.G__28470 = G__28470;
this.owner = owner;
this.data = data;
this.input_checker28467 = input_checker28467;
this.G__28469 = G__28469;
this.output_checker28468 = output_checker28468;
this.output_schema28465 = output_schema28465;
this.search = search;
this.input_schema28466 = input_schema28466;
this.validate__5372__auto__ = validate__5372__auto__;
this.ufv__ = ufv__;
this.meta28475 = meta28475;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hopscotch.core.t28474.cljs$lang$type = true;
hopscotch.core.t28474.cljs$lang$ctorStr = "hopscotch.core/t28474";
hopscotch.core.t28474.cljs$lang$ctorPrWriter = ((function (validate__5372__auto__,ufv___28477,output_schema28465_28478,input_schema28466_28479,input_checker28467_28480,output_checker28468_28481){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"hopscotch.core/t28474");
});})(validate__5372__auto__,ufv___28477,output_schema28465_28478,input_schema28466_28479,input_checker28467_28480,output_checker28468_28481))
;
hopscotch.core.t28474.prototype.om$core$IDisplayName$ = true;
hopscotch.core.t28474.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5372__auto__,ufv___28477,output_schema28465_28478,input_schema28466_28479,input_checker28467_28480,output_checker28468_28481){
return (function (_){var self__ = this;
var ___$1 = this;return "search";
});})(validate__5372__auto__,ufv___28477,output_schema28465_28478,input_schema28466_28479,input_checker28467_28480,output_checker28468_28481))
;
hopscotch.core.t28474.prototype.om$core$IRender$ = true;
hopscotch.core.t28474.prototype.om$core$IRender$render$arity$1 = ((function (validate__5372__auto__,ufv___28477,output_schema28465_28478,input_schema28466_28479,input_checker28467_28480,output_checker28468_28481){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"className": "search"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.h3,{"className": "text-center"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[("\"Too much of anything is bad, but too much of good whiskey is barely enough.\"")],null)))),cljs.core.apply.call(null,React.DOM.p,{"className": "text-right byline"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[("- Mark Twain")],null)))),om_tools.dom.element.call(null,React.DOM.form,om_bootstrap.input.input.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Find a whiskey"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.p,om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary",new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),"large",new cljs.core.Keyword(null,"class","class",-2030961996),"pull-right"], null),"Submit"),cljs.core.PersistentVector.EMPTY)],null)))],null))));
});})(validate__5372__auto__,ufv___28477,output_schema28465_28478,input_schema28466_28479,input_checker28467_28480,output_checker28468_28481))
;
hopscotch.core.t28474.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5372__auto__,ufv___28477,output_schema28465_28478,input_schema28466_28479,input_checker28467_28480,output_checker28468_28481){
return (function (_28476){var self__ = this;
var _28476__$1 = this;return self__.meta28475;
});})(validate__5372__auto__,ufv___28477,output_schema28465_28478,input_schema28466_28479,input_checker28467_28480,output_checker28468_28481))
;
hopscotch.core.t28474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5372__auto__,ufv___28477,output_schema28465_28478,input_schema28466_28479,input_checker28467_28480,output_checker28468_28481){
return (function (_28476,meta28475__$1){var self__ = this;
var _28476__$1 = this;return (new hopscotch.core.t28474(self__.G__28470,self__.owner,self__.data,self__.input_checker28467,self__.G__28469,self__.output_checker28468,self__.output_schema28465,self__.search,self__.input_schema28466,self__.validate__5372__auto__,self__.ufv__,meta28475__$1));
});})(validate__5372__auto__,ufv___28477,output_schema28465_28478,input_schema28466_28479,input_checker28467_28480,output_checker28468_28481))
;
hopscotch.core.__GT_t28474 = ((function (validate__5372__auto__,ufv___28477,output_schema28465_28478,input_schema28466_28479,input_checker28467_28480,output_checker28468_28481){
return (function __GT_t28474(G__28470__$1,owner__$1,data__$1,input_checker28467__$1,G__28469__$1,output_checker28468__$1,output_schema28465__$1,search__$1,input_schema28466__$1,validate__5372__auto____$1,ufv____$1,meta28475){return (new hopscotch.core.t28474(G__28470__$1,owner__$1,data__$1,input_checker28467__$1,G__28469__$1,output_checker28468__$1,output_schema28465__$1,search__$1,input_schema28466__$1,validate__5372__auto____$1,ufv____$1,meta28475));
});})(validate__5372__auto__,ufv___28477,output_schema28465_28478,input_schema28466_28479,input_checker28467_28480,output_checker28468_28481))
;
}
return (new hopscotch.core.t28474(G__28470,owner,data,input_checker28467_28480,G__28469,output_checker28468_28481,output_schema28465_28478,search,input_schema28466_28479,validate__5372__auto__,ufv___28477,null));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___28485 = output_checker28468_28481.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___28485))
{var error__5374__auto___28486 = temp__4126__auto___28485;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"search","search",-1089495947,null),cljs.core.pr_str.call(null,error__5374__auto___28486)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___28486,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28465_28478,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___28477,output_schema28465_28478,input_schema28466_28479,input_checker28467_28480,output_checker28468_28481))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,hopscotch.core.search),schema.core.make_fn_schema.call(null,output_schema28465_28478,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28466_28479], null)));
hopscotch.core.__GT_search = (function() {
var __GT_search = null;
var __GT_search__1 = (function (cursor__9115__auto__){return om.core.build.call(null,hopscotch.core.search,cursor__9115__auto__);
});
var __GT_search__2 = (function (cursor__9115__auto__,m28464){return om.core.build.call(null,hopscotch.core.search,cursor__9115__auto__,m28464);
});
__GT_search = function(cursor__9115__auto__,m28464){
switch(arguments.length){
case 1:
return __GT_search__1.call(this,cursor__9115__auto__);
case 2:
return __GT_search__2.call(this,cursor__9115__auto__,m28464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_search.cljs$core$IFn$_invoke$arity$1 = __GT_search__1;
__GT_search.cljs$core$IFn$_invoke$arity$2 = __GT_search__2;
return __GT_search;
})()
;
var ufv___28500 = schema.utils.use_fn_validation;var output_schema28488_28501 = schema.core.Any;var input_schema28489_28502 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker28490_28503 = schema.core.checker.call(null,input_schema28489_28502);var output_checker28491_28504 = schema.core.checker.call(null,output_schema28488_28501);/**
* Inputs: [data owner]
*/
hopscotch.core.header = ((function (ufv___28500,output_schema28488_28501,input_schema28489_28502,input_checker28490_28503,output_checker28491_28504){
return (function header(G__28492,G__28493){var validate__5372__auto__ = ufv___28500.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___28505 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28492,G__28493], null);var temp__4126__auto___28506 = input_checker28490_28503.call(null,args__5373__auto___28505);if(cljs.core.truth_(temp__4126__auto___28506))
{var error__5374__auto___28507 = temp__4126__auto___28506;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"header","header",1759972661,null),cljs.core.pr_str.call(null,error__5374__auto___28507)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___28507,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___28505,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28489_28502,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var data = G__28492;var owner = G__28493;while(true){
if(typeof hopscotch.core.t28497 !== 'undefined')
{} else
{
/**
* @constructor
*/
hopscotch.core.t28497 = (function (G__28493,G__28492,owner,data,input_checker28490,output_schema28488,header,output_checker28491,validate__5372__auto__,input_schema28489,ufv__,meta28498){
this.G__28493 = G__28493;
this.G__28492 = G__28492;
this.owner = owner;
this.data = data;
this.input_checker28490 = input_checker28490;
this.output_schema28488 = output_schema28488;
this.header = header;
this.output_checker28491 = output_checker28491;
this.validate__5372__auto__ = validate__5372__auto__;
this.input_schema28489 = input_schema28489;
this.ufv__ = ufv__;
this.meta28498 = meta28498;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hopscotch.core.t28497.cljs$lang$type = true;
hopscotch.core.t28497.cljs$lang$ctorStr = "hopscotch.core/t28497";
hopscotch.core.t28497.cljs$lang$ctorPrWriter = ((function (validate__5372__auto__,ufv___28500,output_schema28488_28501,input_schema28489_28502,input_checker28490_28503,output_checker28491_28504){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"hopscotch.core/t28497");
});})(validate__5372__auto__,ufv___28500,output_schema28488_28501,input_schema28489_28502,input_checker28490_28503,output_checker28491_28504))
;
hopscotch.core.t28497.prototype.om$core$IDisplayName$ = true;
hopscotch.core.t28497.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5372__auto__,ufv___28500,output_schema28488_28501,input_schema28489_28502,input_checker28490_28503,output_checker28491_28504){
return (function (_){var self__ = this;
var ___$1 = this;return "header";
});})(validate__5372__auto__,ufv___28500,output_schema28488_28501,input_schema28489_28502,input_checker28490_28503,output_checker28491_28504))
;
hopscotch.core.t28497.prototype.om$core$IRender$ = true;
hopscotch.core.t28497.prototype.om$core$IRender$render$arity$1 = ((function (validate__5372__auto__,ufv___28500,output_schema28488_28501,input_schema28489_28502,input_checker28490_28503,output_checker28491_28504){
return (function (_){var self__ = this;
var ___$1 = this;return om_bootstrap.grid.grid.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"header",new cljs.core.Keyword(null,"fluid?","fluid?",-742121890),true], null),om_bootstrap.grid.row.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.grid.col.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(12)], null),om_tools.dom.element.call(null,React.DOM.h1,("Hopscotch"),cljs.core.PersistentVector.EMPTY))));
});})(validate__5372__auto__,ufv___28500,output_schema28488_28501,input_schema28489_28502,input_checker28490_28503,output_checker28491_28504))
;
hopscotch.core.t28497.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5372__auto__,ufv___28500,output_schema28488_28501,input_schema28489_28502,input_checker28490_28503,output_checker28491_28504){
return (function (_28499){var self__ = this;
var _28499__$1 = this;return self__.meta28498;
});})(validate__5372__auto__,ufv___28500,output_schema28488_28501,input_schema28489_28502,input_checker28490_28503,output_checker28491_28504))
;
hopscotch.core.t28497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5372__auto__,ufv___28500,output_schema28488_28501,input_schema28489_28502,input_checker28490_28503,output_checker28491_28504){
return (function (_28499,meta28498__$1){var self__ = this;
var _28499__$1 = this;return (new hopscotch.core.t28497(self__.G__28493,self__.G__28492,self__.owner,self__.data,self__.input_checker28490,self__.output_schema28488,self__.header,self__.output_checker28491,self__.validate__5372__auto__,self__.input_schema28489,self__.ufv__,meta28498__$1));
});})(validate__5372__auto__,ufv___28500,output_schema28488_28501,input_schema28489_28502,input_checker28490_28503,output_checker28491_28504))
;
hopscotch.core.__GT_t28497 = ((function (validate__5372__auto__,ufv___28500,output_schema28488_28501,input_schema28489_28502,input_checker28490_28503,output_checker28491_28504){
return (function __GT_t28497(G__28493__$1,G__28492__$1,owner__$1,data__$1,input_checker28490__$1,output_schema28488__$1,header__$1,output_checker28491__$1,validate__5372__auto____$1,input_schema28489__$1,ufv____$1,meta28498){return (new hopscotch.core.t28497(G__28493__$1,G__28492__$1,owner__$1,data__$1,input_checker28490__$1,output_schema28488__$1,header__$1,output_checker28491__$1,validate__5372__auto____$1,input_schema28489__$1,ufv____$1,meta28498));
});})(validate__5372__auto__,ufv___28500,output_schema28488_28501,input_schema28489_28502,input_checker28490_28503,output_checker28491_28504))
;
}
return (new hopscotch.core.t28497(G__28493,G__28492,owner,data,input_checker28490_28503,output_schema28488_28501,header,output_checker28491_28504,validate__5372__auto__,input_schema28489_28502,ufv___28500,null));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___28508 = output_checker28491_28504.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___28508))
{var error__5374__auto___28509 = temp__4126__auto___28508;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"header","header",1759972661,null),cljs.core.pr_str.call(null,error__5374__auto___28509)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___28509,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28488_28501,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___28500,output_schema28488_28501,input_schema28489_28502,input_checker28490_28503,output_checker28491_28504))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,hopscotch.core.header),schema.core.make_fn_schema.call(null,output_schema28488_28501,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28489_28502], null)));
hopscotch.core.__GT_header = (function() {
var __GT_header = null;
var __GT_header__1 = (function (cursor__9115__auto__){return om.core.build.call(null,hopscotch.core.header,cursor__9115__auto__);
});
var __GT_header__2 = (function (cursor__9115__auto__,m28487){return om.core.build.call(null,hopscotch.core.header,cursor__9115__auto__,m28487);
});
__GT_header = function(cursor__9115__auto__,m28487){
switch(arguments.length){
case 1:
return __GT_header__1.call(this,cursor__9115__auto__);
case 2:
return __GT_header__2.call(this,cursor__9115__auto__,m28487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_header.cljs$core$IFn$_invoke$arity$1 = __GT_header__1;
__GT_header.cljs$core$IFn$_invoke$arity$2 = __GT_header__2;
return __GT_header;
})()
;
var ufv___28523 = schema.utils.use_fn_validation;var output_schema28511_28524 = schema.core.Any;var input_schema28512_28525 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker28513_28526 = schema.core.checker.call(null,input_schema28512_28525);var output_checker28514_28527 = schema.core.checker.call(null,output_schema28511_28524);/**
* Inputs: [data owner]
*/
hopscotch.core.body = ((function (ufv___28523,output_schema28511_28524,input_schema28512_28525,input_checker28513_28526,output_checker28514_28527){
return (function body(G__28515,G__28516){var validate__5372__auto__ = ufv___28523.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___28528 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28515,G__28516], null);var temp__4126__auto___28529 = input_checker28513_28526.call(null,args__5373__auto___28528);if(cljs.core.truth_(temp__4126__auto___28529))
{var error__5374__auto___28530 = temp__4126__auto___28529;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"body","body",-408674142,null),cljs.core.pr_str.call(null,error__5374__auto___28530)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___28530,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___28528,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28512_28525,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var data = G__28515;var owner = G__28516;while(true){
if(typeof hopscotch.core.t28520 !== 'undefined')
{} else
{
/**
* @constructor
*/
hopscotch.core.t28520 = (function (body,owner,data,input_checker28513,G__28515,G__28516,input_schema28512,output_checker28514,validate__5372__auto__,output_schema28511,ufv__,meta28521){
this.body = body;
this.owner = owner;
this.data = data;
this.input_checker28513 = input_checker28513;
this.G__28515 = G__28515;
this.G__28516 = G__28516;
this.input_schema28512 = input_schema28512;
this.output_checker28514 = output_checker28514;
this.validate__5372__auto__ = validate__5372__auto__;
this.output_schema28511 = output_schema28511;
this.ufv__ = ufv__;
this.meta28521 = meta28521;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hopscotch.core.t28520.cljs$lang$type = true;
hopscotch.core.t28520.cljs$lang$ctorStr = "hopscotch.core/t28520";
hopscotch.core.t28520.cljs$lang$ctorPrWriter = ((function (validate__5372__auto__,ufv___28523,output_schema28511_28524,input_schema28512_28525,input_checker28513_28526,output_checker28514_28527){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"hopscotch.core/t28520");
});})(validate__5372__auto__,ufv___28523,output_schema28511_28524,input_schema28512_28525,input_checker28513_28526,output_checker28514_28527))
;
hopscotch.core.t28520.prototype.om$core$IDisplayName$ = true;
hopscotch.core.t28520.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5372__auto__,ufv___28523,output_schema28511_28524,input_schema28512_28525,input_checker28513_28526,output_checker28514_28527){
return (function (_){var self__ = this;
var ___$1 = this;return "body";
});})(validate__5372__auto__,ufv___28523,output_schema28511_28524,input_schema28512_28525,input_checker28513_28526,output_checker28514_28527))
;
hopscotch.core.t28520.prototype.om$core$IRender$ = true;
hopscotch.core.t28520.prototype.om$core$IRender$render$arity$1 = ((function (validate__5372__auto__,ufv___28523,output_schema28511_28524,input_schema28512_28525,input_checker28513_28526,output_checker28514_28527){
return (function (_){var self__ = this;
var ___$1 = this;return om_bootstrap.grid.grid.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"body light",new cljs.core.Keyword(null,"fluid?","fluid?",-742121890),true], null),om_bootstrap.grid.row.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.grid.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(8),new cljs.core.Keyword(null,"xs-offset","xs-offset",-1940326689),(2)], null),hopscotch.core.__GT_search.call(null,cljs.core.PersistentArrayMap.EMPTY))));
});})(validate__5372__auto__,ufv___28523,output_schema28511_28524,input_schema28512_28525,input_checker28513_28526,output_checker28514_28527))
;
hopscotch.core.t28520.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5372__auto__,ufv___28523,output_schema28511_28524,input_schema28512_28525,input_checker28513_28526,output_checker28514_28527){
return (function (_28522){var self__ = this;
var _28522__$1 = this;return self__.meta28521;
});})(validate__5372__auto__,ufv___28523,output_schema28511_28524,input_schema28512_28525,input_checker28513_28526,output_checker28514_28527))
;
hopscotch.core.t28520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5372__auto__,ufv___28523,output_schema28511_28524,input_schema28512_28525,input_checker28513_28526,output_checker28514_28527){
return (function (_28522,meta28521__$1){var self__ = this;
var _28522__$1 = this;return (new hopscotch.core.t28520(self__.body,self__.owner,self__.data,self__.input_checker28513,self__.G__28515,self__.G__28516,self__.input_schema28512,self__.output_checker28514,self__.validate__5372__auto__,self__.output_schema28511,self__.ufv__,meta28521__$1));
});})(validate__5372__auto__,ufv___28523,output_schema28511_28524,input_schema28512_28525,input_checker28513_28526,output_checker28514_28527))
;
hopscotch.core.__GT_t28520 = ((function (validate__5372__auto__,ufv___28523,output_schema28511_28524,input_schema28512_28525,input_checker28513_28526,output_checker28514_28527){
return (function __GT_t28520(body__$1,owner__$1,data__$1,input_checker28513__$1,G__28515__$1,G__28516__$1,input_schema28512__$1,output_checker28514__$1,validate__5372__auto____$1,output_schema28511__$1,ufv____$1,meta28521){return (new hopscotch.core.t28520(body__$1,owner__$1,data__$1,input_checker28513__$1,G__28515__$1,G__28516__$1,input_schema28512__$1,output_checker28514__$1,validate__5372__auto____$1,output_schema28511__$1,ufv____$1,meta28521));
});})(validate__5372__auto__,ufv___28523,output_schema28511_28524,input_schema28512_28525,input_checker28513_28526,output_checker28514_28527))
;
}
return (new hopscotch.core.t28520(body,owner,data,input_checker28513_28526,G__28515,G__28516,input_schema28512_28525,output_checker28514_28527,validate__5372__auto__,output_schema28511_28524,ufv___28523,null));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___28531 = output_checker28514_28527.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___28531))
{var error__5374__auto___28532 = temp__4126__auto___28531;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"body","body",-408674142,null),cljs.core.pr_str.call(null,error__5374__auto___28532)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___28532,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28511_28524,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___28523,output_schema28511_28524,input_schema28512_28525,input_checker28513_28526,output_checker28514_28527))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,hopscotch.core.body),schema.core.make_fn_schema.call(null,output_schema28511_28524,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28512_28525], null)));
hopscotch.core.__GT_body = (function() {
var __GT_body = null;
var __GT_body__1 = (function (cursor__9115__auto__){return om.core.build.call(null,hopscotch.core.body,cursor__9115__auto__);
});
var __GT_body__2 = (function (cursor__9115__auto__,m28510){return om.core.build.call(null,hopscotch.core.body,cursor__9115__auto__,m28510);
});
__GT_body = function(cursor__9115__auto__,m28510){
switch(arguments.length){
case 1:
return __GT_body__1.call(this,cursor__9115__auto__);
case 2:
return __GT_body__2.call(this,cursor__9115__auto__,m28510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_body.cljs$core$IFn$_invoke$arity$1 = __GT_body__1;
__GT_body.cljs$core$IFn$_invoke$arity$2 = __GT_body__2;
return __GT_body;
})()
;
var ufv___28546 = schema.utils.use_fn_validation;var output_schema28534_28547 = schema.core.Any;var input_schema28535_28548 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker28536_28549 = schema.core.checker.call(null,input_schema28535_28548);var output_checker28537_28550 = schema.core.checker.call(null,output_schema28534_28547);/**
* Inputs: [data owner]
*/
hopscotch.core.footer = ((function (ufv___28546,output_schema28534_28547,input_schema28535_28548,input_checker28536_28549,output_checker28537_28550){
return (function footer(G__28538,G__28539){var validate__5372__auto__ = ufv___28546.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___28551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28538,G__28539], null);var temp__4126__auto___28552 = input_checker28536_28549.call(null,args__5373__auto___28551);if(cljs.core.truth_(temp__4126__auto___28552))
{var error__5374__auto___28553 = temp__4126__auto___28552;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"footer","footer",-1047990379,null),cljs.core.pr_str.call(null,error__5374__auto___28553)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___28553,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___28551,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28535_28548,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var data = G__28538;var owner = G__28539;while(true){
if(typeof hopscotch.core.t28543 !== 'undefined')
{} else
{
/**
* @constructor
*/
hopscotch.core.t28543 = (function (owner,data,input_schema28535,G__28539,output_checker28537,G__28538,footer,output_schema28534,validate__5372__auto__,ufv__,input_checker28536,meta28544){
this.owner = owner;
this.data = data;
this.input_schema28535 = input_schema28535;
this.G__28539 = G__28539;
this.output_checker28537 = output_checker28537;
this.G__28538 = G__28538;
this.footer = footer;
this.output_schema28534 = output_schema28534;
this.validate__5372__auto__ = validate__5372__auto__;
this.ufv__ = ufv__;
this.input_checker28536 = input_checker28536;
this.meta28544 = meta28544;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hopscotch.core.t28543.cljs$lang$type = true;
hopscotch.core.t28543.cljs$lang$ctorStr = "hopscotch.core/t28543";
hopscotch.core.t28543.cljs$lang$ctorPrWriter = ((function (validate__5372__auto__,ufv___28546,output_schema28534_28547,input_schema28535_28548,input_checker28536_28549,output_checker28537_28550){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"hopscotch.core/t28543");
});})(validate__5372__auto__,ufv___28546,output_schema28534_28547,input_schema28535_28548,input_checker28536_28549,output_checker28537_28550))
;
hopscotch.core.t28543.prototype.om$core$IDisplayName$ = true;
hopscotch.core.t28543.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5372__auto__,ufv___28546,output_schema28534_28547,input_schema28535_28548,input_checker28536_28549,output_checker28537_28550){
return (function (_){var self__ = this;
var ___$1 = this;return "footer";
});})(validate__5372__auto__,ufv___28546,output_schema28534_28547,input_schema28535_28548,input_checker28536_28549,output_checker28537_28550))
;
hopscotch.core.t28543.prototype.om$core$IRender$ = true;
hopscotch.core.t28543.prototype.om$core$IRender$render$arity$1 = ((function (validate__5372__auto__,ufv___28546,output_schema28534_28547,input_schema28535_28548,input_checker28536_28549,output_checker28537_28550){
return (function (_){var self__ = this;
var ___$1 = this;return om_bootstrap.grid.grid.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"footer",new cljs.core.Keyword(null,"fluid?","fluid?",-742121890),true], null),om_bootstrap.grid.row.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.grid.col.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(12)], null),om_bootstrap.nav.nav.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"pills",new cljs.core.Keyword(null,"active-key","active-key",-2039404654),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"flat",new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (___$1,validate__5372__auto__,ufv___28546,output_schema28534_28547,input_schema28535_28548,input_checker28536_28549,output_checker28537_28550){
return (function (k,___$2){return console(("Selected"));
});})(___$1,validate__5372__auto__,ufv___28546,output_schema28534_28547,input_schema28535_28548,input_checker28536_28549,output_checker28537_28550))
], null),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(1),new cljs.core.Keyword(null,"href","href",-793805698),"/search"], null),"Search"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(2),new cljs.core.Keyword(null,"href","href",-793805698),"/enjoyed"], null),"Enoyed"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(3),new cljs.core.Keyword(null,"href","href",-793805698),"/cellar"], null),"Cellar"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(4),new cljs.core.Keyword(null,"href","href",-793805698),"/account"], null),"Account")))));
});})(validate__5372__auto__,ufv___28546,output_schema28534_28547,input_schema28535_28548,input_checker28536_28549,output_checker28537_28550))
;
hopscotch.core.t28543.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5372__auto__,ufv___28546,output_schema28534_28547,input_schema28535_28548,input_checker28536_28549,output_checker28537_28550){
return (function (_28545){var self__ = this;
var _28545__$1 = this;return self__.meta28544;
});})(validate__5372__auto__,ufv___28546,output_schema28534_28547,input_schema28535_28548,input_checker28536_28549,output_checker28537_28550))
;
hopscotch.core.t28543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5372__auto__,ufv___28546,output_schema28534_28547,input_schema28535_28548,input_checker28536_28549,output_checker28537_28550){
return (function (_28545,meta28544__$1){var self__ = this;
var _28545__$1 = this;return (new hopscotch.core.t28543(self__.owner,self__.data,self__.input_schema28535,self__.G__28539,self__.output_checker28537,self__.G__28538,self__.footer,self__.output_schema28534,self__.validate__5372__auto__,self__.ufv__,self__.input_checker28536,meta28544__$1));
});})(validate__5372__auto__,ufv___28546,output_schema28534_28547,input_schema28535_28548,input_checker28536_28549,output_checker28537_28550))
;
hopscotch.core.__GT_t28543 = ((function (validate__5372__auto__,ufv___28546,output_schema28534_28547,input_schema28535_28548,input_checker28536_28549,output_checker28537_28550){
return (function __GT_t28543(owner__$1,data__$1,input_schema28535__$1,G__28539__$1,output_checker28537__$1,G__28538__$1,footer__$1,output_schema28534__$1,validate__5372__auto____$1,ufv____$1,input_checker28536__$1,meta28544){return (new hopscotch.core.t28543(owner__$1,data__$1,input_schema28535__$1,G__28539__$1,output_checker28537__$1,G__28538__$1,footer__$1,output_schema28534__$1,validate__5372__auto____$1,ufv____$1,input_checker28536__$1,meta28544));
});})(validate__5372__auto__,ufv___28546,output_schema28534_28547,input_schema28535_28548,input_checker28536_28549,output_checker28537_28550))
;
}
return (new hopscotch.core.t28543(owner,data,input_schema28535_28548,G__28539,output_checker28537_28550,G__28538,footer,output_schema28534_28547,validate__5372__auto__,ufv___28546,input_checker28536_28549,null));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___28554 = output_checker28537_28550.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___28554))
{var error__5374__auto___28555 = temp__4126__auto___28554;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"footer","footer",-1047990379,null),cljs.core.pr_str.call(null,error__5374__auto___28555)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___28555,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28534_28547,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___28546,output_schema28534_28547,input_schema28535_28548,input_checker28536_28549,output_checker28537_28550))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,hopscotch.core.footer),schema.core.make_fn_schema.call(null,output_schema28534_28547,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28535_28548], null)));
hopscotch.core.__GT_footer = (function() {
var __GT_footer = null;
var __GT_footer__1 = (function (cursor__9115__auto__){return om.core.build.call(null,hopscotch.core.footer,cursor__9115__auto__);
});
var __GT_footer__2 = (function (cursor__9115__auto__,m28533){return om.core.build.call(null,hopscotch.core.footer,cursor__9115__auto__,m28533);
});
__GT_footer = function(cursor__9115__auto__,m28533){
switch(arguments.length){
case 1:
return __GT_footer__1.call(this,cursor__9115__auto__);
case 2:
return __GT_footer__2.call(this,cursor__9115__auto__,m28533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_footer.cljs$core$IFn$_invoke$arity$1 = __GT_footer__1;
__GT_footer.cljs$core$IFn$_invoke$arity$2 = __GT_footer__2;
return __GT_footer;
})()
;
var ufv___28569 = schema.utils.use_fn_validation;var output_schema28557_28570 = schema.core.Any;var input_schema28558_28571 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker28559_28572 = schema.core.checker.call(null,input_schema28558_28571);var output_checker28560_28573 = schema.core.checker.call(null,output_schema28557_28570);/**
* Inputs: [data owner]
*/
hopscotch.core.app = ((function (ufv___28569,output_schema28557_28570,input_schema28558_28571,input_checker28559_28572,output_checker28560_28573){
return (function app(G__28561,G__28562){var validate__5372__auto__ = ufv___28569.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___28574 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28561,G__28562], null);var temp__4126__auto___28575 = input_checker28559_28572.call(null,args__5373__auto___28574);if(cljs.core.truth_(temp__4126__auto___28575))
{var error__5374__auto___28576 = temp__4126__auto___28575;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__5374__auto___28576)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___28576,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___28574,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28558_28571,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var data = G__28561;var owner = G__28562;while(true){
if(typeof hopscotch.core.t28566 !== 'undefined')
{} else
{
/**
* @constructor
*/
hopscotch.core.t28566 = (function (output_checker28560,owner,data,output_schema28557,G__28562,G__28561,input_schema28558,validate__5372__auto__,app,ufv__,input_checker28559,meta28567){
this.output_checker28560 = output_checker28560;
this.owner = owner;
this.data = data;
this.output_schema28557 = output_schema28557;
this.G__28562 = G__28562;
this.G__28561 = G__28561;
this.input_schema28558 = input_schema28558;
this.validate__5372__auto__ = validate__5372__auto__;
this.app = app;
this.ufv__ = ufv__;
this.input_checker28559 = input_checker28559;
this.meta28567 = meta28567;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hopscotch.core.t28566.cljs$lang$type = true;
hopscotch.core.t28566.cljs$lang$ctorStr = "hopscotch.core/t28566";
hopscotch.core.t28566.cljs$lang$ctorPrWriter = ((function (validate__5372__auto__,ufv___28569,output_schema28557_28570,input_schema28558_28571,input_checker28559_28572,output_checker28560_28573){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"hopscotch.core/t28566");
});})(validate__5372__auto__,ufv___28569,output_schema28557_28570,input_schema28558_28571,input_checker28559_28572,output_checker28560_28573))
;
hopscotch.core.t28566.prototype.om$core$IDisplayName$ = true;
hopscotch.core.t28566.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5372__auto__,ufv___28569,output_schema28557_28570,input_schema28558_28571,input_checker28559_28572,output_checker28560_28573){
return (function (_){var self__ = this;
var ___$1 = this;return "app";
});})(validate__5372__auto__,ufv___28569,output_schema28557_28570,input_schema28558_28571,input_checker28559_28572,output_checker28560_28573))
;
hopscotch.core.t28566.prototype.om$core$IRender$ = true;
hopscotch.core.t28566.prototype.om$core$IRender$render$arity$1 = ((function (validate__5372__auto__,ufv___28569,output_schema28557_28570,input_schema28558_28571,input_checker28559_28572,output_checker28560_28573){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"className": "dark", "id": "app"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[hopscotch.core.__GT_header.call(null,cljs.core.PersistentArrayMap.EMPTY),hopscotch.core.__GT_body.call(null,cljs.core.PersistentArrayMap.EMPTY),hopscotch.core.__GT_footer.call(null,cljs.core.PersistentArrayMap.EMPTY)],null))));
});})(validate__5372__auto__,ufv___28569,output_schema28557_28570,input_schema28558_28571,input_checker28559_28572,output_checker28560_28573))
;
hopscotch.core.t28566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5372__auto__,ufv___28569,output_schema28557_28570,input_schema28558_28571,input_checker28559_28572,output_checker28560_28573){
return (function (_28568){var self__ = this;
var _28568__$1 = this;return self__.meta28567;
});})(validate__5372__auto__,ufv___28569,output_schema28557_28570,input_schema28558_28571,input_checker28559_28572,output_checker28560_28573))
;
hopscotch.core.t28566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5372__auto__,ufv___28569,output_schema28557_28570,input_schema28558_28571,input_checker28559_28572,output_checker28560_28573){
return (function (_28568,meta28567__$1){var self__ = this;
var _28568__$1 = this;return (new hopscotch.core.t28566(self__.output_checker28560,self__.owner,self__.data,self__.output_schema28557,self__.G__28562,self__.G__28561,self__.input_schema28558,self__.validate__5372__auto__,self__.app,self__.ufv__,self__.input_checker28559,meta28567__$1));
});})(validate__5372__auto__,ufv___28569,output_schema28557_28570,input_schema28558_28571,input_checker28559_28572,output_checker28560_28573))
;
hopscotch.core.__GT_t28566 = ((function (validate__5372__auto__,ufv___28569,output_schema28557_28570,input_schema28558_28571,input_checker28559_28572,output_checker28560_28573){
return (function __GT_t28566(output_checker28560__$1,owner__$1,data__$1,output_schema28557__$1,G__28562__$1,G__28561__$1,input_schema28558__$1,validate__5372__auto____$1,app__$1,ufv____$1,input_checker28559__$1,meta28567){return (new hopscotch.core.t28566(output_checker28560__$1,owner__$1,data__$1,output_schema28557__$1,G__28562__$1,G__28561__$1,input_schema28558__$1,validate__5372__auto____$1,app__$1,ufv____$1,input_checker28559__$1,meta28567));
});})(validate__5372__auto__,ufv___28569,output_schema28557_28570,input_schema28558_28571,input_checker28559_28572,output_checker28560_28573))
;
}
return (new hopscotch.core.t28566(output_checker28560_28573,owner,data,output_schema28557_28570,G__28562,G__28561,input_schema28558_28571,validate__5372__auto__,app,ufv___28569,input_checker28559_28572,null));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___28577 = output_checker28560_28573.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___28577))
{var error__5374__auto___28578 = temp__4126__auto___28577;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__5374__auto___28578)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___28578,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28557_28570,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___28569,output_schema28557_28570,input_schema28558_28571,input_checker28559_28572,output_checker28560_28573))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,hopscotch.core.app),schema.core.make_fn_schema.call(null,output_schema28557_28570,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28558_28571], null)));
hopscotch.core.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__9115__auto__){return om.core.build.call(null,hopscotch.core.app,cursor__9115__auto__);
});
var __GT_app__2 = (function (cursor__9115__auto__,m28556){return om.core.build.call(null,hopscotch.core.app,cursor__9115__auto__,m28556);
});
__GT_app = function(cursor__9115__auto__,m28556){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__9115__auto__);
case 2:
return __GT_app__2.call(this,cursor__9115__auto__,m28556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app.cljs$core$IFn$_invoke$arity$1 = __GT_app__1;
__GT_app.cljs$core$IFn$_invoke$arity$2 = __GT_app__2;
return __GT_app;
})()
;
om.core.root.call(null,hopscotch.core.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("hopscotch")], null));

//# sourceMappingURL=core.js.map