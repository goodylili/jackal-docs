import{u as r,j as s}from"./index-J8clnReJ.js";const a={title:"Sequoia Configuration Documentation",description:"undefined"};function e(i){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...r(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsx(n.header,{children:s.jsxs(n.h1,{id:"sequoia-configuration-documentation",children:["Sequoia Configuration Documentation",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sequoia-configuration-documentation",children:s.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(n.h2,{id:"overview",children:["Overview",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:s.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(n.p,{children:"This document provides detailed information about configuring a Sequoia node. The configuration is specified in YAML format and includes settings for network connectivity, storage management, chain interaction, and API endpoints."}),`
`,s.jsxs(n.h2,{id:"configuration-structure",children:["Configuration Structure",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#configuration-structure",children:s.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(n.h3,{id:"example-configuration",children:["Example Configuration",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-configuration",children:s.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"######################"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"### Sequoia Config ###"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"######################"})}),`
`,s.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"queue_interval"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"10"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"proof_interval"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"120"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"stray_manager"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:":"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    check_interval"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"30"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    refresh_interval"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"120"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    hands"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"2"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"chain_config"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:":"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    bech32_prefix"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"jkl"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    rpc_addr"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"http://localhost:26657"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    grpc_addr"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"127.0.0.1:9090"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    gas_price"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"0.02ujkl"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    gas_adjustment"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1.5"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"domain"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"https://example.com"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"total_bytes_offered"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1092616192"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"data_directory"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"$HOME/.sequoia/data"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"api_config"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:":"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    port"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"3333"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    ipfs_port"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"4005"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    ipfs_domain"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"dns4/ipfs.example.com/tcp/4001"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"proof_threads"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1000"})]})]})}),`
`,s.jsxs(n.h2,{id:"configuration-parameters",children:["Configuration Parameters",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#configuration-parameters",children:s.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(n.h3,{id:"core-settings",children:["Core Settings",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#core-settings",children:s.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(n.h4,{id:"basic-configuration",children:["Basic Configuration",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#basic-configuration",children:s.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"queue_interval"})," (integer)"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"Time in seconds between queue flushes"}),`
`,s.jsx(n.li,{children:"Should not be less than a single block duration"}),`
`,s.jsxs(n.li,{children:["Default: ",s.jsx(n.code,{children:"10"})]}),`
`]}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"proof_interval"})," (integer)"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"Time in seconds between provider self-scans for posting proofs"}),`
`,s.jsxs(n.li,{children:["Default: ",s.jsx(n.code,{children:"120"})]}),`
`]}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"domain"})," (string)"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"Domain name for user access to the provider"}),`
`,s.jsxs(n.li,{children:["Example: ",s.jsx(n.code,{children:"https://example.com"})]}),`
`]}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"total_bytes_offered"})," (integer)"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"Total storage capacity offered in bytes"}),`
`,s.jsxs(n.li,{children:["Example: ",s.jsx(n.code,{children:"1092616192"})]}),`
`]}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"data_directory"})," (string)"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"Location for storing raw file data and tree caching"}),`
`,s.jsxs(n.li,{children:["Example: ",s.jsx(n.code,{children:"$HOME/.sequoia/data"})]}),`
`]}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"proof_threads"})," (integer)"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"Number of files that can be proven in parallel"}),`
`,s.jsx(n.li,{children:"Recommendation: Lower this value on machines with limited resources"}),`
`,s.jsxs(n.li,{children:["Default: ",s.jsx(n.code,{children:"1000"})]}),`
`]}),`
`]}),`
`]}),`
`,s.jsxs(n.h3,{id:"stray-manager-configuration",children:["Stray Manager Configuration",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#stray-manager-configuration",children:s.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(n.p,{children:["The ",s.jsx(n.code,{children:"stray_manager"})," section controls how the node handles unclaimed files and related operations."]}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"stray_manager"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:":"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    check_interval"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"30"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    refresh_interval"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"120"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    hands"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"2"})]})]})}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"check_interval"})," (integer)"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"Time in seconds between checks for newly claimable files on chain"}),`
`,s.jsxs(n.li,{children:["Default: ",s.jsx(n.code,{children:"30"})]}),`
`]}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"refresh_interval"})," (integer)"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"Time in seconds between internal stray list cache refreshes"}),`
`,s.jsxs(n.li,{children:["Default: ",s.jsx(n.code,{children:"120"})]}),`
`]}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"hands"})," (integer)"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"Number of concurrent workers searching for and claiming strays"}),`
`,s.jsxs(n.li,{children:["Default: ",s.jsx(n.code,{children:"2"})]}),`
`]}),`
`]}),`
`]}),`
`,s.jsxs(n.h3,{id:"chain-configuration",children:["Chain Configuration",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#chain-configuration",children:s.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(n.p,{children:["The ",s.jsx(n.code,{children:"chain_config"})," section defines parameters for interacting with the blockchain."]}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"chain_config"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:":"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    bech32_prefix"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"jkl"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    rpc_addr"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"http://localhost:26657"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    grpc_addr"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"127.0.0.1:9090"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    gas_price"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"0.02ujkl"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    gas_adjustment"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1.5"})]})]})}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"bech32_prefix"})," (string)"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"Bech32 address prefix"}),`
`,s.jsx(n.li,{children:"Only modified when working with Jackal forks"}),`
`,s.jsxs(n.li,{children:["Default: ",s.jsx(n.code,{children:"jkl"})]}),`
`]}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"rpc_addr"})," (string)"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"RPC node address for transaction submission and queries"}),`
`,s.jsxs(n.li,{children:["Default: ",s.jsx(n.code,{children:"http://localhost:26657"})]}),`
`]}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"grpc_addr"})," (string)"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"GRPC node address for transaction submission and queries"}),`
`,s.jsxs(n.li,{children:["Default: ",s.jsx(n.code,{children:"127.0.0.1:9090"})]}),`
`]}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"gas_price"})," (string)"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"Network gas cost"}),`
`,s.jsxs(n.li,{children:["Format: ",s.jsx(n.code,{children:"{amount}{denom}"})]}),`
`,s.jsxs(n.li,{children:["Default: ",s.jsx(n.code,{children:"0.02ujkl"})]}),`
`]}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"gas_adjustment"})," (float)"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"Gas multiplier for transaction fee calculation"}),`
`,s.jsx(n.li,{children:"Increase only if transactions frequently fail due to insufficient gas"}),`
`,s.jsxs(n.li,{children:["Default: ",s.jsx(n.code,{children:"1.5"})]}),`
`]}),`
`]}),`
`]}),`
`,s.jsxs(n.h3,{id:"api-configuration",children:["API Configuration",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#api-configuration",children:s.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(n.p,{children:["The ",s.jsx(n.code,{children:"api_config"})," section controls the node's API and IPFS connectivity settings."]}),`
`,s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"api_config"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:":"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    port"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"3333"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    ipfs_port"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"4005"})]}),`
`,s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"    ipfs_domain"}),s.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"dns4/ipfs.example.com/tcp/4001"})]})]})}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"port"})," (integer)"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"Port number for provider API access"}),`
`,s.jsxs(n.li,{children:["Default: ",s.jsx(n.code,{children:"3333"})]}),`
`]}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"ipfs_port"})," (integer)"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"Port number for IPFS peer connections"}),`
`,s.jsxs(n.li,{children:["Default: ",s.jsx(n.code,{children:"4005"})]}),`
`]}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"ipfs_domain"})," (string)"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"Optional domain specification for IPFS connectivity"}),`
`,s.jsx(n.li,{children:"Alternative to using raw port"}),`
`,s.jsxs(n.li,{children:["Format: ",s.jsx(n.code,{children:"dns4/{domain}/tcp/{port}"})]}),`
`,s.jsxs(n.li,{children:["Example: ",s.jsx(n.code,{children:"dns4/ipfs.example.com/tcp/4001"})]}),`
`]}),`
`]}),`
`]})]})}function c(i={}){const{wrapper:n}={...r(),...i.components};return n?s.jsx(n,{...i,children:s.jsx(e,{...i})}):e(i)}export{c as default,a as frontmatter};
