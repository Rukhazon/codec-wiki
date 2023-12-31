"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[1557],{433:(e,i,s)=>{s.d(i,{Z:()=>o});s(7294);var n=s(6905);const t={tabItem:"tabItem_Ymn6"};var r=s(5893);function o(e){let{children:i,hidden:s,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)(t.tabItem,o),hidden:s,children:i})}},2808:(e,i,s)=>{s.d(i,{Z:()=>w});var n=s(7294),t=s(6905),r=s(3735),o=s(6550),a=s(613),l=s(4423),c=s(636),d=s(9200);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:i}=e;return!!i&&"object"==typeof i&&"value"in i}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:i,children:s}=e;return(0,n.useMemo)((()=>{const e=i??function(e){return h(e).map((e=>{let{props:{value:i,label:s,attributes:n,default:t}}=e;return{value:i,label:s,attributes:n,default:t}}))}(s);return function(e){const i=(0,c.l)(e,((e,i)=>e.value===i.value));if(i.length>0)throw new Error(`Docusaurus error: Duplicate values "${i.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[i,s])}function p(e){let{value:i,tabValues:s}=e;return s.some((e=>e.value===i))}function m(e){let{queryString:i=!1,groupId:s}=e;const t=(0,o.k6)(),r=function(e){let{queryString:i=!1,groupId:s}=e;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:i,groupId:s});return[(0,l._X)(r),(0,n.useCallback)((e=>{if(!r)return;const i=new URLSearchParams(t.location.search);i.set(r,e),t.replace({...t.location,search:i.toString()})}),[r,t])]}function g(e){const{defaultValue:i,queryString:s=!1,groupId:t}=e,r=u(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:i,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!p({value:i,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${i}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return i}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:i,tabValues:r}))),[c,h]=m({queryString:s,groupId:t}),[g,x]=function(e){let{groupId:i}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(i),[t,r]=(0,d.Nk)(s);return[t,(0,n.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:t}),f=(()=>{const e=c??g;return p({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),x(e)}),[h,x,r]),tabValues:r}}var x=s(5730);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(5893);function j(e){let{className:i,block:s,selectedValue:n,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const i=e.currentTarget,s=l.indexOf(i),t=a[s].value;t!==n&&(c(i),o(t))},h=e=>{let i=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;i=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;i=l[s]??l[l.length-1];break}}i?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":s},i),children:a.map((e=>{let{value:i,label:s,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===i?0:-1,"aria-selected":n===i,ref:e=>l.push(e),onKeyDown:h,onClick:d,...r,className:(0,t.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":n===i}),children:s??i},i)}))})}function y(e){let{lazy:i,children:s,selectedValue:t}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(i){const e=r.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,i)=>(0,n.cloneElement)(e,{key:i,hidden:e.props.value!==t})))})}function v(e){const i=g(e);return(0,b.jsxs)("div",{className:(0,t.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(j,{...e,...i}),(0,b.jsx)(y,{...e,...i})]})}function w(e){const i=(0,x.Z)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(i))}},5190:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var n=s(5893),t=s(1151),r=s(2808),o=s(433);const a={label:"JPEG-XL",sidebar_position:7},l="JPEG-XL",c={id:"images/JXL",title:"JPEG-XL",description:"JPEG-XL (JXL) is a compression format for images that was developed by the Joint Photographic Experts Group (JPEG) in 2020. It is designed to provide improved compression efficiency compared to the traditional JPEG format, while still maintaining image quality. JPEG-XL uses a combination of techniques such as perceptual color encoding, advanced entropy coding, and a new image prediction method to achieve its improved compression performance. It also has a lossless JPEG recompression mode, where an existing JPEG file can be turned into a JXL that can be decoded for a bit-for-bit exact replica of the original JPEG.",source:"@site/docs/images/JXL.mdx",sourceDirName:"images",slug:"/images/JXL",permalink:"/docs/images/JXL",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/images/JXL.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{label:"JPEG-XL",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"AVIF",permalink:"/docs/images/AVIF"},next:{title:"x264",permalink:"/docs/encoders/x264"}},d={},h=[{value:"Performance Checklist",id:"performance-checklist",level:2},{value:"Format Breakdown",id:"format-breakdown",level:2},{value:"Lossless Compression",id:"lossless-compression",level:3},{value:"Lossy Compression",id:"lossy-compression",level:3},{value:"Supported Bit Depth(s)",id:"supported-bit-depths",level:3},{value:"Progressive Decode",id:"progressive-decode",level:3},{value:"Lossless JPEG Re-compression",id:"lossless-jpeg-re-compression",level:3},{value:"Industry Support",id:"industry-support",level:3},{value:"Other Features",id:"other-features",level:3},{value:"Encoders",id:"encoders",level:2},{value:"libjxl",id:"libjxl",level:3},{value:"libjxl-tiny",id:"libjxl-tiny",level:3},{value:"Hydrium",id:"hydrium",level:3},{value:"zune-jpegxl",id:"zune-jpegxl",level:3}];function u(e){const i={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"jpeg-xl",children:"JPEG-XL"}),"\n",(0,n.jsxs)(i.p,{children:["JPEG-XL (JXL) is a compression format for images that was developed by the Joint Photographic Experts Group (JPEG) in 2020. It is designed to provide improved compression efficiency compared to the traditional ",(0,n.jsx)(i.a,{href:"/docs/images/JPEG",children:"JPEG"})," format, while still maintaining image quality. JPEG-XL uses a combination of techniques such as perceptual color encoding, advanced entropy coding, and a new image prediction method to achieve its improved compression performance. It also has a lossless JPEG recompression mode, where an existing JPEG file can be turned into a JXL that can be decoded for a bit-for-bit exact replica of the original JPEG."]}),"\n",(0,n.jsx)(i.h2,{id:"performance-checklist",children:"Performance Checklist"}),"\n",(0,n.jsxs)(i.p,{children:["Lossless? ",(0,n.jsx)(i.em,{children:"Yes"})]}),"\n",(0,n.jsxs)(i.p,{children:["Lossy? ",(0,n.jsx)(i.em,{children:"Yes"})]}),"\n",(0,n.jsxs)(i.p,{children:["Supported Bit Depths:\n",(0,n.jsx)(i.em,{children:"Up to 32 BPC"})]}),"\n",(0,n.jsxs)(i.p,{children:["HDR/Wide Gamut? ",(0,n.jsx)(i.em,{children:"Yes"})]}),"\n",(0,n.jsxs)(i.p,{children:["Animation? ",(0,n.jsx)(i.em,{children:"Yes"})]}),"\n",(0,n.jsxs)(i.p,{children:["Transparency? ",(0,n.jsx)(i.em,{children:"Yes"})]}),"\n",(0,n.jsxs)(i.p,{children:["Progressive Decode? ",(0,n.jsx)(i.em,{children:"Yes"})]}),"\n",(0,n.jsxs)(i.p,{children:["Royalty Free? ",(0,n.jsx)(i.em,{children:"Yes"})]}),"\n",(0,n.jsx)(i.h2,{id:"format-breakdown",children:"Format Breakdown"}),"\n",(0,n.jsxs)(i.p,{children:["JPEG-XL has a number of standout features that make it an appealing image codec to work with for many use cases. From the ",(0,n.jsx)(i.a,{href:"https://jpegxl.info",children:"JPEG-XL Info page"}),", JXL has the following features:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Best lossless image compression"}),": It offers about 35% smaller file sizes than PNG (50% smaller for HDR)."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"High-fidelity lossy image compression"}),": JPEG XL provides about 60% smaller file sizes than JPEG for the same visual quality."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Progressive decoding"}),": This allows an image to be displayed in lower quality before the entire file has been downloaded, improving user experience on slow connections."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Lossless JPEG transcoding"}),": JPEG images can be converted to JPEG XL without any mathematical loss, and the resulting file is about 20% smaller."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Designed for both photographic and synthetic images"}),": JPEG XL works well with a wide range of image types, including photos, graphics, and illustrations."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Fast software encoding and decoding"}),": The codec is designed to be efficient and fast, enabling quick image loading and saving."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Full support for wide gamut and HDR"}),": JPEG XL supports a wide range of colors and high dynamic range, making it suitable for modern displays."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Perceptually optimizing reference encoder"}),": The encoder is designed to optimize image quality based on how humans perceive images."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"lossless-compression",children:"Lossless Compression"}),"\n",(0,n.jsx)(i.p,{children:"JPEG-XL offers excellent lossless compression capabilities. While lossless WebP was an improvement over PNG for 8-bit lossless image encoding, JPEG-XL manages not only to outdo lossless WebP in encoding efficiency but also be more versatile for bit depths greater than 8-bit (a category PNG previously dominated). 16-bit lossless imagery, especially HDR images that are becoming more popular & rarely utilize 8-bit color depth, are where JPEG-XL shines, and it is the only codec to compete with PNG in that regard while providing better coding efficiency."}),"\n",(0,n.jsxs)(i.p,{children:["Example: JPEG-XL compresses ",(0,n.jsx)(i.a,{href:"https://imgsaver.com/images/2023/10/03/16bit.png",children:"this 16-bit AdobeRGB PNG"})," better than PNG. Using: ",(0,n.jsx)(i.code,{children:"cjxl 16bit.png 16bit.jxl -d 0.0 -e 9 -I 100 -g 3 -E 11"})]}),"\n",(0,n.jsxs)(i.p,{children:["16-bit PNG: ",(0,n.jsx)(i.code,{children:"1533373"})," bytes.\n16-bit JXL: ",(0,n.jsx)(i.code,{children:"1211029"})," bytes."]}),"\n",(0,n.jsx)(i.h3,{id:"lossy-compression",children:"Lossy Compression"}),"\n",(0,n.jsx)(i.p,{children:"JPEG-XL is also adept at lossy compression, especially at quality levels that we as humans care about. It promises to be around 60% better than JPEG. While video-based codecs like AVIF can be competitive when given lots of CPU time, JPEG-XL is both fast and efficient for medium to high fidelity photographic imaging."}),"\n",(0,n.jsx)(i.h3,{id:"supported-bit-depths",children:"Supported Bit Depth(s)"}),"\n",(0,n.jsx)(i.p,{children:"JPEG-XL supports up to 32 bits per channel of bit depth, making it future proof for the increasingly popular HDR photos coming out of smartphones. There is essentially zero downside to encoding high bit depth with JXL relative to the resulting encode's size. Considering many smartphones take HDR photos now, JXL offers a compelling pipeline for these photos to make their way to the Web in the future especially as companies like Adobe & Apple have already embraced the new codec."}),"\n",(0,n.jsx)(i.h3,{id:"progressive-decode",children:"Progressive Decode"}),"\n",(0,n.jsx)(i.p,{children:"JPEG-XL provides actual progressive decode support that you can experiment with here on a supported browser like Safari, Waterfox, Thorium, Mercury, or any browser on iOS."}),"\n",(0,n.jsx)(i.p,{children:"Progressive decode is a feature only JPEG is able to offer a real implementation of, rendering low frequency transform coefficients before the rest of the image arrives to allow an image to display before the entire thing has been sent over the network. Blurhashes do not replace this technology, but rather compliment it, allowing another layer of progressive decode that can be used even before the image begins to load progressively. This is an important feature to improve the user experience on websites featuring large images, or on any website if your Internet connection isn't strong."}),"\n",(0,n.jsx)(i.h3,{id:"lossless-jpeg-re-compression",children:"Lossless JPEG Re-compression"}),"\n",(0,n.jsx)(i.p,{children:"An incredibly unique JPEG-XL feature is lossless JPEG re-compression, or the ability to take a JPEG input and provide an output with a smaller filesize (on average, 20% smaller) that is pixel-for-pixel identical. This is why companies like Meta have endorsed JPEG-XL, as it offers a path forward for the existing JPEGs on the Internet."}),"\n",(0,n.jsx)(i.h3,{id:"industry-support",children:"Industry Support"}),"\n",(0,n.jsx)(i.p,{children:"From the JPEG-XL Wikipedia page:"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"Besides Cloudinary and Google originally, throughout JPEG XL's preliminary implementation in web browsers, various representatives of well-known industry brand names have publicly voiced support for JPEG XL as their preferred choice, including Facebook, Adobe, Intel and the Video Electronics Standards Association, The Guardian, Flickr and SmugMug, Shopify, the Krita Foundation, and Serif Ltd."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Apple also features ecosystem-wide JPEG-XL support as of iOS 17 & macOS Sonoma."}),"\n",(0,n.jsx)(i.h3,{id:"other-features",children:"Other Features"}),"\n",(0,n.jsx)(i.p,{children:"JPEG-XL has the potential to replace popular formats like TIFF for authoring workflows due to its broad feature set. From the JXL Wikipedia, some additional features include:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Image dimensions of over a billion (2^30-1) pixels on each side."}),"\n",(0,n.jsx)(i.li,{children:"Up to 4099 channels, including support for alpha transparency"}),"\n",(0,n.jsx)(i.li,{children:"There can be multiple frames with zero duration, allowing support for layers in graphics software"}),"\n",(0,n.jsx)(i.li,{children:"Animation support, allowing JXL to rival GIF"}),"\n",(0,n.jsx)(i.li,{children:"Images can be stored in tiles to reduce the time needed to decode them."}),"\n",(0,n.jsx)(i.li,{children:"Graceful quality degradation across a large range of bitrates means quality loss isn't as abrupt as with older formats."}),"\n",(0,n.jsx)(i.li,{children:"Perceptually optimized reference encoder which uses a perceptual color space, adaptive quantization, and conservative default settings."}),"\n",(0,n.jsx)(i.li,{children:"Support for wide color gamut and HDR"}),"\n",(0,n.jsx)(i.li,{children:"Efficient encoding and decoding without requiring specialized hardware: JPEG XL is about as fast to encode and decode as old JPEG using libjpeg-turbo and an order of magnitude faster to encode and decode compared to HEIC with x265. It is also parallelizable."}),"\n",(0,n.jsx)(i.li,{children:"Royalty-free format with an open-source reference implementation available on GitHub."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"encoders",children:"Encoders"}),"\n",(0,n.jsx)(i.p,{children:"JPEG-XL has a couple of noteworthy encoders currently available to work with. Because JPEG-XL is so new, most encoders aren't yet intelligent enough to take advantage of the whole format yet. Here's a quote from Jon Sneyers in the JPEG-XL discord that sums it up nicely:"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"Encode side: 80% or so of the coding tools are used in one way or another by the encoder (the 20% is splines and super large VarDCT blocks, and also the things that are not used by default without using special experimental options, such as delta palette and noise). But the coding tools that are used, are typically used in a specific, limited way that doesn't come anywhere close to exhausting the bitstream expressivity."}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Sneyers is talking about libjxl's ",(0,n.jsx)(i.code,{children:"cjxl"})," encoder, which will be discussed further below."]}),"\n",(0,n.jsx)(i.h3,{id:"libjxl",children:"libjxl"}),"\n",(0,n.jsxs)(i.p,{children:["The reference ",(0,n.jsx)(i.a,{href:"https://github.com/libjxl/libjxl",children:"libjxl"})," implementation has the capability to both decode and encode JPEG-XL image files. Both are discussed below."]}),"\n",(0,n.jsxs)(r.Z,{children:[(0,n.jsxs)(o.Z,{value:"enc",label:"Encoding",default:!0,children:[(0,n.jsxs)(i.p,{children:["libjxl's encoder ",(0,n.jsx)(i.code,{children:"cjxl"})," has more options to play around with. It takes a few primary arguments, distance (",(0,n.jsx)(i.code,{children:"-d"}),"), quality (",(0,n.jsx)(i.code,{children:"-q"}),"), and effort (",(0,n.jsx)(i.code,{children:"-e"}),")."]}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Distance and quality"})}),(0,n.jsxs)(i.p,{children:["Distance and quality are two ways of specifying ",(0,n.jsx)(i.em,{children:"how much loss"})," you are willing to tolerate, and as such, they are mutually exclusive, as they pull the same levers under the hood."]}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Distance is designed to map to how 'close' one must be to the source to notice any loss. It is represented as a scale between 0.0 & 25.0. 0.0 is ",(0,n.jsx)(i.strong,{children:"mathematically lossless"}),", every pixel will have the exact same value as the source. 1.0 is designed to be ",(0,n.jsx)(i.strong,{children:"visually lossless"}),", look the same at a normal viewing distance, and higher values have more loss."]}),"\n",(0,n.jsxs)(i.li,{children:["Quality is designed to roughly map to ",(0,n.jsx)(i.a,{href:"/docs/images/JPEG",children:"JPEG"}),"'s quality argument. A range 0-100, where 100 is ",(0,n.jsx)(i.strong,{children:"mathematically lossless"}),", 90 is intended to be ",(0,n.jsx)(i.strong,{children:"visually lossless"}),", and 0 is almost unrecognizable as the original image."]}),"\n"]}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Effort"})}),(0,n.jsxs)(i.p,{children:["Effort is similar to ",(0,n.jsx)(i.code,{children:"cpu-used"})," in video encoding. It specifies the amount of effort the encoder will make in order to get the smallest file size it can. It takes the form of a range 1-9, where higher numbers will spend more resources to get diminishing returns in terms of smaller size, while lower values do the opposite, leaving file size on the table for faster encoding."]}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",metastring:'title="Encoding with effort 9 and distance 1.0"',children:"cjxl -e 9 -d 1.0 example.png example.jxl\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",metastring:'title="This, by default uses lossless JPEG compression."',children:"cjxl example.jpg example.jxl\n"})})]}),(0,n.jsxs)(o.Z,{value:"dec",label:"Decoding",children:[(0,n.jsxs)(i.p,{children:["Decoding a ",(0,n.jsx)(i.code,{children:".jxl"})," image is straightforward with libjxl's decoder, ",(0,n.jsx)(i.code,{children:"djxl"}),":"]}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"djxl example.jxl example.png\n"})}),(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"djxl"})," can decode to pixels via pipes, png, apng for animated jxl, jpg, ppm, and pfm."]}),(0,n.jsxs)(i.p,{children:["By default, if the ",(0,n.jsx)(i.code,{children:".jxl"})," file was encoded with lossless jpeg recompression, ",(0,n.jsx)(i.code,{children:"djxl"})," will rebuild the exact jpeg file that was originally compressed. To avoid this, and create a new jpeg file:"]}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"djxl -j example.jxl example.jpg\n"})}),(0,n.jsx)(i.p,{children:(0,n.jsxs)(i.strong,{children:["Keep in mind this is now a lossy process as ",(0,n.jsx)(i.code,{children:"djxl"})," will decode to pixels, then encode a new ",(0,n.jsx)(i.code,{children:".jpg"})," with those pixels."]})})]}),(0,n.jsxs)(o.Z,{value:"build",label:"Building",children:[(0,n.jsxs)(i.p,{children:["A full build guide is provided in the ",(0,n.jsx)(i.a,{href:"https://github.com/libjxl/libjxl/blob/main/BUILDING.md",children:"libjxl build instructions"})," in the GitHub repo. This guide is simplified, and is only focused on building a working efficient encoder & decoder."]}),(0,n.jsx)(i.p,{children:"These instructions should work for macOS and Linux, although macOS support isn't guaranteed."}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",metastring:'title="1. Clone the repo"',children:"git clone https://github.com/libjxl/libjxl.git --recursive --shallow-submodules\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",metastring:'title="2. Install dependencies. May have to run these commands with root"',children:"apt install cmake pkg-config libbrotli-dev clang # Debian Linux\npacman -Syu cmake pkgconf brotli clang # Arch Linux\nbrew install cmake pkg-config brotli # macOS\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",metastring:'title="3. Set CC & CXX variables before building (Recommended)"',children:"export CC=clang CXX=clang++\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",metastring:'title="4. cjxl & djxl will be available in the build/tools directory."',children:'cd libjxl && mkdir build && cd build\ncmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-O3 -march=native" -DCMAKE_C_FLAGS="-O3 -march=native" -DBUILD_TESTING=OFF -DJPEGXL_WARNINGS_AS_ERRORS=OFF -DJPEGXL_ENABLE_SJPEG=OFF ..\ncmake --build . -- -j$(nproc)\n'})}),(0,n.jsxs)(i.p,{children:["This will build ",(0,n.jsx)(i.code,{children:"cjxl"})," and ",(0,n.jsx)(i.code,{children:"djxl"})," with O3 optimization for your CPU architecture on Linux or macOS. Again, be aware that macOS support is not a priority. Via the libjxl OS X build guide:"]}),(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:'OSX builds have "best effort" support, i.e. build might not work at all, some tests may fail and some sub-projects are excluded from build.'}),"\n"]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"libjxl-tiny",children:"libjxl-tiny"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://github.com/libjxl/libjxl-tiny",children:"libjxl-tiny"})," contains a simpler encoder implementation of JPEG XL, aimed at photographic images without an alpha channel. The goal is to guide hardware implementations of the encoder where support for the full set of encoding tools is not feasible. The color management is outside the scope of this library, the encoder input is given as a portable float map (PFM) in the linear sRGB colorspace, where individual sample values can be outside the [0.0, 1.0] range for out-of-gammut colors. For more details, see the ",(0,n.jsx)(i.a,{href:"https://github.com/libjxl/libjxl-tiny/blob/main/doc/coding_tools.md",children:"overview of the coding tools"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"The last commit was ten months ago, so it is uncertain whether libjxl-tiny could be considered active."}),"\n",(0,n.jsx)(i.h3,{id:"hydrium",children:"Hydrium"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://github.com/Traneptora/hydrium",children:"Hydrium"})," is a fast, ultra-low-memory, streaming JPEG XL encoder written in portable C. It is maintained by Traneptora."]}),"\n",(0,n.jsx)(i.h3,{id:"zune-jpegxl",children:"zune-jpegxl"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://github.com/etemesi254/zune-image/tree/dev/crates/zune-jpegxl",children:"zune-jpegxl"})," is a simple, fast and fully safe modular JXL encoder written in Rust. It is maintained by etemesi254."]}),"\n",(0,n.jsx)(i.p,{children:"zune-jpegxl has the following features:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Lossless encoding"}),"\n",(0,n.jsx)(i.li,{children:"8 bit and 16 bit support"}),"\n",(0,n.jsx)(i.li,{children:"Grayscale and RGBA encoding"}),"\n",(0,n.jsx)(i.li,{children:"Threading capabilities"}),"\n"]}),"\n","\n",(0,n.jsx)(i.p,{children:"Sources:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/JPEG_XL",children:"JXL Wikipedia"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://jpegxl.info/why-jxl.html",children:"JPEGXL.info: Why JXL"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://webkit.org/blog/14205/news-from-wwdc23-webkit-features-in-safari-17-beta/#images",children:"Apple JXL Announcement"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://cloudinary.com/blog/jpeg-xl-how-it-started-how-its-going",children:"JPEG XL: How It Started, How It's Going"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://cloudinary.com/blog/the-case-for-jpeg-xl",children:"The Case for JPEG XL"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://cloudinary.com/blog/time_for_next_gen_codecs_to_dethrone_jpeg",children:"Time for Next-Gen Codecs to Dethrone JPEG"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://giannirosato.com/blog/post/image-comparison/",children:"Image Codec Comparison"})}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1151:(e,i,s)=>{s.d(i,{Z:()=>a,a:()=>o});var n=s(7294);const t={},r=n.createContext(t);function o(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);