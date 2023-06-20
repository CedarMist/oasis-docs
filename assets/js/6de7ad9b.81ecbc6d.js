"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[6984],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(a),m=o,k=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(k,r(r({ref:t},d),{},{components:a})):n.createElement(k,r({ref:t},d))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:o,r[1]=p;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7285:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const l={},r="Frontend Application",p={unversionedId:"dapp/opl/frontend",id:"dapp/opl/frontend",title:"Frontend Application",description:"We will need a Pinata development API",source:"@site/docs/dapp/opl/frontend.md",sourceDirName:"dapp/opl",slug:"/dapp/opl/frontend",permalink:"/dapp/opl/frontend",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/dapp/opl/frontend.md",tags:[],version:"current",lastUpdatedAt:1687256264,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Build",permalink:"/dapp/opl/build"},next:{title:"Emerald ParaTime",permalink:"/dapp/emerald/"}},i={},s=[{value:"VueJS",id:"vuejs",level:3},{value:"Pinata",id:"pinata",level:3},{value:"Start",id:"start",level:3},{value:"MetaMask",id:"metamask",level:3},{value:"Localhost",id:"localhost",level:4},{value:"Example",id:"example",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...l}=e;return(0,o.kt)(c,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"frontend-application"},"Frontend Application"),(0,o.kt)("p",null,"We will need a ",(0,o.kt)("a",{parentName:"p",href:"https://www.pinata.cloud"},"Pinata")," development API\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.pinata.cloud/master"},"key")," and JWT with the ",(0,o.kt)("inlineCode",{parentName:"p"},"pinFileToIPFS"),"\npermission. Let's obtain that first."),(0,o.kt)("h3",{id:"vuejs"},"VueJS"),(0,o.kt)("p",null,"We will take a shortcut and bypass developing a VueJS app. Instead, we will\nsimply apply a sparse checkout of the complete frontend repo. Inside your\n",(0,o.kt)("inlineCode",{parentName:"p"},"opl-secret-ballot")," directory run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'git init .\ngit remote add -f origin https://github.com/oasisprotocol/playground;\ngit config core.sparseCheckout true;\necho "opl-secret-ballot/frontend/" >> .git/info/sparse-checkout;\ngit pull origin main\n')),(0,o.kt)("p",null,"Next, update the ",(0,o.kt)("inlineCode",{parentName:"p"},"@oasislabs/secret-ballot-backend")," package name in\n",(0,o.kt)("inlineCode",{parentName:"p"},"frontend/package.json")," to match your ",(0,o.kt)("inlineCode",{parentName:"p"},"backend/package.json")," project name."),(0,o.kt)("p",null,"We recommend using ",(0,o.kt)("a",{parentName:"p",href:"https://pnpm.io"},"pnpm")," to install dependencies, but ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," will work with some modifications around workspaces."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm install\n")),(0,o.kt)("p",null,"Compile and Hot-Reload for Development"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run dev\n")),(0,o.kt)("p",null,"Build assets for deployment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run build\n")),(0,o.kt)("p",null,"We can now reference the deployed contracts in our frontend Vue app."),(0,o.kt)("p",null,"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},".env.development")," file with the appropriate addresses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"VITE_BALLOT_BOX_V1_ADDR=0xFb40591a8df155da291A4B52E4Df9901a95b7C06\n")),(0,o.kt)("p",null,"and"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"VITE_DAO_V1_ADDR=0xFBcb580DD6D64fbF7caF57FB0439502412324179\n")),(0,o.kt)("h3",{id:"pinata"},"Pinata"),(0,o.kt)("p",null,"Additionally, we will need a ",(0,o.kt)("a",{parentName:"p",href:"https://www.pinata.cloud"},"Pinata")," API ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pinata.cloud/pinata-api/authentication"},"key")," to access the pinning\nservice with which we store our ballots as JSON."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"VITE_PINATA_JWT=\n")),(0,o.kt)("h3",{id:"start"},"Start"),(0,o.kt)("p",null,"Start Vue app"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run dev\n")),(0,o.kt)("h3",{id:"metamask"},"MetaMask"),(0,o.kt)("p",null,"You can use one of the deployed test accounts and associated private key with ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io"},"MetaMask"),"."),(0,o.kt)("p",null,"If you have not added a local network to MetaMask already, you can use this configuration."),(0,o.kt)("h4",{id:"localhost"},"Localhost"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"RPC HTTP endpoint: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:8545/")),(0,o.kt)("li",{parentName:"ul"},"Chain ID:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Decimal: 1337")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"You should be able to navigate to\n",(0,o.kt)("a",{parentName:"p",href:"http://localhost:5173"},"http://localhost:5173")," and create a new poll."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create a poll",src:a(3263).Z,width:"3104",height:"1974"})),(0,o.kt)("p",null,"Confirm and sign a transaction to create a new poll (issues a request against\nthe Host contract)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Confirm new poll",src:a(2291).Z,width:"2880",height:"1800"})),(0,o.kt)("p",null,"Voting on a ballot issues a request to the ",(0,o.kt)("em",{parentName:"p"},"enclave")," contract."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Vote on ballot",src:a(3989).Z,width:"3104",height:"1974"})),(0,o.kt)("p",null,"You should be able to see results from past polls."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"See past proposals",src:a(3212).Z,width:"3104",height:"1974"})),(0,o.kt)("p",null,"If you were able to get to this point, congrats! You have created an OPL dApp!"),(0,o.kt)("admonition",{title:"Example",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can try out and download a frontend of the secret ballot Dapp from the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/playground/tree/main/opl-secret-ballot/frontend"},"Oasis Playground repository"),".")))}u.isMDXComponent=!0},2291:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/confirm-new-poll-91a5382cac831bfb94c26fe04915b0d7.png"},3263:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-poll-f687454dac8f6aefdbc4479e38048452.png"},3212:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/past-dao-proposals-c975e0e2ebf6b46dab2da22d78f8ab09.png"},3989:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vote-on-ballot-f8567dbb62dc32db694694958e377493.png"}}]);