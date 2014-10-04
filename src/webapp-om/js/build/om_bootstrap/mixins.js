// Compiled by ClojureScript 0.0-2322
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('schema.core');
goog.require('schema.core');
goog.require('om_tools.mixin');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
var ufv___14685 = schema.utils.use_fn_validation;var output_schema14678_14686 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));var input_schema14679_14687 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"target","target",1893533248,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"event-type","event-type",1960254340,null)),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null))], null);var input_checker14680_14688 = schema.core.checker.call(null,input_schema14679_14687);var output_checker14681_14689 = schema.core.checker.call(null,output_schema14678_14686);/**
* Inputs: [target :- s/Any event-type :- s/Str callback :- (s/=> s/Any s/Any)]
* Returns: (s/=> s/Any)
* 
* Registers the callback on the supplied target for events of type
* `event-type`. Returns a function of no arguments that, when called,
* unregisters the callback.
*/
om_bootstrap.mixins.event_listener = ((function (ufv___14685,output_schema14678_14686,input_schema14679_14687,input_checker14680_14688,output_checker14681_14689){
return (function event_listener(G__14682,G__14683,G__14684){var validate__5372__auto__ = ufv___14685.get_cell();if(cljs.core.truth_(validate__5372__auto__))
{var args__5373__auto___14690 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14682,G__14683,G__14684], null);var temp__4126__auto___14691 = input_checker14680_14688.call(null,args__5373__auto___14690);if(cljs.core.truth_(temp__4126__auto___14691))
{var error__5374__auto___14692 = temp__4126__auto___14691;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.call(null,error__5374__auto___14692)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14692,new cljs.core.Keyword(null,"value","value",305978217),args__5373__auto___14690,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14679_14687,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__5375__auto__ = (function (){var target = G__14682;var event_type = G__14683;var callback = G__14684;while(true){
if(cljs.core.truth_(target.addEventListener))
{target.addEventListener(event_type,callback,false);
return ((function (validate__5372__auto__,ufv___14685,output_schema14678_14686,input_schema14679_14687,input_checker14680_14688,output_checker14681_14689){
return (function (){return target.removeEventListener(event_type,callback,false);
});
;})(validate__5372__auto__,ufv___14685,output_schema14678_14686,input_schema14679_14687,input_checker14680_14688,output_checker14681_14689))
} else
{if(cljs.core.truth_(target.attachEvent))
{var event_type__$1 = ("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type));target.attachEvent(event_type__$1,callback);
return ((function (event_type__$1,validate__5372__auto__,ufv___14685,output_schema14678_14686,input_schema14679_14687,input_checker14680_14688,output_checker14681_14689){
return (function (){return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__5372__auto__,ufv___14685,output_schema14678_14686,input_schema14679_14687,input_checker14680_14688,output_checker14681_14689))
} else
{return ((function (validate__5372__auto__,ufv___14685,output_schema14678_14686,input_schema14679_14687,input_checker14680_14688,output_checker14681_14689){
return (function (){return null;
});
;})(validate__5372__auto__,ufv___14685,output_schema14678_14686,input_schema14679_14687,input_checker14680_14688,output_checker14681_14689))

}
}
break;
}
})();if(cljs.core.truth_(validate__5372__auto__))
{var temp__4126__auto___14693 = output_checker14681_14689.call(null,o__5375__auto__);if(cljs.core.truth_(temp__4126__auto___14693))
{var error__5374__auto___14694 = temp__4126__auto___14693;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.call(null,error__5374__auto___14694)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__5374__auto___14694,new cljs.core.Keyword(null,"value","value",305978217),o__5375__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14678_14686,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__5375__auto__;
});})(ufv___14685,output_schema14678_14686,input_schema14679_14687,input_checker14680_14688,output_checker14681_14689))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema14678_14686,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14679_14687], null)));
/**
* Handles a sequence of listeners for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_listener_mixin = {"set_listener": (function (target14699,event_type14700,callback14701){var this14698 = this;return ((function (this14698){
return (function (owner,target,event_type,callback){var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);return owner.listeners.push(remove_fn);
});})(this14698))
.call(null,this14698,target14699,event_type14700,callback14701);
}), "componentWillUnmount": (function (){var this14697 = this;return ((function (this14697){
return (function (owner){return owner.listeners.map(((function (this14697){
return (function (p1__14695_SHARP_){return p1__14695_SHARP_.call(null);
});})(this14697))
);
});})(this14697))
.call(null,this14697);
}), "componentWillMount": (function (){var this14696 = this;return ((function (this14696){
return (function (owner){return owner.listeners = [];
});})(this14696))
.call(null,this14696);
})};
/**
* Handles a sequence of timeouts for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_timeout_mixin = {"set_timeout": (function (f14706,timeout14707){var this14705 = this;return ((function (this14705){
return (function (owner,f,timeout){var timeout__$1 = setTimeout(f,timeout);return owner.timeouts.push(timeout__$1);
});})(this14705))
.call(null,this14705,f14706,timeout14707);
}), "componentWillUnmount": (function (){var this14704 = this;return ((function (this14704){
return (function (owner){return owner.timeouts.map(((function (this14704){
return (function (p1__14702_SHARP_){return clearTimeout(p1__14702_SHARP_);
});})(this14704))
);
});})(this14704))
.call(null,this14704);
}), "componentWillMount": (function (){var this14703 = this;return ((function (this14703){
return (function (owner){return owner.timeouts = [];
});})(this14703))
.call(null,this14703);
})};
/**
* Accepts two DOM elements; returns true if the supplied node is
* nested inside the supplied root, false otherwise.
*/
om_bootstrap.mixins.in_root_QMARK_ = (function in_root_QMARK_(node,root){var node__$1 = node;while(true){
if((node__$1 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,root,node__$1))
{return true;
} else
{{
var G__14708 = node__$1.parentNode;
node__$1 = G__14708;
continue;
}

}
}
break;
}
});
om_bootstrap.mixins.ESCAPE_KEY = (27);
/**
* For dropdowns, binds a handler for that sets the dropdown-mixin's
* `:open?` state to false if the user clicks outside the owning
* component OR hits the escape key.
*/
om_bootstrap.mixins.bind_root_close_handlers_BANG_ = (function bind_root_close_handlers_BANG_(owner){var set_state = (owner["setDropdownState"]);return owner.dropdownListeners = [om_bootstrap.mixins.event_listener.call(null,document,"click",((function (set_state){
return (function (e){if(om_bootstrap.mixins.in_root_QMARK_.call(null,e.target,om.core.get_node.call(null,owner)))
{return null;
} else
{return set_state.call(null,false);
}
});})(set_state))
),om_bootstrap.mixins.event_listener.call(null,document,"keyup",((function (set_state){
return (function (e){if(cljs.core._EQ_.call(null,om_bootstrap.mixins.ESCAPE_KEY,e.keyCode))
{return set_state.call(null,false);
} else
{return null;
}
});})(set_state))
)];
});
/**
* If they're present on the owning object, removes the listeners
* registered by the dropdown mixin.
*/
om_bootstrap.mixins.unbind_root_close_handlers_BANG_ = (function unbind_root_close_handlers_BANG_(owner){var temp__4126__auto__ = owner.dropdownListeners;if(cljs.core.truth_(temp__4126__auto__))
{var listeners = temp__4126__auto__;cljs.core.map.call(null,((function (listeners,temp__4126__auto__){
return (function (p1__14709_SHARP_){return p1__14709_SHARP_.call(null);
});})(listeners,temp__4126__auto__))
,listeners);
return owner.dropdownListeners = null;
} else
{return null;
}
});
/**
* Mixin that manages a single piece of state - :open?. If a user
* clicks outside the component's owning dom element OR hits the escape
* key, the state will jump back to false.
* 
* Down the road this may need to register a callback when the state
* changes.
*/
om_bootstrap.mixins.dropdown_mixin = {"setDropdownState": (function (open_QMARK_14714){var this14713 = this;return ((function (this14713){
return (function (owner,open_QMARK_){if(cljs.core.truth_(open_QMARK_))
{om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else
{om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}
return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this14713))
.call(null,this14713,open_QMARK_14714);
}), "isDropdownOpen": (function (){var this14712 = this;return ((function (this14712){
return (function (owner){return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this14712))
.call(null,this14712);
}), "componentWillUnmount": (function (){var this14711 = this;return ((function (this14711){
return (function (owner){return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this14711))
.call(null,this14711);
}), "getInitialState": (function (){var this14710 = this;return ((function (this14710){
return (function (_){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this14710))
.call(null,this14710);
})};

//# sourceMappingURL=mixins.js.map