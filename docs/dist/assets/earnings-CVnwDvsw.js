import{u as c,j as e,r as s}from"./index-J8clnReJ.js";const j={title:"Earning Rewards",description:"undefined"},x=()=>{const[i,t]=s.useState(2),[r,h]=s.useState(3),[u,o]=s.useState(!1),l=15,a=200,m=()=>{const n=a*l;return(Number(i)/a*n*(r/100)).toFixed(2)};return e.jsx("div",{className:"w-full max-w-3xl mx-auto",children:e.jsx("div",{className:"bg-gradient-to-br from-blue-50 via-indigo-50/50 to-violet-50 rounded-3xl shadow-xl shadow-indigo-100/50 p-8 my-8 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-200/50",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:e.jsxs("div",{className:"space-y-12",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"text-indigo-800 text-lg font-medium mb-4 flex items-center gap-2",children:["Storage Offered",e.jsx("span",{className:"text-indigo-400 text-sm",children:"💾"})]}),e.jsxs("div",{className:"relative group",children:[e.jsx("input",{type:"number",value:i,onChange:n=>t(Number(n.target.value)),className:`w-full bg-white/80 backdrop-blur-sm border-2 border-indigo-100 rounded-2xl px-6 py-4 text-2xl font-medium text-indigo-600
                focus:ring-4 focus:ring-indigo-200/50 focus:border-indigo-300 focus:outline-none
                transition-all duration-300 group-hover:border-indigo-200`,min:"0",step:"1"}),e.jsx("span",{className:"absolute right-6 top-1/2 -translate-y-1/2 text-indigo-400 text-xl font-medium transition-all duration-300 group-hover:text-indigo-500",children:"TB"})]})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"text-indigo-800 text-lg font-medium mb-4 flex items-center gap-2",children:["Expected Usage",e.jsx("span",{className:"text-indigo-400 text-sm",children:"📊"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute h-2 bg-indigo-500/20 rounded-full transition-all duration-300",style:{width:`${r}%`}}),e.jsx("input",{type:"range",value:r,onChange:n=>h(Number(n.target.value)),className:`w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer relative z-10
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6
                  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500
                  [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-indigo-500/30
                  [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-all
                  [&::-webkit-slider-thumb]:duration-300 [&::-webkit-slider-thumb]:hover:scale-110
                  [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:bg-indigo-500 [&::-moz-range-thumb]:border-0
                  [&::-moz-range-thumb]:shadow-lg [&::-moz-range-thumb]:shadow-indigo-500/30
                  [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:transition-all
                  [&::-moz-range-thumb]:duration-300 [&::-moz-range-thumb]:hover:scale-110`,min:"1",max:"100"})]}),e.jsx("div",{className:"text-right font-medium",children:e.jsxs("span",{className:"text-indigo-400 transition-all duration-300 hover:text-indigo-500",children:[r,"%"]})})]})]}),e.jsxs("div",{className:`bg-gradient-to-br from-indigo-500/5 via-violet-500/5 to-purple-500/5 rounded-2xl p-8 text-center transform transition-all duration-500 ${u?"scale-105":"scale-100"}`,children:[e.jsx("div",{className:"text-indigo-800 text-lg mb-2",children:"Estimated Monthly Earnings"}),e.jsxs("div",{className:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500 text-6xl font-bold transition-all duration-500",children:["$",m()]}),e.jsx("div",{className:"text-indigo-500/70 mt-3 text-sm",children:"Results may vary based on network conditions ⚡"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-center",children:[e.jsxs("div",{className:"bg-white/50 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-white/80",children:[e.jsx("div",{className:"text-indigo-400 text-sm mb-1",children:"Network Size"}),e.jsxs("div",{className:"text-indigo-800 text-xl font-medium",children:[a," TB"]})]}),e.jsxs("div",{className:"bg-white/50 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-white/80",children:[e.jsx("div",{className:"text-indigo-400 text-sm mb-1",children:"Price per TB"}),e.jsxs("div",{className:"text-indigo-800 text-xl font-medium",children:["$",l]})]})]})]})})})};function d(i){const t={a:"a",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"earning-rewards",children:["Earning Rewards",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#earning-rewards",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.p,{children:"Sequoia providers will earn storage rewards over time proportional to how much storage they are providing."}),`
`,e.jsxs(t.h2,{id:"profitability-calculator",children:["Profitability Calculator",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#profitability-calculator",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Use the calculator below to estimate potential earnings."}),`
`,e.jsx(t.p,{children:"Please note that this is just an estimate - there is no guarantee you will receive this amount."}),`
`,`
`,e.jsx(x,{}),`
`,e.jsxs(t.h3,{id:"how-rewards-are-calculated",children:["How Rewards Are Calculated",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-rewards-are-calculated",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"The profitability calculator uses the following factors to estimate potential earnings:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"TBs Offered"})," : The amount of storage space you're providing to the network"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Usage Percentage"}),": The expected utilization of your offered storage"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Network Variables"}),":",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Current network size: 200 TB"}),`
`,e.jsx(t.li,{children:"Price per TB: $15"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(t.p,{children:"Please note that these variables may change based on network conditions and market dynamics."}),`
`,e.jsxs(t.h3,{id:"important-considerations",children:["Important Considerations",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#important-considerations",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Actual earnings may vary based on network conditions"}),`
`,e.jsx(t.li,{children:"Storage rewards are distributed proportionally to storage provided"}),`
`,e.jsx(t.li,{children:"Higher usage percentages typically lead to better earnings"}),`
`,e.jsx(t.li,{children:"Network size and pricing may fluctuate over time"}),`
`]})]})}function v(i={}){const{wrapper:t}={...c(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(d,{...i})}):d(i)}export{x as Calculator,v as default,j as frontmatter};
