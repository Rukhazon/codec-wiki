"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[9975],{2138:(e,o,d)=>{d.r(o),d.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>s});var i=d(5893),n=d(1151);const t={title:"Mediacodec",sidebar_position:5},r="Mediacodec",a={id:"encoders_hw/mediacodec",title:"Mediacodec",description:"The Android's MediaCodec framework is a part of Android's multimedia framework that provides access to low-level media encoder & decoder components. It is similar to VideoToolbox on Apple devices. Hardware acceleration with MediaCodec is used for processing audio, video, and compressed data.",source:"@site/docs/encoders_hw/mediacodec.mdx",sourceDirName:"encoders_hw",slug:"/encoders_hw/mediacodec",permalink:"/docs/encoders_hw/mediacodec",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/encoders_hw/mediacodec.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Mediacodec",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"VideoToolbox",permalink:"/docs/encoders_hw/videotoolbox"},next:{title:"SRT",permalink:"/docs/subtitles/SRT"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"FFmpeg",id:"ffmpeg",level:3}];function l(e){const o={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"mediacodec",children:"Mediacodec"}),"\n",(0,i.jsxs)(o.p,{children:["The Android's MediaCodec framework is a part of Android's multimedia framework that provides access to low-level media encoder & decoder components. It is similar to ",(0,i.jsx)(o.a,{href:"/docs/encoders_hw/videotoolbox",children:"VideoToolbox"})," on Apple devices. Hardware acceleration with MediaCodec is used for processing audio, video, and compressed data."]}),"\n",(0,i.jsxs)(o.p,{children:["One of the key features of the MediaCodec framework is its support for automatic media transcoding within the operating system. Introduced in Android 12, media transcoding features of the operating system allow devices to use more modern, storage-efficient media formats for video capture while maintaining compatibility with apps. For devices with compatible media transcoding enabled, Android can automatically convert videos recorded in formats such as ",(0,i.jsx)(o.a,{href:"/docs/video/HEVC",children:"H.265"})," when the videos are opened by an app that doesn't support the format. This allows apps to function even when videos are captured in newer formats on the device."]}),"\n",(0,i.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(o.p,{children:["In order to view your device's supported hardware and software encoders exposed by the MediaCodec framework, it is advised to download the open source ",(0,i.jsx)(o.a,{href:"https://play.google.com/store/apps/details?id=com.parseus.codecinfo",children:"Codec Info"})," application."]}),"\n",(0,i.jsxs)(o.p,{children:["Once you know how to properly interact with your device's hardware encoders, ",(0,i.jsx)(o.a,{href:"/docs/utilities/ffmpeg",children:"FFmpeg"})," will help you transcode videos easily from the command line."]}),"\n",(0,i.jsx)(o.h3,{id:"ffmpeg",children:"FFmpeg"}),"\n",(0,i.jsxs)(o.p,{children:["Testing for this piece was done on the Google Pixel 8, which featurs the Tensor G3 SoC. It is Exynos-based, so ",(0,i.jsx)(o.a,{href:"/docs/video/AVC",children:"H.264"}),", H.265 (HEVC), and ",(0,i.jsx)(o.a,{href:"/docs/video/VP9",children:"VP9"})," hardware acceleration for encoding are provided by the Exynos media block. AV1 encoding and decoding are available on the Tensor G3 provided by a custom Google multimedia block."]}),"\n",(0,i.jsx)(o.p,{children:"The Exynos's hardware implementation for encoding H.264 and H.265 does not support CQ (Constant Quality) encoding, so a target bitrate must be provided for either CBR (Constant Bitrate) or VBR (Variable Bitrate) encoding. Google's AV1 implementation is in the same situation."}),"\n",(0,i.jsx)(o.p,{children:"Some example MediaCodec encoding commands with FFmpeg:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",metastring:'title="H.264 encoding (VBR, target bitrate 4000K, 250-frame GOP size)"',children:"ffmpeg -i input.mkv -c:v h264_mediacodec -codec_name c2.exynos.h264.encoder -bitrate_mode 1 -b:v 4000K -g 250 output.mp4\n"})}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",metastring:'title="H.265 encoding (VBR, target bitrate 4000K, 250-frame GOP size)"',children:"ffmpeg -i input.mkv -c:v hevc_mediacodec -codec_name c2.exynos.hevc.encoder -bitrate_mode 1 -b:v 4000K -g 250 output.mp4\n"})}),"\n",(0,i.jsx)(o.p,{children:"VP9 encoding produces video that is severely distorted relative to the bitrate, and AV1 encoding produces broken files without metadata."}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",metastring:'title="VP9 encoding (VBR, target bitrate 9000K, 250-frame GOP size)"',children:"ffmpeg -i input.mkv -c:v vp9_mediacodec -codec_name c2.exynos.vp9.encoder -bitrate_mode 1 -b:v 9000K -g 250 output.mkv\n"})}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",metastring:'title="AV1 encoding (VBR, target bitrate 8000K, 250-frame GOP size)"',children:"ffmpeg -i input.mkv -c:v av1_mediacodec -codec_name c2.google.av1.encoder -bitrate_mode 1 -b:v 8000K -g 250 output.mp4\n"})}),"\n",(0,i.jsxs)(o.p,{children:["Just run ",(0,i.jsx)(o.code,{children:"ffmpeg -help encoder=hevc_mediacodec"})," or ",(0,i.jsx)(o.code,{children:"ffmpeg -help encoder=h264_mediacodec"})," for more info on how to use your MediaCodec encoders. You can choose a value for ",(0,i.jsx)(o.code,{children:"-codec_name"})," based on what is shown in the Codec Info app."]}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.em,{children:"Sources"}),"\n(1) MediaCodec | Android Developers. ",(0,i.jsx)(o.a,{href:"https://developer.android.com/reference/android/media/MediaCodec",children:"https://developer.android.com/reference/android/media/MediaCodec"}),".\n(2) Media | Android Open Source Project. ",(0,i.jsx)(o.a,{href:"https://source.android.com/docs/core/media",children:"https://source.android.com/docs/core/media"}),"."]})]})}function m(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,o,d)=>{d.d(o,{Z:()=>a,a:()=>r});var i=d(7294);const n={},t=i.createContext(n);function r(e){const o=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(t.Provider,{value:o},e.children)}}}]);