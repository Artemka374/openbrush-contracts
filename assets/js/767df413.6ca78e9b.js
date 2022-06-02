"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[565],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(f,l(l({ref:n},s),{},{components:t})):a.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8330:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],o={sidebar_position:5,title:"Reentrancy Guard"},p=void 0,c={unversionedId:"smart-contracts/reentrancy-guard",id:"smart-contracts/reentrancy-guard",title:"Reentrancy Guard",description:"This example shows how you can use the nonreentrant",source:"@site/docs/smart-contracts/reentrancy-guard.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/reentrancy-guard",permalink:"/smart-contracts/reentrancy-guard",draft:!1,editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/docs/smart-contracts/reentrancy-guard.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Reentrancy Guard"},sidebar:"tutorialSidebar",previous:{title:"Diamond Standard",permalink:"/smart-contracts/diamond"},next:{title:"Pausable",permalink:"/smart-contracts/pausable"}},s={},d=[{value:"MyFlipper",id:"myflipper",level:2},{value:"Step 1: Include dependencies",id:"step-1-include-dependencies",level:3},{value:"Step 2: Add imports",id:"step-2-add-imports",level:3},{value:"Step 3: Define storage",id:"step-3-define-storage",level:3},{value:"Step 4: Add modifiers",id:"step-4-add-modifiers",level:3},{value:"Step 5: Add stub contract",id:"step-5-add-stub-contract",level:3},{value:"FlipOnMe",id:"fliponme",level:2},{value:"Step 1: Define <code>FlipOnMe</code> contract",id:"step-1-define-fliponme-contract",level:3},{value:"Step 2: Include dependencies",id:"step-2-include-dependencies",level:3},{value:"Testing",id:"testing",level:2}],u={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This example shows how you can use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/security/reentrancy_guard"},"non_reentrant"),"\nmodifier to prevent reentrancy into certain functions. In this example we will create two contracts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"my_flipper_guard")," - this contract is the simple version of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/ink/tree/master/examples/flipper"},"flipper"),",\nbut method ",(0,i.kt)("inlineCode",{parentName:"li"},"flip")," will be marked with ",(0,i.kt)("inlineCode",{parentName:"li"},"non_reentrant")," modifier, and we will add additional method, also marked\nwith ",(0,i.kt)("inlineCode",{parentName:"li"},"non_reentrant"),", which will ask another contract to call ",(0,i.kt)("inlineCode",{parentName:"li"},"flip")," of our ",(0,i.kt)("inlineCode",{parentName:"li"},"flipper"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flip_on_me")," is a contract which has the only one method ",(0,i.kt)("inlineCode",{parentName:"li"},"flip_on_me"),". This method will try to call ",(0,i.kt)("inlineCode",{parentName:"li"},"flip")," on the caller\n(it means that caller must be a contract with method ",(0,i.kt)("inlineCode",{parentName:"li"},"flip"),").")),(0,i.kt)("h2",{id:"myflipper"},"MyFlipper"),(0,i.kt)("h3",{id:"step-1-include-dependencies"},"Step 1: Include dependencies"),(0,i.kt)("p",null,"Include ",(0,i.kt)("inlineCode",{parentName:"p"},"openbrush")," as dependency in the cargo file or you can use ",(0,i.kt)("a",{parentName:"p",href:"/smart-contracts/overview#the-default-toml-of-your-project-with-openbrush"},"default ",(0,i.kt)("inlineCode",{parentName:"a"},"Cargo.toml"))," template.\nAfter you need to enable default implementation of Reentrancy Guard via ",(0,i.kt)("inlineCode",{parentName:"p"},"openbrush")," features."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'openbrush = { version = "~2.0.0", default-features = false, features = ["reentrancy_guard"] }\n')),(0,i.kt)("h3",{id:"step-2-add-imports"},"Step 2: Add imports"),(0,i.kt)("p",null,"To declare the contract, you need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"openbrush::contract")," macro instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"ink::contract"),". Import ",(0,i.kt)("strong",{parentName:"p"},"everything"),"\nfrom ",(0,i.kt)("inlineCode",{parentName:"p"},"openbrush::contracts::reentrancy_guard"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n\n#[openbrush::contract]\npub mod my_flipper_guard {\n  use openbrush::{\n    contracts::reentrancy_guard::*,\n    modifiers,\n  };\n\n  use crate::flip_on_me::CallerOfFlip;\n  use ink_env::call::FromAccountId;\n  use ink_storage::traits::SpreadAllocate;\n')),(0,i.kt)("h3",{id:"step-3-define-storage"},"Step 3: Define storage"),(0,i.kt)("p",null,"Declare storage struct and declare the field for ",(0,i.kt)("inlineCode",{parentName:"p"},"ReentrancyGuardStorage")," trait. Then you need to\nderive ",(0,i.kt)("inlineCode",{parentName:"p"},"ReentrancyGuardStorage")," trait and mark the field with ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ReentrancyGuardStorageField]")," attribute. Deriving\nthis trait allows you to use ",(0,i.kt)("inlineCode",{parentName:"p"},"non_reentrant")," modifier."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, SpreadAllocate, ReentrancyGuardStorage)]\npub struct MyFlipper {\n    #[ReentrancyGuardStorageField]\n    guard: ReentrancyGuardData,\n    value: bool,\n}\n")),(0,i.kt)("h3",{id:"step-4-add-modifiers"},"Step 4: Add modifiers"),(0,i.kt)("p",null,"After that you can add ",(0,i.kt)("inlineCode",{parentName:"p"},"non_reentrant")," modifier to ",(0,i.kt)("inlineCode",{parentName:"p"},"flip")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"call_flip_on_me")," methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyFlipper {\n    #[ink(constructor)]\n    pub fn new() -> Self {\n        ink_lang::codegen::initialize_contract(|_instance: &mut Self| {})\n    }\n\n    #[ink(message)]\n    pub fn get_value(&self) -> bool {\n        self.value\n    }\n\n    #[ink(message)]\n    #[openbrush::modifiers(non_reentrant)]\n    pub fn flip(&mut self) {\n        self.value = !self.value;\n    }\n\n    #[ink(message)]\n    #[modifiers(non_reentrant)]\n    pub fn call_flip_on_me(&mut self, callee: AccountId) {\n        // This method will do a cross-contract call to callee account. It calls method `flip_on_me`.\n        // Callee contract during execution of `flip_on_me` will call `flip` of this contract.\n        // `call_flip_on_me` and `flip` are marked with `non_reentrant` modifier. It means,\n        // that call of `flip` after `call_flip_on_me` must fail.\n        let mut flipper: CallerOfFlip = FromAccountId::from_account_id(callee);\n        flipper.flip_on_me();\n    }\n}\n")),(0,i.kt)("h3",{id:"step-5-add-stub-contract"},"Step 5: Add stub contract"),(0,i.kt)("p",null,"To simplify cross contract call to ",(0,i.kt)("inlineCode",{parentName:"p"},"FlipOnMe")," contract let's create a wrapper around the contract's account id.\nFor that, we will define another contract in this crate with ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink_lang::contract(compile_as_dependency = true)]"),"\nand empty methods but with the same signature as in the original contract."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"/// This is a stub implementation of contract with method `flip_on_me`.\n/// We need this implementation to create a wrapper around account id of contract.\n/// With this wrapper, we can easily call methods of some contract.\n/// Example:\n/// ```\n/// let mut flipper: CallerOfFlip = FromAccountId::from_account_id(callee);\n/// flipper.flip_on_me();\n/// ```\n#[ink_lang::contract(compile_as_dependency = true)]\npub mod flip_on_me {\n    #[ink(storage)]\n    pub struct CallerOfFlip {}\n\n    impl CallerOfFlip {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            unimplemented!()\n        }\n    }\n\n    impl CallerOfFlip {\n        #[ink(message)]\n        pub fn flip_on_me(&mut self) {\n            unimplemented!()\n        }\n    }\n}\n")),(0,i.kt)("h2",{id:"fliponme"},"FlipOnMe"),(0,i.kt)("p",null,"It's a simple contract that doesn't use any logic from the OpenBrush, so you can use simple ink! here."),(0,i.kt)("h3",{id:"step-1-define-fliponme-contract"},"Step 1: Define ",(0,i.kt)("inlineCode",{parentName:"h3"},"FlipOnMe")," contract"),(0,i.kt)("p",null,"It has the only method ",(0,i.kt)("inlineCode",{parentName:"p"},"flip_on_me"),", which will call ",(0,i.kt)("inlineCode",{parentName:"p"},"flip")," on caller."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink_lang::contract]\npub mod flip_on_me {\n    use ink_env::call::FromAccountId;\n    use my_flipper_guard::my_flipper_guard::MyFlipper;\n\n    #[ink(storage)]\n    #[derive(Default)]\n    pub struct FlipOnMe {}\n\n    impl FlipOnMe {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            ink_lang::codegen::initialize_contract(|_instance: &mut Self| {})\n        }\n\n        #[ink(message)]\n        pub fn flip_on_me(&mut self) {\n            let caller = self.env().caller();\n            // This method does a cross-contract call to caller contract and calls the `flip` method.\n            let mut flipper: MyFlipper = FromAccountId::from_account_id(caller);\n            flipper.flip();\n        }\n    }\n}\n")),(0,i.kt)("h3",{id:"step-2-include-dependencies"},"Step 2: Include dependencies"),(0,i.kt)("p",null,"To do a cross-contract call to ",(0,i.kt)("inlineCode",{parentName:"p"},"MyFlipper")," you need to import the ",(0,i.kt)("inlineCode",{parentName:"p"},"MyFlipper")," contract with ",(0,i.kt)("inlineCode",{parentName:"p"},"ink-as-dependency")," feature."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Note:")),"  The crate type of the ",(0,i.kt)("inlineCode",{parentName:"p"},"MyFlipper")," should be ",(0,i.kt)("inlineCode",{parentName:"p"},"rlib")," for that.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nink_primitives = { version = "~3.2.0", default-features = false }\nink_metadata = { version = "~3.2.0", default-features = false, features = ["derive"], optional = true }\nink_env = { version = "~3.2.0", default-features = false }\nink_storage = { version = "~3.2.0", default-features = false }\nink_lang = { version = "~3.2.0", default-features = false }\nink_prelude = { version = "~3.2.0", default-features = false }\n\nscale = { package = "parity-scale-codec", version = "3", default-features = false, features = ["derive"] }\nscale-info = { version = "2", default-features = false, features = ["derive"], optional = true }\n\n# This dependencies\nmy_flipper_guard = { path = "../flipper", default - features = false, features = ["ink-as-dependency"] }\n\n[features]\ndefault = ["std"]\nstd = [\n    "ink_primitives/std",\n    "ink_metadata",\n    "ink_metadata/std",\n    "ink_env/std",\n    "ink_storage/std",\n    "ink_lang/std",\n    "scale/std",\n    "scale-info",\n    "scale-info/std",\n    \n    # This dependencies\n    "my_flipper_guard/std",\n]\n')),(0,i.kt)("p",null,"You can check an example of the usage of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/reentrancy_guard"},"ReentrancyGuard"),"."),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"For testing, you can run the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/blob/main/tests/reentrancy-guard.tests.ts"},"integration test"),", or you can deploy both\ncontracts and call ",(0,i.kt)("inlineCode",{parentName:"p"},"call_flip_on_me")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"MyFlipper"),"\naccount providing account id of ",(0,i.kt)("inlineCode",{parentName:"p"},"FlipOnMe")," contract as an argument."))}m.isMDXComponent=!0}}]);