"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[921],{1364:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var s=i(4848),a=i(8453);const t={title:"av1an-command-gen",sidebar_position:14},r="Av1an Command Generator",d={id:"utilities/av1an-command-gen",title:"av1an-command-gen",description:"Av1an Command Generator is a rudimentary tool for easily generating Av1an commands for AV1 encoding. It is written in the Zig programming language. It is very similar to rAV1ator CLI in the sense that it can produce Av1an commands based on user input.",source:"@site/docs/utilities/av1an-command-gen.mdx",sourceDirName:"utilities",slug:"/utilities/av1an-command-gen",permalink:"/docs/utilities/av1an-command-gen",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/utilities/av1an-command-gen.mdx",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"av1an-command-gen",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Discord",permalink:"/docs/utilities/Discord"},next:{title:"autocompressor",permalink:"/docs/utilities/autocompressor"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Examples",id:"examples",level:2},{value:"Installation",id:"installation",level:2},{value:"License",id:"license",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"av1an-command-generator",children:"Av1an Command Generator"}),"\n",(0,s.jsxs)(n.p,{children:["Av1an Command Generator is a rudimentary tool for easily generating Av1an commands for AV1 encoding. It is written in the Zig programming language. It is very similar to ",(0,s.jsx)(n.a,{href:"/docs/utilities/rav1ator-cli",children:"rAV1ator CLI"})," in the sense that it can produce Av1an commands based on user input."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/gianni-rosato/av1an-command-gen/",children:"GitHub Link"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Av1an Command Generator is designed for beginners, although experienced encoders can use it to speed up their Av1an scripting. The program generates an AV1 video encoding command for use with ",(0,s.jsx)(n.a,{href:"/docs/utilities/av1an",children:"Av1an"}),", a chunked video encoding tool that can be used with ",(0,s.jsx)(n.a,{href:"/docs/encoders/aomenc",children:"aomenc"}),", ",(0,s.jsx)(n.a,{href:"/docs/encoders/SVT-AV1",children:"SVT-AV1"}),", and ",(0,s.jsx)(n.a,{href:"/docs/encoders/rav1e",children:"rav1e"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This tool takes in the video resolution, frame rate, desired encoder, speed preset, and target bitrate range as command line arguments. Based on these parameters, it calculates settings like tile columns/rows, lag-in-frames, CRF, and encoder speed preset. Then, it injects these into a generated encoding command string."}),"\n",(0,s.jsxs)(n.p,{children:["The output is a full ",(0,s.jsx)(n.code,{children:"av1an"})," command that can be run to encode a video based on the specified settings."]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"av1an-command-gen [width] [height] [fps] [encoder] [speed] [bitrate_target]\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"width"})," - Input video width in pixels"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"height"})," - Input video height in pixels"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fps"})," - Input video frame rate"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"encoder"})," - ",(0,s.jsx)(n.code,{children:"aom"}),", ",(0,s.jsx)(n.code,{children:"svt"}),", or ",(0,s.jsx)(n.code,{children:"rav1e"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"speed"})," - ",(0,s.jsx)(n.code,{children:"slower"}),", ",(0,s.jsx)(n.code,{children:"slow"}),", ",(0,s.jsx)(n.code,{children:"med"}),", ",(0,s.jsx)(n.code,{children:"fast"}),", ",(0,s.jsx)(n.code,{children:"faster"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bitrate_target"})," - ",(0,s.jsx)(n.code,{children:"lowest"}),", ",(0,s.jsx)(n.code,{children:"low"}),", ",(0,s.jsx)(n.code,{children:"med"}),", ",(0,s.jsx)(n.code,{children:"high"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Generate a command for encoding a 1280x720 video at 24 fps using rav1e at 'med' speed and 'low' bitrate target:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"av1an-command-gen 1280 720 24 rav1e med low\n"})}),"\n",(0,s.jsx)(n.p,{children:"Generate a command for encoding a 1920x1080 video at 30 fps using svt-av1 at 'fast' speed and 'high' bitrate target:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"av1an-command-gen 1920 1080 30 svt fast high\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["This program requires the ",(0,s.jsx)(n.a,{href:"https://ziglang.org/",children:"Zig"})," v0.11.0 programming language."]}),"\n",(0,s.jsx)(n.p,{children:"To build:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"zig build\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will produce a standalone binary ",(0,s.jsx)(n.code,{children:"av1an-command-gen"})," in ",(0,s.jsx)(n.code,{children:"zig-out/bin/"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,s.jsx)(n.p,{children:"This project is licensed under the BSD 3-Clause License."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var s=i(6540);const a={},t=s.createContext(a);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);