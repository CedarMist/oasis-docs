"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[9532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,u=p["".concat(l,".").concat(h)]||p[h]||m[h]||o;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1564:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7294),r=n(6010),o=n(9960),i=n(3438),s=n(3919),l=n(5999);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function c(e){let{href:t,children:n}=e;return a.createElement(o.Z,{href:t,className:(0,r.Z)("card padding--lg",d.cardContainer)},n)}function p(e){let{href:t,icon:n,title:o,description:i}=e;return a.createElement(c,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",d.cardTitle),title:o},n," ",o),i&&a.createElement("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:i},i))}function m(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?a.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return a.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function u(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(h,{item:t});case"category":return a.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},7525:(e,t,n)=>{n.d(t,{n:()=>o});var a=n(4477);function r(e){for(const t of e){const e=t.href;e&&void 0===globalThis.sidebarItemsMap[e]&&(globalThis.sidebarItemsMap[e]=t),"category"===t.type&&r(t.items)}}function o(e){const t=(0,a.E)();if(!t)throw new Error("Unexpected: cant find docsVersion in current context");if(void 0===globalThis.sidebarItemsMap){globalThis.sidebarItemsMap={};for(const e in t.docsSidebars)r(t.docsSidebars[e])}if(void 0===globalThis.sidebarItemsMap[e])throw console.log("Registered sidebar items:"),console.log(globalThis.sidebarItemsMap),new Error("Unexpected: sidebar item with href "+e+" does not exist.");return globalThis.sidebarItemsMap[e]}},8966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(1564),i=n(7525);const s={},l="Writing dApps on Emerald",d={unversionedId:"dapp/emerald/writing-dapps-on-emerald",id:"dapp/emerald/writing-dapps-on-emerald",title:"Writing dApps on Emerald",description:"This tutorial will show you how to set up dApp development environment for",source:"@site/docs/dapp/emerald/writing-dapps-on-emerald.mdx",sourceDirName:"dapp/emerald",slug:"/dapp/emerald/writing-dapps-on-emerald",permalink:"/dapp/emerald/writing-dapps-on-emerald",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/dapp/emerald/writing-dapps-on-emerald.mdx",tags:[],version:"current",lastUpdatedAt:1687256264,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Emerald ParaTime",permalink:"/dapp/emerald/"},next:{title:"Integrating BAND oracle smart contract",permalink:"/dapp/emerald/integrating-band-oracle-smart-contract"}},c={},p=[{value:"Oasis Consensus Layer and Emerald ParaTime",id:"oasis-consensus-layer-and-emerald-paratime",level:2},{value:"Testnet and Mainnet",id:"testnet-and-mainnet",level:2},{value:"Running a Private Oasis Network Locally",id:"running-a-private-oasis-network-locally",level:2},{value:"Create dApp on Emerald with Hardhat",id:"create-dapp-on-emerald-with-hardhat",level:2},{value:"Create dApp on Emerald with Truffle",id:"create-dapp-on-emerald-with-truffle",level:2},{value:"Create dApp on Emerald with Remix - Ethereum IDE",id:"create-dapp-on-emerald-with-remix---ethereum-ide",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Deployment of my contract timed out on Testnet or Mainnet",id:"deployment-of-my-contract-timed-out-on-testnet-or-mainnet",level:3},{value:"Execution of my contract failed. How do I debug what went wrong?",id:"execution-of-my-contract-failed-how-do-i-debug-what-went-wrong",level:3},{value:"See also",id:"see-also",level:2}],m={toc:p},h="wrapper";function u(e){let{components:t,...s}=e;return(0,r.kt)(h,(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"writing-dapps-on-emerald"},"Writing dApps on Emerald"),(0,r.kt)("p",null,"This tutorial will show you how to set up dApp development environment for\nEmerald to be able to write and deploy dApps on Oasis Emerald."),(0,r.kt)("p",null,"We will walk you through the Hardhat and Truffle configuration and -\nfor those who prefer a simpler web-only interface - the Remix IDE.\nOasis Emerald exposes an EVM-compatible interface so writing dApps isn't much\ndifferent compared to the original Ethereum Network!"),(0,r.kt)("h2",{id:"oasis-consensus-layer-and-emerald-paratime"},"Oasis Consensus Layer and Emerald ParaTime"),(0,r.kt)("p",null,"Oasis Network consists of the consensus layer and a number of Layer 2 chains\ncalled the ParaTimes (to learn more, check the ",(0,r.kt)("a",{parentName:"p",href:"/general/oasis-network/"},"Oasis Network Overview")," chapter). Emerald is a ParaTime which implements the Ethereum\nVirtual Machine (EVM)."),(0,r.kt)("p",null,"The minimum and also expected block time in Emerald is ",(0,r.kt)("strong",{parentName:"p"},"6 seconds"),". Any\nEmerald transaction will require at least this amount of time to be executed."),(0,r.kt)("p",null,"The native Oasis addresses are Bech32-encoded (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis1qpupfu7e2n6pkezeaw0yhj8mcem8anj64ytrayne"),")\nwhile Emerald supports both the Bech32-encoded and the Ethereum-compatible\nhex-encoded addresses (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"0x90adE3B7065fa715c7a150313877dF1d33e777D5"),"). The\nunderlying algorithm for signing the transactions is ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/EdDSA#Ed25519"},"Ed25519")," on the Consensus\nlayer and both ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/EdDSA#Ed25519"},"Ed25519")," and ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm"},"ECDSA")," in Emerald. The Ed25519 scheme is used\nmostly by the Emerald compute nodes for managing their computation rewards. For\nsigning your dApp-related transactions on Emerald you will probably want to use\nECDSA since this is the de facto scheme supported by Ethereum wallets and\nlibraries."),(0,r.kt)("p",null,"Finally, the ParaTimes are not allowed to directly access your tokens stored in\nConsensus layer addresses. You will need to ",(0,r.kt)("strong",{parentName:"p"},"deposit")," tokens from your consensus\naccount to Emerald. Consult the ",(0,r.kt)("a",{parentName:"p",href:"/general/manage-tokens/how-to-transfer-rose-into-paratime"},"How to transfer ROSE into Emerald ParaTime")," chapter to learn more."),(0,r.kt)("h2",{id:"testnet-and-mainnet"},"Testnet and Mainnet"),(0,r.kt)("p",null,"The Oasis Network currently has, similar to some other blockchains, two major\npublic deployments: the ",(0,r.kt)("a",{parentName:"p",href:"/node/mainnet/"},"Mainnet")," and the ",(0,r.kt)("a",{parentName:"p",href:"/node/testnet/"},"Testnet"),". The\nnative tokens are called ROSE and TEST respectively. Each deployment has its own\nstate, a different set of validators and ParaTimes. The state of the Mainnet is\nconsidered immutable for indefinite time, while the data on the Testnet can be\nsubject to wipe in the future."),(0,r.kt)("p",null,"The Emerald ParaTime is deployed similarly: the ",(0,r.kt)("a",{parentName:"p",href:"/dapp/emerald/#mainnet"},"Emerald Mainnet")," is deployed on the Oasis Mainnet\nNetwork while the ",(0,r.kt)("a",{parentName:"p",href:"/dapp/emerald/#testnet"},"Emerald Testnet")," on the Oasis Testnet Network. The Emerald state on the Mainnet\nis stable. Testnet, apart from running the unstable version of the code and being prone to bugs, can\nhave the state deliberately wiped either on the Emerald ParaTime layer or on the Oasis Testnet\nNetwork level."),(0,r.kt)("admonition",{title:"Never deploy production service on Testnet",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Because Testnet state can be wiped in the future, you should ",(0,r.kt)("strong",{parentName:"p"},"never deploy a\nproduction service on the Testnet"),"!")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For testing purposes, visit our ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.testnet.oasis.dev/"},"Testnet faucet")," to obtain some TEST which you\ncan then use on the Emerald Testnet to pay for gas fees. The faucet supports\nsending TEST both to your Consensus layer address or to your address inside the\nParaTime.")),(0,r.kt)("h2",{id:"running-a-private-oasis-network-locally"},"Running a Private Oasis Network Locally"),(0,r.kt)("p",null,"For convenient development and testing of your dApps the Oasis team prepared\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-web3-gateway/pkgs/container/emerald-dev"},"ghcr.io/oasisprotocol/emerald-dev")," Docker image which brings you a complete Oasis\nstack to your desktop. This network is isolated from the Mainnet or Testnet and\nconsists of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"single Oasis validator node with 1-second block time and 30-second epoch,"),(0,r.kt)("li",{parentName:"ul"},"single Oasis client node,"),(0,r.kt)("li",{parentName:"ul"},"three compute nodes running Oasis Emerald,"),(0,r.kt)("li",{parentName:"ul"},"PostgreSQL instance,"),(0,r.kt)("li",{parentName:"ul"},"Oasis Web3 gateway with transaction indexer,"),(0,r.kt)("li",{parentName:"ul"},"helper script which populates initial test accounts for you.")),(0,r.kt)("p",null,"To run the image, execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -it -p8545:8545 -p8546:8546 ghcr.io/oasisprotocol/emerald-dev\n")),(0,r.kt)("p",null,"After a while, the tool will show you something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"emerald-dev 2023-02-28-git84730b2 (oasis-core: 22.2.6, emerald-paratime: 10.0.0, oasis-web3-gateway: 3.2.0-git84730b2)\n\nStarting oasis-net-runner with emerald...\nStarting postgresql...\nStarting oasis-web3-gateway...\nBootstrapping network and populating account(s) (this might take a minute)...\n\nAvailable Accounts\n==================\n(0) 0x75eCF0d4496C2f10e4e9aF3D4d174576Ee9010E2 (100 ROSE)\n(1) 0x903a7dce5a26a3f4DE2d157606c2191740Bc4BC9 (100 ROSE)\n(2) 0xF149ad5CBFfD92ba84F5784106f6Cb071A32a1b8 (100 ROSE)\n(3) 0x2315F40C1122400Df55483743B051D2997ef0a62 (100 ROSE)\n(4) 0xf6FdcacbA93A428A07d27dacEf1fBF25E2C65B0F (100 ROSE)\n\nPrivate Keys\n==================\n(0) 0x160f52faa5c0aecfa26c793424a04d53cbf23dcad5901ce15b50c2e85b9d6ca7\n(1) 0x0ba685723b47d8e744b1b70a9bea9d4d968f60205385ae9de99865174c1af110\n(2) 0xfa990cf0c22af455d2734c879a2a844ff99bd779b400bb0e2919758d1be284b5\n(3) 0x3bf225ef73b1b56b03ceec8bb4dfb4830b662b073b312beb7e7fec3159b1bb4f\n(4) 0xad0dd7ceb896fd5f5ddc76d56e54ee6d5c2a3ffeac7714d3ef544d3d6262512c\n\nHD Wallet\n==================\nMnemonic:       bench remain brave curve frozen verify dream margin alarm world repair innocent\nBase HD Path:   m/44'/60'/0'/0/%d\n\nWARNING: The chain is running in ephemeral mode. State will be lost after restart!\n\nListening on http://localhost:8545 and ws://localhost:8546\n")),(0,r.kt)("p",null,"Those familiar with local dApp environments will find the output above similar\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"geth --dev")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ganache-cli")," commands or the ",(0,r.kt)("inlineCode",{parentName:"p"},"geth-dev-assistant")," npm\npackage. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-web3-gateway/pkgs/container/emerald-dev"},"emerald-dev")," will spin up a private Oasis Network locally, generate\nand populate test accounts and make the following Web3 endpoints available for\nyou to use:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:8545")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ws://localhost:8546"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you prefer using the same mnemonics each time (e.g. for testing purposes)\nor to populate just a single wallet, use ",(0,r.kt)("inlineCode",{parentName:"p"},"-to")," flag and pass the mnemonics or\nthe wallet address. For example"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'docker run -it -p8545:8545 -p8546:8546 ghcr.io/oasisprotocol/emerald-dev -to "bench remain brave curve frozen verify dream margin alarm world repair innocent"\ndocker run -it -p8545:8545 -p8546:8546 ghcr.io/oasisprotocol/emerald-dev -to "0x75eCF0d4496C2f10e4e9aF3D4d174576Ee9010E2"\n'))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-web3-gateway/pkgs/container/emerald-dev"},"emerald-dev")," runs in ephemeral mode. Any smart contract and wallet balance\nwill be lost after you quit the Docker container!")),(0,r.kt)("h2",{id:"create-dapp-on-emerald-with-hardhat"},"Create dApp on Emerald with Hardhat"),(0,r.kt)("p",null,"Let's begin writing our dApp with Hardhat. We will lay out a base for a modern\ndApp including TypeScript bindings for tests and later for the frontend\napplication."),(0,r.kt)("p",null,"First, make sure you installed ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js")," and that you have ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"npx"),"\nreadily available. Then run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx hardhat init\n")),(0,r.kt)("p",null,"Select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Create an advanced sample project that uses TypeScript")," option and\nenter the root directory for your project. You can leave other options as\ndefault. After a while Hardhat will finish downloading the dependencies and\ncreate a simple greeter dApp."),(0,r.kt)("p",null,"To compile, deploy and test the smart contract of your sample project locally,\nmove to your project directory and type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npx hardhat compile\nCompiling 2 files with 0.8.4\nGenerating typings for: 2 artifacts in dir: typechain for target: ethers-v5\nSuccessfully generated 5 typings!\nCompilation finished successfully\n\n$ npx hardhat test\nNo need to generate any newer typings.\n\n\n  Greeter\nDeploying an Emerald Greeter with greeting: Hello, world!\nChanging greeting from 'Hello, world!' to 'Hola, mundo!'\n    \u2713 Should return the new greeting once it's changed (613ms)\n\n\n  1 passing (614ms)\n")),(0,r.kt)("p",null,"Hardhat already comes with a built-in EVM which is spun up from scratch each\ntime we call ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat test")," without parameters. It populates 20 accounts with\nETH and registers them to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/"},"ethers.js")," instance used in the tests."),(0,r.kt)("p",null,"Next, let's look at how to configure Hardhat for Emerald. For convenience, we\nassign the ",(0,r.kt)("inlineCode",{parentName:"p"},"PRIVATE_KEY")," environment variable a hex-encoded private key of your\nEmerald wallet containing tokens to pay for gas fees. If you are running\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-web3-gateway/pkgs/container/emerald-dev"},"emerald-dev"),", use any of the five generated private keys."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'export PRIVATE_KEY="YOUR_0x_EMERALD_PRIVATE_KEY"\n')),(0,r.kt)("p",null,"Next, we configure three networks: ",(0,r.kt)("inlineCode",{parentName:"p"},"emerald_local"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"emerald_testnet"),", and\n",(0,r.kt)("inlineCode",{parentName:"p"},"emerald_mainnet"),". Open ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.ts")," and replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"networks")," field to\nmatch the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'networks: {\n    emerald_local: {\n      url: "http://localhost:8545",\n      accounts:\n        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],\n    },\n    emerald_testnet: {\n      url: "https://testnet.emerald.oasis.dev",\n      accounts:\n        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],\n    },\n    emerald_mainnet: {\n      url: "https://emerald.oasis.dev",\n      accounts:\n        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],\n    },\n  },\n')),(0,r.kt)("p",null,"Next, we increase the default timeout for mocha tests from 20 seconds to 60\nseconds. This step is not needed, if you will test your contracts solely on\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-web3-gateway/pkgs/container/emerald-dev"},"emerald-dev"),", but is required for Testnet to avoid timeouts. Append the\nfollowing block to the ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mocha: {\n  timeout: 60000\n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"geth --dev")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ganache-cli"),' tools use a so-called "instant mining" mode.\nIn this mode, a new block is mined immediately when a new transaction occurs in\nthe mempool. Neither Oasis Mainnet and Testnet Networks nor ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-web3-gateway/pkgs/container/emerald-dev"},"emerald-dev"),"\nsupport such mode and the new block will always be mined at least after the 1\nsecond block time elapsed.")),(0,r.kt)("p",null,"Now deploy the contract to the local ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-web3-gateway/pkgs/container/emerald-dev"},"emerald-dev")," Docker container by\nselecting the ",(0,r.kt)("inlineCode",{parentName:"p"},"emerald_local")," network we configured above and run the tests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npx hardhat run scripts/deploy.ts --network emerald_local\nNo need to generate any newer typings.\nGreeter deployed to: 0x4e1de2f6cf4e57a8f55b4a5dd1fce770db734962\n\n$ npx hardhat test --network emerald_local\nNo need to generate any newer typings.\n\n\n  Greeter\n    \u2713 Should return the new greeting once it's changed (6017ms)\n\n\n  1 passing (6s)\n")),(0,r.kt)("p",null,"Next, you can try deploying the contract to the Testnet. Temporarily replace\nyour ",(0,r.kt)("inlineCode",{parentName:"p"},"PRIVATE_KEY")," environment variable with your Testnet one and deploy the\ncontract by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"emerald_testnet")," network. Similarly, you can also\nrun the tests."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ PRIVATE_KEY="0xYOUR_TESTNET_PRIVATE_KEY" npx hardhat run scripts/deploy.ts --network emerald_testnet\nNo need to generate any newer typings.\nGreeter deployed to: 0x735df9F166a2715bCA3D3A66B119CBef95a0D129\n\n$ PRIVATE_KEY="0xYOUR_TESTNET_PRIVATE_KEY" npx hardhat test --network emerald_testnet\nNo need to generate any newer typings.\n\n\n  Greeter\n    \u2713 Should return the new greeting once it\'s changed (21016ms)\n\n\n  1 passing (6s)\n')),(0,r.kt)("p",null,"Congratulations, you have just deployed your first smart contract to the public\nEmerald Testnet Network! If you are unsure, whether your contract was\nsuccessfully deployed, you can monitor the transactions on the Emerald block\nexplorer (",(0,r.kt)("a",{parentName:"p",href:"https://explorer.emerald.oasis.dev"},"Mainnet"),", ",(0,r.kt)("a",{parentName:"p",href:"https://testnet.explorer.emerald.oasis.dev"},"Testnet"),"). This tool\nindexes all Emerald accounts, blocks, transactions and even offers a neat user\ninterface for browsing ETH-specifics like the ERC20 tokens and the ERC721 NFTs."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Emerald Block Explorer showing the latest transactions",src:n(9162).Z,width:"2205",height:"1335"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Emerald Block Explorer showing our account 0x90adE3B7065fa715c7a150313877dF1d33e777D5 used for deploying the smart contract",src:n(1566).Z,width:"2208",height:"1339"})),(0,r.kt)("p",null,"Finally, by selecting the ",(0,r.kt)("inlineCode",{parentName:"p"},"emerald_mainnet")," network and the corresponding\nprivate key, we can deploy the contract on the Mainnet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ PRIVATE_KEY="0xYOUR_MAINNET_PRIVATE_KEY" npx hardhat run scripts/deploy.ts --network emerald_mainnet\nNo need to generate any newer typings.\nGreeter deployed to: 0x6e8e9e0DBCa4EF4a65eBCBe4032e7C2a6fb7C623\n')),(0,r.kt)("h2",{id:"create-dapp-on-emerald-with-truffle"},"Create dApp on Emerald with Truffle"),(0,r.kt)("p",null,"Truffle and its accompanying ",(0,r.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.5.2/"},"web3.js")," library is another popular smart\ncontract deployment tool. Let's follow ",(0,r.kt)("a",{parentName:"p",href:"https://trufflesuite.com/docs/truffle/quickstart.html"},"the official Truffle's quickstart\nguide")," and unbox the MetaCoin example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ mkdir MetaCoin\n$ cd MetaCoin\n$ npx truffle unbox metacoin\n\nStarting unbox...\n=================\n\n\u2714 Preparing to download box\n\u2714 Downloading\n\u2714 Cleaning up temporary files\n\u2714 Setting up box\n\nUnbox successful, sweet!\n\nCommands:\n\n  Compile contracts: truffle compile\n  Migrate contracts: truffle migrate\n  Test contracts:    truffle test\n")),(0,r.kt)("p",null,"To compile and test the contract type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npx truffle test\nUsing network 'test'.\n\n\nCompiling your contracts...\n===========================\n> Compiling ./test/TestMetaCoin.sol\n> Artifacts written to /tmp/test--1052348-l4q3zOSy9nRA\n> Compiled successfully using:\n   - solc: 0.5.16+commit.9c3226ce.Emscripten.clang\n\n\n\n  TestMetaCoin\n    \u2713 testInitialBalanceUsingDeployedContract (112ms)\n    \u2713 testInitialBalanceWithNewMetaCoin (106ms)\n\n  Contract: MetaCoin\n    \u2713 should put 10000 MetaCoin in the first account (59ms)\n    \u2713 should call a function that depends on a linked library (78ms)\n    \u2713 should send coin correctly (185ms)\n\n\n  5 passing (6s)\n")),(0,r.kt)("p",null,"This spawns an instance of Truffle Develop blockchain in the background with a\nnumber of prepopulated ETH accounts and runs the tests."),(0,r.kt)("p",null,"Now, let's add support to Truffle for reading the private key stored in the\nenvironment variable. Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"@truffle/hdwallet-provider")," package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npm i @truffle/hdwallet-provider --save-dev\n")),(0,r.kt)("p",null,"Import the library by adding the following line at the beginning of your\n",(0,r.kt)("inlineCode",{parentName:"p"},"truffle-config.js"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'const HDWalletProvider = require("@truffle/hdwallet-provider");')),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"truffle-config.js")," and configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"emerald_local"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"emerald_testnet"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"emerald_mainnet")," networks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'emerald_local: {\n  url: "http://localhost:8545",\n  provider: function() {\n    return new HDWalletProvider(process.env.PRIVATE_KEYS.split(","), "http://localhost:8545");\n  },\n  network_id: "*"\n},\nemerald_testnet: {\n  url: "https://testnet.emerald.oasis.dev:8545",\n  provider: function() {\n    return new HDWalletProvider(process.env.PRIVATE_KEY, "https://testnet.emerald.oasis.dev");\n  },\n  network_id: "*"\n},\nemerald_mainnet: {\n  url: "https://emerald.oasis.dev:8545",\n  provider: function() {\n    return new HDWalletProvider(process.env.PRIVATE_KEY, "https://emerald.oasis.dev");\n  },\n  network_id: "*"\n}\n')),(0,r.kt)("p",null,"The MetaCoin example is somewhat specific in that it expects at least two\nprivate keys for running the token transfer test. That's why we use the\n",(0,r.kt)("inlineCode",{parentName:"p"},'.split(",")')," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"emerald_local")," network configuration above and we assign\ntwo private keys to the environment variable. If you are running ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-web3-gateway/pkgs/container/emerald-dev"},"emerald-dev"),",\ncopy and paste any two of the generated private keys."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'export PRIVATE_KEYS="0xYOUR_FIRST_EMERALD_PRIVATE_KEY,0xYOUR_SECOND_EMERALD_PRIVATE_KEY"\n')),(0,r.kt)("p",null,"When we run the tests Truffle will deploy the contract with its dependencies\nand call the contract numerous times so it may take a few moments to complete."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ truffle test --network emerald_local\nUsing network 'emerald_local'.\n\n\nCompiling your contracts...\n===========================\n> Compiling ./test/TestMetaCoin.sol\n> Artifacts written to /tmp/test--1083354-x87wt3FdmfDE\n> Compiled successfully using:\n   - solc: 0.5.16+commit.9c3226ce.Emscripten.clang\n\n\n\n  TestMetaCoin\n    \u2713 testInitialBalanceUsingDeployedContract (1091ms)\n    \u2713 testInitialBalanceWithNewMetaCoin (913ms)\n\n  Contract: MetaCoin\n    \u2713 should put 10000 MetaCoin in the first account (349ms)\n    \u2713 should call a function that depends on a linked library (677ms)\naccount one: 0x90adE3B7065fa715c7a150313877dF1d33e777D5\naccount two: 0x33a8Ba274FEdFeed6A08d09eC524a1E1A6Da8262\n    \u2713 should send coin correctly (2795ms)\n\n\n  5 passing (26s)\n")),(0,r.kt)("p",null,"In order to deploy the contracts to the Testnet and finally the Mainnet run the\n",(0,r.kt)("inlineCode",{parentName:"p"},"migrate")," Truffle command and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"emerald_testnet")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"emerald_mainnet"),"\nnetwork accordingly. For the Mainnet, you would run something like this and in\na few rounds - depending on the network congestion - the contracts will be\ndeployed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ PRIVATE_KEY=0xYOUR_MAINNET_PRIVATE_KEY truffle migrate --network emerald_mainnet\n\nCompiling your contracts...\n===========================\n> Everything is up to date, there is nothing to compile.\n\n\n\nStarting migrations...\n======================\n> Network name:    'emerald_mainnet'\n> Network id:      42262\n> Block gas limit: 21000000 (0x1406f40)\n\n\n1_initial_migration.js\n======================\n\n   Deploying 'Migrations'\n   ----------------------\n   > transaction hash:    0x1630945ac8abfe6395a2e2627bd0acfffcf4bda9e107943cb3e4d6ef1d0905d4\n   > Blocks: 1            Seconds: 44\n   > contract address:    0xFaeA7eda8Be7AC83f811019094D0065D28F52c7c\n   > block number:        93914\n   > block timestamp:     1642176860\n   > account:             0x90adE3B7065fa715c7a150313877dF1d33e777D5\n   > balance:             0\n   > gas used:            209087 (0x330bf)\n   > gas price:           0 gwei\n   > value sent:          0 ETH\n   > total cost:          0 ETH\n\n\n   > Saving migration to chain.\n   > Saving artifacts\n   -------------------------------------\n   > Total cost:                   0 ETH\n\n\n2_deploy_contracts.js\n=====================\n\n   Deploying 'ConvertLib'\n   ----------------------\n   > transaction hash:    0xf2c53938773c316051f4ce98395e5df21cfcf0c686f634c1079725e04b9c556c\n   > Blocks: 2            Seconds: 80\n   > contract address:    0xA0FB05d6Ce497beb162C4EbA4F203544B18A3f31\n   > block number:        93918\n   > block timestamp:     1642177009\n   > account:             0x90adE3B7065fa715c7a150313877dF1d33e777D5\n   > balance:             0\n   > gas used:            121235 (0x1d993)\n   > gas price:           0 gwei\n   > value sent:          0 ETH\n   > total cost:          0 ETH\n\n\n   Linking\n   -------\n   * Contract: MetaCoin <--\x3e Library: ConvertLib (at address: 0xA0FB05d6Ce497beb162C4EbA4F203544B18A3f31)\n\n   Deploying 'MetaCoin'\n   --------------------\n   > transaction hash:    0x2c5e8177df03d643e56a37b64cbe660420b114ffec097dc5d793bfc666af8e16\n   > Blocks: 2            Seconds: 60\n   > contract address:    0x5a1C04012bc233c898aebb8BB4353F80D96f3dD2\n   > block number:        93920\n   > block timestamp:     1642177073\n   > account:             0x90adE3B7065fa715c7a150313877dF1d33e777D5\n   > balance:             0\n   > gas used:            361168 (0x582d0)\n   > gas price:           0 gwei\n   > value sent:          0 ETH\n   > total cost:          0 ETH\n\n\n   > Saving migration to chain.\n   > Saving artifacts\n   -------------------------------------\n   > Total cost:                   0 ETH\n\n\nSummary\n=======\n> Total deployments:   3\n> Final cost:          0 ETH\n")),(0,r.kt)("p",null,"In the output above, the MetaCoin contract has been successfully deployed to\n",(0,r.kt)("inlineCode",{parentName:"p"},"0x5a1C04012bc233c898aebb8BB4353F80D96f3dD2")," address on the Mainnet."),(0,r.kt)("h2",{id:"create-dapp-on-emerald-with-remix---ethereum-ide"},"Create dApp on Emerald with Remix - Ethereum IDE"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://remix.ethereum.org"},"Remix")," is a popular web IDE for swift development, deployment and testing\nsmart contracts on the Ethereum Network. We will use it in combination with\nMetaMask to access the network settings and your wallet to sign and submit the\ntransactions."),(0,r.kt)("p",null,"If you haven't done it yet, first ",(0,r.kt)("a",{parentName:"p",href:"/general/manage-tokens/how-to-transfer-rose-into-paratime#verifying-rose-balance-on-paratime"},"install the MetaMask extension for your\nbrowser"),". Import your wallet and configure Emerald Testnet and\nMainnet Networks. If you wish to connect to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-web3-gateway/pkgs/container/emerald-dev"},"emerald-dev")," container, configure\nthe local network as well."),(0,r.kt)("p",null,'When you open Remix for the first time, it automatically creates an example\nproject. Let\'s open one of the contracts and compile it in the "Solidity\ncompiler" tab.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The initial example project in Remix - Ethereum IDE",src:n(3723).Z,width:"2219",height:"1332"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Solidity compiler tab",src:n(9039).Z,width:"2217",height:"1338"})),(0,r.kt)("p",null,'Next, in the "Deploy and Run Transactions" tab, select the "Injected Web3"\nenvironment. A MetaMask popup will appear and you will have to connect one or\nmore accounts with Remix. Once the connection succeeds, click on the "Deploy"\nbutton. The MetaMask popup appears again and you will have to review the\ntransaction, the gas options and finally confirm the transaction.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Metamask transaction confirmation",src:n(6932).Z,width:"2219",height:"1332"})),(0,r.kt)("p",null,"If everything goes well, your transaction will be deployed using the selected\naccount in the MetaMask and the corresponding Emerald Network."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Successful contract deployment on Emerald Testnet with Remix",src:n(9603).Z,width:"2219",height:"1332"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Sometimes the gas limit estimation function might compute a slightly lower\nvalue from the required one. In this case, try increasing the gas limit\nmanually by 10% or 20%.")),(0,r.kt)("p",null,"Congratulations! Now you can start developing your own smart contracts on the\nOasis Emerald blockchain! Should you have any questions, do not hesitate to\nshare them with us on the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/oasisprotocol"},"#emerald-paratime Discord channel"),"."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"deployment-of-my-contract-timed-out-on-testnet-or-mainnet"},"Deployment of my contract timed out on Testnet or Mainnet"),(0,r.kt)("p",null,"Emerald validators, similar to Ethereum ones, order the execution of\ntransactions by gas price. When deploying a contract and the deployment times\nout, first wait another few rounds to make sure that the contract will not be\ndeployed eventually."),(0,r.kt)("p",null,"Next, check that your ",(0,r.kt)("inlineCode",{parentName:"p"},"gasPrice")," ",(0,r.kt)("strong",{parentName:"p"},"is at least 10 nROSE")," which is a minimum\nrequired gas price on Emerald. This value should already be propagated\nautomatically by the web3 endpoint, but your deployment configuration might\nhave ignored it."),(0,r.kt)("p",null,"Finally, consider increasing the ",(0,r.kt)("inlineCode",{parentName:"p"},"gasPrice")," parameter in Hardhat/Truffle config\nfiles by a fraction (e.g. 10% or 20%). This will require more ROSE from your\nwallet to deploy the contract, but you will also increase the chance of your\ntransaction being included in the block."),(0,r.kt)("h3",{id:"execution-of-my-contract-failed-how-do-i-debug-what-went-wrong"},"Execution of my contract failed. How do I debug what went wrong?"),(0,r.kt)("p",null,"If you are using Testnet or Mainnet, try to debug your transaction by finding\nit on the Emerald block explorer (",(0,r.kt)("a",{parentName:"p",href:"https://explorer.emerald.oasis.dev"},"Mainnet"),", ",(0,r.kt)("a",{parentName:"p",href:"https://testnet.explorer.emerald.oasis.dev"},"Testnet"),"):"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Emerald block explorer showing a failed transaction",src:n(5239).Z,width:"2219",height:"1332"})),(0,r.kt)("p",null,"In some cases, the transaction result on Emerald block explorer might be stuck\nat ",(0,r.kt)("inlineCode",{parentName:"p"},"Error: (Awaiting internal transactions for reason)"),". In this case or in\ncase of other Consensus layer \u2194 ParaTime issues, try to find your Emerald\ntransaction on the Oasis Scan (",(0,r.kt)("a",{parentName:"p",href:"https://oasisscan.com"},"Mainnet"),", ",(0,r.kt)("a",{parentName:"p",href:"https://testnet.oasisscan.com"},"Testnet"),") which is primarily a Consensus layer explorer, but offers\nsome introspection into ParaTime transactions as well. Once you find your\nfailed Emerald transaction, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Status")," field should contain a more verbose\nerror description, for example:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Oasis Scan showing the Out of gas error for a transaction on Emerald",src:n(1263).Z,width:"2219",height:"1332"})),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)(o.Z,{item:(0,i.n)("/node/run-your-node/paratime-client-node"),mdxType:"DocCard"}),(0,r.kt)(o.Z,{item:(0,i.n)("/node/web3"),mdxType:"DocCard"}))}u.isMDXComponent=!0},9162:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/block_explorer1-300ad8505c206bca6ecb6416836e6770.png"},1566:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/block_explorer2-c07d43edbfeb9e90e1b38710179e9062.png"},5239:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/oasisscan1-024c1033c1ceeff4ca4f4294f544ce9c.png"},1263:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/oasisscan2-00e68913dfa621eb7c5f170e3b2f6378.png"},3723:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/remix1-400bc72123a178beea4c86d2ba9857cd.png"},9039:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/remix2-66fd8dbfe9f2a299501f5f9c75bdd08d.png"},6932:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/remix3-e2db0ab19df6a1aff70c68018b93e897.png"},9603:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/remix4-41183efd0966503c866863efba485d1c.png"}}]);