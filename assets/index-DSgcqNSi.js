import{r as i,u as G,b as V,c as O,j as t,_ as C,d as Q,e as Y,f as U,s as q,B as v,a as _,T as M,S as J,D as K,U as X,P as F}from"./index-Du-eKB3f.js";import{S as Z}from"./SectionWrapper-CU1X-1g_.js";import{G as A,C as ee,u as ne}from"./useDataParse-D4tl_zmK.js";const te=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],ie={entering:{opacity:1},entered:{opacity:1}},oe=i.forwardRef(function(s,P){const c=G(),u={enter:c.transitions.duration.enteringScreen,exit:c.transitions.duration.leavingScreen},{addEndListener:r,appear:g=!0,children:a,easing:w,in:$,onEnter:p,onEntered:H,onEntering:D,onExit:E,onExited:d,onExiting:N,style:x,timeout:b=u,TransitionComponent:W=Q}=s,B=V(s,te),m=i.useRef(null),j=O(m,a.ref,P),n=o=>l=>{if(o){const y=m.current;l===void 0?o(y):o(y,l)}},h=n(D),f=n((o,l)=>{Y(o);const y=U({style:x,timeout:b,easing:w},{mode:"enter"});o.style.webkitTransition=c.transitions.create("opacity",y),o.style.transition=c.transitions.create("opacity",y),p&&p(o,l)}),S=n(H),k=n(N),L=n(o=>{const l=U({style:x,timeout:b,easing:w},{mode:"exit"});o.style.webkitTransition=c.transitions.create("opacity",l),o.style.transition=c.transitions.create("opacity",l),E&&E(o)}),T=n(d),z=o=>{r&&r(m.current,o)};return t.jsx(W,C({appear:g,in:$,nodeRef:m,onEnter:f,onEntered:S,onEntering:h,onExit:L,onExited:T,onExiting:k,addEndListener:z,timeout:b},B,{children:(o,l)=>i.cloneElement(a,C({style:C({opacity:0,visibility:o==="exited"&&!$?"hidden":void 0},ie[o],x,a.props.style),ref:j},l))}))}),re=oe,se=e=>{const[s,P]=i.useState(null),[c,u]=i.useState(null),[r,g]=i.useState(null),[a,w]=i.useState(null),[$,p]=i.useState(null),[H,D]=i.useState(null),[E,d]=i.useState(null),[N,x]=i.useState(null),[b,W]=i.useState(null),[B,m]=i.useState(null),j=()=>{if(e){const n=e.getBoundingClientRect(),h=window.innerWidth,f=window.innerHeight;if(!n)return;const S=(n==null?void 0:n.top)/f*100,k=100-(n==null?void 0:n.bottom)/f*100,L=(n==null?void 0:n.left)/h*100,T=100-(n==null?void 0:n.right)/h*100;P(S),u(k),g(L),w(T),p(n==null?void 0:n.height),D(n==null?void 0:n.width),d(),m(n),x(h),W(f)}};return i.useEffect(()=>{if(e)return j(),window.addEventListener("scroll",j),()=>{window.removeEventListener("scroll",j)}},[e]),{top:s,bottom:c,left:r,right:a,height:$,width:H,view:E,rects:B,viewportWidth:N,viewportHeight:b}},le=q(v)(({theme:e})=>({background:"transparent",border:0,boxShadow:"none",overflow:"visible",position:"relative",cursor:"pointer",padding:"0","& .periodLabel":{width:"0px",height:"0px",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative",zIndex:"200",boxShadow:`0px 0px 50px 15px ${e.palette.primary.main}`,WebkitBoxShadow:`0px 0px 50px 15px ${e.palette.primary.main}`,MozBoxShadow:`0px 0px 50px 15px ${e.palette.primary.main}`},"& .periodLine":{width:"3px",height:0,position:"absolute",left:"50%",zIndex:"0",background:`linear-gradient(180deg, ${e==null?void 0:e.palette.primary.dark} 0%, ${e==null?void 0:e.palette.primary.light} 100%)`,backgroundAttachment:"fixed",opacity:.5,overflow:"hidden",transition:"all 400ms linear"},"&.inRange":{"& .periodLine":{overflow:"visible",height:"100%","&::before":{height:"1rem"}},"&:last-child .periodLine":{height:"calc(100% - 5rem)"},"&:not(:has(+ .inRange))":{"& .periodLine":{clipPath:"polygon(400% -3rem, 100% 50%, 50% 100%, 0% 50%, -400% -3rem)"}}},"&.isMobile":{paddingLeft:"2rem","&::before":{content:'""',position:"absolute",left:"0",top:"1.25rem",width:"1rem",height:"1rem",transition:"height 200ms linear",background:`linear-gradient(180deg, ${e==null?void 0:e.palette.primary.dark} 0%, ${e==null?void 0:e.palette.primary.main} 50%, ${e==null?void 0:e.palette.primary.light} 100%)`,clipPath:"polygon(50% 100%, 100% 75%, 100% 25%, 50.75% 0%, 50% 19.37%, 82.95% 33.68%, 82.95% 66.48%, 50% 81.23%, 17.05% 66.48%, 17.37% 33.68%, 50% 19.37%, 50.75% 0%, 0% 25%, 0% 75%)"},"&::after":{content:'""',position:"absolute",left:".38rem",top:"2.25rem",width:"3px",height:"0",transition:"all 200ms linear",background:`linear-gradient(180deg, ${e==null?void 0:e.palette.primary.dark} 0%, ${e==null?void 0:e.palette.primary.light} 100%)`,backgroundAttachment:"fixed"},"&.inRange":{"&::after":{height:"100%"},"&:not(:has(+ .inRange))":{"&::after":{height:"calc(100% - 2.15rem)",clipPath:"polygon(400% -3rem, 100% 50%, 50% 100%, 0% 50%, -400% -3rem)"}}}},"& .descriptionBoxWrapper":{position:"relative",outlineOffset:"-1px",overflow:"visible","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,margin:"-.5rem",borderRadius:"4px",backgroundColor:"rgba(30, 41, 59, 0.5)",border:"1px solid rgba(229, 231, 235,.08)",zIndex:-1,opacity:0,transition:"opacity 200ms ease-in"}},"&:not(.isMobile) .descriptionBoxWrapper":{"&:hover":{"&::before":{opacity:1}}},"&:first-of-type, &:last-of-type":{marginTop:"0",marginBottom:"0"},"@keyframes animateDescription":{from:{opacity:0,scale:.5},to:{opacity:1,scale:1}}})),ce=({data:e={},end:s=!1,index:P,...c})=>{var f,S,k,L,T,z,o,l,y;const u=G(),r=_(u.breakpoints.down("sm")),g=i.useRef(null),a=i.useRef(void 0),{bottom:w,rects:$,top:p,width:H,height:D,viewportWidth:E,viewportHeight:d}=se(a==null?void 0:a.current),{parseText:N}=ne(),[x,b]=i.useState(!1);Number((f=e==null?void 0:e.start)==null?void 0:f.replace(/\D/g,""));const W=Number((S=e==null?void 0:e.end)==null?void 0:S.replace(/\D/g,""));(T=(L=(k=e==null?void 0:e.start)==null?void 0:k.replace(/\d/g,""))==null?void 0:L.trim().substring(0,3))==null||T.toUpperCase();const B=(l=(o=(z=e==null?void 0:e.end)==null?void 0:z.replace(/\d/g,""))==null?void 0:o.trim().substring(0,3))==null?void 0:l.toUpperCase();e!=null&&e.isPresent||`${B}${W}`;const m=((e==null?void 0:e.role)+(e!=null&&e.company?` @ ${e==null?void 0:e.company}`:"")).trim(),h=/\n/g.test(e==null?void 0:e.jobDescription)?N(e==null?void 0:e.jobDescription):e==null?void 0:e.jobDescription;return h==null||h.constructor,i.useEffect(()=>{b(p<80)},[p]),i.useEffect(()=>{const I=d*p/100,R=d-d*w/100;console.log(`${e==null?void 0:e.year}: `,{height:D,top:p,bottom:w,viewportWidth:E,viewportHeight:d,avgheight:d*p/100,pointsTop:I,pointsBottom:R,avg:R-I})},[p]),t.jsx(t.Fragment,{children:t.jsx(le,{...c,my:r?"2rem":"5rem",className:`${x?"inRange":""}${r?" isMobile":""}`,ref:a,children:t.jsxs(A,{container:!0,columnSpacing:0,rowSpacing:0,width:"100%",height:"100%",children:[t.jsx(A,{item:!0,xs:12,sm:2,md:2,lg:2,children:!r&&t.jsxs(v,{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",sx:{width:"100%",height:"100%",position:"relative",pt:"2rem"},children:[t.jsx(M,{variant:"h6",component:"h6",className:"periodLabel",children:e==null?void 0:e.year}),t.jsx("div",{className:"periodLine",style:{top:r?"2rem":"4.5rem",...r&&{transform:"translate(-50% -50%)"}}})]})}),t.jsx(A,{item:!0,xs:12,sm:10,md:10,lg:10,sx:{position:"relative"},children:t.jsxs(v,{component:"div",ref:g,className:"descriptionBoxWrapper",sx:{boxSizing:"border-box",display:"flex",flexDirection:"column",p:r?"1rem 0":"1rem",overflow:"hidden"},children:[!!r&&t.jsxs(v,{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",pb:1,columnGap:1,children:[t.jsx(M,{variant:"h5",component:"h5",children:e==null?void 0:e.year}),t.jsx("div",{style:{width:"3rem",height:"1px",background:u.palette.divider}})]}),t.jsx(M,{variant:"h4",color:"text.secondary",className:"timelineDescriptionHeader",mb:1.5,children:m}),t.jsxs(v,{sx:{overflow:"hidden"},children:[t.jsx(v,{sx:{overflow:"hidden",mb:1.5},children:t.jsx(J,{direction:"down",in:x,children:t.jsx(M,{component:"p",variant:"p",color:"text.primary",className:"timelineDescriptionDetails",children:e==null?void 0:e.jobDescription})})}),t.jsxs(v,{className:"techStack",children:[t.jsx(K,{sx:{my:1}}),(y=e==null?void 0:e.technologies)==null?void 0:y.map((I,R)=>t.jsx(re,{in:x,style:{transitionDelay:x?`${30*R+1}ms`:"0ms"},children:t.jsx(ee,{label:I,sx:{margin:"3px",background:"rgba(45, 212, 191, 0.1)",color:"rgb(94, 234, 212)"}})},R))]})]})]})})]})})})},pe=({})=>{const e=G(),{experiences:s,isLoading:P}=i.useContext(X);i.useState([]);const[c,u]=i.useState(!1);return _(e.breakpoints.down("sm")),_(e.breakpoints.between("sm","md")),_(e.breakpoints.up("lg")),i.useEffect(()=>{u(!0)},[]),t.jsx(Z,{id:"experiences",rowGap:4,children:s==null?void 0:s.map((r,g)=>t.jsx(ce,{end:g>=(s==null?void 0:s.length)-1,index:g,data:r},g))})};pe.propTypes={data:F.array,id:F.string,window:F.func};export{pe as default};
