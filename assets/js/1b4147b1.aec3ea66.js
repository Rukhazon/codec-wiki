"use strict";(self.webpackChunkav1_wiki=self.webpackChunkav1_wiki||[]).push([[5715],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var a=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,o=function(e,t){if(null==e)return{};var i,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(i),h=o,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||r;return i?a.createElement(m,n(n({ref:t},p),{},{components:i})):a.createElement(m,n({ref:t},p))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,n=new Array(r);n[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,n[1]=s;for(var u=2;u<r;u++)n[u]=i[u];return a.createElement.apply(null,n)}return a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},6506:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=i(7462),o=(i(7294),i(3905));const r={label:"Aviator",sidebar_position:1},n="Aviator",s={unversionedId:"utilities/Aviator",id:"utilities/Aviator",title:"Aviator",description:"Aviator is a GUI application designed for encoding AV1 video & Opus audio with SVT-AV1, libopus, & ffmpeg on Linux systems in a user-friendly, intuitive manner. Aviator's primary focus is ease-of-use, while still striving to offer optimal quality per bit through smart defaults implemented via its SVT-AV1 encoder.",source:"@site/docs/utilities/Aviator.md",sourceDirName:"utilities",slug:"/utilities/Aviator",permalink:"/docs/utilities/Aviator",draft:!1,editUrl:"https://github.com/av1-community-contributors/av1-wiki.github.io/tree/main/docs/utilities/Aviator.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{label:"Aviator",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Dehalo",permalink:"/docs/filtering/dehalo"},next:{title:"Av1an",permalink:"/docs/utilities/av1an"}},l={},u=[{value:"Installation",id:"installation",level:2},{value:"Aviator&#39;s Defaults",id:"aviators-defaults",level:2},{value:"Perceptual Optimization",id:"perceptual-optimization",level:3},{value:"Video",id:"video",level:3},{value:"Audio",id:"audio",level:3},{value:"Output",id:"output",level:3},{value:"Credits",id:"credits",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aviator"},"Aviator"),(0,o.kt)("p",null,"Aviator is a GUI application designed for encoding ",(0,o.kt)("a",{parentName:"p",href:"/docs/video/av1"},"AV1")," video & Opus audio with ",(0,o.kt)("a",{parentName:"p",href:"/docs/encoders/SVT-AV1"},"SVT-AV1"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/audio/opus"},"libopus"),", & ",(0,o.kt)("a",{parentName:"p",href:"/docs/utilities/ffmpeg"},"ffmpeg")," on Linux systems in a user-friendly, intuitive manner. Aviator's primary focus is ease-of-use, while still striving to offer optimal quality per bit through smart defaults implemented via its SVT-AV1 encoder."),(0,o.kt)("img",{width:"640",height:"360",src:"https://raw.githubusercontent.com/gianni-rosato/aviator/main/assets/aviator_splash2.avif",alt:"Aviator Splash"}),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Aviator is available on Flathub as a Flatpak. You can learn how to set up Flatpak on your distro of choice ",(0,o.kt)("a",{parentName:"p",href:"https://flatpak.org/setup/"},"here"),"."),(0,o.kt)("a",{href:"https://flathub.org/apps/details/net.natesales.Aviator"},(0,o.kt)("img",{width:"200",alt:"Download on Flathub",src:"https://flathub.org/assets/badges/flathub-badge-en.png"})),(0,o.kt)("p",null,"Aviator's rationale behind using Flatpak is to ship its own dependencies & ensure users across every distro have a cohesive experience with the latest up-to-date SVT-AV1 implementation that is best for visual quality."),(0,o.kt)("h2",{id:"aviators-defaults"},"Aviator's Defaults"),(0,o.kt)("p",null,"Hovering over most user configurable options in Aviator will produce a helpful tooltip that you can look at to make things more clear."),(0,o.kt)("h3",{id:"perceptual-optimization"},"Perceptual Optimization"),(0,o.kt)("p",null,"Aviator doesn't use mainline SVT-AV1, but rather uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/BlueSwordM/SVT-AV1"},"a fork")," maintained for perceptual quality. It includes several unique changes, including a custom ",(0,o.kt)("a",{parentName:"p",href:"/docs/metrics/ssim"},"SSIM")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/psychovisual"},"RDO")," tune that isn't included in mainline SVT-AV1."),(0,o.kt)("p",null,"Aviator's default FFmpeg command uses the following SVT-AV1 parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"-c:v libsvtav1 -crf X -preset X -pix_fmt yuv420p10le -svtav1-params film-grain=X:input-depth=10:tune=2:enable-qm=1:scd=1:enable-overlays=1:film-grain-denoise=X\n")),(0,o.kt)("h3",{id:"video"},"Video"),(0,o.kt)("img",{width:"678",height:"567",src:"https://raw.githubusercontent.com/gianni-rosato/aviator/main/assets/aviator_video.webp",alt:"Aviator Video Settings",loading:"lazy"}),(0,o.kt)("p",null,"By default, output resolution will match your source's resolution. Manually changing one resolution value will automatically calculate the other based on the video's aspect ratio. Aviator's SVT-AV1 speed preset is set to 6 by default, with a CRF (Constant Rate Factor) level of 32. You can set CRF from 0 to 63 using the slider, with larger numerical values indicating smaller filesize at the expense of visual quality. You can look at the detailed specifications behind each speed preset ",(0,o.kt)("a",{parentName:"p",href:"https://gitlab.com/AOMediaCodec/SVT-AV1/-/blob/master/Docs/CommonQuestions.md#what-presets-do"},"here"),". Speed 6 offers a good balance between speed & compression efficiency at any CRF level."),(0,o.kt)("p",null,"Setting values that don't correspond with the source video's aspect ratio means the output will either stretch or crop based on if the \"crop\" option is checked."),(0,o.kt)("p",null,"The Grain Synth slider allows you to add artificial grain to your video to mimic its natural grain. This option applies the artificial grain at decode time as a filter, which makes it easier to encode grainy videos at high fidelity. The Denoise switch removes noise from the video before applying artificial grain."),(0,o.kt)("h3",{id:"audio"},"Audio"),(0,o.kt)("img",{width:"678",height:"567",src:"https://raw.githubusercontent.com/gianni-rosato/aviator/main/assets/aviator_audio.webp",alt:"Aviator Audio Settings",loading:"lazy"}),(0,o.kt)("p",null,"The default bitrate for Opus audio is 48kb/s. The audio source can be copied to the output media via that \"Copy Audio\" switch, & audio with >2 channels can be downmixed to stereo via the appropriately labelled switch. Volume adjustment & normalization are also offered in this section as well; the Volume slider allows you to increase or decrease the output's volume & is measured in decibels, & negative values decrease the volume. The Normalize toggle allows you to normalize your audio's perceived loudness."),(0,o.kt)("p",null,'The "Copy Audio" switch disables WebM output due to potential compatibility hiccups & overrides every option on the Audio page to keep the source audio untouched. This option, when enabled, ensures the source audio isn\'t reencoded.'),(0,o.kt)("p",null,"The Volume slider allows you to increase or decrease the output's volume. It is measured in decibels, and negative values decrease the volume. The Normalize switch allows you to normalize the audio's perceived loudness."),(0,o.kt)("h3",{id:"output"},"Output"),(0,o.kt)("img",{width:"678",height:"567",src:"https://raw.githubusercontent.com/gianni-rosato/aviator/main/assets/aviator_output.webp",alt:"Aviator Output UI",loading:"lazy"}),(0,o.kt)("p",null,"The container your video is stored in is associated with the file extension. Aviator offers two options for video output: the ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/containers#mkv--mka--mks--mk3d"},"Matroska")," video container & the ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/containers#webm"},"WebM")," container. The open-source Matroska container (.MKV) is used by default in Aviator & is a universal multimedia container with broad video & audio support. WebM is designed for web compatibility. Aviator won't copy subtitles to WebM outputs because WebM is only officially compatible with ",(0,o.kt)("a",{parentName:"p",href:"/docs/subtitles/webvtt"},"WebVTT")," subtitles. Both containers work out of the box with Aviator's AV1 video & Opus audio, but WebM output will be disabled if the Copy Audio switch is enabled because then we lose this format compliance assurance."),(0,o.kt)("h2",{id:"credits"},"Credits"),(0,o.kt)("p",null,"Actively developed by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gianni-rosato/"},"Gianni Rosato"),"."))}c.isMDXComponent=!0}}]);