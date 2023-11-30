"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[9079],{230:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=i(5893),t=i(1151);const r={title:"x264",sidebar_position:1},o="x264",a={id:"encoders/x264",title:"x264",description:"x264 is a software library and command line application for encoding H.264 / AVC developed by VideoLAN, the people behind the ever-popular VLC Media Player and released under GNU GPL. It is written in C and Assembly with almost two decades worth of development and threading optimizations which makes it the fastest software video encoder available, which also happens to be extremely popular.",source:"@site/docs/encoders/x264.mdx",sourceDirName:"encoders",slug:"/encoders/x264",permalink:"/docs/encoders/x264",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/encoders/x264.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"x264",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"JPEG-XL",permalink:"/docs/images/JXL"},next:{title:"x265",permalink:"/docs/encoders/x265"}},l={},d=[{value:"FFmpeg",id:"ffmpeg",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Recommendations",id:"recommendations",level:2},{value:"Lowering presets",id:"lowering-presets",level:3},{value:"Increase threads",id:"increase-threads",level:3},{value:"Open GOP",id:"open-gop",level:3},{value:"AQ Mode 3",id:"aq-mode-3",level:3},{value:"Increasing reference frames",id:"increasing-reference-frames",level:3},{value:"Tips and tricks",id:"tips-and-tricks",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"x264",children:"x264"}),"\n",(0,s.jsx)(n.p,{children:"x264 is a software library and command line application for encoding H.264 / AVC developed by VideoLAN, the people behind the ever-popular VLC Media Player and released under GNU GPL. It is written in C and Assembly with almost two decades worth of development and threading optimizations which makes it the fastest software video encoder available, which also happens to be extremely popular."}),"\n",(0,s.jsx)(n.p,{children:"x264 has great fine detail retention which makes it perfect for high fidelity content."}),"\n",(0,s.jsx)(n.h2,{id:"ffmpeg",children:"FFmpeg"}),"\n",(0,s.jsxs)(n.p,{children:["x264 is available in FFmpeg via ",(0,s.jsx)(n.code,{children:"libx264"}),", to check if you have it, run ",(0,s.jsx)(n.code,{children:"ffmpeg -h encoder=libx264"}),". You can input non-FFmpeg standard x264 parameters via ",(0,s.jsx)(n.code,{children:"-x264-params"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Pre-built binary [Recommended]:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://code.videolan.org/videolan/x264",children:"https://code.videolan.org/videolan/x264"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Choose your operating system there, or you can try using your package manager."}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"x264 has been praised for its simple, easy-to-use, and no fuss settings. Here are some examples:"}),"\n",(0,s.jsxs)(n.p,{children:["Simple Y4M input with CRF 20 and raw ",(0,s.jsx)(n.code,{children:"264"})," bitstream output:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"x264 --crf 20 -o output.264 input.y4m\n"})}),"\n",(0,s.jsx)(n.p,{children:"Preset slow, CRF 20, Y4M input:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"x264 --preset slow --crf 20 -o output.264 input.y4m\n"})}),"\n",(0,s.jsx)(n.p,{children:"FFmpeg piping:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ffmpeg -v error -i input.mkv -f yuv4mpegpipe -strict -1 - | x264 --preset slow --crf 20 --demux y4m - -o output.264\n"})}),"\n",(0,s.jsx)(n.p,{children:"FFmpeg piping with MKV output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ffmpeg -v error -i input.mkv -f yuv4mpegpipe -strict -1 - | x264 --preset slow --crf 20 --demux y4m - -o output.mkv\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Output Containers",type:"note",children:(0,s.jsxs)(n.p,{children:["x264 can output ",(0,s.jsx)(n.code,{children:"264"}),", MKV, FLV (Flash Video), and MP4 (If compiled with GPAC or L-SMASH support)."]})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"x264 will use Haali Matroska Muxer for MKV outputs, which has seeking issues. It is recommended to remux back using FFmpeg or mkvmerge/MKVToolNix."})}),"\n",(0,s.jsx)(n.h2,{id:"recommendations",children:"Recommendations"}),"\n",(0,s.jsx)(n.p,{children:'As x264 is made to "just work", so there is little to modify in terms of advanced parameters. The general guideline is to just make it as slow as you can bear it.'}),"\n",(0,s.jsx)(n.h3,{id:"lowering-presets",children:"Lowering presets"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"--preset veryslow"})}),"\n",(0,s.jsxs)(n.p,{children:["The most obvious option, set the preset to the slowest bearable option. You can use ",(0,s.jsx)(n.code,{children:"placebo"})," if you have a beefy CPU."]}),"\n",(0,s.jsx)(n.h3,{id:"increase-threads",children:"Increase threads"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"--threads X"})}),"\n",(0,s.jsx)(n.p,{children:"By default, x264 uses 12 threads. If you have more than 12, increase it to your CPU's maximum and x264 will completely saturate it."}),"\n",(0,s.jsx)(n.h3,{id:"open-gop",children:"Open GOP"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"--open-gop"})}),"\n",(0,s.jsxs)(n.p,{children:["Enables Open GOP (Group of Pictures), where each GOP can ",(0,s.jsx)(n.a,{href:"https://ottverse.com/closed-gop-open-gop-idr/",children:"reference one another"}),", thus improving compression with little speed loss. For unknown reasons it is disabled by default in x264."]}),"\n",(0,s.jsx)(n.h3,{id:"aq-mode-3",children:"AQ Mode 3"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"--aq-mode 3"})}),"\n",(0,s.jsx)(n.p,{children:"In short, will make x264 bias to dark areas and spend more bitrate there, thus dark scenes will look less bad. Basically no speed loss."}),"\n",(0,s.jsx)(n.h3,{id:"increasing-reference-frames",children:"Increasing reference frames"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"--bframes 8 --ref 12"})}),"\n",(0,s.jsx)(n.p,{children:"These parameters are responsible for the amount of reference frames x264 will use for compression, the more the better. Maximum of 16, will definitely increase compute time the higher you go."}),"\n",(0,s.jsx)(n.h2,{id:"tips-and-tricks",children:"Tips and tricks"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["x264 is a great alternative when you need to encode lossless video outside of using something like FFV1, utvideo, etc. To do that just encode with ",(0,s.jsx)(n.code,{children:"--qp 0"}),", using slower presets will decrease the size even further."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Why not CRF 0?",type:"info",children:(0,s.jsxs)(n.p,{children:["Because CRF automatically adjusts the ",(0,s.jsx)(n.strong,{children:"quantization parameters"})," to achieve the desired quality. QP in the other hand, which stands for ",(0,s.jsx)(n.strong,{children:"Quantization Parameter"}),", you get full control over the quality you'll get. In this case, all-intra or lossless."]})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var s=i(7294);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);