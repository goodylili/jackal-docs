import{u as o,j as e}from"./index-J8clnReJ.js";const r={title:"The Mint Module",description:"undefined"};function i(t){const n={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"the-mint-module",children:["The Mint Module",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-mint-module",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"jklmint"})," module is responsible for the management of the native JKL token within the Jackal Protocol."]}),`
`,e.jsx(n.p,{children:"The module handles the issuance, distribution, and inflation of JKL tokens, ensuring a stable and secure token economy."}),`
`,e.jsxs(n.h2,{id:"overview",children:["Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"jklmint"})," module manages these aspects of the JKL token:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Token Issuance"}),": Determines the initial token supply and distribution."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Inflation"}),": Manages the annual inflation rate, maintaining a consistent token supply growth."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Rewards Distribution"}),": Handles the allocation of newly minted tokens as rewards for validators and delegators."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"parameters",children:["Parameters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"jklmint"})," module uses the following parameters to manage the JKL token economy:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mint_denom"}),": the token to print"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mint_decrease"}),": the amount in % the production of tokens will slow over time"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"tokens_per_block"}),": the base value of tokens to print per block"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dev_grants_ratio"}),": the ratio in % of how much of the inflation should go to the developer grants"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"staker_ratio"}),": the ratio in % of how much of the inflation should go to the stakers"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"storage_stipend_address"}),": which address should the storage stipend go to"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"storage_provider_ratio"}),": the ratio in % of how much inflation should go to the storage provider stipend"]}),`
`]}),`
`,e.jsx(n.aside,{"data-callout":"info",children:e.jsxs(n.p,{children:["Please refer to ",e.jsx(n.a,{href:"https://github.com/JackalLabs/canine-chain/blob/master/x/jklmint/README.md",children:"the module documentation"})," for a more detailed guide on integrating the Mint module into your application."]})})]})}function d(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{d as default,r as frontmatter};
