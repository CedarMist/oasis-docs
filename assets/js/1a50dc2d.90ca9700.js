"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[7489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},l="Setup",p={unversionedId:"dapp/opl/setup",id:"dapp/opl/setup",title:"Setup",description:"Let's get started and make our new project. You will need Node.js",source:"@site/docs/dapp/opl/setup.md",sourceDirName:"dapp/opl",slug:"/dapp/opl/setup",permalink:"/dapp/opl/setup",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/dapp/opl/setup.md",tags:[],version:"current",lastUpdatedAt:1687256264,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Overview",permalink:"/dapp/opl/introduction"},next:{title:"DAO Contract",permalink:"/dapp/opl/host"}},i={},s=[{value:"Hardhat",id:"hardhat",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Let's get started and make our new project. You will need ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download"},"Node.js"),"\n18."),(0,a.kt)("p",null,"We will be using a monorepo for both the frontend and backend of our dApp."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir opl-secret-ballot;\nmkdir opl-secret-ballot/backend;\nmkdir opl-secret-ballot/frontend;\n")),(0,a.kt)("p",null,"Our smart contracts will live inside a Hardhat project under\n",(0,a.kt)("inlineCode",{parentName:"p"},"opl-secret-ballot/backend"),", and our VueJS app will be in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"opl-secret-ballot/frontend"),"."),(0,a.kt)("h2",{id:"hardhat"},"Hardhat"),(0,a.kt)("p",null,"Let's create a new Hardhat project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd opl-secret-ballot/backend && npx hardhat\n")),(0,a.kt)("p",null,"When initializing the Hardhat application, we would like to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"backend"),"\ndirectory as the project root."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Hardhat project root: \xb7 /Users/oasis/opl-secret-ballot/backend\n")),(0,a.kt)("p",null,"Finally, we need to install the following dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@oasisprotocol/sapphire-contracts")," contains the OPL Solidity smart contracts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@oasisprotocol/sapphire-hardhat")," integrates Sapphire using the Hardhat\nconfig file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@openzeppelin/contracts")," contains standardized DAO contracts which we will\nuse to build the secret ballot application.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D @openzeppelin/contracts @oasisprotocol/sapphire-contracts @oasisprotocol/sapphire-hardhat\n")),(0,a.kt)("p",null,"You should be able to start your localhost Hardhat node."))}u.isMDXComponent=!0}}]);