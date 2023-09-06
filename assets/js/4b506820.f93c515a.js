"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[837],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return o?r.createElement(f,a(a({ref:t},c),{},{components:o})):r.createElement(f,a({ref:t},c))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3376:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=o(7462),n=(o(7294),o(3905));const i={label:"MKVToolNix",sidebar_position:2},a="MKVToolNix",l={unversionedId:"utilities/MKVToolNix",id:"utilities/MKVToolNix",title:"MKVToolNix",description:"Your average MKVToolNix workload.",source:"@site/docs/utilities/MKVToolNix.md",sourceDirName:"utilities",slug:"/utilities/MKVToolNix",permalink:"/docs/utilities/MKVToolNix",draft:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/utilities/MKVToolNix.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{label:"MKVToolNix",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Av1an",permalink:"/docs/utilities/av1an"},next:{title:"rAV1ator",permalink:"/docs/utilities/rAV1ator"}},s={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Tips and tricks",id:"tips-and-tricks",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mkvtoolnix"},"MKVToolNix"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/778167033401049098/1104704457096306758/mkvtoolnix-gui_7lzrlaJwOp.png",alt:"Your average MKVToolNix workload."})),(0,n.kt)("p",null,"MKVToolNix is FOSS GUI frontend to a set of tools (mkvmerge, mkvinfo, mkvpropedit, mkvextract) to create, alter and inspect Matroska files under Linux, other Unices and Windows."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"Fortunately, Moritz Bunkus (Creator) is sane enough to provide downloads for pretty much all desktop operating systems normal people use which can be found ",(0,n.kt)("a",{parentName:"p",href:"https://mkvtoolnix.download/downloads.html"},"here"),". If not available, check your local package manager."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,'Drag and drop media files (or use "Add source files") to the application and modify, remux, demux, add streams, drop streams, anything and when done set your output destination and click "Start multiplexing" to start writing the output.'),(0,n.kt)("h2",{id:"tips-and-tricks"},"Tips and tricks"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"You can import unencrypted BDMV (",(0,n.kt)("inlineCode",{parentName:"li"},"index.bdmv"),") or Blu-ray playlist files into MKVToolNix and it will prompt you to select which stream you would want to import."),(0,n.kt)("li",{parentName:"ol"},'You can set a WebM output in Output > Miscellaneous > "Create WebM compliant file"'),(0,n.kt)("li",{parentName:"ol"},"You can split videos in multiple ways in Output > Splitting. Best of all? No freeze frames unlike in FFmpeg and no re-encoding required."),(0,n.kt)("li",{parentName:"ol"},'You can edit metadata without remuxing (Albeit rather limited) in the "Header Editor".')))}d.isMDXComponent=!0}}]);