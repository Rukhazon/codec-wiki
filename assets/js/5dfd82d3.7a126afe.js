"use strict";(self.webpackChunkav1_wiki=self.webpackChunkav1_wiki||[]).push([[1062],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={title:"x265",sidebar_position:2},a="x265",l={unversionedId:"encoders/x265",id:"encoders/x265",title:"x265",description:"x265 is a software library and command line application for encoding H.265 / HEVC developed by MulticoreWare, written in C++ and x86 assembly, and finally released in 2013.",source:"@site/docs/encoders/x265.md",sourceDirName:"encoders",slug:"/encoders/x265",permalink:"/av1-wiki.github.io/docs/encoders/x265",draft:!1,editUrl:"https://github.com/av1-community-contributors/av1-wiki.github.io/tree/main/docs/encoders/x265.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"x265",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"x264",permalink:"/av1-wiki.github.io/docs/encoders/x264"},next:{title:"aomenc",permalink:"/av1-wiki.github.io/docs/encoders/aomenc"}},c={},s=[{value:"FFmpeg",id:"ffmpeg",level:2},{value:"Installation",id:"installation",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"x265"},"x265"),(0,i.kt)("p",null,"x265 is a software library and command line application for encoding H.265 / HEVC developed by MulticoreWare, written in C++ and x86 assembly, and finally released in 2013."),(0,i.kt)("p",null,"By default it is not very good for high fidelity content due to the amount of filters it applies even with them disabled, unlike x264, it is not recommended to do lossless with x265. But in the other hand, the filters work fantastic for lower bitrate content which makes x265 insanely popular for low-sized media."),(0,i.kt)("h2",{id:"ffmpeg"},"FFmpeg"),(0,i.kt)("p",null,"x265 is available in FFmpeg via ",(0,i.kt)("inlineCode",{parentName:"p"},"libx265"),", to check if you have it, run ",(0,i.kt)("inlineCode",{parentName:"p"},"ffmpeg -h encoder=libx265"),"."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pre-built binary ","[Recommended]",":")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://msystem.waw.pl/x265/"},"http://msystem.waw.pl/x265/"))))}u.isMDXComponent=!0}}]);