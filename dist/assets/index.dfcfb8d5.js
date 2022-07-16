import{r as a,o as n,c as t,a as s,w as e,F as o,b as l,d as p,e as i,f as u,g as c,h as r,v as g,i as d,p as v,j as k,k as m,l as f,m as h,n as b,q as y,s as C,t as P,u as x}from"./vendor.1e466b40.js";const w={name:"ExampleBasic"},S={class:"content"},T=s("h3",{style:{"border-bottom":"1px solid #eaecef","padding-bottom":"0.3em"}}," 1. Basic ",-1),E=s("p",null,"No options configured, 10 slides added to the carousel.",-1),M={class:"example-basic",style:{"margin-bottom":"50px"}},L={class:"preview"},N=s("img",{style:{width:"100%"},src:"https://via.placeholder.com/1080.png/09f/fff"},null,-1),j=p('<div class="template"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>carousel</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>carousel</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',1);w.render=function(p,i,u,c,r,g){const d=a("slide"),v=a("carousel");return n(),t("div",S,[T,E,s("div",M,[s("div",L,[s(v,null,{default:e((()=>[(n(),t(o,null,l(10,(a=>s(d,{key:a},{default:e((()=>[N])),_:2},1024))),64))])),_:1})]),j])])};const $={name:"ExampleResponsive"},A={class:"content"},D=s("h3",{style:{"border-bottom":"1px solid #eaecef","padding-bottom":"0.3em"}}," 2. Responsive ",-1),B=s("p",null," Configured breakpoints: 2 slides on mobile (<= 480px), 3 slides on tablet (<= 768). ",-1),H={class:"example-responsive",style:{"margin-bottom":"50px"}},V={class:"preview"},z=s("img",{style:{width:"100%"},src:"https://via.placeholder.com/1080.png/09f/fff"},null,-1),q=p('<div class="template"><p>Template</p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>carousel</span> <span class="token attr-name">:per-page-custom</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>[[480, 2], [768, 3]]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>carousel</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',1);$.render=function(p,i,u,c,r,g){const d=a("slide"),v=a("carousel");return n(),t("div",A,[D,B,s("div",H,[s("div",V,[s(v,{"per-page-custom":[[480,2],[768,3]]},{default:e((()=>[(n(),t(o,null,l(10,(a=>s(d,{key:a},{default:e((()=>[z])),_:2},1024))),64))])),_:1})]),q])])};const O={name:"ExampleScrollPerPage"},_={class:"content"},W=s("h3",{style:{"border-bottom":"1px solid #eaecef","padding-bottom":"0.3em"}}," 3. Scroll per page false ",-1),F=s("p",null," Instead of scrolling per page, the carousel will scroll on a per item basis or perPageCustom with each movement. ",-1),X={class:"example-scroll-per-page",style:{"margin-bottom":"50px"}},I={class:"preview"},R=s("img",{style:{width:"100%"},src:"https://via.placeholder.com/1080.png/09f/fff"},null,-1),Y=p('<div class="template"><p>Template</p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>carousel</span> <span class="token attr-name">:scroll-per-page</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>carousel</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',1);O.render=function(p,i,u,c,r,g){const d=a("slide"),v=a("carousel");return n(),t("div",_,[W,F,s("div",X,[s("div",I,[s(v,{"scroll-per-page":!1},{default:e((()=>[(n(),t(o,null,l(10,(a=>s(d,{key:a},{default:e((()=>[R])),_:2},1024))),64))])),_:1})]),Y])])};const G={name:"ExampleBasic"},K={class:"content"},Q=s("h3",{style:{"border-bottom":"1px solid #eaecef","padding-bottom":"0.3em"}}," 4. Adjust ",-1),U=s("p",null," Sometimes we need to show not the first slide. And do not want to reduce the score of page speed. ",-1),J={class:"example-basic",style:{"margin-bottom":"50px"}},Z={class:"preview"},aa=s("img",{src:"https://via.placeholder.com/1211x300.png/09f/fff"},null,-1),na=s("img",{src:"https://via.placeholder.com/1210x300.png/09f/fff"},null,-1),ta=s("img",{src:"https://via.placeholder.com/1211x300.png/09f/fff"},null,-1),sa=s("img",{src:"https://via.placeholder.com/1212x300.png/09f/fff"},null,-1),ea=p('<div class="template"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>carousel</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide <span class="token attr-name">:adjust</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>true</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>carousel</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',1);G.render=function(o,l,p,i,u,c){const r=a("slide"),g=a("carousel");return n(),t("div",K,[Q,U,s("div",J,[s("div",Z,[s(g,{"per-page":1,"navigate-to":1,navigationEnabled:!0},{default:e((()=>[s(r,{adjust:!0},{default:e((()=>[aa])),_:1}),s(r,null,{default:e((()=>[na])),_:1}),s(r,null,{default:e((()=>[ta])),_:1}),s(r,null,{default:e((()=>[sa])),_:1})])),_:1})]),ea])])};const oa={name:"App",components:{ExampleBasic:w,ExampleResponsive:$,ExampleScrollPerPage:O,ExampleAdjust:G},setup:()=>({slideCount:6})},la={id:"hero",style:{"margin-top":"50px","margin-bottom":"50px"}},pa=s("h1",{style:{"text-align":"center"}}," Vue Concise Carousel is SSR and CSR friendly. ",-1),ia=s("p",{class:"action",style:{"text-align":"center"}},[s("a",{class:"button",href:"#install"},"GET STARTED"),s("a",{class:"button white",href:"https://github.com/jambonn/vue-concise-carousel#readme"}," GITHUB ")],-1),ua={id:"example"},ca=s("img",{style:{width:"100%"},src:"https://via.placeholder.com/1080.png/09f/fff"},null,-1),ra=p('<div id="install" class="container"><h2 id="installation" style="border-bottom:1px solid #eaecef;padding-bottom:0.3em;"> Installation </h2><h3>yarn/npm</h3><pre class="language-bash"><code class="language-bash"><span class="token comment"># npm</span>\n<span class="token function">npm</span> i @jambonn/vue-concise-carousel\n<span class="token comment"># yarn</span>\n<span class="token function">yarn</span> <span class="token function">add</span> @jambonn/vue-concise-carousel</code></pre></div><div id="quick-start" class="container"><h2 style="border-bottom:1px solid #eaecef;padding-bottom:0.3em;"> Quick Start </h2><p> See <a href="https://github.com/jambonn/vue-concise-carousel#configuration"> Configuration </a> to learn advanced usage. </p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>carousel</span> <span class="token attr-name">:center-mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:navigation-enabled</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>carousel</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> { Carousel, Slide } <span class="token keyword">from</span> <span class="token string">&#39;@jambonn/vue-concise-carousel&#39;</span>\n  <span class="token keyword">import</span> <span class="token string">&#39;@jambonn/vue-concise-carousel/dist/vue-concise-carousel.css&#39;</span>\n\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    name<span class="token punctuation">:</span> <span class="token string">&#39;ConciseCarouselComponent&#39;</span><span class="token punctuation">,</span>\n    components<span class="token punctuation">:</span> <span class="token punctuation">{</span> Carousel, Slide <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></code></pre></div>',2),ga={id:"example-full",class:"container"},da=s("h2",{style:{"border-bottom":"1px solid #eaecef","padding-bottom":"0.3em"}}," Examples ",-1),va=s("div",{id:"license",class:"container"},[s("h2",{style:{"border-bottom":"1px solid #eaecef","padding-bottom":"0.3em"}}," License "),s("p",null,[i(" This software is licensed under the "),s("a",{href:"https://github.com/jambonn/vue-concise-carousel/blob/next/LICENSE.md"}," MIT "),i(" . ")])],-1);oa.render=function(p,i,u,c,r,g){const d=a("slide"),v=a("carousel"),k=a("example-basic"),m=a("example-responsive"),f=a("example-scroll-per-page"),h=a("example-adjust");return n(),t("div",la,[pa,ia,s("div",ua,[s(v,{"per-page-custom":[[480,1],[768,4]],"center-mode":!0,"navigation-enabled":!1},{default:e((()=>[(n(!0),t(o,null,l(c.slideCount,(a=>(n(),t(d,{key:a},{default:e((()=>[ca])),_:2},1024)))),128))])),_:1})]),ra,s("div",ga,[da,s(k),s(m),s(f),s(h)]),va])};const ka={name:"Navigation",emits:["navigation-click"],props:{clickTargetSize:{type:Number,default:8},nextLabel:{type:String,default:"&#9654"},prevLabel:{type:String,default:"&#9664"},canAdvanceForward:{type:Boolean,default:!1},canAdvanceBackward:{type:Boolean,default:!1}}},ma={class:"VueCarousel-navigation"};ka.render=function(a,e,o,l,p,i){return n(),t("div",ma,[s("button",{type:"button","aria-label":"Previous page",tabindex:o.canAdvanceBackward?0:-1,class:["VueCarousel-navigation-button VueCarousel-navigation-prev",{"VueCarousel-navigation--disabled":!o.canAdvanceBackward}],style:`padding: ${o.clickTargetSize}px; margin-right: -${o.clickTargetSize}px;`,onClick:e[1]||(e[1]=u((n=>a.$emit("navigation-click","backward")),["prevent"])),innerHTML:o.prevLabel},null,14,["tabindex","innerHTML"]),s("button",{type:"button","aria-label":"Next page",tabindex:o.canAdvanceForward?0:-1,onClick:e[2]||(e[2]=u((n=>a.$emit("navigation-click","forward")),["prevent"])),class:["VueCarousel-navigation-button VueCarousel-navigation-next",{"VueCarousel-navigation--disabled":!o.canAdvanceForward}],style:`padding: ${o.clickTargetSize}px; margin-left: -${o.clickTargetSize}px;`,innerHTML:o.nextLabel},null,14,["tabindex","innerHTML"])])};const fa={name:"Pagination",emits:["pagination-click"],props:{paginationPosition:{type:String,default:"bottom"},scrollPerPage:{type:Boolean,default:!0},maxPaginationDotCount:{type:Number,default:-1},paginationPadding:{type:Number,default:10},paginationSize:{type:Number,default:10},paginationActiveColor:{type:String,default:"#000000"},paginationColor:{type:String,default:"#efefef"},speed:{type:Number,default:500},pageCount:{type:Number,default:0},slideCount:{type:Number,default:0},currentPage:{type:Number,default:0}},setup(a,n){const t=c((()=>{const n=a.paginationPosition;return n.indexOf("overlay")<0?"":n})),s=c((()=>a.paginationPosition.indexOf("top")>=0?"bottom":"top")),e=c((()=>a.scrollPerPage?a.pageCount:a.slideCount||0)),o=c((()=>{if(-1===a.maxPaginationDotCount)return{"margin-top":2*a.paginationPadding+"px"};const n=2*a.paginationPadding,t=a.maxPaginationDotCount*(a.paginationSize+n);return{"margin-top":2*a.paginationPadding+"px",overflow:"hidden",width:`${t}px`,margin:"0 auto","white-space":"nowrap"}})),l=n=>n===a.currentPage;return{paginationPositionModifierName:t,paginationCount:e,dotContainerStyle:o,goToPage:a=>{n.emit("pagination-click",a)},isCurrentDot:l,dotStyle:n=>{const t={};if(t[`margin-${s.value}`]=2*a.paginationPadding+"px",Object.assign(t,{padding:`${a.paginationPadding}px`,width:`${a.paginationSize}px`,height:`${a.paginationSize}px`,"background-color":`${l(n)?a.paginationActiveColor:a.paginationColor}`}),-1===a.maxPaginationDotCount)return t;const e=a.paginationSize+2*a.paginationPadding,o=a.pageCount-a.maxPaginationDotCount,p=0-e*(a.currentPage>o?o:a.currentPage<=a.maxPaginationDotCount/2?0:a.currentPage-Math.ceil(a.maxPaginationDotCount/2)+1);return Object.assign(t,{"-webkit-transform":`translate3d(${p}px,0,0)`,transform:`translate3d(${p}px,0,0)`,"-webkit-transition":`-webkit-transform ${a.speed/1e3}s`,transition:`transform ${a.speed/1e3}s`})}}}};fa.render=function(a,e,p,i,c,d){return r((n(),t("div",{class:["VueCarousel-pagination",{[`VueCarousel-pagination--${i.paginationPositionModifierName}`]:i.paginationPositionModifierName}]},[s("div",{class:"VueCarousel-dot-container",role:"tablist",style:i.dotContainerStyle},[(n(!0),t(o,null,l(i.paginationCount,((a,s)=>(n(),t("button",{key:`${a}_${s}`,"aria-hidden":"false",role:"tab","aria-selected":i.isCurrentDot(s)?"true":"false",class:["VueCarousel-dot",{"VueCarousel-dot--active":i.isCurrentDot(s)}],onClick:u((a=>i.goToPage(s)),["prevent"]),style:i.dotStyle(s)},null,14,["aria-selected","onClick"])))),128))],4)],2)),[[g,p.pageCount>1]])};const ha={onwebkittransitionstart:"webkitTransitionStart",onmoztransitionstart:"transitionstart",onotransitionstart:"oTransitionStart otransitionstart",ontransitionstart:"transitionstart"},ba={onwebkittransitionend:"webkitTransitionEnd",onmoztransitionend:"transitionend",onotransitionend:"oTransitionEnd otransitionend",ontransitionend:"transitionend"},ya={name:"Carousel",components:{Navigation:ka,Pagination:fa},emits:["mounted","input","page-change","pagination","navigation-click","pagination-click","transition-start","transition-end"],props:{adjustableHeight:{type:Boolean,default:!1},adjustableHeightEasing:{type:String},centerMode:{type:Boolean,default:!1},easing:{type:String,validator:function(a){return-1!==["ease","linear","ease-in","ease-out","ease-in-out"].indexOf(a)||a.includes("cubic-bezier")},default:"ease"},loop:{type:Boolean,default:!1},minSwipeDistance:{type:Number,default:8},mouseDrag:{type:Boolean,default:!0},touchDrag:{type:Boolean,default:!0},navigateTo:{type:[Number,Array],default:0},navigationClickTargetSize:{type:Number,default:8},navigationEnabled:{type:Boolean,default:!1},navigationNextLabel:{type:String,default:"&#9654"},navigationPrevLabel:{type:String,default:"&#9664"},paginationActiveColor:{type:String,default:"#000000"},paginationColor:{type:String,default:"#efefef"},paginationEnabled:{type:Boolean,default:!0},paginationPadding:{type:Number,default:10},paginationPosition:{type:String,default:"bottom"},paginationSize:{type:Number,default:10},perPage:{type:Number,default:2},perPageCustom:{type:Array},resistanceCoef:{type:Number,default:20},scrollPerPage:{type:Boolean,default:!0},spacePadding:{type:Number,default:0},spacePaddingMaxOffsetFactor:{type:Number,default:0},speed:{type:Number,default:500},tagName:{type:String,default:"slide"},value:{type:Number},maxPaginationDotCount:{type:Number,default:-1},rtl:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!1},autoplayTimeout:{type:Number,default:2e3},autoplayHoverPause:{type:Boolean,default:!0},autoplayDirection:{type:String,default:"forward"},keyboard:{type:Boolean,default:!1}},setup(a,n){const t=d(null),s=d(0),e=d(0),o=d(!1),l=d(0),p=d(0),i=d(0),u=d(0),r="undefined"!=typeof window&&"ontouchstart"in window,g=d(0),y=d(16),C=d(0),P=d("transitionstart"),x=d("transitionend"),w=d("auto"),S=d(null),T=d(null),E=d(null),M=d([]),L=d(!1),N=d(!0),j=d(null),$=d(null),A=d(null),D=c((()=>{if(!a.perPageCustom)return a.perPage;const n=a.perPageCustom,s=t.value,e=n.sort(((a,n)=>a[0]>n[0]?-1:1)).filter((a=>s>=a[0]));return e[0]&&e[0][1]||a.perPage})),B=c((()=>a.loop||g.value<q.value)),H=c((()=>a.loop||e.value>0)),V=c((()=>a.perPageCustom&&"undefined"!=typeof window?D.value:a.perPage)),z=c((()=>F.value?0:a.rtl?g.value-p.value:-1*(g.value+p.value))),q=c((()=>Math.max(_.value*(C.value-V.value)-a.spacePadding*a.spacePaddingMaxOffsetFactor,0))),O=c((()=>a.scrollPerPage?Math.ceil(C.value/V.value):C.value-V.value+1)),_=c((()=>(s.value-2*a.spacePadding)/V.value)),W=c((()=>C.value>V.value)),F=c((()=>a.centerMode&&!W.value)),X=c((()=>{const n=a.speed/1e3+"s",t=`${n} ${a.easing} transform`;return a.adjustableHeight?`${t}, height ${n} ${a.adjustableHeightEasing||a.easing}`:t})),I=c((()=>{const n=a.spacePadding;return n>0&&n})),R=()=>{E.value&&(clearInterval(E.value),E.value=null)},Y=()=>{a.autoplay&&(E.value=setInterval(K,a.autoplayTimeout))},G=()=>{R(),Y()},K=()=>{Q(a.autoplayDirection)},Q=n=>{n&&"backward"===n&&H.value?aa(e.value>0?e.value-1:a.loop?O.value-1:e.value,"navigation"):(!n||n&&"backward"!==n)&&B.value&&aa(e.value<O.value-1?+e.value+1:a.loop?0:e.value,"navigation")},U=()=>(t.value=window.innerWidth,t.value),J=()=>{if(!a.adjustableHeight)return"auto";const n=V.value*(+e.value+1)-1,t=[...Array(V.value)].map(((a,t)=>Z(n+t))).reduce(((a,n)=>Math.max(a,n&&n.clientHeight||0)),0);return w.value=0===t?"auto":`${t}px`,w.value},Z=a=>M.value[a],aa=(t,s)=>{if(t>=0&&t<=(O.value||a.value)){if(ga.value&&!L.value){if(N.value&&t===a.navigateTo)return e.value=a.navigateTo,void(N.value=!1);o.value=!0,da(),setTimeout((()=>{o.value=!1}),y.value)}g.value=a.scrollPerPage?Math.min(_.value*V.value*t,q.value):_.value*t,a.autoplay&&!a.autoplayHoverPause&&G(),e.value=t,l.value=0,"pagination"===s&&(R(),n.emit("pagination-click",t))}},na=a=>{2!==a.button&&(document.addEventListener(r?"touchend":"mouseup",ta,!0),document.addEventListener(r?"touchmove":"mousemove",sa,!0),T.value=a.timeStamp,o.value=!0,u.value=r?a.touches[0].clientX:a.clientX,i.value=r?a.touches[0].clientY:a.clientY)},ta=n=>{a.autoplay&&!a.autoplayHoverPause&&G(),R();const t=r?n.changedTouches[0].clientX:n.clientX,s=u.value-t;if(l.value=s/(n.timeStamp-T.value),0!==a.minSwipeDistance&&Math.abs(s)>=a.minSwipeDistance){const n=a.scrollPerPage?_.value*V.value:_.value;p.value=p.value+Math.sign(s)*(n/2)}a.rtl?g.value-=p.value:g.value+=p.value,p.value=0,o.value=!1,oa(),document.removeEventListener(r?"touchend":"mouseup",ta,!0),document.removeEventListener(r?"touchmove":"mousemove",sa,!0)},sa=n=>{if(ga.value&&!L.value&&e.value>0)return void da();const t=r?n.touches[0].clientX:n.clientX,s=r?n.touches[0].clientY:n.clientY,o=u.value-t,l=i.value-s;if(r&&Math.abs(o)<Math.abs(l))return;p.value=o;const c=g.value+p.value;a.rtl?0===g.value&&p.value>0?p.value=Math.sqrt(a.resistanceCoef*p.value):g.value===q.value&&p.value<0&&(p.value=-Math.sqrt(-a.resistanceCoef*p.value)):c<0?p.value=-Math.sqrt(-a.resistanceCoef*p.value):c>q.value&&(p.value=Math.sqrt(a.resistanceCoef*p.value))},ea=()=>{la(),pa(),o.value=!0,oa(),setTimeout((()=>{o.value=!1}),y.value)},oa=()=>{a.rtl?g.value-=Math.max(1-V.value,Math.min(Math.round(l.value),V.value-1))*_.value:g.value+=Math.max(1-V.value,Math.min(Math.round(l.value),V.value-1))*_.value;const n=a.scrollPerPage?_.value*V.value:_.value,t=n*Math.floor(C.value/(V.value-1)),s=t+_.value*(C.value%V.value);g.value>(t+s)/2?g.value=s:g.value=n*Math.round(g.value/n),g.value=Math.max(0,Math.min(g.value,q.value)),e.value=a.scrollPerPage?Math.round(g.value/_.value/V.value):Math.round(g.value/_.value)},la=()=>{(()=>{if(j.value){const a=j.value.querySelectorAll(".VueCarousel-slide:not(.VueCarousel-slide-adjust)");M.value=a,C.value=a.length}})(),U(),(()=>{if(j.value){const a=j.value.getElementsByClassName("VueCarousel-inner");for(let n=0;n<a.length;n++)a[n].clientWidth>0&&(s.value=a[n].clientWidth||0)}s.value})(),ia()},pa=()=>{J()},ia=()=>{if(!B.value&&a.scrollPerPage){const a=O.value-1;e.value=a>=0?a:0,g.value=Math.max(0,Math.min(g.value,q.value))}},ua=()=>{n.emit("transition-start")},ca=()=>{n.emit("transition-end")},ra=({keyCode:a})=>{const n=37===a,t=39===a;H.value&&n&&Q("backward"),B.value&&t&&Q("forward")},ga=c((()=>!!j.value&&null!==j.value.querySelector(".VueCarousel-slide-adjust"))),da=()=>{if(ga.value&&!L.value){e.value>0&&(g.value=a.scrollPerPage?Math.min(_.value*V.value*e.value,q.value):_.value*e.value);const n=j.value.querySelector(".VueCarousel-slide-adjust");n&&n.parentElement.removeChild(n),L.value=!0}};return v("carousel",{isTouch:r,dragStartX:u,minSwipeDistance:a.minSwipeDistance,adjustableHeight:a.adjustableHeight}),k((()=>a.value),(a=>{a!==e.value&&(aa(a),oa())})),k((()=>a.navigateTo),(a=>{"object"==typeof a?(!1===a[1]&&(o.value=!0,setTimeout((()=>{o.value=!1}),y.value)),b((()=>{aa(a[0])}))):b((()=>{aa(a)}))}),{immediate:!0}),k((()=>a.autoplay),(a=>{a?G():R()})),k(e,(t=>{j.value&&(n.emit("page-change",t),n.emit("input",t),e.value!==a.navigateTo&&da())})),m((()=>{Y(),a.autoplayHoverPause&&(j.value.addEventListener("mouseenter",R),j.value.addEventListener("mouseleave",Y)),a.keyboard&&window.addEventListener("keydown",ra),window.addEventListener("resize",((a,n,t)=>{let s;return()=>{const e=void 0,o=t&&!s;clearTimeout(s),s=setTimeout((()=>{s=null,t||a.apply(e)}),n),o&&a.apply(e)}})(ea,y.value)),(r&&a.touchDrag||a.mouseDrag)&&$.value.addEventListener(r?"touchstart":"mousedown",na,{passive:!0}),(()=>{const n=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(n){let t={attributes:!0,data:!0};if(a.adjustableHeight){const a={childList:!0,subtree:!0,characterData:!0};t=Object.assign({},t,a)}if(S.value=new n((()=>{b((()=>{la(),pa()}))})),j.value){const a=j.value.getElementsByClassName("VueCarousel-inner");for(let n=0;n<a.length;n++)S.value.observe(a[n],t)}}})(),la(),pa(),P.value=(()=>{for(let a in ha)if(a in window)return ha[a]})(),A.value.addEventListener(P.value,ua),x.value=(()=>{for(let a in ba)if(a in window)return ba[a]})(),A.value.addEventListener(x.value,ca),n.emit("mounted"),"backward"===a.autoplayDirection&&(o.value=!0,setTimeout((()=>{o.value=!1}),y.value),b((()=>{aa(O.value)})))})),f((()=>{la()})),h((()=>{S.value&&S.value.disconnect(),a.autoplayHoverPause&&(j.value.removeEventListener("mouseenter",R),j.value.removeEventListener("mouseleave",Y)),a.keyboard&&window.removeEventListener("keydown",ra),window.removeEventListener("resize",U),A.value.removeEventListener(P.value,ua),A.value.removeEventListener(x.value,ca),$.value.removeEventListener(r?"touchstart":"mousedown",na,!0)})),{vueConciseCarousel:j,vueCarouselWrapper:$,vueCarouselInner:A,isCenterModeEnabled:F,offset:g,maxOffset:q,currentOffset:z,dragging:o,transitionStyle:X,slideWidth:_,currentHeight:w,padding:I,isNavigationRequired:W,pageCount:O,slideCount:C,currentPerPage:V,currentPage:e,canAdvanceForward:B,canAdvanceBackward:H,restartAutoplay:G,pauseAutoplay:R,computeCarouselHeight:pa,getCarouselHeight:J,handleNavigation:a=>{Q(a),R(),n.emit("navigation-click",a)},goToPage:aa}}},Ca={class:"VueCarousel-wrapper",ref:"vueCarouselWrapper"};ya.render=function(e,o,l,p,i,u){const c=a("Navigation"),r=a("Pagination");return n(),t("div",{ref:"vueConciseCarousel",class:["VueCarousel",{"VueCarousel--reverse":"top"===l.paginationPosition}]},[s("div",Ca,[s("div",{ref:"vueCarouselInner",class:["VueCarousel-inner",{"VueCarousel-inner--center":p.isCenterModeEnabled}],style:{transform:`translate(${p.currentOffset}px, 0)`,transition:p.dragging?"none":p.transitionStyle,"ms-flex-preferred-size":`${p.slideWidth}px`,"webkit-flex-basis":`${p.slideWidth}px`,"flex-basis":`${p.slideWidth}px`,visibility:p.slideWidth?"visible":"hidden",height:`${p.currentHeight}`,"padding-left":`${p.padding}px`,"padding-right":`${p.padding}px`}},[y(e.$slots,"default")],6)],512),l.navigationEnabled&&p.isNavigationRequired?y(e.$slots,"navigation",{key:0},(()=>[s(c,{clickTargetSize:l.navigationClickTargetSize,nextLabel:l.navigationNextLabel,prevLabel:l.navigationPrevLabel,canAdvanceForward:p.canAdvanceForward,canAdvanceBackward:p.canAdvanceBackward,onNavigationClick:p.handleNavigation},null,8,["clickTargetSize","nextLabel","prevLabel","canAdvanceForward","canAdvanceBackward","onNavigationClick"])])):C("",!0),l.paginationEnabled?y(e.$slots,"pagination",{key:1},(()=>[s(r,{paginationPosition:l.paginationPosition,scrollPerPage:l.scrollPerPage,maxPaginationDotCount:l.maxPaginationDotCount,paginationPadding:l.paginationPadding,paginationSize:l.paginationSize,paginationActiveColor:l.paginationActiveColor,paginationColor:l.paginationColor,speed:l.speed,pageCount:p.pageCount,slideCount:p.slideCount,currentPage:p.currentPage,onPaginationClick:o[1]||(o[1]=a=>p.goToPage(a,"pagination"))},null,8,["paginationPosition","scrollPerPage","maxPaginationDotCount","paginationPadding","paginationSize","paginationActiveColor","paginationColor","speed","pageCount","slideCount","currentPage"])])):C("",!0)],2)};const Pa={name:"Slide",emits:["slide-click"],props:{adjust:{type:Boolean,default:!1}},setup(a,n){const t=P("carousel"),s=d(null),e=c((()=>t.adjustableHeight)),o=a=>{const s=t.isTouch&&a.changedTouches&&a.changedTouches.length>0?a.changedTouches[0].clientX:a.clientX,e=t.dragStartX.value-s;(0===t.minSwipeDistance||Math.abs(e)<t.minSwipeDistance)&&n.emit("slide-click",Object.assign({},a.currentTarget.dataset))};return m((()=>{b((()=>{s.value.addEventListener("dragstart",(a=>a.preventDefault())),s.value.addEventListener(t.isTouch?"touchend":"mouseup",o,!0)}))})),h((()=>{s.value.removeEventListener("dragstart",(a=>a.preventDefault())),s.value.removeEventListener(t.isTouch?"touchend":"mouseup",o,!0)})),{vueCarouselSlide:s,isAdjustableHeight:e}}};Pa.render=function(a,s,e,o,l,p){return n(),t("div",{ref:"vueCarouselSlide",tabindex:"-1",role:"tabpanel",class:["VueCarousel-slide",{"VueCarousel-slide-adjustableHeight":o.isAdjustableHeight,"VueCarousel-slide-adjust":e.adjust}]},[y(a.$slots,"default")],2)};const xa=x(oa);xa.component(ya.name,ya),xa.component(Pa.name,Pa),xa.mount("#app");
