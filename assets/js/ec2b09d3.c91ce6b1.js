"use strict";(self.webpackChunkav1_wiki=self.webpackChunkav1_wiki||[]).push([[3416],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(i),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return i?n.createElement(h,a(a({ref:t},d),{},{components:i})):n.createElement(h,a({ref:t},d))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},8816:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=i(7462),o=(i(7294),i(3905));const r={label:"SVT-AV1",sidebar_position:4},a="SVT-AV1",s={unversionedId:"encoders/SVT-AV1",id:"encoders/SVT-AV1",title:"SVT-AV1",description:"The content in this entry is incomplete & is in the process of being completed.",source:"@site/docs/encoders/SVT-AV1.md",sourceDirName:"encoders",slug:"/encoders/SVT-AV1",permalink:"/codec-wiki/docs/encoders/SVT-AV1",draft:!1,editUrl:"https://github.com/av1-community-contributors/av1-wiki.github.io/tree/main/docs/encoders/SVT-AV1.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{label:"SVT-AV1",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"vpxenc",permalink:"/codec-wiki/docs/encoders/vpxenc"},next:{title:"rav1e",permalink:"/codec-wiki/docs/encoders/rav1e"}},l={},c=[{value:"Building",id:"building",level:2},{value:"(Linux/macOS)",id:"linuxmacos",level:3},{value:"Windows",id:"windows",level:3},{value:"Encoding",id:"encoding",level:2},{value:"Strengths",id:"strengths",level:3},{value:"Weaknesses",id:"weaknesses",level:3},{value:"Encoder Optimization",id:"encoder-optimization",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"svt-av1"},"SVT-AV1"),(0,o.kt)("admonition",{title:"Under Maintenance",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The content in this entry is incomplete & is in the process of being completed.")),(0,o.kt)("p",null,'SVT-AV1 (Scalable Video Technology for AV1) is an AV1-compliant software encoder/decoder library. This entry discusses the SVT-AV1 encoder, also known as the "Production" AV1 encoder (while ',(0,o.kt)("a",{parentName:"p",href:"/codec-wiki/docs/encoders/aomenc"},"aomenc"),' is the "reference" AV1 encoder), & refers to SVT-AV1 as such. SVT-AV1 is known for its parallelization, high coding efficiency, & active development. SVT-AV1 scales across multiple CPU cores much more effectively than aomenc or ',(0,o.kt)("a",{parentName:"p",href:"/codec-wiki/docs/encoders/rav1e"},"rav1e"),", so the use of tools like ",(0,o.kt)("a",{parentName:"p",href:"/codec-wiki/docs/utilities/av1an"},"Av1an")," is less helpful."),(0,o.kt)("h2",{id:"building"},"Building"),(0,o.kt)("h3",{id:"linuxmacos"},"(Linux/macOS)"),(0,o.kt)("p",null,"To build SVT-AV1 from source, clone the official SVT-AV1 repository from Gitlab & build from source."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"git clone https://gitlab.com/AOMediaCodec/SVT-AV1/\ncd SVT-AV1/Build/linux\n./build.sh release\n")),(0,o.kt)("p",null,"If you want extra performance, it is possible to build SVT-AV1 using PGO (Profile-guided Optimization). ",(0,o.kt)("strong",{parentName:"p"},"Be aware that this particular script infers that you have a .y4m file (or multiple) in ",(0,o.kt)("inlineCode",{parentName:"strong"},"/dev/shm")," for transcoding"),". You can compile statically linked SVT-AV1 with PGO by following this script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"git clone https://gitlab.com/AOMediaCodec/SVT-AV1/\ncd SVT-AV1/Build/linux\n./build.sh cc=gcc cxx=g++ enable-lto enable-pgo static native jobs=$(nproc) pgo-dir=/dev/shm pgo-videos=/dev/shm release\n")),(0,o.kt)("p",null,"If you wish to store videos elsewhere or provide custom parameters to the SvtAv1EncApp binary, try this script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"git clone https://gitlab.com/AOMediaCodec/SVT-AV1/\ncd SVT-AV1/Build/linux\n./build.sh cc=gcc cxx=g++ enable-lto enable-pgo static native jobs=$(nproc) pgo-dir=/dev/shm pgo-compile-gen release\n../../Bin/Release/SvtAv1EncApp # Run this binary as many times as you'd like with arguments of your choice to collect data\n./build.sh cc=gcc cxx=g++ enable-lto enable-pgo static native jobs=$(nproc) pgo-dir=/dev/shm pgo-compile-use release\n")),(0,o.kt)("h3",{id:"windows"},"Windows"),(0,o.kt)("p",null,"To be filled."),(0,o.kt)("h2",{id:"encoding"},"Encoding"),(0,o.kt)("h3",{id:"strengths"},"Strengths"),(0,o.kt)("p",null,"SVT-AV1's greatest strength is its parallelization capability, where it outclasses other AV1 encoders by a significant margin. SVT-AV1's parallelization techniques do not involve tiling & don't harm video quality, & can comfortably utilize up to 16 cores given standard 1080p video. This is while maintaining competitive coding efficiency to rav1e. Both are outperformed by well-tuned aomenc, as the reference encoder has a more complete AV1 implementation."),(0,o.kt)("h3",{id:"weaknesses"},"Weaknesses"),(0,o.kt)("p",null,"SVT-AV1 is strongest on x86 CPUs, & it doesn't have any ARM NEON assembly which makes it underperform on ARM. For this reason, it is not a good cross-architecture CPU benchmark. SVT-AV1's support for various AV1 features is also limited; it only supports up to 4:2:0 chroma subsampling with no support for 12-bit color, and it does not support scene change detection (there are no plans to implement this, either)."),(0,o.kt)("h3",{id:"encoder-optimization"},"Encoder Optimization"),(0,o.kt)("p",null,"Aside from build optimizations for speed, there is further tweaking to be done to the ",(0,o.kt)("inlineCode",{parentName:"p"},"SvtAv1EncApp")," binary parameters when encoding."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--film-grain")," & ",(0,o.kt)("inlineCode",{parentName:"li"},"--film-grain-denoise"))),(0,o.kt)("p",null,"Most live-action sources feature hard-to-compress CCD noise that is easily smoothed out by AV1 compression. To add this grain back, or even denoise through the encoder and then add grain, it is possible to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--film-grain")," parameter to specify an amount of film grain to add to the encode (& ",(0,o.kt)("inlineCode",{parentName:"p"},"--film-grain-denoise")," to specify how to denoise the input video before encoding for potentially better appeal). Denoising a video always removes fine details, so sticking with just ",(0,o.kt)("inlineCode",{parentName:"p"},"--film-grain")," is recommended in most cases. According to ",(0,o.kt)("a",{parentName:"p",href:"https://gitlab.com/AOMediaCodec/SVT-AV1/-/blob/master/Docs/CommonQuestions.md#practical-advice-on-grain-synthesis"},"SVT-AV1 documentation"),", a level of 8 should be used for live-action content with a normal amount of grain while a level of 4 works well for hand-drawn animation or other smoother-looking sources that still stand to benefit from some grain synthesis."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--input-depth 10"))),(0,o.kt)("p",null,"10-bit output from AV1 encoding is always desirable for coding efficiency, even if your source is 8-bit."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--tune 2"))),(0,o.kt)("p",null,"There are three tunes in SVT-AV1: Tune 1 is for ",(0,o.kt)("a",{parentName:"p",href:"/codec-wiki/docs/metrics/PSNR"},"PSNR")," ",(0,o.kt)("a",{parentName:"p",href:"/codec-wiki/docs/introduction/psychovisual"},"RDO"),", Tune 2 is for ",(0,o.kt)("a",{parentName:"p",href:"/codec-wiki/docs/metrics/SSIM"},"SSIM")," RDO, & Tune 0 is a ",(0,o.kt)("a",{parentName:"p",href:"/codec-wiki/docs/introduction/psychovisual"},"psychovisual")," tune labeled VQ. It has been common practice to lean away from the PSNR tune, as it is not designed for visual quality but rather to perform better on the PSNR metric which is widely considered to be inconsistent with our human perception of fidelity. Using the VQ tune is a safe bet for now, but many believe the newer SSIM tune provides better visual fidelity. This is anecdotal, & has yet to be meaningfully proven"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--enable-overlays 1"))),(0,o.kt)("p",null,"Enables overlay pictures to be used as additional reference frames for the referenced picture, disabled by default. Improves coding efficiency."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--keyint [FPS*10]")," ")),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"--kf-max-dist")," in ",(0,o.kt)("a",{parentName:"p",href:"/codec-wiki/docs/encoders/vpxenc"},"vpxenc"),", this tells the encoder when to place keyframes. Because SVT-AV1 doesn't have scene detection, this isn't the maximum distance between keyframes, but rather a fixed interval for placing keyframes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--irefresh-type 2"))),(0,o.kt)("p",null,"Intra refresh is specified through this option, & lets the user decide between Closed GOP & Open GOP. GOP stands for Group of Pictures. Open GOP allows GOPs to ",(0,o.kt)("a",{parentName:"p",href:"https://ottverse.com/closed-gop-open-gop-idr/"},"reference one another"),", but support for this feature is currently incomplete. Therefore, it is recommended to use Closed GOP for the time being via ",(0,o.kt)("inlineCode",{parentName:"p"},"--irefresh-type 2")," until this is rectified."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--preset X"))),(0,o.kt)("p",null,"SVT-AV1 can be used in 14 different presets, labeled 0 through 13. Preset 0 is the slowest, but provides the best coding efficiency; Preset 13 is the fastest. Using presets 2 through 8 is the best course of action for non-realtime applications."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--crf X"))),(0,o.kt)("p",null,"CRF is the best way to target quality for optimal visual fidelity. VBR & CBR lose efficiency due to their inherently limited rate control."))}u.isMDXComponent=!0}}]);