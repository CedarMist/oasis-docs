"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[9392],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>h});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),m=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=m(o),d=n,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||s;return o?r.createElement(h,a(a({ref:t},l),{},{components:o})):r.createElement(h,a({ref:t},l))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,a=new Array(s);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,a[1]=i;for(var m=2;m<s;m++)a[m]=o[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3882:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var r=o(7462),n=(o(7294),o(3905));const s={},a="Root Hash",i={unversionedId:"core/consensus/services/roothash",id:"core/consensus/services/roothash",title:"Root Hash",description:"The roothash service is responsible for runtime commitment processing and",source:"@site/docs/core/consensus/services/roothash.md",sourceDirName:"core/consensus/services",slug:"/core/consensus/services/roothash",permalink:"/core/consensus/services/roothash",draft:!1,editUrl:"https://github.com/oasisprotocol/oasis-core/edit/stable/22.2.x/docs/consensus/services/roothash.md",tags:[],version:"current",lastUpdatedAt:1686130335,formattedLastUpdatedAt:"Jun 7, 2023",frontMatter:{},sidebar:"oasisCore",previous:{title:"Governance",permalink:"/core/consensus/services/governance"},next:{title:"Key Manager",permalink:"/core/consensus/services/keymanager"}},c={},m=[{value:"Methods",id:"methods",level:2},{value:"Executor Commit",id:"executor-commit",level:3},{value:"Events",id:"events",level:2},{value:"Consensus Parameters",id:"consensus-parameters",level:2}],l={toc:m},u="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"root-hash"},"Root Hash"),(0,n.kt)("p",null,"The roothash service is responsible for runtime commitment processing and\nminimal runtime state keeping."),(0,n.kt)("p",null,"The service interface definition lives in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-core/tree/master/go/roothash/api/api.go"},(0,n.kt)("inlineCode",{parentName:"a"},"go/roothash/api")),". It defines the\nsupported queries and transactions. For more information you can also check out\nthe ",(0,n.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/roothash/api?tab=doc"},"consensus service API documentation"),"."),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"executor-commit"},"Executor Commit"),(0,n.kt)("p",null,"The executor commit method allows an executor node to submit commitments of an\nexecuted computation. A new executor commit transaction can be generated using\n",(0,n.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/roothash/api?tab=doc#NewExecutorCommitTx"},(0,n.kt)("inlineCode",{parentName:"a"},"NewExecutorCommitTx")),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Method name:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"roothash.ExecutorCommit\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Body:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-golang"},'type ExecutorCommit struct {\n    ID      common.Namespace                `json:"id"`\n    Commits []commitment.ExecutorCommitment `json:"commits"`\n}\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Fields:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"id")," specifies the ",(0,n.kt)("a",{parentName:"li",href:"/core/runtime/identifiers"},"runtime identifier")," of a runtime this commit is for."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"commits")," are the ",(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/roothash/api/commitment?tab=doc#ExecutorCommitment"},"executor commitments"),".")),(0,n.kt)("h2",{id:"events"},"Events"),(0,n.kt)("h2",{id:"consensus-parameters"},"Consensus Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"max_runtime_messages")," (uint32) specifies the global limit on the number of\n",(0,n.kt)("a",{parentName:"li",href:"/core/runtime/messages"},"messages")," that can be emitted in each round by the runtime. The default value\nof ",(0,n.kt)("inlineCode",{parentName:"li"},"0")," disables the use of runtime messages.")))}p.isMDXComponent=!0}}]);