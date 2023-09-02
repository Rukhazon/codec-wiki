"use strict";(self.webpackChunkav1_wiki=self.webpackChunkav1_wiki||[]).push([[1606],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>A});var o=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,a=function(e,t){if(null==e)return{};var i,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(i),p=a,A=u["".concat(s,".").concat(p)]||u[p]||h[p]||n;return i?o.createElement(A,r(r({ref:t},d),{},{components:i})):o.createElement(A,r({ref:t},d))}));function A(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,r=new Array(n);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<n;c++)r[c]=i[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}p.displayName="MDXCreateElement"},9092:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=i(7462),a=(i(7294),i(3905));const n={label:"AAC",sidebar_position:1},r="AAC",l={unversionedId:"audio/AAC",id:"audio/AAC",title:"AAC",description:"AAC, or Advanced Audio Coding, is an umbrella for a number of different codecs. When people refer to AAC, they are often referring to the commonly used AAC-LC profile developed as part of the original AAC standard in 1997 (although there is a distinction between this version of AAC-LC, called MPEG-2 AAC, & MPEG-4 AAC which is newer). However, there are a number of other variants that have been created over time. These include:",source:"@site/docs/audio/AAC.md",sourceDirName:"audio",slug:"/audio/AAC",permalink:"/docs/audio/AAC",draft:!1,editUrl:"https://github.com/av1-community-contributors/av1-wiki.github.io/tree/main/docs/audio/AAC.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{label:"AAC",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"High Dynamic Range",permalink:"/docs/introduction/high-dynamic-range"},next:{title:"Opus",permalink:"/docs/audio/opus"}},s={},c=[{value:"Format Breakdown",id:"format-breakdown",level:2},{value:"AAC-LC",id:"aac-lc",level:3},{value:"AAC-LD &amp; AAC-ELD",id:"aac-ld--aac-eld",level:3},{value:"HE-AAC",id:"he-aac",level:3},{value:"HE-AACv2",id:"he-aacv2",level:3},{value:"xHE-AAC",id:"xhe-aac",level:3},{value:"Encoders",id:"encoders",level:2},{value:"Fraunhofer FDK AAC",id:"fraunhofer-fdk-aac",level:3},{value:"Core Audio",id:"core-audio",level:3},{value:"FFmpeg AAC",id:"ffmpeg-aac",level:3},{value:"FAAC",id:"faac",level:3},{value:"Nero AAC",id:"nero-aac",level:3},{value:"Exhale",id:"exhale",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},u="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aac"},"AAC"),(0,a.kt)("p",null,"AAC, or Advanced Audio Coding, is an umbrella for a number of different codecs. When people refer to AAC, they are often referring to the commonly used AAC-LC profile developed as part of the original AAC standard in 1997 (although there is a distinction between this version of AAC-LC, called MPEG-2 AAC, & MPEG-4 AAC which is newer). However, there are a number of other variants that have been created over time. These include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AAC-LC (low-complexity AAC)"),(0,a.kt)("li",{parentName:"ul"},"AAC-LD (low delay AAC)"),(0,a.kt)("li",{parentName:"ul"},"AAC-ELD (enhanced low delay AAC)"),(0,a.kt)("li",{parentName:"ul"},"HE-AAC (high efficiency AAC, uses Spectral Band Replication)"),(0,a.kt)("li",{parentName:"ul"},"HE-AACv2 (high efficiency AAC v2, uses Spectral Band Replication + Parametric Stereo)"),(0,a.kt)("li",{parentName:"ul"},"xHE-AAC (extended high efficiency AAC (kinda), uses USAC (Unified Speech & Audio Coding))")),(0,a.kt)("p",null,"AAC is even used as a Bluetooth audio codec for encoding audio streams & sending them to a Bluetooth audio device. Encoding & even decoding some of the above formats can prove to be difficult, so it is worth exploring each codec individually."),(0,a.kt)("h2",{id:"format-breakdown"},"Format Breakdown"),(0,a.kt)("p",null,"Let's explore each codec individually."),(0,a.kt)("h3",{id:"aac-lc"},"AAC-LC"),(0,a.kt)("p",null,'While AAC-LC was introduced alongside two higher complexity profiles (AAC Main & AAC-SSR), AAC-LC has seen much more widespread adoption through various distribution mediums for video (often paired with AVC video) & audio alike. AAC-LC is ubiquitous within the Apple ecosystem & was (& still is) used on YouTube before their switch to primarily using Opus. Encoding AAC-LC can be done with relative ease, accessible through nearly every encoder in the "Encoders" section.'),(0,a.kt)("h3",{id:"aac-ld--aac-eld"},"AAC-LD & AAC-ELD"),(0,a.kt)("p",null,"AAC-LD & AAC-ELD are both designed to transmit audio in instances where latency is very important. Both are far more efficient than previous low-latency audio coding offerings. Over AAC-LD, AAC-ELD offers better audio quality through Spectral Band Replication, lower latency, & a greater quality range with a lower bitrate minimum & higher maximum."),(0,a.kt)("h3",{id:"he-aac"},"HE-AAC"),(0,a.kt)("p",null,"High Efficiency AAC introduces Spectral Band Replication (SBR) to the AAC specification for the purpose of higher quality audio at lower bitrates. SBR is an encoding technique that allows the decoder to reconstruct higher frequencies from an audio signal given lower frequencies & data that informs the decoder about information in the higher frequencies, allowing them to be effectively restored from this helper data. In short, lower frequencies are encoded with extra detail incorporated to allow the reconstruction of higher frequency information in an audio signal. This feature alone allows HE-AAC to be much more efficient than AAC-LC at lower bitrates; the gap closes substantially at higher bitrates, however."),(0,a.kt)("h3",{id:"he-aacv2"},"HE-AACv2"),(0,a.kt)("p",null,"High Efficiency AAC v2 introduces Parametric Stereo (PS), which further increases audio quality with an emphasis on lower bitrates. PS uses a mono signal downmixed from a multichannel stereo input alongside information about the spatial properties of the stereo input to allow the decoder to reconstruct a left & right channel using salient spatial data from the mono signal. HE-AACv2 combine PS with SBR for greater efficiency gains over HE-AAC & AAC-LC, although again the gap closes at higher bitrates."),(0,a.kt)("h3",{id:"xhe-aac"},"xHE-AAC"),(0,a.kt)("p",null,"Extended High Efficiency AAC is actually slightly different from xHE-AAC. While Extended High Efficiency AAC specifically includes all of HE-AACv2's coding techniques as well as compression techniques from the USAC specification, the Extended High Efficiency AAC profile was designed in such a manner that building an encoder for the format would allow it to be perfectly backwards compatible with past variations of AAC. xHE-AAC is a codec that combines the Extended High Efficiency AAC profile with further USAC coding techniques, specifically within the ",(0,a.kt)("em",{parentName:"p"},"MPEG-D DRC Loudness Control Profile"),". For all intents and purposes, when someone refers to \"USAC audio,\" they probably mean xHE-AAC. xHE-AAC further extends performance at lower bitrates compared to past variants of AAC. USAC's specialty & purpose was to create an audio codec that didn't compromise music performance for speech & vice versa, but rather automatically tuned its coding technique selection to perform the best on any given source."),(0,a.kt)("p",null,"xHE-AAC is not widely supported. On a Mac, playback is only possible through QuickTime Player & other utilities which use CoreAudio for decoding. Windows 11 & Android support xHE-AAC natively, but Windows 10 & Linux will not allow you to play it back without some grief. The most effective way currently is to use an AAC plugin with foobar2000, although this plugin is 32-bit only, so you'll need 32-bit foobar2000. This works on Linux under WINE."),(0,a.kt)("h2",{id:"encoders"},"Encoders"),(0,a.kt)("p",null,"There are a number of ways to encode each format, which I'll outline below."),(0,a.kt)("h3",{id:"fraunhofer-fdk-aac"},"Fraunhofer FDK AAC"),(0,a.kt)("p",null,"Fraunhofer FDK AAC is a high quality, open-source AAC encoder by ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fraunhofer_Society"},"Fraunhofer IIS"),". It was introduced with the release of Android 4.1 and has since been forked to a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mstorsjo/fdk-aac"},"seperate repository"),". Issues regarding the legality of its distribution have arisen since the Free Software Foundation declared the license incompatible with the GPL. The license does not grant the user rights to the patented technologies used in the source code, and therefore restricts its use. However, this topic is still debated as Debian does not consider FDK AAC free software while Red Hat does."),(0,a.kt)("p",null,"Another similar tool, FhG-AAC, performs similarly to FDK-AAC but with greater precision as it performs floating point operations. It can be used through the proprietary Windows media player Winamp."),(0,a.kt)("p",null,"FDK-AAC can encode the following formats:\n",(0,a.kt)("inlineCode",{parentName:"p"},"AAC-LC AAC-LD AAC-ELD HE-AAC HE-AACv2")),(0,a.kt)("h3",{id:"core-audio"},"Core Audio"),(0,a.kt)("p",null,"Apple's proprietary Core Audio Toolbox encoder is a popular, high-quality choice for encoding AAC. This encoder can be used in macOS via Apple's own ",(0,a.kt)("inlineCode",{parentName:"p"},"afconvert")," utility, or in FFmpeg by specifying ",(0,a.kt)("inlineCode",{parentName:"p"},"aac_at")," as the audio encoder. Windows users can also take advantage of Core Audio by using the free ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nu774/qaac"},"qaac")," command-line utility, but users will need to either have ","[iTunes]"," (",(0,a.kt)("a",{parentName:"p",href:"https://support.apple.com/en-ca/HT210384"},"https://support.apple.com/en-ca/HT210384"),") installed, or extract the libraries from said installer, using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nu774/makeportable"},"makeportable")," script."),(0,a.kt)("p",null,"Core Audio can encode the following formats: ",(0,a.kt)("inlineCode",{parentName:"p"},"AAC-LC, HE-AAC, HE-AACv2"),"*"),(0,a.kt)("p",null,"*",(0,a.kt)("inlineCode",{parentName:"p"},"HE-AACv2")," encoding is only supported on macOS."),(0,a.kt)("h3",{id:"ffmpeg-aac"},"FFmpeg AAC"),(0,a.kt)("p",null,"FFmpeg's native AAC encoder is known for being completely free & open source, licensed under the GNU General Public License (or LGPL, depending on how FFmpeg is configured). If you want a completely FOSS solution for encoding AAC, FFmpeg AAC is one of the only places you'll find this. It is not known for being particularly feature rich or high quality & doesn't support the entire profile of the AAC variants it can encode, but it gets the job done in most scenarios."),(0,a.kt)("p",null,"FFmpeg's AAC encoder can be called with a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"-c:a aac")," parameter, but there are more granular options available. By default, the profile is ",(0,a.kt)("inlineCode",{parentName:"p"},"aac_low")," which encodes MPEG-4 AAC-LC. The ",(0,a.kt)("inlineCode",{parentName:"p"},"mpeg2_aac_low")," profile encodes simpler, lower-quality MPEG-2 AAC from 1997, while ",(0,a.kt)("inlineCode",{parentName:"p"},"aac_main")," encodes the more obscure main AAC profile from the 1997 MPEG-2 specification. Finally, ",(0,a.kt)("inlineCode",{parentName:"p"},"aac-ltp")," encodes AAC long-term prediction introduced in MPEG-4."),(0,a.kt)("p",null,"Using FFmpeg AAC, we can encode the following formats:\n",(0,a.kt)("inlineCode",{parentName:"p"},"AAC-LC")),(0,a.kt)("h3",{id:"faac"},"FAAC"),(0,a.kt)("p",null,"FAAC is an old AAC encoder, name meaning Freeware Advanced Audio Coder. It is one of the lower quality options, & isn't recommended for general use. It only supports ",(0,a.kt)("inlineCode",{parentName:"p"},"AAC-LC"),"."),(0,a.kt)("h3",{id:"nero-aac"},"Nero AAC"),(0,a.kt)("p",null,"The discontinued Nero AAC audio coder had its last release in 2010. The developer of FAAC worked on Nero AAC, & the Nero AAC encoder & decoder are proprietary. Nero AAC was known to produce decent quality output while it was maintained, although development has since stalled."),(0,a.kt)("p",null,"Nero AAC can encode the following formats:\n",(0,a.kt)("inlineCode",{parentName:"p"},"AAC-LC, HE-AAC, HE-AACv2")),(0,a.kt)("h3",{id:"exhale"},"Exhale"),(0,a.kt)("p",null,"Exhale is the only encoder on this list capable of encoding xHE-AAC audio. While it does not excel at this task compared to proprietary competition, there isn't really a straightforward way to encode xHE-AAC outside of using exhale on most platforms right now. Given that fact, it is the only xHE-AAC encoder many can consider using due to the lack of real competition. It can encode Extended HE-AAC audio with or without eSBR, although encoding using eSBR produces higher quality results."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"exhale")," can encode the following formats:\n",(0,a.kt)("inlineCode",{parentName:"p"},"xHE-AAC")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Alternatives to AAC include Opus, Vorbis, MP3, & FLAC, among others."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vorbis & MP3 are considered to be worse, although Vorbis has its moments & is entirely royalty-free unlike AAC."),(0,a.kt)("li",{parentName:"ul"},"FLAC is a lossless audio codec with an entirely different use case. It is important to reinforce that lossy audio codecs are not replacements for lossless, as good as they might get."),(0,a.kt)("li",{parentName:"ul"},"Opus is competitive with HE-AACv2 & xHE-AAC moreso than the older, worse variants, & is widely supported as well as royalty free. The open source reference encoder ",(0,a.kt)("inlineCode",{parentName:"li"},"opusenc")," is an excellent implementation of the format & the tooling is much easier to use compared to AAC's frankly nightmarish assortment of various options with numerous individual downsides. xHE-AAC is generally better than Opus, especially at lower bitrates, which is a fact that merits consideration.")))}h.isMDXComponent=!0}}]);