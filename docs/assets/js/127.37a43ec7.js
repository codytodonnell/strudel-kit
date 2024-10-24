"use strict";(self.webpackChunkstrudel_docs=self.webpackChunkstrudel_docs||[]).push([[127],{7733:(e,t,n)=>{n.d(t,{A:()=>b});var r=n(8168),o=n(8587),i=n(6540),a=n(4164),s=n(1311),c=n(3571),l=n(9599),u=n(2858),p=n(4848);const d=["className","component"];var h=n(2067),m=n(2941),f=n(8312);const v=(0,n(7553).A)("MuiBox",["root"]),g=(0,m.A)(),A=function(e={}){const{themeId:t,defaultTheme:n,defaultClassName:h="MuiBox-root",generateClassName:m}=e,f=(0,s.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(c.A);return i.forwardRef((function(e,i){const s=(0,u.A)(n),c=(0,l.A)(e),{className:v,component:g="div"}=c,A=(0,o.A)(c,d);return(0,p.jsx)(f,(0,r.A)({as:g,ref:i,className:(0,a.A)(v,m?m(h):h),theme:t&&s[t]||s},A))}))}({themeId:f.A,defaultTheme:g,defaultClassName:v.root,generateClassName:h.A.generate}),b=A},3416:(e,t,n)=>{n.d(t,{A:()=>x});var r=n(8168),o=n(8587),i=n(6540),a=n(4164),s=n(4111),c=n(2871),l=n(3541),u=n(771),p=n(8783),d=n(7553),h=n(7245);function m(e){return(0,h.Ay)("MuiPaper",e)}(0,d.A)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var f=n(4848);const v=["className","component","elevation","square","variant"],g=(0,c.Ay)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})((({theme:e,ownerState:t})=>{var n;return(0,r.A)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,r.A)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,u.X4)("#fff",(0,p.A)(t.elevation))}, ${(0,u.X4)("#fff",(0,p.A)(t.elevation))})`},e.vars&&{backgroundImage:null==(n=e.vars.overlays)?void 0:n[t.elevation]}))})),A=i.forwardRef((function(e,t){const n=(0,l.A)({props:e,name:"MuiPaper"}),{className:i,component:c="div",elevation:u=1,square:p=!1,variant:d="elevation"}=n,h=(0,o.A)(n,v),A=(0,r.A)({},n,{component:c,elevation:u,square:p,variant:d}),b=(e=>{const{square:t,elevation:n,variant:r,classes:o}=e,i={root:["root",r,!t&&"rounded","elevation"===r&&`elevation${n}`]};return(0,s.A)(i,m,o)})(A);return(0,f.jsx)(g,(0,r.A)({as:c,ownerState:A,className:(0,a.A)(b.root,i),ref:t},h))}));function b(e){return(0,h.Ay)("MuiCard",e)}(0,d.A)("MuiCard",["root"]);const y=["className","raised"],w=(0,c.Ay)(A,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),x=i.forwardRef((function(e,t){const n=(0,l.A)({props:e,name:"MuiCard"}),{className:i,raised:c=!1}=n,u=(0,o.A)(n,y),p=(0,r.A)({},n,{raised:c}),d=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},b,t)})(p);return(0,f.jsx)(w,(0,r.A)({className:(0,a.A)(d.root,i),elevation:c?8:void 0,ref:t,ownerState:p},u))}))},516:(e,t,n)=>{n.d(t,{A:()=>le});var r=n(8168),o=n(8587),i=n(6540),a=n(4164),s=n(4111),c=n(3541),l=n(2871),u=n(7553),p=n(7245);function d(e){return(0,p.Ay)("MuiCardActionArea",e)}const h=(0,u.A)("MuiCardActionArea",["root","focusVisible","focusHighlight"]);const m=function(...e){return i.useMemo((()=>e.every((e=>null==e))?null:t=>{e.forEach((e=>{!function(e,t){"function"==typeof e?e(t):e&&(e.current=t)}(e,t)}))}),e)},f="undefined"!=typeof window?i.useLayoutEffect:i.useEffect;const v=function(e){const t=i.useRef(e);return f((()=>{t.current=e})),i.useRef(((...e)=>(0,t.current)(...e))).current},g={};const A=[];class b{constructor(){this.currentId=null,this.clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new b}start(e,t){this.clear(),this.currentId=setTimeout((()=>{this.currentId=null,t()}),e)}}function y(){const e=function(e,t){const n=i.useRef(g);return n.current===g&&(n.current=e(t)),n}(b.create).current;var t;return t=e.disposeEffect,i.useEffect(t,A),e}let w=!0,x=!1;const k=new b,R={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function S(e){e.metaKey||e.altKey||e.ctrlKey||(w=!0)}function M(){w=!1}function N(){"hidden"===this.visibilityState&&x&&(w=!0)}function C(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return w||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!R[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}const $=function(){const e=i.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",S,!0),t.addEventListener("mousedown",M,!0),t.addEventListener("pointerdown",M,!0),t.addEventListener("touchstart",M,!0),t.addEventListener("visibilitychange",N,!0))}),[]),t=i.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!C(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(x=!0,k.start(100,(()=>{x=!1})),t.current=!1,!0)},ref:e}};var E=n(2892);const T=i.createContext(null);function j(e,t){var n=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,i.isValidElement)(e)?t(e):e}(e)})),n}function W(e,t,n){return null!=n[t]?n[t]:e.props[t]}function B(e,t,n){var r=j(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),i=[];for(var a in e)a in t?i.length&&(o[a]=i,i=[]):i.push(a);var s={};for(var c in t){if(o[c])for(r=0;r<o[c].length;r++){var l=o[c][r];s[o[c][r]]=n(l)}s[c]=n(c)}for(r=0;r<i.length;r++)s[i[r]]=n(i[r]);return s}(t,r);return Object.keys(o).forEach((function(a){var s=o[a];if((0,i.isValidElement)(s)){var c=a in t,l=a in r,u=t[a],p=(0,i.isValidElement)(u)&&!u.props.in;!l||c&&!p?l||!c||p?l&&c&&(0,i.isValidElement)(u)&&(o[a]=(0,i.cloneElement)(s,{onExited:n.bind(null,s),in:u.props.in,exit:W(s,"exit",e),enter:W(s,"enter",e)})):o[a]=(0,i.cloneElement)(s,{in:!1}):o[a]=(0,i.cloneElement)(s,{onExited:n.bind(null,s),in:!0,exit:W(s,"exit",e),enter:W(s,"enter",e)})}})),o}var I=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},P=function(e){function t(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}(0,E.A)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,o=t.children,a=t.handleExited;return{children:t.firstRender?(n=e,r=a,j(n.children,(function(e){return(0,i.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:W(e,"appear",n),enter:W(e,"enter",n),exit:W(e,"exit",n)})}))):B(e,o,a),firstRender:!1}},n.handleExited=function(e,t){var n=j(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,r.A)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,o.A)(e,["component","childFactory"]),a=this.state.contextValue,s=I(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?i.createElement(T.Provider,{value:a},s):i.createElement(T.Provider,{value:a},i.createElement(t,r,s))},t}(i.Component);P.propTypes={},P.defaultProps={component:"div",childFactory:function(e){return e}};const V=P;var L=n(7437),O=n(4848);const F=function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:o,rippleY:s,rippleSize:c,in:l,onExited:u,timeout:p}=e,[d,h]=i.useState(!1),m=(0,a.A)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),f={width:c,height:c,top:-c/2+s,left:-c/2+o},v=(0,a.A)(n.child,d&&n.childLeaving,r&&n.childPulsate);return l||d||h(!0),i.useEffect((()=>{if(!l&&null!=u){const e=setTimeout(u,p);return()=>{clearTimeout(e)}}}),[u,l,p]),(0,O.jsx)("span",{className:m,style:f,children:(0,O.jsx)("span",{className:v})})};const z=(0,u.A)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),D=["center","classes","className"];let _,H,X,G,K=e=>e;const q=(0,L.i7)(_||(_=K`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),U=(0,L.i7)(H||(H=K`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Y=(0,L.i7)(X||(X=K`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),J=(0,l.Ay)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Q=(0,l.Ay)(F,{name:"MuiTouchRipple",slot:"Ripple"})(G||(G=K`
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
`),z.rippleVisible,q,550,(({theme:e})=>e.transitions.easing.easeInOut),z.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),z.child,z.childLeaving,U,550,(({theme:e})=>e.transitions.easing.easeInOut),z.childPulsate,Y,(({theme:e})=>e.transitions.easing.easeInOut)),Z=i.forwardRef((function(e,t){const n=(0,c.A)({props:e,name:"MuiTouchRipple"}),{center:s=!1,classes:l={},className:u}=n,p=(0,o.A)(n,D),[d,h]=i.useState([]),m=i.useRef(0),f=i.useRef(null);i.useEffect((()=>{f.current&&(f.current(),f.current=null)}),[d]);const v=i.useRef(!1),g=y(),A=i.useRef(null),b=i.useRef(null),w=i.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:o,cb:i}=e;h((e=>[...e,(0,O.jsx)(Q,{classes:{ripple:(0,a.A)(l.ripple,z.ripple),rippleVisible:(0,a.A)(l.rippleVisible,z.rippleVisible),ripplePulsate:(0,a.A)(l.ripplePulsate,z.ripplePulsate),child:(0,a.A)(l.child,z.child),childLeaving:(0,a.A)(l.childLeaving,z.childLeaving),childPulsate:(0,a.A)(l.childPulsate,z.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o},m.current)])),m.current+=1,f.current=i}),[l]),x=i.useCallback(((e={},t={},n=(()=>{}))=>{const{pulsate:r=!1,center:o=s||t.pulsate,fakeElement:i=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&v.current)return void(v.current=!1);"touchstart"===(null==e?void 0:e.type)&&(v.current=!0);const a=i?null:b.current,c=a?a.getBoundingClientRect():{width:0,height:0,left:0,top:0};let l,u,p;if(o||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)l=Math.round(c.width/2),u=Math.round(c.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;l=Math.round(t-c.left),u=Math.round(n-c.top)}if(o)p=Math.sqrt((2*c.width**2+c.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((a?a.clientWidth:0)-l),l)+2,t=2*Math.max(Math.abs((a?a.clientHeight:0)-u),u)+2;p=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===A.current&&(A.current=()=>{w({pulsate:r,rippleX:l,rippleY:u,rippleSize:p,cb:n})},g.start(80,(()=>{A.current&&(A.current(),A.current=null)}))):w({pulsate:r,rippleX:l,rippleY:u,rippleSize:p,cb:n})}),[s,w,g]),k=i.useCallback((()=>{x({},{pulsate:!0})}),[x]),R=i.useCallback(((e,t)=>{if(g.clear(),"touchend"===(null==e?void 0:e.type)&&A.current)return A.current(),A.current=null,void g.start(0,(()=>{R(e,t)}));A.current=null,h((e=>e.length>0?e.slice(1):e)),f.current=t}),[g]);return i.useImperativeHandle(t,(()=>({pulsate:k,start:x,stop:R})),[k,x,R]),(0,O.jsx)(J,(0,r.A)({className:(0,a.A)(z.root,l.root,u),ref:b},p,{children:(0,O.jsx)(V,{component:null,exit:!0,children:d})}))}));function ee(e){return(0,p.Ay)("MuiButtonBase",e)}const te=(0,u.A)("MuiButtonBase",["root","disabled","focusVisible"]),ne=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],re=(0,l.Ay)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${te.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),oe=i.forwardRef((function(e,t){const n=(0,c.A)({props:e,name:"MuiButtonBase"}),{action:l,centerRipple:u=!1,children:p,className:d,component:h="button",disabled:f=!1,disableRipple:g=!1,disableTouchRipple:A=!1,focusRipple:b=!1,LinkComponent:y="a",onBlur:w,onClick:x,onContextMenu:k,onDragLeave:R,onFocus:S,onFocusVisible:M,onKeyDown:N,onKeyUp:C,onMouseDown:E,onMouseLeave:T,onMouseUp:j,onTouchEnd:W,onTouchMove:B,onTouchStart:I,tabIndex:P=0,TouchRippleProps:V,touchRippleRef:L,type:F}=n,z=(0,o.A)(n,ne),D=i.useRef(null),_=i.useRef(null),H=m(_,L),{isFocusVisibleRef:X,onFocus:G,onBlur:K,ref:q}=$(),[U,Y]=i.useState(!1);f&&U&&Y(!1),i.useImperativeHandle(l,(()=>({focusVisible:()=>{Y(!0),D.current.focus()}})),[]);const[J,Q]=i.useState(!1);i.useEffect((()=>{Q(!0)}),[]);const te=J&&!g&&!f;function oe(e,t,n=A){return v((r=>{t&&t(r);return!n&&_.current&&_.current[e](r),!0}))}i.useEffect((()=>{U&&b&&!g&&J&&_.current.pulsate()}),[g,b,U,J]);const ie=oe("start",E),ae=oe("stop",k),se=oe("stop",R),ce=oe("stop",j),le=oe("stop",(e=>{U&&e.preventDefault(),T&&T(e)})),ue=oe("start",I),pe=oe("stop",W),de=oe("stop",B),he=oe("stop",(e=>{K(e),!1===X.current&&Y(!1),w&&w(e)}),!1),me=v((e=>{D.current||(D.current=e.currentTarget),G(e),!0===X.current&&(Y(!0),M&&M(e)),S&&S(e)})),fe=()=>{const e=D.current;return h&&"button"!==h&&!("A"===e.tagName&&e.href)},ve=i.useRef(!1),ge=v((e=>{b&&!ve.current&&U&&_.current&&" "===e.key&&(ve.current=!0,_.current.stop(e,(()=>{_.current.start(e)}))),e.target===e.currentTarget&&fe()&&" "===e.key&&e.preventDefault(),N&&N(e),e.target===e.currentTarget&&fe()&&"Enter"===e.key&&!f&&(e.preventDefault(),x&&x(e))})),Ae=v((e=>{b&&" "===e.key&&_.current&&U&&!e.defaultPrevented&&(ve.current=!1,_.current.stop(e,(()=>{_.current.pulsate(e)}))),C&&C(e),x&&e.target===e.currentTarget&&fe()&&" "===e.key&&!e.defaultPrevented&&x(e)}));let be=h;"button"===be&&(z.href||z.to)&&(be=y);const ye={};"button"===be?(ye.type=void 0===F?"button":F,ye.disabled=f):(z.href||z.to||(ye.role="button"),f&&(ye["aria-disabled"]=f));const we=m(t,q,D);const xe=(0,r.A)({},n,{centerRipple:u,component:h,disabled:f,disableRipple:g,disableTouchRipple:A,focusRipple:b,tabIndex:P,focusVisible:U}),ke=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,i={root:["root",t&&"disabled",n&&"focusVisible"]},a=(0,s.A)(i,ee,o);return n&&r&&(a.root+=` ${r}`),a})(xe);return(0,O.jsxs)(re,(0,r.A)({as:be,className:(0,a.A)(ke.root,d),ownerState:xe,onBlur:he,onClick:x,onContextMenu:ae,onFocus:me,onKeyDown:ge,onKeyUp:Ae,onMouseDown:ie,onMouseLeave:le,onMouseUp:ce,onDragLeave:se,onTouchEnd:pe,onTouchMove:de,onTouchStart:ue,ref:we,tabIndex:f?-1:P,type:F},ye,z,{children:[p,te?(0,O.jsx)(Z,(0,r.A)({ref:H,center:u},V)):null]}))})),ie=oe,ae=["children","className","focusVisibleClassName"],se=(0,l.Ay)(ie,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${h.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${h.focusVisible} .${h.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}}))),ce=(0,l.Ay)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,t)=>t.focusHighlight})((({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}))),le=i.forwardRef((function(e,t){const n=(0,c.A)({props:e,name:"MuiCardActionArea"}),{children:i,className:l,focusVisibleClassName:u}=n,p=(0,o.A)(n,ae),h=n,m=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"],focusHighlight:["focusHighlight"]},d,t)})(h);return(0,O.jsxs)(se,(0,r.A)({className:(0,a.A)(m.root,l),focusVisibleClassName:(0,a.A)(u,m.focusVisible),ref:t,ownerState:h},p,{children:[i,(0,O.jsx)(ce,{className:m.focusHighlight,ownerState:h})]}))}))},5292:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(8168),o=n(8587),i=n(6540),a=n(4164),s=n(4111),c=n(2871),l=n(3541),u=n(7553),p=n(7245);function d(e){return(0,p.Ay)("MuiCardContent",e)}(0,u.A)("MuiCardContent",["root"]);var h=n(4848);const m=["className","component"],f=(0,c.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),v=i.forwardRef((function(e,t){const n=(0,l.A)({props:e,name:"MuiCardContent"}),{className:i,component:c="div"}=n,u=(0,o.A)(n,m),p=(0,r.A)({},n,{component:c}),v=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},d,t)})(p);return(0,h.jsx)(f,(0,r.A)({as:c,className:(0,a.A)(v.root,i),ownerState:p,ref:t},u))}))},1662:(e,t,n)=>{n.d(t,{Ay:()=>C});var r=n(8587),o=n(8168),i=n(6540),a=n(4164),s=n(9452),c=n(9599),l=n(4111),u=n(2871),p=n(3541),d=n(2858),h=n(2765),m=n(8312);const f=i.createContext();var v=n(7553),g=n(7245);function A(e){return(0,g.Ay)("MuiGrid",e)}const b=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],y=(0,v.A)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...b.map((e=>`grid-xs-${e}`)),...b.map((e=>`grid-sm-${e}`)),...b.map((e=>`grid-md-${e}`)),...b.map((e=>`grid-lg-${e}`)),...b.map((e=>`grid-xl-${e}`))]);var w=n(4848);const x=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function k(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function R({breakpoints:e,values:t}){let n="";Object.keys(t).forEach((e=>{""===n&&0!==t[e]&&(n=e)}));const r=Object.keys(e).sort(((t,n)=>e[t]-e[n]));return r.slice(0,r.indexOf(n))}const S=(0,u.Ay)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{container:r,direction:o,item:i,spacing:a,wrap:s,zeroMinWidth:c,breakpoints:l}=n;let u=[];r&&(u=function(e,t,n={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[n[`spacing-xs-${String(e)}`]];const r=[];return t.forEach((t=>{const o=e[t];Number(o)>0&&r.push(n[`spacing-${t}-${String(o)}`])})),r}(a,l,t));const p=[];return l.forEach((e=>{const r=n[e];r&&p.push(t[`grid-${e}-${String(r)}`])})),[t.root,r&&t.container,i&&t.item,c&&t.zeroMinWidth,...u,"row"!==o&&t[`direction-xs-${String(o)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],...p]}})((({ownerState:e})=>(0,o.A)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:t}){const n=(0,s.kW)({values:t.direction,breakpoints:e.breakpoints.values});return(0,s.NI)({theme:e},n,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${y.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:n,rowSpacing:r}=t;let o={};if(n&&0!==r){const t=(0,s.kW)({values:r,breakpoints:e.breakpoints.values});let n;"object"==typeof t&&(n=R({breakpoints:e.breakpoints.values,values:t})),o=(0,s.NI)({theme:e},t,((t,r)=>{var o;const i=e.spacing(t);return"0px"!==i?{marginTop:`-${k(i)}`,[`& > .${y.item}`]:{paddingTop:k(i)}}:null!=(o=n)&&o.includes(r)?{}:{marginTop:0,[`& > .${y.item}`]:{paddingTop:0}}}))}return o}),(function({theme:e,ownerState:t}){const{container:n,columnSpacing:r}=t;let o={};if(n&&0!==r){const t=(0,s.kW)({values:r,breakpoints:e.breakpoints.values});let n;"object"==typeof t&&(n=R({breakpoints:e.breakpoints.values,values:t})),o=(0,s.NI)({theme:e},t,((t,r)=>{var o;const i=e.spacing(t);return"0px"!==i?{width:`calc(100% + ${k(i)})`,marginLeft:`-${k(i)}`,[`& > .${y.item}`]:{paddingLeft:k(i)}}:null!=(o=n)&&o.includes(r)?{}:{width:"100%",marginLeft:0,[`& > .${y.item}`]:{paddingLeft:0}}}))}return o}),(function({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce(((r,i)=>{let a={};if(t[i]&&(n=t[i]),!n)return r;if(!0===n)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,s.kW)({values:t.columns,breakpoints:e.breakpoints.values}),l="object"==typeof c?c[i]:c;if(null==l)return r;const u=Math.round(n/l*1e8)/1e6+"%";let p={};if(t.container&&t.item&&0!==t.columnSpacing){const n=e.spacing(t.columnSpacing);if("0px"!==n){const e=`calc(${u} + ${k(n)})`;p={flexBasis:e,maxWidth:e}}}a=(0,o.A)({flexBasis:u,flexGrow:0,maxWidth:u},p)}return 0===e.breakpoints.values[i]?Object.assign(r,a):r[e.breakpoints.up(i)]=a,r}),{})}));const M=e=>{const{classes:t,container:n,direction:r,item:o,spacing:i,wrap:a,zeroMinWidth:s,breakpoints:c}=e;let u=[];n&&(u=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];const n=[];return t.forEach((t=>{const r=e[t];if(Number(r)>0){const e=`spacing-${t}-${String(r)}`;n.push(e)}})),n}(i,c));const p=[];c.forEach((t=>{const n=e[t];n&&p.push(`grid-${t}-${String(n)}`)}));const d={root:["root",n&&"container",o&&"item",s&&"zeroMinWidth",...u,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==a&&`wrap-xs-${String(a)}`,...p]};return(0,l.A)(d,A,t)},N=i.forwardRef((function(e,t){const n=(0,p.A)({props:e,name:"MuiGrid"}),{breakpoints:s}=function(){const e=(0,d.A)(h.A);return e[m.A]||e}(),l=(0,c.A)(n),{className:u,columns:v,columnSpacing:g,component:A="div",container:b=!1,direction:y="row",item:k=!1,rowSpacing:R,spacing:N=0,wrap:C="wrap",zeroMinWidth:$=!1}=l,E=(0,r.A)(l,x),T=R||N,j=g||N,W=i.useContext(f),B=b?v||12:W,I={},P=(0,o.A)({},E);s.keys.forEach((e=>{null!=E[e]&&(I[e]=E[e],delete P[e])}));const V=(0,o.A)({},l,{columns:B,container:b,direction:y,item:k,rowSpacing:T,columnSpacing:j,wrap:C,zeroMinWidth:$,spacing:N},I,{breakpoints:s.keys}),L=M(V);return(0,w.jsx)(f.Provider,{value:B,children:(0,w.jsx)(S,(0,o.A)({ownerState:V,className:(0,a.A)(L.root,u),as:A,ref:t},P))})}));const C=N},8999:(e,t,n)=>{n.d(t,{A:()=>L});var r=n(8587),o=n(8168),i=n(6540),a=n(4164),s=n(4521),c=n(7245),l=n(4111),u=n(1311),p=n(1264),d=n(3571);const h=["ownerState"],m=["variants"],f=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function v(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const g=(0,p.A)(),A=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function b({defaultTheme:e,theme:t,themeId:n}){return r=t,0===Object.keys(r).length?e:t[n]||t;var r}function y(e){return e?(t,n)=>n[e]:null}function w(e,t){let{ownerState:n}=t,i=(0,r.A)(t,h);const a="function"==typeof e?e((0,o.A)({ownerState:n},i)):e;if(Array.isArray(a))return a.flatMap((e=>w(e,(0,o.A)({ownerState:n},i))));if(a&&"object"==typeof a&&Array.isArray(a.variants)){const{variants:e=[]}=a;let t=(0,r.A)(a,m);return e.forEach((e=>{let r=!0;"function"==typeof e.props?r=e.props((0,o.A)({ownerState:n},i,n)):Object.keys(e.props).forEach((t=>{(null==n?void 0:n[t])!==e.props[t]&&i[t]!==e.props[t]&&(r=!1)})),r&&(Array.isArray(t)||(t=[t]),t.push("function"==typeof e.style?e.style((0,o.A)({ownerState:n},i,n)):e.style))})),t}return a}const x=function(e={}){const{themeId:t,defaultTheme:n=g,rootShouldForwardProp:i=v,slotShouldForwardProp:a=v}=e,c=e=>(0,d.A)((0,o.A)({},e,{theme:b((0,o.A)({},e,{defaultTheme:n,themeId:t}))}));return c.__mui_systemSx=!0,(e,l={})=>{(0,u.internal_processStyles)(e,(e=>e.filter((e=>!(null!=e&&e.__mui_systemSx)))));const{name:p,slot:d,skipVariantsResolver:h,skipSx:m,overridesResolver:g=y(A(d))}=l,x=(0,r.A)(l,f),k=void 0!==h?h:d&&"Root"!==d&&"root"!==d||!1,R=m||!1;let S=v;"Root"===d||"root"===d?S=i:d?S=a:function(e){return"string"==typeof e&&e.charCodeAt(0)>96}(e)&&(S=void 0);const M=(0,u.default)(e,(0,o.A)({shouldForwardProp:S,label:undefined},x)),N=e=>"function"==typeof e&&e.__emotion_real!==e||(0,s.Q)(e)?r=>w(e,(0,o.A)({},r,{theme:b({theme:r.theme,defaultTheme:n,themeId:t})})):e,C=(r,...i)=>{let a=N(r);const s=i?i.map(N):[];p&&g&&s.push((e=>{const r=b((0,o.A)({},e,{defaultTheme:n,themeId:t}));if(!r.components||!r.components[p]||!r.components[p].styleOverrides)return null;const i=r.components[p].styleOverrides,a={};return Object.entries(i).forEach((([t,n])=>{a[t]=w(n,(0,o.A)({},e,{theme:r}))})),g(e,a)})),p&&!k&&s.push((e=>{var r;const i=b((0,o.A)({},e,{defaultTheme:n,themeId:t}));return w({variants:null==i||null==(r=i.components)||null==(r=r[p])?void 0:r.variants},(0,o.A)({},e,{theme:i}))})),R||s.push(c);const l=s.length-i.length;if(Array.isArray(r)&&l>0){const e=new Array(l).fill("");a=[...r,...e],a.raw=[...r.raw,...e]}const u=M(a,...s);return e.muiName&&(u.muiName=e.muiName),u};return M.withConfig&&(C.withConfig=M.withConfig),C}}(),k=x;var R=n(4766),S=n(9599),M=n(9452),N=n(3675),C=n(4848);const $=["component","direction","spacing","divider","children","className","useFlexGap"],E=(0,p.A)(),T=k("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function j(e){return(0,R.A)({props:e,name:"MuiStack",defaultTheme:E})}function W(e,t){const n=i.Children.toArray(e).filter(Boolean);return n.reduce(((e,r,o)=>(e.push(r),o<n.length-1&&e.push(i.cloneElement(t,{key:`separator-${o}`})),e)),[])}const B=({ownerState:e,theme:t})=>{let n=(0,o.A)({display:"flex",flexDirection:"column"},(0,M.NI)({theme:t},(0,M.kW)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const r=(0,N.LX)(t),o=Object.keys(t.breakpoints.values).reduce(((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t)),{}),i=(0,M.kW)({values:e.direction,base:o}),a=(0,M.kW)({values:e.spacing,base:o});"object"==typeof i&&Object.keys(i).forEach(((e,t,n)=>{if(!i[e]){const r=t>0?i[n[t-1]]:"column";i[e]=r}}));const c=(t,n)=>{return e.useFlexGap?{gap:(0,N._W)(r,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${o=n?i[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]}`]:(0,N._W)(r,t)}};var o};n=(0,s.A)(n,(0,M.NI)({theme:t},a,c))}return n=(0,M.iZ)(t.breakpoints,n),n};var I=n(2871),P=n(3541);const V=function(e={}){const{createStyledComponent:t=T,useThemeProps:n=j,componentName:s="MuiStack"}=e,u=t(B),p=i.forwardRef((function(e,t){const i=n(e),p=(0,S.A)(i),{component:d="div",direction:h="column",spacing:m=0,divider:f,children:v,className:g,useFlexGap:A=!1}=p,b=(0,r.A)(p,$),y={direction:h,spacing:m,useFlexGap:A},w=(0,l.A)({root:["root"]},(e=>(0,c.Ay)(s,e)),{});return(0,C.jsx)(u,(0,o.A)({as:d,ownerState:y,ref:t,className:(0,a.A)(w.root,g)},b,{children:f?W(v,f):v}))}));return p}({createStyledComponent:(0,I.Ay)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,P.A)({props:e,name:"MuiStack"})}),L=V},7859:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(8587),o=n(8168),i=n(6540),a=n(4164),s=n(9599),c=n(4111),l=n(2871),u=n(3541),p=n(8466),d=n(7553),h=n(7245);function m(e){return(0,h.Ay)("MuiTypography",e)}(0,d.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var f=n(4848);const v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,l.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,p.A)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,o.A)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),A={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=i.forwardRef((function(e,t){const n=(0,u.A)({props:e,name:"MuiTypography"}),i=(e=>b[e]||e)(n.color),l=(0,s.A)((0,o.A)({},n,{color:i})),{align:d="inherit",className:h,component:y,gutterBottom:w=!1,noWrap:x=!1,paragraph:k=!1,variant:R="body1",variantMapping:S=A}=l,M=(0,r.A)(l,v),N=(0,o.A)({},l,{align:d,color:i,className:h,component:y,gutterBottom:w,noWrap:x,paragraph:k,variant:R,variantMapping:S}),C=y||(k?"p":S[R]||A[R])||"span",$=(e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:o,variant:i,classes:a}=e,s={root:["root",i,"inherit"!==e.align&&`align${(0,p.A)(t)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return(0,c.A)(s,m,a)})(N);return(0,f.jsx)(g,(0,o.A)({as:C,ref:t,ownerState:N,className:(0,a.A)($.root,h)},M))}))}}]);