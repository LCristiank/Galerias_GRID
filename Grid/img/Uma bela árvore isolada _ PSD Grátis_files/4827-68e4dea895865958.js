!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="fc546643-e7ec-4aa7-8ee1-eb6dcbf3a4cd",e._sentryDebugIdIdentifier="sentry-dbid-fc546643-e7ec-4aa7-8ee1-eb6dcbf3a4cd")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4827,8576],{21041:function(e,t,n){"use strict";n.d(t,{Mx:function(){return u},nC:function(){return i},v8:function(){return o},yD:function(){return a}}),n(98373);var r=n(22319),i="_1wc8gem0 $w-full $mx-auto $px-[20px] $max-w-[1400px]",o="$object-cover",a="$w-full",u="$overflow-hidden";(0,r.c)({defaultClassName:"_1wc8gem0 $w-full $mx-auto $px-[20px]",variantClassNames:{size:{fluid:"_1wc8gem1",xl:"$max-w-[1400px]",lg:"$max-w-[1096px]",md:"$max-w-[768px]"}},defaultVariants:{size:"xl"},compoundVariants:[]})},16586:function(e,t,n){"use strict";n.d(t,{x:function(){return o}});var r=n(52983);let i=r.useLayoutEffect,o=e=>{let[t,n]=(0,r.useState)(!e),o=(0,r.useRef)(e);i(()=>{o.current!==e&&(o.current=e,n(!0))},[e]);let a=(0,r.useCallback)(()=>n(!1),[]);return(0,r.useMemo)(()=>({isLoading:t,loaded:a}),[t,a])}},4663:function(e,t,n){"use strict";n.d(t,{m:function(){return _}});var r=n(97458),i=n(1187),o=n(66287),a=n(60889),u=n(40556),c=n(50273),s=n(66497),l=n(64357),d=n(51818),f=n(97137),m=n(71163),p=n(80025);let _=e=>{let{className:t,label:n,type:_,id:g,count:h,tooltipProps:v={side:"top"}}=e,{t:w}=(0,m.$G)("detailCommon"),{liked:b,onClick:y,disabled:x}=(0,p.U)({type:_,id:g}),k=(0,o.a)("lgMax"),C=(0,u.h)(w(b?"liked":"like")),j=(0,a.nD)(),S=(0,r.jsxs)("button",{className:t,onClick:y,disabled:x,children:[(0,r.jsx)(s.T,{children:C}),x?(0,r.jsx)(c.J,{as:f.Z,size:"base",className:"$animate-spin"}):(0,r.jsx)(c.J,{as:b?d.Z:l.Z,size:"base",color:b?"redMuri":void 0}),n&&(0,r.jsx)("span",{className:n,children:C}),h&&(0,r.jsx)("span",{children:h})]});return k?S:(0,r.jsx)(i.u,{...v,trigger:S,triggerAsChild:!0,hideOnLeaveHover:!0,container:j.current,children:C})}},21223:function(e,t,n){"use strict";n.d(t,{m:function(){return r.m}});var r=n(4663)},80025:function(e,t,n){"use strict";n.d(t,{U:function(){return f}});var r=n(96005),i=n(42011),o=n(52404),a=n(7616),u=n(52983),c=n(63711);let s=()=>(0,u.useContext)(c.d);var l=n(63792),d=n(51844);let f=e=>{let{type:t,id:n}=e,[c,f]=(0,u.useState)(!0),{openToast:m}=(0,o.x_)(),p=(0,i.d)(),[_,g]=(0,a.KO)((0,d.wW)(n)),{loginUrl:h,setLoginCookies:v}=(0,r.J)(),w=s(),b=(0,u.useCallback)(()=>{if(!p){v(),window.location.href=h;return}f(!1),(0,l.dP)(_,t,n).then(()=>g(_)).catch(()=>m()).finally(()=>f(!0)),_&&w&&w(n)},[p,_,t,n,w,v,h,g,m]);return{liked:_,disabled:!c,onClick:b}}},66848:function(e,t,n){"use strict";n.d(t,{W:function(){return a}});var r=n(45306),i=n(52983),o=n(13076);let a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"resource_detail_premium",{setShowModal:a,setOrigin:u,setTrackerClick:c,setResourceData:s,setCheckoutQueryParams:l,setModalType:d}=(0,o.u)(),f=(0,i.useMemo)(()=>({category:t,location:n,ACTION:"go_premium",...e&&{resource_id:e}}),[t,n,e]),[m,p]=(0,r.n9)(f);return(0,i.useCallback)(e=>{let{resourceData:t,origin:n,onButtonClick:r=()=>void 0,checkoutQueryParams:i,modalType:o="premiumContent"}=e;u(n),c(()=>p),s(t),l(i),d(o),m(),r(),a(!0)},[u,c,s,l,d,m,a,p])}},83015:function(e,t,n){"use strict";n.d(t,{f:function(){return w}});var r=n(97458),i=n(1187),o=n(66287),a=n(60889),u=n(50273),c=n(66497),s=n(76301),l=n(16830),d=n.n(l),f=n(71163),m=n(52983),p=n(25136),_=n(63989),g=n(82918);let h=d()(()=>Promise.all([n.e(8554),n.e(8545)]).then(n.bind(n,8554)).then(e=>e.ModalReport),{loadableGenerated:{webpack:()=>[8554]}}),v={interactionType:"onload"},w=e=>{let{id:t,type:n,buttonClassName:l,labelClassName:d,showTooltip:w=!0}=e,[b,y]=(0,m.useState)(!1),[x,k]=(0,m.useState)(!1),C=(0,p.X)(),j=(0,o.a)("lg"),S=(0,a.nD)(),N=(0,_.I)(),{t:T}=(0,f.$G)("detailCommon"),I=(0,m.useCallback)(()=>{k(!0),y(!0),C(v)},[C]),R=(0,m.useCallback)(()=>{N(!1),k(!1)},[N]),z=(0,m.useMemo)(()=>({id:t,type:n}),[t,n]),O=(0,r.jsxs)("button",{className:l,onClick:I,children:[(0,r.jsx)(c.T,{children:T("reportForm.title")}),(0,r.jsx)(u.J,{as:s.Z,size:"base"}),(0,r.jsx)("span",{className:d,"data-testid":"button",children:T("reportForm.title")})]});return(0,r.jsxs)(g.y.Provider,{value:z,children:[j&&w?(0,r.jsx)(i.u,{align:"end",container:S.current,trigger:O,children:T("reportForm.title")}):O,b&&(0,r.jsx)(h,{isOpen:x,onFinish:R})]})}},80668:function(e,t,n){"use strict";n.d(t,{Sc:function(){return r.S},mB:function(){return m},hR:function(){return p.h},B2:function(){return _.B},s8:function(){return g.s}});var r=n(54282),i=n(97458),o=n(52983),a=n(13281),u=n(1466),c=n(21223),s=n(83015),l=n(8692),d=n(77169),f=n(88239);let m=(0,o.memo)(e=>{let{description:t,thumbnail:n,url:r,collection:o,viewSimilar:m=!0,like:p,type:_,id:g,width:h=0,height:v=0,showPinterest:w=!1,showReddit:b=!1,showLinkedin:y=!1,onShare:x}=e;return(0,i.jsxs)(i.Fragment,{children:[m&&a.ih.includes(_)&&(0,i.jsx)(l.B,{buttonClassName:d.LI({withLabel:!0}),labelClassName:d.PS({alwaysVisible:!0}),id:g,name:t,preview:{width:h,height:v,url:n},type:_,showLabel:!0}),o&&(0,i.jsx)(u.AddToCollection,{className:d.LI(),label:d.PS(),type:_,id:g,preview:n,mode:"large",location:"resource_detail"}),p&&(0,i.jsx)(c.m,{className:d.LI(),label:d.PS(),type:_,id:g}),(0,i.jsx)(f.C,{description:t,thumbnail:n,url:r,showPinterest:w,showReddit:b,showLinkedin:y,onShare:x}),(0,i.jsx)(s.f,{id:g,type:_,buttonClassName:d.LI(),labelClassName:d.PS()})]})});var p=n(42580),_=n(35292),g=n(44890)},8692:function(e,t,n){"use strict";n.d(t,{B:function(){return p}});var r=n(97458),i=n(1187),o=n(66287),a=n(60889),u=n(50273),c=n(66497),s=n(94669),l=n(71163),d=n(21188),f=n(97922),m=n(8276);let p=e=>{let{id:t,name:n,type:p,buttonClassName:_,labelClassName:g,preview:{width:h,height:v,url:w},inThumbnail:b=!1,showLabel:y=!1,tooltipProps:x={}}=e,{t:k}=(0,l.$G)("detailCommon"),C=(0,m.z)(w,h,v),j=(0,f.Zk)(),S=(0,a.nD)(),N=(0,o.a)("lgMax"),T=(0,d.fD)({event_name:b?"similar_images_thumbnail":"similar_images",file_id:t.toString(),file_name:n,content_group2:p,search_logic_applied:"similar_images"}),I=k("viewSimilar"),R=async e=>{e.preventDefault(),e.stopPropagation(),T(),j(),await C()},z=(0,r.jsxs)("button",{"data-cy":"view-similar-button",className:_,onClick:R,children:[(0,r.jsx)(c.T,{children:I}),(0,r.jsx)(u.J,{as:s.Z,size:"base"}),y&&(0,r.jsx)("span",{className:g,children:I})]});return N?z:(0,r.jsx)(i.u,{...x,trigger:z,triggerAsChild:!0,hideOnLeaveHover:!0,container:S.current,children:I})}},15272:function(e,t,n){"use strict";n.d(t,{R:function(){return d}});var r=n(97458),i=n(66287),o=n(16830),a=n.n(o),u=n(52983),c=n(41537),s=n(73423),l=n(57259);let d=e=>{let{item:t,position:o,fromView:d,children:f,isModal:m,priority:p,uuid:_,resizeParameter:g,blockViewSimilar:h}=e,v=a()(()=>Promise.resolve().then(n.bind(n,41537)).then(e=>e.ActionsThumbnail),{loadableGenerated:{webpack:()=>[41537]},ssr:!1}),{id:w,name:b,author:y,type:x,preview:{url:k},premium:C,slug:j,isEditableInWepik:S,isEditableInMockup:N,isAIGenerated:T,url:I}=t,R="".concat((0,s.k)(C,x),"/").concat(j,"_").concat(w,".htm"),z=(0,u.useRef)(null),O=(0,i.a)("sm"),[E,D]=(0,u.useState)(!1),L=y.id!==l.c;return(0,u.useEffect)(()=>{let e=z.current;if(e)return e.addEventListener("mouseenter",()=>D(!0)),()=>{e.removeEventListener("mouseenter",()=>D(!0))}},[z]),(0,r.jsx)(c.ImageThumbnail,{item:t,position:o,fromView:d,ref:z,isModal:m,dataCy:"resource-thumbnail",priority:p,uuid:_,resizeParameter:g,blockViewSimilar:h,children:O&&E&&(0,r.jsx)(v,{id:w,name:b,author:y,media:k,url:R,description:b,isDownloadEnabled:L,thumbnailRef:z,width:t.preview.width,height:t.preview.height,isEditableInWepik:S,isEditableInMockup:N,premium:C,type:x,isAIGenerated:T,detailLink:I,fromView:d,children:f})})}},73423:function(e,t,n){"use strict";n.d(t,{k:function(){return i}});var r=n(71409);let i=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,r.$T)("/".concat("".concat(e?"premium":"free"),"-").concat("".concat(n?"ai-image":t)))}},25136:function(e,t,n){"use strict";n.d(t,{X:function(){return o}});var r=n(18166),i=n(52983);let o=()=>(0,i.useCallback)(e=>{(0,r.sendGTMEvent)({event:"ga4event",event_name:"report_content",interaction_type:e.interactionType})},[])},98181:function(e,t,n){"use strict";n.d(t,{B:function(){return r}});let r=(0,n(52983).createContext)({})},53390:function(e,t,n){"use strict";n.d(t,{i:function(){return o}});var r=n(52983),i=n(98181);let o=()=>(0,r.useContext)(i.B)},85618:function(e,t,n){"use strict";n.d(t,{$G:function(){return d},C:function(){return a},C0:function(){return I},Db:function(){return _},EQ:function(){return y},GC:function(){return s},Gv:function(){return $},H$:function(){return N},Iu:function(){return w},Kq:function(){return x},Nc:function(){return z},OI:function(){return v},PF:function(){return l},RJ:function(){return L},S3:function(){return g},Vj:function(){return C},W$:function(){return O},WX:function(){return m},YT:function(){return h},Zq:function(){return A},Zv:function(){return T},_R:function(){return P},cm:function(){return c},e5:function(){return b},en:function(){return u},f3:function(){return S},g7:function(){return o},os:function(){return p},p3:function(){return f},s1:function(){return E},u4:function(){return R},vl:function(){return M},wK:function(){return j},wj:function(){return Z},wy:function(){return k},xQ:function(){return K},zL:function(){return D}});var r=n(27961);let i="".concat(r.p,"/regular-detail/expand"),o="https://www.freepik.com/pikaso/embed",a="https://www.freepik.es/pikaso/embed",u="#from_element=resource_detail",c="download_after_removing_bg",s="download_after_removing_bg_bria",l="copy_after_removing_bg",d="copy_after_removing_bg_bria",f="edit_after_removing_bg",m="edit_after_removing_bg_bria",p="ai_tool_removebg",_="download_after_change_ethnicity",g="ai_tool_expand",h="ai_tool_expand_after_download",v="ai_tool_expand_carousel",w="ai_tool_expand_removebg",b="ai_tool_expand_download_popover",y="ai_tool_retouch",x="ai_tool_retouch_download_popover",k="ai_tool_retouch_after_download",C="ai_tool_reimagine",j="ai_tool_reimagine_download_popover",S="ai_tool_reimagine_after_download",N="ai_tool_upscaler",T="ai_tool_replacebg",I="ai_tool_all",R="ai_tool_all_thumbnail",z="ai_tool_adjust",O="ai_tool_video",E=15e3,D=[{transKey:"expandAfterDownload.instagramStory",videoSrc:"".concat(i,"/Expand_Instagram.mp4"),miniVideoSrc:"".concat(i,"/instagram_story_mini_mobile_v2.mp4"),aspectRatio:"9:16",shouldShowInAttribution:!0},{transKey:"expandAfterDownload.facebookPost",videoSrc:"".concat(i,"/Expand_f_post.mp4"),miniVideoSrc:"".concat(i,"/facebook_square_mini_mobile.mp4"),aspectRatio:"1:1",shouldShowInAttribution:!0},{transKey:"expandAfterDownload.facebookCover",videoSrc:"".concat(i,"/Expand_f_wide.mp4"),miniVideoSrc:"".concat(i,"/facebook_cover_mini_mobile.mp4"),aspectRatio:"16:9",shouldShowInAttribution:!0},{transKey:"expandAfterDownload.instagramPost",miniVideoSrc:"".concat(i,"/instagram_post_mini_mobile.mp4"),aspectRatio:"4:5",shouldShowInAttribution:!1},{transKey:"expandAfterDownload.custom",aspectRatio:"custom",shouldShowInAttribution:!0}],L="edit_tools_onboarding_v2",M="edit_tools_onboarding",K=["replacebg"],A=["tint","grain","presets"],$=[{transKey:"aiTools.crop",tool:"adjust",subOption:"crop",imageSrc:"".concat(r.p,"/regular-detail/crop.jpg")},{transKey:"aiTools.retouchTitle",tool:"retouch",imageSrc:"".concat(r.p,"/regular-detail/retouch.png")},{transKey:"aiTools.rotate",tool:"adjust",subOption:"rotate",imageSrc:"".concat(r.p,"/regular-detail/editing/rotate.png")},{transKey:"aiTools.presets",tool:"adjust",subOption:"presets",imageSrc:"".concat(r.p,"/regular-detail/presets.jpg"),showCrown:!0},{transKey:"aiTools.light",tool:"adjust",subOption:"light",imageSrc:"".concat(r.p,"/regular-detail/editing/light.png")},{transKey:"aiTools.color",tool:"adjust",subOption:"color",imageSrc:"".concat(r.p,"/regular-detail/editing/color.png")},{transKey:"aiTools.tint",tool:"adjust",subOption:"tint",imageSrc:"".concat(r.p,"/regular-detail/editing/tint.png"),showCrown:!0},{transKey:"aiTools.grain",tool:"adjust",subOption:"grain",imageSrc:"".concat(r.p,"/regular-detail/editing/grain-v2.png"),showCrown:!0}],P=2e3,Z=15},3112:function(e,t,n){"use strict";n.d(t,{a:function(){return p}});var r=n(71409),i=n(7616),o=n(52983),a=n(85618),u=n(68320);let c={replacebg:"background"},s=function(e){let{tool:t,resourceData:n,location:r="resource_detail",queryParams:i}=e,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],{name:a,type:u,author:{name:s},premium:l,isAIGenerated:d}=n,f=new URLSearchParams;if(i&&Object.entries(i).forEach(e=>{let[t,n]=e;n&&f.set(t,n)}),t){var m;f.set("tool",null!==(m=c[t])&&void 0!==m?m:t)}return o&&f.set("submit","true"),f.set("title",a),f.set("location",r),f.set("resourceType",u),f.set("item_author",s),f.set("is_premium_item",l?"true":"false"),f.set("is_ai_generated",d?"true":"false"),f};var l=n(35546),d=n(42954);let f=(e,t)=>{let n="es"===e?a.C:a.g7;return"".concat(n,"?").concat(t.toString()).concat(a.en)},m={expand:"aspectRatio",reimagine:"style"},p=e=>{let{resourceData:t,imageUrl:n,location:a,tool:c}=e,{preview:{url:p}}=t,_=(0,r.ZK)(),g=(0,d.s)(),h=(0,i.b9)(u.lS),v=(0,i.b9)(u.he),w=(0,l.N)(e);return(0,o.useCallback)(async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{let i=c&&m[c],o=i&&t?t[i]:void 0;h(!0);let u=null!=n?n:p,l=s({...e,queryParams:{...t,image:u}},r),d=f(_,l),g=await w(d,o),b="thumbnail_ai_tools"===a;(u===p||b)&&(u=null!=g?g:u,u="".concat(u).concat(u.includes("?")?"&":"?","w=2000"),l.set("image",u),d=f(_,l)),v(d)}catch(e){h(!1),g()}},[c,h,n,p,e,_,w,a,v,g])}},35546:function(e,t,n){"use strict";n.d(t,{N:function(){return s}});var r=n(85043),i=n(52983),o=n(21626),a=n(85618),u=n(96933);let c={retouch:{resource_detail:a.EQ,download_popover:a.Kq,attribution:a.wy},expand:{resource_detail:a.S3,attribution:a.YT,carousel:a.OI,removebg:a.Iu,download_popover:a.e5},reimagine:{resource_detail:a.Vj,download_popover:a.wK,attribution:a.f3,resource_detail_hover:a.Vj},enhance:{resource_detail:a.H$},adjust:{resource_detail:a.Nc,resource_detail_hover:a.Nc},replacebg:{resource_detail:a.Zv},video:{resource_detail:a.W$,resource_detail_hover:a.W$},all:{resource_detail:a.C0,thumbnail_ai_tools:a.u4}},s=e=>{var t,n;let{tool:a,subOption:s,resourceData:l,location:d="resource_detail"}=e,{id:f,name:m,author:p,type:_,isAIGenerated:g,premium:h,url:v,preview:w}=l,b="resource_detail"===d?(0,u.d)(h,a,s):d,{handleDownload:y}=(0,o.i)({resource:{id:f,name:m,author:p,premium:h,regularType:_,isAIGenerated:g,url:v,preview:w},action:null!==(n=null===(t=c[null!=a?a:"all"])||void 0===t?void 0:t[d])&&void 0!==n?n:"download",showAttributionModal:!1,location:b}),x=(0,r.J)();return(0,i.useCallback)(async(e,t)=>{let n=await y(e,t);if(!n)throw Error("Failed to download image");return x(),n.signedUrl},[y,x])}},16858:function(e,t,n){"use strict";n.d(t,{i:function(){return l}});var r=n(16157),i=n(42011),o=n(16103),a=n(52983),u=n(65059),c=n(96933);let s={resource_detail_hover:"resource_detail"},l=e=>{let{tool:t,subOption:n,location:l="resource_detail",resourceData:d}=e,f=(0,i.d)(),m=(0,o.H)(),{setLoginCookies:p,signUpUrl:_}=(0,r.e)(),{premium:g}=d,h=l&&s[l],v=null!=h?h:(0,c.d)(g,t,n),w=(0,u.Fq)({location:v,resourceId:d.id});return(0,a.useCallback)(()=>g&&!m?(w(),!0):!f&&(p(),window.location.href=_,!0),[g,m,f,w,p,_])}},42954:function(e,t,n){"use strict";n.d(t,{s:function(){return a}});var r=n(52404),i=n(71163),o=n(52983);let a=()=>{let{openToast:e}=(0,r.x_)(),{t}=(0,i.$G)("editEmbededToolModal");return(0,o.useCallback)(()=>e({title:t("editToolsErrorTitle"),message:t("editToolsErrorMessage"),type:"danger"}),[e,t])}},68320:function(e,t,n){"use strict";n.d(t,{P1:function(){return c},SD:function(){return a},he:function(){return o},lS:function(){return i},sz:function(){return u}});var r=n(24399);let i=(0,r.cn)(!1),o=(0,r.cn)(null),a=(0,r.cn)(!1),u=(0,r.cn)(!1),c=(0,r.cn)(0)},96933:function(e,t,n){"use strict";n.d(t,{d:function(){return r}});let r=(e,t,n)=>"resource_detail".concat(e?"":"_free","_").concat("all"===t?"ai_tools":t).concat(n?"_".concat(n):"")},63711:function(e,t,n){"use strict";n.d(t,{d:function(){return r}});let r=(0,n(52983).createContext)(null)},13076:function(e,t,n){"use strict";n.d(t,{u:function(){return o}});var r=n(52983),i=n(85962);let o=()=>{let e=(0,r.useContext)(i.o);if(null===e)throw Error("useModalPricingState must be used within a ModalPricingContext");return e}},74910:function(e,t,n){"use strict";n.d(t,{R:function(){return l}});var r=n(83648),i=n(52983),o=n(55970);let a={ai:"photo",mockup:"vector",template:"vector"},u={keyword:"tag",collections:"collection",image_search:"search",image_search_similar:"search",user_recommendations_home:"home",popular:"search",recent:"search"},c={"/collection":"collection"},s=()=>{let e=(0,o.Q)(),{pathname:t}=(0,r.useRouter)(),n=null==e?void 0:e.fromView;if(n){var i;return null!==(i=u[n])&&void 0!==i?i:n}return c[t]},l=()=>{let e=s();return(0,i.useCallback)(t=>{var n;let{type:r,subtype:i,authorName:o,isPremium:u,isAIGenerated:c,eventName:s,pageType:l,businessLine:d="content"}=t,f=new URLSearchParams;f.set("business_line",d);let m=null!=l?l:e;return m&&f.set("page_type",m),f.set("item_type","video"!==r&&"3d"!==r&&null!==(n=a[r])&&void 0!==n?n:r),i&&f.set("item_subtype",i),o&&f.set("item_author",o),f.set("is_premium_item",u.toString()),f.set("is_ai_generated",c.toString()),f.set("event_name",s),f},[e])}},46756:function(e,t,n){"use strict";n.d(t,{l:function(){return f}});var r=n(7616),i=n(24399),o=n(73139),a=n(72118);let u=async()=>{let e=await fetch("/api/user/purchases");if(!e.ok)throw Error();return await e.json()};var c=n(38747);let s=(0,i.cn)(async()=>{if("1"!==a.Z.get("FP_MBL"))return null;let e=async()=>{let e=c.K.get(),t=e=>e.filter(e=>e.product.includes("FR-"));if(e)return t(e);let n=t(await u());return c.K.set(n),n},t=await e();return t?(c.K.set(t),t):(c.K.remove(),null)}),l=(0,i.cn)(e=>{let t=e((0,o.n7)(s));return"hasData"===t.state&&!!t.data&&t.data.some(e=>"unpaid"===e.status)}),d=(0,i.cn)(!1);(0,i.cn)(!1);let f=()=>{let[e,t]=(0,r.KO)(d);return{isUserWinback:(0,r.Dv)(l),isOpenWinbackModal:e,showWinbackModal:()=>t(!0),hideWinbackModal:()=>t(!1)}}},41808:function(e,t,n){"use strict";n.d(t,{l:function(){return r.l}});var r=n(46756)},38747:function(e,t,n){"use strict";n.d(t,{K:function(){return s}});var r=n(1850);let i=r.z.enum(["active","non_renewed","unpaid","pause"]),o=r.z.object({id:r.z.string(),status:i,product:r.z.string(),next_billing:r.z.string().optional()}).transform(e=>{let{next_billing:t,...n}=e;return{...n,...t&&{date:new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}}}),a=r.z.array(o);r.z.object({data:a}).transform(e=>{let{data:t}=e;return t});let u="user/purchases",c="notification/pause",s={get:()=>{try{let e=sessionStorage.getItem(u);if(!e)return null;return a.parse(JSON.parse(e))}catch(e){return null}},set:e=>sessionStorage.setItem(u,JSON.stringify(e)),remove:()=>sessionStorage.removeItem(u),hasBeenClosedPauseNotification:()=>localStorage.getItem(c),closePauseNotification:()=>localStorage.setItem(c,"1")}},3704:function(e,t,n){"use strict";n.d(t,{H:function(){return i}});let r=e=>{let{resource:t,file:n,option:r,size:i,action:o,walletId:a}=e,u=new URLSearchParams;return u.set("resource","".concat(t)),n&&r?(u.set("file",n),u.set("option","".concat(r))):i&&u.set("size","".concat(i)),o&&u.set("action",o),a&&u.set("walletId",a),u.toString()},i=async e=>{let t=r(e),n=await fetch("/api/regular/download?".concat(t));return n.ok?{success:!0,data:await n.json()}:429===n.status?{success:!1,data:"DOWNLOAD_LIMIT_REACHED",metadata:"/download-limit"}:401===n.status||403===n.status||405===n.status?{success:!1,data:"AUTHENTICATION_ERROR"}:404===n.status?{success:!1,data:"NOT_FOUND"}:{success:!1,data:"UNKNOWN_ERROR"}}},21626:function(e,t,n){"use strict";n.d(t,{i:function(){return I}});var r=n(37904),i=n(48070),o=n(83272),a=n(61158),u=n(52983),c=n(21188),s=n(41808),l=n(70800),d=n(95102);let f=(e,t)=>t||("photo"===e?"jpg":"zip");var m=n(25995);n(97458);let p=(0,u.createContext)(null),_=()=>(0,u.useContext)(p)||{shouldTrackingLog:!0};var g=n(3704),h=n(32565),v=n(36823),w=n(72118),b=n(1850),y=n(85618),x=n(87065);let k=b.z.enum(["download","copy","edit","prompt","preview","remove_background","remove_background_edit","ai_video",y.cm,y.GC,y.PF,y.$G,y.p3,y.WX,y.EQ,y.Kq,y.Vj,y.wK,y.os,y.S3,y.H$,y.C0,y.u4,y.YT,y.OI,y.Iu,y.e5,y.f3,y.wy,y.Nc,y.Zv,y.Db,y.W$]);b.z.object({resource:b.z.coerce.number(),file:x.ru.optional(),option:b.z.coerce.number().optional(),size:b.z.coerce.number().optional(),action:k.optional(),walletId:b.z.string().nullable().optional()}),b.z.object({data:b.z.object({filename:b.z.string(),url:b.z.string(),prompt:b.z.string().optional(),signed_url:b.z.string().optional()})}).transform(e=>{let{data:t}=e;return t}).transform(e=>{let{signed_url:t,...n}=e;return{...n,signedUrl:t}});let C=b.z.array(b.z.string()),j=new Date(new Date().getTime()+48e4),S=w.Z.withConverter({write:e=>e}),N=e=>{try{let t=S.get(e);if(!t)return[];return C.parse(JSON.parse(t))}catch(e){return[]}},T=()=>{let e=(0,o.I)(),t=(0,v.b)();return(0,u.useCallback)(n=>{if(!e)return;let r="".concat("ck_items_").concat(e),i=N(r),o="".concat(n);if(!i.includes(o)){let e=JSON.stringify([...i,o]);S.set(r,e,{path:"/",domain:t,expires:j})}},[e,t])},I=e=>{let{resource:t,file:n,action:p="download",location:v="resource_detail",option:w,size:b,showAttributionModal:y=!0,handleError:x,checkoutQueryParams:k}=e,{id:C,name:j,author:S,premium:N,regularType:I,isAIGenerated:R,url:z}=t,[O,E]=(0,u.useState)(!1),{isUserWinback:D,showWinbackModal:L}=(0,s.l)(),{showAttribution:M}=(0,m.tc)(),K=T(),A=(0,h.b)({resource:t,location:v}),$=(0,l.mS)(),{shouldTrackingLog:P}=_(),{showDeviceBlockedModal:Z,isDeviceBlocked:U}=(0,i.qx)(),V=(0,r.Lh)(),W=(0,o.I)(),H=(0,c.TH)({file_extension:f(I,n),file_name:j,file_id:C,license:N?"premium":"free",resolution:b?d.w8[b]:"original",style:"na",author_name:S.name,category:R?"ai_image":I,action:"prompt"===p?"view_prompt":p,location:v,url_link:z}),G=(0,u.useCallback)(e=>{if(x){x(e);return}"prompt"!==p&&A(e,k)},[x,p,A,k]);return{handleDownload:(0,u.useCallback)(async(e,t)=>{if(U){Z();return}if(D){L();return}E(!0),V||a.uT("WARNING: User ".concat(W," has no wallet_id"),"warning");let r=await (0,g.H)({resource:C,size:b?2e3:void 0,action:p,file:n,option:w,walletId:V});if(r.success)return y&&M&&M(),E(!1),K(C),P&&$({resourceId:C,isResourcePremium:N,resourceType:I,downloadType:p,fileType:I,variant:v}),H({externalUrl:null!=e?e:z,setting:t}),r.data;G(r),E(!1)},[U,D,V,C,b,p,n,w,G,Z,L,W,y,M,K,P,H,z,$,N,I,v]),isDownloading:O}}},32565:function(e,t,n){"use strict";n.d(t,{b:function(){return u}});var r=n(52404),i=n(71163),o=n(52983),a=n(66848);let u=e=>{var t;let{location:n,resource:u}=null!=e?e:{},{t:c}=(0,i.$G)("error"),{openToast:s}=(0,r.x_)(),l=(0,a.W)(null!==(t=null==u?void 0:u.id)&&void 0!==t?t:0,"",n);return(0,o.useCallback)((e,t)=>{if("DOWNLOAD_LIMIT_REACHED"===e.data&&u){l({resourceData:{name:u.name,mediaUrl:u.preview.url,mediaWidth:u.preview.width,mediaHeight:u.preview.height,resourceType:"regular"},checkoutQueryParams:t,modalType:"downloadLimit",origin:"download_limit"});return}if("AUTHENTICATION_ERROR"===e.data){window.location.href="/oauth-logout";return}"NOT_FOUND"===e.data&&s({type:"danger",message:c("notFound")}),"UNKNOWN_ERROR"===e.data&&s({type:"danger",message:c("unknown")})},[l,s,u,c])}},50310:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=e=>{let t=[],n=e.reduce((e,t)=>(t.id&&["photo","vector","psd","mockup"].includes(t.type)&&(e[t.type]?e[t.type].push(t.id):e[t.type]=[t.id]),e),{});return Object.keys(n).forEach(e=>{t.push({type:e,ids:n[e]})}),t}},63346:function(e,t,n){"use strict";n.d(t,{y:function(){return i}});var r=n(43096);let i=e=>{let{isEditableInMockup:t,isEditableInWepik:n}=e;return"illustration"===(0,r.Jn)("type")?"illustration":t?"mockup":n?"template":void 0}},68994:function(e,t,n){"use strict";n.d(t,{D:function(){return c}});var r=n(42011),i=n(12297),o=n(52983),a=n(25730),u=n(50310);let c=e=>{let t=(0,o.useRef)(null),n=(0,r.d)(),c=(0,u.Z)(e),{userLikesByIds:s}=(0,a.T)();return(0,o.useEffect)(()=>{!(0,i.vZ)(t.current,e)&&c.length&&n&&(t.current=e,s(c))},[c,e,n,s]),null}},63989:function(e,t,n){"use strict";n.d(t,{I:function(){return a},k:function(){return o}});var r=n(7616),i=n(78272);let o=()=>(0,r.KO)(i.$),a=()=>(0,r.b9)(i.$)},68475:function(e,t,n){"use strict";n.d(t,{b:function(){return o}});var r=n(97458),i=n(35947);let o=e=>{let{children:t,...n}=e;return(0,r.jsx)(i.t.Provider,{value:n,children:t})}},49683:function(e,t,n){"use strict";n.d(t,{z:function(){return c}});var r=n(72118),i=n(52983),o=n(53390),a=n(98944);let u={ai:"regular",photo:"regular",vector:"regular",psd:"regular",icon:"icon",template:"template",mockup:"mockup",video:"video","3d":"3d"},c=e=>{let{uuid:t="",id:n,type:c,premium:s,position:l}=e,{searchTrackingCode:d,vertical:f,page:m,userId:p,isUserPremium:_,userData:g,country:h,language:v,browser:w}=(0,o.i)();return(0,i.useCallback)(()=>{var e,i,o,b,y;let x={partner:"data",event_at:Date.now().toString(),...t&&{uuid:t},ga_client_id:null!==(e=r.Z.get("_ga"))&&void 0!==e?e:"",user_id:null!==(i=null==p?void 0:p.toString())&&void 0!==i?i:"0",is_premium_user:_?"1":"0",user_type:null!==(o=null==g?void 0:g.user_type_fr)&&void 0!==o?o:"anonymous",item_id:n.toString(),is_premium_item:s?"1":"0",...h&&{country_iso_code:h},...v&&{language_iso_code:v},page:null!==(b=null==m?void 0:m.toString())&&void 0!==b?b:"1",position:l.toString(),item_supertype:null!==(y=u[c])&&void 0!==y?y:c,vertical:null!=f?f:c,...w&&{user_agent:encodeURIComponent(w)},...d&&{track:d}},k=new URLSearchParams(x),C="send&event&".concat(k.toString());(0,a.O)(C)},[w,h,n,_,v,m,l,s,d,c,null==g?void 0:g.user_type_fr,p,t,f])}},71059:function(e,t,n){"use strict";var r=n(97458);t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:16,height:16,"aria-hidden":!0,...e,children:(0,r.jsx)("path",{d:"M492.9 11.3c-18.4-14.8-43.4-15.1-62.3-.9-40.3 30.6-87.2 74.5-132 123.8-39.8 43.7-74.1 87.3-97.9 124.2-1.2 0-2.3-.1-3.5-.1-36.4 0-67.3 14.7-92 43.7-19.4 22.7-31.5 50.5-40.4 70.7-3.8 8.6-7.3 16.7-10.2 21.5-18.7 31.2-34.6 38-36.2 38.7-9.5 2.6-16.6 10.6-18.1 20.4a25.1 25.1 0 0 0 12.2 25.4C14.9 480 71.4 512 167 512h20c33.4 0 67.5-13.1 93.6-36 28-24.6 43.4-56.8 43.4-90.8 0-8.5-.9-16.9-2.5-25C390.5 277 469 155.4 507.3 71.9c9.8-21.5 4-45.8-14.4-60.6M247.6 438.4c-17.1 15-39.2 23.6-60.6 23.6h-20c-38.3 0-69.2-5.9-91.2-12.1 7-7.9 14.3-17.7 21.7-30 4.5-7.4 8.4-16.5 13.1-27.1 20.3-46.2 40.8-84.5 86.7-84.5 42.4 0 76.8 34.5 76.8 76.8-.1 19.4-9.5 38.3-26.5 53.3m4.8-167.4c9.3-13.5 19.7-27.6 31.1-42 20.3 5 37.7 18.2 48.2 36.3-11.1 15.2-22.1 29.9-33 43.7-12.2-16-28.1-29.1-46.3-38M461.8 51c-22 48-59.2 111.1-99.8 171-12.2-14.4-27.4-26-44.6-33.8C363 135.9 415.9 84.4 460.9 50.3c.2-.1.3-.2.4-.3.3.1.6.4.7.6-.1.1-.1.3-.2.4"})})},10290:function(e,t,n){"use strict";var r=n(97458);t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 512 512","aria-hidden":!0,...e,children:(0,r.jsx)("path",{d:"M504.688 344.692 345.092 504.688c-4.9 4.899-11.3 7.399-17.7 7.399s-12.8-2.4-17.6-7.299L209.695 403.99c-9.8-9.7-9.8-25.599-.1-35.399s25.599-9.8 35.399-.1l82.398 83.098 141.896-142.297c9.8-9.799 25.6-9.799 35.4-.1 9.699 9.9 9.799 25.7 0 35.5m-330.492 94.497c-29.1-29.199-29.2-76.598-.1-105.897 29.199-29.299 76.798-29.399 106.097-.2l.2.2 46.999 47.399 106.397-106.698c8-8.1 17.6-14.099 28.1-17.799V64.998c0-10.3-5.9-19.5-14.8-23.199-9-3.8-19.2-1.3-25.799 6.2l-91.998 125.597L251.194 12.3c-4.2-7.6-11.8-12.3-20.2-12.3s-16.099 4.7-20.199 12.3l-78.198 160.696L40.599 47.899c-6.6-7.5-16.8-10-25.8-6.2C5.9 45.399 0 54.599 0 64.899V389.79c0 39.899 32.3 72.199 72.198 72.199h124.697z"})})},6414:function(e,t,n){"use strict";var r=n(97458);t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:16,height:16,"aria-hidden":!0,...e,children:(0,r.jsx)("path",{d:"M486.2 50.2c-9.6-3.8-20.5-1.3-27.5 6.2l-98.2 125.5-83-161.1C273 13.2 264.9 8.5 256 8.5s-17.1 4.7-21.5 12.3l-83 161.1L53.3 56.5c-7-7.5-17.9-10-27.5-6.2C16.3 54 10 63.2 10 73.5v333c0 35.8 29.2 65 65 65h362c35.8 0 65-29.2 65-65v-333c0-10.3-6.3-19.5-15.8-23.3"})})},13061:function(e,t,n){"use strict";var r=n(97458);t.Z=e=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...e,children:[(0,r.jsx)("path",{d:"M438 403c-13.808 0-25 11.193-25 25v134c0 19.299-15.701 35-35 35H36c-19.299 0-35-15.701-35-35V428c0-13.807-11.193-25-25-25s-25 11.193-25 25v134c0 46.869 38.131 85 85 85h342c46.869 0 85-38.131 85-85V428c0-13.807-11.192-25-25-25"}),(0,r.jsx)("path",{d:"M189.322 530.678a25.004 25.004 0 0 0 35.356 0l84.853-84.853c9.763-9.763 9.763-25.592 0-35.355s-25.592-9.763-35.355 0L232 452.645V172c0-13.807-11.193-25-25-25s-25 11.193-25 25v280.645l-42.175-42.175c-9.764-9.763-25.592-9.763-35.355 0s-9.763 25.592 0 35.355z"})]})},44842:function(e,t,n){"use strict";var r=n(97458);t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...e,children:(0,r.jsx)("path",{d:"m405.678 227.322-69-69A25 25 0 0 0 319 151H166c-35.841 0-65 29.159-65 65v35H66c-35.841 0-65 29.159-65 65v262c0 35.841 29.159 65 65 65h182c35.841 0 65-29.159 65-65v-35h35c35.841 0 65-29.159 65-65V245a25 25 0 0 0-7.322-17.678M263 578c0 8.271-6.729 15-15 15H66c-8.271 0-15-6.729-15-15V316c0-8.271 6.729-15 15-15h35v177c0 35.841 29.159 65 65 65h97zm85-85H166c-8.271 0-15-6.729-15-15V216c0-8.271 6.729-15 15-15h128v44c0 13.808 11.192 25 25 25h44v208c0 8.271-6.729 15-15 15"})})},64357:function(e,t,n){"use strict";var r=n(97458);t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...e,children:(0,r.jsx)("path",{d:"M462.998 325.742c0-75.526-59.998-149.797-148.419-149.797-38.906 0-75.989 13.503-104.409 39.715a153 153 0 0 0-3.17 3.009 155 155 0 0 0-3.17-3.009c-28.42-26.212-65.503-39.715-104.409-39.715-88.421 0-148.419 74.271-148.419 149.797 0 40.557 15.467 78.684 44.143 107.36l-.002-.002L161.01 599.011c12.276 12.28 28.6 19.043 45.964 19.044h.005l.022-.001.022.001h.005c17.364-.001 33.688-6.765 45.964-19.044l165.867-165.912-.002.002c28.674-28.675 44.141-66.803 44.141-107.359M383.5 397.746l-.002.002L217.63 563.66a14.9 14.9 0 0 1-10.607 4.395h-.001l-.022-.001-.022.001h-.001a14.9 14.9 0 0 1-10.607-4.395L30.503 397.749l-.002-.002C11.337 378.583 1.002 353.104 1.002 326c0-54.451 44.665-100.246 100.747-100.246 24.43 0 48.756 9.003 68.184 26.66 15.735 14.301 17.818 30.356 37.068 30.356s21.333-16.055 37.068-30.356c19.427-17.658 43.753-26.66 68.184-26.66C368.335 225.754 413 271.549 413 326c-.001 27.104-10.337 52.583-29.5 71.746"})})},11486:function(e,t,n){"use strict";n.d(t,{L_:function(){return i},pD:function(){return r},rX:function(){return o}});let r="https://cdn-front.freepik.com",i="cta_link",o="/search?format=search&ai=only&type=photo"},45306:function(e,t,n){"use strict";n.d(t,{RP:function(){return i.R},n9:function(){return r.n}}),n(40862);var r=n(20527),i=n(88544)},20527:function(e,t,n){"use strict";n.d(t,{n:function(){return a}});var r=n(18166),i=n(52983),o=n(57122);let a=e=>{let t=(0,o.cE)(),n=(0,i.useCallback)(n=>{t&&(0,r.sendGTMEvent)({event:"ga4event",interaction_type:n,...e,...t})},[t,e]);return(0,i.useMemo)(()=>[()=>n("onload"),()=>n("click")],[n])}},88544:function(e,t,n){"use strict";n.d(t,{R:function(){return m}});var r=n(71409),i=n(18166),o=n(12297),a=n(83648),u=n(52983),c=n(44840),s=n(87539),l=n(30997),d=n(2482);let f=e=>{let t=(0,r.ZK)(),n=(0,s.A)(),i=(0,c.D)(),o=(0,l.N)();return(0,u.useMemo)(()=>{var r,a;return n&&o?{event:"ga4event",event_name:"page_view",content_type:"video",page_code:"200-ok",country:o,page_lang:t,user_id:null!==(r=null==i?void 0:i.id)&&void 0!==r?r:void 0,user_type:null!==(a=null==i?void 0:i.user_type_fr)&&void 0!==a?a:"anonymous",...e}:null},[n,o,t,null==i?void 0:i.id,null==i?void 0:i.user_type_fr,e])},m=(e,t)=>{let n=(0,u.useRef)(null),r=f(e),{asPath:c}=(0,a.useRouter)();(0,u.useEffect)(()=>{if(!r)return;let e={...r,page_location:window.location.href},a={...e,asPath:c,page_location:(0,d.f)(e.page_location)};t&&!t(a)||(0,o.vZ)(a,n.current)||(n.current=a,(0,i.sendGTMEvent)(e))},[c,r,t])}},27544:function(e,t,n){"use strict";n.d(t,{Wg:function(){return r}});let r={anonymous:"anonymous",free:"registered",premium:"payment"}},16157:function(e,t,n){"use strict";n.d(t,{e:function(){return o}});var r=n(71409),i=n(69195);let o=()=>{let e=(0,i.A)(),t=(0,r.aw)(),n=(0,r.ZK)();return{signUpUrl:"".concat("es"===n?"https://www.freepik.es/sign-up":"https://www.freepik.com/sign-up","?").concat(t),setLoginCookies:e}}},85043:function(e,t,n){"use strict";n.d(t,{J:function(){return s}});var r=n(52983);let i=async e=>{let{walletId:t}=e,n=await fetch(t?"/api/user/downloads/limit?walletId=".concat(t):"/api/user/downloads/limit");return n.ok?{success:!0,data:await n.json()}:401===n.status||403===n.status||405===n.status?{success:!1,data:"AUTHENTICATION_ERROR"}:404===n.status?{success:!1,data:"NOT_FOUND"}:{success:!1,data:"UNKNOWN_ERROR"}};var o=n(1850);o.z.object({data:o.z.object({filename:o.z.string(),url:o.z.string(),today_downloads:o.z.number(),download_limit:o.z.number()}).transform(e=>{let{download_limit:t,today_downloads:n,...r}=e;return{todayDownloads:n,downloadLimit:t,...r}})}),o.z.object({data:o.z.object({current:o.z.number(),limit:o.z.number()})}).transform(e=>{let{data:t}=e;return t});var a=n(37904),u=n(11032),c=n(41843);let s=()=>{let e=(0,a.Lh)(),t=(0,c.aj)();return(0,r.useCallback)(async()=>{let{success:n,data:r}=await i({walletId:e});if(!n)throw Error("Error fetching user download info");let o={downloads:(null==r?void 0:r.current)||0,limit:(null==r?void 0:r.limit)||0};return t(o),u.f.update({downloads:o.downloads,limit_downloads:o.limit}),o},[t,e])}},92603:function(){}}]);