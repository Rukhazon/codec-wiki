"use strict";(self.webpackChunkav1_wiki=self.webpackChunkav1_wiki||[]).push([[8305],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(o),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return o?n.createElement(h,a(a({ref:t},d),{},{components:o})):n.createElement(h,a({ref:t},d))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},379:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const i={title:"Codecs",sidebar_position:3},a="Codecs",s={unversionedId:"introduction/codecs",id:"introduction/codecs",title:"Codecs",description:"Codecs, shortened from coder-decoders, are a system for encoding and decoding data. Image codecs convert the color channels, (often Red, Green, and Blue) into a stream of bits that can be turned back into a sequence of Red, Green, and Blue at the other end.",source:"@site/docs/introduction/codecs.md",sourceDirName:"introduction",slug:"/introduction/codecs",permalink:"/av1-wiki.github.io/docs/introduction/codecs",draft:!1,editUrl:"https://github.com/av1-community-contributors/av1-wiki.github.io/tree/main/docs/introduction/codecs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Codecs",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Containers",permalink:"/av1-wiki.github.io/docs/introduction/containers"},next:{title:"Spotting Video Artifacts",permalink:"/av1-wiki.github.io/docs/introduction/video-artifacts"}},c={},l=[{value:"Compression",id:"compression",level:2},{value:"Lossy and Lossless",id:"lossy-and-lossless",level:2},{value:"Examples",id:"examples",level:2},{value:"Video codecs",id:"video-codecs",level:3},{value:"Audio codecs",id:"audio-codecs",level:3}],d={toc:l},u="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"codecs"},"Codecs"),(0,r.kt)("p",null,"Codecs, shortened from ",(0,r.kt)("strong",{parentName:"p"},"coder-decoders"),", are a system for encoding and decoding data. Image codecs convert the color channels, (often Red, Green, and Blue) into a stream of bits that can be turned back into a sequence of Red, Green, and Blue at the other end."),(0,r.kt)("h2",{id:"compression"},"Compression"),(0,r.kt)("p",null,"Codecs can be uncompressed, where they encode the data as-is, or compressed, where it tries to encode in a smaller representation than the original form."),(0,r.kt)("h2",{id:"lossy-and-lossless"},"Lossy and Lossless"),(0,r.kt)("p",null,"Within compression, there is the further distiction between lossy and lossless compression. Lossless compression can be reversed to the exact same as the input data. Lossy compression throws out some of the data, resulting in a smaller compressed form."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"video-codecs"},"Video codecs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AVC / H.264")," - The JPEG of video codecs, very commonly found throughout the internet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"HEVC / H.265")," - The successor to AVC, lacks web browser support and is mostly used to serve UHD content from streaming services. Excellent support for HDR10+ and Dolby Vision but not very good for extremely high fidelity content due to the default filters being applied."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"H.266 / VVC")," - The latest and greatest MPEG codec, however encoding it is extremely slow and pretty much the same case with adoption. Avoid unless for experimentation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"VP8")," - Google's competitor to AVC, the most useless codec ever created for the love of God don't use it. It's worse than AVC in terms of efficiency."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"VP9")," - Google's competitor to HEVC, a decent alternative to HEVC when dealing with web browser compatibility. But has awful threading."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AV1")," - Successor to VP9, features include more efficiency and most attractively, grain synthesis. Currently adoption being pushed hard by all major companies such as Google, NVIDIA, Intel, and many more. Only HDR10+ support is available as of now although the spec does allow for Dolby Vision aswell, just waiting for someone to create the tool to inject into the bitstream.")),(0,r.kt)("h3",{id:"audio-codecs"},"Audio codecs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AAC")," - The ubiquitous audio codec found everywhere you go nowadays. Goes together like bread and butter when combined with AVC. There are multiple encoders for this, listed from best to worse, ",(0,r.kt)("inlineCode",{parentName:"li"},"qaac")," (Medium-high bitrates), ",(0,r.kt)("inlineCode",{parentName:"li"},"FDK-AAC")," & ",(0,r.kt)("inlineCode",{parentName:"li"},"FhG-AAC"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Nero AAC"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"FFmpeg AAC"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MP3")," - Pretty much everyone knows about MP3, was used everywhere in the 2000s to early 2010s."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Vorbis")," - The competitor to MP3 and actually sounds better, most commonly contained in the ",(0,r.kt)("inlineCode",{parentName:"li"},".ogg")," container which means you've probably heard of it before from Minecraft sound effects. Now obsolote and you should consider using Opus instead."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Opus")," - The successor to Vorbis. Extremely efficient and has excellent surround channel optimizations, probably the best lossy audio codec with good support out there, recommended settings can be found ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.xiph.org/Opus_Recommended_Settings"},"here"),". If you set the bitrate too low you might hear crackling noises as part of artifacts, this has the advantage of making it sound better for voices but worse for music.")))}p.isMDXComponent=!0}}]);