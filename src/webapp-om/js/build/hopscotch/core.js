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
var ufv___28707 = schema.utils.use_fn_validation;var output_schema28695_28708 = schema.core.Any;var input_schema28696_28709 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker28697_28710 = schema.core.checker.call(null,input_schema28696_28709);var output_checker28698_28711 = schema.core.checker.call(null,output_schema28695_28708);/**
* Inputs: [data owner]
*/
hopscotch.core.search = ((function (ufv___28707,output_schema28695_28708,input_schema28696_28709,input_checker28697_28710,output_checker28698_28711){
return (function search(G__28699,G__28700){var validate__5372__auto__ = ufv___28707.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___28712 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28699,G__28700], null);var temp__4126__auto___28713 = input_checker28697_28710.call(null,args__5373__auto___28712);if(cljs.core.truth_(temp__4126__auto___28713))
{var error__5374__auto___28714 = temp__4126__auto___28713;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"search","search",-1089495947,null),cljs.core.pr_str.call(null,error__5374__auto___28714)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___28714,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___28712,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28696_28709,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var data = G__28699;var owner = G__28700;while(true){
if(typeof hopscotch.core.t28704 !== 'undefined')
{} else
{
/**
* @constructor
*/
hopscotch.core.t28704 = (function (output_checker28698,owner,data,input_checker28697,input_schema28696,G__28700,search,output_schema28695,G__28699,validate__5372__auto__,ufv__,meta28705){
this.output_checker28698 = output_checker28698;
this.owner = owner;
this.data = data;
this.input_checker28697 = input_checker28697;
this.input_schema28696 = input_schema28696;
this.G__28700 = G__28700;
this.search = search;
this.output_schema28695 = output_schema28695;
this.G__28699 = G__28699;
this.validate__5372__auto__ = validate__5372__auto__;
this.ufv__ = ufv__;
this.meta28705 = meta28705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hopscotch.core.t28704.cljs$lang$type = true;
hopscotch.core.t28704.cljs$lang$ctorStr = "hopscotch.core/t28704";
hopscotch.core.t28704.cljs$lang$ctorPrWriter = ((function (validate__5372__auto__,ufv___28707,output_schema28695_28708,input_schema28696_28709,input_checker28697_28710,output_checker28698_28711){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"hopscotch.core/t28704");
});})(validate__5372__auto__,ufv___28707,output_schema28695_28708,input_schema28696_28709,input_checker28697_28710,output_checker28698_28711))
;
hopscotch.core.t28704.prototype.om$core$IDisplayName$ = true;
hopscotch.core.t28704.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5372__auto__,ufv___28707,output_schema28695_28708,input_schema28696_28709,input_checker28697_28710,output_checker28698_28711){
return (function (_){var self__ = this;
var ___$1 = this;return "search";
});})(validate__5372__auto__,ufv___28707,output_schema28695_28708,input_schema28696_28709,input_checker28697_28710,output_checker28698_28711))
;
hopscotch.core.t28704.prototype.om$core$IRender$ = true;
hopscotch.core.t28704.prototype.om$core$IRender$render$arity$1 = ((function (validate__5372__auto__,ufv___28707,output_schema28695_28708,input_schema28696_28709,input_checker28697_28710,output_checker28698_28711){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"className": "search"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.h3,{"className": "text-center"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[("\"Too much of anything is bad, but too much of good whiskey is barely enough.\"")],null)))),cljs.core.apply.call(null,React.DOM.p,{"className": "text-right byline"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[("- Mark Twain")],null)))),om_tools.dom.element.call(null,React.DOM.form,om_bootstrap.input.input.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Find a whiskey"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.p,om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary",new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),"large",new cljs.core.Keyword(null,"class","class",-2030961996),"pull-right"], null),"Find"),cljs.core.PersistentVector.EMPTY)],null)))],null))));
});})(validate__5372__auto__,ufv___28707,output_schema28695_28708,input_schema28696_28709,input_checker28697_28710,output_checker28698_28711))
;
hopscotch.core.t28704.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5372__auto__,ufv___28707,output_schema28695_28708,input_schema28696_28709,input_checker28697_28710,output_checker28698_28711){
return (function (_28706){var self__ = this;
var _28706__$1 = this;return self__.meta28705;
});})(validate__5372__auto__,ufv___28707,output_schema28695_28708,input_schema28696_28709,input_checker28697_28710,output_checker28698_28711))
;
hopscotch.core.t28704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5372__auto__,ufv___28707,output_schema28695_28708,input_schema28696_28709,input_checker28697_28710,output_checker28698_28711){
return (function (_28706,meta28705__$1){var self__ = this;
var _28706__$1 = this;return (new hopscotch.core.t28704(self__.output_checker28698,self__.owner,self__.data,self__.input_checker28697,self__.input_schema28696,self__.G__28700,self__.search,self__.output_schema28695,self__.G__28699,self__.validate__5372__auto__,self__.ufv__,meta28705__$1));
});})(validate__5372__auto__,ufv___28707,output_schema28695_28708,input_schema28696_28709,input_checker28697_28710,output_checker28698_28711))
;
hopscotch.core.__GT_t28704 = ((function (validate__5372__auto__,ufv___28707,output_schema28695_28708,input_schema28696_28709,input_checker28697_28710,output_checker28698_28711){
return (function __GT_t28704(output_checker28698__$1,owner__$1,data__$1,input_checker28697__$1,input_schema28696__$1,G__28700__$1,search__$1,output_schema28695__$1,G__28699__$1,validate__5372__auto____$1,ufv____$1,meta28705){return (new hopscotch.core.t28704(output_checker28698__$1,owner__$1,data__$1,input_checker28697__$1,input_schema28696__$1,G__28700__$1,search__$1,output_schema28695__$1,G__28699__$1,validate__5372__auto____$1,ufv____$1,meta28705));
});})(validate__5372__auto__,ufv___28707,output_schema28695_28708,input_schema28696_28709,input_checker28697_28710,output_checker28698_28711))
;
}
return (new hopscotch.core.t28704(output_checker28698_28711,owner,data,input_checker28697_28710,input_schema28696_28709,G__28700,search,output_schema28695_28708,G__28699,validate__5372__auto__,ufv___28707,null));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___28715 = output_checker28698_28711.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___28715))
{var error__5374__auto___28716 = temp__4126__auto___28715;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"search","search",-1089495947,null),cljs.core.pr_str.call(null,error__5374__auto___28716)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___28716,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28695_28708,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___28707,output_schema28695_28708,input_schema28696_28709,input_checker28697_28710,output_checker28698_28711))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,hopscotch.core.search),schema.core.make_fn_schema.call(null,output_schema28695_28708,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28696_28709], null)));
hopscotch.core.__GT_search = (function() {
var __GT_search = null;
var __GT_search__1 = (function (cursor__9115__auto__){return om.core.build.call(null,hopscotch.core.search,cursor__9115__auto__);
});
var __GT_search__2 = (function (cursor__9115__auto__,m28694){return om.core.build.call(null,hopscotch.core.search,cursor__9115__auto__,m28694);
});
__GT_search = function(cursor__9115__auto__,m28694){
switch(arguments.length){
case 1:
return __GT_search__1.call(this,cursor__9115__auto__);
case 2:
return __GT_search__2.call(this,cursor__9115__auto__,m28694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_search.cljs$core$IFn$_invoke$arity$1 = __GT_search__1;
__GT_search.cljs$core$IFn$_invoke$arity$2 = __GT_search__2;
return __GT_search;
})()
;
var ufv___28730 = schema.utils.use_fn_validation;var output_schema28718_28731 = schema.core.Any;var input_schema28719_28732 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker28720_28733 = schema.core.checker.call(null,input_schema28719_28732);var output_checker28721_28734 = schema.core.checker.call(null,output_schema28718_28731);/**
* Inputs: [data owner]
*/
hopscotch.core.header = ((function (ufv___28730,output_schema28718_28731,input_schema28719_28732,input_checker28720_28733,output_checker28721_28734){
return (function header(G__28722,G__28723){var validate__5372__auto__ = ufv___28730.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___28735 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28722,G__28723], null);var temp__4126__auto___28736 = input_checker28720_28733.call(null,args__5373__auto___28735);if(cljs.core.truth_(temp__4126__auto___28736))
{var error__5374__auto___28737 = temp__4126__auto___28736;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"header","header",1759972661,null),cljs.core.pr_str.call(null,error__5374__auto___28737)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___28737,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___28735,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28719_28732,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var data = G__28722;var owner = G__28723;while(true){
if(typeof hopscotch.core.t28727 !== 'undefined')
{} else
{
/**
* @constructor
*/
hopscotch.core.t28727 = (function (owner,data,G__28723,output_checker28721,input_checker28720,header,G__28722,output_schema28718,validate__5372__auto__,input_schema28719,ufv__,meta28728){
this.owner = owner;
this.data = data;
this.G__28723 = G__28723;
this.output_checker28721 = output_checker28721;
this.input_checker28720 = input_checker28720;
this.header = header;
this.G__28722 = G__28722;
this.output_schema28718 = output_schema28718;
this.validate__5372__auto__ = validate__5372__auto__;
this.input_schema28719 = input_schema28719;
this.ufv__ = ufv__;
this.meta28728 = meta28728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hopscotch.core.t28727.cljs$lang$type = true;
hopscotch.core.t28727.cljs$lang$ctorStr = "hopscotch.core/t28727";
hopscotch.core.t28727.cljs$lang$ctorPrWriter = ((function (validate__5372__auto__,ufv___28730,output_schema28718_28731,input_schema28719_28732,input_checker28720_28733,output_checker28721_28734){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"hopscotch.core/t28727");
});})(validate__5372__auto__,ufv___28730,output_schema28718_28731,input_schema28719_28732,input_checker28720_28733,output_checker28721_28734))
;
hopscotch.core.t28727.prototype.om$core$IDisplayName$ = true;
hopscotch.core.t28727.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5372__auto__,ufv___28730,output_schema28718_28731,input_schema28719_28732,input_checker28720_28733,output_checker28721_28734){
return (function (_){var self__ = this;
var ___$1 = this;return "header";
});})(validate__5372__auto__,ufv___28730,output_schema28718_28731,input_schema28719_28732,input_checker28720_28733,output_checker28721_28734))
;
hopscotch.core.t28727.prototype.om$core$IRender$ = true;
hopscotch.core.t28727.prototype.om$core$IRender$render$arity$1 = ((function (validate__5372__auto__,ufv___28730,output_schema28718_28731,input_schema28719_28732,input_checker28720_28733,output_checker28721_28734){
return (function (_){var self__ = this;
var ___$1 = this;return om_bootstrap.grid.grid.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"header",new cljs.core.Keyword(null,"fluid?","fluid?",-742121890),true], null),om_bootstrap.grid.row.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.grid.col.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(12)], null),om_tools.dom.element.call(null,React.DOM.h1,("Hopscotch"),cljs.core.PersistentVector.EMPTY))));
});})(validate__5372__auto__,ufv___28730,output_schema28718_28731,input_schema28719_28732,input_checker28720_28733,output_checker28721_28734))
;
hopscotch.core.t28727.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5372__auto__,ufv___28730,output_schema28718_28731,input_schema28719_28732,input_checker28720_28733,output_checker28721_28734){
return (function (_28729){var self__ = this;
var _28729__$1 = this;return self__.meta28728;
});})(validate__5372__auto__,ufv___28730,output_schema28718_28731,input_schema28719_28732,input_checker28720_28733,output_checker28721_28734))
;
hopscotch.core.t28727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5372__auto__,ufv___28730,output_schema28718_28731,input_schema28719_28732,input_checker28720_28733,output_checker28721_28734){
return (function (_28729,meta28728__$1){var self__ = this;
var _28729__$1 = this;return (new hopscotch.core.t28727(self__.owner,self__.data,self__.G__28723,self__.output_checker28721,self__.input_checker28720,self__.header,self__.G__28722,self__.output_schema28718,self__.validate__5372__auto__,self__.input_schema28719,self__.ufv__,meta28728__$1));
});})(validate__5372__auto__,ufv___28730,output_schema28718_28731,input_schema28719_28732,input_checker28720_28733,output_checker28721_28734))
;
hopscotch.core.__GT_t28727 = ((function (validate__5372__auto__,ufv___28730,output_schema28718_28731,input_schema28719_28732,input_checker28720_28733,output_checker28721_28734){
return (function __GT_t28727(owner__$1,data__$1,G__28723__$1,output_checker28721__$1,input_checker28720__$1,header__$1,G__28722__$1,output_schema28718__$1,validate__5372__auto____$1,input_schema28719__$1,ufv____$1,meta28728){return (new hopscotch.core.t28727(owner__$1,data__$1,G__28723__$1,output_checker28721__$1,input_checker28720__$1,header__$1,G__28722__$1,output_schema28718__$1,validate__5372__auto____$1,input_schema28719__$1,ufv____$1,meta28728));
});})(validate__5372__auto__,ufv___28730,output_schema28718_28731,input_schema28719_28732,input_checker28720_28733,output_checker28721_28734))
;
}
return (new hopscotch.core.t28727(owner,data,G__28723,output_checker28721_28734,input_checker28720_28733,header,G__28722,output_schema28718_28731,validate__5372__auto__,input_schema28719_28732,ufv___28730,null));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___28738 = output_checker28721_28734.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___28738))
{var error__5374__auto___28739 = temp__4126__auto___28738;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"header","header",1759972661,null),cljs.core.pr_str.call(null,error__5374__auto___28739)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___28739,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28718_28731,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___28730,output_schema28718_28731,input_schema28719_28732,input_checker28720_28733,output_checker28721_28734))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,hopscotch.core.header),schema.core.make_fn_schema.call(null,output_schema28718_28731,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28719_28732], null)));
hopscotch.core.__GT_header = (function() {
var __GT_header = null;
var __GT_header__1 = (function (cursor__9115__auto__){return om.core.build.call(null,hopscotch.core.header,cursor__9115__auto__);
});
var __GT_header__2 = (function (cursor__9115__auto__,m28717){return om.core.build.call(null,hopscotch.core.header,cursor__9115__auto__,m28717);
});
__GT_header = function(cursor__9115__auto__,m28717){
switch(arguments.length){
case 1:
return __GT_header__1.call(this,cursor__9115__auto__);
case 2:
return __GT_header__2.call(this,cursor__9115__auto__,m28717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_header.cljs$core$IFn$_invoke$arity$1 = __GT_header__1;
__GT_header.cljs$core$IFn$_invoke$arity$2 = __GT_header__2;
return __GT_header;
})()
;
var ufv___28753 = schema.utils.use_fn_validation;var output_schema28741_28754 = schema.core.Any;var input_schema28742_28755 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker28743_28756 = schema.core.checker.call(null,input_schema28742_28755);var output_checker28744_28757 = schema.core.checker.call(null,output_schema28741_28754);/**
* Inputs: [data owner]
*/
hopscotch.core.body = ((function (ufv___28753,output_schema28741_28754,input_schema28742_28755,input_checker28743_28756,output_checker28744_28757){
return (function body(G__28745,G__28746){var validate__5372__auto__ = ufv___28753.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___28758 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28745,G__28746], null);var temp__4126__auto___28759 = input_checker28743_28756.call(null,args__5373__auto___28758);if(cljs.core.truth_(temp__4126__auto___28759))
{var error__5374__auto___28760 = temp__4126__auto___28759;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"body","body",-408674142,null),cljs.core.pr_str.call(null,error__5374__auto___28760)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___28760,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___28758,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28742_28755,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var data = G__28745;var owner = G__28746;while(true){
if(typeof hopscotch.core.t28750 !== 'undefined')
{} else
{
/**
* @constructor
*/
hopscotch.core.t28750 = (function (input_checker28743,body,owner,data,output_checker28744,G__28746,G__28745,validate__5372__auto__,ufv__,output_schema28741,input_schema28742,meta28751){
this.input_checker28743 = input_checker28743;
this.body = body;
this.owner = owner;
this.data = data;
this.output_checker28744 = output_checker28744;
this.G__28746 = G__28746;
this.G__28745 = G__28745;
this.validate__5372__auto__ = validate__5372__auto__;
this.ufv__ = ufv__;
this.output_schema28741 = output_schema28741;
this.input_schema28742 = input_schema28742;
this.meta28751 = meta28751;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hopscotch.core.t28750.cljs$lang$type = true;
hopscotch.core.t28750.cljs$lang$ctorStr = "hopscotch.core/t28750";
hopscotch.core.t28750.cljs$lang$ctorPrWriter = ((function (validate__5372__auto__,ufv___28753,output_schema28741_28754,input_schema28742_28755,input_checker28743_28756,output_checker28744_28757){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"hopscotch.core/t28750");
});})(validate__5372__auto__,ufv___28753,output_schema28741_28754,input_schema28742_28755,input_checker28743_28756,output_checker28744_28757))
;
hopscotch.core.t28750.prototype.om$core$IDisplayName$ = true;
hopscotch.core.t28750.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5372__auto__,ufv___28753,output_schema28741_28754,input_schema28742_28755,input_checker28743_28756,output_checker28744_28757){
return (function (_){var self__ = this;
var ___$1 = this;return "body";
});})(validate__5372__auto__,ufv___28753,output_schema28741_28754,input_schema28742_28755,input_checker28743_28756,output_checker28744_28757))
;
hopscotch.core.t28750.prototype.om$core$IRender$ = true;
hopscotch.core.t28750.prototype.om$core$IRender$render$arity$1 = ((function (validate__5372__auto__,ufv___28753,output_schema28741_28754,input_schema28742_28755,input_checker28743_28756,output_checker28744_28757){
return (function (_){var self__ = this;
var ___$1 = this;return om_bootstrap.grid.grid.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"body light",new cljs.core.Keyword(null,"fluid?","fluid?",-742121890),true], null),om_bootstrap.grid.row.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.grid.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(8),new cljs.core.Keyword(null,"xs-offset","xs-offset",-1940326689),(2)], null),hopscotch.core.__GT_search.call(null,cljs.core.PersistentArrayMap.EMPTY))));
});})(validate__5372__auto__,ufv___28753,output_schema28741_28754,input_schema28742_28755,input_checker28743_28756,output_checker28744_28757))
;
hopscotch.core.t28750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5372__auto__,ufv___28753,output_schema28741_28754,input_schema28742_28755,input_checker28743_28756,output_checker28744_28757){
return (function (_28752){var self__ = this;
var _28752__$1 = this;return self__.meta28751;
});})(validate__5372__auto__,ufv___28753,output_schema28741_28754,input_schema28742_28755,input_checker28743_28756,output_checker28744_28757))
;
hopscotch.core.t28750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5372__auto__,ufv___28753,output_schema28741_28754,input_schema28742_28755,input_checker28743_28756,output_checker28744_28757){
return (function (_28752,meta28751__$1){var self__ = this;
var _28752__$1 = this;return (new hopscotch.core.t28750(self__.input_checker28743,self__.body,self__.owner,self__.data,self__.output_checker28744,self__.G__28746,self__.G__28745,self__.validate__5372__auto__,self__.ufv__,self__.output_schema28741,self__.input_schema28742,meta28751__$1));
});})(validate__5372__auto__,ufv___28753,output_schema28741_28754,input_schema28742_28755,input_checker28743_28756,output_checker28744_28757))
;
hopscotch.core.__GT_t28750 = ((function (validate__5372__auto__,ufv___28753,output_schema28741_28754,input_schema28742_28755,input_checker28743_28756,output_checker28744_28757){
return (function __GT_t28750(input_checker28743__$1,body__$1,owner__$1,data__$1,output_checker28744__$1,G__28746__$1,G__28745__$1,validate__5372__auto____$1,ufv____$1,output_schema28741__$1,input_schema28742__$1,meta28751){return (new hopscotch.core.t28750(input_checker28743__$1,body__$1,owner__$1,data__$1,output_checker28744__$1,G__28746__$1,G__28745__$1,validate__5372__auto____$1,ufv____$1,output_schema28741__$1,input_schema28742__$1,meta28751));
});})(validate__5372__auto__,ufv___28753,output_schema28741_28754,input_schema28742_28755,input_checker28743_28756,output_checker28744_28757))
;
}
return (new hopscotch.core.t28750(input_checker28743_28756,body,owner,data,output_checker28744_28757,G__28746,G__28745,validate__5372__auto__,ufv___28753,output_schema28741_28754,input_schema28742_28755,null));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___28761 = output_checker28744_28757.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___28761))
{var error__5374__auto___28762 = temp__4126__auto___28761;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"body","body",-408674142,null),cljs.core.pr_str.call(null,error__5374__auto___28762)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___28762,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28741_28754,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___28753,output_schema28741_28754,input_schema28742_28755,input_checker28743_28756,output_checker28744_28757))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,hopscotch.core.body),schema.core.make_fn_schema.call(null,output_schema28741_28754,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28742_28755], null)));
hopscotch.core.__GT_body = (function() {
var __GT_body = null;
var __GT_body__1 = (function (cursor__9115__auto__){return om.core.build.call(null,hopscotch.core.body,cursor__9115__auto__);
});
var __GT_body__2 = (function (cursor__9115__auto__,m28740){return om.core.build.call(null,hopscotch.core.body,cursor__9115__auto__,m28740);
});
__GT_body = function(cursor__9115__auto__,m28740){
switch(arguments.length){
case 1:
return __GT_body__1.call(this,cursor__9115__auto__);
case 2:
return __GT_body__2.call(this,cursor__9115__auto__,m28740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_body.cljs$core$IFn$_invoke$arity$1 = __GT_body__1;
__GT_body.cljs$core$IFn$_invoke$arity$2 = __GT_body__2;
return __GT_body;
})()
;
var ufv___28776 = schema.utils.use_fn_validation;var output_schema28764_28777 = schema.core.Any;var input_schema28765_28778 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker28766_28779 = schema.core.checker.call(null,input_schema28765_28778);var output_checker28767_28780 = schema.core.checker.call(null,output_schema28764_28777);/**
* Inputs: [data owner]
*/
hopscotch.core.footer = ((function (ufv___28776,output_schema28764_28777,input_schema28765_28778,input_checker28766_28779,output_checker28767_28780){
return (function footer(G__28768,G__28769){var validate__5372__auto__ = ufv___28776.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___28781 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28768,G__28769], null);var temp__4126__auto___28782 = input_checker28766_28779.call(null,args__5373__auto___28781);if(cljs.core.truth_(temp__4126__auto___28782))
{var error__5374__auto___28783 = temp__4126__auto___28782;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"footer","footer",-1047990379,null),cljs.core.pr_str.call(null,error__5374__auto___28783)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___28783,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___28781,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28765_28778,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var data = G__28768;var owner = G__28769;while(true){
if(typeof hopscotch.core.t28773 !== 'undefined')
{} else
{
/**
* @constructor
*/
hopscotch.core.t28773 = (function (output_schema28764,input_checker28766,owner,data,G__28769,footer,validate__5372__auto__,ufv__,G__28768,input_schema28765,output_checker28767,meta28774){
this.output_schema28764 = output_schema28764;
this.input_checker28766 = input_checker28766;
this.owner = owner;
this.data = data;
this.G__28769 = G__28769;
this.footer = footer;
this.validate__5372__auto__ = validate__5372__auto__;
this.ufv__ = ufv__;
this.G__28768 = G__28768;
this.input_schema28765 = input_schema28765;
this.output_checker28767 = output_checker28767;
this.meta28774 = meta28774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hopscotch.core.t28773.cljs$lang$type = true;
hopscotch.core.t28773.cljs$lang$ctorStr = "hopscotch.core/t28773";
hopscotch.core.t28773.cljs$lang$ctorPrWriter = ((function (validate__5372__auto__,ufv___28776,output_schema28764_28777,input_schema28765_28778,input_checker28766_28779,output_checker28767_28780){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"hopscotch.core/t28773");
});})(validate__5372__auto__,ufv___28776,output_schema28764_28777,input_schema28765_28778,input_checker28766_28779,output_checker28767_28780))
;
hopscotch.core.t28773.prototype.om$core$IDisplayName$ = true;
hopscotch.core.t28773.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5372__auto__,ufv___28776,output_schema28764_28777,input_schema28765_28778,input_checker28766_28779,output_checker28767_28780){
return (function (_){var self__ = this;
var ___$1 = this;return "footer";
});})(validate__5372__auto__,ufv___28776,output_schema28764_28777,input_schema28765_28778,input_checker28766_28779,output_checker28767_28780))
;
hopscotch.core.t28773.prototype.om$core$IRender$ = true;
hopscotch.core.t28773.prototype.om$core$IRender$render$arity$1 = ((function (validate__5372__auto__,ufv___28776,output_schema28764_28777,input_schema28765_28778,input_checker28766_28779,output_checker28767_28780){
return (function (_){var self__ = this;
var ___$1 = this;return om_bootstrap.grid.grid.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"footer",new cljs.core.Keyword(null,"fluid?","fluid?",-742121890),true], null),om_bootstrap.grid.row.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.grid.col.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(12)], null),om_bootstrap.nav.nav.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"pills",new cljs.core.Keyword(null,"active-key","active-key",-2039404654),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"flat",new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (___$1,validate__5372__auto__,ufv___28776,output_schema28764_28777,input_schema28765_28778,input_checker28766_28779,output_checker28767_28780){
return (function (k,___$2){return console(("Selected"));
});})(___$1,validate__5372__auto__,ufv___28776,output_schema28764_28777,input_schema28765_28778,input_checker28766_28779,output_checker28767_28780))
], null),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(1),new cljs.core.Keyword(null,"href","href",-793805698),"/search"], null),"Search"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(2),new cljs.core.Keyword(null,"href","href",-793805698),"/enjoyed"], null),"Enoyed"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(3),new cljs.core.Keyword(null,"href","href",-793805698),"/cellar"], null),"Cellar"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(4),new cljs.core.Keyword(null,"href","href",-793805698),"/account"], null),"Account")))));
});})(validate__5372__auto__,ufv___28776,output_schema28764_28777,input_schema28765_28778,input_checker28766_28779,output_checker28767_28780))
;
hopscotch.core.t28773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5372__auto__,ufv___28776,output_schema28764_28777,input_schema28765_28778,input_checker28766_28779,output_checker28767_28780){
return (function (_28775){var self__ = this;
var _28775__$1 = this;return self__.meta28774;
});})(validate__5372__auto__,ufv___28776,output_schema28764_28777,input_schema28765_28778,input_checker28766_28779,output_checker28767_28780))
;
hopscotch.core.t28773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5372__auto__,ufv___28776,output_schema28764_28777,input_schema28765_28778,input_checker28766_28779,output_checker28767_28780){
return (function (_28775,meta28774__$1){var self__ = this;
var _28775__$1 = this;return (new hopscotch.core.t28773(self__.output_schema28764,self__.input_checker28766,self__.owner,self__.data,self__.G__28769,self__.footer,self__.validate__5372__auto__,self__.ufv__,self__.G__28768,self__.input_schema28765,self__.output_checker28767,meta28774__$1));
});})(validate__5372__auto__,ufv___28776,output_schema28764_28777,input_schema28765_28778,input_checker28766_28779,output_checker28767_28780))
;
hopscotch.core.__GT_t28773 = ((function (validate__5372__auto__,ufv___28776,output_schema28764_28777,input_schema28765_28778,input_checker28766_28779,output_checker28767_28780){
return (function __GT_t28773(output_schema28764__$1,input_checker28766__$1,owner__$1,data__$1,G__28769__$1,footer__$1,validate__5372__auto____$1,ufv____$1,G__28768__$1,input_schema28765__$1,output_checker28767__$1,meta28774){return (new hopscotch.core.t28773(output_schema28764__$1,input_checker28766__$1,owner__$1,data__$1,G__28769__$1,footer__$1,validate__5372__auto____$1,ufv____$1,G__28768__$1,input_schema28765__$1,output_checker28767__$1,meta28774));
});})(validate__5372__auto__,ufv___28776,output_schema28764_28777,input_schema28765_28778,input_checker28766_28779,output_checker28767_28780))
;
}
return (new hopscotch.core.t28773(output_schema28764_28777,input_checker28766_28779,owner,data,G__28769,footer,validate__5372__auto__,ufv___28776,G__28768,input_schema28765_28778,output_checker28767_28780,null));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___28784 = output_checker28767_28780.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___28784))
{var error__5374__auto___28785 = temp__4126__auto___28784;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"footer","footer",-1047990379,null),cljs.core.pr_str.call(null,error__5374__auto___28785)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___28785,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28764_28777,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___28776,output_schema28764_28777,input_schema28765_28778,input_checker28766_28779,output_checker28767_28780))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,hopscotch.core.footer),schema.core.make_fn_schema.call(null,output_schema28764_28777,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28765_28778], null)));
hopscotch.core.__GT_footer = (function() {
var __GT_footer = null;
var __GT_footer__1 = (function (cursor__9115__auto__){return om.core.build.call(null,hopscotch.core.footer,cursor__9115__auto__);
});
var __GT_footer__2 = (function (cursor__9115__auto__,m28763){return om.core.build.call(null,hopscotch.core.footer,cursor__9115__auto__,m28763);
});
__GT_footer = function(cursor__9115__auto__,m28763){
switch(arguments.length){
case 1:
return __GT_footer__1.call(this,cursor__9115__auto__);
case 2:
return __GT_footer__2.call(this,cursor__9115__auto__,m28763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_footer.cljs$core$IFn$_invoke$arity$1 = __GT_footer__1;
__GT_footer.cljs$core$IFn$_invoke$arity$2 = __GT_footer__2;
return __GT_footer;
})()
;
var ufv___28799 = schema.utils.use_fn_validation;var output_schema28787_28800 = schema.core.Any;var input_schema28788_28801 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker28789_28802 = schema.core.checker.call(null,input_schema28788_28801);var output_checker28790_28803 = schema.core.checker.call(null,output_schema28787_28800);/**
* Inputs: [data owner]
*/
hopscotch.core.app = ((function (ufv___28799,output_schema28787_28800,input_schema28788_28801,input_checker28789_28802,output_checker28790_28803){
return (function app(G__28791,G__28792){var validate__5372__auto__ = ufv___28799.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___28804 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28791,G__28792], null);var temp__4126__auto___28805 = input_checker28789_28802.call(null,args__5373__auto___28804);if(cljs.core.truth_(temp__4126__auto___28805))
{var error__5374__auto___28806 = temp__4126__auto___28805;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__5374__auto___28806)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___28806,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___28804,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28788_28801,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var data = G__28791;var owner = G__28792;while(true){
if(typeof hopscotch.core.t28796 !== 'undefined')
{} else
{
/**
* @constructor
*/
hopscotch.core.t28796 = (function (owner,data,input_checker28789,output_checker28790,output_schema28787,G__28791,G__28792,validate__5372__auto__,input_schema28788,app,ufv__,meta28797){
this.owner = owner;
this.data = data;
this.input_checker28789 = input_checker28789;
this.output_checker28790 = output_checker28790;
this.output_schema28787 = output_schema28787;
this.G__28791 = G__28791;
this.G__28792 = G__28792;
this.validate__5372__auto__ = validate__5372__auto__;
this.input_schema28788 = input_schema28788;
this.app = app;
this.ufv__ = ufv__;
this.meta28797 = meta28797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hopscotch.core.t28796.cljs$lang$type = true;
hopscotch.core.t28796.cljs$lang$ctorStr = "hopscotch.core/t28796";
hopscotch.core.t28796.cljs$lang$ctorPrWriter = ((function (validate__5372__auto__,ufv___28799,output_schema28787_28800,input_schema28788_28801,input_checker28789_28802,output_checker28790_28803){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"hopscotch.core/t28796");
});})(validate__5372__auto__,ufv___28799,output_schema28787_28800,input_schema28788_28801,input_checker28789_28802,output_checker28790_28803))
;
hopscotch.core.t28796.prototype.om$core$IDisplayName$ = true;
hopscotch.core.t28796.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5372__auto__,ufv___28799,output_schema28787_28800,input_schema28788_28801,input_checker28789_28802,output_checker28790_28803){
return (function (_){var self__ = this;
var ___$1 = this;return "app";
});})(validate__5372__auto__,ufv___28799,output_schema28787_28800,input_schema28788_28801,input_checker28789_28802,output_checker28790_28803))
;
hopscotch.core.t28796.prototype.om$core$IRender$ = true;
hopscotch.core.t28796.prototype.om$core$IRender$render$arity$1 = ((function (validate__5372__auto__,ufv___28799,output_schema28787_28800,input_schema28788_28801,input_checker28789_28802,output_checker28790_28803){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"className": "dark", "id": "app"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[hopscotch.core.__GT_header.call(null,cljs.core.PersistentArrayMap.EMPTY),hopscotch.core.__GT_body.call(null,cljs.core.PersistentArrayMap.EMPTY),hopscotch.core.__GT_footer.call(null,cljs.core.PersistentArrayMap.EMPTY)],null))));
});})(validate__5372__auto__,ufv___28799,output_schema28787_28800,input_schema28788_28801,input_checker28789_28802,output_checker28790_28803))
;
hopscotch.core.t28796.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5372__auto__,ufv___28799,output_schema28787_28800,input_schema28788_28801,input_checker28789_28802,output_checker28790_28803){
return (function (_28798){var self__ = this;
var _28798__$1 = this;return self__.meta28797;
});})(validate__5372__auto__,ufv___28799,output_schema28787_28800,input_schema28788_28801,input_checker28789_28802,output_checker28790_28803))
;
hopscotch.core.t28796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5372__auto__,ufv___28799,output_schema28787_28800,input_schema28788_28801,input_checker28789_28802,output_checker28790_28803){
return (function (_28798,meta28797__$1){var self__ = this;
var _28798__$1 = this;return (new hopscotch.core.t28796(self__.owner,self__.data,self__.input_checker28789,self__.output_checker28790,self__.output_schema28787,self__.G__28791,self__.G__28792,self__.validate__5372__auto__,self__.input_schema28788,self__.app,self__.ufv__,meta28797__$1));
});})(validate__5372__auto__,ufv___28799,output_schema28787_28800,input_schema28788_28801,input_checker28789_28802,output_checker28790_28803))
;
hopscotch.core.__GT_t28796 = ((function (validate__5372__auto__,ufv___28799,output_schema28787_28800,input_schema28788_28801,input_checker28789_28802,output_checker28790_28803){
return (function __GT_t28796(owner__$1,data__$1,input_checker28789__$1,output_checker28790__$1,output_schema28787__$1,G__28791__$1,G__28792__$1,validate__5372__auto____$1,input_schema28788__$1,app__$1,ufv____$1,meta28797){return (new hopscotch.core.t28796(owner__$1,data__$1,input_checker28789__$1,output_checker28790__$1,output_schema28787__$1,G__28791__$1,G__28792__$1,validate__5372__auto____$1,input_schema28788__$1,app__$1,ufv____$1,meta28797));
});})(validate__5372__auto__,ufv___28799,output_schema28787_28800,input_schema28788_28801,input_checker28789_28802,output_checker28790_28803))
;
}
return (new hopscotch.core.t28796(owner,data,input_checker28789_28802,output_checker28790_28803,output_schema28787_28800,G__28791,G__28792,validate__5372__auto__,input_schema28788_28801,app,ufv___28799,null));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___28807 = output_checker28790_28803.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___28807))
{var error__5374__auto___28808 = temp__4126__auto___28807;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__5374__auto___28808)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___28808,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28787_28800,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___28799,output_schema28787_28800,input_schema28788_28801,input_checker28789_28802,output_checker28790_28803))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,hopscotch.core.app),schema.core.make_fn_schema.call(null,output_schema28787_28800,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28788_28801], null)));
hopscotch.core.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__9115__auto__){return om.core.build.call(null,hopscotch.core.app,cursor__9115__auto__);
});
var __GT_app__2 = (function (cursor__9115__auto__,m28786){return om.core.build.call(null,hopscotch.core.app,cursor__9115__auto__,m28786);
});
__GT_app = function(cursor__9115__auto__,m28786){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__9115__auto__);
case 2:
return __GT_app__2.call(this,cursor__9115__auto__,m28786);
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