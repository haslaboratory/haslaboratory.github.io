/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
'use strict';var e="object"===typeof __ScalaJSEnv&&__ScalaJSEnv?__ScalaJSEnv:{},f="object"===typeof e.global&&e.global?e.global:"object"===typeof global&&global&&global.Object===Object?global:this;e.global=f;e.exportsNamespace=exports;f.Object.freeze(e);var aa={envInfo:e,semantics:{asInstanceOfs:2,arrayIndexOutOfBounds:2,moduleInit:2,strictFloats:!1,productionMode:!0},assumingES6:!1,linkerVersion:"0.6.32",globalThis:this};f.Object.freeze(aa);f.Object.freeze(aa.semantics);
var m=f.Math.imul||function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0},ba=f.Math.clz32||function(a){if(0===a)return 32;var b=1;0===(a&4294901760)&&(a<<=16,b+=16);0===(a&4278190080)&&(a<<=8,b+=8);0===(a&4026531840)&&(a<<=4,b+=4);0===(a&3221225472)&&(a<<=2,b+=2);return b+(a>>31)},n=0,q=f.WeakMap?new f.WeakMap:null;function r(a){return function(b,c){return!(!b||!b.$classData||b.$classData.q!==c||b.$classData.o!==a)}}function ca(a){for(var b in a)return b}
function da(a,b,c){var d=new a.E(b[c]);if(c<b.length-1){a=a.s;c+=1;for(var h=d.H,g=0;g<h.length;g++)h[g]=da(a,b,c)}return d}function ea(a){switch(typeof a){case "string":return t(fa);case "number":var b=a|0;return b===a?ha(b)?t(ia):ja(b)?t(ka):t(la):"number"===typeof a?t(ma):t(na);case "boolean":return t(oa);case "undefined":return t(pa);default:return null===a?a.Ha():a instanceof v?t(qa):a&&a.$classData?t(a.$classData):null}}
function ra(a){switch(typeof a){case "string":return w(x(),a);case "number":return sa(ta(),a);case "boolean":return a?1231:1237;case "undefined":return 0;default:return a&&a.$classData||null===a?a.z():null===q?42:ua(a)}}
var ua=null!==q?function(a){switch(typeof a){case "string":case "number":case "boolean":case "undefined":return ra(a);default:if(null===a)return 0;var b=q.get(a);void 0===b&&(n=b=n+1|0,q.set(a,b));return b}}:function(a){if(a&&a.$classData){var b=a.$idHashCode$0;if(void 0!==b)return b;if(f.Object.isSealed(a))return 42;n=b=n+1|0;return a.$idHashCode$0=b}return null===a?0:ra(a)};function ha(a){return"number"===typeof a&&a<<24>>24===a&&1/a!==1/-0}
function ja(a){return"number"===typeof a&&a<<16>>16===a&&1/a!==1/-0}function y(){this.B=this.E=void 0;this.o=this.s=this.n=null;this.q=0;this.J=null;this.y="";this.d=this.w=this.x=void 0;this.name="";this.isRawJSType=this.isArrayClass=this.isInterface=this.isPrimitive=!1;this.isInstance=void 0}function z(a,b,c){var d=new y;d.n={};d.s=null;d.J=a;d.y=b;d.d=function(){return!1};d.name=c;d.isPrimitive=!0;d.isInstance=function(){return!1};return d}
function A(a,b,c,d,h,g,l){var k=new y,p=ca(a);g=g||function(u){return!!(u&&u.$classData&&u.$classData.n[p])};l=l||function(u,Z){return!!(u&&u.$classData&&u.$classData.q===Z&&u.$classData.o.n[p])};k.B=h;k.n=c;k.y="L"+b+";";k.d=l;k.name=b;k.isInterface=!1;k.isRawJSType=!!d;k.isInstance=g;return k}
function va(a){function b(k){if("number"===typeof k){this.H=Array(k);for(var p=0;p<k;p++)this.H[p]=h}else this.H=k}var c=new y,d=a.J,h="longZero"==d?B().v:d;b.prototype=new C;b.prototype.constructor=b;b.prototype.$classData=c;d="["+a.y;var g=a.o||a,l=a.q+1;c.E=b;c.B=wa;c.n={a:1,Ka:1,c:1};c.s=a;c.o=g;c.q=l;c.J=null;c.y=d;c.x=void 0;c.w=void 0;c.d=void 0;c.name=d;c.isPrimitive=!1;c.isInterface=!1;c.isArrayClass=!0;c.isInstance=function(k){return g.d(k,l)};return c}
function t(a){if(!a.x){var b=new D;b.i=a;a.x=b}return a.x}function xa(a){a.w||(a.w=va(a));return a.w}y.prototype.getFakeInstance=function(){if(this===fa)return"some string";if(this===oa)return!1;if(this===ia||this===ka||this===la||this===ma||this===na)return 0;if(this===qa)return B().v;if(this!==pa)return{$classData:this}};y.prototype.getSuperclass=function(){return this.B?t(this.B):null};y.prototype.getComponentType=function(){return this.s?t(this.s):null};
y.prototype.newArrayOfThisClass=function(a){for(var b=this,c=0;c<a.length;c++)b=xa(b);return da(b,a,0)};var ya=z(!1,"Z","boolean"),za=z(0,"C","char"),Aa=z(0,"B","byte"),Ba=z(0,"S","short"),Ca=z(0,"I","int"),Da=z("longZero","J","long"),Ea=z(0,"F","float"),Fa=z(0,"D","double");ya.d=r(ya);za.d=r(za);Aa.d=r(Aa);Ba.d=r(Ba);Ca.d=r(Ca);Da.d=r(Da);Ea.d=r(Ea);Fa.d=r(Fa);function E(){}function C(){}C.prototype=E.prototype;E.prototype.b=function(){return this};E.prototype.u=function(){var a=ea(this).i.name,b=(+(this.z()>>>0)).toString(16);return a+"@"+b};E.prototype.z=function(){return ua(this)};E.prototype.toString=function(){return this.u()};var wa=A({a:0},"java.lang.Object",{a:1},void 0,void 0,function(a){return null!==a},function(a,b){if(a=a&&a.$classData){var c=a.q||0;return!(c<b)&&(c>b||!a.o.isPrimitive)}return!1});E.prototype.$classData=wa;
function F(){this.K=this.Y=null;this.e=0}F.prototype=new C;F.prototype.constructor=F;F.prototype.b=function(){return this};function Ga(){Ha||(Ha=(new F).b());var a=Ha;0===(67108864&a.e)&&0===(67108864&a.e)&&(0===(33554432&a.e)&&0===(33554432&a.e)&&(a.Y=f.window,a.e|=33554432),a.K=a.Y.document,a.e|=67108864);return a.K}F.prototype.$classData=A({ba:0},"org.scalajs.dom.package$",{ba:1,a:1});var Ha=void 0;function G(){}G.prototype=new C;G.prototype.constructor=G;G.prototype.b=function(){return this};
function Ia(){Ja();var a=Ga().querySelectorAll(".navbar-burger"),b=a.length|0,c=-1+b|0;if(!(0>=b))for(b=0;;){var d=a[b];d.addEventListener("click",function(h){return function(){Ja();var g=Ga(),l=h.dataset;Ka||(Ka=(new H).b());if(!Ka.X.call(l,"target"))throw(new I).F("key not found: target");g=g.getElementById(l.target);h.classList.toggle("is-active");return!!g.classList.toggle("is-active")}}(d));if(b===c)break;b=1+b|0}}G.prototype.$classData=A({ca:0},"pages.Pages$",{ca:1,a:1});var La=void 0;
function Ja(){La||(La=(new G).b())}function D(){this.i=null}D.prototype=new C;D.prototype.constructor=D;D.prototype.u=function(){return(this.i.isInterface?"interface ":this.i.isPrimitive?"":"class ")+this.i.name};D.prototype.$classData=A({ha:0},"java.lang.Class",{ha:1,a:1});function J(){this.L=this.V=null}J.prototype=new C;J.prototype.constructor=J;J.prototype.b=function(){Ma=this;this.V=Na(!1);this.L=Na(!0);return this};J.prototype.$classData=A({qa:0},"java.lang.System$",{qa:1,a:1});var Ma=void 0;
function Oa(){Ma||(Ma=(new J).b());return Ma}function Pa(){}Pa.prototype=new C;Pa.prototype.constructor=Pa;function Qa(){}Qa.prototype=Pa.prototype;function K(){this.I=null}K.prototype=new C;K.prototype.constructor=K;K.prototype.u=function(){return"DynamicVariable("+this.I+")"};K.prototype.t=function(a){this.I=a;return this};K.prototype.$classData=A({ua:0},"scala.util.DynamicVariable",{ua:1,a:1});function Ra(){}Ra.prototype=new C;Ra.prototype.constructor=Ra;function Sa(){}Sa.prototype=Ra.prototype;
function H(){this.X=null}H.prototype=new C;H.prototype.constructor=H;H.prototype.b=function(){Ka=this;this.X=f.Object.prototype.hasOwnProperty;return this};H.prototype.$classData=A({xa:0},"scala.scalajs.js.WrappedDictionary$Cache$",{xa:1,a:1});var Ka=void 0;function L(){this.h=!1;this.N=this.A=this.p=null;this.D=!1;this.U=this.P=0}L.prototype=new C;L.prototype.constructor=L;
L.prototype.b=function(){Ta=this;this.p=(this.h=!!(f.ArrayBuffer&&f.Int32Array&&f.Float32Array&&f.Float64Array))?new f.ArrayBuffer(8):null;this.A=this.h?new f.Int32Array(this.p,0,2):null;this.h&&new f.Float32Array(this.p,0,2);this.N=this.h?new f.Float64Array(this.p,0,1):null;if(this.h)this.A[0]=16909060,a=1===((new f.Int8Array(this.p,0,8))[0]|0);else var a=!0;this.P=(this.D=a)?0:1;this.U=this.D?1:0;return this};
function sa(a,b){var c=b|0;if(c===b&&-Infinity!==1/b)return c;if(a.h)a.N[0]=b,a=Ua(a.A[a.U]|0,a.A[a.P]|0);else{if(b!==b)a=!1,b=2047,c=+f.Math.pow(2,51);else if(Infinity===b||-Infinity===b)a=0>b,b=2047,c=0;else if(0===b)a=-Infinity===1/b,c=b=0;else{var d=(a=0>b)?-b:b;if(d>=+f.Math.pow(2,-1022)){b=+f.Math.pow(2,52);c=+f.Math.log(d)/.6931471805599453;c=+f.Math.floor(c)|0;c=1023>c?c:1023;var h=+f.Math.pow(2,c);h>d&&(c=-1+c|0,h/=2);h=d/h*b;d=+f.Math.floor(h);h-=d;d=.5>h?d:.5<h?1+d:0!==d%2?1+d:d;2<=d/b&&
(c=1+c|0,d=1);1023<c?(c=2047,d=0):(c=1023+c|0,d-=b);b=c;c=d}else b=d/+f.Math.pow(2,-1074),c=+f.Math.floor(b),d=b-c,b=0,c=.5>d?c:.5<d?1+c:0!==c%2?1+c:c}c=+c;a=Ua(c|0,(a?-2147483648:0)|(b|0)<<20|c/4294967296|0)}return a.m^a.k}L.prototype.$classData=A({ya:0},"scala.scalajs.runtime.Bits$",{ya:1,a:1});var Ta=void 0;function ta(){Ta||(Ta=(new L).b());return Ta}function M(){this.e=!1}M.prototype=new C;M.prototype.constructor=M;M.prototype.b=function(){return this};
function w(a,b){a=0;for(var c=1,d=-1+(b.length|0)|0;0<=d;)a=a+m(65535&(b.charCodeAt(d)|0),c)|0,c=m(31,c),d=-1+d|0;return a}M.prototype.$classData=A({Ba:0},"scala.scalajs.runtime.RuntimeString$",{Ba:1,a:1});var Va=void 0;function x(){Va||(Va=(new M).b());return Va}function N(){}N.prototype=new C;N.prototype.constructor=N;N.prototype.b=function(){return this};N.prototype.$classData=A({Ca:0},"scala.scalajs.runtime.package$",{Ca:1,a:1});var Wa=void 0;function O(){}O.prototype=new C;
O.prototype.constructor=O;O.prototype.b=function(){return this};
function Xa(a){if(null===a)return 0;if("number"===typeof a){a=+a;var b=2147483647<a?2147483647:-2147483648>a?-2147483648:a|0;if(b===a)a=b;else{b=B();if(-9223372036854775808>a){b.C=-2147483648;var c=0}else if(0x7fffffffffffffff<=a)b.C=2147483647,c=-1;else{c=a|0;var d=a/4294967296|0;b.C=0>a&&0!==c?-1+d|0:d}b=b.C;B();a=(0>b?-(4294967296*+((0!==c?~b:-b|0)>>>0)+ +((-c|0)>>>0)):4294967296*b+ +(c>>>0))===a?c^b:sa(ta(),a)}return a}return a instanceof v?(a=null===a?B().v:a,b=Ua(a.m,a.k),a=b.m,b=b.k,b===a>>
31?a:a^b):ra(a)}O.prototype.$classData=A({Ea:0},"scala.runtime.Statics$",{Ea:1,a:1});var Ya=void 0;function Za(){}Za.prototype=new C;Za.prototype.constructor=Za;function $a(){}$a.prototype=Za.prototype;function P(){this.g=null}P.prototype=new C;P.prototype.constructor=P;function ab(){}ab.prototype=P.prototype;
P.prototype.M=function(){if(void 0===f.Error.captureStackTrace){try{var a={}.undef()}catch(b){if(Wa||(Wa=(new N).b()),a=b instanceof P?b:(new Q).t(b),null!==a)if(a instanceof Q)a=a.j;else throw Wa||(Wa=(new N).b()),a instanceof Q?a.j:a;else throw b;}this.stackdata=a}else f.Error.captureStackTrace(this),this.stackdata=this};P.prototype.O=function(){return this.g};P.prototype.u=function(){var a=ea(this).i.name,b=this.O();return null===b?a:a+": "+b};P.prototype.G=function(a){this.g=a;this.M()};
function R(){}R.prototype=new Sa;R.prototype.constructor=R;R.prototype.b=function(){bb=this;w(x(),"Seq");w(x(),"Map");w(x(),"Set");return this};R.prototype.$classData=A({va:0},"scala.util.hashing.MurmurHash3$",{va:1,Pa:1,a:1});var bb=void 0,pa=A({Da:0},"scala.runtime.BoxedUnit",{Da:1,a:1,c:1},void 0,void 0,function(a){return void 0===a}),oa=A({fa:0},"java.lang.Boolean",{fa:1,a:1,c:1,f:1},void 0,void 0,function(a){return"boolean"===typeof a});function cb(){this.g=null}cb.prototype=new ab;
cb.prototype.constructor=cb;function db(){}db.prototype=cb.prototype;function S(){this.W=null}S.prototype=new Qa;S.prototype.constructor=S;S.prototype.b=function(){eb=this;this.W=(new K).t(Oa().V);(new K).t(Oa().L);(new K).t(null);return this};S.prototype.$classData=A({sa:0},"scala.Console$",{sa:1,La:1,a:1,Oa:1});var eb=void 0;function T(){this.C=0;this.v=null}T.prototype=new C;T.prototype.constructor=T;T.prototype.b=function(){fb=this;this.v=Ua(0,0);return this};
function gb(a,b){if(0===(-2097152&b))b=""+(4294967296*b+ +(a>>>0));else{var c=(32+ba(1E9)|0)-(0!==b?ba(b):32+ba(a)|0)|0,d=c,h=0===(32&d)?1E9<<d:0;d=0===(32&d)?5E8>>>(31-d|0)|0|0<<d:1E9<<d;var g=a,l=b;for(a=b=0;0<=c&&0!==(-2097152&l);){var k=g,p=l,u=h,Z=d;if(p===Z?(-2147483648^k)>=(-2147483648^u):(-2147483648^p)>=(-2147483648^Z))k=l,p=d,l=g-h|0,k=(-2147483648^l)>(-2147483648^g)?-1+(k-p|0)|0:k-p|0,g=l,l=k,32>c?b|=1<<c:a|=1<<c;c=-1+c|0;k=d>>>1|0;h=h>>>1|0|d<<31;d=k}c=l;if(0===c?-1147483648<=(-2147483648^
g):-2147483648<=(-2147483648^c))c=4294967296*l+ +(g>>>0),g=c/1E9,h=g/4294967296|0,d=b,b=g=d+(g|0)|0,a=(-2147483648^g)<(-2147483648^d)?1+(a+h|0)|0:a+h|0,g=c%1E9|0;c=""+g;b=""+(4294967296*a+ +(b>>>0))+"000000000".substring(c.length|0)+c}return b}T.prototype.$classData=A({Aa:0},"scala.scalajs.runtime.RuntimeLong$",{Aa:1,a:1,ta:1,c:1});var fb=void 0;function B(){fb||(fb=(new T).b());return fb}function hb(){}hb.prototype=new C;hb.prototype.constructor=hb;function ib(){}ib.prototype=hb.prototype;
var fa=A({da:0},"java.lang.String",{da:1,a:1,c:1,Ja:1,f:1},void 0,void 0,function(a){return"string"===typeof a}),ia=A({ga:0},"java.lang.Byte",{ga:1,l:1,a:1,c:1,f:1},void 0,void 0,function(a){return ha(a)}),na=A({ia:0},"java.lang.Double",{ia:1,l:1,a:1,c:1,f:1},void 0,void 0,function(a){return"number"===typeof a}),ma=A({ja:0},"java.lang.Float",{ja:1,l:1,a:1,c:1,f:1},void 0,void 0,function(a){return"number"===typeof a}),la=A({la:0},"java.lang.Integer",{la:1,l:1,a:1,c:1,f:1},void 0,void 0,function(a){return"number"===
typeof a&&(a|0)===a&&1/a!==1/-0}),qa=A({oa:0},"java.lang.Long",{oa:1,l:1,a:1,c:1,f:1},void 0,void 0,function(a){return a instanceof v});function jb(){this.g=null}jb.prototype=new db;jb.prototype.constructor=jb;function kb(){}kb.prototype=jb.prototype;var ka=A({pa:0},"java.lang.Short",{pa:1,l:1,a:1,c:1,f:1},void 0,void 0,function(a){return ja(a)});function v(){this.k=this.m=0}v.prototype=new $a;v.prototype.constructor=v;
v.prototype.u=function(){B();var a=this.m,b=this.k;return b===a>>31?""+a:0>b?"-"+gb(-a|0,0!==a?~b:-b|0):gb(a,b)};function Ua(a,b){var c=new v;c.m=a;c.k=b;return c}v.prototype.z=function(){return this.m^this.k};v.prototype.$classData=A({za:0},"scala.scalajs.runtime.RuntimeLong",{za:1,l:1,a:1,c:1,f:1});function lb(){}lb.prototype=new ib;lb.prototype.constructor=lb;function mb(){}mb.prototype=lb.prototype;function U(){this.g=null}U.prototype=new kb;U.prototype.constructor=U;
U.prototype.F=function(a){P.prototype.G.call(this,a);return this};U.prototype.$classData=A({ka:0},"java.lang.IndexOutOfBoundsException",{ka:1,S:1,R:1,T:1,a:1,c:1});function V(){}V.prototype=new ib;V.prototype.constructor=V;V.prototype.b=function(){return this};V.prototype.$classData=A({na:0},"java.lang.JSConsoleBasedPrintStream$DummyOutputStream",{na:1,aa:1,a:1,Z:1,ea:1,$:1});function I(){this.g=null}I.prototype=new kb;I.prototype.constructor=I;
I.prototype.F=function(a){P.prototype.G.call(this,a);return this};I.prototype.$classData=A({ra:0},"java.util.NoSuchElementException",{ra:1,S:1,R:1,T:1,a:1,c:1});function nb(){}nb.prototype=new mb;nb.prototype.constructor=nb;function ob(){}ob.prototype=nb.prototype;function W(){this.Q=!1;this.r=null}W.prototype=new ob;W.prototype.constructor=W;function Na(a){var b=new W;b.Q=a;(new V).b();b.r="";return b}
W.prototype.$classData=A({ma:0},"java.lang.JSConsoleBasedPrintStream",{ma:1,Ga:1,Fa:1,aa:1,a:1,Z:1,ea:1,$:1,Ia:1});function Q(){this.j=this.g=null}Q.prototype=new kb;Q.prototype.constructor=Q;Q.prototype.M=function(){this.stackdata=this.j};Q.prototype.O=function(){var a=this.j;return void 0===a?"undefined":a.toString()};Q.prototype.t=function(a){this.j=a;P.prototype.G.call(this,null);return this};
Q.prototype.z=function(){bb||(bb=(new R).b());for(var a=-889275714,b=0;1>b;){Ya||(Ya=(new O).b());b:switch(b){case 0:var c=this.j;break b;default:throw(new U).F(""+b);}c=Xa(c);c=m(-862048943,c);c=m(461845907,c<<15|c>>>17|0);a^=c;a=-430675100+m(5,a<<13|a>>>19|0)|0;b=1+b|0}b=a^1;b=m(-2048144789,b^(b>>>16|0));b=m(-1028477387,b^(b>>>13|0));return b^(b>>>16|0)};Q.prototype.$classData=A({wa:0},"scala.scalajs.js.JavaScriptException",{wa:1,S:1,R:1,T:1,a:1,c:1,Na:1,Ma:1,ta:1});Ja();new (xa(fa).E)([]);
Ga().addEventListener("DOMContentLoaded",function(){Ia()});eb||(eb=(new S).b());for(var X=eb.W.I,Y="pages!!!\n";""!==Y;){var pb=Y.indexOf("\n")|0;if(0>pb)X.r=""+X.r+Y,Y="";else{var qb=""+X.r+Y.substring(0,pb);f.console&&(X.Q&&f.console.error?f.console.error(qb):f.console.log(qb));X.r="";Y=Y.substring(1+pb|0)}};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
//# sourceMappingURL=pages-opt-bundle.js.map