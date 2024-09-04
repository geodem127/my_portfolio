import{r as a,b as pt,c as ue,d as te,s as G,e as C,f as ne,h as Z,_ as R,j as m,i as D,k as pe,l as dt,R as ie,m as Ne,n as Se,o as ce,p as K,u as de,q as ft,t as gt,v as Ve,w as ht,x as fe,y as we,B as Y,a as le,T as se,D as mt,U as bt,P as ye}from"./index-DXYO18zr.js";import{S as vt}from"./SectionWrapper-CNMaGUqe.js";function ae(e){const t=a.useRef(e);return pt(()=>{t.current=e}),a.useRef((...o)=>(0,t.current)(...o)).current}const De={};function xt(e,t){const o=a.useRef(De);return o.current===De&&(o.current=e(t)),o}const yt=[];function $t(e){a.useEffect(e,yt)}class ge{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new ge}start(t,o){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,o()},t)}}function Ct(){const e=xt(ge.create).current;return $t(e.disposeEffect),e}let he=!0,Re=!1;const Rt=new ge,kt={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Et(e){const{type:t,tagName:o}=e;return!!(o==="INPUT"&&kt[t]&&!e.readOnly||o==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function St(e){e.metaKey||e.altKey||e.ctrlKey||(he=!0)}function $e(){he=!1}function wt(){this.visibilityState==="hidden"&&Re&&(he=!0)}function Tt(e){e.addEventListener("keydown",St,!0),e.addEventListener("mousedown",$e,!0),e.addEventListener("pointerdown",$e,!0),e.addEventListener("touchstart",$e,!0),e.addEventListener("visibilitychange",wt,!0)}function It(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return he||Et(t)}function Mt(){const e=a.useCallback(n=>{n!=null&&Tt(n.ownerDocument)},[]),t=a.useRef(!1);function o(){return t.current?(Re=!0,Rt.start(100,()=>{Re=!1}),t.current=!1,!0):!1}function r(n){return It(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:o,ref:e}}function Pt(e){return ue("MuiSvgIcon",e)}te("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Lt=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],zt=e=>{const{color:t,fontSize:o,classes:r}=e,n={root:["root",t!=="inherit"&&`color${C(t)}`,`fontSize${C(o)}`]};return pe(n,Pt,r)},Nt=G("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.color!=="inherit"&&t[`color${C(o.color)}`],t[`fontSize${C(o.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var o,r,n,i,s,l,c,u,p,g,x,y,d;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(o=e.transitions)==null||(r=o.create)==null?void 0:r.call(o,"fill",{duration:(n=e.transitions)==null||(n=n.duration)==null?void 0:n.shorter}),fontSize:{inherit:"inherit",small:((i=e.typography)==null||(s=i.pxToRem)==null?void 0:s.call(i,20))||"1.25rem",medium:((l=e.typography)==null||(c=l.pxToRem)==null?void 0:c.call(l,24))||"1.5rem",large:((u=e.typography)==null||(p=u.pxToRem)==null?void 0:p.call(u,35))||"2.1875rem"}[t.fontSize],color:(g=(x=(e.vars||e).palette)==null||(x=x[t.color])==null?void 0:x.main)!=null?g:{action:(y=(e.vars||e).palette)==null||(y=y.action)==null?void 0:y.active,disabled:(d=(e.vars||e).palette)==null||(d=d.action)==null?void 0:d.disabled,inherit:void 0}[t.color]}}),ke=a.forwardRef(function(t,o){const r=ne({props:t,name:"MuiSvgIcon"}),{children:n,className:i,color:s="inherit",component:l="svg",fontSize:c="medium",htmlColor:u,inheritViewBox:p=!1,titleAccess:g,viewBox:x="0 0 24 24"}=r,y=Z(r,Lt),d=a.isValidElement(n)&&n.type==="svg",k=R({},r,{color:s,component:l,fontSize:c,instanceFontSize:t.fontSize,inheritViewBox:p,viewBox:x,hasSvgAsChild:d}),E={};p||(E.viewBox=x);const w=zt(k);return m.jsxs(Nt,R({as:l,className:D(w.root,i),focusable:"false",color:u,"aria-hidden":g?void 0:!0,role:g?"img":void 0,ref:o},E,y,d&&n.props,{ownerState:k,children:[d?n.props.children:n,g?m.jsx("title",{children:g}):null]}))});ke.muiName="SvgIcon";function Vt(e,t){function o(r,n){return m.jsx(ke,R({"data-testid":`${t}Icon`,ref:n},r,{children:e}))}return o.muiName=ke.muiName,a.memo(a.forwardRef(o))}function Dt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Te(e,t){var o=function(i){return t&&a.isValidElement(i)?t(i):i},r=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){r[n.key]=o(n)}),r}function jt(e,t){e=e||{},t=t||{};function o(p){return p in t?t[p]:e[p]}var r=Object.create(null),n=[];for(var i in e)i in t?n.length&&(r[i]=n,n=[]):n.push(i);var s,l={};for(var c in t){if(r[c])for(s=0;s<r[c].length;s++){var u=r[c][s];l[r[c][s]]=o(u)}l[c]=o(c)}for(s=0;s<n.length;s++)l[n[s]]=o(n[s]);return l}function X(e,t,o){return o[t]!=null?o[t]:e.props[t]}function Bt(e,t){return Te(e.children,function(o){return a.cloneElement(o,{onExited:t.bind(null,o),in:!0,appear:X(o,"appear",e),enter:X(o,"enter",e),exit:X(o,"exit",e)})})}function Wt(e,t,o){var r=Te(e.children),n=jt(t,r);return Object.keys(n).forEach(function(i){var s=n[i];if(a.isValidElement(s)){var l=i in t,c=i in r,u=t[i],p=a.isValidElement(u)&&!u.props.in;c&&(!l||p)?n[i]=a.cloneElement(s,{onExited:o.bind(null,s),in:!0,exit:X(s,"exit",e),enter:X(s,"enter",e)}):!c&&l&&!p?n[i]=a.cloneElement(s,{in:!1}):c&&l&&a.isValidElement(u)&&(n[i]=a.cloneElement(s,{onExited:o.bind(null,s),in:u.props.in,exit:X(s,"exit",e),enter:X(s,"enter",e)}))}}),n}var Ot=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Ft={component:"div",childFactory:function(t){return t}},Ie=function(e){dt(t,e);function t(r,n){var i;i=e.call(this,r,n)||this;var s=i.handleExited.bind(Dt(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var o=t.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,i){var s=i.children,l=i.handleExited,c=i.firstRender;return{children:c?Bt(n,l):Wt(n,s,l),firstRender:!1}},o.handleExited=function(n,i){var s=Te(this.props.children);n.key in s||(n.props.onExited&&n.props.onExited(i),this.mounted&&this.setState(function(l){var c=R({},l.children);return delete c[n.key],{children:c}}))},o.render=function(){var n=this.props,i=n.component,s=n.childFactory,l=Z(n,["component","childFactory"]),c=this.state.contextValue,u=Ot(this.state.children).map(s);return delete l.appear,delete l.enter,delete l.exit,i===null?ie.createElement(Ne.Provider,{value:c},u):ie.createElement(Ne.Provider,{value:c},ie.createElement(i,l,u))},t}(ie.Component);Ie.propTypes={};Ie.defaultProps=Ft;const _t=Ie;function Ut(e){const{className:t,classes:o,pulsate:r=!1,rippleX:n,rippleY:i,rippleSize:s,in:l,onExited:c,timeout:u}=e,[p,g]=a.useState(!1),x=D(t,o.ripple,o.rippleVisible,r&&o.ripplePulsate),y={width:s,height:s,top:-(s/2)+i,left:-(s/2)+n},d=D(o.child,p&&o.childLeaving,r&&o.childPulsate);return!l&&!p&&g(!0),a.useEffect(()=>{if(!l&&c!=null){const k=setTimeout(c,u);return()=>{clearTimeout(k)}}},[c,l,u]),m.jsx("span",{className:x,style:y,children:m.jsx("span",{className:d})})}const U=te("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Kt=["center","classes","className"];let me=e=>e,je,Be,We,Oe;const Ee=550,At=80,Gt=Se(je||(je=me`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Ht=Se(Be||(Be=me`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Yt=Se(We||(We=me`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Xt=G("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Zt=G(Ut,{name:"MuiTouchRipple",slot:"Ripple"})(Oe||(Oe=me`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),U.rippleVisible,Gt,Ee,({theme:e})=>e.transitions.easing.easeInOut,U.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,U.child,U.childLeaving,Ht,Ee,({theme:e})=>e.transitions.easing.easeInOut,U.childPulsate,Yt,({theme:e})=>e.transitions.easing.easeInOut),qt=a.forwardRef(function(t,o){const r=ne({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:i={},className:s}=r,l=Z(r,Kt),[c,u]=a.useState([]),p=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[c]);const x=a.useRef(!1),y=Ct(),d=a.useRef(null),k=a.useRef(null),E=a.useCallback(b=>{const{pulsate:T,rippleX:f,rippleY:I,rippleSize:P,cb:O}=b;u(S=>[...S,m.jsx(Zt,{classes:{ripple:D(i.ripple,U.ripple),rippleVisible:D(i.rippleVisible,U.rippleVisible),ripplePulsate:D(i.ripplePulsate,U.ripplePulsate),child:D(i.child,U.child),childLeaving:D(i.childLeaving,U.childLeaving),childPulsate:D(i.childPulsate,U.childPulsate)},timeout:Ee,pulsate:T,rippleX:f,rippleY:I,rippleSize:P},p.current)]),p.current+=1,g.current=O},[i]),w=a.useCallback((b={},T={},f=()=>{})=>{const{pulsate:I=!1,center:P=n||T.pulsate,fakeElement:O=!1}=T;if((b==null?void 0:b.type)==="mousedown"&&x.current){x.current=!1;return}(b==null?void 0:b.type)==="touchstart"&&(x.current=!0);const S=O?null:k.current,N=S?S.getBoundingClientRect():{width:0,height:0,left:0,top:0};let z,j,v;if(P||b===void 0||b.clientX===0&&b.clientY===0||!b.clientX&&!b.touches)z=Math.round(N.width/2),j=Math.round(N.height/2);else{const{clientX:M,clientY:L}=b.touches&&b.touches.length>0?b.touches[0]:b;z=Math.round(M-N.left),j=Math.round(L-N.top)}if(P)v=Math.sqrt((2*N.width**2+N.height**2)/3),v%2===0&&(v+=1);else{const M=Math.max(Math.abs((S?S.clientWidth:0)-z),z)*2+2,L=Math.max(Math.abs((S?S.clientHeight:0)-j),j)*2+2;v=Math.sqrt(M**2+L**2)}b!=null&&b.touches?d.current===null&&(d.current=()=>{E({pulsate:I,rippleX:z,rippleY:j,rippleSize:v,cb:f})},y.start(At,()=>{d.current&&(d.current(),d.current=null)})):E({pulsate:I,rippleX:z,rippleY:j,rippleSize:v,cb:f})},[n,E,y]),F=a.useCallback(()=>{w({},{pulsate:!0})},[w]),W=a.useCallback((b,T)=>{if(y.clear(),(b==null?void 0:b.type)==="touchend"&&d.current){d.current(),d.current=null,y.start(0,()=>{W(b,T)});return}d.current=null,u(f=>f.length>0?f.slice(1):f),g.current=T},[y]);return a.useImperativeHandle(o,()=>({pulsate:F,start:w,stop:W}),[F,w,W]),m.jsx(Xt,R({className:D(U.root,i.root,s),ref:k},l,{children:m.jsx(_t,{component:null,exit:!0,children:c})}))}),Qt=qt;function Jt(e){return ue("MuiButtonBase",e)}const en=te("MuiButtonBase",["root","disabled","focusVisible"]),tn=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],nn=e=>{const{disabled:t,focusVisible:o,focusVisibleClassName:r,classes:n}=e,s=pe({root:["root",t&&"disabled",o&&"focusVisible"]},Jt,n);return o&&r&&(s.root+=` ${r}`),s},on=G("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${en.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),rn=a.forwardRef(function(t,o){const r=ne({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:i=!1,children:s,className:l,component:c="button",disabled:u=!1,disableRipple:p=!1,disableTouchRipple:g=!1,focusRipple:x=!1,LinkComponent:y="a",onBlur:d,onClick:k,onContextMenu:E,onDragLeave:w,onFocus:F,onFocusVisible:W,onKeyDown:b,onKeyUp:T,onMouseDown:f,onMouseLeave:I,onMouseUp:P,onTouchEnd:O,onTouchMove:S,onTouchStart:N,tabIndex:z=0,TouchRippleProps:j,touchRippleRef:v,type:M}=r,L=Z(r,tn),_=a.useRef(null),V=a.useRef(null),B=ce(V,v),{isFocusVisibleRef:Me,onFocus:Ae,onBlur:Ge,ref:He}=Mt(),[H,oe]=a.useState(!1);u&&H&&oe(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{oe(!0),_.current.focus()}}),[]);const[be,Ye]=a.useState(!1);a.useEffect(()=>{Ye(!0)},[]);const Xe=be&&!p&&!u;a.useEffect(()=>{H&&x&&!p&&be&&V.current.pulsate()},[p,x,H,be]);function A(h,Le,ut=g){return ae(ze=>(Le&&Le(ze),!ut&&V.current&&V.current[h](ze),!0))}const Ze=A("start",f),qe=A("stop",E),Qe=A("stop",w),Je=A("stop",P),et=A("stop",h=>{H&&h.preventDefault(),I&&I(h)}),tt=A("start",N),nt=A("stop",O),ot=A("stop",S),rt=A("stop",h=>{Ge(h),Me.current===!1&&oe(!1),d&&d(h)},!1),it=ae(h=>{_.current||(_.current=h.currentTarget),Ae(h),Me.current===!0&&(oe(!0),W&&W(h)),F&&F(h)}),ve=()=>{const h=_.current;return c&&c!=="button"&&!(h.tagName==="A"&&h.href)},xe=a.useRef(!1),st=ae(h=>{x&&!xe.current&&H&&V.current&&h.key===" "&&(xe.current=!0,V.current.stop(h,()=>{V.current.start(h)})),h.target===h.currentTarget&&ve()&&h.key===" "&&h.preventDefault(),b&&b(h),h.target===h.currentTarget&&ve()&&h.key==="Enter"&&!u&&(h.preventDefault(),k&&k(h))}),at=ae(h=>{x&&h.key===" "&&V.current&&H&&!h.defaultPrevented&&(xe.current=!1,V.current.stop(h,()=>{V.current.pulsate(h)})),T&&T(h),k&&h.target===h.currentTarget&&ve()&&h.key===" "&&!h.defaultPrevented&&k(h)});let re=c;re==="button"&&(L.href||L.to)&&(re=y);const Q={};re==="button"?(Q.type=M===void 0?"button":M,Q.disabled=u):(!L.href&&!L.to&&(Q.role="button"),u&&(Q["aria-disabled"]=u));const lt=ce(o,He,_),Pe=R({},r,{centerRipple:i,component:c,disabled:u,disableRipple:p,disableTouchRipple:g,focusRipple:x,tabIndex:z,focusVisible:H}),ct=nn(Pe);return m.jsxs(on,R({as:re,className:D(ct.root,l),ownerState:Pe,onBlur:rt,onClick:k,onContextMenu:qe,onFocus:it,onKeyDown:st,onKeyUp:at,onMouseDown:Ze,onMouseLeave:et,onMouseUp:Je,onDragLeave:Qe,onTouchEnd:nt,onTouchMove:ot,onTouchStart:tt,ref:lt,tabIndex:u?-1:z,type:M},Q,L,{children:[s,Xe?m.jsx(Qt,R({ref:B,center:i},j)):null]}))}),Fe=rn,sn=Vt(m.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function an(e){return ue("MuiChip",e)}const ln=te("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),$=ln,cn=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],un=e=>{const{classes:t,disabled:o,size:r,color:n,iconColor:i,onDelete:s,clickable:l,variant:c}=e,u={root:["root",c,o&&"disabled",`size${C(r)}`,`color${C(n)}`,l&&"clickable",l&&`clickableColor${C(n)}`,s&&"deletable",s&&`deletableColor${C(n)}`,`${c}${C(n)}`],label:["label",`label${C(r)}`],avatar:["avatar",`avatar${C(r)}`,`avatarColor${C(n)}`],icon:["icon",`icon${C(r)}`,`iconColor${C(i)}`],deleteIcon:["deleteIcon",`deleteIcon${C(r)}`,`deleteIconColor${C(n)}`,`deleteIcon${C(c)}Color${C(n)}`]};return pe(u,an,t)},pn=G("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{color:r,iconColor:n,clickable:i,onDelete:s,size:l,variant:c}=o;return[{[`& .${$.avatar}`]:t.avatar},{[`& .${$.avatar}`]:t[`avatar${C(l)}`]},{[`& .${$.avatar}`]:t[`avatarColor${C(r)}`]},{[`& .${$.icon}`]:t.icon},{[`& .${$.icon}`]:t[`icon${C(l)}`]},{[`& .${$.icon}`]:t[`iconColor${C(n)}`]},{[`& .${$.deleteIcon}`]:t.deleteIcon},{[`& .${$.deleteIcon}`]:t[`deleteIcon${C(l)}`]},{[`& .${$.deleteIcon}`]:t[`deleteIconColor${C(r)}`]},{[`& .${$.deleteIcon}`]:t[`deleteIcon${C(c)}Color${C(r)}`]},t.root,t[`size${C(l)}`],t[`color${C(r)}`],i&&t.clickable,i&&r!=="default"&&t[`clickableColor${C(r)})`],s&&t.deletable,s&&r!=="default"&&t[`deletableColor${C(r)}`],t[c],t[`${c}${C(r)}`]]}})(({theme:e,ownerState:t})=>{const o=e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300];return R({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${$.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${$.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:o,fontSize:e.typography.pxToRem(12)},[`& .${$.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${$.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${$.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${$.icon}`]:R({marginLeft:5,marginRight:-6},t.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},t.iconColor===t.color&&R({color:e.vars?e.vars.palette.Chip.defaultIconColor:o},t.color!=="default"&&{color:"inherit"})),[`& .${$.deleteIcon}`]:R({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:K(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:K(e.palette.text.primary,.4)}},t.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},t.color!=="default"&&{color:e.vars?`rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)`:K(e.palette[t.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[t.color].contrastText}})},t.size==="small"&&{height:24},t.color!=="default"&&{backgroundColor:(e.vars||e).palette[t.color].main,color:(e.vars||e).palette[t.color].contrastText},t.onDelete&&{[`&.${$.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:K(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},t.onDelete&&t.color!=="default"&&{[`&.${$.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}})},({theme:e,ownerState:t})=>R({},t.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:K(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${$.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:K(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},t.clickable&&t.color!=="default"&&{[`&:hover, &.${$.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}}),({theme:e,ownerState:t})=>R({},t.variant==="outlined"&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${$.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${$.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${$.avatar}`]:{marginLeft:4},[`& .${$.avatarSmall}`]:{marginLeft:2},[`& .${$.icon}`]:{marginLeft:4},[`& .${$.iconSmall}`]:{marginLeft:2},[`& .${$.deleteIcon}`]:{marginRight:5},[`& .${$.deleteIconSmall}`]:{marginRight:3}},t.variant==="outlined"&&t.color!=="default"&&{color:(e.vars||e).palette[t.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`:K(e.palette[t.color].main,.7)}`,[`&.${$.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:K(e.palette[t.color].main,e.palette.action.hoverOpacity)},[`&.${$.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:K(e.palette[t.color].main,e.palette.action.focusOpacity)},[`& .${$.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`:K(e.palette[t.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[t.color].main}}})),dn=G("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,t)=>{const{ownerState:o}=e,{size:r}=o;return[t.label,t[`label${C(r)}`]]}})(({ownerState:e})=>R({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},e.variant==="outlined"&&{paddingLeft:11,paddingRight:11},e.size==="small"&&{paddingLeft:8,paddingRight:8},e.size==="small"&&e.variant==="outlined"&&{paddingLeft:7,paddingRight:7}));function _e(e){return e.key==="Backspace"||e.key==="Delete"}const fn=a.forwardRef(function(t,o){const r=ne({props:t,name:"MuiChip"}),{avatar:n,className:i,clickable:s,color:l="default",component:c,deleteIcon:u,disabled:p=!1,icon:g,label:x,onClick:y,onDelete:d,onKeyDown:k,onKeyUp:E,size:w="medium",variant:F="filled",tabIndex:W,skipFocusWhenDisabled:b=!1}=r,T=Z(r,cn),f=a.useRef(null),I=ce(f,o),P=B=>{B.stopPropagation(),d&&d(B)},O=B=>{B.currentTarget===B.target&&_e(B)&&B.preventDefault(),k&&k(B)},S=B=>{B.currentTarget===B.target&&(d&&_e(B)?d(B):B.key==="Escape"&&f.current&&f.current.blur()),E&&E(B)},N=s!==!1&&y?!0:s,z=N||d?Fe:c||"div",j=R({},r,{component:z,disabled:p,size:w,color:l,iconColor:a.isValidElement(g)&&g.props.color||l,onDelete:!!d,clickable:N,variant:F}),v=un(j),M=z===Fe?R({component:c||"div",focusVisibleClassName:v.focusVisible},d&&{disableRipple:!0}):{};let L=null;d&&(L=u&&a.isValidElement(u)?a.cloneElement(u,{className:D(u.props.className,v.deleteIcon),onClick:P}):m.jsx(sn,{className:D(v.deleteIcon),onClick:P}));let _=null;n&&a.isValidElement(n)&&(_=a.cloneElement(n,{className:D(v.avatar,n.props.className)}));let V=null;return g&&a.isValidElement(g)&&(V=a.cloneElement(g,{className:D(v.icon,g.props.className)})),m.jsxs(pn,R({as:z,className:D(v.root,i),disabled:N&&p?!0:void 0,onClick:y,onKeyDown:O,onKeyUp:S,ref:I,tabIndex:b&&p?-1:W,ownerState:j},M,T,{children:[_||V,m.jsx(dn,{className:D(v.label),ownerState:j,children:x}),L]}))}),gn=fn,hn=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],mn={entering:{opacity:1},entered:{opacity:1}},bn=a.forwardRef(function(t,o){const r=de(),n={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:s=!0,children:l,easing:c,in:u,onEnter:p,onEntered:g,onEntering:x,onExit:y,onExited:d,onExiting:k,style:E,timeout:w=n,TransitionComponent:F=ft}=t,W=Z(t,hn),b=a.useRef(null),T=ce(b,l.ref,o),f=v=>M=>{if(v){const L=b.current;M===void 0?v(L):v(L,M)}},I=f(x),P=f((v,M)=>{gt(v);const L=Ve({style:E,timeout:w,easing:c},{mode:"enter"});v.style.webkitTransition=r.transitions.create("opacity",L),v.style.transition=r.transitions.create("opacity",L),p&&p(v,M)}),O=f(g),S=f(k),N=f(v=>{const M=Ve({style:E,timeout:w,easing:c},{mode:"exit"});v.style.webkitTransition=r.transitions.create("opacity",M),v.style.transition=r.transitions.create("opacity",M),y&&y(v)}),z=f(d),j=v=>{i&&i(b.current,v)};return m.jsx(F,R({appear:s,in:u,nodeRef:b,onEnter:P,onEntered:O,onEntering:I,onExit:N,onExited:z,onExiting:S,addEndListener:j,timeout:w},W,{children:(v,M)=>a.cloneElement(l,R({style:R({opacity:0,visibility:v==="exited"&&!u?"hidden":void 0},mn[v],E,l.props.style),ref:T},M))}))}),vn=bn,xn=a.createContext(),Ue=xn;function yn(e){return ue("MuiGrid",e)}const $n=[0,1,2,3,4,5,6,7,8,9,10],Cn=["column-reverse","column","row-reverse","row"],Rn=["nowrap","wrap-reverse","wrap"],J=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],ee=te("MuiGrid",["root","container","item","zeroMinWidth",...$n.map(e=>`spacing-xs-${e}`),...Cn.map(e=>`direction-xs-${e}`),...Rn.map(e=>`wrap-xs-${e}`),...J.map(e=>`grid-xs-${e}`),...J.map(e=>`grid-sm-${e}`),...J.map(e=>`grid-md-${e}`),...J.map(e=>`grid-lg-${e}`),...J.map(e=>`grid-xl-${e}`)]),kn=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function q(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function En({theme:e,ownerState:t}){let o;return e.breakpoints.keys.reduce((r,n)=>{let i={};if(t[n]&&(o=t[n]),!o)return r;if(o===!0)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(o==="auto")i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=fe({values:t.columns,breakpoints:e.breakpoints.values}),l=typeof s=="object"?s[n]:s;if(l==null)return r;const c=`${Math.round(o/l*1e8)/1e6}%`;let u={};if(t.container&&t.item&&t.columnSpacing!==0){const p=e.spacing(t.columnSpacing);if(p!=="0px"){const g=`calc(${c} + ${q(p)})`;u={flexBasis:g,maxWidth:g}}}i=R({flexBasis:c,flexGrow:0,maxWidth:c},u)}return e.breakpoints.values[n]===0?Object.assign(r,i):r[e.breakpoints.up(n)]=i,r},{})}function Sn({theme:e,ownerState:t}){const o=fe({values:t.direction,breakpoints:e.breakpoints.values});return we({theme:e},o,r=>{const n={flexDirection:r};return r.indexOf("column")===0&&(n[`& > .${ee.item}`]={maxWidth:"none"}),n})}function Ke({breakpoints:e,values:t}){let o="";Object.keys(t).forEach(n=>{o===""&&t[n]!==0&&(o=n)});const r=Object.keys(e).sort((n,i)=>e[n]-e[i]);return r.slice(0,r.indexOf(o))}function wn({theme:e,ownerState:t}){const{container:o,rowSpacing:r}=t;let n={};if(o&&r!==0){const i=fe({values:r,breakpoints:e.breakpoints.values});let s;typeof i=="object"&&(s=Ke({breakpoints:e.breakpoints.values,values:i})),n=we({theme:e},i,(l,c)=>{var u;const p=e.spacing(l);return p!=="0px"?{marginTop:`-${q(p)}`,[`& > .${ee.item}`]:{paddingTop:q(p)}}:(u=s)!=null&&u.includes(c)?{}:{marginTop:0,[`& > .${ee.item}`]:{paddingTop:0}}})}return n}function Tn({theme:e,ownerState:t}){const{container:o,columnSpacing:r}=t;let n={};if(o&&r!==0){const i=fe({values:r,breakpoints:e.breakpoints.values});let s;typeof i=="object"&&(s=Ke({breakpoints:e.breakpoints.values,values:i})),n=we({theme:e},i,(l,c)=>{var u;const p=e.spacing(l);return p!=="0px"?{width:`calc(100% + ${q(p)})`,marginLeft:`-${q(p)}`,[`& > .${ee.item}`]:{paddingLeft:q(p)}}:(u=s)!=null&&u.includes(c)?{}:{width:"100%",marginLeft:0,[`& > .${ee.item}`]:{paddingLeft:0}}})}return n}function In(e,t,o={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[o[`spacing-xs-${String(e)}`]];const r=[];return t.forEach(n=>{const i=e[n];Number(i)>0&&r.push(o[`spacing-${n}-${String(i)}`])}),r}const Mn=G("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{container:r,direction:n,item:i,spacing:s,wrap:l,zeroMinWidth:c,breakpoints:u}=o;let p=[];r&&(p=In(s,u,t));const g=[];return u.forEach(x=>{const y=o[x];y&&g.push(t[`grid-${x}-${String(y)}`])}),[t.root,r&&t.container,i&&t.item,c&&t.zeroMinWidth,...p,n!=="row"&&t[`direction-xs-${String(n)}`],l!=="wrap"&&t[`wrap-xs-${String(l)}`],...g]}})(({ownerState:e})=>R({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),Sn,wn,Tn,En);function Pn(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const o=[];return t.forEach(r=>{const n=e[r];if(Number(n)>0){const i=`spacing-${r}-${String(n)}`;o.push(i)}}),o}const Ln=e=>{const{classes:t,container:o,direction:r,item:n,spacing:i,wrap:s,zeroMinWidth:l,breakpoints:c}=e;let u=[];o&&(u=Pn(i,c));const p=[];c.forEach(x=>{const y=e[x];y&&p.push(`grid-${x}-${String(y)}`)});const g={root:["root",o&&"container",n&&"item",l&&"zeroMinWidth",...u,r!=="row"&&`direction-xs-${String(r)}`,s!=="wrap"&&`wrap-xs-${String(s)}`,...p]};return pe(g,yn,t)},zn=a.forwardRef(function(t,o){const r=ne({props:t,name:"MuiGrid"}),{breakpoints:n}=de(),i=ht(r),{className:s,columns:l,columnSpacing:c,component:u="div",container:p=!1,direction:g="row",item:x=!1,rowSpacing:y,spacing:d=0,wrap:k="wrap",zeroMinWidth:E=!1}=i,w=Z(i,kn),F=y||d,W=c||d,b=a.useContext(Ue),T=p?l||12:b,f={},I=R({},w);n.keys.forEach(S=>{w[S]!=null&&(f[S]=w[S],delete I[S])});const P=R({},i,{columns:T,container:p,direction:g,item:x,rowSpacing:F,columnSpacing:W,wrap:k,zeroMinWidth:E,spacing:d},f,{breakpoints:n.keys}),O=Ln(P);return m.jsx(Ue.Provider,{value:T,children:m.jsx(Mn,R({ownerState:P,className:D(O.root,s),as:u,ref:o},I))})}),Ce=zn,Nn=()=>({parseText:t=>t.split(`
`)}),Vn=e=>{const[t,o]=a.useState(null),[r,n]=a.useState(null),[i,s]=a.useState(null),[l,c]=a.useState(null),[u,p]=a.useState(null),[g,x]=a.useState(null),[y,d]=a.useState(null),[k,E]=a.useState(null),[w,F]=a.useState(null),[W,b]=a.useState(null),T=()=>{if(e){const f=e.getBoundingClientRect(),I=window.innerWidth,P=window.innerHeight;if(!f)return;const O=(f==null?void 0:f.top)/P*100,S=100-(f==null?void 0:f.bottom)/P*100,N=(f==null?void 0:f.left)/I*100,z=100-(f==null?void 0:f.right)/I*100;o(O),n(S),s(N),c(z),p(f==null?void 0:f.height),x(f==null?void 0:f.width),d(),b(f),E(I),F(P)}};return a.useEffect(()=>{if(e)return T(),window.addEventListener("scroll",T),()=>{window.removeEventListener("scroll",T)}},[e]),{top:t,bottom:r,left:i,right:l,height:u,width:g,view:y,rects:W,viewportWidth:k,viewportHeight:w}},Dn=G(Y)(({theme:e})=>({background:"transparent",border:0,boxShadow:"none",overflow:"visible",position:"relative",cursor:"pointer",padding:"0","& .periodLabel":{width:"0px",height:"0px",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative",zIndex:"200",boxShadow:`0px 0px 50px 15px ${e.palette.primary.main}`,WebkitBoxShadow:`0px 0px 50px 15px ${e.palette.primary.main}`,MozBoxShadow:`0px 0px 50px 15px ${e.palette.primary.main}`},"& .periodLine":{width:"2px",height:0,position:"absolute",left:"50%",zIndex:"0",background:`linear-gradient(180deg, ${e==null?void 0:e.palette.primary.dark} 0%, ${e==null?void 0:e.palette.primary.light} 100%)`,backgroundAttachment:"fixed",opacity:.5,overflow:"hidden",transition:"all 400ms linear"},"&.inRange":{"& .periodLine":{overflow:"visible",height:"100%","&::before":{height:"1rem"}},"&:last-child .periodLine":{height:"calc(100% - 5rem)"},"&:not(:has(+ .inRange))":{"& .periodLine":{clipPath:"polygon(400% -3rem, 100% 50%, 50% 100%, 0% 50%, -400% -3rem)"}}},"&.isMobile":{paddingLeft:"2rem","&::before":{content:'""',position:"absolute",left:"0",top:"1.25rem",width:"1rem",height:"1rem",transition:"height 200ms linear",background:`linear-gradient(180deg, ${e==null?void 0:e.palette.primary.dark} 0%, ${e==null?void 0:e.palette.primary.main} 50%, ${e==null?void 0:e.palette.primary.light} 100%)`,clipPath:"polygon(50% 100%, 100% 75%, 100% 25%, 50.75% 0%, 50% 19.37%, 82.95% 33.68%, 82.95% 66.48%, 50% 81.23%, 17.05% 66.48%, 17.37% 33.68%, 50% 19.37%, 50.75% 0%, 0% 25%, 0% 75%)"},"&::after":{content:'""',position:"absolute",left:".38rem",top:"2.25rem",width:"3px",height:"0",transition:"all 200ms linear",background:`linear-gradient(180deg, ${e==null?void 0:e.palette.primary.dark} 0%, ${e==null?void 0:e.palette.primary.light} 100%)`,backgroundAttachment:"fixed"},"&.inRange":{"&::after":{height:"100%"},"&:not(:has(+ .inRange))":{"&::after":{height:"calc(100% - 2.15rem)",clipPath:"polygon(400% -3rem, 100% 50%, 50% 100%, 0% 50%, -400% -3rem)"}}}},"& .descriptionBoxWrapper":{position:"relative",outlineOffset:"-1px",overflow:"visible","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,margin:"-.5rem",borderRadius:"4px",backgroundColor:"rgba(30, 41, 59, 0.5)",border:"1px solid rgba(229, 231, 235,.08)",zIndex:-1,opacity:0,transition:"opacity 200ms ease-in"}},"&:not(.isMobile) .descriptionBoxWrapper":{"&:hover":{"&::before":{opacity:1}}},"&:first-of-type, &:last-of-type":{marginTop:"0",marginBottom:"0"},"@keyframes animateDescription":{from:{opacity:0,scale:.5},to:{opacity:1,scale:1}}})),jn=({data:e={},end:t=!1,index:o,...r})=>{var P,O,S,N,z,j,v,M,L;const n=de(),i=le(n.breakpoints.down("sm")),s=a.useRef(null),l=a.useRef(void 0),{bottom:c,rects:u,top:p,width:g,height:x,viewportWidth:y,viewportHeight:d}=Vn(l==null?void 0:l.current),{parseText:k}=Nn(),[E,w]=a.useState(!1);Number((P=e==null?void 0:e.start)==null?void 0:P.replace(/\D/g,""));const F=Number((O=e==null?void 0:e.end)==null?void 0:O.replace(/\D/g,""));(z=(N=(S=e==null?void 0:e.start)==null?void 0:S.replace(/\d/g,""))==null?void 0:N.trim().substring(0,3))==null||z.toUpperCase();const W=(M=(v=(j=e==null?void 0:e.end)==null?void 0:j.replace(/\d/g,""))==null?void 0:v.trim().substring(0,3))==null?void 0:M.toUpperCase();e!=null&&e.isPresent||`${W}${F}`;const b=((e==null?void 0:e.role)+(e!=null&&e.company?` @ ${e==null?void 0:e.company}`:"")).trim(),I=/\n/g.test(e==null?void 0:e.jobDescription)?k(e==null?void 0:e.jobDescription):e==null?void 0:e.jobDescription;return I==null||I.constructor,a.useEffect(()=>{w(p<80)},[p]),a.useEffect(()=>{const _=d*p/100,V=d-d*c/100;console.log(`${e==null?void 0:e.year}: `,{height:x,top:p,bottom:c,viewportWidth:y,viewportHeight:d,avgheight:d*p/100,pointsTop:_,pointsBottom:V,avg:V-_})},[p]),m.jsx(m.Fragment,{children:m.jsx(Dn,{...r,my:i?"2rem":"5rem",className:`${E?"inRange":""}${i?" isMobile":""}`,ref:l,children:m.jsxs(Ce,{container:!0,columnSpacing:0,rowSpacing:0,width:"100%",height:"100%",children:[m.jsx(Ce,{item:!0,xs:12,sm:2,md:2,lg:2,children:!i&&m.jsxs(Y,{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",sx:{width:"80%",height:"100%",position:"relative",pt:"2rem"},children:[m.jsx(se,{variant:"h6",component:"h6",className:"periodLabel",children:e==null?void 0:e.year}),m.jsx("div",{className:"periodLine",style:{top:i?"2rem":"4.5rem",...i&&{transform:"translate(-50% -50%)"}}})]})}),m.jsx(Ce,{item:!0,xs:12,sm:10,md:10,lg:10,sx:{position:"relative"},children:m.jsxs(Y,{component:"div",ref:s,className:"descriptionBoxWrapper",sx:{boxSizing:"border-box",display:"flex",flexDirection:"column",p:i?"1rem 0":"1rem",overflow:"hidden"},children:[!!i&&m.jsxs(Y,{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",pb:1,columnGap:1,children:[m.jsx(se,{variant:"h5",component:"h5",children:e==null?void 0:e.year}),m.jsx("div",{style:{width:"3rem",height:"1px",background:n.palette.divider}})]}),m.jsx(se,{variant:"h4",color:"text.secondary",className:"timelineDescriptionHeader",mb:1.5,children:b}),m.jsxs(Y,{sx:{overflow:"hidden"},children:[m.jsx(Y,{sx:{overflow:"hidden",mb:1.5},children:m.jsx(se,{component:"p",variant:"p",color:"text.primary",className:`timelineDescriptionDetails ${E?"animation-slideup":""}`,sx:{opacity:0},children:e==null?void 0:e.jobDescription})}),m.jsxs(Y,{className:"techStack",children:[m.jsx(mt,{sx:{my:1}}),(L=e==null?void 0:e.technologies)==null?void 0:L.map((_,V)=>m.jsx(vn,{in:E,timeout:500,style:{transitionDelay:E?`${30*V+1}ms`:"0ms"},children:m.jsx(gn,{label:_,sx:{margin:"3px",background:"rgba(45, 212, 191, 0.1)",color:"rgb(94, 234, 212)"}})},V))]})]})]})})]})})})},Bn=({})=>{const e=de(),{experiences:t,isLoading:o}=a.useContext(bt);a.useState([]);const[r,n]=a.useState(!1);return le(e.breakpoints.down("sm")),le(e.breakpoints.between("sm","md")),le(e.breakpoints.up("lg")),a.useEffect(()=>{n(!0)},[]),m.jsx(vt,{id:"experiences",rowGap:4,children:t==null?void 0:t.map((i,s)=>m.jsx(jn,{end:s>=(t==null?void 0:t.length)-1,index:s,data:i},s))})};Bn.propTypes={data:ye.array,id:ye.string,window:ye.func};export{Bn as default};
