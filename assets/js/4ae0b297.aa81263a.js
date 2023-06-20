"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[467],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},i="Hello World",l={unversionedId:"dapp/cipher/hello-world",id:"dapp/cipher/hello-world",title:"Hello World",description:"This section will show you how to quickly create, build and test a minimal",source:"@site/docs/dapp/cipher/hello-world.md",sourceDirName:"dapp/cipher",slug:"/dapp/cipher/hello-world",permalink:"/dapp/cipher/hello-world",draft:!1,editUrl:"https://github.com/oasisprotocol/oasis-sdk/edit/main/docs/contract/hello-world.md",tags:[],version:"current",lastUpdatedAt:1687256264,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Prerequisites",permalink:"/dapp/cipher/prerequisites"},next:{title:"Confidential Hello World",permalink:"/dapp/cipher/confidential-smart-contract"}},s={},c=[{value:"Repository Structure and Dependencies",id:"repository-structure-and-dependencies",level:2},{value:"Smart Contract Definition",id:"smart-contract-definition",level:2},{value:"Testing",id:"testing",level:2},{value:"Building for Deployment",id:"building-for-deployment",level:2},{value:"Deploying the Contract",id:"deploying-the-contract",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hello-world"},"Hello World"),(0,r.kt)("p",null,"This section will show you how to quickly create, build and test a minimal\nOasis WebAssembly smart contract."),(0,r.kt)("h2",{id:"repository-structure-and-dependencies"},"Repository Structure and Dependencies"),(0,r.kt)("p",null,"First we create the basic directory structure for the hello world contract using\nRust's ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo"},(0,r.kt)("inlineCode",{parentName:"a"},"cargo")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo init --lib hello-world\n")),(0,r.kt)("p",null,"This will create the ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-world")," directory and populate it with some\nboilerplate needed to describe a Rust application. It will also set up the\ndirectory for version control using Git. The rest of the guide assumes that you\nare executing commands from within this directory."),(0,r.kt)("p",null,"Since the Contract SDK requires a nightly version of the Rust toolchain, you\nneed to specify a version to use by creating a special file called\n",(0,r.kt)("inlineCode",{parentName:"p"},"rust-toolchain")," containing the following information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nightly-2023-01-16\n")),(0,r.kt)("p",null,"After you complete this guide, the minimal runtime directory structure will look\nas follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hello-world\n\u251c\u2500\u2500 Cargo.lock      # Dependency tree checksums (generated on first compilation).\n\u251c\u2500\u2500 Cargo.toml      # Rust crate definition.\n\u251c\u2500\u2500 rust-toolchain  # Rust toolchain version configuration.\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 lib.rs      # Smart contract source code.\n")),(0,r.kt)("h2",{id:"smart-contract-definition"},"Smart Contract Definition"),(0,r.kt)("p",null,"First you need to declare some dependencies in order to be able to use the smart\ncontract SDK. Additionally, you will want to specify some optimization flags in\norder to make the compiled smart contract as small as possible. To do this, edit\nyour ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," to look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'[package]\nname = "hello-world"\nversion = "0.0.0"\nedition = "2021"\nlicense = "Apache-2.0"\n\n[lib]\ncrate-type = ["cdylib"]\n\n[dependencies]\ncbor = { version = "0.5.1", package = "oasis-cbor" }\noasis-contract-sdk = { git = "https://github.com/oasisprotocol/oasis-sdk", tag = "contract-sdk/v0.3.0" }\noasis-contract-sdk-storage = { git = "https://github.com/oasisprotocol/oasis-sdk", tag = "contract-sdk/v0.3.0" }\n\n# Third party.\nthiserror = "1.0.30"\n\n[profile.release]\nopt-level = 3\ndebug = false\nrpath = false\nlto = true\ndebug-assertions = false\ncodegen-units = 1\npanic = "abort"\nincremental = false\noverflow-checks = true\nstrip = true\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We are using Git tags for releases instead of releasing Rust packages on\ncrates.io.")),(0,r.kt)("p",null,"After you have updated your ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," the next thing is to define the hello\nworld smart contract. To do this, edit ",(0,r.kt)("inlineCode",{parentName:"p"},"src/lib.rs")," with the following\ncontent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/lib.rs"',title:'"src/lib.rs"'},'//! A minimal hello world smart contract.\nextern crate alloc;\n\nuse oasis_contract_sdk as sdk;\nuse oasis_contract_sdk_storage::cell::PublicCell;\n\n/// All possible errors that can be returned by the contract.\n///\n/// Each error is a triplet of (module, code, message) which allows it to be both easily\n/// human readable and also identifyable programmatically.\n#[derive(Debug, thiserror::Error, sdk::Error)]\npub enum Error {\n    #[error("bad request")]\n    #[sdk_error(code = 1)]\n    BadRequest,\n}\n\n/// All possible requests that the contract can handle.\n///\n/// This includes both calls and queries.\n#[derive(Clone, Debug, cbor::Encode, cbor::Decode)]\npub enum Request {\n    #[cbor(rename = "instantiate")]\n    Instantiate { initial_counter: u64 },\n\n    #[cbor(rename = "say_hello")]\n    SayHello { who: String },\n}\n\n/// All possible responses that the contract can return.\n///\n/// This includes both calls and queries.\n#[derive(Clone, Debug, Eq, PartialEq, cbor::Encode, cbor::Decode)]\npub enum Response {\n    #[cbor(rename = "hello")]\n    Hello { greeting: String },\n\n    #[cbor(rename = "empty")]\n    Empty,\n}\n\n/// The contract type.\npub struct HelloWorld;\n\n/// Storage cell for the counter.\nconst COUNTER: PublicCell<u64> = PublicCell::new(b"counter");\n\nimpl HelloWorld {\n    /// Increment the counter and return the previous value.\n    fn increment_counter<C: sdk::Context>(ctx: &mut C) -> u64 {\n        let counter = COUNTER.get(ctx.public_store()).unwrap_or_default();\n        COUNTER.set(ctx.public_store(), counter + 1);\n\n        counter\n    }\n}\n\n// Implementation of the sdk::Contract trait is required in order for the type to be a contract.\nimpl sdk::Contract for HelloWorld {\n    type Request = Request;\n    type Response = Response;\n    type Error = Error;\n\n    fn instantiate<C: sdk::Context>(ctx: &mut C, request: Request) -> Result<(), Error> {\n        // This method is called during the contracts.Instantiate call when the contract is first\n        // instantiated. It can be used to initialize the contract state.\n        match request {\n            // We require the caller to always pass the Instantiate request.\n            Request::Instantiate { initial_counter } => {\n                // Initialize counter to specified value.\n                COUNTER.set(ctx.public_store(), initial_counter);\n\n                Ok(())\n            }\n            _ => Err(Error::BadRequest),\n        }\n    }\n\n    fn call<C: sdk::Context>(ctx: &mut C, request: Request) -> Result<Response, Error> {\n        // This method is called for each contracts.Call call. It is supposed to handle the request\n        // and return a response.\n        match request {\n            Request::SayHello { who } => {\n                // Increment the counter and retrieve the previous value.\n                let counter = Self::increment_counter(ctx);\n\n                // Return the greeting as a response.\n                Ok(Response::Hello {\n                    greeting: format!("hello {who} ({counter})"),\n                })\n            }\n            _ => Err(Error::BadRequest),\n        }\n    }\n\n    fn query<C: sdk::Context>(_ctx: &mut C, _request: Request) -> Result<Response, Error> {\n        // This method is called for each contracts.Query query. It is supposed to handle the\n        // request and return a response.\n        Err(Error::BadRequest)\n    }\n}\n\n// Create the required Wasm exports required for the contract to be runnable.\nsdk::create_contract!(HelloWorld);\n\n// We define some simple contract tests below.\n#[cfg(test)]\nmod test {\n    use oasis_contract_sdk::{testing::MockContext, types::ExecutionContext, Contract};\n\n    use super::*;\n\n    #[test]\n    fn test_hello() {\n        // Create a mock execution context with default values.\n        let mut ctx: MockContext = ExecutionContext::default().into();\n\n        // Instantiate the contract.\n        HelloWorld::instantiate(\n            &mut ctx,\n            Request::Instantiate {\n                initial_counter: 11,\n            },\n        )\n        .expect("instantiation should work");\n\n        // Dispatch the SayHello message.\n        let rsp = HelloWorld::call(\n            &mut ctx,\n            Request::SayHello {\n                who: "unit test".to_string(),\n            },\n        )\n        .expect("SayHello call should work");\n\n        // Make sure the greeting is correct.\n        assert_eq!(\n            rsp,\n            Response::Hello {\n                greeting: "hello unit test (11)".to_string()\n            }\n        );\n\n        // Dispatch another SayHello message.\n        let rsp = HelloWorld::call(\n            &mut ctx,\n            Request::SayHello {\n                who: "second call".to_string(),\n            },\n        )\n        .expect("SayHello call should work");\n\n        // Make sure the greeting is correct.\n        assert_eq!(\n            rsp,\n            Response::Hello {\n                greeting: "hello second call (12)".to_string()\n            }\n        );\n    }\n}\n')),(0,r.kt)("p",null,"This is it! You now have a simple hello world smart contract with included unit\ntests for its functionality. You can also look at other smart contract handles\nsupported by the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-sdk/blob/main/contract-sdk/src/contract.rs"},"Oasis Contract SDK"),"."),(0,r.kt)("admonition",{title:"PublicCell object",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"PublicCell<T>")," can use any type ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," which implements ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis_cbor::Encode")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"oasis_cbor::Decode"),".")),(0,r.kt)("admonition",{title:"Context object",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx")," argument contains the contract context analogous to ",(0,r.kt)("inlineCode",{parentName:"p"},"msg")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\nin the EVM world. To learn more head to the ",(0,r.kt)("a",{parentName:"p",href:"https://api.docs.oasis.io/oasis-sdk/oasis_contract_sdk/context/trait.Context.html"},"Context")," trait in our Rust API.")),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"To run unit tests type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'RUSTFLAGS="-C target-feature=+aes,+ssse3" cargo test\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Running unit tests locally requires a physical or virtualized Intel-compatible\nCPU with AES and SSSE3 instruction sets.")),(0,r.kt)("h2",{id:"building-for-deployment"},"Building for Deployment"),(0,r.kt)("p",null,"In order to build the smart contract before it can be uploaded to the target\nchain, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --target wasm32-unknown-unknown --release\n")),(0,r.kt)("p",null,"This will generate a binary file called ",(0,r.kt)("inlineCode",{parentName:"p"},"hello_world.wasm")," under\n",(0,r.kt)("inlineCode",{parentName:"p"},"target/wasm32-unknown-unknown/release")," which contains the smart contract\ncompiled into WebAssembly. This file can be directly deployed on chain."),(0,r.kt)("h2",{id:"deploying-the-contract"},"Deploying the Contract"),(0,r.kt)("p",null,"Deploying the contract we just built is simple using the Oasis CLI. This section\nassumes that you already have an instance of the CLI set up and that you will\nbe deploying contracts on the existing Testnet where you already have some\nTEST tokens to cover transaction fees."),(0,r.kt)("p",null,"First, switch the default network to Cipher Testnet to avoid the need to pass\nit to every following invocation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"oasis network set-default testnet\noasis paratime set-default testnet cipher\n")),(0,r.kt)("p",null,"The first deployment step that needs to be performed only once for the given\nbinary is uploading the Wasm binary."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"oasis contracts upload hello_world.wasm\n")),(0,r.kt)("p",null,"After successful execution it will show the code ID that you need to use for any\nsubsequent instantiation of the same contract. Next, create an instance of the\ncontract by loading the code and calling its constructor with some dummy\narguments. Note that the arguments depend on the contract that is being deployed\nand in our hello world case we are simply taking the initial counter value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"oasis contracts instantiate CODEID '{instantiate: {initial_counter: 42}}'\n")),(0,r.kt)("p",null,"After successful execution it shows the instance ID that you need for calling\nthe instantiated contract. Next, you can test calling the contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"oasis contracts call INSTANCEID '{say_hello: {who: \"me\"}}'\n")),(0,r.kt)("admonition",{title:"Example",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can view and download a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-sdk/tree/main/examples/contract-sdk/hello-world"},"complete example")," from the Oasis SDK repository.")))}d.isMDXComponent=!0}}]);