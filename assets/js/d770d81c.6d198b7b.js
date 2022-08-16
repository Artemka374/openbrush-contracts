"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[9278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1,title:"PSP22"},i=void 0,s={unversionedId:"smart-contracts/PSP22/psp22",id:"version-2.1.0/smart-contracts/PSP22/psp22",title:"PSP22",description:"This example shows how you can reuse the implementation of PSP22 token. Also, this example shows how you can customize the logic, for example, to reject transferring tokens to hated_account.",source:"@site/versioned_docs/version-2.1.0/smart-contracts/PSP22/psp22.md",sourceDirName:"smart-contracts/PSP22",slug:"/smart-contracts/PSP22/",permalink:"/2.1.0/smart-contracts/PSP22/",draft:!1,editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/versioned_docs/version-2.1.0/smart-contracts/PSP22/psp22.md",tags:[],version:"2.1.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"PSP22"},sidebar:"tutorialSidebar",previous:{title:"Payment Splitter",permalink:"/2.1.0/smart-contracts/payment-splitter"},next:{title:"PSP22 Metadata",permalink:"/2.1.0/smart-contracts/PSP22/Extensions/metadata"}},p={},l=[{value:"Step 1: Include dependencies",id:"step-1-include-dependencies",level:2},{value:"Step 2: Add imports and enable unstable feature",id:"step-2-add-imports-and-enable-unstable-feature",level:2},{value:"Step 3: Define storage",id:"step-3-define-storage",level:2},{value:"Step 4: Inherit logic",id:"step-4-inherit-logic",level:2},{value:"Step 5: Define constructor",id:"step-5-define-constructor",level:2},{value:"Step 6: Customize your contract",id:"step-6-customize-your-contract",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/token/psp22"},"PSP22")," token. Also, this example shows how you can customize the logic, for example, to reject transferring tokens to ",(0,r.kt)("inlineCode",{parentName:"p"},"hated_account"),"."),(0,r.kt)("h2",{id:"step-1-include-dependencies"},"Step 1: Include dependencies"),(0,r.kt)("p",null,"Include ",(0,r.kt)("inlineCode",{parentName:"p"},"openbrush")," as dependency in the cargo file or you can use ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/overview#the-default-toml-of-your-project-with-openbrush"},"default ",(0,r.kt)("inlineCode",{parentName:"a"},"Cargo.toml"))," template.\nAfter you need to enable default implementation of PSP22 via ",(0,r.kt)("inlineCode",{parentName:"p"},"openbrush")," features."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'openbrush = { version = "~2.1.0", default-features = false, features = ["psp22"] }\n')),(0,r.kt)("h2",{id:"step-2-add-imports-and-enable-unstable-feature"},"Step 2: Add imports and enable unstable feature"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"openbrush::contract")," macro instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"ink::contract"),". Import ",(0,r.kt)("strong",{parentName:"p"},"everything")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"openbrush::contracts::psp22"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_psp22 {\n    use openbrush::contracts::psp22::*;\n    use ink_prelude::string::String;\n    use ink_storage::traits::SpreadAllocate;\n...\n')),(0,r.kt)("h2",{id:"step-3-define-storage"},"Step 3: Define storage"),(0,r.kt)("p",null,"Declare the storage struct and declare the field related to the ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22Storage")," trait. Then you need to derive the ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22Storage")," trait and mark the corresponding field with the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[PSP22StorageField]")," attribute. Deriving this trait allows you to reuse the default implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, SpreadAllocate, PSP22Storage)]\npub struct MyPSP22 {\n    #[PSP22StorageField]\n    psp22: PSP22Data,\n}\n")),(0,r.kt)("h2",{id:"step-4-inherit-logic"},"Step 4: Inherit logic"),(0,r.kt)("p",null,"Inherit the implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22")," trait. You can customize (override) methods in the ",(0,r.kt)("inlineCode",{parentName:"p"},"impl")," block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl PSP22 for MyPSP22 {}\n")),(0,r.kt)("h2",{id:"step-5-define-constructor"},"Step 5: Define constructor"),(0,r.kt)("p",null,"Define constructor. Your basic version of ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22")," contract is ready!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'impl MyPSP22 {\n   #[ink(constructor)]\n    pub fn new(total_supply: Balance) -> Self {\n        ink_lang::codegen::initialize_contract(|instance: &mut MyPSP22| {\n            instance\n                ._mint(instance.env().caller(), total_supply)\n                .expect("Should mint");\n        })\n    }\n}\n')),(0,r.kt)("h2",{id:"step-6-customize-your-contract"},"Step 6: Customize your contract"),(0,r.kt)("p",null,"Customize it by adding hated account logic. It will contain two public methods ",(0,r.kt)("inlineCode",{parentName:"p"},"set_hated_account")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"get_hated_account"),". Also we will\noverride ",(0,r.kt)("inlineCode",{parentName:"p"},"_before_token_transfer")," method in the ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22")," implementation(that methods defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22Transfer")," trait), and we will add the ",(0,r.kt)("inlineCode",{parentName:"p"},"hated_account: AccountId")," field to the structure."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[ink(storage)]\n#[derive(Default, SpreadAllocate, PSP22Storage)]\npub struct MyPSP22 {\n    #[PSP22StorageField]\n    psp22: PSP22Data,\n    // fields for hater logic\n    hated_account: AccountId,\n}\n\nimpl PSP22Transfer for MyPSP22 {\n    // Let\'s override method to reject transactions to bad account\n    fn _before_token_transfer(\n        &mut self,\n        _from: Option<&AccountId>,\n        to: Option<&AccountId>,\n        _amount: &Balance,\n    ) -> Result<(), PSP22Error> {\n        if to == Some(&self.hated_account) {\n            return Err(PSP22Error::Custom(String::from("I hate this account!")))\n        }\n        Ok(())\n    }\n}\n\nimpl PSP22 for MyPSP22 {}\n\nimpl MyPSP22 {\n    #[ink(constructor)]\n    pub fn new(total_supply: Balance) -> Self {\n        ink_lang::codegen::initialize_contract(|instance: &mut MyPSP22| {\n            instance\n                ._mint(instance.env().caller(), total_supply)\n                .expect("Should mint");\n        })\n    }\n\n    #[ink(message)]\n    pub fn set_hated_account(&mut self, hated: AccountId) {\n        self.hated_account = hated;\n    }\n\n    #[ink(message)]\n    pub fn get_hated_account(&self) -> AccountId {\n        self.hated_account.clone()\n    }\n}\n')),(0,r.kt)("p",null,"You can check an example of the usage of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/psp22"},"PSP22"),"."),(0,r.kt)("p",null,"Also you can use extensions for PSP22 token:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"Extensions/metadata"},"PSP22Metadata"),": metadata for PSP22."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"Extensions/mintable"},"PSP22Mintable"),": creation of new tokens."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"Extensions/burnable"},"PSP22Burnable"),": destruction of own tokens."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"Extensions/wrapper"},"PSP22Wrapper"),": token wrapper for PSP22."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"Extensions/flashmint"},"PSP22FlashMint"),": extension which allows the user to perform flashloans on the token by minting and burning the token."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"Extensions/capped"},"PSP22Capped"),": extension which adds a cap for total supply of PSP22 tokens."),(0,r.kt)("p",null,"Check out the utilities for PSP22 token:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"Utils/token-timelock"},"PSP22TokenTimelock"),": utility for locking PSP22 tokens for a specified time."))}u.isMDXComponent=!0}}]);