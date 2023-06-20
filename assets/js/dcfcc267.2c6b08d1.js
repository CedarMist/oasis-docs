"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[3821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,f=c["".concat(a,".").concat(m)]||c[m]||d[m]||s;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const s={},l="Running Tests",i={unversionedId:"core/development-setup/running-tests",id:"core/development-setup/running-tests",title:"Running Tests",description:"Before proceeding, make sure to look at the [prerequisites] required for running",source:"@site/docs/core/development-setup/running-tests.md",sourceDirName:"core/development-setup",slug:"/core/development-setup/running-tests",permalink:"/core/development-setup/running-tests",draft:!1,editUrl:"https://github.com/oasisprotocol/oasis-core/edit/stable/22.2.x/docs/development-setup/running-tests.md",tags:[],version:"current",lastUpdatedAt:1686130335,formattedLastUpdatedAt:"Jun 7, 2023",frontMatter:{},sidebar:"oasisCore",previous:{title:"Running Tests and Development Networks",permalink:"/core/development-setup/running-tests-and-development-networks"},next:{title:"Local Network Runner",permalink:"/core/development-setup/oasis-net-runner"}},a={},u=[{value:"Tests",id:"tests",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-tests"},"Running Tests"),(0,o.kt)("p",null,"Before proceeding, make sure to look at the ",(0,o.kt)("a",{parentName:"p",href:"/core/development-setup/prerequisites"},"prerequisites")," required for running\nan Oasis Core environment followed by ",(0,o.kt)("a",{parentName:"p",href:"/core/development-setup/building"},"build instructions")," for the respective\nenvironment (non-SGX or SGX). The following sections assume that you have\nsuccessfully completed the required build steps."),(0,o.kt)("h2",{id:"tests"},"Tests"),(0,o.kt)("p",null,"After you've built everything, you can use the following commands to run tests."),(0,o.kt)("p",null,"To run all unit tests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"make test-unit\n")),(0,o.kt)("p",null,"To run end-to-end tests locally:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"make test-e2e\n")),(0,o.kt)("p",null,"To run all tests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"make test\n")),(0,o.kt)("p",null,"To execute tests using SGX set the following environmental variable before\nrunning the tests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export OASIS_TEE_HARDWARE=intel-sgx\n")),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"Check the console output for mentions of a path of the form\n",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp/oasis-test-runnerXXXXXXXXX")," (where each ",(0,o.kt)("inlineCode",{parentName:"p"},"X")," is a digit).\nThat's the log directory. Start with coarsest-level debug output in\n",(0,o.kt)("inlineCode",{parentName:"p"},"console.log")," files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cat $(find /tmp/oasis-test-runnerXXXXXXXXX -name console.log) | less\n")),(0,o.kt)("p",null,"For even more output, check the other ",(0,o.kt)("inlineCode",{parentName:"p"},"*.log")," files."))}d.isMDXComponent=!0}}]);