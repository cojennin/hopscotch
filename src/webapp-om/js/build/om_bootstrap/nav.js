// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.nav');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('om_bootstrap.types');
goog.require('om_tools.dom');
om_bootstrap.nav.NavItem = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str], true, false));
/**
* Generates a nav item for use inside of a nav element.
* @param {...*} var_args
*/
om_bootstrap.nav.nav_item_STAR_ = (function() { 
var nav_item_STAR___delegate = function (data__9146__auto__,owner21120,p__21122){var vec__21141 = p__21122;var opts__9147__auto__ = cljs.core.nth.call(null,vec__21141,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema21144 = schema.core.Any;var input_schema21145 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map21142","map21142",1100843681,null))], null);var input_checker21146 = schema.core.checker.call(null,input_schema21145);var output_checker21147 = schema.core.checker.call(null,output_schema21144);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema21144,input_schema21145,input_checker21146,output_checker21147,vec__21141,opts__9147__auto__){
return (function fnk21143(G__21148){var validate__5372__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___21159 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21148], null);var temp__4126__auto___21160 = input_checker21146.call(null,args__5373__auto___21159);if(cljs.core.truth_(temp__4126__auto___21160))
{var error__5374__auto___21161 = temp__4126__auto___21160;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk21143","fnk21143",1855947622,null),cljs.core.pr_str.call(null,error__5374__auto___21161)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___21161,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___21159,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21145,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var map21142 = G__21148;while(true){
if(cljs.core.map_QMARK_.call(null,map21142))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map21142)));
}
var owner = plumbing.fnk.schema.safe_get.call(null,map21142,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.nav.t21154 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.nav.t21154 = (function (map21142,owner,p__21122,fnk21143,G__21148,opts__9147__auto__,vec__21141,output_checker21147,input_schema21145,owner21120,output_schema21144,validate__5372__auto__,input_checker21146,nav_item_STAR_,data__9146__auto__,ufv__,meta21155){
this.map21142 = map21142;
this.owner = owner;
this.p__21122 = p__21122;
this.fnk21143 = fnk21143;
this.G__21148 = G__21148;
this.opts__9147__auto__ = opts__9147__auto__;
this.vec__21141 = vec__21141;
this.output_checker21147 = output_checker21147;
this.input_schema21145 = input_schema21145;
this.owner21120 = owner21120;
this.output_schema21144 = output_schema21144;
this.validate__5372__auto__ = validate__5372__auto__;
this.input_checker21146 = input_checker21146;
this.nav_item_STAR_ = nav_item_STAR_;
this.data__9146__auto__ = data__9146__auto__;
this.ufv__ = ufv__;
this.meta21155 = meta21155;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.nav.t21154.cljs$lang$type = true;
om_bootstrap.nav.t21154.cljs$lang$ctorStr = "om-bootstrap.nav/t21154";
om_bootstrap.nav.t21154.cljs$lang$ctorPrWriter = ((function (owner,validate__5372__auto__,ufv__,output_schema21144,input_schema21145,input_checker21146,output_checker21147,vec__21141,opts__9147__auto__){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"om-bootstrap.nav/t21154");
});})(owner,validate__5372__auto__,ufv__,output_schema21144,input_schema21145,input_checker21146,output_checker21147,vec__21141,opts__9147__auto__))
;
om_bootstrap.nav.t21154.prototype.om$core$IDisplayName$ = true;
om_bootstrap.nav.t21154.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__5372__auto__,ufv__,output_schema21144,input_schema21145,input_checker21146,output_checker21147,vec__21141,opts__9147__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "nav-item*";
});})(owner,validate__5372__auto__,ufv__,output_schema21144,input_schema21145,input_checker21146,output_checker21147,vec__21141,opts__9147__auto__))
;
om_bootstrap.nav.t21154.prototype.om$core$IRender$ = true;
om_bootstrap.nav.t21154.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__5372__auto__,ufv__,output_schema21144,input_schema21145,input_checker21146,output_checker21147,vec__21141,opts__9147__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var map__21157 = om.core.get_props.call(null,self__.owner);var map__21157__$1 = ((cljs.core.seq_QMARK_.call(null,map__21157))?cljs.core.apply.call(null,cljs.core.hash_map,map__21157):map__21157);var children = cljs.core.get.call(null,map__21157__$1,new cljs.core.Keyword(null,"children","children",-940561982));var opts = cljs.core.get.call(null,map__21157__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var vec__21158 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.NavItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));var bs = cljs.core.nth.call(null,vec__21158,(0),null);var props = cljs.core.nth.call(null,vec__21158,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null);var handle_click = ((function (map__21157,map__21157__$1,children,opts,vec__21158,bs,props,classes,___$1,owner,validate__5372__auto__,ufv__,output_schema21144,input_schema21145,input_checker21146,output_checker21147,vec__21141,opts__9147__auto__){
return (function (e){var temp__4126__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;e.preventDefault();
if(cljs.core.truth_(new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)))
{return null;
} else
{return f.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs));
}
} else
{return null;
}
});})(map__21157,map__21157__$1,children,opts,vec__21158,bs,props,classes,___$1,owner,validate__5372__auto__,ufv__,output_schema21144,input_schema21145,input_checker21146,output_checker21147,vec__21141,opts__9147__auto__))
;return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.a,{"onClick": om_tools.dom.format_opts.call(null,handle_click), "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "ref": "anchor", "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))],null)));
});})(owner,validate__5372__auto__,ufv__,output_schema21144,input_schema21145,input_checker21146,output_checker21147,vec__21141,opts__9147__auto__))
;
om_bootstrap.nav.t21154.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__5372__auto__,ufv__,output_schema21144,input_schema21145,input_checker21146,output_checker21147,vec__21141,opts__9147__auto__){
return (function (_21156){var self__ = this;
var _21156__$1 = this;return self__.meta21155;
});})(owner,validate__5372__auto__,ufv__,output_schema21144,input_schema21145,input_checker21146,output_checker21147,vec__21141,opts__9147__auto__))
;
om_bootstrap.nav.t21154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__5372__auto__,ufv__,output_schema21144,input_schema21145,input_checker21146,output_checker21147,vec__21141,opts__9147__auto__){
return (function (_21156,meta21155__$1){var self__ = this;
var _21156__$1 = this;return (new om_bootstrap.nav.t21154(self__.map21142,self__.owner,self__.p__21122,self__.fnk21143,self__.G__21148,self__.opts__9147__auto__,self__.vec__21141,self__.output_checker21147,self__.input_schema21145,self__.owner21120,self__.output_schema21144,self__.validate__5372__auto__,self__.input_checker21146,self__.nav_item_STAR_,self__.data__9146__auto__,self__.ufv__,meta21155__$1));
});})(owner,validate__5372__auto__,ufv__,output_schema21144,input_schema21145,input_checker21146,output_checker21147,vec__21141,opts__9147__auto__))
;
om_bootstrap.nav.__GT_t21154 = ((function (owner,validate__5372__auto__,ufv__,output_schema21144,input_schema21145,input_checker21146,output_checker21147,vec__21141,opts__9147__auto__){
return (function __GT_t21154(map21142__$1,owner__$1,p__21122__$1,fnk21143__$1,G__21148__$1,opts__9147__auto____$1,vec__21141__$1,output_checker21147__$1,input_schema21145__$1,owner21120__$1,output_schema21144__$1,validate__5372__auto____$1,input_checker21146__$1,nav_item_STAR___$1,data__9146__auto____$1,ufv____$1,meta21155){return (new om_bootstrap.nav.t21154(map21142__$1,owner__$1,p__21122__$1,fnk21143__$1,G__21148__$1,opts__9147__auto____$1,vec__21141__$1,output_checker21147__$1,input_schema21145__$1,owner21120__$1,output_schema21144__$1,validate__5372__auto____$1,input_checker21146__$1,nav_item_STAR___$1,data__9146__auto____$1,ufv____$1,meta21155));
});})(owner,validate__5372__auto__,ufv__,output_schema21144,input_schema21145,input_checker21146,output_checker21147,vec__21141,opts__9147__auto__))
;
}
return (new om_bootstrap.nav.t21154(map21142,owner,p__21122,fnk21143,G__21148,opts__9147__auto__,vec__21141,output_checker21147,input_schema21145,owner21120,output_schema21144,validate__5372__auto__,input_checker21146,nav_item_STAR_,data__9146__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___21162 = output_checker21147.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___21162))
{var error__5374__auto___21163 = temp__4126__auto___21162;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk21143","fnk21143",1855947622,null),cljs.core.pr_str.call(null,error__5374__auto___21163)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___21163,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21144,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv__,output_schema21144,input_schema21145,input_checker21146,output_checker21147,vec__21141,opts__9147__auto__))
,schema.core.make_fn_schema.call(null,output_schema21144,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21145], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__9147__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner21120,new cljs.core.Keyword(null,"data","data",-232669377),data__9146__auto__], null));
};
var nav_item_STAR_ = function (data__9146__auto__,owner21120,var_args){
var p__21122 = null;if (arguments.length > 2) {
  p__21122 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_item_STAR___delegate.call(this,data__9146__auto__,owner21120,p__21122);};
nav_item_STAR_.cljs$lang$maxFixedArity = 2;
nav_item_STAR_.cljs$lang$applyTo = (function (arglist__21164){
var data__9146__auto__ = cljs.core.first(arglist__21164);
arglist__21164 = cljs.core.next(arglist__21164);
var owner21120 = cljs.core.first(arglist__21164);
var p__21122 = cljs.core.rest(arglist__21164);
return nav_item_STAR___delegate(data__9146__auto__,owner21120,p__21122);
});
nav_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = nav_item_STAR___delegate;
return nav_item_STAR_;
})()
;
om_bootstrap.nav.__GT_nav_item_STAR_ = (function() {
var __GT_nav_item_STAR_ = null;
var __GT_nav_item_STAR___1 = (function (cursor__9115__auto__){return om.core.build.call(null,om_bootstrap.nav.nav_item_STAR_,cursor__9115__auto__);
});
var __GT_nav_item_STAR___2 = (function (cursor__9115__auto__,m21121){return om.core.build.call(null,om_bootstrap.nav.nav_item_STAR_,cursor__9115__auto__,m21121);
});
__GT_nav_item_STAR_ = function(cursor__9115__auto__,m21121){
switch(arguments.length){
case 1:
return __GT_nav_item_STAR___1.call(this,cursor__9115__auto__);
case 2:
return __GT_nav_item_STAR___2.call(this,cursor__9115__auto__,m21121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_nav_item_STAR___1;
__GT_nav_item_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_nav_item_STAR___2;
return __GT_nav_item_STAR_;
})()
;
var ufv___21171 = schema.utils.use_fn_validation;var output_schema21165_21172 = om_bootstrap.types.Component;var input_schema21166_21173 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.NavItem,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker21167_21174 = schema.core.checker.call(null,input_schema21166_21173);var output_checker21168_21175 = schema.core.checker.call(null,output_schema21165_21172);/**
* Inputs: [opts :- NavItem & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.nav.nav_item = ((function (ufv___21171,output_schema21165_21172,input_schema21166_21173,input_checker21167_21174,output_checker21168_21175){
return (function() { 
var nav_item__delegate = function (G__21169,rest21170){var validate__5372__auto__ = ufv___21171.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___21176 = cljs.core.list_STAR_.call(null,G__21169,rest21170);var temp__4126__auto___21177 = input_checker21167_21174.call(null,args__5373__auto___21176);if(cljs.core.truth_(temp__4126__auto___21177))
{var error__5374__auto___21178 = temp__4126__auto___21177;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"nav-item","nav-item",-307360961,null),cljs.core.pr_str.call(null,error__5374__auto___21178)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___21178,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___21176,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21166_21173,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var opts = G__21169;var children = rest21170;while(true){
return om_bootstrap.nav.__GT_nav_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___21179 = output_checker21168_21175.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___21179))
{var error__5374__auto___21180 = temp__4126__auto___21179;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"nav-item","nav-item",-307360961,null),cljs.core.pr_str.call(null,error__5374__auto___21180)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___21180,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21165_21172,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
};
var nav_item = function (G__21169,var_args){
var rest21170 = null;if (arguments.length > 1) {
  rest21170 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return nav_item__delegate.call(this,G__21169,rest21170);};
nav_item.cljs$lang$maxFixedArity = 1;
nav_item.cljs$lang$applyTo = (function (arglist__21181){
var G__21169 = cljs.core.first(arglist__21181);
var rest21170 = cljs.core.rest(arglist__21181);
return nav_item__delegate(G__21169,rest21170);
});
nav_item.cljs$core$IFn$_invoke$arity$variadic = nav_item__delegate;
return nav_item;
})()
;})(ufv___21171,output_schema21165_21172,input_schema21166_21173,input_checker21167_21174,output_checker21168_21175))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.nav_item),schema.core.make_fn_schema.call(null,output_schema21165_21172,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21166_21173], null)));
om_bootstrap.nav.Nav = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"stacked?","stacked?",784188446)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active-key","active-key",-2039404654)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active-href","active-href",-1458344709)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"navbar?","navbar?",2085313828)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)],[schema.core.Bool,schema.core.either.call(null,schema.core.Str,schema.core.Num),schema.core.Bool,schema.core.Bool,schema.core.Str,schema.core.Bool,schema.core.Bool,schema.core.Bool,schema.core.enum$.call(null,"tabs","pills")]));
var ufv___21188 = schema.utils.use_fn_validation;var output_schema21182_21189 = schema.core.Bool;var input_schema21183_21190 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child-props","child-props",1099812184,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker21184_21191 = schema.core.checker.call(null,input_schema21183_21190);var output_checker21185_21192 = schema.core.checker.call(null,output_schema21182_21189);/**
* Inputs: [child-props opts]
* Returns: s/Bool
* 
* Accepts a NavItem's child props and the current options provided to
* the Nav bar; returns true if the child component should be active,
* false otherwise.
*/
om_bootstrap.nav.child_active_QMARK_ = ((function (ufv___21188,output_schema21182_21189,input_schema21183_21190,input_checker21184_21191,output_checker21185_21192){
return (function child_active_QMARK_(G__21186,G__21187){var validate__5372__auto__ = ufv___21188.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___21193 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21186,G__21187], null);var temp__4126__auto___21194 = input_checker21184_21191.call(null,args__5373__auto___21193);if(cljs.core.truth_(temp__4126__auto___21194))
{var error__5374__auto___21195 = temp__4126__auto___21194;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"child-active?","child-active?",1895716640,null),cljs.core.pr_str.call(null,error__5374__auto___21195)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___21195,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___21193,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21183_21190,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var child_props = G__21186;var opts = G__21187;while(true){
return cljs.core.boolean$.call(null,(function (){var or__3558__auto__ = new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(child_props);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"active-key","active-key",-2039404654).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(temp__4126__auto__))
{var ak = temp__4126__auto__;return cljs.core._EQ_.call(null,ak,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(child_props));
} else
{return null;
}
})();if(cljs.core.truth_(or__3558__auto____$1))
{return or__3558__auto____$1;
} else
{var temp__4126__auto__ = new cljs.core.Keyword(null,"active-href","active-href",-1458344709).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(temp__4126__auto__))
{var ak = temp__4126__auto__;return cljs.core._EQ_.call(null,ak,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(child_props));
} else
{return null;
}
}
}
})());
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___21196 = output_checker21185_21192.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___21196))
{var error__5374__auto___21197 = temp__4126__auto___21196;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"child-active?","child-active?",1895716640,null),cljs.core.pr_str.call(null,error__5374__auto___21197)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___21197,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21182_21189,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___21188,output_schema21182_21189,input_schema21183_21190,input_checker21184_21191,output_checker21185_21192))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.child_active_QMARK_),schema.core.make_fn_schema.call(null,output_schema21182_21189,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21183_21190], null)));
var ufv___21203 = schema.utils.use_fn_validation;var output_schema21198_21204 = schema.core.Any;var input_schema21199_21205 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker21200_21206 = schema.core.checker.call(null,input_schema21199_21205);var output_checker21201_21207 = schema.core.checker.call(null,output_schema21198_21204);/**
* Inputs: [opts]
* 
* Takes the options supplied to the top level nav and returns a
* function that will CLONE the inner nav items, transferring all
* relevant props from the outer code to the inner code.
*/
om_bootstrap.nav.clone_nav_item = ((function (ufv___21203,output_schema21198_21204,input_schema21199_21205,input_checker21200_21206,output_checker21201_21207){
return (function clone_nav_item(G__21202){var validate__5372__auto__ = ufv___21203.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___21208 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21202], null);var temp__4126__auto___21209 = input_checker21200_21206.call(null,args__5373__auto___21208);if(cljs.core.truth_(temp__4126__auto___21209))
{var error__5374__auto___21210 = temp__4126__auto___21209;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__5374__auto___21210)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___21210,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___21208,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21199_21205,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var opts = G__21202;while(true){
var prop_fn = ((function (validate__5372__auto__,ufv___21203,output_schema21198_21204,input_schema21199_21205,input_checker21200_21206,output_checker21201_21207){
return (function prop_fn(props){var base = cljs.core.assoc.call(null,cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"active-key","active-key",-2039404654),new cljs.core.Keyword(null,"active-href","active-href",-1458344709)], null)),new cljs.core.Keyword(null,"active?","active?",459499776),om_bootstrap.nav.child_active_QMARK_.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props),opts),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),true);return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});})(validate__5372__auto__,ufv___21203,output_schema21198_21204,input_schema21199_21205,input_checker21200_21206,output_checker21201_21207))
;
return ((function (validate__5372__auto__,ufv___21203,output_schema21198_21204,input_schema21199_21205,input_checker21200_21206,output_checker21201_21207){
return (function (child){return om_bootstrap.util.clone_with_props.call(null,child,prop_fn);
});
;})(validate__5372__auto__,ufv___21203,output_schema21198_21204,input_schema21199_21205,input_checker21200_21206,output_checker21201_21207))
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___21211 = output_checker21201_21207.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___21211))
{var error__5374__auto___21212 = temp__4126__auto___21211;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__5374__auto___21212)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___21212,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21198_21204,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___21203,output_schema21198_21204,input_schema21199_21205,input_checker21200_21206,output_checker21201_21207))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.clone_nav_item),schema.core.make_fn_schema.call(null,output_schema21198_21204,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21199_21205], null)));
/**
* @param {...*} var_args
*/
om_bootstrap.nav.nav_STAR_ = (function() { 
var nav_STAR___delegate = function (data__9146__auto__,owner21213,p__21215){var vec__21234 = p__21215;var opts__9147__auto__ = cljs.core.nth.call(null,vec__21234,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema21237 = schema.core.Any;var input_schema21238 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map21235","map21235",-200490134,null))], null);var input_checker21239 = schema.core.checker.call(null,input_schema21238);var output_checker21240 = schema.core.checker.call(null,output_schema21237);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema21237,input_schema21238,input_checker21239,output_checker21240,vec__21234,opts__9147__auto__){
return (function fnk21236(G__21241){var validate__5372__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___21252 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21241], null);var temp__4126__auto___21253 = input_checker21239.call(null,args__5373__auto___21252);if(cljs.core.truth_(temp__4126__auto___21253))
{var error__5374__auto___21254 = temp__4126__auto___21253;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk21236","fnk21236",-205785138,null),cljs.core.pr_str.call(null,error__5374__auto___21254)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___21254,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___21252,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21238,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var map21235 = G__21241;while(true){
if(cljs.core.map_QMARK_.call(null,map21235))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map21235)));
}
var owner = plumbing.fnk.schema.safe_get.call(null,map21235,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.nav.t21247 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.nav.t21247 = (function (owner,input_checker21239,map21235,opts__9147__auto__,nav_STAR_,fnk21236,input_schema21238,G__21241,output_checker21240,output_schema21237,validate__5372__auto__,p__21215,vec__21234,data__9146__auto__,ufv__,owner21213,meta21248){
this.owner = owner;
this.input_checker21239 = input_checker21239;
this.map21235 = map21235;
this.opts__9147__auto__ = opts__9147__auto__;
this.nav_STAR_ = nav_STAR_;
this.fnk21236 = fnk21236;
this.input_schema21238 = input_schema21238;
this.G__21241 = G__21241;
this.output_checker21240 = output_checker21240;
this.output_schema21237 = output_schema21237;
this.validate__5372__auto__ = validate__5372__auto__;
this.p__21215 = p__21215;
this.vec__21234 = vec__21234;
this.data__9146__auto__ = data__9146__auto__;
this.ufv__ = ufv__;
this.owner21213 = owner21213;
this.meta21248 = meta21248;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.nav.t21247.cljs$lang$type = true;
om_bootstrap.nav.t21247.cljs$lang$ctorStr = "om-bootstrap.nav/t21247";
om_bootstrap.nav.t21247.cljs$lang$ctorPrWriter = ((function (owner,validate__5372__auto__,ufv__,output_schema21237,input_schema21238,input_checker21239,output_checker21240,vec__21234,opts__9147__auto__){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"om-bootstrap.nav/t21247");
});})(owner,validate__5372__auto__,ufv__,output_schema21237,input_schema21238,input_checker21239,output_checker21240,vec__21234,opts__9147__auto__))
;
om_bootstrap.nav.t21247.prototype.om$core$IDisplayName$ = true;
om_bootstrap.nav.t21247.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__5372__auto__,ufv__,output_schema21237,input_schema21238,input_checker21239,output_checker21240,vec__21234,opts__9147__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "nav*";
});})(owner,validate__5372__auto__,ufv__,output_schema21237,input_schema21238,input_checker21239,output_checker21240,vec__21234,opts__9147__auto__))
;
om_bootstrap.nav.t21247.prototype.om$core$IRender$ = true;
om_bootstrap.nav.t21247.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__5372__auto__,ufv__,output_schema21237,input_schema21238,input_checker21239,output_checker21240,vec__21234,opts__9147__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var map__21250 = om.core.get_props.call(null,self__.owner);var map__21250__$1 = ((cljs.core.seq_QMARK_.call(null,map__21250))?cljs.core.apply.call(null,cljs.core.hash_map,map__21250):map__21250);var children = cljs.core.get.call(null,map__21250__$1,new cljs.core.Keyword(null,"children","children",-940561982));var opts = cljs.core.get.call(null,map__21250__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var vec__21251 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.Nav,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"nav"], null));var bs = cljs.core.nth.call(null,vec__21251,(0),null);var props = cljs.core.nth.call(null,vec__21251,(1),null);var classes = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navbar-collapse","navbar-collapse",-2134296568),new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs)], null);var ul_props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"ul",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nav-stacked","nav-stacked",529598925),new cljs.core.Keyword(null,"stacked?","stacked?",784188446).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"nav-justified","nav-justified",-1119443678),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-nav","navbar-nav",1173290557),new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null)))], null);var children__$1 = cljs.core.map.call(null,om_bootstrap.nav.clone_nav_item.call(null,opts),children);if(cljs.core.truth_((function (){var and__3546__auto__ = new cljs.core.Keyword(null,"navbar?","navbar?",2085313828).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs));
} else
{return and__3546__auto__;
}
})()))
{return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_props),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
} else
{return om_tools.dom.element.call(null,React.DOM.nav,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.ul,ul_props,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)))],null)));
}
});})(owner,validate__5372__auto__,ufv__,output_schema21237,input_schema21238,input_checker21239,output_checker21240,vec__21234,opts__9147__auto__))
;
om_bootstrap.nav.t21247.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__5372__auto__,ufv__,output_schema21237,input_schema21238,input_checker21239,output_checker21240,vec__21234,opts__9147__auto__){
return (function (_21249){var self__ = this;
var _21249__$1 = this;return self__.meta21248;
});})(owner,validate__5372__auto__,ufv__,output_schema21237,input_schema21238,input_checker21239,output_checker21240,vec__21234,opts__9147__auto__))
;
om_bootstrap.nav.t21247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__5372__auto__,ufv__,output_schema21237,input_schema21238,input_checker21239,output_checker21240,vec__21234,opts__9147__auto__){
return (function (_21249,meta21248__$1){var self__ = this;
var _21249__$1 = this;return (new om_bootstrap.nav.t21247(self__.owner,self__.input_checker21239,self__.map21235,self__.opts__9147__auto__,self__.nav_STAR_,self__.fnk21236,self__.input_schema21238,self__.G__21241,self__.output_checker21240,self__.output_schema21237,self__.validate__5372__auto__,self__.p__21215,self__.vec__21234,self__.data__9146__auto__,self__.ufv__,self__.owner21213,meta21248__$1));
});})(owner,validate__5372__auto__,ufv__,output_schema21237,input_schema21238,input_checker21239,output_checker21240,vec__21234,opts__9147__auto__))
;
om_bootstrap.nav.__GT_t21247 = ((function (owner,validate__5372__auto__,ufv__,output_schema21237,input_schema21238,input_checker21239,output_checker21240,vec__21234,opts__9147__auto__){
return (function __GT_t21247(owner__$1,input_checker21239__$1,map21235__$1,opts__9147__auto____$1,nav_STAR___$1,fnk21236__$1,input_schema21238__$1,G__21241__$1,output_checker21240__$1,output_schema21237__$1,validate__5372__auto____$1,p__21215__$1,vec__21234__$1,data__9146__auto____$1,ufv____$1,owner21213__$1,meta21248){return (new om_bootstrap.nav.t21247(owner__$1,input_checker21239__$1,map21235__$1,opts__9147__auto____$1,nav_STAR___$1,fnk21236__$1,input_schema21238__$1,G__21241__$1,output_checker21240__$1,output_schema21237__$1,validate__5372__auto____$1,p__21215__$1,vec__21234__$1,data__9146__auto____$1,ufv____$1,owner21213__$1,meta21248));
});})(owner,validate__5372__auto__,ufv__,output_schema21237,input_schema21238,input_checker21239,output_checker21240,vec__21234,opts__9147__auto__))
;
}
return (new om_bootstrap.nav.t21247(owner,input_checker21239,map21235,opts__9147__auto__,nav_STAR_,fnk21236,input_schema21238,G__21241,output_checker21240,output_schema21237,validate__5372__auto__,p__21215,vec__21234,data__9146__auto__,ufv__,owner21213,null));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___21255 = output_checker21240.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___21255))
{var error__5374__auto___21256 = temp__4126__auto___21255;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk21236","fnk21236",-205785138,null),cljs.core.pr_str.call(null,error__5374__auto___21256)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___21256,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21237,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv__,output_schema21237,input_schema21238,input_checker21239,output_checker21240,vec__21234,opts__9147__auto__))
,schema.core.make_fn_schema.call(null,output_schema21237,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21238], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__9147__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner21213,new cljs.core.Keyword(null,"data","data",-232669377),data__9146__auto__], null));
};
var nav_STAR_ = function (data__9146__auto__,owner21213,var_args){
var p__21215 = null;if (arguments.length > 2) {
  p__21215 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_STAR___delegate.call(this,data__9146__auto__,owner21213,p__21215);};
nav_STAR_.cljs$lang$maxFixedArity = 2;
nav_STAR_.cljs$lang$applyTo = (function (arglist__21257){
var data__9146__auto__ = cljs.core.first(arglist__21257);
arglist__21257 = cljs.core.next(arglist__21257);
var owner21213 = cljs.core.first(arglist__21257);
var p__21215 = cljs.core.rest(arglist__21257);
return nav_STAR___delegate(data__9146__auto__,owner21213,p__21215);
});
nav_STAR_.cljs$core$IFn$_invoke$arity$variadic = nav_STAR___delegate;
return nav_STAR_;
})()
;
om_bootstrap.nav.__GT_nav_STAR_ = (function() {
var __GT_nav_STAR_ = null;
var __GT_nav_STAR___1 = (function (cursor__9115__auto__){return om.core.build.call(null,om_bootstrap.nav.nav_STAR_,cursor__9115__auto__);
});
var __GT_nav_STAR___2 = (function (cursor__9115__auto__,m21214){return om.core.build.call(null,om_bootstrap.nav.nav_STAR_,cursor__9115__auto__,m21214);
});
__GT_nav_STAR_ = function(cursor__9115__auto__,m21214){
switch(arguments.length){
case 1:
return __GT_nav_STAR___1.call(this,cursor__9115__auto__);
case 2:
return __GT_nav_STAR___2.call(this,cursor__9115__auto__,m21214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_nav_STAR___1;
__GT_nav_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_nav_STAR___2;
return __GT_nav_STAR_;
})()
;
var ufv___21264 = schema.utils.use_fn_validation;var output_schema21258_21265 = om_bootstrap.types.Component;var input_schema21259_21266 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.Nav,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker21260_21267 = schema.core.checker.call(null,input_schema21259_21266);var output_checker21261_21268 = schema.core.checker.call(null,output_schema21258_21265);/**
* Inputs: [opts :- Nav & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.nav.nav = ((function (ufv___21264,output_schema21258_21265,input_schema21259_21266,input_checker21260_21267,output_checker21261_21268){
return (function() { 
var nav__delegate = function (G__21262,rest21263){var validate__5372__auto__ = ufv___21264.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___21269 = cljs.core.list_STAR_.call(null,G__21262,rest21263);var temp__4126__auto___21270 = input_checker21260_21267.call(null,args__5373__auto___21269);if(cljs.core.truth_(temp__4126__auto___21270))
{var error__5374__auto___21271 = temp__4126__auto___21270;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"nav","nav",-1934895292,null),cljs.core.pr_str.call(null,error__5374__auto___21271)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___21271,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___21269,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21259_21266,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var opts = G__21262;var children = rest21263;while(true){
return om_bootstrap.nav.__GT_nav_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___21272 = output_checker21261_21268.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___21272))
{var error__5374__auto___21273 = temp__4126__auto___21272;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"nav","nav",-1934895292,null),cljs.core.pr_str.call(null,error__5374__auto___21273)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___21273,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21258_21265,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
};
var nav = function (G__21262,var_args){
var rest21263 = null;if (arguments.length > 1) {
  rest21263 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return nav__delegate.call(this,G__21262,rest21263);};
nav.cljs$lang$maxFixedArity = 1;
nav.cljs$lang$applyTo = (function (arglist__21274){
var G__21262 = cljs.core.first(arglist__21274);
var rest21263 = cljs.core.rest(arglist__21274);
return nav__delegate(G__21262,rest21263);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;})(ufv___21264,output_schema21258_21265,input_schema21259_21266,input_checker21260_21267,output_checker21261_21268))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.nav),schema.core.make_fn_schema.call(null,output_schema21258_21265,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21259_21266], null)));
om_bootstrap.nav.NavBar = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"static-top?","static-top?",558714465)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"role","role",-736691072)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-expanded?","nav-expanded?",-1026102544)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"brand","brand",557863343)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fixed-bottom?","fixed-bottom?",610036337)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"default-nav-expanded?","default-nav-expanded?",259430037))],[schema.core.Bool,schema.core.Bool,schema.core.Str,schema.core.Bool,schema.core.Bool,om_bootstrap.types.Renderable,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.Bool,schema.core.Str,schema.core.Bool]));
om_bootstrap.nav.render_toggle_button = (function render_toggle_button(owner,bs){var handle_toggle = (function (){var temp__4126__auto___21275 = new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto___21275))
{var f_21276 = temp__4126__auto___21275;om.core.set_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),true);
f_21276.call(null);
om.core.set_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),false);
} else
{}
return om.core.update_state_nr_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changing?","changing?",1855217746)], null),cljs.core.not);
});var tb = om_bootstrap.util.clone_with_props.call(null,new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_toggle], null));return cljs.core.apply.call(null,React.DOM.button,{"onClick": om_tools.dom.format_opts.call(null,handle_toggle), "type": "button", "className": "navbar-toggle"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var or__3558__auto__ = tb;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span({"key": (0), "className": "sr-only"},"Toggle navigation"),React.DOM.span({"key": (1), "className": "icon-bar"}),React.DOM.span({"key": (2), "className": "icon-bar"}),React.DOM.span({"key": (3), "className": "icon-bar"})], null);
}
})()],null))));
});
om_bootstrap.nav.render_header = (function render_header(owner,bs){return cljs.core.apply.call(null,React.DOM.div,{"className": "navbar-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(om_bootstrap.util.strict_valid_component_QMARK_.call(null,new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs)))?om_bootstrap.util.clone_with_props.call(null,new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-brand"], null)):cljs.core.apply.call(null,React.DOM.span,{"className": "navbar-brand"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs)],null))))),(cljs.core.truth_((function (){var or__3558__auto__ = new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?om_bootstrap.nav.render_toggle_button.call(null,owner,bs):null)],null))));
});
var ufv___21282 = schema.utils.use_fn_validation;var output_schema21277_21283 = schema.core.Any;var input_schema21278_21284 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker21279_21285 = schema.core.checker.call(null,input_schema21278_21284);var output_checker21280_21286 = schema.core.checker.call(null,output_schema21277_21283);/**
* Inputs: [opts]
* 
* Takes the options supplied to the top level nav and returns a
* function that will CLONE the inner nav items, transferring all
* relevant props from the outer code to the inner code.
*/
om_bootstrap.nav.clone_nav_item = ((function (ufv___21282,output_schema21277_21283,input_schema21278_21284,input_checker21279_21285,output_checker21280_21286){
return (function clone_nav_item(G__21281){var validate__5372__auto__ = ufv___21282.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___21287 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21281], null);var temp__4126__auto___21288 = input_checker21279_21285.call(null,args__5373__auto___21287);if(cljs.core.truth_(temp__4126__auto___21288))
{var error__5374__auto___21289 = temp__4126__auto___21288;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__5374__auto___21289)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___21289,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___21287,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21278_21284,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var opts = G__21281;while(true){
var prop_fn = ((function (validate__5372__auto__,ufv___21282,output_schema21277_21283,input_schema21278_21284,input_checker21279_21285,output_checker21280_21286){
return (function prop_fn(props){var base = cljs.core.assoc.call(null,cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"active-key","active-key",-2039404654),new cljs.core.Keyword(null,"active-href","active-href",-1458344709)], null)),new cljs.core.Keyword(null,"active?","active?",459499776),om_bootstrap.nav.child_active_QMARK_.call(null,new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props),opts),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),true);return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});})(validate__5372__auto__,ufv___21282,output_schema21277_21283,input_schema21278_21284,input_checker21279_21285,output_checker21280_21286))
;
return ((function (validate__5372__auto__,ufv___21282,output_schema21277_21283,input_schema21278_21284,input_checker21279_21285,output_checker21280_21286){
return (function (child){return om_bootstrap.util.clone_with_props.call(null,child,prop_fn);
});
;})(validate__5372__auto__,ufv___21282,output_schema21277_21283,input_schema21278_21284,input_checker21279_21285,output_checker21280_21286))
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___21290 = output_checker21280_21286.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___21290))
{var error__5374__auto___21291 = temp__4126__auto___21290;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"clone-nav-item","clone-nav-item",855224061,null),cljs.core.pr_str.call(null,error__5374__auto___21291)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___21291,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21277_21283,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___21282,output_schema21277_21283,input_schema21278_21284,input_checker21279_21285,output_checker21280_21286))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.clone_nav_item),schema.core.make_fn_schema.call(null,output_schema21277_21283,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21278_21284], null)));
om_bootstrap.nav.render_navbar_child = (function render_navbar_child(owner,child,bs){var f = (function (props){var opts = new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props);var collapsible_QMARK_ = (cljs.core.truth_(new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs)):null);var base = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"navbar?","navbar?",2085313828),true,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779),collapsible_QMARK_,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),(function (){var and__3546__auto__ = collapsible_QMARK_;if(cljs.core.truth_(and__3546__auto__))
{var or__3558__auto__ = new cljs.core.Keyword(null,"nav-expanded?","nav-expanded?",-1026102544).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582));
}
} else
{return and__3546__auto__;
}
})()], null);return cljs.core.update_in.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,base);
});return om_bootstrap.util.clone_with_props.call(null,child,f);
});
/**
* @param {...*} var_args
*/
om_bootstrap.nav.navbar_STAR_ = (function() { 
var navbar_STAR___delegate = function (data__9146__auto__,owner21293,p__21295){var vec__21313 = p__21295;var opts__9147__auto__ = cljs.core.nth.call(null,vec__21313,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema21317 = schema.core.Any;var input_schema21318 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"children","children",-940561982),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map21314","map21314",647406417,null))], null);var input_checker21319 = schema.core.checker.call(null,input_schema21318);var output_checker21320 = schema.core.checker.call(null,output_schema21317);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema21317,input_schema21318,input_checker21319,output_checker21320,vec__21313,opts__9147__auto__){
return (function fnk21316(G__21321){var validate__5372__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___21330 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21321], null);var temp__4126__auto___21331 = input_checker21319.call(null,args__5373__auto___21330);if(cljs.core.truth_(temp__4126__auto___21331))
{var error__5374__auto___21332 = temp__4126__auto___21331;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk21316","fnk21316",-31798097,null),cljs.core.pr_str.call(null,error__5374__auto___21332)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___21332,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___21330,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21318,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var map21314 = G__21321;while(true){
if(cljs.core.map_QMARK_.call(null,map21314))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map21314)));
}
var map21315 = plumbing.fnk.schema.safe_get.call(null,map21314,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var opts = plumbing.fnk.schema.safe_get.call(null,map21315,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var children = plumbing.fnk.schema.safe_get.call(null,map21315,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map21314,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof om_bootstrap.nav.t21326 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_bootstrap.nav.t21326 = (function (navbar_STAR_,owner,input_checker21319,map21315,children,owner21293,opts__9147__auto__,G__21321,fnk21316,vec__21313,map21314,input_schema21318,p__21295,validate__5372__auto__,output_schema21317,opts,data__9146__auto__,ufv__,output_checker21320,meta21327){
this.navbar_STAR_ = navbar_STAR_;
this.owner = owner;
this.input_checker21319 = input_checker21319;
this.map21315 = map21315;
this.children = children;
this.owner21293 = owner21293;
this.opts__9147__auto__ = opts__9147__auto__;
this.G__21321 = G__21321;
this.fnk21316 = fnk21316;
this.vec__21313 = vec__21313;
this.map21314 = map21314;
this.input_schema21318 = input_schema21318;
this.p__21295 = p__21295;
this.validate__5372__auto__ = validate__5372__auto__;
this.output_schema21317 = output_schema21317;
this.opts = opts;
this.data__9146__auto__ = data__9146__auto__;
this.ufv__ = ufv__;
this.output_checker21320 = output_checker21320;
this.meta21327 = meta21327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.nav.t21326.cljs$lang$type = true;
om_bootstrap.nav.t21326.cljs$lang$ctorStr = "om-bootstrap.nav/t21326";
om_bootstrap.nav.t21326.cljs$lang$ctorPrWriter = ((function (owner,children,opts,map21315,validate__5372__auto__,ufv__,output_schema21317,input_schema21318,input_checker21319,output_checker21320,vec__21313,opts__9147__auto__){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"om-bootstrap.nav/t21326");
});})(owner,children,opts,map21315,validate__5372__auto__,ufv__,output_schema21317,input_schema21318,input_checker21319,output_checker21320,vec__21313,opts__9147__auto__))
;
om_bootstrap.nav.t21326.prototype.om$core$IDisplayName$ = true;
om_bootstrap.nav.t21326.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,children,opts,map21315,validate__5372__auto__,ufv__,output_schema21317,input_schema21318,input_checker21319,output_checker21320,vec__21313,opts__9147__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "navbar*";
});})(owner,children,opts,map21315,validate__5372__auto__,ufv__,output_schema21317,input_schema21318,input_checker21319,output_checker21320,vec__21313,opts__9147__auto__))
;
om_bootstrap.nav.t21326.prototype.om$core$IRender$ = true;
om_bootstrap.nav.t21326.prototype.om$core$IRender$render$arity$1 = ((function (owner,children,opts,map21315,validate__5372__auto__,ufv__,output_schema21317,input_schema21318,input_checker21319,output_checker21320,vec__21313,opts__9147__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var vec__21329 = om_bootstrap.types.separate.call(null,om_bootstrap.nav.NavBar,self__.opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"navbar",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"role","role",-736691072),"navigation",new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),((function (___$1,owner,children,opts,map21315,validate__5372__auto__,ufv__,output_schema21317,input_schema21318,input_checker21319,output_checker21320,vec__21313,opts__9147__auto__){
return (function() { 
var G__21333__delegate = function (opts__$2,c){return om_tools.dom.element.call(null,React.DOM.nav,opts__$2,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)));
};
var G__21333 = function (opts__$2,var_args){
var c = null;if (arguments.length > 1) {
  c = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__21333__delegate.call(this,opts__$2,c);};
G__21333.cljs$lang$maxFixedArity = 1;
G__21333.cljs$lang$applyTo = (function (arglist__21334){
var opts__$2 = cljs.core.first(arglist__21334);
var c = cljs.core.rest(arglist__21334);
return G__21333__delegate(opts__$2,c);
});
G__21333.cljs$core$IFn$_invoke$arity$variadic = G__21333__delegate;
return G__21333;
})()
;})(___$1,owner,children,opts,map21315,validate__5372__auto__,ufv__,output_schema21317,input_schema21318,input_checker21319,output_checker21320,vec__21313,opts__9147__auto__))
], null));var bs = cljs.core.nth.call(null,vec__21329,(0),null);var props = cljs.core.nth.call(null,vec__21329,(1),null);var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.Keyword(null,"navbar-fixed-top","navbar-fixed-top",-1597835234),new cljs.core.Keyword(null,"fixed-top?","fixed-top?",1129203462).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-fixed-bottom","navbar-fixed-bottom",202995425),new cljs.core.Keyword(null,"fixed-bottom?","fixed-bottom?",610036337).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-static-top","navbar-static-top",-1901902571),new cljs.core.Keyword(null,"static-top?","static-top?",558714465).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"navbar-inverse","navbar-inverse",1370996983),new cljs.core.Keyword(null,"inverse?","inverse?",-1062565987).cljs$core$IFn$_invoke$arity$1(bs));return new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(bs).call(null,om_bootstrap.util.merge_props.call(null,cljs.core.merge.call(null,bs,props),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"fluid","fluid",-1823657759).cljs$core$IFn$_invoke$arity$1(props))?"container-fluid":"container"))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_((function (){var or__3558__auto__ = new cljs.core.Keyword(null,"brand","brand",557863343).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(or__3558__auto____$1))
{return or__3558__auto____$1;
} else
{return new cljs.core.Keyword(null,"toggle-nav-key","toggle-nav-key",285397104).cljs$core$IFn$_invoke$arity$1(bs);
}
}
})())?om_bootstrap.nav.render_header.call(null,self__.owner,bs):null),cljs.core.map.call(null,((function (vec__21329,bs,props,classes,___$1,owner,children,opts,map21315,validate__5372__auto__,ufv__,output_schema21317,input_schema21318,input_checker21319,output_checker21320,vec__21313,opts__9147__auto__){
return (function (p1__21292_SHARP_){return om_bootstrap.nav.render_navbar_child.call(null,self__.owner,p1__21292_SHARP_,bs);
});})(vec__21329,bs,props,classes,___$1,owner,children,opts,map21315,validate__5372__auto__,ufv__,output_schema21317,input_schema21318,input_checker21319,output_checker21320,vec__21313,opts__9147__auto__))
,self__.children)],null)))));
});})(owner,children,opts,map21315,validate__5372__auto__,ufv__,output_schema21317,input_schema21318,input_checker21319,output_checker21320,vec__21313,opts__9147__auto__))
;
om_bootstrap.nav.t21326.prototype.om$core$IShouldUpdate$ = true;
om_bootstrap.nav.t21326.prototype.om$core$IShouldUpdate$should_update$arity$3 = ((function (owner,children,opts,map21315,validate__5372__auto__,ufv__,output_schema21317,input_schema21318,input_checker21319,output_checker21320,vec__21313,opts__9147__auto__){
return (function (_,___$1,next_state){var self__ = this;
var ___$2 = this;return cljs.core.not.call(null,new cljs.core.Keyword(null,"changing?","changing?",1855217746).cljs$core$IFn$_invoke$arity$1(next_state));
});})(owner,children,opts,map21315,validate__5372__auto__,ufv__,output_schema21317,input_schema21318,input_checker21319,output_checker21320,vec__21313,opts__9147__auto__))
;
om_bootstrap.nav.t21326.prototype.om$core$IInitState$ = true;
om_bootstrap.nav.t21326.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,children,opts,map21315,validate__5372__auto__,ufv__,output_schema21317,input_schema21318,input_checker21319,output_checker21320,vec__21313,opts__9147__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-open?","nav-open?",-1379652582),new cljs.core.Keyword(null,"default-nav-expanded?","default-nav-expanded?",259430037).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"changing?","changing?",1855217746),false], null);
});})(owner,children,opts,map21315,validate__5372__auto__,ufv__,output_schema21317,input_schema21318,input_checker21319,output_checker21320,vec__21313,opts__9147__auto__))
;
om_bootstrap.nav.t21326.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,children,opts,map21315,validate__5372__auto__,ufv__,output_schema21317,input_schema21318,input_checker21319,output_checker21320,vec__21313,opts__9147__auto__){
return (function (_21328){var self__ = this;
var _21328__$1 = this;return self__.meta21327;
});})(owner,children,opts,map21315,validate__5372__auto__,ufv__,output_schema21317,input_schema21318,input_checker21319,output_checker21320,vec__21313,opts__9147__auto__))
;
om_bootstrap.nav.t21326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,children,opts,map21315,validate__5372__auto__,ufv__,output_schema21317,input_schema21318,input_checker21319,output_checker21320,vec__21313,opts__9147__auto__){
return (function (_21328,meta21327__$1){var self__ = this;
var _21328__$1 = this;return (new om_bootstrap.nav.t21326(self__.navbar_STAR_,self__.owner,self__.input_checker21319,self__.map21315,self__.children,self__.owner21293,self__.opts__9147__auto__,self__.G__21321,self__.fnk21316,self__.vec__21313,self__.map21314,self__.input_schema21318,self__.p__21295,self__.validate__5372__auto__,self__.output_schema21317,self__.opts,self__.data__9146__auto__,self__.ufv__,self__.output_checker21320,meta21327__$1));
});})(owner,children,opts,map21315,validate__5372__auto__,ufv__,output_schema21317,input_schema21318,input_checker21319,output_checker21320,vec__21313,opts__9147__auto__))
;
om_bootstrap.nav.__GT_t21326 = ((function (owner,children,opts,map21315,validate__5372__auto__,ufv__,output_schema21317,input_schema21318,input_checker21319,output_checker21320,vec__21313,opts__9147__auto__){
return (function __GT_t21326(navbar_STAR___$1,owner__$1,input_checker21319__$1,map21315__$1,children__$1,owner21293__$1,opts__9147__auto____$1,G__21321__$1,fnk21316__$1,vec__21313__$1,map21314__$1,input_schema21318__$1,p__21295__$1,validate__5372__auto____$1,output_schema21317__$1,opts__$1,data__9146__auto____$1,ufv____$1,output_checker21320__$1,meta21327){return (new om_bootstrap.nav.t21326(navbar_STAR___$1,owner__$1,input_checker21319__$1,map21315__$1,children__$1,owner21293__$1,opts__9147__auto____$1,G__21321__$1,fnk21316__$1,vec__21313__$1,map21314__$1,input_schema21318__$1,p__21295__$1,validate__5372__auto____$1,output_schema21317__$1,opts__$1,data__9146__auto____$1,ufv____$1,output_checker21320__$1,meta21327));
});})(owner,children,opts,map21315,validate__5372__auto__,ufv__,output_schema21317,input_schema21318,input_checker21319,output_checker21320,vec__21313,opts__9147__auto__))
;
}
return (new om_bootstrap.nav.t21326(navbar_STAR_,owner,input_checker21319,map21315,children,owner21293,opts__9147__auto__,G__21321,fnk21316,vec__21313,map21314,input_schema21318,p__21295,validate__5372__auto__,output_schema21317,opts,data__9146__auto__,ufv__,output_checker21320,null));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___21335 = output_checker21320.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___21335))
{var error__5374__auto___21336 = temp__4126__auto___21335;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk21316","fnk21316",-31798097,null),cljs.core.pr_str.call(null,error__5374__auto___21336)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___21336,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21317,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv__,output_schema21317,input_schema21318,input_checker21319,output_checker21320,vec__21313,opts__9147__auto__))
,schema.core.make_fn_schema.call(null,output_schema21317,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21318], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__9147__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner21293,new cljs.core.Keyword(null,"data","data",-232669377),data__9146__auto__], null));
};
var navbar_STAR_ = function (data__9146__auto__,owner21293,var_args){
var p__21295 = null;if (arguments.length > 2) {
  p__21295 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return navbar_STAR___delegate.call(this,data__9146__auto__,owner21293,p__21295);};
navbar_STAR_.cljs$lang$maxFixedArity = 2;
navbar_STAR_.cljs$lang$applyTo = (function (arglist__21337){
var data__9146__auto__ = cljs.core.first(arglist__21337);
arglist__21337 = cljs.core.next(arglist__21337);
var owner21293 = cljs.core.first(arglist__21337);
var p__21295 = cljs.core.rest(arglist__21337);
return navbar_STAR___delegate(data__9146__auto__,owner21293,p__21295);
});
navbar_STAR_.cljs$core$IFn$_invoke$arity$variadic = navbar_STAR___delegate;
return navbar_STAR_;
})()
;
om_bootstrap.nav.__GT_navbar_STAR_ = (function() {
var __GT_navbar_STAR_ = null;
var __GT_navbar_STAR___1 = (function (cursor__9115__auto__){return om.core.build.call(null,om_bootstrap.nav.navbar_STAR_,cursor__9115__auto__);
});
var __GT_navbar_STAR___2 = (function (cursor__9115__auto__,m21294){return om.core.build.call(null,om_bootstrap.nav.navbar_STAR_,cursor__9115__auto__,m21294);
});
__GT_navbar_STAR_ = function(cursor__9115__auto__,m21294){
switch(arguments.length){
case 1:
return __GT_navbar_STAR___1.call(this,cursor__9115__auto__);
case 2:
return __GT_navbar_STAR___2.call(this,cursor__9115__auto__,m21294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_navbar_STAR___1;
__GT_navbar_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_navbar_STAR___2;
return __GT_navbar_STAR_;
})()
;
var ufv___21344 = schema.utils.use_fn_validation;var output_schema21338_21345 = schema.core.Any;var input_schema21339_21346 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.nav.NavBar,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker21340_21347 = schema.core.checker.call(null,input_schema21339_21346);var output_checker21341_21348 = schema.core.checker.call(null,output_schema21338_21345);/**
* Inputs: [opts :- NavBar & children]
* @param {...*} var_args
*/
om_bootstrap.nav.navbar = ((function (ufv___21344,output_schema21338_21345,input_schema21339_21346,input_checker21340_21347,output_checker21341_21348){
return (function() { 
var navbar__delegate = function (G__21342,rest21343){var validate__5372__auto__ = ufv___21344.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___21349 = cljs.core.list_STAR_.call(null,G__21342,rest21343);var temp__4126__auto___21350 = input_checker21340_21347.call(null,args__5373__auto___21349);if(cljs.core.truth_(temp__4126__auto___21350))
{var error__5374__auto___21351 = temp__4126__auto___21350;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),cljs.core.pr_str.call(null,error__5374__auto___21351)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___21351,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___21349,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21339_21346,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var opts = G__21342;var children = rest21343;while(true){
return om_bootstrap.nav.__GT_navbar_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___21352 = output_checker21341_21348.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___21352))
{var error__5374__auto___21353 = temp__4126__auto___21352;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),cljs.core.pr_str.call(null,error__5374__auto___21353)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___21353,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21338_21345,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
};
var navbar = function (G__21342,var_args){
var rest21343 = null;if (arguments.length > 1) {
  rest21343 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return navbar__delegate.call(this,G__21342,rest21343);};
navbar.cljs$lang$maxFixedArity = 1;
navbar.cljs$lang$applyTo = (function (arglist__21354){
var G__21342 = cljs.core.first(arglist__21354);
var rest21343 = cljs.core.rest(arglist__21354);
return navbar__delegate(G__21342,rest21343);
});
navbar.cljs$core$IFn$_invoke$arity$variadic = navbar__delegate;
return navbar;
})()
;})(ufv___21344,output_schema21338_21345,input_schema21339_21346,input_checker21340_21347,output_checker21341_21348))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.nav.navbar),schema.core.make_fn_schema.call(null,output_schema21338_21345,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21339_21346], null)));

//# sourceMappingURL=nav.js.map