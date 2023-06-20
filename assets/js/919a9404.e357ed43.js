"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[1728],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,h=u["".concat(l,".").concat(p)]||u[p]||m[p]||r;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const r={},o="ADR 0005: Runtime Compute Node Slashing",s={unversionedId:"adrs/0005-runtime-compute-slashing",id:"adrs/0005-runtime-compute-slashing",title:"ADR 0005: Runtime Compute Node Slashing",description:"Component",source:"@site/docs/adrs/0005-runtime-compute-slashing.md",sourceDirName:"adrs",slug:"/adrs/0005-runtime-compute-slashing",permalink:"/adrs/0005-runtime-compute-slashing",draft:!1,editUrl:"https://github.com/oasisprotocol/adrs/edit/main/0005-runtime-compute-slashing.md",tags:[],version:"current",lastUpdatedAt:1674490900,formattedLastUpdatedAt:"Jan 23, 2023",frontMatter:{},sidebar:"adrs",previous:{title:"ADR 0004: Runtime Governance",permalink:"/adrs/0004-runtime-governance"},next:{title:"ADR 0006: Consensus Governance",permalink:"/adrs/0006-consensus-governance"}},l={},d=[{value:"Component",id:"component",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Runtime Descriptor",id:"runtime-descriptor",level:3},{value:"Slashing Parameters",id:"slashing-parameters",level:3},{value:"Executor Commitments",id:"executor-commitments",level:3},{value:"Root Hash Commitment Processing",id:"root-hash-commitment-processing",level:3},{value:"State",id:"state",level:3},{value:"Transaction Methods",id:"transaction-methods",level:3},{value:"Evidence",id:"evidence",level:4},{value:"Evidence Expiry",id:"evidence-expiry",level:3},{value:"Evidence Collection",id:"evidence-collection",level:3},{value:"Consensus Parameters",id:"consensus-parameters",level:3},{value:"Roothash",id:"roothash",level:4},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],c={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adr-0005-runtime-compute-node-slashing"},"ADR 0005: Runtime Compute Node Slashing"),(0,a.kt)("h2",{id:"component"},"Component"),(0,a.kt)("p",null,"Oasis Core"),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2020-10-14: Evidence expiry, duplicate evidence detection"),(0,a.kt)("li",{parentName:"ul"},"2020-09-28: Initial draft")),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"Accepted"),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"The runtime compute nodes make updates to the runtime state by submitting\ncommitment messages to the roothash service in the consensus layer where\ndiscrepancy detection and resolution are performed."),(0,a.kt)("p",null,"Currently, the compute nodes are never slashed even if they commit incorrect\nresults. While integrity is guarded by discrepancy detection and resolution,\ncompute nodes should be disincentivized to behave incorrectly."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,"This proposal introduces a slashing mechanism for punishing misbehaving compute\nnodes as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Per-runtime configurable slashing parameters")," are added to the runtime\ndescriptor similar to the global slashing configuration that currently exists\nin the staking service.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"New runtime-specific slashing reasons")," are introduced: (i) submitting\nincorrect compute results and (ii) signing two different executor commits or\nproposed batches for the same round.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Failure-indicating executor commits")," are introduced in order to give the\ncompute nodes a possibility to vote for failure when they cannot execute the\ngiven batch (e.g., due to unavailability of storage or key manager) without\ngetting slashed. Such commits will always trigger a discrepancy during\ndiscrepancy detection and will vote for failing the round in discrepancy\nresolution phase."))),(0,a.kt)("h3",{id:"runtime-descriptor"},"Runtime Descriptor"),(0,a.kt)("p",null,"This proposal updates the runtime staking parameters (stored under the ",(0,a.kt)("inlineCode",{parentName:"p"},"staking"),"\nfield of the runtime descriptor) as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},'type RuntimeStakingParameters struct {\n    // ... existing fields omitted ...\n\n    // Slashing are the per-runtime misbehavior slashing parameters.\n    Slashing map[staking.SlashReason]staking.Slash `json:"slashing,omitempty"`\n\n    // RewardSlashEquvocationRuntimePercent is the percentage of the reward obtained when slashing\n    // for equivocation that is transferred to the runtime\'s account.\n    RewardSlashEquvocationRuntimePercent uint8 `json:"reward_equivocation,omitempty"`\n\n    // RewardSlashBadResultsRuntimePercent is the percentage of the reward obtained when slashing\n    // for incorrect results that is transferred to the runtime\'s account.\n    RewardSlashBadResultsRuntimePercent uint8 `json:"reward_bad_results,omitempty"`\n}\n')),(0,a.kt)("h3",{id:"slashing-parameters"},"Slashing Parameters"),(0,a.kt)("p",null,"The slash reason type in the staking module is changed from ",(0,a.kt)("inlineCode",{parentName:"p"},"int")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"uint8"),"."),(0,a.kt)("p",null,"The slash reason definitions are updated as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"const (\n    // SlashConsensusEquivocation is slashing due to equivocation in the\n    // consensus layer.\n    SlashConsensusEquivocation SlashReason = 0x00\n\n    // SlashRuntimeIncorrectResults is slashing due to submission of incorrect\n    // results in runtime executor commitments.\n    SlashRuntimeIncorrectResults SlashReason = 0x80\n    // SlashRuntimeEquivocation is slashing due to signing two different\n    // executor commits or proposed batches for the same round.\n    SlashRuntimeEquivocation SlashReason = 0x81\n)\n")),(0,a.kt)("h3",{id:"executor-commitments"},"Executor Commitments"),(0,a.kt)("p",null,"The executor commitment body structures are updated to make certain fields\noptional and to introduce the ",(0,a.kt)("inlineCode",{parentName:"p"},"failure")," field as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},'type ExecutorCommitmentFailure uint8\n\nconst (\n    // FailureNone indicates that no failure has occurred.\n    FailureNone ExecutorCommitmentFailure = 0\n    // FailureUnknown indicates a generic failure.\n    FailureUnknown ExecutorCommitmentFailure = 1\n    // FailureStorageUnavailable indicates that batch processing failed due to\n    // storage being unavailable.\n    FailureStorageUnavailable ExecutorCommitmentFailure = 2\n    // FailureKeyManagerUnavailable indicates that batch processing failed due\n    // to key manager being unavailable.\n    FailureKeyManagerUnavailable ExecutorCommitmentFailure = 3\n)\n\ntype ExecutorCommitmentHeader struct {\n    // Required fields.\n\n    Round        uint64    `json:"round"`\n    PreviousHash hash.Hash `json:"previous_hash"`\n\n    // Optional fields (may be absent for failure indication).\n\n    IORoot       *hash.Hash `json:"io_root,omitempty"`\n    StateRoot    *hash.Hash `json:"state_root,omitempty"`\n    MessageHash  *hash.Hash `json:"messages_hash,omitempty"`\n}\n\ntype ExecutorCommitmentBody struct {\n  Header  ExecutorCommitmentHeader  `json:"header"`\n  Failure ExecutorCommitmentFailure `json:"failure,omitempty"`\n\n  TxnSchedSig      signature.Signature   `json:"txn_sched_sig"`\n  InputRoot        hash.Hash             `json:"input_root"`\n  InputStorageSigs []signature.Signature `json:"input_storage_sigs"`\n\n  // Optional fields (may be absent for failure indication).\n\n  StorageSignatures []signature.Signature   `json:"storage_signatures,omitempty"`\n  RakSig            *signature.RawSignature `json:"rak_sig,omitempty"`\n}\n')),(0,a.kt)("p",null,"The notion of an ",(0,a.kt)("em",{parentName:"p"},"failure-indicating")," executor commitment is introduced as being\nan executor commitment with the following field values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"failure")," field must be present and non-zero. The code can indicate a\nreason for the failure but currently the reason is ignored during processing.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"header.round"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"header.previous_hash"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"txn_sched_sig"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"input_root")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"input_storage_sigs")," are set as for usual commitments (e.g., they must be\nvalid).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"All other fields must be omitted or set to nil."))),(0,a.kt)("h3",{id:"root-hash-commitment-processing"},"Root Hash Commitment Processing"),(0,a.kt)("p",null,"The processing of executor commitments by the commitment pool is modified as\nfollows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Adding new commitments (",(0,a.kt)("inlineCode",{parentName:"strong"},"AddExecutorCommitment"),")")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If a commitment for a node already exists the existing commitment is\nchecked for evidence of equivocation. Any evidence of misbehavior is\nprocessed as described in the ",(0,a.kt)("em",{parentName:"li"},"Evidence")," subsection below."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Discrepancy detection (",(0,a.kt)("inlineCode",{parentName:"strong"},"DetectDiscrepancy"),")")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If any executor commitment indicates failure, the discrepancy detection\nprocess signals a discrepancy (which implies that discrepancy resolution is\ntriggered)."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Discrepancy resolution (",(0,a.kt)("inlineCode",{parentName:"strong"},"ResolveDiscrepancy"),")")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When tallying votes, any executor commitments indicating failure are tallied\ninto its own bucket. If the failure bucket receives 1/2+ votes, the round\nfails.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If after discrepancy resolution a non-failure option receives 1/2+ votes,\nthis is considered the correct result. Executor commitments for any other\nresult (excluding failure indication) are considered incorrect and are\nsubject to slashing (based on the configured slashing instructions for the\n",(0,a.kt)("inlineCode",{parentName:"p"},"SlashRuntimeIncorrectResults")," reason)."))))),(0,a.kt)("p",null,"A portion of slashed funds is disbursed equally to the compute nodes which\nparticipated in discrepancy resolution for the round. The remainder of slashed\nfunds is transferred to the runtime account."),(0,a.kt)("p",null,"Any slashing instructions related to freezing nodes are currently ignored."),(0,a.kt)("h3",{id:"state"},"State"),(0,a.kt)("p",null,"This proposal introduces/updates the following consensus state in the roothash\nmodule:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"List of past valid evidence (",(0,a.kt)("inlineCode",{parentName:"strong"},"0x24"),")")),(0,a.kt)("p",{parentName:"li"},"A hash uniquely identifying the evidence is stored for each successfully\nprocessed evidence that has not yet expired using the following key format:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"0x24 <H(runtime-id) (hash.Hash)> <round (uint64)> <evidence-hash (hash.Hash)>\n")),(0,a.kt)("p",{parentName:"li"},"The value is empty as we only need to detect duplicate evidence."))),(0,a.kt)("h3",{id:"transaction-methods"},"Transaction Methods"),(0,a.kt)("p",null,"This proposal updates the following transaction methods in the roothash module:"),(0,a.kt)("h4",{id:"evidence"},"Evidence"),(0,a.kt)("p",null,"The evidence method allows anyone to submit evidence of runtime node\nmisbehavior."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method name:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"roothash.Evidence\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Body:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},'type EvidenceKind uint8\n\nconst (\n    // EvidenceKindEquivocation is the evidence kind for equivocation.\n    EvidenceKindEquivocation = 1\n)\n\ntype Evidence struct {\n    ID   common.Namespace `json:"id"`\n\n    EquivocationExecutor *EquivocationExecutorEvidence `json:"equivocation_executor,omitempty"`\n    EquivocationBatch    *EquivocationBatchEvidence    `json:"equivocation_batch,omitempty"`\n}\n\ntype EquivocationExecutorEvidence struct {\n    CommitA commitment.ExecutorCommitment `json:"commit_a"`\n    CommitB commitment.ExecutorCommitment `json:"commit_b"`\n}\n\ntype EquivocationBatchEvidence struct {\n    BatchA commitment.SignedProposedBatch `json:"batch_a"`\n    BatchB commitment.SignedProposedBatch `json:"batch_b"`\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Fields:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")," specifies the runtime identifier of a runtime this evidence is for."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"equivocation_executor")," (optional) specifies evidence of an executor node\nequivocating when signing commitments."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"equivocation_batch")," (optional) specifies evidence of an executor node\nequivocating when signing proposed batches.")),(0,a.kt)("p",null,"If no evidence is specified (e.g., all evidence fields are ",(0,a.kt)("inlineCode",{parentName:"p"},"nil"),") the method\ncall is invalid and must fail with ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrInvalidArgument"),"."),(0,a.kt)("p",null,"For all kinds of evidence, the following steps are performed to verify evidence\nvalidity:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Current state for the runtime identified by ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," is fetched. If the runtime\ndoes not exist, the evidence is invalid.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If no slashing instructions for ",(0,a.kt)("inlineCode",{parentName:"p"},"SlashRuntimeEquivocation")," are configured for\nthe given runtime, there is no point in collecting evidence so the method call\nmust fail with ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrRuntimeDoesNotSlash"),"."))),(0,a.kt)("p",null,"When processing ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"EquivocationExecutor"))," evidence, the following steps are\nperformed to verify evidence validity:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"header.round")," fields of both commitments are compared. If they are not the\nsame, the evidence is invalid.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Both executor commitments are checked for basic validity. If either is\ninvalid, the evidence is invalid.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"header.previous_hash"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"header.io_root"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"header.state_root")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"header.messages_hash")," fields of both commitments are compared. If they are\nthe same, the evidence is invalid.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The failure indication fields of both commitments are compared. If they are\nthe same, the evidence is invalid.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"header.round")," field is compared with the runtime's current state. If it is\nmore than ",(0,a.kt)("inlineCode",{parentName:"p"},"max_evidence_age")," (consensus parameter) rounds behind, the evidence\nis invalid.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Public keys of signers of both commitments are compared. If they are not the\nsame, the evidence is invalid.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Signatures of both commitments are verified. If either is invalid, the\nevidence is invalid.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Otherwise the evidence is valid."))),(0,a.kt)("p",null,"When processing ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"EquivocationBatch"))," evidence, the following steps are\nperformed to verify evidence validity:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"header.round")," fields of both proposed batches are compared. If they are\nnot the same, the evidence is invalid.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"header")," fields of both proposed batches are checked for basic validity.\nIf any is invalid, the evidence is invalid.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"io_root")," fields of both proposed batches are compared. If they are the\nsame, the evidence is invalid.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Public keys of signers of both commitments are compared. If they are not the\nsame, the evidence is invalid.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Signatures of both proposed batches are validated. If either is invalid, the\nevidence is invalid.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Otherwise the evidence is valid."))),(0,a.kt)("p",null,"For all kinds of valid evidence, the following steps are performed after\nvalidation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The evidence hash is derived by hashing the evidence kind and the public key\nof the signer and the evidence is looked up in the ",(0,a.kt)("em",{parentName:"p"},"list of past valid\nevidence"),". If evidence already exists there, the method fails with\n",(0,a.kt)("inlineCode",{parentName:"p"},"ErrDuplicateEvidence"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The valid evidence hash is stored in the ",(0,a.kt)("em",{parentName:"p"},"list of past valid evidence"),"."))),(0,a.kt)("p",null,"If the evidence is deemed valid by the above procedure, the misbehaving compute\nnode is slashed based on the runtime slashing parameters for the\n",(0,a.kt)("inlineCode",{parentName:"p"},"SlashRuntimeEquivocation")," reason."),(0,a.kt)("p",null,"Any slashing instructions related to freezing nodes are currently ignored."),(0,a.kt)("p",null,"The node submitting the evidence may be rewarded from part of the slashed\namount to incentivize evidence submission. The remainder of slashed funds is\ntransferred to the runtime account."),(0,a.kt)("h3",{id:"evidence-expiry"},"Evidence Expiry"),(0,a.kt)("p",null,"On each epoch transition, for each runtime, expired evidence (as defined by the\n",(0,a.kt)("inlineCode",{parentName:"p"},"max_evidence_age")," and the current runtime's round) must be pruned from the\n",(0,a.kt)("em",{parentName:"p"},"list of past valid evidence"),"."),(0,a.kt)("h3",{id:"evidence-collection"},"Evidence Collection"),(0,a.kt)("p",null,"Nodes collect commitment messages distributed via the P2P gossip network and\ncheck for any signs of misbehavior. In case valid evidence can be constructed,\nit is submitted to the consensus layer. Any evidence parts that have expired\nshould be discarded."),(0,a.kt)("h3",{id:"consensus-parameters"},"Consensus Parameters"),(0,a.kt)("h4",{id:"roothash"},"Roothash"),(0,a.kt)("p",null,"This proposal introduces the following new consensus parameters in the roothash\nmodule:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max_evidence_age")," (uint64) specifies the maximum age of submitted evidence in\nthe number of rounds.")),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("h3",{id:"positive"},"Positive"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Compute nodes can be disincentivized to submit incorrect results by runtimes\nconfiguring slashing parameters.")),(0,a.kt)("h3",{id:"negative"},"Negative"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Checking for duplicate evidence requires additional state in the consensus\nlayer to store the evidence hashes (73 bytes per evidence).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Expiring old evidence requires additional per-runtime state lookups and\nupdates that happen on each epoch transition.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If a runtime exhibits non-determinism, this can result in a compute node being\nslashed. While we specify that runtimes should be deterministic, for non-SGX\nruntimes we have no way determining whether a discrepancy is due to runtime\nnon-determinism or a faulty compute node."))),(0,a.kt)("h3",{id:"neutral"},"Neutral"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This proposal does not introduce any kind of slashing for liveness.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This proposal does not introduce freezing misbehaving nodes."))),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/oasisprotocol/oasis-core/issues/2078"},"oasis-core#2078"))))}m.isMDXComponent=!0}}]);