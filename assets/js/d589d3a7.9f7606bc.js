"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[7162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,h=d["".concat(u,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9390:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1,slug:"/",title:"OpenBrush documentation",sidebar_label:"Getting started"},i=void 0,s={unversionedId:"getting-started",id:"getting-started",title:"OpenBrush documentation",description:"Welcome to OpenBrush documentation! This documentation aims to guide you through the usage of OpenBrush library.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/docs/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/",title:"OpenBrush documentation",sidebar_label:"Getting started"},sidebar:"tutorialSidebar",next:{title:"Overview",permalink:"/smart-contracts/overview"}},u={},c=[{value:"What is OpenBrush",id:"what-is-openbrush",level:2},{value:"Why OpenBrush",id:"why-openbrush",level:2}],p={toc:c};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to OpenBrush documentation! This documentation aims to guide you through the usage of OpenBrush library."),(0,o.kt)("h2",{id:"what-is-openbrush"},"What is OpenBrush"),(0,o.kt)("p",null,"OpenBrush is a library for smart contract development on ink!\nIt provides standard contracts (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/PSPs"},"based on PSP"),"),\nas well as useful contracts and macros to help you build ink! smart contracts."),(0,o.kt)("h2",{id:"why-openbrush"},"Why OpenBrush"),(0,o.kt)("p",null,"OpenBrush attempts to analogize OpenZeppelin perfectly with Rust\u2019s paradigm,\nenabling users to import contracts implemented by another user without problems\nand reuse the code.\nThere was a need to have a library that can provide base implementations of\nPSPs and to import/reuse them by customizing their own logic."))}l.isMDXComponent=!0}}]);