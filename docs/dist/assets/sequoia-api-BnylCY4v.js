import{u as r,j as e}from"./index-J8clnReJ.js";const a={title:"Sequoia API Documentation",description:"undefined"};function n(i){const s={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"sequoia-api-documentation",children:["Sequoia API Documentation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sequoia-api-documentation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.h2,{id:"overview",children:["Overview",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"The Sequoia API provides endpoints for interacting with the Jackal Protocol storage provider. This documentation outlines all available endpoints, their parameters, and expected responses."}),`
`,e.jsxs(s.h2,{id:"base-endpoints",children:["Base Endpoints",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#base-endpoints",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"get-methods",children:["GET Methods",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#get-methods",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"get-provider-status",children:["Get Provider Status",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#get-provider-status",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"GET /"})})})}),`
`,e.jsx(s.p,{children:"Returns basic information about the storage provider."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Parameters:"})," None required"]}),`
`,e.jsx(s.strong,{children:"Response:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"status"}),' (string): Current provider status, always returns "online" when available']}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"address"})," (string): Storage provider's address"]}),`
`]}),`
`,e.jsxs(s.h4,{id:"get-version-information",children:["Get Version Information",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#get-version-information",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"GET /version"})})})}),`
`,e.jsx(s.p,{children:"Retrieves the current software version information."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Parameters:"})," None required"]}),`
`,e.jsx(s.strong,{children:"Response:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"version"})," (string): Git tag version (e.g., v1.0.2)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"build"})," (string): Git commit identifier"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"chain-id"})," (string): Connected Tendermint chain ID"]}),`
`]}),`
`,e.jsxs(s.h4,{id:"download-file",children:["Download File",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#download-file",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"GET /download"})})})}),`
`,e.jsx(s.p,{children:"Downloads a specific file from the Jackal Protocol."}),`
`,e.jsx(s.strong,{children:"Parameters:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"merkle"})," (hex string): File's merkle hash"]}),`
`]}),`
`,e.jsx(s.strong,{children:"Response:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"file"}),": The requested file data"]}),`
`]}),`
`,e.jsxs(s.h4,{id:"list-files",children:["List Files",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#list-files",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"GET /list"})})})}),`
`,e.jsx(s.p,{children:"Retrieves a list of all files stored on the provider."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Parameters:"})," None required"]}),`
`,e.jsx(s.strong,{children:"Response:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"files"})," (string[]): Array of merkle hashes (in hex format) for all stored files"]}),`
`]}),`
`,e.jsxs(s.h3,{id:"ipfs-related-endpoints",children:["IPFS-Related Endpoints",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ipfs-related-endpoints",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"list-ipfs-peers",children:["List IPFS Peers",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#list-ipfs-peers",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"GET /ipfs/peers"})})})}),`
`,e.jsx(s.p,{children:"Lists all connected IPFS peer IDs."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Parameters:"})," None required"]}),`
`,e.jsx(s.strong,{children:"Response:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"peers"})," (string[]): Array of base64-encoded IPFS peer IDs"]}),`
`]}),`
`,e.jsxs(s.h4,{id:"get-provider-hosts",children:["Get Provider Hosts",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#get-provider-hosts",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"GET /ipfs/hosts"})})})}),`
`,e.jsx(s.p,{children:"Lists all accessible hosts for this storage provider."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Parameters:"})," None required"]}),`
`,e.jsx(s.strong,{children:"Response:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"hosts"})," (string[]): Array of multiaddrs where the provider is accessible"]}),`
`]}),`
`,e.jsxs(s.h4,{id:"list-ipfs-files",children:["List IPFS Files",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#list-ipfs-files",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"GET /ipfs/cids"})})})}),`
`,e.jsx(s.p,{children:"Retrieves all files stored as IPFS CIDs."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Parameters:"})," None required"]}),`
`,e.jsx(s.strong,{children:"Response:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"cids"})," (string[]): Array of IPFS CIDs stored on the provider"]}),`
`]}),`
`,e.jsxs(s.h4,{id:"get-ipfsjackal-id-mapping",children:["Get IPFS/Jackal ID Mapping",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#get-ipfsjackal-id-mapping",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"GET /ipfs/cid_map"})})})}),`
`,e.jsx(s.p,{children:"Provides a mapping between Jackal file IDs and IPFS CIDs."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Parameters:"})," None required"]}),`
`,e.jsx(s.strong,{children:"Response:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"cid_map"})," (object): Key-value pairs mapping file merkles (hex strings) to IPFS CIDs"]}),`
`]}),`
`,e.jsxs(s.h3,{id:"system-information",children:["System Information",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#system-information",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"get-database-state",children:["Get Database State",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#get-database-state",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"GET /dump"})})})}),`
`,e.jsx(s.p,{children:"Exports the complete database state."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Parameters:"})," None required"]}),`
`,e.jsx(s.strong,{children:"Response:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"dump"})," (object): Complete database state as JSON"]}),`
`]}),`
`,e.jsxs(s.h4,{id:"get-metrics",children:["Get Metrics",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#get-metrics",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"GET /metrics"})})})}),`
`,e.jsx(s.p,{children:"Retrieves Prometheus-formatted metrics."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Parameters:"})," None required"]}),`
`,e.jsx(s.strong,{children:"Response:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"metrics"}),": Prometheus-formatted metrics data"]}),`
`]}),`
`,e.jsxs(s.h3,{id:"post-methods",children:["POST Methods",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#post-methods",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"upload-file",children:["Upload File",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#upload-file",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"POST /upload"})})})}),`
`,e.jsx(s.p,{children:"Uploads a new file to the Jackal Protocol."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Parameters"})," (multipart form):"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"sender"})," (string): Jackal Address"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"merkle"})," (hex string): File's merkle root"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"start"})," (integer): File deal start block"]}),`
`]}),`
`,e.jsx(s.strong,{children:"Response:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"merkle"})," (hex string): File's merkle hash"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Owner"})," (string): File deal owner's Jackal address"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Start"})," (integer): File deal start block"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"CID"})," (string): IPFS CID for the file"]}),`
`]}),`
`,e.jsxs(s.h4,{id:"create-ipfs-folder",children:["Create IPFS Folder",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#create-ipfs-folder",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"POST /ipfs/make_folder"})})})}),`
`,e.jsx(s.p,{children:"Creates a new IPFS folder mapping."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Parameters"})," (plaintext):"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Comma-separated list of IPFS CIDs"}),`
`]}),`
`,e.jsx(s.strong,{children:"Response:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"CID"})," (string): IPFS CID for the created folder"]}),`
`]})]})}function l(i={}){const{wrapper:s}={...r(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(n,{...i})}):n(i)}export{l as default,a as frontmatter};
