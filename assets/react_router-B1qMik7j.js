import{r as e}from"./react-DuJaTYOC.js";
/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},t.apply(this,arguments)}var n;!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(n||(n={}));const a="popstate";function r(e){return void 0===e&&(e={}),function(e,r,l,c){void 0===c&&(c={});let{window:h=document.defaultView,v5Compat:p=!1}=c,d=h.history,f=n.Pop,m=null,v=g();null==v&&(v=0,d.replaceState(t({},d.state,{idx:v}),""));function g(){return(d.state||{idx:null}).idx}function y(){f=n.Pop;let e=g(),t=null==e?null:e-v;v=e,m&&m({action:f,location:E.location,delta:t})}function x(e,t){f=n.Push;let a=s(E.location,e,t);l&&l(a,e),v=g()+1;let r=i(a,v),o=E.createHref(a);try{d.pushState(r,"",o)}catch(u){if(u instanceof DOMException&&"DataCloneError"===u.name)throw u;h.location.assign(o)}p&&m&&m({action:f,location:E.location,delta:1})}function b(e,t){f=n.Replace;let a=s(E.location,e,t);l&&l(a,e),v=g();let r=i(a,v),o=E.createHref(a);d.replaceState(r,"",o),p&&m&&m({action:f,location:E.location,delta:0})}function C(e){let t="null"!==h.location.origin?h.location.origin:h.location.href,n="string"==typeof e?e:u(e);return n=n.replace(/ $/,"%20"),o(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}let E={get action(){return f},get location(){return e(h,d)},listen(e){if(m)throw new Error("A history only accepts one active listener");return h.addEventListener(a,y),m=e,()=>{h.removeEventListener(a,y),m=null}},createHref:e=>r(h,e),createURL:C,encodeLocation(e){let t=C(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:x,replace:b,go:e=>d.go(e)};return E}((function(e,t){let{pathname:n="/",search:a="",hash:r=""}=c(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),s("",{pathname:n,search:a,hash:r},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),a="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");a=-1===n?t:t.slice(0,n)}return a+"#"+("string"==typeof t?t:u(t))}),(function(e,t){l("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),e)}function o(e,t){if(!1===e||null==e)throw new Error(t)}function l(e,t){if(!e)try{throw new Error(t)}catch(n){}}function i(e,t){return{usr:e.state,key:e.key,idx:t}}function s(e,n,a,r){return void 0===a&&(a=null),t({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof n?c(n):n,{state:a,key:n&&n.key||r||Math.random().toString(36).substr(2,8)})}function u(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),a&&"#"!==a&&(t+="#"===a.charAt(0)?a:"#"+a),t}function c(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}var h;function p(e,t,n){return void 0===n&&(n="/"),function(e,t,n,a){let r="string"==typeof t?c(t):t,o=w(r.pathname||"/",n);if(null==o)return null;let l=d(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(l);let i=null;for(let s=0;null==i&&s<l.length;++s){let e=S(o);i=P(l[s],e,a)}return i}(e,t,n,!1)}function d(e,t,n,a){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===a&&(a="");let r=(e,r,l)=>{let i={relativePath:void 0===l?e.path||"":l,caseSensitive:!0===e.caseSensitive,childrenIndex:r,route:e};i.relativePath.startsWith("/")&&(o(i.relativePath.startsWith(a),'Absolute route path "'+i.relativePath+'" nested under path "'+a+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(a.length));let s=L([a,i.relativePath]),u=n.concat(i);e.children&&e.children.length>0&&(o(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),d(e.children,t,u,s)),(null!=e.path||e.index)&&t.push({path:s,score:E(s,e.index),routesMeta:u})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let a of f(e.path))r(e,t,a);else r(e,t)})),t}function f(e){let t=e.split("/");if(0===t.length)return[];let[n,...a]=t,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===a.length)return r?[o,""]:[o];let l=f(a.join("/")),i=[];return i.push(...l.map((e=>""===e?o:[o,e].join("/")))),r&&i.push(...l),i.map((t=>e.startsWith("/")&&""===t?"/":t))}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(h||(h={}));const m=/^:[\w-]+$/,v=3,g=2,y=1,x=10,b=-2,C=e=>"*"===e;function E(e,t){let n=e.split("/"),a=n.length;return n.some(C)&&(a+=b),t&&(a+=g),n.filter((e=>!C(e))).reduce(((e,t)=>e+(m.test(t)?v:""===t?y:x)),a)}function P(e,t,n){let{routesMeta:a}=e,r={},o="/",l=[];for(let i=0;i<a.length;++i){let e=a[i],s=i===a.length-1,u="/"===o?t:t.slice(o.length)||"/",c=R({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),h=e.route;if(!c&&s&&n&&!a[a.length-1].route.index&&(c=R({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(r,c.params),l.push({params:r,pathname:L([o,c.pathname]),pathnameBase:N(L([o,c.pathnameBase])),route:h}),"/"!==c.pathnameBase&&(o=L([o,c.pathnameBase]))}return l}function R(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);l("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(a.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(a.push({paramName:"*"}),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":""!==e&&"/"!==e&&(r+="(?:(?=\\/|$))");let o=new RegExp(r,t?void 0:"i");return[o,a]}(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let o=r[0],i=o.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:a.reduce(((e,t,n)=>{let{paramName:a,isOptional:r}=t;if("*"===a){let e=s[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[a]=r&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:i,pattern:e}}function S(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return l(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function w(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&"/"!==a?null:e.slice(n)||"/"}function O(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function U(e,t){let n=function(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function k(e,n,a,r){let l;void 0===r&&(r=!1),"string"==typeof e?l=c(e):(l=t({},e),o(!l.pathname||!l.pathname.includes("?"),O("?","pathname","search",l)),o(!l.pathname||!l.pathname.includes("#"),O("#","pathname","hash",l)),o(!l.search||!l.search.includes("#"),O("#","search","hash",l)));let i,s=""===e||""===l.pathname,u=s?"/":l.pathname;if(null==u)i=a;else{let e=n.length-1;if(!r&&u.startsWith("..")){let t=u.split("/");for(;".."===t[0];)t.shift(),e-=1;l.pathname=t.join("/")}i=e>=0?n[e]:"/"}let h=function(e,t){void 0===t&&(t="/");let{pathname:n,search:a="",hash:r=""}="string"==typeof e?c(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:B(a),hash:W(r)}}(l,i),p=u&&"/"!==u&&u.endsWith("/"),d=(s||"."===u)&&a.endsWith("/");return h.pathname.endsWith("/")||!p&&!d||(h.pathname+="/"),h}const L=e=>e.join("/").replace(/\/\/+/g,"/"),N=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),B=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",W=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";const $=["post","put","patch","delete"];new Set($);const j=["get",...$];
/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},D.apply(this,arguments)}new Set(j);const A=e.createContext(null),M=e.createContext(null),I=e.createContext(null),F=e.createContext(null),H=e.createContext({outlet:null,matches:[],isDataRoute:!1}),J=e.createContext(null);function T(t,n){let{relative:a}=void 0===n?{}:n;_()||o(!1);let{basename:r,navigator:l}=e.useContext(I),{hash:i,pathname:s,search:u}=X(t,{relative:a}),c=s;return"/"!==r&&(c="/"===s?r:L([r,s])),l.createHref({pathname:c,search:u,hash:i})}function _(){return null!=e.useContext(F)}function z(){return _()||o(!1),e.useContext(F).location}function q(t){e.useContext(I).static||e.useLayoutEffect(t)}function V(){let{isDataRoute:t}=e.useContext(H);return t?function(){let{router:t}=function(){let t=e.useContext(A);return t||o(!1),t}(ae.UseNavigateStable),n=oe(re.UseNavigateStable),a=e.useRef(!1);return q((()=>{a.current=!0})),e.useCallback((function(e,r){void 0===r&&(r={}),a.current&&("number"==typeof e?t.navigate(e):t.navigate(e,D({fromRouteId:n},r)))}),[t,n])}():function(){_()||o(!1);let t=e.useContext(A),{basename:n,future:a,navigator:r}=e.useContext(I),{matches:l}=e.useContext(H),{pathname:i}=z(),s=JSON.stringify(U(l,a.v7_relativeSplatPath)),u=e.useRef(!1);return q((()=>{u.current=!0})),e.useCallback((function(e,a){if(void 0===a&&(a={}),!u.current)return;if("number"==typeof e)return void r.go(e);let o=k(e,JSON.parse(s),i,"path"===a.relative);null==t&&"/"!==n&&(o.pathname="/"===o.pathname?n:L([n,o.pathname])),(a.replace?r.replace:r.push)(o,a.state,a)}),[n,r,s,i,t])}()}const G=e.createContext(null);function K(){return e.useContext(G)}function Q(){let{matches:t}=e.useContext(H),n=t[t.length-1];return n?n.params:{}}function X(t,n){let{relative:a}=void 0===n?{}:n,{future:r}=e.useContext(I),{matches:o}=e.useContext(H),{pathname:l}=z(),i=JSON.stringify(U(o,r.v7_relativeSplatPath));return e.useMemo((()=>k(t,JSON.parse(i),l,"path"===a)),[t,i,l,a])}function Y(t,n){return function(t,n,a,r){_()||o(!1);let{navigator:l}=e.useContext(I),{matches:i}=e.useContext(H),s=i[i.length-1],u=s?s.params:{};!s||s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let h,d=z();h=d;let f=h.pathname||"/",m=f;if("/"!==c){let e=c.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(e.length).join("/")}let v=p(t,{pathname:m});return function(t,n,a,r){var l;void 0===n&&(n=[]);void 0===a&&(a=null);void 0===r&&(r=null);if(null==t){var i;if(!a)return null;if(a.errors)t=a.matches;else{if(!(null!=(i=r)&&i.v7_partialHydration&&0===n.length&&!a.initialized&&a.matches.length>0))return null;t=a.matches}}let s=t,u=null==(l=a)?void 0:l.errors;if(null!=u){let e=s.findIndex((e=>e.route.id&&void 0!==(null==u?void 0:u[e.route.id])));e>=0||o(!1),s=s.slice(0,Math.min(s.length,e+1))}let c=!1,h=-1;if(a&&r&&r.v7_partialHydration)for(let e=0;e<s.length;e++){let t=s[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(h=e),t.route.id){let{loaderData:e,errors:n}=a,r=t.route.loader&&void 0===e[t.route.id]&&(!n||void 0===n[t.route.id]);if(t.route.lazy||r){c=!0,s=h>=0?s.slice(0,h+1):[s[0]];break}}}return s.reduceRight(((t,r,o)=>{let l,i=!1,p=null,d=null;var f;a&&(l=u&&r.route.id?u[r.route.id]:void 0,p=r.route.errorElement||ee,c&&(h<0&&0===o?(le[f="route-fallback"]||(le[f]=!0),i=!0,d=null):h===o&&(i=!0,d=r.route.hydrateFallbackElement||null)));let m=n.concat(s.slice(0,o+1)),v=()=>{let n;return n=l?p:i?d:r.route.Component?e.createElement(r.route.Component,null):r.route.element?r.route.element:t,e.createElement(ne,{match:r,routeContext:{outlet:t,matches:m,isDataRoute:null!=a},children:n})};return a&&(r.route.ErrorBoundary||r.route.errorElement||0===o)?e.createElement(te,{location:a.location,revalidation:a.revalidation,component:p,error:l,children:v(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):v()}),null)}(v&&v.map((e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:L([c,l.encodeLocation?l.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:L([c,l.encodeLocation?l.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),i,a,r)}(t)}function Z(){let t=function(){var t;let n=e.useContext(J),a=function(){let t=e.useContext(M);return t||o(!1),t}(re.UseRouteError),r=oe(re.UseRouteError);if(void 0!==n)return n;return null==(t=a.errors)?void 0:t[r]}(),n=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),a=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),a?e.createElement("pre",{style:r},a):null,null)}const ee=e.createElement(Z,null);class te extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){}render(){return void 0!==this.state.error?e.createElement(H.Provider,{value:this.props.routeContext},e.createElement(J.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ne(t){let{routeContext:n,match:a,children:r}=t,o=e.useContext(A);return o&&o.static&&o.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=a.route.id),e.createElement(H.Provider,{value:n},r)}var ae=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ae||{}),re=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(re||{});function oe(t){let n=function(){let t=e.useContext(H);return t||o(!1),t}(),a=n.matches[n.matches.length-1];return a.route.id||o(!1),a.route.id}const le={};function ie(t){return function(t){let n=e.useContext(H).outlet;return n?e.createElement(G.Provider,{value:t},n):n}(t.context)}function se(t){let{basename:a="/",children:r=null,location:l,navigationType:i=n.Pop,navigator:s,static:u=!1,future:h}=t;_()&&o(!1);let p=a.replace(/^\/*/,"/"),d=e.useMemo((()=>({basename:p,navigator:s,static:u,future:D({v7_relativeSplatPath:!1},h)})),[p,h,s,u]);"string"==typeof l&&(l=c(l));let{pathname:f="/",search:m="",hash:v="",state:g=null,key:y="default"}=l,x=e.useMemo((()=>{let e=w(f,p);return null==e?null:{location:{pathname:e,search:m,hash:v,state:g,key:y},navigationType:i}}),[p,f,m,v,g,y,i]);return null==x?null:e.createElement(I.Provider,{value:d},e.createElement(F.Provider,{children:r,value:x}))}new Promise((()=>{}));export{I as N,ie as O,se as R,V as a,z as b,r as c,X as d,u as e,K as f,Q as g,Y as h,w as s,T as u};