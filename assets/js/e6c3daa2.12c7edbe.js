"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[3051],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),g=o,m=p["".concat(i,".").concat(g)]||p[g]||u[g]||r;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={},s="Self-Custody With Ledger Hardware Wallet",l={unversionedId:"general/manage-tokens/holding-rose-tokens/ledger-wallet",id:"general/manage-tokens/holding-rose-tokens/ledger-wallet",title:"Self-Custody With Ledger Hardware Wallet",description:"This is a general documentation that will help users setup [Ledger] hadware",source:"@site/docs/general/manage-tokens/holding-rose-tokens/ledger-wallet.md",sourceDirName:"general/manage-tokens/holding-rose-tokens",slug:"/general/manage-tokens/holding-rose-tokens/ledger-wallet",permalink:"/general/manage-tokens/holding-rose-tokens/ledger-wallet",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/general/manage-tokens/holding-rose-tokens/ledger-wallet.md",tags:[],version:"current",lastUpdatedAt:1687256264,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{},sidebar:"general",previous:{title:"Bitpie Mobile Wallet",permalink:"/general/manage-tokens/holding-rose-tokens/bitpie-wallet"},next:{title:"How to Transfer ROSE into a ParaTime",permalink:"/general/manage-tokens/how-to-transfer-rose-into-paratime"}},i={},c=[{value:"Setup your Ledger device and Install Oasis App",id:"setup-your-ledger-device-and-install-oasis-app",level:2},{value:"Manage Your Tokens",id:"manage-your-tokens",level:2},{value:"Using Oasis Wallets",id:"using-oasis-wallets",level:3},{value:"Receive ROSE",id:"receive-rose",level:4},{value:"Send ROSE",id:"send-rose",level:4},{value:"Using Oasis CLI Tools",id:"using-oasis-cli-tools",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"self-custody-with-ledger-hardware-wallet"},"Self-Custody With Ledger Hardware Wallet"),(0,o.kt)("p",null,"This is a general documentation that will help users setup ",(0,o.kt)("a",{parentName:"p",href:"https://www.ledger.com"},"Ledger")," hadware\nwallets with Oasis Network. Ledger Live software doesn't support Oasis (ROSE)\ntokens natively yet. In this guide we will install Oasis app via Ledger Live to\nopen and access wallet with one or multiple accounts via our official\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ledger.com"},"Oasis Wallet - Web"),"."),(0,o.kt)("h2",{id:"setup-your-ledger-device-and-install-oasis-app"},"Setup your Ledger device and Install Oasis App"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To use your ",(0,o.kt)("a",{parentName:"li",href:"https://www.ledger.com"},"Ledger")," wallet to hold your ROSE tokens, you will have to\ninstall ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Zondax/ledger-oasis"},"Oasis app")," on your Ledger wallet via ",(0,o.kt)("a",{parentName:"li",href:"https://www.ledger.com/ledger-live/"},"Ledger Live"),"'s Manager. You need\nto connect your Ledger to your device and unlock it with your PIN code first.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Unlock ledger",src:a(7745).Z,width:"2302",height:"1738"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The Oasis app requires an up-to-date firmware on your Ledger wallet:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"At least ",(0,o.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360014980580-Ledger-Nano-X-firmware-release-notes"},"version 2.0.0")," released on Oct 21, 2021 on a Nano X device."),(0,o.kt)("li",{parentName:"ul"},"At least ",(0,o.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360010446000-Ledger-Nano-S-firmware-release-notes"},"version 2.1.0")," released on Nov 30, 2021 on a Nano S device."),(0,o.kt)("li",{parentName:"ul"},"At least ",(0,o.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/4494540771997-Ledger-Nano-S-Plus-Firmware-Release-Notes"},"version 1.0.4")," released on Sep 27, 2022 on a Nano S Plus device.")),(0,o.kt)("p",{parentName:"admonition"},"Follow Ledger's instructions for updating the firmware on your Ledger wallet:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360013349800"},"Nano X")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360002731113-Update-Ledger-Nano-S-firmware"},"Nano S")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/4445777839901-Update-Ledger-Nano-S-Plus-firmware"},"Nano S Plus")))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"To find the Oasis app in the Ledger Live App catalog, you need to Allow\nLedger Manager on your Ledger device first, then you will be able to click App\ncatalog and search for ",(0,o.kt)("em",{parentName:"li"},"Oasis"),":")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Allow Ledger Manager",src:a(3351).Z,width:"2296",height:"1740"}),"\n",(0,o.kt)("img",{alt:"Search app in catalog..",src:a(4808).Z,width:"2298",height:"1744"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("em",{parentName:"li"},"Oasis")," app")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Install Oasis app",src:a(8114).Z,width:"2296",height:"1744"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"After the installation is completed, take your Ledger device, navigate to ",(0,o.kt)("em",{parentName:"li"},"Oasis"),"\napp and use both buttons to open the app. Your Ledger device is ready\nwhen you will see ",(0,o.kt)("em",{parentName:"li"},'"Oasis Ready"')," message.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Oasis Ready",src:a(3493).Z,width:"640",height:"480"})),(0,o.kt)("p",null,"The Oasis app will use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"},"BIP 39")," mnemonic seed stored secretly on your\nLedger hardware wallet to generate the private & public key pairs for your\nOasis accounts. Make sure you backed up the mnemonic when you first initialized\nyour Ledger device!"),(0,o.kt)("h2",{id:"manage-your-tokens"},"Manage Your Tokens"),(0,o.kt)("h3",{id:"using-oasis-wallets"},"Using Oasis Wallets"),(0,o.kt)("p",null,"This is a simpler option since it allows you to connect to your Ledger wallet\nvia a web application or a browser extension."),(0,o.kt)("p",null,"In the example below we will use Oasis Wallet - Web. To learn more about other\nfeatures of the Oasis Wallets, please read the ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/oasis-wallets/"},"Oasis Wallets")," doc."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("a",{parentName:"li",href:"https://wallet.oasis.io"},"wallet.oasis.io")," and click on the ",(0,o.kt)("em",{parentName:"li"},"Open wallet")," button.\nThen, click on ",(0,o.kt)("em",{parentName:"li"},"Ledger")," when asked how to open your wallet.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Oasis Wallet - Web -&gt; Open wallet -&gt; Ledger",src:a(7761).Z,width:"3024",height:"1676"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"In the next step, click on the ",(0,o.kt)("em",{parentName:"li"},"Select accounts to open")," button. Your\nbrowser will open a pop-up window where you will have to select your Ledger\ndevice. Finally, click on ",(0,o.kt)("em",{parentName:"li"},"Connect"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Oasis Wallet - Web -&gt; Select Ledger device and Connect",src:a(5349).Z,width:"3024",height:"1740"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This step requires that your Ledger shows the ",(0,o.kt)("em",{parentName:"p"},"Oasis Ready")," message. After a\nwhile your device may lock for safety reasons and you will need to unlock it to\nperform this and subsequent steps.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"After connecting your Ledger to Oasis Wallet - Web another pop-up will appear\nwhere you can choose to open one or more ",(0,o.kt)("inlineCode",{parentName:"li"},"oasis1")," accounts derived from the seed\nstored on your Ledger.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Oasis Wallet - Web -&gt; Select one or more accounts",src:a(4223).Z,width:"3024",height:"1742"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"The account from your Ledger device is now opened. If you import multiple\naccounts, you can switch between them by clicking on the account address in\nthe top-right corner.\nOur demo account is empty.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Oasis Wallet - Web -&gt; Selected accounts are opened",src:a(8555).Z,width:"3024",height:"1890"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Now you can use your Ledger to receive, send or delegate ROSE.\nIn this example, we have received 111 ROSE to our Ledger account.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Oasis Wallet - Web -&gt; Exploring transactions",src:a(5023).Z,width:"3024",height:"1892"})),(0,o.kt)("h4",{id:"receive-rose"},"Receive ROSE"),(0,o.kt)("p",null,"Once you have successfully opened your Oasis account from Ledger,\nyou can start receiving ROSE by sharing your account address."),(0,o.kt)("p",null,"You can simply copy your opened account address or scan QR code."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Oasis Wallet - Web -&gt; Ledger -&gt; Receive ROSE Account address",src:a(8021).Z,width:"3024",height:"1732"})),(0,o.kt)("h4",{id:"send-rose"},"Send ROSE"),(0,o.kt)("p",null,"To send your ROSE from your Oasis Ledger account to another Oasis consensus\naddress, you have to follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enter destination consensus address into Recipient field, Enter amount\nof ROSE you want to send and Click on Send button.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Oasis Wallet - Web -&gt; Ledger -&gt; Send ROSE",src:a(8428).Z,width:"3024",height:"1732"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Then a pop-up window will appear where you need to Confirm transaction.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Oasis Wallet - Web -&gt; Ledger -&gt; Confirm TX",src:a(1473).Z,width:"3024",height:"1732"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"On your Ledger device carefully review transaction details and make sure they\nmatch the ones on your computer. Navigate to the screen where you will see the\nAPPROVE button. Use the two buttons to approve your transaction.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Oasis Wallet - Web -&gt; Ledger -&gt; Approve TX",src:a(7587).Z,width:"1280",height:"960"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"You can verify if ROSE were successfully sent by checking latest transactions\nor opening the receiving account.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Oasis Wallet - Web -&gt; Ledger -&gt; Verify Balance",src:a(9491).Z,width:"3024",height:"1734"})),(0,o.kt)("h3",{id:"using-oasis-cli-tools"},"Using Oasis CLI Tools"),(0,o.kt)("p",null,"This is a more powerful option that allows performing not just token-related\ntasks (sending, staking, ParaTime deposits and withdrawals), but also generating\nand/or signing raw transactions, multi-signatures, network governance\noperations etc."),(0,o.kt)("p",null,"Ledger is supported by the Oasis CLI. Follow the instructions in the\n",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/"},"Oasis CLI Tools")," page to learn more."))}u.isMDXComponent=!0},3493:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ledger_oasis_ready-c62f41645274a3f3f88e16f932cdbb35.jpg"},3351:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/live_allow_ledger_manager-30797e705e2068c9c7ee2b6eed02c6a9.png"},4808:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/live_search_apps-d344482547f64a390b308f2e1272af31.png"},8114:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/live_search_results_oasis_install-b346253511375cf2643b524e3c0291ab.png"},7745:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/live_unlock_ledger-502e6c5d1ae4698f027cae7e166c59cd.png"},8021:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wallet_web_account_address-0dd7d76aebb5f4ed5c078086328ccd9e.png"},7761:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wallet_web_open_ledger-e51cb72a003a6182977c88ab17640e10.png"},8555:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wallet_web_open_ledger_account-ed82b4ff6218c9048f1de817c86c59f5.png"},5023:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wallet_web_received_rose_on_ledger_account-c4c156f34823a0295cb15ed58ba96c80.png"},4223:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wallet_web_select_accounts_to_open-969db3be1effeaa820032d37798cb59a.png"},5349:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wallet_web_select_ledger_device_connect-80a3396eca59a50b4df51f7b002604dd.png"},1473:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wallet_web_send_confirm_tx-22c8e7574fb5cbc9edbfdfffae1c57de.png"},7587:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wallet_web_send_confirm_tx_ledger-107bae9057a413cc91850ab7cceb910e.jpg"},8428:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wallet_web_send_rose-be33ca81a26cbf7d896fa5fd60a883f8.png"},9491:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wallet_web_send_verify_balance-49fdd9aa7169c2a34eb84bfdeee1e337.png"}}]);