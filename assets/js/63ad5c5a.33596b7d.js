"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[6912],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"examples/access-control",id:"version-1.0.0/examples/access-control",title:"access-control",description:"Overview",source:"@site/versioned_docs/version-1.0.0/examples/access-control.md",sourceDirName:"examples",slug:"/examples/access-control",permalink:"/1.0.0/examples/access-control",draft:!1,editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/versioned_docs/version-1.0.0/examples/access-control.md",tags:[],version:"1.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/1.0.0/examples/"},next:{title:"ownable",permalink:"/1.0.0/examples/ownable"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Steps",id:"steps",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This example shows how you can use the implementation of\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/access/access-control"},"access-control")," and\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp721"},"psp721")," together to provide rights to mint and burn NFT tokens."),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Include dependencies to ",(0,a.kt)("inlineCode",{parentName:"li"},"psp721"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"access-control")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"brush")," in the cargo file.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'[dependencies]\nink_primitives = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_metadata = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false, features = ["derive"], optional = true }\nink_env = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_storage = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_lang = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_prelude = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\n\nscale = { package = "parity-scale-codec", version = "2.1", default-features = false, features = ["derive"] }\nscale-info = { version = "0.6.0", default-features = false, features = ["derive"], optional = true }\n\n# These dependencies\npsp721 = { tag = "v1.0.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false }\naccess-control = { tag = "v1.0.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false }\nbrush = { tag = "v1.0.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false }\n\n[features]\ndefault = ["std"]\nstd = [\n...\n\n   "psp721/std",\n   "access-control/std",\n   "brush/std",\n]\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Replace ",(0,a.kt)("inlineCode",{parentName:"li"},"ink::contract")," macro by ",(0,a.kt)("inlineCode",{parentName:"li"},"brush::contract"),".\nImport ",(0,a.kt)("strong",{parentName:"li"},"everything")," from ",(0,a.kt)("inlineCode",{parentName:"li"},"psp721::traits")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"access_control::traits"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[brush::contract]\npub mod my_access_control {\n   use psp721::traits::*;\n   use access_control::traits::*;\n   use brush::modifiers;\n   use ink_prelude::vec::Vec;\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Declare storage struct and declare the fields related to ",(0,a.kt)("inlineCode",{parentName:"li"},"PSP721Storage")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"AccessControlStorage"),"\ntraits. Then you need to derive ",(0,a.kt)("inlineCode",{parentName:"li"},"PSP721Storage")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"AccessControlStorage")," traits and mark corresponding fields\nwith ",(0,a.kt)("inlineCode",{parentName:"li"},"#[PSP721StorageField]")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"#[AccessControlStorageField]")," attributes. Deriving these traits allows you to reuse\nthe default implementation of ",(0,a.kt)("inlineCode",{parentName:"li"},"IPSP721")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"AccessControl"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, PSP721Storage, AccessControlStorage)]\npub struct PSP721Struct {\n    #[PSP721StorageField]\n    psp721: PSP721Data,\n    #[AccessControlStorageField]\n    access: AccessControlData,\n}\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Inherit implementations of ",(0,a.kt)("inlineCode",{parentName:"li"},"IPSP721")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"AccessControl")," traits. You can customize (override) methods in this ",(0,a.kt)("inlineCode",{parentName:"li"},"impl")," block.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl IPSP721 for PSP721Struct {}\n\nimpl AccessControl for PSP721Struct {}\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Define constructor. Your basic version of ",(0,a.kt)("inlineCode",{parentName:"li"},"IPSP721")," contract is ready!")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl PSP721Struct {\n    #[ink(constructor)]\n    pub fn new() -> Self {\n        Self::default()\n    }\n}\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Customize it by adding access control logic. We will implement ",(0,a.kt)("inlineCode",{parentName:"li"},"IPSP721Mint")," trait. It will use modifier ",(0,a.kt)("inlineCode",{parentName:"li"},"only_minter"),"(it verifies that caller\nhas the minter role). Also, we need to update the constructor to grant the minter role to the caller by default.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// You can manually set the number for the role. \n// But better to use a hash of the variable name.\n// It will generate a unique identifier of this role.\n// And will reduce the chance to have overlapping roles.\nconst MINTER: RoleType = brush::blake2b_256_as_u32!("MINTER");\n\nimpl PSP721Struct {\n   #[ink(constructor)]\n   pub fn new() -> Self {\n      let mut instance = Self::default();\n      let caller = instance.env().caller();\n      instance._init_with_admin(caller);\n      // We grant minter role to caller in constructor, so he can mint/burn tokens\n      instance.grant_role(MINTER, caller);\n      instance\n   }\n}\n\nimpl IPSP721 for PSP721Struct {}\n\nimpl AccessControl for PSP721Struct {}\n\nimpl IPSP721Mint for PSP721Struct {\n   #[ink(message)]\n   #[modifiers(only_role(MINTER))]\n   fn mint(&mut self, id: Id) {\n      self._mint(id);\n   }\n\n   #[ink(message)]\n   #[modifiers(only_role(MINTER))]\n   fn burn(&mut self, id: Id) {\n      self._burn(id);\n   }\n}\n')))}u.isMDXComponent=!0}}]);