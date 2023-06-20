"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[1862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={},o="ADR 0017: ParaTime Application Standard Proposal Process",s={unversionedId:"adrs/0017-app-standards",id:"adrs/0017-app-standards",title:"ADR 0017: ParaTime Application Standard Proposal Process",description:"Component",source:"@site/docs/adrs/0017-app-standards.md",sourceDirName:"adrs",slug:"/adrs/0017-app-standards",permalink:"/adrs/0017-app-standards",draft:!1,editUrl:"https://github.com/oasisprotocol/adrs/edit/main/0017-app-standards.md",tags:[],version:"current",lastUpdatedAt:1674490900,formattedLastUpdatedAt:"Jan 23, 2023",frontMatter:{},sidebar:"adrs",previous:{title:"ADR 0016: Consensus Parameters Change Proposal",permalink:"/adrs/0016-consensus-parameters-change-proposal"},next:{title:"ADR 0020: Governance Support for Delegator Votes",permalink:"/adrs/0020-governance-delegator-votes"}},l={},c=[{value:"Component",id:"component",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Naming Conventions",id:"naming-conventions",level:3},{value:"Changes to the ADR template",id:"changes-to-the-adr-template",level:3},{value:"New Section Requirements",id:"new-section-requirements",level:3},{value:"Decision: Specification &amp; Reference Implementation",id:"decision-specification--reference-implementation",level:4},{value:"Security Considerations",id:"security-considerations",level:4},{value:"Acceptance Requirements",id:"acceptance-requirements",level:3},{value:"Alternatives",id:"alternatives",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adr-0017-paratime-application-standard-proposal-process"},"ADR 0017: ParaTime Application Standard Proposal Process"),(0,i.kt)("h2",{id:"component"},"Component"),(0,i.kt)("p",null,"ADRs"),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2022-10-05: Initial version"),(0,i.kt)("li",{parentName:"ul"},"2022-10-12: Accepted")),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Accepted"),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"Applications running within a ParaTime having a novel runtime environment\n(e.g., Sapphire, Cipher) benefit from interoperability standards. For example,\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs"},"ERCs")," in Ethereum. ADRs are already present in the Oasis ecosystem and so are a\nstarting point, but these are intended for lightweight recording of decisions,\nnot gathering consensus around community contributions. This ADR proposes a\ntemplate and process amendment for ADRs introducing ParaTime-specific\napplication standards."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"ADRs will be used for application standards because they are already well\nsupported within the Oasis ecosystem, and have most of the structure needed\nfor application standards. Although adapting another project's process would be\neasy, having multiple proposal repositories could lead to confusion."),(0,i.kt)("p",null,"For use with application standards, ADRs shall have more structure to make\ncontributions fair and straightforward. Specifically, additional required\nsections and concrete requirements for acceptance."),(0,i.kt)("p",null,"Although community standards are only proposals, the ",(0,i.kt)("em",{parentName:"p"},"Decision")," section will\nkeep its name for compatibility with the existing template. The decision in this\ncontext will be to accept the standard for distribution to a wider audience."),(0,i.kt)("h3",{id:"naming-conventions"},"Naming Conventions"),(0,i.kt)("p",null,"App standard ADRs shall be referred to as ADR-","<","number",">"," regardless of the\ntargeted ParaTime."),(0,i.kt)("h3",{id:"changes-to-the-adr-template"},"Changes to the ADR template"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add a new ",(0,i.kt)("em",{parentName:"li"},"Apps")," component, which has the ParaTime as its sub-component")),(0,i.kt)("h3",{id:"new-section-requirements"},"New Section Requirements"),(0,i.kt)("h4",{id:"decision-specification--reference-implementation"},"Decision: Specification & Reference Implementation"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Decision")," section gets two new sub-sections:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Specification"),": A complete description of the interface of the standard,\nincluding the threat/trust model, rationale for design decisions, alternative\napproaches, and references to related work. This section will generally be\nmostly prose with sprinkles of code for illustration."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reference Implementation"),": A basic implementation of the proposed standard\nwritten in a common language that targets the ParaTime runtime environment.\nThe reference implementation in the ADR should be executable."),(0,i.kt)("h4",{id:"security-considerations"},"Security Considerations"),(0,i.kt)("p",null,"This new section details any weak points of the proposal or common security\nflaws that a re-implementation of the specification may run into, as well as\nsuggestions for avoiding security issues."),(0,i.kt)("h3",{id:"acceptance-requirements"},"Acceptance Requirements"),(0,i.kt)("p",null,"Like all ADRs, an Apps component ADR will start as ",(0,i.kt)("em",{parentName:"p"},"Proposed")," and end up merged\nonce ",(0,i.kt)("em",{parentName:"p"},"Accepted"),". An application standard ADR following the above format will be\naccepted once:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"there is consensus within the ParaTime's own community that the standard meets\nits design goals"),(0,i.kt)("li",{parentName:"ul"},"there are no outstanding compatibility or security issues"),(0,i.kt)("li",{parentName:"ul"},"an ADR repo committer has signed off on the structure and format of the ADR")),(0,i.kt)("h2",{id:"alternatives"},"Alternatives"),(0,i.kt)("p",null,"One alternative is to fit the ParaTime-specific application standard proposals\ninto the existing ADR template, but this would cause the ",(0,i.kt)("em",{parentName:"p"},"Decision")," section to\nbecome overloaded with the necessary information in an ad-hoc way."),(0,i.kt)("p",null,"Another alternative is to encourage ParaTimes to do whatever they think most\neffective. That's always allowed, of course, and it may sometimes be useful to\nwholesale copy the best practices of another community. However, if we make the\nADR process convenient enough, the community can focus its collective effort on\nthe single ADR repo."),(0,i.kt)("p",null,"Within the chosen decision, there were many choices of structure from the now\nseveral EIP-like repos. The ones chosen were the minimum we need to get going,\nin the spirit of the lightweight ADR process. If more structure is needed in\nthe future, we can amend this process or switch to a new system entirely, at\nwhich point this ADR shall be marked as ",(0,i.kt)("em",{parentName:"p"},"Superseded"),"."),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("h3",{id:"positive"},"Positive"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The community has a rallying point for standard development."),(0,i.kt)("li",{parentName:"ul"},"We can reuse existing process.")),(0,i.kt)("h3",{id:"negative"},"Negative"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The app standard process might still not be ideal even after this proposal."),(0,i.kt)("li",{parentName:"ul"},"ADR-NNN naming convention is not forwards compatible.")),(0,i.kt)("h3",{id:"neutral"},"Neutral"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We will need to maintain additional ADR process going forward.")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ethereum/EIPs"},"Ethereum Improvement Proposals")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.rfc-editor.org/pubprocess/"},"RFCs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc/blob/main/spec/ics-template.md"},"Inter-Chain Standards"))))}u.isMDXComponent=!0}}]);