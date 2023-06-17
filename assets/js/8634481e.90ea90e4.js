"use strict";(self.webpackChunkav1_wiki=self.webpackChunkav1_wiki||[]).push([[5795],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5986:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={title:"Intro",sidebar_position:1},a="Intro",s={unversionedId:"filtering/intro",id:"filtering/intro",title:"Intro",description:"In the future, you will definitely come into contact with less than ideal or even downright terrible media, like a ton of film grain/unwanted noise that explodes the bitrate because of their randomness, annoying banding, random halos. Or even in more extreme cases, Interlaced and telecined videos you might come across because they're old and nobody cared about restoring them.",source:"@site/docs/filtering/intro.md",sourceDirName:"filtering",slug:"/filtering/intro",permalink:"/av1-wiki.github.io/docs/filtering/intro",draft:!1,editUrl:"https://github.com/av1-community-contributors/av1-wiki.github.io/tree/main/docs/filtering/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Intro",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"AAC",permalink:"/av1-wiki.github.io/docs/audio/AAC"},next:{title:"Vapoursynth",permalink:"/av1-wiki.github.io/docs/filtering/Vapoursynth"}},l={},c=[{value:"Lore",id:"lore",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"intro"},"Intro"),(0,i.kt)("p",null,"In the future, you will definitely come into contact with less than ideal or even downright terrible media, like a ton of film grain/unwanted noise that explodes the bitrate because of their randomness, annoying banding, random halos. Or even in more extreme cases, Interlaced and telecined videos you might come across because they're old and nobody cared about restoring them."),(0,i.kt)("p",null,"This is where filtering comes into play, currently there are three players in the filtering game. ",(0,i.kt)("a",{parentName:"p",href:"https://ffmpeg.org"},"FFmpeg"),", ",(0,i.kt)("a",{parentName:"p",href:"https://vapoursynth.com"},"Vapoursynth"),", and ",(0,i.kt)("a",{parentName:"p",href:"http://avisynth.nl/index.php/Main_Page"},"Avisynth"),". This wiki will only cover Vapoursynth (and FFmpeg when relevant) as it is intended as a replacement to Avisynth, you will need to understand a bit of Python as filtering involves a bit of scripting."),(0,i.kt)("h2",{id:"lore"},"Lore"),(0,i.kt)("p",null,"VapourSynth is supposed to be an upgrade and 21st century rewrite for Avisynth, created by Ben Rudiak-Gould, Edwin van Eggelen, Klaus Post, Richard Berg and Ian Brabham in ",(0,i.kt)("strong",{parentName:"p"},"May 2000"),". One of the most attractive feature from the full rewrite is better multithreading which Avisynth suffered a lot from due to it's very old infrastructure, despite this some Avisynth veterans refuse to move over because they're already used to their workflow (There is nothing inheritly wrong with this)."))}p.isMDXComponent=!0}}]);