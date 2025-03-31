import{i as k,x,r as P,e as S}from"./lit-element.B42_yqfG.js";import{d as I,_ as B,f as R,g as C,e as w,r as A,l as O,m as q}from"./chunk.AJ3ENQ5C.vwbyVPfY.js";import{n as f,t as E}from"./property.BN7dYdg1.js";import"./display-error.BW76oNwW.js";import{h as U}from"./style-map.HzHOOz7V.js";var D=k`
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
`,_=class extends R{constructor(){super(...arguments),this.effect="none"}render(){return x`
      <div
        part="base"
        class=${C({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};_.styles=[I,D];B([f()],_.prototype,"effect",2);_.define("sl-skeleton");let m=[0],v=0;function F(e){e[0]===132&&e[1]===32&&e[2]===36?m=e.slice(3):m=e||[],v=0}function r(){return(()=>{const t=m[v];return v=(v+1)%m.length,t})()/256}function H(e){const t=Math.floor(r()*360),o=r()*60+40,i=e||(r()*100+(r()+r()+r()+r())*25)/2;return{h:t,s:o,l:i}}function T({h:e,s:t,l:o}){return`hsl(${e}, ${t}%, ${o}%)`}function G(e,t,o){const i=r()*2*Math.PI,s=t*Math.cos(i),a=t*Math.sin(i),d=o.x+s,n=o.x+a,l=i+2*Math.PI*.3,p=t*Math.cos(l),y=t*Math.sin(l),u=o.x+p,g=o.x+y,b=l+2*Math.PI*.3,$=t*Math.cos(b),M=t*Math.sin(b),z=o.x+$,j=o.x+M;e.beginPath(),e.moveTo(d,n),e.lineTo(u,g),e.lineTo(z,j),e.fill()}function N(e){const t=e.hash||[0];return F(t),{backgroundColor:e.backgroundColor||T(H()),hash:t,size:e.size||32}}function J(e,t){if(e.hash&&!(e.hash instanceof Uint8Array))throw new Error("invalid type for opts.hash, expecting Uint8Array or null");e=N(e||{});const{size:o,backgroundColor:i}=e;t.width=t.height=o;const s=t.getContext("2d");if(!s)return;s.fillStyle=i,s.fillRect(0,0,t.width,t.height);const a=r()<.5?3:4,d=Array.apply(null,Array(a)).map((n,l)=>{const p=l===0?5+r()*25:l===1?70+r()*25:null;return{x:r()*o,y:r()*o,radius:5+r()*o*.25,type:Math.floor(r()*3),color:T(H(p))}}).sort((n,l)=>n.radius>l.radius?-1:1);for(let n=0;n<a;n++){const l=d[n],{x:p,y,radius:u,type:g,color:b}=l;switch(s.fillStyle=b,g){case 0:s.beginPath(),s.arc(p,y,u,0,2*Math.PI),s.fill();break;case 1:s.fillRect(p,y,u*2,u*2);break;case 2:G(s,u*2,{x:p,y});break;default:throw new Error("shape is greater than 2, this should never happen")}}return t}var c=function(e,t,o,i){var s=arguments.length,a=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(d=e[n])&&(a=(s<3?d(a):s>3?d(t,o,a):d(t,o))||a);return s>3&&a&&Object.defineProperty(t,o,a),a};let h=class extends P{constructor(){super(...arguments),this.size=32,this.shape="circle",this.disableTooltip=!1,this.disableCopy=!1,this.justCopiedHash=!1}async copyHash(){this.disableCopy||(await navigator.clipboard.writeText(this.strHash),this.timeout&&clearTimeout(this.timeout),this.justCopiedHash=!0,this._tooltip.show(),this.timeout=setTimeout(()=>{this._tooltip.hide(),setTimeout(()=>{this.justCopiedHash=!1},100)},2e3))}get strHash(){return S(this.hash)}updated(t){var o,i;super.updated(t),(t.has("hash")&&((o=t.get("hash"))==null?void 0:o.toString())!==((i=this.hash)==null?void 0:i.toString())||t.has("size")||t.has("value"))&&J({hash:this.hash,size:this.size},this._canvas)}renderCanvas(){return x` <canvas
      id="canvas"
      width="1"
      height="1"
      class=${C({square:this.shape==="square",circle:this.shape==="circle"})}
    ></canvas>`}render(){return x`<div
      @click=${()=>this.copyHash()}
      style="${this.disableCopy?"":"cursor: pointer;"} flex-grow: 0"
    >
      <sl-tooltip
        id="tooltip"
        placement="top"
        .content=${this.justCopiedHash?q("Copied!"):`${this.strHash.substring(0,6)}...`}
        .trigger=${this.disableTooltip||this.justCopiedHash?"manual":"hover focus"}
        hoist
      >
        ${this.renderCanvas()}
      </sl-tooltip>
    </div>`}static get styles(){return k`
      :host {
        display: flex;
      }

      .square {
        border-radius: 0%;
      }
      .circle {
        border-radius: 50%;
      }
    `}};c([f(U("hash"))],h.prototype,"hash",void 0);c([f({type:Number})],h.prototype,"size",void 0);c([f({type:String})],h.prototype,"shape",void 0);c([f({type:Boolean,attribute:"disable-tooltip"})],h.prototype,"disableTooltip",void 0);c([f({type:Boolean,attribute:"disable-copy"})],h.prototype,"disableCopy",void 0);c([w("#canvas")],h.prototype,"_canvas",void 0);c([w("#tooltip")],h.prototype,"_tooltip",void 0);c([A()],h.prototype,"justCopiedHash",void 0);h=c([O(),E("holo-identicon")],h);
