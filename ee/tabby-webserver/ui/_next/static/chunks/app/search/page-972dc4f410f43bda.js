(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2797],{72845:function(e,t,n){Promise.resolve().then(n.bind(n,4294))},4294:function(e,t,n){"use strict";n.r(t),n.d(t,{Search:function(){return P},SearchContext:function(){return F}});var s=n(36164),r=n(3546),a=n(42891),l=n.n(a),o=n(11978),i={src:"/_next/static/media/default-favicon.a2df8fbb.png",height:16,width:16,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABAElEQVR42mOAAqaMgrXeIYlL2jwjF7WZey7wBolB5eyZotNX1PdMO/Br466r/89dfvx/w7aLv6LSlteDFem5zPPesPXir20Hbv7ftPfGrz9///969urL/xkLj/0KjlvqzZCct6rt9r3X/w+cvP/r8fOP/0Hg/uN3vzbsvPq/rmVzG0Nk+oq2J8/f///89devOw/f/n/7/uv/T19+/Dpx7uH/3NK1bQwMarO8tu66/Auk89qd17/mrzn/682H7//3H7rxi4FhsheDDYMhU0DC0vqde6/+On/lyf/5q878X7Tq9M+E7JX1cJ/4MpgzMajO9ApNXtoWl7mszc5nvhdMEgB1uZJfA01kRAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},c=n(62226),d=n.n(c),u=n(6797),m=n.n(u),f=n(66686),x=n(56575),p=n(64148),h=n(93668),g=n(21808),v=n(93877),j=n(9010),N=n(16784),y=n(80605),b=n(49142),w=n(3765),_=n(74248),k=n(31458),S=n(90958),A=n(90615),C=n(81565),E=n(57830),I=n(11208),R=n(3448),T=n(72657),z=n(68172),L=n(48537),O=n(30601),q=n(73033),H=n(94529),X=n(63743),M=n(52569),Y=n(7449);n(2489);var D=n(40055),Z=n(70410),V=n(80054);let F=(0,r.createContext)({}),G=(e,t)=>(0,w.Z)(e,{...t,responseFormatter:e=>e,errorHandler(e){throw Error(e?String(e.status):"Fail to fetch")}}),J={compress:5.3,expand:6.3};function P(){let e;let t=(0,y.xG)(),[n]=(0,v.Ot)(),[a,l]=(0,r.useState)([]),[i,c]=(0,r.useState)(!0),[d,u]=(0,r.useState)(null),[m,f]=(0,r.useState)(""),[p,h]=(0,r.useState)(!1),[w,S]=(0,r.useState)({}),[A,R]=(0,r.useState)(""),L=(0,r.useRef)(null),[q,V]=(0,r.useState)(!1),[J]=(0,O.Hb)(),P=(0,o.useRouter)(),B=(0,r.useRef)(!1),{theme:K}=(0,j.X)(),[{data:W}]=(0,D.aM)({query:Z.zz}),Q=null==W?void 0:W.repositoryList,{triggerRequest:ee,isLoading:et,error:en,answer:es,stop:er}=(0,b.t)({fetcher:G}),ea=(0,N.d)(et);(0,r.useEffect)(()=>{if(B.current)return;B.current=!0;let e=sessionStorage.getItem(g.$6.SEARCH_INITIAL_MSG),t=sessionStorage.getItem(g.$6.SEARCH_INITIAL_EXTRA_CONTEXT),n=t?JSON.parse(t):void 0;if(e){sessionStorage.removeItem(g.$6.SEARCH_INITIAL_MSG),sessionStorage.removeItem(g.$6.SEARCH_INITIAL_EXTRA_CONTEXT),h(!0),S(e=>({...e,repository:null==n?void 0:n.repository})),el(e,{repository:null==n?void 0:n.repository});return}let s=sessionStorage.getItem(g.$6.SEARCH_LATEST_MSG),r=sessionStorage.getItem(g.$6.SEARCH_LATEST_EXTRA_CONTEXT);if(s){let e=JSON.parse(s);if(l(e),r){let e=JSON.parse(r);S(e)}e[0]&&f(e[0].content);let t=e.findIndex(e=>e.isLoading);if(-1!==t){let n=e[t];n&&eo(n.id,e)}h(!0);return}P.replace("/")},[]),(0,r.useEffect)(()=>{m&&(document.title=m)},[m]),(0,r.useEffect)(()=>{p&&setTimeout(()=>{V(!0)},300)},[p]),(0,r.useEffect)(()=>{var e;u(null==L?void 0:null===(e=L.current)||void 0===e?void 0:e.children[1])},[null==L?void 0:L.current]),(0,r.useEffect)(()=>{let e=[...a],t=e.find(e=>e.id===A);t&&(t.content=(null==es?void 0:es.answer_delta)||"",t.relevant_code=null==es?void 0:es.relevant_code,t.relevant_documents=null==es?void 0:es.relevant_documents,t.relevant_questions=null==es?void 0:es.relevant_questions,t.isLoading=et,l(e))},[et,es]),(0,r.useEffect)(()=>{if(en){let e=[...a],t=e.find(e=>e.id===A);t&&(t.error="401"===en.message?"Unauthorized":"Fail to fetch",t.isLoading=!1)}},[en]),(0,r.useEffect)(()=>(ea.current&&(e=window.setTimeout(()=>{if(ea.current&&(c(!0),d)){let e=A===a[a.length-1].id;e&&d.scrollTo({top:d.scrollHeight,behavior:"smooth"})}},300)),ea.current||c(!1),()=>{window.clearTimeout(e)}),[et]),(0,r.useEffect)(()=>()=>{ea.current&&er()},[]),(0,r.useEffect)(()=>{sessionStorage.setItem(g.$6.SEARCH_LATEST_MSG,JSON.stringify(a))},[a]),(0,r.useEffect)(()=>{sessionStorage.setItem(g.$6.SEARCH_LATEST_EXTRA_CONTEXT,JSON.stringify(w))},[w]);let el=(e,t)=>{let n=a.map(e=>({role:e.role,id:e.id,content:e.content})),s=n.length>0&&n[0].id,r=(0,x.x0)(),o={id:s||(0,x.x0)(),role:"user",content:e},i=(null==t?void 0:t.repository)||(null==w?void 0:w.repository),c=i?{git_url:i.gitUrl,content:""}:void 0,d={messages:[...n,o],doc_query:!0,generate_relevant_questions:!0,collect_relevant_code_using_user_message:!0,code_query:c};R(r),l([...a].concat([o,{id:r,role:"assistant",content:"",isLoading:!0}])),ee(d),m||f(e)},eo=(e,t)=>{let n=t||a,s=n.findIndex(t=>t.id===e);if(s<1)return;let r=s-1,o=n[r],i=n.slice(0,r).map(e=>({role:e.role,id:e.id,content:e.content,code_query:e.code_query})),c={role:"user",id:o.id,content:o.content},d={messages:[...i,c],code_query:(null==w?void 0:w.repository)?{git_url:w.repository.gitUrl,content:""}:void 0,doc_query:!0,generate_relevant_questions:!0,collect_relevant_code_using_user_message:!0},u=[...n],m=u[s];m.content="",m.relevant_code=void 0,m.relevant_documents=void 0,m.error=void 0,m.isLoading=!0,R(m.id),l(u),ee(d)};if(!n.value||!t||!p)return(0,s.jsx)(s.Fragment,{});let ei=J?{height:"calc(100vh - ".concat(O.wt,")")}:{height:"100vh"};return(0,s.jsx)(F.Provider,{value:{isLoading:et,onRegenerateResponse:eo,onSubmitSearch:el,extraRequestContext:w,repositoryList:Q},children:(0,s.jsxs)("div",{className:"transition-all",style:ei,children:[(0,s.jsxs)("header",{className:"flex h-16 items-center justify-between px-4",children:[(0,s.jsx)("div",{className:"flex items-center gap-x-6",children:(0,s.jsxs)(k.z,{variant:"ghost",className:"-ml-1 pl-0 text-sm text-muted-foreground",onClick:()=>P.back(),children:[(0,s.jsx)(C.IconChevronLeft,{className:"mr-1 h-5 w-5"}),"Home"]})}),(0,s.jsxs)("div",{className:"flex items-center gap-x-6",children:[(0,s.jsx)(z.q,{children:(0,s.jsx)(X.T,{})}),(0,s.jsx)(Y.Z,{showHome:!1,showSetting:!0,children:(0,s.jsx)(M.Y,{className:"h-10 w-10 border"})})]})]}),(0,s.jsxs)("main",{className:"h-[calc(100%-4rem)] overflow-auto pb-8 lg:pb-0",children:[(0,s.jsx)(E.ScrollArea,{className:"h-full",ref:L,children:(0,s.jsx)("div",{className:"mx-auto px-4 pb-24 lg:max-w-4xl lg:px-0",children:(0,s.jsx)("div",{className:"flex flex-col",children:a.map((e,t)=>"user"===e.role?(0,s.jsxs)("div",{children:[0!==t&&(0,s.jsx)(I.Z,{}),(0,s.jsx)("div",{className:"pb-2 pt-8",children:(0,s.jsx)($,{message:e.content,headline:!0})})]},e.id+t):"assistant"===e.role?(0,s.jsx)("div",{className:"pb-8 pt-2",children:(0,s.jsx)(U,{answer:e,showRelatedQuestion:t===a.length-1})},e.id+t):(0,s.jsx)(s.Fragment,{}))})})}),d&&(0,s.jsx)(T.K,{className:"!fixed !bottom-[5.4rem] !right-4 !top-auto border-muted-foreground lg:!bottom-[2.85rem]",container:d,offset:100,style:"dark"===K?{"--background":"0 0% 12%"}:{}}),(0,s.jsxs)("div",{className:(0,_.cn)("fixed bottom-5 left-0 z-30 flex min-h-[5rem] w-full flex-col items-center gap-y-2",{"opacity-100 translate-y-0":q,"opacity-0 translate-y-10":!q}),style:Object.assign({transition:"all 0.35s ease-out"},"dark"===K?{"--background":"0 0% 12%"}:{}),children:[(0,s.jsxs)(k.z,{className:(0,_.cn)("bg-background",{"opacity-0 pointer-events-none":!i,"opacity-100":i}),style:{transition:"opacity 0.55s ease-out"},variant:"outline",onClick:er,children:[(0,s.jsx)(C.IconStop,{className:"mr-2"}),"Stop generating"]}),(0,s.jsx)("div",{className:"relative z-20 flex justify-center self-stretch px-4",children:(0,s.jsx)(H.Z,{onSearch:el,className:"lg:max-w-4xl",placeholder:"Ask a follow up question",isLoading:et,isFollowup:!0,extraContext:w})})]})]})]})})}function U(e){var t;let{answer:n,showRelatedQuestion:a}=e,{onRegenerateResponse:l,onSubmitSearch:o,isLoading:i}=(0,r.useContext)(F),[c,d]=(0,r.useState)(!1),u=n.isLoading?C.IconSpinner:C.IconSparkles,m=n.relevant_documents?Math.ceil(n.relevant_documents.length/4)*J.expand+.5*Math.floor(n.relevant_documents.length/4):0,f=(0,r.useMemo)(()=>{var e,t;return null!==(t=null==n?void 0:null===(e=n.relevant_code)||void 0===e?void 0:e.map(e=>{var t;let n=null!==(t=null==e?void 0:e.start_line)&&void 0!==t?t:0,s=e.body.split("\n").length;return{kind:"file",range:{start:n,end:n+s-1},filepath:e.filepath,content:e.body,git_url:e.git_url}}))&&void 0!==t?t:[]},[null==n?void 0:n.relevant_code]);return(0,s.jsxs)("div",{className:"flex flex-col gap-y-5",children:[n.relevant_documents&&n.relevant_documents.length>0&&(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"mb-1 flex items-center gap-x-2",children:[(0,s.jsx)(C.IconBlocks,{className:"relative",style:{top:"-0.04rem"}}),(0,s.jsx)("p",{className:"text-sm font-bold leading-normal",children:"Sources"})]}),(0,s.jsx)("div",{className:"gap-sm grid grid-cols-3 gap-2 overflow-hidden md:grid-cols-4",style:{transition:"height 0.25s ease-out",height:c?"".concat(m,"rem"):"".concat(J.compress,"rem")},children:n.relevant_documents.map((e,t)=>(0,s.jsx)(K,{source:e,showMore:c},e.link+t))}),(0,s.jsxs)(k.z,{variant:"ghost",className:"-ml-1.5 mt-1 flex items-center gap-x-1 px-1 py-2 text-sm font-normal text-muted-foreground",onClick:()=>d(!c),children:[(0,s.jsx)(C.IconChevronRight,{className:(0,_.cn)({"-rotate-90":c,"rotate-90":!c})}),(0,s.jsx)("p",{children:c?"Show less":"Show more"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"mb-1 flex items-center gap-x-1.5",children:[(0,s.jsx)(u,{className:(0,_.cn)({"animate-spinner":n.isLoading})}),(0,s.jsx)("p",{className:"text-sm font-bold leading-none",children:"Answer"})]}),n.relevant_code&&n.relevant_code.length>0&&(0,s.jsx)(V.q,{contexts:f,className:"mt-1 text-sm",onContextClick:e=>{if(!e.filepath)return;let t=new URL("".concat(window.location.origin,"/files")),n=new URLSearchParams;n.append("redirect_filepath",e.filepath),n.append("redirect_git_url",e.git_url),t.search=n.toString();let s=(0,_.nO)({start:e.range.start,end:e.range.end});s&&(t.hash=s),window.open(t.toString())},defaultOpen:!0}),n.isLoading&&!n.content&&(0,s.jsx)(R.O,{className:"mt-1 h-40 w-full"}),(0,s.jsx)($,{message:n.content,sources:n.relevant_documents}),n.error&&(0,s.jsx)(Q,{error:n.error}),!n.isLoading&&(0,s.jsxs)("div",{className:"mt-3 flex items-center gap-x-3 text-sm",children:[(0,s.jsx)(L.q,{className:"-ml-1.5 gap-x-1 px-1 font-normal text-muted-foreground",value:(e=>{if(!e.relevant_documents)return e.content;let t=e.content.replace(/\[\[?citation:\s*\d+\]?\]/g,(e,t)=>{let n=null==e?void 0:e.match(/\d+/);return"[".concat(n,"]")}).trim(),n=e.relevant_documents.map((e,t)=>"[".concat(t+1,"] ").concat(e.link)).join("\n");return"".concat(t,"\n\nCitations:\n").concat(n)})(n),text:"Copy"}),!i&&(0,s.jsxs)(k.z,{className:"flex items-center gap-x-1 px-1 font-normal text-muted-foreground",variant:"ghost",onClick:()=>l(n.id),children:[(0,s.jsx)(C.IconRefresh,{}),(0,s.jsx)("p",{children:"Regenerate"})]})]})]}),a&&!n.isLoading&&n.relevant_questions&&n.relevant_questions.length>0&&(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex items-center gap-x-1.5",children:[(0,s.jsx)(C.IconLayers,{}),(0,s.jsx)("p",{className:"text-sm font-bold leading-none",children:"Suggestions"})]}),(0,s.jsx)("div",{className:"mt-2 flex flex-col gap-y-3",children:null===(t=n.relevant_questions)||void 0===t?void 0:t.map((e,t)=>(0,s.jsxs)("div",{className:"flex cursor-pointer items-center justify-between rounded-lg border p-4 py-3 transition-opacity hover:opacity-70",onClick:o.bind(null,e),children:[(0,s.jsx)("p",{className:"w-full overflow-hidden text-ellipsis text-sm",children:e}),(0,s.jsx)(C.IconPlus,{})]},t))})]})]})}let B=e=>{let t=d().sanitize(e,{ALLOWED_TAGS:[],ALLOWED_ATTR:[]}),n=f.TU.parse(t),s=m().decode(n),r=s.replace(/<\/?[^>]+(>|$)/g,"");return r};function K(e){let{source:t,showMore:n}=e,{hostname:r}=new URL(t.link);return(0,s.jsxs)("div",{className:"flex cursor-pointer flex-col justify-between gap-y-1 rounded-lg border bg-card p-3 hover:bg-card/60",style:{height:n?"".concat(J.expand,"rem"):"".concat(J.compress,"rem"),transition:"all 0.25s ease-out"},onClick:()=>window.open(t.link),children:[(0,s.jsxs)("div",{className:"flex flex-col gap-y-0.5",children:[(0,s.jsx)("p",{className:"line-clamp-1 w-full overflow-hidden text-ellipsis break-all text-xs font-semibold",children:t.title}),(0,s.jsx)("p",{className:(0,_.cn)(" w-full overflow-hidden text-ellipsis break-all text-xs text-muted-foreground",{"line-clamp-2":n,"line-clamp-1":!n}),children:B(t.snippet)})]}),(0,s.jsx)("div",{className:"flex items-center text-xs text-muted-foreground",children:(0,s.jsxs)("div",{className:"flex w-full flex-1 items-center",children:[(0,s.jsx)(W,{hostname:r}),(0,s.jsx)("p",{className:"ml-1 overflow-hidden text-ellipsis",children:r.replace("www.","").split("/")[0]})]})})]})}function $(e){let{message:t,headline:n=!1,sources:r}=e,a=(e,t)=>{let n=/\[\[?citation:\s*\d+\]?\]/g,a=e.split(n),l=e.match(n);return(0,s.jsx)("span",{children:a.map((e,t)=>{let n=null==l?void 0:l[t],a=null==n?void 0:n.match(/\d+/),o=a?parseInt(a[0],10):null,i=null!==o?null==r?void 0:r[o-1]:null,c=i?new URL(i.link):null;return(0,s.jsxs)("span",{children:[e&&(0,s.jsx)("span",{children:e}),i&&(0,s.jsxs)(A.zs,{children:[(0,s.jsx)(A.Yi,{children:(0,s.jsx)("span",{className:"relative -top-2 mr-0.5 inline-block h-4 w-4 cursor-pointer rounded-full bg-muted text-center text-xs",onClick:()=>window.open(i.link),children:o})}),(0,s.jsx)(A.bZ,{className:"w-96 text-sm",children:(0,s.jsxs)("div",{className:"flex w-full flex-col gap-y-1",children:[(0,s.jsxs)("div",{className:"m-0 flex items-center space-x-1 text-xs leading-none text-muted-foreground",children:[(0,s.jsx)(W,{hostname:c.hostname,className:"m-0 mr-1 leading-none"}),(0,s.jsx)("p",{className:"m-0 leading-none",children:c.hostname})]}),(0,s.jsx)("p",{className:"m-0 cursor-pointer font-bold leading-none transition-opacity hover:opacity-70",onClick:()=>window.open(i.link),children:i.title}),(0,s.jsx)("p",{className:"m-0 line-clamp-4 leading-none",children:B(i.snippet)})]})})]})]},t)})},t)};return(0,s.jsx)(q.s,{className:"prose max-w-none break-words dark:prose-invert prose-p:leading-relaxed prose-pre:mt-1 prose-pre:p-0",remarkPlugins:[p.Z,h.Z],components:{p(e){let{children:t}=e;return n?(0,s.jsx)("h3",{className:"break-anywhere cursor-text scroll-m-20 text-xl font-semibold tracking-tight",children:t}):t.length?(0,s.jsx)("div",{className:"mb-2 inline-block leading-relaxed last:mb-0",children:t.map((e,t)=>"string"==typeof e?a(e,t):(0,s.jsx)("span",{children:e},t))}):(0,s.jsx)("p",{className:"mb-2 last:mb-0",children:t})},li(e){let{children:t}=e;return t&&t.length?(0,s.jsx)("li",{children:t.map((e,t)=>"string"==typeof e?a(e,t):(0,s.jsx)("span",{children:e},t))}):(0,s.jsx)("li",{children:t})},code(e){let{node:t,inline:n,className:r,children:a,...l}=e;if(a.length){if("▍"==a[0])return(0,s.jsx)("span",{className:"mt-1 animate-pulse cursor-default",children:"▍"});a[0]=a[0].replace("`▍`","▍")}let o=/language-(\w+)/.exec(r||"");return n?(0,s.jsx)("code",{className:r,...l,children:a}):(0,s.jsx)(S.dn,{language:o&&o[1]||"",value:String(a).replace(/\n$/,""),...l},Math.random())}},children:t})}function W(e){let{hostname:t,className:n}=e,[a,o]=(0,r.useState)(!1);return(0,s.jsxs)("div",{className:"relative h-3.5 w-3.5",children:[(0,s.jsx)(l(),{src:i,alt:t,width:14,height:14,className:(0,_.cn)("absolute left-0 top-0 z-0 h-3.5 w-3.5 rounded-full leading-none",n)}),(0,s.jsx)(l(),{src:"https://s2.googleusercontent.com/s2/favicons?sz=128&domain_url=".concat(t),alt:t,width:14,height:14,className:(0,_.cn)("relative z-10 h-3.5 w-3.5 rounded-full bg-card leading-none",n,{"opacity-0":!a}),onLoad:()=>{o(!0)}})]})}function Q(e){let{error:t="Fail to fetch"}=e,n=(0,r.useMemo)(()=>"```\n"+JSON.stringify({error:!0,message:t},null,2)+"\n```",[t]);return(0,s.jsx)(q.s,{className:"prose-full-width prose break-words text-sm dark:prose-invert prose-p:leading-relaxed prose-pre:mt-1 prose-pre:p-0",remarkPlugins:[p.Z,h.Z],components:{code(e){let{node:t,inline:n,className:r,children:a,...l}=e;return(0,s.jsx)("div",{...l,className:(0,_.cn)(r,"bg-zinc-950 p-2"),children:a})}},children:n})}},68172:function(e,t,n){"use strict";n.d(t,{q:function(){return a}});var s=n(36164),r=n(38785);function a(e){let{children:t,fallback:n=null}=e;return(0,r.U)()?(0,s.jsx)(s.Fragment,{children:t}):(0,s.jsx)(s.Fragment,{children:n})}},30601:function(e,t,n){"use strict";n.d(t,{Hb:function(){return f},wt:function(){return d},xc:function(){return x},yo:function(){return m}});var s=n(36164),r=n(3546),a=n(74630),l=n(36327),o=n(80605),i=n(74248),c=n(81565);let d="3.5rem",u=r.createContext({}),m=e=>{let{children:t}=e,n=(0,o.UA)(),[l,i]=r.useState(!1);return r.useEffect(()=>{let e=window.self!==window.top;e||(0,a.Z)(n)||i(n)},[n]),(0,s.jsx)(u.Provider,{value:{isShowDemoBanner:l,setIsShowDemoBanner:i},children:t})};function f(){let{isShowDemoBanner:e,setIsShowDemoBanner:t}=r.useContext(u);return[e,t]}function x(){let[e,t]=f(),{data:n}=(0,l.Z)("https://api.github.com/repos/TabbyML/tabby",e=>fetch(e).then(e=>e.json()));return(0,s.jsxs)("div",{className:(0,i.cn)("flex items-center justify-between bg-primary px-4 text-primary-foreground transition-all md:px-5",{"opacity-100 pointer-events-auto":e,"opacity-0 pointer-events-none":!e}),style:e?{height:d}:{height:0},children:[(0,s.jsxs)("a",{href:"https://links.tabbyml.com/schedule-a-demo",target:"_blank",className:"flex items-center gap-x-2 text-xs font-semibold underline md:text-sm",children:[(0,s.jsx)("span",{children:"\uD83D\uDCC6"}),(0,s.jsx)("span",{children:"Book a 30-minute product demo."})]}),(0,s.jsxs)("div",{className:"flex items-center gap-x-4 md:gap-x-8",children:[(0,s.jsxs)("a",{href:"https://github.com/TabbyML/tabby",target:"_blank",className:"flex items-center transition-all hover:opacity-70",children:[(0,s.jsx)(c.IconGithub,{}),(0,s.jsxs)("div",{className:"ml-2 hidden md:block",children:[(0,s.jsx)("p",{className:"text-xs font-semibold",children:"TabbyML/tabby"}),(0,s.jsxs)("div",{className:(0,i.cn)("flex items-center text-xs transition-all",{"h-4 opacity-70":n,"h-0 opacity-0":!n}),children:[(0,s.jsx)(c.IconStar,{className:"mr-1 h-2.5 w-2.5"}),(0,s.jsx)("span",{children:null==n?void 0:n.stargazers_count}),(0,s.jsx)(c.IconGitFork,{className:"ml-2 mr-1 h-2.5 w-2.5"}),(0,s.jsx)("span",{children:null==n?void 0:n.forks_count})]})]})]}),(0,s.jsx)(c.IconClose,{className:"cursor-pointer transition-all hover:opacity-70",onClick:()=>t(!1)})]})]})}},94529:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var s=n(36164),r=n(3546),a=n(70652),l=n.n(a),o=n(23455),i=n(40055),c=n(9010),d=n(70410),u=n(74248),m=n(36065),f=n(84942),x=n(29),p=n(31458),h=n(81565);function g(e){let{onSearch:t,className:n,placeholder:a,showBetaBadge:l,isLoading:i,autoFocus:d,loadingWithSpinning:m,cleanAfterSearch:f=!0,isFollowup:x,extraContext:p}=e,[g,j]=(0,r.useState)(!1),[N,y]=(0,r.useState)(!1),[b,w]=(0,r.useState)(""),[_,k]=(0,r.useState)(),{theme:S}=(0,c.X)(),A=(0,r.useRef)(null);(0,r.useEffect)(()=>{j(!0)},[]);let C=e=>{b&&!i&&(null==e||e.stopPropagation(),t(b,{repository:_}),f&&w(""))};(0,r.useEffect)(()=>{(null==p?void 0:p.repository)?k(null==p?void 0:p.repository):k(void 0)},[p]);let E=!x||!!(null==p?void 0:p.repository);return(0,s.jsxs)("div",{className:(0,u.cn)("relative overflow-hidden rounded-lg border border-muted-foreground bg-background px-4 transition-all hover:border-muted-foreground/60",{"flex-col gap-1 w-full":E,"flex w-full items-center ":!E,"!border-zinc-400":N&&x&&"dark"!==S,"!border-primary":N&&(!x||"dark"===S),"py-0":l,"border-2 dark:border border-zinc-400 hover:border-zinc-400/60 dark:border-muted-foreground dark:hover:border-muted-foreground/60":x},n),onClick:()=>{if(x){var e;null===(e=A.current)||void 0===e||e.focus()}},children:[l&&(0,s.jsx)("span",{className:"absolute -right-8 top-1 mr-3 rotate-45 rounded-none border-none py-0.5 pl-6 pr-5 text-xs text-primary",style:{background:"dark"===S?"#333":"#e8e1d3"},children:"Beta"}),(0,s.jsx)(o.Z,{className:(0,u.cn)("text-area-autosize mr-1 w-full flex-1 resize-none rounded-lg !border-none bg-transparent !shadow-none !outline-none !ring-0 !ring-offset-0",{"!h-[48px]":!g,"pt-4":!l,"pt-5":l,"pb-4":!E&&!l,"pb-5":!E&&l}),placeholder:a||"Ask anything...",maxRows:5,onKeyDown:e=>{if("Enter"===e.key&&!e.shiftKey)return e.preventDefault()},onKeyUp:e=>{if("Enter"===e.key&&!e.shiftKey)return C()},onFocus:()=>y(!0),onBlur:()=>y(!1),onChange:e=>w(e.target.value),value:b,autoFocus:d,minRows:x?1:2,ref:A}),(0,s.jsxs)("div",{className:(0,u.cn)("flex items-center justify-between gap-2",{"pb-2":E}),children:[E&&(0,s.jsx)(v,{className:"overflow-hidden",value:_,onChange:k,disabled:x}),(0,s.jsxs)("div",{className:(0,u.cn)("flex items-center justify-center rounded-lg p-1 transition-all",{"bg-primary text-primary-foreground cursor-pointer":b.length>0,"!bg-muted !text-primary !cursor-default":i||0===b.length,"mr-1.5":!l,"h-6 w-6":!x}),onClick:C,children:[m&&i&&(0,s.jsx)(h.IconSpinner,{className:"h-3.5 w-3.5"}),(!m||!i)&&(0,s.jsx)(h.IconArrowRight,{className:"h-3.5 w-3.5"})]})]})]})}function v(e){var t;let{value:n,onChange:a,className:o,disabled:c}=e,[g,v]=(0,r.useState)(!1),[{data:j,fetching:N}]=(0,i.aM)({query:d.zz}),y=null==j?void 0:j.repositoryList,b=(0,r.useMemo)(()=>(null==y?void 0:y.length)?"No results found":(0,s.jsxs)("div",{className:"space-y-4 py-2",children:[(0,s.jsx)("p",{className:"font-semibold",children:"No repositories"}),(0,s.jsxs)(l(),{href:"/settings/providers/git",className:(0,u.cn)((0,p.d)({size:"sm"}),"gap-1"),children:["Connect",(0,s.jsx)(h.IconArrowRight,{})]})]}),[y]);return(0,s.jsxs)(x.u,{delayDuration:0,children:[(0,s.jsxs)(f.J2,{open:g,onOpenChange:e=>{c||v(e)},children:[(0,s.jsx)(f.xo,{asChild:!0,children:(0,s.jsx)(x.aJ,{asChild:!0,children:(0,s.jsx)("div",{className:(0,u.cn)((0,p.d)({variant:"ghost"}),"-ml-2 cursor-pointer rounded-full px-2",{"cursor-default hover:bg-transparent":c},o),children:(0,s.jsxs)("div",{className:"flex items-center gap-2 overflow-hidden",children:[(0,s.jsx)(h.IconCode,{className:(0,u.cn)("shrink-0",n?"text-foreground/70":"text-foreground/50")}),(0,s.jsx)("span",{className:(0,u.cn)("flex-1 truncate",n?"text-foreground/70":"text-foreground/50"),children:null!==(t=null==n?void 0:n.name)&&void 0!==t?t:"Select repository"})]})})})}),(0,s.jsx)(f.i9,{children:(0,s.jsx)(f.yk,{className:"min-w-[300px] lg:max-w-[60vw]",align:"start",side:"bottom",children:(0,s.jsxs)(m.mY,{children:[(0,s.jsx)(m.sZ,{placeholder:"Search"}),(0,s.jsxs)(m.e8,{className:"max-h-[200px]",children:[(0,s.jsx)(m.rb,{children:N?(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(h.IconSpinner,{className:"h-6 w-6"})}):b}),(0,s.jsx)(m.fu,{children:null==y?void 0:y.map(e=>{let t=!!(null==n?void 0:n.id)&&"".concat(e.kind,"_").concat(e.id)==="".concat(n.kind,"_").concat(n.id);return(0,s.jsxs)(m.di,{value:"".concat(e.kind,"_").concat(e.id),onSelect:()=>{a({...e}),v(!1)},className:"flex cursor-pointer items-center gap-2 overflow-hidden",children:[(0,s.jsx)("div",{className:"h-4 w-4 shrink-0",children:t&&(0,s.jsx)(h.IconCheck,{className:"shrink-0"})}),(0,s.jsx)("span",{className:"truncate",children:e.name})]},"".concat(e.kind,"_").concat(e.id))})})]}),!!n&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.zz,{}),(0,s.jsx)(m.di,{onSelect:()=>{a(void 0),v(!1)},className:"!pointer-events-auto mt-1 cursor-pointer justify-center text-center !opacity-100",children:"Clear"})]})]})})})]}),(0,s.jsx)(x._v,{children:"Effortlessly interact with your repositories for contextualized search and assistance."})]})}},63743:function(e,t,n){"use strict";n.d(t,{T:function(){return i}});var s=n(36164),r=n(3546),a=n(9010),l=n(31458),o=n(81565);function i(e){let{className:t}=e,{setTheme:n,theme:i}=(0,a.X)(),[c,d]=r.useTransition();return(0,s.jsxs)(l.z,{variant:"ghost",size:"icon",onClick:()=>{d(()=>{n("light"===i?"dark":"light")})},className:t,children:["dark"===i?(0,s.jsx)(o.IconMoon,{className:"transition-all"}):(0,s.jsx)(o.IconSun,{className:"transition-all"}),(0,s.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}},36065:function(e,t,n){"use strict";n.d(t,{di:function(){return x},e8:function(){return d},fu:function(){return m},mY:function(){return i},rb:function(){return u},sZ:function(){return c},zz:function(){return f}});var s=n(36164),r=n(3546),a=n(53241),l=n(93170),o=n(74248);n(30220);let i=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)(a.mY,{ref:t,className:(0,o.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",n),...r})});i.displayName=a.mY.displayName;let c=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsxs)("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[(0,s.jsx)(l.Z,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),(0,s.jsx)(a.mY.Input,{ref:t,className:(0,o.cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",n),...r})]})});c.displayName=a.mY.Input.displayName;let d=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)(a.mY.List,{ref:t,className:(0,o.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden",n),...r})});d.displayName=a.mY.List.displayName;let u=r.forwardRef((e,t)=>(0,s.jsx)(a.mY.Empty,{ref:t,className:"py-6 text-center text-sm",...e}));u.displayName=a.mY.Empty.displayName;let m=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)(a.mY.Group,{ref:t,className:(0,o.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",n),...r})});m.displayName=a.mY.Group.displayName;let f=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)(a.mY.Separator,{ref:t,className:(0,o.cn)("-mx-1 h-px bg-border",n),...r})});f.displayName=a.mY.Separator.displayName;let x=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)(a.mY.Item,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-selected:bg-accent aria-selected:text-accent-foreground",n),...r})});x.displayName=a.mY.Item.displayName},30220:function(e,t,n){"use strict";n.d(t,{$N:function(){return p},Be:function(){return h},Vq:function(){return i},cN:function(){return x},cZ:function(){return m},fK:function(){return f},hg:function(){return c}});var s=n(36164),r=n(3546),a=n(4318),l=n(1663),o=n(74248);let i=a.fC,c=a.xz,d=a.h_;a.x8;let u=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)(a.aV,{ref:t,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...r})});u.displayName=a.aV.displayName;let m=r.forwardRef((e,t)=>{let{className:n,children:r,...i}=e;return(0,s.jsxs)(d,{children:[(0,s.jsx)(u,{}),(0,s.jsxs)(a.VY,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",n),...i,children:[r,(0,s.jsxs)(a.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(l.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});m.displayName=a.VY.displayName;let f=e=>{let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...n})};f.displayName="DialogHeader";let x=e=>{let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...n})};x.displayName="DialogFooter";let p=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)(a.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",n),...r})});p.displayName=a.Dx.displayName;let h=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)(a.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",n),...r})});h.displayName=a.dk.displayName},62202:function(e,t,n){"use strict";n.d(t,{$F:function(){return i},AW:function(){return d},Ju:function(){return m},VD:function(){return f},Xi:function(){return u},h_:function(){return o}});var s=n(36164),r=n(3546),a=n(19148),l=n(74248);let o=a.fC,i=a.xz;a.ZA,a.Uv,a.Tr,a.Ee;let c=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)(a.tu,{ref:t,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",n),...r})});c.displayName=a.tu.displayName;let d=r.forwardRef((e,t)=>{let{className:n,sideOffset:r=4,...o}=e;return(0,s.jsx)(a.Uv,{children:(0,s.jsx)(a.VY,{ref:t,sideOffset:r,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...o})})});d.displayName=a.VY.displayName;let u=r.forwardRef((e,t)=>{let{className:n,inset:r,...o}=e;return(0,s.jsx)(a.ck,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r&&"pl-8",n),...o})});u.displayName=a.ck.displayName;let m=r.forwardRef((e,t)=>{let{className:n,inset:r,...o}=e;return(0,s.jsx)(a.__,{ref:t,className:(0,l.cn)("px-2 py-1.5 text-sm font-semibold",r&&"pl-8",n),...o})});m.displayName=a.__.displayName;let f=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)(a.Z0,{ref:t,className:(0,l.cn)("-mx-1 my-1 h-px bg-muted",n),...r})});f.displayName=a.Z0.displayName},90615:function(e,t,n){"use strict";n.d(t,{Yi:function(){return i},bZ:function(){return c},zs:function(){return o}});var s=n(36164),r=n(3546),a=n(38421),l=n(74248);let o=a.fC,i=a.xz,c=r.forwardRef((e,t)=>{let{className:n,align:r="center",sideOffset:o=4,...i}=e;return(0,s.jsx)(a.VY,{ref:t,align:r,sideOffset:o,className:(0,l.cn)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...i})});c.displayName=a.VY.displayName},57830:function(e,t,n){"use strict";n.r(t),n.d(t,{ScrollArea:function(){return o},ScrollBar:function(){return i}});var s=n(36164),r=n(3546),a=n(50778),l=n(74248);let o=r.forwardRef((e,t)=>{let{className:n,children:r,...o}=e;return(0,s.jsxs)(a.fC,{ref:t,className:(0,l.cn)("relative overflow-hidden",n),...o,children:[(0,s.jsx)(a.l_,{className:"h-full w-full rounded-[inherit] [&>div]:!block",children:r}),(0,s.jsx)(i,{}),(0,s.jsx)(a.Ns,{})]})});o.displayName=a.fC.displayName;let i=r.forwardRef((e,t)=>{let{className:n,orientation:r="vertical",...o}=e;return(0,s.jsx)(a.gb,{ref:t,orientation:r,className:(0,l.cn)("flex touch-none select-none transition-colors","vertical"===r&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===r&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",n),...o,children:(0,s.jsx)(a.q4,{className:"relative flex-1 rounded-full bg-border"})})});i.displayName=a.gb.displayName},7449:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var s=n(36164),r=n(3546),a=n(11978),l=n(98454),o=n(80605),i=n(91302),c=n(62202),d=n(81565);function u(e){let{children:t,showHome:n=!0,showSetting:u=!1}=e,m=(0,a.useRouter)(),f=(0,i.QJ)(),[{data:x}]=(0,l.P)(),p=null==x?void 0:x.me;(0,o.xG)();let[h,g]=r.useState(!1),v=async e=>{e.preventDefault(),g(!0),await f(),g(!1)};if(p)return(0,s.jsxs)(c.h_,{children:[(0,s.jsx)(c.$F,{children:t}),(0,s.jsxs)(c.AW,{collisionPadding:{right:16},children:[p.name&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Ju,{className:"pb-0.5",children:p.name}),(0,s.jsx)(c.Ju,{className:"pb-1 pt-0 text-sm font-normal text-muted-foreground",children:p.email})]}),!p.name&&(0,s.jsx)(c.Ju,{children:p.email}),(0,s.jsx)(c.VD,{}),n&&(0,s.jsxs)(c.Xi,{onClick:()=>m.push("/"),className:"cursor-pointer",children:[(0,s.jsx)(d.IconHome,{}),(0,s.jsx)("span",{className:"ml-2",children:"Home"})]}),u&&(0,s.jsxs)(c.Xi,{onClick:()=>m.push("/profile"),className:"cursor-pointer",children:[(0,s.jsx)(d.IconGear,{}),(0,s.jsx)("span",{className:"ml-2",children:"Settings"})]}),(0,s.jsxs)(c.Xi,{onClick:()=>window.open("/files"),className:"cursor-pointer",children:[(0,s.jsx)(d.IconCode,{}),(0,s.jsx)("span",{className:"ml-2",children:"Code Browser"})]}),(0,s.jsxs)(c.Xi,{onClick:()=>window.open("/api"),className:"cursor-pointer",children:[(0,s.jsx)(d.IconBackpack,{}),(0,s.jsx)("span",{className:"ml-2",children:"API Docs"})]}),(0,s.jsx)(c.VD,{}),(0,s.jsxs)(c.Xi,{disabled:h,onClick:v,className:"cursor-pointer",children:[(0,s.jsx)(d.IconLogout,{}),(0,s.jsx)("span",{className:"ml-2",children:"Sign out"}),h&&(0,s.jsx)(d.IconSpinner,{className:"ml-1"})]})]})]})}},21808:function(e,t,n){"use strict";n.d(t,{$6:function(){return a},L8:function(){return r},o0:function(){return s}});let s="name@yourcompany.com",r=20,a={DEMO_AUTO_LOGIN:"_tabby_demo_autologin",SEARCH_INITIAL_MSG:"_tabby_search_initial_msg",SEARCH_INITIAL_EXTRA_CONTEXT:"_tabby_search_initial_extra_context",SEARCH_LATEST_MSG:"_tabby_search_latest_msg",SEARCH_LATEST_EXTRA_CONTEXT:"_tabby_search_latest_extra_context"}},93877:function(e,t,n){"use strict";n.d(t,{BT:function(){return i},Ds:function(){return c},Ot:function(){return u}});var s=n(3546);let r=(e,t)=>{let[n,r]=(0,s.useState)(t),[a,l]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{let t=localStorage.getItem(e);t&&r(JSON.parse(t)),l(!1)},[]),[n,t=>{r(t),localStorage.setItem(e,JSON.stringify(t))},a]};class a{get value(){if("undefined"!=typeof localStorage){let e=localStorage.getItem(this.storageKey);if(e)return"true"===e}return this.defaultValue}constructor(e,t,n,s){this.storageKey=e,this.title=t,this.description=n,this.defaultValue=s}}class l{defineGlobalVar(){return new a(this.storageKey,this.title,this.description,this.defaultValue)}defineHook(){return()=>{let[e,t,n]=r(this.storageKey,this.defaultValue);return[{value:e,title:this.title,description:this.description,loading:n},()=>{t(!e)}]}}constructor(e,t,n,s){this.storageKey="EXP_".concat(e),this.title=t,this.description=n,this.defaultValue=null!=s&&s}}let o=new l("enable_code_browser_quick_action_bar","Quick Action Bar","Enable Quick Action Bar to display a convenient toolbar when you select code, offering options to explain the code, add unit tests, and more.",!0),i=o.defineGlobalVar(),c=o.defineHook(),d=new l("enable_search","Search","Enable the search on the home page to search for anything you want to know using the local chat model.",!0);d.defineGlobalVar();let u=d.defineHook()},9010:function(e,t,n){"use strict";n.d(t,{X:function(){return r}});var s=n(28242);function r(){let{theme:e,systemTheme:t,setTheme:n}=(0,s.F)();return{theme:e&&"system"!==e?e:t||"light",setTheme:n,systemTheme:t}}},38785:function(e,t,n){"use strict";n.d(t,{U:function(){return a}});var s=n(3546);let r=!0;function a(){let[e,t]=s.useState(()=>!r);return s.useEffect(function(){r=!1,t(!0)},[]),e}},2489:function(){}},function(e){e.O(0,[7998,5498,6312,4007,9739,1283,3449,2578,9421,9317,4097,4421,1454,4789,4546,8746,9275,4373,739,9610,9148,778,994,5606,1888,8002,5921,9736,1565,7417,7532,3375,5289,1744],function(){return e(e.s=72845)}),_N_E=e.O()}]);