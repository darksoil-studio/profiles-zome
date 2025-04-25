import{i as k,x,M as I,f as P,r as S,e as B}from"./lit-element.BYH7MJbe.js";import{f as R,_ as A,g as E,h as C,e as w,r as O,l as q,a as U}from"./chunk.AJ3ENQ5C.CWahIKAi.js";import{n as f,t as D}from"./property.DW58LSP5.js";import"./display-error.euNRL-7Q.js";import{a as F}from"./style-map.DTEisfmL.js";var G=k`
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
        class=${C({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};_.styles=[R,G];A([f()],_.prototype,"effect",2);_.define("sl-skeleton");let b=[0],g=0;function N(e){e[0]===132&&e[1]===32&&e[2]===36?b=e.slice(3):b=e||[],g=0}function a(){return(()=>{const t=b[g];return g=(g+1)%b.length,t})()/256}function H(e){const t=Math.floor(a()*360),o=a()*60+40,r=e||(a()*100+(a()+a()+a()+a())*25)/2;return{h:t,s:o,l:r}}function M({h:e,s:t,l:o}){return`hsl(${e}, ${t}%, ${o}%)`}function J(e,t,o){const r=a()*2*Math.PI,s=t*Math.cos(r),i=t*Math.sin(r),d=o.x+s,n=o.x+i,l=r+2*Math.PI*.3,p=t*Math.cos(l),y=t*Math.sin(l),u=o.x+p,m=o.x+y,v=l+2*Math.PI*.3,T=t*Math.cos(v),$=t*Math.sin(v),z=o.x+T,j=o.x+$;e.beginPath(),e.moveTo(d,n),e.lineTo(u,m),e.lineTo(z,j),e.fill()}function K(e){const t=e.hash||[0];return N(t),{backgroundColor:e.backgroundColor||M(H()),hash:t,size:e.size||32}}function L(e,t){if(e.hash&&!(e.hash instanceof Uint8Array))throw new Error("invalid type for opts.hash, expecting Uint8Array or null");e=K(e||{});const{size:o,backgroundColor:r}=e;t.width=t.height=o;const s=t.getContext("2d");if(!s)return;s.fillStyle=r,s.fillRect(0,0,t.width,t.height);const i=a()<.5?3:4,d=Array.apply(null,Array(i)).map((n,l)=>{const p=l===0?5+a()*25:l===1?70+a()*25:null;return{x:a()*o,y:a()*o,radius:5+a()*o*.25,type:Math.floor(a()*3),color:M(H(p))}}).sort((n,l)=>n.radius>l.radius?-1:1);for(let n=0;n<i;n++){const l=d[n],{x:p,y,radius:u,type:m,color:v}=l;switch(s.fillStyle=v,m){case 0:s.beginPath(),s.arc(p,y,u,0,2*Math.PI),s.fill();break;case 1:s.fillRect(p,y,u*2,u*2);break;case 2:J(s,u*2,{x:p,y});break;default:throw new Error("shape is greater than 2, this should never happen")}}return t}var c=function(e,t,o,r){var s=arguments.length,i=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,o):r,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(d=e[n])&&(i=(s<3?d(i):s>3?d(t,o,i):d(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i};const Q=new I(e=>new P(t=>{const o=document.createElement("canvas");return L({hash:e,size:t},o),o}));let h=class extends S{constructor(){super(...arguments),this.size=32,this.shape="circle",this.disableTooltip=!1,this.disableCopy=!1,this.justCopiedHash=!1}async copyHash(){this.disableCopy||(await navigator.clipboard.writeText(this.strHash),this.timeout&&clearTimeout(this.timeout),this.justCopiedHash=!0,this._tooltip.show(),this.timeout=setTimeout(()=>{this._tooltip.hide(),setTimeout(()=>{this.justCopiedHash=!1},100)},2e3))}get strHash(){return B(this.hash)}updated(t){var o,r;if(super.updated(t),t.has("hash")&&t.get("hash")!==void 0&&((o=t.get("hash"))==null?void 0:o.toString())!==((r=this.hash)==null?void 0:r.toString())||t.has("size")){const s=t.get("hash")!==void 0?t.get("hash"):this.hash,i=Q.get(s).get(this.size);this._canvas.width=i.width,this._canvas.height=i.height,this._canvas.getContext("2d").drawImage(i,0,0)}}renderCanvas(){return x` <canvas
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
        .content=${this.justCopiedHash?U("Copied!"):`${this.strHash.substring(0,6)}...`}
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
    `}};c([f(F("hash"))],h.prototype,"hash",void 0);c([f({type:Number})],h.prototype,"size",void 0);c([f({type:String})],h.prototype,"shape",void 0);c([f({type:Boolean,attribute:"disable-tooltip"})],h.prototype,"disableTooltip",void 0);c([f({type:Boolean,attribute:"disable-copy"})],h.prototype,"disableCopy",void 0);c([w("#canvas")],h.prototype,"_canvas",void 0);c([w("#tooltip")],h.prototype,"_tooltip",void 0);c([O()],h.prototype,"justCopiedHash",void 0);h=c([q(),D("holo-identicon")],h);
