import{i as At,x as Y,r as ee}from"./lit-element.Boh-YGZU.js";import{n as b,t as oe}from"./context.CPoyaPMH.js";import{d as Ht,_ as y,e as rt,f as jt,L as It,y as ie,z as ne,g as bt,n as Ct,o as Yt,A as $t,p as Lt,q as Dt,u as _t,v as Bt,s as se,w as re,k as ae}from"./routes.CkF5Gd-V.js";var le=At`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,ce=At`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const X=Math.min,S=Math.max,ht=Math.round,ct=Math.floor,q=t=>({x:t,y:t}),pe={left:"right",right:"left",bottom:"top",top:"bottom"},he={start:"end",end:"start"};function vt(t,e,o){return S(t,X(e,o))}function ot(t,e){return typeof t=="function"?t(e):t}function U(t){return t.split("-")[0]}function it(t){return t.split("-")[1]}function Xt(t){return t==="x"?"y":"x"}function Ot(t){return t==="y"?"height":"width"}function G(t){return["top","bottom"].includes(U(t))?"y":"x"}function St(t){return Xt(G(t))}function fe(t,e,o){o===void 0&&(o=!1);const i=it(t),n=St(t),r=Ot(n);let s=n==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=ft(s)),[s,ft(s)]}function de(t){const e=ft(t);return[xt(t),e,xt(e)]}function xt(t){return t.replace(/start|end/g,e=>he[e])}function ue(t,e,o){const i=["left","right"],n=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?n:i:e?i:n;case"left":case"right":return e?r:s;default:return[]}}function ge(t,e,o,i){const n=it(t);let r=ue(U(t),o==="start",i);return n&&(r=r.map(s=>s+"-"+n),e&&(r=r.concat(r.map(xt)))),r}function ft(t){return t.replace(/left|right|bottom|top/g,e=>pe[e])}function me(t){return{top:0,right:0,bottom:0,left:0,...t}}function qt(t){return typeof t!="number"?me(t):{top:t,right:t,bottom:t,left:t}}function dt(t){const{x:e,y:o,width:i,height:n}=t;return{width:i,height:n,top:o,left:e,right:e+i,bottom:o+n,x:e,y:o}}function Ft(t,e,o){let{reference:i,floating:n}=t;const r=G(e),s=St(e),a=Ot(s),c=U(e),l=r==="y",p=i.x+i.width/2-n.width/2,f=i.y+i.height/2-n.height/2,u=i[a]/2-n[a]/2;let h;switch(c){case"top":h={x:p,y:i.y-n.height};break;case"bottom":h={x:p,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:f};break;case"left":h={x:i.x-n.width,y:f};break;default:h={x:i.x,y:i.y}}switch(it(e)){case"start":h[s]-=u*(o&&l?-1:1);break;case"end":h[s]+=u*(o&&l?-1:1);break}return h}const ye=async(t,e,o)=>{const{placement:i="bottom",strategy:n="absolute",middleware:r=[],platform:s}=o,a=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let l=await s.getElementRects({reference:t,floating:e,strategy:n}),{x:p,y:f}=Ft(l,i,c),u=i,h={},d=0;for(let g=0;g<a.length;g++){const{name:w,fn:m}=a[g],{x:v,y:x,data:A,reset:E}=await m({x:p,y:f,initialPlacement:i,placement:u,strategy:n,middlewareData:h,rects:l,platform:s,elements:{reference:t,floating:e}});p=v??p,f=x??f,h={...h,[w]:{...h[w],...A}},E&&d<=50&&(d++,typeof E=="object"&&(E.placement&&(u=E.placement),E.rects&&(l=E.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:n}):E.rects),{x:p,y:f}=Ft(l,u,c)),g=-1)}return{x:p,y:f,placement:u,strategy:n,middlewareData:h}};async function Rt(t,e){var o;e===void 0&&(e={});const{x:i,y:n,platform:r,rects:s,elements:a,strategy:c}=t,{boundary:l="clippingAncestors",rootBoundary:p="viewport",elementContext:f="floating",altBoundary:u=!1,padding:h=0}=ot(e,t),d=qt(h),w=a[u?f==="floating"?"reference":"floating":f],m=dt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(w)))==null||o?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:l,rootBoundary:p,strategy:c})),v=f==="floating"?{x:i,y:n,width:s.floating.width,height:s.floating.height}:s.reference,x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),A=await(r.isElement==null?void 0:r.isElement(x))?await(r.getScale==null?void 0:r.getScale(x))||{x:1,y:1}:{x:1,y:1},E=dt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:x,strategy:c}):v);return{top:(m.top-E.top+d.top)/A.y,bottom:(E.bottom-m.bottom+d.bottom)/A.y,left:(m.left-E.left+d.left)/A.x,right:(E.right-m.right+d.right)/A.x}}const we=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:n,rects:r,platform:s,elements:a,middlewareData:c}=e,{element:l,padding:p=0}=ot(t,e)||{};if(l==null)return{};const f=qt(p),u={x:o,y:i},h=St(n),d=Ot(h),g=await s.getDimensions(l),w=h==="y",m=w?"top":"left",v=w?"bottom":"right",x=w?"clientHeight":"clientWidth",A=r.reference[d]+r.reference[h]-u[h]-r.floating[d],E=u[h]-r.reference[h],z=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let T=z?z[x]:0;(!T||!await(s.isElement==null?void 0:s.isElement(z)))&&(T=a.floating[x]||r.floating[d]);const W=A/2-E/2,D=T/2-g[d]/2-1,k=X(f[m],D),V=X(f[v],D),_=k,H=T-g[d]-V,O=T/2-g[d]/2+W,Z=vt(_,O,H),M=!c.arrow&&it(n)!=null&&O!==Z&&r.reference[d]/2-(O<_?k:V)-g[d]/2<0,B=M?O<_?O-_:O-H:0;return{[h]:u[h]+B,data:{[h]:Z,centerOffset:O-Z-B,...M&&{alignmentOffset:B}},reset:M}}}),be=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:n,middlewareData:r,rects:s,initialPlacement:a,platform:c,elements:l}=e,{mainAxis:p=!0,crossAxis:f=!0,fallbackPlacements:u,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:g=!0,...w}=ot(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const m=U(n),v=G(a),x=U(a)===a,A=await(c.isRTL==null?void 0:c.isRTL(l.floating)),E=u||(x||!g?[ft(a)]:de(a)),z=d!=="none";!u&&z&&E.push(...ge(a,g,d,A));const T=[a,...E],W=await Rt(e,w),D=[];let k=((i=r.flip)==null?void 0:i.overflows)||[];if(p&&D.push(W[m]),f){const O=fe(n,s,A);D.push(W[O[0]],W[O[1]])}if(k=[...k,{placement:n,overflows:D}],!D.every(O=>O<=0)){var V,_;const O=(((V=r.flip)==null?void 0:V.index)||0)+1,Z=T[O];if(Z)return{data:{index:O,overflows:k},reset:{placement:Z}};let M=(_=k.filter(B=>B.overflows[0]<=0).sort((B,j)=>B.overflows[1]-j.overflows[1])[0])==null?void 0:_.placement;if(!M)switch(h){case"bestFit":{var H;const B=(H=k.filter(j=>{if(z){const I=G(j.placement);return I===v||I==="y"}return!0}).map(j=>[j.placement,j.overflows.filter(I=>I>0).reduce((I,te)=>I+te,0)]).sort((j,I)=>j[1]-I[1])[0])==null?void 0:H[0];B&&(M=B);break}case"initialPlacement":M=a;break}if(n!==M)return{reset:{placement:M}}}return{}}}};async function ve(t,e){const{placement:o,platform:i,elements:n}=t,r=await(i.isRTL==null?void 0:i.isRTL(n.floating)),s=U(o),a=it(o),c=G(o)==="y",l=["left","top"].includes(s)?-1:1,p=r&&c?-1:1,f=ot(e,t);let{mainAxis:u,crossAxis:h,alignmentAxis:d}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return a&&typeof d=="number"&&(h=a==="end"?d*-1:d),c?{x:h*p,y:u*l}:{x:u*l,y:h*p}}const xe=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:n,y:r,placement:s,middlewareData:a}=e,c=await ve(e,t);return s===((o=a.offset)==null?void 0:o.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:n+c.x,y:r+c.y,data:{...c,placement:s}}}}},Pe=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:n}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:w=>{let{x:m,y:v}=w;return{x:m,y:v}}},...c}=ot(t,e),l={x:o,y:i},p=await Rt(e,c),f=G(U(n)),u=Xt(f);let h=l[u],d=l[f];if(r){const w=u==="y"?"top":"left",m=u==="y"?"bottom":"right",v=h+p[w],x=h-p[m];h=vt(v,h,x)}if(s){const w=f==="y"?"top":"left",m=f==="y"?"bottom":"right",v=d+p[w],x=d-p[m];d=vt(v,d,x)}const g=a.fn({...e,[u]:h,[f]:d});return{...g,data:{x:g.x-o,y:g.y-i,enabled:{[u]:r,[f]:s}}}}}},Ee=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,i;const{placement:n,rects:r,platform:s,elements:a}=e,{apply:c=()=>{},...l}=ot(t,e),p=await Rt(e,l),f=U(n),u=it(n),h=G(n)==="y",{width:d,height:g}=r.floating;let w,m;f==="top"||f==="bottom"?(w=f,m=u===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(m=f,w=u==="end"?"top":"bottom");const v=g-p.top-p.bottom,x=d-p.left-p.right,A=X(g-p[w],v),E=X(d-p[m],x),z=!e.middlewareData.shift;let T=A,W=E;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(W=x),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(T=v),z&&!u){const k=S(p.left,0),V=S(p.right,0),_=S(p.top,0),H=S(p.bottom,0);h?W=d-2*(k!==0||V!==0?k+V:S(p.left,p.right)):T=g-2*(_!==0||H!==0?_+H:S(p.top,p.bottom))}await c({...e,availableWidth:W,availableHeight:T});const D=await s.getDimensions(a.floating);return d!==D.width||g!==D.height?{reset:{rects:!0}}:{}}}};function ut(){return typeof window<"u"}function nt(t){return Ut(t)?(t.nodeName||"").toLowerCase():"#document"}function R(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function N(t){var e;return(e=(Ut(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ut(t){return ut()?t instanceof Node||t instanceof R(t).Node:!1}function $(t){return ut()?t instanceof Element||t instanceof R(t).Element:!1}function F(t){return ut()?t instanceof HTMLElement||t instanceof R(t).HTMLElement:!1}function Nt(t){return!ut()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof R(t).ShadowRoot}function at(t){const{overflow:e,overflowX:o,overflowY:i,display:n}=L(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(n)}function Ae(t){return["table","td","th"].includes(nt(t))}function gt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function zt(t){const e=Tt(),o=$(t)?L(t):t;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function Ce(t){let e=K(t);for(;F(e)&&!et(e);){if(zt(e))return e;if(gt(e))return null;e=K(e)}return null}function Tt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function et(t){return["html","body","#document"].includes(nt(t))}function L(t){return R(t).getComputedStyle(t)}function mt(t){return $(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function K(t){if(nt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Nt(t)&&t.host||N(t);return Nt(e)?e.host:e}function Kt(t){const e=K(t);return et(e)?t.ownerDocument?t.ownerDocument.body:t.body:F(e)&&at(e)?e:Kt(e)}function st(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);const n=Kt(t),r=n===((i=t.ownerDocument)==null?void 0:i.body),s=R(n);if(r){const a=Pt(s);return e.concat(s,s.visualViewport||[],at(n)?n:[],a&&o?st(a):[])}return e.concat(n,st(n,[],o))}function Pt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Gt(t){const e=L(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const n=F(t),r=n?t.offsetWidth:o,s=n?t.offsetHeight:i,a=ht(o)!==r||ht(i)!==s;return a&&(o=r,i=s),{width:o,height:i,$:a}}function kt(t){return $(t)?t:t.contextElement}function tt(t){const e=kt(t);if(!F(e))return q(1);const o=e.getBoundingClientRect(),{width:i,height:n,$:r}=Gt(e);let s=(r?ht(o.width):o.width)/i,a=(r?ht(o.height):o.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const Oe=q(0);function Jt(t){const e=R(t);return!Tt()||!e.visualViewport?Oe:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Se(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==R(t)?!1:e}function J(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);const n=t.getBoundingClientRect(),r=kt(t);let s=q(1);e&&(i?$(i)&&(s=tt(i)):s=tt(t));const a=Se(r,o,i)?Jt(r):q(0);let c=(n.left+a.x)/s.x,l=(n.top+a.y)/s.y,p=n.width/s.x,f=n.height/s.y;if(r){const u=R(r),h=i&&$(i)?R(i):i;let d=u,g=Pt(d);for(;g&&i&&h!==d;){const w=tt(g),m=g.getBoundingClientRect(),v=L(g),x=m.left+(g.clientLeft+parseFloat(v.paddingLeft))*w.x,A=m.top+(g.clientTop+parseFloat(v.paddingTop))*w.y;c*=w.x,l*=w.y,p*=w.x,f*=w.y,c+=x,l+=A,d=R(g),g=Pt(d)}}return dt({width:p,height:f,x:c,y:l})}function Re(t){let{elements:e,rect:o,offsetParent:i,strategy:n}=t;const r=n==="fixed",s=N(i),a=e?gt(e.floating):!1;if(i===s||a&&r)return o;let c={scrollLeft:0,scrollTop:0},l=q(1);const p=q(0),f=F(i);if((f||!f&&!r)&&((nt(i)!=="body"||at(s))&&(c=mt(i)),F(i))){const u=J(i);l=tt(i),p.x=u.x+i.clientLeft,p.y=u.y+i.clientTop}return{width:o.width*l.x,height:o.height*l.y,x:o.x*l.x-c.scrollLeft*l.x+p.x,y:o.y*l.y-c.scrollTop*l.y+p.y}}function ze(t){return Array.from(t.getClientRects())}function Et(t,e){const o=mt(t).scrollLeft;return e?e.left+o:J(N(t)).left+o}function Te(t){const e=N(t),o=mt(t),i=t.ownerDocument.body,n=S(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=S(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let s=-o.scrollLeft+Et(t);const a=-o.scrollTop;return L(i).direction==="rtl"&&(s+=S(e.clientWidth,i.clientWidth)-n),{width:n,height:r,x:s,y:a}}function ke(t,e){const o=R(t),i=N(t),n=o.visualViewport;let r=i.clientWidth,s=i.clientHeight,a=0,c=0;if(n){r=n.width,s=n.height;const l=Tt();(!l||l&&e==="fixed")&&(a=n.offsetLeft,c=n.offsetTop)}return{width:r,height:s,x:a,y:c}}function $e(t,e){const o=J(t,!0,e==="fixed"),i=o.top+t.clientTop,n=o.left+t.clientLeft,r=F(t)?tt(t):q(1),s=t.clientWidth*r.x,a=t.clientHeight*r.y,c=n*r.x,l=i*r.y;return{width:s,height:a,x:c,y:l}}function Wt(t,e,o){let i;if(e==="viewport")i=ke(t,o);else if(e==="document")i=Te(N(t));else if($(e))i=$e(e,o);else{const n=Jt(t);i={...e,x:e.x-n.x,y:e.y-n.y}}return dt(i)}function Qt(t,e){const o=K(t);return o===e||!$(o)||et(o)?!1:L(o).position==="fixed"||Qt(o,e)}function Le(t,e){const o=e.get(t);if(o)return o;let i=st(t,[],!1).filter(a=>$(a)&&nt(a)!=="body"),n=null;const r=L(t).position==="fixed";let s=r?K(t):t;for(;$(s)&&!et(s);){const a=L(s),c=zt(s);!c&&a.position==="fixed"&&(n=null),(r?!c&&!n:!c&&a.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||at(s)&&!c&&Qt(t,s))?i=i.filter(p=>p!==s):n=a,s=K(s)}return e.set(t,i),i}function De(t){let{element:e,boundary:o,rootBoundary:i,strategy:n}=t;const s=[...o==="clippingAncestors"?gt(e)?[]:Le(e,this._c):[].concat(o),i],a=s[0],c=s.reduce((l,p)=>{const f=Wt(e,p,n);return l.top=S(f.top,l.top),l.right=X(f.right,l.right),l.bottom=X(f.bottom,l.bottom),l.left=S(f.left,l.left),l},Wt(e,a,n));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function _e(t){const{width:e,height:o}=Gt(t);return{width:e,height:o}}function Be(t,e,o){const i=F(e),n=N(e),r=o==="fixed",s=J(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const c=q(0);if(i||!i&&!r)if((nt(e)!=="body"||at(n))&&(a=mt(e)),i){const h=J(e,!0,r,e);c.x=h.x+e.clientLeft,c.y=h.y+e.clientTop}else n&&(c.x=Et(n));let l=0,p=0;if(n&&!i&&!r){const h=n.getBoundingClientRect();p=h.top+a.scrollTop,l=h.left+a.scrollLeft-Et(n,h)}const f=s.left+a.scrollLeft-c.x-l,u=s.top+a.scrollTop-c.y-p;return{x:f,y:u,width:s.width,height:s.height}}function yt(t){return L(t).position==="static"}function Mt(t,e){if(!F(t)||L(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return N(t)===o&&(o=o.ownerDocument.body),o}function Zt(t,e){const o=R(t);if(gt(t))return o;if(!F(t)){let n=K(t);for(;n&&!et(n);){if($(n)&&!yt(n))return n;n=K(n)}return o}let i=Mt(t,e);for(;i&&Ae(i)&&yt(i);)i=Mt(i,e);return i&&et(i)&&yt(i)&&!zt(i)?o:i||Ce(t)||o}const Fe=async function(t){const e=this.getOffsetParent||Zt,o=this.getDimensions,i=await o(t.floating);return{reference:Be(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Ne(t){return L(t).direction==="rtl"}const pt={convertOffsetParentRelativeRectToViewportRelativeRect:Re,getDocumentElement:N,getClippingRect:De,getOffsetParent:Zt,getElementRects:Fe,getClientRects:ze,getDimensions:_e,getScale:tt,isElement:$,isRTL:Ne};function We(t,e){let o=null,i;const n=N(t);function r(){var a;clearTimeout(i),(a=o)==null||a.disconnect(),o=null}function s(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),r();const{left:l,top:p,width:f,height:u}=t.getBoundingClientRect();if(a||e(),!f||!u)return;const h=ct(p),d=ct(n.clientWidth-(l+f)),g=ct(n.clientHeight-(p+u)),w=ct(l),v={rootMargin:-h+"px "+-d+"px "+-g+"px "+-w+"px",threshold:S(0,X(1,c))||1};let x=!0;function A(E){const z=E[0].intersectionRatio;if(z!==c){if(!x)return s();z?s(!1,z):i=setTimeout(()=>{s(!1,1e-7)},1e3)}x=!1}try{o=new IntersectionObserver(A,{...v,root:n.ownerDocument})}catch{o=new IntersectionObserver(A,v)}o.observe(t)}return s(!0),r}function Me(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:n=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,l=kt(t),p=n||r?[...l?st(l):[],...st(e)]:[];p.forEach(m=>{n&&m.addEventListener("scroll",o,{passive:!0}),r&&m.addEventListener("resize",o)});const f=l&&a?We(l,o):null;let u=-1,h=null;s&&(h=new ResizeObserver(m=>{let[v]=m;v&&v.target===l&&h&&(h.unobserve(e),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var x;(x=h)==null||x.observe(e)})),o()}),l&&!c&&h.observe(l),h.observe(e));let d,g=c?J(t):null;c&&w();function w(){const m=J(t);g&&(m.x!==g.x||m.y!==g.y||m.width!==g.width||m.height!==g.height)&&o(),g=m,d=requestAnimationFrame(w)}return o(),()=>{var m;p.forEach(v=>{n&&v.removeEventListener("scroll",o),r&&v.removeEventListener("resize",o)}),f==null||f(),(m=h)==null||m.disconnect(),h=null,c&&cancelAnimationFrame(d)}}const Ve=xe,He=Pe,je=be,Vt=Ee,Ie=we,Ye=(t,e,o)=>{const i=new Map,n={platform:pt,...o},r={...n.platform,_c:i};return ye(t,e,{...n,platform:r})};function Xe(t){return qe(t)}function wt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function qe(t){for(let e=t;e;e=wt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=wt(t);e;e=wt(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function Ue(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var P=class extends jt{constructor(){super(...arguments),this.localize=new It(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let i=0,n=0,r=0,s=0,a=0,c=0,l=0,p=0;o?t.top<e.top?(i=t.left,n=t.bottom,r=t.right,s=t.bottom,a=e.left,c=e.top,l=e.right,p=e.top):(i=e.left,n=e.bottom,r=e.right,s=e.bottom,a=t.left,c=t.top,l=t.right,p=t.top):t.left<e.left?(i=t.right,n=t.top,r=e.left,s=e.top,a=t.right,c=t.bottom,l=e.left,p=e.bottom):(i=e.right,n=e.top,r=t.left,s=t.top,a=e.right,c=e.bottom,l=t.left,p=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${p}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Ue(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=Me(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Ve({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Vt({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",n=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=n?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(je({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(He({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Vt({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Ie({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>pt.getOffsetParent(o,Xe):pt.getOffsetParent;Ye(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:ie(ne({},pt),{getOffsetParent:e})}).then(({x:o,y:i,middlewareData:n,placement:r})=>{const s=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const c=n.arrow.x,l=n.arrow.y;let p="",f="",u="",h="";if(this.arrowPlacement==="start"){const d=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",f=s?d:"",h=s?"":d}else if(this.arrowPlacement==="end"){const d=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=s?"":d,h=s?d:"",u=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",p=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(h=typeof c=="number"?`${c}px`:"",p=typeof l=="number"?`${l}px`:"");Object.assign(this.arrowEl.style,{top:p,right:f,bottom:u,left:h,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return Y`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${bt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${bt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Y`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};P.styles=[Ht,ce];y([rt(".popup")],P.prototype,"popup",2);y([rt(".popup__arrow")],P.prototype,"arrowEl",2);y([b()],P.prototype,"anchor",2);y([b({type:Boolean,reflect:!0})],P.prototype,"active",2);y([b({reflect:!0})],P.prototype,"placement",2);y([b({reflect:!0})],P.prototype,"strategy",2);y([b({type:Number})],P.prototype,"distance",2);y([b({type:Number})],P.prototype,"skidding",2);y([b({type:Boolean})],P.prototype,"arrow",2);y([b({attribute:"arrow-placement"})],P.prototype,"arrowPlacement",2);y([b({attribute:"arrow-padding",type:Number})],P.prototype,"arrowPadding",2);y([b({type:Boolean})],P.prototype,"flip",2);y([b({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],P.prototype,"flipFallbackPlacements",2);y([b({attribute:"flip-fallback-strategy"})],P.prototype,"flipFallbackStrategy",2);y([b({type:Object})],P.prototype,"flipBoundary",2);y([b({attribute:"flip-padding",type:Number})],P.prototype,"flipPadding",2);y([b({type:Boolean})],P.prototype,"shift",2);y([b({type:Object})],P.prototype,"shiftBoundary",2);y([b({attribute:"shift-padding",type:Number})],P.prototype,"shiftPadding",2);y([b({attribute:"auto-size"})],P.prototype,"autoSize",2);y([b()],P.prototype,"sync",2);y([b({type:Object})],P.prototype,"autoSizeBoundary",2);y([b({attribute:"auto-size-padding",type:Number})],P.prototype,"autoSizePadding",2);y([b({attribute:"hover-bridge",type:Boolean})],P.prototype,"hoverBridge",2);var C=class extends jt{constructor(){super(),this.localize=new It(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=$t(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=$t(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Lt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:i}=Dt(this,"tooltip.show",{dir:this.localize.dir()});await _t(this.popup.popup,o,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Lt(this.body);const{keyframes:o,options:i}=Dt(this,"tooltip.hide",{dir:this.localize.dir()});await _t(this.popup.popup,o,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Bt(this,"sl-after-hide")}render(){return Y`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${bt({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};C.styles=[Ht,le];C.dependencies={"sl-popup":P};y([rt("slot:not([name])")],C.prototype,"defaultSlot",2);y([rt(".tooltip__body")],C.prototype,"body",2);y([rt("sl-popup")],C.prototype,"popup",2);y([b()],C.prototype,"content",2);y([b()],C.prototype,"placement",2);y([b({type:Boolean,reflect:!0})],C.prototype,"disabled",2);y([b({type:Number})],C.prototype,"distance",2);y([b({type:Boolean,reflect:!0})],C.prototype,"open",2);y([b({type:Number})],C.prototype,"skidding",2);y([b()],C.prototype,"trigger",2);y([b({type:Boolean})],C.prototype,"hoist",2);y([Ct("open",{waitUntilFirstUpdate:!0})],C.prototype,"handleOpenChange",1);y([Ct(["content","distance","hoist","placement","skidding"])],C.prototype,"handleOptionsChange",1);y([Ct("disabled")],C.prototype,"handleDisabledChange",1);Yt("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Yt("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});C.define("sl-tooltip");var lt=function(t,e,o,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let Q=class extends ee{constructor(){super(...arguments),this.tooltip=!1}get _iconSize(){return this.iconSize?this.iconSize:this.tooltip!==!1?"32px":"64px"}renderIcon(){return Y`
      <sl-icon
        style="color: red; height: ${this._iconSize}; width: ${this._iconSize}; margin-bottom: 8px;"
        src="${re(ae)}"
      ></sl-icon>
    `}renderFull(){return Y` <div class="column center-content" style="flex: 1">
      ${this.renderIcon()}
      <div style="width: 500px; text-align: center" class="column">
        ${this.headline?Y` <span style="margin-bottom: 8px">${this.headline} </span>`:Y``}
        <span class="placeholder"
          >${typeof this.error=="object"&&"message"in this.error?this.error.message:this.error}
        </span>
      </div>
    </div>`}renderTooltip(){return Y`
      <sl-tooltip hoist .content=${this.headline?this.headline:this.error}>
        ${this.renderIcon()}</sl-tooltip
      >
    `}render(){return this.tooltip!==!1?this.renderTooltip():this.renderFull()}};Q.styles=[se,At`
      :host {
        display: flex;
        flex: 1;
      }
    `];lt([b({attribute:"tooltip"})],Q.prototype,"tooltip",void 0);lt([b()],Q.prototype,"headline",void 0);lt([b()],Q.prototype,"error",void 0);lt([b({attribute:"icon-size"})],Q.prototype,"iconSize",void 0);Q=lt([oe("display-error")],Q);
