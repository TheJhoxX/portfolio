(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[850],{2014:function(e){e.exports={style:{fontFamily:"'__Inter_20951f', '__Inter_Fallback_20951f'",fontStyle:"normal"},className:"__className_20951f"}},8367:function(e,t,n){"use strict";n.d(t,{O:function(){return h}});var r=n(6551),a=n(7174),o=(0,r.tv)({base:["relative inline-flex items-center outline-none tap-highlight-transparent",...a.Dh],variants:{size:{sm:"text-small",md:"text-medium",lg:"text-large"},color:{foreground:"text-foreground",primary:"text-primary",secondary:"text-secondary",success:"text-success",warning:"text-warning",danger:"text-danger"},underline:{none:"no-underline",hover:"hover:underline",always:"underline",active:"active:underline",focus:"focus:underline"},isBlock:{true:["px-2","py-1","hover:after:opacity-100","after:content-['']","after:inset-0","after:opacity-0","after:w-full","after:h-full","after:rounded-xl","after:transition-background","after:absolute"],false:"hover:opacity-80 active:opacity-disabled transition-opacity"},isDisabled:{true:"opacity-disabled cursor-default pointer-events-none"},disableAnimation:{true:"after:transition-none transition-none"}},compoundVariants:[{isBlock:!0,color:"foreground",class:"hover:after:bg-foreground/10"},{isBlock:!0,color:"primary",class:"hover:after:bg-primary/20"},{isBlock:!0,color:"secondary",class:"hover:after:bg-secondary/20"},{isBlock:!0,color:"success",class:"hover:after:bg-success/20"},{isBlock:!0,color:"warning",class:"hover:after:bg-warning/20"},{isBlock:!0,color:"danger",class:"hover:after:bg-danger/20"},{underline:["hover","always","active","focus"],class:"underline-offset-4"}],defaultVariants:{color:"primary",size:"md",isBlock:!1,underline:"none",isDisabled:!1,disableAnimation:!1}}),i=n(5479),l=n(6565),u=n(6820),c=n(4480),s=n(5312),d=n(8794),f=n(2265),p=n(7437),v=e=>(0,p.jsxs)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",width:"1em",...e,children:[(0,p.jsx)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),(0,p.jsx)("path",{d:"M15 3h6v6"}),(0,p.jsx)("path",{d:"M10 14L21 3"})]}),m=(0,c.Gp)((e,t)=>{let{Component:n,children:r,showAnchorIcon:a,anchorIcon:m=(0,p.jsx)(v,{className:"flex mx-1 text-current self-center"}),getLinkProps:h}=function(e){var t,n;let[r,a]=(0,c.oe)(e,o.variantKeys),{ref:p,as:v,children:m,anchorIcon:h,isExternal:y=!1,showAnchorIcon:g=!1,autoFocus:b=!1,className:x,onPress:w,onPressStart:k,onPressEnd:j,onClick:E,...S}=r,_=(0,s.gy)(p),{linkProps:C}=function(e,t){let{elementType:n="a",onPress:r,onPressStart:a,onPressEnd:o,onClick:c,isDisabled:s,...d}=e,f={};"a"!==n&&(f={role:"link",tabIndex:s?void 0:0});let{focusableProps:p}=(0,l.kc)(e,t),{pressProps:v,isPressed:m}=(0,u.r7)({onPress:r,onPressStart:a,onPressEnd:o,isDisabled:s,ref:t}),h=(0,i.zL)(d,{labelable:!0}),y=(0,i.dG)(p,v);return{isPressed:m,linkProps:(0,i.dG)(h,{...y,...f,"aria-disabled":s||void 0,"aria-current":e["aria-current"],onClick:e=>{var t;null==(t=v.onClick)||t.call(v,e),c&&c(e)}})}}({...S,onPress:w,onPressStart:k,onPressEnd:j,onClick:E,isDisabled:e.isDisabled,elementType:`${v}`},_),{isFocused:N,isFocusVisible:P,focusProps:O}=(0,l.Fx)({autoFocus:b});y&&(S.rel=null!=(t=S.rel)?t:"noopener noreferrer",S.target=null!=(n=S.target)?n:"_blank");let R=(0,f.useMemo)(()=>o({...a,className:x}),[...Object.values(a),x]),M=(0,f.useCallback)(()=>({ref:_,className:R,"data-focus":(0,d.PB)(N),"data-disabled":(0,d.PB)(e.isDisabled),"data-focus-visible":(0,d.PB)(P),...(0,i.dG)(O,C,S)}),[R,N,P,O,C,S]);return{Component:v||"a",children:m,anchorIcon:h,showAnchorIcon:g,getLinkProps:M}}({ref:t,...e});return(0,p.jsx)(n,{...h(),children:(0,p.jsxs)(p.Fragment,{children:[r,a&&m]})})});m.displayName="NextUI.Link";var h=m},3519:function(e,t,n){"use strict";n.d(t,{V:function(){return r},q:function(){return a}});var[r,a]=(0,n(3024).k)({name:"NavbarContext",strict:!0,errorMessage:"useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />"})},877:function(e,t,n){"use strict";n.d(t,{$:function(){return et}});var r,a,o,i,l,u,c=n(3519),s={enter:{height:"calc(100vh - var(--navbar-height) - 1px)",transition:{duration:.3,easings:"easeOut"}},exit:{height:0,transition:{duration:.25,easings:"easeIn"}}},d=n(4480),f=n(5312),p=n(9762),v=n(8794),m=n(2403),h=n(162),y=n(5479),g=n(2265),b=function(){return(b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function x(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}"function"==typeof SuppressedError&&SuppressedError;var w="right-scroll-bar-position",k="width-before-scroll-bar",j=(void 0===r&&(r={}),(void 0===a&&(a=function(e){return e}),o=[],i=!1,l={read:function(){if(i)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return o.length?o[o.length-1]:null},useMedium:function(e){var t=a(e,i);return o.push(t),function(){o=o.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(i=!0;o.length;){var t=o;o=[],t.forEach(e)}o={push:function(t){return e(t)},filter:function(){return o}}},assignMedium:function(e){i=!0;var t=[];if(o.length){var n=o;o=[],n.forEach(e),t=o}var r=function(){var n=t;t=[],n.forEach(e)},a=function(){return Promise.resolve().then(r)};a(),o={push:function(e){t.push(e),a()},filter:function(e){return t=t.filter(e),o}}}}).options=b({async:!0,ssr:!1},r),l),E=function(){},S=g.forwardRef(function(e,t){var n,r,a,o=g.useRef(null),i=g.useState({onScrollCapture:E,onWheelCapture:E,onTouchMoveCapture:E}),l=i[0],u=i[1],c=e.forwardProps,s=e.children,d=e.className,f=e.removeScrollBar,p=e.enabled,v=e.shards,m=e.sideCar,h=e.noIsolation,y=e.inert,w=e.allowPinchZoom,k=e.as,S=void 0===k?"div":k,_=e.gapMode,C=x(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),N=(n=[o,t],r=function(e){return n.forEach(function(t){return"function"==typeof t?t(e):t&&(t.current=e),t})},(a=(0,g.useState)(function(){return{value:null,callback:r,facade:{get current(){return a.value},set current(value){var e=a.value;e!==value&&(a.value=value,a.callback(value,e))}}}})[0]).callback=r,a.facade),P=b(b({},C),l);return g.createElement(g.Fragment,null,p&&g.createElement(m,{sideCar:j,removeScrollBar:f,shards:v,noIsolation:h,inert:y,setCallbacks:u,allowPinchZoom:!!w,lockRef:o,gapMode:_}),c?g.cloneElement(g.Children.only(s),b(b({},P),{ref:N})):g.createElement(S,b({},P,{className:d,ref:N}),s))});S.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},S.classNames={fullWidth:k,zeroRight:w};var _=function(e){var t=e.sideCar,n=x(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return g.createElement(r,b({},n))};_.isSideCarExport=!0;var C=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=u||n.nc;return t&&e.setAttribute("nonce",t),e}())){var a,o;(a=t).styleSheet?a.styleSheet.cssText=r:a.appendChild(document.createTextNode(r)),o=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},N=function(){var e=C();return function(t,n){g.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},P=function(){var e=N();return function(t){return e(t.styles,t.dynamic),null}},O={left:0,top:0,right:0,gap:0},R=function(e){return parseInt(e||"",10)||0},M=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],a=t["padding"===e?"paddingRight":"marginRight"];return[R(n),R(r),R(a)]},B=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return O;var t=M(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},I=P(),L=function(e,t,n,r){var a=e.left,o=e.top,i=e.right,l=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(l,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(a,"px;\n    padding-top: ").concat(o,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(w," {\n    right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(k," {\n    margin-right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(w," .").concat(w," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(k," .").concat(k," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(l,"px;\n  }\n")},T=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=void 0===r?"margin":r,o=g.useMemo(function(){return B(a)},[a]);return g.createElement(I,{styles:L(o,!t,a,n?"":"!important")})},W=!1;if("undefined"!=typeof window)try{var $=Object.defineProperty({},"passive",{get:function(){return W=!0,!0}});window.addEventListener("test",$,$),window.removeEventListener("test",$,$)}catch(e){W=!1}var V=!!W&&{passive:!1},A=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},D=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),G(e,r)){var a=U(e,r);if(a[1]>a[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},G=function(e,t){return"v"===e?A(t,"overflowY"):A(t,"overflowX")},U=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},F=function(e,t,n,r,a){var o,i=(o=window.getComputedStyle(t).direction,"h"===e&&"rtl"===o?-1:1),l=i*r,u=n.target,c=t.contains(u),s=!1,d=l>0,f=0,p=0;do{var v=U(e,u),m=v[0],h=v[1]-v[2]-i*m;(m||h)&&G(e,u)&&(f+=h,p+=m),u=u.parentNode}while(!c&&u!==document.body||c&&(t.contains(u)||t===u));return d&&(a&&0===f||!a&&l>f)?s=!0:!d&&(a&&0===p||!a&&-l>p)&&(s=!0),s},z=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},q=function(e){return[e.deltaX,e.deltaY]},H=function(e){return e&&"current"in e?e.current:e},X=0,Y=[],Z=(j.useMedium(function(e){var t=g.useRef([]),n=g.useRef([0,0]),r=g.useRef(),a=g.useState(X++)[0],o=g.useState(P)[0],i=g.useRef(e);g.useEffect(function(){i.current=e},[e]),g.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(H),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var l=g.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var a,o=z(e),l=n.current,u="deltaX"in e?e.deltaX:l[0]-o[0],c="deltaY"in e?e.deltaY:l[1]-o[1],s=e.target,d=Math.abs(u)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=D(d,s);if(!f)return!0;if(f?a=d:(a="v"===d?"h":"v",f=D(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(u||c)&&(r.current=a),!a)return!0;var p=r.current||a;return F(p,t,e,"h"===p?u:c,!0)},[]),u=g.useCallback(function(e){if(Y.length&&Y[Y.length-1]===o){var n="deltaY"in e?q(e):z(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var a=(i.current.shards||[]).map(H).filter(Boolean).filter(function(t){return t.contains(e.target)});(a.length>0?l(e,a[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),c=g.useCallback(function(e,n,r,a){var o={name:e,delta:n,target:r,should:a};t.current.push(o),setTimeout(function(){t.current=t.current.filter(function(e){return e!==o})},1)},[]),s=g.useCallback(function(e){n.current=z(e),r.current=void 0},[]),d=g.useCallback(function(t){c(t.type,q(t),t.target,l(t,e.lockRef.current))},[]),f=g.useCallback(function(t){c(t.type,z(t),t.target,l(t,e.lockRef.current))},[]);g.useEffect(function(){return Y.push(o),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",u,V),document.addEventListener("touchmove",u,V),document.addEventListener("touchstart",s,V),function(){Y=Y.filter(function(e){return e!==o}),document.removeEventListener("wheel",u,V),document.removeEventListener("touchmove",u,V),document.removeEventListener("touchstart",s,V)}},[]);var p=e.removeScrollBar,v=e.inert;return g.createElement(g.Fragment,null,v?g.createElement(o,{styles:"\n  .block-interactivity-".concat(a," {pointer-events: none;}\n  .allow-interactivity-").concat(a," {pointer-events: all;}\n")}):null,p?g.createElement(T,{gapMode:e.gapMode}):null)}),_),K=g.forwardRef(function(e,t){return g.createElement(S,b({},e,{ref:t,sideCar:Z}))});K.classNames=S.classNames;var J=n(6125),Q=n(7437),ee=(0,d.Gp)((e,t)=>{var n,r;let{className:a,children:o,portalContainer:i,motionProps:l,style:u,...d}=e,b=(0,f.gy)(t),{slots:x,isMenuOpen:w,height:k,disableAnimation:j,classNames:E}=(0,c.q)(),S=(0,p.W)(null==E?void 0:E.menu,a),_=(0,g.useCallback)(({children:e})=>(0,Q.jsx)(K,{forwardProps:!0,enabled:w,removeScrollBar:!1,children:e}),[w]),C=j?(0,Q.jsx)(_,{children:(0,Q.jsx)("ul",{ref:b,className:null==(n=x.menu)?void 0:n.call(x,{class:S}),"data-open":(0,v.PB)(w),style:{"--navbar-height":k},...d,children:o})}):(0,Q.jsx)(m.M,{mode:"wait",children:w?(0,Q.jsx)(_,{children:(0,Q.jsx)(h.E.ul,{ref:b,layoutScroll:!0,animate:"enter",className:null==(r=x.menu)?void 0:r.call(x,{class:S}),"data-open":(0,v.PB)(w),exit:"exit",initial:"exit",style:{"--navbar-height":k,...u},variants:s,...(0,y.dG)(l,d),children:o})}):null});return(0,Q.jsx)(J.aV,{portalContainer:i,children:C})});ee.displayName="NextUI.NavbarMenu";var et=ee},4533:function(e,t,n){"use strict";n.d(t,{L:function(){return h}});var r=n(3519),a=n(5479),o=n(2835),i=n(4480),l=n(5312),u=n(9762),c=n(8794),s=n(4114),d=n(6565),f=n(6820),p=n(2265),v=n(7437),m=(0,i.Gp)((e,t)=>{var n;let{as:i,icon:m,className:h,onChange:y,autoFocus:g,srOnlyText:b,...x}=e,w=i||"button",k=(0,l.gy)(t),{slots:j,classNames:E,isMenuOpen:S,setIsMenuOpen:_}=(0,r.q)(),C=function(e={}){let{isReadOnly:t}=e,[n,r]=(0,s.zk)(e.isSelected,e.defaultSelected||!1,e.onChange);return{isSelected:n,setSelected:function(e){t||r(e)},toggle:function(){t||r(!n)}}}({...x,isSelected:S,onChange:e=>{null==y||y(e),_(e)}}),{buttonProps:N,isPressed:P}=function(e,t,n){let{isSelected:r}=t,{isPressed:i,buttonProps:l}=(0,o.j)({...e,onPress:(0,a.tS)(t.toggle,e.onPress)},n);return{isPressed:i,buttonProps:(0,a.dG)(l,{"aria-pressed":r})}}(e,C,k),{isFocusVisible:O,focusProps:R}=(0,d.Fx)({autoFocus:g}),{isHovered:M,hoverProps:B}=(0,f.XI)({}),I=(0,u.W)(null==E?void 0:E.toggle,h),L=(0,p.useMemo)(()=>"function"==typeof m?m(null!=S&&S):m||(0,v.jsx)("span",{className:j.toggleIcon({class:null==E?void 0:E.toggleIcon})}),[m,j.toggleIcon,null==E?void 0:E.toggleIcon]),T=(0,p.useMemo)(()=>b||(C.isSelected?"close navigation menu":"open navigation menu"),[b,S]);return(0,v.jsxs)(w,{ref:k,className:null==(n=j.toggle)?void 0:n.call(j,{class:I}),"data-focus-visible":(0,c.PB)(O),"data-hover":(0,c.PB)(M),"data-open":(0,c.PB)(S),"data-pressed":(0,c.PB)(P),...(0,a.dG)(N,R,B,x),children:[(0,v.jsx)("span",{className:j.srOnly(),children:T}),L]})});m.displayName="NextUI.NavbarMenuToggle";var h=m},5968:function(e,t,n){"use strict";n.d(t,{k:function(){return s}});var r=n(3519),a=n(4480),o=n(5312),i=n(9762),l=n(8794),u=n(7437),c=(0,a.Gp)((e,t)=>{var n;let{as:a,className:c,children:s,isActive:d,...f}=e,p=a||"li",v=(0,o.gy)(t),{slots:m,classNames:h}=(0,r.q)(),y=(0,i.W)(null==h?void 0:h.item,c);return(0,u.jsx)(p,{ref:v,className:null==(n=m.item)?void 0:n.call(m,{class:y}),"data-active":(0,l.PB)(d),...f,children:s})});c.displayName="NextUI.NavbarItem";var s=c},7231:function(e,t,n){"use strict";n.d(t,{U:function(){return c}});var r=n(3519),a=n(4480),o=n(5312),i=n(9762),l=n(7437),u=(0,a.Gp)((e,t)=>{var n;let{as:a,className:u,children:c,justify:s="start",...d}=e,f=a||"ul",p=(0,o.gy)(t),{slots:v,classNames:m}=(0,r.q)(),h=(0,i.W)(null==m?void 0:m.content,u);return(0,l.jsx)(f,{ref:p,className:null==(n=v.content)?void 0:n.call(v,{class:h}),"data-justify":s,...d,children:c})});u.displayName="NextUI.NavbarContent";var c=u},1989:function(e,t,n){"use strict";n.d(t,{R:function(){return L}});var r,a,o=n(877),i=n(4923),l={visible:{y:0,transition:{ease:i.Lj.easeOut}},hidden:{y:"-100%",transition:{ease:i.Lj.easeIn}}},u=n(4480),c=n(6551),s=n(7174),d=(0,c.tv)({slots:{base:["flex","z-40","w-full","h-auto","items-center","justify-center","data-[menu-open=true]:border-none"],wrapper:["z-40","flex","px-6","gap-4","w-full","flex-row","relative","flex-nowrap","items-center","justify-between","h-[var(--navbar-height)]"],toggle:["group","flex","items-center","justify-center","w-6","h-full","outline-none","rounded-small","tap-highlight-transparent",...s.Dh],srOnly:["sr-only"],toggleIcon:["w-full","h-full","pointer-events-none","flex","flex-col","items-center","justify-center","text-inherit","group-data-[pressed=true]:opacity-70","transition-opacity","before:content-['']","before:block","before:h-px","before:w-6","before:bg-current","before:transition-transform","before:duration-150","before:-translate-y-1","before:rotate-0","group-data-[open=true]:before:translate-y-px","group-data-[open=true]:before:rotate-45","after:content-['']","after:block","after:h-px","after:w-6","after:bg-current","after:transition-transform","after:duration-150","after:translate-y-1","after:rotate-0","group-data-[open=true]:after:translate-y-0","group-data-[open=true]:after:-rotate-45"],brand:["flex","basis-0","flex-row","flex-grow","flex-nowrap","justify-start","bg-transparent","items-center","no-underline","text-medium","whitespace-nowrap","box-border"],content:["flex","gap-4","h-full","flex-row","flex-nowrap","items-center","data-[justify=start]:justify-start","data-[justify=start]:flex-grow","data-[justify=start]:basis-0","data-[justify=center]:justify-center","data-[justify=end]:justify-end","data-[justify=end]:flex-grow","data-[justify=end]:basis-0"],item:["text-medium","whitespace-nowrap","box-border","list-none","data-[active=true]:font-semibold"],menu:["z-30","px-6","pt-2","fixed","flex","max-w-full","top-[var(--navbar-height)]","inset-x-0","bottom-0","w-screen","flex-col","gap-2","overflow-y-auto"],menuItem:["text-large"]},variants:{position:{static:{base:"static"},sticky:{base:"sticky top-0 inset-x-0"}},maxWidth:{sm:{wrapper:"max-w-[640px]"},md:{wrapper:"max-w-[768px]"},lg:{wrapper:"max-w-[1024px]"},xl:{wrapper:"max-w-[1280px]"},"2xl":{wrapper:"max-w-[1536px]"},full:{wrapper:"max-w-full"}},hideOnScroll:{true:{base:["sticky","top-0","inset-x-0"]}},isBordered:{true:{base:["border-b","border-divider"]}},isBlurred:{false:{base:"bg-background",menu:"bg-background"},true:{base:["backdrop-blur-lg","data-[menu-open=true]:backdrop-blur-xl","backdrop-saturate-150","bg-background/70"],menu:["backdrop-blur-xl","backdrop-saturate-150","bg-background/70"]}},disableAnimation:{true:{menu:["hidden","h-[calc(100dvh_-_var(--navbar-height)_-_1px)]","data-[open=true]:flex"]}}},defaultVariants:{maxWidth:"lg",position:"sticky",isBlurred:!0}}),f=n(5312),p=n(9762),v=n(8794),m=n(2265),h=n(5479),y="undefined"!=typeof window;function g(e){return y?e?{x:e.scrollLeft,y:e.scrollTop}:{x:window.scrollX,y:window.scrollY}:{x:0,y:0}}var b=e=>{let{elementRef:t,delay:n=30,callback:r,isEnabled:a}=e,o=(0,m.useRef)(a?g(null==t?void 0:t.current):{x:0,y:0}),i=null,l=()=>{let e=g(null==t?void 0:t.current);"function"==typeof r&&r({prevPos:o.current,currPos:e}),o.current=e,i=null};return(0,m.useEffect)(()=>{if(!a)return;let e=()=>{n?null===i&&(i=setTimeout(l,n)):l()},r=(null==t?void 0:t.current)||window;return r.addEventListener("scroll",e),()=>r.removeEventListener("scroll",e)},[null==t?void 0:t.current,n,a]),o.current},x=n(4114),w=n(3519),k=Object.create,j=Object.defineProperty,E=Object.getOwnPropertyDescriptor,S=Object.getOwnPropertyNames,_=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty,N=(e,t)=>function(){return t||(0,e[S(e)[0]])((t={exports:{}}).exports,t),t.exports},P=N({"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js"(e){var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),s=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator,p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,m={};function h(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}function y(){}function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var b=g.prototype=new y;b.constructor=g,v(b,h.prototype),b.isPureReactComponent=!0;var x=Array.isArray,w=Object.prototype.hasOwnProperty,k={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function E(e,n,r){var a,o={},i=null,l=null;if(null!=n)for(a in void 0!==n.ref&&(l=n.ref),void 0!==n.key&&(i=""+n.key),n)w.call(n,a)&&!j.hasOwnProperty(a)&&(o[a]=n[a]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(a in u=e.defaultProps)void 0===o[a]&&(o[a]=u[a]);return{$$typeof:t,type:e,key:i,ref:l,props:o,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var _=/\/+/g;function C(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function N(e,r,a){if(null==e)return e;var o=[],i=0;return!function e(r,a,o,i,l){var u,c,s,d=typeof r;("undefined"===d||"boolean"===d)&&(r=null);var p=!1;if(null===r)p=!0;else switch(d){case"string":case"number":p=!0;break;case"object":switch(r.$$typeof){case t:case n:p=!0}}if(p)return l=l(p=r),r=""===i?"."+C(p,0):i,x(l)?(o="",null!=r&&(o=r.replace(_,"$&/")+"/"),e(l,a,o,"",function(e){return e})):null!=l&&(S(l)&&(u=l,c=o+(!l.key||p&&p.key===l.key?"":(""+l.key).replace(_,"$&/")+"/")+r,l={$$typeof:t,type:u.type,key:c,ref:u.ref,props:u.props,_owner:u._owner}),a.push(l)),1;if(p=0,i=""===i?".":i+":",x(r))for(var v=0;v<r.length;v++){d=r[v];var m=i+C(d,v);p+=e(d,a,o,m,l)}else if("function"==typeof(m=null===(s=r)||"object"!=typeof s?null:"function"==typeof(s=f&&s[f]||s["@@iterator"])?s:null))for(r=m.call(r),v=0;!(d=r.next()).done;)m=i+C(d=d.value,v++),p+=e(d,a,o,m,l);else if("object"===d)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(a=String(r))?"object with keys {"+Object.keys(r).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");return p}(e,o,"","",function(e){return r.call(a,e,i++)}),o}function P(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},R={transition:null};e.Children={map:N,forEach:function(e,t,n){N(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return N(e,function(){t++}),t},toArray:function(e){return N(e,function(e){return e})||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},e.Component=h,e.Fragment=r,e.Profiler=o,e.PureComponent=g,e.StrictMode=a,e.Suspense=c,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:R,ReactCurrentOwner:k},e.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=v({},e.props),o=e.key,i=e.ref,l=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,l=k.current),void 0!==n.key&&(o=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in n)w.call(n,c)&&!j.hasOwnProperty(c)&&(a[c]=void 0===n[c]&&void 0!==u?u[c]:n[c])}var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){u=Array(c);for(var s=0;s<c;s++)u[s]=arguments[s+2];a.children=u}return{$$typeof:t,type:e.type,key:o,ref:i,props:a,_owner:l}},e.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},e.createElement=E,e.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:u,render:e}},e.isValidElement=S,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},e.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},e.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},e.useCallback=function(e,t){return O.current.useCallback(e,t)},e.useContext=function(e){return O.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return O.current.useDeferredValue(e)},e.useEffect=function(e,t){return O.current.useEffect(e,t)},e.useId=function(){return O.current.useId()},e.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return O.current.useMemo(e,t)},e.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},e.useRef=function(e){return O.current.useRef(e)},e.useState=function(e){return O.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return O.current.useTransition()},e.version="18.2.0"}});N({"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js"(e,t){}});var O=(a=null!=(r=N({"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"(e,t){t.exports=P()}})())?k(_(r)):{},((e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of S(t))C.call(e,n)||void 0===n||j(e,n,{get:()=>t[n],enumerable:!(r=E(t,n))||r.enumerable});return e})(r&&r.__esModule?a:j(a,"default",{value:r,enumerable:!0}),r)),R=(e,t)=>{let n=[],r=O.Children.map(e,e=>(0,O.isValidElement)(e)&&e.type===t?(n.push(e),null):e),a=n.length>=0?n:void 0;return[r,a]},M=n(162),B=n(7437),I=(0,u.Gp)((e,t)=>{let{children:n,...r}=e,a=function(e){var t;let[n,r]=(0,u.oe)(e,d.variantKeys),{ref:a,as:o,parentRef:i,height:l="4rem",shouldHideOnScroll:c=!1,disableScrollHandler:s=!1,onScrollPositionChange:y,isMenuOpen:g,isMenuDefaultOpen:w,onMenuOpenChange:k=()=>{},motionProps:j,className:E,classNames:S,..._}=n,C=(0,f.gy)(a),N=(0,m.useRef)(0),P=(0,m.useRef)(0),[O,R]=(0,m.useState)(!1),M=(0,m.useCallback)(e=>{k(e||!1)},[k]),[B,I]=(0,x.zk)(g,w,M),L=()=>{if(C.current){let e=C.current.offsetWidth;e!==N.current&&(N.current=e)}};(0,h.yU)({ref:C,onResize:()=>{var e;let t=null==(e=C.current)?void 0:e.offsetWidth;t!==N.current&&(L(),I(!1))}}),(0,m.useEffect)(()=>{var e;L(),P.current=(null==(e=C.current)?void 0:e.offsetHeight)||0},[]);let T=(0,m.useMemo)(()=>d({...r,hideOnScroll:c}),[...Object.values(r),c]),W=(0,p.W)(null==S?void 0:S.base,E);return b({elementRef:i,isEnabled:c||!s,callback:({prevPos:e,currPos:t})=>{null==y||y(t.y),c&&R(n=>{let r=t.y>e.y&&t.y>P.current;return r!==n?r:n})}}),{Component:o||"nav",slots:T,domRef:C,height:l,isHidden:O,disableAnimation:null!=(t=e.disableAnimation)&&t,shouldHideOnScroll:c,isMenuOpen:B,classNames:S,setIsMenuOpen:I,motionProps:j,getBaseProps:(e={})=>({...(0,h.dG)(_,e),"data-hidden":(0,v.PB)(O),"data-menu-open":(0,v.PB)(B),ref:C,className:T.base({class:(0,p.W)(W,null==e?void 0:e.className)}),style:{"--navbar-height":l,...null==e?void 0:e.style}}),getWrapperProps:(e={})=>({...e,"data-menu-open":(0,v.PB)(B),className:T.wrapper({class:(0,p.W)(null==S?void 0:S.wrapper,null==e?void 0:e.className)})})}}({...r,ref:t}),i=a.Component,[c,s]=R(n,o.$),y=(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("header",{...a.getWrapperProps(),children:c}),s]});return(0,B.jsx)(w.V,{value:a,children:a.shouldHideOnScroll?(0,B.jsx)(M.E.nav,{animate:a.isHidden?"hidden":"visible",initial:!1,variants:l,...(0,h.dG)(a.getBaseProps(),a.motionProps),children:y}):(0,B.jsx)(i,{...a.getBaseProps(),children:y})})});I.displayName="NextUI.Navbar";var L=I},811:function(e,t,n){"use strict";n.d(t,{h:function(){return s}});var r=n(3519),a=n(4480),o=n(5312),i=n(9762),l=n(8794),u=n(7437),c=(0,a.Gp)((e,t)=>{var n;let{className:a,children:c,...s}=e,d=(0,o.gy)(t),{slots:f,isMenuOpen:p,classNames:v}=(0,r.q)(),m=(0,i.W)(null==v?void 0:v.menuItem,a);return(0,u.jsx)("li",{ref:d,className:null==(n=f.menuItem)?void 0:n.call(f,{class:m}),"data-open":(0,l.PB)(p),...s,children:c})});c.displayName="NextUI.NavbarMenuItem";var s=c},1555:function(e,t,n){"use strict";n.d(t,{H:function(){return c}});var r=n(3519),a=n(4480),o=n(5312),i=n(9762),l=n(7437),u=(0,a.Gp)((e,t)=>{var n;let{as:a,className:u,children:c,...s}=e,d=a||"div",f=(0,o.gy)(t),{slots:p,classNames:v}=(0,r.q)(),m=(0,i.W)(null==v?void 0:v.brand,u);return(0,l.jsx)(d,{ref:f,className:null==(n=p.brand)?void 0:n.call(p,{class:m}),...s,children:c})});u.displayName="NextUI.NavbarBrand";var c=u},5576:function(e,t,n){"use strict";n.d(t,{w:function(){return i}});var r=n(626),a=n(6125),o=n(7437),i=({children:e,locale:t="en"})=>(0,o.jsx)(r.bd,{locale:t,children:(0,o.jsx)(a.N3,{children:e})})},6125:function(e,t,n){"use strict";n.d(t,{N3:function(){return s},aV:function(){return f}});var r=n(2265),a=n(6565),o=n(4887),i=n(4256);"undefined"!=typeof document&&window.visualViewport,new WeakMap,"undefined"!=typeof document&&window.visualViewport,"undefined"!=typeof document&&window.visualViewport;let l=r.createContext(null);function u(e){let{children:t}=e,n=(0,r.useContext)(l),[a,o]=(0,r.useState)(0),i=(0,r.useMemo)(()=>({parent:n,modalCount:a,addModal(){o(e=>e+1),n&&n.addModal()},removeModal(){o(e=>e-1),n&&n.removeModal()}}),[n,a]);return r.createElement(l.Provider,{value:i},t)}function c(e){let t;let{modalProviderProps:n}={modalProviderProps:{"aria-hidden":!!(t=(0,r.useContext)(l))&&t.modalCount>0||null}};return r.createElement("div",{"data-overlay-container":!0,...e,...n})}function s(e){return r.createElement(u,null,r.createElement(c,e))}new WeakMap;let d=r.createContext(null);function f(e){let t,n=(0,i.Av)(),{portalContainer:l=n?null:document.body,isExiting:u}=e,[c,s]=(0,r.useState)(!1),f=(0,r.useMemo)(()=>({contain:c,setContain:s}),[c,s]);return l?(t=e.disableFocusManagement?r.createElement(d.Provider,{value:f},e.children):r.createElement(d.Provider,{value:f},r.createElement(a.MT,{restoreFocus:!0,contain:c&&!u},e.children)),o.createPortal(t,l)):null}}}]);