"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[1554],{2120:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var s=i(4848),o=i(8453);const t={title:"Opus",sidebar_position:2},a="Opus",r={id:"audio/Opus",title:"Opus",description:"The content in this entry is incomplete & is in the process of being completed.",source:"@site/docs/audio/Opus.mdx",sourceDirName:"audio",slug:"/audio/Opus",permalink:"/docs/audio/Opus",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/audio/Opus.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Opus",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"AAC",permalink:"/docs/audio/AAC"},next:{title:"Dolby Digital",permalink:"/docs/audio/Dolby"}},c={},d=[{value:"Format Breakdown",id:"format-breakdown",level:2},{value:"SILK",id:"silk",level:3},{value:"CELT",id:"celt",level:3},{value:"Encoders",id:"encoders",level:2},{value:"Opusenc",id:"opusenc",level:3},{value:"FFopus",id:"ffopus",level:3},{value:"vac-enc",id:"vac-enc",level:3}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"opus",children:"Opus"}),"\n",(0,s.jsx)(n.admonition,{title:"Under Maintenance",type:"info",children:(0,s.jsx)(n.p,{children:"The content in this entry is incomplete & is in the process of being completed."})}),"\n",(0,s.jsxs)(n.p,{children:["Opus is an open-source audio codec that has largely replaced ",(0,s.jsx)(n.a,{href:"/docs/audio/Vorbis",children:"Vorbis"})," as the standard open audio codec. It is the recommended codec for usage in WebM video containers in tandem with the ",(0,s.jsx)(n.a,{href:"/docs/video/VP9",children:"VP9"})," or ",(0,s.jsx)(n.a,{href:"/docs/video/AV1",children:"AV1"})," video codecs."]}),"\n",(0,s.jsxs)(n.p,{children:["Opus is known for its incredible coding efficiency and unique multi-channel optimizations. Stereo Opus audio reaches ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Transparency_(data_compression)",children:"transparency"})," (psychoacoustically lossless audio quality) at 128kb/s, compared to ",(0,s.jsx)(n.a,{href:"/docs/audio/AAC",children:"AAC"}),"'s generally agreed upon 256kb/s and ",(0,s.jsx)(n.a,{href:"/docs/audio/MP3",children:"MP3"}),"'s 320kb/s. Transparency varies based on the type of content & the encoding implementation used, especially for codecs other than Opus, and the values provided above may be debated to a degree."]}),"\n",(0,s.jsxs)(n.p,{children:["Opus is described on ",(0,s.jsx)(n.a,{href:"https://opus-codec.org/",children:"opus-codec.org"}),' as a "totally open, royalty-free, highly versatile audio codec. Opus is unmatched for interactive speech and music transmission over the Internet, but is also intended for storage and streaming applications. It is standardized by the Internet Engineering Task Force (IETF) as ',(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc6716",children:"RFC 6716"}),' which incorporated technology from Skype\u2019s SILK codec and Xiph.Org\u2019s CELT codec."']}),"\n",(0,s.jsx)(n.p,{children:"Opus supports the following features:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bitrates from 6 kb/s to 510 kb/s (with a maximum of around 255 kb/s per channel on non stereo layouts)"}),"\n",(0,s.jsx)(n.li,{children:"Sampling rates from 8 kHz (narrowband) to 48 kHz (fullband)"}),"\n",(0,s.jsx)(n.li,{children:"Frame sizes from 2.5 ms to 60 ms"}),"\n",(0,s.jsx)(n.li,{children:"Support for both constant bitrate (CBR) and variable bitrate (VBR)"}),"\n",(0,s.jsx)(n.li,{children:"Audio bandwidth from narrowband to fullband"}),"\n",(0,s.jsx)(n.li,{children:"Support for speech and music"}),"\n",(0,s.jsx)(n.li,{children:"Support for mono and stereo"}),"\n",(0,s.jsx)(n.li,{children:"Support for up to 255 channels (multistream frames)"}),"\n",(0,s.jsx)(n.li,{children:"Dynamically adjustable bitrate, audio bandwidth, and frame size"}),"\n",(0,s.jsx)(n.li,{children:"Good loss robustness and packet loss concealment (PLC)"}),"\n",(0,s.jsx)(n.li,{children:"Floating point and fixed-point implementation"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"via opus-codec.org and wiki.hydrogenaud.io"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"format-breakdown",children:"Format Breakdown"}),"\n",(0,s.jsx)(n.p,{children:"Opus is a hybrid audio codec, composed of two codecs as mentioned above. These are Skype's SILK codec for voice & Xiph.Org's CELT codec. Opus's initial name, Harmony, may have been because of the \"harmony\" of these two codecs and the musical connotation of harmony."}),"\n",(0,s.jsx)(n.h3,{id:"silk",children:"SILK"}),"\n",(0,s.jsx)(n.p,{children:"SILK, initially from Skype, was designed to be used for voice calls on Microsoft products like Skype. The first stable release of the codec was in 2009, and since then it has been freely licensed under the BSD 2-Clause license which has allowed for its adoption into Opus. The version of SILK used in Opus is substantially modified from - and not compatible with - the standalone SILK codec previously described here."}),"\n",(0,s.jsx)(n.p,{children:"SILK is optimized for speech, and so has limited sample rates as follows:"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Narrowband: 3-4000hz\r\nMediumband: 3-6000hz\r\nWideband: 3-8000hz"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"SILK's latency is 10 to 60ms based on the desired framesize + 5ms lookahead to estimate noise shaping + (potentially) 1.5ms sampling rate conversion overhead if the input audio needs to be resampled."}),"\n",(0,s.jsx)(n.h3,{id:"celt",children:"CELT"}),"\n",(0,s.jsx)(n.p,{children:'Much like SILK, CELT is under the BSD 2-Clause license. The preview release came out in 2011. CELT stands for "Code-Excited Lapped Transform" and was designed to be the true successor to Vorbis, even being dubbed as "Vorbis II" during its initial development as part og Xiph.Org\'s "Ghost" project in 2005.'}),"\n",(0,s.jsxs)(n.p,{children:["CELT was designed to be a full-band general purpose codec without a particular specialization for a certain kind of audio, making it distinctly different from Xiph's ",(0,s.jsx)(n.a,{href:"/docs/audio/Speex",children:"Speex"})," codec & more similar to Vorbis. It is computationally simple relative to competing codec technologies like ",(0,s.jsx)(n.a,{href:"/docs/audio/AAC",children:"AAC"})," & even Vorbis, enabling extremely low latency that is competitive with ",(0,s.jsx)(n.a,{href:"/docs/audio/AAC#aac-ld--aac-eld",children:"AAC-LD"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"CELT can work with the following sample rates:"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Narrowband: 3-4000hz\r\nMediumband: 3-6000hz\r\nWideband: 3-8000hz\r\nSuperWideband: 3-12000hz\r\nFullband: 3-20000hz"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"encoders",children:"Encoders"}),"\n",(0,s.jsx)(n.h3,{id:"opusenc",children:"Opusenc"}),"\n",(0,s.jsxs)(n.p,{children:["Opus's reference encoder is ",(0,s.jsx)(n.a,{href:"https://github.com/xiph/opus",children:"opusenc"}),", which is known for its fantastic performance and versatility. It is licensed under the BSD 3-clause license as part of the reference libopus library. There are a myriad of options that may be used to encode with opusenc, but the utility is considered to have sane encoding defaults for local storage & playback. The best options will be outlined below."]}),"\n",(0,s.jsxs)(n.p,{children:["Usage: ",(0,s.jsx)(n.code,{children:"opusenc [options] input_file output_file.opus"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--bitrate #.###"})," Sets the overall target bitrate in kbit/s. Most encoders use ",(0,s.jsx)(n.em,{children:"bits"}),' per second, meaning you have to specify "128K" for 128kbit/s for example. Opus doesn\'t follow this, so you\'d just have to type "128" though keep in mind using efficient VBR encoding means the final bitrate may be different than the target. Opus supports bitrates from 6 kb/s to 510 kb/s.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--vbr"})," Tells the encoder to encode using a variable bit rate, allocating more or less bits when necessary to preserve overall fidelity per bit. This is the best option for local storage & playback, and is ",(0,s.jsx)(n.em,{children:"enabled by default."})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--cvbr"})," Tells the encoder that it is allowed to vary the bitrate like with VBR, but it must constrain the maximum bitrate at any given moment to the value provided."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--hard-cbr"})," Tells the encoder to use a constant bitrate the whole time."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--music"})," & ",(0,s.jsx)(n.code,{children:"--speech"})," Forces the AI content-detector built into opusenc to treat the input as either speech or music. The bitrate range where this is relevant is around 12-40kb/s."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--comp #"})," Sets the encoder complexity to a value from 0 to 10, 0 being the least complex & 10 being the most. ",(0,s.jsx)(n.em,{children:"The default is 10."})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--framesize #"})," Sets the maximum encoder frame size in milliseconds. Lowering this is useful for improving latency at the expense of audio quality per bit. It is worth noting that 40 & 60ms framesizes are just multiple 20ms frames stitched together via opusenc's default behavior, and are not considered useful as they just lower the encoder's adaptability which can worsen both latency & coding efficiency. ",(0,s.jsx)(n.em,{children:"The default value is 20."})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--expect-loss #"})," Percentage value for expected packet loss. Not useful for local encoding & playback, but useful for real-time applications. ",(0,s.jsx)(n.em,{children:"Default value is 0."})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--downmix-mono"})," Downmixes multiple channels into a single channel."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--downmix-stereo"})," Downmixes multiple channels into two channels, left & right, given more than two channels are provided to the encoder."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--no-phase-inv"})," Disables phase inversion. Helpful when downmixing stereo to mono, although this is the default behavior in that scenario since libopus 1.3. Slightly decreases stereo audio quality."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--max-delay #"})," Sets maximum container delay in milliseconds, from 0-1000. ",(0,s.jsx)(n.em,{children:"Default is 1000."})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Looking at the default values for the encoder flags, opusenc almost always follows the best practices for every default value. This makes it very easy to use, and it is as simple as plugging in a source of some kind and using only the most basic commands to encode with opus."}),"\n",(0,s.jsx)(n.p,{children:"An example opusenc command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'opusenc "input.wav" "output.opus" --bitrate 96\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/utilities/ffmpeg",children:"FFmpeg"})," using libopus:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'ffmpeg -i "input.flac" -c:a libopus -b:a 128K "output.ogg"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If you'd like to learn more about opusenc & its recommended default behavior, read this article on ",(0,s.jsx)(n.a,{href:"https://wiki.xiph.org/Opus_Recommended_Settings#Bandwidth_Transition_Thresholds",children:"Opus Recommended Settings"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{title:"Existing bug in ffmpeg",type:"info",children:[(0,s.jsxs)(n.p,{children:["Due to a bug in ffmpeg ",(0,s.jsx)(n.a,{href:"https://trac.ffmpeg.org/ticket/5718",children:"(#5718)"}),", ffmpeg won't automatically remap ",(0,s.jsx)(n.code,{children:"5.1(side)"})," to ",(0,s.jsx)(n.code,{children:"5.1"})," when using libopus.",(0,s.jsx)(n.br,{}),"\n","To remap the channel layout explicitly, try this:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'ffmpeg -i "input.flac" -c:a libopus -af aformat=channel_layouts=5.1 "output.ogg"\n'})}),(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"You can handle arbitrary audio stream mappings with this:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"-af aformat=channel_layouts=7.1|5.1|stereo -mapping_family 1\n"})})]})]}),"\n",(0,s.jsx)(n.h3,{id:"ffopus",children:"FFopus"}),"\n",(0,s.jsx)(n.p,{children:"FFopus is an experimental native opus encoder from FFmpeg. It is not widely regarded as providing any decent uplift in coding efficiency compared to libopus, and is usually considered worse; its only merit is being able to handle 5.1(side) streams while libopus in FFmpeg cannot. It only implements the CELT part of the Opus codec."}),"\n",(0,s.jsx)(n.p,{children:"FFopus usage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'ffmpeg -i "input.wma" -c:a opus -b:a 128K -strict -2  "output.opus"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"vac-enc",children:"vac-enc"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/gianni-rosato/vac-enc",children:"VAC"}),", or Value Added Codec, is a libopus encoder that uses SoX to resample inputs & supports output to ",(0,s.jsx)(n.code,{children:".ogg"})," rather than exclusively ",(0,s.jsx)(n.code,{children:".opus"}),". Better resampling theoretically leads to better coding efficiency, but vac-enc hasn't been thoroughly tested."]}),"\n",(0,s.jsxs)(n.p,{children:["Encoding a 16-bit signed little endian ",(0,s.jsx)(n.code,{children:"pcm_s16le"})," WAV to 128kbit/s Opus in an OGG container:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vac-enc input.wav output.ogg 128\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var s=i(6540);const o={},t=s.createContext(o);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);