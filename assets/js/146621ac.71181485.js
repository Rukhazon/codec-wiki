"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[1164],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?o.createElement(m,i(i({ref:t},p),{},{components:r})):o.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1101:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={label:"brotli",sidebar_position:6},i="Brotli",l={unversionedId:"data/brotli",id:"data/brotli",title:"Brotli",description:"This section is in need of contributions. If you believe you can help, please see our Contribution Guide to get started as a contributor!",source:"@site/docs/data/brotli.md",sourceDirName:"data",slug:"/data/brotli",permalink:"/docs/data/brotli",draft:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/data/brotli.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{label:"brotli",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"XZ",permalink:"/docs/data/xz"},next:{title:"ZPAQ",permalink:"/docs/data/zpaq"}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"brotli"},"Brotli"),(0,n.kt)("admonition",{title:"Help Wanted",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"This section is in need of contributions. If you believe you can help, please see our ",(0,n.kt)("a",{parentName:"p",href:"/docs/contribution-guide"},"Contribution Guide")," to get started as a contributor!")),(0,n.kt)("p",null,"Brotli was released by Google in late 2013, & it is commonly used on the Web for content delivery. It is a core part of the ",(0,n.kt)("inlineCode",{parentName:"p"},".woff2")," Web Open Font Format, allowing web fonts to be smaller when sent to users as part of a website. It is not very common to pass around ",(0,n.kt)("inlineCode",{parentName:"p"},".tar.br")," Brotli archives like you would with ",(0,n.kt)("a",{parentName:"p",href:"/docs/data/gzip"},"gzip")," or ",(0,n.kt)("a",{parentName:"p",href:"/docs/data/xz"},"xz"),", so it is perfectly acceptable that such files aren't really compatible anywhere. Brotli is almost universally compatible across the Web, supported by as much as 96% of the World Wide Web's users."),(0,n.kt)("p",null,"Brotli is based on LZ77 & Huffman coding, much like ZIP. It also uses context modeling to allow the use of multiple Huffman trees for the same alphabet in the same block; this essentially means that based on the context of the data being compressed, it can be compressed more efficiently especially if it contains multiple different kinds of data."),(0,n.kt)("p",null,"Brotli was co-authored & partially developed by Jyrki Alakuijala, who also worked on ",(0,n.kt)("a",{parentName:"p",href:"/docs/images/JXL"},"JPEG-XL")," & the efficient ",(0,n.kt)("a",{parentName:"p",href:"/docs/images/JPEG"},"JPEG")," encoder jpegli. JPEG-XL's metadata information is usually Brotli-compressed."))}d.isMDXComponent=!0}}]);