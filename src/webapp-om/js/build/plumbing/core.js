// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__10910__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__10910 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__10910__delegate.call(this,m,k,f,x1,x2,xs);};
G__10910.cljs$lang$maxFixedArity = 5;
G__10910.cljs$lang$applyTo = (function (arglist__10911){
var m = cljs.core.first(arglist__10911);
arglist__10911 = cljs.core.next(arglist__10911);
var k = cljs.core.first(arglist__10911);
arglist__10911 = cljs.core.next(arglist__10911);
var f = cljs.core.first(arglist__10911);
arglist__10911 = cljs.core.next(arglist__10911);
var x1 = cljs.core.first(arglist__10911);
arglist__10911 = cljs.core.next(arglist__10911);
var x2 = cljs.core.first(arglist__10911);
var xs = cljs.core.rest(arglist__10911);
return G__10910__delegate(m,k,f,x1,x2,xs);
});
G__10910.cljs$core$IFn$_invoke$arity$variadic = G__10910__delegate;
return G__10910;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__8852__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__10920_10926 = cljs.core.seq.call(null,m);var chunk__10921_10927 = null;var count__10922_10928 = (0);var i__10923_10929 = (0);while(true){
if((i__10923_10929 < count__10922_10928))
{var vec__10924_10930 = cljs.core._nth.call(null,chunk__10921_10927,i__10923_10929);var k_10931 = cljs.core.nth.call(null,vec__10924_10930,(0),null);var v_10932 = cljs.core.nth.call(null,vec__10924_10930,(1),null);var m10919_10933 = cljs.core.deref.call(null,m_atom__8852__auto__);cljs.core.reset_BANG_.call(null,m_atom__8852__auto__,cljs.core.assoc_BANG_.call(null,m10919_10933,k_10931,f.call(null,v_10932)));
{
var G__10934 = seq__10920_10926;
var G__10935 = chunk__10921_10927;
var G__10936 = count__10922_10928;
var G__10937 = (i__10923_10929 + (1));
seq__10920_10926 = G__10934;
chunk__10921_10927 = G__10935;
count__10922_10928 = G__10936;
i__10923_10929 = G__10937;
continue;
}
} else
{var temp__4126__auto___10938 = cljs.core.seq.call(null,seq__10920_10926);if(temp__4126__auto___10938)
{var seq__10920_10939__$1 = temp__4126__auto___10938;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10920_10939__$1))
{var c__4314__auto___10940 = cljs.core.chunk_first.call(null,seq__10920_10939__$1);{
var G__10941 = cljs.core.chunk_rest.call(null,seq__10920_10939__$1);
var G__10942 = c__4314__auto___10940;
var G__10943 = cljs.core.count.call(null,c__4314__auto___10940);
var G__10944 = (0);
seq__10920_10926 = G__10941;
chunk__10921_10927 = G__10942;
count__10922_10928 = G__10943;
i__10923_10929 = G__10944;
continue;
}
} else
{var vec__10925_10945 = cljs.core.first.call(null,seq__10920_10939__$1);var k_10946 = cljs.core.nth.call(null,vec__10925_10945,(0),null);var v_10947 = cljs.core.nth.call(null,vec__10925_10945,(1),null);var m10919_10948 = cljs.core.deref.call(null,m_atom__8852__auto__);cljs.core.reset_BANG_.call(null,m_atom__8852__auto__,cljs.core.assoc_BANG_.call(null,m10919_10948,k_10946,f.call(null,v_10947)));
{
var G__10949 = cljs.core.next.call(null,seq__10920_10939__$1);
var G__10950 = null;
var G__10951 = (0);
var G__10952 = (0);
seq__10920_10926 = G__10949;
chunk__10921_10927 = G__10950;
count__10922_10928 = G__10951;
i__10923_10929 = G__10952;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8852__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__8852__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__10961_10967 = cljs.core.seq.call(null,m);var chunk__10962_10968 = null;var count__10963_10969 = (0);var i__10964_10970 = (0);while(true){
if((i__10964_10970 < count__10963_10969))
{var vec__10965_10971 = cljs.core._nth.call(null,chunk__10962_10968,i__10964_10970);var k_10972 = cljs.core.nth.call(null,vec__10965_10971,(0),null);var v_10973 = cljs.core.nth.call(null,vec__10965_10971,(1),null);var m10960_10974 = cljs.core.deref.call(null,m_atom__8852__auto__);cljs.core.reset_BANG_.call(null,m_atom__8852__auto__,cljs.core.assoc_BANG_.call(null,m10960_10974,f.call(null,k_10972),v_10973));
{
var G__10975 = seq__10961_10967;
var G__10976 = chunk__10962_10968;
var G__10977 = count__10963_10969;
var G__10978 = (i__10964_10970 + (1));
seq__10961_10967 = G__10975;
chunk__10962_10968 = G__10976;
count__10963_10969 = G__10977;
i__10964_10970 = G__10978;
continue;
}
} else
{var temp__4126__auto___10979 = cljs.core.seq.call(null,seq__10961_10967);if(temp__4126__auto___10979)
{var seq__10961_10980__$1 = temp__4126__auto___10979;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10961_10980__$1))
{var c__4314__auto___10981 = cljs.core.chunk_first.call(null,seq__10961_10980__$1);{
var G__10982 = cljs.core.chunk_rest.call(null,seq__10961_10980__$1);
var G__10983 = c__4314__auto___10981;
var G__10984 = cljs.core.count.call(null,c__4314__auto___10981);
var G__10985 = (0);
seq__10961_10967 = G__10982;
chunk__10962_10968 = G__10983;
count__10963_10969 = G__10984;
i__10964_10970 = G__10985;
continue;
}
} else
{var vec__10966_10986 = cljs.core.first.call(null,seq__10961_10980__$1);var k_10987 = cljs.core.nth.call(null,vec__10966_10986,(0),null);var v_10988 = cljs.core.nth.call(null,vec__10966_10986,(1),null);var m10960_10989 = cljs.core.deref.call(null,m_atom__8852__auto__);cljs.core.reset_BANG_.call(null,m_atom__8852__auto__,cljs.core.assoc_BANG_.call(null,m10960_10989,f.call(null,k_10987),v_10988));
{
var G__10990 = cljs.core.next.call(null,seq__10961_10980__$1);
var G__10991 = null;
var G__10992 = (0);
var G__10993 = (0);
seq__10961_10967 = G__10990;
chunk__10962_10968 = G__10991;
count__10963_10969 = G__10992;
i__10964_10970 = G__10993;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8852__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__8852__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__11000_11004 = cljs.core.seq.call(null,ks);var chunk__11001_11005 = null;var count__11002_11006 = (0);var i__11003_11007 = (0);while(true){
if((i__11003_11007 < count__11002_11006))
{var k_11008 = cljs.core._nth.call(null,chunk__11001_11005,i__11003_11007);var m10999_11009 = cljs.core.deref.call(null,m_atom__8852__auto__);cljs.core.reset_BANG_.call(null,m_atom__8852__auto__,cljs.core.assoc_BANG_.call(null,m10999_11009,k_11008,f.call(null,k_11008)));
{
var G__11010 = seq__11000_11004;
var G__11011 = chunk__11001_11005;
var G__11012 = count__11002_11006;
var G__11013 = (i__11003_11007 + (1));
seq__11000_11004 = G__11010;
chunk__11001_11005 = G__11011;
count__11002_11006 = G__11012;
i__11003_11007 = G__11013;
continue;
}
} else
{var temp__4126__auto___11014 = cljs.core.seq.call(null,seq__11000_11004);if(temp__4126__auto___11014)
{var seq__11000_11015__$1 = temp__4126__auto___11014;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11000_11015__$1))
{var c__4314__auto___11016 = cljs.core.chunk_first.call(null,seq__11000_11015__$1);{
var G__11017 = cljs.core.chunk_rest.call(null,seq__11000_11015__$1);
var G__11018 = c__4314__auto___11016;
var G__11019 = cljs.core.count.call(null,c__4314__auto___11016);
var G__11020 = (0);
seq__11000_11004 = G__11017;
chunk__11001_11005 = G__11018;
count__11002_11006 = G__11019;
i__11003_11007 = G__11020;
continue;
}
} else
{var k_11021 = cljs.core.first.call(null,seq__11000_11015__$1);var m10999_11022 = cljs.core.deref.call(null,m_atom__8852__auto__);cljs.core.reset_BANG_.call(null,m_atom__8852__auto__,cljs.core.assoc_BANG_.call(null,m10999_11022,k_11021,f.call(null,k_11021)));
{
var G__11023 = cljs.core.next.call(null,seq__11000_11015__$1);
var G__11024 = null;
var G__11025 = (0);
var G__11026 = (0);
seq__11000_11004 = G__11023;
chunk__11001_11005 = G__11024;
count__11002_11006 = G__11025;
i__11003_11007 = G__11026;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8852__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__8852__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__11033_11037 = cljs.core.seq.call(null,vs);var chunk__11034_11038 = null;var count__11035_11039 = (0);var i__11036_11040 = (0);while(true){
if((i__11036_11040 < count__11035_11039))
{var v_11041 = cljs.core._nth.call(null,chunk__11034_11038,i__11036_11040);var m11032_11042 = cljs.core.deref.call(null,m_atom__8852__auto__);cljs.core.reset_BANG_.call(null,m_atom__8852__auto__,cljs.core.assoc_BANG_.call(null,m11032_11042,f.call(null,v_11041),v_11041));
{
var G__11043 = seq__11033_11037;
var G__11044 = chunk__11034_11038;
var G__11045 = count__11035_11039;
var G__11046 = (i__11036_11040 + (1));
seq__11033_11037 = G__11043;
chunk__11034_11038 = G__11044;
count__11035_11039 = G__11045;
i__11036_11040 = G__11046;
continue;
}
} else
{var temp__4126__auto___11047 = cljs.core.seq.call(null,seq__11033_11037);if(temp__4126__auto___11047)
{var seq__11033_11048__$1 = temp__4126__auto___11047;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11033_11048__$1))
{var c__4314__auto___11049 = cljs.core.chunk_first.call(null,seq__11033_11048__$1);{
var G__11050 = cljs.core.chunk_rest.call(null,seq__11033_11048__$1);
var G__11051 = c__4314__auto___11049;
var G__11052 = cljs.core.count.call(null,c__4314__auto___11049);
var G__11053 = (0);
seq__11033_11037 = G__11050;
chunk__11034_11038 = G__11051;
count__11035_11039 = G__11052;
i__11036_11040 = G__11053;
continue;
}
} else
{var v_11054 = cljs.core.first.call(null,seq__11033_11048__$1);var m11032_11055 = cljs.core.deref.call(null,m_atom__8852__auto__);cljs.core.reset_BANG_.call(null,m_atom__8852__auto__,cljs.core.assoc_BANG_.call(null,m11032_11055,f.call(null,v_11054),v_11054));
{
var G__11056 = cljs.core.next.call(null,seq__11033_11048__$1);
var G__11057 = null;
var G__11058 = (0);
var G__11059 = (0);
seq__11033_11037 = G__11056;
chunk__11034_11038 = G__11057;
count__11035_11039 = G__11058;
i__11036_11040 = G__11059;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8852__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__11060){var vec__11062 = p__11060;var k = cljs.core.nth.call(null,vec__11062,(0),null);var ks = cljs.core.nthnext.call(null,vec__11062,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3546__auto__ = ks;if(and__3546__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__3546__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__8852__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__11071_11077 = cljs.core.seq.call(null,x);var chunk__11072_11078 = null;var count__11073_11079 = (0);var i__11074_11080 = (0);while(true){
if((i__11074_11080 < count__11073_11079))
{var vec__11075_11081 = cljs.core._nth.call(null,chunk__11072_11078,i__11074_11080);var k_11082 = cljs.core.nth.call(null,vec__11075_11081,(0),null);var v_11083 = cljs.core.nth.call(null,vec__11075_11081,(1),null);var m11070_11084 = cljs.core.deref.call(null,m_atom__8852__auto__);cljs.core.reset_BANG_.call(null,m_atom__8852__auto__,cljs.core.assoc_BANG_.call(null,m11070_11084,((typeof k_11082 === 'string')?cljs.core.keyword.call(null,k_11082):k_11082),keywordize_map.call(null,v_11083)));
{
var G__11085 = seq__11071_11077;
var G__11086 = chunk__11072_11078;
var G__11087 = count__11073_11079;
var G__11088 = (i__11074_11080 + (1));
seq__11071_11077 = G__11085;
chunk__11072_11078 = G__11086;
count__11073_11079 = G__11087;
i__11074_11080 = G__11088;
continue;
}
} else
{var temp__4126__auto___11089 = cljs.core.seq.call(null,seq__11071_11077);if(temp__4126__auto___11089)
{var seq__11071_11090__$1 = temp__4126__auto___11089;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11071_11090__$1))
{var c__4314__auto___11091 = cljs.core.chunk_first.call(null,seq__11071_11090__$1);{
var G__11092 = cljs.core.chunk_rest.call(null,seq__11071_11090__$1);
var G__11093 = c__4314__auto___11091;
var G__11094 = cljs.core.count.call(null,c__4314__auto___11091);
var G__11095 = (0);
seq__11071_11077 = G__11092;
chunk__11072_11078 = G__11093;
count__11073_11079 = G__11094;
i__11074_11080 = G__11095;
continue;
}
} else
{var vec__11076_11096 = cljs.core.first.call(null,seq__11071_11090__$1);var k_11097 = cljs.core.nth.call(null,vec__11076_11096,(0),null);var v_11098 = cljs.core.nth.call(null,vec__11076_11096,(1),null);var m11070_11099 = cljs.core.deref.call(null,m_atom__8852__auto__);cljs.core.reset_BANG_.call(null,m_atom__8852__auto__,cljs.core.assoc_BANG_.call(null,m11070_11099,((typeof k_11097 === 'string')?cljs.core.keyword.call(null,k_11097):k_11097),keywordize_map.call(null,v_11098)));
{
var G__11100 = cljs.core.next.call(null,seq__11071_11090__$1);
var G__11101 = null;
var G__11102 = (0);
var G__11103 = (0);
seq__11071_11077 = G__11100;
chunk__11072_11078 = G__11101;
count__11073_11079 = G__11102;
i__11074_11080 = G__11103;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8852__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__8921__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__8921__auto__);
} else
{var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__11104 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__11105 = cljs.core.next.call(null,ks);
m = G__11104;
ks = G__11105;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__3558__auto__ = m;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4283__auto__ = (function iter__11114(s__11115){return (new cljs.core.LazySeq(null,(function (){var s__11115__$1 = s__11115;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11115__$1);if(temp__4126__auto__)
{var s__11115__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11115__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__11115__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__11117 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__11116 = (0);while(true){
if((i__11116 < size__4282__auto__))
{var vec__11120 = cljs.core._nth.call(null,c__4281__auto__,i__11116);var k = cljs.core.nth.call(null,vec__11120,(0),null);var v = cljs.core.nth.call(null,vec__11120,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__11117,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__11122 = (i__11116 + (1));
i__11116 = G__11122;
continue;
}
} else
{{
var G__11123 = (i__11116 + (1));
i__11116 = G__11123;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11117),iter__11114.call(null,cljs.core.chunk_rest.call(null,s__11115__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11117),null);
}
} else
{var vec__11121 = cljs.core.first.call(null,s__11115__$2);var k = cljs.core.nth.call(null,vec__11121,(0),null);var v = cljs.core.nth.call(null,vec__11121,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__11114.call(null,cljs.core.rest.call(null,s__11115__$2)));
} else
{{
var G__11124 = cljs.core.rest.call(null,s__11115__$2);
s__11115__$1 = G__11124;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__11125){
var m = cljs.core.first(arglist__11125);
var kvs = cljs.core.rest(arglist__11125);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__11126){
var m = cljs.core.first(arglist__11126);
arglist__11126 = cljs.core.next(arglist__11126);
var key_seq = cljs.core.first(arglist__11126);
arglist__11126 = cljs.core.next(arglist__11126);
var f = cljs.core.first(arglist__11126);
var args = cljs.core.rest(arglist__11126);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next.call(null,s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq.call(null,xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__4283__auto__ = ((function (s){
return (function iter__11131(s__11132){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__11132__$1 = s__11132;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11132__$1);if(temp__4126__auto__)
{var s__11132__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11132__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__11132__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__11134 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__11133 = (0);while(true){
if((i__11133 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__11133);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__11134,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__11135 = (i__11133 + (1));
i__11133 = G__11135;
continue;
}
} else
{{
var G__11136 = (i__11133 + (1));
i__11133 = G__11136;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11134),iter__11131.call(null,cljs.core.chunk_rest.call(null,s__11132__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11134),null);
}
} else
{var x = cljs.core.first.call(null,s__11132__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__11131.call(null,cljs.core.rest.call(null,s__11132__$2)));
} else
{{
var G__11137 = cljs.core.rest.call(null,s__11132__$2);
s__11132__$1 = G__11137;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__4283__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__11138){
var colls = cljs.core.seq(arglist__11138);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__11139__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__11140 = conj_when.call(null,coll,x);
var G__11141 = cljs.core.first.call(null,xs);
var G__11142 = cljs.core.next.call(null,xs);
coll = G__11140;
x = G__11141;
xs = G__11142;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__11139 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11139__delegate.call(this,coll,x,xs);};
G__11139.cljs$lang$maxFixedArity = 2;
G__11139.cljs$lang$applyTo = (function (arglist__11143){
var coll = cljs.core.first(arglist__11143);
arglist__11143 = cljs.core.next(arglist__11143);
var x = cljs.core.first(arglist__11143);
var xs = cljs.core.rest(arglist__11143);
return G__11139__delegate(coll,x,xs);
});
G__11139.cljs$core$IFn$_invoke$arity$variadic = G__11139__delegate;
return G__11139;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__11145__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__11144_SHARP_){return cljs.core.apply.call(null,f,p1__11144_SHARP_,args);
}));
};
var G__11145 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11145__delegate.call(this,a,f,args);};
G__11145.cljs$lang$maxFixedArity = 2;
G__11145.cljs$lang$applyTo = (function (arglist__11146){
var a = cljs.core.first(arglist__11146);
arglist__11146 = cljs.core.next(arglist__11146);
var f = cljs.core.first(arglist__11146);
var args = cljs.core.rest(arglist__11146);
return G__11145__delegate(a,f,args);
});
G__11145.cljs$core$IFn$_invoke$arity$variadic = G__11145__delegate;
return G__11145;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__11147__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__11147 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11147__delegate.call(this,f,arg,args);};
G__11147.cljs$lang$maxFixedArity = 2;
G__11147.cljs$lang$applyTo = (function (arglist__11148){
var f = cljs.core.first(arglist__11148);
arglist__11148 = cljs.core.next(arglist__11148);
var arg = cljs.core.first(arglist__11148);
var args = cljs.core.rest(arglist__11148);
return G__11147__delegate(f,arg,args);
});
G__11147.cljs$core$IFn$_invoke$arity$variadic = G__11147__delegate;
return G__11147;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map