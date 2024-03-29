"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[9305],{5702:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=t(4848),r=t(8453),i=t(1470),s=t(9365);const l={title:"VVenC",sidebar_position:12},o="VVenC",c={id:"encoders/VVenC",title:"VVenC",description:'<img src="https://autumn.revolt.chat/attachments/wU4lo6SU-hRjZSVeqd9vCOeAskthYXmiWHaXUTjyTa/VVenC_Spam.webp"',source:"@site/docs/encoders/VVenC.mdx",sourceDirName:"encoders",slug:"/encoders/VVenC",permalink:"/docs/encoders/VVenC",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/encoders/VVenC.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"VVenC",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Kvazaar",permalink:"/docs/encoders/Kvazaar"},next:{title:"uvg266",permalink:"/docs/encoders/uvg266"}},u={},d=[{value:"Installation",id:"installation",level:2},{value:"FFmpeg Integration",id:"ffmpeg-integration",level:3},{value:"Usage",id:"usage",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"vvenc",children:"VVenC"}),"\n",(0,a.jsxs)("picture",{children:[(0,a.jsx)("source",{srcset:"https://raw.githubusercontent.com/av1-community-contributors/images/main/VVenC_Spam.avif?token=GHSAT0AAAAAACEZPDXI3OYO3Z4Q7LU3Z52EZHY7FMA",type:"image/avif"}),(0,a.jsx)("img",{src:"https://autumn.revolt.chat/attachments/wU4lo6SU-hRjZSVeqd9vCOeAskthYXmiWHaXUTjyTa/VVenC_Spam.webp",alt:"vvencapp spamming the terminal output with progress per-picture-order-count cause god knows why",width:"XX",height:"YY",loading:"lazy"})]}),"\n",(0,a.jsxs)(n.p,{children:["VVenC is an open source command line application for encoding ",(0,a.jsx)(n.a,{href:"/docs/video/VVC",children:"H.266/VVC"})," written in C++ and developed by Fraunhofer Heinrich-Hertz-Institute (HHI)."]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsxs)(s.A,{value:"unixlike",label:"Linux & macOS",children:[(0,a.jsxs)(n.p,{children:["Arch Linux users may check the AUR for the ",(0,a.jsx)(n.code,{children:"vvenc"})," and ",(0,a.jsx)(n.code,{children:"vvenc-git"})," packages."]}),(0,a.jsx)(n.p,{children:"Compilation from source as shown belowe requires CMake."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/fraunhoferhhi/vvenc.git\r\ncd vvenc\r\nmkdir build\r\ncd build\r\ncmake .. -DCMAKE_BUILD_TYPE=Release\r\ncmake --build .\n"})}),(0,a.jsxs)(n.p,{children:["Binaries will be available in ",(0,a.jsx)(n.code,{children:"bin/release-static/"})]}),(0,a.jsx)(n.h3,{id:"ffmpeg-integration",children:"FFmpeg Integration"}),(0,a.jsxs)(n.p,{children:["Although not officially supported, you can compile your own FFmpeg binary with ",(0,a.jsx)(n.code,{children:"libvvenc"})," and ",(0,a.jsx)(n.code,{children:"libvvdec"}),". A comprehensive tutorial can be found in the ",(0,a.jsx)(n.a,{href:"https://github.com/fraunhoferhhi/vvenc/wiki/FFmpeg-Integration",children:"official VVenC wiki"})," (",(0,a.jsx)(n.a,{href:"https://web.archive.org/web/20230509115800/https://github.com/fraunhoferhhi/vvenc/wiki/FFmpeg-Integration",children:"archive"}),")."]}),(0,a.jsxs)(n.p,{children:["The official guide is rather verbose, as FFmpeg (at the time of writing, 19 Feb 2024) does not support vvenc/vvdec officially. Below is an easy build script which uses an FFmpeg fork called FFmpeg-VVC. It is maintained by Marten Martin Eesmaa, who also maintains the ",(0,a.jsx)(n.a,{href:"https://github.com/MartinEesmaa/VVCEasy",children:"VVCEasy"})," GitHub repo featuring guides and more general information about working with VVC."]}),(0,a.jsxs)(n.p,{children:["Please be aware the script below produces a build of FFmpeg licensed under ",(0,a.jsx)(n.em,{children:"LGPL version 2.1 or later"}),". It is legal to distribute the resulting binary, given you do not interfere with the flags provided below."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Build FFmpeg with libvvdec, libvvenc, and fdk-aac"',children:'brew install libxml2 ffmpeg nasm # macOS-only; if on Linux, use your native package manager. Package names may differ.\r\ngit clone https://github.com/fraunhoferhhi/vvenc\r\ngit clone https://github.com/fraunhoferhhi/vvdec\r\ngit clone https://github.com/mstorsjo/fdk-aac\r\ncd vvenc && mkdir build && cd build\r\ncmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr/local ..\r\nsudo cmake --build . --target install -j $nproc\r\ncd ../../\r\ncd vvdec && mkdir build && cd build\r\ncmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr/local ..\r\nsudo cmake --build . --target install -j $nproc\r\ncd ../../\r\ncd fdk-aac && ./autogen.sh && ./configure\r\nmake -j\r\nsudo make install\r\ncd ../\r\ngit clone --depth=1 https://github.com/MartinEesmaa/FFmpeg-VVC\r\ncd FFmpeg-VVC\r\nexport PKG_CONFIG_PATH=/usr/local/lib/pkgconfig\r\n./configure --enable-libfdk-aac --enable-libvvenc --enable-libvvdec --enable-static --enable-pic --enable-libxml2 --pkg-config-flags="--static" --enable-sdl2\r\nmake -j\n'})}),(0,a.jsx)(n.p,{children:"Binaries will be available in the final directory you end up in after the build process is complete."})]}),(0,a.jsx)(s.A,{value:"windows",label:"Windows",children:(0,a.jsxs)(n.p,{children:["To be filled. If you believe you can help, see our ",(0,a.jsx)(n.a,{href:"/docs/contribution-guide",children:"Contribution Guide"}),"."]})})]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(n.p,{children:["There are two encoders, the simple encoder (",(0,a.jsx)(n.code,{children:"vvencapp"}),") and the full-featured expert mode encoder (",(0,a.jsx)(n.code,{children:"vvencFFapp"}),") which is based on the ",(0,a.jsx)(n.a,{href:"/docs/encoders/VTM",children:"VTM"})," configuration scheme. VVenC used to only accept YUV files input until support was added for Y4M."]}),"\n",(0,a.jsx)(n.p,{children:"Here are some examples:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Standard VVenC input"',children:"vvencapp -i input.y4m --qp 20 -o output.266\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Preset slow + qpa (already default) + YUV420P10"',children:"vvencapp -i input.y4m --preset slow --qpa on --qp 20 -c yuv420_10 -o output.266\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Piping with FFmpeg"',children:"ffmpeg -hide_banner -loglevel error -i input.mkv -pix_fmt yuv420p10le -strict -1 -f yuv4mpegpipe - | vvencapp -i - --y4m --preset medium --qpa on --qp 20 -c yuv420_10 -o output.266\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"Limitations",type:"warning",children:(0,a.jsx)(n.p,{children:"VVenC currently does not support input resolutions below 540p. In addition, VVenC usually produces bitstreams that don't decode correctly when using FFmpeg's recently implemented native ffvvc decoder (this is true as of the time of writing on 19 Feb 2024). For proper decoding, build FFmpeg with libvvdec."})}),"\n",(0,a.jsx)(n.admonition,{title:"QPA",type:"info",children:(0,a.jsxs)(n.p,{children:['VVenC by default operates with QP (Quantization Parameter), which is basically fixed quality. For "CRF-like" rate control, QPA is enabled by default\r\nQPA (provided by --qpa) enables perceptually motivated QP adaptation based on ',(0,a.jsx)(n.a,{href:"/docs/metrics/XPSNR",children:"XPSNR"}),". QPA modifies the QP value on the fly spatially and temporally as well as enabling temporal RDO."]})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var a=t(8215);const r={tabItem:"tabItem_Ymn6"};var i=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(6540),r=t(8215),i=t(3104),s=t(6347),l=t(205),o=t(7485),c=t(1682),u=t(9466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,d]=m({queryString:t,groupId:r}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),v=(()=>{const e=c??b;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),r=l[t].value;r!==a&&(c(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function V(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(V,{...e,...n})]})}function w(e){const n=(0,f.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var a=t(6540);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);