"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[8320],{1705:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=i(4848),s=i(8453);const o={label:"HM",sidebar_position:13},r="HM",c={id:"encoders/HM",title:"HM",description:"The content in this entry may not be entirely accurate, & is pending further review to assess the quality of the information.",source:"@site/docs/encoders/HM.mdx",sourceDirName:"encoders",slug:"/encoders/HM",permalink:"/docs/encoders/HM",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/encoders/HM.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{label:"HM",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"AVM",permalink:"/docs/encoders/AVM"},next:{title:"JM",permalink:"/docs/encoders/JM"}},a={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"hm",children:"HM"}),"\n",(0,t.jsx)(n.admonition,{title:"Pending Review",type:"caution",children:(0,t.jsx)(n.p,{children:"The content in this entry may not be entirely accurate, & is pending further review to assess the quality of the information."})}),"\n",(0,t.jsxs)(n.p,{children:["HM is the original ",(0,t.jsx)(n.a,{href:"/docs/video/HEVC",children:"H.265"})," reference encoder, predating alternatives like ",(0,t.jsx)(n.a,{href:"/docs/encoders/x265",children:"x265"}),". In the modern day, it joins other MPEG reference encoders such as ",(0,t.jsx)(n.a,{href:"/docs/encoders/JM",children:"JM"})," & ",(0,t.jsx)(n.a,{href:"/docs/encoders/VTM",children:"VTM"})," in their reputations for being highly niche offerings that are used rarely due to their usage complexity & speed disadvantages. x264 is more efficient than JM."]}),"\n",(0,t.jsxs)(n.p,{children:["HM is capable of producing higher quality streams than highly tuned x265, even at excruciatingly slow speeds. This is only a theoretical advantage, though, as HM is incapable of placing keyframes automatically with scene detection & would need a chunking too reminiscent of ",(0,t.jsx)(n.a,{href:"/docs/utilities/av1an",children:"Av1an"})," to do this. For videos containing few enough frames where keyframe placement isn't a concern, HM is better in practice than x265 at the expense of a massive dropoff in speed. HM doesn't have any threading capabilities & is much slower than even x265 placebo."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"These build instructions are valid for Linux & macOS."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://vcgit.hhi.fraunhofer.de/jvet/HM\ncd HM/\nmkdir build && cd build\ncmake .. -DCMAKE_BUILD_TYPE=Release\nmake -j$(nproc)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The binary ",(0,t.jsx)(n.code,{children:"TAppEncoderStatic"})," or ",(0,t.jsx)(n.code,{children:"TAppEncoder"})," can be found within the cloned directories, & can be copied to ",(0,t.jsx)(n.code,{children:"/usr/local/bin"})," for encoding. Decoding & other functions of the reference codec implementation aren't covered in this entry."]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["Here is a sample command: ",(0,t.jsx)(n.code,{children:"TAppEncoderStatic -i input.yuv -b out.265 -c ~/HM/cfg/encoder_randomaccess_main10.cfg -wdt 1280 -hgt 720 -fr 50 -f 500 -q 27 -xPS 0"})]}),"\n",(0,t.jsx)(n.p,{children:"Make sure only to use only YUV input when encoding with HM. Each parameter does the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"-i input.yuv -b out.265"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Specifies a raw YUV input file & an output raw h265 bitstream. To mux into an MP4 container, it is recommended that you use ",(0,t.jsx)(n.a,{href:"/docs/utilities/mp4box",children:"mp4box"})," instead of muxing with ",(0,t.jsx)(n.a,{href:"/docs/utilities/ffmpeg",children:"FFmpeg"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"-c [path/to/config]"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Specifies the desired path to your HM configuration file. This makes it easier to encode without having to manually specify a plethora of settings."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"-wdt 1280 -hgt 720"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sets the input & output width & height."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"-fr 50 -f 500"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sets the framerate (FPS) & the number of frames to encode. In this case, we are encoding 500 frames of a video that is to be played back at 50fps."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"-q 27"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sets a quality target for the encoder."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"-xPS 0"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Zero clue what this does. If someone has an idea, please contribute!"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var t=i(6540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);