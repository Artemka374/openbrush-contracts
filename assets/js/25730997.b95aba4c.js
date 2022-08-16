"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[6562],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},22181:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const i={sidebar_position:9,title:"Lending contract"},o=void 0,s={unversionedId:"smart-contracts/example/contract",id:"version-1.2.0/smart-contracts/example/contract",title:"Lending contract",description:"The main logic of the LendingContract is defined in the impls/lending directory.",source:"@site/versioned_docs/version-1.2.0/smart-contracts/example/contract.md",sourceDirName:"smart-contracts/example",slug:"/smart-contracts/example/contract",permalink:"/1.2.0/smart-contracts/example/contract",draft:!1,editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/versioned_docs/version-1.2.0/smart-contracts/example/contract.md",tags:[],version:"1.2.0",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Lending contract"},sidebar:"tutorialSidebar",previous:{title:"Errors",permalink:"/1.2.0/smart-contracts/example/errors"},next:{title:"Notes about methods",permalink:"/1.2.0/smart-contracts/example/implementation"}},c={},l=[{value:"Add dependencies",id:"add-dependencies",level:2},{value:"Define the contract storage",id:"define-the-contract-storage",level:2},{value:"Implement traits",id:"implement-traits",level:2},{value:"Define the constructor",id:"define-the-constructor",level:2}],d={toc:l};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The main logic of the ",(0,r.kt)("inlineCode",{parentName:"p"},"LendingContract")," is defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"impls/lending"),' directory.\nIn this file, we only need to "inherit" it.'),(0,r.kt)("h2",{id:"add-dependencies"},"Add dependencies"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LendingContract")," instantiates the ",(0,r.kt)("inlineCode",{parentName:"p"},"SharesContract")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LoanContract"),", so we\nshould import them as ",(0,r.kt)("inlineCode",{parentName:"p"},"ink-as-dependency"),". Also we want to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessControl"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"Pausable"),' from OpenBrush, so we import them too. We also want to "inherit" the\nimplementation of ',(0,r.kt)("inlineCode",{parentName:"p"},"Lending")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LendingPermissioned")," traits defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"lending_project")," crate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\nname = "lending_contract"\nversion = "1.0.0"\nauthors = ["Supercolony <dominik.krizo@supercolony.net>"]\nedition = "2018"\n\n[dependencies]\nink_primitives = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }\nink_metadata = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false, features = ["derive"], optional = true }\nink_env = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }\nink_storage = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }\nink_lang = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }\nink_prelude = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }\n\nscale = { package = "parity-scale-codec", version = "2", default-features = false, features = ["derive"] }\nscale-info = { version = "1", default-features = false, features = ["derive"], optional = true }\n\n# These dependencies\nshares_contract = { path = "../shares", default-features = false, features = ["ink-as-dependency"]  }\nloan_contract = { path = "../loan", default-features = false, features = ["ink-as-dependency"]  }\nlending_project = { path = "../..", default-features = false }\nbrush = { path = "../../..", default-features = false, features = ["psp22", "psp721", "pausable", "access_control"] }\n\n[lib]\nname = "lending_contract"\npath = "lib.rs"\ncrate-type = [\n    "cdylib",\n]\n\n[features]\ndefault = ["std"]\nstd = [\n    "ink_primitives/std",\n    "ink_metadata",\n    "ink_metadata/std",\n    "ink_env/std",\n    "ink_storage/std",\n    "ink_lang/std",\n    "scale/std",\n    "scale-info",\n    "scale-info/std",\n\n    # These dependencies\n    "loan_contract/std",\n    "shares_contract/std",\n    "brush/std",\n]\nink-as-dependency = []\n\n[profile.dev]\noverflow-checks = false\ncodegen-units = 16\n\n[profile.release]\noverflow-checks = false\n')),(0,r.kt)("h2",{id:"define-the-contract-storage"},"Define the contract storage"),(0,r.kt)("p",null,"As described earlier, we want our smart contract to be paused by the Manager account.\nTo do that, we need our contract to be ",(0,r.kt)("inlineCode",{parentName:"p"},"Pausable")," and we need a manager role.\nWe can do this with the ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessControl"),". Also, we want to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"LendingStorage")," we have declared.\nSo we will declare a struct and derive all the needed traits."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, AccessControlStorage, PausableStorage, LendingStorage)]\npub struct LendingContract {\n    #[AccessControlStorageField]\n    access: AccessControlData,\n    #[PausableStorageField]\n    pause: PausableData,\n    #[LendingStorageField]\n    lending: LendingData,\n}\n")),(0,r.kt)("h2",{id:"implement-traits"},"Implement traits"),(0,r.kt)("p",null,'We need to "inherit" the implementation of ',(0,r.kt)("inlineCode",{parentName:"p"},"AccessControll"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Pausable"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Lending"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"LendingPermissioned")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LendingPermissionedInternal"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'impl AccessControl for LendingContract {}\n\nimpl Pausable for LendingContract {}\n\nimpl Lending for LendingContract {}\n\nimpl LendingPermissioned for LendingContract {}\n\nimpl LendingPermissionedInternal for LendingContract {\n    fn _instantiate_shares_contract(&self, contract_name: &str, contract_symbol: &str) -> AccountId {\n        let code_hash = self.lending.shares_contract_code_hash;\n        let (hash, _) =\n            ink_env::random::<ink_env::DefaultEnvironment>(contract_name.as_bytes()).expect("Ger random salt");\n        let hash = hash.as_ref();\n        let contract = SharesContract::new(Some(String::from(contract_name)), Some(String::from(contract_symbol)))\n            .endowment(10000000000)\n            .code_hash(code_hash)\n            .salt_bytes(&[hash[0], hash[1], hash[2], hash[3]])\n            .instantiate()\n            .unwrap();\n        contract.to_account_id()\n    }\n}\n')),(0,r.kt)("p",null,"Now the ",(0,r.kt)("inlineCode",{parentName:"p"},"LendingContract")," has functionality of all that traits."),(0,r.kt)("h2",{id:"define-the-constructor"},"Define the constructor"),(0,r.kt)("p",null,"Finally, we will add a constructor, in which we will initiate the admin of\nthe contract, to whom we will also grant the manager role declared before,\nand we will also instantiate the ",(0,r.kt)("inlineCode",{parentName:"p"},"LoanContract")," here and store its AccountId\nin ",(0,r.kt)("inlineCode",{parentName:"p"},"LendingContract"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'impl LendingContract {\n    /// constructor with name and symbol\n    #[ink(constructor)]\n    pub fn new(code_hash: Hash, nft_code_hash: Hash) -> Self {\n        let mut instance = Self::default();\n        let caller = instance.env().caller();\n        instance._init_with_admin(caller);\n        instance.grant_role(MANAGER, caller).expect("Can not set manager role");\n        instance.lending.shares_contract_code_hash = code_hash;\n        // instantiate NFT contract and store its account id\n        let nft = LoanContract::new()\n            .endowment(10000000000)\n            .code_hash(nft_code_hash)\n            .salt_bytes(&[0xDE, 0xAD, 0xBE, 0xEF])\n            .instantiate()\n            .unwrap();\n        instance.lending.loan_account = nft.to_account_id();\n        instance\n    }\n}\n')))}p.isMDXComponent=!0}}]);