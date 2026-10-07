var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function O(e,t){return D(e.type,t,e.props)}function ee(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function te(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function j(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ne(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ne(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+te(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),ne(o,r,i,``,function(e){return e})):o!=null&&(ee(o)&&(o=O(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+te(a,u),c+=ne(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+te(a,u++),c+=ne(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ne(j(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function re(e,t,n){if(e==null)return e;var r=[],i=0;return ne(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function M(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ie=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function ae(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,ie)}catch(e){ie(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function oe(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else ae(oe.bind(null,e))}var N={map:re,forEach:function(e,t,n){re(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return re(e,function(){t++}),t},toArray:function(e){return re(e,function(e){return e})||[]},only:function(e){if(!ee(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=N,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=oe,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ee,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:M}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=ae,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.0`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&A(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&A(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var ee=new MessageChannel,k=ee.port2;ee.port1.onmessage=D,O=function(){k.postMessage(null)}}else O=function(){_(D,0)};function A(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,A(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.0`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function E(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var D=Object.assign,O=Symbol.for(`react.element`),ee=Symbol.for(`react.transitional.element`),k=Symbol.for(`react.portal`),A=Symbol.for(`react.fragment`),te=Symbol.for(`react.strict_mode`),j=Symbol.for(`react.profiler`),ne=Symbol.for(`react.consumer`),re=Symbol.for(`react.context`),M=Symbol.for(`react.forward_ref`),ie=Symbol.for(`react.suspense`),ae=Symbol.for(`react.suspense_list`),oe=Symbol.for(`react.memo`),N=Symbol.for(`react.lazy`),se=Symbol.for(`react.activity`),ce=Symbol.for(`react.legacy_hidden`),le=Symbol.for(`react.memo_cache_sentinel`),ue=Symbol.for(`react.view_transition`),de=Symbol.for(`react.recoverable`),fe=Symbol.iterator;function pe(e){return typeof e!=`object`||!e?null:(e=fe&&e[fe]||e[`@@iterator`],typeof e==`function`?e:null)}var me=Symbol.for(`react.client.reference`);function he(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===me?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case A:return`Fragment`;case j:return`Profiler`;case te:return`StrictMode`;case ie:return`Suspense`;case ae:return`SuspenseList`;case se:return`Activity`;case ue:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case k:return`Portal`;case re:return e.displayName||`Context`;case ne:return(e._context.displayName||`Context`)+`.Consumer`;case M:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case oe:return t=e.displayName||null,t===null?he(e.type)||`Memo`:t;case N:t=e._payload,e=e._init;try{return he(e(t))}catch{}}return null}var ge=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_e={pending:!1,data:null,method:null,action:null},ve=[],ye=-1;function be(e){return{current:e}}function xe(e){0>ye||(e.current=ve[ye],ve[ye]=null,ye--)}function Se(e,t){ye++,ve[ye]=e.current,e.current=t}var Ce=be(null),we=be(null),Te=be(null),Ee=be(null);function De(e,t){switch(Se(Te,t),Se(we,e),Se(Ce,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}xe(Ce),Se(Ce,e)}function I(){xe(Ce),xe(we),xe(Te)}function Oe(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,Se(Ee,e)),t=Ce.current;var n=dp(t,e.type);t!==n&&(Se(we,e),Se(Ce,n))}function ke(e){we.current===e&&(xe(Ce),xe(we)),Ee.current===e&&(xe(Ee),sh._currentValue=_e)}var Ae,L;function je(e){if(Ae===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ae=t&&t[1]||``,L=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ae+e+L}var R=!1;function z(e,t){if(!e||R)return``;R=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{R=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?je(n):``}function Me(e,t){switch(e.tag){case 26:case 27:case 5:return je(e.type);case 16:return je(`Lazy`);case 13:return e.child!==t&&t!==null?je(`Suspense Fallback`):je(`Suspense`);case 19:return je(`SuspenseList`);case 0:case 15:return z(e.type,!1);case 11:return z(e.type.render,!1);case 1:return z(e.type,!0);case 31:return je(`Activity`);case 30:return je(`ViewTransition`);default:return``}}function Ne(e){try{var t=``,n=null;do t+=Me(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Pe=Object.prototype.hasOwnProperty,Fe=t.unstable_scheduleCallback,Ie=t.unstable_cancelCallback,Le=t.unstable_shouldYield,Re=t.unstable_requestPaint,ze=t.unstable_now,Be=t.unstable_getCurrentPriorityLevel,Ve=t.unstable_ImmediatePriority,He=t.unstable_UserBlockingPriority,Ue=t.unstable_NormalPriority,We=t.unstable_LowPriority,Ge=t.unstable_IdlePriority,Ke=t.log,qe=t.unstable_setDisableYieldValue,Je=null,Ye=null;function Xe(e){if(typeof Ke==`function`&&qe(e),Ye&&typeof Ye.setStrictMode==`function`)try{Ye.setStrictMode(Je,e)}catch{}}var Ze=Math.clz32?Math.clz32:et,Qe=Math.log,$e=Math.LN2;function et(e){return e>>>=0,e===0?32:31-(Qe(e)/$e|0)|0}var tt=256,nt=262144,rt=4194304;function it(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function at(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=it(n))):i=it(o):i=it(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=it(n))):i=it(o)):i=it(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function ot(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function st(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-Ze(n),i=1<<r;t|=e[r],n&=~i}return t}function ct(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lt(){var e=rt;return rt<<=1,!(rt&62914560)&&(rt=4194304),e}function ut(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ft(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ze(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&pt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function pt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ze(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function mt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ht(e,t){var n=t&-t;return n=n&42?1:gt(n),(n&(e.suspendedLanes|t))===0?n:0}function gt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function _t(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function vt(){var e=F.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function yt(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var bt=Math.random().toString(36).slice(2),xt=`__reactFiber$`+bt,St=`__reactProps$`+bt,Ct=`__reactContainer$`+bt,wt=`__reactEvents$`+bt,Tt=`__reactListeners$`+bt,B=`__reactHandles$`+bt,V=`__reactResources$`+bt,Et=`__reactMarker$`+bt,Dt=`__reactLoad$`+bt;function Ot(e){delete e[xt],delete e[St],delete e[Tt],delete e[B]}function kt(e){var t;if(t=e[xt])return t;for(var n=e.parentNode;n;){if(t=n[Ct]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[xt])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function At(e){if(e=e[xt]||e[Ct]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function jt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Mt(e){var t=e[V];return t||=e[V]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Nt(e){e[Et]=!0}function H(e){e[Dt]=void 0}var Pt=new Set,Ft={};function It(e,t){Lt(e,t),Lt(e+`Capture`,t)}function Lt(e,t){for(Ft[e]=t,e=0;e<t.length;e++)Pt.add(t[e])}var Rt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),zt={},U={};function Bt(e){return Pe.call(U,e)?!0:Pe.call(zt,e)?!1:Rt.test(e)?U[e]=!0:(zt[e]=!0,!1)}var Vt=!1;function W(){var e=Vt;return Vt=!1,e}function Ht(e,t,n){if(Bt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Ut(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Wt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Gt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function G(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Kt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qt(e){if(!e._valueTracker){var t=G(e)?`checked`:`value`;e._valueTracker=Kt(e,t,``+e[t])}}function Jt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=G(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var Yt=/[\n"\\]/g;function Xt(e){return e.replace(Yt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Zt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Gt(t)):e.value!==``+Gt(t)&&(e.value=``+Gt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):$t(e,Gt(n)):o===`number`&&e.value==t?$t(e,Gt(e.value)):$t(e,Gt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Gt(s):e.removeAttribute(`name`)}function Qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){qt(e);return}n=n==null?``:``+Gt(n),t=t==null?n:``+Gt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),qt(e)}function $t(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function en(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Gt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function tn(e,t,n){t!=null&&(t=``+Gt(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+Gt(n)}function nn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ge(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Gt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),qt(e)}function rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var an=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function on(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||an.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function sn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,Vt=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(on(e,a,r),Vt=!0)}else for(var o in t)t.hasOwnProperty(o)&&on(e,o,t[o])}function cn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var ln=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),un=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dn(e){return un.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function fn(){}var pn=null;function mn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hn=null,gn=null;function _n(e){var t=At(e);if(t&&(e=t.stateNode)){var n=e[St]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Zt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Xt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[St]||null;if(!a)throw Error(i(90));Zt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Jt(r)}break a;case`textarea`:tn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&en(e,!!n.multiple,t,!1)}}}var vn=!1;function yn(e,t,n){if(vn)return e(t,n);vn=!0;try{return e(t)}finally{if(vn=!1,(hn!==null||gn!==null)&&(Ld(),hn&&(t=hn,e=gn,gn=hn=null,_n(t),e)))for(t=0;t<e.length;t++)_n(e[t])}}function bn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[St]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var xn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Sn=!1;if(xn)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Sn=!0}}),window.addEventListener(`test`,Cn,Cn),window.removeEventListener(`test`,Cn,Cn)}catch{Sn=!1}var wn=null,Tn=null,En=null;function Dn(){if(En)return En;var e,t=Tn,n=t.length,r,i=`value`in wn?wn.value:wn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return En=i.slice(e,1<r?1-r:void 0)}function On(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kn(){return!0}function An(){return!1}function jn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?kn:An,this.isPropagationStopped=An,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=kn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=kn)},persist:function(){},isPersistent:kn}),t}var Mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nn=jn(Mn),Pn=D({},Mn,{view:0,detail:0}),Fn=jn(Pn),In,Ln,Rn,zn=D({},Pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Rn&&(Rn&&e.type===`mousemove`?(In=e.screenX-Rn.screenX,Ln=e.screenY-Rn.screenY):Ln=In=0,Rn=e),In)},movementY:function(e){return`movementY`in e?e.movementY:Ln}}),Bn=jn(zn),Vn=jn(D({},zn,{dataTransfer:0})),Hn=jn(D({},Pn,{relatedTarget:0})),Un=jn(D({},Mn,{animationName:0,elapsedTime:0,pseudoElement:0})),Wn=jn(D({},Mn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Gn=jn(D({},Mn,{data:0})),Kn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},qn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Jn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Yn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jn[e])?!!t[e]:!1}function Xn(){return Yn}var Zn=jn(D({},Pn,{key:function(e){if(e.key){var t=Kn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=On(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?qn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xn,charCode:function(e){return e.type===`keypress`?On(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?On(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Qn=jn(D({},zn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),$n=jn(D({},Mn,{submitter:0})),er=jn(D({},Pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xn})),tr=jn(D({},Mn,{propertyName:0,elapsedTime:0,pseudoElement:0})),nr=jn(D({},zn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),rr=jn(D({},Mn,{newState:0,oldState:0,source:0})),ir=[9,13,27,32],ar=xn&&`CompositionEvent`in window,or=null;xn&&`documentMode`in document&&(or=document.documentMode);var sr=xn&&`TextEvent`in window&&!or,cr=xn&&(!ar||or&&8<or&&11>=or),lr=` `,ur=!1;function dr(e,t){switch(e){case`keyup`:return ir.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function fr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var pr=!1;function mr(e,t){switch(e){case`compositionend`:return fr(t);case`keypress`:return t.which===32?(ur=!0,lr):null;case`textInput`:return e=t.data,e===lr&&ur?null:e;default:return null}}function hr(e,t){if(pr)return e===`compositionend`||!ar&&dr(e,t)?(e=Dn(),En=Tn=wn=null,pr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return cr&&t.locale!==`ko`?null:t.data;default:return null}}var gr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _r(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!gr[e.type]:t===`textarea`}function vr(e,t,n,r){hn?gn?gn.push(r):gn=[r]:hn=r,t=qf(t,`onChange`),0<t.length&&(n=new Nn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var yr=null,br=null;function xr(e){Bf(e,0)}function Sr(e){if(Jt(jt(e)))return e}function Cr(e,t){if(e===`change`)return t}var wr=!1;if(xn){var Tr;if(xn){var Er=`oninput`in document;if(!Er){var Dr=document.createElement(`div`);Dr.setAttribute(`oninput`,`return;`),Er=typeof Dr.oninput==`function`}Tr=Er}else Tr=!1;wr=Tr&&(!document.documentMode||9<document.documentMode)}function Or(){yr&&(yr.detachEvent(`onpropertychange`,kr),br=yr=null)}function kr(e){if(e.propertyName===`value`&&Sr(br)){var t=[];vr(t,br,e,mn(e)),yn(xr,t)}}function Ar(e,t,n){e===`focusin`?(Or(),yr=t,br=n,yr.attachEvent(`onpropertychange`,kr)):e===`focusout`&&Or()}function jr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Sr(br)}function Mr(e,t){if(e===`click`)return Sr(t)}function Nr(e,t){if(e===`input`||e===`change`)return Sr(t)}function Pr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Fr=typeof Object.is==`function`?Object.is:Pr;function Ir(e,t){if(Fr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Pe.call(t,i)||!Fr(e[i],t[i]))return!1}return!0}function Lr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Rr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zr(e,t){var n=Rr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Rr(n)}}function Br(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Br(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Lr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lr(e.document)}return t}function Hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ur=xn&&`documentMode`in document&&11>=document.documentMode,Wr=null,Gr=null,Kr=null,qr=!1;function Jr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qr||Wr==null||Wr!==Lr(r)||(r=Wr,`selectionStart`in r&&Hr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&Ir(Kr,r)||(Kr=r,r=qf(Gr,`onSelect`),0<r.length&&(t=new Nn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Wr)))}function Yr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Xr={animationend:Yr(`Animation`,`AnimationEnd`),animationiteration:Yr(`Animation`,`AnimationIteration`),animationstart:Yr(`Animation`,`AnimationStart`),transitionrun:Yr(`Transition`,`TransitionRun`),transitionstart:Yr(`Transition`,`TransitionStart`),transitioncancel:Yr(`Transition`,`TransitionCancel`),transitionend:Yr(`Transition`,`TransitionEnd`)},Zr={},Qr={};xn&&(Qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),`TransitionEvent`in window||delete Xr.transitionend.transition);function $r(e){if(Zr[e])return Zr[e];if(!Xr[e])return e;var t=Xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qr)return Zr[e]=t[n];return e}var ei=$r(`animationend`),ti=$r(`animationiteration`),ni=$r(`animationstart`),ri=$r(`transitionrun`),ii=$r(`transitionstart`),ai=$r(`transitioncancel`),oi=$r(`transitionend`),si=new Map,ci=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ci.push(`scrollEnd`);function li(e,t){si.set(e,t),It(t,[e])}var ui=0;function di(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=vd.identifierPrefix;var n=ui++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function fi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Ed;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function pi(e,t){return e=fi(e),t=fi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var mi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},hi=[],gi=0,_i=0;function vi(){for(var e=gi,t=_i=gi=0;t<e;){var n=hi[t];hi[t++]=null;var r=hi[t];hi[t++]=null;var i=hi[t];hi[t++]=null;var a=hi[t];if(hi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Si(n,i,a)}}function yi(e,t,n,r){hi[gi++]=e,hi[gi++]=t,hi[gi++]=n,hi[gi++]=r,_i|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function bi(e,t,n,r){return yi(e,t,n,r),Ci(e)}function xi(e,t){return yi(e,null,null,t),Ci(e)}function Si(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ze(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Ci(e){if(50<Dd)throw Dd=0,Od=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var wi={};function Ti(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(e,t,n,r){return new Ti(e,t,n,r)}function Di(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oi(e,t){var n=e.alternate;return n===null?(n=Ei(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ki(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ai(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Di(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,Ce.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case se:return e=Ei(31,n,t,a),e.elementType=se,e.lanes=o,e;case A:return ji(n.children,a,o,t);case te:s=8,a|=24;break;case j:return e=Ei(12,n,t,a|2),e.elementType=j,e.lanes=o,e;case ie:return e=Ei(13,n,t,a),e.elementType=ie,e.lanes=o,e;case ae:return e=Ei(19,n,t,a),e.elementType=ae,e.lanes=o,e;case ce:case ue:return e=a|32,e=Ei(30,n,t,e),e.elementType=ue,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case re:s=10;break a;case ne:s=9;break a;case M:s=11;break a;case oe:s=14;break a;case N:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Ei(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function ji(e,t,n,r){return e=Ei(7,e,r,t),e.lanes=n,e}function Mi(e,t,n){return e=Ei(6,e,null,t),e.lanes=n,e}function Ni(e){var t=Ei(18,null,null,0);return t.stateNode=e,t}function Pi(e,t,n){return t=Ei(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Fi=new WeakMap;function Ii(e,t){if(typeof e==`object`&&e){var n=Fi.get(e);return n===void 0?(t={value:e,source:t,stack:Ne(t)},Fi.set(e,t),t):n}return{value:e,source:t,stack:Ne(t)}}var Li=[],Ri=0,zi=null,Bi=0,Vi=[],Hi=0,Ui=null,Wi=1,Gi=``;function Ki(e,t){Li[Ri++]=Bi,Li[Ri++]=zi,zi=e,Bi=t}function qi(e,t,n){Vi[Hi++]=Wi,Vi[Hi++]=Gi,Vi[Hi++]=Ui,Ui=e;var r=Wi;e=Gi;var i=32-Ze(r)-1;r&=~(1<<i),n+=1;var a=32-Ze(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wi=1<<32-Ze(t)+i|n<<i|r,Gi=a+e}else Wi=1<<a|n<<i|r,Gi=e}function Ji(e){e.return!==null&&(Ki(e,1),qi(e,1,0))}function Yi(e){for(;e===zi;)zi=Li[--Ri],Li[Ri]=null,Bi=Li[--Ri],Li[Ri]=null;for(;e===Ui;)Ui=Vi[--Hi],Vi[Hi]=null,Gi=Vi[--Hi],Vi[Hi]=null,Wi=Vi[--Hi],Vi[Hi]=null}function Xi(e,t){Vi[Hi++]=Wi,Vi[Hi++]=Gi,Vi[Hi++]=Ui,Wi=t.id,Gi=t.overflow,Ui=e}var Zi=null,Qi=null,K=!1,$i=null,ea=!1,ta=Error(i(519));function na(e){throw ca(Ii(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),ta}function ra(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[xt]=e,t[St]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<Rf.length;n++)$(Rf[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),Qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),nn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||$f(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=fn),t=!0):t=!1,t||na(e,!0)}function ia(e){for(Zi=e.return;Zi;)switch(Zi.tag){case 5:case 31:case 13:ea=!1;return;case 27:case 3:ea=!0;return;default:Zi=Zi.return}}function aa(e){if(e!==Zi)return!1;if(!K)return ia(e),K=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&Qi&&na(e),ia(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Qi=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Qi=dm(e)}else t===27?(t=Qi,Sp(e.type)?(e=um,um=null,Qi=e):Qi=t):Qi=Zi?lm(e.stateNode.nextSibling):null;return!0}function oa(){Qi=Zi=null,K=!1}function sa(){var e=$i;return e!==null&&(ud===null?ud=e:ud.push.apply(ud,e),$i=null),e}function ca(e){$i===null?$i=[e]:$i.push(e)}var la=be(null),ua=null,da=null;function fa(e,t,n){Se(la,t._currentValue),t._currentValue=n}function pa(e){e._currentValue=la.current,xe(la)}function ma(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ha(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ma(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ma(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ma(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ga(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Fr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Ee.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&ha(t,e,n,r),t.flags|=262144,e!==null}function _a(e){for(e=e.firstContext;e!==null;){if(!Fr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function va(e){ua=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ya(e){return xa(ua,e)}function ba(e,t){return ua===null&&va(e),xa(e,t)}function xa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},da===null){if(e===null)throw Error(i(308));da=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else da=da.next=t;return n}var Sa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Ca=t.unstable_scheduleCallback,wa=t.unstable_NormalPriority,Ta={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ea(){return{controller:new Sa,data:new Map,refCount:0}}function Da(e){e.refCount--,e.refCount===0&&Ca(wa,function(){e.controller.abort()})}function Oa(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var ka=null;function Aa(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var ja=null,Ma=0,q=0,J=null;function Na(e,t){if(ja===null){var n=ja=[];Ma=0,q=Nf(),J={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ma++,t.then(Pa,Pa),t}function Pa(){if(--Ma===0&&(ka=null,ja!==null)){J!==null&&(J.status=`fulfilled`);var e=ja;ja=null,q=0,J=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Fa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ia=P.S;P.S=function(e,t){if(pd=ze(),typeof t==`object`&&t&&typeof t.then==`function`&&Na(e,t),ka!==null)for(var n=yf;n!==null;)Oa(n,ka),n=n.next;if(n=e.types,n!==null){for(var r=yf;r!==null;)Oa(r,n),r=r.next;if(q!==0){r=ka,r===null&&(r=ka=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Ia!==null&&Ia(e,t)};var La=be(null);function Ra(){var e=La.current;return e===null?Xu.pooledCache:e}function za(e,t){t===null?Se(La,La.current):Se(La,t.pool)}function Ba(){var e=Ra();return e===null?null:{parent:Ta._currentValue,pool:e}}var Va=Error(i(460)),Ha=Error(i(474)),Ua=Error(i(542)),Wa={then:function(){}};function Ga(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(fn,fn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Xa(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(fn,fn);else{if(e=Xu,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Xa(e),e}throw Ja=t,Va}}function qa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ja=e,Va):e}}var Ja=null;function Ya(){if(Ja===null)throw Error(i(459));var e=Ja;return Ja=null,e}function Xa(e){if(e===Va||e===Ua)throw Error(i(483))}var Za=null,Qa=0;function $a(e){var t=Qa;return Qa+=1,Za===null&&(Za=[]),Ka(Za,e,t)}function eo(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function to(e,t){throw t.$$typeof===O?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function no(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Oi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Mi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===A?(e=d(e,t,n.props.children,r,n.key),eo(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===N&&qa(i)===t.type)?(t=a(t,n.props),eo(t,n),t.return=e,t):(t=Ai(n.type,n.key,n.props,null,e.mode,r),eo(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Pi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=ji(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Mi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case ee:return n=Ai(t.type,t.key,t.props,null,e.mode,n),eo(n,t),n.return=e,n;case k:return t=Pi(t,e.mode,n),t.return=e,t;case N:return t=qa(t),f(e,t,n)}if(ge(t)||pe(t))return t=ji(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,$a(t),n);if(t.$$typeof===re)return f(e,ba(e,t),n);to(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case ee:return n.key===i?l(e,t,n,r):null;case k:return n.key===i?u(e,t,n,r):null;case N:return n=qa(n),p(e,t,n,r)}if(ge(n)||pe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,$a(n),r);if(n.$$typeof===re)return p(e,t,ba(e,n),r);to(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case ee:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case k:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case N:return r=qa(r),m(e,t,n,r,i)}if(ge(r)||pe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,$a(r),i);if(r.$$typeof===re)return m(e,t,n,ba(t,r),i);to(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),K&&Ki(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return K&&Ki(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),K&&Ki(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),K&&Ki(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return K&&Ki(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),K&&Ki(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===A&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case ee:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===A){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),eo(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===N&&qa(l)===r.type){n(e,r.sibling),c=a(r,o.props),eo(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===A?(c=ji(o.props.children,e.mode,c,o.key),eo(c,o),c.return=e,e=c):(c=Ai(o.type,o.key,o.props,null,e.mode,c),eo(c,o),c.return=e,e=c)}return s(e);case k:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Pi(o,e.mode,c),c.return=e,e=c}return s(e);case N:return o=qa(o),_(e,r,o,c)}if(ge(o))return h(e,r,o,c);if(pe(o)){if(l=pe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,$a(o),c);if(o.$$typeof===re)return _(e,r,ba(e,o),c);to(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Mi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Qa=0;var i=_(e,t,n,r);return Za=null,i}catch(t){if(t===Va||t===Ua)throw t;var a=Ei(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var ro=no(!0),io=no(!1),ao=!1;function oo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function so(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function co(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function lo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Yu&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Ci(e),Si(e,null,n),t}return yi(e,r,t,n),Ci(e)}function uo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mt(e,n)}}function fo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var po=!1;function mo(){if(po){var e=J;if(e!==null)throw e}}function ho(e,t,n,r){po=!1;var i=e.updateQueue;ao=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Q&f)===f:(r&f)===f){f!==0&&f===q&&(po=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=D({},d,f);break a;case 2:ao=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),id|=o,e.lanes=o,e.memoizedState=d}}function go(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function _o(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)go(n[e],t)}var vo=be(null),yo=be(0);function bo(e,t){e=nd,Se(yo,e),Se(vo,t),nd=e|t.baseLanes}function xo(){Se(yo,nd),Se(vo,vo.current)}function So(){nd=yo.current,xe(vo),xe(yo)}var Co=be(null),wo=null;function To(e){var t=e.alternate;Se(Y,Y.current&1),Se(Co,e),wo===null&&(t===null||vo.current!==null||t.memoizedState!==null)&&(wo=e)}function Eo(e){Se(Y,Y.current),Se(Co,e),wo===null&&(wo=e)}function Do(e){e.tag===22?(Se(Y,Y.current),Se(Co,e),wo===null&&(wo=e)):Oo()}function Oo(){Se(Y,Y.current),Se(Co,Co.current)}function ko(e){xe(Co),wo===e&&(wo=null),xe(Y)}var Y=be(0);function Ao(e,t){Se(Co,Co.current),Se(Y,t)}function jo(e){xe(Y),xe(Co),wo===e&&(wo=null)}function Mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var No=0,X=null,Po=null,Fo=null,Io=!1,Lo=!1,Ro=!1,zo=0,Bo=0,Vo=null,Ho=0;function Uo(){throw Error(i(321))}function Wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fr(e[n],t[n]))return!1;return!0}function Go(e,t,n,r,i,a){return No=a,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,P.H=e===null||e.memoizedState===null?cc:lc,Ro=!1,a=n(r,i),Ro=!1,Lo&&(a=qo(t,n,r,i)),Ko(e),a}function Ko(e){P.H=sc;var t=Po!==null&&Po.next!==null;if(No=0,Fo=Po=X=null,Io=!1,Bo=0,Vo=null,t)throw Error(i(300));e===null||Ec||(e=e.dependencies,e!==null&&_a(e)&&(Ec=!0))}function qo(e,t,n,r){X=e;var a=0;do{if(Lo&&(Vo=null),Bo=0,Lo=!1,25<=a)throw Error(i(301));if(a+=1,Fo=Po=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}P.H=uc,o=t(n,r)}while(Lo);return o}function Jo(){var e=P.H,t=e.useState()[0];return t=typeof t.then==`function`?ts(t):t,e=e.useState()[0],(Po===null?null:Po.memoizedState)!==e&&(X.flags|=1024),t}function Yo(){var e=zo!==0;return zo=0,e}function Xo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Zo(e){if(Io){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Io=!1}No=0,Fo=Po=X=null,Lo=!1,Bo=zo=0,Vo=null}function Qo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fo===null?X.memoizedState=Fo=e:Fo=Fo.next=e,Fo}function $o(){if(Po===null){var e=X.alternate;e=e===null?null:e.memoizedState}else e=Po.next;var t=Fo===null?X.memoizedState:Fo.next;if(t!==null)Fo=t,Po=e;else{if(e===null)throw X.alternate===null?Error(i(467)):Error(i(310));Po=e,e={memoizedState:Po.memoizedState,baseState:Po.baseState,baseQueue:Po.baseQueue,queue:Po.queue,next:null},Fo===null?X.memoizedState=Fo=e:Fo=Fo.next=e}return Fo}function es(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ts(e){var t=Bo;return Bo+=1,Vo===null&&(Vo=[]),e=Ka(Vo,e,t),t=X,(Fo===null?t.memoizedState:Fo.next)===null&&(t=t.alternate,P.H=t===null||t.memoizedState===null?cc:lc),e}function ns(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ts(e);if(e.$$typeof===de)return;if(e.$$typeof===re)return ya(e)}throw Error(i(438,String(e)))}function rs(e){var t=null,n=X.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=X.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=es(),X.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=le;return t.index++,n}function is(e,t){return typeof t==`function`?t(e):t}function as(e){return os($o(),Po,e)}function os(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(No&f)===f:(Q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===q&&(d=!0);else if((No&p)===p){u=u.next,p===q&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,X.lanes|=p,id|=p;f=u.action,Ro&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,X.lanes|=f,id|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Fr(o,e.memoizedState)&&(Ec=!0,d&&(n=J,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ss(e){var t=$o(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Fr(o,t.memoizedState)||(Ec=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function cs(e,t,n){var r=X,a=$o(),o=K;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Fr((Po||a).memoizedState,n);if(s&&(a.memoizedState=n,Ec=!0),a=a.queue,Ns(ds.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Fo!==null&&!!(Fo.memoizedState.tag&1),Os(e?9:8,{destroy:void 0},us.bind(null,r,a,n,t),null),e){if(r.flags|=2048,Xu===null)throw Error(i(349));o||No&127||ls(r,t,n)}return n}function ls(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t=es(),X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function us(e,t,n,r){t.value=n,t.getSnapshot=r,fs(t)&&ps(e)}function ds(e,t,n){return n(function(){fs(t)&&ps(e)})}function fs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fr(e,n)}catch{return!0}}function ps(e){var t=xi(e,2);t!==null&&Md(t,e,2)}function ms(e){var t=Qo();if(typeof e==`function`){var n=e;if(e=n(),Ro){Xe(!0);try{n()}finally{Xe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:e},t}function hs(e,t,n,r){return e.baseState=n,os(e,Po,typeof r==`function`?r:is)}function gs(e,t,n,r,a){if(ic(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};P.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,_s(t,o)):(o.next=n.next,t.pending=n.next=o)}}function _s(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=P.T,o={};o.types=a===null?null:a.types,P.T=o;try{var s=n(i,r),c=P.S;c!==null&&c(o,s),vs(e,t,s)}catch(n){bs(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),P.T=a}}else try{a=n(i,r),vs(e,t,a)}catch(n){bs(e,t,n)}}function vs(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ys(e,t,n)},function(n){return bs(e,t,n)}):ys(e,t,n)}function ys(e,t,n){t.status=`fulfilled`,t.value=n,xs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,_s(e,n)))}function bs(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,xs(t),t=t.next;while(t!==r)}e.action=null}function xs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ss(e,t){return t}function Cs(e,t){if(K){var n=Xu.formState;if(n!==null){a:{var r=X;if(K){if(Qi){b:{for(var i=Qi,a=ea;i.nodeType!==8;)if(!a||(i=lm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Qi=lm(i.nextSibling),r=i.data===`F!`;break a}}na(r)}r=!1}r&&(t=n[0])}}return n=Qo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ss,lastRenderedState:t},n.queue=r,n=tc.bind(null,X,r),r.dispatch=n,r=ms(!1),a=rc.bind(null,X,!1,r.queue),r=Qo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=gs.bind(null,X,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ws(e){return Ts($o(),Po,e)}function Ts(e,t,n){if(t=os(e,t,Ss)[0],e=as(is)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ts(t)}catch(e){throw e===Va?Ua:e}else r=t;t=$o();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(X.flags|=2048,Os(9,{destroy:void 0},Es.bind(null,i,n),null)),[r,a,e]}function Es(e,t){e.action=t}function Ds(e){var t=$o(),n=Po;if(n!==null)return Ts(t,n,e);$o(),t=t.memoizedState,n=$o();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=X.updateQueue,t===null&&(t=es(),X.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ks(){return $o().memoizedState}function As(e,t,n,r){var i=Qo();X.flags|=e,i.memoizedState=Os(1|t,{destroy:void 0},n,r===void 0?null:r)}function js(e,t,n,r){var i=$o();r=r===void 0?null:r;var a=i.memoizedState.inst;Po!==null&&r!==null&&Wo(r,Po.memoizedState.deps)?i.memoizedState=Os(t,a,n,r):(X.flags|=e,i.memoizedState=Os(1|t,a,n,r))}function Ms(e,t){As(8390656,8,e,t)}function Ns(e,t){js(2048,8,e,t)}function Ps(e){X.flags|=4;var t=X.updateQueue;if(t===null)t=es(),X.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Fs(e){var t=$o().memoizedState;return Ps({ref:t,nextImpl:e}),function(){if(Yu&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Is(e,t){return js(4,2,e,t)}function Ls(e,t){return js(4,4,e,t)}function Rs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zs(e,t,n){n=n==null?null:n.concat([e]),js(4,4,Rs.bind(null,t,e),n)}function Bs(){}function Vs(e,t){var n=$o();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hs(e,t){var n=$o();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Wo(t,r[1]))return r[0];if(r=e(),Ro){Xe(!0);try{e()}finally{Xe(!1)}}return n.memoizedState=[r,t],r}function Us(e,t,n){return n===void 0||No&1073741824&&!(Q&261930)?e.memoizedState=t:(e.memoizedState=n,e=Ad(),X.lanes|=e,id|=e,n)}function Ws(e,t,n,r){return Fr(n,t)?n:vo.current===null?!(No&106)||No&1073741824&&!(Q&261930)?(Ec=!0,e.memoizedState=n):(e=Ad(),X.lanes|=e,id|=e,t):(e=Us(e,n,r),Fr(e,t)||(Ec=!0),e)}function Gs(e,t,n,r,i){var a=F.p;F.p=a!==0&&8>a?a:8;var o=P.T,s={};s.types=o===null?null:o.types,P.T=s,rc(e,!1,t,n);try{var c=i(),l=P.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?nc(e,t,Fa(c,r),kd(e)):nc(e,t,r,kd(e))}catch(n){nc(e,t,{then:function(){},status:`rejected`,reason:n},kd())}finally{F.p=a,o!==null&&s.types!==null&&(o.types=s.types),P.T=o}}function Ks(){}function qs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Js(e).queue;Gs(e,a,t,_e,n===null?Ks:function(){return Ys(e),n(r)})}function Js(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:_e,baseState:_e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:_e},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ys(e){var t=Js(e);t.next===null&&(t=e.alternate.memoizedState),nc(e,t.next.queue,{},kd())}function Xs(){return ya(sh)}function Zs(){return $o().memoizedState}function Qs(){return $o().memoizedState}function $s(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=kd();e=co(n);var r=lo(t,e,n);r!==null&&(Md(r,t,n),uo(r,t,n)),t={cache:Ea()},e.payload=t;return}t=t.return}}function ec(e,t,n){var r=kd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ic(e)?ac(t,n):(n=bi(e,t,n,r),n!==null&&(Md(n,e,r),oc(n,t,r)))}function tc(e,t,n){nc(e,t,n,kd())}function nc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ic(e))ac(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Fr(s,o))return yi(e,t,i,0),Xu===null&&vi(),!1}catch{}if(n=bi(e,t,i,r),n!==null)return Md(n,e,r),oc(n,t,r),!0}return!1}function rc(e,t,n,r){if(r={lane:2,revertLane:Nf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ic(e)){if(t)throw Error(i(479))}else t=bi(e,n,r,2),t!==null&&Md(t,e,2)}function ic(e){var t=e.alternate;return e===X||t!==null&&t===X}function ac(e,t){Lo=Io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function oc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mt(e,n)}}var sc={readContext:ya,use:ns,useCallback:Uo,useContext:Uo,useEffect:Uo,useImperativeHandle:Uo,useLayoutEffect:Uo,useInsertionEffect:Uo,useMemo:Uo,useReducer:Uo,useRef:Uo,useState:Uo,useDebugValue:Uo,useDeferredValue:Uo,useTransition:Uo,useSyncExternalStore:Uo,useId:Uo,useHostTransitionStatus:Uo,useFormState:Uo,useActionState:Uo,useOptimistic:Uo,useMemoCache:Uo,useCacheRefresh:Uo,useEffectEvent:Uo},cc={readContext:ya,use:ns,useCallback:function(e,t){return Qo().memoizedState=[e,t===void 0?null:t],e},useContext:ya,useEffect:Ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),As(4194308,4,Rs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return As(4194308,4,e,t)},useInsertionEffect:function(e,t){As(4,2,e,t)},useMemo:function(e,t){var n=Qo();t=t===void 0?null:t;var r=e();if(Ro){Xe(!0);try{e()}finally{Xe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Qo();if(n!==void 0){var i=n(t);if(Ro){Xe(!0);try{n(t)}finally{Xe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ec.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=Qo();return e={current:e},t.memoizedState=e},useState:function(e){e=ms(e);var t=e.queue,n=tc.bind(null,X,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Bs,useDeferredValue:function(e,t){return Us(Qo(),e,t)},useTransition:function(){var e=ms(!1);return e=Gs.bind(null,X,e.queue,!0,!1),Qo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=X,a=Qo();if(K){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Xu===null)throw Error(i(349));Q&127||ls(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Ms(ds.bind(null,r,o,e),[e]),r.flags|=2048,Os(9,{destroy:void 0},us.bind(null,r,o,n,t),null),n},useId:function(){var e=Qo(),t=Xu.identifierPrefix;if(K){var n=Gi,r=Wi;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=zo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Ho++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Xs,useFormState:Cs,useActionState:Cs,useOptimistic:function(e){var t=Qo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=rc.bind(null,X,!0,n),n.dispatch=t,[e,t]},useMemoCache:rs,useCacheRefresh:function(){return Qo().memoizedState=$s.bind(null,X)},useEffectEvent:function(e){var t=Qo(),n={impl:e};return t.memoizedState=n,function(){if(Yu&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},lc={readContext:ya,use:ns,useCallback:Vs,useContext:ya,useEffect:Ns,useImperativeHandle:zs,useInsertionEffect:Is,useLayoutEffect:Ls,useMemo:Hs,useReducer:as,useRef:ks,useState:function(){return as(is)},useDebugValue:Bs,useDeferredValue:function(e,t){return Ws($o(),Po.memoizedState,e,t)},useTransition:function(){var e=as(is)[0],t=$o().memoizedState;return[typeof e==`boolean`?e:ts(e),t]},useSyncExternalStore:cs,useId:Zs,useHostTransitionStatus:Xs,useFormState:ws,useActionState:ws,useOptimistic:function(e,t){return hs($o(),Po,e,t)},useMemoCache:rs,useCacheRefresh:Qs,useEffectEvent:Fs},uc={readContext:ya,use:ns,useCallback:Vs,useContext:ya,useEffect:Ns,useImperativeHandle:zs,useInsertionEffect:Is,useLayoutEffect:Ls,useMemo:Hs,useReducer:ss,useRef:ks,useState:function(){return ss(is)},useDebugValue:Bs,useDeferredValue:function(e,t){var n=$o();return Po===null?Us(n,e,t):Ws(n,Po.memoizedState,e,t)},useTransition:function(){var e=ss(is)[0],t=$o().memoizedState;return[typeof e==`boolean`?e:ts(e),t]},useSyncExternalStore:cs,useId:Zs,useHostTransitionStatus:Xs,useFormState:Ds,useActionState:Ds,useOptimistic:function(e,t){var n=$o();return Po===null?(n.baseState=e,[e,n.queue.dispatch]):hs(n,Po,e,t)},useMemoCache:rs,useCacheRefresh:Qs,useEffectEvent:Fs};function dc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=kd(),i=co(r);i.payload=t,n!=null&&(i.callback=n),t=lo(e,i,r),t!==null&&(Md(t,e,r),uo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=kd(),i=co(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=lo(e,i,r),t!==null&&(Md(t,e,r),uo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kd(),r=co(n);r.tag=2,t!=null&&(r.callback=t),t=lo(e,r,n),t!==null&&(Md(t,e,n),uo(t,e,n))}};function pc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ir(n,r)||!Ir(i,a):!0}function mc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fc.enqueueReplaceState(t,t.state,null)}function hc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=D({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function gc(e){mi(e)}function _c(e){console.error(e)}function vc(e){mi(e)}function yc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function bc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function xc(e,t,n){return n=co(n),n.tag=3,n.payload={element:null},n.callback=function(){yc(e,t)},n}function Sc(e){return e=co(e),e.tag=3,e}function Cc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){bc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){bc(t,n,r),typeof i!=`function`&&(gd===null?gd=new Set([this]):gd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function wc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ga(t,n,a,!0),n=Co.current,n!==null){switch(n.tag){case 31:case 13:case 19:return wo===null?Wd():n.alternate===null&&rd===0&&(rd=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Wa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),pf(e,r,a)),!1;case 22:return n.flags|=65536,r===Wa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),pf(e,r,a)),!1}throw Error(i(435,n.tag))}return pf(e,r,a),Wd(),!1}if(K)return t=Co.current,t===null?(r!==ta&&(t=Error(i(423),{cause:r}),ca(Ii(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ii(r,n),a=xc(e.stateNode,r,a),fo(e,a),rd!==4&&(rd=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ta&&(e=Error(i(422),{cause:r}),ca(Ii(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ii(o,n),ld===null?ld=[o]:ld.push(o),rd!==4&&(rd=2),t===null)return!0;r=Ii(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=xc(n.stateNode,r,e),fo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(gd===null||!gd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Sc(a),Cc(a,e,n,r),fo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Tc=Error(i(461)),Ec=!1;function Dc(e,t,n,r){t.child=e===null?io(t,null,n,r):ro(t,e.child,n,r)}function Oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return va(t),r=Go(e,t,n,o,a,i),s=Yo(),e!==null&&!Ec?(Xo(e,t,i),nl(e,t,i)):(K&&s&&Ji(t),t.flags|=1,Dc(e,t,r,i),t.child)}function kc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Di(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Ac(e,t,a,r,i)):(e=Ai(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!rl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ir:n,n(o,r)&&e.ref===t.ref)return nl(e,t,i)}return t.flags|=1,e=Oi(a,r),e.ref=t.ref,e.return=t,t.child=e}function Ac(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ir(a,r)&&e.ref===t.ref){if(Ec=!1,t.pendingProps=r=a,rl(e,i))e.flags&131072&&(Ec=!0);else return t.lanes=e.lanes,nl(e,t,i)}}return Rc(e,t,n,r,i)}function jc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Nc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&za(t,a===null?null:a.cachePool),a===null?xo():bo(t,a),Do(t);else return r=t.lanes=536870912,Nc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&za(t,null),xo(),Oo()):(za(t,a.cachePool),bo(t,a),Oo(),t.memoizedState=null);return Dc(e,t,i,n),t.child}function Mc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Nc(e,t,n,r,i){var a=Ra();return a=a===null?null:{parent:Ta._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&za(t,null),xo(),Do(t),e!==null&&ga(e,t,r,!0),t.childLanes=i,null}function Pc(e,t){return t=qc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Fc(e,t,n){return ro(t,e.child,null,n),e=Pc(t,t.pendingProps),e.flags|=2,ko(t),t.memoizedState=null,e}function Ic(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(K){if(r.mode===`hidden`)return e=Pc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Mc(null,e);if(Eo(t),(e=Qi)?(e=am(e,ea),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ui===null?null:{id:Wi,overflow:Gi},retryLane:536870912,hydrationErrors:null},n=Ni(e),n.return=t,t.child=n,Zi=t,Qi=null)):e=null,e===null)throw na(t);return t.lanes=536870912,null}return Pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Eo(t),a){if(t.flags&256)t.flags&=-257,t=Fc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Ec||ga(e,t,n,!1),a=(n&e.childLanes)!==0,Ec||a){if(vo.current===null){if(r=Xu,r!==null&&(s=ht(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,xi(e,s),Md(r,e,s),Tc;Wd()}t=Fc(e,t,n)}else e=o.treeContext,Qi=lm(s.nextSibling),Zi=t,K=!0,$i=null,ea=!1,e!==null&&Xi(t,e),t=Pc(t,r),t.flags|=134221824;return t}return e=Oi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Lc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Rc(e,t,n,r,i){return va(t),n=Go(e,t,n,r,void 0,i),r=Yo(),e!==null&&!Ec?(Xo(e,t,i),nl(e,t,i)):(K&&r&&Ji(t),t.flags|=1,Dc(e,t,n,i),t.child)}function zc(e,t,n,r,i,a){return va(t),t.updateQueue=null,n=qo(t,r,n,i),Ko(e),r=Yo(),e!==null&&!Ec?(Xo(e,t,a),nl(e,t,a)):(K&&r&&Ji(t),t.flags|=1,Dc(e,t,n,a),t.child)}function Bc(e,t,n,r,i){if(va(t),t.stateNode===null){var a=wi,o=n.contextType;typeof o==`object`&&o&&(a=ya(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=fc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},oo(t),o=n.contextType,a.context=typeof o==`object`&&o?ya(o):wi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(dc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&fc.enqueueReplaceState(a,a.state,null),ho(t,r,a,i),mo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=hc(n,s);a.props=c;var l=a.context,u=n.contextType;o=wi,typeof u==`object`&&u&&(o=ya(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&mc(t,a,r,o),ao=!1;var f=t.memoizedState;a.state=f,ho(t,r,a,i),mo(),l=t.memoizedState,s||f!==l||ao?(typeof d==`function`&&(dc(t,n,d,r),l=t.memoizedState),(c=ao||pc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,so(e,t),o=t.memoizedProps,u=hc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=wi,typeof l==`object`&&l&&(c=ya(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&mc(t,a,r,c),ao=!1,f=t.memoizedState,a.state=f,ho(t,r,a,i),mo();var p=t.memoizedState;o!==d||f!==p||ao||e!==null&&e.dependencies!==null&&_a(e.dependencies)?(typeof s==`function`&&(dc(t,n,s,r),p=t.memoizedState),(u=ao||pc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&_a(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Lc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=ro(t,e.child,null,i),t.child=ro(t,null,n,i)):Dc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=nl(e,t,i),e}function Vc(e,t,n,r){return oa(),t.flags|=256,Dc(e,t,n,r),t.child}var Hc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uc(e){return{baseLanes:e,cachePool:Ba()}}function Wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=sd),e}function Gc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Y.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(K){if(i?To(t):Oo(),(e=Qi)?(e=am(e,ea),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ui===null?null:{id:Wi,overflow:Gi},retryLane:536870912,hydrationErrors:null},n=Ni(e),n.return=t,t.child=n,Zi=t,Qi=null)):e=null,e===null)throw na(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Oo(),i=t.mode,a=qc({mode:`hidden`,children:a},i),r=ji(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Uc(n),r.childLanes=Wc(e,o,n),t.memoizedState=Hc,Mc(null,r)):(To(t),Kc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return Yc(e,t,a,o,r,c,s,n)}return i?(Oo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Oi(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=ji(i,a,n,null),i.flags|=2):i=Oi(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Mc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Uc(n):(a=i.cachePool,a===null?a=Ba():(s=Ta._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Wc(e,o,n),t.memoizedState=Hc,Mc(e.child,r)):(To(t),n=e.child,e=n.sibling,n=Oi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Kc(e,t){return t=qc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function qc(e,t){return e=Ei(22,e,null,t),e.lanes=0,e}function Jc(e,t,n){return ro(t,e.child,null,n),e=Kc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yc(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(To(t),t.flags&=-257,Jc(e,t,c)):t.memoizedState===null?(Oo(),o=a.fallback,s=t.mode,a=qc({mode:`visible`,children:a.children},s),o=ji(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,ro(t,e.child,null,c),a=t.child,a.memoizedState=Uc(c),a.childLanes=Wc(e,r,c),t.memoizedState=Hc,Mc(null,a)):(Oo(),t.child=e.child,t.flags|=128,null);if(To(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,ca({value:a,source:null,stack:null})),Jc(e,t,c)}if(Ec||ga(e,t,c,!1),r=(c&e.childLanes)!==0,Ec||r){if(vo.current!==null)return Jc(e,t,c);if(r=Xu,r!==null&&(a=ht(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,xi(e,a),Md(r,e,a),Tc;return om(o)||Wd(),Jc(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,Qi=lm(o.nextSibling),Zi=t,K=!0,$i=null,ea=!1,e!==null&&Xi(t,e),t=Kc(t,a.children),t.flags|=134221824,t)}function Xc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ma(e.return,t,n)}function Zc(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Mo(n)===null&&(t=e),e=e.sibling}return t}function Qc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function $c(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function el(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Y.current;if(t.flags&128)return Ao(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Ao(t,o),i===`backwards`&&e!==null?($c(e),Dc(e,t,r,n),$c(e)):Dc(e,t,r,n),r=K?Bi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xc(e,n,t);else if(e.tag===19)Xc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=Zc(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,$c(t)),Qc(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Qc(t,!0,n,null,a,r);break;case`together`:Qc(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=Zc(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Qc(t,!1,i,n,a,r)}return t.child}function tl(e,t,n){var r=t.pendingProps;return fa(t,t.type,r.value),Dc(e,t,r.children,n),t.child}function nl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),id|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ga(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Oi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Oi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&_a(e)))}function il(e,t,n){switch(t.tag){case 3:De(t,t.stateNode.containerInfo),fa(t,Ta,e.memoizedState.cache),oa();break;case 27:case 5:Oe(t);break;case 4:De(t,t.stateNode.containerInfo);break;case 10:fa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Eo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return To(t),t.flags|=128,null;r=ga(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Gc(e,t,n):(To(t),e=nl(e,t,n),e===null?null:e.sibling)}To(t);break;case 19:if(t.flags&128)return el(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(ga(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return el(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ao(t,Y.current),r)break;return null;case 22:return t.lanes=0,jc(e,t,n,t.pendingProps);case 24:fa(t,Ta,e.memoizedState.cache)}return nl(e,t,n)}function al(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Ec=!0;else{if(!rl(e,n)&&!(t.flags&128))return Ec=!1,il(e,t,n);Ec=!!(e.flags&131072)}}else Ec=!1,K&&t.flags&1048576&&qi(t,Bi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=qa(t.elementType),t.type=e,typeof e==`function`)Di(e)?(r=hc(e,r),t.tag=1,t=Bc(null,t,e,r,n)):(t.tag=0,t=Rc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===M){t.tag=11,t=Oc(null,t,e,r,n);break a}if(a===oe){t.tag=14,t=kc(null,t,e,r,n);break a}if(a===re){t.tag=10,t.type=e,t=tl(null,t,n);break a}}throw t=he(e)||e,Error(i(306,t,``))}}return t;case 0:return Rc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=hc(r,t.pendingProps),Bc(e,t,r,a,n);case 3:a:{if(De(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,so(e,t),ho(t,r,null,n);var s=t.memoizedState;if(r=s.cache,fa(t,Ta,r),r!==o.cache&&ha(t,[Ta],n,!0),mo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Vc(e,t,r,n);break a}if(r!==a){a=Ii(Error(i(424)),t),ca(a),t=Vc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Qi=lm(e.firstChild),Zi=t,K=!0,$i=null,ea=!0,n=io(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(oa(),r===a){t=nl(e,t,n);break a}Dc(e,t,r,n)}t=t.child}return t;case 26:return Lc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:K||(t.stateNode=fp(t.type,t.pendingProps,Te.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Oe(t),e===null&&K&&(r=t.stateNode=hm(t.type,t.pendingProps,Te.current),Zi=t,ea=!0,a=Qi,Sp(t.type)?(um=a,Qi=lm(r.firstChild)):Qi=a),Dc(e,t,t.pendingProps.children,n),Lc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&K&&((a=r=Qi)&&(r=rm(r,t.type,t.pendingProps,ea),r===null?a=!1:(t.stateNode=r,Zi=t,Qi=lm(r.firstChild),ea=!1,a=!0)),a||na(t)),Oe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Go(e,t,Jo,null,null,n),sh._currentValue=a),Lc(e,t),Dc(e,t,r,n),t.child;case 6:return e===null&&K&&((e=n=Qi)&&(n=im(n,t.pendingProps,ea),n===null?e=!1:(t.stateNode=n,Zi=t,Qi=null,e=!0)),e||na(t)),null;case 13:return Gc(e,t,n);case 4:return De(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ro(t,null,r,n):Dc(e,t,r,n),t.child;case 11:return Oc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Lc(e,t),Dc(e,t,r,n),t.child;case 8:return Dc(e,t,t.pendingProps.children,n),t.child;case 12:return Dc(e,t,t.pendingProps.children,n),t.child;case 10:return tl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,va(t),a=ya(a),r=r(a),t.flags|=1,Dc(e,t,r,n),t.child;case 14:return kc(e,t,t.type,t.pendingProps,n);case 15:return Ac(e,t,t.type,t.pendingProps,n);case 19:return el(e,t,n);case 31:return Ic(e,t,n);case 22:return jc(e,t,n,t.pendingProps);case 24:return va(t),r=ya(Ta),e===null?(a=Ra(),a===null&&(a=Xu,o=Ea(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},oo(t),fa(t,Ta,a)):((e.lanes&n)!==0&&(so(e,t),ho(t,null,null,n),mo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,fa(t,Ta,r),r!==a.cache&&ha(t,[Ta],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),fa(t,Ta,r))),Dc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:K&&Ji(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Lc(e,t),Dc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function ol(e){e.flags|=4}function sl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Vd())e.flags|=8192;else throw Ja=Wa,Ha}}else e.flags&=-16777217}function cl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Vd())e.flags|=8192;else throw Ja=Wa,Ha}}function ll(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:lt(),e.lanes|=t,cd|=t)}function ul(e,t){if(!K)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function dl(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fl(e,t,n){var r=t.pendingProps;switch(Yi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dl(t),null;case 1:return dl(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),pa(Ta),I(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(aa(t)?ol(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,sa())),dl(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(ol(t),o===null?(dl(t),sl(t,a,null,r,n)):(dl(t),cl(t,o))):o?o===e.memoizedState?(dl(t),t.flags&=-16777217):(ol(t),dl(t),cl(t,o)):(e=e.memoizedProps,e!==r&&ol(t),dl(t),sl(t,a,e,r,n)),null;case 27:if(ke(t),n=Te.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ol(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return dl(t),t.subtreeFlags&=-33554433,null}e=Ce.current,aa(t)?ra(t,e):(e=hm(a,r,n),t.stateNode=e,ol(t))}return dl(t),t.subtreeFlags&=-33554433,null;case 5:if(ke(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ol(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return dl(t),t.subtreeFlags&=-33554433,null}if(o=Ce.current,aa(t))ra(t,o);else{var s=lp(Te.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[xt]=t,o[St]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&ol(t)}}return dl(t),t.subtreeFlags&=-33554433,sl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&ol(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=Te.current,aa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Zi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[xt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||$f(e.nodeValue,n)),e||na(t,!0)}else e=lp(e).createTextNode(r),e[xt]=t,t.stateNode=e}return dl(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=aa(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[xt]=t}else oa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dl(t),e=!1}else n=sa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ko(t),t):(ko(t),null);if(t.flags&128)throw Error(i(558))}return dl(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=aa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[xt]=t}else oa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dl(t),a=!1}else a=sa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ko(t),t):(ko(t),null)}return ko(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ll(t,t.updateQueue),dl(t),null);case 4:return I(),e===null&&Uf(t.stateNode.containerInfo),t.flags|=67108864,dl(t),null;case 10:return pa(t.type),dl(t),null;case 19:if(jo(t),r=t.memoizedState,r===null)return dl(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)ul(r,!1);else{if(rd!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Mo(e),o!==null){for(t.flags|=128,ul(r,!1),e=o.updateQueue,t.updateQueue=e,ll(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ki(n,e),n=n.sibling;return Ao(t,Y.current&1|2),K&&Ki(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&ze()>md&&(t.flags|=128,a=!0,ul(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Mo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,ll(t,e),ul(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!K)return dl(t),null}else 2*ze()-r.renderingStartTime>md&&n!==536870912&&(t.flags|=128,a=!0,ul(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ze(),e.sibling=null,o=Y.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||K?Ao(t,o):(n=o,Se(Co,t),Se(Y,n),wo===null&&(wo=t)),K&&Ki(t,r.treeForkCount),e}return dl(t),null;case 22:case 23:return ko(t),So(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(dl(t),t.subtreeFlags&6&&(t.flags|=8192)):dl(t),n=t.updateQueue,n!==null&&ll(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&xe(La),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),pa(Ta),dl(t),null;case 25:return null;case 30:return t.flags|=33554432,dl(t),null}throw Error(i(156,t.tag))}function pl(e,t){switch(Yi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pa(Ta),I(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ke(t),null;case 31:if(t.memoizedState!==null){if(ko(t),t.alternate===null)throw Error(i(340));oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ko(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return jo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return I(),null;case 10:return pa(t.type),null;case 22:case 23:return ko(t),So(),e!==null&&xe(La),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return pa(Ta),null;case 25:return null;default:return null}}function ml(e,t){switch(Yi(t),t.tag){case 3:pa(Ta),I();break;case 26:case 27:case 5:ke(t);break;case 4:I();break;case 31:t.memoizedState!==null&&ko(t);break;case 13:ko(t);break;case 19:jo(t);break;case 10:pa(t.type);break;case 22:case 23:ko(t),So(),e!==null&&xe(La);break;case 24:pa(Ta)}}function hl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){ff(t,t.return,e)}}function gl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){ff(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){ff(t,t.return,e)}}function _l(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{_o(t,n)}catch(t){ff(e,e.return,t)}}}function vl(e,t,n){n.props=hc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){ff(e,t,n)}}function yl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=di(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){ff(e,t,n)}}function bl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){ff(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){ff(e,t,n)}else n.current=null}}function xl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function Sl(e){for(var t=e.return;t!==null&&(Tl(t)&&em(e.stateNode,t.stateNode),!wl(t));)t=t.return}function Cl(e){for(var t=e.return;t!==null&&(Tl(t)&&tm(e.stateNode,t.stateNode),!wl(t));)t=t.return}function wl(e){return e.tag===5||e.tag===3||e.tag===27}function Tl(e){return e&&e.tag===7&&e.stateNode!==null}function El(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){ff(e,e.return,t)}}function Dl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[St]=t}catch(t){ff(e,e.return,t)}}function Ol(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function kl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ol(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Al(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fn)),xl(e,r),Vt=!0;else if(i!==4&&(i===27&&(xl(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Al(e,t,n,r),e=e.sibling;e!==null;)Al(e,t,n,r),e=e.sibling}function jl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),xl(e,r),Vt=!0;else if(i!==4&&(i===27&&(xl(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(jl(e,t,n,r),e=e.sibling;e!==null;)jl(e,t,n,r),e=e.sibling}function Ml(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[xt]=e,t[St]=n}catch(t){ff(e,e.return,t)}}var Nl=!1,Pl=null;function Fl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Nl=!0)}var Il=null;function Ll(){var e=Il;return Il=null,e}var Rl=0;function zl(e,t,n,r,i){return Rl=0,Bl(e.child,t,n,r,i)}function Bl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Nl=!0,Tp(o,Rl===0?t:t+`_`+Rl,n),Rl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Bl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Vl(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Vl(e.child,t)),e=e.sibling}function Hl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Hl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=pi(t.default,t.share),t!==`none`&&(zl(e,n,t,null,!1)||Vl(e.child,!1))}e=e.sibling}}function Ul(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=di(r,n),a=pi(r.default,n.paired?r.share:r.enter);a===`none`?Hl(e):zl(e,i,a,null,!1)?(Hl(e),n.paired||t||jd(e,r.onEnter)):Vl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ul(e,t),e=e.sibling;else Hl(e)}function Wl(e){if(Pl!==null&&Pl.size!==0){var t=Pl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=pi(n.default,n.share);if(a!==`none`&&(zl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,jd(e,n.onShare)):Vl(e.child,!1)),t.delete(r),t.size===0)break}}}Wl(e)}e=e.sibling}}}function Gl(e){if(e.tag===30){var t=e.memoizedProps,n=di(t,e.stateNode),r=Pl===null?void 0:Pl.get(n),i=pi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(zl(e,n,i,null,!1)?r===void 0?jd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Pl.delete(n),jd(e,t.onShare)):Vl(e.child,!1)),Pl!==null&&Wl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Gl(e),e=e.sibling;else Pl!==null&&Wl(e)}function Kl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=di(t,e.stateNode);t=pi(t.default,t.update),e.flags&=-5,t!==`none`&&zl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Kl(e);e=e.sibling}}function ql(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Vl(e.child,!1))}ql(e)}e=e.sibling}}function Jl(e){if(e.tag===30)e.stateNode.paired=null,Vl(e.child,!1),ql(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Jl(e),e=e.sibling;else ql(e)}function Yl(e){for(e=e.child;e!==null;)e.tag===30?Vl(e.child,!1):e.subtreeFlags&33554432&&Yl(e),e=e.sibling}function Xl(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Rl<a.length){var l=a[Rl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Rl===0?n:n+`_`+Rl,i),s&&e.flags&4||(Il===null&&(Il=[]),Il.push(c,Rl===0?r:r+`_`+Rl,t.memoizedProps)),Rl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:Xl(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function Zl(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=di(n,r),a=pi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Rl=0,i=Xl(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||jd(e,n.onUpdate))}else e.subtreeFlags&33554432&&Zl(e,t);e=e.sibling}}var Ql=!1,$l=!1,eu=!1,tu=!1,nu=typeof WeakSet==`function`?WeakSet:Set,ru=null,iu=!1,au=!1,ou=!1,su=!1;function cu(e,t,n){if(e=e.containerInfo,sp=gh,e=Vr(e),Hr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,ru=t,t=n?9270:1024;ru!==null;){if(e=ru,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Gl(r[a]);if(e.alternate===null&&e.flags&2)n&&Fl(e),lu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Gl(r),lu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Fl(e),lu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,ru=r):(n&&Kl(e),lu(n))}}Pl=null}function lu(e){for(;ru!==null;){var t=ru,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=hc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){ff(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=di(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=pi(a.default,a.update),a!==`none`&&zl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,ru=r;break}ru=t.return}}function uu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Au(e,n),r&4&&hl(5,n);break;case 1:if(Au(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){ff(n,n.return,e)}else{var i=hc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){ff(n,n.return,e)}}}r&64&&_l(n),r&512&&yl(n,n.return);break;case 3:if(Au(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{_o(e,t)}catch(e){ff(n,n.return,e)}}break;case 27:t===null&&r&4&&Ml(n);case 26:case 5:Au(e,n),t===null&&r&4&&El(n),r&512&&yl(n,n.return);break;case 12:Au(e,n);break;case 31:Au(e,n),r&4&&yu(e,n);break;case 13:Au(e,n),r&4&&bu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=gf.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||Ql,!r){var a=t!==null&&t.memoizedState!==null||$l;t=Ql,i=$l,Ql=r,($l=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Mu(e,n,r)):Au(e,n),Ql=t,$l=i}break;case 30:Au(e,n),r&512&&yl(n,n.return);break;case 7:r&512&&yl(n,n.return);default:Au(e,n)}}function du(e,t){for(e=e.child;e!==null;)fu(e,t),e=e.sibling}function fu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){ff(e,e.return,t)}pu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,Vt=!0}catch(t){ff(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){ff(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&du(e,t);break;default:du(e,t)}}function pu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:fu(n,r);break a;case 22:n.memoizedState===null&&pu(n,r);break a;default:pu(n,r)}}e=e.sibling}}function mu(e){var t=e.alternate;t!==null&&(e.alternate=null,mu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ot(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var hu=null,gu=!1;function _u(e,t,n){for(n=n.child;n!==null;)vu(e,t,n),n=n.sibling}function vu(e,t,n){if(Ye&&typeof Ye.onCommitFiberUnmount==`function`)try{Ye.onCommitFiberUnmount(Je,n)}catch{}switch(n.tag){case 26:$l||bl(n,t),_u(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!$l&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:$l||bl(n,t),Cl(n);var r=hu,i=gu;Sp(n.type)&&(hu=n.stateNode,gu=!1),_u(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),hu=r,gu=i;break;case 5:$l||bl(n,t),Cl(n);case 6:if(n.tag===6&&Cl(n),r=hu,i=gu,hu=null,_u(e,t,n),hu=r,gu=i,hu!==null){if(gu)try{(hu.nodeType===9?hu.body:hu.nodeName===`HTML`?hu.ownerDocument.body:hu).removeChild(n.stateNode),Vt=!0}catch(e){ff(n,t,e)}else try{hu.removeChild(n.stateNode),Vt=!0}catch(e){ff(n,t,e)}}break;case 18:hu!==null&&(gu?(e=hu,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(hu,n.stateNode));break;case 4:r=hu,i=gu,hu=n.stateNode.containerInfo,gu=!0,_u(e,t,n),hu=r,gu=i;break;case 0:case 11:case 14:case 15:gl(2,n,t),$l||gl(4,n,t),_u(e,t,n);break;case 1:$l||(bl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&vl(n,t,r)),_u(e,t,n);break;case 21:_u(e,t,n);break;case 22:$l=(r=$l)||n.memoizedState!==null,_u(e,t,n),$l=r;break;case 30:bl(n,t),_u(e,t,n);break;case 7:$l||bl(n,t),_u(e,t,n);break;default:_u(e,t,n)}}function yu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){ff(t,t.return,e)}}}function bu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){ff(t,t.return,e)}}function xu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nu),t;default:throw Error(i(435,e.tag))}}function Su(e,t){var n=xu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=_f.bind(null,e,t);t.then(r,r)}})}function Cu(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){hu=l.stateNode,gu=!1;break a}break;case 5:hu=l.stateNode,gu=!1;break a;case 3:case 4:hu=l.stateNode.containerInfo,gu=!0;break a}l=l.return}if(hu===null)throw Error(i(160));vu(s,c,o),hu=null,gu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Tu(t,e,n),t=t.sibling}var wu=null;function Tu(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Cu(t,e,n),Eu(e),a&4&&(gl(3,e,e.return),hl(3,e),gl(5,e,e.return));break;case 1:Cu(t,e,n),Eu(e),a&512&&($l||r===null||bl(r,r.return)),a&64&&Ql&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=wu,Cu(t,e,n),Eu(e),a&512&&($l||r===null||bl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(Ql)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Et]||r[xt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[xt]=e,Nt(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[xt]=e,Nt(r),t=r}e.stateNode=t}}else Ql||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Dl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||$l||t.parentNode.removeChild(t)):a.count--,n===null?Ql||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Cu(t,e,n),Eu(e),a&512&&($l||r===null||bl(r,r.return)),r!==null&&a&4&&Dl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=eu,eu=!1,Cu(t,e,n),eu=o,Eu(e),a&512&&($l||r===null||bl(r,r.return)),e.flags&32){t=e.stateNode;try{rn(t,``),Vt=!0}catch(t){ff(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Dl(e,t,r===null?t:r.memoizedProps)),a&1024&&(tu=!0);break;case 6:if(Cu(t,e,n),Eu(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Vt=!0}catch(t){ff(e,e.return,t)}}break;case 3:if(Vt=!1,Wm=null,o=wu,wu=bm(t.containerInfo),Cu(t,e,n),wu=o,Eu(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){ff(e,e.return,t)}tu&&(tu=!1,Du(e)),Vt=!1;break;case 4:a=eu,eu=Ql,r=W(),o=wu,wu=bm(e.stateNode.containerInfo),Cu(t,e,n),Eu(e),wu=o,Vt&&au&&(ou=!0),Vt=r,eu=a;break;case 12:Cu(t,e,n),Eu(e);break;case 31:Cu(t,e,n),Eu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Su(e,t)));break;case 13:Cu(t,e,n),Eu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(fd=ze()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Su(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=Ql,l=$l,u=eu;Ql=c||o,eu=u||o,$l=l||s,Cu(t,e,n),$l=l,eu=u,Ql=c,Eu(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||Ql||$l||(t=s||$l,n=Ql,r=$l,Ql=o||Ql,$l=t,ju(e,2),Ql=n,$l=r),!o&&eu||du(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Su(e,n))));break;case 19:Cu(t,e,n),Eu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Su(e,t)));break;case 30:a&512&&($l||r===null||bl(r,r.return)),a=W(),o=au,s=(n&335544064)===n,c=e.memoizedProps,au=s&&pi(c.default,c.update)!==`none`,Cu(t,e,n),Eu(e),s&&r!==null&&Vt&&(e.flags|=4),au=o,Vt=a;break;case 21:break;case 7:a&512&&($l||r===null||bl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Cu(t,e,n),Eu(e)}}function Eu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Ol(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Tl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(wl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;jl(e,kl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(rn(l,``),n.flags&=-33),jl(e,kl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Al(e,kl(e),u,s);break;default:throw Error(i(161))}}catch(t){ff(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Du(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Du(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Ou(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)ku(t,e),t=t.sibling;else Zl(t,!1)}function ku(e,t){var n=e.alternate;if(n===null)Ul(e,!1);else switch(e.tag){case 3:if(su=iu=!1,Ll(),Ou(t,e),!iu&&!ou){if(e=Il,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),su=!0}Il=null;break;case 5:Ou(t,e);break;case 4:r=iu,iu=!1,Ou(t,e),iu&&(ou=!0),iu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Ou(t,e):Ul(e,!1));break;case 30:r=iu,i=Ll(),iu=!1,Ou(t,e),iu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=di(a,o),o=di(n.memoizedProps,o);var s=pi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Rl=0,t=Xl(e,n,t,o,s,a,!0),Rl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(jd(e,e.memoizedProps.onUpdate),Il=i):i!==null&&(i.push.apply(i,Il),Il=i),iu=e.flags&32?!0:r;break;default:Ou(t,e)}}function Au(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)uu(e,t.alternate,t),t=t.sibling}function ju(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:gl(4,n,n.return),ju(n,r);break;case 1:bl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&vl(n,n.return,i),ju(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:bl(n,n.return),n.tag!==5&&n.tag!==27||Cl(n),ju(n,r);break;case 6:Cl(n);break;case 26:bl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||$l||i.parentNode.removeChild(i),ju(n,r);break;case 22:n.memoizedState===null&&ju(n,r);break;case 30:bl(n,n.return),ju(n,r);break;case 7:bl(n,n.return);default:ju(n,r)}e=e.sibling}}function Mu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Mu(i,a,n),hl(4,a);break;case 1:if(Mu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){ff(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)go(l[i],c)}catch(e){ff(r,r.return,e)}}s&&o&64&&_l(a),yl(a,a.return);break;case 27:n&2&&Ml(a);case 5:a.tag!==5&&a.tag!==27||Sl(a),Mu(i,a,n),s&&r===null&&o&4&&El(a),yl(a,a.return);break;case 6:Sl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||Ql||Km(bm(c.ownerDocument),a.type,c),Mu(i,a,n),s&&r===null&&o&4&&El(a),yl(a,a.return);break;case 12:Mu(i,a,n);break;case 31:Mu(i,a,n),s&&o&4&&yu(i,a);break;case 13:Mu(i,a,n),s&&o&4&&bu(i,a);break;case 22:a.memoizedState===null&&Mu(i,a,n),yl(a,a.return);break;case 30:Mu(i,a,n),yl(a,a.return);break;case 7:yl(a,a.return);default:Mu(i,a,n)}t=t.sibling}}function Nu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Da(n))}function Pu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Da(e))}function Fu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Iu(e,t,n,r),t=t.sibling;else i&&Yl(t)}function Iu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Jl(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Fu(e,t,n,r),a&2048&&hl(9,t);break;case 1:Fu(e,t,n,r);break;case 3:Fu(e,t,n,r),i&&su&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Da(a)));break;case 12:if(a&2048){Fu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){ff(t,t.return,e)}}else Fu(e,t,n,r);break;case 31:Fu(e,t,n,r);break;case 13:Fu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&Jl(t),o._visibility&2?Fu(e,t,n,r):(o._visibility|=2,Lu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&Jl(s),o._visibility&2?Fu(e,t,n,r):Ru(e,t)),a&2048&&Nu(s,t);break;case 24:Fu(e,t,n,r),a&2048&&Pu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Vl(a.child,!0),Vl(t.child,!0))),Fu(e,t,n,r);break;default:Fu(e,t,n,r)}}function Lu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Lu(a,o,s,c,i),hl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Lu(a,o,s,c,i)):u._visibility&2?Lu(a,o,s,c,i):Ru(a,o),i&&l&2048&&Nu(o.alternate,o);break;case 24:Lu(a,o,s,c,i),i&&l&2048&&Pu(o.alternate,o);break;default:Lu(a,o,s,c,i)}t=t.sibling}}function Ru(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ru(n,r),i&2048&&Nu(r.alternate,r);break;case 24:Ru(n,r),i&2048&&Pu(r.alternate,r);break;default:Ru(n,r)}t=t.sibling}}var zu=8192;function Bu(e,t,n){if(e.subtreeFlags&zu)for(e=e.child;e!==null;)Vu(e,t,n),e=e.sibling}function Vu(e,t,n){switch(e.tag){case 26:Bu(e,t,n),e.flags&zu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,wu,e.memoizedState,e.memoizedProps));break;case 5:Bu(e,t,n),e.flags&zu&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=wu;wu=bm(e.stateNode.containerInfo),Bu(e,t,n),wu=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=zu,zu=16777216,Bu(e,t,n),zu=r):Bu(e,t,n));break;case 30:if((e.flags&zu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Pl===null&&(Pl=new Map),Pl.set(r,i)}Bu(e,t,n);break;default:Bu(e,t,n)}}function Hu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Uu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ru=r,Ku(r,e)}Hu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wu(e),e=e.sibling}function Wu(e){switch(e.tag){case 0:case 11:case 15:Uu(e),e.flags&2048&&gl(9,e,e.return);break;case 3:Uu(e);break;case 12:Uu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gu(e)):Uu(e);break;default:Uu(e)}}function Gu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ru=r,Ku(r,e)}Hu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:gl(8,t,t.return),Gu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Gu(t));break;default:Gu(t)}e=e.sibling}}function Ku(e,t){for(;ru!==null;){var n=ru;switch(n.tag){case 0:case 11:case 15:gl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ru=r;else a:for(n=e;ru!==null;){r=ru;var i=r.sibling,a=r.return;if(mu(r),r===n){ru=null;break a}if(i!==null){i.return=a,ru=i;break a}ru=a}}}var qu={getCacheForType:function(e){var t=ya(Ta),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ya(Ta).controller.signal}},Ju=typeof WeakMap==`function`?WeakMap:Map,Yu=0,Xu=null,Z=null,Q=0,Zu=0,Qu=null,$u=!1,ed=!1,td=!1,nd=0,rd=0,id=0,ad=0,od=0,sd=0,cd=0,ld=null,ud=null,dd=!1,fd=0,pd=0,md=1/0,hd=null,gd=null,_d=0,vd=null,yd=null,bd=0,xd=0,Sd=null,Cd=null,wd=null,Td=null,Ed=null,Dd=0,Od=null;function kd(){return Yu&2&&Q!==0?Q&-Q:P.T===null?vt():Nf()}function Ad(){if(sd===0){if(!(Q&536870912)||K){var e=nt;nt<<=1,!(nt&3932160)&&(nt=262144),sd=e}else sd=536870912}return e=Co.current,e!==null&&(e.flags|=32),sd}function jd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(di(e.memoizedProps,n))),Td===null&&(Td=[]),Td.push(t.bind(null,r))}}function Md(e,t,n){(e===Xu&&(Zu===2||Zu===9)||e.cancelPendingCommit!==null)&&(zd(e,0),Id(e,Q,sd,!1)),dt(e,n),(!(Yu&2)||e!==Xu)&&(e===Xu&&(!(Yu&2)&&(ad|=n),rd===4&&Id(e,Q,sd,!1)),Tf(e))}function Nd(e,t,n){if(Yu&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||ot(e,t),a=r?qd(e,t):Gd(e,t,!0),o=r;do{if(a===0){ed&&!r&&Id(e,t,0,!1);break}if(n=e.current.alternate,o&&!Fd(n))a=Gd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=ld;var l=c.current.memoizedState.isDehydrated;if(l&&(zd(c,s).flags|=256),s=Gd(c,s,!1),s!==2&&s!==6){if(td&&!l){c.errorRecoveryDisabledLanes|=o,ad|=o,a=4;break a}o=ud,ud=a,o!==null&&(ud===null?ud=o:ud.push.apply(ud,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){zd(e,0),Id(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Id(r,t,sd,!$u);break a;case 2:ud=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=fd+300-ze(),10<a)){if(Id(r,t,sd,!$u),at(r,0,!0)!==0)break a;bd=t,r.timeoutHandle=gp(Pd.bind(null,r,n,ud,hd,dd,t,sd,ad,cd,$u,o,`Throttled`,-0,0),a);break a}Pd(r,n,ud,hd,dd,t,sd,ad,cd,$u,o,null,-0,0)}break}}while(1);Tf(e)}function Pd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:fn},Pl=null,Vu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?fd-ze():(a&4194048)===a?pd-ze():0,m=eh(d,m),m!==null)?(bd=a,e.cancelPendingCommit=m(ef.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Id(e,a,o,!l)):ef(e,t,a,n,r,i,o,s,c,l,u,d)}function Fd(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Fr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Id(e,t,n,r){t=st(e,t),t&=~od,t&=~ad,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ze(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&pt(e,n,t)}function Ld(){return Yu&6?!0:(Ef(0,!1),!1)}function Rd(){if(Z!==null){if(Zu===0)var e=Z.return;else e=Z,da=ua=null,Zo(e),Za=null,Qa=0,e=Z;for(;e!==null;)ml(e.alternate,e),e=e.return;Z=null}}function zd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),bd=0,Rd(),Xu=e,Z=n=Oi(e.current,null),Q=t,Zu=0,Qu=null,$u=!1,ed=ot(e,t),td=!1,cd=sd=od=ad=id=rd=0,ud=ld=null,dd=!1,nd=st(e,t),vi(),n}function Bd(e,t){X=null,P.H=sc,t===Va||t===Ua?(t=Ya(),Zu=3):t===Ha?(t=Ya(),Zu=4):Zu=t===Tc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Qu=t,Z===null&&(rd=1,yc(e,Ii(t,e.current)))}function Vd(){var e=Co.current;return e===null?!0:(Q&4194048)===Q?wo===null:(Q&62914560)===Q||Q&536870912?e===wo:!1}function Hd(){var e=P.H;return P.H=sc,e===null?sc:e}function Ud(){var e=P.A;return P.A=qu,e}function Wd(){rd=4,$u||(Q&4194048)!==Q&&Co.current!==null||(ed=!0),!(id&134217727)&&!(ad&134217727)||Xu===null||Id(Xu,Q,sd,!1)}function Gd(e,t,n){var r=Yu;Yu|=2;var i=Hd(),a=Ud();(Xu!==e||Q!==t)&&(hd=null,zd(e,t)),t=!1;var o=rd;a:do try{if(Zu!==0&&Z!==null){var s=Z,c=Qu;switch(Zu){case 8:Rd(),o=6;break a;case 3:case 2:case 9:case 6:Co.current===null&&(t=!0);var l=Zu;if(Zu=0,Qu=null,Zd(e,s,c,l),n&&ed){o=0;break a}break;default:l=Zu,Zu=0,Qu=null,Zd(e,s,c,l)}}Kd(),o=rd;break}catch(t){Bd(e,t)}while(1);return t&&e.shellSuspendCounter++,da=ua=null,Yu=r,P.H=i,P.A=a,Z===null&&(Xu=null,Q=0,vi()),o}function Kd(){for(;Z!==null;)Yd(Z)}function qd(e,t){var n=Yu;Yu|=2;var r=Hd(),a=Ud();Xu!==e||Q!==t?(hd=null,md=ze()+500,zd(e,t)):ed=ot(e,t);a:do try{if(Zu!==0&&Z!==null){t=Z;var o=Qu;b:switch(Zu){case 1:Zu=0,Qu=null,Zd(e,t,o,1);break;case 2:case 9:if(Ga(o)){Zu=0,Qu=null,Xd(t);break}t=function(){Zu!==2&&Zu!==9||Xu!==e||(Zu=7),Tf(e)},o.then(t,t);break a;case 3:Zu=7;break a;case 4:Zu=5;break a;case 7:Ga(o)?(Zu=0,Qu=null,Xd(t)):(Zu=0,Qu=null,Zd(e,t,o,7));break;case 5:var s=null;switch(Z.tag){case 26:s=Z.memoizedState;case 5:case 27:var c=Z;if(s?Ym(s):c.stateNode.complete){Zu=0,Qu=null;var l=c.sibling;if(l!==null)Z=l;else{var u=c.return;u===null?Z=null:(Z=u,Qd(u))}break b}}Zu=0,Qu=null,Zd(e,t,o,5);break;case 6:Zu=0,Qu=null,Zd(e,t,o,6);break;case 8:Rd(),rd=6;break a;default:throw Error(i(462))}}Jd();break}catch(t){Bd(e,t)}while(1);return da=ua=null,P.H=r,P.A=a,Yu=n,Z===null?(Xu=null,Q=0,vi(),rd):0}function Jd(){for(;Z!==null&&!Le();)Yd(Z)}function Yd(e){var t=al(e.alternate,e,nd);e.memoizedProps=e.pendingProps,t===null?Qd(e):Z=t}function Xd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=zc(n,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=zc(n,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:Zo(t);var r=t;r===Zi&&(K?(ia(r),r.tag===5&&r.stateNode!=null&&(Qi=r.stateNode)):(ia(r),K=!0));default:ml(n,t),t=Z=ki(t,nd),t=al(n,t,nd)}e.memoizedProps=e.pendingProps,t===null?Qd(e):Z=t}function Zd(e,t,n,r){da=ua=null,Zo(t),Za=null,Qa=0;var i=t.return;try{if(wc(e,i,t,n,Q)){rd=1,yc(e,Ii(n,e.current)),Z=null;return}}catch(t){if(i!==null)throw Z=i,t;rd=1,yc(e,Ii(n,e.current)),Z=null;return}t.flags&32768?(K||r===1?e=!0:ed||Q&536870912?e=!1:($u=e=!0,(r===2||r===9||r===3||r===6)&&(r=Co.current,r!==null&&r.tag===13&&(r.flags|=16384))),$d(t,e)):Qd(t)}function Qd(e){var t=e;do{if(t.flags&32768){$d(t,$u);return}e=t.return;var n=fl(t.alternate,t,nd);if(n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);rd===0&&(rd=5)}function $d(e,t){do{var n=pl(e.alternate,e);if(n!==null){n.flags&=32767,Z=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=n}while(e!==null);rd=6,Z=null}function ef(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do lf();while(_d!==0);if(Yu&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===Xu&&(Z=Xu=null,Q=0),yd=t,vd=e,bd=n,Sd=a,Cd=r,tf(e,t,n,s,c,l,f)}}function tf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(xd=s,s|=_i,ft(e,n,s,r,i,a),Td=null,(n&335544064)===n?(Ed=Aa(e),r=10262):(Ed=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,vf(Ue,function(){return uf(),null})):(e.callbackNode=null,e.callbackPriority=0),Nl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=P.T,P.T=null,i=F.p,F.p=2,a=Yu,Yu|=4;try{cu(e,t,n)}finally{Yu=a,F.p=i,P.T=r}}_d=1,Nl?wd=Mp(o,e.containerInfo,Ed,af,of,rf,sf,uf,nf,null,null):(af(),of(),sf())}function nf(e){if(_d!==0){var t=vd.onRecoverableError;t(e,{componentStack:null})}}function rf(){_d===3&&(_d=0,ku(yd,vd),_d=4)}function af(){if(_d===1){_d=0;var e=vd,t=yd,n=bd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=P.T,P.T=null;var i=F.p;F.p=2;var a=Yu;Yu|=4;try{au=ou=!1,Tu(t,e,n),n=cp;var o=Vr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Br(s.ownerDocument.documentElement,s)){if(c!==null&&Hr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=zr(s,h),v=zr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{Yu=a,F.p=i,P.T=r}}e.current=t,_d=2}}function of(){if(_d===2){_d=0;var e=vd,t=yd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=Yu;Yu|=4;try{uu(e,t.alternate,t)}finally{Yu=i,F.p=r,P.T=n}}_d=3}}function sf(){if(_d===4||_d===3){_d=0;var e=wd;wd=null,Re();var t=vd,n=yd,r=bd,i=Cd,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?_d=5:(_d=0,yd=vd=null,cf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(gd=null),_t(r),n=n.stateNode,Ye&&typeof Ye.onCommitFiberRoot==`function`)try{Ye.onCommitFiberRoot(Je,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=P.T,a=F.p,F.p=2,P.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{P.T=n,F.p=a}}if(i=Td,o=Ed,Ed=null,i!==null&&(Td=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);bd&3&&lf(),Tf(t),a=t.pendingLanes,r&261930&&a&42?t===Od?Dd++:(Dd=0,Od=t):(Dd=0,Od=null),Ef(0,!1)}}function cf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Da(t)))}function lf(){return wd!==null&&(wd.skipTransition(),wd=null),af(),of(),sf(),uf()}function uf(){if(_d!==5)return!1;var e=vd,t=xd;xd=0;var n=_t(bd),r=P.T,a=F.p;try{F.p=32>n?32:n,P.T=null,n=Sd,Sd=null;var o=vd,s=bd;if(_d=0,yd=vd=null,bd=0,Yu&6)throw Error(i(331));var c=Yu;if(Yu|=4,Wu(o.current),Iu(o,o.current,s,n),Yu=c,Ef(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot==`function`)try{Ye.onPostCommitFiberRoot(Je,o)}catch{}return!0}finally{F.p=a,P.T=r,cf(e,t)}}function df(e,t,n){t=Ii(n,t),t=xc(e.stateNode,t,2),e=lo(e,t,2),e!==null&&(dt(e,2),Tf(e))}function ff(e,t,n){if(e.tag===3)df(e,e,n);else for(;t!==null;){if(t.tag===3){df(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(gd===null||!gd.has(r))){e=Ii(n,e),n=Sc(2),r=lo(t,n,2),r!==null&&(Cc(n,r,t,e),dt(r,2),Tf(r));break}}t=t.return}}function pf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ju;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(td=!0,i.add(n),e=mf.bind(null,e,t,n),t.then(e,e))}function mf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Xu===e&&(Q&n)===n&&(rd===4||rd===3&&(Q&62914560)===Q&&300>ze()-fd?Yu&2?od|=n:zd(e,0):od|=n,cd===Q&&(cd=0)),Tf(e)}function hf(e,t){t===0&&(t=lt()),e=xi(e,t),e!==null&&(dt(e,t),Tf(e))}function gf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hf(e,n)}function _f(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),hf(e,n)}function vf(e,t){return Fe(e,t)}var yf=null,bf=null,xf=!1,Sf=!1,Cf=!1,wf=0;function Tf(e){e!==bf&&e.next===null&&(bf===null?yf=bf=e:bf=bf.next=e),Sf=!0,xf||(xf=!0,Mf())}function Ef(e,t){if(!Cf&&Sf){Cf=!0;do for(var n=!1,r=yf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ze(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,jf(r,a))}else a=Q,a=at(r,r===Xu?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||ot(r,a)||(n=!0,jf(r,a))}r=r.next}while(n);Cf=!1}}function Df(){Of()}function Of(){Sf=xf=!1;var e=0;wf!==0&&hp()&&(e=wf);for(var t=ze(),n=null,r=yf;r!==null;){var i=r.next,a=kf(r,t);a===0?(r.next=null,n===null?yf=i:n.next=i,i===null&&(bf=n)):(n=r,(e!==0||a&3)&&(Sf=!0)),r=i}_d!==0&&_d!==5||Ef(e,!1),wf!==0&&(wf=0)}function kf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ze(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=ct(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Xu,n=Q,n=at(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Zu===2||Zu===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ie(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||ot(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ie(r),_t(n)){case 2:case 8:n=He;break;case 32:n=Ue;break;case 268435456:n=Ge;break;default:n=Ue}return r=Af.bind(null,e),n=Fe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ie(r),e.callbackPriority=2,e.callbackNode=null,2}function Af(e,t){if(_d!==0&&_d!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(lf()&&e.callbackNode!==n)return null;var r=Q;return r=at(e,e===Xu?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Nd(e,r,t),kf(e,ze()),e.callbackNode!=null&&e.callbackNode===n?Af.bind(null,e):null)}function jf(e,t){if(lf())return null;Nd(e,t,!0)}function Mf(){bp(function(){Yu&6?Fe(Ve,Df):Of()})}function Nf(){if(wf===0){var e=q;e===0&&(e=tt,tt<<=1,!(tt&261888)&&(tt=256)),wf=e}return wf}function Pf(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:dn(e)}function Ff(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Pf((i[St]||null).action),o=r.submitter;o&&(t=(t=o[St]||null)?Pf(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Nn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(wf!==0){var e=new FormData(i,o);qs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),qs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var If=0;If<ci.length;If++){var Lf=ci[If];li(Lf.toLowerCase(),`on`+(Lf[0].toUpperCase()+Lf.slice(1)))}li(ei,`onAnimationEnd`),li(ti,`onAnimationIteration`),li(ni,`onAnimationStart`),li(`dblclick`,`onDoubleClick`),li(`focusin`,`onFocus`),li(`focusout`,`onBlur`),li(ri,`onTransitionRun`),li(ii,`onTransitionStart`),li(ai,`onTransitionCancel`),li(oi,`onTransitionEnd`),Lt(`onMouseEnter`,[`mouseout`,`mouseover`]),Lt(`onMouseLeave`,[`mouseout`,`mouseover`]),Lt(`onPointerEnter`,[`pointerout`,`pointerover`]),Lt(`onPointerLeave`,[`pointerout`,`pointerover`]),It(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),It(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),It(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),It(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),It(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),It(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Rf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),zf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Rf));function Bf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){mi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){mi(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[wt];n===void 0&&(n=t[wt]=new Set);var r=e+`__bubble`;n.has(r)||(Wf(t,e,2,!1),n.add(r))}function Vf(e,t,n){var r=0;t&&(r|=4),Wf(n,e,r,t)}var Hf=`_reactListening`+Math.random().toString(36).slice(2);function Uf(e){if(!e[Hf]){e[Hf]=!0,Pt.forEach(function(t){t!==`selectionchange`&&(zf.has(t)||Vf(t,!1,e),Vf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hf]||(t[Hf]=!0,Vf(`selectionchange`,!1,t))}}function Wf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!Sn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Gf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=kt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}yn(function(){var r=a,i=mn(n),s=[];a:{var c=si.get(e);if(c!==void 0){var l=Nn,u=e;switch(e){case`keypress`:if(On(n)===0)break a;case`keydown`:case`keyup`:l=Zn;break;case`focusin`:u=`focus`,l=Hn;break;case`focusout`:u=`blur`,l=Hn;break;case`beforeblur`:case`afterblur`:l=Hn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Bn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Vn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=er;break;case ei:case ti:case ni:l=Un;break;case oi:l=tr;break;case`scroll`:case`scrollend`:l=Fn;break;case`wheel`:l=nr;break;case`copy`:case`cut`:case`paste`:l=Wn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Qn;break;case`submit`:l=$n;break;case`toggle`:case`beforetoggle`:l=rr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=bn(m,p),g!=null&&d.push(Kf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==pn&&(u=n.relatedTarget||n.fromElement)&&(kt(u)||u[Ct]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?kt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Bn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:jt(c),h=l==null?u:jt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,kt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?E(c,l,Jf):null,c!==null&&Yf(s,u,c,d,!1),l!==null&&f!==null&&Yf(s,f,l,d,!0)))}a:{if(c=r?jt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Cr;else if(_r(c)){if(wr)_=Nr;else{_=jr;var v=Ar}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&cn(r.elementType)&&(_=Cr):_=Mr;if(_&&=_(e,r)){vr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?jt(r):window,e){case`focusin`:(_r(v)||v.contentEditable===`true`)&&(Wr=v,Gr=r,Kr=null);break;case`focusout`:Kr=Gr=Wr=null;break;case`mousedown`:qr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:qr=!1,Jr(s,n,i);break;case`selectionchange`:if(Ur)break;case`keydown`:case`keyup`:Jr(s,n,i)}var y;if(ar)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else pr?dr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(cr&&n.locale!==`ko`&&(pr||b!==`onCompositionStart`?b===`onCompositionEnd`&&pr&&(y=Dn()):(wn=i,Tn=`value`in wn?wn.value:wn.textContent,pr=!0)),v=qf(r,b),0<v.length&&(b=new Gn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=fr(n),y!==null&&(b.data=y)))),(y=sr?mr(e,n):hr(e,n))&&(b=qf(r,`onBeforeInput`),0<b.length&&(v=new Gn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),Ff(s,e,r,n,i)}Bf(s,t)})}function Kf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=bn(e,n),i!=null&&r.unshift(Kf(e,i,a)),i=bn(e,t),i!=null&&r.push(Kf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Jf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=bn(n,a),l!=null&&o.unshift(Kf(n,l,c))):i||(l=bn(n,a),l!=null&&o.push(Kf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Xf=/\r\n?/g,Zf=/\u0000|\uFFFD/g;function Qf(e){return(typeof e==`string`?e:``+e).replace(Xf,`
`).replace(Zf,``)}function $f(e,t){return t=Qf(t),Qf(e)===t}function ep(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||rn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&rn(e,``+r);else return;break;case`className`:Ut(e,`class`,r);break;case`tabIndex`:Ut(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ut(e,n,r);break;case`style`:sn(e,r,o);return;case`data`:if(t!==`object`){Ut(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=dn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&ep(e,t,`name`,a.name,a,null),ep(e,t,`formEncType`,a.formEncType,a,null),ep(e,t,`formMethod`,a.formMethod,a,null),ep(e,t,`formTarget`,a.formTarget,a,null)):(ep(e,t,`encType`,a.encType,a,null),ep(e,t,`method`,a.method,a,null),ep(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=dn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=fn);return;case`onScroll`:r!=null&&$(`scroll`,e);return;case`onScrollEnd`:r!=null&&$(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=dn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),Ht(e,`popover`,r);break;case`xlinkActuate`:Wt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Wt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Wt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Wt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Wt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Wt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Wt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Wt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Wt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ht(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=ln.get(n)||n,Ht(e,n,r);else return}Vt=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:sn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)rn(e,r);else if(typeof r==`number`||typeof r==`bigint`)rn(e,``+r);else return;break;case`onScroll`:r!=null&&$(`scroll`,e);return;case`onScrollEnd`:r!=null&&$(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=fn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Ft.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[St]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}Vt=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ht(e,n,r)}return}Vt=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:ep(e,t,o,s,n,null)}}a&&ep(e,t,`srcSet`,n.srcSet,n,null),r&&ep(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:ep(e,t,r,d,n,null)}}Qt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:ep(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&en(e,!!r,n,!0):en(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:ep(e,t,s,c,n,null)}nn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:ep(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<Rf.length;r++)$(Rf[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:ep(e,t,u,r,n,null)}return;default:if(cn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&ep(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||ep(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(Vt=!0),o=m;break;case`name`:m!==f&&(Vt=!0),a=m;break;case`checked`:m!==f&&(Vt=!0),u=m;break;case`defaultChecked`:m!==f&&(Vt=!0),d=m;break;case`value`:m!==f&&(Vt=!0),s=m;break;case`defaultValue`:m!==f&&(Vt=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&ep(e,t,p,m,r,f)}}Zt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||ep(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(Vt=!0),p=o;break;case`defaultValue`:o!==l&&(Vt=!0),c=o;break;case`multiple`:o!==l&&(Vt=!0),s=o;default:o!==l&&ep(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?en(e,!!n,n?[]:``,!1):en(e,!!n,t,!0)):en(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:ep(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(Vt=!0),p=a;break;case`defaultValue`:a!==o&&(Vt=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&ep(e,t,s,a,r,o)}tn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:ep(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(Vt=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:ep(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&ep(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:ep(e,t,u,p,r,m)}return;default:if(cn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&ep(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||ep(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[xt]=r,n[St]=t,np(n,e,t),Nt(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Et]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:D({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=kt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=E(n,a,T),t===null?t=!1:(h(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=E(r,a,T),t===null?t=!1:(h(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Ot(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Et])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&ep(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===fn&&(e.onclick=null),Ot(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ot(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=F.d;F.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=Ld();return e||t}function Cm(e){var t=At(e);t!==null&&t.tag===5&&t.type===`form`?Ys(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=Xt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Nt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+Xt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Xt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Xt(n.imageSizes)+`"]`)):i+=`[href="`+Xt(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=D({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[Dt]=!0,o.onload=o.onerror=function(){H(o)}),Nt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Xt(r)+`"][href="`+Xt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=D({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Nt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Mt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=D({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Nt(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Mt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Nt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Mt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Nt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=Te.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Mt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Mt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Mt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+Xt(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Dt]){r.loading=1;return}}else t=e.createElement(`link`),t[Dt]=!0,t.onload=t.onerror=H.bind(null,t),np(t,`link`,n),Nt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+Xt(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Xt(n.href)+`"]`);if(r)return t.instance=r,Nt(r),r;var a=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Nt(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Nt(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Nt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Nt(a),a):(r=n,(a=vm.get(o))&&(r=D({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Nt(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Et]||a[xt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Nt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Nt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:re,Provider:null,Consumer:null,_currentValue:_e,_currentValue2:_e,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ut(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ut(0),this.hiddenUpdates=ut(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Ei(3,null,null,t),e.current=a,a.stateNode=e,t=Ea(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},oo(a),e}function uh(e){return e?(e=wi,e):wi}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=co(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=lo(e,r,t),n!==null&&(Md(n,e,t),uo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=xi(e,67108864);t!==null&&Md(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=kd();t=gt(t);var n=xi(e,t);n!==null&&Md(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=2,yh(e,t,n,r)}finally{F.p=a,P.T=i}}function vh(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=8,yh(e,t,n,r)}finally{F.p=a,P.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Gf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=At(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=it(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ze(o);s.entanglements[1]|=c,o&=~c}Tf(a),!(Yu&6)&&(md=ze()+500,Ef(0,!1))}}break;case 31:case 13:s=xi(a,2),s!==null&&Md(s,a,2),Ld(),ph(a,2)}if(a=bh(r),a===null&&Gf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Gf(e,t,r,null,n)}}function bh(e){return e=mn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=kt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Be()){case Ve:return 2;case He:return 8;case Ue:case We:return 32;case Ge:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=At(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=kt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,yt(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,yt(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pn=r,n.target.dispatchEvent(r),pn=null}else return t=At(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=At(n);a!==null&&(e.splice(t,3),t-=3,qs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[St]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[St]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,kd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),Ld(),t[Ct]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=vt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.0`)throw Error(i(527,Kh,`19.3.0`));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.0`,rendererPackageName:`react-dom`,currentDispatcherRef:P,reconcilerVersion:`19.3.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{Je=Jh.inject(qh),Ye=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=gc,s=_c,c=vc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[Ct]=t.current,Uf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),b=o(((e,t)=>{t.exports=y()}))();function x({rotate:e=!0,className:t=`w-60 h-60`,color:n=`#d4d4d4`,size:r=`80`}){let i=(0,_.useRef)(null),a=(0,_.useRef)({});return(0,_.useEffect)(()=>{if(i.current&&e)return a.current=i.current.animate([{transform:`rotateX(20deg) rotateY(0deg)`},{transform:`rotateX(20deg) rotateY(360deg)`}],{duration:8e3,iterations:1/0,easing:`linear`}),()=>{a.current?.cancel()}},[e]),(0,b.jsxs)(`div`,{className:`relative ${t} flex items-center justify-center logo-container`,style:{"--size":r,"--color":n},onMouseEnter:()=>{a.current&&(a.current.playbackRate=3.2)},onMouseLeave:()=>{a.current&&(a.current.playbackRate=1)},children:[(0,b.jsx)(`div`,{className:`scene`,children:(0,b.jsxs)(`div`,{ref:i,className:`cube`,children:[(0,b.jsx)(`div`,{className:`cube-face front`}),(0,b.jsx)(`div`,{className:`cube-face back`}),(0,b.jsx)(`div`,{className:`cube-face right`}),(0,b.jsx)(`div`,{className:`cube-face left`}),(0,b.jsx)(`div`,{className:`cube-face top`}),(0,b.jsx)(`div`,{className:`cube-face bottom`})]})}),(0,b.jsx)(`svg`,{viewBox:`0 0 300 300`,className:`absolute inset-0 w-full h-full pointer-events-none hexagon-svg`,children:(0,b.jsx)(`path`,{stroke:n,fill:`none`,strokeWidth:`15`,strokeLinejoin:`round`,d:`m150 20 120 65v130l-120 65-120-65V85z`})})]})}var S={name:`Juan Sobalvarro`,title:`Portfolio`,role:`Cybernetic Electronics Engineer & Software Developer`},C={bio:S.role,specialization:`ROBOTICS · EMBEDDED SYSTEMS · HIGH-PERFORMANCE SOFTWARE`,message:`I design and build high-performance systems at the intersection of robotics, embedded systems, and software architecture. My work focuses on real-time communication, efficient computation, and reliability, from low-level C++ robotic control to scalable backend systems. I follow engineering standards such as IEEE 830-1998, UML-based design, Agile methodologies, and clean coding practices to deliver robust and maintainable solutions.`,ctaText:`Explore My Work`},w=[{id:`about`,label:`About`,description:`Who I am and what I do`,order:1},{id:`projects`,label:`Projects`,description:`Things I have built`,order:3},{id:`contact`,label:`Contact`,description:`Get in touch`,order:4}],T={email:`sobalvarrog.juans@gmail.com`,github:`https://github.com/JuanSobalvarro`,linkedin:`https://www.linkedin.com/in/juan-sobalvarro/`,twitter:`https://twitter.com/juansobalvarro`},E=[{id:`robert`,title:`RobeRT Middleware`,description:`Real-time middleware for controlling ABB robotic arms.`,longDescription:`A client-server middleware for ABB robotic arms built with a high-performance C++ core. Uses raw TCP sockets for robot communication and ZeroMQ for messaging between services. Achieves <100ms command latency with a queued execution model that blocks RAPID execution for deterministic behavior. Includes multithreaded communication, synchronization, and industrial-oriented error handling. On disconnection, the robot safely returns to a zero position and resets to listen for new clients.`,technologies:[`C++`,`Python`,`RAPID`,`ZeroMQ`,`TCP/IP`],tags:[`robotics`,`systems`,`embedded`],status:`completed`,featured:!0,year:2026,images:[{url:`projects/robert/robot.png`,type:`hero`}],links:[{label:`GitHub Middleware`,url:`https://github.com/JuanSobalvarro/RobeRT`,type:`github`},{label:`GitHub API`,url:`https://github.com/JuanSobalvarro/robert-py`,type:`github`}],highlights:[`<100ms command latency (network + processing)`,`Client-server architecture (TCP + ZeroMQ)`,`Thread-safe command queue with deterministic execution`,`Failure handling with safe robot reset strategy`,`Multithreaded communication and synchronization`]},{id:`roboforger`,title:`RoboForger`,description:`DXF/DWG to ABB RAPID code generator.`,longDescription:`A desktop application that converts CAD files into executable RAPID programs for ABB robots. Reduced manual programming time from 2–3 hours to 5–15 minutes by automating path generation and code structure. Designed for practical industrial workflows with a PySide6 interface.`,technologies:[`Python`,`PySide6`,`RAPID`],tags:[`robotics`,`automation`],status:`completed`,featured:!0,year:2025,images:[{url:`https://github.com/JuanSobalvarro/RoboForger/blob/main/docs/ss_v2.1.png?raw=true`,type:`hero`}],links:[{label:`GitHub`,url:`https://github.com/JuanSobalvarro/RoboForger`,type:`github`}],highlights:[`Reduced programming time from hours to minutes`,`Automated CAD → RAPID pipeline`,`Industrial-oriented desktop interface`]},{id:`twinengineinventory`,title:`TwinEngine Inventory`,description:`Inventory management system for a local coffee factory.`,longDescription:`A web-based inventory management system for a local coffee factory. Built with Django and React, it provides real-time tracking of stock levels, order management, and reporting features. The system is designed to be user-friendly and scalable, allowing the factory to efficiently manage its inventory and streamline operations.`,technologies:[`Python`,`Django`,`React`,`PostgreSQL`],tags:[`webapp`,`inventory`],status:`completed`,featured:!0,year:2026,images:[{url:`/projects/twinengineinventory/inventory.png`,type:`hero`}],links:[{label:`WebSite`,url:`https://twinenginecoffee.com`}],highlights:[`Real-time inventory tracking`,`Web-based interface with Django and React`,`Scalable architecture for growing businesses`]},{id:`transferandpaymentbusiness`,title:`Money transfer and Payment business`,description:`Web platform for a local money transfer and payment business.`,longDescription:`A web platform for a local money transfer and payment business. Built with Django and React, it helps the business to manage transactions, keep track of customers and cash flow.`,technologies:[`Python`,`Django`,`React`,`PostgreSQL`],tags:[`webapp`,`finance`],status:`completed`,featured:!1,year:2026,images:[{url:`/projects/rym/logo.png`,type:`hero`}],links:[],highlights:[`Real-time transaction management`,`Web-based interface with Django and React`,`Scalable architecture for growing businesses`]},{id:`asismed`,title:`AsisMed ULSA`,description:`Medical management system used in a university clinic.`,longDescription:`A full-stack medical management system developed by a team of 5 developers where I led backend architecture and system design. Built with Django REST Framework and React, following Agile methodologies with sprint-based development across multiple courses. Reduced report generation from hours to minutes and is currently deployed in a clinical environment. Designed to scale for multi-user usage within a clinic.`,technologies:[`Docker`,`Python`,`Django`,`React`,`PostgreSQL`],tags:[`healthcare`,`backend`],status:`completed`,featured:!0,year:2024,images:[{url:`/projects/asismed/login.png`,type:`hero`},{url:`/projects/asismed/dashboard.png`,type:`gallery`},{url:`/projects/asismed/report.png`,type:`gallery`}],links:[{label:`Official Notes`,url:`https://ulsa.edu.ni/index.php/440-ulsa-oficializa-asismed-como-proyecto-con-potencial-de-transferencia-tecnologica-desarrollado-por-estudiantes-de-ice`,type:`other`}],highlights:[`Reduced reporting time from hours to minutes`,`Led backend architecture in 5-person team`,`REST API with Django REST Framework`,`Agile development (sprints, iterative delivery)`,`Deployed and actively used system`]},{id:`ecollecta`,title:`Ecollecta`,description:`Digital catalog for university species collection.`,longDescription:`A static web platform that digitizes a university species collection using QR codes. Currently deployed with ~30 species and designed to support ~1500 users. Focused on accessibility, simplicity, and scalable static delivery.`,technologies:[`React`,`TypeScript`,`GitHub Pages`],tags:[`webapp`,`nature`],status:`completed`,featured:!0,year:2026,images:[{url:`/projects/ecollecta/home.png`,type:`hero`},{url:`/projects/ecollecta/archive.png`,type:`gallery`},{url:`/projects/ecollecta/pdf.png`,type:`gallery`},{url:`/projects/ecollecta/qr.png`,type:`gallery`}],links:[{label:`GitHub`,url:`https://github.com/Programming-Club-ULSA/ecollecta-minimal`},{label:`Live Site`,url:`https://programming-club-ulsa.github.io/ecollecta-minimal/`}]},{id:`consultores`,title:`Sobalvarro Consultores`,description:`Corporate website for a construction company.`,longDescription:`A responsive website built for a construction supervision company. Focused on performance, accessibility, and modern UI across devices.`,technologies:[`React`,`TypeScript`,`GitHub Actions`],tags:[`web`,`construction`],status:`completed`,featured:!0,year:2023,images:[{url:`/projects/consultores/home.png`,type:`hero`},{url:`/projects/consultores/gallery.png`,type:`gallery`}],links:[{label:`Website`,url:`https://www.sobalvarroconsultores.com/`}]},{id:`parametric`,title:`ParametricSim`,description:`Parametric equation visualizer.`,longDescription:`A desktop tool for visualizing parametric equations using Python turtle graphics. Early project exploring mathematical visualization and GUI development.`,technologies:[`Python`,`Tkinter`,`Turtle`],tags:[`math`,`desktop`],status:`completed`,featured:!1,year:2022,images:[{url:`/projects/parametric/parametricsim.gif`,type:`hero`}],links:[{label:`GitHub`,url:`https://github.com/juansobalvarro/parametricsim`}]},{id:`ranking`,title:`Table Tennis Ranking System`,description:`Ranking system for university players.`,longDescription:`A web platform for managing player rankings, match history, and statistics. Built with Django and React, implementing dynamic ranking calculations and real-time updates based on match outcomes.`,technologies:[`Python`,`Django`,`React`,`PostgreSQL`],tags:[`sports`,`webapp`],status:`completed`,featured:!1,year:2024,images:[{url:`/projects/ttranking/home.png`,type:`hero`},{url:`/projects/ttranking/profile.png`,type:`gallery`},{url:`/projects/ttranking/ranking.png`,type:`gallery`},{url:`/projects/ttranking/top.png`,type:`gallery`}],links:[{label:`GitHub`,url:`https://github.com/JuanSobalvarro/tt-ranking-system`}]},{id:`pingtrace`,title:`PingTrace`,description:`Network latency visualization tool.`,longDescription:`A command line tool that can perform ping and traceroute operations to visualize network latency and path. Built entirely in C and compiled for windows. Project for my university networks course, focused on low-level network programming and system calls.`,technologies:[`C`,`WinSock`,`CMake`],tags:[`network`,`visualization`],status:`completed`,featured:!1,year:2023,images:[{url:`/projects/pingtrace/ping.png`,type:`hero`},{url:`/projects/pingtrace/packet.png`,type:`gallery`}],links:[{label:`GitHub`,url:`https://github.com/JuanSobalvarro/PingTrace`}]},{id:`seam`,title:`SEAM - Custom ERP`,description:`Custom ERP system for business operations.`,longDescription:`A custom ERP system developed and sold to a local distributor, used by ~10 users. Includes inventory, finance, and reporting modules. Built with Django and React and deployed as a desktop application using Tauri.`,technologies:[`Django`,`React`,`PostgreSQL`,`Tauri`,`Python`],tags:[`erp`,`business`],status:`completed`,featured:!1,year:2025,images:[{url:`/projects/seam/login.png`,type:`hero`}],highlights:[`Commercially deployed system`,`Used in real business operations`,`Adapted to client infrastructure constraints`]},{id:`armonic`,title:`ArmonicApp`,description:`Harmonic analysis and visualization tool.`,longDescription:`A desktop application for analyzing audio signals using Fourier transforms. Provides visualization of frequency spectra and is being developed in both Python and C++ versions.`,technologies:[`Tkinter`,`FFT`,`Python`],tags:[`audio`,`analysis`],status:`completed`,featured:!1,year:2023,images:[{url:`/projects/armonicapp/view.png`,type:`hero`}],links:[{label:`GitHub Python`,url:`https://github.com/JuanSobalvarro/armonicapp`},{label:`GitHub C++`,url:`https://github.com/JuanSobalvarro/armonicappcpp`}]},{id:`sudoku`,title:`Sudoku Qt`,description:`Sudoku game built with Qt.`,longDescription:`A desktop application developed in C++ using Qt, implementing puzzle generation and solving logic. Early project focused on object-oriented design and GUI architecture.`,technologies:[`C++`,`Qt`],tags:[`games`,`desktop`],status:`completed`,featured:!1,year:2024,images:[{url:`/projects/sudoku/sudoku.png`,type:`hero`}],links:[{label:`GitHub`,url:`https://github.com/JuanSobalvarro/SudokuQt`}]},{id:`etheria`,title:`Etheria`,description:`Custom neural network framework for edge systems.`,longDescription:`A proof-of-concept neural network framework built from scratch in C++ with CUDA support. Implements custom tensors, CPU/GPU separation, and full backpropagation using stochastic gradient descent. Focused on memory management, performance tradeoffs, and low-level computation design.`,technologies:[`C++`,`CUDA`,`Pybind11`,`Python`],tags:[`ai`,`systems`],status:`completed`,featured:!0,year:2025,images:[{url:`/projects/etheria/performance.jpeg`,type:`hero`}],links:[{label:`GitHub`,url:`https://github.com/JuanSobalvarro/etheria`}],highlights:[`Custom tensor implementation`,`CPU/GPU memory separation`,`Backpropagation with SGD`,`Exploration of performance tradeoffs`]},{id:`cavipy`,title:`Cavipy`,description:`Monte Carlo cavity volume estimator.`,longDescription:`A Python-based simulation tool that estimates cavity volumes using Monte Carlo methods. Demonstrates probabilistic modeling and 3D spatial computation.`,technologies:[`Python`,`Vispy`,`NumPy`],tags:[`math`,`simulation`],status:`completed`,featured:!1,year:2025,images:[{url:`/projects/cavipy/cavipy.png`,type:`hero`}],links:[{label:`GitHub`,url:`https://github.com/JuanSobalvarro/Cavipy`}]},{id:`domotic`,title:`Domotic System`,description:`Embedded IoT system for power monitoring.`,longDescription:`An embedded system using ESP32 for real-time power monitoring and control. Samples data every 2 seconds and applies averaging to reduce noise and prevent database overload. Provides a web interface for monitoring and device control.`,technologies:[`Python`,`ESP32`,`Flask`],tags:[`iot`,`embedded`],status:`completed`,featured:!1,year:2025,images:[{url:`/projects/domotic/dashboard.jpeg`,type:`hero`}],highlights:[`Real-time data acquisition`,`Noise reduction via averaging strategy`,`Efficient sampling to protect backend systems`]},{id:`colpoapp`,title:`ColpoApp`,description:`Desktop Application for Colposcopy Reports generation.`,longDescription:`A desktop application built with PySide6 that generates colposcopy reports based on user input. The application provides a user-friendly interface for medical professionals to input patient data and examination results, which are then compiled into a structured report format.`,technologies:[`Python`,`PySide6`,`nuitka`,`weasyprint`,`inno setup`,`sqlite`],tags:[`healthcare`,`desktop`],status:`completed`,featured:!1,year:2026,images:[{url:`/projects/colpoapp/reports.png`,type:`hero`},{url:`/projects/colpoapp/patients.png`,type:`gallery`},{url:`/projects/colpoapp/dashboard.png`,type:`gallery`}]}];E.filter(e=>e.featured),E.filter(e=>e.status===`completed`),E.filter(e=>e.status===`in-progress`),Array.from(new Set(E.flatMap(e=>e.tags??[]))),Array.from(new Set(E.flatMap(e=>e.technologies)));var D=[{id:`languages`,name:`Languages`,color:`text-blue-400`,skills:[{id:`python`,name:`Python (clean architecture, APIs)`,category:`language`,proficiency:`advanced`},{id:`cpp`,name:`C/C++ (systems, memory, performance)`,category:`language`,proficiency:`intermediate`},{id:`ts`,name:`TypeScript`,category:`language`,proficiency:`intermediate`},{id:`bash`,name:`Bash Scripting`,category:`language`,proficiency:`intermediate`},{id:`rapid`,name:`ABB RAPID`,category:`language`,proficiency:`intermediate`}]},{id:`frameworks`,name:`Frameworks & Libraries`,color:`text-purple-400`,skills:[{id:`django`,name:`Django / DRF (REST APIs)`,category:`framework`,proficiency:`advanced`},{id:`qt`,name:`Qt / PySide6`,category:`framework`,proficiency:`intermediate`},{id:`react`,name:`React / Vite`,category:`framework`,proficiency:`intermediate`},{id:`platformio`,name:`PlatformIO (MCU development)`,category:`framework`,proficiency:`intermediate`}]},{id:`tools`,name:`Tools & Infrastructure`,color:`text-green-400`,skills:[{id:`git`,name:`Git & CI/CD`,category:`tool`,proficiency:`advanced`},{id:`docker`,name:`Docker`,category:`tool`,proficiency:`intermediate`},{id:`cmake`,name:`CMake`,category:`tool`,proficiency:`intermediate`},{id:`linux`,name:`Linux (Ubuntu, Debian)`,category:`tool`,proficiency:`intermediate`},{id:`nginx`,name:`Nginx`,category:`tool`,proficiency:`intermediate`},{id:`gcp`,name:`Google Cloud Platform`,category:`tool`,proficiency:`intermediate`},{id:`cloudflare`,name:`Cloudflare`,category:`tool`,proficiency:`intermediate`},{id:`cuda`,name:`CUDA`,category:`tool`,proficiency:`beginner`},{id:`tauri`,name:`Tauri`,category:`tool`,proficiency:`beginner`},{id:`inno`,name:`Inno Setup`,category:`tool`,proficiency:`beginner`}]}];function O({active:e,setActive:t}){let n=[...w].sort((e,t)=>(e.order??0)-(t.order??0));return(0,b.jsx)(`nav`,{className:`flex w-full items-center justify-center px-0 sm:px-2 md:px-4 text-sm overflow-x-auto`,children:(0,b.jsx)(`ul`,{className:`relative flex min-w-max items-center gap-1 sm:gap-2 rounded-2xl bg-gray-800/5 p-1.5 sm:p-2 before:absolute before:inset-0 before:rounded-2xl before:content-[''] before:[mask-composite:exclude] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor]`,children:n.map(n=>{let r=n.id===e;return(0,b.jsx)(`li`,{children:(0,b.jsxs)(`button`,{type:`button`,onClick:()=>t(n.id),className:`relative rounded-lg px-2.5 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-sm uppercase tracking-[0.08em] sm:tracking-[0.12em] whitespace-nowrap transition-all duration-300 ${r?`text-white`:`text-white/40 hover:text-white/80`}`,"aria-current":r?`page`:void 0,children:[n.label,(0,b.jsx)(`span`,{className:`absolute bottom-1 left-2.5 sm:left-4 right-2.5 sm:right-4 h-px origin-left bg-blue-500 transition-transform duration-300 ${r?`scale-x-100`:`scale-x-0`}`})]})},n.id)})})})}function ee({active:e,setActive:t}){return(0,b.jsxs)(`header`,{className:`flex flex-col gap-3 px-3 py-3 sm:px-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:px-10 md:py-4 w-full`,children:[(0,b.jsxs)(`div`,{className:`flex items-center justify-start md:justify-self-start min-w-0`,children:[(0,b.jsx)(`div`,{className:`shrink-0`,children:(0,b.jsx)(x,{className:`mr-3 h-10 w-10 sm:h-12 sm:w-12 md:mr-4 md:h-14 md:w-14`,size:`1.1rem`,color:`#f5f5f5`})}),(0,b.jsxs)(`div`,{className:`min-w-0`,children:[(0,b.jsxs)(`h1`,{className:`flex items-center text-lg font-semibold tracking-tight text-white sm:text-xl md:text-2xl truncate`,children:[S.title,(0,b.jsx)(`span`,{className:`ml-2 inline-block h-5 w-[2px] bg-blue-200/90 animate-pulse shrink-0`})]}),(0,b.jsxs)(`p`,{className:`text-[10px] uppercase tracking-[0.2em] text-blue-300/60 truncate`,children:[`By `,S.name]})]})]}),(0,b.jsx)(`div`,{className:`w-full md:w-auto md:justify-self-center overflow-x-auto no-scrollbar`,children:(0,b.jsx)(O,{active:e,setActive:t})})]})}var k=1e3,A=1001,te=1002,j=1003,ne=1004,re=1005,M=1006,ie=1007,ae=1008,oe=1009,N=1010,se=1011,ce=1012,le=1013,ue=1014,de=1015,fe=1016,pe=1017,me=1018,he=1020,ge=35902,P=35899,F=1021,_e=1022,ve=1023,ye=1026,be=1027,xe=1028,Se=1029,Ce=1030,we=1031,Te=1033,Ee=33776,De=33777,I=33778,Oe=33779,ke=35840,Ae=35841,L=35842,je=35843,R=36196,z=37492,Me=37496,Ne=37488,Pe=37489,Fe=37490,Ie=37491,Le=37808,Re=37809,ze=37810,Be=37811,Ve=37812,He=37813,Ue=37814,We=37815,Ge=37816,Ke=37817,qe=37818,Je=37819,Ye=37820,Xe=37821,Ze=36492,Qe=36494,$e=36495,et=36283,tt=36284,nt=36285,rt=36286,it=2300,at=2301,ot=2302,st=2303,ct=2400,lt=2401,ut=2402,dt=3200,ft=`srgb`,pt=`srgb-linear`,mt=`linear`,ht=`srgb`,gt=7680,_t=35044,vt=2e3;function yt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function bt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function xt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function St(){let e=xt(`canvas`);return e.style.display=`block`,e}var Ct={};function wt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Tt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function B(...e){e=Tt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function V(...e){e=Tt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Et(...e){let t=e.join(` `);t in Ct||(Ct[t]=!0,B(...e))}function Dt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Ot={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},kt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},At=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),jt=Math.PI/180,Mt=180/Math.PI;function Nt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(At[e&255]+At[e>>8&255]+At[e>>16&255]+At[e>>24&255]+`-`+At[t&255]+At[t>>8&255]+`-`+At[t>>16&15|64]+At[t>>24&255]+`-`+At[n&63|128]+At[n>>8&255]+`-`+At[n>>16&255]+At[n>>24&255]+At[r&255]+At[r>>8&255]+At[r>>16&255]+At[r>>24&255]).toLowerCase()}function H(e,t,n){return Math.max(t,Math.min(n,e))}function Pt(e,t){return(e%t+t)%t}function Ft(e,t,n){return(1-n)*e+n*t}function It(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function Lt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var Rt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(H(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:B(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(H(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this.z=H(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this.z=H(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bt.copy(this).projectOnVector(e),this.sub(Bt)}reflect(e){return this.sub(Bt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(H(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bt=new U,Vt=new zt,W=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ht.makeScale(e,t)),this}rotate(e){return this.premultiply(Ht.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ht.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ht=new W,Ut=new W().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wt=new W().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gt(){let e={enabled:!0,workingColorSpace:pt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Kt(e.r),e.g=Kt(e.g),e.b=Kt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=qt(e.r),e.g=qt(e.g),e.b=qt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?mt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Et(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Et(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[pt]:{primaries:t,whitePoint:r,transfer:mt,toXYZ:Ut,fromXYZ:Wt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:t,whitePoint:r,transfer:ht,toXYZ:Ut,fromXYZ:Wt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}}),e}var G=Gt();function Kt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function qt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Jt,Yt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jt===void 0&&(Jt=xt(`canvas`)),Jt.width=e.width,Jt.height=e.height;let t=Jt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Jt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=xt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Kt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Kt(t[e]/255)*255):t[e]=Kt(t[e]);return{data:t,width:e.width,height:e.height}}return B(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Xt=0,Zt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xt++}),this.uuid=Nt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Qt(r[t].image)):e.push(Qt(r[t]))}else e=Qt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Qt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Yt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(B(`Texture: Unable to serialize Texture.`),{})}var $t=0,en=new U,tn=class e extends kt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=A,i=A,a=M,o=ae,s=ve,c=oe,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$t++}),this.uuid=Nt(),this.name=``,this.source=new Zt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new W,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(en).x}get height(){return this.source.getSize(en).y}get depth(){return this.source.getSize(en).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){B(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case k:e.x-=Math.floor(e.x);break;case A:e.x=e.x<0?0:1;break;case te:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case k:e.y-=Math.floor(e.y);break;case A:e.y=e.y<0?0:1;break;case te:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null,tn.DEFAULT_MAPPING=300,tn.DEFAULT_ANISOTROPY=1;var nn=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this.z=H(this.z,e.z,t.z),this.w=H(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this.z=H(this.z,e,t),this.w=H(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rn=class extends kt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:M,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];let r=new tn({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:M,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Zt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},an=class extends rn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},on=class extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=j,this.minFilter=j,this.wrapR=A,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},sn=class extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=j,this.minFilter=j,this.wrapR=A,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},cn=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/ln.setFromMatrixColumn(e,0).length(),i=1/ln.setFromMatrixColumn(e,1).length(),a=1/ln.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dn,e,fn)}lookAt(e,t,n){let r=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),pn.crossVectors(n,hn),pn.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),pn.crossVectors(n,hn)),pn.normalize(),mn.crossVectors(hn,pn),r[0]=pn.x,r[4]=mn.x,r[8]=hn.x,r[1]=pn.y,r[5]=mn.y,r[9]=hn.y,r[2]=pn.z,r[6]=mn.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],A=r[10],te=r[14],j=r[3],ne=r[7],re=r[11],M=r[15];return i[0]=a*x+o*T+s*ee+c*j,i[4]=a*S+o*E+s*k+c*ne,i[8]=a*C+o*D+s*A+c*re,i[12]=a*w+o*O+s*te+c*M,i[1]=l*x+u*T+d*ee+f*j,i[5]=l*S+u*E+d*k+f*ne,i[9]=l*C+u*D+d*A+f*re,i[13]=l*w+u*O+d*te+f*M,i[2]=p*x+m*T+h*ee+g*j,i[6]=p*S+m*E+h*k+g*ne,i[10]=p*C+m*D+h*A+g*re,i[14]=p*w+m*O+h*te+g*M,i[3]=_*x+v*T+y*ee+b*j,i[7]=_*S+v*E+y*k+b*ne,i[11]=_*C+v*D+y*A+b*re,i[15]=_*w+v*O+y*te+b*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinant();if(i===0)return n.set(1,1,1),t.identity(),this;let a=ln.set(r[0],r[1],r[2]).length(),o=ln.set(r[4],r[5],r[6]).length(),s=ln.set(r[8],r[9],r[10]).length();i<0&&(a=-a),un.copy(this);let c=1/a,l=1/o,u=1/s;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=l,un.elements[5]*=l,un.elements[6]*=l,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,t.setFromRotationMatrix(un),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=vt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=vt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ln=new U,un=new cn,dn=new U(0,0,0),fn=new U(1,1,1),pn=new U,mn=new U,hn=new U,gn=new cn,_n=new zt,vn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(H(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-H(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(H(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-H(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(H(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-H(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:B(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _n.setFromEuler(this),this.setFromQuaternion(_n,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER=`XYZ`;var yn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},bn=0,xn=new U,Sn=new zt,Cn=new cn,wn=new U,Tn=new U,En=new U,Dn=new zt,On=new U(1,0,0),kn=new U(0,1,0),An=new U(0,0,1),jn={type:`added`},Mn={type:`removed`},Nn={type:`childadded`,child:null},Pn={type:`childremoved`,child:null},Fn=class e extends kt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bn++}),this.uuid=Nt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new vn,r=new zt,i=new U(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new cn},normalMatrix:{value:new W}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sn.setFromAxisAngle(e,t),this.quaternion.multiply(Sn),this}rotateOnWorldAxis(e,t){return Sn.setFromAxisAngle(e,t),this.quaternion.premultiply(Sn),this}rotateX(e){return this.rotateOnAxis(On,e)}rotateY(e){return this.rotateOnAxis(kn,e)}rotateZ(e){return this.rotateOnAxis(An,e)}translateOnAxis(e,t){return xn.copy(e).applyQuaternion(this.quaternion),this.position.add(xn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(On,e)}translateY(e){return this.translateOnAxis(kn,e)}translateZ(e){return this.translateOnAxis(An,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wn.copy(e):wn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Tn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Tn,wn,this.up):Cn.lookAt(wn,Tn,this.up),this.quaternion.setFromRotationMatrix(Cn),r&&(Cn.extractRotation(r.matrixWorld),Sn.setFromRotationMatrix(Cn),this.quaternion.premultiply(Sn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(V(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jn),Nn.child=e,this.dispatchEvent(Nn),Nn.child=null):V(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mn),Pn.child=e,this.dispatchEvent(Pn),Pn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jn),Nn.child=e,this.dispatchEvent(Nn),Nn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tn,e,En),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tn,Dn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Fn.DEFAULT_UP=new U(0,1,0),Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=class extends Fn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Ln={type:`move`},Rn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ln)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new In;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},zn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Vn={h:0,s:0,l:0};function Hn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Un=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,G.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=G.workingColorSpace){return this.r=e,this.g=t,this.b=n,G.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=G.workingColorSpace){if(e=Pt(e,1),t=H(t,0,1),n=H(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Hn(i,r,e+1/3),this.g=Hn(i,r,e),this.b=Hn(i,r,e-1/3)}return G.colorSpaceToWorking(this,r),this}setStyle(e,t=ft){function n(t){t!==void 0&&parseFloat(t)<1&&B(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:B(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);B(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let n=zn[e.toLowerCase()];return n===void 0?B(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kt(e.r),this.g=Kt(e.g),this.b=Kt(e.b),this}copyLinearToSRGB(e){return this.r=qt(e.r),this.g=qt(e.g),this.b=qt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return G.workingToColorSpace(Wn.copy(this),e),Math.round(H(Wn.r*255,0,255))*65536+Math.round(H(Wn.g*255,0,255))*256+Math.round(H(Wn.b*255,0,255))}getHexString(e=ft){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=G.workingColorSpace){G.workingToColorSpace(Wn.copy(this),t);let n=Wn.r,r=Wn.g,i=Wn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=G.workingColorSpace){return G.workingToColorSpace(Wn.copy(this),t),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=ft){G.workingToColorSpace(Wn.copy(this),e);let t=Wn.r,n=Wn.g,r=Wn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(Vn);let n=Ft(Bn.h,Vn.h,t),r=Ft(Bn.s,Vn.s,t),i=Ft(Bn.l,Vn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wn=new Un;Un.NAMES=zn;var Gn=class extends Fn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Kn=new U,qn=new U,Jn=new U,Yn=new U,Xn=new U,Zn=new U,Qn=new U,$n=new U,er=new U,tr=new U,nr=new nn,rr=new nn,ir=new nn,ar=class e{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Kn.subVectors(e,t),r.cross(Kn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Kn.subVectors(r,t),qn.subVectors(n,t),Jn.subVectors(e,t);let a=Kn.dot(Kn),o=Kn.dot(qn),s=Kn.dot(Jn),c=qn.dot(qn),l=qn.dot(Jn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Yn)!==null&&Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Yn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Yn.x),s.addScaledVector(a,Yn.y),s.addScaledVector(o,Yn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return nr.setScalar(0),rr.setScalar(0),ir.setScalar(0),nr.fromBufferAttribute(e,t),rr.fromBufferAttribute(e,n),ir.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(nr,i.x),a.addScaledVector(rr,i.y),a.addScaledVector(ir,i.z),a}static isFrontFacing(e,t,n,r){return Kn.subVectors(n,t),qn.subVectors(e,t),Kn.cross(qn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Kn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Xn.subVectors(r,n),Zn.subVectors(i,n),$n.subVectors(e,n);let s=Xn.dot($n),c=Zn.dot($n);if(s<=0&&c<=0)return t.copy(n);er.subVectors(e,r);let l=Xn.dot(er),u=Zn.dot(er);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Xn,a);tr.subVectors(e,i);let f=Xn.dot(tr),p=Zn.dot(tr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Zn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Qn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Qn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Xn,a).addScaledVector(Zn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},or=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=cr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,cr):cr.fromBufferAttribute(r,t),cr.applyMatrix4(e.matrixWorld),this.expandByPoint(cr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),lr.copy(e.boundingBox)),lr.applyMatrix4(e.matrixWorld),this.union(lr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cr),cr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),_r.subVectors(this.max,gr),ur.subVectors(e.a,gr),dr.subVectors(e.b,gr),fr.subVectors(e.c,gr),pr.subVectors(dr,ur),mr.subVectors(fr,dr),hr.subVectors(ur,fr);let t=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-hr.z,hr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,hr.z,0,-hr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-hr.y,hr.x,0];return!br(t,ur,dr,fr,_r)||(t=[1,0,0,0,1,0,0,0,1],!br(t,ur,dr,fr,_r))?!1:(vr.crossVectors(pr,mr),t=[vr.x,vr.y,vr.z],br(t,ur,dr,fr,_r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},sr=[new U,new U,new U,new U,new U,new U,new U,new U],cr=new U,lr=new or,ur=new U,dr=new U,fr=new U,pr=new U,mr=new U,hr=new U,gr=new U,_r=new U,vr=new U,yr=new U;function br(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){yr.fromArray(e,a);let o=i.x*Math.abs(yr.x)+i.y*Math.abs(yr.y)+i.z*Math.abs(yr.z),s=t.dot(yr),c=n.dot(yr),l=r.dot(yr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var xr=new U,Sr=new Rt,Cr=0,wr=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=_t,this.updateRanges=[],this.gpuType=de,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix4(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyNormalMatrix(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.transformDirection(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=It(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=It(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=It(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=It(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=It(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Tr=class extends wr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Er=class extends wr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Dr=class extends wr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Or=new or,kr=new U,Ar=new U,jr=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Or.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);let t=kr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(kr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(Ar)),this.expandByPoint(kr.copy(e.center).sub(Ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Mr=0,Nr=new cn,Pr=new Fn,Fr=new U,Ir=new or,Lr=new or,Rr=new U,zr=class e extends kt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mr++}),this.uuid=Nt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(yt(e)?Er:Tr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new W().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nr.makeRotationFromQuaternion(e),this.applyMatrix4(Nr),this}rotateX(e){return Nr.makeRotationX(e),this.applyMatrix4(Nr),this}rotateY(e){return Nr.makeRotationY(e),this.applyMatrix4(Nr),this}rotateZ(e){return Nr.makeRotationZ(e),this.applyMatrix4(Nr),this}translate(e,t,n){return Nr.makeTranslation(e,t,n),this.applyMatrix4(Nr),this}scale(e,t,n){return Nr.makeScale(e,t,n),this.applyMatrix4(Nr),this}lookAt(e){return Pr.lookAt(e),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Dr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&B(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)V(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ir.setFromBufferAttribute(n),this.morphTargetsRelative?(Rr.addVectors(this.boundingBox.min,Ir.min),this.boundingBox.expandByPoint(Rr),Rr.addVectors(this.boundingBox.max,Ir.max),this.boundingBox.expandByPoint(Rr)):(this.boundingBox.expandByPoint(Ir.min),this.boundingBox.expandByPoint(Ir.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&V(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)V(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new U,1/0);else if(e){let n=this.boundingSphere.center;if(Ir.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Lr.setFromBufferAttribute(n),this.morphTargetsRelative?(Rr.addVectors(Ir.min,Lr.min),Ir.expandByPoint(Rr),Rr.addVectors(Ir.max,Lr.max),Ir.expandByPoint(Rr)):(Ir.expandByPoint(Lr.min),Ir.expandByPoint(Lr.max))}Ir.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Rr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Rr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Rr.fromBufferAttribute(a,t),o&&(Fr.fromBufferAttribute(e,t),Rr.add(Fr)),r=Math.max(r,n.distanceToSquared(Rr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&V(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){V(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new wr(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new U,s[e]=new U;let c=new U,l=new U,u=new U,d=new Rt,f=new Rt,p=new Rt,m=new U,h=new U;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new U,y=new U,b=new U,x=new U;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new wr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new U,i=new U,a=new U,o=new U,s=new U,c=new U,l=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rr.fromBufferAttribute(e,t),Rr.normalize(),e.setXYZ(t,Rr.x,Rr.y,Rr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new wr(a,r,i)}if(this.index===null)return B(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Br=0,Vr=class extends kt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Br++}),this.uuid=Nt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Un(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gt,this.stencilZFail=gt,this.stencilZPass=gt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){B(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Hr=new U,Ur=new U,Wr=new U,Gr=new U,Kr=new U,qr=new U,Jr=new U,Yr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hr.copy(this.origin).addScaledVector(this.direction,t),Hr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ur.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),Gr.copy(this.origin).sub(Ur);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Wr),o=Gr.dot(this.direction),s=-Gr.dot(Wr),c=Gr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ur).addScaledVector(Wr,d),f}intersectSphere(e,t){Hr.subVectors(e.center,this.origin);let n=Hr.dot(this.direction),r=Hr.dot(Hr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Hr)!==null}intersectTriangle(e,t,n,r,i){Kr.subVectors(t,e),qr.subVectors(n,e),Jr.crossVectors(Kr,qr);let a=this.direction.dot(Jr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gr.subVectors(this.origin,e);let s=o*this.direction.dot(qr.crossVectors(Gr,qr));if(s<0)return null;let c=o*this.direction.dot(Kr.cross(Gr));if(c<0||s+c>a)return null;let l=-o*Gr.dot(Jr);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xr=class extends Vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Un(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zr=new cn,Qr=new Yr,$r=new jr,ei=new U,ti=new U,ni=new U,ri=new U,ii=new U,ai=new U,oi=new U,si=new U,ci=class extends Fn{constructor(e=new zr,t=new Xr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ai.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ii.fromBufferAttribute(s,e),a?ai.addScaledVector(ii,r):ai.addScaledVector(ii.sub(t),r))}t.add(ai)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),Qr.copy(e.ray).recast(e.near),!($r.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere($r,ei)===null||Qr.origin.distanceToSquared(ei)>(e.far-e.near)**2))&&(Zr.copy(i).invert(),Qr.copy(e.ray).applyMatrix4(Zr),(n.boundingBox===null||Qr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Qr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ui(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ui(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ui(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ui(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function li(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;si.copy(s),si.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(si);return l<n.near||l>n.far?null:{distance:l,point:si.clone(),object:e}}function ui(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ti),e.getVertexPosition(c,ni),e.getVertexPosition(l,ri);let u=li(e,t,n,r,ti,ni,ri,oi);if(u){let e=new U;ar.getBarycoord(oi,ti,ni,ri,e),i&&(u.uv=ar.getInterpolatedAttribute(i,s,c,l,e,new Rt)),a&&(u.uv1=ar.getInterpolatedAttribute(a,s,c,l,e,new Rt)),o&&(u.normal=ar.getInterpolatedAttribute(o,s,c,l,e,new U),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new U,materialIndex:0};ar.getNormal(ti,ni,ri,t.normal),u.face=t,u.barycoord=e}return u}var di=class extends tn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=j,l=j,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},fi=new U,pi=new U,mi=new W,hi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=fi.subVectors(n,t).cross(pi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(fi),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||mi.getNormalMatrix(e),r=this.coplanarPoint(fi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},gi=new jr,_i=new Rt(.5,.5),vi=new U,yi=class{constructor(e=new hi,t=new hi,n=new hi,r=new hi,i=new hi,a=new hi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476+_i.distanceTo(e.center),gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(vi.x=r.normal.x>0?e.max.x:e.min.x,vi.y=r.normal.y>0?e.max.y:e.min.y,vi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},bi=class extends Vr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Un(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xi=new cn,Si=new Yr,Ci=new jr,wi=new U,Ti=class extends Fn{constructor(e=new zr,t=new bi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ci.copy(n.boundingSphere),Ci.applyMatrix4(r),Ci.radius+=i,e.ray.intersectsSphere(Ci)===!1)return;xi.copy(r).invert(),Si.copy(e.ray).applyMatrix4(xi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);wi.fromBufferAttribute(l,n),Ei(wi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)wi.fromBufferAttribute(l,a),Ei(wi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ei(e,t,n,r,i,a,o){let s=Si.distanceSqToPoint(e);if(s<n){let n=new U;Si.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Di=class extends tn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Oi=class extends tn{constructor(e,t,n=ue,r,i,a,o=j,s=j,c,l=ye,u=1){if(l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ki=class extends Oi{constructor(e,t=ue,n=301,r,i,a=j,o=j,s,c=ye){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ai=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ji=class e extends zr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Dr(c,3)),this.setAttribute(`normal`,new Dr(l,3)),this.setAttribute(`uv`,new Dr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new U;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Mi=class e extends zr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Dr(p,3)),this.setAttribute(`normal`,new Dr(m,3)),this.setAttribute(`uv`,new Dr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Ni(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(B(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Pi(e){let t={};for(let n=0;n<e.length;n++){let r=Ni(e[n]);for(let e in r)t[e]=r[e]}return t}function Fi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ii(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:G.workingColorSpace}var Li={clone:Ni,merge:Pi},Ri=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bi=class extends Vr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ri,this.fragmentShader=zi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ni(e.uniforms),this.uniformsGroups=Fi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Vi=class extends Bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Hi=class extends Vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=dt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ui=class extends Vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Wi(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var Gi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Ki=class extends Gi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ct,endingEnd:ct}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case lt:i=e,o=2*t-n;break;case ut:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case lt:a=e,s=2*n-t;break;case ut:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},qi=class extends Gi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ji=class extends Gi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Yi=class extends Gi{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.settings||this.DefaultSettings_,u=l.inTangents,d=l.outTangents;if(!u||!d){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let f=o*2,p=e-1;for(let l=0;l!==o;++l){let o=a[c+l],m=a[s+l],h=p*f+l*2,g=d[h],_=d[h+1],v=e*f+l*2,y=u[v],b=u[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[l]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},Xi=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Wi(t,this.TimeBufferType),this.values=Wi(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wi(e.times,Array),values:Wi(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ji(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ki(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Yi(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case it:t=this.InterpolantFactoryMethodDiscrete;break;case at:t=this.InterpolantFactoryMethodLinear;break;case ot:t=this.InterpolantFactoryMethodSmooth;break;case st:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return B(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return it;case this.InterpolantFactoryMethodLinear:return at;case this.InterpolantFactoryMethodSmooth:return ot;case this.InterpolantFactoryMethodBezier:return st}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(V(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(V(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){V(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){V(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&bt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){V(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ot,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Xi.prototype.ValueTypeName=``,Xi.prototype.TimeBufferType=Float32Array,Xi.prototype.ValueBufferType=Float32Array,Xi.prototype.DefaultInterpolation=at;var Zi=class extends Xi{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName=`bool`,Zi.prototype.ValueBufferType=Array,Zi.prototype.DefaultInterpolation=it,Zi.prototype.InterpolantFactoryMethodLinear=void 0,Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Xi{constructor(e,t,n,r){super(e,t,n,r)}};Qi.prototype.ValueTypeName=`color`;var K=class extends Xi{constructor(e,t,n,r){super(e,t,n,r)}};K.prototype.ValueTypeName=`number`;var $i=class extends Gi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)zt.slerpFlat(i,0,a,c-o,a,c,s);return i}},ea=class extends Xi{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new $i(this.times,this.values,this.getValueSize(),e)}};ea.prototype.ValueTypeName=`quaternion`,ea.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends Xi{constructor(e,t,n){super(e,t,n)}};ta.prototype.ValueTypeName=`string`,ta.prototype.ValueBufferType=Array,ta.prototype.DefaultInterpolation=it,ta.prototype.InterpolantFactoryMethodLinear=void 0,ta.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends Xi{constructor(e,t,n,r){super(e,t,n,r)}};na.prototype.ValueTypeName=`vector`;var ra=new U,ia=new zt,aa=new U,oa=class extends Fn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=vt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ra,ia,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ra,ia,aa.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ra,ia,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ra,ia,aa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},sa=new U,ca=new Rt,la=new Rt,ua=class extends oa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mt*2*Math.atan(Math.tan(jt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){sa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(sa.x,sa.y).multiplyScalar(-e/sa.z),sa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sa.x,sa.y).multiplyScalar(-e/sa.z)}getViewSize(e,t){return this.getViewBounds(e,ca,la),t.subVectors(la,ca)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},da=class extends oa{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},fa=-90,pa=1,ma=class extends Fn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ua(fa,pa,e,t);r.layers=this.layers,this.add(r);let i=new ua(fa,pa,e,t);i.layers=this.layers,this.add(i);let a=new ua(fa,pa,e,t);a.layers=this.layers,this.add(a);let o=new ua(fa,pa,e,t);o.layers=this.layers,this.add(o);let s=new ua(fa,pa,e,t);s.layers=this.layers,this.add(s);let c=new ua(fa,pa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ha=class extends ua{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ga=`\\[\\]\\.:\\/`,_a=RegExp(`[\\[\\]\\.:\\/]`,`g`),va=`[^\\[\\]\\.:\\/]`,ya=`[^`+ga.replace(`\\.`,``)+`]`,ba=`((?:WC+[\\/:])*)`.replace(`WC`,va),xa=`(WCOD+)?`.replace(`WCOD`,ya),Sa=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,va),Ca=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,va),wa=RegExp(`^`+ba+xa+Sa+Ca+`$`),Ta=[`material`,`materials`,`bones`,`map`],Ea=class{constructor(e,t,n){let r=n||Da.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Da=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(_a,``)}static parseTrackName(e){let t=wa.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ta.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){B(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){V(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){V(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){V(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){V(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){V(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;V(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Da.Composite=Ea,Da.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Da.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Da.prototype.GetterByBindingType=[Da.prototype._getValue_direct,Da.prototype._getValue_array,Da.prototype._getValue_arrayElement,Da.prototype._getValue_toArray],Da.prototype.SetterByBindingTypeAndVersioning=[[Da.prototype._setValue_direct,Da.prototype._setValue_direct_setNeedsUpdate,Da.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Da.prototype._setValue_array,Da.prototype._setValue_array_setNeedsUpdate,Da.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Da.prototype._setValue_arrayElement,Da.prototype._setValue_arrayElement_setNeedsUpdate,Da.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Da.prototype._setValue_fromArray,Da.prototype._setValue_fromArray_setNeedsUpdate,Da.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Oa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,B(`THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ka(e,t,n,r){let i=Aa(r);switch(n){case F:return e*t;case xe:return e*t/i.components*i.byteLength;case Se:return e*t/i.components*i.byteLength;case Ce:return e*t*2/i.components*i.byteLength;case we:return e*t*2/i.components*i.byteLength;case _e:return e*t*3/i.components*i.byteLength;case ve:return e*t*4/i.components*i.byteLength;case Te:return e*t*4/i.components*i.byteLength;case Ee:case De:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case I:case Oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ae:case je:return Math.max(e,16)*Math.max(t,8)/4;case ke:case L:return Math.max(e,8)*Math.max(t,8)/2;case R:case z:case Ne:case Pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Me:case Fe:case Ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Re:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ze:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Be:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ve:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case He:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ue:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case We:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ge:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ke:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case qe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Je:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ye:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Xe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ze:case Qe:case $e:return Math.ceil(e/4)*Math.ceil(t/4)*16;case et:case tt:return Math.ceil(e/4)*Math.ceil(t/4)*8;case nt:case rt:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Aa(e){switch(e){case oe:case N:return{byteLength:1,components:1};case ce:case se:case fe:return{byteLength:2,components:1};case pe:case me:return{byteLength:2,components:4};case ue:case le:case de:return{byteLength:4,components:1};case ge:case P:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`183`}})),typeof window<`u`&&(window.__THREE__?B(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`183`);function ja(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ma(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},J={common:{diffuse:{value:new Un(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new W}},envmap:{envMap:{value:null},envMapRotation:{value:new W},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new W}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new W}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new W},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new W},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new W},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new W}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new W}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new W}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Un(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Un(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0},uvTransform:{value:new W}},sprite:{diffuse:{value:new Un(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}}},Na={basic:{uniforms:Pi([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:q.meshbasic_vert,fragmentShader:q.meshbasic_frag},lambert:{uniforms:Pi([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new Un(0)},envMapIntensity:{value:1}}]),vertexShader:q.meshlambert_vert,fragmentShader:q.meshlambert_frag},phong:{uniforms:Pi([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new Un(0)},specular:{value:new Un(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:q.meshphong_vert,fragmentShader:q.meshphong_frag},standard:{uniforms:Pi([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new Un(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag},toon:{uniforms:Pi([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new Un(0)}}]),vertexShader:q.meshtoon_vert,fragmentShader:q.meshtoon_frag},matcap:{uniforms:Pi([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:q.meshmatcap_vert,fragmentShader:q.meshmatcap_frag},points:{uniforms:Pi([J.points,J.fog]),vertexShader:q.points_vert,fragmentShader:q.points_frag},dashed:{uniforms:Pi([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:q.linedashed_vert,fragmentShader:q.linedashed_frag},depth:{uniforms:Pi([J.common,J.displacementmap]),vertexShader:q.depth_vert,fragmentShader:q.depth_frag},normal:{uniforms:Pi([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:q.meshnormal_vert,fragmentShader:q.meshnormal_frag},sprite:{uniforms:Pi([J.sprite,J.fog]),vertexShader:q.sprite_vert,fragmentShader:q.sprite_frag},background:{uniforms:{uvTransform:{value:new W},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:q.background_vert,fragmentShader:q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new W}},vertexShader:q.backgroundCube_vert,fragmentShader:q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:q.cube_vert,fragmentShader:q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:q.equirect_vert,fragmentShader:q.equirect_frag},distance:{uniforms:Pi([J.common,J.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:q.distance_vert,fragmentShader:q.distance_frag},shadow:{uniforms:Pi([J.lights,J.fog,{color:{value:new Un(0)},opacity:{value:1}}]),vertexShader:q.shadow_vert,fragmentShader:q.shadow_frag}};Na.physical={uniforms:Pi([Na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new W},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new W},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new W},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new W},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new W},sheen:{value:0},sheenColor:{value:new Un(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new W},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new W},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new W},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new W},attenuationDistance:{value:0},attenuationColor:{value:new Un(0)},specularColor:{value:new Un(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new W},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new W},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new W}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag};var Pa={r:0,b:0,g:0},Fa=new vn,Ia=new cn;function La(e,t,n,r,i,a){let o=new Un(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new ci(new ji(1,1,1),new Bi({name:`BackgroundCubeMaterial`,uniforms:Ni(Na.backgroundCube.uniforms),vertexShader:Na.backgroundCube.vertexShader,fragmentShader:Na.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),Fa.copy(n.backgroundRotation),Fa.x*=-1,Fa.y*=-1,Fa.z*=-1,i.isCubeTexture&&i.isRenderTargetTexture===!1&&(Fa.y*=-1,Fa.z*=-1),l.material.uniforms.envMap.value=i,l.material.uniforms.flipEnvMap.value=i.isCubeTexture&&i.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ia.makeRotationFromEuler(Fa)),l.material.toneMapped=G.getTransfer(i.colorSpace)!==ht,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ci(new Mi(2,2),new Bi({name:`BackgroundMaterial`,uniforms:Ni(Na.background.uniforms),vertexShader:Na.background.vertexShader,fragmentShader:Na.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=G.getTransfer(i.colorSpace)!==ht,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Pa,Ii(e)),n.buffers.color.setClear(Pa.r,Pa.g,Pa.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ra(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function za(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function Ba(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(B(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Va(e){let t=this,n=null,r=0,i=!1,a=!1,o=new hi,s=new W,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ha=4,Ua=[.125,.215,.35,.446,.526,.582],Wa=20,Ga=256,Ka=new da,qa=new Un,Ja=null,Ya=0,Xa=0,Za=!1,Qa=new U,$a=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Qa}=i;Ja=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ao(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ja,Ya,Xa),this._renderer.xr.enabled=Za,e.scissorTest=!1,no(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ja=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:M,minFilter:M,generateMipmaps:!1,type:fe,format:ve,colorSpace:pt,depthBuffer:!1},r=to(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=to(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eo(r)),this._blurMaterial=io(r,e,t),this._ggxMaterial=ro(r,e,t)}return r}_compileMaterial(e){let t=new ci(new zr,e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,n,r,i){let a=new ua(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(qa),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ci(new ji,new Xr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(qa),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;no(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=oo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ao());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;no(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ka)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Ha?n-d+Ha:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,no(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ka),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,no(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ka)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&V(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Wa;m>Wa&&B(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wa}`);let h=[],g=0;for(let e=0;e<Wa;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];no(t,3*v*(r>_-Ha?r-_+Ha:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Ka)}};function eo(e){let t=[],n=[],r=[],i=e,a=e-Ha+1+Ua.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Ha?s=Ua[o-e+Ha-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new zr;h.setAttribute(`position`,new wr(f,3)),h.setAttribute(`uv`,new wr(p,2)),h.setAttribute(`faceIndex`,new wr(m,1)),r.push(new ci(h,null)),i>Ha&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function to(e,t,n){let r=new an(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function no(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function ro(e,t,n){return new Bi({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ga,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:so(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function io(e,t,n){let r=new Float32Array(Wa),i=new U(0,1,0);return new Bi({name:`SphericalGaussianBlur`,defines:{n:Wa,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:so(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ao(){return new Bi({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:so(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function oo(){return new Bi({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function so(){return`

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
	`}var co=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Di(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ji(5,5,5),i=new Bi({name:`CubemapFromEquirect`,uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ci(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=M),new ma(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function lo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new co(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new $a(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new $a(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function uo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Et(`WebGLRenderer: `+e+` extension not supported.`),t}}}function fo(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Er:Tr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function po(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function mo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:V(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ho(e,t,n){let r=new WeakMap,i=new nn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new on(h,p,m,u);g.type=de,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new Rt(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function go(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var _o={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function vo(e,t,n,r,i){let a=new an(t,n,{type:e,depthBuffer:r,stencilBuffer:i}),o=new an(t,n,{type:fe,depthBuffer:!1,stencilBuffer:!1}),s=new zr;s.setAttribute(`position`,new Dr([-1,3,0,-1,-1,0,3,-1,0],3)),s.setAttribute(`uv`,new Dr([0,2,0,0,2,0],2));let c=new Vi({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new ci(s,c),u=new da(-1,1,1,-1,0,1),d=null,f=null,p=!1,m,h=null,g=[],_=!1;this.setSize=function(e,t){a.setSize(e,t),o.setSize(e,t);for(let n=0;n<g.length;n++){let r=g[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){g=e,_=g.length>0&&g[0].isRenderPass===!0;let t=a.width,n=a.height;for(let e=0;e<g.length;e++){let r=g[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(p||e.toneMapping===0&&g.length===0)return!1;if(h=t,t!==null){let e=t.width,n=t.height;(a.width!==e||a.height!==n)&&this.setSize(e,n)}return _===!1&&e.setRenderTarget(a),m=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return _},this.end=function(e,t){e.toneMapping=m,p=!0;let n=a,r=o;for(let i=0;i<g.length;i++){let a=g[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(d!==e.outputColorSpace||f!==e.toneMapping){d=e.outputColorSpace,f=e.toneMapping,c.defines={},G.getTransfer(d)===`srgb`&&(c.defines.SRGB_TRANSFER=``);let t=_o[f];t&&(c.defines[t]=``),c.needsUpdate=!0}c.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(h),e.render(l,u),h=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o.dispose(),s.dispose(),c.dispose()}}var yo=new tn,bo=new Oi(1,1),xo=new on,So=new sn,Co=new Di,wo=[],To=[],Eo=new Float32Array(16),Do=new Float32Array(9),Oo=new Float32Array(4);function ko(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=wo[i];if(a===void 0&&(a=new Float32Array(i),wo[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Y(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ao(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function jo(e,t){let n=To[t];n===void 0&&(n=new Int32Array(t),To[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Mo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function No(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Y(n,t))return;e.uniform2fv(this.addr,t),Ao(n,t)}}function X(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Y(n,t))return;e.uniform3fv(this.addr,t),Ao(n,t)}}function Po(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Y(n,t))return;e.uniform4fv(this.addr,t),Ao(n,t)}}function Fo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Y(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ao(n,t)}else{if(Y(n,r))return;Oo.set(r),e.uniformMatrix2fv(this.addr,!1,Oo),Ao(n,r)}}function Io(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Y(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ao(n,t)}else{if(Y(n,r))return;Do.set(r),e.uniformMatrix3fv(this.addr,!1,Do),Ao(n,r)}}function Lo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Y(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ao(n,t)}else{if(Y(n,r))return;Eo.set(r),e.uniformMatrix4fv(this.addr,!1,Eo),Ao(n,r)}}function Ro(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function zo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Y(n,t))return;e.uniform2iv(this.addr,t),Ao(n,t)}}function Bo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Y(n,t))return;e.uniform3iv(this.addr,t),Ao(n,t)}}function Vo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Y(n,t))return;e.uniform4iv(this.addr,t),Ao(n,t)}}function Ho(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Uo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Y(n,t))return;e.uniform2uiv(this.addr,t),Ao(n,t)}}function Wo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Y(n,t))return;e.uniform3uiv(this.addr,t),Ao(n,t)}}function Go(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Y(n,t))return;e.uniform4uiv(this.addr,t),Ao(n,t)}}function Ko(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(bo.compareFunction=n.isReversedDepthBuffer()?518:515,a=bo):a=yo,n.setTexture2D(t||a,i)}function qo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||So,i)}function Jo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Co,i)}function Yo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||xo,i)}function Xo(e){switch(e){case 5126:return Mo;case 35664:return No;case 35665:return X;case 35666:return Po;case 35674:return Fo;case 35675:return Io;case 35676:return Lo;case 5124:case 35670:return Ro;case 35667:case 35671:return zo;case 35668:case 35672:return Bo;case 35669:case 35673:return Vo;case 5125:return Ho;case 36294:return Uo;case 36295:return Wo;case 36296:return Go;case 35678:case 36198:case 36298:case 36306:case 35682:return Ko;case 35679:case 36299:case 36307:return qo;case 35680:case 36300:case 36308:case 36293:return Jo;case 36289:case 36303:case 36311:case 36292:return Yo}}function Zo(e,t){e.uniform1fv(this.addr,t)}function Qo(e,t){let n=ko(t,this.size,2);e.uniform2fv(this.addr,n)}function $o(e,t){let n=ko(t,this.size,3);e.uniform3fv(this.addr,n)}function es(e,t){let n=ko(t,this.size,4);e.uniform4fv(this.addr,n)}function ts(e,t){let n=ko(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ns(e,t){let n=ko(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function rs(e,t){let n=ko(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function is(e,t){e.uniform1iv(this.addr,t)}function as(e,t){e.uniform2iv(this.addr,t)}function os(e,t){e.uniform3iv(this.addr,t)}function ss(e,t){e.uniform4iv(this.addr,t)}function cs(e,t){e.uniform1uiv(this.addr,t)}function ls(e,t){e.uniform2uiv(this.addr,t)}function us(e,t){e.uniform3uiv(this.addr,t)}function ds(e,t){e.uniform4uiv(this.addr,t)}function fs(e,t,n){let r=this.cache,i=t.length,a=jo(n,i);Y(r,a)||(e.uniform1iv(this.addr,a),Ao(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?bo:yo;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ps(e,t,n){let r=this.cache,i=t.length,a=jo(n,i);Y(r,a)||(e.uniform1iv(this.addr,a),Ao(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||So,a[e])}function ms(e,t,n){let r=this.cache,i=t.length,a=jo(n,i);Y(r,a)||(e.uniform1iv(this.addr,a),Ao(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Co,a[e])}function hs(e,t,n){let r=this.cache,i=t.length,a=jo(n,i);Y(r,a)||(e.uniform1iv(this.addr,a),Ao(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||xo,a[e])}function gs(e){switch(e){case 5126:return Zo;case 35664:return Qo;case 35665:return $o;case 35666:return es;case 35674:return ts;case 35675:return ns;case 35676:return rs;case 5124:case 35670:return is;case 35667:case 35671:return as;case 35668:case 35672:return os;case 35669:case 35673:return ss;case 5125:return cs;case 36294:return ls;case 36295:return us;case 36296:return ds;case 35678:case 36198:case 36298:case 36306:case 35682:return fs;case 35679:case 36299:case 36307:return ps;case 35680:case 36300:case 36308:case 36293:return ms;case 36289:case 36303:case 36311:case 36292:return hs}}var _s=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xo(t.type)}},vs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gs(t.type)}},ys=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},bs=/(\w+)(\])?(\[|\.)?/g;function xs(e,t){e.seq.push(t),e.map[t.id]=t}function Ss(e,t,n){let r=e.name,i=r.length;for(bs.lastIndex=0;;){let a=bs.exec(r),o=bs.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){xs(n,l===void 0?new _s(s,e,t):new vs(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ys(s),xs(n,e)),n=e}}}var Cs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ss(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function ws(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Ts=37297,Es=0;function Ds(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Os=new W;function ks(e){G._getMatrix(Os,G.workingColorSpace,e);let t=`mat3( ${Os.elements.map(e=>e.toFixed(4))} )`;switch(G.getTransfer(e)){case mt:return[t,`LinearTransferOETF`];case ht:return[t,`sRGBTransferOETF`];default:return B(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function As(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ds(e.getShaderSource(t),r)}return i}function js(e,t){let n=ks(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Ms={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ns(e,t){let n=Ms[t];return n===void 0?(B(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ps=new U;function Fs(){return G.getLuminanceCoefficients(Ps),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ps.x.toFixed(4)}, ${Ps.y.toFixed(4)}, ${Ps.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Is(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(zs).join(`
`)}function Ls(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Rs(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function zs(e){return e!==``}function Bs(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vs(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hs=/^[ \t]*#include +<([\w\d./]+)>/gm;function Us(e){return e.replace(Hs,Gs)}var Ws=new Map;function Gs(e,t){let n=q[t];if(n===void 0){let e=Ws.get(t);if(e!==void 0)n=q[e],B(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Us(n)}var Ks=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qs(e){return e.replace(Ks,Js)}function Js(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ys(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Xs={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Zs(e){return Xs[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Qs={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function $s(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Qs[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var ec={302:`ENVMAP_MODE_REFRACTION`};function tc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:ec[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var nc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function rc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:nc[e.combine]||`ENVMAP_BLENDING_NONE`}function ic(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function ac(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Zs(n),l=$s(n),u=tc(n),d=rc(n),f=ic(n),p=Is(n),m=Ls(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(zs).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(zs).join(`
`),_.length>0&&(_+=`
`)):(g=[Ys(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(zs).join(`
`),_=[Ys(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:q.tonemapping_pars_fragment,n.toneMapping===0?``:Ns(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,q.colorspace_pars_fragment,js(`linearToOutputTexel`,n.outputColorSpace),Fs(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(zs).join(`
`)),o=Us(o),o=Bs(o,n),o=Vs(o,n),s=Us(s),s=Bs(s,n),s=Vs(s,n),o=qs(o),s=qs(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=ws(i,i.VERTEX_SHADER,y),S=ws(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=As(i,x,`vertex`),n=As(i,S,`fragment`);V(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):B(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Cs(i,h),T=Rs(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Ts)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Es++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var oc=0,sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new cc(e),t.set(e,n)),n}},cc=class{constructor(e){this.id=oc++,this.code=e,this.usedTimes=0}};function lc(e,t,n,r,i,a){let o=new yn,s=new sc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h){let g=u.fog,_=h.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=b&&b.mapping===306?b.image.height:null,S=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&B(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,ee;if(S){let e=Na[S];E=e.vertexShader,D=e.fragmentShader}else E=i.vertexShader,D=i.fragmentShader,s.update(i),O=s.getVertexShaderID(i),ee=s.getFragmentShaderID(i);let k=e.getRenderTarget(),A=e.state.buffers.depth.getReversed(),te=h.isInstancedMesh===!0,j=h.isBatchedMesh===!0,ne=!!i.map,re=!!i.matcap,M=!!b,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap,N=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,le=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.dispersion>0,me=i.iridescence>0,he=i.sheen>0,ge=i.transmission>0,P=de&&!!i.anisotropyMap,F=fe&&!!i.clearcoatMap,_e=fe&&!!i.clearcoatNormalMap,ve=fe&&!!i.clearcoatRoughnessMap,ye=me&&!!i.iridescenceMap,be=me&&!!i.iridescenceThicknessMap,xe=he&&!!i.sheenColorMap,Se=he&&!!i.sheenRoughnessMap,Ce=!!i.specularMap,we=!!i.specularColorMap,Te=!!i.specularIntensityMap,Ee=ge&&!!i.transmissionMap,De=ge&&!!i.thicknessMap,I=!!i.gradientMap,Oe=!!i.alphaMap,ke=i.alphaTest>0,Ae=!!i.alphaHash,L=!!i.extensions,je=0;i.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(je=e.toneMapping);let R={shaderID:S,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:ee,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:j,batchingColor:j&&h._colorsTexture!==null,instancing:te,instancingColor:te&&h.instanceColor!==null,instancingMorph:te&&h.morphTexture!==null,outputColorSpace:k===null?e.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:pt,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:re,envMap:M,envMapMode:M&&b.mapping,envMapCubeUVHeight:x,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:N,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:N&&i.normalMapType===1,normalMapTangentSpace:N&&i.normalMapType===0,metalnessMap:le,roughnessMap:ue,anisotropy:de,anisotropyMap:P,clearcoat:fe,clearcoatMap:F,clearcoatNormalMap:_e,clearcoatRoughnessMap:ve,dispersion:pe,iridescence:me,iridescenceMap:ye,iridescenceThicknessMap:be,sheen:he,sheenColorMap:xe,sheenRoughnessMap:Se,specularMap:Ce,specularColorMap:we,specularIntensityMap:Te,transmission:ge,transmissionMap:Ee,thicknessMap:De,gradientMap:I,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Oe,alphaTest:ke,alphaHash:Ae,combine:i.combine,mapUv:ne&&m(i.map.channel),aoMapUv:ie&&m(i.aoMap.channel),lightMapUv:ae&&m(i.lightMap.channel),bumpMapUv:oe&&m(i.bumpMap.channel),normalMapUv:N&&m(i.normalMap.channel),displacementMapUv:se&&m(i.displacementMap.channel),emissiveMapUv:ce&&m(i.emissiveMap.channel),metalnessMapUv:le&&m(i.metalnessMap.channel),roughnessMapUv:ue&&m(i.roughnessMap.channel),anisotropyMapUv:P&&m(i.anisotropyMap.channel),clearcoatMapUv:F&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:_e&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:be&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Se&&m(i.sheenRoughnessMap.channel),specularMapUv:Ce&&m(i.specularMap.channel),specularColorMapUv:we&&m(i.specularColorMap.channel),specularIntensityMapUv:Te&&m(i.specularIntensityMap.channel),transmissionMapUv:Ee&&m(i.transmissionMap.channel),thicknessMapUv:De&&m(i.thicknessMap.channel),alphaMapUv:Oe&&m(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(N||de),vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!_.attributes.uv&&(ne||Oe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&N===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:A,skinning:h.isSkinnedMesh===!0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:je,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&G.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&G.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:L&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(L&&i.extensions.multiDraw===!0||j)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return R.vertexUv1s=c.has(1),R.vertexUv2s=c.has(2),R.vertexUv3s=c.has(3),c.clear(),R}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Na[t];n=Li.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new ac(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function uc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function dc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function fc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function pc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||dc),r.length>1&&r.sort(t||fc),i.length>1&&i.sort(t||fc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function mc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new pc,e.set(t,[i])):n>=r.length?(i=new pc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function hc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new U,color:new Un};break;case`SpotLight`:n={position:new U,direction:new U,color:new Un,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new U,color:new Un,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new U,skyColor:new Un,groundColor:new Un};break;case`RectAreaLight`:n={color:new Un,position:new U,halfWidth:new U,halfHeight:new U}}return e[t.id]=n,n}}}function gc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var _c=0;function vc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function yc(e){let t=new hc,n=gc(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new U);let i=new U,a=new cn,o=new cn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(vc);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=_c++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function bc(e){let t=new yc(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function xc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new bc(e),t.set(n,[a])):r>=i.length?(a=new bc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Sc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wc=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Tc=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Ec=new cn,Dc=new U,Oc=new U;function kc(e,t,n){let r=new yi,i=new Rt,a=new Rt,o=new nn,s=new Hi,c=new Ui,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Sc,fragmentShader:Cc}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new zr;m.setAttribute(`position`,new wr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new ci(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(B(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){B(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){B(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new an(i.x,i.y,{format:Ce,type:fe,minFilter:M,magFilter:M,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Oi(i.x,i.y,de),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ye,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=j,d.map.depthTexture.magFilter=j}else l.isPointLight?(d.map=new co(i.x),d.map.depthTexture=new ki(i.x,ue)):(d.map=new an(i.x,i.y),d.map.depthTexture=new Oi(i.x,i.y,ue)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ye,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=M,d.map.depthTexture.magFilter=M):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=j,d.map.depthTexture.magFilter=j);d.camera.updateProjectionMatrix()}let g=d.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<g;t++){if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Dc.setFromMatrixPosition(l.matrixWorld),e.position.copy(Dc),Oc.copy(e.position),Oc.add(wc[t]),e.up.copy(Tc[t]),e.lookAt(Oc),e.updateMatrixWorld(),n.makeTranslation(-Dc.x,-Dc.y,-Dc.z),Ec.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Ec,e.coordinateSystem,e.reversedDepth)}else d.updateMatrices(l);r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new an(i.x,i.y,{format:Ce,type:fe})),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ac(e,t){function n(){let t=!1,n=new nn,r=null,i=new nn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?le(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Ot[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?le(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new Un(0,0,0),w=0,T=!1,E=null,D=null,O=null,ee=null,k=null,A=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,j=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),te=j>=2):(j=parseFloat(/^WebGL (\d)/.exec(ne)[1]),te=j>=1);let re=null,M={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new nn().fromArray(ie),N=new nn().fromArray(ae);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),le(e.DEPTH_TEST),o.setFunc(3),F(!1),_e(1),le(e.CULL_FACE),ge(0);function le(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return d[t]!==n&&(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return m!==t&&(e.useProgram(t),m=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0)h===!0&&(ue(e.BLEND),h=!1);else if(h===!1&&(le(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:V(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:V(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:V(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:V(`WebGLState: Invalid blending: `,t)}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}}else a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(me[n],me[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function P(t,n){t.side===2?ue(e.CULL_FACE):le(e.CULL_FACE);let r=t.side===1;n&&(r=!r),F(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ye(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function F(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function _e(t){t===0?ue(e.CULL_FACE):(le(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function ve(t){t!==O&&(te&&e.lineWidth(t),O=t)}function ye(t,n,r){t?(le(e.POLYGON_OFFSET_FILL),(ee!==n||k!==r)&&(ee=n,k=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function be(t){t?le(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function xe(t){t===void 0&&(t=e.TEXTURE0+A-1),re!==t&&(e.activeTexture(t),re=t)}function Se(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+A-1:re);let i=M[r];i===void 0&&(i={type:void 0,texture:void 0},M[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function Ce(){let t=M[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function we(){try{e.compressedTexImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Te(){try{e.compressedTexImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ee(){try{e.texSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function De(){try{e.texSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function I(){try{e.compressedTexSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function ke(){try{e.texStorage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ae(){try{e.texStorage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function L(){try{e.texImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function je(){try{e.texImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function R(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function z(t){N.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),N.copy(t))}function Me(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ne(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},re=null,M={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new Un(0,0,0),w=0,T=!1,E=null,D=null,O=null,ee=null,k=null,oe.set(0,0,e.canvas.width,e.canvas.height),N.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:le,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:P,setFlipSided:F,setCullFace:_e,setLineWidth:ve,setPolygonOffset:ye,setScissorTest:be,activeTexture:xe,bindTexture:Se,unbindTexture:Ce,compressedTexImage2D:we,compressedTexImage3D:Te,texImage2D:L,texImage3D:je,updateUBOMapping:Me,uniformBlockBinding:Ne,texStorage2D:ke,texStorage3D:Ae,texSubImage2D:Ee,texSubImage3D:De,compressedTexSubImage2D:I,compressedTexSubImage3D:Oe,scissor:R,viewport:z,reset:Pe}}function jc(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Rt,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function m(e,t){return p?new OffscreenCanvas(e,t):xt(`canvas`)}function h(e,t,n){let r=1,i=L(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);d===void 0&&(d=m(n,a));let o=t?m(n,a):d;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),B(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&B(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function g(e){return e.generateMipmaps}function _(t){e.generateMipmap(t)}function v(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];B(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(s=e.R11F_G11F_B10F)),r===e.RGBA){let t=o?mt:G.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function b(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,B(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function x(e,t){return g(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function S(e){let t=e.target;t.removeEventListener(`dispose`,S),w(t),t.isVideoTexture&&u.delete(t)}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),E(t)}function w(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=f.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&T(e),Object.keys(i).length===0&&f.delete(n)}r.remove(e)}function T(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=f.get(i);delete a[n.__cacheKey],o.memory.textures--}function E(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let D=0;function O(){D=0}function ee(){let e=D;return e>=i.maxTextures&&B(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),D+=1,e}function oe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function N(t,i){let a=r.get(t);if(t.isVideoTexture&&ke(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)B(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)B(`WebGLRenderer: Texture marked for update but image is incomplete`);else{P(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function se(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?P(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ce(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?P(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function le(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?F(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ue={[k]:e.REPEAT,[A]:e.CLAMP_TO_EDGE,[te]:e.MIRRORED_REPEAT},de={[j]:e.NEAREST,[ne]:e.NEAREST_MIPMAP_NEAREST,[re]:e.NEAREST_MIPMAP_LINEAR,[M]:e.LINEAR,[ie]:e.LINEAR_MIPMAP_NEAREST,[ae]:e.LINEAR_MIPMAP_LINEAR},fe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function pe(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&B(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ue[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ue[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ue[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,de[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,de[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,fe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function me(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,S));let i=n.source,a=f.get(i);a===void 0&&(a={},f.set(i,a));let s=oe(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&T(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function he(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ge(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=he(n.start,r.width,4),c=he(t.start,r.width,4);n.start<=i+1&&a===c&&he(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=e.getParameter(e.UNPACK_ROW_LENGTH),l=e.getParameter(e.UNPACK_SKIP_PIXELS),u=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;e.pixelStorei(e.UNPACK_SKIP_PIXELS,u),e.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,c),e.pixelStorei(e.UNPACK_SKIP_PIXELS,l),e.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function P(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=me(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+s);let t=G.getPrimaries(G.workingColorSpace),r=o.colorSpace===``?null:G.getPrimaries(o.colorSpace),f=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=h(o.image,!1,i.maxTextureSize);p=Ae(o,p);let m=a.convert(o.format,o.colorSpace),v=a.convert(o.type),S=y(o.internalFormat,m,v,o.colorSpace,o.isVideoTexture);pe(c,o);let C,w=o.mipmaps,T=o.isVideoTexture!==!0,E=d.__version===void 0||l===!0,D=u.dataReady,O=x(o,p);if(o.isDepthTexture)S=b(o.format===be,o.type),E&&(T?n.texStorage2D(e.TEXTURE_2D,1,S,p.width,p.height):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,v,null));else if(o.isDataTexture){if(w.length>0){T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,v,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,v,C.data);o.generateMipmaps=!1}else T?(E&&n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height),D&&ge(o,p,m,v)):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,v,p.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){T&&E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,w[0].width,w[0].height,p.depth);for(let t=0,r=w.length;t<r;t++)if(C=w[t],o.format!==1023){if(m!==null){if(T){if(D){if(o.layerUpdates.size>0){let r=ka(C.width,C.height,o.format,o.type);for(let i of o.layerUpdates){let a=C.data.subarray(i*r/C.data.BYTES_PER_ELEMENT,(i+1)*r/C.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,C.width,C.height,1,m,a)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,C.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,C.data,0,0)}else B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else T?D&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,v,C.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,m,v,C.data)}else{T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,v,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,v,C.data):m===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,C.data):n.compressedTexImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,C.data)}}else if(o.isDataArrayTexture){if(T){if(E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,p.width,p.height,p.depth),D){if(o.layerUpdates.size>0){let t=ka(p.width,p.height,o.format,o.type);for(let r of o.layerUpdates){let i=p.data.subarray(r*t/p.data.BYTES_PER_ELEMENT,(r+1)*t/p.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,p.width,p.height,1,m,v,i)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,p.width,p.height,p.depth,m,v,p.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,S,p.width,p.height,p.depth,0,m,v,p.data)}else if(o.isData3DTexture)T?(E&&n.texStorage3D(e.TEXTURE_3D,O,S,p.width,p.height,p.depth),D&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,p.width,p.height,p.depth,m,v,p.data)):n.texImage3D(e.TEXTURE_3D,0,S,p.width,p.height,p.depth,0,m,v,p.data);else if(o.isFramebufferTexture){if(E){if(T)n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height);else{let t=p.width,r=p.height;for(let i=0;i<O;i++)n.texImage2D(e.TEXTURE_2D,i,S,t,r,0,m,v,null),t>>=1,r>>=1}}}else if(w.length>0){if(T&&E){let t=L(w[0]);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m,v,C):n.texImage2D(e.TEXTURE_2D,t,S,m,v,C);o.generateMipmaps=!1}else if(T){if(E){let t=L(p);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,m,v,p)}else n.texImage2D(e.TEXTURE_2D,0,S,m,v,p);g(o)&&_(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function F(t,o,s){if(o.image.length!==6)return;let c=me(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=G.getPrimaries(G.workingColorSpace),r=o.colorSpace===``?null:G.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=h(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Ae(o,m[e]);let v=m[0],b=a.convert(o.format,o.colorSpace),S=a.convert(o.type),C=y(o.internalFormat,b,S,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=x(o,v);pe(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,v.width,v.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,b,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,b,S,i.data):b===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,b,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=L(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,b,S,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,b,S,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,b,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,b,S,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,b,S,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,b,S,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,b,S,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,b,S,i.image[t])}}}g(o)&&_(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function _e(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=y(o.internalFormat,d,f,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Oe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,I(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=b(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Oe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,I(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,I(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=y(o.internalFormat,c,l,o.colorSpace);Oe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,I(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,I(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ye(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,S)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),pe(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else N(i.depthTexture,0);let u=l.__webglTexture,d=I(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Oe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Oe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`Unknown depthTexture format`)}function xe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ye(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ye(i.__webglFramebuffer[0],t,0):ye(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ve(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ve(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(t,n,i){let a=r.get(t);n!==void 0&&_e(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&xe(t)}function Ce(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,C);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Oe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=y(r.internalFormat,i,o,r.colorSpace,t.isXRRenderTarget===!0),u=I(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ve(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),pe(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)_e(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else _e(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);g(i)&&_(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),pe(c,a),_e(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),g(a)&&_(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),pe(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)_e(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else _e(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);g(i)&&_(r),n.unbindTexture()}t.depthBuffer&&xe(t)}function we(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(g(a)){let t=v(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),_(t),n.unbindTexture()}}}let Te=[],Ee=[];function De(t){if(t.samples>0){if(Oe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Te.length=0,Ee.length=0,Te.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(Te.push(l),Ee.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ee)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Te))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function I(e){return Math.min(i.maxSamples,e.samples)}function Oe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ke(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Ae(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(G.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&B(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):V(`WebGLTextures: Unsupported texture color space:`,n)),t}function L(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=O,this.setTexture2D=N,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=le,this.rebindTextures=Se,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Mc(e,t){function n(n,r=``){let i,a=G.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Nc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pc=`
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

}`,Fc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ai(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bi({vertexShader:Nc,fragmentShader:Pc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ci(new Mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ic=class extends kt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Fc,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new Rt,C=null,w=new ua;w.viewport=new nn;let T=new ua;T.viewport=new nn;let E=[w,T],D=new ha,O=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Rn,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Rn,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Rn,b[e]=t),t.getHandSpace()};function k(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function A(){r.removeEventListener(`select`,k),r.removeEventListener(`selectstart`,k),r.removeEventListener(`selectend`,k),r.removeEventListener(`squeeze`,k),r.removeEventListener(`squeezestart`,k),r.removeEventListener(`squeezeend`,k),r.removeEventListener(`end`,A),r.removeEventListener(`inputsourceschange`,te);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}O=null,ee=null,h.reset();for(let e in g)delete g[e];e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,k),r.addEventListener(`selectstart`,k),r.addEventListener(`selectend`,k),r.addEventListener(`squeeze`,k),r.addEventListener(`squeezestart`,k),r.addEventListener(`squeezeend`,k),r.addEventListener(`end`,A),r.addEventListener(`inputsourceschange`,te),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?be:ye,a=_.stencil?he:ue);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new an(d.textureWidth,d.textureHeight,{format:ve,type:oe,depthTexture:new Oi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new an(f.framebufferWidth,f.framebufferHeight,{format:ve,type:oe,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function te(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let j=new U,ne=new U;function re(e,t,n){j.setFromMatrixPosition(t.matrixWorld),ne.setFromMatrixPosition(n.matrixWorld);let r=j.distanceTo(ne),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function M(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),D.near=T.near=w.near=t,D.far=T.far=w.far=n,(O!==D.near||ee!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,ee=D.far),D.layers.mask=e.layers.mask|6,w.layers.mask=D.layers.mask&-5,T.layers.mask=D.layers.mask&-3;let i=e.parent,a=D.cameras;M(D,i);for(let e=0;e<a.length;e++)M(a[e],i);a.length===2?re(D,w,T):D.projectionMatrix.copy(w.projectionMatrix),ie(e,D,i)};function ie(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Mt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(D)},this.getCameraTexture=function(e){return g[e]};let ae=null;function N(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==D.cameras.length&&(D.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=E[n];o===void 0&&(o=new ua,o.layers.enable(n),o.viewport=new nn,E[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(D.matrix.copy(o.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),i===!0&&D.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Ai,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ae&&ae(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let se=new ja;se.setAnimationLoop(N),this.setAnimationLoop=function(e){ae=e},this.dispose=function(){}}},Lc=new vn,Rc=new cn;function zc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ii(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,Lc.copy(o),Lc.x*=-1,Lc.y*=-1,Lc.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(Lc.y*=-1,Lc.z*=-1),e.envMapRotation.value.setFromMatrix4(Rc.makeRotationFromEuler(Lc)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Bc(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return V(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?B(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):B(`WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Vc=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hc=null;function Uc(){return Hc===null&&(Hc=new di(Vc,16,16,Ce,fe),Hc.name=`DFG_LUT`,Hc.minFilter=M,Hc.magFilter=M,Hc.wrapS=A,Hc.wrapT=A,Hc.generateMipmaps=!1,Hc.needsUpdate=!0),Hc}var Wc=class{constructor(e={}){let{canvas:t=St(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=oe}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Te,we,Se]),g=new Set([oe,ue,ce,he,pe,me]),_=new Uint32Array(4),v=new Int32Array(4),y=null,b=null,x=[],S=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,T=!1;this._outputColorSpace=ft;let E=0,D=0,O=null,ee=-1,k=null,A=new nn,te=new nn,j=null,ne=new Un(0),re=0,M=t.width,ie=t.height,N=1,se=null,le=null,de=new nn(0,0,M,ie),ge=new nn(0,0,M,ie),P=!1,F=new yi,_e=!1,ve=!1,ye=new cn,be=new U,xe=new nn,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ee=!1;function De(){return O===null?N:1}let I=n;function Oe(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r183`),t.addEventListener(`webglcontextlost`,Ze,!1),t.addEventListener(`webglcontextrestored`,Qe,!1),t.addEventListener(`webglcontextcreationerror`,$e,!1),I===null){let t=`webgl2`;if(I=Oe(t,e),I===null)throw Oe(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw V(`WebGLRenderer: `+e.message),e}let ke,Ae,L,je,R,z,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je;function Ye(){ke=new uo(I),ke.init(),Ke=new Mc(I,ke),Ae=new Ba(I,ke,e,Ke),L=new Ac(I,ke),Ae.reversedDepthBuffer&&d&&L.buffers.depth.setReversed(!0),je=new mo(I),R=new uc,z=new jc(I,ke,L,R,Ae,Ke,je),Me=new lo(w),Ne=new Ma(I),qe=new Ra(I,Ne),Pe=new fo(I,Ne,je,qe),Fe=new go(I,Pe,Ne,qe,je),Ue=new ho(I,Ae,z),Be=new Va(R),Ie=new lc(w,Me,ke,Ae,qe,Be),Le=new zc(w,R),Re=new mc,ze=new xc(ke),He=new La(w,Me,L,Fe,p,s),Ve=new kc(w,Fe,Ae),Je=new Bc(I,je,Ae,L),We=new za(I,ke,je),Ge=new po(I,ke,je),je.programs=Ie.programs,w.capabilities=Ae,w.extensions=ke,w.properties=R,w.renderLists=Re,w.shadowMap=Ve,w.state=L,w.info=je}Ye(),m!==1009&&(C=new vo(m,t.width,t.height,r,i));let Xe=new Ic(w,I);this.xr=Xe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=ke.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ke.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(e){e!==void 0&&(N=e,this.setSize(M,ie,!1))},this.getSize=function(e){return e.set(M,ie)},this.setSize=function(e,n,r=!0){Xe.isPresenting?B(`WebGLRenderer: Can't change size while VR device is presenting.`):(M=e,ie=n,t.width=Math.floor(e*N),t.height=Math.floor(n*N),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(M*N,ie*N).floor()},this.setDrawingBufferSize=function(e,n,r){M=e,ie=n,N=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)console.error(`THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){console.warn(`THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}C.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(A)},this.getViewport=function(e){return e.copy(de)},this.setViewport=function(e,t,n,r){e.isVector4?de.set(e.x,e.y,e.z,e.w):de.set(e,t,n,r),L.viewport(A.copy(de).multiplyScalar(N).round())},this.getScissor=function(e){return e.copy(ge)},this.setScissor=function(e,t,n,r){e.isVector4?ge.set(e.x,e.y,e.z,e.w):ge.set(e,t,n,r),L.scissor(te.copy(ge).multiplyScalar(N).round())},this.getScissorTest=function(){return P},this.setScissorTest=function(e){L.setScissorTest(P=e)},this.setOpaqueSort=function(e){se=e},this.setTransparentSort=function(e){le=e},this.getClearColor=function(e){return e.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(O!==null){let t=O.texture.format;e=h.has(t)}if(e){let e=O.texture.type,t=g.has(e),n=He.getClearColor(),r=He.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,I.clearBufferuiv(I.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,I.clearBufferiv(I.COLOR,0,v))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ze,!1),t.removeEventListener(`webglcontextrestored`,Qe,!1),t.removeEventListener(`webglcontextcreationerror`,$e,!1),He.dispose(),Re.dispose(),ze.dispose(),R.dispose(),Me.dispose(),Fe.dispose(),qe.dispose(),Je.dispose(),Ie.dispose(),Xe.dispose(),Xe.removeEventListener(`sessionstart`,ot),Xe.removeEventListener(`sessionend`,st),ct.stop()};function Ze(e){e.preventDefault(),wt(`WebGLRenderer: Context Lost.`),T=!0}function Qe(){wt(`WebGLRenderer: Context Restored.`),T=!1;let e=je.autoReset,t=Ve.enabled,n=Ve.autoUpdate,r=Ve.needsUpdate,i=Ve.type;Ye(),je.autoReset=e,Ve.enabled=t,Ve.autoUpdate=n,Ve.needsUpdate=r,Ve.type=i}function $e(e){V(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function et(e){let t=e.target;t.removeEventListener(`dispose`,et),tt(t)}function tt(e){nt(e),R.remove(e)}function nt(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){Ie.releaseProgram(e)}),e.isShaderMaterial&&Ie.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ce);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=bt(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Pe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;qe.setup(i,r,s,n,c);let h,g=We;if(c!==null&&(h=Ne.get(c),g=Ge,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*De()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*De()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)Et(`WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.`),g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(ke.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ne.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function rt(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,gt(e,t,n),e.side=0,e.needsUpdate=!0,gt(e,t,n),e.side=2):gt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),b=ze.get(n),b.init(t),S.push(b),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(b.pushLight(e),e.castShadow&&b.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(b.pushLight(e),e.castShadow&&b.pushShadow(e))}),b.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];rt(a,n,e),r.add(a)}else rt(t,n,e),r.add(t)}}),b=S.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){R.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}ke.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let it=null;function at(e){it&&it(e)}function ot(){ct.stop()}function st(){ct.start()}let ct=new ja;ct.setAnimationLoop(at),typeof self<`u`&&ct.setContext(self),this.setAnimationLoop=function(e){it=e,Xe.setAnimationLoop(e),e===null?ct.stop():ct.start()},Xe.addEventListener(`sessionstart`,ot),Xe.addEventListener(`sessionend`,st),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){V(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(T===!0)return;let n=Xe.enabled===!0&&Xe.isPresenting===!0,r=C!==null&&(O===null||n)&&C.begin(w,O);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(t),t=Xe.getCamera()),e.isScene===!0&&e.onBeforeRender(w,e,t,O),b=ze.get(e,S.length),b.init(t),S.push(b),ye.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),F.setFromProjectionMatrix(ye,vt,t.reversedDepth),ve=this.localClippingEnabled,_e=Be.init(this.clippingPlanes,ve),y=Re.get(e,x.length),y.init(),x.push(y),Xe.enabled===!0&&Xe.isPresenting===!0){let e=w.xr.getDepthSensingMesh();e!==null&&lt(e,t,-1/0,w.sortObjects)}lt(e,t,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(se,le),Ee=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,Ee&&He.addToRenderList(y,e),this.info.render.frame++,_e===!0&&Be.beginShadows();let i=b.state.shadowsArray;if(Ve.render(i,e,t),_e===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(r&&C.hasRenderPass())===!1){let n=y.opaque,r=y.transmissive;if(b.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];dt(n,r,e,a)}Ee&&He.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];ut(y,e,n,n.viewport)}}else r.length>0&&dt(n,r,e,t),Ee&&He.render(e),ut(y,e,t)}O!==null&&D===0&&(z.updateMultisampleRenderTarget(O),z.updateRenderTargetMipmap(O)),r&&C.end(w),e.isScene===!0&&e.onAfterRender(w,e,t),qe.resetDefaultState(),ee=-1,k=null,S.pop(),S.length>0?(b=S[S.length-1],_e===!0&&Be.setGlobalState(w.clippingPlanes,b.state.camera)):b=null,x.pop(),y=x.length>0?x[x.length-1]:null};function lt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)b.pushLight(e),e.castShadow&&b.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||F.intersectsSprite(e)){r&&xe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ye);let t=Fe.update(e),i=e.material;i.visible&&y.push(e,t,i,n,xe.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||F.intersectsObject(e))){let t=Fe.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),xe.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),xe.copy(e.boundingSphere.center)),xe.applyMatrix4(e.matrixWorld).applyMatrix4(ye)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&y.push(e,t,s,n,xe.z,o)}}else i.visible&&y.push(e,t,i,n,xe.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)lt(i[e],t,n,r)}function ut(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;b.setupLightsView(n),_e===!0&&Be.setGlobalState(w.clippingPlanes,n),r&&L.viewport(A.copy(r)),i.length>0&&mt(i,t,n),a.length>0&&mt(a,t,n),o.length>0&&mt(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function dt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[r.id]===void 0){let e=ke.has(`EXT_color_buffer_half_float`)||ke.has(`EXT_color_buffer_float`);b.state.transmissionRenderTarget[r.id]=new an(1,1,{generateMipmaps:!0,type:e?fe:oe,minFilter:ae,samples:Math.max(4,Ae.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:G.workingColorSpace})}let a=b.state.transmissionRenderTarget[r.id],o=r.viewport||A;a.setSize(o.z*w.transmissionResolutionScale,o.w*w.transmissionResolutionScale);let s=w.getRenderTarget(),c=w.getActiveCubeFace(),l=w.getActiveMipmapLevel();w.setRenderTarget(a),w.getClearColor(ne),re=w.getClearAlpha(),re<1&&w.setClearColor(16777215,.5),w.clear(),Ee&&He.render(n);let u=w.toneMapping;w.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),b.setupLightsView(r),_e===!0&&Be.setGlobalState(w.clippingPlanes,r),mt(e,n,r),z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a),ke.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,ht(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a))}w.setRenderTarget(s,c,l),w.setClearColor(ne,re),d!==void 0&&(r.viewport=d),w.toneMapping=u}function mt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&ht(o,t,n,s,l,c)}}function ht(e,t,n,r,i,a){e.onBeforeRender(w,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(w,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,w.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,w.renderBufferDirect(n,t,r,i,e,a),i.side=2):w.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(w,t,n,r,i,a)}function gt(e,t,n){t.isScene!==!0&&(t=Ce);let r=R.get(e),i=b.state.lights,a=b.state.shadowsArray,o=i.state.version,s=Ie.getParameters(e,i.state,a,t,n),c=Ie.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Me.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,et),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return yt(e,s),d}else s.uniforms=Ie.getUniforms(e),e.onBeforeCompile(s,w),d=Ie.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Be.uniform),yt(e,s),r.needsLights=Ct(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=d,r.uniformsList=null,d}function _t(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Cs.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function yt(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function bt(e,t,n,r,i){t.isScene!==!0&&(t=Ce),z.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:pt,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Me.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(h=w.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=R.get(r),y=b.state.lights;if(_e===!0&&(ve===!0||e!==k)){let t=e===k&&r.id===ee;Be.setState(r,e,t)}let x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?x=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?x=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Be.numPlanes||v.numIntersection!==Be.numIntersection)?x=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h?v.morphTargetsCount!==_&&(x=!0):x=!0:x=!0:x=!0:(x=!0,v.__version=r.version);let S=v.currentProgram;x===!0&&(S=gt(r,t,i));let C=!1,T=!1,E=!1,D=S.getUniforms(),A=v.uniforms;if(L.useProgram(S.program)&&(C=!0,T=!0,E=!0),r.id!==ee&&(ee=r.id,T=!0),C||k!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),D.setValue(I,`projectionMatrix`,e.projectionMatrix),D.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=D.map.cameraPosition;t!==void 0&&t.setValue(I,be.setFromMatrixPosition(e.matrixWorld)),Ae.logarithmicDepthBuffer&&D.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&D.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),k!==e&&(k=e,T=!0,E=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&D.setValue(I,`directionalShadowMap`,y.state.directionalShadowMap,z),y.state.spotShadowMap.length>0&&D.setValue(I,`spotShadowMap`,y.state.spotShadowMap,z),y.state.pointShadowMap.length>0&&D.setValue(I,`pointShadowMap`,y.state.pointShadowMap,z)),i.isSkinnedMesh){D.setOptional(I,i,`bindMatrix`),D.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),D.setValue(I,`boneTexture`,e.boneTexture,z))}i.isBatchedMesh&&(D.setOptional(I,i,`batchingTexture`),D.setValue(I,`batchingTexture`,i._matricesTexture,z),D.setOptional(I,i,`batchingIdTexture`),D.setValue(I,`batchingIdTexture`,i._indirectTexture,z),D.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&D.setValue(I,`batchingColorTexture`,i._colorsTexture,z));let te=n.morphAttributes;if((te.position!==void 0||te.normal!==void 0||te.color!==void 0)&&Ue.update(i,n,S),(T||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,D.setValue(I,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),A.dfgLUT!==void 0&&(A.dfgLUT.value=Uc()),T&&(D.setValue(I,`toneMappingExposure`,w.toneMappingExposure),v.needsLights&&xt(A,E),a&&r.fog===!0&&Le.refreshFogUniforms(A,a),Le.refreshMaterialUniforms(A,r,N,ie,b.state.transmissionRenderTarget[e.id]),Cs.upload(I,_t(v),A,z)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Cs.upload(I,_t(v),A,z),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&D.setValue(I,`center`,i.center),D.setValue(I,`modelViewMatrix`,i.modelViewMatrix),D.setValue(I,`normalMatrix`,i.normalMatrix),D.setValue(I,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Je.update(n,S),Je.bind(n,S)}}return S}function xt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ct(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(e,t,n){let r=R.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let Tt=I.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){O=e,E=t,D=n;let r=null,i=!1,a=!1;if(e){let o=R.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(I.FRAMEBUFFER,o.__webglFramebuffer),A.copy(e.viewport),te.copy(e.scissor),j=e.scissorTest,L.viewport(A),L.scissor(te),L.setScissorTest(j),ee=-1;return}if(o.__webglFramebuffer===void 0)z.setupRenderTarget(e);else if(o.__hasExternalTextures)z.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);z.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&z.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,A.copy(e.viewport),te.copy(e.scissor),j=e.scissorTest}else A.copy(de).multiplyScalar(N).floor(),te.copy(ge).multiplyScalar(N).floor(),j=P;if(n!==0&&(r=Tt),L.bindFramebuffer(I.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(A),L.scissor(te),L.setScissorTest(j),i){let r=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=R.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}ee=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){L.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s),!Ae.textureFormatReadable(c)){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Ae.textureTypeReadable(l)){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,Ke.convert(c),Ke.convert(l),a)}finally{let e=O===null?null:R.get(O).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s),!Ae.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Ae.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,d),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,Ke.convert(l),Ke.convert(u),0);let f=O===null?null:R.get(O).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,f);let p=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Dt(I,p,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,d),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.deleteBuffer(d),I.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;z.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()};let Ot=I.createFramebuffer(),kt=I.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ke.convert(t.format),_=Ke.convert(t.type),v;t.isData3DTexture?(z.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(z.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(z.setTexture2D(t,0),v=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(I.UNPACK_ROW_LENGTH),b=I.getParameter(I.UNPACK_IMAGE_HEIGHT),x=I.getParameter(I.UNPACK_SKIP_PIXELS),S=I.getParameter(I.UNPACK_SKIP_ROWS),C=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,l),I.pixelStorei(I.UNPACK_SKIP_ROWS,u),I.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),r=R.get(t),h=R.get(n.__renderTarget),g=R.get(r.__renderTarget);L.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,o,s,f,p,o,s,I.DEPTH_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),r=R.get(t);L.bindFramebuffer(I.READ_FRAMEBUFFER,Ot),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,kt);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,o,s,f,p,o,s,I.COLOR_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(I.UNPACK_ROW_LENGTH,y),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(I.UNPACK_SKIP_PIXELS,x),I.pixelStorei(I.UNPACK_SKIP_ROWS,S),I.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&I.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&z.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?z.setTextureCube(e,0):e.isData3DTexture?z.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?z.setTexture2DArray(e,0):z.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){E=0,D=0,O=null,L.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return vt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=G._getDrawingBufferColorSpace(e),t.unpackColorSpace=G._getUnpackColorSpace()}};function Gc(){let e=(0,_.useRef)(null);return(0,_.useEffect)(()=>{let t=e.current.clientWidth,n=e.current.clientHeight,r=new Gn,i=new ua(60,t/n,.1,1e3);i.position.set(0,40,0),i.lookAt(0,0,0);let a=new Wc({antialias:!0,alpha:!0});a.setSize(t,n),a.setPixelRatio(window.devicePixelRatio),e.current.appendChild(a.domElement);let o=new Mi(120,120,150,150);o.rotateX(-Math.PI/2);let s=o.attributes.position.count,c=new Float32Array(s);for(let e=0;e<s;e++)c[e]=Math.random();o.setAttribute(`aRandom`,new wr(c,1));let l=new Bi({transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:{value:0},uPointSize:{value:.5},uColor:{value:new Un(1,1,1)},uOpacity:{value:.3},uIntensity:{value:.5},uHeight:{value:1.2},uScale:{value:.08},uSpeed:{value:.1}},vertexShader:`
        uniform float uTime;
        uniform float uPointSize;
        uniform float uHeight;
        uniform float uScale;
        uniform float uSpeed;

        attribute float aRandom;

        varying float vHeight;
        varying float vFade;

        // Hash
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }

        // Smooth noise
        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);

          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));

          vec2 u = f * f * (3.0 - 2.0 * f);

          return mix(a, b, u.x) +
                 (c - a) * u.y * (1.0 - u.x) +
                 (d - b) * u.x * u.y;
        }

        // fBm
        float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;

          for (int i = 0; i < 4; i++) {
            value += amplitude * noise(p);
            p *= 2.0;
            amplitude *= 0.5;
          }

          return value;
        }

        void main() {
          vec3 pos = position;

          float angle = uTime * 0.05;
          mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));

          vec2 p = rot * (pos.xz * uScale);

          float n = 0.0;

          n += fbm(p + vec2(0.0, uTime * uSpeed));
          n += fbm(p * 1.3 + vec2(uTime * uSpeed * 0.6, 0.0));
          n += fbm(p * 0.7 + vec2(-uTime * uSpeed * 0.4, uTime * uSpeed * 0.3));

          n /= 3.0;

          // center [-1,1]
          n = n * 2.0 - 1.0;

          pos.y = n * uHeight;

          vHeight = n;

          float baseFade = smoothstep(-0.4, 0.4, n);

          float pulse = 0.9 + 0.1 * sin(uTime * 0.5 + aRandom * 10.0);

          vFade = baseFade * pulse;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          gl_PointSize = uPointSize * (300.0 / -mvPosition.z);
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        uniform float uOpacity;
        uniform float uIntensity;

        varying float vHeight;
        varying float vFade;

        void main() {
          vec2 uv = gl_PointCoord - vec2(0.5);
          float dist = length(uv);

          if (dist > 0.5) discard;

          float circle = smoothstep(0.5, 0.2, dist);

          float opacity = vFade * circle;

          // fade out when going "down"
          opacity *= smoothstep(-0.3, 0.1, vHeight);

          vec3 color = uColor * uIntensity;

          gl_FragColor = vec4(color, opacity * uOpacity);
        }
      `}),u=new Ti(o,l);r.add(u);let d=new Oa,f=()=>{let e=d.getElapsedTime();l.uniforms.uTime.value=e,a.render(r,i),requestAnimationFrame(f)};f();let p=()=>{let t=e.current.clientWidth,n=e.current.clientHeight;i.aspect=t/n,i.updateProjectionMatrix(),a.setSize(t,n)};return window.addEventListener(`resize`,p),()=>{window.removeEventListener(`resize`,p),e.current?.removeChild(a.domElement)}},[]),(0,b.jsx)(`div`,{className:`absolute inset-0 z-0`,ref:e})}function Kc({children:e}){return(0,b.jsx)(`div`,{className:`relative w-full max-w-7xl mx-auto flex items-center justify-center`,children:(0,b.jsxs)(`div`,{className:`relative w-full max-h-full md:max-h-[80vh] rounded-2xl md:rounded-[2.5rem] p-[1px] overflow-hidden`,children:[(0,b.jsx)(`div`,{className:`absolute inset-0 z-0 opacity-40`,style:{background:`conic-gradient(from 225deg at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 25%, transparent 75%, rgba(255,255,255,0.2) 100%)`}}),(0,b.jsxs)(`div`,{className:`relative z-10 w-full rounded-2xl md:rounded-[2.5rem] bg-black/80 backdrop-blur-xl overflow-hidden flex flex-col`,children:[(0,b.jsx)(`div`,{className:`pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-[100px]`}),(0,b.jsx)(`div`,{className:`overflow-y-auto custom-scrollbar px-4 sm:px-8 md:px-14 py-8 sm:py-12 md:py-20 max-h-[calc(100dvh-13.5rem)] md:max-h-[80vh] relative`,children:(0,b.jsx)(`div`,{className:`relative z-20`,children:e})})]})]})})}function qc({className:e,color:t}){return(0,b.jsx)(`svg`,{viewBox:`0 0 4096 4096`,className:e,preserveAspectRatio:`xMidYMid meet`,children:(0,b.jsxs)(`g`,{transform:`translate(0, 4096) scale(0.1, -0.1)`,fill:t,children:[(0,b.jsx)(`path`,{d:`M17400 35130 c-96 -5 -256 -19 -355 -31 -99 -11 -227 -25 -285 -29\r
        -58 -5 -125 -16 -150 -25 -31 -12 -81 -18 -165 -19 -131 -3 -212 -14 -374 -50\r
        -58 -14 -135 -30 -171 -36 -37 -7 -107 -33 -165 -61 -74 -35 -121 -51 -176\r
        -59 -135 -19 -194 -32 -229 -52 -19 -11 -76 -29 -126 -39 -133 -27 -274 -71\r
        -409 -126 -66 -28 -141 -55 -167 -62 -27 -6 -63 -20 -80 -31 -18 -11 -43 -20\r
        -56 -20 -13 0 -35 -6 -50 -14 -15 -7 -63 -24 -107 -36 -69 -19 -85 -28 -117\r
        -65 -26 -30 -54 -49 -87 -60 -27 -9 -54 -22 -60 -29 -6 -8 -65 -38 -131 -67\r
        -80 -36 -144 -73 -192 -111 -40 -32 -77 -58 -84 -58 -6 0 -44 -33 -85 -72 -61\r
        -60 -97 -85 -204 -139 -133 -68 -305 -129 -366 -129 -49 0 -144 -24 -174 -44\r
        -14 -9 -51 -25 -83 -36 -125 -41 -198 -72 -223 -96 -14 -13 -35 -24 -48 -24\r
        -29 0 -59 -16 -98 -52 -20 -20 -48 -33 -80 -39 -53 -10 -226 -89 -258 -119\r
        -11 -10 -58 -39 -105 -65 -47 -25 -92 -52 -100 -60 -8 -7 -67 -39 -131 -70\r
        -99 -49 -130 -70 -205 -142 -51 -48 -106 -92 -129 -101 -22 -8 -54 -27 -72\r
        -41 -17 -14 -53 -42 -79 -61 -26 -19 -59 -46 -73 -60 -14 -14 -41 -34 -60 -46\r
        -18 -11 -63 -48 -100 -82 -83 -77 -199 -174 -274 -231 -32 -24 -62 -52 -67\r
        -61 -11 -20 -147 -153 -210 -205 -25 -20 -53 -52 -62 -71 -12 -22 -39 -45 -83\r
        -70 -51 -28 -74 -48 -100 -90 -19 -30 -35 -58 -35 -63 0 -4 -11 -13 -25 -19\r
        -14 -7 -28 -20 -32 -29 -4 -10 -17 -32 -30 -49 -13 -17 -23 -36 -23 -43 0 -12\r
        -96 -120 -195 -221 -24 -25 -55 -70 -69 -102 -14 -31 -38 -71 -53 -90 -39 -45\r
        -101 -144 -158 -253 -26 -49 -55 -101 -65 -115 -9 -14 -27 -54 -40 -90 -12\r
        -36 -26 -69 -30 -75 -11 -16 -78 -177 -85 -205 -3 -14 -10 -65 -15 -115 -4\r
        -49 -15 -130 -23 -180 -23 -136 -29 -270 -17 -370 17 -146 47 -356 59 -410 5\r
        -22 18 -82 29 -133 11 -51 30 -107 41 -125 12 -17 32 -57 46 -87 14 -30 34\r
        -71 45 -91 13 -24 20 -56 20 -91 0 -61 -18 -96 -92 -176 -38 -42 -77 -115\r
        -112 -214 -10 -26 -29 -64 -42 -84 -36 -52 -100 -216 -118 -299 -34 -159 -39\r
        -181 -52 -206 -33 -64 -64 -289 -64 -459 0 -111 -14 -218 -46 -340 -56 -219\r
        -72 -368 -76 -725 -3 -318 -2 -332 19 -395 12 -36 31 -108 43 -161 12 -53 30\r
        -110 41 -128 11 -18 26 -56 33 -86 18 -67 38 -107 87 -171 22 -28 39 -55 39\r
        -60 0 -6 13 -25 30 -44 16 -19 29 -39 30 -45 0 -5 30 -41 66 -80 37 -38 73\r
        -84 80 -101 10 -23 13 -93 13 -260 0 -129 5 -244 11 -264 13 -45 13 -334 0\r
        -382 -15 -51 -88 -113 -219 -184 -70 -39 -127 -78 -167 -119 -34 -33 -79 -69\r
        -101 -81 -36 -19 -42 -19 -71 -6 -19 10 -39 31 -51 56 -26 55 -51 76 -108 89\r
        -75 17 -134 14 -178 -9 -55 -29 -62 -67 -29 -154 45 -116 58 -144 97 -192 20\r
        -26 37 -54 37 -62 0 -19 19 -63 40 -96 9 -14 24 -45 34 -70 10 -25 28 -61 41\r
        -81 13 -20 30 -58 38 -85 21 -71 75 -202 101 -249 12 -22 31 -62 41 -90 10\r
        -27 21 -54 26 -60 18 -25 108 -213 114 -240 6 -31 29 -86 85 -210 18 -38 36\r
        -83 40 -100 14 -53 90 -248 116 -296 13 -26 24 -57 24 -70 0 -34 24 -105 54\r
        -166 31 -62 45 -163 25 -180 -23 -18 -111 -44 -169 -50 -78 -7 -133 -29 -230\r
        -91 -125 -81 -203 -190 -260 -365 -17 -51 -20 -88 -20 -245 0 -102 4 -201 9\r
        -221 5 -20 15 -63 22 -96 7 -33 24 -89 37 -125 13 -36 31 -87 39 -115 8 -27\r
        19 -63 25 -80 39 -112 88 -248 105 -295 11 -30 28 -80 38 -110 10 -30 22 -60\r
        27 -66 4 -6 24 -60 43 -119 21 -65 51 -131 75 -167 22 -33 40 -67 40 -74 0 -8\r
        4 -22 10 -32 5 -9 28 -60 50 -112 52 -119 56 -128 79 -165 11 -16 20 -38 20\r
        -48 1 -10 15 -44 31 -77 17 -33 30 -64 30 -70 0 -12 72 -170 96 -210 8 -14 27\r
        -50 43 -80 16 -30 41 -66 55 -79 14 -14 26 -31 26 -38 0 -19 55 -127 73 -141\r
        13 -11 26 -38 64 -132 16 -39 19 -45 58 -115 54 -97 125 -228 125 -232 0 -2\r
        15 -25 33 -51 40 -56 157 -278 181 -343 11 -29 40 -68 77 -105 32 -32 59 -63\r
        59 -69 0 -6 25 -49 56 -95 31 -47 69 -110 84 -141 16 -30 43 -74 62 -97 18\r
        -22 41 -52 51 -67 26 -36 114 -99 167 -118 86 -32 144 -21 188 35 20 25 -14\r
        94 -67 138 -147 123 -205 191 -236 280 -18 51 -72 135 -110 170 -15 14 -40 50\r
        -55 80 -15 30 -40 66 -55 80 -15 14 -42 54 -59 90 -67 133 -108 207 -146 265\r
        -22 33 -50 80 -61 105 -35 75 -91 184 -104 200 -6 8 -24 44 -38 78 -15 35 -46\r
        94 -70 130 -46 73 -121 222 -187 371 -22 51 -49 105 -59 120 -61 86 -91 141\r
        -91 164 0 14 -4 29 -10 32 -5 3 -10 15 -10 25 0 17 -23 75 -51 132 -5 10 -9\r
        23 -9 29 0 20 -65 178 -124 301 -31 64 -56 122 -56 129 0 7 -16 42 -36 78 -33\r
        60 -92 215 -160 421 -14 41 -34 102 -46 135 -95 273 -132 479 -105 590 8 33\r
        24 85 36 115 26 67 105 184 134 198 101 47 119 52 201 52 82 0 172 -17 215\r
        -39 31 -17 72 -76 81 -118 10 -44 -6 -89 -48 -137 -46 -52 -57 -91 -44 -142 7\r
        -25 12 -52 12 -62 0 -16 47 -145 76 -207 8 -16 35 -64 60 -105 24 -41 54 -95\r
        65 -120 40 -88 92 -185 109 -205 9 -11 23 -36 29 -55 6 -19 22 -51 35 -70 31\r
        -46 137 -234 160 -284 10 -21 22 -69 27 -106 4 -37 17 -89 28 -116 10 -27 26\r
        -81 35 -119 23 -99 36 -136 59 -167 31 -42 96 -68 169 -68 l61 0 152 -152 c84\r
        -84 169 -162 189 -172 33 -18 42 -18 89 -7 66 17 93 34 117 74 26 41 25 83 -1\r
        138 -24 49 -35 59 -64 59 -36 0 -187 96 -217 137 -41 57 -78 130 -78 154 0 27\r
        36 86 60 99 10 6 58 10 105 10 98 0 115 6 142 52 34 58 43 100 49 217 3 63 9\r
        123 15 132 5 10 9 29 9 42 0 25 39 83 40 60 0 -7 12 -23 27 -37 28 -26 42 -60\r
        74 -176 11 -41 29 -106 40 -145 11 -38 25 -88 32 -110 6 -22 14 -44 17 -50 4\r
        -5 15 -35 25 -65 41 -128 80 -181 145 -195 45 -10 75 14 100 82 23 60 23 66 0\r
        213 -4 30 -19 100 -33 155 -14 55 -30 132 -37 170 -7 39 -21 103 -31 142 -10\r
        40 -19 97 -19 127 0 53 -11 104 -44 211 -9 28 -16 73 -16 101 0 41 5 55 25 74\r
        l25 23 23 -21 c13 -12 29 -22 35 -22 6 0 18 -13 26 -28 8 -16 22 -35 32 -43 9\r
        -8 25 -26 34 -41 9 -15 45 -59 81 -97 35 -39 89 -99 119 -135 30 -36 62 -68\r
        70 -71 8 -4 43 -9 76 -12 58 -5 64 -4 89 21 24 25 27 33 21 73 -7 55 -29 88\r
        -119 178 -38 39 -80 86 -92 105 -12 19 -30 42 -39 49 -9 8 -25 33 -36 56 -10\r
        22 -41 62 -68 87 -27 25 -68 74 -91 109 -24 35 -65 87 -91 114 -52 55 -149\r
        180 -158 205 -3 8 -17 33 -31 55 -46 72 -51 87 -66 184 -8 53 -20 119 -25 146\r
        -14 67 -28 199 -40 375 -9 134 -14 178 -41 360 -6 36 -13 127 -16 202 l-5 138\r
        29 28 c17 18 53 36 88 47 33 9 73 24 90 33 28 15 80 35 213 82 29 11 65 28 80\r
        38 15 11 56 34 92 52 36 18 108 65 160 104 106 80 162 119 224 156 48 29 118\r
        84 213 167 146 129 188 171 244 248 32 44 72 91 88 103 16 12 84 68 149 124\r
        177 152 212 181 262 215 25 17 61 48 80 68 19 20 53 45 75 56 26 12 95 77 190\r
        178 211 224 358 388 374 419 8 15 27 39 42 55 80 79 149 189 244 387 20 41 49\r
        89 64 105 16 17 46 59 67 95 21 36 53 83 70 105 17 22 47 67 68 100 122 197\r
        238 335 306 364 46 20 75 29 237 71 40 11 81 24 92 29 21 12 93 36 134 45 15\r
        4 61 22 102 41 41 19 81 35 89 35 8 0 36 18 61 40 25 22 53 40 61 40 21 0 92\r
        37 140 74 36 27 125 75 232 125 18 8 61 40 95 72 73 67 154 112 194 107 36 -4\r
        42 -30 53 -238 14 -280 50 -492 96 -560 13 -19 24 -46 24 -60 0 -35 23 -105\r
        54 -166 14 -29 26 -55 26 -58 0 -5 74 -144 100 -186 5 -8 17 -33 26 -55 21\r
        -47 99 -171 114 -180 6 -4 21 -23 34 -43 45 -69 258 -275 346 -334 117 -78\r
        236 -129 340 -145 200 -30 406 -9 565 59 103 43 230 110 368 192 77 46 105 57\r
        155 62 67 7 59 11 210 -96 95 -67 222 -116 363 -139 88 -15 361 -15 441 -1 34\r
        6 88 16 118 21 30 5 84 18 120 29 36 10 90 24 120 30 70 14 122 28 185 50 28\r
        9 68 23 90 30 22 7 114 44 204 81 91 38 172 69 181 69 8 0 58 22 110 48 52 26\r
        155 78 229 116 74 37 152 82 173 101 22 18 71 49 111 68 40 19 97 57 127 84\r
        56 50 227 167 290 198 40 21 164 45 229 45 24 0 74 5 110 10 36 6 98 15 136\r
        21 39 6 84 18 102 25 17 8 46 17 65 20 42 7 83 23 181 68 42 20 81 36 86 36\r
        27 0 421 195 496 245 28 19 65 44 83 57 48 34 193 155 222 187 14 14 48 44 75\r
        66 28 22 94 79 148 127 167 149 251 207 322 222 17 3 89 8 160 11 72 2 162 11\r
        200 20 39 9 95 20 125 25 129 21 171 37 340 129 41 23 109 58 149 78 41 21 89\r
        53 105 71 17 19 46 48 65 65 19 18 66 62 105 99 91 87 99 92 180 118 64 21 74\r
        22 184 10 283 -28 277 -26 320 -79 21 -25 49 -64 62 -86 13 -22 35 -54 49 -71\r
        14 -17 42 -52 61 -78 19 -26 53 -69 75 -96 22 -27 48 -60 58 -74 10 -15 64\r
        -67 120 -117 88 -78 122 -100 247 -162 80 -40 165 -81 189 -91 24 -10 63 -32\r
        87 -47 23 -16 45 -29 48 -29 20 0 105 -74 111 -97 9 -36 62 -109 165 -229 124\r
        -144 356 -366 449 -429 74 -50 158 -152 186 -225 14 -36 25 -81 25 -101 0 -22\r
        16 -65 41 -115 38 -72 42 -86 41 -152 0 -75 -5 -96 -53 -199 -16 -34 -29 -69\r
        -29 -79 0 -9 -4 -33 -10 -53 -9 -34 -23 -91 -56 -225 -23 -96 -12 -351 26\r
        -576 6 -36 15 -92 20 -125 28 -179 75 -325 138 -430 10 -16 31 -61 46 -99 18\r
        -41 48 -89 77 -120 178 -192 199 -220 199 -265 0 -11 5 -23 11 -27 12 -7 8\r
        -81 -11 -199 -11 -70 -33 -336 -32 -380 16 -536 14 -623 -18 -725 -4 -14 -13\r
        -45 -19 -70 -7 -25 -23 -81 -37 -125 -13 -44 -28 -102 -34 -130 -21 -113 -38\r
        -149 -83 -171 l-31 -17 -64 69 c-35 37 -71 82 -79 98 -67 130 -211 279 -372\r
        384 -85 55 -421 220 -491 241 -40 12 -166 47 -225 63 -77 21 -100 27 -160 44\r
        -57 17 -82 22 -200 44 -27 5 -68 14 -90 20 -22 6 -58 15 -80 20 -22 5 -61 16\r
        -85 24 -25 9 -61 16 -81 16 -55 0 -226 46 -259 70 -17 12 -35 31 -42 43 -44\r
        83 -217 227 -272 227 -8 0 -28 11 -44 25 -17 14 -47 33 -68 43 -22 9 -53 32\r
        -70 49 -17 18 -46 34 -65 38 -22 4 -38 14 -44 28 -6 12 -26 30 -45 39 l-35 17\r
        98 1 c79 0 105 -4 137 -20 29 -15 59 -20 114 -20 41 0 101 -7 133 -15 56 -15\r
        118 -26 268 -45 39 -5 99 -14 135 -20 36 -7 184 -15 330 -20 261 -8 397 -19\r
        515 -40 33 -6 105 -15 160 -20 55 -6 138 -14 185 -19 223 -25 377 -36 510 -36\r
        134 1 149 3 183 24 57 35 77 67 77 121 0 44 -4 51 -44 87 -33 29 -68 46 -147\r
        71 -57 19 -115 37 -129 42 -14 5 -63 14 -110 20 -47 7 -109 20 -138 31 -29 10\r
        -64 19 -77 19 -24 0 -75 25 -127 61 -14 11 -30 19 -34 19 -5 0 -24 15 -44 34\r
        -40 39 -262 158 -330 177 -25 7 -73 25 -106 41 -34 15 -67 28 -72 28 -6 0 -35\r
        17 -65 38 -82 57 -194 102 -258 102 -19 0 -61 7 -94 16 -33 9 -89 20 -125 24\r
        -36 5 -94 14 -130 20 -108 18 -191 31 -265 40 -38 4 -106 15 -150 24 -44 9\r
        -105 21 -135 27 -30 6 -90 19 -133 30 -43 10 -101 19 -130 19 -29 0 -57 4 -62\r
        8 -17 14 -113 37 -260 63 -38 6 -105 20 -149 30 -43 11 -88 19 -100 19 -11 0\r
        -48 9 -80 20 -33 11 -73 20 -90 20 -17 0 -71 9 -121 20 -163 38 -175 40 -229\r
        40 -29 0 -71 7 -92 17 -22 9 -59 20 -84 25 -554 102 -618 102 -716 -4 -51 -55\r
        -134 -229 -134 -281 0 -26 -89 -37 -289 -37 -177 0 -205 -2 -246 -20 -74 -32\r
        -92 -103 -38 -152 28 -25 88 -48 126 -48 19 0 49 -5 68 -12 53 -18 165 -95\r
        190 -129 29 -41 156 -134 226 -166 64 -29 180 -52 268 -53 122 -1 273 -39 349\r
        -88 53 -34 162 -87 201 -96 31 -8 58 -20 230 -101 54 -26 115 -49 135 -52 19\r
        -3 64 -19 99 -34 35 -16 72 -29 82 -29 10 0 43 -11 73 -25 30 -14 92 -37 138\r
        -51 125 -40 247 -93 287 -125 20 -16 51 -31 69 -35 18 -4 35 -10 37 -14 7 -12\r
        -197 -26 -300 -21 -109 6 -146 5 -549 -3 -175 -4 -337 -11 -360 -16 -23 -5\r
        -69 -10 -103 -10 -34 0 -84 -4 -110 -9 -26 -5 -79 -14 -118 -20 -126 -21 -179\r
        -32 -225 -48 -46 -16 -80 -25 -140 -41 -36 -9 -195 -75 -283 -118 -28 -13 -55\r
        -24 -59 -24 -5 0 -41 -15 -81 -34 -40 -19 -88 -41 -107 -50 -53 -23 -114 -59\r
        -148 -87 -16 -13 -61 -43 -99 -67 -79 -48 -260 -220 -319 -302 -115 -160 -164\r
        -307 -164 -492 0 -218 29 -363 106 -528 73 -156 100 -206 125 -235 14 -16 49\r
        -69 78 -117 51 -86 146 -192 250 -278 30 -25 75 -67 100 -94 25 -27 62 -59 81\r
        -72 19 -13 62 -46 95 -73 33 -28 65 -50 70 -50 6 -1 67 -38 137 -84 162 -105\r
        348 -208 407 -225 25 -8 55 -19 66 -25 57 -31 96 -47 118 -47 12 0 27 -4 33\r
        -8 5 -5 47 -24 94 -42 47 -18 99 -39 117 -46 30 -14 89 -29 158 -40 17 -3 44\r
        -12 62 -20 17 -8 53 -19 80 -25 26 -5 66 -14 88 -20 207 -49 333 -67 570 -81\r
        308 -18 406 -15 770 22 151 15 228 27 275 43 25 8 72 20 105 26 33 7 78 17\r
        100 23 89 24 102 27 155 38 30 7 69 16 85 21 17 5 69 20 116 33 47 13 132 43\r
        190 66 57 23 148 57 203 76 54 18 115 44 135 58 20 13 59 34 86 46 116 51 174\r
        82 240 126 39 26 88 57 110 68 61 32 92 55 170 129 39 37 76 67 81 67 6 0 23\r
        14 39 30 22 23 38 30 67 30 47 0 53 -18 44 -123 -9 -96 10 -136 72 -156 54\r
        -17 72 -8 124 56 54 68 95 163 130 298 14 55 47 166 57 190 5 11 21 48 35 82\r
        15 34 33 99 41 144 15 87 23 99 66 99 41 0 51 -35 39 -138 -23 -208 -21 -865\r
        5 -1322 1 -30 3 -72 4 -92 1 -46 42 -98 77 -98 58 0 95 46 123 152 17 65 19\r
        110 20 407 1 314 2 339 23 405 12 39 24 76 28 81 4 6 10 22 14 37 4 17 26 42\r
        59 67 29 21 66 54 82 72 59 67 107 99 147 99 26 0 40 -6 47 -19 20 -37 22 -96\r
        6 -156 -21 -73 -32 -123 -46 -195 -19 -106 -40 -203 -59 -280 -13 -52 -27\r
        -127 -40 -220 -5 -36 -14 -85 -20 -110 -22 -87 -31 -146 -40 -250 -5 -58 -14\r
        -130 -20 -160 -6 -30 -14 -116 -19 -190 -5 -74 -10 -139 -12 -145 -1 -5 1 -40\r
        5 -77 8 -62 11 -69 39 -83 61 -31 117 -7 137 57 7 24 16 54 20 68 5 14 14 84\r
        20 155 6 72 18 171 27 220 8 50 19 115 24 145 9 57 20 107 39 175 12 45 27\r
        123 39 205 8 52 33 141 52 185 5 11 22 61 39 110 32 94 37 106 64 169 10 22\r
        29 73 43 115 14 42 28 81 33 86 4 6 21 46 38 90 17 44 52 127 77 185 26 58 53\r
        129 61 159 8 29 23 65 34 78 11 14 20 34 20 44 0 10 17 58 38 106 21 48 44\r
        108 51 133 8 25 19 59 26 75 22 50 42 107 60 170 10 33 23 74 30 90 7 17 18\r
        50 26 75 7 25 23 71 36 102 12 31 27 78 33 104 14 63 82 204 110 229 37 33 90\r
        157 90 209 0 69 -20 106 -91 167 -83 72 -115 94 -164 109 -22 7 -59 21 -81 31\r
        -76 34 -218 59 -333 59 -77 0 -116 -6 -197 -31 -16 -5 -57 -12 -90 -15 l-60\r
        -6 -32 60 c-42 79 -44 146 -6 191 25 30 29 31 78 25 28 -4 69 -15 91 -24 55\r
        -23 150 -34 234 -25 62 6 73 11 120 52 45 39 51 49 51 83 0 34 -4 39 -32 50\r
        -67 24 -145 39 -207 40 -73 0 -123 22 -217 93 -75 57 -89 92 -82 204 4 53 14\r
        101 33 149 31 78 50 95 183 159 99 47 204 161 264 286 25 52 53 121 61 154 22\r
        86 40 288 32 364 -6 69 12 126 45 142 15 7 197 53 275 69 136 28 267 82 290\r
        120 3 5 25 19 49 29 57 26 170 140 202 204 15 28 37 67 50 87 40 61 57 127 51\r
        199 -17 199 -28 254 -70 344 -14 28 -31 68 -38 87 -7 19 -37 73 -66 120 -29\r
        47 -67 109 -84 137 -17 29 -44 64 -60 77 -16 14 -53 54 -82 90 -28 35 -80 88\r
        -114 116 -61 50 -63 53 -63 100 0 66 9 86 70 149 74 77 108 138 158 286 40\r
        116 55 244 41 339 -18 126 -60 279 -95 349 -19 37 -34 72 -34 78 0 6 -33 62\r
        -73 123 -41 61 -89 137 -108 169 -23 39 -62 82 -117 129 -45 38 -101 94 -123\r
        124 l-41 54 7 202 c12 326 11 582 -4 743 -7 83 -17 195 -21 250 -5 55 -13 127\r
        -20 160 -6 33 -15 83 -19 110 -9 55 -39 175 -76 300 -13 44 -34 123 -48 175\r
        -14 52 -36 133 -50 180 -13 47 -30 107 -37 133 -7 26 -31 77 -52 113 -22 36\r
        -45 82 -52 102 -7 20 -35 72 -62 115 -27 43 -53 88 -59 100 -5 11 -20 39 -32\r
        61 -12 23 -33 64 -46 91 -14 28 -51 80 -83 117 -33 36 -81 94 -109 129 -66 83\r
        -156 181 -285 308 -58 57 -114 119 -125 137 -23 38 -111 98 -132 90 -8 -3 -11\r
        -1 -8 4 6 9 -8 14 -28 11 -5 -1 -6 3 -2 9 16 26 -138 126 -178 114 -12 -3 -19\r
        -3 -15 1 16 17 -63 71 -85 59 -6 -4 -9 -3 -4 1 8 9 -20 45 -36 45 -5 0 -3 -8\r
        4 -17 13 -16 12 -17 -3 -5 -10 8 -16 19 -15 25 3 17 -94 79 -116 73 -10 -2\r
        -16 -2 -13 1 3 3 -12 17 -32 31 -46 31 -335 178 -366 186 -12 3 -39 17 -60 31\r
        -20 14 -68 32 -106 41 -67 15 -73 19 -150 97 -72 74 -114 138 -154 237 -7 18\r
        -71 118 -141 221 -71 104 -245 273 -349 340 -23 14 -55 38 -72 54 -42 37 -89\r
        63 -344 193 -226 115 -343 166 -525 227 -60 20 -126 47 -145 59 -51 33 -96 46\r
        -156 46 -29 0 -74 4 -101 10 -163 32 -293 41 -534 34 l-244 -6 -125 -45 c-167\r
        -60 -193 -66 -235 -59 -34 7 -35 8 -20 29 8 12 15 29 15 39 0 11 29 33 88 64\r
        48 25 98 55 112 65 14 10 75 46 136 79 127 70 199 136 209 190 6 33 3 39 -49\r
        88 -48 45 -60 52 -96 52 -22 0 -57 -7 -78 -16 -20 -9 -81 -31 -135 -50 -54\r
        -18 -111 -44 -128 -58 -16 -14 -55 -39 -87 -56 -31 -17 -84 -53 -117 -81 -33\r
        -27 -103 -82 -155 -121 -52 -39 -132 -108 -177 -152 -45 -45 -93 -89 -108 -99\r
        -14 -10 -34 -35 -44 -56 -30 -57 -43 -65 -83 -48 -27 11 -49 38 -105 128 -73\r
        116 -96 167 -139 298 -14 40 -37 92 -53 115 -16 22 -42 74 -59 114 -17 40 -47\r
        92 -67 115 -20 23 -65 76 -101 117 -36 41 -77 99 -92 128 -26 54 -63 92 -88\r
        92 -7 0 -27 20 -44 45 -17 24 -52 57 -78 72 -26 15 -52 35 -59 44 -7 9 -54 44\r
        -105 77 -51 33 -102 69 -112 81 -11 12 -24 21 -29 21 -6 0 -20 8 -31 18 -89\r
        79 -640 346 -781 378 -16 3 -50 17 -75 30 -25 12 -97 32 -161 44 -64 11 -156\r
        34 -205 51 -72 24 -105 30 -183 31 -154 1 -420 -8 -499 -17 -76 -8 -109 -2\r
        -257 47 -104 34 -128 39 -232 47 -70 5 -108 12 -120 23 -10 9 -49 23 -88 32\r
        -38 10 -104 28 -145 41 -41 13 -111 26 -155 30 -44 3 -118 15 -165 25 -47 10\r
        -129 21 -182 24 -170 11 -907 14 -1088 6z m640 -331 c41 -6 194 -14 340 -19\r
        169 -5 290 -13 335 -22 39 -9 111 -21 160 -28 50 -7 109 -19 133 -27 38 -14\r
        42 -19 42 -48 0 -18 -6 -37 -12 -42 -18 -13 -222 -98 -286 -118 -41 -14 -59\r
        -27 -84 -61 -22 -30 -43 -48 -68 -55 -20 -6 -68 -35 -106 -65 -38 -29 -111\r
        -74 -161 -99 -66 -33 -102 -58 -125 -87 -18 -22 -59 -67 -90 -100 -55 -58 -59\r
        -60 -118 -65 -67 -6 -66 -7 -286 98 -56 26 -153 65 -215 85 -63 20 -142 47\r
        -176 61 -35 13 -100 31 -145 39 -46 9 -108 25 -138 36 -167 58 -250 78 -455\r
        108 -44 6 -156 24 -250 40 -93 16 -204 31 -245 35 -41 4 -100 15 -130 26 -33\r
        11 -81 19 -122 19 -60 0 -90 11 -74 27 3 3 49 10 103 15 54 5 129 21 168 34\r
        103 36 181 52 286 60 52 3 132 17 179 31 57 17 129 27 220 33 74 5 171 17 215\r
        26 90 18 172 27 430 43 99 7 230 16 290 20 162 12 300 11 385 0z m1795 -308\r
        c44 -16 105 -38 135 -50 30 -11 68 -20 84 -21 35 0 216 -90 271 -135 22 -17\r
        56 -40 75 -50 19 -10 52 -31 72 -47 20 -16 75 -46 121 -68 46 -22 103 -56 128\r
        -77 24 -21 64 -52 89 -68 25 -16 72 -54 105 -84 33 -30 97 -84 142 -119 45\r
        -36 85 -73 88 -82 3 -10 16 -25 29 -33 12 -8 28 -33 34 -56 15 -48 2 -77 -38\r
        -89 -24 -7 -228 -7 -595 0 -170 3 -183 2 -228 -20 -26 -12 -71 -27 -100 -32\r
        -28 -6 -72 -16 -97 -24 -63 -19 -164 -37 -262 -45 -119 -11 -163 11 -318 154\r
        -120 111 -233 157 -338 138 -35 -6 -79 -7 -112 -2 -109 16 -184 30 -193 36 -6\r
        3 -94 10 -196 14 -261 12 -339 20 -351 34 -15 18 17 61 116 158 112 110 167\r
        151 269 202 50 25 122 68 160 95 78 56 179 111 240 130 22 7 51 21 65 30 58\r
        40 406 136 500 138 14 1 61 -12 105 -27z m1091 -86 c78 -19 146 -48 319 -135\r
        121 -61 225 -110 232 -110 6 0 32 -15 56 -34 25 -19 58 -41 74 -50 15 -8 49\r
        -32 75 -53 26 -21 82 -66 125 -100 126 -101 142 -115 217 -189 120 -120 163\r
        -180 231 -323 21 -44 25 -61 18 -90 -8 -34 -11 -36 -57 -39 -26 -2 -53 1 -59\r
        6 -18 14 -124 48 -194 62 -36 7 -84 27 -115 46 -29 18 -74 45 -100 59 -26 13\r
        -59 42 -75 62 -118 158 -244 305 -333 387 -30 28 -91 87 -135 131 -44 44 -107\r
        97 -140 118 -102 65 -149 100 -216 159 -36 31 -87 66 -113 77 -26 12 -44 25\r
        -41 31 11 18 130 11 231 -15z m-4633 -265 c29 -5 88 -15 132 -24 44 -8 114\r
        -20 155 -26 151 -23 197 -32 280 -56 47 -14 106 -37 133 -50 26 -13 61 -24 78\r
        -24 65 0 257 -58 364 -110 33 -16 89 -42 125 -59 36 -16 78 -41 94 -54 26 -23\r
        28 -28 20 -63 -8 -31 -21 -46 -74 -82 -36 -25 -84 -51 -108 -60 -39 -13 -133\r
        -64 -165 -90 -7 -5 -37 -12 -68 -14 -67 -5 -164 -49 -245 -110 -32 -25 -72\r
        -50 -89 -56 -16 -6 -57 -22 -90 -35 -66 -28 -240 -47 -434 -47 -269 -2 -367\r
        -23 -588 -131 -66 -33 -146 -68 -177 -79 -54 -18 -58 -18 -96 -2 -25 11 -56\r
        38 -84 75 -91 117 -330 334 -428 387 -15 8 -55 39 -88 68 -79 70 -283 169\r
        -523 254 -47 16 -63 28 -83 60 -14 22 -24 41 -22 42 37 27 86 47 138 56 43 7\r
        87 25 131 51 36 21 75 39 87 39 12 0 48 9 79 20 57 19 87 26 325 75 110 23\r
        343 50 503 59 111 6 660 -5 718 -14z m-2183 -630 c36 -6 94 -19 130 -30 36\r
        -10 90 -24 121 -30 32 -6 64 -19 74 -31 10 -10 48 -28 84 -40 36 -11 98 -38\r
        136 -59 39 -22 94 -51 122 -65 29 -15 59 -34 65 -43 15 -20 121 -100 144 -109\r
        21 -8 60 -92 59 -129 l0 -29 -380 -6 c-388 -7 -548 -19 -755 -58 -58 -10 -129\r
        -22 -159 -26 -39 -4 -61 -13 -77 -30 -12 -13 -39 -26 -60 -30 -75 -12 -178\r
        -57 -219 -95 -44 -41 -160 -103 -214 -113 -20 -4 -54 -25 -82 -52 -27 -25 -53\r
        -45 -60 -45 -6 0 -32 -11 -58 -23 -26 -13 -63 -27 -84 -31 l-37 -7 0 50 c0 37\r
        7 60 25 87 14 21 28 49 31 63 7 38 92 211 103 211 15 0 91 121 91 145 0 33 38\r
        113 59 125 11 5 45 48 76 95 32 47 76 100 99 117 23 18 62 50 87 72 77 69 183\r
        120 264 127 86 8 327 1 415 -11z m4006 -151 c16 -17 45 -39 64 -49 28 -14 38\r
        -27 48 -64 23 -87 18 -102 -52 -171 -36 -36 -69 -78 -75 -97 -7 -21 -31 -52\r
        -60 -76 -40 -34 -53 -54 -76 -116 -15 -42 -34 -81 -42 -88 -8 -6 -28 -31 -43\r
        -54 -16 -22 -42 -47 -59 -53 -26 -11 -33 -10 -63 11 -18 12 -36 28 -40 33 -3\r
        6 -36 46 -72 91 -93 115 -111 172 -81 269 10 35 31 66 73 109 33 34 89 93 125\r
        131 59 63 75 74 159 107 145 57 155 58 194 17z m1205 -53 c19 -8 49 -30 67\r
        -49 l34 -35 -31 -34 c-39 -44 -131 -99 -218 -129 -63 -22 -77 -32 -193 -149\r
        -69 -69 -160 -162 -203 -208 -42 -45 -82 -82 -87 -82 -21 0 -42 114 -37 200 8\r
        139 27 189 102 258 85 80 277 195 380 227 55 18 146 18 186 1z m1877 -105 c56\r
        -12 128 -21 160 -21 89 -1 127 -13 164 -55 23 -27 37 -56 44 -95 7 -31 22 -72\r
        33 -91 19 -31 21 -44 16 -144 l-6 -110 -97 -193 -96 -193 -116 -110 c-140\r
        -134 -126 -121 -179 -175 -25 -24 -63 -53 -86 -64 -22 -11 -70 -44 -105 -73\r
        -75 -61 -201 -132 -251 -142 -27 -5 -38 -2 -51 12 -15 16 -15 31 -5 138 15\r
        163 12 430 -6 541 -11 66 -28 117 -62 189 -77 164 -118 272 -113 305 4 25 0\r
        31 -26 40 -45 17 -70 31 -131 76 -62 44 -64 47 -58 90 6 42 35 54 131 54 42 1\r
        136 12 207 25 116 22 151 24 330 20 151 -2 225 -8 303 -24z m-8595 -25 c3 -8\r
        -7 -26 -24 -40 -16 -14 -29 -32 -29 -40 0 -14 -64 -76 -78 -76 -5 0 -26 -17\r
        -48 -38 -21 -21 -55 -49 -74 -64 -19 -14 -51 -42 -70 -63 -19 -20 -80 -83\r
        -135 -140 -55 -57 -116 -122 -135 -146 -19 -23 -52 -53 -73 -67 -21 -14 -48\r
        -44 -59 -66 -27 -54 -46 -74 -90 -97 -21 -11 -56 -45 -80 -77 -23 -31 -61 -74\r
        -85 -95 -23 -21 -56 -64 -73 -96 -17 -31 -51 -81 -75 -111 -25 -30 -48 -70\r
        -51 -88 -5 -25 -15 -37 -45 -52 -37 -20 -89 -76 -89 -98 0 -6 -13 -26 -29 -44\r
        -78 -89 -102 -119 -155 -198 -108 -159 -132 -191 -161 -210 -33 -22 -50 -50\r
        -59 -100 -12 -59 -28 -94 -61 -130 -28 -32 -108 -160 -164 -265 -11 -22 -29\r
        -51 -40 -65 -33 -45 -99 -164 -116 -210 -34 -90 -57 -146 -85 -200 -15 -30\r
        -31 -70 -35 -89 -4 -18 -18 -49 -31 -68 -13 -19 -26 -51 -29 -72 -10 -60 -28\r
        -114 -52 -149 -20 -31 -74 -162 -104 -257 -13 -39 -64 -111 -146 -206 -24 -27\r
        -50 -64 -59 -82 -9 -17 -40 -53 -69 -79 -29 -26 -58 -61 -65 -78 -7 -16 -14\r
        -30 -15 -30 -1 0 -24 12 -49 26 -28 16 -51 37 -57 53 -5 14 -14 35 -19 46 -19\r
        38 -61 220 -71 305 -5 47 -14 128 -20 180 -18 155 4 391 50 551 10 35 39 105\r
        65 155 25 50 57 128 71 174 14 46 29 86 34 89 14 10 78 132 102 196 12 33 42\r
        86 66 117 24 32 54 76 66 97 13 22 67 89 122 151 54 61 106 124 116 138 9 15\r
        52 63 96 107 44 44 105 112 136 150 95 119 120 145 192 198 38 29 83 70 100\r
        93 16 22 41 46 55 53 43 20 124 83 233 182 57 53 127 110 153 127 62 40 126\r
        87 178 133 23 19 57 42 76 49 40 16 109 60 161 104 20 17 74 51 120 75 46 25\r
        109 68 139 97 30 28 76 65 102 80 26 16 91 56 145 88 54 33 107 67 118 76 11\r
        9 40 22 64 29 24 7 73 28 108 47 68 36 127 44 136 20z m9528 -175 c25 -11 71\r
        -27 102 -35 64 -17 72 -21 116 -58 38 -33 51 -65 51 -128 0 -64 -39 -111 -111\r
        -135 -45 -15 -95 -41 -230 -118 -25 -15 -56 -38 -69 -52 -19 -20 -33 -25 -72\r
        -25 l-48 0 -1 38 c-1 20 0 42 2 47 1 6 6 96 9 200 7 200 10 216 59 269 24 26\r
        30 28 86 23 33 -3 81 -15 106 -26z m-2269 -24 c125 -70 169 -99 179 -120 7\r
        -12 40 -51 74 -87 34 -36 70 -80 79 -99 23 -43 86 -131 95 -131 9 0 31 -74 31\r
        -105 0 -14 10 -47 23 -73 20 -43 22 -62 22 -207 0 -137 -3 -170 -22 -230 -12\r
        -38 -28 -90 -35 -115 -31 -111 -127 -241 -198 -268 -75 -30 -205 -61 -272 -66\r
        -44 -3 -117 -19 -169 -36 -50 -16 -118 -34 -150 -39 -32 -5 -86 -21 -121 -36\r
        -35 -14 -117 -39 -183 -56 -73 -18 -147 -45 -190 -68 -123 -66 -209 -71 -385\r
        -21 -36 10 -99 25 -140 34 -91 21 -148 63 -165 123 -12 41 -9 54 38 156 15 32\r
        27 66 27 77 0 10 11 32 25 49 14 16 34 54 44 83 20 57 81 174 117 223 12 17\r
        25 41 29 55 4 14 18 36 30 50 13 14 33 48 45 77 12 28 28 54 35 56 7 3 30 32\r
        52 64 80 119 449 491 510 514 15 5 83 45 151 87 68 42 133 82 145 89 17 9 185\r
        49 217 52 3 0 31 -14 62 -32z m-2899 -163 c9 -3 29 -31 44 -62 31 -63 30 -51\r
        22 -392 -3 -134 -1 -175 13 -220 9 -30 22 -84 29 -119 12 -64 77 -213 98 -226\r
        7 -4 23 -24 36 -45 14 -22 52 -67 86 -102 33 -35 79 -90 101 -123 23 -33 51\r
        -71 63 -85 37 -40 40 -82 12 -127 -25 -40 -53 -66 -206 -191 -125 -103 -162\r
        -130 -187 -136 -12 -3 -64 -35 -117 -71 -112 -77 -133 -85 -177 -76 -45 9 -50\r
        30 -54 211 -2 105 -8 157 -20 190 -9 25 -26 88 -36 140 -18 87 -51 166 -128\r
        305 -15 28 -30 101 -43 214 -5 46 -16 114 -25 150 -42 183 -47 195 -105 258\r
        -44 48 -64 109 -55 171 7 55 9 58 56 82 22 11 54 33 72 49 18 15 47 36 65 44\r
        17 9 53 35 78 57 45 39 140 93 195 111 26 9 155 4 183 -7z m-823 -35 c0 -36\r
        -3 -41 -35 -55 -19 -7 -60 -14 -90 -14 -82 0 -125 29 -72 49 12 5 43 18 67 29\r
        25 12 56 23 70 25 59 10 60 9 60 -34z m8540 6 c41 -8 134 -30 205 -49 72 -20\r
        148 -41 170 -46 22 -6 54 -16 70 -22 17 -5 59 -19 95 -30 62 -19 216 -79 252\r
        -98 9 -5 70 -37 135 -70 65 -34 127 -70 138 -80 11 -10 40 -28 64 -40 100 -50\r
        284 -206 390 -330 35 -41 68 -78 73 -81 13 -8 22 -74 14 -105 -7 -26 -7 -26\r
        -77 -20 -44 5 -88 17 -119 33 -27 14 -71 27 -97 30 -26 2 -73 13 -103 23 -51\r
        16 -144 35 -380 75 -52 9 -124 22 -160 30 -36 8 -108 19 -160 26 -105 12 -228\r
        45 -314 83 -56 25 -136 98 -249 228 -27 30 -83 82 -124 114 -42 32 -97 76\r
        -122 96 -25 21 -61 43 -80 49 -122 41 -231 121 -198 146 22 17 76 35 129 43\r
        95 14 368 11 448 -5z m-6380 -155 c0 -39 -18 -88 -45 -120 -6 -8 -17 -52 -23\r
        -97 -8 -57 -19 -94 -36 -120 -14 -21 -28 -56 -32 -78 -4 -22 -20 -56 -35 -75\r
        -16 -19 -35 -52 -44 -72 -14 -35 -17 -37 -40 -26 -36 16 -41 64 -20 173 9 49\r
        22 108 28 130 15 54 73 138 151 219 36 37 68 76 71 86 11 34 25 22 25 -20z\r
        m-3674 1 c73 -24 85 -30 68 -37 -12 -5 -72 -63 -134 -129 -110 -117 -114 -120\r
        -184 -140 -157 -47 -210 -56 -327 -53 -250 5 -321 1 -379 -22 -46 -18 -155\r
        -45 -375 -91 -55 -11 -103 -11 -147 2 -42 11 -49 24 -18 34 10 3 52 28 93 54\r
        41 27 105 65 143 84 38 19 87 44 109 56 22 11 105 39 185 62 80 23 163 50 185\r
        61 22 10 67 26 100 34 33 9 89 28 125 44 53 22 92 30 204 40 76 7 151 16 165\r
        20 49 15 97 10 187 -19z m494 -17 c52 -30 53 -68 3 -121 -158 -168 -165 -173\r
        -208 -173 l-35 0 6 44 c5 36 0 57 -31 127 -20 46 -44 90 -53 96 -13 11 -9 15\r
        29 33 61 29 236 25 289 -6z m-2585 -35 c10 -59 -4 -198 -25 -244 -10 -22 -26\r
        -61 -35 -87 -34 -97 -144 -229 -245 -293 -19 -12 -84 -71 -145 -130 -68 -66\r
        -127 -114 -155 -126 -25 -11 -58 -33 -75 -48 -50 -46 -127 -98 -190 -127 -33\r
        -15 -63 -30 -67 -32 -5 -2 -8 15 -8 38 0 41 19 89 47 122 14 16 103 167 103\r
        176 0 2 27 31 60 65 33 34 60 66 60 70 0 5 37 46 83 91 115 114 181 186 203\r
        221 23 36 119 140 194 209 30 28 68 65 85 81 25 25 72 51 97 54 3 1 9 -17 13\r
        -40z m11167 -49 c229 -60 259 -71 382 -133 107 -55 134 -74 196 -138 66 -69\r
        71 -77 68 -114 l-3 -40 -270 -7 c-271 -6 -509 -26 -575 -48 -19 -6 -92 -14\r
        -162 -17 -129 -6 -180 3 -191 31 -3 7 -11 66 -17 130 -16 152 -7 187 64 254\r
        75 71 97 82 183 97 128 21 200 18 325 -15z m-6214 -71 c20 -23 43 -53 51 -68\r
        7 -14 22 -35 32 -46 10 -11 22 -38 28 -60 5 -22 22 -69 37 -105 25 -61 26 -71\r
        22 -181 -4 -86 -10 -126 -24 -155 -18 -36 -22 -39 -61 -38 -59 1 -84 22 -148\r
        124 -113 184 -138 384 -68 549 13 32 16 33 54 27 29 -5 49 -17 77 -47z m-1899\r
        -96 c14 -31 14 -65 -1 -98 -10 -22 -17 -25 -63 -25 -42 0 -60 6 -93 29 -22 16\r
        -43 35 -47 41 -9 15 30 55 81 84 36 20 42 21 75 8 20 -8 42 -25 48 -39z m6683\r
        -80 c10 -9 18 -27 18 -41 0 -42 -51 -180 -100 -271 -25 -47 -52 -100 -59 -118\r
        -7 -17 -30 -47 -52 -66 -22 -20 -39 -45 -39 -57 0 -31 -72 -91 -174 -145 -50\r
        -25 -107 -61 -127 -80 -56 -50 -209 -77 -209 -36 0 10 -3 31 -6 47 -4 22 2 39\r
        22 69 15 22 36 62 47 90 10 27 35 72 55 100 77 104 193 243 229 274 21 18 66\r
        57 101 88 92 82 220 161 261 163 8 0 23 -7 33 -17z m4083 -33 c10 -11 16 -20\r
        13 -20 -3 0 -13 9 -23 20 -10 11 -16 20 -13 20 3 0 13 -9 23 -20z m-12120\r
        -260 c21 -13 35 -31 39 -50 6 -34 -15 -185 -39 -274 -14 -50 -16 -98 -12 -290\r
        3 -127 10 -260 16 -296 17 -99 32 -224 40 -340 4 -62 14 -120 24 -142 28 -61\r
        23 -87 -20 -105 -33 -13 -69 -15 -249 -9 -207 6 -214 6 -360 -24 -82 -16 -173\r
        -30 -201 -30 -32 0 -79 -10 -120 -25 -51 -20 -78 -24 -108 -19 -68 11 -133 44\r
        -154 78 -11 17 -38 49 -60 71 -23 21 -41 44 -41 51 0 11 -30 52 -98 134 -45\r
        55 -108 197 -122 275 -6 39 -18 97 -25 130 -30 131 -45 261 -45 383 l0 129 40\r
        45 c38 44 131 98 168 98 9 0 53 11 97 25 76 24 220 56 405 89 47 9 117 23 155\r
        31 39 9 133 20 210 25 77 5 183 18 235 29 178 36 183 37 225 11z m509 1 c11\r
        -12 15 -28 11 -45 -3 -14 -7 -37 -10 -50 -3 -14 -23 -45 -44 -70 -27 -32 -43\r
        -61 -50 -98 -7 -29 -19 -72 -28 -95 -13 -36 -20 -43 -42 -43 -36 0 -51 17 -51\r
        60 0 42 21 124 42 165 9 17 19 58 23 92 6 56 10 64 38 82 42 25 89 26 111 2z\r
        m550 -5 c25 -10 37 -24 46 -51 13 -38 8 -118 -9 -139 -4 -6 -11 -28 -14 -50\r
        -3 -21 -16 -57 -28 -80 -29 -55 -49 -194 -49 -346 0 -129 1 -132 71 -350 7\r
        -19 43 -99 82 -178 75 -153 78 -170 43 -244 -47 -98 -233 -252 -318 -264 -53\r
        -7 -141 11 -159 32 -18 22 -77 44 -118 44 -41 0 -67 16 -117 69 -44 48 -61 95\r
        -74 217 -13 122 -4 190 51 392 21 79 39 149 39 155 0 21 67 177 83 195 8 9 38\r
        78 66 152 27 74 69 171 92 215 40 76 156 228 182 238 25 11 99 6 131 -7z m509\r
        -238 c3 -18 11 -64 18 -101 10 -55 10 -94 -1 -205 -7 -75 -16 -180 -20 -232\r
        -9 -103 -30 -198 -57 -257 -19 -41 -54 -54 -91 -34 -17 9 -71 128 -105 231\r
        -24 72 -40 207 -33 274 7 69 39 184 66 236 10 19 24 54 31 78 7 25 31 63 57\r
        90 l44 47 43 -47 c26 -29 45 -60 48 -80z m8649 73 c134 -7 151 -10 185 -33 69\r
        -47 114 -101 144 -173 46 -112 47 -124 2 -172 -35 -38 -46 -43 -131 -62 -116\r
        -26 -121 -26 -205 1 -61 19 -75 20 -114 10 -56 -15 -134 -65 -196 -126 -27\r
        -25 -85 -72 -130 -102 -45 -31 -92 -65 -105 -77 -29 -27 -87 -60 -232 -132\r
        -106 -53 -217 -124 -314 -199 -50 -39 -132 -87 -212 -125 -34 -16 -65 -34 -68\r
        -40 -4 -6 -18 -11 -31 -11 -13 0 -59 -19 -102 -42 -70 -37 -85 -42 -151 -42\r
        -68 -1 -75 1 -97 27 -49 56 -53 113 -19 312 31 177 44 226 72 268 37 54 112\r
        205 112 225 0 8 11 29 23 46 13 17 48 81 78 141 73 149 116 198 188 214 201\r
        43 364 61 746 82 110 6 238 14 285 18 47 4 94 6 105 4 11 -2 86 -7 167 -12z\r
        m-3197 -158 c-14 -26 -28 -65 -31 -85 -12 -73 -84 -112 -188 -101 l-52 5 5 37\r
        c4 37 63 121 85 121 23 0 168 93 184 119 l17 25 3 -36 c2 -25 -5 -52 -23 -85z\r
        m4095 73 c44 -14 142 -39 360 -92 58 -14 133 -34 168 -45 34 -10 83 -19 108\r
        -19 46 0 129 -34 120 -49 -3 -4 33 -16 79 -26 50 -10 82 -22 78 -28 -8 -13\r
        -224 1 -278 18 -87 28 -345 35 -613 17 -94 -6 -166 -7 -186 -1 -20 6 -49 28\r
        -74 58 -36 42 -42 56 -42 94 0 26 6 49 14 56 8 6 51 16 96 21 46 5 85 12 89\r
        15 3 4 12 4 21 1 8 -2 35 -11 60 -20z m-9210 -130 c0 -19 -4 -38 -10 -41 -6\r
        -4 -10 10 -10 34 0 23 5 41 10 41 6 0 10 -15 10 -34z m-3787 -70 c25 -10 37\r
        -24 49 -57 32 -87 39 -118 37 -165 -3 -71 20 -248 43 -329 11 -38 30 -110 44\r
        -159 13 -48 34 -107 47 -130 14 -22 28 -56 32 -73 3 -18 19 -43 33 -55 26 -22\r
        102 -137 102 -155 0 -4 16 -28 35 -52 19 -24 35 -48 35 -53 0 -28 -28 -50\r
        -102 -78 -46 -18 -90 -38 -99 -46 -9 -8 -42 -21 -75 -29 -32 -9 -77 -28 -99\r
        -44 -22 -15 -62 -34 -90 -41 -27 -7 -97 -36 -155 -65 -223 -112 -283 -138\r
        -325 -143 -41 -4 -44 -2 -60 28 -21 41 -51 132 -60 185 -29 169 -137 332 -231\r
        349 -61 11 -163 47 -175 62 -30 36 15 169 64 192 17 9 36 30 47 55 10 23 47\r
        71 82 107 35 36 81 92 103 125 67 100 365 401 439 444 22 13 55 36 71 52 26\r
        24 144 86 168 88 4 1 22 -5 40 -13z m10017 -76 c23 -10 43 -58 43 -104 1 -77\r
        -21 -182 -48 -236 -36 -71 -166 -205 -224 -230 -61 -28 -107 -27 -115 3 -10\r
        40 -6 91 10 122 9 17 24 53 34 80 26 73 103 234 134 280 15 22 45 56 68 76 35\r
        31 46 35 63 26 11 -5 27 -13 35 -17z m-5990 -195 c44 -45 58 -118 59 -295 0\r
        -196 -10 -260 -50 -310 -60 -75 -112 -131 -132 -141 -38 -21 -130 -39 -166\r
        -33 -106 19 -156 127 -91 200 16 19 34 53 40 76 7 24 20 52 30 63 54 61 177\r
        289 186 346 4 26 13 40 26 45 10 3 26 23 34 45 9 21 19 39 23 39 4 0 23 -16\r
        41 -35z m10570 15 c19 -11 55 -30 80 -43 25 -12 70 -39 100 -59 30 -19 79 -47\r
        107 -62 74 -37 141 -106 212 -215 67 -104 82 -147 131 -371 11 -52 25 -111 30\r
        -130 12 -47 11 -219 -3 -304 -10 -62 -13 -70 -41 -81 -38 -16 -55 -10 -62 24\r
        -6 26 -37 129 -76 251 -11 36 -31 88 -43 115 -13 28 -44 97 -70 155 -85 189\r
        -96 209 -144 262 -26 29 -57 66 -69 82 -27 35 -167 156 -181 156 -6 0 -23 12\r
        -40 28 -16 15 -54 47 -85 72 -57 46 -63 60 -46 104 7 20 17 26 52 29 89 8 114\r
        6 148 -13z m566 -1 c19 -11 34 -23 34 -26 0 -4 -62 30 -79 44 -16 12 18 -1 45\r
        -18z m-6746 -34 c120 -9 157 -20 198 -58 53 -51 44 -74 -69 -166 -33 -27 -64\r
        -41 -108 -51 -56 -12 -68 -11 -135 9 -50 14 -102 21 -159 21 -75 0 -91 3 -146\r
        32 -71 36 -72 41 -30 138 20 46 24 50 82 68 66 21 164 23 367 7z m5135 -3 c44\r
        -5 105 -19 135 -32 30 -12 98 -35 150 -51 105 -33 161 -62 204 -108 26 -27 30\r
        -38 30 -94 1 -58 -2 -69 -35 -116 -46 -65 -141 -115 -261 -137 -44 -9 -98 -22\r
        -120 -30 -22 -8 -52 -14 -65 -14 -14 0 -77 -22 -141 -49 -65 -27 -166 -69\r
        -227 -92 -60 -23 -183 -78 -273 -121 -168 -81 -217 -97 -289 -98 l-42 0 13 28\r
        c60 122 125 298 136 367 4 28 17 77 29 109 14 36 28 112 37 194 17 165 36 213\r
        92 231 20 6 55 16 77 21 47 10 434 5 550 -8z m-1027 -138 c20 -13 22 -22 22\r
        -109 0 -128 -41 -285 -110 -424 -47 -92 -68 -121 -197 -260 -79 -86 -152 -159\r
        -162 -163 -10 -3 -21 -13 -24 -21 -3 -9 -25 -24 -49 -35 -24 -10 -67 -39 -96\r
        -64 -29 -25 -79 -60 -110 -77 -31 -18 -91 -52 -132 -76 -41 -25 -95 -54 -120\r
        -65 -25 -11 -63 -30 -85 -41 -45 -23 -169 -61 -200 -60 -65 1 -78 16 -99 118\r
        -13 62 -13 78 5 173 10 58 19 120 19 137 0 32 14 66 105 258 57 120 217 321\r
        279 351 17 8 45 24 61 35 72 50 254 150 300 165 28 9 102 42 165 74 79 39 144\r
        63 210 78 150 34 172 34 218 6z m2975 -36 c15 -11 32 -29 39 -41 10 -19 7 -18\r
        -18 5 -16 15 -40 36 -54 48 -28 24 -10 17 33 -12z m-10223 -103 c28 -15 30\r
        -19 30 -74 0 -65 -32 -182 -55 -201 -7 -6 -19 -28 -25 -48 -25 -80 -34 -94\r
        -89 -131 -31 -21 -65 -48 -75 -60 -48 -53 -122 -82 -259 -102 -73 -11 -178\r
        -31 -234 -45 -84 -21 -108 -23 -140 -15 -21 6 -55 11 -75 11 -21 0 -38 2 -38\r
        5 0 26 49 89 97 125 32 24 74 56 93 71 20 14 58 38 86 52 28 14 71 42 97 61\r
        25 19 65 45 89 57 90 45 166 96 251 168 48 40 87 77 87 82 0 13 47 41 83 49\r
        46 11 45 11 77 -5z m10401 -27 c23 -18 44 -40 46 -48 3 -10 0 -9 -7 3 -6 10\r
        -33 31 -58 47 -26 16 -42 30 -35 30 6 0 31 -15 54 -32z m-8986 -67 c-3 -5 -27\r
        -17 -53 -27 -26 -9 -51 -22 -57 -29 -5 -6 -26 -21 -47 -33 -20 -12 -38 -28\r
        -41 -36 -3 -7 -41 -38 -84 -69 -44 -30 -93 -68 -110 -85 -30 -31 -92 -48 -143\r
        -40 -26 3 -55 40 -64 80 -5 22 -1 30 27 46 17 11 55 28 84 37 28 9 69 31 90\r
        49 28 24 56 36 103 45 36 7 92 26 125 42 45 22 74 29 118 29 33 0 56 -4 52 -9z\r
        m7813 -132 c31 -33 68 -67 82 -74 18 -9 30 -29 43 -70 9 -31 37 -85 61 -120\r
        25 -36 52 -89 62 -117 9 -29 29 -78 44 -108 15 -30 32 -77 39 -105 26 -107 29\r
        -122 42 -187 12 -66 12 -69 -11 -93 -13 -14 -30 -25 -38 -25 -8 0 -53 26 -100\r
        57 -173 115 -316 162 -549 180 l-73 6 -11 40 c-8 29 -8 47 0 64 6 13 11 31 11\r
        39 0 19 71 169 113 238 17 28 46 68 64 89 40 45 53 75 63 143 11 70 34 104 72\r
        104 24 0 42 -13 86 -61z m1046 -63 c45 -19 176 -127 198 -163 9 -15 53 -66 98\r
        -113 79 -82 121 -133 157 -194 10 -16 32 -48 50 -72 17 -23 39 -57 49 -76 9\r
        -18 24 -42 34 -53 9 -11 36 -56 60 -100 23 -44 53 -94 66 -112 13 -17 24 -36\r
        24 -41 0 -6 14 -43 31 -83 17 -41 41 -105 54 -144 13 -38 38 -108 55 -155 60\r
        -160 85 -245 110 -370 6 -30 15 -73 20 -95 4 -22 14 -67 20 -100 7 -33 21 -89\r
        30 -125 28 -101 30 -117 39 -240 5 -63 17 -196 26 -295 21 -221 11 -425 -31\r
        -632 -2 -13 -22 -34 -44 -48 -36 -23 -49 -25 -154 -25 -69 0 -126 5 -142 12\r
        -26 12 -76 103 -90 165 -11 49 -37 117 -59 153 -12 19 -28 52 -34 73 -7 21\r
        -23 44 -36 53 -12 8 -35 41 -49 72 -14 31 -46 82 -71 112 -25 30 -52 69 -61\r
        86 -22 45 -83 114 -100 114 -8 0 -14 3 -14 8 0 17 -154 177 -190 197 -23 12\r
        -140 130 -252 253 -25 28 -62 61 -81 72 -21 12 -38 32 -42 48 -13 55 -27 149\r
        -31 228 -5 80 -5 81 40 168 25 48 59 106 75 129 31 45 121 229 121 247 0 6 13\r
        36 28 68 43 85 56 210 55 502 -1 187 -5 260 -17 310 -20 84 -20 139 1 162 19\r
        22 16 21 57 4z m-6206 -24 c4 -23 -12 -27 -55 -16 -31 8 -29 20 5 32 36 13 46\r
        10 50 -16z m622 -10 c0 -4 13 -16 30 -25 41 -25 57 -81 40 -142 -8 -28 -18\r
        -45 -28 -45 -8 0 -23 -7 -33 -16 -16 -15 -19 -13 -39 28 -12 23 -29 50 -37 59\r
        -12 15 -10 25 19 82 30 59 48 81 48 59z m-1983 -33 l43 -21 -22 -41 c-20 -36\r
        -32 -45 -98 -70 -111 -42 -204 -70 -409 -121 -29 -8 -65 -22 -80 -33 -37 -27\r
        -165 -46 -213 -33 -42 12 -49 25 -19 35 11 3 26 17 35 30 23 35 101 82 253\r
        153 141 65 169 75 303 102 114 24 156 24 207 -1z m-1034 -3 c16 -12 17 -21 10\r
        -57 -7 -38 -17 -49 -93 -106 -47 -36 -103 -81 -125 -102 -49 -45 -106 -63\r
        -158 -51 -21 4 -39 10 -40 12 -2 1 -7 17 -14 35 -10 29 -8 37 17 76 22 35 49\r
        55 151 113 173 96 213 109 252 80z m-1125 -188 c28 -55 28 -58 -7 -58 -22 0\r
        -30 6 -35 25 -7 26 2 75 13 75 3 0 16 -19 29 -42z m8030 0 c35 -35 -18 -175\r
        -118 -316 -39 -55 -159 -168 -265 -250 -124 -95 -214 -185 -270 -267 -31 -46\r
        -84 -110 -118 -142 -74 -69 -127 -91 -178 -74 -49 16 -127 84 -174 150 -60 86\r
        -84 114 -111 131 -13 9 -40 35 -60 59 l-37 42 18 39 c28 62 246 235 385 305\r
        30 15 65 36 77 45 13 10 83 41 155 70 73 29 175 73 226 97 112 53 230 92 347\r
        117 43 8 112 5 123 -6z m-4914 -61 c-21 -12 -39 6 -30 29 6 16 8 15 27 -2 18\r
        -16 18 -19 3 -27z m2009 -32 c-1 -27 -9 -106 -18 -175 -9 -69 -20 -183 -25\r
        -255 -15 -210 -24 -242 -78 -264 -35 -15 -118 -17 -134 -3 -7 5 -33 15 -58 22\r
        -98 26 -125 35 -140 50 -9 9 -25 23 -37 31 -28 20 -80 107 -98 165 -19 64 -19\r
        145 1 186 21 43 95 100 180 139 38 17 123 57 189 89 147 71 142 69 185 67 l35\r
        -2 -2 -50z m-2373 0 c35 -32 45 -85 26 -142 -27 -81 -44 -93 -200 -138 -41\r
        -12 -88 -16 -165 -14 -58 1 -159 -2 -223 -6 -101 -7 -124 -6 -165 10 -51 19\r
        -103 51 -103 64 0 8 92 70 124 84 11 4 71 21 135 38 74 19 136 42 171 63 76\r
        46 174 66 308 61 53 -1 77 -7 92 -20z m-6650 -155 c0 -6 -10 -14 -22 -19 -13\r
        -5 -30 -18 -38 -30 -12 -18 -25 -21 -85 -21 -64 0 -76 3 -111 30 -21 16 -45\r
        30 -51 30 -7 0 -13 5 -13 10 0 6 60 10 160 10 103 0 160 -4 160 -10z m-2864\r
        -53 c28 -30 58 -162 58 -257 -1 -165 -13 -238 -50 -310 -49 -94 -157 -235\r
        -191 -249 -35 -14 -78 6 -139 66 -50 48 -115 191 -139 307 -15 73 -14 83 1\r
        130 9 28 30 79 48 114 26 54 40 69 91 100 33 19 77 50 98 68 21 18 55 37 75\r
        43 44 12 132 5 148 -12z m1792 -97 c82 -37 102 -57 102 -101 0 -23 -5 -39 -12\r
        -39 -6 0 -26 -12 -45 -26 -34 -25 -111 -72 -213 -127 -75 -41 -153 -91 -229\r
        -150 -36 -27 -74 -52 -85 -57 -37 -14 -124 -89 -167 -143 -23 -28 -54 -59 -70\r
        -67 -34 -18 -162 -133 -272 -244 -43 -43 -104 -94 -135 -113 -63 -38 -96 -40\r
        -182 -10 -25 9 -71 22 -102 28 -32 7 -58 16 -58 20 0 10 -73 49 -91 49 -7 0\r
        -21 7 -31 17 -14 13 -18 31 -18 88 0 66 3 75 39 131 22 32 61 82 88 109 52 54\r
        199 163 248 184 17 7 63 35 104 63 40 28 105 63 144 79 39 16 75 33 81 37 6 5\r
        34 17 61 27 28 10 55 22 61 27 44 34 355 149 467 173 40 8 101 26 137 39 79\r
        30 122 32 178 6z m4742 -45 c16 -19 -14 -70 -51 -85 -34 -15 -73 -4 -65 17 3\r
        8 6 26 6 39 0 39 83 61 110 29z m1437 -94 c48 -11 120 -24 158 -30 39 -6 99\r
        -15 134 -21 39 -6 81 -20 110 -39 25 -16 53 -31 61 -33 22 -7 -49 -35 -123\r
        -48 -34 -6 -106 -20 -161 -31 -145 -28 -310 -26 -400 6 -37 13 -76 31 -85 39\r
        -10 9 -23 16 -31 16 -16 0 -7 68 12 87 20 19 168 72 205 73 17 0 71 -9 120\r
        -19z m2751 -59 c50 -41 82 -113 82 -187 0 -60 -38 -262 -52 -282 -5 -6 -20\r
        -45 -33 -86 -13 -41 -35 -97 -49 -125 -14 -28 -26 -57 -26 -63 0 -7 -6 -20\r
        -14 -28 -7 -9 -28 -43 -46 -76 -18 -33 -43 -71 -55 -85 -12 -14 -35 -47 -50\r
        -73 -30 -52 -67 -77 -114 -77 -59 0 -121 58 -121 114 0 11 12 53 26 91 14 39\r
        30 82 34 98 5 15 29 59 55 97 91 137 172 348 189 490 8 66 33 172 52 217 l14\r
        33 38 -15 c20 -9 52 -28 70 -43z m-5695 6 c54 -38 76 -70 70 -98 -12 -52 -57\r
        -127 -112 -185 -31 -33 -73 -79 -93 -102 l-37 -42 -78 -2 -78 -2 2 67 c1 52 6\r
        73 21 89 11 12 27 37 37 55 9 19 40 60 70 92 29 32 61 70 70 84 14 21 74 63\r
        93 66 2 0 18 -10 35 -22z m5263 -23 c26 -63 14 -140 -44 -300 -50 -135 -161\r
        -345 -182 -345 -4 0 -23 6 -42 14 -48 21 -70 73 -154 376 -29 104 -30 132 -4\r
        185 35 72 124 103 293 104 l118 1 15 -35z m-5801 0 c25 -24 34 -65 15 -65 -5\r
        0 -16 -12 -24 -27 -8 -16 -50 -64 -93 -108 -98 -100 -136 -116 -214 -91 -74\r
        25 -134 54 -154 76 -15 17 -15 21 4 58 30 59 145 116 341 166 78 21 98 19 125\r
        -9z m-1532 -16 c94 -30 95 -31 99 -66 6 -54 -43 -110 -139 -157 -64 -31 -84\r
        -46 -110 -87 -21 -31 -48 -56 -75 -70 -24 -12 -61 -34 -83 -50 -22 -15 -65\r
        -37 -95 -49 -73 -27 -147 -70 -276 -158 -123 -85 -261 -163 -319 -182 -22 -7\r
        -65 -25 -95 -40 -30 -15 -77 -33 -105 -40 -27 -7 -61 -21 -75 -30 -74 -51\r
        -241 -110 -350 -124 -58 -8 -252 17 -302 39 -32 13 -23 74 16 115 19 19 53 62\r
        75 95 22 33 63 79 93 102 119 95 366 280 418 314 30 20 66 48 79 63 13 14 40\r
        31 59 37 20 7 70 34 111 62 41 28 111 64 155 80 45 16 86 34 93 39 15 12 59\r
        24 163 48 47 10 126 30 175 43 120 33 191 44 301 46 78 1 106 -4 187 -30z\r
        m12358 -10 c171 -55 298 -164 404 -344 26 -43 30 -60 30 -125 0 -124 -50 -194\r
        -220 -310 -91 -62 -349 -198 -435 -229 -19 -7 -57 -23 -85 -36 -87 -42 -217\r
        -96 -300 -126 -44 -16 -89 -33 -100 -38 -11 -6 -40 -15 -65 -21 -25 -7 -54\r
        -20 -65 -30 -26 -24 -81 -38 -180 -46 -72 -6 -83 -4 -107 15 -36 29 -54 129\r
        -39 221 6 36 11 97 11 136 0 107 44 329 74 373 30 44 144 161 297 302 162 150\r
        175 161 265 213 72 42 91 48 185 61 129 17 245 12 330 -16z m-5795 -36 c35\r
        -22 61 -62 67 -103 8 -51 65 -289 89 -375 6 -22 22 -58 34 -80 13 -22 35 -76\r
        49 -120 15 -44 31 -88 36 -97 20 -37 28 -112 16 -151 -11 -36 -70 -99 -237\r
        -254 -25 -23 -49 -46 -55 -52 -66 -67 -174 -130 -350 -200 -55 -21 -138 -57\r
        -185 -79 -171 -79 -411 -115 -780 -115 -176 0 -243 7 -400 45 -103 24 -127 39\r
        -146 85 -20 47 -11 99 33 182 58 109 74 166 83 299 5 68 15 150 21 182 8 44 9\r
        91 0 185 -17 193 -15 225 14 266 24 32 31 35 113 46 48 6 129 12 180 12 85 1\r
        147 11 462 72 30 6 89 22 130 36 74 24 95 30 255 73 44 12 154 51 245 87 91\r
        36 179 70 195 74 40 10 101 2 131 -18z m-10264 -170 c31 -34 48 -65 48 -90 0\r
        -37 102 -218 159 -283 32 -36 66 -80 76 -97 11 -18 22 -33 26 -33 16 0 49 -74\r
        49 -110 0 -51 -27 -95 -93 -152 -30 -26 -60 -61 -67 -78 -10 -25 -17 -30 -34\r
        -26 -12 3 -26 6 -33 6 -6 0 -33 27 -60 61 -26 34 -63 79 -80 101 -18 22 -37\r
        57 -43 79 -6 22 -19 54 -29 72 -11 17 -22 57 -26 87 -4 30 -19 91 -32 135 -30\r
        93 -30 107 -7 223 21 111 28 119 110 131 5 0 22 -11 36 -26z m13991 -24 c49\r
        -25 206 -175 248 -237 36 -54 39 -105 6 -126 -12 -9 -42 -22 -65 -30 -24 -9\r
        -55 -24 -70 -34 -15 -11 -55 -30 -89 -42 -52 -19 -76 -22 -140 -18 -91 6 -138\r
        26 -210 86 -64 54 -76 99 -41 161 35 61 187 214 238 239 56 27 70 27 123 1z\r
        m-6211 -42 c13 -26 14 -44 7 -83 -8 -44 -81 -202 -130 -280 -12 -20 -24 -70\r
        -33 -145 -32 -255 -34 -322 -11 -450 17 -102 90 -225 194 -329 42 -41 85 -88\r
        98 -104 22 -29 22 -29 3 -65 -29 -56 -138 -161 -260 -252 l-112 -82 -68 0\r
        c-67 0 -68 1 -136 55 -108 86 -210 191 -238 244 -15 27 -35 63 -44 79 -61 101\r
        -90 251 -73 365 6 38 11 95 11 127 0 32 6 90 14 128 15 76 14 75 56 185 16 41\r
        35 104 42 139 9 43 24 79 48 112 19 26 56 79 82 117 58 85 132 137 238 168\r
        102 30 161 54 185 75 21 18 45 26 86 28 19 1 29 -7 41 -32z m4101 -69 c52 -71\r
        24 -187 -50 -207 -53 -15 -58 -14 -71 14 -27 59 -6 152 47 207 19 21 38 35 41\r
        30 3 -4 18 -24 33 -44z m-3671 -35 c36 -22 50 -53 73 -163 24 -115 29 -185 17\r
        -245 -6 -27 -16 -97 -23 -155 -8 -73 -20 -124 -40 -168 -16 -35 -33 -91 -39\r
        -125 -15 -80 -28 -114 -59 -156 -23 -30 -29 -33 -64 -28 -56 8 -98 53 -153\r
        166 -57 119 -74 171 -74 238 0 65 33 192 66 255 14 26 33 78 43 115 26 97 73\r
        193 112 229 63 58 91 65 141 37z m-1362 -280 c0 -50 -5 -82 -14 -92 -7 -9 -21\r
        -43 -31 -76 -9 -33 -22 -71 -27 -85 -62 -149 -82 -346 -52 -530 38 -241 38\r
        -241 78 -315 94 -176 120 -212 207 -291 112 -101 131 -127 127 -175 -3 -42 -3\r
        -43 -90 -88 -47 -26 -95 -55 -106 -64 -21 -19 -110 -47 -150 -47 -12 0 -84\r
        -21 -158 -46 -151 -51 -313 -84 -415 -84 -104 0 -121 31 -74 132 26 56 36 73\r
        72 124 12 17 51 83 86 145 35 63 71 126 80 139 19 29 60 159 78 245 17 83 17\r
        304 0 390 -8 39 -27 102 -42 142 -16 39 -29 86 -29 104 0 34 80 220 110 254\r
        10 11 25 35 34 53 22 44 162 185 204 206 17 9 32 21 32 26 0 6 18 10 40 10\r
        l40 0 0 -77z m5166 -184 c10 -16 -15 -29 -58 -29 -42 0 -50 16 -15 30 31 12\r
        65 12 73 -1z m2443 -18 c27 -15 46 -36 70 -81 44 -83 52 -108 66 -230 11 -95\r
        10 -109 -6 -147 -13 -31 -29 -48 -59 -63 -63 -32 -100 -20 -156 48 -25 30 -52\r
        71 -60 91 -8 20 -46 68 -84 106 -62 63 -70 75 -72 112 -2 61 28 106 77 116 22\r
        5 72 21 110 37 39 15 71 28 73 29 1 0 20 -8 41 -18z m-15072 -98 c9 -37 22\r
        -75 30 -84 7 -8 13 -23 13 -33 0 -15 -6 -16 -32 -11 -45 10 -52 17 -93 91 -42\r
        77 -40 109 9 129 27 12 32 11 44 -6 7 -10 20 -49 29 -86z m1661 -141 l64 -37\r
        -7 -40 c-4 -29 -16 -49 -43 -72 -34 -30 -42 -32 -112 -33 -100 0 -139 19 -162\r
        80 -22 57 -23 133 -2 164 l15 24 92 -24 c50 -14 120 -42 155 -62z m4764 30\r
        c30 -16 73 -36 96 -45 36 -14 41 -21 52 -67 16 -66 7 -121 -34 -207 -19 -38\r
        -37 -80 -41 -94 -4 -13 -31 -78 -59 -144 -29 -66 -58 -140 -65 -165 -22 -75\r
        -70 -209 -87 -241 -21 -42 -44 -118 -44 -151 0 -15 -4 -30 -10 -33 -5 -3 -10\r
        -15 -10 -26 0 -15 -7 -19 -34 -19 -42 0 -62 19 -76 68 -58 216 -63 256 -55\r
        511 6 209 8 229 35 310 15 47 33 110 39 139 18 87 57 148 116 180 38 22 117\r
        14 177 -16z m7997 -16 c8 -13 21 -28 30 -32 42 -21 191 -209 191 -241 0 -66\r
        -109 -86 -198 -36 -55 30 -87 78 -108 157 -14 53 -19 158 -7 169 3 4 23 7 43\r
        7 28 0 39 -5 49 -24z m-8916 -39 c15 -6 17 -13 11 -44 -8 -45 -11 -50 -46 -58\r
        -23 -6 -33 -1 -58 27 -40 43 -49 77 -24 92 37 21 59 23 79 6 11 -9 28 -20 38\r
        -23z m7062 -48 c81 -22 115 -76 115 -181 0 -74 -11 -104 -50 -136 -28 -23\r
        -108 2 -296 93 -39 19 -76 35 -82 35 -15 0 -15 45 -1 73 24 44 62 82 93 90 17\r
        5 63 14 101 22 39 7 72 13 75 14 3 0 23 -4 45 -10z m4582 -15 c32 -25 34 -29\r
        30 -73 -6 -71 -42 -155 -95 -222 -26 -33 -59 -77 -74 -97 -63 -87 -82 -107\r
        -203 -215 -68 -61 -177 -119 -193 -102 -4 3 -7 44 -7 89 0 74 3 89 37 157 37\r
        74 143 204 274 334 33 33 69 73 79 89 17 25 83 65 109 66 5 0 25 -12 43 -26z\r
        m-5688 -22 c42 -60 39 -72 -41 -161 -66 -75 -178 -169 -235 -200 -20 -10 -86\r
        -63 -139 -111 -11 -10 -38 -27 -60 -37 -59 -26 -125 -72 -161 -109 -18 -19\r
        -41 -34 -53 -34 -18 0 -132 -48 -205 -87 -16 -9 -50 -26 -75 -39 -25 -12 -60\r
        -34 -79 -48 -19 -14 -45 -26 -58 -26 -13 0 -38 -7 -55 -16 -17 -9 -54 -23 -82\r
        -31 -28 -8 -74 -30 -102 -50 -28 -19 -69 -39 -90 -44 -22 -6 -55 -14 -74 -19\r
        -19 -5 -69 -18 -110 -30 -166 -48 -247 -65 -380 -79 -315 -33 -335 -34 -388\r
        -22 -29 6 -99 11 -154 11 -112 0 -192 12 -283 42 -33 11 -79 25 -102 31 -35 9\r
        -44 17 -57 50 l-15 38 72 74 c40 40 81 84 93 97 11 12 57 55 102 95 107 94\r
        134 102 250 78 130 -26 188 -35 282 -44 47 -4 111 -15 142 -25 61 -18 140 -18\r
        478 2 146 8 323 38 470 79 30 8 66 17 80 20 34 8 220 91 240 107 8 7 38 23 65\r
        36 28 12 73 37 100 55 28 18 72 45 98 60 27 15 72 51 100 79 52 50 123 109\r
        212 176 26 19 60 46 75 60 60 56 109 63 139 22z m1627 14 c51 -13 168 -84 212\r
        -128 22 -21 23 -28 18 -103 -15 -215 -17 -314 -6 -386 13 -93 71 -244 108\r
        -281 15 -15 41 -46 57 -69 17 -22 46 -58 66 -78 40 -42 56 -78 41 -93 -6 -6\r
        -17 0 -30 19 -15 21 -35 33 -74 42 -47 12 -64 25 -148 110 -53 53 -121 135\r
        -152 182 -32 47 -65 92 -74 100 -23 19 -44 71 -44 109 0 17 -4 38 -10 48 -21\r
        38 -103 280 -112 332 -17 96 -20 140 -14 166 11 43 71 54 162 30z m-13366 -44\r
        c26 -13 43 -33 67 -82 37 -74 41 -113 14 -136 -36 -31 -76 -72 -99 -103 -13\r
        -17 -45 -45 -70 -63 -26 -17 -58 -42 -72 -55 -14 -14 -41 -35 -62 -48 l-36\r
        -23 -12 28 c-13 33 -1 86 31 130 10 14 25 54 34 90 9 36 28 85 42 110 36 62\r
        113 170 121 170 4 -1 23 -9 42 -18z m5288 -68 c29 -8 60 -14 69 -14 8 0 32\r
        -15 53 -32 20 -18 53 -45 73 -60 33 -26 108 -129 139 -193 20 -40 36 -107 43\r
        -180 4 -48 1 -67 -14 -95 -25 -45 -36 -67 -86 -176 -23 -50 -65 -120 -92 -155\r
        -27 -35 -66 -91 -86 -124 -20 -33 -82 -112 -137 -175 -56 -63 -111 -130 -122\r
        -147 -11 -18 -25 -33 -31 -33 -7 0 -24 -7 -40 -15 -26 -13 -29 -13 -67 27 -22\r
        23 -43 51 -46 62 -18 58 -221 336 -245 336 -5 0 -39 28 -76 63 -38 35 -84 72\r
        -103 83 -19 10 -54 35 -77 54 -23 19 -104 66 -180 105 -76 38 -159 84 -185\r
        101 -26 18 -53 34 -60 37 -10 4 -11 7 0 18 6 7 12 22 12 34 0 22 117 89 289\r
        165 52 23 106 49 120 59 14 10 45 25 67 34 23 9 63 29 89 46 26 17 80 42 119\r
        57 39 15 96 39 126 55 156 81 300 101 448 63z m11443 -30 c16 -14 15 -18 -10\r
        -60 -14 -25 -30 -53 -36 -63 -21 -35 -51 -68 -80 -86 -16 -10 -53 -39 -81 -64\r
        -74 -67 -129 -110 -203 -159 -36 -25 -82 -57 -101 -72 -19 -15 -57 -40 -85\r
        -55 -27 -16 -72 -41 -100 -57 -70 -39 -108 -37 -148 8 -59 67 -82 176 -55 268\r
        12 43 34 76 51 76 5 0 36 14 69 30 32 17 67 30 78 30 10 0 29 4 42 9 13 5 43\r
        14 68 21 25 7 72 24 104 37 32 14 91 33 130 43 76 19 118 33 236 79 89 35 98\r
        36 121 15z m1106 4 c63 -28 310 -267 400 -388 56 -74 79 -134 69 -175 -4 -16\r
        -19 -24 -68 -34 -112 -23 -152 -40 -228 -97 -148 -112 -220 -201 -264 -330\r
        -13 -38 -28 -82 -34 -99 -28 -80 -32 -141 -32 -442 0 -300 -1 -319 -21 -359\r
        -11 -24 -28 -45 -37 -48 -34 -11 -240 -8 -377 4 l-140 12 -52 45 c-61 51 -139\r
        151 -160 202 -7 20 -21 48 -29 64 -8 15 -19 49 -23 75 -9 47 -25 131 -62 312\r
        -35 172 -24 240 53 320 36 38 114 95 163 120 41 20 118 75 134 94 7 9 37 30\r
        66 46 30 17 62 45 74 65 11 19 37 45 59 58 49 32 152 135 191 192 16 24 55 92\r
        87 152 31 59 68 120 80 135 12 16 25 36 28 46 4 11 23 23 44 29 51 14 48 14\r
        79 1z m-15172 -142 l40 -13 -27 -11 c-15 -6 -33 -21 -40 -32 -19 -31 -113 -92\r
        -199 -131 -63 -28 -88 -34 -164 -37 l-90 -3 -28 40 c-27 39 -27 42 -12 70 18\r
        36 32 44 105 61 30 7 78 20 105 28 134 42 238 51 310 28z m11636 -63 c35 -17\r
        39 -21 39 -58 0 -47 -14 -65 -50 -65 -31 0 -50 17 -50 45 0 11 -7 32 -14 47\r
        -13 25 -13 29 2 38 23 13 30 12 73 -7z m-7217 -48 c37 -34 35 -100 -5 -219\r
        -41 -118 -101 -225 -214 -377 l-40 -53 -3 98 c-2 83 0 103 17 132 11 19 39 89\r
        62 156 23 68 46 132 51 143 18 34 93 144 99 145 3 0 18 -11 33 -25z m-5953 -5\r
        c62 -19 160 -82 206 -131 12 -13 30 -42 39 -64 37 -89 45 -137 47 -283 l2\r
        -148 -35 -60 c-20 -32 -44 -77 -55 -98 -11 -21 -67 -90 -125 -152 -58 -62\r
        -134 -145 -170 -185 -36 -40 -90 -100 -121 -134 -31 -33 -75 -87 -98 -120 -72\r
        -103 -189 -215 -289 -277 -51 -32 -96 -58 -100 -58 -4 0 -38 -16 -77 -34 -38\r
        -19 -118 -47 -176 -63 -102 -26 -109 -27 -185 -14 -44 7 -90 19 -104 26 -36\r
        19 -163 154 -194 207 -14 24 -32 75 -41 113 -9 38 -20 77 -26 86 -18 34 -51\r
        235 -50 304 2 130 23 209 95 352 36 73 66 136 66 141 0 4 46 53 103 109 56 55\r
        131 133 166 172 61 70 100 101 185 149 23 13 57 37 76 55 69 64 91 74 173 79\r
        74 5 77 4 77 -17 0 -36 30 -112 52 -131 15 -15 35 -19 83 -18 53 1 70 6 111\r
        34 27 18 73 59 102 90 80 89 147 106 263 70z m11325 -4 c23 -8 82 -35 132 -59\r
        50 -25 115 -53 144 -62 29 -10 77 -28 107 -42 30 -13 82 -31 115 -40 112 -28\r
        112 -29 233 -213 41 -63 88 -130 104 -148 16 -18 29 -36 29 -40 0 -4 49 -56\r
        108 -117 105 -108 248 -227 307 -258 17 -8 39 -25 50 -37 11 -13 33 -31 49\r
        -40 l28 -18 -23 -12 c-13 -7 -35 -23 -49 -36 -21 -20 -40 -24 -125 -31 -152\r
        -11 -394 -9 -445 4 -112 29 -171 42 -253 57 -80 14 -206 56 -233 77 -32 26\r
        -94 193 -94 257 0 35 -19 88 -69 197 -36 76 -53 99 -148 194 -60 59 -119 113\r
        -131 120 -36 19 -53 75 -50 161 3 75 3 75 38 93 39 20 105 18 176 -7z m-548\r
        -34 c6 -9 12 -31 12 -49 0 -28 -6 -35 -40 -53 -50 -26 -52 -25 -73 9 -14 24\r
        -15 34 -5 62 6 19 15 40 21 47 13 16 67 6 85 -16z m1980 12 c22 -4 44 -23 74\r
        -62 24 -30 59 -74 79 -96 47 -53 81 -109 104 -171 10 -27 26 -62 36 -76 13\r
        -19 17 -36 12 -61 -4 -30 -10 -37 -34 -42 -59 -12 -85 3 -181 103 -88 90 -95\r
        100 -115 171 -12 41 -25 90 -28 109 -6 40 4 131 15 131 4 0 21 -3 38 -6z\r
        m1176 -64 c46 -10 116 -74 116 -106 0 -13 5 -26 11 -30 11 -7 7 -157 -7 -264\r
        -9 -67 -67 -120 -131 -120 -31 0 -173 67 -207 98 -11 11 -58 39 -103 62 -122\r
        64 -137 84 -141 178 -4 74 -2 79 30 126 47 69 76 77 253 70 77 -3 157 -9 179\r
        -14z m-8982 -160 c21 -269 37 -388 61 -441 8 -19 18 -46 21 -61 4 -15 20 -43\r
        36 -62 17 -18 37 -51 46 -71 8 -21 38 -69 65 -108 43 -62 49 -76 49 -122 0\r
        -41 -6 -60 -28 -91 -16 -21 -37 -46 -47 -54 -10 -8 -28 -32 -42 -52 -31 -50\r
        -173 -185 -220 -210 -21 -11 -49 -30 -63 -43 -21 -19 -171 -124 -229 -160 -8\r
        -5 -34 -22 -56 -36 -22 -14 -54 -31 -71 -38 -18 -7 -44 -26 -60 -42 -15 -16\r
        -35 -29 -44 -29 -26 0 -221 -69 -257 -91 -64 -40 -206 -69 -242 -50 -32 18\r
        -25 32 40 81 64 49 115 92 211 183 34 31 65 57 70 57 11 0 228 221 228 232 0\r
        4 30 40 66 80 45 50 81 104 114 171 27 53 58 110 70 126 21 30 68 151 100 256\r
        23 77 54 281 55 365 1 79 24 234 41 275 10 25 18 30 46 30 l33 0 7 -95z\r
        m10436 -116 c71 -35 40 -153 -52 -201 -124 -64 -267 -83 -266 -34 1 22 58 85\r
        96 104 18 9 56 38 85 64 42 38 85 72 105 82 0 1 15 -6 32 -15z m-4661 -56 c56\r
        -10 69 -17 106 -57 27 -29 55 -76 76 -126 50 -120 96 -208 121 -230 13 -11 34\r
        -38 48 -60 14 -22 47 -62 73 -90 61 -65 79 -108 79 -189 0 -92 -19 -155 -94\r
        -310 -36 -74 -66 -138 -66 -142 0 -4 -16 -26 -35 -50 -20 -24 -47 -69 -61\r
        -101 -14 -32 -32 -72 -40 -89 -8 -18 -38 -64 -68 -102 -30 -39 -62 -84 -70\r
        -99 -8 -15 -74 -91 -146 -168 -72 -77 -136 -149 -142 -161 -6 -13 -37 -32 -81\r
        -49 -74 -29 -74 -29 -227 -5 -36 5 -96 14 -135 20 -162 22 -223 43 -375 126\r
        -52 28 -168 143 -192 189 -11 22 -26 47 -32 55 -24 29 -36 123 -36 273 0 162\r
        10 229 54 355 14 41 26 82 26 91 0 9 11 32 25 51 30 41 80 143 111 228 13 35\r
        30 72 37 81 8 9 38 61 65 116 50 100 72 126 147 180 22 16 53 43 68 62 34 40\r
        151 117 221 145 143 58 185 66 335 67 79 1 172 -4 208 -11z m-8097 -29 c30\r
        -11 75 -27 100 -35 75 -24 385 -182 471 -240 45 -30 90 -66 101 -79 11 -14 34\r
        -33 51 -41 30 -16 76 -61 77 -76 0 -4 29 -47 64 -95 103 -144 139 -230 139\r
        -335 l0 -67 -52 -54 c-29 -30 -59 -63 -66 -75 -8 -11 -48 -45 -88 -75 -40 -30\r
        -79 -62 -86 -71 -8 -9 -29 -16 -48 -16 -44 0 -82 43 -145 162 -26 50 -53 97\r
        -61 106 -7 10 -33 53 -56 97 -23 43 -63 106 -89 139 -49 63 -60 74 -337 345\r
        -93 91 -175 175 -181 185 -15 26 1 94 30 126 13 14 32 40 42 58 10 19 33 40\r
        49 47 17 7 30 14 30 14 0 1 25 -8 55 -20z m-460 -16 c0 -10 -4 -24 -9 -32 -7\r
        -11 -10 -9 -16 8 -3 11 -12 21 -18 21 -16 0 14 20 31 20 6 0 12 -8 12 -17z\r
        m15030 -160 c85 -58 119 -99 182 -220 21 -41 -6 -91 -93 -173 -44 -41 -104\r
        -100 -132 -130 -223 -236 -263 -273 -304 -277 -38 -3 -42 -1 -56 30 -26 55\r
        -30 111 -17 245 9 92 20 148 40 202 16 41 36 99 45 128 19 61 117 174 169 197\r
        45 20 136 19 166 -2z m-15314 -149 c100 -36 119 -65 111 -169 -10 -134 -50\r
        -172 -171 -161 -39 4 -122 9 -183 12 l-113 6 0 48 c0 35 5 52 21 66 12 10 39\r
        56 60 101 22 45 44 85 51 89 6 4 41 13 77 19 36 7 68 13 69 14 2 0 37 -11 78\r
        -25z m7543 -58 c14 -17 6 -112 -10 -122 -5 -3 -9 -14 -9 -25 0 -11 -13 -39\r
        -28 -62 -16 -23 -34 -62 -41 -87 -8 -25 -21 -63 -31 -85 -21 -50 -34 -93 -50\r
        -170 -7 -33 -20 -89 -30 -125 -57 -205 -62 -334 -22 -525 11 -53 77 -199 116\r
        -255 39 -58 97 -120 111 -120 6 0 27 -16 46 -36 32 -34 50 -48 139 -107 41\r
        -28 168 -71 260 -89 54 -10 71 -19 103 -51 20 -21 37 -41 37 -45 0 -34 -176\r
        -144 -306 -193 -30 -12 -88 -43 -127 -70 -40 -27 -79 -49 -87 -49 -9 0 -40\r
        -16 -70 -35 -30 -19 -64 -38 -75 -41 -22 -6 -90 -34 -175 -72 -87 -38 -120\r
        -50 -200 -67 -41 -9 -90 -26 -108 -37 -49 -30 -152 -57 -422 -110 -72 -14\r
        -381 -17 -445 -4 -62 12 -225 95 -236 120 -5 11 -18 32 -28 46 -11 14 -23 41\r
        -26 60 -9 49 35 111 144 205 162 139 183 160 214 205 17 25 62 79 101 120 63\r
        67 239 316 279 395 8 17 27 41 41 55 28 25 223 415 244 485 85 291 115 525 81\r
        640 -2 6 0 28 4 50 10 57 66 91 217 131 30 8 70 24 88 35 18 10 45 19 60 19\r
        15 1 65 11 112 24 86 24 104 22 129 -8z m-8190 18 c66 -14 50 -77 -50 -187\r
        -31 -34 -65 -80 -77 -102 -34 -67 -57 -85 -93 -75 -42 12 -109 74 -141 132\r
        -39 71 -28 102 55 151 71 41 196 86 243 87 17 0 46 -3 63 -6z m6176 -52 c78\r
        -35 99 -40 238 -62 38 -5 81 -17 97 -25 16 -8 42 -15 57 -16 41 -1 134 -22\r
        160 -37 13 -7 29 -25 38 -41 14 -28 13 -29 -30 -67 -25 -22 -66 -55 -91 -74\r
        -65 -49 -116 -101 -134 -136 -8 -16 -55 -71 -105 -122 -49 -51 -101 -114 -114\r
        -140 -13 -26 -35 -60 -48 -76 -43 -52 -93 -166 -93 -215 0 -14 -4 -38 -10 -55\r
        -35 -113 -82 -471 -84 -641 0 -51 15 -210 34 -365 6 -47 8 -101 5 -120 -11\r
        -60 -29 -110 -40 -110 -6 0 -36 -22 -66 -48 -29 -27 -85 -66 -124 -86 -38 -21\r
        -84 -47 -102 -58 -43 -25 -246 -98 -308 -110 -179 -33 -383 -12 -475 50 -19\r
        13 -50 31 -69 40 -47 22 -320 281 -321 304 0 3 -11 20 -25 36 -14 16 -38 57\r
        -55 90 -16 34 -34 63 -39 66 -11 7 -85 158 -96 196 -4 14 -11 30 -15 35 -14\r
        20 -49 121 -60 175 -7 30 -20 84 -30 120 -28 99 -57 291 -52 334 1 10 -5 77\r
        -13 148 -20 172 -19 245 5 369 25 131 36 164 71 215 56 82 132 105 307 94 63\r
        -4 132 -3 155 1 23 4 72 8 109 9 66 0 117 8 233 37 33 8 76 18 95 23 41 9 318\r
        104 440 150 47 18 104 40 127 48 24 8 66 30 95 48 29 19 62 34 73 34 12 0 25\r
        4 31 9 11 11 87 19 124 13 14 -2 61 -20 105 -40z m7923 4 c33 -17 63 -97 82\r
        -216 7 -41 16 -88 20 -105 5 -16 14 -76 21 -132 11 -95 11 -104 -6 -123 -14\r
        -16 -26 -19 -55 -14 -29 5 -58 28 -155 122 -163 159 -235 258 -235 323 0 59\r
        67 109 190 140 82 22 104 22 138 5z m2628 -162 c19 -19 34 -41 34 -48 0 -33\r
        -63 -181 -89 -211 -16 -19 -33 -40 -38 -47 -11 -17 -73 -49 -83 -43 -8 5 -30\r
        71 -50 150 -6 28 -15 57 -18 65 -3 8 -7 32 -8 52 -2 32 3 41 32 63 43 33 98\r
        53 148 54 32 1 45 -5 72 -35z m-15555 -14 c41 -28 112 -96 257 -247 33 -34 74\r
        -85 91 -115 18 -29 49 -74 69 -100 34 -44 106 -176 140 -258 8 -19 20 -47 28\r
        -62 13 -27 12 -28 -27 -38 l-40 -11 -47 53 c-26 29 -63 69 -82 90 -85 91 -100\r
        108 -100 118 0 32 -256 263 -392 355 -62 41 -91 118 -69 178 28 72 98 87 172\r
        37z m6112 -85 c53 -22 70 -64 64 -162 -5 -92 -16 -141 -45 -204 -11 -25 -29\r
        -77 -38 -115 -9 -38 -36 -107 -59 -154 -23 -47 -46 -96 -50 -110 -8 -27 -41\r
        -103 -83 -190 -14 -30 -44 -80 -67 -110 -23 -30 -54 -77 -69 -105 -16 -27 -43\r
        -66 -61 -85 -35 -38 -105 -143 -105 -158 0 -6 -17 -25 -37 -42 -113 -98 -217\r
        -198 -229 -223 -22 -41 -71 -67 -126 -67 -74 0 -82 19 -87 205 -4 186 14 357\r
        56 525 9 36 18 83 21 105 2 23 16 57 32 80 30 42 92 162 133 255 31 73 258\r
        319 321 348 23 11 48 27 55 36 21 26 211 139 270 163 70 26 62 26 104 8z\r
        m4778 -55 c23 -13 24 -29 2 -75 l-17 -36 -76 3 c-62 3 -75 6 -75 20 0 9 -4 20\r
        -8 24 -17 18 -3 34 46 53 59 22 99 26 128 11z m5006 -22 c42 -18 113 -85 161\r
        -152 23 -33 42 -64 42 -69 0 -5 29 -68 65 -141 56 -111 68 -146 81 -226 24\r
        -149 23 -252 -4 -335 -38 -118 -70 -169 -161 -258 -71 -69 -100 -89 -166 -118\r
        -77 -33 -84 -34 -205 -34 -205 1 -224 23 -251 295 -6 58 -13 150 -17 205 -4\r
        55 -11 105 -15 112 -12 19 15 104 53 164 37 60 109 159 173 237 42 52 60 89\r
        71 143 3 21 13 42 21 49 8 7 15 19 15 27 0 12 94 113 105 113 2 0 17 -5 32\r
        -12z m-6737 -101 c60 -22 193 -90 226 -114 43 -32 83 -43 184 -54 127 -13 170\r
        -22 225 -52 28 -14 62 -29 78 -32 27 -5 27 -6 10 -33 -9 -15 -34 -45 -54 -68\r
        -20 -23 -42 -51 -48 -63 -7 -11 -26 -27 -44 -35 -53 -22 -190 -131 -227 -180\r
        -21 -28 -53 -54 -80 -66 -24 -12 -52 -28 -62 -37 -47 -43 -205 -128 -403 -218\r
        -33 -14 -73 -33 -90 -41 -116 -53 -277 -90 -341 -78 -43 8 -56 44 -27 77 10\r
        12 31 40 46 62 15 22 43 60 62 85 47 61 85 118 85 128 0 5 19 34 43 65 112\r
        148 164 251 240 466 51 147 65 172 107 187 19 7 35 13 35 13 0 0 16 -5 35 -12z\r
        m-9753 -77 c28 -16 54 -33 57 -38 14 -23 36 -165 36 -233 0 -63 7 -96 44 -202\r
        46 -134 77 -181 167 -252 21 -16 64 -58 95 -93 l57 -63 -24 -25 c-52 -56 -84\r
        -64 -271 -66 -155 -1 -181 1 -248 21 -168 51 -230 73 -235 82 -4 5 -30 20 -60\r
        34 -36 16 -88 57 -156 122 -55 54 -116 106 -134 115 -26 14 -38 31 -54 73 -27\r
        72 -27 131 1 214 29 87 60 136 134 214 56 58 68 65 155 94 87 29 104 32 239\r
        32 143 1 146 0 197 -29z m-1307 -49 c0 -28 -4 -53 -10 -56 -5 -3 -24 2 -42 11\r
        -58 30 -63 53 -15 77 57 28 67 23 67 -32z m1769 -122 c107 -51 325 -319 377\r
        -463 16 -45 8 -61 -42 -82 -28 -12 -37 -11 -75 8 -54 26 -237 166 -274 210\r
        -15 18 -33 46 -40 63 -8 16 -21 47 -29 67 -22 49 -33 115 -28 159 3 27 10 38\r
        30 46 37 15 34 15 81 -8z m15256 -39 c22 -101 -42 -217 -146 -263 -31 -14 -68\r
        -37 -82 -51 -14 -14 -32 -26 -40 -26 -19 0 -72 -27 -87 -45 -16 -19 -108 -21\r
        -116 -2 -2 7 -6 26 -7 43 -2 25 6 34 65 74 37 25 77 54 90 65 13 11 40 29 62\r
        40 21 11 42 28 46 40 4 11 31 35 59 53 28 19 51 38 51 43 0 5 8 9 18 9 10 0\r
        29 11 42 25 30 32 37 32 45 -5z m-19068 -308 c13 -7 23 -25 27 -50 5 -36 11\r
        -42 55 -61 27 -11 55 -21 61 -21 6 0 28 -9 50 -20 26 -13 59 -20 98 -20 32 0\r
        78 -6 103 -14 24 -8 65 -17 91 -21 36 -5 53 -13 73 -36 14 -17 25 -34 25 -38\r
        0 -4 -13 -20 -29 -35 -16 -15 -44 -51 -63 -79 -19 -29 -61 -92 -94 -140 -32\r
        -49 -73 -114 -89 -145 -79 -148 -87 -159 -125 -167 -35 -8 -103 32 -124 72 -8\r
        16 -23 37 -35 47 -12 11 -21 23 -21 27 0 4 -16 34 -35 66 -19 33 -42 85 -50\r
        116 -8 31 -22 83 -31 115 -22 80 -43 216 -44 284 0 38 -6 68 -20 90 -23 40\r
        -15 96 21 134 l22 24 57 -59 c31 -32 65 -63 77 -69z m2053 72 c15 -40 12 -89\r
        -7 -107 -32 -27 -105 -32 -157 -9 -25 12 -46 23 -46 25 0 10 107 83 145 98 54\r
        23 54 23 65 -7z m16013 -168 c18 -12 41 -38 52 -58 21 -40 23 -27 -24 -183\r
        -37 -122 -80 -134 -176 -47 -35 31 -90 80 -123 109 -72 64 -93 116 -65 160 10\r
        16 22 31 28 35 5 4 70 7 143 6 118 -1 137 -3 165 -22z m1066 -103 c38 -97 46\r
        -344 15 -448 l-19 -60 -80 -39 c-122 -59 -262 -106 -320 -106 -80 0 -313 98\r
        -361 151 -33 38 -44 84 -44 194 0 173 24 194 222 195 84 0 147 5 185 16 32 9\r
        73 20 92 24 18 5 57 24 85 44 68 47 91 55 157 55 53 1 57 -1 68 -26z m-17404\r
        -136 c31 -17 41 -31 48 -61 8 -31 7 -40 -6 -48 -9 -4 -35 -35 -57 -68 -45 -63\r
        -87 -90 -143 -90 -40 0 -47 11 -47 73 0 117 67 209 155 216 6 0 28 -9 50 -22z\r
        m566 -172 c46 -19 101 -38 122 -41 21 -4 42 -15 48 -25 5 -10 31 -33 57 -50\r
        53 -35 75 -56 247 -222 105 -102 126 -128 173 -214 28 -54 58 -109 66 -123 8\r
        -14 20 -40 27 -59 7 -18 23 -46 35 -61 25 -29 54 -102 54 -137 0 -12 9 -42 20\r
        -68 27 -64 29 -218 3 -213 -10 2 -24 22 -33 45 -16 42 -67 98 -101 108 -10 4\r
        -28 27 -41 51 -23 47 -139 164 -162 164 -7 0 -21 10 -32 21 -23 27 -162 92\r
        -264 126 -104 34 -251 49 -332 33 -35 -6 -112 -21 -173 -32 -60 -11 -123 -22\r
        -138 -25 -27 -5 -113 -35 -297 -101 -104 -38 -110 -38 -140 -7 -19 20 -25 40\r
        -28 88 -4 54 0 70 27 123 17 34 31 66 31 70 0 5 28 30 62 54 34 25 81 59 104\r
        76 23 18 52 38 65 45 44 22 224 200 279 274 50 67 117 129 148 137 41 10 80 1\r
        173 -37z m-1081 -90 c19 -23 13 -135 -10 -191 -48 -111 -108 -164 -189 -164\r
        -30 0 -44 6 -55 22 -33 46 -13 139 41 196 16 16 49 54 75 85 27 30 58 58 70\r
        60 44 8 56 7 68 -8z m3095 -14 c36 -21 43 -54 37 -156 -8 -142 -75 -322 -200\r
        -540 -69 -120 -244 -312 -332 -365 -23 -14 -58 -38 -77 -54 -19 -16 -68 -46\r
        -108 -66 -71 -35 -74 -36 -105 -20 -42 22 -71 83 -98 210 -37 168 -161 499\r
        -207 550 -17 18 -115 214 -115 229 0 6 -9 15 -20 21 -13 7 -20 21 -20 40 0 29\r
        1 30 39 24 21 -3 47 -1 59 5 12 7 106 13 234 16 251 6 413 19 523 45 44 10\r
        105 23 135 30 30 6 75 20 100 30 57 23 117 23 155 1z m15669 -337 c65 -25 155\r
        -97 291 -233 71 -72 127 -131 123 -131 -3 0 9 -32 28 -70 19 -39 43 -96 55\r
        -128 67 -182 71 -197 65 -247 -10 -98 -23 -143 -52 -190 -16 -26 -34 -55 -39\r
        -65 -15 -25 -104 -100 -120 -100 -7 0 -44 -13 -81 -29 -38 -16 -105 -41 -148\r
        -55 -43 -15 -88 -32 -100 -39 -12 -6 -48 -14 -81 -18 -33 -4 -80 -11 -105 -14\r
        -32 -5 -57 -2 -84 9 l-39 16 7 66 c8 76 23 137 62 246 28 77 28 78 11 131 -14\r
        44 -23 56 -52 70 -47 22 -51 22 -94 -12 -54 -43 -116 -139 -131 -202 -7 -30\r
        -20 -65 -28 -77 l-15 -24 -24 39 c-24 38 -24 39 -19 288 3 138 7 275 10 305 3\r
        30 11 112 17 182 l12 127 41 29 c41 29 225 121 281 140 38 13 158 5 209 -14z\r
        m-939 -174 c79 -12 116 -39 136 -98 14 -42 6 -423 -11 -492 -6 -25 -13 -63\r
        -16 -85 -17 -134 -38 -175 -92 -175 -29 0 -315 279 -337 329 -8 20 -33 63 -55\r
        96 -55 83 -70 118 -70 165 0 57 18 86 98 157 72 64 92 75 172 98 56 16 87 17\r
        175 5z m-17938 -130 c58 -35 81 -174 42 -255 -8 -18 -40 -47 -79 -71 -36 -23\r
        -81 -56 -101 -73 -20 -17 -73 -49 -118 -71 -51 -26 -91 -54 -107 -76 -22 -28\r
        -33 -34 -64 -34 -30 0 -43 6 -59 26 -12 15 -21 33 -21 40 0 26 117 359 145\r
        414 20 38 82 74 170 98 93 26 152 27 192 2z m1342 -192 c129 -53 175 -75 216\r
        -108 20 -16 45 -32 56 -35 11 -4 35 -23 53 -43 68 -73 106 -120 106 -129 0 -5\r
        16 -40 36 -78 44 -84 56 -170 30 -210 -20 -30 -74 -59 -141 -73 -234 -51 -276\r
        -56 -508 -55 -196 1 -240 4 -305 21 -43 11 -98 25 -123 31 -100 22 -288 181\r
        -363 307 -49 84 -48 115 7 170 24 23 56 45 72 49 17 4 64 22 105 40 128 58\r
        212 82 366 104 82 11 163 22 179 25 45 6 184 -4 214 -16z m16018 -266 c17 -9\r
        45 -35 62 -57 96 -126 139 -177 220 -259 49 -50 112 -109 141 -131 28 -22 76\r
        -61 106 -87 30 -27 58 -48 62 -48 9 0 31 -48 47 -104 11 -38 10 -44 -13 -76\r
        -14 -19 -67 -78 -117 -130 -93 -97 -166 -195 -180 -240 -4 -14 -15 -41 -25\r
        -60 -26 -52 -40 -102 -40 -141 0 -55 -20 -86 -59 -93 -29 -4 -40 1 -82 36 -27\r
        23 -49 45 -49 50 0 5 -11 24 -25 42 -14 19 -35 62 -47 97 -12 35 -28 75 -37\r
        88 -8 13 -18 49 -22 80 -8 54 -20 129 -40 236 -12 64 -30 382 -24 415 2 14 7\r
        73 10 133 7 115 25 202 51 242 19 29 19 29 61 7z m-17229 -160 c13 -8 32 -33\r
        44 -56 11 -23 32 -55 47 -72 14 -18 46 -60 71 -94 71 -97 142 -155 265 -217\r
        83 -41 105 -48 265 -83 52 -12 111 -25 131 -30 20 -6 52 -10 71 -10 19 0 60\r
        -5 92 -11 43 -9 74 -9 129 0 40 6 99 16 132 21 33 5 103 17 156 26 105 18 150\r
        12 183 -24 15 -17 13 -21 -27 -60 -26 -26 -60 -47 -89 -56 -26 -7 -59 -22 -75\r
        -33 -15 -11 -48 -25 -73 -33 -25 -7 -76 -25 -115 -40 -298 -116 -631 -152\r
        -915 -99 -108 20 -326 84 -347 101 -7 6 -54 31 -105 57 -102 50 -103 52 -153\r
        186 -15 39 -37 81 -49 95 -13 14 -26 34 -29 45 -4 11 -17 51 -30 89 l-24 70\r
        30 43 c17 24 34 43 39 43 4 0 25 15 45 33 50 43 164 116 200 127 35 11 100 2\r
        131 -18z m-1099 -583 c40 -14 47 -43 30 -127 -16 -84 -17 -230 -1 -302 7 -30\r
        27 -107 46 -170 42 -144 52 -190 67 -315 11 -88 16 -103 39 -125 40 -37 130\r
        -80 167 -80 55 0 138 -38 177 -80 74 -82 81 -127 40 -261 -23 -75 -27 -109\r
        -34 -314 -5 -126 -6 -317 -3 -424 5 -225 1 -245 -55 -255 -20 -3 -37 -4 -37\r
        -3 -1 1 -15 25 -31 52 -47 78 -110 214 -129 278 -9 32 -32 76 -51 98 -19 23\r
        -34 46 -34 53 0 7 -23 57 -50 111 -28 54 -60 128 -72 164 -21 66 -79 193 -98\r
        216 -6 7 -24 48 -39 91 -39 107 -81 205 -125 289 -20 39 -36 77 -36 85 0 8\r
        -13 42 -28 75 -16 33 -44 107 -62 165 -18 58 -44 139 -58 180 -41 125 -49 306\r
        -16 371 17 35 90 98 154 134 30 17 84 47 120 67 74 42 75 42 119 27z m19425\r
        -281 c29 -71 32 -184 9 -251 -18 -48 -97 -157 -114 -157 -3 0 -14 9 -24 20\r
        -17 18 -17 27 -7 88 20 118 28 147 55 203 14 30 31 74 39 97 7 23 16 42 19 42\r
        3 0 14 -19 23 -42z m-18427 -144 c95 -43 119 -51 296 -98 58 -16 205 -31 442\r
        -46 141 -8 175 -15 175 -35 0 -9 -26 -17 -72 -25 -40 -6 -132 -25 -205 -41\r
        -136 -30 -200 -35 -249 -20 -16 5 -67 14 -114 21 -103 15 -159 30 -234 64 -31\r
        14 -63 26 -71 26 -7 0 -17 5 -20 10 -3 6 -19 10 -34 10 -60 0 -101 62 -86 130\r
        6 29 9 30 61 30 36 0 72 -8 111 -26z m17907 -167 c18 -49 -30 -187 -64 -187\r
        -19 0 -32 44 -31 108 0 36 5 70 11 76 5 5 10 18 10 27 0 41 58 22 74 -24z\r
        m-18071 -1465 c27 -31 31 -197 7 -347 -11 -71 -25 -170 -31 -220 -11 -91 -14\r
        -103 -25 -93 -9 10 -24 241 -18 303 2 33 6 150 8 260 4 224 14 278 32 177 6\r
        -34 18 -70 27 -80z m13802 75 c33 -16 60 -38 79 -65 59 -85 134 -119 197 -88\r
        17 9 39 16 49 16 9 0 20 4 26 10 5 5 45 15 89 21 44 6 98 16 120 22 22 7 78\r
        12 125 11 74 -1 94 -5 152 -32 36 -18 73 -32 81 -32 9 0 19 -4 22 -10 3 -5 13\r
        -10 20 -10 8 0 44 -13 80 -30 36 -16 70 -30 76 -30 6 0 36 -20 67 -44 31 -24\r
        75 -52 98 -64 22 -11 81 -61 130 -111 86 -89 130 -121 163 -121 34 0 77 37 89\r
        78 17 56 -8 110 -88 187 -100 98 -114 159 -37 170 46 6 236 -22 362 -54 22 -6\r
        54 -13 70 -16 17 -4 39 -10 50 -15 47 -19 176 -50 209 -50 19 0 45 -4 58 -9\r
        13 -5 43 -14 68 -21 25 -7 59 -18 75 -25 17 -7 41 -16 55 -19 77 -20 116 -36\r
        228 -93 121 -61 198 -108 277 -167 51 -39 205 -188 205 -199 0 -5 15 -32 33\r
        -60 53 -82 73 -116 117 -205 36 -71 43 -97 49 -171 4 -48 10 -92 14 -97 10\r
        -16 -20 -196 -42 -258 -12 -32 -21 -69 -19 -81 2 -13 -9 -36 -29 -58 -17 -20\r
        -40 -56 -51 -79 -11 -24 -36 -63 -56 -88 -20 -25 -68 -85 -105 -135 -38 -49\r
        -97 -117 -130 -150 -34 -32 -61 -65 -61 -72 0 -7 -5 -13 -11 -13 -6 0 -32 -16\r
        -57 -35 -40 -30 -125 -88 -194 -130 -124 -76 -195 -116 -258 -143 -169 -75\r
        -284 -124 -328 -138 -26 -9 -66 -24 -89 -35 -24 -10 -47 -19 -53 -19 -6 0 -18\r
        -4 -28 -9 -26 -13 -86 -31 -105 -31 -9 0 -32 -9 -52 -20 -21 -12 -54 -20 -80\r
        -20 -24 0 -46 -4 -49 -9 -3 -5 -20 -11 -38 -14 -18 -3 -53 -11 -78 -17 -25 -6\r
        -63 -15 -85 -20 -22 -5 -62 -14 -90 -20 -27 -6 -111 -20 -185 -30 -74 -11\r
        -160 -24 -190 -29 -233 -43 -604 -48 -830 -11 -30 5 -89 14 -130 20 -41 7 -86\r
        16 -100 20 -14 4 -52 13 -85 20 -33 7 -87 19 -120 27 -33 8 -73 18 -90 21 -16\r
        3 -44 13 -63 23 -18 11 -40 19 -49 19 -20 0 -73 17 -128 40 -22 10 -58 23 -80\r
        30 -22 7 -48 16 -57 21 -10 5 -24 9 -31 9 -48 0 -494 220 -608 300 -20 14 -61\r
        42 -92 63 -31 20 -61 46 -67 57 -6 11 -30 30 -53 41 -115 59 -450 404 -520\r
        536 -12 23 -41 76 -64 118 -40 74 -85 193 -114 300 -9 33 -14 108 -14 220 l0\r
        170 57 95 c32 52 66 111 77 130 19 35 120 135 199 198 37 29 136 93 252 162\r
        67 39 234 118 266 126 16 3 67 19 114 34 47 15 103 32 125 39 22 6 83 24 135\r
        40 52 16 129 34 170 40 41 6 123 20 181 31 59 11 135 20 170 20 34 0 88 5 118\r
        10 128 23 173 28 301 29 122 1 140 -1 185 -22z m4864 -248 c20 -7 45 -15 56\r
        -19 11 -5 45 -18 76 -30 31 -11 71 -37 90 -56 33 -34 34 -36 32 -117 -2 -53\r
        -9 -101 -23 -137 -11 -30 -20 -65 -20 -77 0 -25 -29 -82 -70 -133 -15 -19 -40\r
        -60 -55 -90 -15 -30 -42 -76 -61 -102 -18 -26 -50 -80 -70 -120 -34 -69 -83\r
        -139 -127 -182 -23 -22 -107 -151 -107 -163 0 -14 -226 -243 -239 -243 -7 0\r
        -21 5 -32 10 -34 19 -20 138 41 355 19 66 30 117 40 183 6 34 15 92 21 130 11\r
        74 24 172 38 302 5 47 12 99 16 115 9 45 26 108 35 130 4 11 14 36 21 55 15\r
        42 49 82 108 123 103 74 157 89 230 66z m-649 -374 c10 -26 4 -55 -11 -55 -5\r
        0 -9 18 -9 40 0 46 6 51 20 15z m490 -1134 c0 -48 -20 -63 -47 -36 -14 14 -14\r
        18 2 35 23 25 45 26 45 1z m-57 -66 c1 -5 -6 -11 -15 -13 -11 -2 -18 3 -18 13\r
        0 17 30 18 33 0z`}),(0,b.jsx)(`path`,{d:`M23600 27499 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0\r
        -10 -5 -10 -11z`}),(0,b.jsx)(`path`,{d:`M24175 20828 c-52 -19 -79 -32 -132 -65 -54 -33 -198 -146 -208 -164\r
        -4 -5 -31 -28 -62 -51 -74 -54 -248 -232 -279 -286 -51 -87 -69 -226 -39 -300\r
        22 -52 81 -109 143 -138 40 -18 70 -24 125 -24 40 0 102 -6 138 -14 58 -12\r
        269 -75 324 -97 44 -17 207 -58 280 -70 28 -5 140 -13 250 -19 110 -5 252 -15\r
        315 -21 133 -14 222 -14 565 -1 238 9 302 17 425 53 100 30 174 93 234 203 25\r
        45 27 57 23 125 -5 83 -15 140 -27 156 -4 6 -15 35 -25 65 -18 55 -33 79 -92\r
        149 -18 21 -33 43 -33 48 0 16 -94 101 -164 148 -38 25 -105 65 -150 88 l-81\r
        42 -190 7 c-104 3 -215 12 -245 18 -30 6 -122 15 -205 19 -153 8 -238 26 -280\r
        61 -28 22 -64 38 -105 45 -19 3 -60 11 -90 16 -80 15 -379 20 -415 7z m1285\r
        -429 c25 -6 95 -17 155 -26 61 -8 138 -22 172 -30 60 -15 65 -19 141 -107 113\r
        -132 116 -138 117 -226 0 -60 -4 -80 -20 -102 -21 -28 -76 -60 -135 -77 -95\r
        -27 -490 -40 -607 -20 -63 11 -63 11 -63 45 0 18 13 62 29 96 42 91 49 127 55\r
        282 5 127 7 141 28 163 24 26 29 26 128 2z m-1740 -309 c0 -5 -9 -10 -20 -10\r
        -11 0 -20 5 -20 10 0 6 9 10 20 10 11 0 20 -4 20 -10z`}),(0,b.jsx)(`path`,{d:`M17005 23470 c-11 -5 -36 -9 -55 -9 -19 -1 -57 -8 -85 -17 -61 -20\r
        -120 -33 -200 -44 -54 -7 -140 -27 -221 -51 -17 -5 -47 -9 -67 -9 -36 0 -59\r
        -4 -187 -36 -135 -33 -289 -69 -385 -90 -38 -8 -116 -26 -172 -40 -56 -14\r
        -144 -31 -195 -39 -51 -8 -107 -21 -125 -30 -31 -15 -95 -30 -173 -41 -79 -11\r
        -159 -26 -225 -44 -38 -10 -97 -24 -130 -31 -33 -6 -89 -19 -125 -29 -36 -10\r
        -92 -23 -125 -30 -33 -7 -88 -21 -122 -32 -34 -10 -86 -19 -115 -18 -49 2\r
        -185 -38 -240 -70 -10 -5 -36 -10 -58 -10 -41 0 -178 -33 -211 -50 -10 -6 -30\r
        -10 -46 -10 -37 0 -137 -38 -188 -71 -23 -15 -56 -48 -75 -74 -65 -88 -149\r
        -155 -196 -155 -9 0 -44 -13 -78 -29 -33 -16 -77 -31 -96 -35 -93 -16 -121\r
        -25 -175 -56 -53 -31 -143 -61 -240 -80 -77 -16 -116 -28 -140 -44 -13 -9 -48\r
        -22 -77 -30 -168 -45 -213 -67 -288 -147 -57 -60 -76 -74 -145 -100 -44 -17\r
        -100 -35 -125 -39 -25 -5 -83 -20 -130 -34 -47 -14 -97 -26 -111 -26 -31 0\r
        -122 -29 -200 -64 -48 -21 -59 -31 -73 -65 -27 -70 -15 -126 36 -155 46 -28\r
        226 -27 328 1 41 12 107 26 145 33 39 6 84 16 100 20 17 5 62 14 100 20 39 6\r
        90 15 115 20 25 5 83 17 130 26 47 9 105 20 130 25 25 5 70 13 100 18 30 5 90\r
        17 133 26 63 13 89 14 130 5 69 -14 81 -22 69 -46 -5 -11 -19 -45 -31 -76 -32\r
        -82 -22 -110 76 -202 43 -41 85 -86 92 -100 13 -23 12 -28 -6 -49 -11 -12 -25\r
        -32 -32 -44 -6 -11 -39 -42 -73 -67 -65 -47 -162 -127 -252 -207 -28 -25 -72\r
        -62 -98 -83 -26 -21 -55 -56 -67 -82 -13 -26 -31 -48 -46 -54 -52 -20 -260\r
        -308 -343 -475 -8 -16 -29 -48 -47 -70 -17 -22 -35 -46 -39 -53 -7 -12 -22\r
        -376 -21 -522 1 -39 9 -85 20 -115 23 -61 90 -190 119 -228 81 -109 235 -246\r
        332 -295 33 -17 66 -37 73 -46 8 -9 19 -16 27 -16 7 0 53 -17 101 -38 48 -21\r
        108 -44 133 -51 25 -8 60 -20 79 -28 51 -23 90 -33 156 -43 101 -15 168 -28\r
        210 -40 38 -10 81 -18 220 -41 33 -5 101 -13 150 -18 50 -5 117 -15 150 -22\r
        47 -11 204 -14 720 -13 637 0 878 8 1000 34 76 16 179 30 285 40 52 5 118 14\r
        145 20 28 6 86 14 130 19 92 10 119 16 195 41 30 10 80 24 110 31 30 7 59 16\r
        64 21 6 4 31 8 56 8 43 0 162 33 186 51 5 5 35 15 65 23 166 44 358 110 454\r
        156 33 16 78 34 100 41 35 11 100 42 270 127 101 50 192 92 202 92 6 0 53 28\r
        105 63 51 35 113 75 138 89 25 15 61 42 79 62 19 20 39 36 45 36 5 0 35 20 65\r
        44 31 24 74 53 96 64 22 12 47 27 56 34 15 13 104 127 164 212 17 24 45 63 64\r
        87 18 24 46 72 62 105 16 34 36 65 45 68 32 12 71 6 90 -15 25 -28 107 -69\r
        136 -69 13 0 34 7 46 16 20 14 22 23 22 120 0 117 9 145 61 188 30 26 226 126\r
        245 126 5 0 50 13 99 28 50 16 115 34 145 41 30 7 80 21 110 31 63 20 141 36\r
        220 46 73 8 145 20 200 33 120 28 449 23 525 -9 37 -15 113 -30 157 -30 50 0\r
        100 -12 178 -43 84 -33 227 -104 235 -116 3 -6 27 -21 52 -32 36 -16 58 -20\r
        92 -15 60 8 81 29 81 81 0 33 -7 50 -35 82 -19 22 -49 46 -67 54 -18 7 -46 23\r
        -63 35 -33 24 -136 73 -235 111 -36 14 -78 31 -95 38 -16 8 -43 16 -60 20 -16\r
        3 -66 15 -110 25 -80 19 -251 32 -420 33 -86 1 -186 -10 -325 -34 -36 -6 -92\r
        -15 -125 -20 -133 -18 -182 -28 -225 -41 -43 -15 -90 -28 -175 -50 -22 -6 -65\r
        -19 -96 -29 -30 -11 -67 -19 -82 -19 -15 0 -35 -4 -45 -9 -9 -5 -57 -26 -107\r
        -47 -49 -20 -101 -46 -115 -58 -14 -12 -41 -29 -60 -38 -19 -8 -55 -31 -80\r
        -50 -25 -18 -60 -40 -78 -47 -32 -14 -35 -13 -57 15 -30 36 -59 96 -76 154\r
        -18 65 -43 112 -88 167 -22 26 -53 63 -68 82 -49 60 -185 150 -288 191 -33 12\r
        -76 31 -95 40 -19 10 -57 25 -85 33 -51 16 -135 44 -170 58 -11 4 -38 10 -60\r
        13 -22 3 -60 10 -85 16 -60 14 -156 29 -260 40 -47 5 -132 14 -190 21 -183 20\r
        -299 28 -540 38 -129 5 -269 16 -310 24 -158 31 -269 40 -418 33 -284 -14\r
        -1741 -3 -1801 14 -20 5 -49 10 -65 10 -48 0 -98 22 -90 40 4 8 9 24 11 35 11\r
        49 265 172 428 206 109 24 144 29 235 39 100 10 192 23 300 41 36 6 121 12\r
        190 13 69 1 136 7 150 13 37 16 113 31 220 43 179 21 255 32 295 45 22 7 92\r
        20 155 29 252 37 333 51 675 116 55 10 136 24 180 30 44 6 96 15 115 20 19 4\r
        60 14 90 20 78 17 210 68 246 95 17 13 37 38 44 56 12 28 11 36 -6 67 -30 55\r
        -83 71 -236 71 -70 1 -137 -3 -151 -8 -13 -5 -124 -11 -248 -13 -286 -4 -322\r
        8 -272 93 10 16 24 29 33 29 9 0 20 4 26 8 5 5 38 19 74 32 36 12 88 33 115\r
        45 52 23 117 45 195 66 25 6 63 18 85 26 53 20 149 49 261 78 92 24 138 41\r
        184 69 14 9 46 25 71 36 74 33 220 199 250 282 15 43 2 79 -39 106 -25 17\r
        -214 19 -267 3 -48 -15 -177 -21 -218 -12 -50 12 -81 42 -109 103 -16 36 -33\r
        54 -66 73 -25 14 -45 25 -46 24 0 0 -10 -4 -21 -9z m-3291 -2221 c34 -6 84\r
        -15 111 -21 31 -6 359 -12 845 -14 1148 -6 1325 -9 1404 -24 57 -11 89 -11\r
        184 0 102 12 126 12 230 -5 65 -10 191 -21 282 -26 91 -4 206 -12 255 -18 203\r
        -26 275 -32 385 -37 63 -3 124 -9 135 -14 11 -4 54 -13 95 -20 41 -6 91 -15\r
        110 -20 19 -5 46 -11 60 -14 132 -25 345 -112 449 -184 106 -72 151 -134 205\r
        -277 32 -86 46 -220 28 -259 -6 -12 -20 -48 -32 -81 -44 -120 -89 -200 -145\r
        -259 -30 -32 -60 -67 -66 -77 -12 -24 -155 -135 -223 -174 -28 -16 -72 -44\r
        -97 -61 -118 -82 -203 -136 -294 -188 -55 -31 -107 -61 -115 -66 -25 -16 -343\r
        -158 -391 -174 -24 -9 -54 -16 -66 -16 -12 0 -39 -11 -59 -25 -21 -14 -49 -28\r
        -63 -31 -14 -2 -46 -12 -71 -21 -25 -9 -60 -18 -78 -21 -18 -2 -35 -8 -38 -13\r
        -3 -5 -20 -9 -39 -9 -19 0 -37 -4 -40 -10 -3 -5 -17 -10 -30 -10 -13 0 -37 -5\r
        -52 -11 -60 -24 -69 -28 -93 -34 -14 -3 -41 -11 -60 -16 -19 -6 -60 -14 -90\r
        -19 -116 -19 -186 -35 -275 -60 -74 -21 -119 -30 -205 -41 -148 -18 -213 -28\r
        -270 -39 -86 -17 -711 -50 -1000 -53 -324 -3 -710 16 -865 43 -27 5 -95 14\r
        -150 20 -55 6 -118 15 -140 20 -22 4 -67 14 -100 20 -33 7 -70 16 -83 21 -13\r
        5 -43 9 -68 9 -24 0 -52 4 -62 9 -28 14 -87 31 -108 31 -11 0 -24 4 -29 9 -6\r
        5 -47 20 -92 34 -332 103 -572 306 -612 517 -28 151 -33 228 -21 322 11 83 60\r
        257 80 283 4 6 10 21 13 35 4 14 27 54 51 90 25 36 55 83 67 105 12 22 34 54\r
        49 71 15 17 33 46 41 63 8 17 17 31 21 31 3 0 61 54 128 120 67 67 141 135\r
        164 153 120 90 152 115 165 130 7 10 18 17 24 17 5 0 29 17 53 38 45 39 158\r
        122 167 122 3 0 43 23 89 52 143 88 198 101 332 77z`}),(0,b.jsx)(`path`,{d:`M15650 20801 c-19 -4 -82 -27 -140 -52 -103 -43 -107 -44 -255 -51\r
        -191 -9 -352 -23 -435 -37 -36 -7 -103 -16 -150 -21 -47 -5 -107 -14 -135 -20\r
        -27 -6 -71 -13 -98 -17 -26 -3 -50 -10 -53 -14 -3 -5 -16 -9 -29 -9 -13 0 -27\r
        -4 -30 -10 -3 -5 -15 -10 -26 -10 -11 0 -42 -11 -69 -25 -27 -13 -66 -31 -88\r
        -38 -22 -8 -55 -25 -72 -38 -75 -57 -221 -210 -266 -279 -26 -41 -85 -111\r
        -130 -155 -90 -88 -178 -165 -187 -165 -9 0 -65 -39 -118 -81 -24 -20 -80 -59\r
        -124 -87 -78 -49 -104 -76 -135 -135 -12 -23 -12 -36 -1 -75 7 -26 19 -57 27\r
        -70 21 -33 146 -86 234 -101 159 -25 1240 12 1400 49 25 6 110 15 190 21 334\r
        23 414 33 515 62 28 8 82 20 120 27 39 6 88 16 110 20 22 5 67 14 100 20 144\r
        28 304 74 355 101 19 11 52 24 73 30 22 6 67 36 110 73 63 55 75 71 87 115 8\r
        29 18 54 22 57 17 11 9 206 -11 268 -11 34 -31 99 -46 146 -43 137 -139 284\r
        -229 348 -43 31 -148 83 -221 109 -22 7 -49 20 -61 28 -26 17 -183 28 -234 16z\r
        m-1002 -413 c24 -24 13 -89 -30 -177 -39 -80 -42 -91 -40 -161 1 -41 7 -90 14\r
        -110 25 -79 31 -96 44 -127 8 -18 19 -35 24 -38 16 -10 40 -74 40 -105 0 -67\r
        -23 -80 -160 -92 -89 -7 -154 -11 -575 -37 -88 -6 -205 -7 -260 -4 -89 5 -103\r
        8 -127 31 -16 14 -28 30 -28 35 0 18 169 173 254 232 62 43 93 81 197 237 81\r
        122 232 237 359 275 30 9 78 24 105 33 59 21 166 25 183 8z`}),(0,b.jsx)(`path`,{d:`M21824 18980 c-42 -17 -84 -98 -84 -162 0 -65 23 -226 60 -419 8 -42\r
        35 -116 79 -214 10 -22 46 -112 80 -200 35 -88 67 -167 72 -175 5 -8 12 -22\r
        16 -30 3 -8 14 -33 24 -55 10 -23 21 -54 24 -70 13 -55 38 -130 58 -175 24\r
        -54 34 -88 62 -225 4 -16 10 -39 15 -50 11 -28 28 -93 35 -135 7 -41 20 -104\r
        35 -175 19 -84 38 -267 62 -580 13 -170 16 -604 4 -650 -18 -71 -79 -160 -151\r
        -220 -127 -107 -235 -235 -235 -278 0 -18 -72 -98 -110 -122 -21 -13 -62 -31\r
        -91 -41 -30 -9 -76 -27 -104 -40 -59 -27 -168 -64 -190 -64 -8 0 -34 -9 -58\r
        -19 -23 -11 -58 -22 -77 -26 -19 -3 -60 -10 -90 -16 -30 -6 -91 -14 -135 -18\r
        -154 -17 -212 -29 -281 -61 -81 -37 -100 -52 -125 -102 -42 -83 -15 -138 77\r
        -158 47 -10 59 -8 157 25 58 19 118 35 132 35 14 0 45 9 67 20 23 11 49 20 58\r
        20 9 0 20 4 26 8 5 5 43 19 84 32 41 12 91 29 110 38 48 20 190 34 207 20 19\r
        -15 16 -75 -4 -90 -9 -7 -33 -29 -53 -49 -20 -20 -50 -45 -66 -55 -16 -10 -45\r
        -31 -64 -45 -83 -65 -261 -151 -675 -329 -104 -45 -231 -101 -282 -126 -50\r
        -24 -100 -44 -111 -44 -10 0 -33 -7 -50 -16 -47 -23 -128 -37 -222 -38 -77 -1\r
        -92 2 -152 32 -37 17 -69 36 -73 41 -3 6 -31 22 -61 37 -31 15 -80 49 -109 76\r
        -29 26 -56 48 -59 48 -14 0 -142 88 -165 114 -14 14 -28 26 -32 26 -12 0 -92\r
        56 -113 79 -11 12 -23 21 -28 21 -12 0 -48 27 -128 95 -93 78 -127 105 -135\r
        105 -4 0 -22 12 -40 28 -18 15 -50 38 -70 52 -73 50 -102 80 -113 118 -7 22\r
        -12 44 -12 49 0 15 92 33 112 22 9 -5 27 -9 39 -9 19 0 118 -29 174 -50 11 -5\r
        43 -14 70 -20 70 -17 118 -33 129 -42 6 -4 20 -8 32 -8 13 0 25 -4 28 -9 3 -5\r
        16 -11 28 -14 13 -3 41 -11 63 -17 42 -12 106 -25 190 -39 59 -9 84 -18 108\r
        -39 9 -8 36 -19 60 -23 23 -4 86 -18 140 -32 83 -21 103 -23 136 -13 35 10 91\r
        61 91 83 0 5 -17 25 -37 45 -27 26 -59 43 -108 58 -63 19 -145 48 -200 70 -38\r
        15 -130 42 -170 51 -66 13 -124 28 -235 60 -49 14 -108 29 -155 38 -22 4 -92\r
        25 -155 45 -63 20 -160 51 -215 68 -55 17 -131 42 -170 56 -38 14 -106 29\r
        -150 33 -116 11 -147 19 -152 40 -3 10 -29 36 -58 58 -67 51 -194 201 -224\r
        265 -12 26 -32 65 -45 85 -42 65 -49 162 -28 346 7 55 16 135 21 178 5 44 12\r
        81 14 84 7 7 -40 74 -63 90 -17 12 -25 11 -64 -12 -24 -14 -47 -34 -51 -43\r
        -10 -25 -45 -159 -57 -217 -15 -78 -22 -355 -9 -368 6 -6 11 -18 11 -27 0 -9\r
        9 -35 20 -58 11 -22 20 -46 20 -51 0 -20 93 -186 134 -239 23 -29 51 -68 64\r
        -85 12 -18 65 -77 117 -132 52 -55 111 -121 132 -147 115 -140 156 -186 181\r
        -199 15 -7 59 -43 98 -79 135 -124 149 -136 179 -155 17 -10 53 -39 81 -64 28\r
        -26 68 -57 88 -71 38 -25 102 -75 166 -128 19 -16 61 -47 94 -68 32 -22 73\r
        -49 90 -62 17 -12 47 -33 66 -46 19 -13 43 -33 54 -44 10 -12 37 -31 60 -43\r
        22 -11 52 -31 66 -43 43 -37 82 -60 205 -122 126 -64 236 -93 306 -81 158 27\r
        409 101 544 162 28 12 75 30 105 40 30 10 79 35 109 56 30 22 60 39 68 39 7 0\r
        21 4 31 10 9 5 37 18 62 29 25 12 59 30 75 40 17 11 37 20 45 20 19 1 300 144\r
        370 189 69 43 106 75 217 183 121 119 155 162 208 261 53 99 110 157 175 177\r
        71 21 104 38 125 63 32 37 46 66 35 73 -6 3 -10 17 -10 31 0 14 -7 39 -16 56\r
        -27 52 -7 93 77 163 66 55 139 137 139 156 0 4 13 36 29 71 16 35 33 77 37 93\r
        13 47 10 610 -4 805 -15 216 -25 304 -46 398 -9 40 -16 92 -16 114 0 44 0 45\r
        -49 204 -17 55 -31 110 -31 122 0 12 -9 55 -20 94 -11 40 -20 85 -20 100 0 15\r
        -4 37 -9 50 -5 13 -19 55 -31 93 -13 39 -27 74 -31 80 -5 5 -9 17 -9 28 0 10\r
        -18 58 -39 105 -22 48 -52 119 -67 157 -15 39 -32 77 -38 85 -25 31 -137 345\r
        -157 440 -14 62 -29 195 -37 315 -11 156 -53 210 -138 175z`}),(0,b.jsx)(`path`,{d:`M27680 18123 l-37 -38 4 -295 c3 -194 0 -322 -7 -375 -16 -111 -26\r
        -185 -39 -290 -6 -49 -16 -110 -21 -135 -15 -63 -29 -158 -40 -275 -6 -55 -15\r
        -127 -20 -160 -5 -33 -14 -96 -20 -140 -21 -161 -30 -221 -40 -280 -5 -33 -14\r
        -91 -20 -130 -10 -75 -19 -116 -44 -208 -9 -32 -16 -79 -16 -104 0 -26 -4 -60\r
        -9 -77 -5 -17 -15 -51 -21 -76 -7 -25 -16 -54 -20 -65 -13 -32 -48 -186 -55\r
        -240 -11 -93 -22 -146 -60 -295 -10 -36 -26 -101 -38 -145 -11 -44 -24 -84\r
        -29 -90 -4 -5 -8 -20 -8 -34 0 -24 -15 -81 -30 -111 -4 -8 -12 -40 -19 -70 -7\r
        -30 -16 -66 -21 -80 -4 -14 -13 -45 -20 -70 -15 -53 -29 -97 -40 -125 -5 -11\r
        -11 -37 -14 -57 -15 -95 -19 -114 -31 -128 -17 -19 -45 -98 -45 -127 0 -12 -4\r
        -25 -10 -28 -5 -3 -10 -17 -10 -30 0 -13 -4 -27 -10 -30 -5 -3 -10 -17 -10\r
        -30 0 -13 -4 -27 -10 -30 -5 -3 -10 -14 -10 -24 0 -10 -13 -45 -30 -79 -16\r
        -34 -30 -70 -30 -80 0 -20 -34 -118 -48 -135 -4 -7 -14 -32 -21 -57 -7 -25\r
        -17 -53 -22 -62 -5 -10 -9 -24 -9 -33 0 -8 -9 -30 -19 -49 -11 -19 -38 -90\r
        -61 -158 -22 -68 -54 -149 -70 -180 -17 -31 -30 -63 -30 -71 0 -8 -13 -39 -28\r
        -69 -16 -29 -41 -88 -55 -131 -15 -42 -38 -98 -51 -125 -13 -26 -29 -58 -35\r
        -72 -5 -14 -24 -49 -41 -78 -16 -29 -30 -59 -30 -66 0 -20 -31 -90 -152 -336\r
        -178 -366 -271 -544 -297 -575 -10 -11 -37 -60 -61 -110 -72 -148 -126 -187\r
        -180 -130 -18 19 -25 42 -31 102 -4 43 -13 98 -19 123 -5 25 -14 70 -20 100\r
        -5 30 -24 84 -42 120 -29 56 -38 67 -72 78 -35 11 -41 11 -60 -7 -24 -22 -52\r
        -104 -41 -121 7 -11 22 -129 30 -234 3 -32 9 -64 14 -70 4 -6 11 -29 14 -51 4\r
        -22 11 -60 17 -85 24 -97 31 -149 37 -253 3 -64 1 -112 -5 -120 -5 -6 -15 -29\r
        -22 -50 -21 -67 -120 -250 -158 -293 -57 -66 -79 -96 -111 -158 -29 -56 -53\r
        -88 -162 -209 -30 -34 -72 -88 -92 -119 -21 -31 -42 -60 -48 -63 -5 -4 -21\r
        -25 -36 -47 -14 -23 -52 -66 -84 -96 -32 -30 -59 -60 -59 -66 0 -7 -12 -23\r
        -26 -37 -15 -13 -35 -37 -45 -54 -26 -41 -572 -589 -687 -689 -53 -46 -113\r
        -100 -131 -120 -19 -20 -40 -36 -47 -36 -7 0 -25 -15 -41 -33 -15 -18 -43 -41\r
        -60 -52 -47 -30 -181 -143 -215 -181 -17 -19 -36 -34 -42 -34 -7 0 -21 -9 -31\r
        -20 -10 -11 -23 -20 -30 -20 -7 0 -20 -9 -30 -20 -10 -11 -42 -34 -70 -50 -28\r
        -16 -62 -41 -75 -55 -14 -15 -50 -43 -80 -63 -30 -20 -74 -53 -97 -74 -24 -21\r
        -48 -38 -54 -38 -15 0 -111 -63 -128 -84 -7 -8 -31 -24 -53 -36 -23 -12 -72\r
        -42 -111 -68 -76 -51 -109 -70 -262 -152 -55 -29 -118 -65 -139 -79 -83 -55\r
        -91 -60 -107 -60 -24 -1 -73 -28 -94 -51 -10 -11 -23 -20 -29 -20 -10 0 -235\r
        -107 -326 -155 -25 -13 -68 -31 -95 -40 -28 -9 -77 -29 -110 -44 -33 -16 -78\r
        -34 -100 -41 -22 -6 -59 -20 -82 -31 -24 -10 -49 -19 -56 -19 -8 0 -17 -3 -20\r
        -7 -16 -15 -151 -59 -227 -73 -25 -5 -62 -13 -82 -19 -98 -28 -116 -33 -153\r
        -41 -38 -9 -74 -17 -167 -41 -56 -14 -133 -27 -238 -39 -47 -6 -128 -16 -180\r
        -22 -173 -21 -614 -10 -865 21 -80 10 -130 20 -215 41 -25 6 -65 15 -90 20\r
        -25 5 -65 14 -90 20 -25 6 -68 15 -97 20 -45 7 -80 20 -213 77 -41 18 -104 38\r
        -145 48 -16 3 -72 26 -123 51 -51 24 -97 44 -102 44 -22 0 -372 179 -400 205\r
        -9 8 -20 15 -23 15 -4 0 -29 16 -56 35 -27 19 -67 41 -88 50 -21 9 -49 27 -63\r
        39 -14 13 -36 29 -50 36 -14 7 -38 24 -55 37 -36 29 -100 77 -156 118 -22 17\r
        -59 46 -82 65 -23 19 -49 40 -58 45 -10 6 -38 25 -63 42 -26 18 -51 33 -57 33\r
        -5 0 -18 14 -28 30 -10 17 -40 45 -67 62 -27 17 -74 54 -105 82 -31 28 -116\r
        105 -189 171 -114 102 -177 162 -217 205 -4 5 -55 50 -113 99 -149 128 -656\r
        647 -699 716 -10 17 -49 59 -85 95 -36 35 -66 70 -66 76 0 12 -43 51 -94 87\r
        -15 10 -26 28 -26 40 0 14 -17 39 -40 62 -22 21 -40 43 -40 48 0 12 -31 53\r
        -105 138 -103 118 -129 152 -186 233 -29 43 -79 107 -110 142 -31 34 -63 78\r
        -72 96 -17 35 -35 61 -107 153 -56 72 -100 134 -100 141 0 9 -78 109 -105 134\r
        -15 14 -35 43 -46 65 -11 22 -35 60 -54 85 -56 73 -83 116 -134 215 -55 106\r
        -68 126 -131 200 -56 67 -79 99 -106 150 -30 58 -90 149 -108 164 -9 7 -30 39\r
        -48 70 -35 61 -105 170 -137 212 -11 14 -28 46 -37 70 -9 24 -25 53 -34 64 -9\r
        11 -29 45 -44 76 -14 32 -33 62 -41 69 -8 7 -15 17 -15 22 0 5 -16 33 -35 62\r
        -19 29 -44 72 -55 97 -12 24 -39 71 -60 104 -22 33 -43 67 -47 75 -4 8 -24 44\r
        -46 79 -43 72 -82 153 -92 194 -4 15 -25 41 -46 58 -26 21 -39 39 -39 55 0 13\r
        -12 43 -27 67 -39 60 -53 87 -53 103 0 15 -45 101 -66 125 -8 8 -14 20 -14 26\r
        0 6 -6 16 -14 22 -13 11 -90 160 -130 251 -9 19 -56 113 -106 209 -49 96 -90\r
        181 -90 189 0 8 -13 33 -29 57 -16 24 -32 54 -36 67 -4 12 -50 109 -101 215\r
        -52 105 -94 196 -94 202 0 14 -31 82 -46 101 -6 8 -17 32 -24 54 -7 21 -25 63\r
        -41 93 -16 30 -29 61 -29 69 0 8 -4 22 -10 32 -5 9 -19 40 -30 67 -12 28 -25\r
        59 -30 70 -5 11 -18 46 -29 78 -23 64 -67 154 -86 177 -7 8 -20 40 -30 70 -10\r
        30 -30 83 -46 118 -16 35 -29 66 -29 70 0 4 -10 23 -22 42 -22 35 -33 63 -107\r
        270 -23 63 -45 124 -50 135 -5 11 -14 40 -21 64 -6 24 -25 69 -41 101 -16 32\r
        -29 62 -29 67 0 6 -25 64 -56 129 -67 144 -75 162 -101 239 -12 33 -30 85 -42\r
        115 -12 30 -21 63 -21 72 0 10 -16 48 -35 85 -19 37 -35 71 -35 76 0 5 -7 23\r
        -15 40 -23 51 -91 267 -105 332 -6 33 -23 94 -37 135 -31 93 -73 291 -73 347\r
        0 56 24 147 55 206 34 67 34 129 -1 152 -38 25 -84 28 -124 8 -50 -26 -105\r
        -104 -119 -171 -7 -31 -17 -76 -23 -99 -5 -22 -7 -65 -4 -95 3 -29 10 -98 15\r
        -153 6 -55 14 -122 20 -150 11 -58 80 -275 91 -290 11 -14 110 -310 110 -328\r
        0 -8 8 -25 18 -38 10 -13 31 -62 46 -109 16 -47 34 -98 40 -115 7 -16 19 -48\r
        26 -70 7 -22 25 -67 40 -100 15 -33 33 -80 41 -104 7 -24 21 -54 31 -66 10\r
        -13 18 -32 18 -42 0 -18 38 -120 60 -161 26 -50 81 -175 100 -227 39 -106 92\r
        -240 99 -250 4 -5 18 -41 31 -80 12 -38 33 -94 46 -123 13 -29 24 -58 24 -66\r
        0 -7 3 -15 6 -19 3 -3 18 -42 34 -86 15 -44 51 -122 81 -173 83 -145 95 -171\r
        102 -206 4 -19 20 -62 37 -97 16 -35 30 -67 30 -73 0 -5 11 -25 24 -44 13 -20\r
        29 -52 36 -72 6 -20 38 -90 71 -155 32 -66 59 -125 59 -133 0 -7 14 -37 30\r
        -67 17 -30 30 -58 30 -64 0 -13 106 -229 133 -268 25 -39 80 -149 95 -194 16\r
        -48 22 -126 12 -170 -5 -22 -12 -53 -16 -70 -4 -16 -18 -46 -32 -65 -34 -46\r
        -114 -130 -125 -130 -9 0 -58 -33 -109 -75 -50 -41 -82 -64 -158 -109 -36 -21\r
        -74 -47 -85 -56 -11 -10 -66 -43 -123 -74 -109 -59 -144 -82 -203 -131 -36\r
        -30 -120 -89 -213 -148 -27 -18 -59 -39 -72 -47 -12 -8 -46 -29 -76 -47 -30\r
        -18 -63 -42 -73 -53 -10 -11 -22 -20 -26 -20 -8 0 -107 -65 -179 -119 -25 -18\r
        -52 -36 -60 -39 -8 -3 -22 -11 -30 -18 -8 -6 -60 -35 -115 -64 -55 -29 -111\r
        -62 -125 -74 -14 -12 -41 -30 -60 -40 -19 -10 -46 -28 -60 -40 -44 -38 -134\r
        -94 -190 -119 -30 -14 -71 -42 -90 -62 -19 -21 -53 -46 -75 -57 -22 -10 -58\r
        -32 -80 -49 -41 -30 -65 -47 -209 -146 -86 -60 -117 -83 -169 -123 -18 -14\r
        -45 -32 -62 -40 -52 -25 -239 -142 -277 -174 -20 -17 -58 -47 -83 -66 -25 -19\r
        -60 -46 -78 -60 -17 -14 -45 -32 -62 -40 -35 -17 -95 -61 -145 -106 -19 -17\r
        -53 -41 -75 -54 -22 -13 -67 -44 -100 -70 -33 -25 -90 -62 -126 -83 -36 -20\r
        -72 -44 -79 -52 -17 -21 -193 -136 -240 -158 -19 -8 -64 -41 -100 -72 -36 -32\r
        -76 -64 -90 -74 -58 -37 -188 -142 -193 -154 -3 -7 -34 -28 -70 -46 -36 -18\r
        -76 -44 -88 -57 -12 -13 -27 -24 -33 -25 -6 0 -31 -16 -56 -35 -25 -19 -65\r
        -47 -89 -62 -24 -15 -58 -39 -75 -53 -72 -60 -167 -129 -246 -179 -80 -51\r
        -101 -66 -182 -131 -18 -14 -49 -34 -68 -44 -19 -10 -65 -45 -101 -79 -75 -69\r
        -112 -98 -180 -141 -89 -57 -124 -83 -143 -104 -11 -11 -24 -21 -31 -21 -6 0\r
        -27 -16 -45 -35 -19 -20 -69 -56 -110 -80 -41 -25 -104 -70 -140 -100 -35 -30\r
        -69 -55 -75 -55 -6 0 -26 -16 -45 -35 -19 -19 -52 -44 -73 -55 -43 -23 -99\r
        -64 -163 -122 -36 -31 -109 -86 -327 -245 -21 -15 -62 -48 -92 -73 -100 -84\r
        -140 -115 -191 -146 -67 -40 -178 -130 -279 -226 -45 -43 -85 -78 -90 -78 -23\r
        0 -180 -142 -201 -182 -8 -16 -20 -28 -26 -28 -6 0 -44 -30 -85 -67 -40 -38\r
        -111 -102 -158 -143 -47 -41 -160 -149 -251 -240 -90 -91 -181 -181 -201 -200\r
        -42 -41 -53 -52 -221 -230 -70 -75 -148 -160 -174 -190 -25 -30 -87 -102 -138\r
        -160 -50 -58 -106 -127 -125 -155 -18 -27 -59 -75 -89 -105 -31 -30 -56 -58\r
        -56 -63 0 -16 -89 -124 -171 -208 -50 -51 -96 -109 -117 -148 -19 -36 -52 -92\r
        -75 -125 -50 -74 -69 -110 -151 -291 -60 -130 -93 -201 -256 -540 -34 -71 -91\r
        -195 -125 -275 -91 -212 -233 -514 -362 -768 -83 -165 -123 -257 -154 -355\r
        -69 -223 -526 -1590 -558 -1671 -42 -104 -128 -274 -192 -376 -110 -178 -114\r
        -186 -149 -345 -10 -44 -23 -96 -28 -115 -6 -19 -18 -64 -27 -100 -9 -36 -23\r
        -87 -31 -115 -8 -27 -22 -84 -30 -125 -8 -41 -28 -111 -45 -156 -20 -55 -29\r
        -99 -29 -139 0 -71 -16 -161 -41 -235 -17 -48 -48 -180 -49 -203 0 -4 57 -6\r
        127 -5 l127 3 8 40 c9 47 44 212 58 273 6 23 10 52 10 63 0 12 13 67 29 123\r
        16 55 38 144 50 196 25 110 40 166 52 198 5 13 9 31 9 41 0 24 56 101 74 101\r
        19 0 72 -63 100 -118 41 -83 109 -206 130 -236 38 -52 181 -198 208 -212 36\r
        -19 74 -18 109 3 35 21 43 46 37 113 -4 34 -14 61 -34 87 -16 21 -41 56 -55\r
        78 -14 22 -43 61 -65 86 -58 68 -158 287 -193 425 -11 44 -32 101 -45 125 -30\r
        52 -46 144 -46 254 1 68 7 98 41 195 23 63 51 149 64 190 12 41 36 109 53 150\r
        16 41 33 91 37 110 4 19 14 46 22 59 13 21 48 109 90 231 8 25 38 97 65 160\r
        28 63 59 135 68 160 10 25 32 76 49 113 17 38 31 73 31 79 0 5 31 73 69 151\r
        38 78 88 185 111 237 23 52 53 112 67 132 13 20 44 83 68 140 66 158 118 266\r
        167 348 25 41 59 100 75 130 150 272 322 560 362 603 35 39 94 72 164 92 47\r
        14 64 14 94 4 33 -11 133 -99 133 -118 0 -4 28 -37 62 -72 33 -35 70 -80 81\r
        -99 11 -19 36 -54 56 -76 20 -23 72 -97 116 -164 94 -143 88 -133 114 -190 11\r
        -25 35 -67 55 -95 55 -80 110 -181 171 -315 31 -69 65 -134 74 -145 28 -32 43\r
        -60 161 -291 62 -120 132 -257 156 -304 80 -156 204 -416 204 -428 0 -7 13\r
        -38 29 -70 16 -32 43 -93 60 -137 17 -44 49 -111 71 -149 22 -37 40 -75 40\r
        -83 0 -9 13 -43 30 -77 16 -33 39 -92 51 -131 12 -38 34 -95 49 -125 15 -30\r
        33 -77 40 -105 7 -27 32 -88 55 -135 23 -47 47 -101 54 -121 6 -20 26 -61 45\r
        -91 18 -30 40 -72 48 -94 9 -21 35 -79 57 -127 23 -49 57 -128 76 -175 20 -48\r
        40 -95 45 -104 6 -10 10 -24 10 -31 0 -7 11 -35 24 -63 13 -27 27 -60 31 -74\r
        4 -14 11 -29 15 -35 4 -5 24 -57 43 -115 19 -58 45 -127 57 -155 12 -27 30\r
        -75 40 -105 10 -30 35 -92 54 -138 20 -46 43 -107 52 -137 l15 -55 119 0 119\r
        0 -5 33 c-3 17 -19 59 -34 92 -16 33 -32 71 -35 85 -4 14 -13 39 -21 55 -7 17\r
        -31 80 -54 140 -23 61 -46 119 -51 130 -5 11 -29 76 -53 145 -25 69 -74 197\r
        -110 285 -35 88 -81 203 -101 255 -20 52 -43 109 -50 125 -8 17 -23 53 -34 80\r
        -38 98 -147 341 -172 385 -14 25 -32 65 -39 90 -7 25 -17 50 -20 55 -4 6 -13\r
        28 -20 50 -7 22 -16 45 -20 50 -4 6 -13 27 -19 47 -7 20 -25 61 -41 90 -17 29\r
        -30 60 -30 68 0 8 -20 56 -44 105 -24 50 -55 115 -70 145 -14 30 -34 71 -45\r
        90 -10 19 -29 62 -41 95 -35 97 -73 176 -103 213 -15 20 -30 47 -34 61 -8 37\r
        -123 283 -177 381 -14 25 -35 65 -47 90 -12 25 -40 81 -61 124 -22 44 -48 103\r
        -59 130 -10 28 -41 87 -69 131 -27 44 -62 103 -76 130 -14 28 -32 57 -39 65\r
        -7 8 -32 51 -55 95 -24 44 -55 98 -70 120 -14 22 -42 67 -60 100 -18 33 -52\r
        87 -75 120 -24 33 -50 76 -60 95 -47 95 -343 476 -394 507 -14 9 -75 63 -136\r
        120 -60 57 -131 123 -156 146 -66 60 -70 98 -22 192 19 39 47 86 62 105 14 19\r
        41 58 60 85 19 28 55 73 80 101 25 28 60 71 76 94 17 24 48 65 70 91 82 96\r
        140 171 155 197 8 15 27 41 43 57 15 16 27 33 27 38 0 4 30 41 68 81 89 97\r
        153 171 195 226 19 26 52 59 72 74 20 16 49 48 64 71 15 24 58 76 97 116 38\r
        40 94 99 124 132 98 106 384 389 434 429 27 21 57 50 68 63 11 14 25 25 31 25\r
        7 0 80 68 162 150 83 83 169 162 193 177 23 15 42 31 42 35 0 4 23 19 50 33\r
        28 14 50 30 50 35 0 19 64 82 104 102 22 11 65 44 96 73 30 28 84 71 120 95\r
        128 85 270 203 270 225 0 6 16 19 35 28 19 9 51 31 72 49 21 19 55 43 77 53\r
        21 11 57 38 80 60 22 22 86 73 141 112 55 39 115 86 134 105 18 18 53 44 77\r
        58 81 47 179 117 209 150 17 17 47 41 68 52 22 11 58 36 80 57 39 35 210 151\r
        224 151 3 0 23 15 43 33 21 17 77 61 126 97 88 66 228 174 295 229 20 17 55\r
        40 78 52 23 11 44 25 47 30 3 5 29 24 57 43 29 18 77 55 108 82 31 27 81 63\r
        110 79 101 57 113 64 148 98 20 19 54 44 76 57 22 13 63 42 91 64 28 23 77 59\r
        108 81 32 22 90 66 129 98 39 31 76 57 82 57 6 0 31 17 55 37 24 20 64 48 89\r
        60 101 51 190 109 270 177 46 39 93 78 106 86 12 8 39 27 61 41 22 15 46 34\r
        53 43 15 18 132 97 191 129 19 11 46 29 60 41 43 37 108 86 116 86 9 0 101 67\r
        159 117 27 24 53 43 58 43 12 0 112 65 192 125 39 29 92 65 120 80 27 16 74\r
        48 105 71 30 24 60 44 66 44 6 0 21 11 34 25 13 13 50 38 84 55 60 30 156 93\r
        227 150 20 16 52 38 70 48 64 37 144 87 179 112 19 14 48 32 65 40 17 8 42 23\r
        55 33 14 9 79 53 145 96 66 43 185 121 265 173 143 93 266 168 277 168 3 0 23\r
        15 43 33 53 45 147 111 196 136 22 12 51 33 64 46 13 14 29 25 35 25 7 0 40\r
        18 74 40 34 22 63 40 66 40 2 0 30 18 63 39 32 22 76 49 97 61 20 11 80 56\r
        132 98 52 42 109 87 126 100 18 13 41 31 52 41 38 35 79 50 115 43 30 -6 40\r
        -16 67 -67 18 -33 37 -71 43 -85 5 -14 15 -33 20 -42 6 -10 10 -24 10 -32 0\r
        -8 10 -27 23 -43 13 -15 47 -73 76 -128 29 -55 58 -107 65 -115 6 -8 18 -28\r
        26 -45 8 -16 28 -52 45 -80 18 -27 51 -84 75 -125 23 -41 48 -82 55 -90 7 -8\r
        17 -30 24 -49 6 -19 28 -59 48 -90 21 -31 47 -73 58 -93 39 -71 78 -133 100\r
        -158 13 -14 29 -43 36 -65 7 -22 32 -60 56 -85 24 -25 43 -50 43 -56 0 -13 59\r
        -125 76 -145 8 -8 14 -23 14 -32 0 -9 5 -19 10 -22 17 -11 10 -107 -11 -140\r
        -26 -41 -35 -62 -49 -115 -7 -25 -16 -54 -20 -65 -22 -54 -31 -577 -12 -640 7\r
        -22 17 -69 23 -105 9 -62 18 -116 38 -232 5 -29 14 -82 19 -118 15 -94 22\r
        -130 39 -180 8 -24 27 -96 44 -160 28 -110 51 -191 106 -365 77 -245 93 -303\r
        93 -328 0 -15 4 -35 9 -45 5 -9 15 -37 21 -62 12 -43 28 -94 63 -205 9 -27 39\r
        -113 67 -190 28 -77 55 -158 61 -180 5 -22 25 -69 43 -105 18 -36 38 -81 46\r
        -100 7 -19 27 -66 45 -105 18 -38 38 -88 45 -110 7 -22 36 -87 65 -145 28 -58\r
        64 -136 79 -175 16 -38 43 -92 60 -120 18 -27 43 -72 55 -100 13 -27 38 -71\r
        56 -96 18 -25 36 -56 40 -69 11 -36 74 -141 170 -287 28 -42 73 -111 100 -153\r
        73 -113 86 -131 120 -170 16 -19 41 -56 54 -82 13 -26 45 -71 72 -102 27 -30\r
        49 -57 49 -61 0 -4 17 -27 37 -50 43 -48 123 -161 123 -173 0 -4 37 -43 82\r
        -87 44 -44 117 -123 160 -175 44 -52 96 -108 116 -123 20 -15 46 -45 57 -65\r
        11 -21 63 -77 115 -127 52 -49 156 -150 231 -224 74 -75 168 -163 209 -196 40\r
        -33 95 -79 120 -102 26 -24 52 -43 57 -43 5 0 18 -9 28 -20 10 -11 23 -20 28\r
        -20 5 0 31 -19 57 -42 84 -75 134 -114 170 -133 42 -22 83 -50 131 -90 35 -30\r
        98 -70 174 -110 22 -12 85 -50 140 -83 55 -34 107 -62 116 -62 9 0 44 -18 77\r
        -40 33 -22 65 -40 72 -40 6 0 35 -13 63 -28 29 -15 79 -39 112 -52 33 -13 65\r
        -26 70 -30 6 -4 28 -13 50 -20 22 -7 55 -21 73 -32 18 -10 44 -18 57 -18 13 0\r
        40 -9 60 -20 20 -11 42 -20 49 -20 7 0 56 -14 107 -30 103 -33 139 -43 214\r
        -60 28 -6 66 -15 85 -20 89 -22 132 -30 172 -30 24 0 75 -7 113 -16 104 -23\r
        212 -33 495 -46 320 -15 547 -15 765 1 94 7 247 16 340 21 188 9 243 15 325\r
        37 30 8 98 19 150 24 118 11 264 35 360 59 41 10 66 15 185 34 39 7 96 21 145\r
        36 14 4 52 14 85 20 33 7 85 19 115 27 30 8 73 19 95 24 22 5 58 14 80 20 22\r
        6 58 14 80 19 37 8 71 17 153 41 17 5 47 13 65 18 40 11 63 19 104 37 17 8 46\r
        17 65 20 46 8 88 24 120 46 14 10 40 18 57 18 16 0 66 16 110 35 44 20 100 39\r
        123 44 41 8 214 71 251 91 20 11 22 12 142 73 50 25 114 55 144 67 86 33 139\r
        59 146 70 3 5 34 23 68 39 34 17 73 36 87 44 14 7 68 35 120 62 52 26 102 53\r
        110 60 8 7 45 29 82 49 37 21 70 42 74 47 3 5 25 18 49 29 24 11 47 24 50 30\r
        3 6 26 19 50 30 24 11 46 24 49 29 4 5 34 28 69 52 34 23 87 65 118 93 31 28\r
        76 65 99 81 23 17 63 48 88 71 26 23 57 46 69 53 12 6 32 31 44 56 13 25 37\r
        54 54 65 52 32 192 190 228 258 11 20 36 56 57 78 21 23 51 61 66 85 15 24 51\r
        73 80 109 52 67 84 120 84 141 0 6 17 50 39 98 21 47 49 118 61 156 13 39 33\r
        93 46 120 12 28 26 64 29 80 4 17 10 39 15 50 7 19 12 37 41 148 6 23 15 52\r
        20 65 5 13 9 35 9 50 0 16 4 32 9 38 5 5 12 32 14 59 7 61 23 155 37 215 6 25\r
        15 83 21 130 6 47 14 117 19 155 4 39 13 88 19 110 6 22 16 112 22 200 6 88\r
        15 212 21 275 5 63 10 302 11 530 1 389 -6 574 -33 805 -5 44 -14 152 -20 240\r
        -14 233 -28 392 -40 460 -6 33 -13 99 -16 147 -6 77 -4 95 16 145 26 65 50\r
        103 91 148 23 26 189 325 189 341 0 4 11 19 24 34 12 15 31 52 40 82 10 29 24\r
        60 31 68 7 8 27 42 46 75 32 58 46 85 111 225 46 98 72 151 108 220 126 245\r
        200 401 200 420 0 7 32 76 70 155 39 79 70 148 70 154 0 6 4 19 9 29 16 28 71\r
        176 71 188 0 6 8 26 17 45 21 41 43 100 43 116 0 7 13 34 29 60 16 27 37 70\r
        47 98 27 74 77 168 91 173 7 2 31 -18 55 -43 40 -44 99 -102 447 -444 75 -73\r
        161 -154 191 -179 30 -26 96 -85 146 -132 50 -47 126 -114 168 -150 43 -36\r
        107 -93 142 -128 36 -35 73 -66 83 -70 10 -4 72 -58 137 -121 66 -62 144 -132\r
        174 -154 30 -22 98 -81 151 -131 52 -50 125 -116 162 -146 37 -30 100 -86 140\r
        -123 39 -37 99 -88 132 -112 95 -70 125 -96 125 -110 0 -8 14 -24 30 -37 17\r
        -13 56 -44 86 -70 30 -27 58 -48 62 -48 5 0 49 -39 99 -87 129 -124 239 -223\r
        248 -223 7 0 28 -18 185 -155 38 -33 90 -76 115 -95 26 -19 82 -66 126 -105\r
        134 -118 214 -188 279 -240 34 -27 103 -89 154 -137 51 -49 96 -88 101 -88 8\r
        0 22 -12 158 -130 164 -142 195 -167 237 -195 25 -17 100 -81 168 -142 68 -62\r
        128 -113 134 -113 5 0 55 -44 109 -97 55 -54 105 -100 112 -102 12 -4 87 -70\r
        212 -189 39 -37 85 -75 103 -84 18 -9 36 -28 41 -42 6 -13 22 -32 36 -43 23\r
        -15 77 -67 135 -128 15 -15 102 -94 235 -210 37 -33 86 -69 109 -80 30 -15 46\r
        -32 63 -68 13 -26 33 -51 46 -56 33 -14 114 -86 292 -260 88 -87 168 -160 178\r
        -164 9 -4 21 -17 26 -29 5 -13 129 -142 276 -288 147 -146 276 -278 286 -295\r
        10 -16 76 -89 146 -162 182 -187 277 -292 285 -314 4 -10 29 -29 55 -41 34\r
        -17 49 -31 54 -51 12 -44 150 -221 289 -372 36 -38 75 -87 85 -108 11 -21 52\r
        -71 91 -111 39 -41 81 -91 94 -112 25 -42 39 -59 161 -203 43 -52 79 -98 79\r
        -104 0 -5 10 -22 23 -37 67 -85 357 -514 357 -529 0 -4 12 -18 26 -32 14 -13\r
        34 -42 44 -64 10 -22 34 -63 52 -90 19 -28 52 -81 73 -120 21 -38 52 -92 70\r
        -120 18 -27 40 -68 50 -90 9 -22 25 -50 37 -62 11 -12 26 -31 32 -42 74 -131\r
        110 -205 122 -251 16 -57 19 -63 97 -179 27 -40 59 -95 73 -124 14 -29 36 -72\r
        50 -97 13 -25 36 -70 50 -100 47 -101 83 -174 129 -260 26 -46 56 -107 67\r
        -135 12 -27 29 -62 39 -76 10 -14 25 -45 34 -70 10 -24 64 -138 121 -254 56\r
        -115 110 -232 119 -260 9 -27 39 -96 66 -152 27 -56 49 -107 49 -113 0 -6 4\r
        -18 8 -28 82 -172 95 -200 128 -289 13 -38 28 -77 33 -88 5 -11 19 -54 31 -95\r
        42 -138 50 -161 64 -183 17 -26 69 -180 86 -255 6 -29 23 -75 37 -103 28 -58\r
        66 -156 95 -244 11 -33 32 -94 48 -135 77 -202 132 -394 180 -630 6 -30 20\r
        -77 30 -105 10 -27 23 -77 30 -110 6 -33 16 -76 21 -96 5 -20 9 -53 9 -73 l0\r
        -36 110 0 110 0 -6 33 c-3 17 -12 58 -20 90 -8 32 -14 77 -14 98 0 45 -16 119\r
        -35 164 -22 53 -63 188 -74 245 -6 30 -15 84 -22 120 -6 36 -24 101 -39 145\r
        -16 44 -38 115 -51 158 -13 43 -27 80 -31 83 -4 3 -8 14 -8 25 0 10 -4 27 -9\r
        37 -4 9 -14 33 -20 52 -39 112 -74 208 -82 225 -5 11 -33 92 -63 180 -30 88\r
        -61 176 -69 195 -41 93 -47 109 -47 117 0 5 -14 35 -31 68 -36 69 -99 240 -99\r
        270 0 11 -12 45 -26 75 -14 30 -34 80 -44 111 -17 52 -36 91 -161 329 -27 52\r
        -56 115 -63 140 -8 25 -38 95 -68 155 -31 61 -61 128 -68 150 -7 22 -20 51\r
        -30 65 -9 14 -40 74 -68 133 -28 59 -60 121 -72 136 -11 16 -20 35 -20 43 0\r
        26 -89 208 -120 243 -9 11 -27 42 -40 70 -12 27 -31 61 -41 74 -11 13 -19 34\r
        -19 48 0 36 -25 88 -74 152 -24 32 -57 85 -73 117 -60 119 -113 218 -127 233\r
        -8 9 -37 61 -66 116 -29 55 -58 107 -65 115 -7 8 -31 51 -53 96 -22 44 -48 86\r
        -57 94 -9 7 -29 39 -45 71 -15 32 -46 81 -67 111 -22 29 -52 73 -67 98 -15 25\r
        -42 65 -61 90 -19 25 -51 74 -71 110 -21 36 -45 74 -55 85 -10 11 -25 36 -33\r
        55 -8 19 -31 51 -50 69 -20 19 -36 40 -36 46 0 6 -21 33 -47 60 -27 28 -65 75\r
        -85 106 -20 30 -44 61 -52 68 -9 8 -16 19 -16 25 0 7 -13 25 -30 41 -16 16\r
        -30 34 -30 40 0 6 -23 33 -51 60 -28 28 -60 68 -71 90 -20 38 -32 55 -103 143\r
        -17 20 -37 50 -45 65 -21 42 -136 175 -268 310 -64 66 -138 142 -164 169 -27\r
        27 -48 53 -48 57 0 4 -26 35 -57 69 -32 33 -101 109 -153 167 -194 217 -904\r
        935 -1146 1160 -59 55 -124 117 -143 139 -20 21 -51 52 -70 70 -18 17 -56 53\r
        -85 80 -28 27 -96 88 -151 136 -55 47 -135 120 -177 161 -42 41 -104 97 -138\r
        124 -34 28 -82 68 -108 90 -26 23 -63 53 -82 67 -19 14 -81 70 -137 125 -55\r
        54 -118 109 -138 123 -20 14 -57 44 -82 68 -25 24 -56 48 -69 52 -13 5 -34 26\r
        -47 47 -14 21 -42 47 -63 58 -39 19 -99 70 -257 218 -46 42 -87 77 -92 77 -5\r
        0 -41 30 -81 68 -76 71 -81 75 -214 179 -47 37 -112 92 -146 122 -117 108\r
        -213 191 -220 191 -14 0 -152 124 -333 300 -47 46 -168 149 -254 217 -26 21\r
        -76 63 -110 94 -35 31 -84 68 -110 84 -26 15 -54 40 -62 55 -8 15 -29 39 -47\r
        53 -82 64 -144 117 -207 175 -37 34 -71 62 -75 62 -12 0 -111 87 -240 211 -67\r
        63 -161 148 -211 189 -49 41 -121 104 -160 141 -38 36 -78 70 -88 75 -9 6 -52\r
        42 -95 81 -42 39 -111 101 -152 137 -41 36 -87 77 -103 90 -15 14 -69 62 -120\r
        107 -50 45 -159 146 -242 225 -173 166 -147 140 -357 358 -174 180 -202 202\r
        -288 231 -80 27 -100 52 -100 125 0 39 6 71 18 92 11 18 25 51 32 73 7 22 16\r
        45 20 50 8 10 39 112 60 195 6 25 14 54 19 65 21 54 91 282 91 297 0 9 5 20\r
        10 23 6 3 10 21 10 40 0 19 5 37 10 40 6 3 10 21 10 40 0 19 4 44 9 57 5 13\r
        14 41 19 63 6 22 29 101 52 175 55 181 56 185 70 260 7 36 21 84 31 107 10 24\r
        19 49 19 57 0 8 7 41 16 73 21 76 32 137 44 253 13 128 21 169 31 176 5 3 9\r
        23 9 44 0 36 6 68 31 170 14 58 40 201 50 270 5 36 13 92 19 125 5 33 14 92\r
        20 130 6 39 15 97 21 130 10 66 25 185 39 315 4 47 14 108 20 135 6 28 15 104\r
        20 170 15 207 27 307 45 390 12 56 15 101 11 150 -20 234 -26 275 -45 327 -17\r
        43 -30 62 -57 77 -19 12 -40 21 -46 21 -6 0 -27 -17 -48 -37z m-13722 -6957\r
        c26 -14 71 -74 106 -144 9 -18 47 -68 84 -111 70 -83 132 -175 132 -196 0 -7\r
        18 -33 40 -58 22 -25 40 -49 40 -54 0 -5 14 -22 30 -38 17 -16 30 -32 30 -37\r
        0 -4 21 -35 48 -69 26 -34 63 -85 83 -114 19 -29 69 -89 110 -132 41 -44 85\r
        -102 99 -129 13 -27 38 -66 55 -86 54 -66 80 -99 95 -123 19 -30 68 -87 148\r
        -174 34 -37 62 -72 62 -77 0 -6 14 -23 31 -40 17 -16 38 -42 46 -58 9 -17 37\r
        -53 63 -80 26 -28 58 -67 72 -86 13 -19 78 -91 143 -159 66 -68 125 -131 130\r
        -141 9 -16 342 -363 463 -483 156 -154 235 -229 280 -264 28 -23 83 -70 123\r
        -104 189 -168 262 -229 274 -229 5 0 29 -19 55 -42 64 -59 161 -138 169 -138\r
        3 0 16 -15 28 -33 12 -17 39 -41 60 -52 21 -10 54 -33 74 -50 20 -16 54 -41\r
        74 -55 21 -14 56 -41 79 -61 38 -33 86 -63 175 -110 19 -10 44 -27 55 -38 24\r
        -22 96 -62 241 -134 55 -27 107 -56 115 -63 20 -17 228 -124 241 -124 6 0 57\r
        -22 114 -50 57 -27 111 -50 119 -50 8 0 17 -4 20 -9 3 -5 18 -12 33 -16 16 -3\r
        42 -12 58 -19 88 -38 134 -55 170 -64 22 -6 59 -15 83 -21 169 -43 193 -48\r
        337 -72 33 -5 87 -14 120 -19 33 -6 94 -16 135 -23 109 -17 959 -16 1020 2 25\r
        7 68 17 95 21 28 5 70 14 95 20 48 12 140 25 255 36 46 4 91 16 132 35 34 16\r
        68 29 76 29 8 0 39 9 68 21 30 12 63 25 74 29 11 4 43 15 70 23 107 34 231 80\r
        245 91 20 16 67 36 85 36 8 0 42 13 75 29 34 17 78 35 98 42 20 6 48 19 62 29\r
        14 9 68 36 120 60 52 25 110 57 128 72 18 15 42 28 53 28 22 0 114 43 139 65\r
        8 7 58 34 110 60 52 26 108 58 125 70 16 12 46 28 65 35 19 7 44 21 55 30 11\r
        9 54 36 95 60 119 69 168 100 181 116 7 9 46 34 86 57 41 23 94 54 119 68 24\r
        14 61 41 82 60 20 19 57 48 82 64 25 16 62 44 83 62 20 18 41 33 45 33 5 0 33\r
        23 63 51 77 73 156 132 215 162 32 16 59 39 71 60 11 18 40 44 64 56 24 13 72\r
        50 106 82 34 32 66 59 71 59 6 0 33 28 62 61 28 34 68 74 88 89 47 35 429 416\r
        451 450 9 14 33 41 55 60 21 19 48 46 60 59 11 13 50 56 86 95 68 75 90 106\r
        90 131 0 8 15 21 34 29 34 14 153 148 196 221 13 22 42 60 64 85 151 168 255\r
        309 256 347 0 7 18 24 41 39 l41 26 24 -22 c42 -41 61 -98 68 -210 3 -58 11\r
        -152 17 -210 24 -248 30 -383 35 -864 4 -336 2 -516 -5 -530 -9 -20 -12 -57\r
        -30 -381 -7 -126 -18 -195 -51 -333 -5 -23 -10 -60 -10 -82 0 -36 -5 -62 -30\r
        -170 -17 -68 -29 -126 -41 -190 -6 -36 -18 -85 -26 -110 -21 -62 -33 -107 -43\r
        -160 -5 -25 -14 -67 -20 -95 -6 -27 -13 -62 -17 -78 -3 -15 -9 -30 -14 -33 -5\r
        -3 -9 -12 -9 -20 0 -13 -50 -118 -146 -304 -17 -33 -39 -70 -50 -83 -32 -37\r
        -60 -80 -89 -137 -27 -53 -54 -91 -122 -170 -18 -21 -33 -42 -33 -47 0 -15\r
        -389 -392 -435 -422 -22 -14 -57 -39 -77 -56 -20 -16 -54 -43 -75 -58 -21 -16\r
        -69 -52 -106 -80 -37 -29 -96 -68 -131 -87 -277 -152 -279 -153 -321 -180 -33\r
        -20 -371 -190 -379 -190 -3 0 -29 -11 -58 -24 -29 -13 -64 -27 -78 -31 -14 -4\r
        -42 -19 -62 -31 -21 -13 -40 -24 -44 -24 -3 0 -40 -16 -81 -35 -41 -19 -80\r
        -35 -86 -35 -12 0 -49 -11 -132 -41 -33 -12 -91 -32 -129 -45 -38 -13 -78 -30\r
        -90 -37 -31 -21 -165 -68 -216 -78 -79 -14 -123 -26 -196 -53 -39 -14 -81 -26\r
        -92 -26 -11 0 -41 -9 -67 -20 -26 -11 -56 -20 -68 -20 -11 0 -34 -4 -51 -9\r
        -46 -14 -104 -28 -171 -41 -33 -7 -69 -16 -80 -20 -11 -5 -51 -14 -90 -20 -38\r
        -7 -79 -16 -90 -20 -11 -5 -36 -11 -55 -15 -19 -3 -57 -10 -85 -16 -53 -10\r
        -151 -24 -280 -39 -44 -5 -109 -14 -145 -20 -36 -7 -105 -16 -155 -21 -94 -9\r
        -199 -22 -325 -39 -232 -32 -798 -45 -980 -22 -58 7 -159 17 -225 23 -372 29\r
        -463 40 -525 61 -25 9 -67 19 -95 22 -65 8 -141 22 -185 34 -19 6 -46 14 -60\r
        17 -14 4 -34 10 -45 15 -11 4 -42 14 -70 20 -27 7 -72 23 -100 35 -27 13 -69\r
        31 -92 39 -24 9 -62 23 -85 32 -24 8 -83 35 -133 58 -129 62 -183 86 -194 86\r
        -5 0 -36 17 -68 39 -109 73 -154 101 -161 101 -4 0 -32 16 -62 36 -30 19 -64\r
        40 -75 45 -11 5 -40 25 -65 44 -41 31 -98 72 -141 100 -64 41 -92 60 -147 102\r
        -35 27 -94 75 -132 108 -37 33 -87 74 -111 90 -23 17 -123 109 -221 205 -98\r
        96 -189 180 -202 187 -13 7 -33 28 -44 46 -10 19 -39 49 -62 68 -55 44 -72 61\r
        -150 154 -36 42 -99 113 -141 158 -94 103 -224 263 -266 330 -17 27 -43 60\r
        -56 71 -13 12 -37 39 -53 61 -16 22 -50 67 -76 99 -27 33 -48 65 -48 71 0 7\r
        -9 20 -21 31 -19 17 -79 100 -79 109 0 2 -15 25 -32 51 -18 25 -37 53 -43 62\r
        -5 9 -24 39 -41 67 -17 27 -55 93 -84 145 -30 52 -61 104 -71 115 -10 11 -30\r
        45 -45 75 -15 30 -49 88 -76 128 -26 41 -48 82 -48 91 0 9 -15 45 -33 81 -19\r
        36 -42 89 -51 118 -10 29 -28 65 -41 80 -12 15 -26 38 -30 52 -4 14 -25 61\r
        -45 105 -36 76 -120 311 -120 338 0 6 -14 39 -30 72 -16 33 -30 68 -30 77 0 9\r
        -4 19 -9 22 -5 3 -12 18 -16 33 -3 15 -15 46 -25 68 -10 22 -22 53 -25 68 -4\r
        15 -11 30 -16 33 -5 3 -9 13 -9 22 0 18 -77 268 -91 294 -5 10 -9 24 -9 32 0\r
        7 -8 35 -19 62 -10 27 -33 96 -51 154 -18 58 -36 118 -41 134 -5 16 -9 40 -9\r
        54 0 14 -4 39 -9 56 -16 52 -34 125 -62 256 -6 30 -23 87 -36 125 -58 168 -66\r
        193 -74 245 -20 126 -31 222 -39 340 -4 69 -12 146 -17 173 -6 26 -7 120 -4\r
        210 6 157 7 165 34 205 29 45 43 50 85 28z`}),(0,b.jsx)(`path`,{d:`M21365 12867 c-178 -93 -219 -119 -263 -161 -45 -42 -72 -84 -72\r
        -109 0 -25 56 -77 83 -77 26 0 162 64 173 81 8 13 117 64 166 77 38 10 46 7\r
        62 -28 30 -66 89 -143 132 -173 60 -43 73 -46 244 -72 25 -4 69 -16 98 -26 29\r
        -10 71 -19 94 -19 23 0 58 -5 77 -11 74 -24 148 -52 206 -78 33 -16 83 -36\r
        110 -46 28 -10 61 -28 75 -40 14 -11 39 -27 55 -35 34 -17 100 -70 168 -135\r
        77 -74 91 -80 179 -79 104 2 132 14 152 69 16 41 16 45 -1 81 -20 41 -25 45\r
        -97 70 -27 10 -66 31 -87 48 -125 101 -261 175 -320 176 -9 0 -22 7 -29 15\r
        -18 22 -53 37 -170 74 -58 19 -139 46 -180 61 -41 16 -95 31 -120 34 -25 4\r
        -65 11 -90 16 -181 36 -208 52 -271 154 -42 68 -59 87 -117 123 -37 24 -75 43\r
        -84 43 -9 0 -20 5 -23 10 -12 19 -51 8 -150 -43z`}),(0,b.jsx)(`path`,{d:`M18189 12782 c-22 -9 -186 -167 -228 -219 -18 -23 -52 -54 -75 -70\r
        -54 -36 -96 -74 -96 -88 0 -6 -42 -52 -94 -104 -103 -103 -119 -134 -114 -221\r
        3 -52 5 -56 43 -77 95 -54 171 -12 206 112 15 56 27 77 59 107 22 21 50 43 63\r
        49 12 7 31 20 42 30 11 10 39 33 62 51 23 18 102 85 177 148 112 94 139 123\r
        153 159 15 38 15 47 2 69 -25 44 -146 77 -200 54z`}),(0,b.jsx)(`path`,{d:`M17025 12435 c-22 -13 -56 -32 -75 -41 -165 -77 -331 -172 -377 -215\r
        -15 -15 -46 -36 -69 -47 -22 -11 -46 -28 -53 -36 -8 -9 -18 -16 -23 -16 -12 0\r
        -108 -72 -132 -99 -11 -11 -24 -21 -31 -21 -6 0 -43 -30 -81 -66 -38 -37 -85\r
        -75 -105 -86 -20 -10 -46 -30 -59 -43 -13 -14 -29 -25 -35 -25 -20 0 -54 -45\r
        -61 -79 -6 -28 -3 -36 22 -57 42 -34 118 -33 165 2 19 14 63 43 99 64 36 21\r
        79 53 95 70 17 18 48 41 70 52 22 11 56 35 75 52 36 33 133 96 149 96 5 0 15\r
        7 22 16 28 34 159 125 242 168 47 25 105 59 129 76 23 17 53 33 67 37 48 12\r
        121 65 152 110 l31 45 -33 34 c-30 31 -38 34 -88 34 -42 0 -66 -7 -96 -25z`}),(0,b.jsx)(`path`,{d:`M20580 11980 c-182 -18 -208 -23 -265 -50 -33 -16 -89 -42 -125 -59\r
        -95 -45 -151 -55 -208 -37 -45 13 -121 45 -207 86 -51 24 -137 34 -295 34\r
        -204 0 -390 -18 -455 -44 -11 -4 -36 -14 -55 -21 -19 -7 -48 -21 -65 -31 -16\r
        -9 -51 -29 -76 -42 -25 -13 -51 -32 -58 -40 -12 -15 -44 -35 -166 -106 -24\r
        -14 -62 -43 -87 -66 -24 -22 -71 -59 -105 -82 -34 -23 -64 -46 -68 -51 -6 -11\r
        -123 -101 -130 -101 -2 0 -24 -14 -47 -30 -24 -17 -68 -47 -98 -67 -30 -20\r
        -71 -51 -90 -69 -19 -18 -73 -51 -121 -73 -47 -21 -105 -53 -130 -69 -70 -48\r
        -173 -82 -246 -82 -94 0 -142 -36 -187 -143 -8 -17 -24 -53 -35 -79 -15 -34\r
        -21 -69 -21 -117 0 -39 -4 -72 -9 -75 -13 -8 -19 -116 -9 -153 10 -38 33 -53\r
        78 -53 46 0 85 33 117 98 15 31 57 92 93 136 60 72 73 82 170 130 l104 51 126\r
        3 c122 4 320 -11 390 -28 19 -5 62 -14 95 -20 33 -6 89 -20 125 -31 36 -10 91\r
        -19 123 -19 50 0 165 -23 253 -50 17 -6 40 -10 52 -10 11 0 31 -4 44 -9 13 -5\r
        68 -19 123 -31 55 -12 116 -26 136 -31 20 -5 44 -9 53 -9 9 0 35 -9 59 -19 42\r
        -19 54 -22 177 -41 36 -6 92 -15 125 -20 33 -5 89 -14 125 -20 36 -6 92 -15\r
        125 -20 112 -19 370 -33 630 -34 242 -1 348 6 530 34 115 18 135 22 141 31 3\r
        5 15 9 28 9 12 0 26 3 30 7 10 11 79 33 102 33 11 0 38 13 60 28 21 16 59 34\r
        84 42 25 7 49 17 55 22 5 4 15 8 23 8 7 0 55 20 106 45 52 25 97 45 101 45 5\r
        0 31 11 59 24 28 13 69 29 91 36 22 6 49 15 60 20 117 48 318 66 550 50 150\r
        -11 157 -10 189 10 57 34 59 62 14 152 -46 89 -231 279 -313 320 -33 16 -67\r
        36 -75 43 -37 34 -218 103 -325 125 -33 6 -68 16 -77 21 -10 5 -30 9 -45 9\r
        -28 0 -68 11 -140 39 -23 9 -91 59 -151 111 -118 103 -204 160 -267 180 -22 7\r
        -48 16 -57 21 -10 5 -27 9 -37 9 -11 0 -23 5 -26 10 -3 6 -15 10 -26 10 -10 0\r
        -27 4 -37 9 -30 16 -181 51 -219 51 -25 0 -71 12 -118 31 -31 12 -191 17 -275\r
        9z m270 -218 c30 -6 84 -15 120 -21 142 -24 161 -28 225 -56 17 -7 47 -20 68\r
        -29 34 -14 37 -18 37 -54 0 -30 -5 -41 -22 -50 -14 -6 -118 -14 -248 -17 -124\r
        -4 -256 -11 -295 -17 -97 -13 -404 -39 -690 -58 -88 -5 -191 -15 -230 -21 -66\r
        -9 -115 -15 -350 -38 -178 -17 -219 -23 -265 -38 -42 -14 -74 -20 -250 -44\r
        -198 -26 -282 -41 -312 -54 -9 -4 -33 -2 -52 5 -29 9 -35 17 -38 43 -4 40 48\r
        108 107 138 22 12 69 45 105 74 36 28 80 60 98 69 18 9 56 35 85 57 81 61 202\r
        89 393 89 66 0 146 5 178 11 42 7 72 7 109 -1 92 -21 131 -33 157 -50 14 -9\r
        59 -26 100 -39 41 -12 92 -27 113 -33 29 -9 50 -9 90 1 71 17 120 34 132 43 5\r
        4 15 8 22 8 7 0 50 18 97 40 46 22 91 40 99 40 9 0 19 5 22 11 8 13 313 6 395\r
        -9z m818 -442 c42 -16 76 -20 177 -20 106 0 130 -3 160 -20 20 -11 53 -20 75\r
        -20 21 0 42 -4 45 -10 3 -5 14 -10 24 -10 18 0 76 -28 143 -69 32 -19 78 -78\r
        78 -99 0 -16 -68 -52 -97 -52 -17 0 -55 -5 -85 -11 -29 -6 -78 -15 -108 -21\r
        -30 -5 -66 -14 -80 -18 -14 -4 -45 -13 -70 -20 -25 -7 -54 -16 -65 -20 -11 -4\r
        -40 -14 -65 -21 -25 -7 -63 -24 -85 -38 -62 -39 -86 -51 -104 -51 -9 0 -21 -4\r
        -26 -8 -6 -5 -35 -17 -66 -26 -32 -10 -68 -29 -83 -45 -21 -22 -41 -31 -81\r
        -36 -30 -3 -84 -18 -122 -32 -129 -47 -155 -54 -288 -69 -27 -3 -59 -9 -70\r
        -14 -52 -23 -444 -31 -620 -12 -55 6 -127 13 -160 16 -170 18 -304 44 -329 65\r
        -11 10 -48 19 -100 23 -145 13 -242 30 -326 58 -19 6 -64 16 -100 21 -118 18\r
        -175 28 -220 39 -25 6 -63 15 -85 20 -22 5 -57 13 -77 19 -96 28 -167 45 -248\r
        61 -25 5 -60 12 -78 16 -22 4 -41 18 -57 41 -28 42 -23 63 15 63 16 0 32 5 35\r
        10 3 6 24 10 46 10 26 0 57 10 87 28 33 19 67 29 117 34 87 8 180 21 410 60\r
        33 5 107 13 165 18 58 5 130 13 160 19 134 28 177 33 510 62 207 17 323 28\r
        415 39 50 5 206 14 349 19 142 6 261 13 264 16 3 3 132 5 286 5 257 0 286 -2\r
        334 -20z`}),(0,b.jsx)(`path`,{d:`M19484 9821 c-18 -11 -40 -31 -50 -46 -11 -15 -39 -50 -64 -78 -65\r
        -74 -82 -103 -117 -187 -49 -118 -46 -109 -70 -264 -6 -42 7 -96 40 -163 18\r
        -39 23 -43 58 -43 31 0 43 6 65 34 35 44 54 105 54 178 0 31 5 70 11 85 6 15\r
        16 39 21 53 23 58 73 147 98 175 40 44 85 115 100 156 11 32 11 41 -6 75 -17\r
        36 -23 39 -64 42 -31 2 -55 -4 -76 -17z`}),(0,b.jsx)(`path`,{d:`M21126 9569 c-19 -15 -26 -30 -26 -54 0 -39 17 -67 113 -182 72 -87\r
        93 -98 168 -91 29 3 36 8 46 40 17 53 2 91 -67 163 -31 33 -62 70 -69 82 -14\r
        27 -80 63 -114 63 -13 0 -36 -9 -51 -21z`}),(0,b.jsx)(`path`,{d:`M20135 9440 c-22 -25 -22 -104 0 -135 27 -35 110 -156 121 -176 6\r
        -10 18 -27 27 -37 10 -10 17 -22 17 -26 0 -10 40 -66 75 -104 43 -48 76 -62\r
        142 -62 79 0 130 20 153 58 17 28 18 34 4 60 -19 38 -30 47 -79 62 -81 24\r
        -141 80 -196 183 -35 66 -107 154 -145 176 -45 27 -95 27 -119 1z`}),(0,b.jsx)(`path`,{d:`M28540 5741 c-38 -12 -90 -40 -140 -76 -25 -18 -67 -44 -95 -59 -80\r
        -42 -142 -80 -162 -97 -10 -9 -34 -25 -53 -36 -19 -10 -62 -36 -95 -58 -33\r
        -21 -82 -50 -110 -63 -27 -13 -73 -39 -102 -58 -28 -19 -56 -34 -61 -34 -5 0\r
        -17 -9 -27 -20 -10 -11 -42 -34 -70 -50 -28 -16 -60 -39 -70 -50 -10 -11 -22\r
        -20 -27 -20 -5 0 -25 -11 -46 -23 -20 -13 -64 -39 -97 -57 -33 -18 -90 -53\r
        -127 -76 -37 -24 -70 -44 -73 -44 -4 0 -25 -13 -48 -28 -23 -15 -55 -34 -72\r
        -42 -16 -8 -38 -21 -47 -28 -10 -8 -44 -29 -77 -46 -32 -17 -92 -53 -132 -80\r
        -40 -27 -115 -71 -167 -97 -52 -26 -101 -54 -111 -62 -9 -7 -32 -21 -52 -30\r
        -19 -9 -43 -25 -54 -37 -10 -11 -23 -20 -30 -20 -6 0 -40 -19 -76 -42 -78 -52\r
        -133 -84 -179 -104 -19 -9 -64 -35 -100 -58 -64 -41 -229 -125 -362 -184 -37\r
        -17 -86 -43 -110 -59 -24 -16 -77 -45 -118 -65 -41 -19 -94 -51 -117 -71 -40\r
        -33 -91 -61 -253 -136 -36 -17 -74 -36 -85 -43 -62 -41 -103 -61 -149 -75 -28\r
        -8 -60 -23 -71 -33 -26 -23 -60 -40 -80 -40 -9 0 -35 -13 -58 -28 -23 -16 -58\r
        -34 -77 -41 -19 -7 -60 -26 -91 -42 -31 -16 -62 -29 -68 -29 -6 0 -35 -11 -65\r
        -25 -30 -14 -58 -25 -61 -25 -4 0 -21 -6 -38 -14 -18 -7 -48 -20 -67 -27 -58\r
        -22 -143 -77 -157 -101 -36 -66 5 -108 108 -108 38 0 78 5 89 10 11 6 29 15\r
        40 20 11 5 26 10 35 10 8 0 29 8 47 18 18 11 50 24 71 31 21 7 89 39 150 71\r
        62 31 124 61 137 65 34 10 353 169 387 192 15 11 53 30 83 42 81 34 250 119\r
        366 184 56 31 105 57 109 57 4 0 30 15 58 34 29 19 70 42 92 52 22 10 72 39\r
        110 65 39 25 97 56 130 69 33 13 72 32 87 42 14 10 29 18 32 18 20 0 109 50\r
        155 87 30 24 73 52 96 63 23 10 48 26 55 36 8 9 37 27 65 40 86 41 157 82 184\r
        107 28 25 76 56 144 91 23 12 53 28 67 37 84 52 142 86 195 113 33 16 99 55\r
        146 86 48 30 99 62 115 71 16 10 70 42 120 72 50 30 111 64 135 76 57 28 85\r
        44 106 63 18 15 120 79 200 124 23 13 71 46 106 72 35 27 92 63 128 80 71 35\r
        99 51 221 133 98 66 137 90 200 124 54 29 78 67 78 123 0 63 -44 86 -120 63z`}),(0,b.jsx)(`path`,{d:`M34168 5673 c-46 -48 -160 -279 -225 -458 -14 -38 -34 -81 -44 -94\r
        -11 -13 -19 -29 -19 -36 0 -6 -18 -49 -40 -94 -22 -45 -40 -86 -40 -91 0 -6\r
        -18 -46 -40 -89 -22 -43 -40 -83 -40 -88 0 -5 -9 -28 -20 -51 -11 -22 -20 -47\r
        -20 -54 0 -23 -30 -100 -66 -172 -19 -38 -34 -74 -34 -80 0 -6 -15 -43 -34\r
        -81 -41 -85 -86 -199 -86 -216 0 -13 -34 -117 -50 -154 -8 -19 -43 -117 -116\r
        -327 -18 -53 -42 -112 -54 -132 -11 -20 -20 -47 -20 -59 0 -12 -16 -67 -35\r
        -122 -20 -55 -43 -122 -52 -150 -8 -27 -19 -59 -24 -70 -18 -45 -69 -203 -69\r
        -217 0 -13 -18 -65 -50 -143 -9 -20 -32 -83 -68 -185 -11 -30 -25 -73 -32 -95\r
        -6 -22 -20 -59 -31 -82 -10 -24 -19 -48 -19 -55 0 -14 -18 -72 -36 -113 -25\r
        -60 -36 -91 -54 -155 -10 -36 -32 -103 -50 -150 -18 -47 -36 -103 -40 -125\r
        -12 -56 -37 -131 -65 -190 -12 -27 -39 -99 -59 -160 -20 -60 -41 -119 -46\r
        -130 -5 -11 -14 -42 -20 -70 -13 -62 -45 -168 -77 -260 -32 -89 -44 -131 -50\r
        -175 -2 -19 -7 -42 -10 -50 -4 -8 -14 -42 -23 -75 -10 -33 -33 -105 -52 -160\r
        -20 -55 -41 -120 -48 -145 -6 -25 -16 -55 -21 -68 -5 -13 -9 -34 -9 -48 0 -13\r
        -9 -43 -19 -67 -11 -23 -21 -63 -24 -89 l-5 -48 103 0 102 0 16 53 c8 28 22\r
        72 30 97 35 101 76 238 87 290 7 30 16 66 21 80 4 14 13 50 20 80 7 30 16 60\r
        19 65 4 6 12 30 19 55 8 25 21 68 31 95 10 28 23 70 30 95 7 25 16 56 20 70 5\r
        14 11 39 15 55 4 17 12 44 20 60 7 17 19 53 25 80 7 28 21 67 32 87 10 21 18\r
        49 18 63 0 14 4 33 9 43 4 9 17 44 28 77 12 33 30 85 41 115 10 30 29 89 42\r
        130 24 81 25 83 68 181 16 36 35 90 41 120 7 30 25 95 41 144 15 50 31 104 35\r
        120 3 17 17 53 29 80 13 28 31 77 41 110 9 33 23 74 30 90 7 17 18 50 24 75\r
        22 80 33 114 52 154 11 22 19 48 19 59 0 10 13 46 29 80 16 34 39 96 51 137\r
        12 41 26 80 30 85 7 9 30 81 62 190 6 22 15 44 20 49 4 6 8 24 8 41 0 17 4 35\r
        8 41 5 5 14 29 22 54 7 25 19 60 27 77 7 18 25 63 39 100 13 38 28 77 33 88 4\r
        11 14 38 21 60 7 22 25 68 41 101 16 34 29 71 29 83 0 12 4 29 9 39 34 65 71\r
        152 71 167 0 20 98 275 111 290 5 5 9 15 9 22 0 7 16 48 36 90 20 43 47 107\r
        60 143 40 107 56 142 92 205 16 28 32 66 36 85 3 19 13 49 22 65 9 17 28 52\r
        42 80 45 92 109 166 176 204 72 40 100 95 82 161 -18 66 -26 82 -54 113 -23\r
        24 -33 27 -92 27 -59 0 -69 -3 -92 -27z`}),(0,b.jsx)(`path`,{d:`M10441 5546 c-94 -34 -80 -131 31 -214 29 -22 67 -54 83 -72 17 -18\r
        62 -53 100 -78 39 -25 96 -63 128 -84 32 -21 61 -38 63 -38 3 0 20 -11 38 -25\r
        18 -13 53 -34 79 -45 25 -11 49 -24 51 -29 3 -5 50 -30 103 -57 54 -27 116\r
        -60 138 -74 51 -33 91 -50 116 -50 11 0 41 -16 66 -35 26 -20 58 -38 72 -42\r
        14 -3 46 -16 71 -29 25 -13 49 -24 53 -24 14 0 80 -32 105 -51 13 -10 53 -28\r
        90 -40 37 -12 71 -25 77 -30 5 -5 16 -9 25 -9 22 0 75 -26 90 -45 7 -8 18 -15\r
        26 -15 7 0 60 -20 117 -44 58 -25 117 -48 133 -52 16 -4 57 -20 92 -36 34 -15\r
        72 -28 83 -28 12 0 44 -13 72 -28 29 -15 72 -34 97 -42 25 -7 68 -23 95 -35\r
        28 -12 73 -30 100 -39 28 -10 59 -21 70 -26 43 -18 142 -50 157 -50 9 0 21 -7\r
        28 -15 17 -21 69 -45 95 -45 13 0 63 -20 111 -45 49 -25 93 -45 97 -45 5 0 23\r
        -6 40 -14 18 -7 50 -18 72 -24 40 -11 133 -40 190 -60 17 -6 48 -15 70 -22 22\r
        -6 49 -15 60 -20 11 -5 53 -21 94 -35 41 -14 106 -41 144 -60 39 -19 81 -35\r
        94 -35 13 0 42 -8 66 -19 23 -10 92 -33 152 -51 61 -18 119 -36 130 -40 11 -4\r
        40 -14 65 -21 25 -7 50 -16 56 -20 5 -5 36 -15 69 -23 32 -9 68 -23 81 -31 13\r
        -8 47 -21 76 -29 58 -16 134 -40 243 -78 39 -14 99 -34 135 -45 62 -20 85 -26\r
        190 -53 25 -6 64 -20 87 -31 24 -10 49 -19 57 -19 8 0 18 -4 21 -10 3 -5 16\r
        -10 29 -10 12 0 26 -4 31 -9 13 -11 126 -46 195 -61 30 -6 66 -15 80 -20 14\r
        -4 45 -13 70 -21 25 -7 49 -16 55 -21 5 -4 17 -8 27 -8 10 0 26 -4 36 -9 19\r
        -10 239 -80 312 -100 25 -7 59 -17 76 -22 17 -5 39 -9 50 -9 22 0 90 -23 100\r
        -33 4 -4 18 -7 30 -7 13 0 26 -4 29 -10 3 -5 18 -10 32 -10 14 0 42 -4 62 -9\r
        20 -5 61 -15 91 -21 30 -6 78 -22 105 -35 28 -13 82 -31 120 -40 70 -16 105\r
        -24 180 -44 76 -19 92 -20 150 -11 75 12 95 31 95 86 0 43 -1 44 -55 69 -31\r
        14 -62 25 -70 25 -7 0 -17 5 -20 10 -3 6 -17 10 -30 10 -13 0 -27 5 -30 10 -3\r
        6 -17 10 -30 10 -27 0 -108 20 -175 44 -25 9 -56 16 -70 16 -27 0 -95 22 -106\r
        33 -4 4 -21 7 -39 7 -17 0 -35 4 -40 8 -13 10 -67 27 -135 42 -73 16 -133 32\r
        -145 40 -5 4 -30 12 -55 19 -55 16 -98 30 -125 41 -11 5 -42 14 -70 20 -69 17\r
        -121 33 -331 100 -17 6 -41 10 -55 10 -26 0 -94 22 -105 33 -4 4 -18 7 -30 7\r
        -13 0 -49 12 -81 27 -59 26 -104 41 -158 50 -16 2 -39 8 -50 12 -37 15 -153\r
        51 -164 51 -6 0 -40 14 -76 30 -36 17 -70 30 -75 30 -6 0 -18 4 -28 9 -9 5\r
        -37 15 -62 21 -72 20 -164 53 -175 62 -5 4 -18 8 -30 8 -12 0 -25 4 -30 8 -6\r
        5 -44 19 -85 31 -41 13 -85 27 -98 32 -13 5 -31 9 -40 9 -10 0 -42 13 -72 28\r
        -66 34 -167 75 -269 108 -42 14 -95 34 -118 45 -24 10 -48 19 -54 19 -7 0 -37\r
        9 -68 19 -31 10 -76 24 -101 31 -72 18 -112 31 -155 50 -22 10 -60 23 -85 30\r
        -25 6 -65 20 -90 30 -69 28 -128 49 -210 76 -41 14 -102 38 -135 53 -33 15\r
        -78 34 -100 41 -22 7 -70 26 -106 41 -36 16 -71 29 -77 29 -6 0 -41 14 -77 30\r
        -36 17 -72 30 -80 30 -7 0 -17 5 -20 10 -3 6 -13 10 -20 10 -8 0 -44 14 -80\r
        30 -36 17 -72 30 -80 30 -7 0 -17 5 -20 10 -3 6 -19 10 -34 10 -16 0 -39 8\r
        -52 18 -13 10 -44 24 -69 32 -25 7 -82 31 -127 52 -44 21 -90 38 -102 38 -11\r
        0 -35 8 -53 19 -40 22 -148 61 -170 61 -8 0 -32 14 -53 30 -21 17 -42 30 -48\r
        30 -5 0 -55 22 -111 49 -55 27 -128 59 -161 71 -75 27 -194 84 -240 116 -20\r
        13 -38 24 -40 24 -2 0 -42 18 -89 40 -47 22 -89 40 -94 40 -5 0 -15 6 -21 14\r
        -7 8 -45 31 -84 52 -40 20 -94 49 -122 63 -27 14 -80 48 -117 76 -37 27 -97\r
        70 -134 95 -36 25 -92 68 -123 96 -63 57 -104 84 -123 83 -7 0 -28 -6 -47 -13z`}),(0,b.jsx)(`path`,{d:`M34840 4312 c-35 -23 -40 -32 -40 -72 0 -35 41 -127 93 -207 15 -24\r
        27 -51 27 -60 0 -10 16 -47 35 -83 77 -146 165 -334 165 -354 0 -16 14 -46 36\r
        -76 6 -8 19 -37 28 -65 10 -27 24 -64 32 -82 8 -17 14 -34 14 -38 0 -10 23\r
        -60 85 -190 29 -60 65 -139 80 -175 14 -36 40 -93 56 -127 16 -34 29 -66 29\r
        -71 0 -6 13 -34 28 -63 15 -30 34 -70 42 -89 7 -19 37 -84 65 -145 29 -60 60\r
        -135 70 -165 10 -30 26 -68 35 -85 15 -27 44 -103 86 -221 7 -23 32 -75 54\r
        -117 22 -41 40 -83 40 -93 0 -11 8 -32 18 -49 10 -16 33 -68 51 -115 17 -47\r
        49 -121 71 -165 21 -44 44 -100 51 -125 22 -83 37 -125 67 -190 16 -36 41\r
        -101 56 -145 15 -44 35 -96 45 -115 10 -19 29 -64 41 -100 12 -36 35 -94 50\r
        -130 31 -72 62 -154 80 -215 6 -22 15 -49 20 -60 36 -84 50 -119 50 -131 0\r
        -15 17 -49 38 -75 7 -9 15 -39 19 -68 l6 -51 154 0 c100 0 152 3 148 10 -3 6\r
        -14 10 -25 10 -21 0 -120 142 -120 173 0 10 -30 94 -66 186 -37 91 -76 195\r
        -87 231 -11 36 -25 72 -32 80 -7 8 -16 26 -20 40 -4 14 -17 50 -30 80 -12 30\r
        -28 75 -35 100 -7 25 -21 64 -31 87 -11 24 -19 46 -19 51 0 13 -68 173 -85\r
        198 -8 13 -15 31 -15 39 0 18 -37 116 -80 210 -40 89 -96 234 -111 285 -7 25\r
        -16 49 -21 54 -4 6 -8 17 -8 25 0 8 -39 94 -86 191 -48 96 -95 204 -105 239\r
        -10 35 -25 71 -32 80 -8 9 -25 45 -37 81 -12 36 -33 85 -46 110 -26 48 -104\r
        218 -104 226 0 2 -15 37 -34 77 -19 39 -53 115 -76 167 -51 115 -68 153 -113\r
        250 -20 41 -39 89 -42 105 -10 43 -32 90 -50 105 -8 7 -15 21 -15 32 0 10 -7\r
        35 -16 56 -26 60 -41 130 -33 144 5 7 9 28 9 46 0 18 5 42 10 52 15 27 -26\r
        114 -86 183 -27 31 -78 95 -114 142 -36 48 -86 109 -111 136 -42 45 -50 49\r
        -90 48 -24 0 -55 -8 -69 -17z`})]})})}function Jc(){return(0,b.jsxs)(Kc,{children:[(0,b.jsxs)(`div`,{className:`grid gap-8 md:gap-12 md:grid-cols-[220px_1fr] md:items-center`,children:[(0,b.jsx)(`div`,{className:`mx-auto w-full max-w-[200px]`,children:(0,b.jsxs)(`div`,{className:`relative group`,children:[(0,b.jsx)(`div`,{className:`absolute -inset-4 bg-white/30 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-700`}),(0,b.jsx)(`div`,{className:`relative rounded-2xl border border-white/5 bg-black/20 p-4 backdrop-blur-sm`,children:(0,b.jsx)(qc,{className:`h-auto w-full filter grayscale brightness-110 contrast-110`,color:`white`})})]})}),(0,b.jsxs)(`div`,{className:`space-y-4 md:space-y-6 text-center md:text-left`,children:[(0,b.jsxs)(`div`,{className:`space-y-2`,children:[(0,b.jsx)(`p`,{className:`text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold`,children:`WHO AM I`}),(0,b.jsx)(`h1`,{className:`text-4xl sm:text-5xl font-light tracking-tighter text-white md:text-7xl lg:text-8xl break-words`,children:S.name})]}),(0,b.jsx)(`p`,{className:`text-lg sm:text-xl md:text-2xl font-medium text-white/90 leading-tight tracking-tight`,children:C.bio}),(0,b.jsx)(`p`,{className:`max-w-3xl text-sm sm:text-base leading-relaxed text-white/70 font-light mx-auto md:mx-0`,children:C.message})]})]}),(0,b.jsx)(`div`,{className:`mt-10 md:mt-16 border-t border-white/10 pt-8 md:pt-10`,children:(0,b.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10`,children:D.map(e=>(0,b.jsxs)(`div`,{className:`space-y-4`,children:[(0,b.jsx)(`h2`,{className:`text-[10px] uppercase tracking-[0.3em] text-blue-100/80 font-semibold`,children:e.name}),(0,b.jsx)(`div`,{className:`flex flex-wrap gap-x-5 gap-y-3`,children:e.skills.map(e=>(0,b.jsxs)(`span`,{className:`text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-default flex items-center gap-2`,children:[(0,b.jsx)(`span`,{className:`h-[1px] w-2 bg-white/20`}),e.name]},e.id))})]},e.name))})})]})}function Yc({project:e,onClick:t}){let n=e.images?.find(e=>e.type===`hero`);return(0,b.jsxs)(`button`,{onClick:t,className:`group relative w-full text-left rounded-2xl p-[1px] transition-all duration-500 hover:scale-[1.01] hover:-translate-y-1`,children:[(0,b.jsx)(`div`,{className:`absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/40 via-blue-400/10 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500`}),(0,b.jsxs)(`div`,{className:`relative h-full rounded-2xl bg-[#0a0c10] border border-white/10 overflow-hidden flex flex-col group-hover:bg-[#0f1218] transition-colors duration-500 shadow-2xl`,children:[(0,b.jsx)(`div`,{className:`relative aspect-video w-full overflow-hidden bg-black`,children:n?(0,b.jsx)(`img`,{src:n.url,alt:n.alt||e.title,className:`h-full w-full object-cover group-hover:opacity-100 group-hover:scale-105 transition-all duration-700`}):(0,b.jsx)(`div`,{className:`flex items-center justify-center h-full bg-blue-950/20 text-blue-400/20 text-[10px] font-mono tracking-widest`,children:`NO IMAGE FOR NOW`})}),(0,b.jsxs)(`div`,{className:`flex flex-col justify-between p-4 sm:p-5 flex-1`,children:[(0,b.jsxs)(`div`,{className:`space-y-4`,children:[(0,b.jsxs)(`div`,{className:`flex items-start justify-between gap-4`,children:[(0,b.jsx)(`h3`,{className:`text-lg sm:text-xl font-medium tracking-tight text-white group-hover:text-blue-100 transition-colors break-words`,children:e.title}),(0,b.jsx)(`span`,{className:`text-[9px] px-2.5 py-1 rounded-md border border-blue-200/30 bg-blue-200/10 text-blue-100 uppercase font-bold tracking-tighter`,children:e.status})]}),(0,b.jsx)(`p`,{className:`text-sm text-gray-400 line-clamp-2 leading-relaxed font-normal group-hover:text-gray-300 transition-colors`,children:e.description})]}),(0,b.jsxs)(`div`,{className:`mt-6 sm:mt-8 flex items-center justify-between border-t border-white/5 pt-4`,children:[(0,b.jsx)(`div`,{className:`flex flex-wrap gap-3`,children:e.technologies.slice(0,3).map(e=>(0,b.jsx)(`span`,{className:`text-[10px] text-blue-200 font-mono`,children:e},e))}),(0,b.jsx)(`span`,{className:`text-[10px] text-gray-500 font-mono shrink-0`,children:e.year})]})]})]})]})}var Xc=m();function Zc({project:e}){let[t,n]=(0,_.useState)(0),[r,i]=(0,_.useState)(!1),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(!1);(0,_.useEffect)(()=>{if(r){o(!0),document.body.style.overflow=`hidden`;let e=setTimeout(()=>c(!0),10);return()=>clearTimeout(e)}{c(!1);let e=setTimeout(()=>o(!1),500);return document.body.style.overflow=`unset`,()=>clearTimeout(e)}},[r]),(0,_.useEffect)(()=>{let e=e=>{e.key===`Escape`&&i(!1)};return r&&window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[r]);let l=e.images?.[t];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(`div`,{className:`grid gap-6 md:gap-10 lg:grid-cols-[1.4fr_1fr] items-start`,children:[(0,b.jsxs)(`div`,{className:`flex flex-col gap-4 md:gap-6`,children:[(0,b.jsxs)(`button`,{onClick:()=>i(!0),className:`group relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#0a0c10] cursor-zoom-in transition-all duration-500 shadow-2xl`,children:[l?(0,b.jsx)(`img`,{src:l.url,alt:l.alt,className:`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105`}):(0,b.jsx)(`div`,{className:`w-full h-full flex items-center justify-center font-mono text-[10px] text-blue-400/20 italic`,children:`// ASSET_NOT_FOUND`}),(0,b.jsx)(`div`,{className:`absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]`,children:(0,b.jsx)(`div`,{className:`px-6 py-3 bg-black border border-blue-500/40 rounded-full text-[10px] font-mono tracking-[0.3em] text-blue-200 uppercase shadow-2xl`,children:`Expand Visuals`})})]}),(0,b.jsx)(`div`,{className:`flex gap-3 md:gap-4 h-16 sm:h-20 overflow-x-auto pb-1`,children:e.images?.map((e,r)=>(0,b.jsx)(`button`,{onClick:()=>n(r),className:`min-w-20 sm:min-w-0 flex-1 rounded-xl border-2 overflow-hidden transition-all duration-300 ${t===r?`border-blue-500 bg-blue-500/20 scale-105`:`border-white/5 opacity-50 hover:opacity-100 hover:border-white/20`}`,children:(0,b.jsx)(`img`,{src:e.url,className:`w-full h-full object-cover`,alt:`thumbnail`})},r))})]}),(0,b.jsxs)(`div`,{className:`flex flex-col justify-between h-full py-1 md:py-2`,children:[(0,b.jsxs)(`div`,{className:`space-y-6 md:space-y-8`,children:[(0,b.jsxs)(`div`,{className:`space-y-4`,children:[(0,b.jsxs)(`div`,{className:`flex items-center gap-3 md:gap-4 text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.4em]`,children:[(0,b.jsxs)(`span`,{className:`text-blue-400 font-bold`,children:[`[`,e.year||`2026`,`]`]}),(0,b.jsx)(`span`,{className:`uppercase text-gray-500`,children:e.status})]}),(0,b.jsx)(`h1`,{className:`text-3xl sm:text-4xl md:text-6xl font-medium text-white tracking-tighter leading-tight break-words`,children:e.title}),(0,b.jsx)(`p`,{className:`text-base md:text-lg text-gray-400 leading-relaxed font-normal max-w-prose`,children:e.longDescription||e.description})]}),(0,b.jsxs)(`div`,{className:`pt-6 md:pt-8 border-t border-white/10 space-y-4 md:space-y-5`,children:[(0,b.jsx)(`h4`,{className:`text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em] text-blue-400/60 font-bold`,children:`Stack Trace`}),(0,b.jsx)(`div`,{className:`flex flex-wrap gap-3`,children:e.technologies.map(e=>(0,b.jsx)(`span`,{className:`text-[10px] font-mono text-blue-100 bg-blue-500/10 px-4 py-1.5 rounded-md border border-blue-500/20 uppercase tracking-widest`,children:e},e))})]})]}),(0,b.jsx)(`div`,{className:`flex flex-wrap gap-x-5 md:gap-x-10 gap-y-4 md:gap-y-6 pt-6 md:pt-10 border-t border-white/10 mt-6 md:mt-8`,children:e.links?.map(e=>{let t=e.type===`github`,n=e.type===`demo`;return(0,b.jsxs)(`a`,{href:e.url,target:`_blank`,rel:`noreferrer`,className:`text-[10px] sm:text-[11px] font-mono flex items-center gap-2 sm:gap-3 group transition-all text-gray-400 hover:text-white`,children:[(0,b.jsx)(`span`,{className:`
                    w-2 h-2 rounded-full
                    ${t?`bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]`:``}
                    ${n?`bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]`:``}
                    ${!t&&!n?`bg-gray-600`:``}
                    group-hover:scale-125 transition-transform
                  `}),(0,b.jsx)(`span`,{className:`tracking-[0.1em] sm:tracking-[0.2em] uppercase font-bold text-gray-300 group-hover:text-white transition-colors`,children:e.label}),(0,b.jsx)(`span`,{className:`opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-400`,children:`→`})]},e.url)})})]})]}),a&&l&&(0,Xc.createPortal)((0,b.jsxs)(`div`,{className:`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ease-in-out ${s?`opacity-100`:`opacity-0`}`,onClick:()=>i(!1),children:[(0,b.jsx)(`div`,{className:`absolute inset-0 transition-all duration-1000 ease-out ${s?`opacity-40 scale-110`:`opacity-0 scale-100`}`,style:{backgroundImage:`url(${l.url})`,backgroundSize:`cover`,backgroundPosition:`center`,filter:`blur(100px)`}}),(0,b.jsx)(`div`,{className:`absolute inset-0 bg-[#050505] transition-opacity duration-500 ${s?`opacity-80`:`opacity-0`}`}),(0,b.jsxs)(`div`,{className:`relative z-10 w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-16`,children:[(0,b.jsx)(`img`,{src:l.url,alt:l.alt||e.title,onClick:e=>e.stopPropagation(),className:`
                max-w-[95vw] max-h-[75vh] md:max-h-[80vh] 
                object-contain rounded-xl shadow-[0_0_100px_rgba(0,0,0,0.8)]
                border border-white/10
                transition-all duration-500 ease-out
                ${s?`scale-100 opacity-100`:`scale-95 opacity-0`}
              `}),(0,b.jsx)(`div`,{className:`absolute bottom-8 sm:bottom-12 flex items-center gap-4 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.5em] text-blue-400/40 transition-all duration-700 delay-300 ${s?`translate-y-0 opacity-100`:`translate-y-4 opacity-0`}`,children:(0,b.jsx)(`span`,{className:`uppercase`,children:`Press ESC to return`})})]})]}),document.body)]})}function Qc(){let[e,t]=(0,_.useState)(null);return(0,b.jsx)(Kc,{children:e?(0,b.jsxs)(`div`,{className:`section-fade-in`,children:[(0,b.jsxs)(`button`,{onClick:()=>t(null),className:`mb-5 md:mb-8 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors`,children:[(0,b.jsx)(`span`,{className:`text-lg`,children:`←`}),` Back to Projects`]}),(0,b.jsx)(Zc,{project:e})]}):(0,b.jsxs)(`div`,{className:`space-y-8 md:space-y-12`,children:[(0,b.jsxs)(`div`,{className:`space-y-2`,children:[(0,b.jsx)(`p`,{className:`text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold`,children:`What defines me is what I create`}),(0,b.jsx)(`h2`,{className:`text-3xl sm:text-4xl font-light tracking-tighter text-white md:text-6xl`,children:`Projects`})]}),(0,b.jsx)(`div`,{className:`grid gap-6 md:grid-cols-2 lg:grid-cols-2`,children:E.map(e=>(0,b.jsx)(Yc,{project:e,onClick:()=>t(e)},e.id))})]})})}function $c(){let e=[{label:`Email`,href:`mailto:${T.email}`,value:T.email},{label:`GitHub`,href:T.github??`#`,value:T.github??`N/A`},{label:`LinkedIn`,href:T.linkedin??`#`,value:T.linkedin??`N/A`}];return(0,b.jsxs)(Kc,{children:[(0,b.jsxs)(`div`,{className:`mb-6 space-y-2`,children:[(0,b.jsx)(`h2`,{className:`text-2xl sm:text-3xl font-semibold tracking-tight text-white md:text-4xl`,children:`Contact Me!`}),(0,b.jsx)(`p`,{className:`text-sm text-white/65`,children:`Open to collaboration and always excited to connect with fellow developers, potential clients, or anyone interested in tech. Feel free to reach out!`})]}),(0,b.jsx)(`div`,{className:`space-y-3`,children:e.map(e=>(0,b.jsxs)(`a`,{href:e.href,target:e.href.startsWith(`mailto:`)?void 0:`_blank`,rel:e.href.startsWith(`mailto:`)?void 0:`noreferrer`,className:`group flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05]`,children:[(0,b.jsx)(`span`,{className:`text-xs uppercase tracking-[0.14em] text-white/50`,children:e.label}),(0,b.jsx)(`span`,{className:`text-sm text-white/75 transition-colors duration-300 group-hover:text-white break-all sm:break-normal`,children:e.value})]},e.label))})]})}function el(){let[e,t]=(0,_.useState)(`about`);return(0,b.jsxs)(`div`,{className:`h-screen w-screen bg-black flex flex-col overflow-hidden selection:bg-white selection:text-black`,children:[(0,b.jsx)(ee,{active:e,setActive:t}),(0,b.jsx)(`main`,{className:`flex-1 w-full p-4 md:p-6 min-h-0`,children:(0,b.jsxs)(`div`,{className:`relative w-full h-full border border-white/10 rounded-2xl overflow-hidden bg-[#030303]`,children:[(0,b.jsxs)(`div`,{className:`absolute inset-0 z-0`,children:[(0,b.jsx)(Gc,{}),(0,b.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]`}),(0,b.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent`})]}),(0,b.jsx)(`div`,{className:`absolute inset-0 z-10 flex items-center justify-center p-6`,children:(0,b.jsx)(`div`,{className:`section-fade-in w-full h-full flex items-center justify-center`,children:(()=>{switch(e){case`about`:return(0,b.jsx)(Jc,{});case`projects`:return(0,b.jsx)(Qc,{});case`contact`:return(0,b.jsx)($c,{});default:return(0,b.jsx)(Jc,{})}})()},e)})]})}),(0,b.jsxs)(`footer`,{className:`py-3 px-10 text-[10px] uppercase tracking-[0.4em] text-white/20 flex justify-between items-center`,children:[(0,b.jsx)(`span`,{children:`© Juan Sobalvarro 2026`}),(0,b.jsx)(`span`,{children:`^-^`})]})]})}function tl(){return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(el,{})})}(0,v.createRoot)(document.getElementById(`root`)).render((0,b.jsx)(_.StrictMode,{children:(0,b.jsx)(tl,{})}));