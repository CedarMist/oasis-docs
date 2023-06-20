"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[3154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||r;return n?o.createElement(m,s(s({ref:t},p),{},{components:n})):o.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={},s="Terminology",i={unversionedId:"general/manage-tokens/terminology",id:"general/manage-tokens/terminology",title:"Terminology",description:"Account",source:"@site/docs/general/manage-tokens/terminology.md",sourceDirName:"general/manage-tokens",slug:"/general/manage-tokens/terminology",permalink:"/general/manage-tokens/terminology",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/general/manage-tokens/terminology.md",tags:[],version:"current",lastUpdatedAt:1687256264,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{},sidebar:"general",previous:{title:"Overview",permalink:"/general/manage-tokens/"},next:{title:"Staking and Delegating",permalink:"/general/manage-tokens/staking-and-delegating"}},l={},c=[{value:"Account",id:"account",level:2},{value:"Address",id:"address",level:2},{value:"Delegation",id:"delegation",level:2},{value:"Staking",id:"staking",level:2},{value:"Rewards",id:"rewards",level:2},{value:"Commission",id:"commission",level:2},{value:"Slashing",id:"slashing",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"terminology"},"Terminology"),(0,a.kt)("h2",{id:"account"},"Account"),(0,a.kt)("p",null,"A staking ",(0,a.kt)("strong",{parentName:"p"},"account")," is an entry in the staking ledger."),(0,a.kt)("p",null,"It has two (sub)accounts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"General account")),(0,a.kt)("p",{parentName:"li"},"It is used to keep the funds that are freely available to the account owner\nto transfer, delegate/stake, pay gas fees, etc.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Escrow account")),(0,a.kt)("p",{parentName:"li"},"It is used to keep the funds needed for specific consensus-layer operations\n(e.g. registering and running nodes, staking and delegation of tokens, ...)."),(0,a.kt)("p",{parentName:"li"},"To simplify accounting, each escrow results in the source account being\nissued shares which can be converted back into staking tokens during the\nreclaim escrow operation. Reclaiming escrow does not complete immediately,\nbut may be subject to a debonding period during which the tokens still remain\nescrowed."))),(0,a.kt)("h2",{id:"address"},"Address"),(0,a.kt)("p",null,"A staking account ",(0,a.kt)("strong",{parentName:"p"},"address")," is represented by a truncated hash of a\ncorresponding entity's public key, prefixed by a 1 byte address version."),(0,a.kt)("p",null,"It uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki#bech32"},"Bech32 encoding")," for text serialization with ",(0,a.kt)("inlineCode",{parentName:"p"},"oasis")," as its human\nreadable part (HRP) prefix."),(0,a.kt)("h2",{id:"delegation"},"Delegation"),(0,a.kt)("p",null,"You can ",(0,a.kt)("strong",{parentName:"p"},"delegate")," your tokens by submitting an ",(0,a.kt)("strong",{parentName:"p"},"escrow")," transaction that\ndeposits a specific number of tokens into someone else\u2019s escrow account (as\nopposed to ",(0,a.kt)("strong",{parentName:"p"},"staking")," tokens, which usually refers to depositing tokens into\nyour own escrow account)."),(0,a.kt)("p",null,"In other words, delegating your tokens is equivalent to staking your tokens in\nsomeone else's validator node. Delegating your tokens can give you the\nopportunity to participate in the Oasis Network's proof-of-stake consensus\nsystem and earn rewards via someone else's validator node."),(0,a.kt)("h2",{id:"staking"},"Staking"),(0,a.kt)("p",null,"You can stake your tokens by submitting an ",(0,a.kt)("strong",{parentName:"p"},"escrow")," transaction that deposits\na specific number of tokens into your escrow account."),(0,a.kt)("h2",{id:"rewards"},"Rewards"),(0,a.kt)("p",null,"By delegating your tokens to someone else's node, you can earn a portion of the\nrewards earned by that node through its participation in the Oasis Network."),(0,a.kt)("h2",{id:"commission"},"Commission"),(0,a.kt)("p",null,"Node operators collect ",(0,a.kt)("strong",{parentName:"p"},"commissions")," when their node earns a\n",(0,a.kt)("strong",{parentName:"p"},"staking reward")," for delegators. A validator node earns a staking reward for\nparticipating in the consensus protocol each epoch. The ",(0,a.kt)("strong",{parentName:"p"},"commission rate")," is\na fraction of the staking reward."),(0,a.kt)("p",null,"For example, if our validator node earns a reward of 0.007 tokens, 0.0035\ntokens are added to the escrow pool (increasing the value of our escrow pool\nshares uniformly), and 0.0035 tokens are given to us (issuing us new shares as\nif we manually deposited them)."),(0,a.kt)("h2",{id:"slashing"},"Slashing"),(0,a.kt)("p",null,"Your delegated tokens can be slashed if the node that you delegated your tokens\nto gets slashed for double signing."))}u.isMDXComponent=!0}}]);