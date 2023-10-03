"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[7671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(7462),i=(n(7294),n(3905));const r={title:"Contribution Guide",sidebar_label:"\u2712\ufe0f Contribution Guide",sidebar_position:13},a="Contribution Guide",l={unversionedId:"contribution-guide",id:"contribution-guide",title:"Contribution Guide",description:"Codec Wiki - community-maintained wiki for all things encoding.",source:"@site/docs/contribution-guide.md",sourceDirName:".",slug:"/contribution-guide",permalink:"/docs/contribution-guide",draft:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/contribution-guide.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Contribution Guide",sidebar_label:"\u2712\ufe0f Contribution Guide",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"\ud83d\uddc3\ufe0f Resources",permalink:"/docs/resources"},next:{title:"\u2753 FAQ",permalink:"/docs/FAQ"}},s={},u=[{value:"Before You Contribute",id:"before-you-contribute",level:2},{value:"Connect With Us",id:"connect-with-us",level:3},{value:"Clone &amp; Push Instructions",id:"clone--push-instructions",level:2},{value:"Website",id:"website",level:2},{value:"Installation",id:"installation",level:3},{value:"Local Development",id:"local-development",level:3},{value:"Build",id:"build",level:3},{value:"Deployment",id:"deployment",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contribution-guide"},"Contribution Guide"),(0,i.kt)("p",null,"Codec Wiki - community-maintained wiki for all things encoding."),(0,i.kt)("h2",{id:"before-you-contribute"},"Before You Contribute"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"By contributing to the Codec Wiki, you are communicating that you have read & agreed to our Terms & Conditions, Privacy Policy, & Code of Conduct."),(0,i.kt)("li",{parentName:"ol"},"Ensure your understanding of the material you're contributing is sufficient to a point where it is useful to the project. It is perfectly acceptable not to get everything right the first time, but always double-check your contributions for factual correctness.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Our current priority is filling out the existing pages with content. Please assist in doing this, if possible, before considering adding new pages.")),(0,i.kt)("p",null,"If you're unsure the content in your entry is completely correct or you believe your entry needs review, please attach the following message at the top of your entry:"),(0,i.kt)("admonition",{title:"Pending Review",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The content in this entry may not be entirely accurate, & is pending further review to assess the quality of the information.")),(0,i.kt)("p",null,"If you're aware your entry is too short or incomplete, please add the following message to the top of your entry:"),(0,i.kt)("admonition",{title:"Under Maintenance",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The content in this entry is incomplete & is in the process of being completed.")),(0,i.kt)("p",null,"If you've added a new page & you aren't sure what should go there (this isn't recommended while there are still so many empty pages to be filled), add the following message as your page entry:"),(0,i.kt)("admonition",{title:"Help Wanted",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"This section is in need of contributions. If you believe you can help, please see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/contribution-guide"},"Contribution Guide")," to get started as a contributor!")),(0,i.kt)("h3",{id:"connect-with-us"},"Connect With Us"),(0,i.kt)("p",null,"If you're interested in communicating with other passionate contributors helping this project, visit ",(0,i.kt)("a",{parentName:"p",href:"https://rvlt.gg/emxNXv1x"},"rvlt.gg/emxNXv1x"),". You'll need a Revolt account to join. Revolt is an open-source Discord alternative, which you can read more about on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/revoltchat/legal/blob/master/About.md#communication-is-critical"},"this page"),"."),(0,i.kt)("h2",{id:"clone--push-instructions"},"Clone & Push Instructions"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Make sure to clone from & edit the")," ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," ",(0,i.kt)("strong",{parentName:"p"},"branch only, & push your final changes to the")," ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment")," ",(0,i.kt)("strong",{parentName:"p"},"branch according to the instructions below. Also be sure to use node 18 LTS, as later versions tend to be troublesome.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"don't forget to add unimportant files to the .gitignore before making any commits")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Clone from the ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," branch to start to make a contribution:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"% git clone git@github.com:av1-community-contributors/av1-wiki.github.io.git -b main\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Test your changes locally before making a commit:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"% yarn\n% npx docusaurus start\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Push changes to ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," branch:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'% git add .\n% git commit -m "Commit Message"\n% git push -u origin main\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Deploy to ",(0,i.kt)("inlineCode",{parentName:"li"},"deployment")," branch to make live on site:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"% GIT_USER=<username> DEPLOYMENT_BRANCH=deployment yarn deploy\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Docusaurus Info")),(0,i.kt)("h2",{id:"website"},"Website"),(0,i.kt)("p",null,"This website is built using ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus 2"),", a modern static website generator."),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ yarn\n")),(0,i.kt)("h3",{id:"local-development"},"Local Development"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ yarn start\n")),(0,i.kt)("p",null,"This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server."),(0,i.kt)("h3",{id:"build"},"Build"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ yarn build\n")),(0,i.kt)("p",null,"This command generates static content into the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," directory and can be served using any static contents hosting service."),(0,i.kt)("h3",{id:"deployment"},"Deployment"),(0,i.kt)("p",null,"See the initial instructions at the top."))}d.isMDXComponent=!0}}]);