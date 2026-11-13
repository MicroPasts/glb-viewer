(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function kv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Td={exports:{}},Ca={},wd={exports:{}},Lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function Bv(){if(km)return Lt;km=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(F,ie,Be){this.props=F,this.context=ie,this.refs=E,this.updater=Be||y}S.prototype.isReactComponent={},S.prototype.setState=function(F,ie){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ie,"setState")},S.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function x(){}x.prototype=S.prototype;function L(F,ie,Be){this.props=F,this.context=ie,this.refs=E,this.updater=Be||y}var C=L.prototype=new x;C.constructor=L,M(C,S.prototype),C.isPureReactComponent=!0;var w=Array.isArray,z=Object.prototype.hasOwnProperty,U={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function O(F,ie,Be){var Q,he={},we=null,Se=null;if(ie!=null)for(Q in ie.ref!==void 0&&(Se=ie.ref),ie.key!==void 0&&(we=""+ie.key),ie)z.call(ie,Q)&&!I.hasOwnProperty(Q)&&(he[Q]=ie[Q]);var Le=arguments.length-2;if(Le===1)he.children=Be;else if(1<Le){for(var ze=Array(Le),it=0;it<Le;it++)ze[it]=arguments[it+2];he.children=ze}if(F&&F.defaultProps)for(Q in Le=F.defaultProps,Le)he[Q]===void 0&&(he[Q]=Le[Q]);return{$$typeof:o,type:F,key:we,ref:Se,props:he,_owner:U.current}}function P(F,ie){return{$$typeof:o,type:F.type,key:ie,ref:F.ref,props:F.props,_owner:F._owner}}function b(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function k(F){var ie={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Be){return ie[Be]})}var ae=/\/+/g;function ne(F,ie){return typeof F=="object"&&F!==null&&F.key!=null?k(""+F.key):ie.toString(36)}function me(F,ie,Be,Q,he){var we=typeof F;(we==="undefined"||we==="boolean")&&(F=null);var Se=!1;if(F===null)Se=!0;else switch(we){case"string":case"number":Se=!0;break;case"object":switch(F.$$typeof){case o:case e:Se=!0}}if(Se)return Se=F,he=he(Se),F=Q===""?"."+ne(Se,0):Q,w(he)?(Be="",F!=null&&(Be=F.replace(ae,"$&/")+"/"),me(he,ie,Be,"",function(it){return it})):he!=null&&(b(he)&&(he=P(he,Be+(!he.key||Se&&Se.key===he.key?"":(""+he.key).replace(ae,"$&/")+"/")+F)),ie.push(he)),1;if(Se=0,Q=Q===""?".":Q+":",w(F))for(var Le=0;Le<F.length;Le++){we=F[Le];var ze=Q+ne(we,Le);Se+=me(we,ie,Be,ze,he)}else if(ze=_(F),typeof ze=="function")for(F=ze.call(F),Le=0;!(we=F.next()).done;)we=we.value,ze=Q+ne(we,Le++),Se+=me(we,ie,Be,ze,he);else if(we==="object")throw ie=String(F),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return Se}function fe(F,ie,Be){if(F==null)return F;var Q=[],he=0;return me(F,Q,"","",function(we){return ie.call(Be,we,he++)}),Q}function le(F){if(F._status===-1){var ie=F._result;ie=ie(),ie.then(function(Be){(F._status===0||F._status===-1)&&(F._status=1,F._result=Be)},function(Be){(F._status===0||F._status===-1)&&(F._status=2,F._result=Be)}),F._status===-1&&(F._status=0,F._result=ie)}if(F._status===1)return F._result.default;throw F._result}var ue={current:null},H={transition:null},ce={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:H,ReactCurrentOwner:U};function se(){throw Error("act(...) is not supported in production builds of React.")}return Lt.Children={map:fe,forEach:function(F,ie,Be){fe(F,function(){ie.apply(this,arguments)},Be)},count:function(F){var ie=0;return fe(F,function(){ie++}),ie},toArray:function(F){return fe(F,function(ie){return ie})||[]},only:function(F){if(!b(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Lt.Component=S,Lt.Fragment=t,Lt.Profiler=s,Lt.PureComponent=L,Lt.StrictMode=i,Lt.Suspense=f,Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Lt.act=se,Lt.cloneElement=function(F,ie,Be){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Q=M({},F.props),he=F.key,we=F.ref,Se=F._owner;if(ie!=null){if(ie.ref!==void 0&&(we=ie.ref,Se=U.current),ie.key!==void 0&&(he=""+ie.key),F.type&&F.type.defaultProps)var Le=F.type.defaultProps;for(ze in ie)z.call(ie,ze)&&!I.hasOwnProperty(ze)&&(Q[ze]=ie[ze]===void 0&&Le!==void 0?Le[ze]:ie[ze])}var ze=arguments.length-2;if(ze===1)Q.children=Be;else if(1<ze){Le=Array(ze);for(var it=0;it<ze;it++)Le[it]=arguments[it+2];Q.children=Le}return{$$typeof:o,type:F.type,key:he,ref:we,props:Q,_owner:Se}},Lt.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:a,_context:F},F.Consumer=F},Lt.createElement=O,Lt.createFactory=function(F){var ie=O.bind(null,F);return ie.type=F,ie},Lt.createRef=function(){return{current:null}},Lt.forwardRef=function(F){return{$$typeof:u,render:F}},Lt.isValidElement=b,Lt.lazy=function(F){return{$$typeof:m,_payload:{_status:-1,_result:F},_init:le}},Lt.memo=function(F,ie){return{$$typeof:h,type:F,compare:ie===void 0?null:ie}},Lt.startTransition=function(F){var ie=H.transition;H.transition={};try{F()}finally{H.transition=ie}},Lt.unstable_act=se,Lt.useCallback=function(F,ie){return ue.current.useCallback(F,ie)},Lt.useContext=function(F){return ue.current.useContext(F)},Lt.useDebugValue=function(){},Lt.useDeferredValue=function(F){return ue.current.useDeferredValue(F)},Lt.useEffect=function(F,ie){return ue.current.useEffect(F,ie)},Lt.useId=function(){return ue.current.useId()},Lt.useImperativeHandle=function(F,ie,Be){return ue.current.useImperativeHandle(F,ie,Be)},Lt.useInsertionEffect=function(F,ie){return ue.current.useInsertionEffect(F,ie)},Lt.useLayoutEffect=function(F,ie){return ue.current.useLayoutEffect(F,ie)},Lt.useMemo=function(F,ie){return ue.current.useMemo(F,ie)},Lt.useReducer=function(F,ie,Be){return ue.current.useReducer(F,ie,Be)},Lt.useRef=function(F){return ue.current.useRef(F)},Lt.useState=function(F){return ue.current.useState(F)},Lt.useSyncExternalStore=function(F,ie,Be){return ue.current.useSyncExternalStore(F,ie,Be)},Lt.useTransition=function(){return ue.current.useTransition()},Lt.version="18.3.1",Lt}var Bm;function sh(){return Bm||(Bm=1,wd.exports=Bv()),wd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function zv(){if(zm)return Ca;zm=1;var o=sh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,h){var m,g={},_=null,y=null;h!==void 0&&(_=""+h),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(y=f.ref);for(m in f)i.call(f,m)&&!a.hasOwnProperty(m)&&(g[m]=f[m]);if(u&&u.defaultProps)for(m in f=u.defaultProps,f)g[m]===void 0&&(g[m]=f[m]);return{$$typeof:e,type:u,key:_,ref:y,props:g,_owner:s.current}}return Ca.Fragment=t,Ca.jsx=c,Ca.jsxs=c,Ca}var Hm;function Hv(){return Hm||(Hm=1,Td.exports=zv()),Td.exports}var q=Hv(),De=sh();const Vv=kv(De);var Jl={},Ad={exports:{}},oi={},bd={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function Gv(){return Vm||(Vm=1,(function(o){function e(H,ce){var se=H.length;H.push(ce);e:for(;0<se;){var F=se-1>>>1,ie=H[F];if(0<s(ie,ce))H[F]=ce,H[se]=ie,se=F;else break e}}function t(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var ce=H[0],se=H.pop();if(se!==ce){H[0]=se;e:for(var F=0,ie=H.length,Be=ie>>>1;F<Be;){var Q=2*(F+1)-1,he=H[Q],we=Q+1,Se=H[we];if(0>s(he,se))we<ie&&0>s(Se,he)?(H[F]=Se,H[we]=se,F=we):(H[F]=he,H[Q]=se,F=Q);else if(we<ie&&0>s(Se,se))H[F]=Se,H[we]=se,F=we;else break e}}return ce}function s(H,ce){var se=H.sortIndex-ce.sortIndex;return se!==0?se:H.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();o.unstable_now=function(){return c.now()-u}}var f=[],h=[],m=1,g=null,_=3,y=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(H){for(var ce=t(h);ce!==null;){if(ce.callback===null)i(h);else if(ce.startTime<=H)i(h),ce.sortIndex=ce.expirationTime,e(f,ce);else break;ce=t(h)}}function w(H){if(E=!1,C(H),!M)if(t(f)!==null)M=!0,le(z);else{var ce=t(h);ce!==null&&ue(w,ce.startTime-H)}}function z(H,ce){M=!1,E&&(E=!1,x(O),O=-1),y=!0;var se=_;try{for(C(ce),g=t(f);g!==null&&(!(g.expirationTime>ce)||H&&!k());){var F=g.callback;if(typeof F=="function"){g.callback=null,_=g.priorityLevel;var ie=F(g.expirationTime<=ce);ce=o.unstable_now(),typeof ie=="function"?g.callback=ie:g===t(f)&&i(f),C(ce)}else i(f);g=t(f)}if(g!==null)var Be=!0;else{var Q=t(h);Q!==null&&ue(w,Q.startTime-ce),Be=!1}return Be}finally{g=null,_=se,y=!1}}var U=!1,I=null,O=-1,P=5,b=-1;function k(){return!(o.unstable_now()-b<P)}function ae(){if(I!==null){var H=o.unstable_now();b=H;var ce=!0;try{ce=I(!0,H)}finally{ce?ne():(U=!1,I=null)}}else U=!1}var ne;if(typeof L=="function")ne=function(){L(ae)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,fe=me.port2;me.port1.onmessage=ae,ne=function(){fe.postMessage(null)}}else ne=function(){S(ae,0)};function le(H){I=H,U||(U=!0,ne())}function ue(H,ce){O=S(function(){H(o.unstable_now())},ce)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_continueExecution=function(){M||y||(M=!0,le(z))},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_getFirstCallbackNode=function(){return t(f)},o.unstable_next=function(H){switch(_){case 1:case 2:case 3:var ce=3;break;default:ce=_}var se=_;_=ce;try{return H()}finally{_=se}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(H,ce){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var se=_;_=H;try{return ce()}finally{_=se}},o.unstable_scheduleCallback=function(H,ce,se){var F=o.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?F+se:F):se=F,H){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=se+ie,H={id:m++,callback:ce,priorityLevel:H,startTime:se,expirationTime:ie,sortIndex:-1},se>F?(H.sortIndex=se,e(h,H),t(f)===null&&H===t(h)&&(E?(x(O),O=-1):E=!0,ue(w,se-F))):(H.sortIndex=ie,e(f,H),M||y||(M=!0,le(z))),H},o.unstable_shouldYield=k,o.unstable_wrapCallback=function(H){var ce=_;return function(){var se=_;_=ce;try{return H.apply(this,arguments)}finally{_=se}}}})(Rd)),Rd}var Gm;function Wv(){return Gm||(Gm=1,bd.exports=Gv()),bd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function jv(){if(Wm)return oi;Wm=1;var o=sh(),e=Wv();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function _(n){return f.call(g,n)?!0:f.call(m,n)?!1:h.test(n)?g[n]=!0:(m[n]=!0,!1)}function y(n,r,l,d){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,d){if(r===null||typeof r>"u"||y(n,r,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,l,d,p,v,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,L);S[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,L);S[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,L);S[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,r,l,d){var p=S.hasOwnProperty(r)?S[r]:null;(p!==null?p.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,d)&&(l=null),d||p===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,d=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,d?n.setAttributeNS(d,r,l):n.setAttribute(r,l))))}var w=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),U=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),k=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),H=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,F;function ie(n){if(F===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);F=r&&r[1]||""}return`
`+F+n}var Be=!1;function Q(n,r){if(!n||Be)return"";Be=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(re){var d=re}Reflect.construct(n,[],r)}else{try{r.call()}catch(re){d=re}n.call(r.prototype)}else{try{throw Error()}catch(re){d=re}n()}}catch(re){if(re&&d&&typeof re.stack=="string"){for(var p=re.stack.split(`
`),v=d.stack.split(`
`),T=p.length-1,D=v.length-1;1<=T&&0<=D&&p[T]!==v[D];)D--;for(;1<=T&&0<=D;T--,D--)if(p[T]!==v[D]){if(T!==1||D!==1)do if(T--,D--,0>D||p[T]!==v[D]){var B=`
`+p[T].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=T&&0<=D);break}}}finally{Be=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ie(n):""}function he(n){switch(n.tag){case 5:return ie(n.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function we(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case U:return"Portal";case P:return"Profiler";case O:return"StrictMode";case ne:return"Suspense";case me:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case ae:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fe:return r=n.displayName||null,r!==null?r:we(n.type)||"Memo";case le:r=n._payload,n=n._init;try{return we(n(r))}catch{}}return null}function Se(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(r);case 8:return r===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function it(n){var r=ze(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),d=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(T){d=""+T,v.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(T){d=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ht(n){n._valueTracker||(n._valueTracker=it(n))}function At(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),d="";return n&&(d=ze(n)?n.checked?"true":"false":n.value),n=d,n!==l?(r.setValue(n),!0):!1}function Vt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function X(n,r){var l=r.checked;return se({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function yn(n,r){var l=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;l=Le(r.value!=null?r.value:l),n._wrapperState={initialChecked:d,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function xt(n,r){r=r.checked,r!=null&&C(n,"checked",r,!1)}function Ct(n,r){xt(n,r);var l=Le(r.value),d=r.type;if(l!=null)d==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Bt(n,r.type,l):r.hasOwnProperty("defaultValue")&&Bt(n,r.type,Le(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Qe(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Bt(n,r,l){(r!=="number"||Vt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var qe=Array.isArray;function N(n,r,l,d){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&d&&(n[l].defaultSelected=!0)}else{for(l=""+Le(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,d&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function A(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function J(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(qe(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Le(l)}}function ge(n,r){var l=Le(r.value),d=Le(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),d!=null&&(n.defaultValue=""+d)}function xe(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ie,He=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,d,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,d,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ie.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function yt(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Ae).forEach(function(n){Oe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ae[r]=Ae[n]})});function st(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Ae.hasOwnProperty(n)&&Ae[n]?(""+r).trim():r+"px"}function lt(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var d=l.indexOf("--")===0,p=st(l,r[l],d);l==="float"&&(l="cssFloat"),d?n.setProperty(l,p):n[l]=p}}var Ve=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gt(n,r){if(r){if(Ve[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function ct(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nt=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ne=null,oe=null,de=null;function Pe(n){if(n=pa(n)){if(typeof Ne!="function")throw Error(t(280));var r=n.stateNode;r&&(r=pl(r),Ne(n.stateNode,n.type,r))}}function Re(n){oe?de?de.push(n):de=[n]:oe=n}function nt(){if(oe){var n=oe,r=de;if(de=oe=null,Pe(n),r)for(n=0;n<r.length;n++)Pe(r[n])}}function jt(n,r){return n(r)}function rn(){}var St=!1;function sn(n,r,l){if(St)return n(r,l);St=!0;try{return jt(n,r,l)}finally{St=!1,(oe!==null||de!==null)&&(rn(),nt())}}function un(n,r){var l=n.stateNode;if(l===null)return null;var d=pl(l);if(d===null)return null;l=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Ir=!1;if(u)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){Ir=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{Ir=!1}function ci(n,r,l,d,p,v,T,D,B){var re=Array.prototype.slice.call(arguments,3);try{r.apply(l,re)}catch(Me){this.onError(Me)}}var dn=!1,Un=null,Di=!1,Xn=null,hs={onError:function(n){dn=!0,Un=n}};function Zi(n,r,l,d,p,v,T,D,B){dn=!1,Un=null,ci.apply(hs,arguments)}function Ur(n,r,l,d,p,v,T,D,B){if(Zi.apply(this,arguments),dn){if(dn){var re=Un;dn=!1,Un=null}else throw Error(t(198));Di||(Di=!0,Xn=re)}}function Si(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Fr(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function ps(n){if(Si(n)!==n)throw Error(t(188))}function Qi(n){var r=n.alternate;if(!r){if(r=Si(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,d=r;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(d=p.return,d!==null){l=d;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return ps(p),n;if(v===d)return ps(p),r;v=v.sibling}throw Error(t(188))}if(l.return!==d.return)l=p,d=v;else{for(var T=!1,D=p.child;D;){if(D===l){T=!0,l=p,d=v;break}if(D===d){T=!0,d=p,l=v;break}D=D.sibling}if(!T){for(D=v.child;D;){if(D===l){T=!0,l=v,d=p;break}if(D===d){T=!0,d=v,l=p;break}D=D.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function R(n){return n=Qi(n),n!==null?j(n):null}function j(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=j(n);if(r!==null)return r;n=n.sibling}return null}var ee=e.unstable_scheduleCallback,te=e.unstable_cancelCallback,Y=e.unstable_shouldYield,be=e.unstable_requestPaint,Ee=e.unstable_now,Ke=e.unstable_getCurrentPriorityLevel,We=e.unstable_ImmediatePriority,dt=e.unstable_UserBlockingPriority,ft=e.unstable_NormalPriority,$e=e.unstable_LowPriority,Dt=e.unstable_IdlePriority,bt=null,Rt=null;function ln(n){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:Ft,Je=Math.log,ui=Math.LN2;function Ft(n){return n>>>=0,n===0?32:31-(Je(n)/ui|0)|0}var $=64,_e=4194304;function ve(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ue(n,r){var l=n.pendingLanes;if(l===0)return 0;var d=0,p=n.suspendedLanes,v=n.pingedLanes,T=l&268435455;if(T!==0){var D=T&~p;D!==0?d=ve(D):(v&=T,v!==0&&(d=ve(v)))}else T=l&~p,T!==0?d=ve(T):v!==0&&(d=ve(v));if(d===0)return 0;if(r!==0&&r!==d&&(r&p)===0&&(p=d&-d,v=r&-r,p>=v||p===16&&(v&4194240)!==0))return r;if((d&4)!==0&&(d|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=d;0<r;)l=31-_t(r),p=1<<l,d|=n[l],r&=~p;return d}function je(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mt(n,r){for(var l=n.suspendedLanes,d=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var T=31-_t(v),D=1<<T,B=p[T];B===-1?((D&l)===0||(D&d)!==0)&&(p[T]=je(D,r)):B<=r&&(n.expiredLanes|=D),v&=~D}}function tt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function pt(){var n=$;return $<<=1,($&4194240)===0&&($=64),n}function rt(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function vt(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-_t(r),n[r]=l}function Rn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-_t(l),v=1<<p;r[p]=0,d[p]=-1,n[p]=-1,l&=~v}}function Ii(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var d=31-_t(l),p=1<<d;p&r|n[d]&r&&(n[d]|=r),l&=~p}}var Et=0;function Jo(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ea,js,ms,qc,ta,cr=!1,gs=[],Ui=null,Xt=null,Cn=null,Yn=new Map,Jt=new Map,Mn=[],Pn="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ur(n,r){switch(n){case"focusin":case"focusout":Ui=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":Yn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jt.delete(r.pointerId)}}function di(n,r,l,d,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:d,nativeEvent:v,targetContainers:[p]},r!==null&&(r=pa(r),r!==null&&js(r)),n):(n.eventSystemFlags|=d,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function el(n,r,l,d,p){switch(r){case"focusin":return Ui=di(Ui,n,r,l,d,p),!0;case"dragenter":return Xt=di(Xt,n,r,l,d,p),!0;case"mouseover":return Cn=di(Cn,n,r,l,d,p),!0;case"pointerover":var v=p.pointerId;return Yn.set(v,di(Yn.get(v)||null,n,r,l,d,p)),!0;case"gotpointercapture":return v=p.pointerId,Jt.set(v,di(Jt.get(v)||null,n,r,l,d,p)),!0}return!1}function na(n){var r=xs(n.target);if(r!==null){var l=Si(r);if(l!==null){if(r=l.tag,r===13){if(r=Fr(l),r!==null){n.blockedOn=r,ta(n.priority,function(){ms(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Or(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=qn(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var d=new l.constructor(l.type,l);Nt=d,l.target.dispatchEvent(d),Nt=null}else return r=pa(l),r!==null&&js(r),n.blockedOn=l,!1;r.shift()}return!0}function tl(n,r,l){Or(n)&&l.delete(r)}function Kc(){cr=!1,Ui!==null&&Or(Ui)&&(Ui=null),Xt!==null&&Or(Xt)&&(Xt=null),Cn!==null&&Or(Cn)&&(Cn=null),Yn.forEach(tl),Jt.forEach(tl)}function kr(n,r){n.blockedOn===r&&(n.blockedOn=null,cr||(cr=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Kc)))}function _s(n){function r(p){return kr(p,n)}if(0<gs.length){kr(gs[0],n);for(var l=1;l<gs.length;l++){var d=gs[l];d.blockedOn===n&&(d.blockedOn=null)}}for(Ui!==null&&kr(Ui,n),Xt!==null&&kr(Xt,n),Cn!==null&&kr(Cn,n),Yn.forEach(r),Jt.forEach(r),l=0;l<Mn.length;l++)d=Mn[l],d.blockedOn===n&&(d.blockedOn=null);for(;0<Mn.length&&(l=Mn[0],l.blockedOn===null);)na(l),l.blockedOn===null&&Mn.shift()}var Fi=w.ReactCurrentBatchConfig,Br=!0;function $c(n,r,l,d){var p=Et,v=Fi.transition;Fi.transition=null;try{Et=1,vs(n,r,l,d)}finally{Et=p,Fi.transition=v}}function Zc(n,r,l,d){var p=Et,v=Fi.transition;Fi.transition=null;try{Et=4,vs(n,r,l,d)}finally{Et=p,Fi.transition=v}}function vs(n,r,l,d){if(Br){var p=qn(n,r,l,d);if(p===null)pu(n,r,d,on,l),ur(n,d);else if(el(p,n,r,l,d))d.stopPropagation();else if(ur(n,d),r&4&&-1<Pn.indexOf(n)){for(;p!==null;){var v=pa(p);if(v!==null&&ea(v),v=qn(n,r,l,d),v===null&&pu(n,r,d,on,l),v===p)break;p=v}p!==null&&d.stopPropagation()}else pu(n,r,d,null,l)}}var on=null;function qn(n,r,l,d){if(on=null,n=G(d),n=xs(n),n!==null)if(r=Si(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Fr(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return on=n,null}function nl(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ke()){case We:return 1;case dt:return 4;case ft:case $e:return 16;case Dt:return 536870912;default:return 16}default:return 16}}var zr=null,Qc=null,il=null;function wh(){if(il)return il;var n,r=Qc,l=r.length,d,p="value"in zr?zr.value:zr.textContent,v=p.length;for(n=0;n<l&&r[n]===p[n];n++);var T=l-n;for(d=1;d<=T&&r[l-d]===p[v-d];d++);return il=p.slice(n,1<d?1-d:void 0)}function rl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function sl(){return!0}function Ah(){return!1}function fi(n){function r(l,d,p,v,T){this._reactName=l,this._targetInst=p,this.type=d,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(l=n[D],this[D]=l?l(v):v[D]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?sl:Ah,this.isPropagationStopped=Ah,this}return se(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),r}var Xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jc=fi(Xs),ia=se({},Xs,{view:0,detail:0}),d0=fi(ia),eu,tu,ra,ol=se({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ra&&(ra&&n.type==="mousemove"?(eu=n.screenX-ra.screenX,tu=n.screenY-ra.screenY):tu=eu=0,ra=n),eu)},movementY:function(n){return"movementY"in n?n.movementY:tu}}),bh=fi(ol),f0=se({},ol,{dataTransfer:0}),h0=fi(f0),p0=se({},ia,{relatedTarget:0}),nu=fi(p0),m0=se({},Xs,{animationName:0,elapsedTime:0,pseudoElement:0}),g0=fi(m0),_0=se({},Xs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),v0=fi(_0),x0=se({},Xs,{data:0}),Rh=fi(x0),y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E0(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=M0[n])?!!r[n]:!1}function iu(){return E0}var T0=se({},ia,{key:function(n){if(n.key){var r=y0[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=rl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?S0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(n){return n.type==="keypress"?rl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?rl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),w0=fi(T0),A0=se({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ch=fi(A0),b0=se({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),R0=fi(b0),C0=se({},Xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),P0=fi(C0),L0=se({},ol,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),N0=fi(L0),D0=[9,13,27,32],ru=u&&"CompositionEvent"in window,sa=null;u&&"documentMode"in document&&(sa=document.documentMode);var I0=u&&"TextEvent"in window&&!sa,Ph=u&&(!ru||sa&&8<sa&&11>=sa),Lh=" ",Nh=!1;function Dh(n,r){switch(n){case"keyup":return D0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ih(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ys=!1;function U0(n,r){switch(n){case"compositionend":return Ih(r);case"keypress":return r.which!==32?null:(Nh=!0,Lh);case"textInput":return n=r.data,n===Lh&&Nh?null:n;default:return null}}function F0(n,r){if(Ys)return n==="compositionend"||!ru&&Dh(n,r)?(n=wh(),il=Qc=zr=null,Ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ph&&r.locale!=="ko"?null:r.data;default:return null}}var O0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!O0[n.type]:r==="textarea"}function Fh(n,r,l,d){Re(d),r=dl(r,"onChange"),0<r.length&&(l=new Jc("onChange","change",null,l,d),n.push({event:l,listeners:r}))}var oa=null,aa=null;function k0(n){ep(n,0)}function al(n){var r=Qs(n);if(At(r))return n}function B0(n,r){if(n==="change")return r}var Oh=!1;if(u){var su;if(u){var ou="oninput"in document;if(!ou){var kh=document.createElement("div");kh.setAttribute("oninput","return;"),ou=typeof kh.oninput=="function"}su=ou}else su=!1;Oh=su&&(!document.documentMode||9<document.documentMode)}function Bh(){oa&&(oa.detachEvent("onpropertychange",zh),aa=oa=null)}function zh(n){if(n.propertyName==="value"&&al(aa)){var r=[];Fh(r,aa,n,G(n)),sn(k0,r)}}function z0(n,r,l){n==="focusin"?(Bh(),oa=r,aa=l,oa.attachEvent("onpropertychange",zh)):n==="focusout"&&Bh()}function H0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return al(aa)}function V0(n,r){if(n==="click")return al(r)}function G0(n,r){if(n==="input"||n==="change")return al(r)}function W0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Oi=typeof Object.is=="function"?Object.is:W0;function la(n,r){if(Oi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),d=Object.keys(r);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var p=l[d];if(!f.call(r,p)||!Oi(n[p],r[p]))return!1}return!0}function Hh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Vh(n,r){var l=Hh(n);n=0;for(var d;l;){if(l.nodeType===3){if(d=n+l.textContent.length,n<=r&&d>=r)return{node:l,offset:r-n};n=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Hh(l)}}function Gh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Gh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Wh(){for(var n=window,r=Vt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Vt(n.document)}return r}function au(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function j0(n){var r=Wh(),l=n.focusedElem,d=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Gh(l.ownerDocument.documentElement,l)){if(d!==null&&au(l)){if(r=d.start,n=d.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,v=Math.min(d.start,p);d=d.end===void 0?v:Math.min(d.end,p),!n.extend&&v>d&&(p=d,d=v,v=p),p=Vh(l,v);var T=Vh(l,d);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),v>d?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var X0=u&&"documentMode"in document&&11>=document.documentMode,qs=null,lu=null,ca=null,cu=!1;function jh(n,r,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;cu||qs==null||qs!==Vt(d)||(d=qs,"selectionStart"in d&&au(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),ca&&la(ca,d)||(ca=d,d=dl(lu,"onSelect"),0<d.length&&(r=new Jc("onSelect","select",null,r,l),n.push({event:r,listeners:d}),r.target=qs)))}function ll(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Ks={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},uu={},Xh={};u&&(Xh=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function cl(n){if(uu[n])return uu[n];if(!Ks[n])return n;var r=Ks[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Xh)return uu[n]=r[l];return n}var Yh=cl("animationend"),qh=cl("animationiteration"),Kh=cl("animationstart"),$h=cl("transitionend"),Zh=new Map,Qh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(n,r){Zh.set(n,r),a(r,[n])}for(var du=0;du<Qh.length;du++){var fu=Qh[du],Y0=fu.toLowerCase(),q0=fu[0].toUpperCase()+fu.slice(1);Hr(Y0,"on"+q0)}Hr(Yh,"onAnimationEnd"),Hr(qh,"onAnimationIteration"),Hr(Kh,"onAnimationStart"),Hr("dblclick","onDoubleClick"),Hr("focusin","onFocus"),Hr("focusout","onBlur"),Hr($h,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function Jh(n,r,l){var d=n.type||"unknown-event";n.currentTarget=l,Ur(d,r,void 0,n),n.currentTarget=null}function ep(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var d=n[l],p=d.event;d=d.listeners;e:{var v=void 0;if(r)for(var T=d.length-1;0<=T;T--){var D=d[T],B=D.instance,re=D.currentTarget;if(D=D.listener,B!==v&&p.isPropagationStopped())break e;Jh(p,D,re),v=B}else for(T=0;T<d.length;T++){if(D=d[T],B=D.instance,re=D.currentTarget,D=D.listener,B!==v&&p.isPropagationStopped())break e;Jh(p,D,re),v=B}}}if(Di)throw n=Xn,Di=!1,Xn=null,n}function $t(n,r){var l=r[yu];l===void 0&&(l=r[yu]=new Set);var d=n+"__bubble";l.has(d)||(tp(r,n,2,!1),l.add(d))}function hu(n,r,l){var d=0;r&&(d|=4),tp(l,n,d,r)}var ul="_reactListening"+Math.random().toString(36).slice(2);function da(n){if(!n[ul]){n[ul]=!0,i.forEach(function(l){l!=="selectionchange"&&(K0.has(l)||hu(l,!1,n),hu(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ul]||(r[ul]=!0,hu("selectionchange",!1,r))}}function tp(n,r,l,d){switch(nl(r)){case 1:var p=$c;break;case 4:p=Zc;break;default:p=vs}l=p.bind(null,r,l,n),p=void 0,!Ir||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),d?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function pu(n,r,l,d,p){var v=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var T=d.tag;if(T===3||T===4){var D=d.stateNode.containerInfo;if(D===p||D.nodeType===8&&D.parentNode===p)break;if(T===4)for(T=d.return;T!==null;){var B=T.tag;if((B===3||B===4)&&(B=T.stateNode.containerInfo,B===p||B.nodeType===8&&B.parentNode===p))return;T=T.return}for(;D!==null;){if(T=xs(D),T===null)return;if(B=T.tag,B===5||B===6){d=v=T;continue e}D=D.parentNode}}d=d.return}sn(function(){var re=v,Me=G(l),Te=[];e:{var ye=Zh.get(n);if(ye!==void 0){var ke=Jc,Ye=n;switch(n){case"keypress":if(rl(l)===0)break e;case"keydown":case"keyup":ke=w0;break;case"focusin":Ye="focus",ke=nu;break;case"focusout":Ye="blur",ke=nu;break;case"beforeblur":case"afterblur":ke=nu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=h0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=R0;break;case Yh:case qh:case Kh:ke=g0;break;case $h:ke=P0;break;case"scroll":ke=d0;break;case"wheel":ke=N0;break;case"copy":case"cut":case"paste":ke=v0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Ch}var Ze=(r&4)!==0,cn=!Ze&&n==="scroll",K=Ze?ye!==null?ye+"Capture":null:ye;Ze=[];for(var W=re,Z;W!==null;){Z=W;var Ce=Z.stateNode;if(Z.tag===5&&Ce!==null&&(Z=Ce,K!==null&&(Ce=un(W,K),Ce!=null&&Ze.push(fa(W,Ce,Z)))),cn)break;W=W.return}0<Ze.length&&(ye=new ke(ye,Ye,null,l,Me),Te.push({event:ye,listeners:Ze}))}}if((r&7)===0){e:{if(ye=n==="mouseover"||n==="pointerover",ke=n==="mouseout"||n==="pointerout",ye&&l!==Nt&&(Ye=l.relatedTarget||l.fromElement)&&(xs(Ye)||Ye[dr]))break e;if((ke||ye)&&(ye=Me.window===Me?Me:(ye=Me.ownerDocument)?ye.defaultView||ye.parentWindow:window,ke?(Ye=l.relatedTarget||l.toElement,ke=re,Ye=Ye?xs(Ye):null,Ye!==null&&(cn=Si(Ye),Ye!==cn||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(ke=null,Ye=re),ke!==Ye)){if(Ze=bh,Ce="onMouseLeave",K="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ze=Ch,Ce="onPointerLeave",K="onPointerEnter",W="pointer"),cn=ke==null?ye:Qs(ke),Z=Ye==null?ye:Qs(Ye),ye=new Ze(Ce,W+"leave",ke,l,Me),ye.target=cn,ye.relatedTarget=Z,Ce=null,xs(Me)===re&&(Ze=new Ze(K,W+"enter",Ye,l,Me),Ze.target=Z,Ze.relatedTarget=cn,Ce=Ze),cn=Ce,ke&&Ye)t:{for(Ze=ke,K=Ye,W=0,Z=Ze;Z;Z=$s(Z))W++;for(Z=0,Ce=K;Ce;Ce=$s(Ce))Z++;for(;0<W-Z;)Ze=$s(Ze),W--;for(;0<Z-W;)K=$s(K),Z--;for(;W--;){if(Ze===K||K!==null&&Ze===K.alternate)break t;Ze=$s(Ze),K=$s(K)}Ze=null}else Ze=null;ke!==null&&np(Te,ye,ke,Ze,!1),Ye!==null&&cn!==null&&np(Te,cn,Ye,Ze,!0)}}e:{if(ye=re?Qs(re):window,ke=ye.nodeName&&ye.nodeName.toLowerCase(),ke==="select"||ke==="input"&&ye.type==="file")var et=B0;else if(Uh(ye))if(Oh)et=G0;else{et=H0;var ot=z0}else(ke=ye.nodeName)&&ke.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(et=V0);if(et&&(et=et(n,re))){Fh(Te,et,l,Me);break e}ot&&ot(n,ye,re),n==="focusout"&&(ot=ye._wrapperState)&&ot.controlled&&ye.type==="number"&&Bt(ye,"number",ye.value)}switch(ot=re?Qs(re):window,n){case"focusin":(Uh(ot)||ot.contentEditable==="true")&&(qs=ot,lu=re,ca=null);break;case"focusout":ca=lu=qs=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,jh(Te,l,Me);break;case"selectionchange":if(X0)break;case"keydown":case"keyup":jh(Te,l,Me)}var at;if(ru)e:{switch(n){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else Ys?Dh(n,l)&&(mt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(mt="onCompositionStart");mt&&(Ph&&l.locale!=="ko"&&(Ys||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&Ys&&(at=wh()):(zr=Me,Qc="value"in zr?zr.value:zr.textContent,Ys=!0)),ot=dl(re,mt),0<ot.length&&(mt=new Rh(mt,n,null,l,Me),Te.push({event:mt,listeners:ot}),at?mt.data=at:(at=Ih(l),at!==null&&(mt.data=at)))),(at=I0?U0(n,l):F0(n,l))&&(re=dl(re,"onBeforeInput"),0<re.length&&(Me=new Rh("onBeforeInput","beforeinput",null,l,Me),Te.push({event:Me,listeners:re}),Me.data=at))}ep(Te,r)})}function fa(n,r,l){return{instance:n,listener:r,currentTarget:l}}function dl(n,r){for(var l=r+"Capture",d=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=un(n,l),v!=null&&d.unshift(fa(n,v,p)),v=un(n,r),v!=null&&d.push(fa(n,v,p))),n=n.return}return d}function $s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function np(n,r,l,d,p){for(var v=r._reactName,T=[];l!==null&&l!==d;){var D=l,B=D.alternate,re=D.stateNode;if(B!==null&&B===d)break;D.tag===5&&re!==null&&(D=re,p?(B=un(l,v),B!=null&&T.unshift(fa(l,B,D))):p||(B=un(l,v),B!=null&&T.push(fa(l,B,D)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var $0=/\r\n?/g,Z0=/\u0000|\uFFFD/g;function ip(n){return(typeof n=="string"?n:""+n).replace($0,`
`).replace(Z0,"")}function fl(n,r,l){if(r=ip(r),ip(n)!==r&&l)throw Error(t(425))}function hl(){}var mu=null,gu=null;function _u(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var vu=typeof setTimeout=="function"?setTimeout:void 0,Q0=typeof clearTimeout=="function"?clearTimeout:void 0,rp=typeof Promise=="function"?Promise:void 0,J0=typeof queueMicrotask=="function"?queueMicrotask:typeof rp<"u"?function(n){return rp.resolve(null).then(n).catch(ev)}:vu;function ev(n){setTimeout(function(){throw n})}function xu(n,r){var l=r,d=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(d===0){n.removeChild(p),_s(r);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=p}while(l);_s(r)}function Vr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function sp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),Ji="__reactFiber$"+Zs,ha="__reactProps$"+Zs,dr="__reactContainer$"+Zs,yu="__reactEvents$"+Zs,tv="__reactListeners$"+Zs,nv="__reactHandles$"+Zs;function xs(n){var r=n[Ji];if(r)return r;for(var l=n.parentNode;l;){if(r=l[dr]||l[Ji]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=sp(n);n!==null;){if(l=n[Ji])return l;n=sp(n)}return r}n=l,l=n.parentNode}return null}function pa(n){return n=n[Ji]||n[dr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function pl(n){return n[ha]||null}var Su=[],Js=-1;function Gr(n){return{current:n}}function Zt(n){0>Js||(n.current=Su[Js],Su[Js]=null,Js--)}function Kt(n,r){Js++,Su[Js]=n.current,n.current=r}var Wr={},Fn=Gr(Wr),ti=Gr(!1),ys=Wr;function eo(n,r){var l=n.type.contextTypes;if(!l)return Wr;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=r[v];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function ni(n){return n=n.childContextTypes,n!=null}function ml(){Zt(ti),Zt(Fn)}function op(n,r,l){if(Fn.current!==Wr)throw Error(t(168));Kt(Fn,r),Kt(ti,l)}function ap(n,r,l){var d=n.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var p in d)if(!(p in r))throw Error(t(108,Se(n)||"Unknown",p));return se({},l,d)}function gl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Wr,ys=Fn.current,Kt(Fn,n),Kt(ti,ti.current),!0}function lp(n,r,l){var d=n.stateNode;if(!d)throw Error(t(169));l?(n=ap(n,r,ys),d.__reactInternalMemoizedMergedChildContext=n,Zt(ti),Zt(Fn),Kt(Fn,n)):Zt(ti),Kt(ti,l)}var fr=null,_l=!1,Mu=!1;function cp(n){fr===null?fr=[n]:fr.push(n)}function iv(n){_l=!0,cp(n)}function jr(){if(!Mu&&fr!==null){Mu=!0;var n=0,r=Et;try{var l=fr;for(Et=1;n<l.length;n++){var d=l[n];do d=d(!0);while(d!==null)}fr=null,_l=!1}catch(p){throw fr!==null&&(fr=fr.slice(n+1)),ee(We,jr),p}finally{Et=r,Mu=!1}}return null}var to=[],no=0,vl=null,xl=0,Mi=[],Ei=0,Ss=null,hr=1,pr="";function Ms(n,r){to[no++]=xl,to[no++]=vl,vl=n,xl=r}function up(n,r,l){Mi[Ei++]=hr,Mi[Ei++]=pr,Mi[Ei++]=Ss,Ss=n;var d=hr;n=pr;var p=32-_t(d)-1;d&=~(1<<p),l+=1;var v=32-_t(r)+p;if(30<v){var T=p-p%5;v=(d&(1<<T)-1).toString(32),d>>=T,p-=T,hr=1<<32-_t(r)+p|l<<p|d,pr=v+n}else hr=1<<v|l<<p|d,pr=n}function Eu(n){n.return!==null&&(Ms(n,1),up(n,1,0))}function Tu(n){for(;n===vl;)vl=to[--no],to[no]=null,xl=to[--no],to[no]=null;for(;n===Ss;)Ss=Mi[--Ei],Mi[Ei]=null,pr=Mi[--Ei],Mi[Ei]=null,hr=Mi[--Ei],Mi[Ei]=null}var hi=null,pi=null,Qt=!1,ki=null;function dp(n,r){var l=bi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function fp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,hi=n,pi=Vr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,hi=n,pi=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Ss!==null?{id:hr,overflow:pr}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=bi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,hi=n,pi=null,!0):!1;default:return!1}}function wu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Au(n){if(Qt){var r=pi;if(r){var l=r;if(!fp(n,r)){if(wu(n))throw Error(t(418));r=Vr(l.nextSibling);var d=hi;r&&fp(n,r)?dp(d,l):(n.flags=n.flags&-4097|2,Qt=!1,hi=n)}}else{if(wu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qt=!1,hi=n}}}function hp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;hi=n}function yl(n){if(n!==hi)return!1;if(!Qt)return hp(n),Qt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!_u(n.type,n.memoizedProps)),r&&(r=pi)){if(wu(n))throw pp(),Error(t(418));for(;r;)dp(n,r),r=Vr(r.nextSibling)}if(hp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){pi=Vr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}pi=null}}else pi=hi?Vr(n.stateNode.nextSibling):null;return!0}function pp(){for(var n=pi;n;)n=Vr(n.nextSibling)}function io(){pi=hi=null,Qt=!1}function bu(n){ki===null?ki=[n]:ki.push(n)}var rv=w.ReactCurrentBatchConfig;function ma(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,n));var p=d,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(T){var D=p.refs;T===null?delete D[v]:D[v]=T},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Sl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function mp(n){var r=n._init;return r(n._payload)}function gp(n){function r(K,W){if(n){var Z=K.deletions;Z===null?(K.deletions=[W],K.flags|=16):Z.push(W)}}function l(K,W){if(!n)return null;for(;W!==null;)r(K,W),W=W.sibling;return null}function d(K,W){for(K=new Map;W!==null;)W.key!==null?K.set(W.key,W):K.set(W.index,W),W=W.sibling;return K}function p(K,W){return K=Jr(K,W),K.index=0,K.sibling=null,K}function v(K,W,Z){return K.index=Z,n?(Z=K.alternate,Z!==null?(Z=Z.index,Z<W?(K.flags|=2,W):Z):(K.flags|=2,W)):(K.flags|=1048576,W)}function T(K){return n&&K.alternate===null&&(K.flags|=2),K}function D(K,W,Z,Ce){return W===null||W.tag!==6?(W=vd(Z,K.mode,Ce),W.return=K,W):(W=p(W,Z),W.return=K,W)}function B(K,W,Z,Ce){var et=Z.type;return et===I?Me(K,W,Z.props.children,Ce,Z.key):W!==null&&(W.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===le&&mp(et)===W.type)?(Ce=p(W,Z.props),Ce.ref=ma(K,W,Z),Ce.return=K,Ce):(Ce=jl(Z.type,Z.key,Z.props,null,K.mode,Ce),Ce.ref=ma(K,W,Z),Ce.return=K,Ce)}function re(K,W,Z,Ce){return W===null||W.tag!==4||W.stateNode.containerInfo!==Z.containerInfo||W.stateNode.implementation!==Z.implementation?(W=xd(Z,K.mode,Ce),W.return=K,W):(W=p(W,Z.children||[]),W.return=K,W)}function Me(K,W,Z,Ce,et){return W===null||W.tag!==7?(W=Ps(Z,K.mode,Ce,et),W.return=K,W):(W=p(W,Z),W.return=K,W)}function Te(K,W,Z){if(typeof W=="string"&&W!==""||typeof W=="number")return W=vd(""+W,K.mode,Z),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case z:return Z=jl(W.type,W.key,W.props,null,K.mode,Z),Z.ref=ma(K,null,W),Z.return=K,Z;case U:return W=xd(W,K.mode,Z),W.return=K,W;case le:var Ce=W._init;return Te(K,Ce(W._payload),Z)}if(qe(W)||ce(W))return W=Ps(W,K.mode,Z,null),W.return=K,W;Sl(K,W)}return null}function ye(K,W,Z,Ce){var et=W!==null?W.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return et!==null?null:D(K,W,""+Z,Ce);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case z:return Z.key===et?B(K,W,Z,Ce):null;case U:return Z.key===et?re(K,W,Z,Ce):null;case le:return et=Z._init,ye(K,W,et(Z._payload),Ce)}if(qe(Z)||ce(Z))return et!==null?null:Me(K,W,Z,Ce,null);Sl(K,Z)}return null}function ke(K,W,Z,Ce,et){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return K=K.get(Z)||null,D(W,K,""+Ce,et);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case z:return K=K.get(Ce.key===null?Z:Ce.key)||null,B(W,K,Ce,et);case U:return K=K.get(Ce.key===null?Z:Ce.key)||null,re(W,K,Ce,et);case le:var ot=Ce._init;return ke(K,W,Z,ot(Ce._payload),et)}if(qe(Ce)||ce(Ce))return K=K.get(Z)||null,Me(W,K,Ce,et,null);Sl(W,Ce)}return null}function Ye(K,W,Z,Ce){for(var et=null,ot=null,at=W,mt=W=0,wn=null;at!==null&&mt<Z.length;mt++){at.index>mt?(wn=at,at=null):wn=at.sibling;var kt=ye(K,at,Z[mt],Ce);if(kt===null){at===null&&(at=wn);break}n&&at&&kt.alternate===null&&r(K,at),W=v(kt,W,mt),ot===null?et=kt:ot.sibling=kt,ot=kt,at=wn}if(mt===Z.length)return l(K,at),Qt&&Ms(K,mt),et;if(at===null){for(;mt<Z.length;mt++)at=Te(K,Z[mt],Ce),at!==null&&(W=v(at,W,mt),ot===null?et=at:ot.sibling=at,ot=at);return Qt&&Ms(K,mt),et}for(at=d(K,at);mt<Z.length;mt++)wn=ke(at,K,mt,Z[mt],Ce),wn!==null&&(n&&wn.alternate!==null&&at.delete(wn.key===null?mt:wn.key),W=v(wn,W,mt),ot===null?et=wn:ot.sibling=wn,ot=wn);return n&&at.forEach(function(es){return r(K,es)}),Qt&&Ms(K,mt),et}function Ze(K,W,Z,Ce){var et=ce(Z);if(typeof et!="function")throw Error(t(150));if(Z=et.call(Z),Z==null)throw Error(t(151));for(var ot=et=null,at=W,mt=W=0,wn=null,kt=Z.next();at!==null&&!kt.done;mt++,kt=Z.next()){at.index>mt?(wn=at,at=null):wn=at.sibling;var es=ye(K,at,kt.value,Ce);if(es===null){at===null&&(at=wn);break}n&&at&&es.alternate===null&&r(K,at),W=v(es,W,mt),ot===null?et=es:ot.sibling=es,ot=es,at=wn}if(kt.done)return l(K,at),Qt&&Ms(K,mt),et;if(at===null){for(;!kt.done;mt++,kt=Z.next())kt=Te(K,kt.value,Ce),kt!==null&&(W=v(kt,W,mt),ot===null?et=kt:ot.sibling=kt,ot=kt);return Qt&&Ms(K,mt),et}for(at=d(K,at);!kt.done;mt++,kt=Z.next())kt=ke(at,K,mt,kt.value,Ce),kt!==null&&(n&&kt.alternate!==null&&at.delete(kt.key===null?mt:kt.key),W=v(kt,W,mt),ot===null?et=kt:ot.sibling=kt,ot=kt);return n&&at.forEach(function(Ov){return r(K,Ov)}),Qt&&Ms(K,mt),et}function cn(K,W,Z,Ce){if(typeof Z=="object"&&Z!==null&&Z.type===I&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case z:e:{for(var et=Z.key,ot=W;ot!==null;){if(ot.key===et){if(et=Z.type,et===I){if(ot.tag===7){l(K,ot.sibling),W=p(ot,Z.props.children),W.return=K,K=W;break e}}else if(ot.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===le&&mp(et)===ot.type){l(K,ot.sibling),W=p(ot,Z.props),W.ref=ma(K,ot,Z),W.return=K,K=W;break e}l(K,ot);break}else r(K,ot);ot=ot.sibling}Z.type===I?(W=Ps(Z.props.children,K.mode,Ce,Z.key),W.return=K,K=W):(Ce=jl(Z.type,Z.key,Z.props,null,K.mode,Ce),Ce.ref=ma(K,W,Z),Ce.return=K,K=Ce)}return T(K);case U:e:{for(ot=Z.key;W!==null;){if(W.key===ot)if(W.tag===4&&W.stateNode.containerInfo===Z.containerInfo&&W.stateNode.implementation===Z.implementation){l(K,W.sibling),W=p(W,Z.children||[]),W.return=K,K=W;break e}else{l(K,W);break}else r(K,W);W=W.sibling}W=xd(Z,K.mode,Ce),W.return=K,K=W}return T(K);case le:return ot=Z._init,cn(K,W,ot(Z._payload),Ce)}if(qe(Z))return Ye(K,W,Z,Ce);if(ce(Z))return Ze(K,W,Z,Ce);Sl(K,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,W!==null&&W.tag===6?(l(K,W.sibling),W=p(W,Z),W.return=K,K=W):(l(K,W),W=vd(Z,K.mode,Ce),W.return=K,K=W),T(K)):l(K,W)}return cn}var ro=gp(!0),_p=gp(!1),Ml=Gr(null),El=null,so=null,Ru=null;function Cu(){Ru=so=El=null}function Pu(n){var r=Ml.current;Zt(Ml),n._currentValue=r}function Lu(n,r,l){for(;n!==null;){var d=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),n===l)break;n=n.return}}function oo(n,r){El=n,Ru=so=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(ii=!0),n.firstContext=null)}function Ti(n){var r=n._currentValue;if(Ru!==n)if(n={context:n,memoizedValue:r,next:null},so===null){if(El===null)throw Error(t(308));so=n,El.dependencies={lanes:0,firstContext:n}}else so=so.next=n;return r}var Es=null;function Nu(n){Es===null?Es=[n]:Es.push(n)}function vp(n,r,l,d){var p=r.interleaved;return p===null?(l.next=l,Nu(r)):(l.next=p.next,p.next=l),r.interleaved=l,mr(n,d)}function mr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Xr=!1;function Du(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function gr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Yr(n,r,l){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(Ot&2)!==0){var p=d.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),d.pending=r,mr(n,l)}return p=d.interleaved,p===null?(r.next=r,Nu(d)):(r.next=p.next,p.next=r),d.interleaved=r,mr(n,l)}function Tl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,Ii(n,l)}}function yp(n,r){var l=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=T:v=v.next=T,l=l.next}while(l!==null);v===null?p=v=r:v=v.next=r}else p=v=r;l={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:d.shared,effects:d.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function wl(n,r,l,d){var p=n.updateQueue;Xr=!1;var v=p.firstBaseUpdate,T=p.lastBaseUpdate,D=p.shared.pending;if(D!==null){p.shared.pending=null;var B=D,re=B.next;B.next=null,T===null?v=re:T.next=re,T=B;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,D=Me.lastBaseUpdate,D!==T&&(D===null?Me.firstBaseUpdate=re:D.next=re,Me.lastBaseUpdate=B))}if(v!==null){var Te=p.baseState;T=0,Me=re=B=null,D=v;do{var ye=D.lane,ke=D.eventTime;if((d&ye)===ye){Me!==null&&(Me=Me.next={eventTime:ke,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Ye=n,Ze=D;switch(ye=r,ke=l,Ze.tag){case 1:if(Ye=Ze.payload,typeof Ye=="function"){Te=Ye.call(ke,Te,ye);break e}Te=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Ze.payload,ye=typeof Ye=="function"?Ye.call(ke,Te,ye):Ye,ye==null)break e;Te=se({},Te,ye);break e;case 2:Xr=!0}}D.callback!==null&&D.lane!==0&&(n.flags|=64,ye=p.effects,ye===null?p.effects=[D]:ye.push(D))}else ke={eventTime:ke,lane:ye,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Me===null?(re=Me=ke,B=Te):Me=Me.next=ke,T|=ye;if(D=D.next,D===null){if(D=p.shared.pending,D===null)break;ye=D,D=ye.next,ye.next=null,p.lastBaseUpdate=ye,p.shared.pending=null}}while(!0);if(Me===null&&(B=Te),p.baseState=B,p.firstBaseUpdate=re,p.lastBaseUpdate=Me,r=p.shared.interleaved,r!==null){p=r;do T|=p.lane,p=p.next;while(p!==r)}else v===null&&(p.shared.lanes=0);As|=T,n.lanes=T,n.memoizedState=Te}}function Sp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var d=n[r],p=d.callback;if(p!==null){if(d.callback=null,d=l,typeof p!="function")throw Error(t(191,p));p.call(d)}}}var ga={},er=Gr(ga),_a=Gr(ga),va=Gr(ga);function Ts(n){if(n===ga)throw Error(t(174));return n}function Iu(n,r){switch(Kt(va,r),Kt(_a,n),Kt(er,ga),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ge(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ge(r,n)}Zt(er),Kt(er,r)}function ao(){Zt(er),Zt(_a),Zt(va)}function Mp(n){Ts(va.current);var r=Ts(er.current),l=Ge(r,n.type);r!==l&&(Kt(_a,n),Kt(er,l))}function Uu(n){_a.current===n&&(Zt(er),Zt(_a))}var en=Gr(0);function Al(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Fu=[];function Ou(){for(var n=0;n<Fu.length;n++)Fu[n]._workInProgressVersionPrimary=null;Fu.length=0}var bl=w.ReactCurrentDispatcher,ku=w.ReactCurrentBatchConfig,ws=0,tn=null,pn=null,En=null,Rl=!1,xa=!1,ya=0,sv=0;function On(){throw Error(t(321))}function Bu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Oi(n[l],r[l]))return!1;return!0}function zu(n,r,l,d,p,v){if(ws=v,tn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,bl.current=n===null||n.memoizedState===null?cv:uv,n=l(d,p),xa){v=0;do{if(xa=!1,ya=0,25<=v)throw Error(t(301));v+=1,En=pn=null,r.updateQueue=null,bl.current=dv,n=l(d,p)}while(xa)}if(bl.current=Ll,r=pn!==null&&pn.next!==null,ws=0,En=pn=tn=null,Rl=!1,r)throw Error(t(300));return n}function Hu(){var n=ya!==0;return ya=0,n}function tr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?tn.memoizedState=En=n:En=En.next=n,En}function wi(){if(pn===null){var n=tn.alternate;n=n!==null?n.memoizedState:null}else n=pn.next;var r=En===null?tn.memoizedState:En.next;if(r!==null)En=r,pn=n;else{if(n===null)throw Error(t(310));pn=n,n={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},En===null?tn.memoizedState=En=n:En=En.next=n}return En}function Sa(n,r){return typeof r=="function"?r(n):r}function Vu(n){var r=wi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=pn,p=d.baseQueue,v=l.pending;if(v!==null){if(p!==null){var T=p.next;p.next=v.next,v.next=T}d.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,d=d.baseState;var D=T=null,B=null,re=v;do{var Me=re.lane;if((ws&Me)===Me)B!==null&&(B=B.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),d=re.hasEagerState?re.eagerState:n(d,re.action);else{var Te={lane:Me,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};B===null?(D=B=Te,T=d):B=B.next=Te,tn.lanes|=Me,As|=Me}re=re.next}while(re!==null&&re!==v);B===null?T=d:B.next=D,Oi(d,r.memoizedState)||(ii=!0),r.memoizedState=d,r.baseState=T,r.baseQueue=B,l.lastRenderedState=d}if(n=l.interleaved,n!==null){p=n;do v=p.lane,tn.lanes|=v,As|=v,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Gu(n){var r=wi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=l.dispatch,p=l.pending,v=r.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do v=n(v,T.action),T=T.next;while(T!==p);Oi(v,r.memoizedState)||(ii=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,d]}function Ep(){}function Tp(n,r){var l=tn,d=wi(),p=r(),v=!Oi(d.memoizedState,p);if(v&&(d.memoizedState=p,ii=!0),d=d.queue,Wu(bp.bind(null,l,d,n),[n]),d.getSnapshot!==r||v||En!==null&&En.memoizedState.tag&1){if(l.flags|=2048,Ma(9,Ap.bind(null,l,d,p,r),void 0,null),Tn===null)throw Error(t(349));(ws&30)!==0||wp(l,r,p)}return p}function wp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=tn.updateQueue,r===null?(r={lastEffect:null,stores:null},tn.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Ap(n,r,l,d){r.value=l,r.getSnapshot=d,Rp(r)&&Cp(n)}function bp(n,r,l){return l(function(){Rp(r)&&Cp(n)})}function Rp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Oi(n,l)}catch{return!0}}function Cp(n){var r=mr(n,1);r!==null&&Vi(r,n,1,-1)}function Pp(n){var r=tr();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:n},r.queue=n,n=n.dispatch=lv.bind(null,tn,n),[r.memoizedState,n]}function Ma(n,r,l,d){return n={tag:n,create:r,destroy:l,deps:d,next:null},r=tn.updateQueue,r===null?(r={lastEffect:null,stores:null},tn.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(d=l.next,l.next=n,n.next=d,r.lastEffect=n)),n}function Lp(){return wi().memoizedState}function Cl(n,r,l,d){var p=tr();tn.flags|=n,p.memoizedState=Ma(1|r,l,void 0,d===void 0?null:d)}function Pl(n,r,l,d){var p=wi();d=d===void 0?null:d;var v=void 0;if(pn!==null){var T=pn.memoizedState;if(v=T.destroy,d!==null&&Bu(d,T.deps)){p.memoizedState=Ma(r,l,v,d);return}}tn.flags|=n,p.memoizedState=Ma(1|r,l,v,d)}function Np(n,r){return Cl(8390656,8,n,r)}function Wu(n,r){return Pl(2048,8,n,r)}function Dp(n,r){return Pl(4,2,n,r)}function Ip(n,r){return Pl(4,4,n,r)}function Up(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Fp(n,r,l){return l=l!=null?l.concat([n]):null,Pl(4,4,Up.bind(null,r,n),l)}function ju(){}function Op(n,r){var l=wi();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&Bu(r,d[1])?d[0]:(l.memoizedState=[n,r],n)}function kp(n,r){var l=wi();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&Bu(r,d[1])?d[0]:(n=n(),l.memoizedState=[n,r],n)}function Bp(n,r,l){return(ws&21)===0?(n.baseState&&(n.baseState=!1,ii=!0),n.memoizedState=l):(Oi(l,r)||(l=pt(),tn.lanes|=l,As|=l,n.baseState=!0),r)}function ov(n,r){var l=Et;Et=l!==0&&4>l?l:4,n(!0);var d=ku.transition;ku.transition={};try{n(!1),r()}finally{Et=l,ku.transition=d}}function zp(){return wi().memoizedState}function av(n,r,l){var d=Zr(n);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},Hp(n))Vp(r,l);else if(l=vp(n,r,l,d),l!==null){var p=$n();Vi(l,n,d,p),Gp(l,r,d)}}function lv(n,r,l){var d=Zr(n),p={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(Hp(n))Vp(r,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var T=r.lastRenderedState,D=v(T,l);if(p.hasEagerState=!0,p.eagerState=D,Oi(D,T)){var B=r.interleaved;B===null?(p.next=p,Nu(r)):(p.next=B.next,B.next=p),r.interleaved=p;return}}catch{}finally{}l=vp(n,r,p,d),l!==null&&(p=$n(),Vi(l,n,d,p),Gp(l,r,d))}}function Hp(n){var r=n.alternate;return n===tn||r!==null&&r===tn}function Vp(n,r){xa=Rl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Gp(n,r,l){if((l&4194240)!==0){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,Ii(n,l)}}var Ll={readContext:Ti,useCallback:On,useContext:On,useEffect:On,useImperativeHandle:On,useInsertionEffect:On,useLayoutEffect:On,useMemo:On,useReducer:On,useRef:On,useState:On,useDebugValue:On,useDeferredValue:On,useTransition:On,useMutableSource:On,useSyncExternalStore:On,useId:On,unstable_isNewReconciler:!1},cv={readContext:Ti,useCallback:function(n,r){return tr().memoizedState=[n,r===void 0?null:r],n},useContext:Ti,useEffect:Np,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Cl(4194308,4,Up.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Cl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Cl(4,2,n,r)},useMemo:function(n,r){var l=tr();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var d=tr();return r=l!==void 0?l(r):r,d.memoizedState=d.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},d.queue=n,n=n.dispatch=av.bind(null,tn,n),[d.memoizedState,n]},useRef:function(n){var r=tr();return n={current:n},r.memoizedState=n},useState:Pp,useDebugValue:ju,useDeferredValue:function(n){return tr().memoizedState=n},useTransition:function(){var n=Pp(!1),r=n[0];return n=ov.bind(null,n[1]),tr().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var d=tn,p=tr();if(Qt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),Tn===null)throw Error(t(349));(ws&30)!==0||wp(d,r,l)}p.memoizedState=l;var v={value:l,getSnapshot:r};return p.queue=v,Np(bp.bind(null,d,v,n),[n]),d.flags|=2048,Ma(9,Ap.bind(null,d,v,l,r),void 0,null),l},useId:function(){var n=tr(),r=Tn.identifierPrefix;if(Qt){var l=pr,d=hr;l=(d&~(1<<32-_t(d)-1)).toString(32)+l,r=":"+r+"R"+l,l=ya++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=sv++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},uv={readContext:Ti,useCallback:Op,useContext:Ti,useEffect:Wu,useImperativeHandle:Fp,useInsertionEffect:Dp,useLayoutEffect:Ip,useMemo:kp,useReducer:Vu,useRef:Lp,useState:function(){return Vu(Sa)},useDebugValue:ju,useDeferredValue:function(n){var r=wi();return Bp(r,pn.memoizedState,n)},useTransition:function(){var n=Vu(Sa)[0],r=wi().memoizedState;return[n,r]},useMutableSource:Ep,useSyncExternalStore:Tp,useId:zp,unstable_isNewReconciler:!1},dv={readContext:Ti,useCallback:Op,useContext:Ti,useEffect:Wu,useImperativeHandle:Fp,useInsertionEffect:Dp,useLayoutEffect:Ip,useMemo:kp,useReducer:Gu,useRef:Lp,useState:function(){return Gu(Sa)},useDebugValue:ju,useDeferredValue:function(n){var r=wi();return pn===null?r.memoizedState=n:Bp(r,pn.memoizedState,n)},useTransition:function(){var n=Gu(Sa)[0],r=wi().memoizedState;return[n,r]},useMutableSource:Ep,useSyncExternalStore:Tp,useId:zp,unstable_isNewReconciler:!1};function Bi(n,r){if(n&&n.defaultProps){r=se({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Xu(n,r,l,d){r=n.memoizedState,l=l(d,r),l=l==null?r:se({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Nl={isMounted:function(n){return(n=n._reactInternals)?Si(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var d=$n(),p=Zr(n),v=gr(d,p);v.payload=r,l!=null&&(v.callback=l),r=Yr(n,v,p),r!==null&&(Vi(r,n,p,d),Tl(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var d=$n(),p=Zr(n),v=gr(d,p);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=Yr(n,v,p),r!==null&&(Vi(r,n,p,d),Tl(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=$n(),d=Zr(n),p=gr(l,d);p.tag=2,r!=null&&(p.callback=r),r=Yr(n,p,d),r!==null&&(Vi(r,n,d,l),Tl(r,n,d))}};function Wp(n,r,l,d,p,v,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,v,T):r.prototype&&r.prototype.isPureReactComponent?!la(l,d)||!la(p,v):!0}function jp(n,r,l){var d=!1,p=Wr,v=r.contextType;return typeof v=="object"&&v!==null?v=Ti(v):(p=ni(r)?ys:Fn.current,d=r.contextTypes,v=(d=d!=null)?eo(n,p):Wr),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Nl,n.stateNode=r,r._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),r}function Xp(n,r,l,d){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,d),r.state!==n&&Nl.enqueueReplaceState(r,r.state,null)}function Yu(n,r,l,d){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},Du(n);var v=r.contextType;typeof v=="object"&&v!==null?p.context=Ti(v):(v=ni(r)?ys:Fn.current,p.context=eo(n,v)),p.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Xu(n,r,v,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&Nl.enqueueReplaceState(p,p.state,null),wl(n,l,p,d),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function lo(n,r){try{var l="",d=r;do l+=he(d),d=d.return;while(d);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:p,digest:null}}function qu(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Ku(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var fv=typeof WeakMap=="function"?WeakMap:Map;function Yp(n,r,l){l=gr(-1,l),l.tag=3,l.payload={element:null};var d=r.value;return l.callback=function(){Bl||(Bl=!0,ud=d),Ku(n,r)},l}function qp(n,r,l){l=gr(-1,l),l.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var p=r.value;l.payload=function(){return d(p)},l.callback=function(){Ku(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Ku(n,r),typeof d!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function Kp(n,r,l){var d=n.pingCache;if(d===null){d=n.pingCache=new fv;var p=new Set;d.set(r,p)}else p=d.get(r),p===void 0&&(p=new Set,d.set(r,p));p.has(l)||(p.add(l),n=Av.bind(null,n,r,l),r.then(n,n))}function $p(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Zp(n,r,l,d,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=gr(-1,1),r.tag=2,Yr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var hv=w.ReactCurrentOwner,ii=!1;function Kn(n,r,l,d){r.child=n===null?_p(r,null,l,d):ro(r,n.child,l,d)}function Qp(n,r,l,d,p){l=l.render;var v=r.ref;return oo(r,p),d=zu(n,r,l,d,v,p),l=Hu(),n!==null&&!ii?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,_r(n,r,p)):(Qt&&l&&Eu(r),r.flags|=1,Kn(n,r,d,p),r.child)}function Jp(n,r,l,d,p){if(n===null){var v=l.type;return typeof v=="function"&&!_d(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,em(n,r,v,d,p)):(n=jl(l.type,null,d,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&p)===0){var T=v.memoizedProps;if(l=l.compare,l=l!==null?l:la,l(T,d)&&n.ref===r.ref)return _r(n,r,p)}return r.flags|=1,n=Jr(v,d),n.ref=r.ref,n.return=r,r.child=n}function em(n,r,l,d,p){if(n!==null){var v=n.memoizedProps;if(la(v,d)&&n.ref===r.ref)if(ii=!1,r.pendingProps=d=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(ii=!0);else return r.lanes=n.lanes,_r(n,r,p)}return $u(n,r,l,d,p)}function tm(n,r,l){var d=r.pendingProps,p=d.children,v=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Kt(uo,mi),mi|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Kt(uo,mi),mi|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=v!==null?v.baseLanes:l,Kt(uo,mi),mi|=d}else v!==null?(d=v.baseLanes|l,r.memoizedState=null):d=l,Kt(uo,mi),mi|=d;return Kn(n,r,p,l),r.child}function nm(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function $u(n,r,l,d,p){var v=ni(l)?ys:Fn.current;return v=eo(r,v),oo(r,p),l=zu(n,r,l,d,v,p),d=Hu(),n!==null&&!ii?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,_r(n,r,p)):(Qt&&d&&Eu(r),r.flags|=1,Kn(n,r,l,p),r.child)}function im(n,r,l,d,p){if(ni(l)){var v=!0;gl(r)}else v=!1;if(oo(r,p),r.stateNode===null)Il(n,r),jp(r,l,d),Yu(r,l,d,p),d=!0;else if(n===null){var T=r.stateNode,D=r.memoizedProps;T.props=D;var B=T.context,re=l.contextType;typeof re=="object"&&re!==null?re=Ti(re):(re=ni(l)?ys:Fn.current,re=eo(r,re));var Me=l.getDerivedStateFromProps,Te=typeof Me=="function"||typeof T.getSnapshotBeforeUpdate=="function";Te||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(D!==d||B!==re)&&Xp(r,T,d,re),Xr=!1;var ye=r.memoizedState;T.state=ye,wl(r,d,T,p),B=r.memoizedState,D!==d||ye!==B||ti.current||Xr?(typeof Me=="function"&&(Xu(r,l,Me,d),B=r.memoizedState),(D=Xr||Wp(r,l,D,d,ye,B,re))?(Te||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=B),T.props=d,T.state=B,T.context=re,d=D):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{T=r.stateNode,xp(n,r),D=r.memoizedProps,re=r.type===r.elementType?D:Bi(r.type,D),T.props=re,Te=r.pendingProps,ye=T.context,B=l.contextType,typeof B=="object"&&B!==null?B=Ti(B):(B=ni(l)?ys:Fn.current,B=eo(r,B));var ke=l.getDerivedStateFromProps;(Me=typeof ke=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(D!==Te||ye!==B)&&Xp(r,T,d,B),Xr=!1,ye=r.memoizedState,T.state=ye,wl(r,d,T,p);var Ye=r.memoizedState;D!==Te||ye!==Ye||ti.current||Xr?(typeof ke=="function"&&(Xu(r,l,ke,d),Ye=r.memoizedState),(re=Xr||Wp(r,l,re,d,ye,Ye,B)||!1)?(Me||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(d,Ye,B),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(d,Ye,B)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||D===n.memoizedProps&&ye===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ye===n.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=Ye),T.props=d,T.state=Ye,T.context=B,d=re):(typeof T.componentDidUpdate!="function"||D===n.memoizedProps&&ye===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ye===n.memoizedState||(r.flags|=1024),d=!1)}return Zu(n,r,l,d,v,p)}function Zu(n,r,l,d,p,v){nm(n,r);var T=(r.flags&128)!==0;if(!d&&!T)return p&&lp(r,l,!1),_r(n,r,v);d=r.stateNode,hv.current=r;var D=T&&typeof l.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,n!==null&&T?(r.child=ro(r,n.child,null,v),r.child=ro(r,null,D,v)):Kn(n,r,D,v),r.memoizedState=d.state,p&&lp(r,l,!0),r.child}function rm(n){var r=n.stateNode;r.pendingContext?op(n,r.pendingContext,r.pendingContext!==r.context):r.context&&op(n,r.context,!1),Iu(n,r.containerInfo)}function sm(n,r,l,d,p){return io(),bu(p),r.flags|=256,Kn(n,r,l,d),r.child}var Qu={dehydrated:null,treeContext:null,retryLane:0};function Ju(n){return{baseLanes:n,cachePool:null,transitions:null}}function om(n,r,l){var d=r.pendingProps,p=en.current,v=!1,T=(r.flags&128)!==0,D;if((D=T)||(D=n!==null&&n.memoizedState===null?!1:(p&2)!==0),D?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Kt(en,p&1),n===null)return Au(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=d.children,n=d.fallback,v?(d=r.mode,v=r.child,T={mode:"hidden",children:T},(d&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=Xl(T,d,0,null),n=Ps(n,d,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Ju(l),r.memoizedState=Qu,n):ed(r,T));if(p=n.memoizedState,p!==null&&(D=p.dehydrated,D!==null))return pv(n,r,T,d,D,p,l);if(v){v=d.fallback,T=r.mode,p=n.child,D=p.sibling;var B={mode:"hidden",children:d.children};return(T&1)===0&&r.child!==p?(d=r.child,d.childLanes=0,d.pendingProps=B,r.deletions=null):(d=Jr(p,B),d.subtreeFlags=p.subtreeFlags&14680064),D!==null?v=Jr(D,v):(v=Ps(v,T,l,null),v.flags|=2),v.return=r,d.return=r,d.sibling=v,r.child=d,d=v,v=r.child,T=n.child.memoizedState,T=T===null?Ju(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=n.childLanes&~l,r.memoizedState=Qu,d}return v=n.child,n=v.sibling,d=Jr(v,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=l),d.return=r,d.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=d,r.memoizedState=null,d}function ed(n,r){return r=Xl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Dl(n,r,l,d){return d!==null&&bu(d),ro(r,n.child,null,l),n=ed(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function pv(n,r,l,d,p,v,T){if(l)return r.flags&256?(r.flags&=-257,d=qu(Error(t(422))),Dl(n,r,T,d)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=d.fallback,p=r.mode,d=Xl({mode:"visible",children:d.children},p,0,null),v=Ps(v,p,T,null),v.flags|=2,d.return=r,v.return=r,d.sibling=v,r.child=d,(r.mode&1)!==0&&ro(r,n.child,null,T),r.child.memoizedState=Ju(T),r.memoizedState=Qu,v);if((r.mode&1)===0)return Dl(n,r,T,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var D=d.dgst;return d=D,v=Error(t(419)),d=qu(v,d,void 0),Dl(n,r,T,d)}if(D=(T&n.childLanes)!==0,ii||D){if(d=Tn,d!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(d.suspendedLanes|T))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,mr(n,p),Vi(d,n,p,-1))}return gd(),d=qu(Error(t(421))),Dl(n,r,T,d)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=bv.bind(null,n),p._reactRetry=r,null):(n=v.treeContext,pi=Vr(p.nextSibling),hi=r,Qt=!0,ki=null,n!==null&&(Mi[Ei++]=hr,Mi[Ei++]=pr,Mi[Ei++]=Ss,hr=n.id,pr=n.overflow,Ss=r),r=ed(r,d.children),r.flags|=4096,r)}function am(n,r,l){n.lanes|=r;var d=n.alternate;d!==null&&(d.lanes|=r),Lu(n.return,r,l)}function td(n,r,l,d,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:p}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=d,v.tail=l,v.tailMode=p)}function lm(n,r,l){var d=r.pendingProps,p=d.revealOrder,v=d.tail;if(Kn(n,r,d.children,l),d=en.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&am(n,l,r);else if(n.tag===19)am(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(Kt(en,d),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&Al(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),td(r,!1,p,l,v);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&Al(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}td(r,!0,l,null,v);break;case"together":td(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Il(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function _r(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),As|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Jr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Jr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function mv(n,r,l){switch(r.tag){case 3:rm(r),io();break;case 5:Mp(r);break;case 1:ni(r.type)&&gl(r);break;case 4:Iu(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,p=r.memoizedProps.value;Kt(Ml,d._currentValue),d._currentValue=p;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(Kt(en,en.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?om(n,r,l):(Kt(en,en.current&1),n=_r(n,r,l),n!==null?n.sibling:null);Kt(en,en.current&1);break;case 19:if(d=(l&r.childLanes)!==0,(n.flags&128)!==0){if(d)return lm(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Kt(en,en.current),d)break;return null;case 22:case 23:return r.lanes=0,tm(n,r,l)}return _r(n,r,l)}var cm,nd,um,dm;cm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},nd=function(){},um=function(n,r,l,d){var p=n.memoizedProps;if(p!==d){n=r.stateNode,Ts(er.current);var v=null;switch(l){case"input":p=X(n,p),d=X(n,d),v=[];break;case"select":p=se({},p,{value:void 0}),d=se({},d,{value:void 0}),v=[];break;case"textarea":p=A(n,p),d=A(n,d),v=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=hl)}gt(l,d);var T;l=null;for(re in p)if(!d.hasOwnProperty(re)&&p.hasOwnProperty(re)&&p[re]!=null)if(re==="style"){var D=p[re];for(T in D)D.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(s.hasOwnProperty(re)?v||(v=[]):(v=v||[]).push(re,null));for(re in d){var B=d[re];if(D=p!=null?p[re]:void 0,d.hasOwnProperty(re)&&B!==D&&(B!=null||D!=null))if(re==="style")if(D){for(T in D)!D.hasOwnProperty(T)||B&&B.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in B)B.hasOwnProperty(T)&&D[T]!==B[T]&&(l||(l={}),l[T]=B[T])}else l||(v||(v=[]),v.push(re,l)),l=B;else re==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,D=D?D.__html:void 0,B!=null&&D!==B&&(v=v||[]).push(re,B)):re==="children"?typeof B!="string"&&typeof B!="number"||(v=v||[]).push(re,""+B):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(s.hasOwnProperty(re)?(B!=null&&re==="onScroll"&&$t("scroll",n),v||D===B||(v=[])):(v=v||[]).push(re,B))}l&&(v=v||[]).push("style",l);var re=v;(r.updateQueue=re)&&(r.flags|=4)}},dm=function(n,r,l,d){l!==d&&(r.flags|=4)};function Ea(n,r){if(!Qt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function kn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,d=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=d,n.childLanes=l,r}function gv(n,r,l){var d=r.pendingProps;switch(Tu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kn(r),null;case 1:return ni(r.type)&&ml(),kn(r),null;case 3:return d=r.stateNode,ao(),Zt(ti),Zt(Fn),Ou(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(yl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,ki!==null&&(hd(ki),ki=null))),nd(n,r),kn(r),null;case 5:Uu(r);var p=Ts(va.current);if(l=r.type,n!==null&&r.stateNode!=null)um(n,r,l,d,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(t(166));return kn(r),null}if(n=Ts(er.current),yl(r)){d=r.stateNode,l=r.type;var v=r.memoizedProps;switch(d[Ji]=r,d[ha]=v,n=(r.mode&1)!==0,l){case"dialog":$t("cancel",d),$t("close",d);break;case"iframe":case"object":case"embed":$t("load",d);break;case"video":case"audio":for(p=0;p<ua.length;p++)$t(ua[p],d);break;case"source":$t("error",d);break;case"img":case"image":case"link":$t("error",d),$t("load",d);break;case"details":$t("toggle",d);break;case"input":yn(d,v),$t("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!v.multiple},$t("invalid",d);break;case"textarea":J(d,v),$t("invalid",d)}gt(l,v),p=null;for(var T in v)if(v.hasOwnProperty(T)){var D=v[T];T==="children"?typeof D=="string"?d.textContent!==D&&(v.suppressHydrationWarning!==!0&&fl(d.textContent,D,n),p=["children",D]):typeof D=="number"&&d.textContent!==""+D&&(v.suppressHydrationWarning!==!0&&fl(d.textContent,D,n),p=["children",""+D]):s.hasOwnProperty(T)&&D!=null&&T==="onScroll"&&$t("scroll",d)}switch(l){case"input":Ht(d),Qe(d,v,!0);break;case"textarea":Ht(d),xe(d);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(d.onclick=hl)}d=p,r.updateQueue=d,d!==null&&(r.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=T.createElement(l,{is:d.is}):(n=T.createElement(l),l==="select"&&(T=n,d.multiple?T.multiple=!0:d.size&&(T.size=d.size))):n=T.createElementNS(n,l),n[Ji]=r,n[ha]=d,cm(n,r,!1,!1),r.stateNode=n;e:{switch(T=ct(l,d),l){case"dialog":$t("cancel",n),$t("close",n),p=d;break;case"iframe":case"object":case"embed":$t("load",n),p=d;break;case"video":case"audio":for(p=0;p<ua.length;p++)$t(ua[p],n);p=d;break;case"source":$t("error",n),p=d;break;case"img":case"image":case"link":$t("error",n),$t("load",n),p=d;break;case"details":$t("toggle",n),p=d;break;case"input":yn(n,d),p=X(n,d),$t("invalid",n);break;case"option":p=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},p=se({},d,{value:void 0}),$t("invalid",n);break;case"textarea":J(n,d),p=A(n,d),$t("invalid",n);break;default:p=d}gt(l,p),D=p;for(v in D)if(D.hasOwnProperty(v)){var B=D[v];v==="style"?lt(n,B):v==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&He(n,B)):v==="children"?typeof B=="string"?(l!=="textarea"||B!=="")&&yt(n,B):typeof B=="number"&&yt(n,""+B):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?B!=null&&v==="onScroll"&&$t("scroll",n):B!=null&&C(n,v,B,T))}switch(l){case"input":Ht(n),Qe(n,d,!1);break;case"textarea":Ht(n),xe(n);break;case"option":d.value!=null&&n.setAttribute("value",""+Le(d.value));break;case"select":n.multiple=!!d.multiple,v=d.value,v!=null?N(n,!!d.multiple,v,!1):d.defaultValue!=null&&N(n,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=hl)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return kn(r),null;case 6:if(n&&r.stateNode!=null)dm(n,r,n.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(t(166));if(l=Ts(va.current),Ts(er.current),yl(r)){if(d=r.stateNode,l=r.memoizedProps,d[Ji]=r,(v=d.nodeValue!==l)&&(n=hi,n!==null))switch(n.tag){case 3:fl(d.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&fl(d.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Ji]=r,r.stateNode=d}return kn(r),null;case 13:if(Zt(en),d=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qt&&pi!==null&&(r.mode&1)!==0&&(r.flags&128)===0)pp(),io(),r.flags|=98560,v=!1;else if(v=yl(r),d!==null&&d.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Ji]=r}else io(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;kn(r),v=!1}else ki!==null&&(hd(ki),ki=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(en.current&1)!==0?mn===0&&(mn=3):gd())),r.updateQueue!==null&&(r.flags|=4),kn(r),null);case 4:return ao(),nd(n,r),n===null&&da(r.stateNode.containerInfo),kn(r),null;case 10:return Pu(r.type._context),kn(r),null;case 17:return ni(r.type)&&ml(),kn(r),null;case 19:if(Zt(en),v=r.memoizedState,v===null)return kn(r),null;if(d=(r.flags&128)!==0,T=v.rendering,T===null)if(d)Ea(v,!1);else{if(mn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=Al(n),T!==null){for(r.flags|=128,Ea(v,!1),d=T.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=l,l=r.child;l!==null;)v=l,n=d,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,n=T.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Kt(en,en.current&1|2),r.child}n=n.sibling}v.tail!==null&&Ee()>fo&&(r.flags|=128,d=!0,Ea(v,!1),r.lanes=4194304)}else{if(!d)if(n=Al(T),n!==null){if(r.flags|=128,d=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),Ea(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!Qt)return kn(r),null}else 2*Ee()-v.renderingStartTime>fo&&l!==1073741824&&(r.flags|=128,d=!0,Ea(v,!1),r.lanes=4194304);v.isBackwards?(T.sibling=r.child,r.child=T):(l=v.last,l!==null?l.sibling=T:r.child=T,v.last=T)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=Ee(),r.sibling=null,l=en.current,Kt(en,d?l&1|2:l&1),r):(kn(r),null);case 22:case 23:return md(),d=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(mi&1073741824)!==0&&(kn(r),r.subtreeFlags&6&&(r.flags|=8192)):kn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function _v(n,r){switch(Tu(r),r.tag){case 1:return ni(r.type)&&ml(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ao(),Zt(ti),Zt(Fn),Ou(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Uu(r),null;case 13:if(Zt(en),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));io()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Zt(en),null;case 4:return ao(),null;case 10:return Pu(r.type._context),null;case 22:case 23:return md(),null;case 24:return null;default:return null}}var Ul=!1,Bn=!1,vv=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function co(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){an(n,r,d)}else l.current=null}function id(n,r,l){try{l()}catch(d){an(n,r,d)}}var fm=!1;function xv(n,r){if(mu=Br,n=Wh(),au(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var p=d.anchorOffset,v=d.focusNode;d=d.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var T=0,D=-1,B=-1,re=0,Me=0,Te=n,ye=null;t:for(;;){for(var ke;Te!==l||p!==0&&Te.nodeType!==3||(D=T+p),Te!==v||d!==0&&Te.nodeType!==3||(B=T+d),Te.nodeType===3&&(T+=Te.nodeValue.length),(ke=Te.firstChild)!==null;)ye=Te,Te=ke;for(;;){if(Te===n)break t;if(ye===l&&++re===p&&(D=T),ye===v&&++Me===d&&(B=T),(ke=Te.nextSibling)!==null)break;Te=ye,ye=Te.parentNode}Te=ke}l=D===-1||B===-1?null:{start:D,end:B}}else l=null}l=l||{start:0,end:0}}else l=null;for(gu={focusedElem:n,selectionRange:l},Br=!1,Xe=r;Xe!==null;)if(r=Xe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Xe=n;else for(;Xe!==null;){r=Xe;try{var Ye=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Ze=Ye.memoizedProps,cn=Ye.memoizedState,K=r.stateNode,W=K.getSnapshotBeforeUpdate(r.elementType===r.type?Ze:Bi(r.type,Ze),cn);K.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var Z=r.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){an(r,r.return,Ce)}if(n=r.sibling,n!==null){n.return=r.return,Xe=n;break}Xe=r.return}return Ye=fm,fm=!1,Ye}function Ta(n,r,l){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&id(r,l,v)}p=p.next}while(p!==d)}}function Fl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var d=l.create;l.destroy=d()}l=l.next}while(l!==r)}}function rd(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function hm(n){var r=n.alternate;r!==null&&(n.alternate=null,hm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Ji],delete r[ha],delete r[yu],delete r[tv],delete r[nv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function pm(n){return n.tag===5||n.tag===3||n.tag===4}function mm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||pm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function sd(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=hl));else if(d!==4&&(n=n.child,n!==null))for(sd(n,r,l),n=n.sibling;n!==null;)sd(n,r,l),n=n.sibling}function od(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(od(n,r,l),n=n.sibling;n!==null;)od(n,r,l),n=n.sibling}var Ln=null,zi=!1;function qr(n,r,l){for(l=l.child;l!==null;)gm(n,r,l),l=l.sibling}function gm(n,r,l){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(bt,l)}catch{}switch(l.tag){case 5:Bn||co(l,r);case 6:var d=Ln,p=zi;Ln=null,qr(n,r,l),Ln=d,zi=p,Ln!==null&&(zi?(n=Ln,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):Ln.removeChild(l.stateNode));break;case 18:Ln!==null&&(zi?(n=Ln,l=l.stateNode,n.nodeType===8?xu(n.parentNode,l):n.nodeType===1&&xu(n,l),_s(n)):xu(Ln,l.stateNode));break;case 4:d=Ln,p=zi,Ln=l.stateNode.containerInfo,zi=!0,qr(n,r,l),Ln=d,zi=p;break;case 0:case 11:case 14:case 15:if(!Bn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var v=p,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&id(l,r,T),p=p.next}while(p!==d)}qr(n,r,l);break;case 1:if(!Bn&&(co(l,r),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(D){an(l,r,D)}qr(n,r,l);break;case 21:qr(n,r,l);break;case 22:l.mode&1?(Bn=(d=Bn)||l.memoizedState!==null,qr(n,r,l),Bn=d):qr(n,r,l);break;default:qr(n,r,l)}}function _m(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new vv),r.forEach(function(d){var p=Rv.bind(null,n,d);l.has(d)||(l.add(d),d.then(p,p))})}}function Hi(n,r){var l=r.deletions;if(l!==null)for(var d=0;d<l.length;d++){var p=l[d];try{var v=n,T=r,D=T;e:for(;D!==null;){switch(D.tag){case 5:Ln=D.stateNode,zi=!1;break e;case 3:Ln=D.stateNode.containerInfo,zi=!0;break e;case 4:Ln=D.stateNode.containerInfo,zi=!0;break e}D=D.return}if(Ln===null)throw Error(t(160));gm(v,T,p),Ln=null,zi=!1;var B=p.alternate;B!==null&&(B.return=null),p.return=null}catch(re){an(p,r,re)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)vm(r,n),r=r.sibling}function vm(n,r){var l=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Hi(r,n),nr(n),d&4){try{Ta(3,n,n.return),Fl(3,n)}catch(Ze){an(n,n.return,Ze)}try{Ta(5,n,n.return)}catch(Ze){an(n,n.return,Ze)}}break;case 1:Hi(r,n),nr(n),d&512&&l!==null&&co(l,l.return);break;case 5:if(Hi(r,n),nr(n),d&512&&l!==null&&co(l,l.return),n.flags&32){var p=n.stateNode;try{yt(p,"")}catch(Ze){an(n,n.return,Ze)}}if(d&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,T=l!==null?l.memoizedProps:v,D=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{D==="input"&&v.type==="radio"&&v.name!=null&&xt(p,v),ct(D,T);var re=ct(D,v);for(T=0;T<B.length;T+=2){var Me=B[T],Te=B[T+1];Me==="style"?lt(p,Te):Me==="dangerouslySetInnerHTML"?He(p,Te):Me==="children"?yt(p,Te):C(p,Me,Te,re)}switch(D){case"input":Ct(p,v);break;case"textarea":ge(p,v);break;case"select":var ye=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var ke=v.value;ke!=null?N(p,!!v.multiple,ke,!1):ye!==!!v.multiple&&(v.defaultValue!=null?N(p,!!v.multiple,v.defaultValue,!0):N(p,!!v.multiple,v.multiple?[]:"",!1))}p[ha]=v}catch(Ze){an(n,n.return,Ze)}}break;case 6:if(Hi(r,n),nr(n),d&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(Ze){an(n,n.return,Ze)}}break;case 3:if(Hi(r,n),nr(n),d&4&&l!==null&&l.memoizedState.isDehydrated)try{_s(r.containerInfo)}catch(Ze){an(n,n.return,Ze)}break;case 4:Hi(r,n),nr(n);break;case 13:Hi(r,n),nr(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(cd=Ee())),d&4&&_m(n);break;case 22:if(Me=l!==null&&l.memoizedState!==null,n.mode&1?(Bn=(re=Bn)||Me,Hi(r,n),Bn=re):Hi(r,n),nr(n),d&8192){if(re=n.memoizedState!==null,(n.stateNode.isHidden=re)&&!Me&&(n.mode&1)!==0)for(Xe=n,Me=n.child;Me!==null;){for(Te=Xe=Me;Xe!==null;){switch(ye=Xe,ke=ye.child,ye.tag){case 0:case 11:case 14:case 15:Ta(4,ye,ye.return);break;case 1:co(ye,ye.return);var Ye=ye.stateNode;if(typeof Ye.componentWillUnmount=="function"){d=ye,l=ye.return;try{r=d,Ye.props=r.memoizedProps,Ye.state=r.memoizedState,Ye.componentWillUnmount()}catch(Ze){an(d,l,Ze)}}break;case 5:co(ye,ye.return);break;case 22:if(ye.memoizedState!==null){Sm(Te);continue}}ke!==null?(ke.return=ye,Xe=ke):Sm(Te)}Me=Me.sibling}e:for(Me=null,Te=n;;){if(Te.tag===5){if(Me===null){Me=Te;try{p=Te.stateNode,re?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(D=Te.stateNode,B=Te.memoizedProps.style,T=B!=null&&B.hasOwnProperty("display")?B.display:null,D.style.display=st("display",T))}catch(Ze){an(n,n.return,Ze)}}}else if(Te.tag===6){if(Me===null)try{Te.stateNode.nodeValue=re?"":Te.memoizedProps}catch(Ze){an(n,n.return,Ze)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===n)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===n)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===n)break e;Me===Te&&(Me=null),Te=Te.return}Me===Te&&(Me=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:Hi(r,n),nr(n),d&4&&_m(n);break;case 21:break;default:Hi(r,n),nr(n)}}function nr(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(pm(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(yt(p,""),d.flags&=-33);var v=mm(n);od(n,v,p);break;case 3:case 4:var T=d.stateNode.containerInfo,D=mm(n);sd(n,D,T);break;default:throw Error(t(161))}}catch(B){an(n,n.return,B)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function yv(n,r,l){Xe=n,xm(n)}function xm(n,r,l){for(var d=(n.mode&1)!==0;Xe!==null;){var p=Xe,v=p.child;if(p.tag===22&&d){var T=p.memoizedState!==null||Ul;if(!T){var D=p.alternate,B=D!==null&&D.memoizedState!==null||Bn;D=Ul;var re=Bn;if(Ul=T,(Bn=B)&&!re)for(Xe=p;Xe!==null;)T=Xe,B=T.child,T.tag===22&&T.memoizedState!==null?Mm(p):B!==null?(B.return=T,Xe=B):Mm(p);for(;v!==null;)Xe=v,xm(v),v=v.sibling;Xe=p,Ul=D,Bn=re}ym(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,Xe=v):ym(n)}}function ym(n){for(;Xe!==null;){var r=Xe;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Bn||Fl(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!Bn)if(l===null)d.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:Bi(r.type,l.memoizedProps);d.componentDidUpdate(p,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Sp(r,v,d);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Sp(r,T,l)}break;case 5:var D=r.stateNode;if(l===null&&r.flags&4){l=D;var B=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&l.focus();break;case"img":B.src&&(l.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var re=r.alternate;if(re!==null){var Me=re.memoizedState;if(Me!==null){var Te=Me.dehydrated;Te!==null&&_s(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Bn||r.flags&512&&rd(r)}catch(ye){an(r,r.return,ye)}}if(r===n){Xe=null;break}if(l=r.sibling,l!==null){l.return=r.return,Xe=l;break}Xe=r.return}}function Sm(n){for(;Xe!==null;){var r=Xe;if(r===n){Xe=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Xe=l;break}Xe=r.return}}function Mm(n){for(;Xe!==null;){var r=Xe;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Fl(4,r)}catch(B){an(r,l,B)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var p=r.return;try{d.componentDidMount()}catch(B){an(r,p,B)}}var v=r.return;try{rd(r)}catch(B){an(r,v,B)}break;case 5:var T=r.return;try{rd(r)}catch(B){an(r,T,B)}}}catch(B){an(r,r.return,B)}if(r===n){Xe=null;break}var D=r.sibling;if(D!==null){D.return=r.return,Xe=D;break}Xe=r.return}}var Sv=Math.ceil,Ol=w.ReactCurrentDispatcher,ad=w.ReactCurrentOwner,Ai=w.ReactCurrentBatchConfig,Ot=0,Tn=null,fn=null,Nn=0,mi=0,uo=Gr(0),mn=0,wa=null,As=0,kl=0,ld=0,Aa=null,ri=null,cd=0,fo=1/0,vr=null,Bl=!1,ud=null,Kr=null,zl=!1,$r=null,Hl=0,ba=0,dd=null,Vl=-1,Gl=0;function $n(){return(Ot&6)!==0?Ee():Vl!==-1?Vl:Vl=Ee()}function Zr(n){return(n.mode&1)===0?1:(Ot&2)!==0&&Nn!==0?Nn&-Nn:rv.transition!==null?(Gl===0&&(Gl=pt()),Gl):(n=Et,n!==0||(n=window.event,n=n===void 0?16:nl(n.type)),n)}function Vi(n,r,l,d){if(50<ba)throw ba=0,dd=null,Error(t(185));vt(n,l,d),((Ot&2)===0||n!==Tn)&&(n===Tn&&((Ot&2)===0&&(kl|=l),mn===4&&Qr(n,Nn)),si(n,d),l===1&&Ot===0&&(r.mode&1)===0&&(fo=Ee()+500,_l&&jr()))}function si(n,r){var l=n.callbackNode;Mt(n,r);var d=Ue(n,n===Tn?Nn:0);if(d===0)l!==null&&te(l),n.callbackNode=null,n.callbackPriority=0;else if(r=d&-d,n.callbackPriority!==r){if(l!=null&&te(l),r===1)n.tag===0?iv(Tm.bind(null,n)):cp(Tm.bind(null,n)),J0(function(){(Ot&6)===0&&jr()}),l=null;else{switch(Jo(d)){case 1:l=We;break;case 4:l=dt;break;case 16:l=ft;break;case 536870912:l=Dt;break;default:l=ft}l=Nm(l,Em.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Em(n,r){if(Vl=-1,Gl=0,(Ot&6)!==0)throw Error(t(327));var l=n.callbackNode;if(ho()&&n.callbackNode!==l)return null;var d=Ue(n,n===Tn?Nn:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||r)r=Wl(n,d);else{r=d;var p=Ot;Ot|=2;var v=Am();(Tn!==n||Nn!==r)&&(vr=null,fo=Ee()+500,Rs(n,r));do try{Tv();break}catch(D){wm(n,D)}while(!0);Cu(),Ol.current=v,Ot=p,fn!==null?r=0:(Tn=null,Nn=0,r=mn)}if(r!==0){if(r===2&&(p=tt(n),p!==0&&(d=p,r=fd(n,p))),r===1)throw l=wa,Rs(n,0),Qr(n,d),si(n,Ee()),l;if(r===6)Qr(n,d);else{if(p=n.current.alternate,(d&30)===0&&!Mv(p)&&(r=Wl(n,d),r===2&&(v=tt(n),v!==0&&(d=v,r=fd(n,v))),r===1))throw l=wa,Rs(n,0),Qr(n,d),si(n,Ee()),l;switch(n.finishedWork=p,n.finishedLanes=d,r){case 0:case 1:throw Error(t(345));case 2:Cs(n,ri,vr);break;case 3:if(Qr(n,d),(d&130023424)===d&&(r=cd+500-Ee(),10<r)){if(Ue(n,0)!==0)break;if(p=n.suspendedLanes,(p&d)!==d){$n(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=vu(Cs.bind(null,n,ri,vr),r);break}Cs(n,ri,vr);break;case 4:if(Qr(n,d),(d&4194240)===d)break;for(r=n.eventTimes,p=-1;0<d;){var T=31-_t(d);v=1<<T,T=r[T],T>p&&(p=T),d&=~v}if(d=p,d=Ee()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*Sv(d/1960))-d,10<d){n.timeoutHandle=vu(Cs.bind(null,n,ri,vr),d);break}Cs(n,ri,vr);break;case 5:Cs(n,ri,vr);break;default:throw Error(t(329))}}}return si(n,Ee()),n.callbackNode===l?Em.bind(null,n):null}function fd(n,r){var l=Aa;return n.current.memoizedState.isDehydrated&&(Rs(n,r).flags|=256),n=Wl(n,r),n!==2&&(r=ri,ri=l,r!==null&&hd(r)),n}function hd(n){ri===null?ri=n:ri.push.apply(ri,n)}function Mv(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var p=l[d],v=p.getSnapshot;p=p.value;try{if(!Oi(v(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Qr(n,r){for(r&=~ld,r&=~kl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-_t(r),d=1<<l;n[l]=-1,r&=~d}}function Tm(n){if((Ot&6)!==0)throw Error(t(327));ho();var r=Ue(n,0);if((r&1)===0)return si(n,Ee()),null;var l=Wl(n,r);if(n.tag!==0&&l===2){var d=tt(n);d!==0&&(r=d,l=fd(n,d))}if(l===1)throw l=wa,Rs(n,0),Qr(n,r),si(n,Ee()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Cs(n,ri,vr),si(n,Ee()),null}function pd(n,r){var l=Ot;Ot|=1;try{return n(r)}finally{Ot=l,Ot===0&&(fo=Ee()+500,_l&&jr())}}function bs(n){$r!==null&&$r.tag===0&&(Ot&6)===0&&ho();var r=Ot;Ot|=1;var l=Ai.transition,d=Et;try{if(Ai.transition=null,Et=1,n)return n()}finally{Et=d,Ai.transition=l,Ot=r,(Ot&6)===0&&jr()}}function md(){mi=uo.current,Zt(uo)}function Rs(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Q0(l)),fn!==null)for(l=fn.return;l!==null;){var d=l;switch(Tu(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&ml();break;case 3:ao(),Zt(ti),Zt(Fn),Ou();break;case 5:Uu(d);break;case 4:ao();break;case 13:Zt(en);break;case 19:Zt(en);break;case 10:Pu(d.type._context);break;case 22:case 23:md()}l=l.return}if(Tn=n,fn=n=Jr(n.current,null),Nn=mi=r,mn=0,wa=null,ld=kl=As=0,ri=Aa=null,Es!==null){for(r=0;r<Es.length;r++)if(l=Es[r],d=l.interleaved,d!==null){l.interleaved=null;var p=d.next,v=l.pending;if(v!==null){var T=v.next;v.next=p,d.next=T}l.pending=d}Es=null}return n}function wm(n,r){do{var l=fn;try{if(Cu(),bl.current=Ll,Rl){for(var d=tn.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}Rl=!1}if(ws=0,En=pn=tn=null,xa=!1,ya=0,ad.current=null,l===null||l.return===null){mn=1,wa=r,fn=null;break}e:{var v=n,T=l.return,D=l,B=r;if(r=Nn,D.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var re=B,Me=D,Te=Me.tag;if((Me.mode&1)===0&&(Te===0||Te===11||Te===15)){var ye=Me.alternate;ye?(Me.updateQueue=ye.updateQueue,Me.memoizedState=ye.memoizedState,Me.lanes=ye.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var ke=$p(T);if(ke!==null){ke.flags&=-257,Zp(ke,T,D,v,r),ke.mode&1&&Kp(v,re,r),r=ke,B=re;var Ye=r.updateQueue;if(Ye===null){var Ze=new Set;Ze.add(B),r.updateQueue=Ze}else Ye.add(B);break e}else{if((r&1)===0){Kp(v,re,r),gd();break e}B=Error(t(426))}}else if(Qt&&D.mode&1){var cn=$p(T);if(cn!==null){(cn.flags&65536)===0&&(cn.flags|=256),Zp(cn,T,D,v,r),bu(lo(B,D));break e}}v=B=lo(B,D),mn!==4&&(mn=2),Aa===null?Aa=[v]:Aa.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var K=Yp(v,B,r);yp(v,K);break e;case 1:D=B;var W=v.type,Z=v.stateNode;if((v.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(Kr===null||!Kr.has(Z)))){v.flags|=65536,r&=-r,v.lanes|=r;var Ce=qp(v,D,r);yp(v,Ce);break e}}v=v.return}while(v!==null)}Rm(l)}catch(et){r=et,fn===l&&l!==null&&(fn=l=l.return);continue}break}while(!0)}function Am(){var n=Ol.current;return Ol.current=Ll,n===null?Ll:n}function gd(){(mn===0||mn===3||mn===2)&&(mn=4),Tn===null||(As&268435455)===0&&(kl&268435455)===0||Qr(Tn,Nn)}function Wl(n,r){var l=Ot;Ot|=2;var d=Am();(Tn!==n||Nn!==r)&&(vr=null,Rs(n,r));do try{Ev();break}catch(p){wm(n,p)}while(!0);if(Cu(),Ot=l,Ol.current=d,fn!==null)throw Error(t(261));return Tn=null,Nn=0,mn}function Ev(){for(;fn!==null;)bm(fn)}function Tv(){for(;fn!==null&&!Y();)bm(fn)}function bm(n){var r=Lm(n.alternate,n,mi);n.memoizedProps=n.pendingProps,r===null?Rm(n):fn=r,ad.current=null}function Rm(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=gv(l,r,mi),l!==null){fn=l;return}}else{if(l=_v(l,r),l!==null){l.flags&=32767,fn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mn=6,fn=null;return}}if(r=r.sibling,r!==null){fn=r;return}fn=r=n}while(r!==null);mn===0&&(mn=5)}function Cs(n,r,l){var d=Et,p=Ai.transition;try{Ai.transition=null,Et=1,wv(n,r,l,d)}finally{Ai.transition=p,Et=d}return null}function wv(n,r,l,d){do ho();while($r!==null);if((Ot&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(Rn(n,v),n===Tn&&(fn=Tn=null,Nn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||zl||(zl=!0,Nm(ft,function(){return ho(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=Ai.transition,Ai.transition=null;var T=Et;Et=1;var D=Ot;Ot|=4,ad.current=null,xv(n,l),vm(l,n),j0(gu),Br=!!mu,gu=mu=null,n.current=l,yv(l),be(),Ot=D,Et=T,Ai.transition=v}else n.current=l;if(zl&&(zl=!1,$r=n,Hl=p),v=n.pendingLanes,v===0&&(Kr=null),ln(l.stateNode),si(n,Ee()),r!==null)for(d=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],d(p.value,{componentStack:p.stack,digest:p.digest});if(Bl)throw Bl=!1,n=ud,ud=null,n;return(Hl&1)!==0&&n.tag!==0&&ho(),v=n.pendingLanes,(v&1)!==0?n===dd?ba++:(ba=0,dd=n):ba=0,jr(),null}function ho(){if($r!==null){var n=Jo(Hl),r=Ai.transition,l=Et;try{if(Ai.transition=null,Et=16>n?16:n,$r===null)var d=!1;else{if(n=$r,$r=null,Hl=0,(Ot&6)!==0)throw Error(t(331));var p=Ot;for(Ot|=4,Xe=n.current;Xe!==null;){var v=Xe,T=v.child;if((Xe.flags&16)!==0){var D=v.deletions;if(D!==null){for(var B=0;B<D.length;B++){var re=D[B];for(Xe=re;Xe!==null;){var Me=Xe;switch(Me.tag){case 0:case 11:case 15:Ta(8,Me,v)}var Te=Me.child;if(Te!==null)Te.return=Me,Xe=Te;else for(;Xe!==null;){Me=Xe;var ye=Me.sibling,ke=Me.return;if(hm(Me),Me===re){Xe=null;break}if(ye!==null){ye.return=ke,Xe=ye;break}Xe=ke}}}var Ye=v.alternate;if(Ye!==null){var Ze=Ye.child;if(Ze!==null){Ye.child=null;do{var cn=Ze.sibling;Ze.sibling=null,Ze=cn}while(Ze!==null)}}Xe=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,Xe=T;else e:for(;Xe!==null;){if(v=Xe,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:Ta(9,v,v.return)}var K=v.sibling;if(K!==null){K.return=v.return,Xe=K;break e}Xe=v.return}}var W=n.current;for(Xe=W;Xe!==null;){T=Xe;var Z=T.child;if((T.subtreeFlags&2064)!==0&&Z!==null)Z.return=T,Xe=Z;else e:for(T=W;Xe!==null;){if(D=Xe,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Fl(9,D)}}catch(et){an(D,D.return,et)}if(D===T){Xe=null;break e}var Ce=D.sibling;if(Ce!==null){Ce.return=D.return,Xe=Ce;break e}Xe=D.return}}if(Ot=p,jr(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(bt,n)}catch{}d=!0}return d}finally{Et=l,Ai.transition=r}}return!1}function Cm(n,r,l){r=lo(l,r),r=Yp(n,r,1),n=Yr(n,r,1),r=$n(),n!==null&&(vt(n,1,r),si(n,r))}function an(n,r,l){if(n.tag===3)Cm(n,n,l);else for(;r!==null;){if(r.tag===3){Cm(r,n,l);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Kr===null||!Kr.has(d))){n=lo(l,n),n=qp(r,n,1),r=Yr(r,n,1),n=$n(),r!==null&&(vt(r,1,n),si(r,n));break}}r=r.return}}function Av(n,r,l){var d=n.pingCache;d!==null&&d.delete(r),r=$n(),n.pingedLanes|=n.suspendedLanes&l,Tn===n&&(Nn&l)===l&&(mn===4||mn===3&&(Nn&130023424)===Nn&&500>Ee()-cd?Rs(n,0):ld|=l),si(n,r)}function Pm(n,r){r===0&&((n.mode&1)===0?r=1:(r=_e,_e<<=1,(_e&130023424)===0&&(_e=4194304)));var l=$n();n=mr(n,r),n!==null&&(vt(n,r,l),si(n,l))}function bv(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Pm(n,l)}function Rv(n,r){var l=0;switch(n.tag){case 13:var d=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(r),Pm(n,l)}var Lm;Lm=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||ti.current)ii=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return ii=!1,mv(n,r,l);ii=(n.flags&131072)!==0}else ii=!1,Qt&&(r.flags&1048576)!==0&&up(r,xl,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;Il(n,r),n=r.pendingProps;var p=eo(r,Fn.current);oo(r,l),p=zu(null,r,d,n,p,l);var v=Hu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ni(d)?(v=!0,gl(r)):v=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Du(r),p.updater=Nl,r.stateNode=p,p._reactInternals=r,Yu(r,d,n,l),r=Zu(null,r,d,!0,v,l)):(r.tag=0,Qt&&v&&Eu(r),Kn(null,r,p,l),r=r.child),r;case 16:d=r.elementType;e:{switch(Il(n,r),n=r.pendingProps,p=d._init,d=p(d._payload),r.type=d,p=r.tag=Pv(d),n=Bi(d,n),p){case 0:r=$u(null,r,d,n,l);break e;case 1:r=im(null,r,d,n,l);break e;case 11:r=Qp(null,r,d,n,l);break e;case 14:r=Jp(null,r,d,Bi(d.type,n),l);break e}throw Error(t(306,d,""))}return r;case 0:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:Bi(d,p),$u(n,r,d,p,l);case 1:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:Bi(d,p),im(n,r,d,p,l);case 3:e:{if(rm(r),n===null)throw Error(t(387));d=r.pendingProps,v=r.memoizedState,p=v.element,xp(n,r),wl(r,d,null,l);var T=r.memoizedState;if(d=T.element,v.isDehydrated)if(v={element:d,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){p=lo(Error(t(423)),r),r=sm(n,r,d,l,p);break e}else if(d!==p){p=lo(Error(t(424)),r),r=sm(n,r,d,l,p);break e}else for(pi=Vr(r.stateNode.containerInfo.firstChild),hi=r,Qt=!0,ki=null,l=_p(r,null,d,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(io(),d===p){r=_r(n,r,l);break e}Kn(n,r,d,l)}r=r.child}return r;case 5:return Mp(r),n===null&&Au(r),d=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,T=p.children,_u(d,p)?T=null:v!==null&&_u(d,v)&&(r.flags|=32),nm(n,r),Kn(n,r,T,l),r.child;case 6:return n===null&&Au(r),null;case 13:return om(n,r,l);case 4:return Iu(r,r.stateNode.containerInfo),d=r.pendingProps,n===null?r.child=ro(r,null,d,l):Kn(n,r,d,l),r.child;case 11:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:Bi(d,p),Qp(n,r,d,p,l);case 7:return Kn(n,r,r.pendingProps,l),r.child;case 8:return Kn(n,r,r.pendingProps.children,l),r.child;case 12:return Kn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(d=r.type._context,p=r.pendingProps,v=r.memoizedProps,T=p.value,Kt(Ml,d._currentValue),d._currentValue=T,v!==null)if(Oi(v.value,T)){if(v.children===p.children&&!ti.current){r=_r(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var D=v.dependencies;if(D!==null){T=v.child;for(var B=D.firstContext;B!==null;){if(B.context===d){if(v.tag===1){B=gr(-1,l&-l),B.tag=2;var re=v.updateQueue;if(re!==null){re=re.shared;var Me=re.pending;Me===null?B.next=B:(B.next=Me.next,Me.next=B),re.pending=B}}v.lanes|=l,B=v.alternate,B!==null&&(B.lanes|=l),Lu(v.return,l,r),D.lanes|=l;break}B=B.next}}else if(v.tag===10)T=v.type===r.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(t(341));T.lanes|=l,D=T.alternate,D!==null&&(D.lanes|=l),Lu(T,l,r),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===r){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}Kn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,d=r.pendingProps.children,oo(r,l),p=Ti(p),d=d(p),r.flags|=1,Kn(n,r,d,l),r.child;case 14:return d=r.type,p=Bi(d,r.pendingProps),p=Bi(d.type,p),Jp(n,r,d,p,l);case 15:return em(n,r,r.type,r.pendingProps,l);case 17:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:Bi(d,p),Il(n,r),r.tag=1,ni(d)?(n=!0,gl(r)):n=!1,oo(r,l),jp(r,d,p),Yu(r,d,p,l),Zu(null,r,d,!0,n,l);case 19:return lm(n,r,l);case 22:return tm(n,r,l)}throw Error(t(156,r.tag))};function Nm(n,r){return ee(n,r)}function Cv(n,r,l,d){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bi(n,r,l,d){return new Cv(n,r,l,d)}function _d(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Pv(n){if(typeof n=="function")return _d(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ae)return 11;if(n===fe)return 14}return 2}function Jr(n,r){var l=n.alternate;return l===null?(l=bi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function jl(n,r,l,d,p,v){var T=2;if(d=n,typeof n=="function")_d(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case I:return Ps(l.children,p,v,r);case O:T=8,p|=8;break;case P:return n=bi(12,l,r,p|2),n.elementType=P,n.lanes=v,n;case ne:return n=bi(13,l,r,p),n.elementType=ne,n.lanes=v,n;case me:return n=bi(19,l,r,p),n.elementType=me,n.lanes=v,n;case ue:return Xl(l,p,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:T=10;break e;case k:T=9;break e;case ae:T=11;break e;case fe:T=14;break e;case le:T=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=bi(T,l,r,p),r.elementType=n,r.type=d,r.lanes=v,r}function Ps(n,r,l,d){return n=bi(7,n,d,r),n.lanes=l,n}function Xl(n,r,l,d){return n=bi(22,n,d,r),n.elementType=ue,n.lanes=l,n.stateNode={isHidden:!1},n}function vd(n,r,l){return n=bi(6,n,null,r),n.lanes=l,n}function xd(n,r,l){return r=bi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Lv(n,r,l,d,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rt(0),this.expirationTimes=rt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rt(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function yd(n,r,l,d,p,v,T,D,B){return n=new Lv(n,r,l,D,B),r===1?(r=1,v===!0&&(r|=8)):r=0,v=bi(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Du(v),n}function Nv(n,r,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:d==null?null:""+d,children:n,containerInfo:r,implementation:l}}function Dm(n){if(!n)return Wr;n=n._reactInternals;e:{if(Si(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ni(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(ni(l))return ap(n,l,r)}return r}function Im(n,r,l,d,p,v,T,D,B){return n=yd(l,d,!0,n,p,v,T,D,B),n.context=Dm(null),l=n.current,d=$n(),p=Zr(l),v=gr(d,p),v.callback=r??null,Yr(l,v,p),n.current.lanes=p,vt(n,p,d),si(n,d),n}function Yl(n,r,l,d){var p=r.current,v=$n(),T=Zr(p);return l=Dm(l),r.context===null?r.context=l:r.pendingContext=l,r=gr(v,T),r.payload={element:n},d=d===void 0?null:d,d!==null&&(r.callback=d),n=Yr(p,r,T),n!==null&&(Vi(n,p,T,v),Tl(n,p,T)),T}function ql(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Um(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function Sd(n,r){Um(n,r),(n=n.alternate)&&Um(n,r)}function Dv(){return null}var Fm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Md(n){this._internalRoot=n}Kl.prototype.render=Md.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Yl(n,r,null,null)},Kl.prototype.unmount=Md.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;bs(function(){Yl(null,n,null,null)}),r[dr]=null}};function Kl(n){this._internalRoot=n}Kl.prototype.unstable_scheduleHydration=function(n){if(n){var r=qc();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Mn.length&&r!==0&&r<Mn[l].priority;l++);Mn.splice(l,0,n),l===0&&na(n)}};function Ed(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function $l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Om(){}function Iv(n,r,l,d,p){if(p){if(typeof d=="function"){var v=d;d=function(){var re=ql(T);v.call(re)}}var T=Im(r,d,n,0,null,!1,!1,"",Om);return n._reactRootContainer=T,n[dr]=T.current,da(n.nodeType===8?n.parentNode:n),bs(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof d=="function"){var D=d;d=function(){var re=ql(B);D.call(re)}}var B=yd(n,0,!1,null,null,!1,!1,"",Om);return n._reactRootContainer=B,n[dr]=B.current,da(n.nodeType===8?n.parentNode:n),bs(function(){Yl(r,B,l,d)}),B}function Zl(n,r,l,d,p){var v=l._reactRootContainer;if(v){var T=v;if(typeof p=="function"){var D=p;p=function(){var B=ql(T);D.call(B)}}Yl(r,T,n,p)}else T=Iv(l,r,n,p,d);return ql(T)}ea=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=ve(r.pendingLanes);l!==0&&(Ii(r,l|1),si(r,Ee()),(Ot&6)===0&&(fo=Ee()+500,jr()))}break;case 13:bs(function(){var d=mr(n,1);if(d!==null){var p=$n();Vi(d,n,1,p)}}),Sd(n,1)}},js=function(n){if(n.tag===13){var r=mr(n,134217728);if(r!==null){var l=$n();Vi(r,n,134217728,l)}Sd(n,134217728)}},ms=function(n){if(n.tag===13){var r=Zr(n),l=mr(n,r);if(l!==null){var d=$n();Vi(l,n,r,d)}Sd(n,r)}},qc=function(){return Et},ta=function(n,r){var l=Et;try{return Et=n,r()}finally{Et=l}},Ne=function(n,r,l){switch(r){case"input":if(Ct(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var d=l[r];if(d!==n&&d.form===n.form){var p=pl(d);if(!p)throw Error(t(90));At(d),Ct(d,p)}}}break;case"textarea":ge(n,l);break;case"select":r=l.value,r!=null&&N(n,!!l.multiple,r,!1)}},jt=pd,rn=bs;var Uv={usingClientEntryPoint:!1,Events:[pa,Qs,pl,Re,nt,pd]},Ra={findFiberByHostInstance:xs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fv={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=R(n),n===null?null:n.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||Dv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{bt=Ql.inject(Fv),Rt=Ql}catch{}}return oi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uv,oi.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ed(r))throw Error(t(200));return Nv(n,r,null,l)},oi.createRoot=function(n,r){if(!Ed(n))throw Error(t(299));var l=!1,d="",p=Fm;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=yd(n,1,!1,null,null,l,!1,d,p),n[dr]=r.current,da(n.nodeType===8?n.parentNode:n),new Md(r)},oi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=R(r),n=n===null?null:n.stateNode,n},oi.flushSync=function(n){return bs(n)},oi.hydrate=function(n,r,l){if(!$l(r))throw Error(t(200));return Zl(null,n,r,!0,l)},oi.hydrateRoot=function(n,r,l){if(!Ed(n))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,p=!1,v="",T=Fm;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=Im(r,null,n,1,l??null,p,!1,v,T),n[dr]=r.current,da(n),d)for(n=0;n<d.length;n++)l=d[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new Kl(r)},oi.render=function(n,r,l){if(!$l(r))throw Error(t(200));return Zl(null,n,r,!1,l)},oi.unmountComponentAtNode=function(n){if(!$l(n))throw Error(t(40));return n._reactRootContainer?(bs(function(){Zl(null,null,n,!1,function(){n._reactRootContainer=null,n[dr]=null})}),!0):!1},oi.unstable_batchedUpdates=pd,oi.unstable_renderSubtreeIntoContainer=function(n,r,l,d){if(!$l(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Zl(n,r,l,!1,d)},oi.version="18.3.1-next-f1338f8080-20240426",oi}var jm;function Xv(){if(jm)return Ad.exports;jm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ad.exports=jv(),Ad.exports}var Xm;function Yv(){if(Xm)return Jl;Xm=1;var o=Xv();return Jl.createRoot=o.createRoot,Jl.hydrateRoot=o.hydrateRoot,Jl}var qv=Yv();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oh="170",No={ROTATE:0,DOLLY:1,PAN:2},Co={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kv=0,Ym=1,$v=2,w_=1,Zv=2,wr=3,Lr=0,li=1,vi=2,ds=0,Do=1,qm=2,Km=3,$m=4,Qv=5,Bs=100,Jv=101,ex=102,tx=103,nx=104,ix=200,rx=201,sx=202,ox=203,hf=204,pf=205,ax=206,lx=207,cx=208,ux=209,dx=210,fx=211,hx=212,px=213,mx=214,mf=0,gf=1,_f=2,Oo=3,vf=4,xf=5,yf=6,Sf=7,A_=0,gx=1,_x=2,fs=0,vx=1,xx=2,yx=3,b_=4,Sx=5,Mx=6,Ex=7,Zm="attached",Tx="detached",R_=300,ko=301,Bo=302,Mf=303,Ef=304,Hc=306,zo=1e3,cs=1001,Fc=1002,Jn=1003,C_=1004,Ba=1005,xi=1006,Cc=1007,Rr=1008,Nr=1009,P_=1010,L_=1011,ja=1012,ah=1013,Hs=1014,qi=1015,$a=1016,lh=1017,ch=1018,Ho=1020,N_=35902,D_=1021,I_=1022,Li=1023,U_=1024,F_=1025,Io=1026,Vo=1027,uh=1028,dh=1029,O_=1030,fh=1031,hh=1033,Pc=33776,Lc=33777,Nc=33778,Dc=33779,Tf=35840,wf=35841,Af=35842,bf=35843,Rf=36196,Cf=37492,Pf=37496,Lf=37808,Nf=37809,Df=37810,If=37811,Uf=37812,Ff=37813,Of=37814,kf=37815,Bf=37816,zf=37817,Hf=37818,Vf=37819,Gf=37820,Wf=37821,Ic=36492,jf=36494,Xf=36495,k_=36283,Yf=36284,qf=36285,Kf=36286,Xa=2300,Ya=2301,Cd=2302,Qm=2400,Jm=2401,eg=2402,wx=2500,Ax=0,B_=1,$f=2,bx=3200,Rx=3201,Vc=0,Cx=1,ls="",bn="srgb",ei="srgb-linear",Gc="linear",Yt="srgb",po=7680,tg=519,Px=512,Lx=513,Nx=514,z_=515,Dx=516,Ix=517,Ux=518,Fx=519,Zf=35044,ng="300 es",Cr=2e3,Oc=2001;class Ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ig=1234567;const Va=Math.PI/180,Go=180/Math.PI;function $i(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zn[o&255]+zn[o>>8&255]+zn[o>>16&255]+zn[o>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[t&63|128]+zn[t>>8&255]+"-"+zn[t>>16&255]+zn[t>>24&255]+zn[i&255]+zn[i>>8&255]+zn[i>>16&255]+zn[i>>24&255]).toLowerCase()}function Dn(o,e,t){return Math.max(e,Math.min(t,o))}function ph(o,e){return(o%e+e)%e}function Ox(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function kx(o,e,t){return o!==e?(t-o)/(e-o):0}function Ga(o,e,t){return(1-t)*o+t*e}function Bx(o,e,t,i){return Ga(o,e,1-Math.exp(-t*i))}function zx(o,e=1){return e-Math.abs(ph(o,e*2)-e)}function Hx(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Vx(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Gx(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Wx(o,e){return o+Math.random()*(e-o)}function jx(o){return o*(.5-Math.random())}function Xx(o){o!==void 0&&(ig=o);let e=ig+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yx(o){return o*Va}function qx(o){return o*Go}function Kx(o){return(o&o-1)===0&&o!==0}function $x(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Zx(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Qx(o,e,t,i,s){const a=Math.cos,c=Math.sin,u=a(t/2),f=c(t/2),h=a((e+i)/2),m=c((e+i)/2),g=a((e-i)/2),_=c((e-i)/2),y=a((i-e)/2),M=c((i-e)/2);switch(s){case"XYX":o.set(u*m,f*g,f*_,u*h);break;case"YZY":o.set(f*_,u*m,f*g,u*h);break;case"ZXZ":o.set(f*g,f*_,u*m,u*h);break;case"XZX":o.set(u*m,f*M,f*y,u*h);break;case"YXY":o.set(f*y,u*m,f*M,u*h);break;case"ZYZ":o.set(f*M,f*y,u*m,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Po={DEG2RAD:Va,RAD2DEG:Go,generateUUID:$i,clamp:Dn,euclideanModulo:ph,mapLinear:Ox,inverseLerp:kx,lerp:Ga,damp:Bx,pingpong:zx,smoothstep:Hx,smootherstep:Vx,randInt:Gx,randFloat:Wx,randFloatSpread:jx,seededRandom:Xx,degToRad:Yx,radToDeg:qx,isPowerOfTwo:Kx,ceilPowerOfTwo:$x,floorPowerOfTwo:Zx,setQuaternionFromProperEuler:Qx,normalize:Gt,denormalize:Xi};class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*s+e.x,this.y=a*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tt{constructor(e,t,i,s,a,c,u,f,h){Tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,f,h)}set(e,t,i,s,a,c,u,f,h){const m=this.elements;return m[0]=e,m[1]=s,m[2]=u,m[3]=t,m[4]=a,m[5]=f,m[6]=i,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[3],f=i[6],h=i[1],m=i[4],g=i[7],_=i[2],y=i[5],M=i[8],E=s[0],S=s[3],x=s[6],L=s[1],C=s[4],w=s[7],z=s[2],U=s[5],I=s[8];return a[0]=c*E+u*L+f*z,a[3]=c*S+u*C+f*U,a[6]=c*x+u*w+f*I,a[1]=h*E+m*L+g*z,a[4]=h*S+m*C+g*U,a[7]=h*x+m*w+g*I,a[2]=_*E+y*L+M*z,a[5]=_*S+y*C+M*U,a[8]=_*x+y*w+M*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],m=e[8];return t*c*m-t*u*h-i*a*m+i*u*f+s*a*h-s*c*f}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],m=e[8],g=m*c-u*h,_=u*f-m*a,y=h*a-c*f,M=t*g+i*_+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(s*h-m*i)*E,e[2]=(u*i-s*c)*E,e[3]=_*E,e[4]=(m*t-s*f)*E,e[5]=(s*a-u*t)*E,e[6]=y*E,e[7]=(i*f-h*t)*E,e[8]=(c*t-i*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,c,u){const f=Math.cos(a),h=Math.sin(a);return this.set(i*f,i*h,-i*(f*c+h*u)+c+e,-s*h,s*f,-s*(-h*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Pd.makeScale(e,t)),this}rotate(e){return this.premultiply(Pd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pd=new Tt;function H_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function qa(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Jx(){const o=qa("canvas");return o.style.display="block",o}const rg={};function za(o){o in rg||(rg[o]=!0,console.warn(o))}function ey(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function ty(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ny(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ut={enabled:!0,workingColorSpace:ei,spaces:{},convert:function(o,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Yt&&(o.r=Pr(o.r),o.g=Pr(o.g),o.b=Pr(o.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Yt&&(o.r=Uo(o.r),o.g=Uo(o.g),o.b=Uo(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ls?Gc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,t){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function Pr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Uo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const sg=[.64,.33,.3,.6,.15,.06],og=[.2126,.7152,.0722],ag=[.3127,.329],lg=new Tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cg=new Tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ut.define({[ei]:{primaries:sg,whitePoint:ag,transfer:Gc,toXYZ:lg,fromXYZ:cg,luminanceCoefficients:og,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:sg,whitePoint:ag,transfer:Yt,toXYZ:lg,fromXYZ:cg,luminanceCoefficients:og,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}});let mo;class iy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mo===void 0&&(mo=qa("canvas")),mo.width=e.width,mo.height=e.height;const i=mo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=mo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=Pr(a[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pr(t[i]/255)*255):t[i]=Pr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ry=0;class V_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?a.push(Ld(s[c].image)):a.push(Ld(s[c]))}else a=Ld(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function Ld(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?iy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sy=0;class _n extends Ws{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,i=cs,s=cs,a=xi,c=Rr,u=Li,f=Nr,h=_n.DEFAULT_ANISOTROPY,m=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=$i(),this.name="",this.source=new V_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==R_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zo:e.x=e.x-Math.floor(e.x);break;case cs:e.x=e.x<0?0:1;break;case Fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zo:e.y=e.y-Math.floor(e.y);break;case cs:e.y=e.y<0?0:1;break;case Fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=R_;_n.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,i=0,s=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const f=e.elements,h=f[0],m=f[4],g=f[8],_=f[1],y=f[5],M=f[9],E=f[2],S=f[6],x=f[10];if(Math.abs(m-_)<.01&&Math.abs(g-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+E)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(h+1)/2,w=(y+1)/2,z=(x+1)/2,U=(m+_)/4,I=(g+E)/4,O=(M+S)/4;return C>w&&C>z?C<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(C),s=U/i,a=I/i):w>z?w<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(w),i=U/s,a=O/s):z<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(z),i=I/a,s=O/a),this.set(i,s,a,t),this}let L=Math.sqrt((S-M)*(S-M)+(g-E)*(g-E)+(_-m)*(_-m));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(g-E)/L,this.z=(_-m)/L,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oy extends Ws{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new _n(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new V_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vs extends oy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class G_ extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ay extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,c,u){let f=i[s+0],h=i[s+1],m=i[s+2],g=i[s+3];const _=a[c+0],y=a[c+1],M=a[c+2],E=a[c+3];if(u===0){e[t+0]=f,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(u===1){e[t+0]=_,e[t+1]=y,e[t+2]=M,e[t+3]=E;return}if(g!==E||f!==_||h!==y||m!==M){let S=1-u;const x=f*_+h*y+m*M+g*E,L=x>=0?1:-1,C=1-x*x;if(C>Number.EPSILON){const z=Math.sqrt(C),U=Math.atan2(z,x*L);S=Math.sin(S*U)/z,u=Math.sin(u*U)/z}const w=u*L;if(f=f*S+_*w,h=h*S+y*w,m=m*S+M*w,g=g*S+E*w,S===1-u){const z=1/Math.sqrt(f*f+h*h+m*m+g*g);f*=z,h*=z,m*=z,g*=z}}e[t]=f,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,a,c){const u=i[s],f=i[s+1],h=i[s+2],m=i[s+3],g=a[c],_=a[c+1],y=a[c+2],M=a[c+3];return e[t]=u*M+m*g+f*y-h*_,e[t+1]=f*M+m*_+h*g-u*y,e[t+2]=h*M+m*y+u*_-f*g,e[t+3]=m*M-u*g-f*_-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,c=e._order,u=Math.cos,f=Math.sin,h=u(i/2),m=u(s/2),g=u(a/2),_=f(i/2),y=f(s/2),M=f(a/2);switch(c){case"XYZ":this._x=_*m*g+h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g-_*y*M;break;case"YXZ":this._x=_*m*g+h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g+_*y*M;break;case"ZXY":this._x=_*m*g-h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g-_*y*M;break;case"ZYX":this._x=_*m*g-h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g+_*y*M;break;case"YZX":this._x=_*m*g+h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g-_*y*M;break;case"XZY":this._x=_*m*g-h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g+_*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],c=t[1],u=t[5],f=t[9],h=t[2],m=t[6],g=t[10],_=i+u+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(m-f)*y,this._y=(a-h)*y,this._z=(c-s)*y}else if(i>u&&i>g){const y=2*Math.sqrt(1+i-u-g);this._w=(m-f)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(a+h)/y}else if(u>g){const y=2*Math.sqrt(1+u-i-g);this._w=(a-h)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(f+m)/y}else{const y=2*Math.sqrt(1+g-i-u);this._w=(c-s)/y,this._x=(a+h)/y,this._y=(f+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,c=e._w,u=t._x,f=t._y,h=t._z,m=t._w;return this._x=i*m+c*u+s*h-a*f,this._y=s*m+c*f+a*u-i*h,this._z=a*m+c*h+i*f-s*u,this._w=c*m-i*u-s*f-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+s*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=s,this._z=a,this;const f=1-u*u;if(f<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*i+t*this._x,this._y=y*s+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const h=Math.sqrt(f),m=Math.atan2(h,u),g=Math.sin((1-t)*m)/h,_=Math.sin(t*m)/h;return this._w=c*g+this._w*_,this._x=i*g+this._x*_,this._y=s*g+this._y*_,this._z=a*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ug.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ug.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,c=e.y,u=e.z,f=e.w,h=2*(c*s-u*i),m=2*(u*t-a*s),g=2*(a*i-c*t);return this.x=t+f*h+c*g-u*m,this.y=i+f*m+u*h-a*g,this.z=s+f*g+a*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,c=t.x,u=t.y,f=t.z;return this.x=s*f-a*u,this.y=a*c-i*f,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nd.copy(this).projectOnVector(e),this.sub(Nd)}reflect(e){return this.sub(Nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nd=new V,ug=new rr;class yi{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Gi):Gi.fromBufferAttribute(a,c),Gi.applyMatrix4(e.matrixWorld),this.expandByPoint(Gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ec.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ec.copy(i.boundingBox)),ec.applyMatrix4(e.matrixWorld),this.union(ec)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pa),tc.subVectors(this.max,Pa),go.subVectors(e.a,Pa),_o.subVectors(e.b,Pa),vo.subVectors(e.c,Pa),ts.subVectors(_o,go),ns.subVectors(vo,_o),Ls.subVectors(go,vo);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Ls.z,Ls.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Ls.z,0,-Ls.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Ls.y,Ls.x,0];return!Dd(t,go,_o,vo,tc)||(t=[1,0,0,0,1,0,0,0,1],!Dd(t,go,_o,vo,tc))?!1:(nc.crossVectors(ts,ns),t=[nc.x,nc.y,nc.z],Dd(t,go,_o,vo,tc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xr=[new V,new V,new V,new V,new V,new V,new V,new V],Gi=new V,ec=new yi,go=new V,_o=new V,vo=new V,ts=new V,ns=new V,Ls=new V,Pa=new V,tc=new V,nc=new V,Ns=new V;function Dd(o,e,t,i,s){for(let a=0,c=o.length-3;a<=c;a+=3){Ns.fromArray(o,a);const u=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),f=e.dot(Ns),h=t.dot(Ns),m=i.dot(Ns);if(Math.max(-Math.max(f,h,m),Math.min(f,h,m))>u)return!1}return!0}const ly=new yi,La=new V,Id=new V;class or{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ly.setFromPoints(e).getCenter(i);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;La.subVectors(e,this.center);const t=La.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(La,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(La.copy(e.center).add(Id)),this.expandByPoint(La.copy(e.center).sub(Id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yr=new V,Ud=new V,ic=new V,is=new V,Fd=new V,rc=new V,Od=new V;class qo{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yr.copy(this.origin).addScaledVector(this.direction,t),yr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ud.copy(e).add(t).multiplyScalar(.5),ic.copy(t).sub(e).normalize(),is.copy(this.origin).sub(Ud);const a=e.distanceTo(t)*.5,c=-this.direction.dot(ic),u=is.dot(this.direction),f=-is.dot(ic),h=is.lengthSq(),m=Math.abs(1-c*c);let g,_,y,M;if(m>0)if(g=c*f-u,_=c*u-f,M=a*m,g>=0)if(_>=-M)if(_<=M){const E=1/m;g*=E,_*=E,y=g*(g+c*_+2*u)+_*(c*g+_+2*f)+h}else _=a,g=Math.max(0,-(c*_+u)),y=-g*g+_*(_+2*f)+h;else _=-a,g=Math.max(0,-(c*_+u)),y=-g*g+_*(_+2*f)+h;else _<=-M?(g=Math.max(0,-(-c*a+u)),_=g>0?-a:Math.min(Math.max(-a,-f),a),y=-g*g+_*(_+2*f)+h):_<=M?(g=0,_=Math.min(Math.max(-a,-f),a),y=_*(_+2*f)+h):(g=Math.max(0,-(c*a+u)),_=g>0?a:Math.min(Math.max(-a,-f),a),y=-g*g+_*(_+2*f)+h);else _=c>0?-a:a,g=Math.max(0,-(c*_+u)),y=-g*g+_*(_+2*f)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Ud).addScaledVector(ic,_),y}intersectSphere(e,t){yr.subVectors(e.center,this.origin);const i=yr.dot(this.direction),s=yr.dot(yr)-i*i,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,c,u,f;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(i=(e.min.x-_.x)*h,s=(e.max.x-_.x)*h):(i=(e.max.x-_.x)*h,s=(e.min.x-_.x)*h),m>=0?(a=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(a=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-_.z)*g,f=(e.max.z-_.z)*g):(u=(e.max.z-_.z)*g,f=(e.min.z-_.z)*g),i>f||u>s)||((u>i||i!==i)&&(i=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,yr)!==null}intersectTriangle(e,t,i,s,a){Fd.subVectors(t,e),rc.subVectors(i,e),Od.crossVectors(Fd,rc);let c=this.direction.dot(Od),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;is.subVectors(this.origin,e);const f=u*this.direction.dot(rc.crossVectors(is,rc));if(f<0)return null;const h=u*this.direction.dot(Fd.cross(is));if(h<0||f+h>c)return null;const m=-u*is.dot(Od);return m<0?null:this.at(m/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,i,s,a,c,u,f,h,m,g,_,y,M,E,S){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,f,h,m,g,_,y,M,E,S)}set(e,t,i,s,a,c,u,f,h,m,g,_,y,M,E,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=a,x[5]=c,x[9]=u,x[13]=f,x[2]=h,x[6]=m,x[10]=g,x[14]=_,x[3]=y,x[7]=M,x[11]=E,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/xo.setFromMatrixColumn(e,0).length(),a=1/xo.setFromMatrixColumn(e,1).length(),c=1/xo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(s),h=Math.sin(s),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const _=c*m,y=c*g,M=u*m,E=u*g;t[0]=f*m,t[4]=-f*g,t[8]=h,t[1]=y+M*h,t[5]=_-E*h,t[9]=-u*f,t[2]=E-_*h,t[6]=M+y*h,t[10]=c*f}else if(e.order==="YXZ"){const _=f*m,y=f*g,M=h*m,E=h*g;t[0]=_+E*u,t[4]=M*u-y,t[8]=c*h,t[1]=c*g,t[5]=c*m,t[9]=-u,t[2]=y*u-M,t[6]=E+_*u,t[10]=c*f}else if(e.order==="ZXY"){const _=f*m,y=f*g,M=h*m,E=h*g;t[0]=_-E*u,t[4]=-c*g,t[8]=M+y*u,t[1]=y+M*u,t[5]=c*m,t[9]=E-_*u,t[2]=-c*h,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const _=c*m,y=c*g,M=u*m,E=u*g;t[0]=f*m,t[4]=M*h-y,t[8]=_*h+E,t[1]=f*g,t[5]=E*h+_,t[9]=y*h-M,t[2]=-h,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const _=c*f,y=c*h,M=u*f,E=u*h;t[0]=f*m,t[4]=E-_*g,t[8]=M*g+y,t[1]=g,t[5]=c*m,t[9]=-u*m,t[2]=-h*m,t[6]=y*g+M,t[10]=_-E*g}else if(e.order==="XZY"){const _=c*f,y=c*h,M=u*f,E=u*h;t[0]=f*m,t[4]=-g,t[8]=h*m,t[1]=_*g+E,t[5]=c*m,t[9]=y*g-M,t[2]=M*g-y,t[6]=u*m,t[10]=E*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cy,e,uy)}lookAt(e,t,i){const s=this.elements;return gi.subVectors(e,t),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),rs.crossVectors(i,gi),rs.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),rs.crossVectors(i,gi)),rs.normalize(),sc.crossVectors(gi,rs),s[0]=rs.x,s[4]=sc.x,s[8]=gi.x,s[1]=rs.y,s[5]=sc.y,s[9]=gi.y,s[2]=rs.z,s[6]=sc.z,s[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[4],f=i[8],h=i[12],m=i[1],g=i[5],_=i[9],y=i[13],M=i[2],E=i[6],S=i[10],x=i[14],L=i[3],C=i[7],w=i[11],z=i[15],U=s[0],I=s[4],O=s[8],P=s[12],b=s[1],k=s[5],ae=s[9],ne=s[13],me=s[2],fe=s[6],le=s[10],ue=s[14],H=s[3],ce=s[7],se=s[11],F=s[15];return a[0]=c*U+u*b+f*me+h*H,a[4]=c*I+u*k+f*fe+h*ce,a[8]=c*O+u*ae+f*le+h*se,a[12]=c*P+u*ne+f*ue+h*F,a[1]=m*U+g*b+_*me+y*H,a[5]=m*I+g*k+_*fe+y*ce,a[9]=m*O+g*ae+_*le+y*se,a[13]=m*P+g*ne+_*ue+y*F,a[2]=M*U+E*b+S*me+x*H,a[6]=M*I+E*k+S*fe+x*ce,a[10]=M*O+E*ae+S*le+x*se,a[14]=M*P+E*ne+S*ue+x*F,a[3]=L*U+C*b+w*me+z*H,a[7]=L*I+C*k+w*fe+z*ce,a[11]=L*O+C*ae+w*le+z*se,a[15]=L*P+C*ne+w*ue+z*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],c=e[1],u=e[5],f=e[9],h=e[13],m=e[2],g=e[6],_=e[10],y=e[14],M=e[3],E=e[7],S=e[11],x=e[15];return M*(+a*f*g-s*h*g-a*u*_+i*h*_+s*u*y-i*f*y)+E*(+t*f*y-t*h*_+a*c*_-s*c*y+s*h*m-a*f*m)+S*(+t*h*g-t*u*y-a*c*g+i*c*y+a*u*m-i*h*m)+x*(-s*u*m-t*f*g+t*u*_+s*c*g-i*c*_+i*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],m=e[8],g=e[9],_=e[10],y=e[11],M=e[12],E=e[13],S=e[14],x=e[15],L=g*S*h-E*_*h+E*f*y-u*S*y-g*f*x+u*_*x,C=M*_*h-m*S*h-M*f*y+c*S*y+m*f*x-c*_*x,w=m*E*h-M*g*h+M*u*y-c*E*y-m*u*x+c*g*x,z=M*g*f-m*E*f-M*u*_+c*E*_+m*u*S-c*g*S,U=t*L+i*C+s*w+a*z;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/U;return e[0]=L*I,e[1]=(E*_*a-g*S*a-E*s*y+i*S*y+g*s*x-i*_*x)*I,e[2]=(u*S*a-E*f*a+E*s*h-i*S*h-u*s*x+i*f*x)*I,e[3]=(g*f*a-u*_*a-g*s*h+i*_*h+u*s*y-i*f*y)*I,e[4]=C*I,e[5]=(m*S*a-M*_*a+M*s*y-t*S*y-m*s*x+t*_*x)*I,e[6]=(M*f*a-c*S*a-M*s*h+t*S*h+c*s*x-t*f*x)*I,e[7]=(c*_*a-m*f*a+m*s*h-t*_*h-c*s*y+t*f*y)*I,e[8]=w*I,e[9]=(M*g*a-m*E*a-M*i*y+t*E*y+m*i*x-t*g*x)*I,e[10]=(c*E*a-M*u*a+M*i*h-t*E*h-c*i*x+t*u*x)*I,e[11]=(m*u*a-c*g*a-m*i*h+t*g*h+c*i*y-t*u*y)*I,e[12]=z*I,e[13]=(m*E*s-M*g*s+M*i*_-t*E*_-m*i*S+t*g*S)*I,e[14]=(M*u*s-c*E*s-M*i*f+t*E*f+c*i*S-t*u*S)*I,e[15]=(c*g*s-m*u*s+m*i*f-t*g*f-c*i*_+t*u*_)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,c=e.x,u=e.y,f=e.z,h=a*c,m=a*u;return this.set(h*c+i,h*u-s*f,h*f+s*u,0,h*u+s*f,m*u+i,m*f-s*c,0,h*f-s*u,m*f+s*c,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,c){return this.set(1,i,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,c=t._y,u=t._z,f=t._w,h=a+a,m=c+c,g=u+u,_=a*h,y=a*m,M=a*g,E=c*m,S=c*g,x=u*g,L=f*h,C=f*m,w=f*g,z=i.x,U=i.y,I=i.z;return s[0]=(1-(E+x))*z,s[1]=(y+w)*z,s[2]=(M-C)*z,s[3]=0,s[4]=(y-w)*U,s[5]=(1-(_+x))*U,s[6]=(S+L)*U,s[7]=0,s[8]=(M+C)*I,s[9]=(S-L)*I,s[10]=(1-(_+E))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=xo.set(s[0],s[1],s[2]).length();const c=xo.set(s[4],s[5],s[6]).length(),u=xo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Wi.copy(this);const h=1/a,m=1/c,g=1/u;return Wi.elements[0]*=h,Wi.elements[1]*=h,Wi.elements[2]*=h,Wi.elements[4]*=m,Wi.elements[5]*=m,Wi.elements[6]*=m,Wi.elements[8]*=g,Wi.elements[9]*=g,Wi.elements[10]*=g,t.setFromRotationMatrix(Wi),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,s,a,c,u=Cr){const f=this.elements,h=2*a/(t-e),m=2*a/(i-s),g=(t+e)/(t-e),_=(i+s)/(i-s);let y,M;if(u===Cr)y=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(u===Oc)y=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=h,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=m,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,s,a,c,u=Cr){const f=this.elements,h=1/(t-e),m=1/(i-s),g=1/(c-a),_=(t+e)*h,y=(i+s)*m;let M,E;if(u===Cr)M=(c+a)*g,E=-2*g;else if(u===Oc)M=a*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=E,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const xo=new V,Wi=new wt,cy=new V(0,0,0),uy=new V(1,1,1),rs=new V,sc=new V,gi=new V,dg=new wt,fg=new rr;class sr{constructor(e=0,t=0,i=0,s=sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],c=s[4],u=s[8],f=s[1],h=s[5],m=s[9],g=s[2],_=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(Dn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-Dn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-Dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return dg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fg.setFromEuler(this),this.setFromQuaternion(fg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sr.DEFAULT_ORDER="XYZ";class mh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dy=0;const hg=new V,yo=new rr,Sr=new wt,oc=new V,Na=new V,fy=new V,hy=new rr,pg=new V(1,0,0),mg=new V(0,1,0),gg=new V(0,0,1),_g={type:"added"},py={type:"removed"},So={type:"childadded",child:null},kd={type:"childremoved",child:null};class nn extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new V,t=new sr,i=new rr,s=new V(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new Tt}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yo.setFromAxisAngle(e,t),this.quaternion.multiply(yo),this}rotateOnWorldAxis(e,t){return yo.setFromAxisAngle(e,t),this.quaternion.premultiply(yo),this}rotateX(e){return this.rotateOnAxis(pg,e)}rotateY(e){return this.rotateOnAxis(mg,e)}rotateZ(e){return this.rotateOnAxis(gg,e)}translateOnAxis(e,t){return hg.copy(e).applyQuaternion(this.quaternion),this.position.add(hg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pg,e)}translateY(e){return this.translateOnAxis(mg,e)}translateZ(e){return this.translateOnAxis(gg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oc.copy(e):oc.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sr.lookAt(Na,oc,this.up):Sr.lookAt(oc,Na,this.up),this.quaternion.setFromRotationMatrix(Sr),s&&(Sr.extractRotation(s.matrixWorld),yo.setFromRotationMatrix(Sr),this.quaternion.premultiply(yo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_g),So.child=e,this.dispatchEvent(So),So.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(py),kd.child=e,this.dispatchEvent(kd),kd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_g),So.child=e,this.dispatchEvent(So),So.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,e,fy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,hy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,m=f.length;h<m;h++){const g=f[h];a(e.shapes,g)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(a(e.materials,this.material[f]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];s.animations.push(a(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),h=c(e.textures),m=c(e.images),g=c(e.shapes),_=c(e.skeletons),y=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),y.length>0&&(i.animations=y),M.length>0&&(i.nodes=M)}return i.object=s,i;function c(u){const f=[];for(const h in u){const m=u[h];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}nn.DEFAULT_UP=new V(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ji=new V,Mr=new V,Bd=new V,Er=new V,Mo=new V,Eo=new V,vg=new V,zd=new V,Hd=new V,Vd=new V,Gd=new zt,Wd=new zt,jd=new zt;class Yi{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ji.subVectors(e,t),s.cross(ji);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){ji.subVectors(s,t),Mr.subVectors(i,t),Bd.subVectors(e,t);const c=ji.dot(ji),u=ji.dot(Mr),f=ji.dot(Bd),h=Mr.dot(Mr),m=Mr.dot(Bd),g=c*h-u*u;if(g===0)return a.set(0,0,0),null;const _=1/g,y=(h*f-u*m)*_,M=(c*m-u*f)*_;return a.set(1-y-M,M,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Er)===null?!1:Er.x>=0&&Er.y>=0&&Er.x+Er.y<=1}static getInterpolation(e,t,i,s,a,c,u,f){return this.getBarycoord(e,t,i,s,Er)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Er.x),f.addScaledVector(c,Er.y),f.addScaledVector(u,Er.z),f)}static getInterpolatedAttribute(e,t,i,s,a,c){return Gd.setScalar(0),Wd.setScalar(0),jd.setScalar(0),Gd.fromBufferAttribute(e,t),Wd.fromBufferAttribute(e,i),jd.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(Gd,a.x),c.addScaledVector(Wd,a.y),c.addScaledVector(jd,a.z),c}static isFrontFacing(e,t,i,s){return ji.subVectors(i,t),Mr.subVectors(e,t),ji.cross(Mr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),Mr.subVectors(this.a,this.b),ji.cross(Mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return Yi.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return Yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let c,u;Mo.subVectors(s,i),Eo.subVectors(a,i),zd.subVectors(e,i);const f=Mo.dot(zd),h=Eo.dot(zd);if(f<=0&&h<=0)return t.copy(i);Hd.subVectors(e,s);const m=Mo.dot(Hd),g=Eo.dot(Hd);if(m>=0&&g<=m)return t.copy(s);const _=f*g-m*h;if(_<=0&&f>=0&&m<=0)return c=f/(f-m),t.copy(i).addScaledVector(Mo,c);Vd.subVectors(e,a);const y=Mo.dot(Vd),M=Eo.dot(Vd);if(M>=0&&y<=M)return t.copy(a);const E=y*h-f*M;if(E<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(i).addScaledVector(Eo,u);const S=m*M-y*g;if(S<=0&&g-m>=0&&y-M>=0)return vg.subVectors(a,s),u=(g-m)/(g-m+(y-M)),t.copy(s).addScaledVector(vg,u);const x=1/(S+E+_);return c=E*x,u=_*x,t.copy(i).addScaledVector(Mo,c).addScaledVector(Eo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const W_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},ac={h:0,s:0,l:0};function Xd(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ut.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ut.workingColorSpace){if(e=ph(e,1),t=Dn(t,0,1),i=Dn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Xd(c,a,e+1/3),this.g=Xd(c,a,e),this.b=Xd(c,a,e-1/3)}return Ut.toWorkingColorSpace(this,s),this}setStyle(e,t=bn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const i=W_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return Ut.fromWorkingColorSpace(Hn.copy(this),e),Math.round(Dn(Hn.r*255,0,255))*65536+Math.round(Dn(Hn.g*255,0,255))*256+Math.round(Dn(Hn.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.fromWorkingColorSpace(Hn.copy(this),t);const i=Hn.r,s=Hn.g,a=Hn.b,c=Math.max(i,s,a),u=Math.min(i,s,a);let f,h;const m=(u+c)/2;if(u===c)f=0,h=0;else{const g=c-u;switch(h=m<=.5?g/(c+u):g/(2-c-u),c){case i:f=(s-a)/g+(s<a?6:0);break;case s:f=(a-i)/g+2;break;case a:f=(i-s)/g+4;break}f/=6}return e.h=f,e.s=h,e.l=m,e}getRGB(e,t=Ut.workingColorSpace){return Ut.fromWorkingColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=bn){Ut.fromWorkingColorSpace(Hn.copy(this),e);const t=Hn.r,i=Hn.g,s=Hn.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(ac);const i=Ga(ss.h,ac.h,t),s=Ga(ss.s,ac.s,t),a=Ga(ss.l,ac.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new ut;ut.NAMES=W_;let my=0;class Ni extends Ws{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=$i(),this.name="",this.blending=Do,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hf,this.blendDst=pf,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Do&&(i.blending=this.blending),this.side!==Lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hf&&(i.blendSrc=this.blendSrc),this.blendDst!==pf&&(i.blendDst=this.blendDst),this.blendEquation!==Bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Oo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==po&&(i.stencilFail=this.stencilFail),this.stencilZFail!==po&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==po&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pi extends Ni{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sr,this.combine=A_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new V,lc=new ht;class In{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zf,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)lc.fromBufferAttribute(this,t),lc.applyMatrix3(e),this.setXY(t,lc.x,lc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),s=Gt(s,this.array),a=Gt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zf&&(e.usage=this.usage),e}}class j_ extends In{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class X_ extends In{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wn extends In{constructor(e,t,i){super(new Float32Array(e),t,i)}}let gy=0;const Ri=new wt,Yd=new nn,To=new V,_i=new yi,Da=new yi,An=new V;class jn extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H_(e)?X_:j_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Tt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,i){return Ri.makeTranslation(e,t,i),this.applyMatrix4(Ri),this}scale(e,t,i){return Ri.makeScale(e,t,i),this.applyMatrix4(Ri),this}lookAt(e){return Yd.lookAt(e),Yd.updateMatrix(),this.applyMatrix4(Yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(To).negate(),this.translate(To.x,To.y,To.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Wn(i,3))}else{for(let i=0,s=t.count;i<s;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];_i.setFromBufferAttribute(a),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];Da.setFromBufferAttribute(u),this.morphTargetsRelative?(An.addVectors(_i.min,Da.min),_i.expandByPoint(An),An.addVectors(_i.max,Da.max),_i.expandByPoint(An)):(_i.expandByPoint(Da.min),_i.expandByPoint(Da.max))}_i.getCenter(i);let s=0;for(let a=0,c=e.count;a<c;a++)An.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(An));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],f=this.morphTargetsRelative;for(let h=0,m=u.count;h<m;h++)An.fromBufferAttribute(u,h),f&&(To.fromBufferAttribute(e,h),An.add(To)),s=Math.max(s,i.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],f=[];for(let O=0;O<i.count;O++)u[O]=new V,f[O]=new V;const h=new V,m=new V,g=new V,_=new ht,y=new ht,M=new ht,E=new V,S=new V;function x(O,P,b){h.fromBufferAttribute(i,O),m.fromBufferAttribute(i,P),g.fromBufferAttribute(i,b),_.fromBufferAttribute(a,O),y.fromBufferAttribute(a,P),M.fromBufferAttribute(a,b),m.sub(h),g.sub(h),y.sub(_),M.sub(_);const k=1/(y.x*M.y-M.x*y.y);isFinite(k)&&(E.copy(m).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(k),S.copy(g).multiplyScalar(y.x).addScaledVector(m,-M.x).multiplyScalar(k),u[O].add(E),u[P].add(E),u[b].add(E),f[O].add(S),f[P].add(S),f[b].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let O=0,P=L.length;O<P;++O){const b=L[O],k=b.start,ae=b.count;for(let ne=k,me=k+ae;ne<me;ne+=3)x(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const C=new V,w=new V,z=new V,U=new V;function I(O){z.fromBufferAttribute(s,O),U.copy(z);const P=u[O];C.copy(P),C.sub(z.multiplyScalar(z.dot(P))).normalize(),w.crossVectors(U,P);const k=w.dot(f[O])<0?-1:1;c.setXYZW(O,C.x,C.y,C.z,k)}for(let O=0,P=L.length;O<P;++O){const b=L[O],k=b.start,ae=b.count;for(let ne=k,me=k+ae;ne<me;ne+=3)I(e.getX(ne+0)),I(e.getX(ne+1)),I(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,y=i.count;_<y;_++)i.setXYZ(_,0,0,0);const s=new V,a=new V,c=new V,u=new V,f=new V,h=new V,m=new V,g=new V;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),E=e.getX(_+1),S=e.getX(_+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,S),m.subVectors(c,a),g.subVectors(s,a),m.cross(g),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),u.add(m),f.add(m),h.add(m),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let _=0,y=t.count;_<y;_+=3)s.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),m.subVectors(c,a),g.subVectors(s,a),m.cross(g),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(u,f){const h=u.array,m=u.itemSize,g=u.normalized,_=new h.constructor(f.length*m);let y=0,M=0;for(let E=0,S=f.length;E<S;E++){u.isInterleavedBufferAttribute?y=f[E]*u.data.stride+u.offset:y=f[E]*m;for(let x=0;x<m;x++)_[M++]=h[y++]}return new In(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jn,i=this.index.array,s=this.attributes;for(const u in s){const f=s[u],h=e(f,i);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const f=[],h=a[u];for(let m=0,g=h.length;m<g;m++){const _=h[m],y=e(_,i);f.push(y)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const h=i[f];e.data.attributes[f]=h.toJSON(e.data)}const s={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],m=[];for(let g=0,_=h.length;g<_;g++){const y=h[g];m.push(y.toJSON(e.data))}m.length>0&&(s[f]=m,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const h in s){const m=s[h];this.setAttribute(h,m.clone(t))}const a=e.morphAttributes;for(const h in a){const m=[],g=a[h];for(let _=0,y=g.length;_<y;_++)m.push(g[_].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xg=new wt,Ds=new qo,cc=new or,yg=new V,uc=new V,dc=new V,fc=new V,qd=new V,hc=new V,Sg=new V,pc=new V;class Gn extends nn{constructor(e=new jn,t=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){hc.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const m=u[f],g=a[f];m!==0&&(qd.fromBufferAttribute(g,e),c?hc.addScaledVector(qd,m):hc.addScaledVector(qd.sub(t),m))}t.add(hc)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cc.copy(i.boundingSphere),cc.applyMatrix4(a),Ds.copy(e.ray).recast(e.near),!(cc.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(cc,yg)===null||Ds.origin.distanceToSquared(yg)>(e.far-e.near)**2))&&(xg.copy(a).invert(),Ds.copy(e.ray).applyMatrix4(xg),!(i.boundingBox!==null&&Ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,i){let s;const a=this.geometry,c=this.material,u=a.index,f=a.attributes.position,h=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,_=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,E=_.length;M<E;M++){const S=_[M],x=c[S.materialIndex],L=Math.max(S.start,y.start),C=Math.min(u.count,Math.min(S.start+S.count,y.start+y.count));for(let w=L,z=C;w<z;w+=3){const U=u.getX(w),I=u.getX(w+1),O=u.getX(w+2);s=mc(this,x,e,i,h,m,g,U,I,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),E=Math.min(u.count,y.start+y.count);for(let S=M,x=E;S<x;S+=3){const L=u.getX(S),C=u.getX(S+1),w=u.getX(S+2);s=mc(this,c,e,i,h,m,g,L,C,w),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,E=_.length;M<E;M++){const S=_[M],x=c[S.materialIndex],L=Math.max(S.start,y.start),C=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let w=L,z=C;w<z;w+=3){const U=w,I=w+1,O=w+2;s=mc(this,x,e,i,h,m,g,U,I,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),E=Math.min(f.count,y.start+y.count);for(let S=M,x=E;S<x;S+=3){const L=S,C=S+1,w=S+2;s=mc(this,c,e,i,h,m,g,L,C,w),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function _y(o,e,t,i,s,a,c,u){let f;if(e.side===li?f=i.intersectTriangle(c,a,s,!0,u):f=i.intersectTriangle(s,a,c,e.side===Lr,u),f===null)return null;pc.copy(u),pc.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(pc);return h<t.near||h>t.far?null:{distance:h,point:pc.clone(),object:o}}function mc(o,e,t,i,s,a,c,u,f,h){o.getVertexPosition(u,uc),o.getVertexPosition(f,dc),o.getVertexPosition(h,fc);const m=_y(o,e,t,i,uc,dc,fc,Sg);if(m){const g=new V;Yi.getBarycoord(Sg,uc,dc,fc,g),s&&(m.uv=Yi.getInterpolatedAttribute(s,u,f,h,g,new ht)),a&&(m.uv1=Yi.getInterpolatedAttribute(a,u,f,h,g,new ht)),c&&(m.normal=Yi.getInterpolatedAttribute(c,u,f,h,g,new V),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:u,b:f,c:h,normal:new V,materialIndex:0};Yi.getNormal(uc,dc,fc,_.normal),m.face=_,m.barycoord=g}return m}class Za extends jn{constructor(e=1,t=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const u=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const f=[],h=[],m=[],g=[];let _=0,y=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,s,c,2),M("x","z","y",1,-1,e,i,-t,s,c,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(f),this.setAttribute("position",new Wn(h,3)),this.setAttribute("normal",new Wn(m,3)),this.setAttribute("uv",new Wn(g,2));function M(E,S,x,L,C,w,z,U,I,O,P){const b=w/I,k=z/O,ae=w/2,ne=z/2,me=U/2,fe=I+1,le=O+1;let ue=0,H=0;const ce=new V;for(let se=0;se<le;se++){const F=se*k-ne;for(let ie=0;ie<fe;ie++){const Be=ie*b-ae;ce[E]=Be*L,ce[S]=F*C,ce[x]=me,h.push(ce.x,ce.y,ce.z),ce[E]=0,ce[S]=0,ce[x]=U>0?1:-1,m.push(ce.x,ce.y,ce.z),g.push(ie/I),g.push(1-se/O),ue+=1}}for(let se=0;se<O;se++)for(let F=0;F<I;F++){const ie=_+F+fe*se,Be=_+F+fe*(se+1),Q=_+(F+1)+fe*(se+1),he=_+(F+1)+fe*se;f.push(ie,Be,he),f.push(Be,Q,he),H+=6}u.addGroup(y,H,P),y+=H,_+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wo(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Qn(o){const e={};for(let t=0;t<o.length;t++){const i=Wo(o[t]);for(const s in i)e[s]=i[s]}return e}function vy(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Y_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const xy={clone:Wo,merge:Qn};var yy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dr extends Ni{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yy,this.fragmentShader=Sy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wo(e.uniforms),this.uniformsGroups=vy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class q_ extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Cr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const os=new V,Mg=new ht,Eg=new ht;class Vn extends q_{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(Va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,Mg,Eg),t.subVectors(Eg,Mg)}setViewOffset(e,t,i,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Va*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;a+=c.offsetX*s/f,t-=c.offsetY*i/h,s*=c.width/f,i*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wo=-90,Ao=1;class My extends nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Vn(wo,Ao,e,t);s.layers=this.layers,this.add(s);const a=new Vn(wo,Ao,e,t);a.layers=this.layers,this.add(a);const c=new Vn(wo,Ao,e,t);c.layers=this.layers,this.add(c);const u=new Vn(wo,Ao,e,t);u.layers=this.layers,this.add(u);const f=new Vn(wo,Ao,e,t);f.layers=this.layers,this.add(f);const h=new Vn(wo,Ao,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,c,u,f]=t;for(const h of t)this.remove(h);if(e===Cr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Oc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,f,h,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,c),e.setRenderTarget(i,2,s),e.render(t,u),e.setRenderTarget(i,3,s),e.render(t,f),e.setRenderTarget(i,4,s),e.render(t,h),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,m),e.setRenderTarget(g,_,y),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class K_ extends _n{constructor(e,t,i,s,a,c,u,f,h,m){e=e!==void 0?e:[],t=t!==void 0?t:ko,super(e,t,i,s,a,c,u,f,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ey extends Vs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new K_(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Za(5,5,5),a=new Dr({name:"CubemapFromEquirect",uniforms:Wo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:li,blending:ds});a.uniforms.tEquirect.value=t;const c=new Gn(s,a),u=t.minFilter;return t.minFilter===Rr&&(t.minFilter=xi),new My(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(a)}}const Kd=new V,Ty=new V,wy=new Tt;class br{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Kd.subVectors(i,t).cross(Ty.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Kd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||wy.getNormalMatrix(e),s=this.coplanarPoint(Kd).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Is=new or,gc=new V;class gh{constructor(e=new br,t=new br,i=new br,s=new br,a=new br,c=new br){this.planes=[e,t,i,s,a,c]}set(e,t,i,s,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Cr){const i=this.planes,s=e.elements,a=s[0],c=s[1],u=s[2],f=s[3],h=s[4],m=s[5],g=s[6],_=s[7],y=s[8],M=s[9],E=s[10],S=s[11],x=s[12],L=s[13],C=s[14],w=s[15];if(i[0].setComponents(f-a,_-h,S-y,w-x).normalize(),i[1].setComponents(f+a,_+h,S+y,w+x).normalize(),i[2].setComponents(f+c,_+m,S+M,w+L).normalize(),i[3].setComponents(f-c,_-m,S-M,w-L).normalize(),i[4].setComponents(f-u,_-g,S-E,w-C).normalize(),t===Cr)i[5].setComponents(f+u,_+g,S+E,w+C).normalize();else if(t===Oc)i[5].setComponents(u,g,E,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){return Is.center.set(0,0,0),Is.radius=.7071067811865476,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(gc.x=s.normal.x>0?e.max.x:e.min.x,gc.y=s.normal.y>0?e.max.y:e.min.y,gc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $_(){let o=null,e=!1,t=null,i=null;function s(a,c){t(a,c),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function Ay(o){const e=new WeakMap;function t(u,f){const h=u.array,m=u.usage,g=h.byteLength,_=o.createBuffer();o.bindBuffer(f,_),o.bufferData(f,h,m),u.onUploadCallback();let y;if(h instanceof Float32Array)y=o.FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=o.SHORT;else if(h instanceof Uint32Array)y=o.UNSIGNED_INT;else if(h instanceof Int32Array)y=o.INT;else if(h instanceof Int8Array)y=o.BYTE;else if(h instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,f,h){const m=f.array,g=f.updateRanges;if(o.bindBuffer(h,u),g.length===0)o.bufferSubData(h,0,m);else{g.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<g.length;y++){const M=g[_],E=g[y];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++_,g[_]=E)}g.length=_+1;for(let y=0,M=g.length;y<M;y++){const E=g[y];o.bufferSubData(h,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(o.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,f),h.version=u.version}}return{get:s,remove:a,update:c}}class Qa extends jn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,c=t/2,u=Math.floor(i),f=Math.floor(s),h=u+1,m=f+1,g=e/u,_=t/f,y=[],M=[],E=[],S=[];for(let x=0;x<m;x++){const L=x*_-c;for(let C=0;C<h;C++){const w=C*g-a;M.push(w,-L,0),E.push(0,0,1),S.push(C/u),S.push(1-x/f)}}for(let x=0;x<f;x++)for(let L=0;L<u;L++){const C=L+h*x,w=L+h*(x+1),z=L+1+h*(x+1),U=L+1+h*x;y.push(C,w,U),y.push(w,z,U)}this.setIndex(y),this.setAttribute("position",new Wn(M,3)),this.setAttribute("normal",new Wn(E,3)),this.setAttribute("uv",new Wn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.widthSegments,e.heightSegments)}}var by=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ry=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Py=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ly=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ny=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Oy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,By=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$y=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iS="gl_FragColor = linearToOutputTexel( gl_FragColor );",rS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_S=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ES=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,RS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,US=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,GS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$S=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_M=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,DM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,IM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,UM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,FM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,HM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,YM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pt={alphahash_fragment:by,alphahash_pars_fragment:Ry,alphamap_fragment:Cy,alphamap_pars_fragment:Py,alphatest_fragment:Ly,alphatest_pars_fragment:Ny,aomap_fragment:Dy,aomap_pars_fragment:Iy,batching_pars_vertex:Uy,batching_vertex:Fy,begin_vertex:Oy,beginnormal_vertex:ky,bsdfs:By,iridescence_fragment:zy,bumpmap_pars_fragment:Hy,clipping_planes_fragment:Vy,clipping_planes_pars_fragment:Gy,clipping_planes_pars_vertex:Wy,clipping_planes_vertex:jy,color_fragment:Xy,color_pars_fragment:Yy,color_pars_vertex:qy,color_vertex:Ky,common:$y,cube_uv_reflection_fragment:Zy,defaultnormal_vertex:Qy,displacementmap_pars_vertex:Jy,displacementmap_vertex:eS,emissivemap_fragment:tS,emissivemap_pars_fragment:nS,colorspace_fragment:iS,colorspace_pars_fragment:rS,envmap_fragment:sS,envmap_common_pars_fragment:oS,envmap_pars_fragment:aS,envmap_pars_vertex:lS,envmap_physical_pars_fragment:xS,envmap_vertex:cS,fog_vertex:uS,fog_pars_vertex:dS,fog_fragment:fS,fog_pars_fragment:hS,gradientmap_pars_fragment:pS,lightmap_pars_fragment:mS,lights_lambert_fragment:gS,lights_lambert_pars_fragment:_S,lights_pars_begin:vS,lights_toon_fragment:yS,lights_toon_pars_fragment:SS,lights_phong_fragment:MS,lights_phong_pars_fragment:ES,lights_physical_fragment:TS,lights_physical_pars_fragment:wS,lights_fragment_begin:AS,lights_fragment_maps:bS,lights_fragment_end:RS,logdepthbuf_fragment:CS,logdepthbuf_pars_fragment:PS,logdepthbuf_pars_vertex:LS,logdepthbuf_vertex:NS,map_fragment:DS,map_pars_fragment:IS,map_particle_fragment:US,map_particle_pars_fragment:FS,metalnessmap_fragment:OS,metalnessmap_pars_fragment:kS,morphinstance_vertex:BS,morphcolor_vertex:zS,morphnormal_vertex:HS,morphtarget_pars_vertex:VS,morphtarget_vertex:GS,normal_fragment_begin:WS,normal_fragment_maps:jS,normal_pars_fragment:XS,normal_pars_vertex:YS,normal_vertex:qS,normalmap_pars_fragment:KS,clearcoat_normal_fragment_begin:$S,clearcoat_normal_fragment_maps:ZS,clearcoat_pars_fragment:QS,iridescence_pars_fragment:JS,opaque_fragment:eM,packing:tM,premultiplied_alpha_fragment:nM,project_vertex:iM,dithering_fragment:rM,dithering_pars_fragment:sM,roughnessmap_fragment:oM,roughnessmap_pars_fragment:aM,shadowmap_pars_fragment:lM,shadowmap_pars_vertex:cM,shadowmap_vertex:uM,shadowmask_pars_fragment:dM,skinbase_vertex:fM,skinning_pars_vertex:hM,skinning_vertex:pM,skinnormal_vertex:mM,specularmap_fragment:gM,specularmap_pars_fragment:_M,tonemapping_fragment:vM,tonemapping_pars_fragment:xM,transmission_fragment:yM,transmission_pars_fragment:SM,uv_pars_fragment:MM,uv_pars_vertex:EM,uv_vertex:TM,worldpos_vertex:wM,background_vert:AM,background_frag:bM,backgroundCube_vert:RM,backgroundCube_frag:CM,cube_vert:PM,cube_frag:LM,depth_vert:NM,depth_frag:DM,distanceRGBA_vert:IM,distanceRGBA_frag:UM,equirect_vert:FM,equirect_frag:OM,linedashed_vert:kM,linedashed_frag:BM,meshbasic_vert:zM,meshbasic_frag:HM,meshlambert_vert:VM,meshlambert_frag:GM,meshmatcap_vert:WM,meshmatcap_frag:jM,meshnormal_vert:XM,meshnormal_frag:YM,meshphong_vert:qM,meshphong_frag:KM,meshphysical_vert:$M,meshphysical_frag:ZM,meshtoon_vert:QM,meshtoon_frag:JM,points_vert:eE,points_frag:tE,shadow_vert:nE,shadow_frag:iE,sprite_vert:rE,sprite_frag:sE},Fe={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},envMapRotation:{value:new Tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},ir={basic:{uniforms:Qn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:Qn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:Qn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:Qn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:Qn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:Qn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:Qn([Fe.points,Fe.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:Qn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:Qn([Fe.common,Fe.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:Qn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:Qn([Fe.sprite,Fe.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Tt}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:Qn([Fe.common,Fe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:Qn([Fe.lights,Fe.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};ir.physical={uniforms:Qn([ir.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const _c={r:0,b:0,g:0},Us=new sr,oE=new wt;function aE(o,e,t,i,s,a,c){const u=new ut(0);let f=a===!0?0:1,h,m,g=null,_=0,y=null;function M(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?t:e).get(C)),C}function E(L){let C=!1;const w=M(L);w===null?x(u,f):w&&w.isColor&&(x(w,1),C=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||C)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,C){const w=M(C);w&&(w.isCubeTexture||w.mapping===Hc)?(m===void 0&&(m=new Gn(new Za(1,1,1),new Dr({name:"BackgroundCubeMaterial",uniforms:Wo(ir.backgroundCube.uniforms),vertexShader:ir.backgroundCube.vertexShader,fragmentShader:ir.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(z,U,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),Us.copy(C.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),m.material.uniforms.envMap.value=w,m.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(oE.makeRotationFromEuler(Us)),m.material.toneMapped=Ut.getTransfer(w.colorSpace)!==Yt,(g!==w||_!==w.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,g=w,_=w.version,y=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new Gn(new Qa(2,2),new Dr({name:"BackgroundMaterial",uniforms:Wo(ir.background.uniforms),vertexShader:ir.background.vertexShader,fragmentShader:ir.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Ut.getTransfer(w.colorSpace)!==Yt,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(g!==w||_!==w.version||y!==o.toneMapping)&&(h.material.needsUpdate=!0,g=w,_=w.version,y=o.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function x(L,C){L.getRGB(_c,Y_(o)),i.buffers.color.setClear(_c.r,_c.g,_c.b,C,c)}return{getClearColor:function(){return u},setClearColor:function(L,C=1){u.set(L),f=C,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,x(u,f)},render:E,addToRenderList:S}}function lE(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=_(null);let a=s,c=!1;function u(b,k,ae,ne,me){let fe=!1;const le=g(ne,ae,k);a!==le&&(a=le,h(a.object)),fe=y(b,ne,ae,me),fe&&M(b,ne,ae,me),me!==null&&e.update(me,o.ELEMENT_ARRAY_BUFFER),(fe||c)&&(c=!1,w(b,k,ae,ne),me!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(me).buffer))}function f(){return o.createVertexArray()}function h(b){return o.bindVertexArray(b)}function m(b){return o.deleteVertexArray(b)}function g(b,k,ae){const ne=ae.wireframe===!0;let me=i[b.id];me===void 0&&(me={},i[b.id]=me);let fe=me[k.id];fe===void 0&&(fe={},me[k.id]=fe);let le=fe[ne];return le===void 0&&(le=_(f()),fe[ne]=le),le}function _(b){const k=[],ae=[],ne=[];for(let me=0;me<t;me++)k[me]=0,ae[me]=0,ne[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ae,attributeDivisors:ne,object:b,attributes:{},index:null}}function y(b,k,ae,ne){const me=a.attributes,fe=k.attributes;let le=0;const ue=ae.getAttributes();for(const H in ue)if(ue[H].location>=0){const se=me[H];let F=fe[H];if(F===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(F=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(F=b.instanceColor)),se===void 0||se.attribute!==F||F&&se.data!==F.data)return!0;le++}return a.attributesNum!==le||a.index!==ne}function M(b,k,ae,ne){const me={},fe=k.attributes;let le=0;const ue=ae.getAttributes();for(const H in ue)if(ue[H].location>=0){let se=fe[H];se===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(se=b.instanceColor));const F={};F.attribute=se,se&&se.data&&(F.data=se.data),me[H]=F,le++}a.attributes=me,a.attributesNum=le,a.index=ne}function E(){const b=a.newAttributes;for(let k=0,ae=b.length;k<ae;k++)b[k]=0}function S(b){x(b,0)}function x(b,k){const ae=a.newAttributes,ne=a.enabledAttributes,me=a.attributeDivisors;ae[b]=1,ne[b]===0&&(o.enableVertexAttribArray(b),ne[b]=1),me[b]!==k&&(o.vertexAttribDivisor(b,k),me[b]=k)}function L(){const b=a.newAttributes,k=a.enabledAttributes;for(let ae=0,ne=k.length;ae<ne;ae++)k[ae]!==b[ae]&&(o.disableVertexAttribArray(ae),k[ae]=0)}function C(b,k,ae,ne,me,fe,le){le===!0?o.vertexAttribIPointer(b,k,ae,me,fe):o.vertexAttribPointer(b,k,ae,ne,me,fe)}function w(b,k,ae,ne){E();const me=ne.attributes,fe=ae.getAttributes(),le=k.defaultAttributeValues;for(const ue in fe){const H=fe[ue];if(H.location>=0){let ce=me[ue];if(ce===void 0&&(ue==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),ue==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor)),ce!==void 0){const se=ce.normalized,F=ce.itemSize,ie=e.get(ce);if(ie===void 0)continue;const Be=ie.buffer,Q=ie.type,he=ie.bytesPerElement,we=Q===o.INT||Q===o.UNSIGNED_INT||ce.gpuType===ah;if(ce.isInterleavedBufferAttribute){const Se=ce.data,Le=Se.stride,ze=ce.offset;if(Se.isInstancedInterleavedBuffer){for(let it=0;it<H.locationSize;it++)x(H.location+it,Se.meshPerAttribute);b.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let it=0;it<H.locationSize;it++)S(H.location+it);o.bindBuffer(o.ARRAY_BUFFER,Be);for(let it=0;it<H.locationSize;it++)C(H.location+it,F/H.locationSize,Q,se,Le*he,(ze+F/H.locationSize*it)*he,we)}else{if(ce.isInstancedBufferAttribute){for(let Se=0;Se<H.locationSize;Se++)x(H.location+Se,ce.meshPerAttribute);b.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Se=0;Se<H.locationSize;Se++)S(H.location+Se);o.bindBuffer(o.ARRAY_BUFFER,Be);for(let Se=0;Se<H.locationSize;Se++)C(H.location+Se,F/H.locationSize,Q,se,F*he,F/H.locationSize*Se*he,we)}}else if(le!==void 0){const se=le[ue];if(se!==void 0)switch(se.length){case 2:o.vertexAttrib2fv(H.location,se);break;case 3:o.vertexAttrib3fv(H.location,se);break;case 4:o.vertexAttrib4fv(H.location,se);break;default:o.vertexAttrib1fv(H.location,se)}}}}L()}function z(){O();for(const b in i){const k=i[b];for(const ae in k){const ne=k[ae];for(const me in ne)m(ne[me].object),delete ne[me];delete k[ae]}delete i[b]}}function U(b){if(i[b.id]===void 0)return;const k=i[b.id];for(const ae in k){const ne=k[ae];for(const me in ne)m(ne[me].object),delete ne[me];delete k[ae]}delete i[b.id]}function I(b){for(const k in i){const ae=i[k];if(ae[b.id]===void 0)continue;const ne=ae[b.id];for(const me in ne)m(ne[me].object),delete ne[me];delete ae[b.id]}}function O(){P(),c=!0,a!==s&&(a=s,h(a.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:O,resetDefaultState:P,dispose:z,releaseStatesOfGeometry:U,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:S,disableUnusedAttributes:L}}function cE(o,e,t){let i;function s(h){i=h}function a(h,m){o.drawArrays(i,h,m),t.update(m,i,1)}function c(h,m,g){g!==0&&(o.drawArraysInstanced(i,h,m,g),t.update(m,i,g))}function u(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,m,0,g);let y=0;for(let M=0;M<g;M++)y+=m[M];t.update(y,i,1)}function f(h,m,g,_){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)c(h[M],m[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(i,h,0,m,0,_,0,g);let M=0;for(let E=0;E<g;E++)M+=m[E]*_[E];t.update(M,i,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function uE(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(I){return!(I!==Li&&i.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(I){const O=I===$a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Nr&&i.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==qi&&!O)}function f(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=f(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),C=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=M>0,U=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:L,maxVaryings:C,maxFragmentUniforms:w,vertexTextures:z,maxSamples:U}}function dE(o){const e=this;let t=null,i=0,s=!1,a=!1;const c=new br,u=new Tt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||i!==0||s;return s=_,i=g.length,y},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,_){t=m(g,_,0)},this.setState=function(g,_,y){const M=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,x=o.get(g);if(!s||M===null||M.length===0||a&&!S)a?m(null):h();else{const L=a?0:i,C=L*4;let w=x.clippingState||null;f.value=w,w=m(M,_,C,y);for(let z=0;z!==C;++z)w[z]=t[z];x.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,_,y,M){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=f.value,M!==!0||S===null){const x=y+E*4,L=_.matrixWorldInverse;u.getNormalMatrix(L),(S===null||S.length<x)&&(S=new Float32Array(x));for(let C=0,w=y;C!==E;++C,w+=4)c.copy(g[C]).applyMatrix4(L,u),c.normal.toArray(S,w),S[w+3]=c.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function fE(o){let e=new WeakMap;function t(c,u){return u===Mf?c.mapping=ko:u===Ef&&(c.mapping=Bo),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===Mf||u===Ef)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const h=new Ey(f.height);return h.fromEquirectangularTexture(o,c),e.set(c,h),c.addEventListener("dispose",s),t(h.texture,c.mapping)}else return null}}return c}function s(c){const u=c.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Wc extends q_{constructor(e=-1,t=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=m*this.view.offsetY,f=u-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Lo=4,Tg=[.125,.215,.35,.446,.526,.582],zs=20,$d=new Wc,wg=new ut;let Zd=null,Qd=0,Jd=0,ef=!1;const ks=(1+Math.sqrt(5))/2,bo=1/ks,Ag=[new V(-ks,bo,0),new V(ks,bo,0),new V(-bo,0,ks),new V(bo,0,ks),new V(0,ks,-bo),new V(0,ks,bo),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class bg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Zd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zd,Qd,Jd),this._renderer.xr.enabled=ef,e.scissorTest=!1,vc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ko||e.mapping===Bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:$a,format:Li,colorSpace:ei,depthBuffer:!1},s=Rg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rg(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hE(a)),this._blurMaterial=pE(a,e,t)}return s}_compileMaterial(e){const t=new Gn(this._lodPlanes[0],e);this._renderer.compile(t,$d)}_sceneToCubeUV(e,t,i,s){const u=new Vn(90,1,t,i),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(wg),m.toneMapping=fs,m.autoClear=!1;const y=new Pi({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1}),M=new Gn(new Za,y);let E=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,E=!0):(y.color.copy(wg),E=!0);for(let x=0;x<6;x++){const L=x%3;L===0?(u.up.set(0,f[x],0),u.lookAt(h[x],0,0)):L===1?(u.up.set(0,0,f[x]),u.lookAt(0,h[x],0)):(u.up.set(0,f[x],0),u.lookAt(0,0,h[x]));const C=this._cubeSize;vc(s,L*C,x>2?C:0,C,C),m.setRenderTarget(s),E&&m.render(M,u),m.render(e,u)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=_,m.autoClear=g,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ko||e.mapping===Bo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cg());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new Gn(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const f=this._cubeSize;vc(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,$d)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=Ag[(s-a-1)%Ag.length];this._blur(e,a-1,a,c,u)}t.autoClear=i}_blur(e,t,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",a),this._halfBlur(c,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,c,u){const f=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Gn(this._lodPlanes[s],h),_=h.uniforms,y=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*zs-1),E=a/M,S=isFinite(a)?1+Math.floor(m*E):zs;S>zs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${zs}`);const x=[];let L=0;for(let I=0;I<zs;++I){const O=I/E,P=Math.exp(-O*O/2);x.push(P),I===0?L+=P:I<S&&(L+=2*P)}for(let I=0;I<x.length;I++)x[I]=x[I]/L;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=c==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:C}=this;_.dTheta.value=M,_.mipInt.value=C-i;const w=this._sizeLods[s],z=3*w*(s>C-Lo?s-C+Lo:0),U=4*(this._cubeSize-w);vc(t,z,U,3*w,2*w),f.setRenderTarget(t),f.render(g,$d)}}function hE(o){const e=[],t=[],i=[];let s=o;const a=o-Lo+1+Tg.length;for(let c=0;c<a;c++){const u=Math.pow(2,s);t.push(u);let f=1/u;c>o-Lo?f=Tg[c-o+Lo-1]:c===0&&(f=0),i.push(f);const h=1/(u-2),m=-h,g=1+h,_=[m,m,g,m,g,g,m,m,g,g,m,g],y=6,M=6,E=3,S=2,x=1,L=new Float32Array(E*M*y),C=new Float32Array(S*M*y),w=new Float32Array(x*M*y);for(let U=0;U<y;U++){const I=U%3*2/3-1,O=U>2?0:-1,P=[I,O,0,I+2/3,O,0,I+2/3,O+1,0,I,O,0,I+2/3,O+1,0,I,O+1,0];L.set(P,E*M*U),C.set(_,S*M*U);const b=[U,U,U,U,U,U];w.set(b,x*M*U)}const z=new jn;z.setAttribute("position",new In(L,E)),z.setAttribute("uv",new In(C,S)),z.setAttribute("faceIndex",new In(w,x)),e.push(z),s>Lo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Rg(o,e,t){const i=new Vs(o,e,t);return i.texture.mapping=Hc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vc(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function pE(o,e,t){const i=new Float32Array(zs),s=new V(0,1,0);return new Dr({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function Cg(){return new Dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function Pg(){return new Dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function _h(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mE(o){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const f=u.mapping,h=f===Mf||f===Ef,m=f===ko||f===Bo;if(h||m){let g=e.get(u);const _=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return t===null&&(t=new bg(o)),g=h?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const y=u.image;return h&&y&&y.height>0||m&&y&&s(y)?(t===null&&(t=new bg(o)),g=h?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",a),g.texture):null}}}return u}function s(u){let f=0;const h=6;for(let m=0;m<h;m++)u[m]!==void 0&&f++;return f===h}function a(u){const f=u.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function gE(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&za("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function _E(o,e,t,i){const s={},a=new WeakMap;function c(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);for(const M in _.morphAttributes){const E=_.morphAttributes[M];for(let S=0,x=E.length;S<x;S++)e.remove(E[S])}_.removeEventListener("dispose",c),delete s[_.id];const y=a.get(_);y&&(e.remove(y),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function u(g,_){return s[_.id]===!0||(_.addEventListener("dispose",c),s[_.id]=!0,t.memory.geometries++),_}function f(g){const _=g.attributes;for(const M in _)e.update(_[M],o.ARRAY_BUFFER);const y=g.morphAttributes;for(const M in y){const E=y[M];for(let S=0,x=E.length;S<x;S++)e.update(E[S],o.ARRAY_BUFFER)}}function h(g){const _=[],y=g.index,M=g.attributes.position;let E=0;if(y!==null){const L=y.array;E=y.version;for(let C=0,w=L.length;C<w;C+=3){const z=L[C+0],U=L[C+1],I=L[C+2];_.push(z,U,U,I,I,z)}}else if(M!==void 0){const L=M.array;E=M.version;for(let C=0,w=L.length/3-1;C<w;C+=3){const z=C+0,U=C+1,I=C+2;_.push(z,U,U,I,I,z)}}else return;const S=new(H_(_)?X_:j_)(_,1);S.version=E;const x=a.get(g);x&&e.remove(x),a.set(g,S)}function m(g){const _=a.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&h(g)}else h(g);return a.get(g)}return{get:u,update:f,getWireframeAttribute:m}}function vE(o,e,t){let i;function s(_){i=_}let a,c;function u(_){a=_.type,c=_.bytesPerElement}function f(_,y){o.drawElements(i,y,a,_*c),t.update(y,i,1)}function h(_,y,M){M!==0&&(o.drawElementsInstanced(i,y,a,_*c,M),t.update(y,i,M))}function m(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,a,_,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];t.update(S,i,1)}function g(_,y,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)h(_[x]/c,y[x],E[x]);else{S.multiDrawElementsInstancedWEBGL(i,y,0,a,_,0,E,0,M);let x=0;for(let L=0;L<M;L++)x+=y[L]*E[L];t.update(x,i,1)}}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function xE(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=u*(a/3);break;case o.LINES:t.lines+=u*(a/2);break;case o.LINE_STRIP:t.lines+=u*(a-1);break;case o.LINE_LOOP:t.lines+=u*a;break;case o.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function yE(o,e,t){const i=new WeakMap,s=new zt;function a(c,u,f){const h=c.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let _=i.get(u);if(_===void 0||_.count!==g){let b=function(){O.dispose(),i.delete(u),u.removeEventListener("dispose",b)};var y=b;_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let w=0;M===!0&&(w=1),E===!0&&(w=2),S===!0&&(w=3);let z=u.attributes.position.count*w,U=1;z>e.maxTextureSize&&(U=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const I=new Float32Array(z*U*4*g),O=new G_(I,z,U,g);O.type=qi,O.needsUpdate=!0;const P=w*4;for(let k=0;k<g;k++){const ae=x[k],ne=L[k],me=C[k],fe=z*U*4*k;for(let le=0;le<ae.count;le++){const ue=le*P;M===!0&&(s.fromBufferAttribute(ae,le),I[fe+ue+0]=s.x,I[fe+ue+1]=s.y,I[fe+ue+2]=s.z,I[fe+ue+3]=0),E===!0&&(s.fromBufferAttribute(ne,le),I[fe+ue+4]=s.x,I[fe+ue+5]=s.y,I[fe+ue+6]=s.z,I[fe+ue+7]=0),S===!0&&(s.fromBufferAttribute(me,le),I[fe+ue+8]=s.x,I[fe+ue+9]=s.y,I[fe+ue+10]=s.z,I[fe+ue+11]=me.itemSize===4?s.w:1)}}_={count:g,texture:O,size:new ht(z,U)},i.set(u,_),u.addEventListener("dispose",b)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(o,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const E=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(o,"morphTargetBaseInfluence",E),f.getUniforms().setValue(o,"morphTargetInfluences",h)}f.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:a}}function SE(o,e,t,i){let s=new WeakMap;function a(f){const h=i.render.frame,m=f.geometry,g=e.get(f,m);if(s.get(g)!==h&&(e.update(g),s.set(g,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),s.get(f)!==h&&(t.update(f.instanceMatrix,o.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,o.ARRAY_BUFFER),s.set(f,h))),f.isSkinnedMesh){const _=f.skeleton;s.get(_)!==h&&(_.update(),s.set(_,h))}return g}function c(){s=new WeakMap}function u(f){const h=f.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:c}}class Z_ extends _n{constructor(e,t,i,s,a,c,u,f,h,m=Io){if(m!==Io&&m!==Vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===Io&&(i=Hs),i===void 0&&m===Vo&&(i=Ho),super(null,s,a,c,u,f,m,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Jn,this.minFilter=f!==void 0?f:Jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Q_=new _n,Lg=new Z_(1,1),J_=new G_,e0=new ay,t0=new K_,Ng=[],Dg=[],Ig=new Float32Array(16),Ug=new Float32Array(9),Fg=new Float32Array(4);function Ko(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=Ng[s];if(a===void 0&&(a=new Float32Array(s),Ng[s]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,o[c].toArray(a,u)}return a}function vn(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function xn(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function jc(o,e){let t=Dg[e];t===void 0&&(t=new Int32Array(e),Dg[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function ME(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function EE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;o.uniform2fv(this.addr,e),xn(t,e)}}function TE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;o.uniform3fv(this.addr,e),xn(t,e)}}function wE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;o.uniform4fv(this.addr,e),xn(t,e)}}function AE(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,i))return;Fg.set(i),o.uniformMatrix2fv(this.addr,!1,Fg),xn(t,i)}}function bE(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,i))return;Ug.set(i),o.uniformMatrix3fv(this.addr,!1,Ug),xn(t,i)}}function RE(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,i))return;Ig.set(i),o.uniformMatrix4fv(this.addr,!1,Ig),xn(t,i)}}function CE(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function PE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;o.uniform2iv(this.addr,e),xn(t,e)}}function LE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;o.uniform3iv(this.addr,e),xn(t,e)}}function NE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;o.uniform4iv(this.addr,e),xn(t,e)}}function DE(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function IE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;o.uniform2uiv(this.addr,e),xn(t,e)}}function UE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;o.uniform3uiv(this.addr,e),xn(t,e)}}function FE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;o.uniform4uiv(this.addr,e),xn(t,e)}}function OE(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(Lg.compareFunction=z_,a=Lg):a=Q_,t.setTexture2D(e||a,s)}function kE(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||e0,s)}function BE(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||t0,s)}function zE(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||J_,s)}function HE(o){switch(o){case 5126:return ME;case 35664:return EE;case 35665:return TE;case 35666:return wE;case 35674:return AE;case 35675:return bE;case 35676:return RE;case 5124:case 35670:return CE;case 35667:case 35671:return PE;case 35668:case 35672:return LE;case 35669:case 35673:return NE;case 5125:return DE;case 36294:return IE;case 36295:return UE;case 36296:return FE;case 35678:case 36198:case 36298:case 36306:case 35682:return OE;case 35679:case 36299:case 36307:return kE;case 35680:case 36300:case 36308:case 36293:return BE;case 36289:case 36303:case 36311:case 36292:return zE}}function VE(o,e){o.uniform1fv(this.addr,e)}function GE(o,e){const t=Ko(e,this.size,2);o.uniform2fv(this.addr,t)}function WE(o,e){const t=Ko(e,this.size,3);o.uniform3fv(this.addr,t)}function jE(o,e){const t=Ko(e,this.size,4);o.uniform4fv(this.addr,t)}function XE(o,e){const t=Ko(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function YE(o,e){const t=Ko(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function qE(o,e){const t=Ko(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function KE(o,e){o.uniform1iv(this.addr,e)}function $E(o,e){o.uniform2iv(this.addr,e)}function ZE(o,e){o.uniform3iv(this.addr,e)}function QE(o,e){o.uniform4iv(this.addr,e)}function JE(o,e){o.uniform1uiv(this.addr,e)}function eT(o,e){o.uniform2uiv(this.addr,e)}function tT(o,e){o.uniform3uiv(this.addr,e)}function nT(o,e){o.uniform4uiv(this.addr,e)}function iT(o,e,t){const i=this.cache,s=e.length,a=jc(t,s);vn(i,a)||(o.uniform1iv(this.addr,a),xn(i,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||Q_,a[c])}function rT(o,e,t){const i=this.cache,s=e.length,a=jc(t,s);vn(i,a)||(o.uniform1iv(this.addr,a),xn(i,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||e0,a[c])}function sT(o,e,t){const i=this.cache,s=e.length,a=jc(t,s);vn(i,a)||(o.uniform1iv(this.addr,a),xn(i,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||t0,a[c])}function oT(o,e,t){const i=this.cache,s=e.length,a=jc(t,s);vn(i,a)||(o.uniform1iv(this.addr,a),xn(i,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||J_,a[c])}function aT(o){switch(o){case 5126:return VE;case 35664:return GE;case 35665:return WE;case 35666:return jE;case 35674:return XE;case 35675:return YE;case 35676:return qE;case 5124:case 35670:return KE;case 35667:case 35671:return $E;case 35668:case 35672:return ZE;case 35669:case 35673:return QE;case 5125:return JE;case 36294:return eT;case 36295:return tT;case 36296:return nT;case 35678:case 36198:case 36298:case 36306:case 35682:return iT;case 35679:case 36299:case 36307:return rT;case 35680:case 36300:case 36308:case 36293:return sT;case 36289:case 36303:case 36311:case 36292:return oT}}class lT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=HE(t.type)}}class cT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aT(t.type)}}class uT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const u=s[a];u.setValue(e,t[u.id],i)}}}const tf=/(\w+)(\])?(\[|\.)?/g;function Og(o,e){o.seq.push(e),o.map[e.id]=e}function dT(o,e,t){const i=o.name,s=i.length;for(tf.lastIndex=0;;){const a=tf.exec(i),c=tf.lastIndex;let u=a[1];const f=a[2]==="]",h=a[3];if(f&&(u=u|0),h===void 0||h==="["&&c+2===s){Og(t,h===void 0?new lT(u,o,e):new cT(u,o,e));break}else{let g=t.map[u];g===void 0&&(g=new uT(u),Og(t,g)),t=g}}}class Uc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);dT(a,c,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,c=t.length;a!==c;++a){const u=t[a],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function kg(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const fT=37297;let hT=0;function pT(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Bg=new Tt;function mT(o){Ut._getMatrix(Bg,Ut.workingColorSpace,o);const e=`mat3( ${Bg.elements.map(t=>t.toFixed(4))} )`;switch(Ut.getTransfer(o)){case Gc:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function zg(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+pT(o.getShaderSource(e),c)}else return s}function gT(o,e){const t=mT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _T(o,e){let t;switch(e){case vx:t="Linear";break;case xx:t="Reinhard";break;case yx:t="Cineon";break;case b_:t="ACESFilmic";break;case Mx:t="AgX";break;case Ex:t="Neutral";break;case Sx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xc=new V;function vT(){Ut.getLuminanceCoefficients(xc);const o=xc.x.toFixed(4),e=xc.y.toFixed(4),t=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function yT(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ST(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),c=a.name;let u=1;a.type===o.FLOAT_MAT2&&(u=2),a.type===o.FLOAT_MAT3&&(u=3),a.type===o.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:u}}return t}function Ha(o){return o!==""}function Hg(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vg(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qf(o){return o.replace(MT,TT)}const ET=new Map;function TT(o,e){let t=Pt[e];if(t===void 0){const i=ET.get(e);if(i!==void 0)t=Pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qf(t)}const wT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gg(o){return o.replace(wT,AT)}function AT(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Wg(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bT(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===w_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Zv?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===wr&&(e="SHADOWMAP_TYPE_VSM"),e}function RT(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ko:case Bo:e="ENVMAP_TYPE_CUBE";break;case Hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CT(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Bo:e="ENVMAP_MODE_REFRACTION";break}return e}function PT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case A_:e="ENVMAP_BLENDING_MULTIPLY";break;case gx:e="ENVMAP_BLENDING_MIX";break;case _x:e="ENVMAP_BLENDING_ADD";break}return e}function LT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function NT(o,e,t,i){const s=o.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=bT(t),h=RT(t),m=CT(t),g=PT(t),_=LT(t),y=xT(t),M=yT(a),E=s.createProgram();let S,x,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ha).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ha).join(`
`),x.length>0&&(x+=`
`)):(S=[Wg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),x=[Wg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fs?"#define TONE_MAPPING":"",t.toneMapping!==fs?Pt.tonemapping_pars_fragment:"",t.toneMapping!==fs?_T("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,gT("linearToOutputTexel",t.outputColorSpace),vT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ha).join(`
`)),c=Qf(c),c=Hg(c,t),c=Vg(c,t),u=Qf(u),u=Hg(u,t),u=Vg(u,t),c=Gg(c),u=Gg(u),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===ng?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ng?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=L+S+c,w=L+x+u,z=kg(s,s.VERTEX_SHADER,C),U=kg(s,s.FRAGMENT_SHADER,w);s.attachShader(E,z),s.attachShader(E,U),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function I(k){if(o.debug.checkShaderErrors){const ae=s.getProgramInfoLog(E).trim(),ne=s.getShaderInfoLog(z).trim(),me=s.getShaderInfoLog(U).trim();let fe=!0,le=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(fe=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,E,z,U);else{const ue=zg(s,z,"vertex"),H=zg(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ae+`
`+ue+`
`+H)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(ne===""||me==="")&&(le=!1);le&&(k.diagnostics={runnable:fe,programLog:ae,vertexShader:{log:ne,prefix:S},fragmentShader:{log:me,prefix:x}})}s.deleteShader(z),s.deleteShader(U),O=new Uc(s,E),P=ST(s,E)}let O;this.getUniforms=function(){return O===void 0&&I(this),O};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(E,fT)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=z,this.fragmentShader=U,this}let DT=0;class IT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new UT(e),t.set(e,i)),i}}class UT{constructor(e){this.id=DT++,this.code=e,this.usedTimes=0}}function FT(o,e,t,i,s,a,c){const u=new mh,f=new IT,h=new Set,m=[],g=s.logarithmicDepthBuffer,_=s.vertexTextures;let y=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(P){return h.add(P),P===0?"uv":`uv${P}`}function S(P,b,k,ae,ne){const me=ae.fog,fe=ne.geometry,le=P.isMeshStandardMaterial?ae.environment:null,ue=(P.isMeshStandardMaterial?t:e).get(P.envMap||le),H=ue&&ue.mapping===Hc?ue.image.height:null,ce=M[P.type];P.precision!==null&&(y=s.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const se=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,F=se!==void 0?se.length:0;let ie=0;fe.morphAttributes.position!==void 0&&(ie=1),fe.morphAttributes.normal!==void 0&&(ie=2),fe.morphAttributes.color!==void 0&&(ie=3);let Be,Q,he,we;if(ce){const St=ir[ce];Be=St.vertexShader,Q=St.fragmentShader}else Be=P.vertexShader,Q=P.fragmentShader,f.update(P),he=f.getVertexShaderID(P),we=f.getFragmentShaderID(P);const Se=o.getRenderTarget(),Le=o.state.buffers.depth.getReversed(),ze=ne.isInstancedMesh===!0,it=ne.isBatchedMesh===!0,Ht=!!P.map,At=!!P.matcap,Vt=!!ue,X=!!P.aoMap,yn=!!P.lightMap,xt=!!P.bumpMap,Ct=!!P.normalMap,Qe=!!P.displacementMap,Bt=!!P.emissiveMap,qe=!!P.metalnessMap,N=!!P.roughnessMap,A=P.anisotropy>0,J=P.clearcoat>0,ge=P.dispersion>0,xe=P.iridescence>0,pe=P.sheen>0,Ge=P.transmission>0,Ie=A&&!!P.anisotropyMap,He=J&&!!P.clearcoatMap,yt=J&&!!P.clearcoatNormalMap,Ae=J&&!!P.clearcoatRoughnessMap,Oe=xe&&!!P.iridescenceMap,st=xe&&!!P.iridescenceThicknessMap,lt=pe&&!!P.sheenColorMap,Ve=pe&&!!P.sheenRoughnessMap,gt=!!P.specularMap,ct=!!P.specularColorMap,Nt=!!P.specularIntensityMap,G=Ge&&!!P.transmissionMap,Ne=Ge&&!!P.thicknessMap,oe=!!P.gradientMap,de=!!P.alphaMap,Pe=P.alphaTest>0,Re=!!P.alphaHash,nt=!!P.extensions;let jt=fs;P.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(jt=o.toneMapping);const rn={shaderID:ce,shaderType:P.type,shaderName:P.name,vertexShader:Be,fragmentShader:Q,defines:P.defines,customVertexShaderID:he,customFragmentShaderID:we,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:it,batchingColor:it&&ne._colorsTexture!==null,instancing:ze,instancingColor:ze&&ne.instanceColor!==null,instancingMorph:ze&&ne.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Se===null?o.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:ei,alphaToCoverage:!!P.alphaToCoverage,map:Ht,matcap:At,envMap:Vt,envMapMode:Vt&&ue.mapping,envMapCubeUVHeight:H,aoMap:X,lightMap:yn,bumpMap:xt,normalMap:Ct,displacementMap:_&&Qe,emissiveMap:Bt,normalMapObjectSpace:Ct&&P.normalMapType===Cx,normalMapTangentSpace:Ct&&P.normalMapType===Vc,metalnessMap:qe,roughnessMap:N,anisotropy:A,anisotropyMap:Ie,clearcoat:J,clearcoatMap:He,clearcoatNormalMap:yt,clearcoatRoughnessMap:Ae,dispersion:ge,iridescence:xe,iridescenceMap:Oe,iridescenceThicknessMap:st,sheen:pe,sheenColorMap:lt,sheenRoughnessMap:Ve,specularMap:gt,specularColorMap:ct,specularIntensityMap:Nt,transmission:Ge,transmissionMap:G,thicknessMap:Ne,gradientMap:oe,opaque:P.transparent===!1&&P.blending===Do&&P.alphaToCoverage===!1,alphaMap:de,alphaTest:Pe,alphaHash:Re,combine:P.combine,mapUv:Ht&&E(P.map.channel),aoMapUv:X&&E(P.aoMap.channel),lightMapUv:yn&&E(P.lightMap.channel),bumpMapUv:xt&&E(P.bumpMap.channel),normalMapUv:Ct&&E(P.normalMap.channel),displacementMapUv:Qe&&E(P.displacementMap.channel),emissiveMapUv:Bt&&E(P.emissiveMap.channel),metalnessMapUv:qe&&E(P.metalnessMap.channel),roughnessMapUv:N&&E(P.roughnessMap.channel),anisotropyMapUv:Ie&&E(P.anisotropyMap.channel),clearcoatMapUv:He&&E(P.clearcoatMap.channel),clearcoatNormalMapUv:yt&&E(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&E(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&E(P.iridescenceMap.channel),iridescenceThicknessMapUv:st&&E(P.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&E(P.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&E(P.sheenRoughnessMap.channel),specularMapUv:gt&&E(P.specularMap.channel),specularColorMapUv:ct&&E(P.specularColorMap.channel),specularIntensityMapUv:Nt&&E(P.specularIntensityMap.channel),transmissionMapUv:G&&E(P.transmissionMap.channel),thicknessMapUv:Ne&&E(P.thicknessMap.channel),alphaMapUv:de&&E(P.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Ct||A),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!fe.attributes.uv&&(Ht||de),fog:!!me,useFog:P.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Le,skinning:ne.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ie,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:jt,decodeVideoTexture:Ht&&P.map.isVideoTexture===!0&&Ut.getTransfer(P.map.colorSpace)===Yt,decodeVideoTextureEmissive:Bt&&P.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(P.emissiveMap.colorSpace)===Yt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===vi,flipSided:P.side===li,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:nt&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&P.extensions.multiDraw===!0||it)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return rn.vertexUv1s=h.has(1),rn.vertexUv2s=h.has(2),rn.vertexUv3s=h.has(3),h.clear(),rn}function x(P){const b=[];if(P.shaderID?b.push(P.shaderID):(b.push(P.customVertexShaderID),b.push(P.customFragmentShaderID)),P.defines!==void 0)for(const k in P.defines)b.push(k),b.push(P.defines[k]);return P.isRawShaderMaterial===!1&&(L(b,P),C(b,P),b.push(o.outputColorSpace)),b.push(P.customProgramCacheKey),b.join()}function L(P,b){P.push(b.precision),P.push(b.outputColorSpace),P.push(b.envMapMode),P.push(b.envMapCubeUVHeight),P.push(b.mapUv),P.push(b.alphaMapUv),P.push(b.lightMapUv),P.push(b.aoMapUv),P.push(b.bumpMapUv),P.push(b.normalMapUv),P.push(b.displacementMapUv),P.push(b.emissiveMapUv),P.push(b.metalnessMapUv),P.push(b.roughnessMapUv),P.push(b.anisotropyMapUv),P.push(b.clearcoatMapUv),P.push(b.clearcoatNormalMapUv),P.push(b.clearcoatRoughnessMapUv),P.push(b.iridescenceMapUv),P.push(b.iridescenceThicknessMapUv),P.push(b.sheenColorMapUv),P.push(b.sheenRoughnessMapUv),P.push(b.specularMapUv),P.push(b.specularColorMapUv),P.push(b.specularIntensityMapUv),P.push(b.transmissionMapUv),P.push(b.thicknessMapUv),P.push(b.combine),P.push(b.fogExp2),P.push(b.sizeAttenuation),P.push(b.morphTargetsCount),P.push(b.morphAttributeCount),P.push(b.numDirLights),P.push(b.numPointLights),P.push(b.numSpotLights),P.push(b.numSpotLightMaps),P.push(b.numHemiLights),P.push(b.numRectAreaLights),P.push(b.numDirLightShadows),P.push(b.numPointLightShadows),P.push(b.numSpotLightShadows),P.push(b.numSpotLightShadowsWithMaps),P.push(b.numLightProbes),P.push(b.shadowMapType),P.push(b.toneMapping),P.push(b.numClippingPlanes),P.push(b.numClipIntersection),P.push(b.depthPacking)}function C(P,b){u.disableAll(),b.supportsVertexTextures&&u.enable(0),b.instancing&&u.enable(1),b.instancingColor&&u.enable(2),b.instancingMorph&&u.enable(3),b.matcap&&u.enable(4),b.envMap&&u.enable(5),b.normalMapObjectSpace&&u.enable(6),b.normalMapTangentSpace&&u.enable(7),b.clearcoat&&u.enable(8),b.iridescence&&u.enable(9),b.alphaTest&&u.enable(10),b.vertexColors&&u.enable(11),b.vertexAlphas&&u.enable(12),b.vertexUv1s&&u.enable(13),b.vertexUv2s&&u.enable(14),b.vertexUv3s&&u.enable(15),b.vertexTangents&&u.enable(16),b.anisotropy&&u.enable(17),b.alphaHash&&u.enable(18),b.batching&&u.enable(19),b.dispersion&&u.enable(20),b.batchingColor&&u.enable(21),P.push(u.mask),u.disableAll(),b.fog&&u.enable(0),b.useFog&&u.enable(1),b.flatShading&&u.enable(2),b.logarithmicDepthBuffer&&u.enable(3),b.reverseDepthBuffer&&u.enable(4),b.skinning&&u.enable(5),b.morphTargets&&u.enable(6),b.morphNormals&&u.enable(7),b.morphColors&&u.enable(8),b.premultipliedAlpha&&u.enable(9),b.shadowMapEnabled&&u.enable(10),b.doubleSided&&u.enable(11),b.flipSided&&u.enable(12),b.useDepthPacking&&u.enable(13),b.dithering&&u.enable(14),b.transmission&&u.enable(15),b.sheen&&u.enable(16),b.opaque&&u.enable(17),b.pointsUvs&&u.enable(18),b.decodeVideoTexture&&u.enable(19),b.decodeVideoTextureEmissive&&u.enable(20),b.alphaToCoverage&&u.enable(21),P.push(u.mask)}function w(P){const b=M[P.type];let k;if(b){const ae=ir[b];k=xy.clone(ae.uniforms)}else k=P.uniforms;return k}function z(P,b){let k;for(let ae=0,ne=m.length;ae<ne;ae++){const me=m[ae];if(me.cacheKey===b){k=me,++k.usedTimes;break}}return k===void 0&&(k=new NT(o,b,P,a),m.push(k)),k}function U(P){if(--P.usedTimes===0){const b=m.indexOf(P);m[b]=m[m.length-1],m.pop(),P.destroy()}}function I(P){f.remove(P)}function O(){f.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:w,acquireProgram:z,releaseProgram:U,releaseShaderCache:I,programs:m,dispose:O}}function OT(){let o=new WeakMap;function e(c){return o.has(c)}function t(c){let u=o.get(c);return u===void 0&&(u={},o.set(c,u)),u}function i(c){o.delete(c)}function s(c,u,f){o.get(c)[u]=f}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function kT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function jg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Xg(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function c(g,_,y,M,E,S){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:_,material:y,groupOrder:M,renderOrder:g.renderOrder,z:E,group:S},o[e]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=y,x.groupOrder=M,x.renderOrder=g.renderOrder,x.z=E,x.group=S),e++,x}function u(g,_,y,M,E,S){const x=c(g,_,y,M,E,S);y.transmission>0?i.push(x):y.transparent===!0?s.push(x):t.push(x)}function f(g,_,y,M,E,S){const x=c(g,_,y,M,E,S);y.transmission>0?i.unshift(x):y.transparent===!0?s.unshift(x):t.unshift(x)}function h(g,_){t.length>1&&t.sort(g||kT),i.length>1&&i.sort(_||jg),s.length>1&&s.sort(_||jg)}function m(){for(let g=e,_=o.length;g<_;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:u,unshift:f,finish:m,sort:h}}function BT(){let o=new WeakMap;function e(i,s){const a=o.get(i);let c;return a===void 0?(c=new Xg,o.set(i,[c])):s>=a.length?(c=new Xg,a.push(c)):c=a[s],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function zT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new ut};break;case"SpotLight":t={position:new V,direction:new V,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new V,halfWidth:new V,halfHeight:new V};break}return o[e.id]=t,t}}}function HT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let VT=0;function GT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function WT(o){const e=new zT,t=HT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new V);const s=new V,a=new wt,c=new wt;function u(h){let m=0,g=0,_=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let y=0,M=0,E=0,S=0,x=0,L=0,C=0,w=0,z=0,U=0,I=0;h.sort(GT);for(let P=0,b=h.length;P<b;P++){const k=h[P],ae=k.color,ne=k.intensity,me=k.distance,fe=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)m+=ae.r*ne,g+=ae.g*ne,_+=ae.b*ne;else if(k.isLightProbe){for(let le=0;le<9;le++)i.probe[le].addScaledVector(k.sh.coefficients[le],ne);I++}else if(k.isDirectionalLight){const le=e.get(k);if(le.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ue=k.shadow,H=t.get(k);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,i.directionalShadow[y]=H,i.directionalShadowMap[y]=fe,i.directionalShadowMatrix[y]=k.shadow.matrix,L++}i.directional[y]=le,y++}else if(k.isSpotLight){const le=e.get(k);le.position.setFromMatrixPosition(k.matrixWorld),le.color.copy(ae).multiplyScalar(ne),le.distance=me,le.coneCos=Math.cos(k.angle),le.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),le.decay=k.decay,i.spot[E]=le;const ue=k.shadow;if(k.map&&(i.spotLightMap[z]=k.map,z++,ue.updateMatrices(k),k.castShadow&&U++),i.spotLightMatrix[E]=ue.matrix,k.castShadow){const H=t.get(k);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,i.spotShadow[E]=H,i.spotShadowMap[E]=fe,w++}E++}else if(k.isRectAreaLight){const le=e.get(k);le.color.copy(ae).multiplyScalar(ne),le.halfWidth.set(k.width*.5,0,0),le.halfHeight.set(0,k.height*.5,0),i.rectArea[S]=le,S++}else if(k.isPointLight){const le=e.get(k);if(le.color.copy(k.color).multiplyScalar(k.intensity),le.distance=k.distance,le.decay=k.decay,k.castShadow){const ue=k.shadow,H=t.get(k);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,H.shadowCameraNear=ue.camera.near,H.shadowCameraFar=ue.camera.far,i.pointShadow[M]=H,i.pointShadowMap[M]=fe,i.pointShadowMatrix[M]=k.shadow.matrix,C++}i.point[M]=le,M++}else if(k.isHemisphereLight){const le=e.get(k);le.skyColor.copy(k.color).multiplyScalar(ne),le.groundColor.copy(k.groundColor).multiplyScalar(ne),i.hemi[x]=le,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=_;const O=i.hash;(O.directionalLength!==y||O.pointLength!==M||O.spotLength!==E||O.rectAreaLength!==S||O.hemiLength!==x||O.numDirectionalShadows!==L||O.numPointShadows!==C||O.numSpotShadows!==w||O.numSpotMaps!==z||O.numLightProbes!==I)&&(i.directional.length=y,i.spot.length=E,i.rectArea.length=S,i.point.length=M,i.hemi.length=x,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=w+z-U,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=I,O.directionalLength=y,O.pointLength=M,O.spotLength=E,O.rectAreaLength=S,O.hemiLength=x,O.numDirectionalShadows=L,O.numPointShadows=C,O.numSpotShadows=w,O.numSpotMaps=z,O.numLightProbes=I,i.version=VT++)}function f(h,m){let g=0,_=0,y=0,M=0,E=0;const S=m.matrixWorldInverse;for(let x=0,L=h.length;x<L;x++){const C=h[x];if(C.isDirectionalLight){const w=i.directional[g];w.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(S),g++}else if(C.isSpotLight){const w=i.spot[y];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(S),y++}else if(C.isRectAreaLight){const w=i.rectArea[M];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(S),c.identity(),a.copy(C.matrixWorld),a.premultiply(S),c.extractRotation(a),w.halfWidth.set(C.width*.5,0,0),w.halfHeight.set(0,C.height*.5,0),w.halfWidth.applyMatrix4(c),w.halfHeight.applyMatrix4(c),M++}else if(C.isPointLight){const w=i.point[_];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(S),_++}else if(C.isHemisphereLight){const w=i.hemi[E];w.direction.setFromMatrixPosition(C.matrixWorld),w.direction.transformDirection(S),E++}}}return{setup:u,setupView:f,state:i}}function Yg(o){const e=new WT(o),t=[],i=[];function s(m){h.camera=m,t.length=0,i.length=0}function a(m){t.push(m)}function c(m){i.push(m)}function u(){e.setup(t)}function f(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:u,setupLightsView:f,pushLight:a,pushShadow:c}}function jT(o){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let u;return c===void 0?(u=new Yg(o),e.set(s,[u])):a>=c.length?(u=new Yg(o),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}class XT extends Ni{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YT extends Ni{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $T(o,e,t){let i=new gh;const s=new ht,a=new ht,c=new zt,u=new XT({depthPacking:Rx}),f=new YT,h={},m=t.maxTextureSize,g={[Lr]:li,[li]:Lr,[vi]:vi},_=new Dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:qT,fragmentShader:KT}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new jn;M.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Gn(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=w_;let x=this.type;this.render=function(U,I,O){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||U.length===0)return;const P=o.getRenderTarget(),b=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),ae=o.state;ae.setBlending(ds),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const ne=x!==wr&&this.type===wr,me=x===wr&&this.type!==wr;for(let fe=0,le=U.length;fe<le;fe++){const ue=U[fe],H=ue.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ce=H.getFrameExtents();if(s.multiply(ce),a.copy(H.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(a.x=Math.floor(m/ce.x),s.x=a.x*ce.x,H.mapSize.x=a.x),s.y>m&&(a.y=Math.floor(m/ce.y),s.y=a.y*ce.y,H.mapSize.y=a.y)),H.map===null||ne===!0||me===!0){const F=this.type!==wr?{minFilter:Jn,magFilter:Jn}:{};H.map!==null&&H.map.dispose(),H.map=new Vs(s.x,s.y,F),H.map.texture.name=ue.name+".shadowMap",H.camera.updateProjectionMatrix()}o.setRenderTarget(H.map),o.clear();const se=H.getViewportCount();for(let F=0;F<se;F++){const ie=H.getViewport(F);c.set(a.x*ie.x,a.y*ie.y,a.x*ie.z,a.y*ie.w),ae.viewport(c),H.updateMatrices(ue,F),i=H.getFrustum(),w(I,O,H.camera,ue,this.type)}H.isPointLightShadow!==!0&&this.type===wr&&L(H,O),H.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(P,b,k)};function L(U,I){const O=e.update(E);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Vs(s.x,s.y)),_.uniforms.shadow_pass.value=U.map.texture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(I,null,O,_,E,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(I,null,O,y,E,null)}function C(U,I,O,P){let b=null;const k=O.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(k!==void 0)b=k;else if(b=O.isPointLight===!0?f:u,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ae=b.uuid,ne=I.uuid;let me=h[ae];me===void 0&&(me={},h[ae]=me);let fe=me[ne];fe===void 0&&(fe=b.clone(),me[ne]=fe,I.addEventListener("dispose",z)),b=fe}if(b.visible=I.visible,b.wireframe=I.wireframe,P===wr?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:g[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const ae=o.properties.get(b);ae.light=O}return b}function w(U,I,O,P,b){if(U.visible===!1)return;if(U.layers.test(I.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&b===wr)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,U.matrixWorld);const ne=e.update(U),me=U.material;if(Array.isArray(me)){const fe=ne.groups;for(let le=0,ue=fe.length;le<ue;le++){const H=fe[le],ce=me[H.materialIndex];if(ce&&ce.visible){const se=C(U,ce,P,b);U.onBeforeShadow(o,U,I,O,ne,se,H),o.renderBufferDirect(O,null,ne,se,U,H),U.onAfterShadow(o,U,I,O,ne,se,H)}}}else if(me.visible){const fe=C(U,me,P,b);U.onBeforeShadow(o,U,I,O,ne,fe,null),o.renderBufferDirect(O,null,ne,fe,U,null),U.onAfterShadow(o,U,I,O,ne,fe,null)}}const ae=U.children;for(let ne=0,me=ae.length;ne<me;ne++)w(ae[ne],I,O,P,b)}function z(U){U.target.removeEventListener("dispose",z);for(const O in h){const P=h[O],b=U.target.uuid;b in P&&(P[b].dispose(),delete P[b])}}}const ZT={[mf]:gf,[_f]:yf,[vf]:Sf,[Oo]:xf,[gf]:mf,[yf]:_f,[Sf]:vf,[xf]:Oo};function QT(o,e){function t(){let G=!1;const Ne=new zt;let oe=null;const de=new zt(0,0,0,0);return{setMask:function(Pe){oe!==Pe&&!G&&(o.colorMask(Pe,Pe,Pe,Pe),oe=Pe)},setLocked:function(Pe){G=Pe},setClear:function(Pe,Re,nt,jt,rn){rn===!0&&(Pe*=jt,Re*=jt,nt*=jt),Ne.set(Pe,Re,nt,jt),de.equals(Ne)===!1&&(o.clearColor(Pe,Re,nt,jt),de.copy(Ne))},reset:function(){G=!1,oe=null,de.set(-1,0,0,0)}}}function i(){let G=!1,Ne=!1,oe=null,de=null,Pe=null;return{setReversed:function(Re){if(Ne!==Re){const nt=e.get("EXT_clip_control");Ne?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT);const jt=Pe;Pe=null,this.setClear(jt)}Ne=Re},getReversed:function(){return Ne},setTest:function(Re){Re?Se(o.DEPTH_TEST):Le(o.DEPTH_TEST)},setMask:function(Re){oe!==Re&&!G&&(o.depthMask(Re),oe=Re)},setFunc:function(Re){if(Ne&&(Re=ZT[Re]),de!==Re){switch(Re){case mf:o.depthFunc(o.NEVER);break;case gf:o.depthFunc(o.ALWAYS);break;case _f:o.depthFunc(o.LESS);break;case Oo:o.depthFunc(o.LEQUAL);break;case vf:o.depthFunc(o.EQUAL);break;case xf:o.depthFunc(o.GEQUAL);break;case yf:o.depthFunc(o.GREATER);break;case Sf:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}de=Re}},setLocked:function(Re){G=Re},setClear:function(Re){Pe!==Re&&(Ne&&(Re=1-Re),o.clearDepth(Re),Pe=Re)},reset:function(){G=!1,oe=null,de=null,Pe=null,Ne=!1}}}function s(){let G=!1,Ne=null,oe=null,de=null,Pe=null,Re=null,nt=null,jt=null,rn=null;return{setTest:function(St){G||(St?Se(o.STENCIL_TEST):Le(o.STENCIL_TEST))},setMask:function(St){Ne!==St&&!G&&(o.stencilMask(St),Ne=St)},setFunc:function(St,sn,un){(oe!==St||de!==sn||Pe!==un)&&(o.stencilFunc(St,sn,un),oe=St,de=sn,Pe=un)},setOp:function(St,sn,un){(Re!==St||nt!==sn||jt!==un)&&(o.stencilOp(St,sn,un),Re=St,nt=sn,jt=un)},setLocked:function(St){G=St},setClear:function(St){rn!==St&&(o.clearStencil(St),rn=St)},reset:function(){G=!1,Ne=null,oe=null,de=null,Pe=null,Re=null,nt=null,jt=null,rn=null}}}const a=new t,c=new i,u=new s,f=new WeakMap,h=new WeakMap;let m={},g={},_=new WeakMap,y=[],M=null,E=!1,S=null,x=null,L=null,C=null,w=null,z=null,U=null,I=new ut(0,0,0),O=0,P=!1,b=null,k=null,ae=null,ne=null,me=null;const fe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,ue=0;const H=o.getParameter(o.VERSION);H.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(H)[1]),le=ue>=1):H.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),le=ue>=2);let ce=null,se={};const F=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),Be=new zt().fromArray(F),Q=new zt().fromArray(ie);function he(G,Ne,oe,de){const Pe=new Uint8Array(4),Re=o.createTexture();o.bindTexture(G,Re),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let nt=0;nt<oe;nt++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Ne,0,o.RGBA,1,1,de,0,o.RGBA,o.UNSIGNED_BYTE,Pe):o.texImage2D(Ne+nt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pe);return Re}const we={};we[o.TEXTURE_2D]=he(o.TEXTURE_2D,o.TEXTURE_2D,1),we[o.TEXTURE_CUBE_MAP]=he(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[o.TEXTURE_2D_ARRAY]=he(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),we[o.TEXTURE_3D]=he(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Se(o.DEPTH_TEST),c.setFunc(Oo),xt(!1),Ct(Ym),Se(o.CULL_FACE),X(ds);function Se(G){m[G]!==!0&&(o.enable(G),m[G]=!0)}function Le(G){m[G]!==!1&&(o.disable(G),m[G]=!1)}function ze(G,Ne){return g[G]!==Ne?(o.bindFramebuffer(G,Ne),g[G]=Ne,G===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ne),G===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ne),!0):!1}function it(G,Ne){let oe=y,de=!1;if(G){oe=_.get(Ne),oe===void 0&&(oe=[],_.set(Ne,oe));const Pe=G.textures;if(oe.length!==Pe.length||oe[0]!==o.COLOR_ATTACHMENT0){for(let Re=0,nt=Pe.length;Re<nt;Re++)oe[Re]=o.COLOR_ATTACHMENT0+Re;oe.length=Pe.length,de=!0}}else oe[0]!==o.BACK&&(oe[0]=o.BACK,de=!0);de&&o.drawBuffers(oe)}function Ht(G){return M!==G?(o.useProgram(G),M=G,!0):!1}const At={[Bs]:o.FUNC_ADD,[Jv]:o.FUNC_SUBTRACT,[ex]:o.FUNC_REVERSE_SUBTRACT};At[tx]=o.MIN,At[nx]=o.MAX;const Vt={[ix]:o.ZERO,[rx]:o.ONE,[sx]:o.SRC_COLOR,[hf]:o.SRC_ALPHA,[dx]:o.SRC_ALPHA_SATURATE,[cx]:o.DST_COLOR,[ax]:o.DST_ALPHA,[ox]:o.ONE_MINUS_SRC_COLOR,[pf]:o.ONE_MINUS_SRC_ALPHA,[ux]:o.ONE_MINUS_DST_COLOR,[lx]:o.ONE_MINUS_DST_ALPHA,[fx]:o.CONSTANT_COLOR,[hx]:o.ONE_MINUS_CONSTANT_COLOR,[px]:o.CONSTANT_ALPHA,[mx]:o.ONE_MINUS_CONSTANT_ALPHA};function X(G,Ne,oe,de,Pe,Re,nt,jt,rn,St){if(G===ds){E===!0&&(Le(o.BLEND),E=!1);return}if(E===!1&&(Se(o.BLEND),E=!0),G!==Qv){if(G!==S||St!==P){if((x!==Bs||w!==Bs)&&(o.blendEquation(o.FUNC_ADD),x=Bs,w=Bs),St)switch(G){case Do:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qm:o.blendFunc(o.ONE,o.ONE);break;case Km:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case $m:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Do:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qm:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Km:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case $m:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}L=null,C=null,z=null,U=null,I.set(0,0,0),O=0,S=G,P=St}return}Pe=Pe||Ne,Re=Re||oe,nt=nt||de,(Ne!==x||Pe!==w)&&(o.blendEquationSeparate(At[Ne],At[Pe]),x=Ne,w=Pe),(oe!==L||de!==C||Re!==z||nt!==U)&&(o.blendFuncSeparate(Vt[oe],Vt[de],Vt[Re],Vt[nt]),L=oe,C=de,z=Re,U=nt),(jt.equals(I)===!1||rn!==O)&&(o.blendColor(jt.r,jt.g,jt.b,rn),I.copy(jt),O=rn),S=G,P=!1}function yn(G,Ne){G.side===vi?Le(o.CULL_FACE):Se(o.CULL_FACE);let oe=G.side===li;Ne&&(oe=!oe),xt(oe),G.blending===Do&&G.transparent===!1?X(ds):X(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);const de=G.stencilWrite;u.setTest(de),de&&(u.setMask(G.stencilWriteMask),u.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),u.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Bt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Se(o.SAMPLE_ALPHA_TO_COVERAGE):Le(o.SAMPLE_ALPHA_TO_COVERAGE)}function xt(G){b!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),b=G)}function Ct(G){G!==Kv?(Se(o.CULL_FACE),G!==k&&(G===Ym?o.cullFace(o.BACK):G===$v?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Le(o.CULL_FACE),k=G}function Qe(G){G!==ae&&(le&&o.lineWidth(G),ae=G)}function Bt(G,Ne,oe){G?(Se(o.POLYGON_OFFSET_FILL),(ne!==Ne||me!==oe)&&(o.polygonOffset(Ne,oe),ne=Ne,me=oe)):Le(o.POLYGON_OFFSET_FILL)}function qe(G){G?Se(o.SCISSOR_TEST):Le(o.SCISSOR_TEST)}function N(G){G===void 0&&(G=o.TEXTURE0+fe-1),ce!==G&&(o.activeTexture(G),ce=G)}function A(G,Ne,oe){oe===void 0&&(ce===null?oe=o.TEXTURE0+fe-1:oe=ce);let de=se[oe];de===void 0&&(de={type:void 0,texture:void 0},se[oe]=de),(de.type!==G||de.texture!==Ne)&&(ce!==oe&&(o.activeTexture(oe),ce=oe),o.bindTexture(G,Ne||we[G]),de.type=G,de.texture=Ne)}function J(){const G=se[ce];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ge(){try{o.compressedTexImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{o.compressedTexImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{o.texSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{o.texSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function He(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function yt(){try{o.texStorage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{o.texStorage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{o.texImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function st(){try{o.texImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(G){Be.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),Be.copy(G))}function Ve(G){Q.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Q.copy(G))}function gt(G,Ne){let oe=h.get(Ne);oe===void 0&&(oe=new WeakMap,h.set(Ne,oe));let de=oe.get(G);de===void 0&&(de=o.getUniformBlockIndex(Ne,G.name),oe.set(G,de))}function ct(G,Ne){const de=h.get(Ne).get(G);f.get(Ne)!==de&&(o.uniformBlockBinding(Ne,de,G.__bindingPointIndex),f.set(Ne,de))}function Nt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},ce=null,se={},g={},_=new WeakMap,y=[],M=null,E=!1,S=null,x=null,L=null,C=null,w=null,z=null,U=null,I=new ut(0,0,0),O=0,P=!1,b=null,k=null,ae=null,ne=null,me=null,Be.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:Se,disable:Le,bindFramebuffer:ze,drawBuffers:it,useProgram:Ht,setBlending:X,setMaterial:yn,setFlipSided:xt,setCullFace:Ct,setLineWidth:Qe,setPolygonOffset:Bt,setScissorTest:qe,activeTexture:N,bindTexture:A,unbindTexture:J,compressedTexImage2D:ge,compressedTexImage3D:xe,texImage2D:Oe,texImage3D:st,updateUBOMapping:gt,uniformBlockBinding:ct,texStorage2D:yt,texStorage3D:Ae,texSubImage2D:pe,texSubImage3D:Ge,compressedTexSubImage2D:Ie,compressedTexSubImage3D:He,scissor:lt,viewport:Ve,reset:Nt}}function qg(o,e,t,i){const s=JT(i);switch(t){case D_:return o*e;case U_:return o*e;case F_:return o*e*2;case uh:return o*e/s.components*s.byteLength;case dh:return o*e/s.components*s.byteLength;case O_:return o*e*2/s.components*s.byteLength;case fh:return o*e*2/s.components*s.byteLength;case I_:return o*e*3/s.components*s.byteLength;case Li:return o*e*4/s.components*s.byteLength;case hh:return o*e*4/s.components*s.byteLength;case Pc:case Lc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Nc:case Dc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case wf:case bf:return Math.max(o,16)*Math.max(e,8)/4;case Tf:case Af:return Math.max(o,8)*Math.max(e,8)/2;case Rf:case Cf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Pf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Df:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case If:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Of:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case kf:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Bf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case zf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Vf:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Gf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Wf:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Ic:case jf:case Xf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case k_:case Yf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case qf:case Kf:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function JT(o){switch(o){case Nr:case P_:return{byteLength:1,components:1};case ja:case L_:case $a:return{byteLength:2,components:1};case lh:case ch:return{byteLength:2,components:4};case Hs:case ah:case qi:return{byteLength:4,components:1};case N_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function ew(o,e,t,i,s,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ht,m=new WeakMap;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,A){return y?new OffscreenCanvas(N,A):qa("canvas")}function E(N,A,J){let ge=1;const xe=qe(N);if((xe.width>J||xe.height>J)&&(ge=J/Math.max(xe.width,xe.height)),ge<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const pe=Math.floor(ge*xe.width),Ge=Math.floor(ge*xe.height);g===void 0&&(g=M(pe,Ge));const Ie=A?M(pe,Ge):g;return Ie.width=pe,Ie.height=Ge,Ie.getContext("2d").drawImage(N,0,0,pe,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+pe+"x"+Ge+")."),Ie}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),N;return N}function S(N){return N.generateMipmaps}function x(N){o.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(N,A,J,ge,xe=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let pe=A;if(A===o.RED&&(J===o.FLOAT&&(pe=o.R32F),J===o.HALF_FLOAT&&(pe=o.R16F),J===o.UNSIGNED_BYTE&&(pe=o.R8)),A===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(pe=o.R8UI),J===o.UNSIGNED_SHORT&&(pe=o.R16UI),J===o.UNSIGNED_INT&&(pe=o.R32UI),J===o.BYTE&&(pe=o.R8I),J===o.SHORT&&(pe=o.R16I),J===o.INT&&(pe=o.R32I)),A===o.RG&&(J===o.FLOAT&&(pe=o.RG32F),J===o.HALF_FLOAT&&(pe=o.RG16F),J===o.UNSIGNED_BYTE&&(pe=o.RG8)),A===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(pe=o.RG8UI),J===o.UNSIGNED_SHORT&&(pe=o.RG16UI),J===o.UNSIGNED_INT&&(pe=o.RG32UI),J===o.BYTE&&(pe=o.RG8I),J===o.SHORT&&(pe=o.RG16I),J===o.INT&&(pe=o.RG32I)),A===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(pe=o.RGB8UI),J===o.UNSIGNED_SHORT&&(pe=o.RGB16UI),J===o.UNSIGNED_INT&&(pe=o.RGB32UI),J===o.BYTE&&(pe=o.RGB8I),J===o.SHORT&&(pe=o.RGB16I),J===o.INT&&(pe=o.RGB32I)),A===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(pe=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(pe=o.RGBA16UI),J===o.UNSIGNED_INT&&(pe=o.RGBA32UI),J===o.BYTE&&(pe=o.RGBA8I),J===o.SHORT&&(pe=o.RGBA16I),J===o.INT&&(pe=o.RGBA32I)),A===o.RGB&&J===o.UNSIGNED_INT_5_9_9_9_REV&&(pe=o.RGB9_E5),A===o.RGBA){const Ge=xe?Gc:Ut.getTransfer(ge);J===o.FLOAT&&(pe=o.RGBA32F),J===o.HALF_FLOAT&&(pe=o.RGBA16F),J===o.UNSIGNED_BYTE&&(pe=Ge===Yt?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT_4_4_4_4&&(pe=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(pe=o.RGB5_A1)}return(pe===o.R16F||pe===o.R32F||pe===o.RG16F||pe===o.RG32F||pe===o.RGBA16F||pe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function w(N,A){let J;return N?A===null||A===Hs||A===Ho?J=o.DEPTH24_STENCIL8:A===qi?J=o.DEPTH32F_STENCIL8:A===ja&&(J=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Hs||A===Ho?J=o.DEPTH_COMPONENT24:A===qi?J=o.DEPTH_COMPONENT32F:A===ja&&(J=o.DEPTH_COMPONENT16),J}function z(N,A){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Jn&&N.minFilter!==xi?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function U(N){const A=N.target;A.removeEventListener("dispose",U),O(A),A.isVideoTexture&&m.delete(A)}function I(N){const A=N.target;A.removeEventListener("dispose",I),b(A)}function O(N){const A=i.get(N);if(A.__webglInit===void 0)return;const J=N.source,ge=_.get(J);if(ge){const xe=ge[A.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&P(N),Object.keys(ge).length===0&&_.delete(J)}i.remove(N)}function P(N){const A=i.get(N);o.deleteTexture(A.__webglTexture);const J=N.source,ge=_.get(J);delete ge[A.__cacheKey],c.memory.textures--}function b(N){const A=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(A.__webglFramebuffer[ge]))for(let xe=0;xe<A.__webglFramebuffer[ge].length;xe++)o.deleteFramebuffer(A.__webglFramebuffer[ge][xe]);else o.deleteFramebuffer(A.__webglFramebuffer[ge]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[ge])}else{if(Array.isArray(A.__webglFramebuffer))for(let ge=0;ge<A.__webglFramebuffer.length;ge++)o.deleteFramebuffer(A.__webglFramebuffer[ge]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ge=0;ge<A.__webglColorRenderbuffer.length;ge++)A.__webglColorRenderbuffer[ge]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[ge]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const J=N.textures;for(let ge=0,xe=J.length;ge<xe;ge++){const pe=i.get(J[ge]);pe.__webglTexture&&(o.deleteTexture(pe.__webglTexture),c.memory.textures--),i.remove(J[ge])}i.remove(N)}let k=0;function ae(){k=0}function ne(){const N=k;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),k+=1,N}function me(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function fe(N,A){const J=i.get(N);if(N.isVideoTexture&&Qe(N),N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){const ge=N.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(J,N,A);return}}t.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+A)}function le(N,A){const J=i.get(N);if(N.version>0&&J.__version!==N.version){Q(J,N,A);return}t.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+A)}function ue(N,A){const J=i.get(N);if(N.version>0&&J.__version!==N.version){Q(J,N,A);return}t.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+A)}function H(N,A){const J=i.get(N);if(N.version>0&&J.__version!==N.version){he(J,N,A);return}t.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+A)}const ce={[zo]:o.REPEAT,[cs]:o.CLAMP_TO_EDGE,[Fc]:o.MIRRORED_REPEAT},se={[Jn]:o.NEAREST,[C_]:o.NEAREST_MIPMAP_NEAREST,[Ba]:o.NEAREST_MIPMAP_LINEAR,[xi]:o.LINEAR,[Cc]:o.LINEAR_MIPMAP_NEAREST,[Rr]:o.LINEAR_MIPMAP_LINEAR},F={[Px]:o.NEVER,[Fx]:o.ALWAYS,[Lx]:o.LESS,[z_]:o.LEQUAL,[Nx]:o.EQUAL,[Ux]:o.GEQUAL,[Dx]:o.GREATER,[Ix]:o.NOTEQUAL};function ie(N,A){if(A.type===qi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===xi||A.magFilter===Cc||A.magFilter===Ba||A.magFilter===Rr||A.minFilter===xi||A.minFilter===Cc||A.minFilter===Ba||A.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,ce[A.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,ce[A.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,ce[A.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,se[A.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,se[A.minFilter]),A.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,F[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Jn||A.minFilter!==Ba&&A.minFilter!==Rr||A.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Be(N,A){let J=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",U));const ge=A.source;let xe=_.get(ge);xe===void 0&&(xe={},_.set(ge,xe));const pe=me(A);if(pe!==N.__cacheKey){xe[pe]===void 0&&(xe[pe]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,J=!0),xe[pe].usedTimes++;const Ge=xe[N.__cacheKey];Ge!==void 0&&(xe[N.__cacheKey].usedTimes--,Ge.usedTimes===0&&P(A)),N.__cacheKey=pe,N.__webglTexture=xe[pe].texture}return J}function Q(N,A,J){let ge=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ge=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ge=o.TEXTURE_3D);const xe=Be(N,A),pe=A.source;t.bindTexture(ge,N.__webglTexture,o.TEXTURE0+J);const Ge=i.get(pe);if(pe.version!==Ge.__version||xe===!0){t.activeTexture(o.TEXTURE0+J);const Ie=Ut.getPrimaries(Ut.workingColorSpace),He=A.colorSpace===ls?null:Ut.getPrimaries(A.colorSpace),yt=A.colorSpace===ls||Ie===He?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Ae=E(A.image,!1,s.maxTextureSize);Ae=Bt(A,Ae);const Oe=a.convert(A.format,A.colorSpace),st=a.convert(A.type);let lt=C(A.internalFormat,Oe,st,A.colorSpace,A.isVideoTexture);ie(ge,A);let Ve;const gt=A.mipmaps,ct=A.isVideoTexture!==!0,Nt=Ge.__version===void 0||xe===!0,G=pe.dataReady,Ne=z(A,Ae);if(A.isDepthTexture)lt=w(A.format===Vo,A.type),Nt&&(ct?t.texStorage2D(o.TEXTURE_2D,1,lt,Ae.width,Ae.height):t.texImage2D(o.TEXTURE_2D,0,lt,Ae.width,Ae.height,0,Oe,st,null));else if(A.isDataTexture)if(gt.length>0){ct&&Nt&&t.texStorage2D(o.TEXTURE_2D,Ne,lt,gt[0].width,gt[0].height);for(let oe=0,de=gt.length;oe<de;oe++)Ve=gt[oe],ct?G&&t.texSubImage2D(o.TEXTURE_2D,oe,0,0,Ve.width,Ve.height,Oe,st,Ve.data):t.texImage2D(o.TEXTURE_2D,oe,lt,Ve.width,Ve.height,0,Oe,st,Ve.data);A.generateMipmaps=!1}else ct?(Nt&&t.texStorage2D(o.TEXTURE_2D,Ne,lt,Ae.width,Ae.height),G&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Oe,st,Ae.data)):t.texImage2D(o.TEXTURE_2D,0,lt,Ae.width,Ae.height,0,Oe,st,Ae.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ct&&Nt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,lt,gt[0].width,gt[0].height,Ae.depth);for(let oe=0,de=gt.length;oe<de;oe++)if(Ve=gt[oe],A.format!==Li)if(Oe!==null)if(ct){if(G)if(A.layerUpdates.size>0){const Pe=qg(Ve.width,Ve.height,A.format,A.type);for(const Re of A.layerUpdates){const nt=Ve.data.subarray(Re*Pe/Ve.data.BYTES_PER_ELEMENT,(Re+1)*Pe/Ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,oe,0,0,Re,Ve.width,Ve.height,1,Oe,nt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,oe,0,0,0,Ve.width,Ve.height,Ae.depth,Oe,Ve.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,oe,lt,Ve.width,Ve.height,Ae.depth,0,Ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?G&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,oe,0,0,0,Ve.width,Ve.height,Ae.depth,Oe,st,Ve.data):t.texImage3D(o.TEXTURE_2D_ARRAY,oe,lt,Ve.width,Ve.height,Ae.depth,0,Oe,st,Ve.data)}else{ct&&Nt&&t.texStorage2D(o.TEXTURE_2D,Ne,lt,gt[0].width,gt[0].height);for(let oe=0,de=gt.length;oe<de;oe++)Ve=gt[oe],A.format!==Li?Oe!==null?ct?G&&t.compressedTexSubImage2D(o.TEXTURE_2D,oe,0,0,Ve.width,Ve.height,Oe,Ve.data):t.compressedTexImage2D(o.TEXTURE_2D,oe,lt,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?G&&t.texSubImage2D(o.TEXTURE_2D,oe,0,0,Ve.width,Ve.height,Oe,st,Ve.data):t.texImage2D(o.TEXTURE_2D,oe,lt,Ve.width,Ve.height,0,Oe,st,Ve.data)}else if(A.isDataArrayTexture)if(ct){if(Nt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,lt,Ae.width,Ae.height,Ae.depth),G)if(A.layerUpdates.size>0){const oe=qg(Ae.width,Ae.height,A.format,A.type);for(const de of A.layerUpdates){const Pe=Ae.data.subarray(de*oe/Ae.data.BYTES_PER_ELEMENT,(de+1)*oe/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,de,Ae.width,Ae.height,1,Oe,st,Pe)}A.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Oe,st,Ae.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,lt,Ae.width,Ae.height,Ae.depth,0,Oe,st,Ae.data);else if(A.isData3DTexture)ct?(Nt&&t.texStorage3D(o.TEXTURE_3D,Ne,lt,Ae.width,Ae.height,Ae.depth),G&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Oe,st,Ae.data)):t.texImage3D(o.TEXTURE_3D,0,lt,Ae.width,Ae.height,Ae.depth,0,Oe,st,Ae.data);else if(A.isFramebufferTexture){if(Nt)if(ct)t.texStorage2D(o.TEXTURE_2D,Ne,lt,Ae.width,Ae.height);else{let oe=Ae.width,de=Ae.height;for(let Pe=0;Pe<Ne;Pe++)t.texImage2D(o.TEXTURE_2D,Pe,lt,oe,de,0,Oe,st,null),oe>>=1,de>>=1}}else if(gt.length>0){if(ct&&Nt){const oe=qe(gt[0]);t.texStorage2D(o.TEXTURE_2D,Ne,lt,oe.width,oe.height)}for(let oe=0,de=gt.length;oe<de;oe++)Ve=gt[oe],ct?G&&t.texSubImage2D(o.TEXTURE_2D,oe,0,0,Oe,st,Ve):t.texImage2D(o.TEXTURE_2D,oe,lt,Oe,st,Ve);A.generateMipmaps=!1}else if(ct){if(Nt){const oe=qe(Ae);t.texStorage2D(o.TEXTURE_2D,Ne,lt,oe.width,oe.height)}G&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,st,Ae)}else t.texImage2D(o.TEXTURE_2D,0,lt,Oe,st,Ae);S(A)&&x(ge),Ge.__version=pe.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function he(N,A,J){if(A.image.length!==6)return;const ge=Be(N,A),xe=A.source;t.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+J);const pe=i.get(xe);if(xe.version!==pe.__version||ge===!0){t.activeTexture(o.TEXTURE0+J);const Ge=Ut.getPrimaries(Ut.workingColorSpace),Ie=A.colorSpace===ls?null:Ut.getPrimaries(A.colorSpace),He=A.colorSpace===ls||Ge===Ie?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const yt=A.isCompressedTexture||A.image[0].isCompressedTexture,Ae=A.image[0]&&A.image[0].isDataTexture,Oe=[];for(let de=0;de<6;de++)!yt&&!Ae?Oe[de]=E(A.image[de],!0,s.maxCubemapSize):Oe[de]=Ae?A.image[de].image:A.image[de],Oe[de]=Bt(A,Oe[de]);const st=Oe[0],lt=a.convert(A.format,A.colorSpace),Ve=a.convert(A.type),gt=C(A.internalFormat,lt,Ve,A.colorSpace),ct=A.isVideoTexture!==!0,Nt=pe.__version===void 0||ge===!0,G=xe.dataReady;let Ne=z(A,st);ie(o.TEXTURE_CUBE_MAP,A);let oe;if(yt){ct&&Nt&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Ne,gt,st.width,st.height);for(let de=0;de<6;de++){oe=Oe[de].mipmaps;for(let Pe=0;Pe<oe.length;Pe++){const Re=oe[Pe];A.format!==Li?lt!==null?ct?G&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,0,0,Re.width,Re.height,lt,Re.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,gt,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,0,0,Re.width,Re.height,lt,Ve,Re.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,gt,Re.width,Re.height,0,lt,Ve,Re.data)}}}else{if(oe=A.mipmaps,ct&&Nt){oe.length>0&&Ne++;const de=qe(Oe[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Ne,gt,de.width,de.height)}for(let de=0;de<6;de++)if(Ae){ct?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Oe[de].width,Oe[de].height,lt,Ve,Oe[de].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,gt,Oe[de].width,Oe[de].height,0,lt,Ve,Oe[de].data);for(let Pe=0;Pe<oe.length;Pe++){const nt=oe[Pe].image[de].image;ct?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,0,0,nt.width,nt.height,lt,Ve,nt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,gt,nt.width,nt.height,0,lt,Ve,nt.data)}}else{ct?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,lt,Ve,Oe[de]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,gt,lt,Ve,Oe[de]);for(let Pe=0;Pe<oe.length;Pe++){const Re=oe[Pe];ct?G&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,0,0,lt,Ve,Re.image[de]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,gt,lt,Ve,Re.image[de])}}}S(A)&&x(o.TEXTURE_CUBE_MAP),pe.__version=xe.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function we(N,A,J,ge,xe,pe){const Ge=a.convert(J.format,J.colorSpace),Ie=a.convert(J.type),He=C(J.internalFormat,Ge,Ie,J.colorSpace),yt=i.get(A),Ae=i.get(J);if(Ae.__renderTarget=A,!yt.__hasExternalTextures){const Oe=Math.max(1,A.width>>pe),st=Math.max(1,A.height>>pe);xe===o.TEXTURE_3D||xe===o.TEXTURE_2D_ARRAY?t.texImage3D(xe,pe,He,Oe,st,A.depth,0,Ge,Ie,null):t.texImage2D(xe,pe,He,Oe,st,0,Ge,Ie,null)}t.bindFramebuffer(o.FRAMEBUFFER,N),Ct(A)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ge,xe,Ae.__webglTexture,0,xt(A)):(xe===o.TEXTURE_2D||xe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ge,xe,Ae.__webglTexture,pe),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Se(N,A,J){if(o.bindRenderbuffer(o.RENDERBUFFER,N),A.depthBuffer){const ge=A.depthTexture,xe=ge&&ge.isDepthTexture?ge.type:null,pe=w(A.stencilBuffer,xe),Ge=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ie=xt(A);Ct(A)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ie,pe,A.width,A.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie,pe,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,pe,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ge,o.RENDERBUFFER,N)}else{const ge=A.textures;for(let xe=0;xe<ge.length;xe++){const pe=ge[xe],Ge=a.convert(pe.format,pe.colorSpace),Ie=a.convert(pe.type),He=C(pe.internalFormat,Ge,Ie,pe.colorSpace),yt=xt(A);J&&Ct(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,yt,He,A.width,A.height):Ct(A)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,yt,He,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,He,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Le(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=i.get(A.depthTexture);ge.__renderTarget=A,(!ge.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),fe(A.depthTexture,0);const xe=ge.__webglTexture,pe=xt(A);if(A.depthTexture.format===Io)Ct(A)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xe,0,pe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xe,0);else if(A.depthTexture.format===Vo)Ct(A)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xe,0,pe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function ze(N){const A=i.get(N),J=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){const ge=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ge){const xe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ge.removeEventListener("dispose",xe)};ge.addEventListener("dispose",xe),A.__depthDisposeCallback=xe}A.__boundDepthTexture=ge}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Le(A.__webglFramebuffer,N)}else if(J){A.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[ge]),A.__webglDepthbuffer[ge]===void 0)A.__webglDepthbuffer[ge]=o.createRenderbuffer(),Se(A.__webglDepthbuffer[ge],N,!1);else{const xe=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pe=A.__webglDepthbuffer[ge];o.bindRenderbuffer(o.RENDERBUFFER,pe),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,pe)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),Se(A.__webglDepthbuffer,N,!1);else{const ge=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xe=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,xe),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,xe)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function it(N,A,J){const ge=i.get(N);A!==void 0&&we(ge.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&ze(N)}function Ht(N){const A=N.texture,J=i.get(N),ge=i.get(A);N.addEventListener("dispose",I);const xe=N.textures,pe=N.isWebGLCubeRenderTarget===!0,Ge=xe.length>1;if(Ge||(ge.__webglTexture===void 0&&(ge.__webglTexture=o.createTexture()),ge.__version=A.version,c.memory.textures++),pe){J.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[Ie]=[];for(let He=0;He<A.mipmaps.length;He++)J.__webglFramebuffer[Ie][He]=o.createFramebuffer()}else J.__webglFramebuffer[Ie]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)J.__webglFramebuffer[Ie]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(Ge)for(let Ie=0,He=xe.length;Ie<He;Ie++){const yt=i.get(xe[Ie]);yt.__webglTexture===void 0&&(yt.__webglTexture=o.createTexture(),c.memory.textures++)}if(N.samples>0&&Ct(N)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ie=0;Ie<xe.length;Ie++){const He=xe[Ie];J.__webglColorRenderbuffer[Ie]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[Ie]);const yt=a.convert(He.format,He.colorSpace),Ae=a.convert(He.type),Oe=C(He.internalFormat,yt,Ae,He.colorSpace,N.isXRRenderTarget===!0),st=xt(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,st,Oe,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.RENDERBUFFER,J.__webglColorRenderbuffer[Ie])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),Se(J.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pe){t.bindTexture(o.TEXTURE_CUBE_MAP,ge.__webglTexture),ie(o.TEXTURE_CUBE_MAP,A);for(let Ie=0;Ie<6;Ie++)if(A.mipmaps&&A.mipmaps.length>0)for(let He=0;He<A.mipmaps.length;He++)we(J.__webglFramebuffer[Ie][He],N,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,He);else we(J.__webglFramebuffer[Ie],N,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);S(A)&&x(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Ie=0,He=xe.length;Ie<He;Ie++){const yt=xe[Ie],Ae=i.get(yt);t.bindTexture(o.TEXTURE_2D,Ae.__webglTexture),ie(o.TEXTURE_2D,yt),we(J.__webglFramebuffer,N,yt,o.COLOR_ATTACHMENT0+Ie,o.TEXTURE_2D,0),S(yt)&&x(o.TEXTURE_2D)}t.unbindTexture()}else{let Ie=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ie=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ie,ge.__webglTexture),ie(Ie,A),A.mipmaps&&A.mipmaps.length>0)for(let He=0;He<A.mipmaps.length;He++)we(J.__webglFramebuffer[He],N,A,o.COLOR_ATTACHMENT0,Ie,He);else we(J.__webglFramebuffer,N,A,o.COLOR_ATTACHMENT0,Ie,0);S(A)&&x(Ie),t.unbindTexture()}N.depthBuffer&&ze(N)}function At(N){const A=N.textures;for(let J=0,ge=A.length;J<ge;J++){const xe=A[J];if(S(xe)){const pe=L(N),Ge=i.get(xe).__webglTexture;t.bindTexture(pe,Ge),x(pe),t.unbindTexture()}}}const Vt=[],X=[];function yn(N){if(N.samples>0){if(Ct(N)===!1){const A=N.textures,J=N.width,ge=N.height;let xe=o.COLOR_BUFFER_BIT;const pe=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ge=i.get(N),Ie=A.length>1;if(Ie)for(let He=0;He<A.length;He++)t.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let He=0;He<A.length;He++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(xe|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(xe|=o.STENCIL_BUFFER_BIT)),Ie){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ge.__webglColorRenderbuffer[He]);const yt=i.get(A[He]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,J,ge,0,0,J,ge,xe,o.NEAREST),f===!0&&(Vt.length=0,X.length=0,Vt.push(o.COLOR_ATTACHMENT0+He),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Vt.push(pe),X.push(pe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,X)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Vt))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ie)for(let He=0;He<A.length;He++){t.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.RENDERBUFFER,Ge.__webglColorRenderbuffer[He]);const yt=i.get(A[He]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.TEXTURE_2D,yt,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&f){const A=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function xt(N){return Math.min(s.maxSamples,N.samples)}function Ct(N){const A=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Qe(N){const A=c.render.frame;m.get(N)!==A&&(m.set(N,A),N.update())}function Bt(N,A){const J=N.colorSpace,ge=N.format,xe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||J!==ei&&J!==ls&&(Ut.getTransfer(J)===Yt?(ge!==Li||xe!==Nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),A}function qe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=ne,this.resetTextureUnits=ae,this.setTexture2D=fe,this.setTexture2DArray=le,this.setTexture3D=ue,this.setTextureCube=H,this.rebindTextures=it,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=yn,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ct}function tw(o,e){function t(i,s=ls){let a;const c=Ut.getTransfer(s);if(i===Nr)return o.UNSIGNED_BYTE;if(i===lh)return o.UNSIGNED_SHORT_4_4_4_4;if(i===ch)return o.UNSIGNED_SHORT_5_5_5_1;if(i===N_)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===P_)return o.BYTE;if(i===L_)return o.SHORT;if(i===ja)return o.UNSIGNED_SHORT;if(i===ah)return o.INT;if(i===Hs)return o.UNSIGNED_INT;if(i===qi)return o.FLOAT;if(i===$a)return o.HALF_FLOAT;if(i===D_)return o.ALPHA;if(i===I_)return o.RGB;if(i===Li)return o.RGBA;if(i===U_)return o.LUMINANCE;if(i===F_)return o.LUMINANCE_ALPHA;if(i===Io)return o.DEPTH_COMPONENT;if(i===Vo)return o.DEPTH_STENCIL;if(i===uh)return o.RED;if(i===dh)return o.RED_INTEGER;if(i===O_)return o.RG;if(i===fh)return o.RG_INTEGER;if(i===hh)return o.RGBA_INTEGER;if(i===Pc||i===Lc||i===Nc||i===Dc)if(c===Yt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Pc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Pc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Nc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Dc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tf||i===wf||i===Af||i===bf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Tf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Af)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rf||i===Cf||i===Pf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Rf||i===Cf)return c===Yt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Pf)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Lf||i===Nf||i===Df||i===If||i===Uf||i===Ff||i===Of||i===kf||i===Bf||i===zf||i===Hf||i===Vf||i===Gf||i===Wf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Lf)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nf)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Df)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===If)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uf)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ff)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Of)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kf)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bf)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zf)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hf)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vf)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gf)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wf)return c===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ic||i===jf||i===Xf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Ic)return c===Yt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===k_||i===Yf||i===qf||i===Kf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Ic)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Yf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ho?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}class nw extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ki extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iw={type:"move"};class nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,c=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,i),x=this._getHandJoint(h,E);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=m.position.distanceTo(g.position),y=.02,M=.005;h.inputState.pinching&&_>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(iw)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ki;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const rw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ow{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new _n,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Dr({vertexShader:rw,fragmentShader:sw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gn(new Qa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aw extends Ws{constructor(e,t){super();const i=this;let s=null,a=1,c=null,u="local-floor",f=1,h=null,m=null,g=null,_=null,y=null,M=null;const E=new ow,S=t.getContextAttributes();let x=null,L=null;const C=[],w=[],z=new ht;let U=null;const I=new Vn;I.viewport=new zt;const O=new Vn;O.viewport=new zt;const P=[I,O],b=new nw;let k=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=C[Q];return he===void 0&&(he=new nf,C[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=C[Q];return he===void 0&&(he=new nf,C[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=C[Q];return he===void 0&&(he=new nf,C[Q]=he),he.getHandSpace()};function ne(Q){const he=w.indexOf(Q.inputSource);if(he===-1)return;const we=C[he];we!==void 0&&(we.update(Q.inputSource,Q.frame,h||c),we.dispatchEvent({type:Q.type,data:Q.inputSource}))}function me(){s.removeEventListener("select",ne),s.removeEventListener("selectstart",ne),s.removeEventListener("selectend",ne),s.removeEventListener("squeeze",ne),s.removeEventListener("squeezestart",ne),s.removeEventListener("squeezeend",ne),s.removeEventListener("end",me),s.removeEventListener("inputsourceschange",fe);for(let Q=0;Q<C.length;Q++){const he=w[Q];he!==null&&(w[Q]=null,C[Q].disconnect(he))}k=null,ae=null,E.reset(),e.setRenderTarget(x),y=null,_=null,g=null,s=null,L=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(z.width,z.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){u=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",ne),s.addEventListener("selectstart",ne),s.addEventListener("selectend",ne),s.addEventListener("squeeze",ne),s.addEventListener("squeezestart",ne),s.addEventListener("squeezeend",ne),s.addEventListener("end",me),s.addEventListener("inputsourceschange",fe),S.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(z),s.renderState.layers===void 0){const he={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Vs(y.framebufferWidth,y.framebufferHeight,{format:Li,type:Nr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let he=null,we=null,Se=null;S.depth&&(Se=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=S.stencil?Vo:Io,we=S.stencil?Ho:Hs);const Le={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:a};g=new XRWebGLBinding(s,t),_=g.createProjectionLayer(Le),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new Vs(_.textureWidth,_.textureHeight,{format:Li,type:Nr,depthTexture:new Z_(_.textureWidth,_.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await s.requestReferenceSpace(u),Be.setContext(s),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function fe(Q){for(let he=0;he<Q.removed.length;he++){const we=Q.removed[he],Se=w.indexOf(we);Se>=0&&(w[Se]=null,C[Se].disconnect(we))}for(let he=0;he<Q.added.length;he++){const we=Q.added[he];let Se=w.indexOf(we);if(Se===-1){for(let ze=0;ze<C.length;ze++)if(ze>=w.length){w.push(we),Se=ze;break}else if(w[ze]===null){w[ze]=we,Se=ze;break}if(Se===-1)break}const Le=C[Se];Le&&Le.connect(we)}}const le=new V,ue=new V;function H(Q,he,we){le.setFromMatrixPosition(he.matrixWorld),ue.setFromMatrixPosition(we.matrixWorld);const Se=le.distanceTo(ue),Le=he.projectionMatrix.elements,ze=we.projectionMatrix.elements,it=Le[14]/(Le[10]-1),Ht=Le[14]/(Le[10]+1),At=(Le[9]+1)/Le[5],Vt=(Le[9]-1)/Le[5],X=(Le[8]-1)/Le[0],yn=(ze[8]+1)/ze[0],xt=it*X,Ct=it*yn,Qe=Se/(-X+yn),Bt=Qe*-X;if(he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Bt),Q.translateZ(Qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Le[10]===-1)Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const qe=it+Qe,N=Ht+Qe,A=xt-Bt,J=Ct+(Se-Bt),ge=At*Ht/N*qe,xe=Vt*Ht/N*qe;Q.projectionMatrix.makePerspective(A,J,ge,xe,qe,N),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ce(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let he=Q.near,we=Q.far;E.texture!==null&&(E.depthNear>0&&(he=E.depthNear),E.depthFar>0&&(we=E.depthFar)),b.near=O.near=I.near=he,b.far=O.far=I.far=we,(k!==b.near||ae!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),k=b.near,ae=b.far),I.layers.mask=Q.layers.mask|2,O.layers.mask=Q.layers.mask|4,b.layers.mask=I.layers.mask|O.layers.mask;const Se=Q.parent,Le=b.cameras;ce(b,Se);for(let ze=0;ze<Le.length;ze++)ce(Le[ze],Se);Le.length===2?H(b,I,O):b.projectionMatrix.copy(I.projectionMatrix),se(Q,b,Se)};function se(Q,he,we){we===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(we.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Go*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(_===null&&y===null))return f},this.setFoveation=function(Q){f=Q,_!==null&&(_.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(b)};let F=null;function ie(Q,he){if(m=he.getViewerPose(h||c),M=he,m!==null){const we=m.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let Se=!1;we.length!==b.cameras.length&&(b.cameras.length=0,Se=!0);for(let ze=0;ze<we.length;ze++){const it=we[ze];let Ht=null;if(y!==null)Ht=y.getViewport(it);else{const Vt=g.getViewSubImage(_,it);Ht=Vt.viewport,ze===0&&(e.setRenderTargetTextures(L,Vt.colorTexture,_.ignoreDepthValues?void 0:Vt.depthStencilTexture),e.setRenderTarget(L))}let At=P[ze];At===void 0&&(At=new Vn,At.layers.enable(ze),At.viewport=new zt,P[ze]=At),At.matrix.fromArray(it.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(it.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),ze===0&&(b.matrix.copy(At.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Se===!0&&b.cameras.push(At)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const ze=g.getDepthInformation(we[0]);ze&&ze.isValid&&ze.texture&&E.init(e,ze,s.renderState)}}for(let we=0;we<C.length;we++){const Se=w[we],Le=C[we];Se!==null&&Le!==void 0&&Le.update(Se,he,h||c)}F&&F(Q,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),M=null}const Be=new $_;Be.setAnimationLoop(ie),this.setAnimationLoop=function(Q){F=Q},this.dispose=function(){}}}const Fs=new sr,lw=new wt;function cw(o,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function i(S,x){x.color.getRGB(S.fogColor.value,Y_(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,L,C,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(S,x):x.isMeshToonMaterial?(a(S,x),g(S,x)):x.isMeshPhongMaterial?(a(S,x),m(S,x)):x.isMeshStandardMaterial?(a(S,x),_(S,x),x.isMeshPhysicalMaterial&&y(S,x,w)):x.isMeshMatcapMaterial?(a(S,x),M(S,x)):x.isMeshDepthMaterial?a(S,x):x.isMeshDistanceMaterial?(a(S,x),E(S,x)):x.isMeshNormalMaterial?a(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&u(S,x)):x.isPointsMaterial?f(S,x,L,C):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===li&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===li&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const L=e.get(x),C=L.envMap,w=L.envMapRotation;C&&(S.envMap.value=C,Fs.copy(w),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),S.envMapRotation.value.setFromMatrix4(lw.makeRotationFromEuler(Fs)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function u(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function f(S,x,L,C){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*L,S.scale.value=C*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,L){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===li&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function E(S,x){const L=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function uw(o,e,t,i){let s={},a={},c=[];const u=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function f(L,C){const w=C.program;i.uniformBlockBinding(L,w)}function h(L,C){let w=s[L.id];w===void 0&&(M(L),w=m(L),s[L.id]=w,L.addEventListener("dispose",S));const z=C.program;i.updateUBOMapping(L,z);const U=e.render.frame;a[L.id]!==U&&(_(L),a[L.id]=U)}function m(L){const C=g();L.__bindingPointIndex=C;const w=o.createBuffer(),z=L.__size,U=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,z,U),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,w),w}function g(){for(let L=0;L<u;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const C=s[L.id],w=L.uniforms,z=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let U=0,I=w.length;U<I;U++){const O=Array.isArray(w[U])?w[U]:[w[U]];for(let P=0,b=O.length;P<b;P++){const k=O[P];if(y(k,U,P,z)===!0){const ae=k.__offset,ne=Array.isArray(k.value)?k.value:[k.value];let me=0;for(let fe=0;fe<ne.length;fe++){const le=ne[fe],ue=E(le);typeof le=="number"||typeof le=="boolean"?(k.__data[0]=le,o.bufferSubData(o.UNIFORM_BUFFER,ae+me,k.__data)):le.isMatrix3?(k.__data[0]=le.elements[0],k.__data[1]=le.elements[1],k.__data[2]=le.elements[2],k.__data[3]=0,k.__data[4]=le.elements[3],k.__data[5]=le.elements[4],k.__data[6]=le.elements[5],k.__data[7]=0,k.__data[8]=le.elements[6],k.__data[9]=le.elements[7],k.__data[10]=le.elements[8],k.__data[11]=0):(le.toArray(k.__data,me),me+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ae,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(L,C,w,z){const U=L.value,I=C+"_"+w;if(z[I]===void 0)return typeof U=="number"||typeof U=="boolean"?z[I]=U:z[I]=U.clone(),!0;{const O=z[I];if(typeof U=="number"||typeof U=="boolean"){if(O!==U)return z[I]=U,!0}else if(O.equals(U)===!1)return O.copy(U),!0}return!1}function M(L){const C=L.uniforms;let w=0;const z=16;for(let I=0,O=C.length;I<O;I++){const P=Array.isArray(C[I])?C[I]:[C[I]];for(let b=0,k=P.length;b<k;b++){const ae=P[b],ne=Array.isArray(ae.value)?ae.value:[ae.value];for(let me=0,fe=ne.length;me<fe;me++){const le=ne[me],ue=E(le),H=w%z,ce=H%ue.boundary,se=H+ce;w+=ce,se!==0&&z-se<ue.storage&&(w+=z-se),ae.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=w,w+=ue.storage}}}const U=w%z;return U>0&&(w+=z-U),L.__size=w,L.__cache={},this}function E(L){const C={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(C.boundary=4,C.storage=4):L.isVector2?(C.boundary=8,C.storage=8):L.isVector3||L.isColor?(C.boundary=16,C.storage=12):L.isVector4?(C.boundary=16,C.storage=16):L.isMatrix3?(C.boundary=48,C.storage=48):L.isMatrix4?(C.boundary=64,C.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),C}function S(L){const C=L.target;C.removeEventListener("dispose",S);const w=c.indexOf(C.__bindingPointIndex);c.splice(w,1),o.deleteBuffer(s[C.id]),delete s[C.id],delete a[C.id]}function x(){for(const L in s)o.deleteBuffer(s[L]);c=[],s={},a={}}return{bind:f,update:h,dispose:x}}class Kg{constructor(e={}){const{canvas:t=Jx(),context:i=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=c;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,x=null;const L=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=fs,this.toneMappingExposure=1;const w=this;let z=!1,U=0,I=0,O=null,P=-1,b=null;const k=new zt,ae=new zt;let ne=null;const me=new ut(0);let fe=0,le=t.width,ue=t.height,H=1,ce=null,se=null;const F=new zt(0,0,le,ue),ie=new zt(0,0,le,ue);let Be=!1;const Q=new gh;let he=!1,we=!1;const Se=new wt,Le=new wt,ze=new V,it=new zt,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function Vt(){return O===null?H:1}let X=i;function yn(R,j){return t.getContext(R,j)}try{const R={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oh}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Re,!1),X===null){const j="webgl2";if(X=yn(j,R),X===null)throw yn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let xt,Ct,Qe,Bt,qe,N,A,J,ge,xe,pe,Ge,Ie,He,yt,Ae,Oe,st,lt,Ve,gt,ct,Nt,G;function Ne(){xt=new gE(X),xt.init(),ct=new tw(X,xt),Ct=new uE(X,xt,e,ct),Qe=new QT(X,xt),Ct.reverseDepthBuffer&&_&&Qe.buffers.depth.setReversed(!0),Bt=new xE(X),qe=new OT,N=new ew(X,xt,Qe,qe,Ct,ct,Bt),A=new fE(w),J=new mE(w),ge=new Ay(X),Nt=new lE(X,ge),xe=new _E(X,ge,Bt,Nt),pe=new SE(X,xe,ge,Bt),lt=new yE(X,Ct,N),Ae=new dE(qe),Ge=new FT(w,A,J,xt,Ct,Nt,Ae),Ie=new cw(w,qe),He=new BT,yt=new jT(xt),st=new aE(w,A,J,Qe,pe,y,f),Oe=new $T(w,pe,Ct),G=new uw(X,Bt,Ct,Qe),Ve=new cE(X,xt,Bt),gt=new vE(X,xt,Bt),Bt.programs=Ge.programs,w.capabilities=Ct,w.extensions=xt,w.properties=qe,w.renderLists=He,w.shadowMap=Oe,w.state=Qe,w.info=Bt}Ne();const oe=new aw(w,X);this.xr=oe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=xt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=xt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(le,ue,!1))},this.getSize=function(R){return R.set(le,ue)},this.setSize=function(R,j,ee=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=R,ue=j,t.width=Math.floor(R*H),t.height=Math.floor(j*H),ee===!0&&(t.style.width=R+"px",t.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(le*H,ue*H).floor()},this.setDrawingBufferSize=function(R,j,ee){le=R,ue=j,H=ee,t.width=Math.floor(R*ee),t.height=Math.floor(j*ee),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(F)},this.setViewport=function(R,j,ee,te){R.isVector4?F.set(R.x,R.y,R.z,R.w):F.set(R,j,ee,te),Qe.viewport(k.copy(F).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(ie)},this.setScissor=function(R,j,ee,te){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,j,ee,te),Qe.scissor(ae.copy(ie).multiplyScalar(H).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(R){Qe.setScissorTest(Be=R)},this.setOpaqueSort=function(R){ce=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(R=!0,j=!0,ee=!0){let te=0;if(R){let Y=!1;if(O!==null){const be=O.texture.format;Y=be===hh||be===fh||be===dh}if(Y){const be=O.texture.type,Ee=be===Nr||be===Hs||be===ja||be===Ho||be===lh||be===ch,Ke=st.getClearColor(),We=st.getClearAlpha(),dt=Ke.r,ft=Ke.g,$e=Ke.b;Ee?(M[0]=dt,M[1]=ft,M[2]=$e,M[3]=We,X.clearBufferuiv(X.COLOR,0,M)):(E[0]=dt,E[1]=ft,E[2]=$e,E[3]=We,X.clearBufferiv(X.COLOR,0,E))}else te|=X.COLOR_BUFFER_BIT}j&&(te|=X.DEPTH_BUFFER_BIT),ee&&(te|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),He.dispose(),yt.dispose(),qe.dispose(),A.dispose(),J.dispose(),pe.dispose(),Nt.dispose(),G.dispose(),Ge.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Ir),oe.removeEventListener("sessionend",Sn),ci.stop()};function de(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const R=Bt.autoReset,j=Oe.enabled,ee=Oe.autoUpdate,te=Oe.needsUpdate,Y=Oe.type;Ne(),Bt.autoReset=R,Oe.enabled=j,Oe.autoUpdate=ee,Oe.needsUpdate=te,Oe.type=Y}function Re(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function nt(R){const j=R.target;j.removeEventListener("dispose",nt),jt(j)}function jt(R){rn(R),qe.remove(R)}function rn(R){const j=qe.get(R).programs;j!==void 0&&(j.forEach(function(ee){Ge.releaseProgram(ee)}),R.isShaderMaterial&&Ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,ee,te,Y,be){j===null&&(j=Ht);const Ee=Y.isMesh&&Y.matrixWorld.determinant()<0,Ke=Fr(R,j,ee,te,Y);Qe.setMaterial(te,Ee);let We=ee.index,dt=1;if(te.wireframe===!0){if(We=xe.getWireframeAttribute(ee),We===void 0)return;dt=2}const ft=ee.drawRange,$e=ee.attributes.position;let Dt=ft.start*dt,bt=(ft.start+ft.count)*dt;be!==null&&(Dt=Math.max(Dt,be.start*dt),bt=Math.min(bt,(be.start+be.count)*dt)),We!==null?(Dt=Math.max(Dt,0),bt=Math.min(bt,We.count)):$e!=null&&(Dt=Math.max(Dt,0),bt=Math.min(bt,$e.count));const Rt=bt-Dt;if(Rt<0||Rt===1/0)return;Nt.setup(Y,te,Ke,ee,We);let ln,_t=Ve;if(We!==null&&(ln=ge.get(We),_t=gt,_t.setIndex(ln)),Y.isMesh)te.wireframe===!0?(Qe.setLineWidth(te.wireframeLinewidth*Vt()),_t.setMode(X.LINES)):_t.setMode(X.TRIANGLES);else if(Y.isLine){let Je=te.linewidth;Je===void 0&&(Je=1),Qe.setLineWidth(Je*Vt()),Y.isLineSegments?_t.setMode(X.LINES):Y.isLineLoop?_t.setMode(X.LINE_LOOP):_t.setMode(X.LINE_STRIP)}else Y.isPoints?_t.setMode(X.POINTS):Y.isSprite&&_t.setMode(X.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)_t.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))_t.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Je=Y._multiDrawStarts,ui=Y._multiDrawCounts,Ft=Y._multiDrawCount,$=We?ge.get(We).bytesPerElement:1,_e=qe.get(te).currentProgram.getUniforms();for(let ve=0;ve<Ft;ve++)_e.setValue(X,"_gl_DrawID",ve),_t.render(Je[ve]/$,ui[ve])}else if(Y.isInstancedMesh)_t.renderInstances(Dt,Rt,Y.count);else if(ee.isInstancedBufferGeometry){const Je=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,ui=Math.min(ee.instanceCount,Je);_t.renderInstances(Dt,Rt,ui)}else _t.render(Dt,Rt)};function St(R,j,ee){R.transparent===!0&&R.side===vi&&R.forceSinglePass===!1?(R.side=li,R.needsUpdate=!0,Zi(R,j,ee),R.side=Lr,R.needsUpdate=!0,Zi(R,j,ee),R.side=vi):Zi(R,j,ee)}this.compile=function(R,j,ee=null){ee===null&&(ee=R),x=yt.get(ee),x.init(j),C.push(x),ee.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),R!==ee&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),x.setupLights();const te=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const be=Y.material;if(be)if(Array.isArray(be))for(let Ee=0;Ee<be.length;Ee++){const Ke=be[Ee];St(Ke,ee,Y),te.add(Ke)}else St(be,ee,Y),te.add(be)}),C.pop(),x=null,te},this.compileAsync=function(R,j,ee=null){const te=this.compile(R,j,ee);return new Promise(Y=>{function be(){if(te.forEach(function(Ee){qe.get(Ee).currentProgram.isReady()&&te.delete(Ee)}),te.size===0){Y(R);return}setTimeout(be,10)}xt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let sn=null;function un(R){sn&&sn(R)}function Ir(){ci.stop()}function Sn(){ci.start()}const ci=new $_;ci.setAnimationLoop(un),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(R){sn=R,oe.setAnimationLoop(R),R===null?ci.stop():ci.start()},oe.addEventListener("sessionstart",Ir),oe.addEventListener("sessionend",Sn),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(j),j=oe.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,j,O),x=yt.get(R,C.length),x.init(j),C.push(x),Le.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Q.setFromProjectionMatrix(Le),we=this.localClippingEnabled,he=Ae.init(this.clippingPlanes,we),S=He.get(R,L.length),S.init(),L.push(S),oe.enabled===!0&&oe.isPresenting===!0){const be=w.xr.getDepthSensingMesh();be!==null&&dn(be,j,-1/0,w.sortObjects)}dn(R,j,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(ce,se),At=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,At&&st.addToRenderList(S,R),this.info.render.frame++,he===!0&&Ae.beginShadows();const ee=x.state.shadowsArray;Oe.render(ee,R,j),he===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=S.opaque,Y=S.transmissive;if(x.setupLights(),j.isArrayCamera){const be=j.cameras;if(Y.length>0)for(let Ee=0,Ke=be.length;Ee<Ke;Ee++){const We=be[Ee];Di(te,Y,R,We)}At&&st.render(R);for(let Ee=0,Ke=be.length;Ee<Ke;Ee++){const We=be[Ee];Un(S,R,We,We.viewport)}}else Y.length>0&&Di(te,Y,R,j),At&&st.render(R),Un(S,R,j);O!==null&&(N.updateMultisampleRenderTarget(O),N.updateRenderTargetMipmap(O)),R.isScene===!0&&R.onAfterRender(w,R,j),Nt.resetDefaultState(),P=-1,b=null,C.pop(),C.length>0?(x=C[C.length-1],he===!0&&Ae.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function dn(R,j,ee,te){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)ee=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){te&&it.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Le);const Ee=pe.update(R),Ke=R.material;Ke.visible&&S.push(R,Ee,Ke,ee,it.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const Ee=pe.update(R),Ke=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),it.copy(R.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),it.copy(Ee.boundingSphere.center)),it.applyMatrix4(R.matrixWorld).applyMatrix4(Le)),Array.isArray(Ke)){const We=Ee.groups;for(let dt=0,ft=We.length;dt<ft;dt++){const $e=We[dt],Dt=Ke[$e.materialIndex];Dt&&Dt.visible&&S.push(R,Ee,Dt,ee,it.z,$e)}}else Ke.visible&&S.push(R,Ee,Ke,ee,it.z,null)}}const be=R.children;for(let Ee=0,Ke=be.length;Ee<Ke;Ee++)dn(be[Ee],j,ee,te)}function Un(R,j,ee,te){const Y=R.opaque,be=R.transmissive,Ee=R.transparent;x.setupLightsView(ee),he===!0&&Ae.setGlobalState(w.clippingPlanes,ee),te&&Qe.viewport(k.copy(te)),Y.length>0&&Xn(Y,j,ee),be.length>0&&Xn(be,j,ee),Ee.length>0&&Xn(Ee,j,ee),Qe.buffers.depth.setTest(!0),Qe.buffers.depth.setMask(!0),Qe.buffers.color.setMask(!0),Qe.setPolygonOffset(!1)}function Di(R,j,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[te.id]===void 0&&(x.state.transmissionRenderTarget[te.id]=new Vs(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?$a:Nr,minFilter:Rr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const be=x.state.transmissionRenderTarget[te.id],Ee=te.viewport||k;be.setSize(Ee.z,Ee.w);const Ke=w.getRenderTarget();w.setRenderTarget(be),w.getClearColor(me),fe=w.getClearAlpha(),fe<1&&w.setClearColor(16777215,.5),w.clear(),At&&st.render(ee);const We=w.toneMapping;w.toneMapping=fs;const dt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),x.setupLightsView(te),he===!0&&Ae.setGlobalState(w.clippingPlanes,te),Xn(R,ee,te),N.updateMultisampleRenderTarget(be),N.updateRenderTargetMipmap(be),xt.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let $e=0,Dt=j.length;$e<Dt;$e++){const bt=j[$e],Rt=bt.object,ln=bt.geometry,_t=bt.material,Je=bt.group;if(_t.side===vi&&Rt.layers.test(te.layers)){const ui=_t.side;_t.side=li,_t.needsUpdate=!0,hs(Rt,ee,te,ln,_t,Je),_t.side=ui,_t.needsUpdate=!0,ft=!0}}ft===!0&&(N.updateMultisampleRenderTarget(be),N.updateRenderTargetMipmap(be))}w.setRenderTarget(Ke),w.setClearColor(me,fe),dt!==void 0&&(te.viewport=dt),w.toneMapping=We}function Xn(R,j,ee){const te=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,be=R.length;Y<be;Y++){const Ee=R[Y],Ke=Ee.object,We=Ee.geometry,dt=te===null?Ee.material:te,ft=Ee.group;Ke.layers.test(ee.layers)&&hs(Ke,j,ee,We,dt,ft)}}function hs(R,j,ee,te,Y,be){R.onBeforeRender(w,j,ee,te,Y,be),R.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(w,j,ee,te,R,be),Y.transparent===!0&&Y.side===vi&&Y.forceSinglePass===!1?(Y.side=li,Y.needsUpdate=!0,w.renderBufferDirect(ee,j,te,Y,R,be),Y.side=Lr,Y.needsUpdate=!0,w.renderBufferDirect(ee,j,te,Y,R,be),Y.side=vi):w.renderBufferDirect(ee,j,te,Y,R,be),R.onAfterRender(w,j,ee,te,Y,be)}function Zi(R,j,ee){j.isScene!==!0&&(j=Ht);const te=qe.get(R),Y=x.state.lights,be=x.state.shadowsArray,Ee=Y.state.version,Ke=Ge.getParameters(R,Y.state,be,j,ee),We=Ge.getProgramCacheKey(Ke);let dt=te.programs;te.environment=R.isMeshStandardMaterial?j.environment:null,te.fog=j.fog,te.envMap=(R.isMeshStandardMaterial?J:A).get(R.envMap||te.environment),te.envMapRotation=te.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,dt===void 0&&(R.addEventListener("dispose",nt),dt=new Map,te.programs=dt);let ft=dt.get(We);if(ft!==void 0){if(te.currentProgram===ft&&te.lightsStateVersion===Ee)return Si(R,Ke),ft}else Ke.uniforms=Ge.getUniforms(R),R.onBeforeCompile(Ke,w),ft=Ge.acquireProgram(Ke,We),dt.set(We,ft),te.uniforms=Ke.uniforms;const $e=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($e.clippingPlanes=Ae.uniform),Si(R,Ke),te.needsLights=Qi(R),te.lightsStateVersion=Ee,te.needsLights&&($e.ambientLightColor.value=Y.state.ambient,$e.lightProbe.value=Y.state.probe,$e.directionalLights.value=Y.state.directional,$e.directionalLightShadows.value=Y.state.directionalShadow,$e.spotLights.value=Y.state.spot,$e.spotLightShadows.value=Y.state.spotShadow,$e.rectAreaLights.value=Y.state.rectArea,$e.ltc_1.value=Y.state.rectAreaLTC1,$e.ltc_2.value=Y.state.rectAreaLTC2,$e.pointLights.value=Y.state.point,$e.pointLightShadows.value=Y.state.pointShadow,$e.hemisphereLights.value=Y.state.hemi,$e.directionalShadowMap.value=Y.state.directionalShadowMap,$e.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,$e.spotShadowMap.value=Y.state.spotShadowMap,$e.spotLightMatrix.value=Y.state.spotLightMatrix,$e.spotLightMap.value=Y.state.spotLightMap,$e.pointShadowMap.value=Y.state.pointShadowMap,$e.pointShadowMatrix.value=Y.state.pointShadowMatrix),te.currentProgram=ft,te.uniformsList=null,ft}function Ur(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Uc.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Si(R,j){const ee=qe.get(R);ee.outputColorSpace=j.outputColorSpace,ee.batching=j.batching,ee.batchingColor=j.batchingColor,ee.instancing=j.instancing,ee.instancingColor=j.instancingColor,ee.instancingMorph=j.instancingMorph,ee.skinning=j.skinning,ee.morphTargets=j.morphTargets,ee.morphNormals=j.morphNormals,ee.morphColors=j.morphColors,ee.morphTargetsCount=j.morphTargetsCount,ee.numClippingPlanes=j.numClippingPlanes,ee.numIntersection=j.numClipIntersection,ee.vertexAlphas=j.vertexAlphas,ee.vertexTangents=j.vertexTangents,ee.toneMapping=j.toneMapping}function Fr(R,j,ee,te,Y){j.isScene!==!0&&(j=Ht),N.resetTextureUnits();const be=j.fog,Ee=te.isMeshStandardMaterial?j.environment:null,Ke=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ei,We=(te.isMeshStandardMaterial?J:A).get(te.envMap||Ee),dt=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,ft=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),$e=!!ee.morphAttributes.position,Dt=!!ee.morphAttributes.normal,bt=!!ee.morphAttributes.color;let Rt=fs;te.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Rt=w.toneMapping);const ln=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,_t=ln!==void 0?ln.length:0,Je=qe.get(te),ui=x.state.lights;if(he===!0&&(we===!0||R!==b)){const pt=R===b&&te.id===P;Ae.setState(te,R,pt)}let Ft=!1;te.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==ui.state.version||Je.outputColorSpace!==Ke||Y.isBatchedMesh&&Je.batching===!1||!Y.isBatchedMesh&&Je.batching===!0||Y.isBatchedMesh&&Je.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Je.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Je.instancing===!1||!Y.isInstancedMesh&&Je.instancing===!0||Y.isSkinnedMesh&&Je.skinning===!1||!Y.isSkinnedMesh&&Je.skinning===!0||Y.isInstancedMesh&&Je.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Je.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Je.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Je.instancingMorph===!1&&Y.morphTexture!==null||Je.envMap!==We||te.fog===!0&&Je.fog!==be||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ae.numPlanes||Je.numIntersection!==Ae.numIntersection)||Je.vertexAlphas!==dt||Je.vertexTangents!==ft||Je.morphTargets!==$e||Je.morphNormals!==Dt||Je.morphColors!==bt||Je.toneMapping!==Rt||Je.morphTargetsCount!==_t)&&(Ft=!0):(Ft=!0,Je.__version=te.version);let $=Je.currentProgram;Ft===!0&&($=Zi(te,j,Y));let _e=!1,ve=!1,Ue=!1;const je=$.getUniforms(),Mt=Je.uniforms;if(Qe.useProgram($.program)&&(_e=!0,ve=!0,Ue=!0),te.id!==P&&(P=te.id,ve=!0),_e||b!==R){Qe.buffers.depth.getReversed()?(Se.copy(R.projectionMatrix),ty(Se),ny(Se),je.setValue(X,"projectionMatrix",Se)):je.setValue(X,"projectionMatrix",R.projectionMatrix),je.setValue(X,"viewMatrix",R.matrixWorldInverse);const rt=je.map.cameraPosition;rt!==void 0&&rt.setValue(X,ze.setFromMatrixPosition(R.matrixWorld)),Ct.logarithmicDepthBuffer&&je.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&je.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,ve=!0,Ue=!0)}if(Y.isSkinnedMesh){je.setOptional(X,Y,"bindMatrix"),je.setOptional(X,Y,"bindMatrixInverse");const pt=Y.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),je.setValue(X,"boneTexture",pt.boneTexture,N))}Y.isBatchedMesh&&(je.setOptional(X,Y,"batchingTexture"),je.setValue(X,"batchingTexture",Y._matricesTexture,N),je.setOptional(X,Y,"batchingIdTexture"),je.setValue(X,"batchingIdTexture",Y._indirectTexture,N),je.setOptional(X,Y,"batchingColorTexture"),Y._colorsTexture!==null&&je.setValue(X,"batchingColorTexture",Y._colorsTexture,N));const tt=ee.morphAttributes;if((tt.position!==void 0||tt.normal!==void 0||tt.color!==void 0)&&lt.update(Y,ee,$),(ve||Je.receiveShadow!==Y.receiveShadow)&&(Je.receiveShadow=Y.receiveShadow,je.setValue(X,"receiveShadow",Y.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Mt.envMap.value=We,Mt.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&j.environment!==null&&(Mt.envMapIntensity.value=j.environmentIntensity),ve&&(je.setValue(X,"toneMappingExposure",w.toneMappingExposure),Je.needsLights&&ps(Mt,Ue),be&&te.fog===!0&&Ie.refreshFogUniforms(Mt,be),Ie.refreshMaterialUniforms(Mt,te,H,ue,x.state.transmissionRenderTarget[R.id]),Uc.upload(X,Ur(Je),Mt,N)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Uc.upload(X,Ur(Je),Mt,N),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&je.setValue(X,"center",Y.center),je.setValue(X,"modelViewMatrix",Y.modelViewMatrix),je.setValue(X,"normalMatrix",Y.normalMatrix),je.setValue(X,"modelMatrix",Y.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const pt=te.uniformsGroups;for(let rt=0,vt=pt.length;rt<vt;rt++){const Rn=pt[rt];G.update(Rn,$),G.bind(Rn,$)}}return $}function ps(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Qi(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(R,j,ee){qe.get(R.texture).__webglTexture=j,qe.get(R.depthTexture).__webglTexture=ee;const te=qe.get(R);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,j){const ee=qe.get(R);ee.__webglFramebuffer=j,ee.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,ee=0){O=R,U=j,I=ee;let te=!0,Y=null,be=!1,Ee=!1;if(R){const We=qe.get(R);if(We.__useDefaultFramebuffer!==void 0)Qe.bindFramebuffer(X.FRAMEBUFFER,null),te=!1;else if(We.__webglFramebuffer===void 0)N.setupRenderTarget(R);else if(We.__hasExternalTextures)N.rebindTextures(R,qe.get(R.texture).__webglTexture,qe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $e=R.depthTexture;if(We.__boundDepthTexture!==$e){if($e!==null&&qe.has($e)&&(R.width!==$e.image.width||R.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(R)}}const dt=R.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(Ee=!0);const ft=qe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ft[j])?Y=ft[j][ee]:Y=ft[j],be=!0):R.samples>0&&N.useMultisampledRTT(R)===!1?Y=qe.get(R).__webglMultisampledFramebuffer:Array.isArray(ft)?Y=ft[ee]:Y=ft,k.copy(R.viewport),ae.copy(R.scissor),ne=R.scissorTest}else k.copy(F).multiplyScalar(H).floor(),ae.copy(ie).multiplyScalar(H).floor(),ne=Be;if(Qe.bindFramebuffer(X.FRAMEBUFFER,Y)&&te&&Qe.drawBuffers(R,Y),Qe.viewport(k),Qe.scissor(ae),Qe.setScissorTest(ne),be){const We=qe.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+j,We.__webglTexture,ee)}else if(Ee){const We=qe.get(R.texture),dt=j||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,We.__webglTexture,ee||0,dt)}P=-1},this.readRenderTargetPixels=function(R,j,ee,te,Y,be,Ee){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ke=Ke[Ee]),Ke){Qe.bindFramebuffer(X.FRAMEBUFFER,Ke);try{const We=R.texture,dt=We.format,ft=We.type;if(!Ct.textureFormatReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-te&&ee>=0&&ee<=R.height-Y&&X.readPixels(j,ee,te,Y,ct.convert(dt),ct.convert(ft),be)}finally{const We=O!==null?qe.get(O).__webglFramebuffer:null;Qe.bindFramebuffer(X.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(R,j,ee,te,Y,be,Ee){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ke=Ke[Ee]),Ke){const We=R.texture,dt=We.format,ft=We.type;if(!Ct.textureFormatReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=R.width-te&&ee>=0&&ee<=R.height-Y){Qe.bindFramebuffer(X.FRAMEBUFFER,Ke);const $e=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,$e),X.bufferData(X.PIXEL_PACK_BUFFER,be.byteLength,X.STREAM_READ),X.readPixels(j,ee,te,Y,ct.convert(dt),ct.convert(ft),0);const Dt=O!==null?qe.get(O).__webglFramebuffer:null;Qe.bindFramebuffer(X.FRAMEBUFFER,Dt);const bt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await ey(X,bt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,$e),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,be),X.deleteBuffer($e),X.deleteSync(bt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,j=null,ee=0){R.isTexture!==!0&&(za("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,R=arguments[1]);const te=Math.pow(2,-ee),Y=Math.floor(R.image.width*te),be=Math.floor(R.image.height*te),Ee=j!==null?j.x:0,Ke=j!==null?j.y:0;N.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,ee,0,0,Ee,Ke,Y,be),Qe.unbindTexture()},this.copyTextureToTexture=function(R,j,ee=null,te=null,Y=0){R.isTexture!==!0&&(za("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,R=arguments[1],j=arguments[2],Y=arguments[3]||0,ee=null);let be,Ee,Ke,We,dt,ft,$e,Dt,bt;const Rt=R.isCompressedTexture?R.mipmaps[Y]:R.image;ee!==null?(be=ee.max.x-ee.min.x,Ee=ee.max.y-ee.min.y,Ke=ee.isBox3?ee.max.z-ee.min.z:1,We=ee.min.x,dt=ee.min.y,ft=ee.isBox3?ee.min.z:0):(be=Rt.width,Ee=Rt.height,Ke=Rt.depth||1,We=0,dt=0,ft=0),te!==null?($e=te.x,Dt=te.y,bt=te.z):($e=0,Dt=0,bt=0);const ln=ct.convert(j.format),_t=ct.convert(j.type);let Je;j.isData3DTexture?(N.setTexture3D(j,0),Je=X.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(N.setTexture2DArray(j,0),Je=X.TEXTURE_2D_ARRAY):(N.setTexture2D(j,0),Je=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,j.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,j.unpackAlignment);const ui=X.getParameter(X.UNPACK_ROW_LENGTH),Ft=X.getParameter(X.UNPACK_IMAGE_HEIGHT),$=X.getParameter(X.UNPACK_SKIP_PIXELS),_e=X.getParameter(X.UNPACK_SKIP_ROWS),ve=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Rt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Rt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,We),X.pixelStorei(X.UNPACK_SKIP_ROWS,dt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ft);const Ue=R.isDataArrayTexture||R.isData3DTexture,je=j.isDataArrayTexture||j.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Mt=qe.get(R),tt=qe.get(j),pt=qe.get(Mt.__renderTarget),rt=qe.get(tt.__renderTarget);Qe.bindFramebuffer(X.READ_FRAMEBUFFER,pt.__webglFramebuffer),Qe.bindFramebuffer(X.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let vt=0;vt<Ke;vt++)Ue&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.get(R).__webglTexture,Y,ft+vt),R.isDepthTexture?(je&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.get(j).__webglTexture,Y,bt+vt),X.blitFramebuffer(We,dt,be,Ee,$e,Dt,be,Ee,X.DEPTH_BUFFER_BIT,X.NEAREST)):je?X.copyTexSubImage3D(Je,Y,$e,Dt,bt+vt,We,dt,be,Ee):X.copyTexSubImage2D(Je,Y,$e,Dt,bt+vt,We,dt,be,Ee);Qe.bindFramebuffer(X.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else je?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(Je,Y,$e,Dt,bt,be,Ee,Ke,ln,_t,Rt.data):j.isCompressedArrayTexture?X.compressedTexSubImage3D(Je,Y,$e,Dt,bt,be,Ee,Ke,ln,Rt.data):X.texSubImage3D(Je,Y,$e,Dt,bt,be,Ee,Ke,ln,_t,Rt):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Y,$e,Dt,be,Ee,ln,_t,Rt.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Y,$e,Dt,Rt.width,Rt.height,ln,Rt.data):X.texSubImage2D(X.TEXTURE_2D,Y,$e,Dt,be,Ee,ln,_t,Rt);X.pixelStorei(X.UNPACK_ROW_LENGTH,ui),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ft),X.pixelStorei(X.UNPACK_SKIP_PIXELS,$),X.pixelStorei(X.UNPACK_SKIP_ROWS,_e),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ve),Y===0&&j.generateMipmaps&&X.generateMipmap(Je),Qe.unbindTexture()},this.copyTextureToTexture3D=function(R,j,ee=null,te=null,Y=0){return R.isTexture!==!0&&(za("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,R=arguments[2],j=arguments[3],Y=arguments[4]||0),za('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,j,ee,te,Y)},this.initRenderTarget=function(R){qe.get(R).__webglFramebuffer===void 0&&N.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?N.setTextureCube(R,0):R.isData3DTexture?N.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?N.setTexture2DArray(R,0):N.setTexture2D(R,0),Qe.unbindTexture()},this.resetState=function(){U=0,I=0,O=null,Qe.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ut._getUnpackColorSpace()}}class $g extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sr,this.environmentIntensity=1,this.environmentRotation=new sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class dw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zf,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zn=new V;class vh{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Zn.fromBufferAttribute(this,t),Zn.applyMatrix4(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zn.fromBufferAttribute(this,t),Zn.applyNormalMatrix(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zn.fromBufferAttribute(this,t),Zn.transformDirection(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Xi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),s=Gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),s=Gt(s,this.array),a=Gt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new In(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Zg=new V,Qg=new zt,Jg=new zt,fw=new V,e_=new wt,yc=new V,rf=new or,t_=new wt,sf=new qo;class hw extends Gn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zm,this.bindMatrix=new wt,this.bindMatrixInverse=new wt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,yc),this.boundingBox.expandByPoint(yc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new or),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,yc),this.boundingSphere.expandByPoint(yc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rf.copy(this.boundingSphere),rf.applyMatrix4(s),e.ray.intersectsSphere(rf)!==!1&&(t_.copy(s).invert(),sf.copy(e.ray).applyMatrix4(t_),!(this.boundingBox!==null&&sf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,sf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new zt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Tx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Qg.fromBufferAttribute(s.attributes.skinIndex,e),Jg.fromBufferAttribute(s.attributes.skinWeight,e),Zg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=Jg.getComponent(a);if(c!==0){const u=Qg.getComponent(a);e_.multiplyMatrices(i.bones[u].matrixWorld,i.boneInverses[u]),t.addScaledVector(fw.copy(Zg).applyMatrix4(e_),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class n0 extends nn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class i0 extends _n{constructor(e=null,t=1,i=1,s,a,c,u,f,h=Jn,m=Jn,g,_){super(null,c,u,f,h,m,s,a,g,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const n_=new wt,pw=new wt;class xh{constructor(e=[],t=[]){this.uuid=$i(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new wt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new wt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const u=e[a]?e[a].matrixWorld:pw;n_.multiplyMatrices(u,t[a]),n_.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new xh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new i0(t,e,e,Li,qi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const a=e.bones[i];let c=t[a];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),c=new n0),this.bones.push(c),this.boneInverses.push(new wt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const c=t[s];e.bones.push(c.uuid);const u=i[s];e.boneInverses.push(u.toArray())}return e}}class Jf extends In{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ro=new wt,i_=new wt,Sc=[],r_=new yi,mw=new wt,Ia=new Gn,Ua=new or;class gw extends Gn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,mw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ro),r_.copy(e.boundingBox).applyMatrix4(Ro),this.boundingBox.union(r_)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new or),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ro),Ua.copy(e.boundingSphere).applyMatrix4(Ro),this.boundingSphere.union(Ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let u=0;u<i.length;u++)i[u]=s[c+u]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ia.geometry=this.geometry,Ia.material=this.material,Ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ua.copy(this.boundingSphere),Ua.applyMatrix4(i),e.ray.intersectsSphere(Ua)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Ro),i_.multiplyMatrices(i,Ro),Ia.matrixWorld=i_,Ia.raycast(e,Sc);for(let c=0,u=Sc.length;c<u;c++){const f=Sc[c];f.instanceId=a,f.object=this,t.push(f)}Sc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new i0(new Float32Array(s*this.count),s,this.count,uh,qi));const a=this.morphTexture.source.data.data;let c=0;for(let h=0;h<i.length;h++)c+=i[h];const u=this.geometry.morphTargetsRelative?1:1-c,f=s*e;a[f]=u,a.set(i,f+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Gs extends Ni{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kc=new V,Bc=new V,s_=new wt,Fa=new qo,Mc=new or,of=new V,o_=new V;class Ka extends nn{constructor(e=new jn,t=new Gs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)kc.fromBufferAttribute(t,s-1),Bc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=kc.distanceTo(Bc);e.setAttribute("lineDistance",new Wn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mc.copy(i.boundingSphere),Mc.applyMatrix4(s),Mc.radius+=a,e.ray.intersectsSphere(Mc)===!1)return;s_.copy(s).invert(),Fa.copy(e.ray).applyMatrix4(s_);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=this.isLineSegments?2:1,m=i.index,_=i.attributes.position;if(m!==null){const y=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let E=y,S=M-1;E<S;E+=h){const x=m.getX(E),L=m.getX(E+1),C=Ec(this,e,Fa,f,x,L);C&&t.push(C)}if(this.isLineLoop){const E=m.getX(M-1),S=m.getX(y),x=Ec(this,e,Fa,f,E,S);x&&t.push(x)}}else{const y=Math.max(0,c.start),M=Math.min(_.count,c.start+c.count);for(let E=y,S=M-1;E<S;E+=h){const x=Ec(this,e,Fa,f,E,E+1);x&&t.push(x)}if(this.isLineLoop){const E=Ec(this,e,Fa,f,M-1,y);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Ec(o,e,t,i,s,a){const c=o.geometry.attributes.position;if(kc.fromBufferAttribute(c,s),Bc.fromBufferAttribute(c,a),t.distanceSqToSegment(kc,Bc,of,o_)>i)return;of.applyMatrix4(o.matrixWorld);const f=e.ray.origin.distanceTo(of);if(!(f<e.near||f>e.far))return{distance:f,point:o_.clone().applyMatrix4(o.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:o}}const a_=new V,l_=new V;class Xc extends Ka{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)a_.fromBufferAttribute(t,s),l_.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+a_.distanceTo(l_);e.setAttribute("lineDistance",new Wn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _w extends Ka{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class r0 extends Ni{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const c_=new wt,eh=new qo,Tc=new or,wc=new V;class vw extends nn{constructor(e=new jn,t=new r0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tc.copy(i.boundingSphere),Tc.applyMatrix4(s),Tc.radius+=a,e.ray.intersectsSphere(Tc)===!1)return;c_.copy(s).invert(),eh.copy(e.ray).applyMatrix4(c_);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=i.index,g=i.attributes.position;if(h!==null){const _=Math.max(0,c.start),y=Math.min(h.count,c.start+c.count);for(let M=_,E=y;M<E;M++){const S=h.getX(M);wc.fromBufferAttribute(g,S),u_(wc,S,f,s,e,t,this)}}else{const _=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let M=_,E=y;M<E;M++)wc.fromBufferAttribute(g,M),u_(wc,M,f,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function u_(o,e,t,i,s,a,c){const u=eh.distanceSqToPoint(o);if(u<t){const f=new V;eh.closestPointToPoint(o,f),f.applyMatrix4(i);const h=s.ray.origin.distanceTo(f);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(u),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class xw extends _n{constructor(e,t,i,s,a,c,u,f,h){super(e,t,i,s,a,c,u,f,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zc extends jn{constructor(e=1,t=32,i=16,s=0,a=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:a,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const f=Math.min(c+u,Math.PI);let h=0;const m=[],g=new V,_=new V,y=[],M=[],E=[],S=[];for(let x=0;x<=i;x++){const L=[],C=x/i;let w=0;x===0&&c===0?w=.5/t:x===i&&f===Math.PI&&(w=-.5/t);for(let z=0;z<=t;z++){const U=z/t;g.x=-e*Math.cos(s+U*a)*Math.sin(c+C*u),g.y=e*Math.cos(c+C*u),g.z=e*Math.sin(s+U*a)*Math.sin(c+C*u),M.push(g.x,g.y,g.z),_.copy(g).normalize(),E.push(_.x,_.y,_.z),S.push(U+w,1-C),L.push(h++)}m.push(L)}for(let x=0;x<i;x++)for(let L=0;L<t;L++){const C=m[x][L+1],w=m[x][L],z=m[x+1][L],U=m[x+1][L+1];(x!==0||c>0)&&y.push(C,w,U),(x!==i-1||f<Math.PI)&&y.push(w,z,U)}this.setIndex(y),this.setAttribute("position",new Wn(M,3)),this.setAttribute("normal",new Wn(E,3)),this.setAttribute("uv",new Wn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yh extends Ni{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ar extends yh{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class yw extends Ni{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Sw extends Ni{static get type(){return"MeshMatcapMaterial"}constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.color=new ut(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Ac(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function Mw(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Ew(o){function e(s,a){return o[s]-o[a]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function d_(o,e,t){const i=o.length,s=new o.constructor(i);for(let a=0,c=0;c!==i;++a){const u=t[a]*e;for(let f=0;f!==e;++f)s[c++]=o[u+f]}return s}function s0(o,e,t,i){let s=1,a=o[0];for(;a!==void 0&&a[i]===void 0;)a=o[s++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push.apply(t,c)),a=o[s++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=o[s++];while(a!==void 0)}class Ja{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<s)){for(let u=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(a=s,s=t[++i],e<s)break t}c=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(i=2,a=u);for(let f=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(s=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const u=i+c>>>1;e<t[u]?c=u:i=u+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let c=0;c!==s;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Tw extends Ja{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qm,endingEnd:Qm}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,c=e+1,u=s[a],f=s[c];if(u===void 0)switch(this.getSettings_().endingStart){case Jm:a=e,u=2*t-i;break;case eg:a=s.length-2,u=t+s[a]-s[a+1];break;default:a=e,u=i}if(f===void 0)switch(this.getSettings_().endingEnd){case Jm:c=e,f=2*i-t;break;case eg:c=1,f=i+s[1]-s[0];break;default:c=e-1,f=t}const h=(i-t)*.5,m=this.valueSize;this._weightPrev=h/(t-u),this._weightNext=h/(f-i),this._offsetPrev=a*m,this._offsetNext=c*m}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=e*u,h=f-u,m=this._offsetPrev,g=this._offsetNext,_=this._weightPrev,y=this._weightNext,M=(i-t)/(s-t),E=M*M,S=E*M,x=-_*S+2*_*E-_*M,L=(1+_)*S+(-1.5-2*_)*E+(-.5+_)*M+1,C=(-1-y)*S+(1.5+y)*E+.5*M,w=y*S-y*E;for(let z=0;z!==u;++z)a[z]=x*c[m+z]+L*c[h+z]+C*c[f+z]+w*c[g+z];return a}}class ww extends Ja{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=e*u,h=f-u,m=(i-t)/(s-t),g=1-m;for(let _=0;_!==u;++_)a[_]=c[h+_]*g+c[f+_]*m;return a}}class Aw extends Ja{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class lr{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ac(t,this.TimeBufferType),this.values=Ac(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ac(e.times,Array),values:Ac(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Aw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ww(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tw(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xa:t=this.InterpolantFactoryMethodDiscrete;break;case Ya:t=this.InterpolantFactoryMethodLinear;break;case Cd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xa;case this.InterpolantFactoryMethodLinear:return Ya;case this.InterpolantFactoryMethodSmooth:return Cd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,c=s-1;for(;a!==s&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);const u=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==a;u++){const f=i[u];if(typeof f=="number"&&isNaN(f)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,f),e=!1;break}if(c!==null&&c>f){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,f,c),e=!1;break}c=f}if(s!==void 0&&Mw(s))for(let u=0,f=s.length;u!==f;++u){const h=s[u];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Cd,a=e.length-1;let c=1;for(let u=1;u<a;++u){let f=!1;const h=e[u],m=e[u+1];if(h!==m&&(u!==1||h!==e[0]))if(s)f=!0;else{const g=u*i,_=g-i,y=g+i;for(let M=0;M!==i;++M){const E=t[g+M];if(E!==t[_+M]||E!==t[y+M]){f=!0;break}}}if(f){if(u!==c){e[c]=e[u];const g=u*i,_=c*i;for(let y=0;y!==i;++y)t[_+y]=t[g+y]}++c}}if(a>0){e[c]=e[a];for(let u=a*i,f=c*i,h=0;h!==i;++h)t[f+h]=t[u+h];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}lr.prototype.TimeBufferType=Float32Array;lr.prototype.ValueBufferType=Float32Array;lr.prototype.DefaultInterpolation=Ya;class $o extends lr{constructor(e,t,i){super(e,t,i)}}$o.prototype.ValueTypeName="bool";$o.prototype.ValueBufferType=Array;$o.prototype.DefaultInterpolation=Xa;$o.prototype.InterpolantFactoryMethodLinear=void 0;$o.prototype.InterpolantFactoryMethodSmooth=void 0;class o0 extends lr{}o0.prototype.ValueTypeName="color";class jo extends lr{}jo.prototype.ValueTypeName="number";class bw extends Ja{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=(i-t)/(s-t);let h=e*u;for(let m=h+u;h!==m;h+=4)rr.slerpFlat(a,0,c,h-u,c,h,f);return a}}class Xo extends lr{InterpolantFactoryMethodLinear(e){return new bw(this.times,this.values,this.getValueSize(),e)}}Xo.prototype.ValueTypeName="quaternion";Xo.prototype.InterpolantFactoryMethodSmooth=void 0;class Zo extends lr{constructor(e,t,i){super(e,t,i)}}Zo.prototype.ValueTypeName="string";Zo.prototype.ValueBufferType=Array;Zo.prototype.DefaultInterpolation=Xa;Zo.prototype.InterpolantFactoryMethodLinear=void 0;Zo.prototype.InterpolantFactoryMethodSmooth=void 0;class Yo extends lr{}Yo.prototype.ValueTypeName="vector";class Rw{constructor(e="",t=-1,i=[],s=wx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=$i(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let c=0,u=i.length;c!==u;++c)t.push(Pw(i[c]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,c=i.length;a!==c;++a)t.push(lr.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,c=[];for(let u=0;u<a;u++){let f=[],h=[];f.push((u+a-1)%a,u,(u+1)%a),h.push(0,1,0);const m=Ew(f);f=d_(f,1,m),h=d_(h,1,m),!s&&f[0]===0&&(f.push(a),h.push(h[0])),c.push(new jo(".morphTargetInfluences["+t[u].name+"]",f,h).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,f=e.length;u<f;u++){const h=e[u],m=h.name.match(a);if(m&&m.length>1){const g=m[1];let _=s[g];_||(s[g]=_=[]),_.push(h)}}const c=[];for(const u in s)c.push(this.CreateFromMorphTargetSequence(u,s[u],t,i));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(g,_,y,M,E){if(y.length!==0){const S=[],x=[];s0(y,S,x,M),S.length!==0&&E.push(new g(_,S,x))}},s=[],a=e.name||"default",c=e.fps||30,u=e.blendMode;let f=e.length||-1;const h=e.hierarchy||[];for(let g=0;g<h.length;g++){const _=h[g].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const y={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let E=0;E<_[M].morphTargets.length;E++)y[_[M].morphTargets[E]]=-1;for(const E in y){const S=[],x=[];for(let L=0;L!==_[M].morphTargets.length;++L){const C=_[M];S.push(C.time),x.push(C.morphTarget===E?1:0)}s.push(new jo(".morphTargetInfluence["+E+"]",S,x))}f=y.length*c}else{const y=".bones["+t[g].name+"]";i(Yo,y+".position",_,"pos",s),i(Xo,y+".quaternion",_,"rot",s),i(Yo,y+".scale",_,"scl",s)}}return s.length===0?null:new this(a,f,s,u)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Cw(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return jo;case"vector":case"vector2":case"vector3":case"vector4":return Yo;case"color":return o0;case"quaternion":return Xo;case"bool":case"boolean":return $o;case"string":return Zo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Pw(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Cw(o.type);if(o.times===void 0){const t=[],i=[];s0(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const us={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Lw{constructor(e,t,i){const s=this;let a=!1,c=0,u=0,f;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(m){u++,a===!1&&s.onStart!==void 0&&s.onStart(m,c,u),a=!0},this.itemEnd=function(m){c++,s.onProgress!==void 0&&s.onProgress(m,c,u),c===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return f?f(m):m},this.setURLModifier=function(m){return f=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){const g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,_=h.length;g<_;g+=2){const y=h[g],M=h[g+1];if(y.global&&(y.lastIndex=0),y.test(m))return M}return null}}}const Nw=new Lw;class Qo{constructor(e){this.manager=e!==void 0?e:Nw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Tr={};class Dw extends Error{constructor(e,t){super(e),this.response=t}}class a0 extends Qo{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=us.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Tr[e]!==void 0){Tr[e].push({onLoad:t,onProgress:i,onError:s});return}Tr[e]=[],Tr[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,f=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=Tr[e],g=h.body.getReader(),_=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),y=_?parseInt(_):0,M=y!==0;let E=0;const S=new ReadableStream({start(x){L();function L(){g.read().then(({done:C,value:w})=>{if(C)x.close();else{E+=w.byteLength;const z=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:y});for(let U=0,I=m.length;U<I;U++){const O=m[U];O.onProgress&&O.onProgress(z)}x.enqueue(w),L()}},C=>{x.error(C)})}}});return new Response(S)}else throw new Dw(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(f){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,u));case"json":return h.json();default:if(u===void 0)return h.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),_=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(_);return h.arrayBuffer().then(M=>y.decode(M))}}}).then(h=>{us.add(e,h);const m=Tr[e];delete Tr[e];for(let g=0,_=m.length;g<_;g++){const y=m[g];y.onLoad&&y.onLoad(h)}}).catch(h=>{const m=Tr[e];if(m===void 0)throw this.manager.itemError(e),h;delete Tr[e];for(let g=0,_=m.length;g<_;g++){const y=m[g];y.onError&&y.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Iw extends Qo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=us.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const u=qa("img");function f(){m(),us.add(e,this),t&&t(this),a.manager.itemEnd(e)}function h(g){m(),s&&s(g),a.manager.itemError(e),a.manager.itemEnd(e)}function m(){u.removeEventListener("load",f,!1),u.removeEventListener("error",h,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(e),u.src=e,u}}class Uw extends Qo{constructor(e){super(e)}load(e,t,i,s){const a=new _n,c=new Iw(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class Yc extends nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const af=new wt,f_=new V,h_=new V;class Sh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gh,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;f_.setFromMatrixPosition(e.matrixWorld),t.position.copy(f_),h_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(h_),t.updateMatrixWorld(),af.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(af),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(af)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fw extends Sh{constructor(){super(new Vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Go*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ow extends Yc{constructor(e,t,i=0,s=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.distance=i,this.angle=s,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new Fw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const p_=new wt,Oa=new V,lf=new V;class kw extends Sh{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new zt(2,1,1,1),new zt(0,1,1,1),new zt(3,1,1,1),new zt(1,1,1,1),new zt(3,0,1,1),new zt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Oa.setFromMatrixPosition(e.matrixWorld),i.position.copy(Oa),lf.copy(i.position),lf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(lf),i.updateMatrixWorld(),s.makeTranslation(-Oa.x,-Oa.y,-Oa.z),p_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(p_)}}class Bw extends Yc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new kw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zw extends Sh{constructor(){super(new Wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class th extends Yc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new zw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hw extends Yc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wa{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Vw extends Qo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=us.get(e);if(c!==void 0){if(a.manager.itemStart(e),c.then){c.then(h=>{t&&t(h),a.manager.itemEnd(e)}).catch(h=>{s&&s(h)});return}return setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c}const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader;const f=fetch(e,u).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(h){return us.add(e,h),t&&t(h),a.manager.itemEnd(e),h}).catch(function(h){s&&s(h),us.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});us.add(e,f),a.manager.itemStart(e)}}const Mh="\\[\\]\\.:\\/",Gw=new RegExp("["+Mh+"]","g"),Eh="[^"+Mh+"]",Ww="[^"+Mh.replace("\\.","")+"]",jw=/((?:WC+[\/:])*)/.source.replace("WC",Eh),Xw=/(WCOD+)?/.source.replace("WCOD",Ww),Yw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eh),qw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eh),Kw=new RegExp("^"+jw+Xw+Yw+qw+"$"),$w=["material","materials","bones","map"];class Zw{constructor(e,t,i){const s=i||Wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Wt{constructor(e,t,i){this.path=t,this.parsedPath=i||Wt.parseTrackName(t),this.node=Wt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Wt.Composite(e,t,i):new Wt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gw,"")}static parseTrackName(e){const t=Kw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);$w.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const f=i(u.children);if(f)return f}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Wt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===h){h=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const c=e[s];if(c===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Wt.Composite=Zw;Wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Wt.prototype.GetterByBindingType=[Wt.prototype._getValue_direct,Wt.prototype._getValue_array,Wt.prototype._getValue_arrayElement,Wt.prototype._getValue_toArray];Wt.prototype.SetterByBindingTypeAndVersioning=[[Wt.prototype._setValue_direct,Wt.prototype._setValue_direct_setNeedsUpdate,Wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_array,Wt.prototype._setValue_array_setNeedsUpdate,Wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_arrayElement,Wt.prototype._setValue_arrayElement_setNeedsUpdate,Wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_fromArray,Wt.prototype._setValue_fromArray_setNeedsUpdate,Wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const m_=new wt;class Qw{constructor(e,t,i=0,s=1/0){this.ray=new qo(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new mh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return m_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(m_),this}intersectObject(e,t=!0,i=[]){return nh(e,this,i,t),i.sort(g_),i}intersectObjects(e,t=!0,i=[]){for(let s=0,a=e.length;s<a;s++)nh(e[s],this,i,t);return i.sort(g_),i}}function g_(o,e){return o.distance-e.distance}function nh(o,e,t,i){let s=!0;if(o.layers.test(e.layers)&&o.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const a=o.children;for(let c=0,u=a.length;c<u;c++)nh(a[c],e,t,!0)}}class __{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Dn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Jw extends Xc{constructor(e=10,t=10,i=4473924,s=8947848){i=new ut(i),s=new ut(s);const a=t/2,c=e/t,u=e/2,f=[],h=[];for(let _=0,y=0,M=-u;_<=t;_++,M+=c){f.push(-u,0,M,u,0,M),f.push(M,0,-u,M,0,u);const E=_===a?i:s;E.toArray(h,y),y+=3,E.toArray(h,y),y+=3,E.toArray(h,y),y+=3,E.toArray(h,y),y+=3}const m=new jn;m.setAttribute("position",new Wn(f,3)),m.setAttribute("color",new Wn(h,3));const g=new Gs({vertexColors:!0,toneMapped:!1});super(m,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const bc=new yi;class eA extends Xc{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),a=new jn;a.setIndex(new In(i,1)),a.setAttribute("position",new In(s,3)),super(a,new Gs({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&bc.setFromObject(this.object),bc.isEmpty())return;const t=bc.min,i=bc.max,s=this.geometry.attributes.position,a=s.array;a[0]=i.x,a[1]=i.y,a[2]=i.z,a[3]=t.x,a[4]=i.y,a[5]=i.z,a[6]=t.x,a[7]=t.y,a[8]=i.z,a[9]=i.x,a[10]=t.y,a[11]=i.z,a[12]=i.x,a[13]=i.y,a[14]=t.z,a[15]=t.x,a[16]=i.y,a[17]=t.z,a[18]=t.x,a[19]=t.y,a[20]=t.z,a[21]=i.x,a[22]=t.y,a[23]=t.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class tA extends Xc{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new jn;s.setAttribute("position",new Wn(t,3)),s.setAttribute("color",new Wn(i,3));const a=new Gs({vertexColors:!0,toneMapped:!1});super(s,a),this.type="AxesHelper"}setColors(e,t,i){const s=new ut,a=this.geometry.attributes.color.array;return s.set(e),s.toArray(a,0),s.toArray(a,3),s.set(t),s.toArray(a,6),s.toArray(a,9),s.set(i),s.toArray(a,12),s.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class nA extends Ws{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oh);const v_={type:"change"},Th={type:"start"},l0={type:"end"},Rc=new qo,x_=new br,iA=Math.cos(70*Po.DEG2RAD),gn=new V,ai=2*Math.PI,qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},cf=1e-6;class rA extends nA{constructor(e,t=null){super(e,t),this.state=qt.NONE,this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:No.ROTATE,MIDDLE:No.DOLLY,RIGHT:No.PAN},this.touches={ONE:Co.ROTATE,TWO:Co.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new rr,this._lastTargetPosition=new V,this._quat=new rr().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new __,this._sphericalDelta=new __,this._scale=1,this._panOffset=new V,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new V,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=oA.bind(this),this._onPointerDown=sA.bind(this),this._onPointerUp=aA.bind(this),this._onContextMenu=pA.bind(this),this._onMouseWheel=uA.bind(this),this._onKeyDown=dA.bind(this),this._onTouchStart=fA.bind(this),this._onTouchMove=hA.bind(this),this._onMouseDown=lA.bind(this),this._onMouseMove=cA.bind(this),this._interceptControlDown=mA.bind(this),this._interceptControlUp=gA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(v_),this.update(),this.state=qt.NONE}update(e=null){const t=this.object.position;gn.copy(t).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=ai:i>Math.PI&&(i-=ai),s<-Math.PI?s+=ai:s>Math.PI&&(s-=ai),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),t.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const u=gn.length();c=this._clampDistance(u*this._scale);const f=u-c;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),a=!!f}else if(this.object.isOrthographicCamera){const u=new V(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=f!==this.object.zoom;const h=new V(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(u),this.object.updateMatrixWorld(),c=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Rc.origin.copy(this.object.position),Rc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Rc.direction))<iA?this.object.lookAt(this.target):(x_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Rc.intersectPlane(x_,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>cf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>cf||this._lastTargetPosition.distanceToSquared(this.target)>cf?(this.dispatchEvent(v_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ai/60*this.autoRotateSpeed*e:ai/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){gn.setFromMatrixColumn(t,0),gn.multiplyScalar(-e),this._panOffset.add(gn)}_panUp(e,t){this.screenSpacePanning===!0?gn.setFromMatrixColumn(t,1):(gn.setFromMatrixColumn(t,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(e),this._panOffset.add(gn)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;gn.copy(s).sub(this.target);let a=gn.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,a=t-i.top,c=i.width,u=i.height;this._mouse.x=s/c*2-1,this._mouse.y=-(a/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ai*this._rotateDelta.x/t.clientHeight),this._rotateUp(ai*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(ai*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-ai*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(ai*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-ai*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ai*this._rotateDelta.x/t.clientHeight),this._rotateUp(ai*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,u=(e.pageY+t.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ht,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function sA(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function oA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function aA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(l0),this.state=qt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function lA(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case No.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=qt.DOLLY;break;case No.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=qt.ROTATE}break;case No.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=qt.PAN}break;default:this.state=qt.NONE}this.state!==qt.NONE&&this.dispatchEvent(Th)}function cA(o){switch(this.state){case qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function uA(o){this.enabled===!1||this.enableZoom===!1||this.state!==qt.NONE||(o.preventDefault(),this.dispatchEvent(Th),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(l0))}function dA(o){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(o)}function fA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Co.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=qt.TOUCH_ROTATE;break;case Co.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=qt.TOUCH_PAN;break;default:this.state=qt.NONE}break;case 2:switch(this.touches.TWO){case Co.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=qt.TOUCH_DOLLY_PAN;break;case Co.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=qt.TOUCH_DOLLY_ROTATE;break;default:this.state=qt.NONE}break;default:this.state=qt.NONE}this.state!==qt.NONE&&this.dispatchEvent(Th)}function hA(o){switch(this._trackPointer(o),this.state){case qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=qt.NONE}}function pA(o){this.enabled!==!1&&o.preventDefault()}function mA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function y_(o,e){if(e===Ax)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===$f||e===B_){let t=o.getIndex();if(t===null){const c=[],u=o.getAttribute("position");if(u!==void 0){for(let f=0;f<u.count;f++)c.push(f);o.setIndex(c),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,s=[];if(e===$f)for(let c=1;c<=i;c++)s.push(t.getX(0)),s.push(t.getX(c)),s.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(s.push(t.getX(c)),s.push(t.getX(c+1)),s.push(t.getX(c+2))):(s.push(t.getX(c+2)),s.push(t.getX(c+1)),s.push(t.getX(c)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=o.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class _A extends Qo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new MA(t)}),this.register(function(t){return new EA(t)}),this.register(function(t){return new NA(t)}),this.register(function(t){return new DA(t)}),this.register(function(t){return new IA(t)}),this.register(function(t){return new wA(t)}),this.register(function(t){return new AA(t)}),this.register(function(t){return new bA(t)}),this.register(function(t){return new RA(t)}),this.register(function(t){return new SA(t)}),this.register(function(t){return new CA(t)}),this.register(function(t){return new TA(t)}),this.register(function(t){return new LA(t)}),this.register(function(t){return new PA(t)}),this.register(function(t){return new xA(t)}),this.register(function(t){return new UA(t)}),this.register(function(t){return new FA(t)})}load(e,t,i,s){const a=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const h=Wa.extractUrlBase(e);c=Wa.resolveURL(h,this.path)}else c=Wa.extractUrlBase(e);this.manager.itemStart(e);const u=function(h){s?s(h):console.error(h),a.manager.itemError(e),a.manager.itemEnd(e)},f=new a0(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(h){try{a.parse(h,c,function(m){t(m),a.manager.itemEnd(e)},u)}catch(m){u(m)}},i,u)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let a;const c={},u={},f=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(f.decode(new Uint8Array(e,0,4))===c0){try{c[It.KHR_BINARY_GLTF]=new OA(e)}catch(g){s&&s(g);return}a=JSON.parse(c[It.KHR_BINARY_GLTF].content)}else a=JSON.parse(f.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new $A(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const g=this.pluginCallbacks[m](h);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[g.name]=g,c[g.name]=!0}if(a.extensionsUsed)for(let m=0;m<a.extensionsUsed.length;++m){const g=a.extensionsUsed[m],_=a.extensionsRequired||[];switch(g){case It.KHR_MATERIALS_UNLIT:c[g]=new yA;break;case It.KHR_DRACO_MESH_COMPRESSION:c[g]=new kA(a,this.dracoLoader);break;case It.KHR_TEXTURE_TRANSFORM:c[g]=new BA;break;case It.KHR_MESH_QUANTIZATION:c[g]=new zA;break;default:_.indexOf(g)>=0&&u[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}h.setExtensions(c),h.setPlugins(u),h.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,a){i.parse(e,t,s,a)})}}function vA(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const It={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class xA{constructor(e){this.parser=e,this.name=It.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const a=t.json,f=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let h;const m=new ut(16777215);f.color!==void 0&&m.setRGB(f.color[0],f.color[1],f.color[2],ei);const g=f.range!==void 0?f.range:0;switch(f.type){case"directional":h=new th(m),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Bw(m),h.distance=g;break;case"spot":h=new Ow(m),h.distance=g,f.spot=f.spot||{},f.spot.innerConeAngle=f.spot.innerConeAngle!==void 0?f.spot.innerConeAngle:0,f.spot.outerConeAngle=f.spot.outerConeAngle!==void 0?f.spot.outerConeAngle:Math.PI/4,h.angle=f.spot.outerConeAngle,h.penumbra=1-f.spot.innerConeAngle/f.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+f.type)}return h.position.set(0,0,0),h.decay=2,Ar(h,f),f.intensity!==void 0&&(h.intensity=f.intensity),h.name=t.createUniqueName(f.name||"light_"+e),s=Promise.resolve(h),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],u=(a.extensions&&a.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(f){return i._getNodeRef(t.cache,u,f)})}}class yA{constructor(){this.name=It.KHR_MATERIALS_UNLIT}getMaterialType(){return Pi}extendParams(e,t,i){const s=[];e.color=new ut(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],ei),e.opacity=c[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",a.baseColorTexture,bn))}return Promise.all(s)}}class SA{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class MA{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ar}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const u=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ht(u,u)}return Promise.all(a)}}class EA{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ar}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class TA{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ar}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(a)}}class wA{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ar}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new ut(0,0,0),t.sheenRoughness=0,t.sheen=1;const c=s.extensions[this.name];if(c.sheenColorFactor!==void 0){const u=c.sheenColorFactor;t.sheenColor.setRGB(u[0],u[1],u[2],ei)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",c.sheenColorTexture,bn)),c.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(a)}}class AA{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ar}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(a)}}class bA{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ar}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;const u=c.attenuationColor||[1,1,1];return t.attenuationColor=new ut().setRGB(u[0],u[1],u[2],ei),Promise.all(a)}}class RA{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ar}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class CA{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ar}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",c.specularTexture));const u=c.specularColorFactor||[1,1,1];return t.specularColor=new ut().setRGB(u[0],u[1],u[2],ei),c.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",c.specularColorTexture,bn)),Promise.all(a)}}class PA{constructor(e){this.parser=e,this.name=It.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ar}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return t.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",c.bumpTexture)),Promise.all(a)}}class LA{constructor(e){this.parser=e,this.name=It.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ar}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(a)}}class NA{constructor(e){this.parser=e,this.name=It.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class DA{constructor(e){this.parser=e,this.name=It.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let f=i.textureLoader;if(u.uri){const h=i.options.manager.getHandler(u.uri);h!==null&&(f=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,c.source,f);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class IA{constructor(e){this.parser=e,this.name=It.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let f=i.textureLoader;if(u.uri){const h=i.options.manager.getHandler(u.uri);h!==null&&(f=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,c.source,f);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class UA{constructor(e){this.name=It.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(u){const f=s.byteOffset||0,h=s.byteLength||0,m=s.count,g=s.byteStride,_=new Uint8Array(u,f,h);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(m,g,_,s.mode,s.filter).then(function(y){return y.buffer}):c.ready.then(function(){const y=new ArrayBuffer(m*g);return c.decodeGltfBuffer(new Uint8Array(y),m,g,_,s.mode,s.filter),y})})}else return null}}class FA{constructor(e){this.name=It.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const h of s.primitives)if(h.mode!==Ci.TRIANGLES&&h.mode!==Ci.TRIANGLE_STRIP&&h.mode!==Ci.TRIANGLE_FAN&&h.mode!==void 0)return null;const c=i.extensions[this.name].attributes,u=[],f={};for(const h in c)u.push(this.parser.getDependency("accessor",c[h]).then(m=>(f[h]=m,f[h])));return u.length<1?null:(u.push(this.parser.createNodeMesh(e)),Promise.all(u).then(h=>{const m=h.pop(),g=m.isGroup?m.children:[m],_=h[0].count,y=[];for(const M of g){const E=new wt,S=new V,x=new rr,L=new V(1,1,1),C=new gw(M.geometry,M.material,_);for(let w=0;w<_;w++)f.TRANSLATION&&S.fromBufferAttribute(f.TRANSLATION,w),f.ROTATION&&x.fromBufferAttribute(f.ROTATION,w),f.SCALE&&L.fromBufferAttribute(f.SCALE,w),C.setMatrixAt(w,E.compose(S,x,L));for(const w in f)if(w==="_COLOR_0"){const z=f[w];C.instanceColor=new Jf(z.array,z.itemSize,z.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&M.geometry.setAttribute(w,f[w]);nn.prototype.copy.call(C,M),this.parser.assignFinalMaterial(C),y.push(C)}return m.isGroup?(m.clear(),m.add(...y),m):y[0]}))}}const c0="glTF",ka=12,S_={JSON:1313821514,BIN:5130562};class OA{constructor(e){this.name=It.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ka),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==c0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ka,a=new DataView(e,ka);let c=0;for(;c<s;){const u=a.getUint32(c,!0);c+=4;const f=a.getUint32(c,!0);if(c+=4,f===S_.JSON){const h=new Uint8Array(e,ka+c,u);this.content=i.decode(h)}else if(f===S_.BIN){const h=ka+c;this.body=e.slice(h,h+u)}c+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class kA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=It.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,u={},f={},h={};for(const m in c){const g=ih[m]||m.toLowerCase();u[g]=c[m]}for(const m in e.attributes){const g=ih[m]||m.toLowerCase();if(c[m]!==void 0){const _=i.accessors[e.attributes[m]],y=Fo[_.componentType];h[g]=y.name,f[g]=_.normalized===!0}}return t.getDependency("bufferView",a).then(function(m){return new Promise(function(g,_){s.decodeDracoFile(m,function(y){for(const M in y.attributes){const E=y.attributes[M],S=f[M];S!==void 0&&(E.normalized=S)}g(y)},u,h,ei,_)})})}}class BA{constructor(){this.name=It.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class zA{constructor(){this.name=It.KHR_MESH_QUANTIZATION}}class u0 extends Ja{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let c=0;c!==s;c++)t[c]=i[a+c];return t}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=u*2,h=u*3,m=s-t,g=(i-t)/m,_=g*g,y=_*g,M=e*h,E=M-h,S=-2*y+3*_,x=y-_,L=1-S,C=x-_+g;for(let w=0;w!==u;w++){const z=c[E+w+u],U=c[E+w+f]*m,I=c[M+w+u],O=c[M+w]*m;a[w]=L*z+C*U+S*I+x*O}return a}}const HA=new rr;class VA extends u0{interpolate_(e,t,i,s){const a=super.interpolate_(e,t,i,s);return HA.fromArray(a).normalize().toArray(a),a}}const Ci={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Fo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},M_={9728:Jn,9729:xi,9984:C_,9985:Cc,9986:Ba,9987:Rr},E_={33071:cs,33648:Fc,10497:zo},uf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ih={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},as={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},GA={CUBICSPLINE:void 0,LINEAR:Ya,STEP:Xa},df={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function WA(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new yh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Lr})),o.DefaultMaterial}function Os(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ar(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function jA(o,e,t){let i=!1,s=!1,a=!1;for(let h=0,m=e.length;h<m;h++){const g=e[h];if(g.POSITION!==void 0&&(i=!0),g.NORMAL!==void 0&&(s=!0),g.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(o);const c=[],u=[],f=[];for(let h=0,m=e.length;h<m;h++){const g=e[h];if(i){const _=g.POSITION!==void 0?t.getDependency("accessor",g.POSITION):o.attributes.position;c.push(_)}if(s){const _=g.NORMAL!==void 0?t.getDependency("accessor",g.NORMAL):o.attributes.normal;u.push(_)}if(a){const _=g.COLOR_0!==void 0?t.getDependency("accessor",g.COLOR_0):o.attributes.color;f.push(_)}}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(f)]).then(function(h){const m=h[0],g=h[1],_=h[2];return i&&(o.morphAttributes.position=m),s&&(o.morphAttributes.normal=g),a&&(o.morphAttributes.color=_),o.morphTargetsRelative=!0,o})}function XA(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function YA(o){let e;const t=o.extensions&&o.extensions[It.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ff(t.attributes):e=o.indices+":"+ff(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,s=o.targets.length;i<s;i++)e+=":"+ff(o.targets[i]);return e}function ff(o){let e="";const t=Object.keys(o).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+o[t[i]]+";";return e}function rh(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function qA(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const KA=new wt;class $A{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new vA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,c=-1;if(typeof navigator<"u"){const u=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(u)===!0;const f=u.match(/Version\/(\d+)/);s=i&&f?parseInt(f[1],10):-1,a=u.indexOf("Firefox")>-1,c=a?u.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&c<98?this.textureLoader=new Uw(this.options.manager):this.textureLoader=new Vw(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new a0(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const u={scene:c[0][s.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:s.asset,parser:i,userData:{}};return Os(a,u,s),Ar(u,s),Promise.all(i._invokeAll(function(f){return f.afterRoot&&f.afterRoot(u)})).then(function(){for(const f of u.scenes)f.updateMatrixWorld();e(u)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const c=t[s].joints;for(let u=0,f=c.length;u<f;u++)e[c[u]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const c=e[s];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),a=(c,u)=>{const f=this.associations.get(c);f!=null&&this.associations.set(u,f);for(const[h,m]of c.children.entries())a(m,u.children[h])};return a(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[It.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,c){i.load(Wa.resolveURL(t.uri,s.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const c=uf[s.type],u=Fo[s.componentType],f=s.normalized===!0,h=new u(s.count*c);return Promise.resolve(new In(h,c,f))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(c){const u=c[0],f=uf[s.type],h=Fo[s.componentType],m=h.BYTES_PER_ELEMENT,g=m*f,_=s.byteOffset||0,y=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let E,S;if(y&&y!==g){const x=Math.floor(_/y),L="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+x+":"+s.count;let C=t.cache.get(L);C||(E=new h(u,x*y,s.count*y/m),C=new dw(E,y/m),t.cache.add(L,C)),S=new vh(C,f,_%y/m,M)}else u===null?E=new h(s.count*f):E=new h(u,_,s.count*f),S=new In(E,f,M);if(s.sparse!==void 0){const x=uf.SCALAR,L=Fo[s.sparse.indices.componentType],C=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,z=new L(c[1],C,s.sparse.count*x),U=new h(c[2],w,s.sparse.count*f);u!==null&&(S=new In(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let I=0,O=z.length;I<O;I++){const P=z[I];if(S.setX(P,U[I*f]),f>=2&&S.setY(P,U[I*f+1]),f>=3&&S.setZ(P,U[I*f+2]),f>=4&&S.setW(P,U[I*f+3]),f>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,c=t.images[a];let u=this.textureLoader;if(c.uri){const f=i.manager.getHandler(c.uri);f!==null&&(u=f)}return this.loadTextureImage(e,a,u)}loadTextureImage(e,t,i){const s=this,a=this.json,c=a.textures[e],u=a.images[t],f=(u.uri||u.bufferView)+":"+c.sampler;if(this.textureCache[f])return this.textureCache[f];const h=this.loadImageSource(t,i).then(function(m){m.flipY=!1,m.name=c.name||u.name||"",m.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(m.name=u.uri);const _=(a.samplers||{})[c.sampler]||{};return m.magFilter=M_[_.magFilter]||xi,m.minFilter=M_[_.minFilter]||Rr,m.wrapS=E_[_.wrapS]||zo,m.wrapT=E_[_.wrapT]||zo,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==Jn&&m.minFilter!==xi,s.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[f]=h,h}loadImageSource(e,t){const i=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const c=s.images[e],u=self.URL||self.webkitURL;let f=c.uri||"",h=!1;if(c.bufferView!==void 0)f=i.getDependency("bufferView",c.bufferView).then(function(g){h=!0;const _=new Blob([g],{type:c.mimeType});return f=u.createObjectURL(_),f});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(f).then(function(g){return new Promise(function(_,y){let M=_;t.isImageBitmapLoader===!0&&(M=function(E){const S=new _n(E);S.needsUpdate=!0,_(S)}),t.load(Wa.resolveURL(g,a.path),M,void 0,y)})}).then(function(g){return h===!0&&u.revokeObjectURL(f),Ar(g,c),g.userData.mimeType=c.mimeType||qA(c.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",f),g});return this.sourceCache[e]=m,m}assignTexture(e,t,i,s){const a=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),a.extensions[It.KHR_TEXTURE_TRANSFORM]){const u=i.extensions!==void 0?i.extensions[It.KHR_TEXTURE_TRANSFORM]:void 0;if(u){const f=a.associations.get(c);c=a.extensions[It.KHR_TEXTURE_TRANSFORM].extendTexture(c,u),a.associations.set(c,f)}}return s!==void 0&&(c.colorSpace=s),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const u="PointsMaterial:"+i.uuid;let f=this.cache.get(u);f||(f=new r0,Ni.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,f.sizeAttenuation=!1,this.cache.add(u,f)),i=f}else if(e.isLine){const u="LineBasicMaterial:"+i.uuid;let f=this.cache.get(u);f||(f=new Gs,Ni.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,this.cache.add(u,f)),i=f}if(s||a||c){let u="ClonedMaterial:"+i.uuid+":";s&&(u+="derivative-tangents:"),a&&(u+="vertex-colors:"),c&&(u+="flat-shading:");let f=this.cache.get(u);f||(f=i.clone(),a&&(f.vertexColors=!0),c&&(f.flatShading=!0),s&&(f.normalScale&&(f.normalScale.y*=-1),f.clearcoatNormalScale&&(f.clearcoatNormalScale.y*=-1)),this.cache.add(u,f),this.associations.set(f,this.associations.get(i))),i=f}e.material=i}getMaterialType(){return yh}loadMaterial(e){const t=this,i=this.json,s=this.extensions,a=i.materials[e];let c;const u={},f=a.extensions||{},h=[];if(f[It.KHR_MATERIALS_UNLIT]){const g=s[It.KHR_MATERIALS_UNLIT];c=g.getMaterialType(),h.push(g.extendParams(u,a,t))}else{const g=a.pbrMetallicRoughness||{};if(u.color=new ut(1,1,1),u.opacity=1,Array.isArray(g.baseColorFactor)){const _=g.baseColorFactor;u.color.setRGB(_[0],_[1],_[2],ei),u.opacity=_[3]}g.baseColorTexture!==void 0&&h.push(t.assignTexture(u,"map",g.baseColorTexture,bn)),u.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,u.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(u,"metalnessMap",g.metallicRoughnessTexture)),h.push(t.assignTexture(u,"roughnessMap",g.metallicRoughnessTexture))),c=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,u)})))}a.doubleSided===!0&&(u.side=vi);const m=a.alphaMode||df.OPAQUE;if(m===df.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,m===df.MASK&&(u.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==Pi&&(h.push(t.assignTexture(u,"normalMap",a.normalTexture)),u.normalScale=new ht(1,1),a.normalTexture.scale!==void 0)){const g=a.normalTexture.scale;u.normalScale.set(g,g)}if(a.occlusionTexture!==void 0&&c!==Pi&&(h.push(t.assignTexture(u,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==Pi){const g=a.emissiveFactor;u.emissive=new ut().setRGB(g[0],g[1],g[2],ei)}return a.emissiveTexture!==void 0&&c!==Pi&&h.push(t.assignTexture(u,"emissiveMap",a.emissiveTexture,bn)),Promise.all(h).then(function(){const g=new c(u);return a.name&&(g.name=a.name),Ar(g,a),t.associations.set(g,{materials:e}),a.extensions&&Os(s,g,a),g})}createUniqueName(e){const t=Wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function a(u){return i[It.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,t).then(function(f){return T_(f,u,t)})}const c=[];for(let u=0,f=e.length;u<f;u++){const h=e[u],m=YA(h),g=s[m];if(g)c.push(g.promise);else{let _;h.extensions&&h.extensions[It.KHR_DRACO_MESH_COMPRESSION]?_=a(h):_=T_(new jn,h,t),s[m]={primitive:h,promise:_},c.push(_)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,s=this.extensions,a=i.meshes[e],c=a.primitives,u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f].material===void 0?WA(this.cache):this.getDependency("material",c[f].material);u.push(m)}return u.push(t.loadGeometries(c)),Promise.all(u).then(function(f){const h=f.slice(0,f.length-1),m=f[f.length-1],g=[];for(let y=0,M=m.length;y<M;y++){const E=m[y],S=c[y];let x;const L=h[y];if(S.mode===Ci.TRIANGLES||S.mode===Ci.TRIANGLE_STRIP||S.mode===Ci.TRIANGLE_FAN||S.mode===void 0)x=a.isSkinnedMesh===!0?new hw(E,L):new Gn(E,L),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),S.mode===Ci.TRIANGLE_STRIP?x.geometry=y_(x.geometry,B_):S.mode===Ci.TRIANGLE_FAN&&(x.geometry=y_(x.geometry,$f));else if(S.mode===Ci.LINES)x=new Xc(E,L);else if(S.mode===Ci.LINE_STRIP)x=new Ka(E,L);else if(S.mode===Ci.LINE_LOOP)x=new _w(E,L);else if(S.mode===Ci.POINTS)x=new vw(E,L);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(x.geometry.morphAttributes).length>0&&XA(x,a),x.name=t.createUniqueName(a.name||"mesh_"+e),Ar(x,a),S.extensions&&Os(s,x,S),t.assignFinalMaterial(x),g.push(x)}for(let y=0,M=g.length;y<M;y++)t.associations.set(g[y],{meshes:e,primitives:y});if(g.length===1)return a.extensions&&Os(s,g[0],a),g[0];const _=new Ki;a.extensions&&Os(s,_,a),t.associations.set(_,{meshes:e});for(let y=0,M=g.length;y<M;y++)_.add(g[y]);return _})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Vn(Po.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Wc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ar(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,a=t.joints.length;s<a;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const a=s.pop(),c=s,u=[],f=[];for(let h=0,m=c.length;h<m;h++){const g=c[h];if(g){u.push(g);const _=new wt;a!==null&&_.fromArray(a.array,h*16),f.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new xh(u,f)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,c=[],u=[],f=[],h=[],m=[];for(let g=0,_=s.channels.length;g<_;g++){const y=s.channels[g],M=s.samplers[y.sampler],E=y.target,S=E.node,x=s.parameters!==void 0?s.parameters[M.input]:M.input,L=s.parameters!==void 0?s.parameters[M.output]:M.output;E.node!==void 0&&(c.push(this.getDependency("node",S)),u.push(this.getDependency("accessor",x)),f.push(this.getDependency("accessor",L)),h.push(M),m.push(E))}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(f),Promise.all(h),Promise.all(m)]).then(function(g){const _=g[0],y=g[1],M=g[2],E=g[3],S=g[4],x=[];for(let L=0,C=_.length;L<C;L++){const w=_[L],z=y[L],U=M[L],I=E[L],O=S[L];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const P=i._createAnimationTracks(w,z,U,I,O);if(P)for(let b=0;b<P.length;b++)x.push(P[b])}return new Rw(a,void 0,x)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){const c=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&c.traverse(function(u){if(u.isMesh)for(let f=0,h=s.weights.length;f<h;f++)u.morphTargetInfluences[f]=s.weights[f]}),c})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],a=i._loadNodeShallow(e),c=[],u=s.children||[];for(let h=0,m=u.length;h<m;h++)c.push(i.getDependency("node",u[h]));const f=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(c),f]).then(function(h){const m=h[0],g=h[1],_=h[2];_!==null&&m.traverse(function(y){y.isSkinnedMesh&&y.bind(_,KA)});for(let y=0,M=g.length;y<M;y++)m.add(g[y]);return m})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?s.createUniqueName(a.name):"",u=[],f=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return f&&u.push(f),a.camera!==void 0&&u.push(s.getDependency("camera",a.camera).then(function(h){return s._getNodeRef(s.cameraCache,a.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){u.push(h)}),this.nodeCache[e]=Promise.all(u).then(function(h){let m;if(a.isBone===!0?m=new n0:h.length>1?m=new Ki:h.length===1?m=h[0]:m=new nn,m!==h[0])for(let g=0,_=h.length;g<_;g++)m.add(h[g]);if(a.name&&(m.userData.name=a.name,m.name=c),Ar(m,a),a.extensions&&Os(i,m,a),a.matrix!==void 0){const g=new wt;g.fromArray(a.matrix),m.applyMatrix4(g)}else a.translation!==void 0&&m.position.fromArray(a.translation),a.rotation!==void 0&&m.quaternion.fromArray(a.rotation),a.scale!==void 0&&m.scale.fromArray(a.scale);return s.associations.has(m)||s.associations.set(m,{}),s.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,a=new Ki;i.name&&(a.name=s.createUniqueName(i.name)),Ar(a,i),i.extensions&&Os(t,a,i);const c=i.nodes||[],u=[];for(let f=0,h=c.length;f<h;f++)u.push(s.getDependency("node",c[f]));return Promise.all(u).then(function(f){for(let m=0,g=f.length;m<g;m++)a.add(f[m]);const h=m=>{const g=new Map;for(const[_,y]of s.associations)(_ instanceof Ni||_ instanceof _n)&&g.set(_,y);return m.traverse(_=>{const y=s.associations.get(_);y!=null&&g.set(_,y)}),g};return s.associations=h(a),a})}_createAnimationTracks(e,t,i,s,a){const c=[],u=e.name?e.name:e.uuid,f=[];as[a.path]===as.weights?e.traverse(function(_){_.morphTargetInfluences&&f.push(_.name?_.name:_.uuid)}):f.push(u);let h;switch(as[a.path]){case as.weights:h=jo;break;case as.rotation:h=Xo;break;case as.position:case as.scale:h=Yo;break;default:switch(i.itemSize){case 1:h=jo;break;case 2:case 3:default:h=Yo;break}break}const m=s.interpolation!==void 0?GA[s.interpolation]:Ya,g=this._getArrayFromAccessor(i);for(let _=0,y=f.length;_<y;_++){const M=new h(f[_]+"."+as[a.path],t.array,g,m);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),c.push(M)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=rh(t.constructor),s=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=t[a]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Xo?VA:u0;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ZA(o,e,t){const i=e.attributes,s=new yi;if(i.POSITION!==void 0){const u=t.json.accessors[i.POSITION],f=u.min,h=u.max;if(f!==void 0&&h!==void 0){if(s.set(new V(f[0],f[1],f[2]),new V(h[0],h[1],h[2])),u.normalized){const m=rh(Fo[u.componentType]);s.min.multiplyScalar(m),s.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const u=new V,f=new V;for(let h=0,m=a.length;h<m;h++){const g=a[h];if(g.POSITION!==void 0){const _=t.json.accessors[g.POSITION],y=_.min,M=_.max;if(y!==void 0&&M!==void 0){if(f.setX(Math.max(Math.abs(y[0]),Math.abs(M[0]))),f.setY(Math.max(Math.abs(y[1]),Math.abs(M[1]))),f.setZ(Math.max(Math.abs(y[2]),Math.abs(M[2]))),_.normalized){const E=rh(Fo[_.componentType]);f.multiplyScalar(E)}u.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(u)}o.boundingBox=s;const c=new or;s.getCenter(c.center),c.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=c}function T_(o,e,t){const i=e.attributes,s=[];function a(c,u){return t.getDependency("accessor",c).then(function(f){o.setAttribute(u,f)})}for(const c in i){const u=ih[c]||c.toLowerCase();u in o.attributes||s.push(a(i[c],u))}if(e.indices!==void 0&&!o.index){const c=t.getDependency("accessor",e.indices).then(function(u){o.setIndex(u)});s.push(c)}return Ut.workingColorSpace!==ei&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ut.workingColorSpace}" not supported.`),Ar(o,e),ZA(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?jA(o,e.targets,t):o})}class QA{parse(e){let t="",i=0,s=0,a=0;const c=new V,u=new ut,f=new V,h=new ht,m=[];function g(M){let E=0,S=0,x=0;const L=M.geometry,C=new Tt,w=L.getAttribute("position"),z=L.getAttribute("normal"),U=L.getAttribute("uv"),I=L.getIndex();if(t+="o "+M.name+`
`,M.material&&M.material.name&&(t+="usemtl "+M.material.name+`
`),w!==void 0)for(let O=0,P=w.count;O<P;O++,E++)c.fromBufferAttribute(w,O),c.applyMatrix4(M.matrixWorld),t+="v "+c.x+" "+c.y+" "+c.z+`
`;if(U!==void 0)for(let O=0,P=U.count;O<P;O++,x++)h.fromBufferAttribute(U,O),t+="vt "+h.x+" "+h.y+`
`;if(z!==void 0){C.getNormalMatrix(M.matrixWorld);for(let O=0,P=z.count;O<P;O++,S++)f.fromBufferAttribute(z,O),f.applyMatrix3(C).normalize(),t+="vn "+f.x+" "+f.y+" "+f.z+`
`}if(I!==null)for(let O=0,P=I.count;O<P;O+=3){for(let b=0;b<3;b++){const k=I.getX(O+b)+1;m[b]=i+k+(z||U?"/"+(U?s+k:"")+(z?"/"+(a+k):""):"")}t+="f "+m.join(" ")+`
`}else for(let O=0,P=w.count;O<P;O+=3){for(let b=0;b<3;b++){const k=O+b+1;m[b]=i+k+(z||U?"/"+(U?s+k:"")+(z?"/"+(a+k):""):"")}t+="f "+m.join(" ")+`
`}i+=E,s+=x,a+=S}function _(M){let E=0;const S=M.geometry,x=M.type,L=S.getAttribute("position");if(t+="o "+M.name+`
`,L!==void 0)for(let C=0,w=L.count;C<w;C++,E++)c.fromBufferAttribute(L,C),c.applyMatrix4(M.matrixWorld),t+="v "+c.x+" "+c.y+" "+c.z+`
`;if(x==="Line"){t+="l ";for(let C=1,w=L.count;C<=w;C++)t+=i+C+" ";t+=`
`}if(x==="LineSegments")for(let C=1,w=C+1,z=L.count;C<z;C+=2,w=C+1)t+="l "+(i+C)+" "+(i+w)+`
`;i+=E}function y(M){let E=0;const S=M.geometry,x=S.getAttribute("position"),L=S.getAttribute("color");if(t+="o "+M.name+`
`,x!==void 0){for(let C=0,w=x.count;C<w;C++,E++)c.fromBufferAttribute(x,C),c.applyMatrix4(M.matrixWorld),t+="v "+c.x+" "+c.y+" "+c.z,L!==void 0&&(u.fromBufferAttribute(L,C),Ut.fromWorkingColorSpace(u,bn),t+=" "+u.r+" "+u.g+" "+u.b),t+=`
`;t+="p ";for(let C=1,w=x.count;C<=w;C++)t+=i+C+" ";t+=`
`}i+=E}return e.traverse(function(M){M.isMesh===!0&&g(M),M.isLine===!0&&_(M),M.isPoints===!0&&y(M)}),t}}class JA{parse(e,t={}){t=Object.assign({binary:!1},t);const i=t.binary,s=[];let a=0;e.traverse(function(x){if(x.isMesh){const L=x.geometry,C=L.index,w=L.getAttribute("position");a+=C!==null?C.count/3:w.count/3,s.push({object3d:x,geometry:L})}});let c,u=80;if(i===!0){const x=a*2+a*3*4*4+80+4,L=new ArrayBuffer(x);c=new DataView(L),c.setUint32(u,a,!0),u+=4}else c="",c+=`solid exported
`;const f=new V,h=new V,m=new V,g=new V,_=new V,y=new V;for(let x=0,L=s.length;x<L;x++){const C=s[x].object3d,w=s[x].geometry,z=w.index,U=w.getAttribute("position");if(z!==null)for(let I=0;I<z.count;I+=3){const O=z.getX(I+0),P=z.getX(I+1),b=z.getX(I+2);M(O,P,b,U,C)}else for(let I=0;I<U.count;I+=3){const O=I+0,P=I+1,b=I+2;M(O,P,b,U,C)}}return i===!1&&(c+=`endsolid exported
`),c;function M(x,L,C,w,z){f.fromBufferAttribute(w,x),h.fromBufferAttribute(w,L),m.fromBufferAttribute(w,C),z.isSkinnedMesh===!0&&(z.applyBoneTransform(x,f),z.applyBoneTransform(L,h),z.applyBoneTransform(C,m)),f.applyMatrix4(z.matrixWorld),h.applyMatrix4(z.matrixWorld),m.applyMatrix4(z.matrixWorld),E(f,h,m),S(f),S(h),S(m),i===!0?(c.setUint16(u,0,!0),u+=2):(c+=`		endloop
`,c+=`	endfacet
`)}function E(x,L,C){g.subVectors(C,L),_.subVectors(x,L),g.cross(_).normalize(),y.copy(g).normalize(),i===!0?(c.setFloat32(u,y.x,!0),u+=4,c.setFloat32(u,y.y,!0),u+=4,c.setFloat32(u,y.z,!0),u+=4):(c+="	facet normal "+y.x+" "+y.y+" "+y.z+`
`,c+=`		outer loop
`)}function S(x){i===!0?(c.setFloat32(u,x.x,!0),u+=4,c.setFloat32(u,x.y,!0),u+=4,c.setFloat32(u,x.z,!0),u+=4):c+="			vertex "+x.x+" "+x.y+" "+x.z+`
`}}}const e1=[.5,5e3];function t1({modelUrl:o,title:e="3D Model",subtitle:t="",badge:i="GLB",fileName:s="model",fileSize:a=null,backUrl:c=null,knownMaxDimensionMm:u=null,defaultUnitScale:f=1e3,sanityRangeMm:h=e1,initialBackground:m="#090d16",enableDeepLink:g=!0,onLoad:_=null,onError:y=null,onCalibrate:M=null}){const E=De.useRef(null),S=De.useRef(null),x=De.useRef(null),L=De.useRef(null),C=De.useRef(null),w=De.useRef(null),z=De.useRef(null),U=De.useRef(null),I=De.useRef(null),O=De.useRef(new Ki),P=De.useRef(new Ki),b=De.useRef(new Ki),k=De.useRef(null),ae=De.useRef(null),ne=De.useRef(null),me=De.useRef(new br(new V(-1,0,0),1e3)),fe=De.useRef(null),le=De.useRef(new yi),ue=De.useRef(new Map),H=De.useRef(null),ce=De.useRef({knownMaxDimensionMm:u,defaultUnitScale:f,sanityRangeMm:h,enableDeepLink:g,onLoad:_,onError:y});ce.current={knownMaxDimensionMm:u,defaultUnitScale:f,sanityRangeMm:h,enableDeepLink:g,onLoad:_,onError:y};const[se,F]=De.useState("pbr"),[ie,Be]=De.useState("perspective"),[Q,he]=De.useState(!1),[we,Se]=De.useState(!1),[Le,ze]=De.useState(1.1),[it,Ht]=De.useState(45),[At,Vt]=De.useState(m),[X,yn]=De.useState(!1),[xt,Ct]=De.useState(!1),[Qe,Bt]=De.useState(!1),[qe,N]=De.useState("x"),[A,J]=De.useState(100),[ge,xe]=De.useState(!1),[pe,Ge]=De.useState(!1),[Ie,He]=De.useState(!1),[yt,Ae]=De.useState(!1),[Oe,st]=De.useState(!1),[lt,Ve]=De.useState(null),[gt,ct]=De.useState(null),[Nt,G]=De.useState(!1),[Ne,oe]=De.useState("default"),[de,Pe]=De.useState(!1),[Re,nt]=De.useState([]),[jt,rn]=De.useState(""),[St,sn]=De.useState(!1),[un,Ir]=De.useState("mm"),[Sn,ci]=De.useState([]),[dn,Un]=De.useState(null),Di=De.useRef({x:0,y:0}),Xn=De.useRef([]);Xn.current=Sn;const[hs,Zi]=De.useState(!0),[Ur,Si]=De.useState(0),[Fr,ps]=De.useState(null),[Qi,R]=De.useState({triangles:0,vertices:0,meshes:0,rawSize:new V}),j=De.useCallback($=>{Ve($),setTimeout(()=>Ve(_e=>_e===$?null:_e),2800)},[]),ee=De.useRef(null);if(!ee.current&&typeof document<"u"){const $=document.createElement("canvas");$.width=128,$.height=128;const _e=$.getContext("2d"),ve=_e.createRadialGradient(48,40,4,64,64,64);ve.addColorStop(0,"#f2b5a0"),ve.addColorStop(.5,"#b55d45"),ve.addColorStop(1,"#2e0d08"),_e.fillStyle=ve,_e.fillRect(0,0,128,128);const Ue=new xw($),je=new Dr({uniforms:{uLightDir:{value:new V(.5,.8,.6).normalize()}},vertexShader:`
                varying vec3 vNormalView;
                varying vec3 vViewPos;
                void main() {
                    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
                    vViewPos = -mvPos.xyz;
                    vNormalView = normalize(normalMatrix * normal);
                    gl_Position = projectionMatrix * mvPos;
                }
            `,fragmentShader:`
                uniform vec3 uLightDir;
                varying vec3 vNormalView;
                varying vec3 vViewPos;
                void main() {
                    vec3 n = normalize(vNormalView);
                    vec3 dx = dFdx(n);
                    vec3 dy = dFdy(n);
                    float curvature = clamp((dx.x + dy.y) * 4.5, -0.45, 0.45);
                    float diffuse = max(dot(n, normalize(uLightDir)), 0.0);
                    float rim = 1.0 - max(dot(n, normalize(vViewPos)), 0.0);
                    float shade = 0.28 + diffuse * 0.58 + curvature + pow(rim, 3.0) * 0.15;
                    vec3 baseTint = vec3(0.84, 0.81, 0.76);
                    gl_FragColor = vec4(baseTint * clamp(shade, 0.05, 1.25), 1.0);
                }
            `,side:vi});ee.current={normals:new yw,sculpt:new Sw({matcap:Ue}),relief:je,vertexColored:new Pi({vertexColors:!0}),vertexPlain:new Pi({color:13421772}),matcapTex:Ue}}const te=De.useCallback(($,_e=!1)=>{if(Nt||!gt)return _e?`${$.toFixed(2)} u`:`${$.toFixed(3)} units (unscaled)`;const ve=$*gt;return un==="cm"?`${(ve/10).toFixed(2)} cm`:un==="in"?`${(ve/25.4).toFixed(2)} in`:`${ve.toFixed(1)} mm`},[Nt,gt,un]),Y=De.useCallback(()=>{E.current&&(document.fullscreenElement?document.exitFullscreen().catch($=>console.error($)):E.current.requestFullscreen().catch($=>console.error($)))},[]);De.useEffect(()=>{const $=()=>He(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",$),()=>document.removeEventListener("fullscreenchange",$)},[]);const be=De.useCallback($=>{const _e=C.current,ve=w.current,Ue=I.current,je=S.current;if(!_e||!ve||!Ue||!je)return;const Mt=z.current||_e,tt=Ue.target.clone(),pt=Mt.position.distanceTo(tt),rt=(je.clientWidth||800)/(je.clientHeight||600);if($==="orthographic"){const vt=pt*Math.tan(Po.degToRad(_e.fov*.5));ve.left=-vt*rt,ve.right=vt*rt,ve.top=vt,ve.bottom=-vt,ve.zoom=1,ve.near=_e.near,ve.far=_e.far,ve.position.copy(_e.position),ve.quaternion.copy(_e.quaternion),ve.updateProjectionMatrix(),z.current=ve,Ue.object=ve}else{const Rn=(ve.top-ve.bottom)/(2*ve.zoom)/Math.tan(Po.degToRad(_e.fov*.5)),Ii=ve.position.clone().sub(tt).normalize();_e.position.copy(tt).addScaledVector(Ii,Rn),_e.quaternion.copy(ve.quaternion),_e.aspect=rt,_e.updateProjectionMatrix(),z.current=_e,Ue.object=_e}Ue.update(),Be($)},[]),Ee=De.useCallback(($="iso")=>{var Rn;const _e=z.current,ve=I.current;if(!_e||!ve||!O.current)return;const Ue=new yi().setFromObject(O.current);if(Ue.isEmpty())return;const je=Ue.getCenter(new V),Mt=Ue.getSize(new V),tt=Math.max(Mt.x,Mt.y,Mt.z),pt=(((Rn=C.current)==null?void 0:Rn.fov)||45)*(Math.PI/180),rt=Math.abs(tt/2/Math.tan(pt/2))*1.55,vt=je.clone();switch($){case"front":vt.z+=rt;break;case"top":vt.y+=rt,vt.z+=.001;break;case"side":vt.x+=rt;break;case"iso":default:vt.set(je.x+rt*.45,je.y+rt*.35,je.z+rt*.85);break}if(H.current={targetPos:vt,targetLook:je,alpha:0},w.current&&S.current){const Ii=(S.current.clientWidth||800)/(S.current.clientHeight||600),Et=tt*.85;w.current.left=-Et*Ii,w.current.right=Et*Ii,w.current.top=Et,w.current.bottom=-Et,w.current.zoom=1,w.current.updateProjectionMatrix()}},[]),Ke=De.useCallback(()=>{var Mt;const $=z.current,_e=I.current;if(!$||!_e)return;const ve={p:$.position.toArray().map(tt=>Number(tt.toFixed(4))),t:_e.target.toArray().map(tt=>Number(tt.toFixed(4))),proj:ie,shade:se,scale:gt?Number(gt.toFixed(4)):null},Ue=btoa(JSON.stringify(ve)),je=`${window.location.origin}${window.location.pathname}${window.location.search}#view=${Ue}`;window.history.replaceState(null,"",`#view=${Ue}`),(Mt=navigator.clipboard)==null||Mt.writeText(je).then(()=>j("View link copied to clipboard"))},[ie,se,gt,j]),We=($,_e)=>{const ve=URL.createObjectURL($),Ue=document.createElement("a");Ue.href=ve,Ue.download=_e,document.body.appendChild(Ue),Ue.click(),document.body.removeChild(Ue),URL.revokeObjectURL(ve)},dt=()=>{const $=document.createElement("a");$.href=o,$.download=`${s.replace(/\.[^/.]+$/,"")}.glb`,document.body.appendChild($),$.click(),document.body.removeChild($),Ge(!1)},ft=$=>{O.current&&(Ae(!0),Ge(!1),setTimeout(()=>{try{const _e=s.replace(/\.[^/.]+$/,"");if($==="obj"){const Ue=new QA().parse(O.current);We(new Blob([Ue],{type:"text/plain"}),`${_e}.obj`)}else if($==="stl"){const Ue=new JA().parse(O.current,{binary:!0});We(new Blob([Ue],{type:"application/octet-stream"}),`${_e}.stl`)}}catch(_e){console.error(`Failed to export ${$}:`,_e)}finally{Ae(!1)}},30))},$e=()=>{!U.current||!L.current||!z.current||(Ge(!1),U.current.render(L.current,z.current),U.current.domElement.toBlob($=>{if($){const _e=s.replace(/\.[^/.]+$/,"");We($,`${_e}_render.png`)}}))},Dt=De.useCallback(()=>{const $=U.current,_e=I.current;if(!$||!_e||Oe)return;if(typeof $.domElement.captureStream!="function"||typeof MediaRecorder>"u"){j("Video capture not supported in this browser");return}Ge(!1),st(!0);const ve=_e.autoRotate,Ue=_e.autoRotateSpeed;_e.autoRotate=!0,_e.autoRotateSpeed=12;const je=$.domElement.captureStream(30),Mt=[],tt=new MediaRecorder(je,{mimeType:"video/webm"});tt.ondataavailable=pt=>{pt.data&&pt.data.size>0&&Mt.push(pt.data)},tt.onstop=()=>{_e.autoRotate=ve,_e.autoRotateSpeed=Ue,st(!1);const pt=new Blob(Mt,{type:"video/webm"}),rt=s.replace(/\.[^/.]+$/,"");We(pt,`${rt}_turntable.webm`),j("Turntable video saved")},tt.start(),setTimeout(()=>{tt.state==="recording"&&tt.stop()},5e3)},[Oe,s,j]),bt=De.useCallback($=>{for(;$.children.length>0;){const _e=$.children[0];_e.geometry&&_e.geometry.dispose(),_e.material&&(Array.isArray(_e.material)?_e.material.forEach(ve=>ve.dispose()):_e.material.dispose()),$.remove(_e)}},[]),Rt=De.useCallback($=>{$.traverse(_e=>{_e.geometry&&_e.geometry.dispose(),_e.material&&(Array.isArray(_e.material)?_e.material:[_e.material]).forEach(Ue=>{Object.values(Ue).forEach(je=>{je&&je.isTexture&&je.dispose()}),Ue.dispose()})})},[]),ln=De.useCallback(()=>{ci([]),Un(null),bt(P.current)},[bt]);De.useEffect(()=>{const $=P.current;if(bt($),Sn.length===0&&!dn)return;const _e=le.current,ve=_e.isEmpty()?1:_e.getSize(new V).length(),Ue=Math.max(ve*.008,5e-4),je=new zc(Ue,12,12),Mt=new Pi({color:16096779,depthTest:!1}),tt=new Gs({color:16498468,depthTest:!1}),pt=rt=>{const vt=new Gn(je,Mt);vt.position.copy(rt),vt.renderOrder=999,$.add(vt)};return Sn.forEach(rt=>{pt(rt.p1),pt(rt.p2);const vt=new jn().setFromPoints([rt.p1,rt.p2]),Rn=new Ka(vt,tt);Rn.renderOrder=998,$.add(Rn)}),dn&&pt(dn),()=>{je.dispose(),Mt.dispose(),tt.dispose()}},[Sn,dn,bt]),De.useEffect(()=>{const $=b.current;if(bt($),Re.length===0)return;const _e=le.current,ve=_e.isEmpty()?1:_e.getSize(new V).length(),Ue=Math.max(ve*.009,6e-4),je=new zc(Ue,12,12),Mt=new Pi({color:1096065,depthTest:!1}),tt=new Gs({color:3462041,depthTest:!1});if(Re.forEach(pt=>{const rt=new Gn(je,Mt);rt.position.copy(pt),rt.renderOrder=1e3,$.add(rt)}),Re.length===2){const pt=new jn().setFromPoints(Re),rt=new Ka(pt,tt);rt.renderOrder=999,$.add(rt)}return()=>{je.dispose(),Mt.dispose(),tt.dispose()}},[Re,bt]);const _t=$=>{$.isPrimary&&(Di.current={x:$.clientX,y:$.clientY})},Je=$=>{if(!$.isPrimary||!St&&!de||!S.current||!z.current)return;const _e=$.clientX-Di.current.x,ve=$.clientY-Di.current.y;if(Math.hypot(_e,ve)>5)return;const Ue=S.current.getBoundingClientRect(),je=new ht(($.clientX-Ue.left)/Ue.width*2-1,-(($.clientY-Ue.top)/Ue.height)*2+1),Mt=new Qw;Mt.setFromCamera(je,z.current);const tt=[];O.current.traverse(vt=>{vt.isMesh&&tt.push(vt)});const pt=Mt.intersectObjects(tt,!1);if(pt.length===0)return;const rt=pt[0].point.clone();if(de){Re.length===0?nt([rt]):Re.length===1?nt([Re[0],rt]):nt([rt]);return}if(St)if(!dn)Un(rt);else{const vt=dn.distanceTo(rt);ci(Rn=>[...Rn,{id:Date.now(),p1:dn,p2:rt,rawDistance:vt,screenX:0,screenY:0,visible:!0}]),Un(null)}},ui=$=>{if($.preventDefault(),Re.length<2)return;const _e=parseFloat(jt),ve=Re[0].distanceTo(Re[1]);if(_e>0&&ve>0){const Ue=_e/ve;ct(Ue),G(!1),oe("manual"),Pe(!1),nt([]),rn(""),j(`Calibrated to ${_e} mm`),typeof M=="function"&&M({scaleFactor:Ue,targetMm:_e})}};De.useEffect(()=>{const $=_e=>{if(!(_e.target.tagName==="INPUT"||_e.target.tagName==="TEXTAREA"))switch(_e.key.toLowerCase()){case"m":Pe(!1),nt([]),sn(ve=>!ve);break;case"c":sn(!1),Un(null),Pe(ve=>!ve),nt([]);break;case"p":be(ie==="perspective"?"orthographic":"perspective");break;case"g":yn(ve=>!ve);break;case"r":Se(ve=>!ve);break;case"f":Ee("iso");break;case"escape":dn?Un(null):St&&sn(!1),Re.length>0?nt([]):de&&Pe(!1),Ge(!1);break}};return window.addEventListener("keydown",$),()=>window.removeEventListener("keydown",$)},[dn,St,Re,de,ie,be,Ee]),De.useEffect(()=>{const $=S.current;if(!$)return;$.innerHTML="";const _e=$.clientWidth||800,ve=$.clientHeight||600,Ue=new $g;Ue.background=new ut("#090d16"),L.current=Ue;const je=new Vn(45,_e/ve,.001,1e3);je.position.set(0,.5,3),C.current=je;const Mt=new Wc(-1,1,1,-1,.001,1e3);w.current=Mt,z.current=je;const tt=new Kg({antialias:!0,alpha:!1,powerPreference:"high-performance"});tt.setSize(_e,ve),tt.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),tt.toneMapping=b_,tt.toneMappingExposure=1.1,tt.shadowMap.enabled=!1,tt.localClippingEnabled=!1,U.current=tt,$.appendChild(tt.domElement);const pt=new rA(je,tt.domElement);pt.enableDamping=!0,pt.dampingFactor=.06,pt.autoRotateSpeed=1.8,I.current=pt;const rt=new Hw(16777215,.75);Ue.add(rt);const vt=new Ki,Rn=new th(16775917,2.2);Rn.position.set(5,8,6),vt.add(Rn);const Ii=new th(9356796,1.3);Ii.position.set(-6,-2,-5),vt.add(Ii),Ue.add(vt),ne.current=vt,Ue.add(O.current),Ue.add(P.current),Ue.add(b.current);let Et=null;const Jo=new $g,ea=new Vn(50,1,.1,10);ea.position.set(0,0,2.6);const js=new tA(1);Jo.add(js),x.current&&(Et=new Kg({canvas:x.current,alpha:!0,antialias:!0}),Et.setSize(64,64),Et.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)));let ms=!1;Zi(!0),ps(null),ln(),nt([]),Pe(!1),new _A().load(o,Xt=>{if(ms){Rt(Xt.scene);return}Rt(O.current),O.current.clear(),ue.current.clear();let Cn=0,Yn=0,Jt=0;Xt.scene.traverse(on=>{on.isMesh&&(Jt++,Cn+=on.geometry.index?on.geometry.index.count/3:on.geometry.attributes.position.count/3,Yn+=on.geometry.attributes.position.count,on.material&&(on.material.clippingPlanes=[me.current],on.material.clipShadows=!1,on.material.side=vi),ue.current.set(on.uuid,on.material))}),O.current.add(Xt.scene);const Mn=new yi().setFromObject(Xt.scene);le.current.copy(Mn);const Pn=Mn.getSize(new V),ur=Mn.getCenter(new V),di=Math.max(Pn.x,Pn.y,Pn.z),el={triangles:Math.round(Cn),vertices:Math.round(Yn),meshes:Jt,rawSize:Pn};R(el);const{knownMaxDimensionMm:na,defaultUnitScale:Or,sanityRangeMm:tl,enableDeepLink:Kc,onLoad:kr}=ce.current;if(na&&di>0)ct(na/di),G(!1),oe("catalog");else if(Or&&di>0){const on=di*Or,[qn,nl]=tl;on>=qn&&on<=nl?(ct(Or),G(!1),oe("default")):(ct(null),G(!0),oe("unscaled"))}else ct(null),G(!0),oe("unscaled");k.current&&(k.current.geometry.dispose(),k.current.material.dispose(),Ue.remove(k.current)),ae.current&&(ae.current.geometry.dispose(),ae.current.material.dispose(),Ue.remove(ae.current)),fe.current&&(fe.current.geometry.dispose(),fe.current.material.dispose(),Ue.remove(fe.current));const _s=Math.pow(10,Math.ceil(Math.log10(Math.max(di*2,.001)))),Fi=new Jw(_s,20,16096779,3359061);Fi.position.set(ur.x,Mn.min.y,ur.z),Fi.visible=!1,Ue.add(Fi),k.current=Fi;const Br=new eA(Xt.scene,16096779);Br.visible=!1,Ue.add(Br),ae.current=Br;const $c=new Qa(di*1.3,di*1.3),Zc=new Pi({color:3718648,transparent:!0,opacity:.14,side:vi,depthWrite:!1}),vs=new Gn($c,Zc);if(vs.visible=!1,Ue.add(vs),fe.current=vs,Zi(!1),typeof kr=="function"&&kr(el),Kc){const on=window.location.hash.match(/view=([A-Za-z0-9+/=]+)/);if(on)try{const qn=JSON.parse(atob(on[1]));if(qn.p&&qn.t){je.position.fromArray(qn.p),pt.target.fromArray(qn.t),pt.update(),qn.shade&&F(qn.shade),qn.scale&&(ct(qn.scale),G(!1),oe("shared")),qn.proj==="orthographic"&&be("orthographic");return}}catch{}}Ee("iso")},Xt=>{!ms&&Xt.total>0&&Si(Math.round(Xt.loaded/Xt.total*100))},Xt=>{if(ms)return;console.error("Error loading 3D asset:",Xt),ps("Failed to fetch or parse GLB binary. Check file path or CORS headers."),Zi(!1),typeof ce.current.onError=="function"&&ce.current.onError(Xt)});let ta;const cr=new V,gs=()=>{ta=requestAnimationFrame(gs);const Xt=z.current||je;if(H.current){const Jt=H.current;Jt.alpha=Math.min(Jt.alpha+.08,1),Xt.position.lerp(Jt.targetPos,Jt.alpha),pt.target.lerp(Jt.targetLook,Jt.alpha),Jt.alpha>=1&&(H.current=null)}pt.update(),tt.render(Ue,Xt),Et&&(js.quaternion.copy(Xt.quaternion).invert(),Et.render(Jo,ea));const Cn=$.clientWidth,Yn=$.clientHeight;if(Xn.current.length>0&&Cn>0&&Yn>0){const Jt=Xn.current.map(Pn=>(cr.addVectors(Pn.p1,Pn.p2).multiplyScalar(.5),cr.project(Xt),{...Pn,screenX:(cr.x*.5+.5)*Cn,screenY:(-(cr.y*.5)+.5)*Yn,visible:cr.z<1}));Jt.some((Pn,ur)=>Math.abs(Pn.screenX-Xn.current[ur].screenX)>.5||Math.abs(Pn.screenY-Xn.current[ur].screenY)>.5||Pn.visible!==Xn.current[ur].visible)&&ci(Jt)}};gs();const Ui=new ResizeObserver(Xt=>{for(const Cn of Xt){const{width:Yn,height:Jt}=Cn.contentRect;if(Yn>0&&Jt>0){const Mn=Yn/Jt;je.aspect=Mn,je.updateProjectionMatrix();const Pn=(Mt.top-Mt.bottom)/2;Mt.left=-Pn*Mn,Mt.right=Pn*Mn,Mt.updateProjectionMatrix(),tt.setSize(Yn,Jt)}}});return Ui.observe($),()=>{ms=!0,cancelAnimationFrame(ta),Ui.disconnect(),pt.dispose(),Rt(O.current),O.current.clear(),ue.current.clear(),bt(P.current),bt(b.current),k.current&&(k.current.geometry.dispose(),k.current.material.dispose()),ae.current&&(ae.current.geometry.dispose(),ae.current.material.dispose()),fe.current&&(fe.current.geometry.dispose(),fe.current.material.dispose()),Et&&Et.dispose(),tt.domElement.parentNode&&tt.domElement.parentNode.removeChild(tt.domElement),tt.dispose(),tt.forceContextLoss()}},[o,Ee,be,ln,bt,Rt]),De.useEffect(()=>{const $=U.current,_e=me.current,ve=fe.current,Ue=le.current;if(!$||!_e||($.localClippingEnabled=Qe,ve&&(ve.visible=Qe),!Qe||Ue.isEmpty()))return;const je=Ue.min[qe],Mt=Ue.max[qe],tt=Ue.getCenter(new V),pt=A/100,rt=je+(Mt-je)*pt;qe==="x"?(_e.normal.set(-1,0,0),_e.constant=rt,ve&&(ve.position.set(rt,tt.y,tt.z),ve.rotation.set(0,Math.PI/2,0))):qe==="y"?(_e.normal.set(0,-1,0),_e.constant=rt,ve&&(ve.position.set(tt.x,rt,tt.z),ve.rotation.set(Math.PI/2,0,0))):(_e.normal.set(0,0,-1),_e.constant=rt,ve&&(ve.position.set(tt.x,tt.y,rt),ve.rotation.set(0,0,0)))},[Qe,qe,A]),De.useEffect(()=>{if(!O.current||!ee.current)return;const $=ee.current,_e=[me.current];[$.normals,$.sculpt,$.relief,$.vertexColored,$.vertexPlain].forEach(ve=>{ve.wireframe=Q,ve.clippingPlanes=_e}),O.current.traverse(ve=>{if(!ve.isMesh)return;const Ue=ue.current.get(ve.uuid);se==="pbr"?Ue&&(Ue.wireframe=Q,Ue.clippingPlanes=_e,ve.material=Ue):se==="relief"?ve.material=$.relief:se==="normals"?ve.material=$.normals:se==="vertex"?ve.material=ve.geometry.attributes.color?$.vertexColored:$.vertexPlain:se==="sculpt"&&(ve.material=$.sculpt)})},[se,Q]),De.useEffect(()=>{I.current&&(I.current.autoRotate=we)},[we]),De.useEffect(()=>{U.current&&(U.current.toneMappingExposure=Le)},[Le]),De.useEffect(()=>{var $;if(ne.current&&(ne.current.rotation.y=Po.degToRad(it)),($=ee.current)!=null&&$.relief){const _e=Po.degToRad(it);ee.current.relief.uniforms.uLightDir.value.set(Math.sin(_e),.75,Math.cos(_e)).normalize()}},[it]),De.useEffect(()=>{L.current&&(L.current.background=new ut(At))},[At]),De.useEffect(()=>{k.current&&(k.current.visible=X)},[X]),De.useEffect(()=>{ae.current&&(ae.current.visible=xt)},[xt]);const Ft=`${te(Qi.rawSize.x,!0)} × ${te(Qi.rawSize.y,!0)} × ${te(Qi.rawSize.z,!0)}`;return q.jsxs("div",{ref:E,className:"gmv-root relative w-full h-full font-sans select-none overflow-hidden bg-slate-950",children:["            ",q.jsx("div",{ref:S,onPointerDown:_t,onPointerUp:Je,className:`w-full h-full ${St||de?"cursor-crosshair":"cursor-grab active:cursor-grabbing"}`}),q.jsxs("div",{className:"pointer-events-none absolute bottom-20 left-4 z-10 flex flex-col items-center",children:[q.jsx("canvas",{ref:x,width:64,height:64,className:"w-16 h-16 opacity-85"}),q.jsx("span",{className:"text-[9px] font-mono tracking-widest text-slate-500 -mt-1",children:"X Y Z"})]}),lt&&q.jsx("div",{className:"absolute bottom-24 left-1/2 -translate-x-1/2 z-40 px-4 py-1.5 rounded-full bg-slate-800/95 border border-amber-500/40 text-amber-300 text-xs font-medium shadow-2xl",children:lt}),hs&&q.jsxs("div",{className:"absolute inset-0 z-40 flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-sm",children:[q.jsx("div",{className:"w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden mb-3",children:q.jsx("div",{className:"h-full bg-amber-500 transition-all duration-200",style:{width:`${Ur||25}%`}})}),q.jsxs("p",{className:"text-xs font-mono text-slate-300",children:["Loading 3D Geometry... ",Ur>0?`${Ur}%`:""]})]}),Fr&&q.jsx("div",{className:"absolute inset-0 z-40 flex items-center justify-center bg-slate-950/95 p-6",children:q.jsxs("div",{className:"max-w-md bg-red-950/40 border border-red-500/40 rounded-2xl p-5 text-center",children:[q.jsx("p",{className:"text-sm font-semibold text-red-300 mb-1",children:"3D Asset Load Error"}),q.jsx("p",{className:"text-xs text-red-200/80",children:Fr})]})}),q.jsx("div",{className:"pointer-events-none absolute inset-0 z-10 overflow-hidden",children:Sn.map(($,_e)=>$.visible&&q.jsxs("div",{style:{transform:`translate(-50%, -50%) translate(${$.screenX}px, ${$.screenY}px)`},className:"absolute top-0 left-0 px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 font-mono text-[11px] font-bold shadow-lg border border-amber-300 whitespace-nowrap",children:["#",_e+1,": ",te($.rawDistance,!0)]},$.id))}),de&&q.jsxs("div",{className:"absolute top-20 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 bg-slate-900/95 border border-emerald-500/50 text-slate-100 px-4 py-2 rounded-full shadow-2xl text-xs",children:[Re.length<2?q.jsx("span",{className:"text-emerald-300 font-medium",children:Re.length===0?"Step 1/2: Click first reference point on scale bar or known feature":"Step 2/2: Click second reference point to define known distance"}):q.jsxs("form",{onSubmit:ui,className:"flex items-center gap-2",children:[q.jsx("span",{className:"text-slate-300",children:"Known length (mm):"}),q.jsx("input",{type:"number",step:"0.01",min:"0.01",autoFocus:!0,placeholder:"e.g. 25.0",value:jt,onChange:$=>rn($.target.value),className:"w-24 px-2 py-1 rounded bg-slate-950 border border-slate-700 text-emerald-300 font-mono focus:outline-none focus:border-emerald-500"}),q.jsx("button",{type:"submit",className:"px-2.5 py-1 rounded bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400",children:"Apply Scale"})]}),q.jsx("button",{onClick:()=>{Pe(!1),nt([])},className:"text-slate-400 hover:text-slate-200 ml-1",children:"Cancel"})]}),St&&!de&&q.jsxs("div",{className:"absolute top-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-amber-500/95 text-slate-950 px-4 py-1.5 rounded-full shadow-xl text-xs font-medium",children:[q.jsx("span",{children:dn?"Click second point on surface to complete measurement":"Click any surface point to start measuring"}),!Nt&&q.jsx("div",{className:"flex items-center gap-1 bg-slate-950/20 rounded-full px-1.5 py-0.5",children:["mm","cm","in"].map($=>q.jsx("button",{onClick:()=>Ir($),className:`px-1.5 py-0.5 rounded-full text-[10px] font-mono uppercase transition ${un===$?"bg-slate-950 text-amber-400":"text-slate-900 hover:bg-slate-950/10"}`,children:$},$))}),Nt&&q.jsx("button",{onClick:()=>{sn(!1),Un(null),Pe(!0)},className:"px-2 py-0.5 rounded-full bg-slate-950 text-emerald-400 text-[10px] font-mono uppercase hover:bg-slate-900",children:"Calibrate Scale"}),Sn.length>0&&q.jsxs("button",{onClick:ln,className:"underline font-semibold hover:text-slate-800 ml-1",children:["Clear (",Sn.length,")"]})]}),Qe&&q.jsxs("div",{className:"absolute bottom-20 right-4 z-20 flex items-center gap-2.5 bg-slate-900/95 backdrop-blur-xl border border-sky-500/40 rounded-xl px-3.5 py-2 shadow-2xl text-xs",children:[q.jsx("span",{className:"font-mono text-[11px] uppercase text-sky-400",children:"Slice"}),q.jsx("div",{className:"flex items-center gap-1 bg-slate-950 p-0.5 rounded-lg border border-slate-800",children:["x","y","z"].map($=>q.jsx("button",{onClick:()=>N($),className:`px-2 py-0.5 rounded uppercase font-mono text-[10px] ${qe===$?"bg-sky-500 text-slate-950 font-bold":"text-slate-400 hover:text-slate-200"}`,children:$},$))}),q.jsx("input",{type:"range",min:"0",max:"100",step:"1",value:A,onChange:$=>J(parseInt($.target.value,10)),className:"w-24 accent-sky-400 cursor-pointer h-1 bg-slate-800 rounded"}),q.jsxs("span",{className:"font-mono text-[11px] text-slate-300 w-8",children:[A,"%"]})]}),q.jsxs("header",{className:"absolute top-4 left-4 z-20 flex items-center gap-3 bg-slate-900/85 backdrop-blur-md border border-slate-800/80 rounded-xl px-4 py-2.5 shadow-2xl",children:[c&&q.jsx("a",{href:c,title:"Back",className:"p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/70 transition",children:q.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:q.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})})}),q.jsxs("div",{children:[q.jsxs("h1",{className:"text-sm font-semibold tracking-wide text-slate-100 flex items-center gap-2 flex-wrap",children:[q.jsx("span",{children:e}),i&&q.jsx("span",{className:"text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20",children:i}),Nt?q.jsx("button",{onClick:()=>{sn(!1),Pe(!0),nt([])},title:"Mesh has no physical scale. Click to calibrate using a known dimension.",className:"text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-red-500/15 text-red-300 border border-red-500/30 hover:bg-red-500/25 transition",children:"Unscaled • Calibrate"}):q.jsxs("span",{title:`Scale source: ${Ne}`,className:"text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:["Scaled (",Ne,")"]})]}),t&&q.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:t})]})]}),q.jsxs("div",{className:"absolute top-4 right-4 z-20 flex items-center gap-1.5 flex-wrap justify-end",children:[q.jsxs("button",{onClick:()=>{sn(!1),Un(null),Pe(!de),nt([])},title:"2-Point Scale Calibration (Shortcut: C)",className:`flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-xl border backdrop-blur-md transition-all shadow-xl ${de?"bg-emerald-500 text-slate-950 border-emerald-400 shadow-emerald-500/20":"bg-slate-900/85 text-slate-200 border-slate-800/80 hover:bg-slate-800"}`,children:[q.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:q.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"})}),q.jsx("span",{className:"hidden md:inline",children:"Calibrate"})]}),q.jsxs("button",{onClick:()=>{Pe(!1),nt([]),sn(!St),Un(null)},title:"Toggle Point-to-Point Measurement (Shortcut: M)",className:`flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-xl border backdrop-blur-md transition-all shadow-xl ${St?"bg-amber-500 text-slate-950 border-amber-400 shadow-amber-500/20":"bg-slate-900/85 text-slate-200 border-slate-800/80 hover:bg-slate-800"}`,children:[q.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:q.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})}),q.jsx("span",{className:"hidden sm:inline",children:"Measure"})]}),g&&q.jsx("button",{onClick:Ke,title:"Copy direct link to current camera angle, shading & calibration",className:"flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-xl border border-slate-800/80 bg-slate-900/85 text-slate-200 hover:bg-slate-800 backdrop-blur-md transition-all shadow-xl",children:q.jsx("svg",{className:"w-4 h-4 text-slate-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:q.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"})})}),q.jsxs("div",{className:"relative",children:[q.jsxs("button",{onClick:()=>Ge(!pe),disabled:hs||!!Fr||yt||Oe,className:"flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-xl border border-slate-800/80 bg-slate-900/85 text-slate-200 hover:bg-slate-800 disabled:opacity-50 backdrop-blur-md transition-all shadow-xl",children:[q.jsx("svg",{className:"w-4 h-4 text-amber-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:q.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})}),q.jsx("span",{children:Oe?"Recording 360°...":yt?"Exporting...":"Export"})]}),pe&&q.jsxs("div",{className:"absolute right-0 mt-2 w-60 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-xl shadow-2xl py-1.5 z-30 text-xs",children:[q.jsx("div",{className:"px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-500",children:"3D Geometry Formats"}),q.jsxs("button",{onClick:dt,className:"w-full text-left px-3 py-2 hover:bg-slate-800 text-slate-200 flex items-center justify-between",children:[q.jsx("span",{children:"Original GLB (Textures)"}),q.jsx("span",{className:"text-[10px] font-mono text-amber-400",children:".GLB"})]}),q.jsxs("button",{onClick:()=>ft("obj"),className:"w-full text-left px-3 py-2 hover:bg-slate-800 text-slate-200 flex items-center justify-between",children:[q.jsx("span",{children:"Wavefront Mesh"}),q.jsx("span",{className:"text-[10px] font-mono text-slate-400",children:".OBJ"})]}),q.jsxs("button",{onClick:()=>ft("stl"),className:"w-full text-left px-3 py-2 hover:bg-slate-800 text-slate-200 flex items-center justify-between",children:[q.jsx("span",{children:"3D Print Ready"}),q.jsx("span",{className:"text-[10px] font-mono text-slate-400",children:".STL"})]}),q.jsx("div",{className:"my-1 border-t border-slate-800"}),q.jsx("div",{className:"px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-500",children:"Media & Publication"}),q.jsxs("button",{onClick:$e,className:"w-full text-left px-3 py-2 hover:bg-slate-800 text-slate-200 flex items-center justify-between",children:[q.jsx("span",{children:"Viewport Snapshot"}),q.jsx("span",{className:"text-[10px] font-mono text-emerald-400",children:".PNG"})]}),q.jsxs("button",{onClick:Dt,className:"w-full text-left px-3 py-2 hover:bg-slate-800 text-slate-200 flex items-center justify-between",children:[q.jsx("span",{children:"360° Turntable Clip (5s)"}),q.jsx("span",{className:"text-[10px] font-mono text-sky-400",children:".WEBM"})]})]})]}),q.jsxs("button",{onClick:()=>xe(!ge),className:`flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-xl border backdrop-blur-md transition-all shadow-xl ${ge?"bg-amber-500 text-slate-950 border-amber-400 shadow-amber-500/20":"bg-slate-900/85 text-slate-200 border-slate-800/80 hover:bg-slate-800"}`,children:[q.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:q.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),q.jsx("span",{className:"hidden sm:inline",children:"Telemetry"})]}),q.jsx("button",{onClick:Y,className:"flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-xl border border-slate-800/80 bg-slate-900/85 text-slate-200 hover:bg-slate-800 backdrop-blur-md transition-all shadow-xl",title:Ie?"Exit Fullscreen":"Enter Fullscreen",children:Ie?q.jsx("svg",{className:"w-4 h-4 text-amber-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:q.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 9L4 4m0 0l5 0m-5 0l0 5m6 6l5 5m0 0l-5 0m5 0l0-5M15 9l5-5m0 0l-5 0m5 0l0 5m-6 6l-5 5m0 0l5 0m-5 0l0-5"})}):q.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:q.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"})})})]}),q.jsxs("nav",{className:"absolute bottom-5 left-1/2 -translate-x-1/2 z-20 max-w-6xl w-[95%] bg-slate-900/90 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-2 shadow-2xl flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300",children:[q.jsx("div",{className:"flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800/60",children:[{id:"pbr",label:"PBR"},{id:"relief",label:"Relief"},{id:"sculpt",label:"Clay"},{id:"normals",label:"Normals"},{id:"vertex",label:"Vertex"}].map($=>q.jsx("button",{onClick:()=>F($.id),className:`px-2 py-1 rounded-lg font-medium transition ${se===$.id?"bg-amber-500 text-slate-950 shadow-sm":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,children:$.label},$.id))}),q.jsxs("div",{className:"flex items-center gap-1",children:[q.jsx("button",{onClick:()=>he(!Q),className:`px-2 py-1.5 rounded-lg font-medium border transition ${Q?"bg-amber-500/20 text-amber-300 border-amber-500/40":"bg-slate-800/50 hover:bg-slate-800 text-slate-300 border-slate-700/60"}`,children:"Wire"}),q.jsx("button",{onClick:()=>Bt(!Qe),title:"Toggle Cross-Section Slicer",className:`px-2 py-1.5 rounded-lg font-medium border transition ${Qe?"bg-sky-500/20 text-sky-300 border-sky-500/40":"bg-slate-800/50 hover:bg-slate-800 text-slate-300 border-slate-700/60"}`,children:"Slice"}),q.jsx("button",{onClick:()=>yn(!X),title:"Toggle Scale Grid (G)",className:`px-2 py-1.5 rounded-lg font-medium border transition ${X?"bg-amber-500/20 text-amber-300 border-amber-500/40":"bg-slate-800/50 hover:bg-slate-800 text-slate-300 border-slate-700/60"}`,children:"Grid"}),q.jsx("button",{onClick:()=>Ct(!xt),className:`px-2 py-1.5 rounded-lg font-medium border transition ${xt?"bg-amber-500/20 text-amber-300 border-amber-500/40":"bg-slate-800/50 hover:bg-slate-800 text-slate-300 border-slate-700/60"}`,children:"Bounds"}),q.jsx("button",{onClick:()=>Se(!we),title:"Toggle Auto-Rotate (R)",className:`px-2 py-1.5 rounded-lg font-medium border transition ${we?"bg-amber-500/20 text-amber-300 border-amber-500/40":"bg-slate-800/50 hover:bg-slate-800 text-slate-300 border-slate-700/60"}`,children:"Rotate"})]}),q.jsxs("div",{className:"flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800/60",children:[q.jsx("button",{onClick:()=>be(ie==="perspective"?"orthographic":"perspective"),title:"Toggle Perspective / Orthographic Projection (P)",className:`px-2 py-1 rounded-lg font-mono text-[11px] uppercase transition ${ie==="orthographic"?"bg-sky-500 text-slate-950 font-bold":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:ie==="orthographic"?"Ortho":"Persp"}),q.jsx("div",{className:"w-px h-4 bg-slate-800 mx-0.5"}),[{id:"iso",label:"Iso"},{id:"front",label:"Front"},{id:"top",label:"Top"},{id:"side",label:"Side"}].map($=>q.jsx("button",{onClick:()=>Ee($.id),className:"px-2 py-1 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition",children:$.label},$.id))]}),q.jsxs("div",{className:"flex items-center gap-2.5 bg-slate-950/60 px-2.5 py-1.5 rounded-xl border border-slate-800/60",children:[q.jsxs("div",{className:"flex items-center gap-1",title:"Raking Light Angle",children:[q.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"Light"}),q.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:it,onChange:$=>Ht(parseFloat($.target.value)),className:"w-12 accent-amber-500 cursor-pointer h-1 bg-slate-800 rounded"})]}),q.jsxs("div",{className:"flex items-center gap-1",title:"Exposure",children:[q.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"Exp"}),q.jsx("input",{type:"range",min:"0.2",max:"3.0",step:"0.1",value:Le,onChange:$=>ze(parseFloat($.target.value)),className:"w-12 accent-amber-500 cursor-pointer h-1 bg-slate-800 rounded"})]}),q.jsxs("div",{className:"flex items-center gap-1",children:[["#090d16","#18181b","#334155","#e2e8f0"].map($=>q.jsx("button",{onClick:()=>Vt($),style:{backgroundColor:$},className:`w-3.5 h-3.5 rounded-full border transition ${At===$?"border-amber-400 scale-110":"border-slate-600 hover:scale-105"}`},$)),q.jsx("input",{type:"color",value:At,onChange:$=>Vt($.target.value),className:"w-4 h-4 rounded cursor-pointer bg-transparent border-0",title:"Custom background color"})]})]})]}),ge&&q.jsxs("aside",{className:"absolute top-16 right-4 z-30 w-80 bg-slate-900/95 backdrop-blur-xl border border-slate-800/90 rounded-2xl p-4 shadow-2xl text-slate-300 space-y-4",children:[q.jsxs("div",{className:"flex items-center justify-between pb-2.5 border-b border-slate-800",children:[q.jsx("h2",{className:"text-xs font-semibold uppercase tracking-wider text-slate-100",children:"Mesh Telemetry"}),q.jsx("button",{onClick:()=>xe(!1),className:"text-slate-500 hover:text-slate-300 text-sm",children:"✕"})]}),q.jsxs("dl",{className:"space-y-2 text-xs",children:[q.jsxs("div",{className:"flex justify-between",children:[q.jsx("dt",{className:"text-slate-500",children:"Bounding Box"}),q.jsx("dd",{className:"font-mono text-slate-200",children:Ft})]}),q.jsxs("div",{className:"flex justify-between",children:[q.jsx("dt",{className:"text-slate-500",children:"Scale Status"}),q.jsx("dd",{className:"font-mono text-slate-200 capitalize",children:Nt?"Unscaled":`${Ne} calibrated`})]}),q.jsxs("div",{className:"flex justify-between",children:[q.jsx("dt",{className:"text-slate-500",children:"Triangles"}),q.jsx("dd",{className:"font-mono text-slate-200",children:Qi.triangles.toLocaleString()})]}),q.jsxs("div",{className:"flex justify-between",children:[q.jsx("dt",{className:"text-slate-500",children:"Vertices"}),q.jsx("dd",{className:"font-mono text-slate-200",children:Qi.vertices.toLocaleString()})]}),q.jsxs("div",{className:"flex justify-between",children:[q.jsx("dt",{className:"text-slate-500",children:"Sub-meshes"}),q.jsx("dd",{className:"font-mono text-slate-200",children:Qi.meshes})]}),s&&q.jsxs("div",{className:"flex justify-between",children:[q.jsx("dt",{className:"text-slate-500",children:"Source File"}),q.jsx("dd",{className:"font-mono text-slate-200 truncate max-w-[160px]",children:s})]}),a&&q.jsxs("div",{className:"flex justify-between",children:[q.jsx("dt",{className:"text-slate-500",children:"File Size"}),q.jsx("dd",{className:"font-mono text-slate-200",children:a})]})]}),Sn.length>0&&q.jsxs("div",{className:"pt-2.5 border-t border-slate-800",children:[q.jsxs("div",{className:"flex items-center justify-between mb-2",children:[q.jsx("span",{className:"text-[11px] font-semibold uppercase tracking-wider text-amber-400",children:"Recorded Measurements"}),q.jsx("button",{onClick:ln,className:"text-[11px] text-slate-400 hover:text-red-400",children:"Clear All"})]}),q.jsx("ul",{className:"space-y-1.5 max-h-32 overflow-y-auto pr-1",children:Sn.map(($,_e)=>q.jsxs("li",{className:"flex items-center justify-between bg-slate-950/60 px-2.5 py-1.5 rounded-lg border border-slate-800/80 text-xs font-mono",children:[q.jsxs("span",{className:"text-slate-400",children:["Point #",_e+1]}),q.jsx("span",{className:"text-amber-300 font-semibold",children:te($.rawDistance,!0)})]},$.id))})]}),q.jsxs("div",{className:"pt-2.5 border-t border-slate-800 text-[11px] text-slate-500 grid grid-cols-2 gap-1.5",children:[q.jsxs("div",{children:[q.jsx("kbd",{className:"px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono",children:"M"})," Measure"]}),q.jsxs("div",{children:[q.jsx("kbd",{className:"px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono",children:"C"})," ","Calibrate"]}),q.jsxs("div",{children:[q.jsx("kbd",{className:"px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono",children:"P"})," ","Ortho/Persp"]}),q.jsxs("div",{children:[q.jsx("kbd",{className:"px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono",children:"G"})," Grid"]}),q.jsxs("div",{children:[q.jsx("kbd",{className:"px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono",children:"R"})," Rotate"]}),q.jsxs("div",{children:[q.jsx("kbd",{className:"px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono",children:"F"})," Fit View"]})]})]})]})}function n1(){return q.jsx("div",{style:{width:"100vw",height:"100vh"},children:q.jsx(t1,{modelUrl:"./models/hatshepsut.glb",title:"Hapshet (3D Scan)",subtitle:"Photogrammetry / GLB Asset • Demo",badge:"GLB",fileName:"hapshet.glb",defaultUnitScale:1e3,onLoad:o=>{console.log("Model loaded:",o)}})})}qv.createRoot(document.getElementById("root")).render(q.jsx(Vv.StrictMode,{children:q.jsx(n1,{})}));
