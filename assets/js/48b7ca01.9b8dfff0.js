"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[1347],{1165:(e,t,i)=>{i.d(t,{Ck:()=>g,kS:()=>p});var s=i(4848),n=i(5293),r=i(6540),a=i(3517),o=i(943),c=i(1412),l=i(9522),d=i(1303),h=i(8633),m=i(363);const g=({imageData:e})=>{const t=({currentSlide:e,direction:t,slideCount:i,...n})=>"left"===t?(0,s.jsx)(h.A,{...n,style:{color:"#fff",fontSize:24,width:24,height:24,zIndex:1,left:10}}):(0,s.jsx)(m.A,{...n,style:{color:"#fff",fontSize:24,width:24,height:24,zIndex:1,right:10}});return(0,s.jsx)(a.A,{arrows:!0,prevArrow:(0,s.jsx)(t,{direction:"left"}),nextArrow:(0,s.jsx)(t,{direction:"right"}),children:e.map((e=>(0,s.jsx)(o.A,{src:e.src},e.src)))})},p=({tabMap:e})=>{const[t,i]=(0,r.useState)(Object.keys(e)[0]),{colorMode:a,setColorMode:o}=(0,n.G)();return(0,s.jsx)(c.Ay,{theme:{algorithm:"dark"===a?l.A.darkAlgorithm:l.A.defaultAlgorithm},children:(0,s.jsx)(d.A,{tabList:Object.entries(e).map((([e,t])=>({key:e,label:t.label}))),activeTabKey:t,onTabChange:e=>{i(e)},children:e[t].component})})}},9350:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=i(4848),n=i(8453);i(1165);const r={title:"Encoding Animation with SVT-AV1: A Deep Dive",description:"With the recent release of SVT-AV1 1.8.0, how does it stack up for encoding animation?",slug:"svt-av1-deep-dive",authors:[{name:"Trix",title:"Encoder",url:"https://github.com/trixoniisama/",image_url:"https://avatars.githubusercontent.com/u/93526043"}],tags:["video","compression","benchmarks"],image:"/img/svt-1.8.0-testing-blog-image.webp",hide_table_of_contents:!1},a="Introduction",o={permalink:"/blog/svt-av1-deep-dive",source:"@site/blog/2023-12-30-svt-av1-deep-dive.mdx",title:"Encoding Animation with SVT-AV1: A Deep Dive",description:"With the recent release of SVT-AV1 1.8.0, how does it stack up for encoding animation?",date:"2023-12-30T00:00:00.000Z",tags:[{label:"video",permalink:"/blog/tags/video"},{label:"compression",permalink:"/blog/tags/compression"},{label:"benchmarks",permalink:"/blog/tags/benchmarks"}],readingTime:22.32,hasTruncateMarker:!0,authors:[{name:"Trix",title:"Encoder",url:"https://github.com/trixoniisama/",image_url:"https://avatars.githubusercontent.com/u/93526043",imageURL:"https://avatars.githubusercontent.com/u/93526043"}],frontMatter:{title:"Encoding Animation with SVT-AV1: A Deep Dive",description:"With the recent release of SVT-AV1 1.8.0, how does it stack up for encoding animation?",slug:"svt-av1-deep-dive",authors:[{name:"Trix",title:"Encoder",url:"https://github.com/trixoniisama/",image_url:"https://avatars.githubusercontent.com/u/93526043",imageURL:"https://avatars.githubusercontent.com/u/93526043"}],tags:["video","compression","benchmarks"],image:"/img/svt-1.8.0-testing-blog-image.webp",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Observing SVT-AV1 v2.1.0's improvements: A New Deep Dive",permalink:"/blog/svt-av1-second-deep-dive"},nextItem:{title:"Embedding the Un-Embeddable",permalink:"/blog/embedding-the-un-embeddable"}},c={authorsImageUrls:[void 0]},l=[];function d(e){const t={del:"del",em:"em",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"This blog post is based on a series of visual quality benchmarks with SSIMULACRA2 and speed benchmarks of SVT-AV1 1.8.0 on a corpus of animated clips."}),"\n",(0,s.jsxs)(t.p,{children:["The resources available will range from ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"graphs"})})," to ",(0,s.jsx)(t.del,{children:(0,s.jsx)(t.strong,{children:"image comparisons"})})," (WIP). The ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"former"})})," has the advantage of being easily understandable, showcasing pure efficiency comparisons between encoder parameters using metrics as the reference, while the ",(0,s.jsx)(t.strong,{children:"latter"})," are image samples from the encoded files during the tests that enable you to check quality for yourself and add another layer of subjective interpretation to these comparisons."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);