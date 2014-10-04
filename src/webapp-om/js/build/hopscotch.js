// Compiled by ClojureScript 0.0-2322
goog.provide('hopscotch');
goog.require('cljs.core');
goog.require('om_tools.mixin');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('om.core');
var ufv___10414 = schema.utils.use_fn_validation;var output_schema10402_10415 = schema.core.Any;var input_schema10403_10416 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker10404_10417 = schema.core.checker.call(null,input_schema10403_10416);var output_checker10405_10418 = schema.core.checker.call(null,output_schema10402_10415);/**
* Inputs: [data owner]
*/
hopscotch.header = ((function (ufv___10414,output_schema10402_10415,input_schema10403_10416,input_checker10404_10417,output_checker10405_10418){
return (function header(G__10406,G__10407){var validate__5367__auto__ = ufv___10414.get_cell();if(cljs.core.truth_(validate__5367__auto__))
{var args__5368__auto___10419 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10406,G__10407], null);var temp__4126__auto___10420 = input_checker10404_10417.call(null,args__5368__auto___10419);if(cljs.core.truth_(temp__4126__auto___10420))
{var error__5369__auto___10421 = temp__4126__auto___10420;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"header","header",1759972661,null),cljs.core.pr_str.call(null,error__5369__auto___10421)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10403_10416,new cljs.core.Keyword(null,"value","value",305978217),args__5368__auto___10419,new cljs.core.Keyword(null,"error","error",-978969032),error__5369__auto___10421], null));
} else
{}
} else
{}
var o__5370__auto__ = (function (){var data = G__10406;var owner = G__10407;while(true){
if(typeof hopscotch.t10411 !== 'undefined')
{} else
{
/**
* @constructor
*/
hopscotch.t10411 = (function (G__10406,owner,data,validate__5367__auto__,output_schema10402,output_checker10405,header,input_schema10403,G__10407,ufv__,input_checker10404,meta10412){
this.G__10406 = G__10406;
this.owner = owner;
this.data = data;
this.validate__5367__auto__ = validate__5367__auto__;
this.output_schema10402 = output_schema10402;
this.output_checker10405 = output_checker10405;
this.header = header;
this.input_schema10403 = input_schema10403;
this.G__10407 = G__10407;
this.ufv__ = ufv__;
this.input_checker10404 = input_checker10404;
this.meta10412 = meta10412;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hopscotch.t10411.cljs$lang$type = true;
hopscotch.t10411.cljs$lang$ctorStr = "hopscotch/t10411";
hopscotch.t10411.cljs$lang$ctorPrWriter = ((function (validate__5367__auto__,ufv___10414,output_schema10402_10415,input_schema10403_10416,input_checker10404_10417,output_checker10405_10418){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"hopscotch/t10411");
});})(validate__5367__auto__,ufv___10414,output_schema10402_10415,input_schema10403_10416,input_checker10404_10417,output_checker10405_10418))
;
hopscotch.t10411.prototype.om$core$IRender$ = true;
hopscotch.t10411.prototype.om$core$IRender$render$arity$1 = ((function (validate__5367__auto__,ufv___10414,output_schema10402_10415,input_schema10403_10416,input_checker10404_10417,output_checker10405_10418){
return (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"className": "header dark"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h1,("Hopscotch"),cljs.core.PersistentVector.EMPTY)],null))));
});})(validate__5367__auto__,ufv___10414,output_schema10402_10415,input_schema10403_10416,input_checker10404_10417,output_checker10405_10418))
;
hopscotch.t10411.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5367__auto__,ufv___10414,output_schema10402_10415,input_schema10403_10416,input_checker10404_10417,output_checker10405_10418){
return (function (_10413){var self__ = this;
var _10413__$1 = this;return self__.meta10412;
});})(validate__5367__auto__,ufv___10414,output_schema10402_10415,input_schema10403_10416,input_checker10404_10417,output_checker10405_10418))
;
hopscotch.t10411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5367__auto__,ufv___10414,output_schema10402_10415,input_schema10403_10416,input_checker10404_10417,output_checker10405_10418){
return (function (_10413,meta10412__$1){var self__ = this;
var _10413__$1 = this;return (new hopscotch.t10411(self__.G__10406,self__.owner,self__.data,self__.validate__5367__auto__,self__.output_schema10402,self__.output_checker10405,self__.header,self__.input_schema10403,self__.G__10407,self__.ufv__,self__.input_checker10404,meta10412__$1));
});})(validate__5367__auto__,ufv___10414,output_schema10402_10415,input_schema10403_10416,input_checker10404_10417,output_checker10405_10418))
;
hopscotch.__GT_t10411 = ((function (validate__5367__auto__,ufv___10414,output_schema10402_10415,input_schema10403_10416,input_checker10404_10417,output_checker10405_10418){
return (function __GT_t10411(G__10406__$1,owner__$1,data__$1,validate__5367__auto____$1,output_schema10402__$1,output_checker10405__$1,header__$1,input_schema10403__$1,G__10407__$1,ufv____$1,input_checker10404__$1,meta10412){return (new hopscotch.t10411(G__10406__$1,owner__$1,data__$1,validate__5367__auto____$1,output_schema10402__$1,output_checker10405__$1,header__$1,input_schema10403__$1,G__10407__$1,ufv____$1,input_checker10404__$1,meta10412));
});})(validate__5367__auto__,ufv___10414,output_schema10402_10415,input_schema10403_10416,input_checker10404_10417,output_checker10405_10418))
;
}
return (new hopscotch.t10411(G__10406,owner,data,validate__5367__auto__,output_schema10402_10415,output_checker10405_10418,header,input_schema10403_10416,G__10407,ufv___10414,input_checker10404_10417,null));
break;
}
})();if(cljs.core.truth_(validate__5367__auto__))
{var temp__4126__auto___10422 = output_checker10405_10418.call(null,o__5370__auto__);if(cljs.core.truth_(temp__4126__auto___10422))
{var error__5369__auto___10423 = temp__4126__auto___10422;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"header","header",1759972661,null),cljs.core.pr_str.call(null,error__5369__auto___10423)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10402_10415,new cljs.core.Keyword(null,"value","value",305978217),o__5370__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5369__auto___10423], null));
} else
{}
} else
{}
return o__5370__auto__;
});})(ufv___10414,output_schema10402_10415,input_schema10403_10416,input_checker10404_10417,output_checker10405_10418))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,hopscotch.header),schema.core.make_fn_schema.call(null,output_schema10402_10415,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10403_10416], null)));
hopscotch.__GT_header = (function() {
var __GT_header = null;
var __GT_header__1 = (function (cursor__9102__auto__){return om.core.build.call(null,hopscotch.header,cursor__9102__auto__);
});
var __GT_header__2 = (function (cursor__9102__auto__,m10401){return om.core.build.call(null,hopscotch.header,cursor__9102__auto__,m10401);
});
__GT_header = function(cursor__9102__auto__,m10401){
switch(arguments.length){
case 1:
return __GT_header__1.call(this,cursor__9102__auto__);
case 2:
return __GT_header__2.call(this,cursor__9102__auto__,m10401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_header.cljs$core$IFn$_invoke$arity$1 = __GT_header__1;
__GT_header.cljs$core$IFn$_invoke$arity$2 = __GT_header__2;
return __GT_header;
})()
;
om.core.root.call(null,hopscotch.header,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("hopscotch")], null));

//# sourceMappingURL=hopscotch.js.map