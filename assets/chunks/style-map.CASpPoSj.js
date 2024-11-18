import{c as C,e as k,i as $,x,r as I,T as B}from"./lit-element.DlPO3IHk.js";import{d as O,_ as R,f as E,g as T,e as j,r as q,l as U,a as F,i as D,j as G,t as L}from"./chunk.3EPZX5HE.Di75AIhZ.js";import{n as f,t as N}from"./context.DjmyCDNo.js";import"./display-error.YjPgTlrJ.js";function W(e){return{attribute:e,type:Object,hasChanged:(t,s)=>(t==null?void 0:t.toString())!==(s==null?void 0:s.toString()),converter:{fromAttribute:t=>t&&t.length>0&&C(t),toAttribute:t=>t&&k(t)},reflect:!0}}function ot(e){return{attribute:e,type:Object,hasChanged:(t,s)=>(t==null?void 0:t.toString())!==(s==null?void 0:s.toString()),converter:{fromAttribute:t=>t?t.split(",").map(C):[],toAttribute:t=>t&&t.map(k).join(",")},reflect:!0}}var Z=$`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,_=class extends E{constructor(){super(...arguments),this.effect="none"}render(){return x`
      <div
        part="base"
        class=${T({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};_.styles=[O,Z];R([f()],_.prototype,"effect",2);_.define("sl-skeleton");let m=[0],g=0;function J(e){e[0]===132&&e[1]===32&&e[2]===36?m=e.slice(3):m=e||[],g=0}function n(){return(()=>{const t=m[g];return g=(g+1)%m.length,t})()/256}function H(e){const t=Math.floor(n()*360),s=n()*60+40,o=e||(n()*100+(n()+n()+n()+n())*25)/2;return{h:t,s,l:o}}function S({h:e,s:t,l:s}){return`hsl(${e}, ${t}%, ${s}%)`}function K(e,t,s){const o=n()*2*Math.PI,r=t*Math.cos(o),i=t*Math.sin(o),u=s.x+r,a=s.x+i,l=o+2*Math.PI*.3,d=t*Math.cos(l),y=t*Math.sin(l),p=s.x+d,v=s.x+y,b=l+2*Math.PI*.3,P=t*Math.cos(b),w=t*Math.sin(b),z=s.x+P,A=s.x+w;e.beginPath(),e.moveTo(u,a),e.lineTo(p,v),e.lineTo(z,A),e.fill()}function Q(e){const t=e.hash||[0];return J(t),{backgroundColor:e.backgroundColor||S(H()),hash:t,size:e.size||32}}function X(e,t){if(e.hash&&!(e.hash instanceof Uint8Array))throw new Error("invalid type for opts.hash, expecting Uint8Array or null");e=Q(e||{});const{size:s,backgroundColor:o}=e;t.width=t.height=s;const r=t.getContext("2d");if(!r)return;r.fillStyle=o,r.fillRect(0,0,t.width,t.height);const i=n()<.5?3:4,u=Array.apply(null,Array(i)).map((a,l)=>{const d=l===0?5+n()*25:l===1?70+n()*25:null;return{x:n()*s,y:n()*s,radius:5+n()*s*.25,type:Math.floor(n()*3),color:S(H(d))}}).sort((a,l)=>a.radius>l.radius?-1:1);for(let a=0;a<i;a++){const l=u[a],{x:d,y,radius:p,type:v,color:b}=l;switch(r.fillStyle=b,v){case 0:r.beginPath(),r.arc(d,y,p,0,2*Math.PI),r.fill();break;case 1:r.fillRect(d,y,p*2,p*2);break;case 2:K(r,p*2,{x:d,y});break;default:throw new Error("shape is greater than 2, this should never happen")}}return t}var h=function(e,t,s,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,s):o,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,s,o);else for(var a=e.length-1;a>=0;a--)(u=e[a])&&(i=(r<3?u(i):r>3?u(t,s,i):u(t,s))||i);return r>3&&i&&Object.defineProperty(t,s,i),i};let c=class extends I{constructor(){super(...arguments),this.size=32,this.shape="circle",this.disableTooltip=!1,this.disableCopy=!1,this.justCopiedHash=!1}async copyHash(){this.disableCopy||(await navigator.clipboard.writeText(this.strHash),this.timeout&&clearTimeout(this.timeout),this.justCopiedHash=!0,this._tooltip.show(),this.timeout=setTimeout(()=>{this._tooltip.hide(),setTimeout(()=>{this.justCopiedHash=!1},100)},2e3))}get strHash(){return k(this.hash)}updated(t){var s,o;super.updated(t),(t.has("hash")&&((s=t.get("hash"))==null?void 0:s.toString())!==((o=this.hash)==null?void 0:o.toString())||t.has("size")||t.has("value"))&&X({hash:this.hash,size:this.size},this._canvas)}renderCanvas(){return x` <canvas
      id="canvas"
      width="1"
      height="1"
      class=${T({square:this.shape==="square",circle:this.shape==="circle"})}
    ></canvas>`}render(){return x`<div
      @click=${()=>this.copyHash()}
      style="${this.disableCopy?"":"cursor: pointer;"} flex-grow: 0"
    >
      <sl-tooltip
        id="tooltip"
        placement="top"
        .content=${this.justCopiedHash?F("Copied!"):`${this.strHash.substring(0,6)}...`}
        .trigger=${this.disableTooltip||this.justCopiedHash?"manual":"hover focus"}
        hoist
      >
        ${this.renderCanvas()}
      </sl-tooltip>
    </div>`}static get styles(){return $`
      :host {
        display: flex;
      }

      .square {
        border-radius: 0%;
      }
      .circle {
        border-radius: 50%;
      }
    `}};h([f(W("hash"))],c.prototype,"hash",void 0);h([f({type:Number})],c.prototype,"size",void 0);h([f({type:String})],c.prototype,"shape",void 0);h([f({type:Boolean,attribute:"disable-tooltip"})],c.prototype,"disableTooltip",void 0);h([f({type:Boolean,attribute:"disable-copy"})],c.prototype,"disableCopy",void 0);h([j("#canvas")],c.prototype,"_canvas",void 0);h([j("#tooltip")],c.prototype,"_tooltip",void 0);h([q()],c.prototype,"justCopiedHash",void 0);c=h([U(),N("holo-identicon")],c);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M="important",Y=" !"+M,it=D(class extends G{constructor(e){var t;if(super(e),e.type!==L.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,s)=>{const o=e[s];return o==null?t:t+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:s}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?s.removeProperty(o):s[o]=null);for(const o in t){const r=t[o];if(r!=null){this.ft.add(o);const i=typeof r=="string"&&r.endsWith(Y);o.includes("-")||i?s.setProperty(o,i?r.slice(0,-11):r,i?M:""):s[o]=r}}return B}});export{W as a,ot as h,it as o};
