"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[4540],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(o),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1233:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=o(7462),a=(o(7294),o(3905));const r={},i="RPC",s={unversionedId:"core/oasis-node/rpc",id:"core/oasis-node/rpc",title:"RPC",description:"Oasis Node exposes an RPC interface to enable external applications to query",source:"@site/docs/core/oasis-node/rpc.md",sourceDirName:"core/oasis-node",slug:"/core/oasis-node/rpc",permalink:"/core/oasis-node/rpc",draft:!1,editUrl:"https://github.com/oasisprotocol/oasis-core/edit/stable/22.2.x/docs/oasis-node/rpc.md",tags:[],version:"current",lastUpdatedAt:1686130335,formattedLastUpdatedAt:"Jun 7, 2023",frontMatter:{},sidebar:"oasisCore",previous:{title:"Oasis Node",permalink:"/core/oasis-node"},next:{title:"Metrics",permalink:"/core/oasis-node/metrics"}},c={},l=[{value:"Protocol",id:"protocol",level:2},{value:"Errors",id:"errors",level:2},{value:"Services",id:"services",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rpc"},"RPC"),(0,a.kt)("p",null,"Oasis Node exposes an RPC interface to enable external applications to query\ncurrent ",(0,a.kt)("a",{parentName:"p",href:"/core/consensus/"},"consensus")," and ",(0,a.kt)("a",{parentName:"p",href:"/core/runtime/"},"runtime")," states, ",(0,a.kt)("a",{parentName:"p",href:"/core/consensus/transactions#submission"},"submit transactions"),", etc."),(0,a.kt)("p",null,"The RPC interface is ONLY exposed via an AF_LOCAL socket called ",(0,a.kt)("inlineCode",{parentName:"p"},"internal.sock"),"\nlocated in the node's data directory. ",(0,a.kt)("strong",{parentName:"p"},"This interface should NEVER be directly\nexposed over the network as it has no authentication and allows full control,\nincluding shutdown, of a node.")),(0,a.kt)("p",null,"In order to support remote clients and different protocols (e.g. REST), a\ngateway that handles things like authentication and rate limiting should be\nused."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"An example of such a gateway is the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-core-rosetta-gateway"},"Oasis Core Rosetta Gateway")," which exposes\na subset of the consensus layer via the ",(0,a.kt)("a",{parentName:"p",href:"https://www.rosetta-api.org"},"Rosetta API"),".")),(0,a.kt)("h2",{id:"protocol"},"Protocol"),(0,a.kt)("p",null,"Like other parts of Oasis Core, the RPC interface exposed by Oasis Node uses the\n",(0,a.kt)("a",{parentName:"p",href:"https://grpc.io"},"gRPC protocol")," with the ",(0,a.kt)("a",{parentName:"p",href:"/core/authenticated-grpc#cbor-codec"},"CBOR codec (instead of Protocol Buffers)"),". If your\napplication is written in Go, you can use the convenience gRPC wrappers provided\nby Oasis Core to create clients. Check the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-sdk"},"Oasis SDK")," for more information."),(0,a.kt)("p",null,"For example to create a gRPC client connected to the Oasis Node endpoint exposed\nby your local node at ",(0,a.kt)("inlineCode",{parentName:"p"},"/path/to/datadir/internal.sock")," you can do:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},'import (\n    // ...\n    oasisGrpc "github.com/oasisprotocol/oasis-core/go/common/grpc"\n)\n\n// ...\n\nconn, err := oasisGrpc.Dial("unix:/path/to/datadir/internal.sock")\n')),(0,a.kt)("p",null,"This will automatically handle setting up the required gRPC dial options for\nsetting up the CBOR codec and error mapping interceptors. For more detail about\nthe gRPC helpers see the ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/common/grpc?tab=doc"},"API documentation"),"."),(0,a.kt)("h2",{id:"errors"},"Errors"),(0,a.kt)("p",null,"We use a specific convention to provide more information about the exact error\nthat occurred when processing a gRPC request. See the ",(0,a.kt)("a",{parentName:"p",href:"/core/authenticated-grpc#errors"},"gRPC specifics")," section\nfor details."),(0,a.kt)("h2",{id:"services"},"Services"),(0,a.kt)("p",null,"We use the same service method namespacing convention as gRPC over Protocol\nBuffers. All Oasis Core services have unique identifiers starting with\n",(0,a.kt)("inlineCode",{parentName:"p"},"oasis-core.")," followed by the service identifier. A single slash (",(0,a.kt)("inlineCode",{parentName:"p"},"/"),") is used\nas the separator in method names, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"/oasis-core.NodeControl/IsSynced"),"."),(0,a.kt)("p",null,"The following gRPC services are exposed (with links to API documentation):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"General"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/control/api?tab=doc#NodeController"},"Node Control")," (",(0,a.kt)("inlineCode",{parentName:"li"},"oasis-core.NodeController"),")"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Consensus Layer"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/consensus/api?tab=doc#ClientBackend"},"Consensus (client subset)")," (",(0,a.kt)("inlineCode",{parentName:"li"},"oasis-core.Consensus"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/consensus/api?tab=doc#LightClientBackend"},"Consensus (light client subset)")," (",(0,a.kt)("inlineCode",{parentName:"li"},"oasis-core.ConsensusLight"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/staking/api?tab=doc#Backend"},"Staking")," (",(0,a.kt)("inlineCode",{parentName:"li"},"oasis-core.Staking"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/registry/api?tab=doc#Backend"},"Registry")," (",(0,a.kt)("inlineCode",{parentName:"li"},"oasis-core.Registry"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/scheduler/api?tab=doc#Backend"},"Scheduler")," (",(0,a.kt)("inlineCode",{parentName:"li"},"oasis-core.Scheduler"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/roothash/api?tab=doc#Backend"},"RootHash")," (",(0,a.kt)("inlineCode",{parentName:"li"},"oasis-core.RootHash"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/governance/api?tab=doc#Backend"},"Governance")," (",(0,a.kt)("inlineCode",{parentName:"li"},"oasis-core.Governance"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/beacon/api?tab=doc#Backend"},"Beacon")," (",(0,a.kt)("inlineCode",{parentName:"li"},"oasis-core.Beacon"),")"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Runtime Layer"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/storage/api?tab=doc#Backend"},"Storage")," (",(0,a.kt)("inlineCode",{parentName:"li"},"oasis-core.Storage"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/runtime/client/api?tab=doc#RuntimeClient"},"Runtime Client")," (",(0,a.kt)("inlineCode",{parentName:"li"},"oasis-core.RuntimeClient"),")")))),(0,a.kt)("p",null,"For more details about what the exposed services do see the respective\ndocumentation sections. The Go API also provides gRPC client implementations for\nall of the services which can be used after establishing a gRPC connection via\nthe internal socket (multiple clients can share the same gRPC connection). For\nexample in case of the consensus service using the connection we established in\nthe previous example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},'import (\n    // ...\n    consensus "github.com/oasisprotocol/oasis-core/go/consensus/api"\n)\n\n// ...\n\ncc := consensus.NewConsensusClient(conn)\nerr := cc.SubmitTx(ctx, &tx)\n')))}u.isMDXComponent=!0}}]);