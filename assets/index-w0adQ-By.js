import{j as e,m as t,A as i}from"./framer-CVpCTM84.js";import{r,R as n,g as o}from"./react-DuJaTYOC.js";import{r as a}from"./react_dom-0L4jek-Z.js";import{c as s,R as l,N as c,s as d,u,a as h,b as p,d as m,e as x,O as f,f as j,g,h as v}from"./react_router-B1qMik7j.js";import{u as y,i as b,B as w,a as S,T as k,A as z,D,C,b as M,c as O,L as T,d as _,e as P,f as R,g as L,h as H}from"./mui-DgKWmiLD.js";var I;!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var W=a;
/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},F.apply(this,arguments)}I=W.createRoot,W.hydrateRoot;const A=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];try{window.__reactRouterVersion="6"}catch(ot){}const U=n.startTransition;function E(e){let{basename:t,children:i,future:n,window:o}=e,a=r.useRef();null==a.current&&(a.current=s({window:o,v5Compat:!0}));let c=a.current,[d,u]=r.useState({action:c.action,location:c.location}),{v7_startTransition:h}=n||{},p=r.useCallback((e=>{h&&U?U((()=>u(e))):u(e)}),[u,h]);return r.useLayoutEffect((()=>c.listen(p)),[c,p]),r.createElement(l,{basename:t,children:i,location:d.location,navigationType:d.action,navigator:c,future:n})}const N="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,B=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,J=r.forwardRef((function(e,t){let i,{onClick:n,relative:o,reloadDocument:a,replace:s,state:l,target:f,to:j,preventScrollReset:g,unstable_viewTransition:v}=e,y=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,A),{basename:b}=r.useContext(c),w=!1;if("string"==typeof j&&B.test(j)&&(i=j,N))try{let e=new URL(window.location.href),t=j.startsWith("//")?new URL(e.protocol+j):new URL(j),i=d(t.pathname,b);t.origin===e.origin&&null!=i?j=i+t.search+t.hash:w=!0}catch(ot){}let S=u(j,{relative:o}),k=function(e,t){let{target:i,replace:n,state:o,preventScrollReset:a,relative:s,unstable_viewTransition:l}=void 0===t?{}:t,c=h(),d=p(),u=m(e,{relative:s});return r.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,i)){t.preventDefault();let i=void 0!==n?n:x(d)===x(u);c(e,{replace:i,state:o,preventScrollReset:a,relative:s,unstable_viewTransition:l})}}),[d,c,u,n,o,i,e,a,s,l])}(j,{replace:s,state:l,target:f,preventScrollReset:g,relative:o,unstable_viewTransition:v});return r.createElement("a",F({},y,{href:i||S,onClick:w||a?n:function(e){n&&n(e),e.defaultPrevented||k(e)},ref:t,target:f}))}));var K,Q,V,q;(Q=K||(K={})).UseScrollRestoration="useScrollRestoration",Q.UseSubmit="useSubmit",Q.UseSubmitFetcher="useSubmitFetcher",Q.UseFetcher="useFetcher",Q.useViewTransitionState="useViewTransitionState",(q=V||(V={})).UseFetcher="useFetcher",q.UseFetchers="useFetchers",q.UseScrollRestoration="useScrollRestoration";var G={},X={};const Z=o(y);var Y;function $(){return Y||(Y=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=Z}(X)),X}var ee=b;Object.defineProperty(G,"__esModule",{value:!0});var te=G.default=void 0,ie=ee($()),re=e;te=G.default=(0,ie.default)((0,re.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");var ne={},oe=b;Object.defineProperty(ne,"__esModule",{value:!0});var ae=ne.default=void 0,se=oe($()),le=e;ae=ne.default=(0,se.default)((0,le.jsx)("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");const ce=({open:i,handleToggle:r})=>e.jsxs(e.Fragment,{children:[e.jsx(w,{onClick:r,sx:{position:"absolute",backgroundColor:"#0b0c10",top:0,right:0,marginTop:"2rem",marginRight:"2rem",zIndex:50},children:i?e.jsx(ae,{color:"primary",sx:{fontSize:45}}):e.jsx(te,{color:"primary",sx:{fontSize:45}})}),e.jsx(S,{sx:{display:"flex",flexDirection:"column",paddingX:"2rem",boxSizing:"border-box",justifyContent:"center"},children:e.jsxs(t.div,{initial:{opacity:0,visibility:"hidden",position:"absolute",y:i?-200:0},animate:{opacity:i?1:0,visibility:i?"visible":"hidden",position:i?"static":"absolute",y:i?100:0,transition:{duration:.1,delay:i?.5:0,ease:[0,.3,.6,1.01]}},exit:{y:-200,opacity:0,transition:{duration:.2,ease:[0,.3,.6,1.01]}},style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(t.div,{whileHover:{scale:1.2,x:200},children:e.jsx(J,{to:"/",style:{textDecoration:"none"},children:e.jsx(k,{color:"primary",fontSize:64,children:"Home"})})}),e.jsx(t.div,{whileHover:{scale:1.2,x:200},children:e.jsx(J,{to:"/about",style:{textDecoration:"none"},children:e.jsx(k,{color:"primary",fontSize:64,children:"About Me"})})}),e.jsx(t.div,{whileHover:{scale:1.2,x:200},children:e.jsx(J,{to:"/my-stuff",style:{textDecoration:"none"},children:e.jsx(k,{color:"primary",fontSize:64,children:"My Stuff"})})}),e.jsx(t.div,{whileHover:{scale:1.2,x:200},children:e.jsx(J,{to:"/contact",style:{textDecoration:"none"},children:e.jsx(k,{color:"primary",fontSize:64,children:"Contact"})})})]})})]}),de=()=>{const[i,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(ce,{open:i,handleToggle:()=>{n((e=>!e))}}),e.jsx(t.div,{animate:{display:i?"none":"block",opacity:i?0:1},children:e.jsx(f,{context:{open:i}})})]})},ue=({open:i})=>e.jsx(t.div,{initial:{y:i?0:100},animate:{y:i?100:0,transition:{duration:i?.5:1.5,ease:[0,0,.2,1.01]}},whileHover:{y:-74},whileTap:{y:-74},style:{position:"absolute",bottom:-74,right:0},children:e.jsx(z,{sx:{userSelect:"none",width:174,height:174},src:"/avatar.webp"})}),he=({x:i=0,y:r=100,open:n,duration:o=.3,fullWidth:a,scroll:s,style:l,children:c})=>e.jsx(t.div,{className:"box",initial:{opacity:n?1:0,scale:.5,x:i,y:n?0:r},animate:{opacity:n?0:1,scale:1,x:0,y:n?-200:0},exit:{y:-200,opacity:0,transition:{duration:1,ease:[0,.3,.6,1.01]}},transition:{duration:o,delay:n?0:.1,ease:[0,0,.2,1.01]},style:{height:"100%",overflow:s?"auto":"none",width:a?"100%":"auto",...l},children:c}),pe=({children:t})=>e.jsx(S,{component:"section",sx:{height:"100dvh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"2rem"},children:t}),me=({title:t})=>e.jsxs(e.Fragment,{children:[e.jsx(k,{color:"primary",fontSize:44,width:"100%",children:t}),e.jsx(D,{sx:{width:"100%",marginTop:"1rem",marginBottom:"2rem",borderWidth:"medium",borderColor:"orange"}})]}),xe=({sx:t,fullWidth:i,children:r})=>e.jsx(S,{width:i?"100%":"auto",component:"div",display:"flex",alignItems:"center",sx:{...t},children:r}),fe=({children:t})=>e.jsx(xe,{sx:{width:"80%",paddingX:{xs:"2rem",lg:"4rem"},flexDirection:"column"},children:t});function je(){return j()}function ge(){const{open:t}=je();return e.jsxs(pe,{children:[e.jsx(he,{open:t,style:{paddingTop:"5rem"},fullWidth:!0,children:e.jsxs(fe,{children:[e.jsx(me,{title:"About Me"}),e.jsx(k,{color:"primary",fontSize:22,children:"Hey, my name is Mateusz Laskowski, and I have a degree in computer science. I want to grow as a front-end developer, focusing on creating attractive and functional user interfaces. I am ready to gain practical experience and develop my skills in HTML, CSS, JavaScript and React."})]})}),e.jsx(ue,{open:t})]})}var ve={},ye=b;Object.defineProperty(ve,"__esModule",{value:!0});var be=ve.default=void 0,we=ye($()),Se=e;be=ve.default=(0,we.default)((0,Se.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Email");var ke={},ze=b;Object.defineProperty(ke,"__esModule",{value:!0});var De=ke.default=void 0;!function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var i=Oe(t);if(i&&i.has(e))return i.get(e);var r={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,i&&i.set(e,r)}(r);var Ce=ze($()),Me=e;function Oe(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(Oe=function(e){return e?i:t})(e)}De=ke.default=(0,Ce.default)((0,Me.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub");var Te={},_e=b;Object.defineProperty(Te,"__esModule",{value:!0});var Pe=Te.default=void 0;!function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var i=He(t);if(i&&i.has(e))return i.get(e);var r={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,i&&i.set(e,r)}(r);var Re=_e($()),Le=e;function He(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(He=function(e){return e?i:t})(e)}Pe=Te.default=(0,Re.default)((0,Le.jsx)("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn");const Ie={Linkedin:"https://www.linkedin.com/in/mateusz-laskowski-16321b310/",Gmail:"mailto:mat.laskowski.kontakt@gmail.com",Github:"https://github.com/matcane"},We=({title:i,children:r})=>e.jsx(J,{to:Ie[i],target:"_blank",style:{textDecoration:"none"},children:e.jsxs(t.div,{whileHover:{scale:1.2},style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"1rem"},children:[r,e.jsx(k,{color:"white",children:i})]})}),Fe=({children:t})=>e.jsx(xe,{sx:{flexDirection:{xs:"column",sm:"row"},justifyContent:"center",width:"100%",gap:"2rem"},children:t});function Ae(){const{open:t}=je();return e.jsx(pe,{children:e.jsx(he,{open:t,style:{paddingTop:"5rem"},fullWidth:!0,children:e.jsxs(fe,{children:[e.jsx(me,{title:"Contact"}),e.jsxs(Fe,{children:[e.jsx(he,{open:t,duration:1.1,children:e.jsx(We,{title:"Linkedin",children:e.jsx(Pe,{color:"primary",sx:{fontSize:90}})})}),e.jsx(he,{open:t,duration:1.1,children:e.jsx(We,{title:"Gmail",children:e.jsx(be,{color:"primary",sx:{fontSize:90}})})}),e.jsx(he,{open:t,duration:1.1,children:e.jsx(We,{title:"Github",children:e.jsx(De,{color:"primary",sx:{fontSize:90}})})})]})]})})})}const Ue=({size:t,align:i="center",text:r})=>{const n={xs:"center",md:i};return e.jsx(k,{color:"white",sx:{fontSize:{sm:{xs:20,lg:24},lg:{xs:24,lg:44}}[t],textAlign:n},children:r})};function Ee(){const{open:i}=je();return e.jsxs(pe,{children:[e.jsx(J,{to:"/contact",style:{textDecoration:"none"},children:e.jsx(t.div,{whileHover:{scale:1.5},children:e.jsx(xe,{children:e.jsxs(S,{component:"div",justifyContent:"end",children:[e.jsxs(he,{y:100,open:i,duration:.3,children:[e.jsx(Ue,{size:"lg",text:"👋 Hi  there!"}),e.jsx(Ue,{size:"lg",text:"I'm Mateusz Laskowski"})]}),e.jsx(he,{y:100,open:i,duration:.4,children:e.jsx(Ue,{size:"sm",align:"right",text:"Frontend Dev?"})})]})})})}),e.jsxs(xe,{sx:{flexDirection:"row",gap:"2rem"},children:[e.jsx(he,{open:i,duration:.5,children:e.jsx(t.div,{whileHover:{scale:1.2},children:e.jsx(J,{to:"/about",style:{textDecorationColor:"orange"},children:e.jsx(k,{fontSize:28,color:"white",children:"About Me"})})})}),e.jsx(he,{open:i,duration:.5,children:e.jsx(t.div,{whileHover:{scale:1.2},children:e.jsx(J,{to:"/my-stuff",style:{textDecorationColor:"orange"},children:e.jsx(k,{fontSize:28,color:"white",children:"Stuff I've Made"})})})})]})]})}var Ne={},Be=b;Object.defineProperty(Ne,"__esModule",{value:!0});var Je=Ne.default=void 0,Ke=Be($()),Qe=e;Je=Ne.default=(0,Ke.default)((0,Qe.jsx)("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z"}),"Code");const Ve=({title:t,descr:i})=>e.jsxs(k,{color:"primary",width:"100%",align:t?"left":"center",sx:{fontSize:{xs:22,lg:t?44:22},marginBottom:i?"1rem":"0rem"},children:[t,i]}),qe=({data:t})=>e.jsxs(e.Fragment,{children:[e.jsxs(xe,{fullWidth:!0,children:[e.jsx(Ve,{title:t.title}),e.jsxs(xe,{sx:{gap:"2rem"},children:[e.jsx(J,{to:t.repo,target:"_blank",children:e.jsx(Je,{color:"success",sx:{fontSize:{xs:22,lg:44}}})}),t.demo&&e.jsx(J,{to:t.demo,target:"_blank",children:e.jsx(k,{color:"secondary",sx:{fontSize:{xs:22,lg:44}},children:"Demo"})})]})]}),e.jsx(D,{sx:{width:"100%",marginTop:"0.5rem",marginBottom:"1rem",borderWidth:"medium",borderColor:"orange"}})]}),Ge=({img:t})=>e.jsx("img",{src:t,style:{maxInlineSize:"100%",blockSize:"auto"}}),Xe=({stack:i})=>e.jsx(xe,{sx:{width:"100%",marginBottom:"2rem",justifyContent:"center",flexWrap:"wrap",gap:"0.5rem"},children:i.map(((i,r)=>e.jsx(t.div,{whileHover:{scale:1.2},children:e.jsx(C,{label:i,color:"primary",sx:{fontSize:{xs:"1rem",sm:"1.4rem"},height:"40px"}})},r)))}),Ze=({children:t})=>e.jsx(xe,{sx:{width:"100%",paddingTop:"1rem",paddingX:{xs:"0rem",sm:"2rem",lg:"0rem"},flexDirection:"column",boxSizing:"border-box"},children:t}),Ye=({tabletPadding:t,children:i})=>e.jsx(xe,{sx:{width:"100%",overflow:"auto",paddingTop:t?"0rem":"6rem",paddingX:{xs:"2rem",sm:"0rem",lg:"14rem",xl:"20rem"},flexDirection:"column",boxSizing:"border-box"},children:i}),$e={"json-quizzer":{title:"JSONQuizzer",img:"/JSONQuizzer.webp",stack:["React","TypeScript","Zustand","HTML","CSS","Tailwndcss"],description:"An application to learn and test their knowledge using questions and answers saved in a JSON file.",demo:"https://jsonquizzer.netlify.app",repo:"https://github.com/matcane/JSONQuizzer",devStatus:"In rebuild / Shit Code"},"metin-2-simulator":{title:"Metin2Simulator",img:"/metin2Sim.webp",stack:["React","JavaScript","Redux","Redux Toolkit","i18next","Firestore","HTML","CSS","Tailwndcss"],description:"An application to simulate enchanting item bonuses in the Metin2 game.",demo:"https://metin2bonussim.netlify.app",repo:"https://github.com/matcane/Metin2BonusSimulator",devStatus:"In rebuild / Shit Code"},"quick-deck":{title:"QuickDeck",img:"/quickDeck.webp",stack:["Python","Django","Django REST","HTML","CSS","Tailwndcss","FlowBite","JavaScript","React","PostgreSQL"],description:"Simple app to create, manage, and study flashcard decks.",demo:"https://quickdeck.ne.choreoapps.dev",repo:"https://github.com/matcane/QuickDeck",devStatus:"In rebuild / Shit Code"},"collabora-wave":{title:"CollaboraWave",img:"/collaboraWave.webp",stack:["Python","Django","Django REST","HTML","CSS","Tailwndcss","Material Tailwind","JavaScript","React","PostgreSQL"],description:"Simple implementation of the Kanban method.",demo:"https://collaborawave.ne.choreoapps.dev",repo:"https://github.com/matcane/CollaboraWave",devStatus:"In rebuild / Shit Code"},schronisko:{title:"Schronisko",img:"/schronisko.webp",stack:["Python","Django","HTML","CSS","JavaScript","PostgreSQL"],description:"Application for monitoring animals in the shelter.",demo:null,repo:"https://github.com/matcane/schronisko",devStatus:""},"duck-check":{title:"DuckCheck",img:"/duckCheck.webp",stack:["Python","Kivy","KivyMD","SQLite"],description:"Simple implementation of the DuckChess variant of chess.",demo:null,repo:"https://github.com/matcane/DuckCheck",devStatus:""},"chat-bot":{title:"ChatBot",img:"/chatbot.webp",stack:["Python","PyTorch","NLTK","Gradio"],description:"Simple chatbot for decision systems.",demo:null,repo:"https://github.com/matcane/DS_Chatbot",devStatus:""}},et=()=>{const{stuffSlug:t}=g(),{open:i}=je(),r=$e[t],n=M(),o=O(n.breakpoints.up("sm"));return e.jsx(pe,{children:e.jsx(he,{open:i,fullWidth:!0,scroll:!0,children:e.jsxs(Ye,{tabletPadding:o,children:[e.jsx(Ge,{img:r.img}),e.jsxs(Ze,{children:[e.jsx(qe,{data:r}),e.jsx(Xe,{stack:r.stack}),e.jsx(Ve,{descr:r.description})]})]})})})},tt=()=>{const i=Object.keys($e),r=Object.values($e);return e.jsx(T,{sx:{width:"100%",color:"lightblue"},"aria-label":"contacts",children:r.map(((r,n)=>e.jsx(t.div,{whileHover:{x:50},children:e.jsx(_,{disablePadding:!0,children:e.jsxs(J,{to:i[n],style:{display:"flex",width:"100%",color:"lightblue",textDecoration:"none"},children:[e.jsx(P,{sx:{height:"4rem"},children:e.jsx(R,{primaryTypographyProps:{fontSize:{xs:"1rem",md:"2rem"}},primary:r.title})}),e.jsx(t.div,{initial:{scale:1},animate:{scale:1.2},transition:{duration:.6,repeat:1/0,repeatDelay:.2,ease:"easeInOut"},style:{display:"flex",alignItems:"center"},children:e.jsx(k,{color:"error",sx:{fontSize:{xs:"1rem",md:"2rem"}},children:r.devStatus})})]})},n)})))})};function it(){const{open:t}=je();return e.jsx(pe,{children:e.jsx(he,{open:t,style:{paddingTop:"5rem"},fullWidth:!0,children:e.jsxs(fe,{children:[e.jsx(me,{title:"My Stuff"}),e.jsx(tt,{})]})})})}const rt=()=>{const t=v([{path:"/",element:e.jsx(de,{}),children:[{path:"/",element:e.jsx(Ee,{})},{path:"/about",element:e.jsx(ge,{})},{path:"/my-stuff",element:e.jsx(it,{})},{path:"/my-stuff/:stuffSlug",element:e.jsx(et,{})},{path:"/contact",element:e.jsx(Ae,{})}]}]),n=p();return t?e.jsx(i,{mode:"wait",children:r.cloneElement(t,{key:n.pathname})}):null},nt=L({typography:{fontFamily:['"Edu AU VIC WA NT Hand Variable", cursive'].join(",")}});I(document.getElementById("root")).render(e.jsx(r.StrictMode,{children:e.jsx(H,{theme:nt,children:e.jsx(E,{children:e.jsx(rt,{})})})}));