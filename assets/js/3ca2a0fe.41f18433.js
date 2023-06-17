"use strict";(self.webpackChunkav1_wiki=self.webpackChunkav1_wiki||[]).push([[9768],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(i),p=a,m=h["".concat(d,".").concat(p)]||h[p]||u[p]||o;return i?n.createElement(m,r(r({ref:t},c),{},{components:i})):n.createElement(m,r({ref:t},c))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[h]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=i[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},8042:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=i(7462),a=(i(7294),i(3905));const o={sidebar_position:6},r="High Dynamic Range",s={unversionedId:"introduction/high-dynamic-range",id:"introduction/high-dynamic-range",title:"High Dynamic Range",description:"HDR (High Dynamic Range) is a technology used in modern TVs and displays to produce more vibrant and lifelike images. In simple terms, it allows your TV to display a wider range of colors and brightness levels than standard displays. This means that you can see more details in both bright and dark areas of an image, which can make movies, TV shows, and video games look much more realistic.",source:"@site/docs/introduction/high-dynamic-range.md",sourceDirName:"introduction",slug:"/introduction/high-dynamic-range",permalink:"/av1-wiki.github.io/docs/introduction/high-dynamic-range",draft:!1,editUrl:"https://github.com/av1-community-contributors/av1-wiki.github.io/tree/main/docs/introduction/high-dynamic-range.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Psycho-visual",permalink:"/av1-wiki.github.io/docs/introduction/psychovisual"},next:{title:"x264",permalink:"/av1-wiki.github.io/docs/encoders/x264"}},d={},l=[{value:"HLG",id:"hlg",level:2},{value:"HDR10",id:"hdr10",level:2},{value:"HDR10+",id:"hdr10-1",level:2},{value:"Dolby Vision",id:"dolby-vision",level:2}],c={toc:l},h="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(h,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"high-dynamic-range"},"High Dynamic Range"),(0,a.kt)("p",null,"HDR (High Dynamic Range) is a technology used in modern TVs and displays to produce more vibrant and lifelike images. In simple terms, it allows your TV to display a wider range of colors and brightness levels than standard displays. This means that you can see more details in both bright and dark areas of an image, which can make movies, TV shows, and video games look much more realistic."),(0,a.kt)("p",null,"HDR10 works by using metadata that tells your TV how to display the content in the best way possible. This metadata includes information about the maximum brightness level and color gamut of the content, which allows your TV to adjust its settings to match the content being displayed. In other words, HDR10 helps your TV display images that are closer to what the content creators intended you to see, resulting in a more immersive viewing experience."),(0,a.kt)("h2",{id:"hlg"},"HLG"),(0,a.kt)("p",null,"HLG (Hybrid log-gamma) is a type of HDR video format that was developed to optimize video for both standard dynamic range (SDR) and HDR displays, jointly developed by the BBC and NHK."),(0,a.kt)("p",null,"To understand how HLG works, it's helpful to know that the way we perceive brightness and color in a video is different from how it's captured and displayed on a screen. Brightness and color information is usually captured in a logarithmic curve, while SDR displays typically reproduce the image with a gamma curve. HDR displays, on the other hand, reproduce the image with a different type of curve, known as the Perceptual Quantizer (PQ) curve."),(0,a.kt)("p",null,"The HLG curve is a hybrid of these two curves, which means that it's optimized for both SDR and HDR displays. It's designed to work with a wider range of brightness levels than SDR displays, but also be backward compatible with SDR displays."),(0,a.kt)("p",null,"In simpler terms, the HLG curve is a way of capturing and displaying video that works well on both SDR and HDR displays. It's like a bridge between the way video is captured and the way it's displayed, and it's designed to optimize the video for a wider range of brightness levels than traditional SDR video. The result is video content that looks more realistic and vivid on both SDR and HDR displays."),(0,a.kt)("h2",{id:"hdr10"},"HDR10"),(0,a.kt)("p",null,"HDR10 is an open high-dynamic-range video (HDR) standard announced on 27 August 2015 by the Consumer Technology Association. It is the most widespread of the HDR formats. It only allows static metadata."),(0,a.kt)("h2",{id:"hdr10-1"},"HDR10+"),(0,a.kt)("p",null,"HDR10+ is basically an upgrade to the previous HDR10 by adding dynamic metadata support (in ",(0,a.kt)("inlineCode",{parentName:"p"},".json"),") to optimize each scene's content light level as the director intended."),(0,a.kt)("h2",{id:"dolby-vision"},"Dolby Vision"),(0,a.kt)("p",null,"Dolby Vision is proprietary HDR format developed by Dolby Laboratories and a direct competitor to HDR10+."))}u.isMDXComponent=!0}}]);