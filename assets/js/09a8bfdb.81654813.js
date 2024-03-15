"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[5579],{1689:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var s=t(4848),n=t(8453);const o={title:"Embedding the Un-Embeddable",description:"Revealing the secrets of those websites that allow you to embed entire movies, AV1, and videos over 500MB on Discord.",slug:"embedding-the-un-embeddable",authors:[{name:"Simulping",title:"Maintainer / Encoder",url:"https://github.com/Simulping",image_url:"https://avatars.githubusercontent.com/u/12994794?v=4"}],tags:["video","discord"],image:"/img/discord-embed-blog-image.webp",hide_table_of_contents:!1},r=void 0,a={permalink:"/blog/embedding-the-un-embeddable",source:"@site/blog/2023-10-29-embedding-the-un-embeddable copy.mdx",title:"Embedding the Un-Embeddable",description:"Revealing the secrets of those websites that allow you to embed entire movies, AV1, and videos over 500MB on Discord.",date:"2023-10-29T00:00:00.000Z",formattedDate:"October 29, 2023",tags:[{label:"video",permalink:"/blog/tags/video"},{label:"discord",permalink:"/blog/tags/discord"}],readingTime:8.92,hasTruncateMarker:!0,authors:[{name:"Simulping",title:"Maintainer / Encoder",url:"https://github.com/Simulping",image_url:"https://avatars.githubusercontent.com/u/12994794?v=4",imageURL:"https://avatars.githubusercontent.com/u/12994794?v=4"}],frontMatter:{title:"Embedding the Un-Embeddable",description:"Revealing the secrets of those websites that allow you to embed entire movies, AV1, and videos over 500MB on Discord.",slug:"embedding-the-un-embeddable",authors:[{name:"Simulping",title:"Maintainer / Encoder",url:"https://github.com/Simulping",image_url:"https://avatars.githubusercontent.com/u/12994794?v=4",imageURL:"https://avatars.githubusercontent.com/u/12994794?v=4"}],tags:["video","discord"],image:"/img/discord-embed-blog-image.webp",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Encoding Animation with SVT-AV1: A Deep Dive",permalink:"/blog/svt-av1-deep-dive"},nextItem:{title:"AV1 Encoding for Dummies",permalink:"/blog/av1-encoding-for-dummies"}},d={authorsImageUrls:[void 0]},h=[{value:"A Scenario",id:"a-scenario",level:2},{value:"But First, a Quick Disclosure",id:"but-first-a-quick-disclosure",level:2},{value:"How it Works",id:"how-it-works",level:2},{value:"The Website&#39;s End",id:"the-websites-end",level:3},{value:"Discord&#39;s End",id:"discords-end",level:3},{value:"Strengths &amp; Limitations",id:"strengths--limitations",level:2},{value:"Strengths",id:"strengths",level:4},{value:"Limitations",id:"limitations",level:4},{value:"Differences between Sites",id:"differences-between-sites",level:2},{value:"The Lore",id:"the-lore",level:2},{value:"Dwayne",id:"dwayne",level:3},{value:"Discovery",id:"discovery",level:3},{value:"The Experiments &amp; Interactive Site",id:"the-experiments--interactive-site",level:3},{value:"Virality",id:"virality",level:3},{value:"Closing",id:"closing",level:2}];function l(e){const i={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"Feature image",src:t(9395).A+"",width:"1920",height:"1080"}),"\n",(0,s.jsx)(i.strong,{children:'A 567.14 MB, 12 min 11 s, 2K (2,048 x 858), VP9 + Opus, 6.51 Mbps average, Blender short film "Cosmos Laundromat"'})]}),"\n",(0,s.jsx)(i.h2,{id:"a-scenario",children:"A Scenario"}),"\n",(0,s.jsx)(i.p,{children:"While chatting in your favorite Discord servers & group chats, you may see a friend send a weird link. You might even consider it suspicious on first glance. It is a video featuring an image of a movie poster with a play button that is almost begging to be clicked. Naturally, you click it."}),"\n",(0,s.jsx)(i.p,{children:"It loads for a second, and to your surprise it is a full-length, 90-minute (sometimes even two hour)-long unauthorized copy of a movie. If you don't know exactly what is going on, you probably sit there dumbfounded as a pixel perfect HD movie plays back. You may have expected a stereotypically muddy, blocky, laggy shitpost, but this has defied your expectations."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"stolen.shoes",src:t(6689).A+"",width:"1088",height:"318"})}),"\n",(0,s.jsxs)(i.p,{children:["The truth is, there are ",(0,s.jsx)(i.em,{children:"multiple"})," site that do this. Currently, there are five at the time of writing. Below is a list the ones I am currently familiar with:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://stolen.shoes",children:"https://stolen.shoes"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://discord.nfp.is",children:"https://discord.nfp.is"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://embeds.video",children:"https://embeds.video"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://x266.mov/discord-embed",children:"https://x266.mov/discord-embed"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://autocompressor.net/av1",children:"https://autocompressor.net/av1"})}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["The big question is, ",(0,s.jsx)(i.strong,{children:"how do they work?"})," Let's get to dissecting."]}),"\n",(0,s.jsx)(i.h2,{id:"but-first-a-quick-disclosure",children:"But First, a Quick Disclosure"}),"\n",(0,s.jsx)(i.p,{children:"The Codec Wiki unequivocally condemns any form of piracy, including the unauthorized distribution of copyrighted content. This blog post is intended to educate & inform. You may not use the tools discussed to infringe upon the intellectual property rights of content creators without serious legal risk. We encourage our readers to respect copyright laws & use the tools we discuss here appropriately."}),"\n",(0,s.jsx)(i.h2,{id:"how-it-works",children:"How it Works"}),"\n",(0,s.jsx)(i.p,{children:"The entire scheme is actually very simple, as it is all just HTML meta tags (If you are familiar with web development, this is all a walk in the park)."}),"\n",(0,s.jsx)(i.p,{children:"The technology's inner working can be divided into two distinct parts. First, let's see how it works on the website's end."}),"\n",(0,s.jsx)(i.h3,{id:"the-websites-end",children:"The Website's End"}),"\n",(0,s.jsx)(i.p,{children:"If you view each website's source, you will find this specific line in each one but they may have a different order:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-html",children:'<meta property="og:image" content="https://example.com/i/someimageforthumbnail.jpg">\n<meta property="og:type" content="video.other">\n<meta property="og:video:url" content="https://example.com/v/video.mp4">\n<meta property="og:video:width" content="1920">\n<meta property="og:video:height" content="1080">\n'})}),"\n",(0,s.jsxs)(i.p,{children:["These are the ",(0,s.jsx)(i.code,{children:"head"})," parts of HTML, which dictate metadata for the document itself such as what the website title/name is, cosmetic embed, defining the site's icon, etc. They are usually found in between the ",(0,s.jsx)(i.code,{children:"<html>"})," and ",(0,s.jsx)(i.code,{children:"<body>"})," tags. Here's an example of a static HTML site serving one specific video:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <link rel="shortcut icon" type="image/x-icon" href="../favicon.ico"/>\n  <title>some embed site</title>\n  <meta property="og:image" content="https://www.themoviedb.org/t/p/original/3U0vksjSY9LWe3Dqfr6xkgd3iQP.jpg">\n  <meta property="og:type" content="video.other">\n  <meta property="og:video:url" content="https://upload.wikimedia.org/wikipedia/commons/3/36/Cosmos_Laundromat_-_First_Cycle_-_Official_Blender_Foundation_release.webm">\n  <meta property="og:video:width" content="2048">\n  <meta property="og:video:height" content="858">\n</head>\n<body>\n  <h1>Hi</h1>\n  <p>Just your friendly neighborhood video embed site</p>\n  </body>\n</html>\n'})}),"\n",(0,s.jsx)(i.p,{children:"< br />\nThese interactive sites usually deploy a live script, like a Javascript framework. Examples are NodeJS, ExpressJS, Svelte, etc. These are used to parse video and thumbnails realtime so they can be embedded on Discord (or potentially other platforms)."}),"\n",(0,s.jsx)(i.h3,{id:"discords-end",children:"Discord's End"}),"\n",(0,s.jsx)(i.p,{children:'Traditionally, Discord\'s media embedder will impose it\'s own video embed size limit (50 MiB) when a user sends a direct video link as usual. But in this case Discord will embed the thumbnail first, not the video. You could say the link "tricks" Discord by showing a "false face" first.'}),"\n",(0,s.jsx)(i.h2,{id:"strengths--limitations",children:"Strengths & Limitations"}),"\n",(0,s.jsx)(i.p,{children:"After a combination of countless hours of observation, rigorous testing throughout the period of a year, and conversations with the sites' creators, the current strengths & limitations of this exploit are enumerated below."}),"\n",(0,s.jsx)(i.h4,{id:"strengths",children:"Strengths"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["You can embed non-web compatible codecs such as ",(0,s.jsx)(i.a,{href:"https://wiki.x266.mov/docs/video/HEVC",children:"HEVC"})," in ",(0,s.jsx)(i.a,{href:"https://wiki.x266.mov/docs/introduction/terminology#mp4--m4v",children:"MP4/MOV"}),", but the user must be using a compatible browser. ",(0,s.jsx)(i.a,{href:"https://thorium.rocks",children:"Thorium"})," or Safari version 13 or greater will work for HEVC playback."]}),"\n",(0,s.jsx)(i.li,{children:"There is no maximum size. You could embed a video the size of a raw Bluray, although I do not condone this unless you have the necessary legal permissions to do so or you're uploading a Creative Commons licensed movie like Big Buck Bunny while adhering to the restrictions of the applicable Creative Commons license. This also means you can send high bitrate gaming clips to your friends without any restrictions, assuming you already have a place to upload them."}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"limitations",children:"Limitations"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["You can only use ",(0,s.jsx)(i.a,{href:"https://simple.wikipedia.org/wiki/Hotlinking",children:"hotlinks"}),", which means direct linking to the video itself ending in the appropriate file extension such as ",(0,s.jsx)(i.code,{children:".mp4"}),". Cloud services like Google Drive or OneDrive will not work for storage."]}),"\n",(0,s.jsxs)(i.li,{children:["You cannot use Discord's CDN (cdn.discordapp.com) as the video source. I assume this is because of Discord's proxy blocking embeds over 50 MiB, but ",(0,s.jsx)(i.strong,{children:"only discord.nfp.is can do this"}),", as it ",(0,s.jsx)(i.strong,{children:"proxies cdn.discordapp.com"})," itself."]}),"\n",(0,s.jsx)(i.li,{children:"You cannot embed videos in any resolutions higher than 3840 x 2160, Discord imposes a hard limit for this on all video after it was discovered that some videos could play normally but then be maliciously scaled to ridiculous resolutions during playback to crash Discord."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"differences-between-sites",children:"Differences between Sites"}),"\n",(0,s.jsx)(i.p,{children:"As mentioned before, there are five known sites at the time of writing. They all serve the same function, but one may interest you more than another due to slight differences in features & functionality."}),"\n",(0,s.jsx)(i.p,{children:"Here are the sites, each with one noteworthy special benefit:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://stolen.shoes",children:"https://stolen.shoes"})," - Recognition, as it is the OG."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://discord.nfp.is",children:"https://discord.nfp.is"})," - You can use Discord CDN as video source."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://embeds.video",children:"https://embeds.video"})," - Immediately input video source into the URL (",(0,s.jsx)(i.code,{children:"https://embeds.video/https://example.com/v/video.mp4"}),")"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://x266.mov/discord-embed",children:"https://x266.mov/discord-embed"})," - Attractive domain, simple layout."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://autocompressor.net/av1",children:"https://autocompressor.net/av1"})," - Lots of info dump, pretty advanced features."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"That concludes the technical overview! Next, let's cover the history of this exploit."}),"\n",(0,s.jsx)(i.h2,{id:"the-lore",children:"The Lore"}),"\n",(0,s.jsx)(i.h3,{id:"dwayne",children:"Dwayne"}),"\n",(0,s.jsxs)(i.p,{children:["In around April of 2022, a Reddit user going by the name of u/CreativeGamer03 ",(0,s.jsx)(i.a,{href:"https://www.reddit.com/r/discordapp/comments/u96kky/someone_sent_this_in_the_memes_channel_and_bruh",children:"posted a video on r/discordapp"}),' of a link where a GIF of Dwayne "The Rock" Johnson plays caption with "Is this a GIF or is it a video?" When played, a low-quality music video of Rick Astley\'s "Never Gonna Give You Up" plays.']}),"\n",(0,s.jsxs)(i.p,{children:["The link used is now unfortunately ",(0,s.jsx)(i.a,{href:"https://archuser.de/the-rock",children:"removed"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"discovery",children:"Discovery"}),"\n",(0,s.jsxs)(i.p,{children:["On 23rd June 2022, a Discord user ",(0,s.jsx)(i.em,{children:"Clybius"})," on the AV1 Community server asked people for ",(0,s.jsx)(i.a,{href:"https://wiki.x266.mov/docs/video/VP9",children:"VP9"})," or ",(0,s.jsx)(i.a,{href:"https://wiki.x266.mov/docs/video/AVC",children:"H.264"})," videos that were over 100 MB in size. At the time the current 500 MB nitro tier did not exist. They then decided to use a 59 minute 1080p sample video of nature scenery from around the world with a thumbnail featuring a GIF of a waterfall to test the exploit. It worked."]}),"\n",(0,s.jsxs)(i.p,{children:["He tried shortly afterward with ",(0,s.jsx)(i.a,{href:"https://wiki.x266.mov/docs/video/AV1",children:"AV1"}),". Eureka, it also worked:"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"AV1",src:t(6364).A+"",width:"497",height:"421"})}),"\n",(0,s.jsx)(i.p,{children:"Clybius confirmed that this could be patched if discovered. He cites having had the idea from the Dwayne Johnson example above, but forgetting about it for a couple of months. So, it seems this entire concept stemmed from a silly rickroll."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Dwayne",src:t(3312).A+"",width:"1108",height:"98"})}),"\n",(0,s.jsx)(i.h3,{id:"the-experiments--interactive-site",children:"The Experiments & Interactive Site"}),"\n",(0,s.jsxs)(i.p,{children:["After the discovery of AV1 embedding, experimentation brought about the discovery that ",(0,s.jsx)(i.em,{children:"any"})," video codec will work as long as the user can decode/play the codec and the container/extension is an MP4, MOV, or WebM. These are all traditionally web-compatible containers. If you're interested in learning about containers, please see the ",(0,s.jsx)(i.a,{href:"https://wiki.x266.mov/docs/introduction/terminology#container",children:"Containers"})," section on the ",(0,s.jsx)(i.a,{href:"https://wiki.x266.mov/docs/introduction/terminology",children:"Terminology"})," page."]}),"\n",(0,s.jsxs)(i.p,{children:["This applies to HEVC, ProRes, ",(0,s.jsx)(i.a,{href:"https://wiki.x266.mov/docs/audio/AAC#xhe-aac",children:"xHE-AAC"}),", and other bizarre codecs that are rarely seen on the Web."]}),"\n",(0,s.jsxs)(i.p,{children:["While experimentating, Clybius converted one their idle domains ",(0,s.jsx)(i.code,{children:"stolen.shoes"})," into an interactive embedder that provided a textbox for a video URL, a thumbnail URL, a width value, & a height value for the desired video. This would be the first website for Discord embedding."]}),"\n",(0,s.jsx)(i.h3,{id:"virality",children:"Virality"}),"\n",(0,s.jsxs)(i.p,{children:["It's not long before people outside of the AV1 Community discovered ",(0,s.jsx)(i.code,{children:"stolen.shoes"}),", and its popularity increased rapidly. Its use usually involved the illicit distribution of full-length, unauthorized copies of movies; this sometimes happened very shortly after some movies were released. There were a couple notable instances of this happenening that caused quite the stir online each time."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:['The first instance featured the DreamWorks sequel of "Puss in Boots (2011)", "Puss in Boots: The Last Wish (2022)". A 1080p video sourced from a streaming site was the first wake up call that attracted attention to the existence of these embed sites. This example used ',(0,s.jsx)(i.code,{children:"stolen.shoes"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"puss",src:t(6689).A+"",width:"1088",height:"318"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:['The second instance was when highly-anticipated animated film "The Super Mario Bros. Movie (2023)" produced by Illumination, Universal Studios, and Nintendo was spread around Discord. It was first spotted as a Cam (A camera recording by someone in theaters), then as it went out on streaming services a different link appeared but spread faster and with upgraded 1080p quality. Both used ',(0,s.jsx)(i.code,{children:"stolen.shoes"})," as the embed site."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"mario",src:t(5716).A+"",width:"1307",height:"335"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:['The third instance is very recent as of the day this was posted. A streaming-service sourced "Five Nights at Freddy\'s (2023)" was spread around since the movie released both in theaters and streaming service (Peacock) day one, and it gained steam extremely fast as most people had not seen it yet. Currently, this illegal novelty is gaining ',(0,s.jsx)(i.a,{href:"https://www.reddit.com/r/discordapp/comments/17hx45y/is_discordnfp_an_ip_grabber/",children:"hundreds of upvotes within the r/discordapp subreddit"}),". The copy seems to be a compressed 720p encode. This example used ",(0,s.jsx)(i.code,{children:"discord.nfp.is"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"fnaf",src:t(3536).A+"",width:"1044",height:"409"})}),"\n",(0,s.jsx)(i.p,{children:"Note the ones listed here are the ones that I saw become extremely popular. There may be lesser known links that have been spread around privately or just did not cause enough noise for me to notice. Some less popular examples I've noticed, featuring more illicit copyrighted content distribution:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Top Gun Maverick (2022)"}),"\n",(0,s.jsx)(i.li,{children:"The SpongeBob trilogy (2005/2015/2020)"}),"\n",(0,s.jsx)(i.li,{children:"Spider-Man: Across the Spider-Verse (2023)"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"closing",children:"Closing"}),"\n",(0,s.jsx)(i.p,{children:"The ability to embed unusually large videos on Discord has enabled both positive and negative use cases. On the one hand, it allows high-quality content to be shared easily among friends. However, it has also facilitated mass copyright infringement by empowering virtually anyone with a Discord accound to freely spread pirated movies."}),"\n",(0,s.jsx)(i.p,{children:"While this is fascinating from a technical perspective, embedding techniques like these tread a fine ethical line. As with anything, it is important to be mindful of how our actions affect others, and I should remind everyone that content creators deserve to be compensated for their work. As users, we should support them by accessing their content via legitimate platforms."}),"\n",(0,s.jsx)(i.p,{children:"It is hard to say how long this exploit will continue to be usable. Instead of enabling piracy, which may cause Discord to be more likely to patch this exploit if they see it as a serious threat, let's instead use these capabilities responsibly to share our own creations, gaming highlights, and other media which we can share legally. Given some thoughtfulness, perhaps we can find a fair balance between respecting copyright law and appeasing Discord's sensibilities while allowing some creative flexibility on the platform."}),"\n",(0,s.jsx)(i.p,{children:"Thank you for reading this blog post, I hope you learned something!"})]})}function c(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},6364:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/clybius-av1-28dcfefe8d58784301332b8119d2e926.webp"},3312:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/clybius-dwayne-15341f187cb8e7dbfd5c4ee00451eabd.webp"},9395:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/discord-embed-blog-image-2bcaf4f73f5fa33664328756753f3041.webp"},3536:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/discordnfpis-fnaf-dab5b24a63605605e7c7882d20a992a3.webp"},5716:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/stolenshoes-mario-6de3b4071d4c09064d7323fec40530f4.webp"},6689:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/stolenshoes-puss-842a1f9165b7571d293a74be89da25c2.webp"},8453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>a});var s=t(6540);const n={},o=s.createContext(n);function r(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);