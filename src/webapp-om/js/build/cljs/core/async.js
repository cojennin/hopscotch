// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14718 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14718 = (function (f,fn_handler,meta14719){
this.f = f;
this.fn_handler = fn_handler;
this.meta14719 = meta14719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14718.cljs$lang$type = true;
cljs.core.async.t14718.cljs$lang$ctorStr = "cljs.core.async/t14718";
cljs.core.async.t14718.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t14718");
});
cljs.core.async.t14718.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14718.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14718.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14720){var self__ = this;
var _14720__$1 = this;return self__.meta14719;
});
cljs.core.async.t14718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14720,meta14719__$1){var self__ = this;
var _14720__$1 = this;return (new cljs.core.async.t14718(self__.f,self__.fn_handler,meta14719__$1));
});
cljs.core.async.__GT_t14718 = (function __GT_t14718(f__$1,fn_handler__$1,meta14719){return (new cljs.core.async.t14718(f__$1,fn_handler__$1,meta14719));
});
}
return (new cljs.core.async.t14718(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14722 = buff;if(G__14722)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__14722.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14722.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14722);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14722);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_14723 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14723);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_14723,ret){
return (function (){return fn1.call(null,val_14723);
});})(val_14723,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3546__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___14724 = n;var x_14725 = (0);while(true){
if((x_14725 < n__4414__auto___14724))
{(a[x_14725] = (0));
{
var G__14726 = (x_14725 + (1));
x_14725 = G__14726;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__14727 = (i + (1));
i = G__14727;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14731 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14731 = (function (flag,alt_flag,meta14732){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14732 = meta14732;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14731.cljs$lang$type = true;
cljs.core.async.t14731.cljs$lang$ctorStr = "cljs.core.async/t14731";
cljs.core.async.t14731.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t14731");
});})(flag))
;
cljs.core.async.t14731.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14731.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t14731.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t14731.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14733){var self__ = this;
var _14733__$1 = this;return self__.meta14732;
});})(flag))
;
cljs.core.async.t14731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14733,meta14732__$1){var self__ = this;
var _14733__$1 = this;return (new cljs.core.async.t14731(self__.flag,self__.alt_flag,meta14732__$1));
});})(flag))
;
cljs.core.async.__GT_t14731 = ((function (flag){
return (function __GT_t14731(flag__$1,alt_flag__$1,meta14732){return (new cljs.core.async.t14731(flag__$1,alt_flag__$1,meta14732));
});})(flag))
;
}
return (new cljs.core.async.t14731(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14737 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14737 = (function (cb,flag,alt_handler,meta14738){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14738 = meta14738;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14737.cljs$lang$type = true;
cljs.core.async.t14737.cljs$lang$ctorStr = "cljs.core.async/t14737";
cljs.core.async.t14737.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t14737");
});
cljs.core.async.t14737.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14737.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14737.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14739){var self__ = this;
var _14739__$1 = this;return self__.meta14738;
});
cljs.core.async.t14737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14739,meta14738__$1){var self__ = this;
var _14739__$1 = this;return (new cljs.core.async.t14737(self__.cb,self__.flag,self__.alt_handler,meta14738__$1));
});
cljs.core.async.__GT_t14737 = (function __GT_t14737(cb__$1,flag__$1,alt_handler__$1,meta14738){return (new cljs.core.async.t14737(cb__$1,flag__$1,alt_handler__$1,meta14738));
});
}
return (new cljs.core.async.t14737(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14740_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14740_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3558__auto__ = wport;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__14741 = (i + (1));
i = G__14741;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3558__auto__ = ret;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3546__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3546__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__14742){var map__14744 = p__14742;var map__14744__$1 = ((cljs.core.seq_QMARK_.call(null,map__14744))?cljs.core.apply.call(null,cljs.core.hash_map,map__14744):map__14744);var opts = map__14744__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__14742 = null;if (arguments.length > 1) {
  p__14742 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14742);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14745){
var ports = cljs.core.first(arglist__14745);
var p__14742 = cljs.core.rest(arglist__14745);
return alts_BANG___delegate(ports,p__14742);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14753 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14753 = (function (ch,f,map_LT_,meta14754){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14754 = meta14754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14753.cljs$lang$type = true;
cljs.core.async.t14753.cljs$lang$ctorStr = "cljs.core.async/t14753";
cljs.core.async.t14753.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t14753");
});
cljs.core.async.t14753.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14753.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14753.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14753.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14756 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14756 = (function (fn1,_,meta14754,ch,f,map_LT_,meta14757){
this.fn1 = fn1;
this._ = _;
this.meta14754 = meta14754;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14757 = meta14757;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14756.cljs$lang$type = true;
cljs.core.async.t14756.cljs$lang$ctorStr = "cljs.core.async/t14756";
cljs.core.async.t14756.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t14756");
});})(___$1))
;
cljs.core.async.t14756.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14756.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14756.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14756.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14746_SHARP_){return f1.call(null,(((p1__14746_SHARP_ == null))?null:self__.f.call(null,p1__14746_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14756.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14758){var self__ = this;
var _14758__$1 = this;return self__.meta14757;
});})(___$1))
;
cljs.core.async.t14756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14758,meta14757__$1){var self__ = this;
var _14758__$1 = this;return (new cljs.core.async.t14756(self__.fn1,self__._,self__.meta14754,self__.ch,self__.f,self__.map_LT_,meta14757__$1));
});})(___$1))
;
cljs.core.async.__GT_t14756 = ((function (___$1){
return (function __GT_t14756(fn1__$1,___$2,meta14754__$1,ch__$2,f__$2,map_LT___$2,meta14757){return (new cljs.core.async.t14756(fn1__$1,___$2,meta14754__$1,ch__$2,f__$2,map_LT___$2,meta14757));
});})(___$1))
;
}
return (new cljs.core.async.t14756(fn1,___$1,self__.meta14754,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3546__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14753.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14753.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14755){var self__ = this;
var _14755__$1 = this;return self__.meta14754;
});
cljs.core.async.t14753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14755,meta14754__$1){var self__ = this;
var _14755__$1 = this;return (new cljs.core.async.t14753(self__.ch,self__.f,self__.map_LT_,meta14754__$1));
});
cljs.core.async.__GT_t14753 = (function __GT_t14753(ch__$1,f__$1,map_LT___$1,meta14754){return (new cljs.core.async.t14753(ch__$1,f__$1,map_LT___$1,meta14754));
});
}
return (new cljs.core.async.t14753(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14762 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14762 = (function (ch,f,map_GT_,meta14763){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14763 = meta14763;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14762.cljs$lang$type = true;
cljs.core.async.t14762.cljs$lang$ctorStr = "cljs.core.async/t14762";
cljs.core.async.t14762.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t14762");
});
cljs.core.async.t14762.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14762.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14762.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14762.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14762.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14762.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14764){var self__ = this;
var _14764__$1 = this;return self__.meta14763;
});
cljs.core.async.t14762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14764,meta14763__$1){var self__ = this;
var _14764__$1 = this;return (new cljs.core.async.t14762(self__.ch,self__.f,self__.map_GT_,meta14763__$1));
});
cljs.core.async.__GT_t14762 = (function __GT_t14762(ch__$1,f__$1,map_GT___$1,meta14763){return (new cljs.core.async.t14762(ch__$1,f__$1,map_GT___$1,meta14763));
});
}
return (new cljs.core.async.t14762(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14768 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14768 = (function (ch,p,filter_GT_,meta14769){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14769 = meta14769;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14768.cljs$lang$type = true;
cljs.core.async.t14768.cljs$lang$ctorStr = "cljs.core.async/t14768";
cljs.core.async.t14768.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t14768");
});
cljs.core.async.t14768.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14768.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14768.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14768.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14768.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14768.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14770){var self__ = this;
var _14770__$1 = this;return self__.meta14769;
});
cljs.core.async.t14768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14770,meta14769__$1){var self__ = this;
var _14770__$1 = this;return (new cljs.core.async.t14768(self__.ch,self__.p,self__.filter_GT_,meta14769__$1));
});
cljs.core.async.__GT_t14768 = (function __GT_t14768(ch__$1,p__$1,filter_GT___$1,meta14769){return (new cljs.core.async.t14768(ch__$1,p__$1,filter_GT___$1,meta14769));
});
}
return (new cljs.core.async.t14768(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11628__auto___14853 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11628__auto___14853,out){
return (function (){var f__11629__auto__ = (function (){var switch__11563__auto__ = ((function (c__11628__auto___14853,out){
return (function (state_14832){var state_val_14833 = (state_14832[(1)]);if((state_val_14833 === (7)))
{var inst_14828 = (state_14832[(2)]);var state_14832__$1 = state_14832;var statearr_14834_14854 = state_14832__$1;(statearr_14834_14854[(2)] = inst_14828);
(statearr_14834_14854[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14833 === (1)))
{var state_14832__$1 = state_14832;var statearr_14835_14855 = state_14832__$1;(statearr_14835_14855[(2)] = null);
(statearr_14835_14855[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14833 === (4)))
{var inst_14814 = (state_14832[(7)]);var inst_14814__$1 = (state_14832[(2)]);var inst_14815 = (inst_14814__$1 == null);var state_14832__$1 = (function (){var statearr_14836 = state_14832;(statearr_14836[(7)] = inst_14814__$1);
return statearr_14836;
})();if(cljs.core.truth_(inst_14815))
{var statearr_14837_14856 = state_14832__$1;(statearr_14837_14856[(1)] = (5));
} else
{var statearr_14838_14857 = state_14832__$1;(statearr_14838_14857[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14833 === (6)))
{var inst_14814 = (state_14832[(7)]);var inst_14819 = p.call(null,inst_14814);var state_14832__$1 = state_14832;if(cljs.core.truth_(inst_14819))
{var statearr_14839_14858 = state_14832__$1;(statearr_14839_14858[(1)] = (8));
} else
{var statearr_14840_14859 = state_14832__$1;(statearr_14840_14859[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14833 === (3)))
{var inst_14830 = (state_14832[(2)]);var state_14832__$1 = state_14832;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14832__$1,inst_14830);
} else
{if((state_val_14833 === (2)))
{var state_14832__$1 = state_14832;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14832__$1,(4),ch);
} else
{if((state_val_14833 === (11)))
{var inst_14822 = (state_14832[(2)]);var state_14832__$1 = state_14832;var statearr_14841_14860 = state_14832__$1;(statearr_14841_14860[(2)] = inst_14822);
(statearr_14841_14860[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14833 === (9)))
{var state_14832__$1 = state_14832;var statearr_14842_14861 = state_14832__$1;(statearr_14842_14861[(2)] = null);
(statearr_14842_14861[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14833 === (5)))
{var inst_14817 = cljs.core.async.close_BANG_.call(null,out);var state_14832__$1 = state_14832;var statearr_14843_14862 = state_14832__$1;(statearr_14843_14862[(2)] = inst_14817);
(statearr_14843_14862[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14833 === (10)))
{var inst_14825 = (state_14832[(2)]);var state_14832__$1 = (function (){var statearr_14844 = state_14832;(statearr_14844[(8)] = inst_14825);
return statearr_14844;
})();var statearr_14845_14863 = state_14832__$1;(statearr_14845_14863[(2)] = null);
(statearr_14845_14863[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14833 === (8)))
{var inst_14814 = (state_14832[(7)]);var state_14832__$1 = state_14832;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14832__$1,(11),out,inst_14814);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11628__auto___14853,out))
;return ((function (switch__11563__auto__,c__11628__auto___14853,out){
return (function() {
var state_machine__11564__auto__ = null;
var state_machine__11564__auto____0 = (function (){var statearr_14849 = [null,null,null,null,null,null,null,null,null];(statearr_14849[(0)] = state_machine__11564__auto__);
(statearr_14849[(1)] = (1));
return statearr_14849;
});
var state_machine__11564__auto____1 = (function (state_14832){while(true){
var ret_value__11565__auto__ = (function (){try{while(true){
var result__11566__auto__ = switch__11563__auto__.call(null,state_14832);if(cljs.core.keyword_identical_QMARK_.call(null,result__11566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11566__auto__;
}
break;
}
}catch (e14850){if((e14850 instanceof Object))
{var ex__11567__auto__ = e14850;var statearr_14851_14864 = state_14832;(statearr_14851_14864[(5)] = ex__11567__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14832);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14850;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14865 = state_14832;
state_14832 = G__14865;
continue;
}
} else
{return ret_value__11565__auto__;
}
break;
}
});
state_machine__11564__auto__ = function(state_14832){
switch(arguments.length){
case 0:
return state_machine__11564__auto____0.call(this);
case 1:
return state_machine__11564__auto____1.call(this,state_14832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11564__auto____0;
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11564__auto____1;
return state_machine__11564__auto__;
})()
;})(switch__11563__auto__,c__11628__auto___14853,out))
})();var state__11630__auto__ = (function (){var statearr_14852 = f__11629__auto__.call(null);(statearr_14852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11628__auto___14853);
return statearr_14852;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11630__auto__);
});})(c__11628__auto___14853,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11628__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11628__auto__){
return (function (){var f__11629__auto__ = (function (){var switch__11563__auto__ = ((function (c__11628__auto__){
return (function (state_15017){var state_val_15018 = (state_15017[(1)]);if((state_val_15018 === (7)))
{var inst_15013 = (state_15017[(2)]);var state_15017__$1 = state_15017;var statearr_15019_15056 = state_15017__$1;(statearr_15019_15056[(2)] = inst_15013);
(statearr_15019_15056[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15018 === (20)))
{var inst_14988 = (state_15017[(7)]);var inst_14999 = (state_15017[(2)]);var inst_15000 = cljs.core.next.call(null,inst_14988);var inst_14974 = inst_15000;var inst_14975 = null;var inst_14976 = (0);var inst_14977 = (0);var state_15017__$1 = (function (){var statearr_15020 = state_15017;(statearr_15020[(8)] = inst_14976);
(statearr_15020[(9)] = inst_14977);
(statearr_15020[(10)] = inst_14974);
(statearr_15020[(11)] = inst_14975);
(statearr_15020[(12)] = inst_14999);
return statearr_15020;
})();var statearr_15021_15057 = state_15017__$1;(statearr_15021_15057[(2)] = null);
(statearr_15021_15057[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15018 === (1)))
{var state_15017__$1 = state_15017;var statearr_15022_15058 = state_15017__$1;(statearr_15022_15058[(2)] = null);
(statearr_15022_15058[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15018 === (4)))
{var inst_14963 = (state_15017[(13)]);var inst_14963__$1 = (state_15017[(2)]);var inst_14964 = (inst_14963__$1 == null);var state_15017__$1 = (function (){var statearr_15026 = state_15017;(statearr_15026[(13)] = inst_14963__$1);
return statearr_15026;
})();if(cljs.core.truth_(inst_14964))
{var statearr_15027_15059 = state_15017__$1;(statearr_15027_15059[(1)] = (5));
} else
{var statearr_15028_15060 = state_15017__$1;(statearr_15028_15060[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15018 === (15)))
{var state_15017__$1 = state_15017;var statearr_15029_15061 = state_15017__$1;(statearr_15029_15061[(2)] = null);
(statearr_15029_15061[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15018 === (13)))
{var inst_14976 = (state_15017[(8)]);var inst_14977 = (state_15017[(9)]);var inst_14974 = (state_15017[(10)]);var inst_14975 = (state_15017[(11)]);var inst_14984 = (state_15017[(2)]);var inst_14985 = (inst_14977 + (1));var tmp15023 = inst_14976;var tmp15024 = inst_14974;var tmp15025 = inst_14975;var inst_14974__$1 = tmp15024;var inst_14975__$1 = tmp15025;var inst_14976__$1 = tmp15023;var inst_14977__$1 = inst_14985;var state_15017__$1 = (function (){var statearr_15030 = state_15017;(statearr_15030[(8)] = inst_14976__$1);
(statearr_15030[(9)] = inst_14977__$1);
(statearr_15030[(10)] = inst_14974__$1);
(statearr_15030[(14)] = inst_14984);
(statearr_15030[(11)] = inst_14975__$1);
return statearr_15030;
})();var statearr_15031_15062 = state_15017__$1;(statearr_15031_15062[(2)] = null);
(statearr_15031_15062[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15018 === (6)))
{var inst_14963 = (state_15017[(13)]);var inst_14968 = f.call(null,inst_14963);var inst_14973 = cljs.core.seq.call(null,inst_14968);var inst_14974 = inst_14973;var inst_14975 = null;var inst_14976 = (0);var inst_14977 = (0);var state_15017__$1 = (function (){var statearr_15032 = state_15017;(statearr_15032[(8)] = inst_14976);
(statearr_15032[(9)] = inst_14977);
(statearr_15032[(10)] = inst_14974);
(statearr_15032[(11)] = inst_14975);
return statearr_15032;
})();var statearr_15033_15063 = state_15017__$1;(statearr_15033_15063[(2)] = null);
(statearr_15033_15063[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15018 === (17)))
{var inst_14988 = (state_15017[(7)]);var inst_14992 = cljs.core.chunk_first.call(null,inst_14988);var inst_14993 = cljs.core.chunk_rest.call(null,inst_14988);var inst_14994 = cljs.core.count.call(null,inst_14992);var inst_14974 = inst_14993;var inst_14975 = inst_14992;var inst_14976 = inst_14994;var inst_14977 = (0);var state_15017__$1 = (function (){var statearr_15034 = state_15017;(statearr_15034[(8)] = inst_14976);
(statearr_15034[(9)] = inst_14977);
(statearr_15034[(10)] = inst_14974);
(statearr_15034[(11)] = inst_14975);
return statearr_15034;
})();var statearr_15035_15064 = state_15017__$1;(statearr_15035_15064[(2)] = null);
(statearr_15035_15064[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15018 === (3)))
{var inst_15015 = (state_15017[(2)]);var state_15017__$1 = state_15017;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15017__$1,inst_15015);
} else
{if((state_val_15018 === (12)))
{var inst_15008 = (state_15017[(2)]);var state_15017__$1 = state_15017;var statearr_15036_15065 = state_15017__$1;(statearr_15036_15065[(2)] = inst_15008);
(statearr_15036_15065[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15018 === (2)))
{var state_15017__$1 = state_15017;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15017__$1,(4),in$);
} else
{if((state_val_15018 === (19)))
{var inst_15003 = (state_15017[(2)]);var state_15017__$1 = state_15017;var statearr_15037_15066 = state_15017__$1;(statearr_15037_15066[(2)] = inst_15003);
(statearr_15037_15066[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15018 === (11)))
{var inst_14974 = (state_15017[(10)]);var inst_14988 = (state_15017[(7)]);var inst_14988__$1 = cljs.core.seq.call(null,inst_14974);var state_15017__$1 = (function (){var statearr_15038 = state_15017;(statearr_15038[(7)] = inst_14988__$1);
return statearr_15038;
})();if(inst_14988__$1)
{var statearr_15039_15067 = state_15017__$1;(statearr_15039_15067[(1)] = (14));
} else
{var statearr_15040_15068 = state_15017__$1;(statearr_15040_15068[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15018 === (9)))
{var inst_15010 = (state_15017[(2)]);var state_15017__$1 = (function (){var statearr_15041 = state_15017;(statearr_15041[(15)] = inst_15010);
return statearr_15041;
})();var statearr_15042_15069 = state_15017__$1;(statearr_15042_15069[(2)] = null);
(statearr_15042_15069[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15018 === (5)))
{var inst_14966 = cljs.core.async.close_BANG_.call(null,out);var state_15017__$1 = state_15017;var statearr_15043_15070 = state_15017__$1;(statearr_15043_15070[(2)] = inst_14966);
(statearr_15043_15070[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15018 === (14)))
{var inst_14988 = (state_15017[(7)]);var inst_14990 = cljs.core.chunked_seq_QMARK_.call(null,inst_14988);var state_15017__$1 = state_15017;if(inst_14990)
{var statearr_15044_15071 = state_15017__$1;(statearr_15044_15071[(1)] = (17));
} else
{var statearr_15045_15072 = state_15017__$1;(statearr_15045_15072[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15018 === (16)))
{var inst_15006 = (state_15017[(2)]);var state_15017__$1 = state_15017;var statearr_15046_15073 = state_15017__$1;(statearr_15046_15073[(2)] = inst_15006);
(statearr_15046_15073[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15018 === (10)))
{var inst_14977 = (state_15017[(9)]);var inst_14975 = (state_15017[(11)]);var inst_14982 = cljs.core._nth.call(null,inst_14975,inst_14977);var state_15017__$1 = state_15017;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15017__$1,(13),out,inst_14982);
} else
{if((state_val_15018 === (18)))
{var inst_14988 = (state_15017[(7)]);var inst_14997 = cljs.core.first.call(null,inst_14988);var state_15017__$1 = state_15017;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15017__$1,(20),out,inst_14997);
} else
{if((state_val_15018 === (8)))
{var inst_14976 = (state_15017[(8)]);var inst_14977 = (state_15017[(9)]);var inst_14979 = (inst_14977 < inst_14976);var inst_14980 = inst_14979;var state_15017__$1 = state_15017;if(cljs.core.truth_(inst_14980))
{var statearr_15047_15074 = state_15017__$1;(statearr_15047_15074[(1)] = (10));
} else
{var statearr_15048_15075 = state_15017__$1;(statearr_15048_15075[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11628__auto__))
;return ((function (switch__11563__auto__,c__11628__auto__){
return (function() {
var state_machine__11564__auto__ = null;
var state_machine__11564__auto____0 = (function (){var statearr_15052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15052[(0)] = state_machine__11564__auto__);
(statearr_15052[(1)] = (1));
return statearr_15052;
});
var state_machine__11564__auto____1 = (function (state_15017){while(true){
var ret_value__11565__auto__ = (function (){try{while(true){
var result__11566__auto__ = switch__11563__auto__.call(null,state_15017);if(cljs.core.keyword_identical_QMARK_.call(null,result__11566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11566__auto__;
}
break;
}
}catch (e15053){if((e15053 instanceof Object))
{var ex__11567__auto__ = e15053;var statearr_15054_15076 = state_15017;(statearr_15054_15076[(5)] = ex__11567__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15017);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15053;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15077 = state_15017;
state_15017 = G__15077;
continue;
}
} else
{return ret_value__11565__auto__;
}
break;
}
});
state_machine__11564__auto__ = function(state_15017){
switch(arguments.length){
case 0:
return state_machine__11564__auto____0.call(this);
case 1:
return state_machine__11564__auto____1.call(this,state_15017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11564__auto____0;
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11564__auto____1;
return state_machine__11564__auto__;
})()
;})(switch__11563__auto__,c__11628__auto__))
})();var state__11630__auto__ = (function (){var statearr_15055 = f__11629__auto__.call(null);(statearr_15055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11628__auto__);
return statearr_15055;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11630__auto__);
});})(c__11628__auto__))
);
return c__11628__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__11628__auto___15158 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11628__auto___15158){
return (function (){var f__11629__auto__ = (function (){var switch__11563__auto__ = ((function (c__11628__auto___15158){
return (function (state_15137){var state_val_15138 = (state_15137[(1)]);if((state_val_15138 === (7)))
{var inst_15133 = (state_15137[(2)]);var state_15137__$1 = state_15137;var statearr_15139_15159 = state_15137__$1;(statearr_15139_15159[(2)] = inst_15133);
(statearr_15139_15159[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15138 === (1)))
{var state_15137__$1 = state_15137;var statearr_15140_15160 = state_15137__$1;(statearr_15140_15160[(2)] = null);
(statearr_15140_15160[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15138 === (4)))
{var inst_15120 = (state_15137[(7)]);var inst_15120__$1 = (state_15137[(2)]);var inst_15121 = (inst_15120__$1 == null);var state_15137__$1 = (function (){var statearr_15141 = state_15137;(statearr_15141[(7)] = inst_15120__$1);
return statearr_15141;
})();if(cljs.core.truth_(inst_15121))
{var statearr_15142_15161 = state_15137__$1;(statearr_15142_15161[(1)] = (5));
} else
{var statearr_15143_15162 = state_15137__$1;(statearr_15143_15162[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15138 === (6)))
{var inst_15120 = (state_15137[(7)]);var state_15137__$1 = state_15137;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15137__$1,(11),to,inst_15120);
} else
{if((state_val_15138 === (3)))
{var inst_15135 = (state_15137[(2)]);var state_15137__$1 = state_15137;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15137__$1,inst_15135);
} else
{if((state_val_15138 === (2)))
{var state_15137__$1 = state_15137;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15137__$1,(4),from);
} else
{if((state_val_15138 === (11)))
{var inst_15130 = (state_15137[(2)]);var state_15137__$1 = (function (){var statearr_15144 = state_15137;(statearr_15144[(8)] = inst_15130);
return statearr_15144;
})();var statearr_15145_15163 = state_15137__$1;(statearr_15145_15163[(2)] = null);
(statearr_15145_15163[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15138 === (9)))
{var state_15137__$1 = state_15137;var statearr_15146_15164 = state_15137__$1;(statearr_15146_15164[(2)] = null);
(statearr_15146_15164[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15138 === (5)))
{var state_15137__$1 = state_15137;if(cljs.core.truth_(close_QMARK_))
{var statearr_15147_15165 = state_15137__$1;(statearr_15147_15165[(1)] = (8));
} else
{var statearr_15148_15166 = state_15137__$1;(statearr_15148_15166[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15138 === (10)))
{var inst_15127 = (state_15137[(2)]);var state_15137__$1 = state_15137;var statearr_15149_15167 = state_15137__$1;(statearr_15149_15167[(2)] = inst_15127);
(statearr_15149_15167[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15138 === (8)))
{var inst_15124 = cljs.core.async.close_BANG_.call(null,to);var state_15137__$1 = state_15137;var statearr_15150_15168 = state_15137__$1;(statearr_15150_15168[(2)] = inst_15124);
(statearr_15150_15168[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11628__auto___15158))
;return ((function (switch__11563__auto__,c__11628__auto___15158){
return (function() {
var state_machine__11564__auto__ = null;
var state_machine__11564__auto____0 = (function (){var statearr_15154 = [null,null,null,null,null,null,null,null,null];(statearr_15154[(0)] = state_machine__11564__auto__);
(statearr_15154[(1)] = (1));
return statearr_15154;
});
var state_machine__11564__auto____1 = (function (state_15137){while(true){
var ret_value__11565__auto__ = (function (){try{while(true){
var result__11566__auto__ = switch__11563__auto__.call(null,state_15137);if(cljs.core.keyword_identical_QMARK_.call(null,result__11566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11566__auto__;
}
break;
}
}catch (e15155){if((e15155 instanceof Object))
{var ex__11567__auto__ = e15155;var statearr_15156_15169 = state_15137;(statearr_15156_15169[(5)] = ex__11567__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15137);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15155;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15170 = state_15137;
state_15137 = G__15170;
continue;
}
} else
{return ret_value__11565__auto__;
}
break;
}
});
state_machine__11564__auto__ = function(state_15137){
switch(arguments.length){
case 0:
return state_machine__11564__auto____0.call(this);
case 1:
return state_machine__11564__auto____1.call(this,state_15137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11564__auto____0;
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11564__auto____1;
return state_machine__11564__auto__;
})()
;})(switch__11563__auto__,c__11628__auto___15158))
})();var state__11630__auto__ = (function (){var statearr_15157 = f__11629__auto__.call(null);(statearr_15157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11628__auto___15158);
return statearr_15157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11630__auto__);
});})(c__11628__auto___15158))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11628__auto___15257 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11628__auto___15257,tc,fc){
return (function (){var f__11629__auto__ = (function (){var switch__11563__auto__ = ((function (c__11628__auto___15257,tc,fc){
return (function (state_15235){var state_val_15236 = (state_15235[(1)]);if((state_val_15236 === (7)))
{var inst_15231 = (state_15235[(2)]);var state_15235__$1 = state_15235;var statearr_15237_15258 = state_15235__$1;(statearr_15237_15258[(2)] = inst_15231);
(statearr_15237_15258[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15236 === (1)))
{var state_15235__$1 = state_15235;var statearr_15238_15259 = state_15235__$1;(statearr_15238_15259[(2)] = null);
(statearr_15238_15259[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15236 === (4)))
{var inst_15216 = (state_15235[(7)]);var inst_15216__$1 = (state_15235[(2)]);var inst_15217 = (inst_15216__$1 == null);var state_15235__$1 = (function (){var statearr_15239 = state_15235;(statearr_15239[(7)] = inst_15216__$1);
return statearr_15239;
})();if(cljs.core.truth_(inst_15217))
{var statearr_15240_15260 = state_15235__$1;(statearr_15240_15260[(1)] = (5));
} else
{var statearr_15241_15261 = state_15235__$1;(statearr_15241_15261[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15236 === (6)))
{var inst_15216 = (state_15235[(7)]);var inst_15222 = p.call(null,inst_15216);var state_15235__$1 = state_15235;if(cljs.core.truth_(inst_15222))
{var statearr_15242_15262 = state_15235__$1;(statearr_15242_15262[(1)] = (9));
} else
{var statearr_15243_15263 = state_15235__$1;(statearr_15243_15263[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15236 === (3)))
{var inst_15233 = (state_15235[(2)]);var state_15235__$1 = state_15235;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15235__$1,inst_15233);
} else
{if((state_val_15236 === (2)))
{var state_15235__$1 = state_15235;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15235__$1,(4),ch);
} else
{if((state_val_15236 === (11)))
{var inst_15216 = (state_15235[(7)]);var inst_15226 = (state_15235[(2)]);var state_15235__$1 = state_15235;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15235__$1,(8),inst_15226,inst_15216);
} else
{if((state_val_15236 === (9)))
{var state_15235__$1 = state_15235;var statearr_15244_15264 = state_15235__$1;(statearr_15244_15264[(2)] = tc);
(statearr_15244_15264[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15236 === (5)))
{var inst_15219 = cljs.core.async.close_BANG_.call(null,tc);var inst_15220 = cljs.core.async.close_BANG_.call(null,fc);var state_15235__$1 = (function (){var statearr_15245 = state_15235;(statearr_15245[(8)] = inst_15219);
return statearr_15245;
})();var statearr_15246_15265 = state_15235__$1;(statearr_15246_15265[(2)] = inst_15220);
(statearr_15246_15265[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15236 === (10)))
{var state_15235__$1 = state_15235;var statearr_15247_15266 = state_15235__$1;(statearr_15247_15266[(2)] = fc);
(statearr_15247_15266[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15236 === (8)))
{var inst_15228 = (state_15235[(2)]);var state_15235__$1 = (function (){var statearr_15248 = state_15235;(statearr_15248[(9)] = inst_15228);
return statearr_15248;
})();var statearr_15249_15267 = state_15235__$1;(statearr_15249_15267[(2)] = null);
(statearr_15249_15267[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11628__auto___15257,tc,fc))
;return ((function (switch__11563__auto__,c__11628__auto___15257,tc,fc){
return (function() {
var state_machine__11564__auto__ = null;
var state_machine__11564__auto____0 = (function (){var statearr_15253 = [null,null,null,null,null,null,null,null,null,null];(statearr_15253[(0)] = state_machine__11564__auto__);
(statearr_15253[(1)] = (1));
return statearr_15253;
});
var state_machine__11564__auto____1 = (function (state_15235){while(true){
var ret_value__11565__auto__ = (function (){try{while(true){
var result__11566__auto__ = switch__11563__auto__.call(null,state_15235);if(cljs.core.keyword_identical_QMARK_.call(null,result__11566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11566__auto__;
}
break;
}
}catch (e15254){if((e15254 instanceof Object))
{var ex__11567__auto__ = e15254;var statearr_15255_15268 = state_15235;(statearr_15255_15268[(5)] = ex__11567__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15235);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15254;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15269 = state_15235;
state_15235 = G__15269;
continue;
}
} else
{return ret_value__11565__auto__;
}
break;
}
});
state_machine__11564__auto__ = function(state_15235){
switch(arguments.length){
case 0:
return state_machine__11564__auto____0.call(this);
case 1:
return state_machine__11564__auto____1.call(this,state_15235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11564__auto____0;
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11564__auto____1;
return state_machine__11564__auto__;
})()
;})(switch__11563__auto__,c__11628__auto___15257,tc,fc))
})();var state__11630__auto__ = (function (){var statearr_15256 = f__11629__auto__.call(null);(statearr_15256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11628__auto___15257);
return statearr_15256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11630__auto__);
});})(c__11628__auto___15257,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11628__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11628__auto__){
return (function (){var f__11629__auto__ = (function (){var switch__11563__auto__ = ((function (c__11628__auto__){
return (function (state_15316){var state_val_15317 = (state_15316[(1)]);if((state_val_15317 === (7)))
{var inst_15312 = (state_15316[(2)]);var state_15316__$1 = state_15316;var statearr_15318_15334 = state_15316__$1;(statearr_15318_15334[(2)] = inst_15312);
(statearr_15318_15334[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15317 === (6)))
{var inst_15302 = (state_15316[(7)]);var inst_15305 = (state_15316[(8)]);var inst_15309 = f.call(null,inst_15302,inst_15305);var inst_15302__$1 = inst_15309;var state_15316__$1 = (function (){var statearr_15319 = state_15316;(statearr_15319[(7)] = inst_15302__$1);
return statearr_15319;
})();var statearr_15320_15335 = state_15316__$1;(statearr_15320_15335[(2)] = null);
(statearr_15320_15335[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15317 === (5)))
{var inst_15302 = (state_15316[(7)]);var state_15316__$1 = state_15316;var statearr_15321_15336 = state_15316__$1;(statearr_15321_15336[(2)] = inst_15302);
(statearr_15321_15336[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15317 === (4)))
{var inst_15305 = (state_15316[(8)]);var inst_15305__$1 = (state_15316[(2)]);var inst_15306 = (inst_15305__$1 == null);var state_15316__$1 = (function (){var statearr_15322 = state_15316;(statearr_15322[(8)] = inst_15305__$1);
return statearr_15322;
})();if(cljs.core.truth_(inst_15306))
{var statearr_15323_15337 = state_15316__$1;(statearr_15323_15337[(1)] = (5));
} else
{var statearr_15324_15338 = state_15316__$1;(statearr_15324_15338[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15317 === (3)))
{var inst_15314 = (state_15316[(2)]);var state_15316__$1 = state_15316;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15316__$1,inst_15314);
} else
{if((state_val_15317 === (2)))
{var state_15316__$1 = state_15316;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15316__$1,(4),ch);
} else
{if((state_val_15317 === (1)))
{var inst_15302 = init;var state_15316__$1 = (function (){var statearr_15325 = state_15316;(statearr_15325[(7)] = inst_15302);
return statearr_15325;
})();var statearr_15326_15339 = state_15316__$1;(statearr_15326_15339[(2)] = null);
(statearr_15326_15339[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__11628__auto__))
;return ((function (switch__11563__auto__,c__11628__auto__){
return (function() {
var state_machine__11564__auto__ = null;
var state_machine__11564__auto____0 = (function (){var statearr_15330 = [null,null,null,null,null,null,null,null,null];(statearr_15330[(0)] = state_machine__11564__auto__);
(statearr_15330[(1)] = (1));
return statearr_15330;
});
var state_machine__11564__auto____1 = (function (state_15316){while(true){
var ret_value__11565__auto__ = (function (){try{while(true){
var result__11566__auto__ = switch__11563__auto__.call(null,state_15316);if(cljs.core.keyword_identical_QMARK_.call(null,result__11566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11566__auto__;
}
break;
}
}catch (e15331){if((e15331 instanceof Object))
{var ex__11567__auto__ = e15331;var statearr_15332_15340 = state_15316;(statearr_15332_15340[(5)] = ex__11567__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15316);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15331;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15341 = state_15316;
state_15316 = G__15341;
continue;
}
} else
{return ret_value__11565__auto__;
}
break;
}
});
state_machine__11564__auto__ = function(state_15316){
switch(arguments.length){
case 0:
return state_machine__11564__auto____0.call(this);
case 1:
return state_machine__11564__auto____1.call(this,state_15316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11564__auto____0;
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11564__auto____1;
return state_machine__11564__auto__;
})()
;})(switch__11563__auto__,c__11628__auto__))
})();var state__11630__auto__ = (function (){var statearr_15333 = f__11629__auto__.call(null);(statearr_15333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11628__auto__);
return statearr_15333;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11630__auto__);
});})(c__11628__auto__))
);
return c__11628__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11628__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11628__auto__){
return (function (){var f__11629__auto__ = (function (){var switch__11563__auto__ = ((function (c__11628__auto__){
return (function (state_15403){var state_val_15404 = (state_15403[(1)]);if((state_val_15404 === (7)))
{var inst_15384 = (state_15403[(7)]);var inst_15389 = (state_15403[(2)]);var inst_15390 = cljs.core.next.call(null,inst_15384);var inst_15384__$1 = inst_15390;var state_15403__$1 = (function (){var statearr_15405 = state_15403;(statearr_15405[(8)] = inst_15389);
(statearr_15405[(7)] = inst_15384__$1);
return statearr_15405;
})();var statearr_15406_15424 = state_15403__$1;(statearr_15406_15424[(2)] = null);
(statearr_15406_15424[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15404 === (1)))
{var inst_15383 = cljs.core.seq.call(null,coll);var inst_15384 = inst_15383;var state_15403__$1 = (function (){var statearr_15407 = state_15403;(statearr_15407[(7)] = inst_15384);
return statearr_15407;
})();var statearr_15408_15425 = state_15403__$1;(statearr_15408_15425[(2)] = null);
(statearr_15408_15425[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15404 === (4)))
{var inst_15384 = (state_15403[(7)]);var inst_15387 = cljs.core.first.call(null,inst_15384);var state_15403__$1 = state_15403;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15403__$1,(7),ch,inst_15387);
} else
{if((state_val_15404 === (6)))
{var inst_15399 = (state_15403[(2)]);var state_15403__$1 = state_15403;var statearr_15409_15426 = state_15403__$1;(statearr_15409_15426[(2)] = inst_15399);
(statearr_15409_15426[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15404 === (3)))
{var inst_15401 = (state_15403[(2)]);var state_15403__$1 = state_15403;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15403__$1,inst_15401);
} else
{if((state_val_15404 === (2)))
{var inst_15384 = (state_15403[(7)]);var state_15403__$1 = state_15403;if(cljs.core.truth_(inst_15384))
{var statearr_15410_15427 = state_15403__$1;(statearr_15410_15427[(1)] = (4));
} else
{var statearr_15411_15428 = state_15403__$1;(statearr_15411_15428[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15404 === (9)))
{var state_15403__$1 = state_15403;var statearr_15412_15429 = state_15403__$1;(statearr_15412_15429[(2)] = null);
(statearr_15412_15429[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15404 === (5)))
{var state_15403__$1 = state_15403;if(cljs.core.truth_(close_QMARK_))
{var statearr_15413_15430 = state_15403__$1;(statearr_15413_15430[(1)] = (8));
} else
{var statearr_15414_15431 = state_15403__$1;(statearr_15414_15431[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15404 === (10)))
{var inst_15397 = (state_15403[(2)]);var state_15403__$1 = state_15403;var statearr_15415_15432 = state_15403__$1;(statearr_15415_15432[(2)] = inst_15397);
(statearr_15415_15432[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15404 === (8)))
{var inst_15394 = cljs.core.async.close_BANG_.call(null,ch);var state_15403__$1 = state_15403;var statearr_15416_15433 = state_15403__$1;(statearr_15416_15433[(2)] = inst_15394);
(statearr_15416_15433[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__11628__auto__))
;return ((function (switch__11563__auto__,c__11628__auto__){
return (function() {
var state_machine__11564__auto__ = null;
var state_machine__11564__auto____0 = (function (){var statearr_15420 = [null,null,null,null,null,null,null,null,null];(statearr_15420[(0)] = state_machine__11564__auto__);
(statearr_15420[(1)] = (1));
return statearr_15420;
});
var state_machine__11564__auto____1 = (function (state_15403){while(true){
var ret_value__11565__auto__ = (function (){try{while(true){
var result__11566__auto__ = switch__11563__auto__.call(null,state_15403);if(cljs.core.keyword_identical_QMARK_.call(null,result__11566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11566__auto__;
}
break;
}
}catch (e15421){if((e15421 instanceof Object))
{var ex__11567__auto__ = e15421;var statearr_15422_15434 = state_15403;(statearr_15422_15434[(5)] = ex__11567__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15403);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15421;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15435 = state_15403;
state_15403 = G__15435;
continue;
}
} else
{return ret_value__11565__auto__;
}
break;
}
});
state_machine__11564__auto__ = function(state_15403){
switch(arguments.length){
case 0:
return state_machine__11564__auto____0.call(this);
case 1:
return state_machine__11564__auto____1.call(this,state_15403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11564__auto____0;
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11564__auto____1;
return state_machine__11564__auto__;
})()
;})(switch__11563__auto__,c__11628__auto__))
})();var state__11630__auto__ = (function (){var statearr_15423 = f__11629__auto__.call(null);(statearr_15423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11628__auto__);
return statearr_15423;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11630__auto__);
});})(c__11628__auto__))
);
return c__11628__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj15437 = {};return obj15437;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3546__auto__ = _;if(and__3546__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4185__auto__ = (((_ == null))?null:_);return (function (){var or__3558__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj15439 = {};return obj15439;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15663 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15663 = (function (cs,ch,mult,meta15664){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15664 = meta15664;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15663.cljs$lang$type = true;
cljs.core.async.t15663.cljs$lang$ctorStr = "cljs.core.async/t15663";
cljs.core.async.t15663.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t15663");
});})(cs))
;
cljs.core.async.t15663.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15663.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15663.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15663.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15663.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15663.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15663.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15665){var self__ = this;
var _15665__$1 = this;return self__.meta15664;
});})(cs))
;
cljs.core.async.t15663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15665,meta15664__$1){var self__ = this;
var _15665__$1 = this;return (new cljs.core.async.t15663(self__.cs,self__.ch,self__.mult,meta15664__$1));
});})(cs))
;
cljs.core.async.__GT_t15663 = ((function (cs){
return (function __GT_t15663(cs__$1,ch__$1,mult__$1,meta15664){return (new cljs.core.async.t15663(cs__$1,ch__$1,mult__$1,meta15664));
});})(cs))
;
}
return (new cljs.core.async.t15663(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11628__auto___15886 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11628__auto___15886,cs,m,dchan,dctr,done){
return (function (){var f__11629__auto__ = (function (){var switch__11563__auto__ = ((function (c__11628__auto___15886,cs,m,dchan,dctr,done){
return (function (state_15800){var state_val_15801 = (state_15800[(1)]);if((state_val_15801 === (7)))
{var inst_15796 = (state_15800[(2)]);var state_15800__$1 = state_15800;var statearr_15802_15887 = state_15800__$1;(statearr_15802_15887[(2)] = inst_15796);
(statearr_15802_15887[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (20)))
{var inst_15697 = (state_15800[(7)]);var inst_15707 = cljs.core.first.call(null,inst_15697);var inst_15708 = cljs.core.nth.call(null,inst_15707,(0),null);var inst_15709 = cljs.core.nth.call(null,inst_15707,(1),null);var state_15800__$1 = (function (){var statearr_15803 = state_15800;(statearr_15803[(8)] = inst_15708);
return statearr_15803;
})();if(cljs.core.truth_(inst_15709))
{var statearr_15804_15888 = state_15800__$1;(statearr_15804_15888[(1)] = (22));
} else
{var statearr_15805_15889 = state_15800__$1;(statearr_15805_15889[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (27)))
{var inst_15739 = (state_15800[(9)]);var inst_15737 = (state_15800[(10)]);var inst_15744 = cljs.core._nth.call(null,inst_15737,inst_15739);var state_15800__$1 = (function (){var statearr_15806 = state_15800;(statearr_15806[(11)] = inst_15744);
return statearr_15806;
})();var statearr_15807_15890 = state_15800__$1;(statearr_15807_15890[(2)] = null);
(statearr_15807_15890[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (1)))
{var state_15800__$1 = state_15800;var statearr_15808_15891 = state_15800__$1;(statearr_15808_15891[(2)] = null);
(statearr_15808_15891[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (24)))
{var inst_15697 = (state_15800[(7)]);var inst_15714 = (state_15800[(2)]);var inst_15715 = cljs.core.next.call(null,inst_15697);var inst_15677 = inst_15715;var inst_15678 = null;var inst_15679 = (0);var inst_15680 = (0);var state_15800__$1 = (function (){var statearr_15809 = state_15800;(statearr_15809[(12)] = inst_15678);
(statearr_15809[(13)] = inst_15714);
(statearr_15809[(14)] = inst_15679);
(statearr_15809[(15)] = inst_15680);
(statearr_15809[(16)] = inst_15677);
return statearr_15809;
})();var statearr_15810_15892 = state_15800__$1;(statearr_15810_15892[(2)] = null);
(statearr_15810_15892[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (39)))
{var inst_15757 = (state_15800[(17)]);var inst_15775 = (state_15800[(2)]);var inst_15776 = cljs.core.next.call(null,inst_15757);var inst_15736 = inst_15776;var inst_15737 = null;var inst_15738 = (0);var inst_15739 = (0);var state_15800__$1 = (function (){var statearr_15814 = state_15800;(statearr_15814[(9)] = inst_15739);
(statearr_15814[(18)] = inst_15736);
(statearr_15814[(10)] = inst_15737);
(statearr_15814[(19)] = inst_15738);
(statearr_15814[(20)] = inst_15775);
return statearr_15814;
})();var statearr_15815_15893 = state_15800__$1;(statearr_15815_15893[(2)] = null);
(statearr_15815_15893[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (4)))
{var inst_15668 = (state_15800[(21)]);var inst_15668__$1 = (state_15800[(2)]);var inst_15669 = (inst_15668__$1 == null);var state_15800__$1 = (function (){var statearr_15816 = state_15800;(statearr_15816[(21)] = inst_15668__$1);
return statearr_15816;
})();if(cljs.core.truth_(inst_15669))
{var statearr_15817_15894 = state_15800__$1;(statearr_15817_15894[(1)] = (5));
} else
{var statearr_15818_15895 = state_15800__$1;(statearr_15818_15895[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (15)))
{var inst_15678 = (state_15800[(12)]);var inst_15679 = (state_15800[(14)]);var inst_15680 = (state_15800[(15)]);var inst_15677 = (state_15800[(16)]);var inst_15693 = (state_15800[(2)]);var inst_15694 = (inst_15680 + (1));var tmp15811 = inst_15678;var tmp15812 = inst_15679;var tmp15813 = inst_15677;var inst_15677__$1 = tmp15813;var inst_15678__$1 = tmp15811;var inst_15679__$1 = tmp15812;var inst_15680__$1 = inst_15694;var state_15800__$1 = (function (){var statearr_15819 = state_15800;(statearr_15819[(12)] = inst_15678__$1);
(statearr_15819[(14)] = inst_15679__$1);
(statearr_15819[(15)] = inst_15680__$1);
(statearr_15819[(22)] = inst_15693);
(statearr_15819[(16)] = inst_15677__$1);
return statearr_15819;
})();var statearr_15820_15896 = state_15800__$1;(statearr_15820_15896[(2)] = null);
(statearr_15820_15896[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (21)))
{var inst_15718 = (state_15800[(2)]);var state_15800__$1 = state_15800;var statearr_15821_15897 = state_15800__$1;(statearr_15821_15897[(2)] = inst_15718);
(statearr_15821_15897[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (31)))
{var inst_15744 = (state_15800[(11)]);var inst_15745 = (state_15800[(2)]);var inst_15746 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15747 = cljs.core.async.untap_STAR_.call(null,m,inst_15744);var state_15800__$1 = (function (){var statearr_15822 = state_15800;(statearr_15822[(23)] = inst_15746);
(statearr_15822[(24)] = inst_15745);
return statearr_15822;
})();var statearr_15823_15898 = state_15800__$1;(statearr_15823_15898[(2)] = inst_15747);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15800__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (32)))
{var inst_15668 = (state_15800[(21)]);var inst_15744 = (state_15800[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15800,(31),Object,null,(30));var inst_15751 = cljs.core.async.put_BANG_.call(null,inst_15744,inst_15668,done);var state_15800__$1 = state_15800;var statearr_15824_15899 = state_15800__$1;(statearr_15824_15899[(2)] = inst_15751);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15800__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (40)))
{var inst_15766 = (state_15800[(25)]);var inst_15767 = (state_15800[(2)]);var inst_15768 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15769 = cljs.core.async.untap_STAR_.call(null,m,inst_15766);var state_15800__$1 = (function (){var statearr_15825 = state_15800;(statearr_15825[(26)] = inst_15768);
(statearr_15825[(27)] = inst_15767);
return statearr_15825;
})();var statearr_15826_15900 = state_15800__$1;(statearr_15826_15900[(2)] = inst_15769);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15800__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (33)))
{var inst_15757 = (state_15800[(17)]);var inst_15759 = cljs.core.chunked_seq_QMARK_.call(null,inst_15757);var state_15800__$1 = state_15800;if(inst_15759)
{var statearr_15827_15901 = state_15800__$1;(statearr_15827_15901[(1)] = (36));
} else
{var statearr_15828_15902 = state_15800__$1;(statearr_15828_15902[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (13)))
{var inst_15687 = (state_15800[(28)]);var inst_15690 = cljs.core.async.close_BANG_.call(null,inst_15687);var state_15800__$1 = state_15800;var statearr_15829_15903 = state_15800__$1;(statearr_15829_15903[(2)] = inst_15690);
(statearr_15829_15903[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (22)))
{var inst_15708 = (state_15800[(8)]);var inst_15711 = cljs.core.async.close_BANG_.call(null,inst_15708);var state_15800__$1 = state_15800;var statearr_15830_15904 = state_15800__$1;(statearr_15830_15904[(2)] = inst_15711);
(statearr_15830_15904[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (36)))
{var inst_15757 = (state_15800[(17)]);var inst_15761 = cljs.core.chunk_first.call(null,inst_15757);var inst_15762 = cljs.core.chunk_rest.call(null,inst_15757);var inst_15763 = cljs.core.count.call(null,inst_15761);var inst_15736 = inst_15762;var inst_15737 = inst_15761;var inst_15738 = inst_15763;var inst_15739 = (0);var state_15800__$1 = (function (){var statearr_15831 = state_15800;(statearr_15831[(9)] = inst_15739);
(statearr_15831[(18)] = inst_15736);
(statearr_15831[(10)] = inst_15737);
(statearr_15831[(19)] = inst_15738);
return statearr_15831;
})();var statearr_15832_15905 = state_15800__$1;(statearr_15832_15905[(2)] = null);
(statearr_15832_15905[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (41)))
{var inst_15766 = (state_15800[(25)]);var inst_15668 = (state_15800[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15800,(40),Object,null,(39));var inst_15773 = cljs.core.async.put_BANG_.call(null,inst_15766,inst_15668,done);var state_15800__$1 = state_15800;var statearr_15833_15906 = state_15800__$1;(statearr_15833_15906[(2)] = inst_15773);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15800__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (43)))
{var state_15800__$1 = state_15800;var statearr_15834_15907 = state_15800__$1;(statearr_15834_15907[(2)] = null);
(statearr_15834_15907[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (29)))
{var inst_15784 = (state_15800[(2)]);var state_15800__$1 = state_15800;var statearr_15835_15908 = state_15800__$1;(statearr_15835_15908[(2)] = inst_15784);
(statearr_15835_15908[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (44)))
{var inst_15793 = (state_15800[(2)]);var state_15800__$1 = (function (){var statearr_15836 = state_15800;(statearr_15836[(29)] = inst_15793);
return statearr_15836;
})();var statearr_15837_15909 = state_15800__$1;(statearr_15837_15909[(2)] = null);
(statearr_15837_15909[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (6)))
{var inst_15728 = (state_15800[(30)]);var inst_15727 = cljs.core.deref.call(null,cs);var inst_15728__$1 = cljs.core.keys.call(null,inst_15727);var inst_15729 = cljs.core.count.call(null,inst_15728__$1);var inst_15730 = cljs.core.reset_BANG_.call(null,dctr,inst_15729);var inst_15735 = cljs.core.seq.call(null,inst_15728__$1);var inst_15736 = inst_15735;var inst_15737 = null;var inst_15738 = (0);var inst_15739 = (0);var state_15800__$1 = (function (){var statearr_15838 = state_15800;(statearr_15838[(9)] = inst_15739);
(statearr_15838[(18)] = inst_15736);
(statearr_15838[(31)] = inst_15730);
(statearr_15838[(10)] = inst_15737);
(statearr_15838[(30)] = inst_15728__$1);
(statearr_15838[(19)] = inst_15738);
return statearr_15838;
})();var statearr_15839_15910 = state_15800__$1;(statearr_15839_15910[(2)] = null);
(statearr_15839_15910[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (28)))
{var inst_15736 = (state_15800[(18)]);var inst_15757 = (state_15800[(17)]);var inst_15757__$1 = cljs.core.seq.call(null,inst_15736);var state_15800__$1 = (function (){var statearr_15840 = state_15800;(statearr_15840[(17)] = inst_15757__$1);
return statearr_15840;
})();if(inst_15757__$1)
{var statearr_15841_15911 = state_15800__$1;(statearr_15841_15911[(1)] = (33));
} else
{var statearr_15842_15912 = state_15800__$1;(statearr_15842_15912[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (25)))
{var inst_15739 = (state_15800[(9)]);var inst_15738 = (state_15800[(19)]);var inst_15741 = (inst_15739 < inst_15738);var inst_15742 = inst_15741;var state_15800__$1 = state_15800;if(cljs.core.truth_(inst_15742))
{var statearr_15843_15913 = state_15800__$1;(statearr_15843_15913[(1)] = (27));
} else
{var statearr_15844_15914 = state_15800__$1;(statearr_15844_15914[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (34)))
{var state_15800__$1 = state_15800;var statearr_15845_15915 = state_15800__$1;(statearr_15845_15915[(2)] = null);
(statearr_15845_15915[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (17)))
{var state_15800__$1 = state_15800;var statearr_15846_15916 = state_15800__$1;(statearr_15846_15916[(2)] = null);
(statearr_15846_15916[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (3)))
{var inst_15798 = (state_15800[(2)]);var state_15800__$1 = state_15800;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15800__$1,inst_15798);
} else
{if((state_val_15801 === (12)))
{var inst_15723 = (state_15800[(2)]);var state_15800__$1 = state_15800;var statearr_15847_15917 = state_15800__$1;(statearr_15847_15917[(2)] = inst_15723);
(statearr_15847_15917[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (2)))
{var state_15800__$1 = state_15800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15800__$1,(4),ch);
} else
{if((state_val_15801 === (23)))
{var state_15800__$1 = state_15800;var statearr_15848_15918 = state_15800__$1;(statearr_15848_15918[(2)] = null);
(statearr_15848_15918[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (35)))
{var inst_15782 = (state_15800[(2)]);var state_15800__$1 = state_15800;var statearr_15849_15919 = state_15800__$1;(statearr_15849_15919[(2)] = inst_15782);
(statearr_15849_15919[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (19)))
{var inst_15697 = (state_15800[(7)]);var inst_15701 = cljs.core.chunk_first.call(null,inst_15697);var inst_15702 = cljs.core.chunk_rest.call(null,inst_15697);var inst_15703 = cljs.core.count.call(null,inst_15701);var inst_15677 = inst_15702;var inst_15678 = inst_15701;var inst_15679 = inst_15703;var inst_15680 = (0);var state_15800__$1 = (function (){var statearr_15850 = state_15800;(statearr_15850[(12)] = inst_15678);
(statearr_15850[(14)] = inst_15679);
(statearr_15850[(15)] = inst_15680);
(statearr_15850[(16)] = inst_15677);
return statearr_15850;
})();var statearr_15851_15920 = state_15800__$1;(statearr_15851_15920[(2)] = null);
(statearr_15851_15920[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (11)))
{var inst_15697 = (state_15800[(7)]);var inst_15677 = (state_15800[(16)]);var inst_15697__$1 = cljs.core.seq.call(null,inst_15677);var state_15800__$1 = (function (){var statearr_15852 = state_15800;(statearr_15852[(7)] = inst_15697__$1);
return statearr_15852;
})();if(inst_15697__$1)
{var statearr_15853_15921 = state_15800__$1;(statearr_15853_15921[(1)] = (16));
} else
{var statearr_15854_15922 = state_15800__$1;(statearr_15854_15922[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (9)))
{var inst_15725 = (state_15800[(2)]);var state_15800__$1 = state_15800;var statearr_15855_15923 = state_15800__$1;(statearr_15855_15923[(2)] = inst_15725);
(statearr_15855_15923[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (5)))
{var inst_15675 = cljs.core.deref.call(null,cs);var inst_15676 = cljs.core.seq.call(null,inst_15675);var inst_15677 = inst_15676;var inst_15678 = null;var inst_15679 = (0);var inst_15680 = (0);var state_15800__$1 = (function (){var statearr_15856 = state_15800;(statearr_15856[(12)] = inst_15678);
(statearr_15856[(14)] = inst_15679);
(statearr_15856[(15)] = inst_15680);
(statearr_15856[(16)] = inst_15677);
return statearr_15856;
})();var statearr_15857_15924 = state_15800__$1;(statearr_15857_15924[(2)] = null);
(statearr_15857_15924[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (14)))
{var state_15800__$1 = state_15800;var statearr_15858_15925 = state_15800__$1;(statearr_15858_15925[(2)] = null);
(statearr_15858_15925[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (45)))
{var inst_15790 = (state_15800[(2)]);var state_15800__$1 = state_15800;var statearr_15859_15926 = state_15800__$1;(statearr_15859_15926[(2)] = inst_15790);
(statearr_15859_15926[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (26)))
{var inst_15728 = (state_15800[(30)]);var inst_15786 = (state_15800[(2)]);var inst_15787 = cljs.core.seq.call(null,inst_15728);var state_15800__$1 = (function (){var statearr_15860 = state_15800;(statearr_15860[(32)] = inst_15786);
return statearr_15860;
})();if(inst_15787)
{var statearr_15861_15927 = state_15800__$1;(statearr_15861_15927[(1)] = (42));
} else
{var statearr_15862_15928 = state_15800__$1;(statearr_15862_15928[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (16)))
{var inst_15697 = (state_15800[(7)]);var inst_15699 = cljs.core.chunked_seq_QMARK_.call(null,inst_15697);var state_15800__$1 = state_15800;if(inst_15699)
{var statearr_15866_15929 = state_15800__$1;(statearr_15866_15929[(1)] = (19));
} else
{var statearr_15867_15930 = state_15800__$1;(statearr_15867_15930[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (38)))
{var inst_15779 = (state_15800[(2)]);var state_15800__$1 = state_15800;var statearr_15868_15931 = state_15800__$1;(statearr_15868_15931[(2)] = inst_15779);
(statearr_15868_15931[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (30)))
{var inst_15739 = (state_15800[(9)]);var inst_15736 = (state_15800[(18)]);var inst_15737 = (state_15800[(10)]);var inst_15738 = (state_15800[(19)]);var inst_15753 = (state_15800[(2)]);var inst_15754 = (inst_15739 + (1));var tmp15863 = inst_15736;var tmp15864 = inst_15737;var tmp15865 = inst_15738;var inst_15736__$1 = tmp15863;var inst_15737__$1 = tmp15864;var inst_15738__$1 = tmp15865;var inst_15739__$1 = inst_15754;var state_15800__$1 = (function (){var statearr_15869 = state_15800;(statearr_15869[(9)] = inst_15739__$1);
(statearr_15869[(18)] = inst_15736__$1);
(statearr_15869[(33)] = inst_15753);
(statearr_15869[(10)] = inst_15737__$1);
(statearr_15869[(19)] = inst_15738__$1);
return statearr_15869;
})();var statearr_15870_15932 = state_15800__$1;(statearr_15870_15932[(2)] = null);
(statearr_15870_15932[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (10)))
{var inst_15678 = (state_15800[(12)]);var inst_15680 = (state_15800[(15)]);var inst_15686 = cljs.core._nth.call(null,inst_15678,inst_15680);var inst_15687 = cljs.core.nth.call(null,inst_15686,(0),null);var inst_15688 = cljs.core.nth.call(null,inst_15686,(1),null);var state_15800__$1 = (function (){var statearr_15871 = state_15800;(statearr_15871[(28)] = inst_15687);
return statearr_15871;
})();if(cljs.core.truth_(inst_15688))
{var statearr_15872_15933 = state_15800__$1;(statearr_15872_15933[(1)] = (13));
} else
{var statearr_15873_15934 = state_15800__$1;(statearr_15873_15934[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (18)))
{var inst_15721 = (state_15800[(2)]);var state_15800__$1 = state_15800;var statearr_15874_15935 = state_15800__$1;(statearr_15874_15935[(2)] = inst_15721);
(statearr_15874_15935[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (42)))
{var state_15800__$1 = state_15800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15800__$1,(45),dchan);
} else
{if((state_val_15801 === (37)))
{var inst_15757 = (state_15800[(17)]);var inst_15766 = cljs.core.first.call(null,inst_15757);var state_15800__$1 = (function (){var statearr_15875 = state_15800;(statearr_15875[(25)] = inst_15766);
return statearr_15875;
})();var statearr_15876_15936 = state_15800__$1;(statearr_15876_15936[(2)] = null);
(statearr_15876_15936[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15801 === (8)))
{var inst_15679 = (state_15800[(14)]);var inst_15680 = (state_15800[(15)]);var inst_15682 = (inst_15680 < inst_15679);var inst_15683 = inst_15682;var state_15800__$1 = state_15800;if(cljs.core.truth_(inst_15683))
{var statearr_15877_15937 = state_15800__$1;(statearr_15877_15937[(1)] = (10));
} else
{var statearr_15878_15938 = state_15800__$1;(statearr_15878_15938[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11628__auto___15886,cs,m,dchan,dctr,done))
;return ((function (switch__11563__auto__,c__11628__auto___15886,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11564__auto__ = null;
var state_machine__11564__auto____0 = (function (){var statearr_15882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15882[(0)] = state_machine__11564__auto__);
(statearr_15882[(1)] = (1));
return statearr_15882;
});
var state_machine__11564__auto____1 = (function (state_15800){while(true){
var ret_value__11565__auto__ = (function (){try{while(true){
var result__11566__auto__ = switch__11563__auto__.call(null,state_15800);if(cljs.core.keyword_identical_QMARK_.call(null,result__11566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11566__auto__;
}
break;
}
}catch (e15883){if((e15883 instanceof Object))
{var ex__11567__auto__ = e15883;var statearr_15884_15939 = state_15800;(statearr_15884_15939[(5)] = ex__11567__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15800);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15883;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15940 = state_15800;
state_15800 = G__15940;
continue;
}
} else
{return ret_value__11565__auto__;
}
break;
}
});
state_machine__11564__auto__ = function(state_15800){
switch(arguments.length){
case 0:
return state_machine__11564__auto____0.call(this);
case 1:
return state_machine__11564__auto____1.call(this,state_15800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11564__auto____0;
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11564__auto____1;
return state_machine__11564__auto__;
})()
;})(switch__11563__auto__,c__11628__auto___15886,cs,m,dchan,dctr,done))
})();var state__11630__auto__ = (function (){var statearr_15885 = f__11629__auto__.call(null);(statearr_15885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11628__auto___15886);
return statearr_15885;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11630__auto__);
});})(c__11628__auto___15886,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj15942 = {};return obj15942;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t16052 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16052 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16053){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16053 = meta16053;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16052.cljs$lang$type = true;
cljs.core.async.t16052.cljs$lang$ctorStr = "cljs.core.async/t16052";
cljs.core.async.t16052.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16052");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16052.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16052.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16052.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16052.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16052.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16052.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16052.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16052.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16052.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16054){var self__ = this;
var _16054__$1 = this;return self__.meta16053;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16054,meta16053__$1){var self__ = this;
var _16054__$1 = this;return (new cljs.core.async.t16052(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16053__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16052 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16052(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16053){return (new cljs.core.async.t16052(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16053));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16052(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11628__auto___16161 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11628__auto___16161,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11629__auto__ = (function (){var switch__11563__auto__ = ((function (c__11628__auto___16161,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16119){var state_val_16120 = (state_16119[(1)]);if((state_val_16120 === (7)))
{var inst_16068 = (state_16119[(7)]);var inst_16073 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16068);var state_16119__$1 = state_16119;var statearr_16121_16162 = state_16119__$1;(statearr_16121_16162[(2)] = inst_16073);
(statearr_16121_16162[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (20)))
{var inst_16083 = (state_16119[(8)]);var state_16119__$1 = state_16119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16119__$1,(23),out,inst_16083);
} else
{if((state_val_16120 === (1)))
{var inst_16058 = (state_16119[(9)]);var inst_16058__$1 = calc_state.call(null);var inst_16059 = cljs.core.seq_QMARK_.call(null,inst_16058__$1);var state_16119__$1 = (function (){var statearr_16122 = state_16119;(statearr_16122[(9)] = inst_16058__$1);
return statearr_16122;
})();if(inst_16059)
{var statearr_16123_16163 = state_16119__$1;(statearr_16123_16163[(1)] = (2));
} else
{var statearr_16124_16164 = state_16119__$1;(statearr_16124_16164[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (4)))
{var inst_16058 = (state_16119[(9)]);var inst_16064 = (state_16119[(2)]);var inst_16065 = cljs.core.get.call(null,inst_16064,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16066 = cljs.core.get.call(null,inst_16064,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16067 = cljs.core.get.call(null,inst_16064,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_16068 = inst_16058;var state_16119__$1 = (function (){var statearr_16125 = state_16119;(statearr_16125[(7)] = inst_16068);
(statearr_16125[(10)] = inst_16066);
(statearr_16125[(11)] = inst_16065);
(statearr_16125[(12)] = inst_16067);
return statearr_16125;
})();var statearr_16126_16165 = state_16119__$1;(statearr_16126_16165[(2)] = null);
(statearr_16126_16165[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (15)))
{var state_16119__$1 = state_16119;var statearr_16127_16166 = state_16119__$1;(statearr_16127_16166[(2)] = null);
(statearr_16127_16166[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (21)))
{var state_16119__$1 = state_16119;var statearr_16128_16167 = state_16119__$1;(statearr_16128_16167[(2)] = null);
(statearr_16128_16167[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (13)))
{var inst_16115 = (state_16119[(2)]);var state_16119__$1 = state_16119;var statearr_16129_16168 = state_16119__$1;(statearr_16129_16168[(2)] = inst_16115);
(statearr_16129_16168[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (22)))
{var inst_16076 = (state_16119[(13)]);var inst_16112 = (state_16119[(2)]);var inst_16068 = inst_16076;var state_16119__$1 = (function (){var statearr_16130 = state_16119;(statearr_16130[(14)] = inst_16112);
(statearr_16130[(7)] = inst_16068);
return statearr_16130;
})();var statearr_16131_16169 = state_16119__$1;(statearr_16131_16169[(2)] = null);
(statearr_16131_16169[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (6)))
{var inst_16117 = (state_16119[(2)]);var state_16119__$1 = state_16119;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16119__$1,inst_16117);
} else
{if((state_val_16120 === (17)))
{var inst_16098 = (state_16119[(15)]);var state_16119__$1 = state_16119;var statearr_16132_16170 = state_16119__$1;(statearr_16132_16170[(2)] = inst_16098);
(statearr_16132_16170[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (3)))
{var inst_16058 = (state_16119[(9)]);var state_16119__$1 = state_16119;var statearr_16133_16171 = state_16119__$1;(statearr_16133_16171[(2)] = inst_16058);
(statearr_16133_16171[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (12)))
{var inst_16079 = (state_16119[(16)]);var inst_16084 = (state_16119[(17)]);var inst_16098 = (state_16119[(15)]);var inst_16098__$1 = inst_16079.call(null,inst_16084);var state_16119__$1 = (function (){var statearr_16134 = state_16119;(statearr_16134[(15)] = inst_16098__$1);
return statearr_16134;
})();if(cljs.core.truth_(inst_16098__$1))
{var statearr_16135_16172 = state_16119__$1;(statearr_16135_16172[(1)] = (17));
} else
{var statearr_16136_16173 = state_16119__$1;(statearr_16136_16173[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (2)))
{var inst_16058 = (state_16119[(9)]);var inst_16061 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16058);var state_16119__$1 = state_16119;var statearr_16137_16174 = state_16119__$1;(statearr_16137_16174[(2)] = inst_16061);
(statearr_16137_16174[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (23)))
{var inst_16109 = (state_16119[(2)]);var state_16119__$1 = state_16119;var statearr_16138_16175 = state_16119__$1;(statearr_16138_16175[(2)] = inst_16109);
(statearr_16138_16175[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (19)))
{var inst_16106 = (state_16119[(2)]);var state_16119__$1 = state_16119;if(cljs.core.truth_(inst_16106))
{var statearr_16139_16176 = state_16119__$1;(statearr_16139_16176[(1)] = (20));
} else
{var statearr_16140_16177 = state_16119__$1;(statearr_16140_16177[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (11)))
{var inst_16083 = (state_16119[(8)]);var inst_16089 = (inst_16083 == null);var state_16119__$1 = state_16119;if(cljs.core.truth_(inst_16089))
{var statearr_16141_16178 = state_16119__$1;(statearr_16141_16178[(1)] = (14));
} else
{var statearr_16142_16179 = state_16119__$1;(statearr_16142_16179[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (9)))
{var inst_16076 = (state_16119[(13)]);var inst_16076__$1 = (state_16119[(2)]);var inst_16077 = cljs.core.get.call(null,inst_16076__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16078 = cljs.core.get.call(null,inst_16076__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16079 = cljs.core.get.call(null,inst_16076__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_16119__$1 = (function (){var statearr_16143 = state_16119;(statearr_16143[(13)] = inst_16076__$1);
(statearr_16143[(16)] = inst_16079);
(statearr_16143[(18)] = inst_16078);
return statearr_16143;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16119__$1,(10),inst_16077);
} else
{if((state_val_16120 === (5)))
{var inst_16068 = (state_16119[(7)]);var inst_16071 = cljs.core.seq_QMARK_.call(null,inst_16068);var state_16119__$1 = state_16119;if(inst_16071)
{var statearr_16144_16180 = state_16119__$1;(statearr_16144_16180[(1)] = (7));
} else
{var statearr_16145_16181 = state_16119__$1;(statearr_16145_16181[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (14)))
{var inst_16084 = (state_16119[(17)]);var inst_16091 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16084);var state_16119__$1 = state_16119;var statearr_16146_16182 = state_16119__$1;(statearr_16146_16182[(2)] = inst_16091);
(statearr_16146_16182[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (16)))
{var inst_16094 = (state_16119[(2)]);var inst_16095 = calc_state.call(null);var inst_16068 = inst_16095;var state_16119__$1 = (function (){var statearr_16147 = state_16119;(statearr_16147[(7)] = inst_16068);
(statearr_16147[(19)] = inst_16094);
return statearr_16147;
})();var statearr_16148_16183 = state_16119__$1;(statearr_16148_16183[(2)] = null);
(statearr_16148_16183[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (10)))
{var inst_16083 = (state_16119[(8)]);var inst_16084 = (state_16119[(17)]);var inst_16082 = (state_16119[(2)]);var inst_16083__$1 = cljs.core.nth.call(null,inst_16082,(0),null);var inst_16084__$1 = cljs.core.nth.call(null,inst_16082,(1),null);var inst_16085 = (inst_16083__$1 == null);var inst_16086 = cljs.core._EQ_.call(null,inst_16084__$1,change);var inst_16087 = (inst_16085) || (inst_16086);var state_16119__$1 = (function (){var statearr_16149 = state_16119;(statearr_16149[(8)] = inst_16083__$1);
(statearr_16149[(17)] = inst_16084__$1);
return statearr_16149;
})();if(cljs.core.truth_(inst_16087))
{var statearr_16150_16184 = state_16119__$1;(statearr_16150_16184[(1)] = (11));
} else
{var statearr_16151_16185 = state_16119__$1;(statearr_16151_16185[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (18)))
{var inst_16079 = (state_16119[(16)]);var inst_16084 = (state_16119[(17)]);var inst_16078 = (state_16119[(18)]);var inst_16101 = cljs.core.empty_QMARK_.call(null,inst_16079);var inst_16102 = inst_16078.call(null,inst_16084);var inst_16103 = cljs.core.not.call(null,inst_16102);var inst_16104 = (inst_16101) && (inst_16103);var state_16119__$1 = state_16119;var statearr_16152_16186 = state_16119__$1;(statearr_16152_16186[(2)] = inst_16104);
(statearr_16152_16186[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16120 === (8)))
{var inst_16068 = (state_16119[(7)]);var state_16119__$1 = state_16119;var statearr_16153_16187 = state_16119__$1;(statearr_16153_16187[(2)] = inst_16068);
(statearr_16153_16187[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11628__auto___16161,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__11563__auto__,c__11628__auto___16161,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11564__auto__ = null;
var state_machine__11564__auto____0 = (function (){var statearr_16157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16157[(0)] = state_machine__11564__auto__);
(statearr_16157[(1)] = (1));
return statearr_16157;
});
var state_machine__11564__auto____1 = (function (state_16119){while(true){
var ret_value__11565__auto__ = (function (){try{while(true){
var result__11566__auto__ = switch__11563__auto__.call(null,state_16119);if(cljs.core.keyword_identical_QMARK_.call(null,result__11566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11566__auto__;
}
break;
}
}catch (e16158){if((e16158 instanceof Object))
{var ex__11567__auto__ = e16158;var statearr_16159_16188 = state_16119;(statearr_16159_16188[(5)] = ex__11567__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16119);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16158;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16189 = state_16119;
state_16119 = G__16189;
continue;
}
} else
{return ret_value__11565__auto__;
}
break;
}
});
state_machine__11564__auto__ = function(state_16119){
switch(arguments.length){
case 0:
return state_machine__11564__auto____0.call(this);
case 1:
return state_machine__11564__auto____1.call(this,state_16119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11564__auto____0;
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11564__auto____1;
return state_machine__11564__auto__;
})()
;})(switch__11563__auto__,c__11628__auto___16161,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11630__auto__ = (function (){var statearr_16160 = f__11629__auto__.call(null);(statearr_16160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11628__auto___16161);
return statearr_16160;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11630__auto__);
});})(c__11628__auto___16161,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj16191 = {};return obj16191;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3558__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3558__auto__,mults){
return (function (p1__16192_SHARP_){if(cljs.core.truth_(p1__16192_SHARP_.call(null,topic)))
{return p1__16192_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16192_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16317 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16317 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16318){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16318 = meta16318;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16317.cljs$lang$type = true;
cljs.core.async.t16317.cljs$lang$ctorStr = "cljs.core.async/t16317";
cljs.core.async.t16317.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16317");
});})(mults,ensure_mult))
;
cljs.core.async.t16317.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16317.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16317.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16317.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16317.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16317.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16317.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16317.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16319){var self__ = this;
var _16319__$1 = this;return self__.meta16318;
});})(mults,ensure_mult))
;
cljs.core.async.t16317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16319,meta16318__$1){var self__ = this;
var _16319__$1 = this;return (new cljs.core.async.t16317(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16318__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16317 = ((function (mults,ensure_mult){
return (function __GT_t16317(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16318){return (new cljs.core.async.t16317(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16318));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16317(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11628__auto___16441 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11628__auto___16441,mults,ensure_mult,p){
return (function (){var f__11629__auto__ = (function (){var switch__11563__auto__ = ((function (c__11628__auto___16441,mults,ensure_mult,p){
return (function (state_16393){var state_val_16394 = (state_16393[(1)]);if((state_val_16394 === (7)))
{var inst_16389 = (state_16393[(2)]);var state_16393__$1 = state_16393;var statearr_16395_16442 = state_16393__$1;(statearr_16395_16442[(2)] = inst_16389);
(statearr_16395_16442[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16394 === (20)))
{var state_16393__$1 = state_16393;var statearr_16396_16443 = state_16393__$1;(statearr_16396_16443[(2)] = null);
(statearr_16396_16443[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16394 === (1)))
{var state_16393__$1 = state_16393;var statearr_16397_16444 = state_16393__$1;(statearr_16397_16444[(2)] = null);
(statearr_16397_16444[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16394 === (24)))
{var inst_16322 = (state_16393[(7)]);var inst_16372 = (state_16393[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16393,(23),Object,null,(22));var inst_16379 = cljs.core.async.muxch_STAR_.call(null,inst_16372);var state_16393__$1 = state_16393;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16393__$1,(25),inst_16379,inst_16322);
} else
{if((state_val_16394 === (4)))
{var inst_16322 = (state_16393[(7)]);var inst_16322__$1 = (state_16393[(2)]);var inst_16323 = (inst_16322__$1 == null);var state_16393__$1 = (function (){var statearr_16398 = state_16393;(statearr_16398[(7)] = inst_16322__$1);
return statearr_16398;
})();if(cljs.core.truth_(inst_16323))
{var statearr_16399_16445 = state_16393__$1;(statearr_16399_16445[(1)] = (5));
} else
{var statearr_16400_16446 = state_16393__$1;(statearr_16400_16446[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16394 === (15)))
{var inst_16364 = (state_16393[(2)]);var state_16393__$1 = state_16393;var statearr_16401_16447 = state_16393__$1;(statearr_16401_16447[(2)] = inst_16364);
(statearr_16401_16447[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16394 === (21)))
{var inst_16386 = (state_16393[(2)]);var state_16393__$1 = (function (){var statearr_16402 = state_16393;(statearr_16402[(9)] = inst_16386);
return statearr_16402;
})();var statearr_16403_16448 = state_16393__$1;(statearr_16403_16448[(2)] = null);
(statearr_16403_16448[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16394 === (13)))
{var inst_16346 = (state_16393[(10)]);var inst_16348 = cljs.core.chunked_seq_QMARK_.call(null,inst_16346);var state_16393__$1 = state_16393;if(inst_16348)
{var statearr_16404_16449 = state_16393__$1;(statearr_16404_16449[(1)] = (16));
} else
{var statearr_16405_16450 = state_16393__$1;(statearr_16405_16450[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16394 === (22)))
{var inst_16383 = (state_16393[(2)]);var state_16393__$1 = state_16393;var statearr_16406_16451 = state_16393__$1;(statearr_16406_16451[(2)] = inst_16383);
(statearr_16406_16451[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16394 === (6)))
{var inst_16322 = (state_16393[(7)]);var inst_16370 = (state_16393[(11)]);var inst_16372 = (state_16393[(8)]);var inst_16370__$1 = topic_fn.call(null,inst_16322);var inst_16371 = cljs.core.deref.call(null,mults);var inst_16372__$1 = cljs.core.get.call(null,inst_16371,inst_16370__$1);var state_16393__$1 = (function (){var statearr_16407 = state_16393;(statearr_16407[(11)] = inst_16370__$1);
(statearr_16407[(8)] = inst_16372__$1);
return statearr_16407;
})();if(cljs.core.truth_(inst_16372__$1))
{var statearr_16408_16452 = state_16393__$1;(statearr_16408_16452[(1)] = (19));
} else
{var statearr_16409_16453 = state_16393__$1;(statearr_16409_16453[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16394 === (25)))
{var inst_16381 = (state_16393[(2)]);var state_16393__$1 = state_16393;var statearr_16410_16454 = state_16393__$1;(statearr_16410_16454[(2)] = inst_16381);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16393__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16394 === (17)))
{var inst_16346 = (state_16393[(10)]);var inst_16355 = cljs.core.first.call(null,inst_16346);var inst_16356 = cljs.core.async.muxch_STAR_.call(null,inst_16355);var inst_16357 = cljs.core.async.close_BANG_.call(null,inst_16356);var inst_16358 = cljs.core.next.call(null,inst_16346);var inst_16332 = inst_16358;var inst_16333 = null;var inst_16334 = (0);var inst_16335 = (0);var state_16393__$1 = (function (){var statearr_16411 = state_16393;(statearr_16411[(12)] = inst_16333);
(statearr_16411[(13)] = inst_16335);
(statearr_16411[(14)] = inst_16357);
(statearr_16411[(15)] = inst_16332);
(statearr_16411[(16)] = inst_16334);
return statearr_16411;
})();var statearr_16412_16455 = state_16393__$1;(statearr_16412_16455[(2)] = null);
(statearr_16412_16455[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16394 === (3)))
{var inst_16391 = (state_16393[(2)]);var state_16393__$1 = state_16393;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16393__$1,inst_16391);
} else
{if((state_val_16394 === (12)))
{var inst_16366 = (state_16393[(2)]);var state_16393__$1 = state_16393;var statearr_16413_16456 = state_16393__$1;(statearr_16413_16456[(2)] = inst_16366);
(statearr_16413_16456[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16394 === (2)))
{var state_16393__$1 = state_16393;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16393__$1,(4),ch);
} else
{if((state_val_16394 === (23)))
{var inst_16370 = (state_16393[(11)]);var inst_16374 = (state_16393[(2)]);var inst_16375 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16370);var state_16393__$1 = (function (){var statearr_16414 = state_16393;(statearr_16414[(17)] = inst_16374);
return statearr_16414;
})();var statearr_16415_16457 = state_16393__$1;(statearr_16415_16457[(2)] = inst_16375);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16393__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16394 === (19)))
{var state_16393__$1 = state_16393;var statearr_16416_16458 = state_16393__$1;(statearr_16416_16458[(2)] = null);
(statearr_16416_16458[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16394 === (11)))
{var inst_16332 = (state_16393[(15)]);var inst_16346 = (state_16393[(10)]);var inst_16346__$1 = cljs.core.seq.call(null,inst_16332);var state_16393__$1 = (function (){var statearr_16417 = state_16393;(statearr_16417[(10)] = inst_16346__$1);
return statearr_16417;
})();if(inst_16346__$1)
{var statearr_16418_16459 = state_16393__$1;(statearr_16418_16459[(1)] = (13));
} else
{var statearr_16419_16460 = state_16393__$1;(statearr_16419_16460[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16394 === (9)))
{var inst_16368 = (state_16393[(2)]);var state_16393__$1 = state_16393;var statearr_16420_16461 = state_16393__$1;(statearr_16420_16461[(2)] = inst_16368);
(statearr_16420_16461[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16394 === (5)))
{var inst_16329 = cljs.core.deref.call(null,mults);var inst_16330 = cljs.core.vals.call(null,inst_16329);var inst_16331 = cljs.core.seq.call(null,inst_16330);var inst_16332 = inst_16331;var inst_16333 = null;var inst_16334 = (0);var inst_16335 = (0);var state_16393__$1 = (function (){var statearr_16421 = state_16393;(statearr_16421[(12)] = inst_16333);
(statearr_16421[(13)] = inst_16335);
(statearr_16421[(15)] = inst_16332);
(statearr_16421[(16)] = inst_16334);
return statearr_16421;
})();var statearr_16422_16462 = state_16393__$1;(statearr_16422_16462[(2)] = null);
(statearr_16422_16462[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16394 === (14)))
{var state_16393__$1 = state_16393;var statearr_16426_16463 = state_16393__$1;(statearr_16426_16463[(2)] = null);
(statearr_16426_16463[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16394 === (16)))
{var inst_16346 = (state_16393[(10)]);var inst_16350 = cljs.core.chunk_first.call(null,inst_16346);var inst_16351 = cljs.core.chunk_rest.call(null,inst_16346);var inst_16352 = cljs.core.count.call(null,inst_16350);var inst_16332 = inst_16351;var inst_16333 = inst_16350;var inst_16334 = inst_16352;var inst_16335 = (0);var state_16393__$1 = (function (){var statearr_16427 = state_16393;(statearr_16427[(12)] = inst_16333);
(statearr_16427[(13)] = inst_16335);
(statearr_16427[(15)] = inst_16332);
(statearr_16427[(16)] = inst_16334);
return statearr_16427;
})();var statearr_16428_16464 = state_16393__$1;(statearr_16428_16464[(2)] = null);
(statearr_16428_16464[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16394 === (10)))
{var inst_16333 = (state_16393[(12)]);var inst_16335 = (state_16393[(13)]);var inst_16332 = (state_16393[(15)]);var inst_16334 = (state_16393[(16)]);var inst_16340 = cljs.core._nth.call(null,inst_16333,inst_16335);var inst_16341 = cljs.core.async.muxch_STAR_.call(null,inst_16340);var inst_16342 = cljs.core.async.close_BANG_.call(null,inst_16341);var inst_16343 = (inst_16335 + (1));var tmp16423 = inst_16333;var tmp16424 = inst_16332;var tmp16425 = inst_16334;var inst_16332__$1 = tmp16424;var inst_16333__$1 = tmp16423;var inst_16334__$1 = tmp16425;var inst_16335__$1 = inst_16343;var state_16393__$1 = (function (){var statearr_16429 = state_16393;(statearr_16429[(12)] = inst_16333__$1);
(statearr_16429[(18)] = inst_16342);
(statearr_16429[(13)] = inst_16335__$1);
(statearr_16429[(15)] = inst_16332__$1);
(statearr_16429[(16)] = inst_16334__$1);
return statearr_16429;
})();var statearr_16430_16465 = state_16393__$1;(statearr_16430_16465[(2)] = null);
(statearr_16430_16465[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16394 === (18)))
{var inst_16361 = (state_16393[(2)]);var state_16393__$1 = state_16393;var statearr_16431_16466 = state_16393__$1;(statearr_16431_16466[(2)] = inst_16361);
(statearr_16431_16466[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16394 === (8)))
{var inst_16335 = (state_16393[(13)]);var inst_16334 = (state_16393[(16)]);var inst_16337 = (inst_16335 < inst_16334);var inst_16338 = inst_16337;var state_16393__$1 = state_16393;if(cljs.core.truth_(inst_16338))
{var statearr_16432_16467 = state_16393__$1;(statearr_16432_16467[(1)] = (10));
} else
{var statearr_16433_16468 = state_16393__$1;(statearr_16433_16468[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11628__auto___16441,mults,ensure_mult,p))
;return ((function (switch__11563__auto__,c__11628__auto___16441,mults,ensure_mult,p){
return (function() {
var state_machine__11564__auto__ = null;
var state_machine__11564__auto____0 = (function (){var statearr_16437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16437[(0)] = state_machine__11564__auto__);
(statearr_16437[(1)] = (1));
return statearr_16437;
});
var state_machine__11564__auto____1 = (function (state_16393){while(true){
var ret_value__11565__auto__ = (function (){try{while(true){
var result__11566__auto__ = switch__11563__auto__.call(null,state_16393);if(cljs.core.keyword_identical_QMARK_.call(null,result__11566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11566__auto__;
}
break;
}
}catch (e16438){if((e16438 instanceof Object))
{var ex__11567__auto__ = e16438;var statearr_16439_16469 = state_16393;(statearr_16439_16469[(5)] = ex__11567__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16393);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16438;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16470 = state_16393;
state_16393 = G__16470;
continue;
}
} else
{return ret_value__11565__auto__;
}
break;
}
});
state_machine__11564__auto__ = function(state_16393){
switch(arguments.length){
case 0:
return state_machine__11564__auto____0.call(this);
case 1:
return state_machine__11564__auto____1.call(this,state_16393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11564__auto____0;
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11564__auto____1;
return state_machine__11564__auto__;
})()
;})(switch__11563__auto__,c__11628__auto___16441,mults,ensure_mult,p))
})();var state__11630__auto__ = (function (){var statearr_16440 = f__11629__auto__.call(null);(statearr_16440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11628__auto___16441);
return statearr_16440;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11630__auto__);
});})(c__11628__auto___16441,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__11628__auto___16607 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11628__auto___16607,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11629__auto__ = (function (){var switch__11563__auto__ = ((function (c__11628__auto___16607,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16577){var state_val_16578 = (state_16577[(1)]);if((state_val_16578 === (7)))
{var state_16577__$1 = state_16577;var statearr_16579_16608 = state_16577__$1;(statearr_16579_16608[(2)] = null);
(statearr_16579_16608[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16578 === (1)))
{var state_16577__$1 = state_16577;var statearr_16580_16609 = state_16577__$1;(statearr_16580_16609[(2)] = null);
(statearr_16580_16609[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16578 === (4)))
{var inst_16541 = (state_16577[(7)]);var inst_16543 = (inst_16541 < cnt);var state_16577__$1 = state_16577;if(cljs.core.truth_(inst_16543))
{var statearr_16581_16610 = state_16577__$1;(statearr_16581_16610[(1)] = (6));
} else
{var statearr_16582_16611 = state_16577__$1;(statearr_16582_16611[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16578 === (15)))
{var inst_16573 = (state_16577[(2)]);var state_16577__$1 = state_16577;var statearr_16583_16612 = state_16577__$1;(statearr_16583_16612[(2)] = inst_16573);
(statearr_16583_16612[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16578 === (13)))
{var inst_16566 = cljs.core.async.close_BANG_.call(null,out);var state_16577__$1 = state_16577;var statearr_16584_16613 = state_16577__$1;(statearr_16584_16613[(2)] = inst_16566);
(statearr_16584_16613[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16578 === (6)))
{var state_16577__$1 = state_16577;var statearr_16585_16614 = state_16577__$1;(statearr_16585_16614[(2)] = null);
(statearr_16585_16614[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16578 === (3)))
{var inst_16575 = (state_16577[(2)]);var state_16577__$1 = state_16577;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16577__$1,inst_16575);
} else
{if((state_val_16578 === (12)))
{var inst_16563 = (state_16577[(8)]);var inst_16563__$1 = (state_16577[(2)]);var inst_16564 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16563__$1);var state_16577__$1 = (function (){var statearr_16586 = state_16577;(statearr_16586[(8)] = inst_16563__$1);
return statearr_16586;
})();if(cljs.core.truth_(inst_16564))
{var statearr_16587_16615 = state_16577__$1;(statearr_16587_16615[(1)] = (13));
} else
{var statearr_16588_16616 = state_16577__$1;(statearr_16588_16616[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16578 === (2)))
{var inst_16540 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16541 = (0);var state_16577__$1 = (function (){var statearr_16589 = state_16577;(statearr_16589[(7)] = inst_16541);
(statearr_16589[(9)] = inst_16540);
return statearr_16589;
})();var statearr_16590_16617 = state_16577__$1;(statearr_16590_16617[(2)] = null);
(statearr_16590_16617[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16578 === (11)))
{var inst_16541 = (state_16577[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16577,(10),Object,null,(9));var inst_16550 = chs__$1.call(null,inst_16541);var inst_16551 = done.call(null,inst_16541);var inst_16552 = cljs.core.async.take_BANG_.call(null,inst_16550,inst_16551);var state_16577__$1 = state_16577;var statearr_16591_16618 = state_16577__$1;(statearr_16591_16618[(2)] = inst_16552);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16577__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16578 === (9)))
{var inst_16541 = (state_16577[(7)]);var inst_16554 = (state_16577[(2)]);var inst_16555 = (inst_16541 + (1));var inst_16541__$1 = inst_16555;var state_16577__$1 = (function (){var statearr_16592 = state_16577;(statearr_16592[(7)] = inst_16541__$1);
(statearr_16592[(10)] = inst_16554);
return statearr_16592;
})();var statearr_16593_16619 = state_16577__$1;(statearr_16593_16619[(2)] = null);
(statearr_16593_16619[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16578 === (5)))
{var inst_16561 = (state_16577[(2)]);var state_16577__$1 = (function (){var statearr_16594 = state_16577;(statearr_16594[(11)] = inst_16561);
return statearr_16594;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16577__$1,(12),dchan);
} else
{if((state_val_16578 === (14)))
{var inst_16563 = (state_16577[(8)]);var inst_16568 = cljs.core.apply.call(null,f,inst_16563);var state_16577__$1 = state_16577;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16577__$1,(16),out,inst_16568);
} else
{if((state_val_16578 === (16)))
{var inst_16570 = (state_16577[(2)]);var state_16577__$1 = (function (){var statearr_16595 = state_16577;(statearr_16595[(12)] = inst_16570);
return statearr_16595;
})();var statearr_16596_16620 = state_16577__$1;(statearr_16596_16620[(2)] = null);
(statearr_16596_16620[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16578 === (10)))
{var inst_16545 = (state_16577[(2)]);var inst_16546 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16577__$1 = (function (){var statearr_16597 = state_16577;(statearr_16597[(13)] = inst_16545);
return statearr_16597;
})();var statearr_16598_16621 = state_16577__$1;(statearr_16598_16621[(2)] = inst_16546);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16577__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16578 === (8)))
{var inst_16559 = (state_16577[(2)]);var state_16577__$1 = state_16577;var statearr_16599_16622 = state_16577__$1;(statearr_16599_16622[(2)] = inst_16559);
(statearr_16599_16622[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11628__auto___16607,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__11563__auto__,c__11628__auto___16607,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11564__auto__ = null;
var state_machine__11564__auto____0 = (function (){var statearr_16603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16603[(0)] = state_machine__11564__auto__);
(statearr_16603[(1)] = (1));
return statearr_16603;
});
var state_machine__11564__auto____1 = (function (state_16577){while(true){
var ret_value__11565__auto__ = (function (){try{while(true){
var result__11566__auto__ = switch__11563__auto__.call(null,state_16577);if(cljs.core.keyword_identical_QMARK_.call(null,result__11566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11566__auto__;
}
break;
}
}catch (e16604){if((e16604 instanceof Object))
{var ex__11567__auto__ = e16604;var statearr_16605_16623 = state_16577;(statearr_16605_16623[(5)] = ex__11567__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16577);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16604;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16624 = state_16577;
state_16577 = G__16624;
continue;
}
} else
{return ret_value__11565__auto__;
}
break;
}
});
state_machine__11564__auto__ = function(state_16577){
switch(arguments.length){
case 0:
return state_machine__11564__auto____0.call(this);
case 1:
return state_machine__11564__auto____1.call(this,state_16577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11564__auto____0;
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11564__auto____1;
return state_machine__11564__auto__;
})()
;})(switch__11563__auto__,c__11628__auto___16607,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11630__auto__ = (function (){var statearr_16606 = f__11629__auto__.call(null);(statearr_16606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11628__auto___16607);
return statearr_16606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11630__auto__);
});})(c__11628__auto___16607,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11628__auto___16732 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11628__auto___16732,out){
return (function (){var f__11629__auto__ = (function (){var switch__11563__auto__ = ((function (c__11628__auto___16732,out){
return (function (state_16708){var state_val_16709 = (state_16708[(1)]);if((state_val_16709 === (7)))
{var inst_16688 = (state_16708[(7)]);var inst_16687 = (state_16708[(8)]);var inst_16687__$1 = (state_16708[(2)]);var inst_16688__$1 = cljs.core.nth.call(null,inst_16687__$1,(0),null);var inst_16689 = cljs.core.nth.call(null,inst_16687__$1,(1),null);var inst_16690 = (inst_16688__$1 == null);var state_16708__$1 = (function (){var statearr_16710 = state_16708;(statearr_16710[(7)] = inst_16688__$1);
(statearr_16710[(8)] = inst_16687__$1);
(statearr_16710[(9)] = inst_16689);
return statearr_16710;
})();if(cljs.core.truth_(inst_16690))
{var statearr_16711_16733 = state_16708__$1;(statearr_16711_16733[(1)] = (8));
} else
{var statearr_16712_16734 = state_16708__$1;(statearr_16712_16734[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16709 === (1)))
{var inst_16679 = cljs.core.vec.call(null,chs);var inst_16680 = inst_16679;var state_16708__$1 = (function (){var statearr_16713 = state_16708;(statearr_16713[(10)] = inst_16680);
return statearr_16713;
})();var statearr_16714_16735 = state_16708__$1;(statearr_16714_16735[(2)] = null);
(statearr_16714_16735[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16709 === (4)))
{var inst_16680 = (state_16708[(10)]);var state_16708__$1 = state_16708;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16708__$1,(7),inst_16680);
} else
{if((state_val_16709 === (6)))
{var inst_16704 = (state_16708[(2)]);var state_16708__$1 = state_16708;var statearr_16715_16736 = state_16708__$1;(statearr_16715_16736[(2)] = inst_16704);
(statearr_16715_16736[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16709 === (3)))
{var inst_16706 = (state_16708[(2)]);var state_16708__$1 = state_16708;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16708__$1,inst_16706);
} else
{if((state_val_16709 === (2)))
{var inst_16680 = (state_16708[(10)]);var inst_16682 = cljs.core.count.call(null,inst_16680);var inst_16683 = (inst_16682 > (0));var state_16708__$1 = state_16708;if(cljs.core.truth_(inst_16683))
{var statearr_16717_16737 = state_16708__$1;(statearr_16717_16737[(1)] = (4));
} else
{var statearr_16718_16738 = state_16708__$1;(statearr_16718_16738[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16709 === (11)))
{var inst_16680 = (state_16708[(10)]);var inst_16697 = (state_16708[(2)]);var tmp16716 = inst_16680;var inst_16680__$1 = tmp16716;var state_16708__$1 = (function (){var statearr_16719 = state_16708;(statearr_16719[(11)] = inst_16697);
(statearr_16719[(10)] = inst_16680__$1);
return statearr_16719;
})();var statearr_16720_16739 = state_16708__$1;(statearr_16720_16739[(2)] = null);
(statearr_16720_16739[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16709 === (9)))
{var inst_16688 = (state_16708[(7)]);var state_16708__$1 = state_16708;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16708__$1,(11),out,inst_16688);
} else
{if((state_val_16709 === (5)))
{var inst_16702 = cljs.core.async.close_BANG_.call(null,out);var state_16708__$1 = state_16708;var statearr_16721_16740 = state_16708__$1;(statearr_16721_16740[(2)] = inst_16702);
(statearr_16721_16740[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16709 === (10)))
{var inst_16700 = (state_16708[(2)]);var state_16708__$1 = state_16708;var statearr_16722_16741 = state_16708__$1;(statearr_16722_16741[(2)] = inst_16700);
(statearr_16722_16741[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16709 === (8)))
{var inst_16680 = (state_16708[(10)]);var inst_16688 = (state_16708[(7)]);var inst_16687 = (state_16708[(8)]);var inst_16689 = (state_16708[(9)]);var inst_16692 = (function (){var c = inst_16689;var v = inst_16688;var vec__16685 = inst_16687;var cs = inst_16680;return ((function (c,v,vec__16685,cs,inst_16680,inst_16688,inst_16687,inst_16689,state_val_16709,c__11628__auto___16732,out){
return (function (p1__16625_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16625_SHARP_);
});
;})(c,v,vec__16685,cs,inst_16680,inst_16688,inst_16687,inst_16689,state_val_16709,c__11628__auto___16732,out))
})();var inst_16693 = cljs.core.filterv.call(null,inst_16692,inst_16680);var inst_16680__$1 = inst_16693;var state_16708__$1 = (function (){var statearr_16723 = state_16708;(statearr_16723[(10)] = inst_16680__$1);
return statearr_16723;
})();var statearr_16724_16742 = state_16708__$1;(statearr_16724_16742[(2)] = null);
(statearr_16724_16742[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11628__auto___16732,out))
;return ((function (switch__11563__auto__,c__11628__auto___16732,out){
return (function() {
var state_machine__11564__auto__ = null;
var state_machine__11564__auto____0 = (function (){var statearr_16728 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16728[(0)] = state_machine__11564__auto__);
(statearr_16728[(1)] = (1));
return statearr_16728;
});
var state_machine__11564__auto____1 = (function (state_16708){while(true){
var ret_value__11565__auto__ = (function (){try{while(true){
var result__11566__auto__ = switch__11563__auto__.call(null,state_16708);if(cljs.core.keyword_identical_QMARK_.call(null,result__11566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11566__auto__;
}
break;
}
}catch (e16729){if((e16729 instanceof Object))
{var ex__11567__auto__ = e16729;var statearr_16730_16743 = state_16708;(statearr_16730_16743[(5)] = ex__11567__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16708);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16729;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16744 = state_16708;
state_16708 = G__16744;
continue;
}
} else
{return ret_value__11565__auto__;
}
break;
}
});
state_machine__11564__auto__ = function(state_16708){
switch(arguments.length){
case 0:
return state_machine__11564__auto____0.call(this);
case 1:
return state_machine__11564__auto____1.call(this,state_16708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11564__auto____0;
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11564__auto____1;
return state_machine__11564__auto__;
})()
;})(switch__11563__auto__,c__11628__auto___16732,out))
})();var state__11630__auto__ = (function (){var statearr_16731 = f__11629__auto__.call(null);(statearr_16731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11628__auto___16732);
return statearr_16731;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11630__auto__);
});})(c__11628__auto___16732,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11628__auto___16837 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11628__auto___16837,out){
return (function (){var f__11629__auto__ = (function (){var switch__11563__auto__ = ((function (c__11628__auto___16837,out){
return (function (state_16814){var state_val_16815 = (state_16814[(1)]);if((state_val_16815 === (7)))
{var inst_16796 = (state_16814[(7)]);var inst_16796__$1 = (state_16814[(2)]);var inst_16797 = (inst_16796__$1 == null);var inst_16798 = cljs.core.not.call(null,inst_16797);var state_16814__$1 = (function (){var statearr_16816 = state_16814;(statearr_16816[(7)] = inst_16796__$1);
return statearr_16816;
})();if(inst_16798)
{var statearr_16817_16838 = state_16814__$1;(statearr_16817_16838[(1)] = (8));
} else
{var statearr_16818_16839 = state_16814__$1;(statearr_16818_16839[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16815 === (1)))
{var inst_16791 = (0);var state_16814__$1 = (function (){var statearr_16819 = state_16814;(statearr_16819[(8)] = inst_16791);
return statearr_16819;
})();var statearr_16820_16840 = state_16814__$1;(statearr_16820_16840[(2)] = null);
(statearr_16820_16840[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16815 === (4)))
{var state_16814__$1 = state_16814;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16814__$1,(7),ch);
} else
{if((state_val_16815 === (6)))
{var inst_16809 = (state_16814[(2)]);var state_16814__$1 = state_16814;var statearr_16821_16841 = state_16814__$1;(statearr_16821_16841[(2)] = inst_16809);
(statearr_16821_16841[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16815 === (3)))
{var inst_16811 = (state_16814[(2)]);var inst_16812 = cljs.core.async.close_BANG_.call(null,out);var state_16814__$1 = (function (){var statearr_16822 = state_16814;(statearr_16822[(9)] = inst_16811);
return statearr_16822;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16814__$1,inst_16812);
} else
{if((state_val_16815 === (2)))
{var inst_16791 = (state_16814[(8)]);var inst_16793 = (inst_16791 < n);var state_16814__$1 = state_16814;if(cljs.core.truth_(inst_16793))
{var statearr_16823_16842 = state_16814__$1;(statearr_16823_16842[(1)] = (4));
} else
{var statearr_16824_16843 = state_16814__$1;(statearr_16824_16843[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16815 === (11)))
{var inst_16791 = (state_16814[(8)]);var inst_16801 = (state_16814[(2)]);var inst_16802 = (inst_16791 + (1));var inst_16791__$1 = inst_16802;var state_16814__$1 = (function (){var statearr_16825 = state_16814;(statearr_16825[(8)] = inst_16791__$1);
(statearr_16825[(10)] = inst_16801);
return statearr_16825;
})();var statearr_16826_16844 = state_16814__$1;(statearr_16826_16844[(2)] = null);
(statearr_16826_16844[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16815 === (9)))
{var state_16814__$1 = state_16814;var statearr_16827_16845 = state_16814__$1;(statearr_16827_16845[(2)] = null);
(statearr_16827_16845[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16815 === (5)))
{var state_16814__$1 = state_16814;var statearr_16828_16846 = state_16814__$1;(statearr_16828_16846[(2)] = null);
(statearr_16828_16846[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16815 === (10)))
{var inst_16806 = (state_16814[(2)]);var state_16814__$1 = state_16814;var statearr_16829_16847 = state_16814__$1;(statearr_16829_16847[(2)] = inst_16806);
(statearr_16829_16847[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16815 === (8)))
{var inst_16796 = (state_16814[(7)]);var state_16814__$1 = state_16814;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16814__$1,(11),out,inst_16796);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11628__auto___16837,out))
;return ((function (switch__11563__auto__,c__11628__auto___16837,out){
return (function() {
var state_machine__11564__auto__ = null;
var state_machine__11564__auto____0 = (function (){var statearr_16833 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16833[(0)] = state_machine__11564__auto__);
(statearr_16833[(1)] = (1));
return statearr_16833;
});
var state_machine__11564__auto____1 = (function (state_16814){while(true){
var ret_value__11565__auto__ = (function (){try{while(true){
var result__11566__auto__ = switch__11563__auto__.call(null,state_16814);if(cljs.core.keyword_identical_QMARK_.call(null,result__11566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11566__auto__;
}
break;
}
}catch (e16834){if((e16834 instanceof Object))
{var ex__11567__auto__ = e16834;var statearr_16835_16848 = state_16814;(statearr_16835_16848[(5)] = ex__11567__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16814);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16834;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16849 = state_16814;
state_16814 = G__16849;
continue;
}
} else
{return ret_value__11565__auto__;
}
break;
}
});
state_machine__11564__auto__ = function(state_16814){
switch(arguments.length){
case 0:
return state_machine__11564__auto____0.call(this);
case 1:
return state_machine__11564__auto____1.call(this,state_16814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11564__auto____0;
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11564__auto____1;
return state_machine__11564__auto__;
})()
;})(switch__11563__auto__,c__11628__auto___16837,out))
})();var state__11630__auto__ = (function (){var statearr_16836 = f__11629__auto__.call(null);(statearr_16836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11628__auto___16837);
return statearr_16836;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11630__auto__);
});})(c__11628__auto___16837,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11628__auto___16946 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11628__auto___16946,out){
return (function (){var f__11629__auto__ = (function (){var switch__11563__auto__ = ((function (c__11628__auto___16946,out){
return (function (state_16921){var state_val_16922 = (state_16921[(1)]);if((state_val_16922 === (7)))
{var inst_16916 = (state_16921[(2)]);var state_16921__$1 = state_16921;var statearr_16923_16947 = state_16921__$1;(statearr_16923_16947[(2)] = inst_16916);
(statearr_16923_16947[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16922 === (1)))
{var inst_16898 = null;var state_16921__$1 = (function (){var statearr_16924 = state_16921;(statearr_16924[(7)] = inst_16898);
return statearr_16924;
})();var statearr_16925_16948 = state_16921__$1;(statearr_16925_16948[(2)] = null);
(statearr_16925_16948[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16922 === (4)))
{var inst_16901 = (state_16921[(8)]);var inst_16901__$1 = (state_16921[(2)]);var inst_16902 = (inst_16901__$1 == null);var inst_16903 = cljs.core.not.call(null,inst_16902);var state_16921__$1 = (function (){var statearr_16926 = state_16921;(statearr_16926[(8)] = inst_16901__$1);
return statearr_16926;
})();if(inst_16903)
{var statearr_16927_16949 = state_16921__$1;(statearr_16927_16949[(1)] = (5));
} else
{var statearr_16928_16950 = state_16921__$1;(statearr_16928_16950[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16922 === (6)))
{var state_16921__$1 = state_16921;var statearr_16929_16951 = state_16921__$1;(statearr_16929_16951[(2)] = null);
(statearr_16929_16951[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16922 === (3)))
{var inst_16918 = (state_16921[(2)]);var inst_16919 = cljs.core.async.close_BANG_.call(null,out);var state_16921__$1 = (function (){var statearr_16930 = state_16921;(statearr_16930[(9)] = inst_16918);
return statearr_16930;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16921__$1,inst_16919);
} else
{if((state_val_16922 === (2)))
{var state_16921__$1 = state_16921;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16921__$1,(4),ch);
} else
{if((state_val_16922 === (11)))
{var inst_16901 = (state_16921[(8)]);var inst_16910 = (state_16921[(2)]);var inst_16898 = inst_16901;var state_16921__$1 = (function (){var statearr_16931 = state_16921;(statearr_16931[(7)] = inst_16898);
(statearr_16931[(10)] = inst_16910);
return statearr_16931;
})();var statearr_16932_16952 = state_16921__$1;(statearr_16932_16952[(2)] = null);
(statearr_16932_16952[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16922 === (9)))
{var inst_16901 = (state_16921[(8)]);var state_16921__$1 = state_16921;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16921__$1,(11),out,inst_16901);
} else
{if((state_val_16922 === (5)))
{var inst_16901 = (state_16921[(8)]);var inst_16898 = (state_16921[(7)]);var inst_16905 = cljs.core._EQ_.call(null,inst_16901,inst_16898);var state_16921__$1 = state_16921;if(inst_16905)
{var statearr_16934_16953 = state_16921__$1;(statearr_16934_16953[(1)] = (8));
} else
{var statearr_16935_16954 = state_16921__$1;(statearr_16935_16954[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16922 === (10)))
{var inst_16913 = (state_16921[(2)]);var state_16921__$1 = state_16921;var statearr_16936_16955 = state_16921__$1;(statearr_16936_16955[(2)] = inst_16913);
(statearr_16936_16955[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16922 === (8)))
{var inst_16898 = (state_16921[(7)]);var tmp16933 = inst_16898;var inst_16898__$1 = tmp16933;var state_16921__$1 = (function (){var statearr_16937 = state_16921;(statearr_16937[(7)] = inst_16898__$1);
return statearr_16937;
})();var statearr_16938_16956 = state_16921__$1;(statearr_16938_16956[(2)] = null);
(statearr_16938_16956[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11628__auto___16946,out))
;return ((function (switch__11563__auto__,c__11628__auto___16946,out){
return (function() {
var state_machine__11564__auto__ = null;
var state_machine__11564__auto____0 = (function (){var statearr_16942 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16942[(0)] = state_machine__11564__auto__);
(statearr_16942[(1)] = (1));
return statearr_16942;
});
var state_machine__11564__auto____1 = (function (state_16921){while(true){
var ret_value__11565__auto__ = (function (){try{while(true){
var result__11566__auto__ = switch__11563__auto__.call(null,state_16921);if(cljs.core.keyword_identical_QMARK_.call(null,result__11566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11566__auto__;
}
break;
}
}catch (e16943){if((e16943 instanceof Object))
{var ex__11567__auto__ = e16943;var statearr_16944_16957 = state_16921;(statearr_16944_16957[(5)] = ex__11567__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16921);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16943;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16958 = state_16921;
state_16921 = G__16958;
continue;
}
} else
{return ret_value__11565__auto__;
}
break;
}
});
state_machine__11564__auto__ = function(state_16921){
switch(arguments.length){
case 0:
return state_machine__11564__auto____0.call(this);
case 1:
return state_machine__11564__auto____1.call(this,state_16921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11564__auto____0;
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11564__auto____1;
return state_machine__11564__auto__;
})()
;})(switch__11563__auto__,c__11628__auto___16946,out))
})();var state__11630__auto__ = (function (){var statearr_16945 = f__11629__auto__.call(null);(statearr_16945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11628__auto___16946);
return statearr_16945;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11630__auto__);
});})(c__11628__auto___16946,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11628__auto___17093 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11628__auto___17093,out){
return (function (){var f__11629__auto__ = (function (){var switch__11563__auto__ = ((function (c__11628__auto___17093,out){
return (function (state_17063){var state_val_17064 = (state_17063[(1)]);if((state_val_17064 === (7)))
{var inst_17059 = (state_17063[(2)]);var state_17063__$1 = state_17063;var statearr_17065_17094 = state_17063__$1;(statearr_17065_17094[(2)] = inst_17059);
(statearr_17065_17094[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17064 === (1)))
{var inst_17026 = (new Array(n));var inst_17027 = inst_17026;var inst_17028 = (0);var state_17063__$1 = (function (){var statearr_17066 = state_17063;(statearr_17066[(7)] = inst_17028);
(statearr_17066[(8)] = inst_17027);
return statearr_17066;
})();var statearr_17067_17095 = state_17063__$1;(statearr_17067_17095[(2)] = null);
(statearr_17067_17095[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17064 === (4)))
{var inst_17031 = (state_17063[(9)]);var inst_17031__$1 = (state_17063[(2)]);var inst_17032 = (inst_17031__$1 == null);var inst_17033 = cljs.core.not.call(null,inst_17032);var state_17063__$1 = (function (){var statearr_17068 = state_17063;(statearr_17068[(9)] = inst_17031__$1);
return statearr_17068;
})();if(inst_17033)
{var statearr_17069_17096 = state_17063__$1;(statearr_17069_17096[(1)] = (5));
} else
{var statearr_17070_17097 = state_17063__$1;(statearr_17070_17097[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17064 === (15)))
{var inst_17053 = (state_17063[(2)]);var state_17063__$1 = state_17063;var statearr_17071_17098 = state_17063__$1;(statearr_17071_17098[(2)] = inst_17053);
(statearr_17071_17098[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17064 === (13)))
{var state_17063__$1 = state_17063;var statearr_17072_17099 = state_17063__$1;(statearr_17072_17099[(2)] = null);
(statearr_17072_17099[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17064 === (6)))
{var inst_17028 = (state_17063[(7)]);var inst_17049 = (inst_17028 > (0));var state_17063__$1 = state_17063;if(cljs.core.truth_(inst_17049))
{var statearr_17073_17100 = state_17063__$1;(statearr_17073_17100[(1)] = (12));
} else
{var statearr_17074_17101 = state_17063__$1;(statearr_17074_17101[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17064 === (3)))
{var inst_17061 = (state_17063[(2)]);var state_17063__$1 = state_17063;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17063__$1,inst_17061);
} else
{if((state_val_17064 === (12)))
{var inst_17027 = (state_17063[(8)]);var inst_17051 = cljs.core.vec.call(null,inst_17027);var state_17063__$1 = state_17063;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17063__$1,(15),out,inst_17051);
} else
{if((state_val_17064 === (2)))
{var state_17063__$1 = state_17063;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17063__$1,(4),ch);
} else
{if((state_val_17064 === (11)))
{var inst_17043 = (state_17063[(2)]);var inst_17044 = (new Array(n));var inst_17027 = inst_17044;var inst_17028 = (0);var state_17063__$1 = (function (){var statearr_17075 = state_17063;(statearr_17075[(7)] = inst_17028);
(statearr_17075[(10)] = inst_17043);
(statearr_17075[(8)] = inst_17027);
return statearr_17075;
})();var statearr_17076_17102 = state_17063__$1;(statearr_17076_17102[(2)] = null);
(statearr_17076_17102[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17064 === (9)))
{var inst_17027 = (state_17063[(8)]);var inst_17041 = cljs.core.vec.call(null,inst_17027);var state_17063__$1 = state_17063;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17063__$1,(11),out,inst_17041);
} else
{if((state_val_17064 === (5)))
{var inst_17036 = (state_17063[(11)]);var inst_17031 = (state_17063[(9)]);var inst_17028 = (state_17063[(7)]);var inst_17027 = (state_17063[(8)]);var inst_17035 = (inst_17027[inst_17028] = inst_17031);var inst_17036__$1 = (inst_17028 + (1));var inst_17037 = (inst_17036__$1 < n);var state_17063__$1 = (function (){var statearr_17077 = state_17063;(statearr_17077[(11)] = inst_17036__$1);
(statearr_17077[(12)] = inst_17035);
return statearr_17077;
})();if(cljs.core.truth_(inst_17037))
{var statearr_17078_17103 = state_17063__$1;(statearr_17078_17103[(1)] = (8));
} else
{var statearr_17079_17104 = state_17063__$1;(statearr_17079_17104[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17064 === (14)))
{var inst_17056 = (state_17063[(2)]);var inst_17057 = cljs.core.async.close_BANG_.call(null,out);var state_17063__$1 = (function (){var statearr_17081 = state_17063;(statearr_17081[(13)] = inst_17056);
return statearr_17081;
})();var statearr_17082_17105 = state_17063__$1;(statearr_17082_17105[(2)] = inst_17057);
(statearr_17082_17105[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17064 === (10)))
{var inst_17047 = (state_17063[(2)]);var state_17063__$1 = state_17063;var statearr_17083_17106 = state_17063__$1;(statearr_17083_17106[(2)] = inst_17047);
(statearr_17083_17106[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17064 === (8)))
{var inst_17036 = (state_17063[(11)]);var inst_17027 = (state_17063[(8)]);var tmp17080 = inst_17027;var inst_17027__$1 = tmp17080;var inst_17028 = inst_17036;var state_17063__$1 = (function (){var statearr_17084 = state_17063;(statearr_17084[(7)] = inst_17028);
(statearr_17084[(8)] = inst_17027__$1);
return statearr_17084;
})();var statearr_17085_17107 = state_17063__$1;(statearr_17085_17107[(2)] = null);
(statearr_17085_17107[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11628__auto___17093,out))
;return ((function (switch__11563__auto__,c__11628__auto___17093,out){
return (function() {
var state_machine__11564__auto__ = null;
var state_machine__11564__auto____0 = (function (){var statearr_17089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17089[(0)] = state_machine__11564__auto__);
(statearr_17089[(1)] = (1));
return statearr_17089;
});
var state_machine__11564__auto____1 = (function (state_17063){while(true){
var ret_value__11565__auto__ = (function (){try{while(true){
var result__11566__auto__ = switch__11563__auto__.call(null,state_17063);if(cljs.core.keyword_identical_QMARK_.call(null,result__11566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11566__auto__;
}
break;
}
}catch (e17090){if((e17090 instanceof Object))
{var ex__11567__auto__ = e17090;var statearr_17091_17108 = state_17063;(statearr_17091_17108[(5)] = ex__11567__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17063);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17090;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17109 = state_17063;
state_17063 = G__17109;
continue;
}
} else
{return ret_value__11565__auto__;
}
break;
}
});
state_machine__11564__auto__ = function(state_17063){
switch(arguments.length){
case 0:
return state_machine__11564__auto____0.call(this);
case 1:
return state_machine__11564__auto____1.call(this,state_17063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11564__auto____0;
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11564__auto____1;
return state_machine__11564__auto__;
})()
;})(switch__11563__auto__,c__11628__auto___17093,out))
})();var state__11630__auto__ = (function (){var statearr_17092 = f__11629__auto__.call(null);(statearr_17092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11628__auto___17093);
return statearr_17092;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11630__auto__);
});})(c__11628__auto___17093,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11628__auto___17252 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11628__auto___17252,out){
return (function (){var f__11629__auto__ = (function (){var switch__11563__auto__ = ((function (c__11628__auto___17252,out){
return (function (state_17222){var state_val_17223 = (state_17222[(1)]);if((state_val_17223 === (7)))
{var inst_17218 = (state_17222[(2)]);var state_17222__$1 = state_17222;var statearr_17224_17253 = state_17222__$1;(statearr_17224_17253[(2)] = inst_17218);
(statearr_17224_17253[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17223 === (1)))
{var inst_17181 = [];var inst_17182 = inst_17181;var inst_17183 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_17222__$1 = (function (){var statearr_17225 = state_17222;(statearr_17225[(7)] = inst_17183);
(statearr_17225[(8)] = inst_17182);
return statearr_17225;
})();var statearr_17226_17254 = state_17222__$1;(statearr_17226_17254[(2)] = null);
(statearr_17226_17254[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17223 === (4)))
{var inst_17186 = (state_17222[(9)]);var inst_17186__$1 = (state_17222[(2)]);var inst_17187 = (inst_17186__$1 == null);var inst_17188 = cljs.core.not.call(null,inst_17187);var state_17222__$1 = (function (){var statearr_17227 = state_17222;(statearr_17227[(9)] = inst_17186__$1);
return statearr_17227;
})();if(inst_17188)
{var statearr_17228_17255 = state_17222__$1;(statearr_17228_17255[(1)] = (5));
} else
{var statearr_17229_17256 = state_17222__$1;(statearr_17229_17256[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17223 === (15)))
{var inst_17212 = (state_17222[(2)]);var state_17222__$1 = state_17222;var statearr_17230_17257 = state_17222__$1;(statearr_17230_17257[(2)] = inst_17212);
(statearr_17230_17257[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17223 === (13)))
{var state_17222__$1 = state_17222;var statearr_17231_17258 = state_17222__$1;(statearr_17231_17258[(2)] = null);
(statearr_17231_17258[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17223 === (6)))
{var inst_17182 = (state_17222[(8)]);var inst_17207 = inst_17182.length;var inst_17208 = (inst_17207 > (0));var state_17222__$1 = state_17222;if(cljs.core.truth_(inst_17208))
{var statearr_17232_17259 = state_17222__$1;(statearr_17232_17259[(1)] = (12));
} else
{var statearr_17233_17260 = state_17222__$1;(statearr_17233_17260[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17223 === (3)))
{var inst_17220 = (state_17222[(2)]);var state_17222__$1 = state_17222;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17222__$1,inst_17220);
} else
{if((state_val_17223 === (12)))
{var inst_17182 = (state_17222[(8)]);var inst_17210 = cljs.core.vec.call(null,inst_17182);var state_17222__$1 = state_17222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17222__$1,(15),out,inst_17210);
} else
{if((state_val_17223 === (2)))
{var state_17222__$1 = state_17222;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17222__$1,(4),ch);
} else
{if((state_val_17223 === (11)))
{var inst_17186 = (state_17222[(9)]);var inst_17190 = (state_17222[(10)]);var inst_17200 = (state_17222[(2)]);var inst_17201 = [];var inst_17202 = inst_17201.push(inst_17186);var inst_17182 = inst_17201;var inst_17183 = inst_17190;var state_17222__$1 = (function (){var statearr_17234 = state_17222;(statearr_17234[(11)] = inst_17200);
(statearr_17234[(12)] = inst_17202);
(statearr_17234[(7)] = inst_17183);
(statearr_17234[(8)] = inst_17182);
return statearr_17234;
})();var statearr_17235_17261 = state_17222__$1;(statearr_17235_17261[(2)] = null);
(statearr_17235_17261[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17223 === (9)))
{var inst_17182 = (state_17222[(8)]);var inst_17198 = cljs.core.vec.call(null,inst_17182);var state_17222__$1 = state_17222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17222__$1,(11),out,inst_17198);
} else
{if((state_val_17223 === (5)))
{var inst_17186 = (state_17222[(9)]);var inst_17183 = (state_17222[(7)]);var inst_17190 = (state_17222[(10)]);var inst_17190__$1 = f.call(null,inst_17186);var inst_17191 = cljs.core._EQ_.call(null,inst_17190__$1,inst_17183);var inst_17192 = cljs.core.keyword_identical_QMARK_.call(null,inst_17183,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_17193 = (inst_17191) || (inst_17192);var state_17222__$1 = (function (){var statearr_17236 = state_17222;(statearr_17236[(10)] = inst_17190__$1);
return statearr_17236;
})();if(cljs.core.truth_(inst_17193))
{var statearr_17237_17262 = state_17222__$1;(statearr_17237_17262[(1)] = (8));
} else
{var statearr_17238_17263 = state_17222__$1;(statearr_17238_17263[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17223 === (14)))
{var inst_17215 = (state_17222[(2)]);var inst_17216 = cljs.core.async.close_BANG_.call(null,out);var state_17222__$1 = (function (){var statearr_17240 = state_17222;(statearr_17240[(13)] = inst_17215);
return statearr_17240;
})();var statearr_17241_17264 = state_17222__$1;(statearr_17241_17264[(2)] = inst_17216);
(statearr_17241_17264[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17223 === (10)))
{var inst_17205 = (state_17222[(2)]);var state_17222__$1 = state_17222;var statearr_17242_17265 = state_17222__$1;(statearr_17242_17265[(2)] = inst_17205);
(statearr_17242_17265[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17223 === (8)))
{var inst_17186 = (state_17222[(9)]);var inst_17182 = (state_17222[(8)]);var inst_17190 = (state_17222[(10)]);var inst_17195 = inst_17182.push(inst_17186);var tmp17239 = inst_17182;var inst_17182__$1 = tmp17239;var inst_17183 = inst_17190;var state_17222__$1 = (function (){var statearr_17243 = state_17222;(statearr_17243[(14)] = inst_17195);
(statearr_17243[(7)] = inst_17183);
(statearr_17243[(8)] = inst_17182__$1);
return statearr_17243;
})();var statearr_17244_17266 = state_17222__$1;(statearr_17244_17266[(2)] = null);
(statearr_17244_17266[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11628__auto___17252,out))
;return ((function (switch__11563__auto__,c__11628__auto___17252,out){
return (function() {
var state_machine__11564__auto__ = null;
var state_machine__11564__auto____0 = (function (){var statearr_17248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17248[(0)] = state_machine__11564__auto__);
(statearr_17248[(1)] = (1));
return statearr_17248;
});
var state_machine__11564__auto____1 = (function (state_17222){while(true){
var ret_value__11565__auto__ = (function (){try{while(true){
var result__11566__auto__ = switch__11563__auto__.call(null,state_17222);if(cljs.core.keyword_identical_QMARK_.call(null,result__11566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11566__auto__;
}
break;
}
}catch (e17249){if((e17249 instanceof Object))
{var ex__11567__auto__ = e17249;var statearr_17250_17267 = state_17222;(statearr_17250_17267[(5)] = ex__11567__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17222);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17249;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17268 = state_17222;
state_17222 = G__17268;
continue;
}
} else
{return ret_value__11565__auto__;
}
break;
}
});
state_machine__11564__auto__ = function(state_17222){
switch(arguments.length){
case 0:
return state_machine__11564__auto____0.call(this);
case 1:
return state_machine__11564__auto____1.call(this,state_17222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11564__auto____0;
state_machine__11564__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11564__auto____1;
return state_machine__11564__auto__;
})()
;})(switch__11563__auto__,c__11628__auto___17252,out))
})();var state__11630__auto__ = (function (){var statearr_17251 = f__11629__auto__.call(null);(statearr_17251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11628__auto___17252);
return statearr_17251;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11630__auto__);
});})(c__11628__auto___17252,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map