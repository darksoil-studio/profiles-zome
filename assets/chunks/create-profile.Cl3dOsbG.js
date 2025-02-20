import{i as _,x as n,r as I}from"./lit-element.DEsU9Zn3.js";import{n as s,S as A,s as H,c as z,p as P,t as E}from"./context.DzK0tg0I.js";import{f as w,_ as a,e as y,r as O,j as C,s as x,g as T,L as D,k as v,n as f,o as g,p as b,h as m,m as u,l as j}from"./chunk.AJ3ENQ5C.9SmIBWW5.js";import{n as F}from"./edit-profile.DWI8hDUf.js";import{S as L}from"./chunk.G6R7BW5E.B41jhnUh.js";import{H as k}from"./chunk.AYM4DUFB.BpqAQD3r.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./static.DbTSaKL5.js";import"./if-defined.BPuz0jc1.js";var B=_`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,i=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),r=class extends T{constructor(){super(...arguments),this.hasSlotController=new k(this,"icon","suffix"),this.localize=new D(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,t="100%",l="0";this.countdownAnimation=e.animate([{width:t},{width:l}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await v(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=f(this,"alert.show",{dir:this.localize.dir()});await g(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await v(this.base);const{keyframes:e,options:t}=f(this,"alert.hide",{dir:this.localize.dir()});await g(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,b(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,b(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),i.parentElement===null&&document.body.append(i),i.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{i.removeChild(this),e(),i.querySelector("sl-alert")===null&&i.remove()},{once:!0})})}render(){return n`
      <div
        part="base"
        class=${m({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?n`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?n`
              <div
                class=${m({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};r.styles=[w,B];r.dependencies={"sl-icon-button":L};a([y('[part~="base"]')],r.prototype,"base",2);a([y(".alert__countdown-elapsed")],r.prototype,"countdownElement",2);a([s({type:Boolean,reflect:!0})],r.prototype,"open",2);a([s({type:Boolean,reflect:!0})],r.prototype,"closable",2);a([s({reflect:!0})],r.prototype,"variant",2);a([s({type:Number})],r.prototype,"duration",2);a([s({type:String,reflect:!0})],r.prototype,"countdown",2);a([O()],r.prototype,"remainingTime",2);a([C("open",{waitUntilFirstUpdate:!0})],r.prototype,"handleOpenChange",1);a([C("duration")],r.prototype,"handleDurationChange",1);x("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});x("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});r.define("sl-alert");var U=_`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,S=class extends T{constructor(){super(...arguments),this.hasSlotController=new k(this,"footer","header","image")}render(){return n`
      <div
        part="base"
        class=${m({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};S.styles=[w,U];S.define("sl-card");var q=Object.defineProperty,N=Object.getOwnPropertyDescriptor,$=(e,t,l,d)=>{for(var o=d>1?void 0:d?N(t,l):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(o=(d?p(t,l,o):p(o))||o);return d&&o&&q(t,l,o),o};let c=class extends A(I){async createProfile(e){try{await this.store.client.createProfile(e),this.dispatchEvent(new CustomEvent("profile-created",{detail:{profile:e},bubbles:!0,composed:!0}))}catch(t){console.error(t),F(u("Error creating the profile"))}}render(){return n`
      <sl-card>
        <div class="column">
          <span
            class="title"
            style="margin-bottom: 16px; align-self: flex-start"
            >${u("Create Profile")}</span
          >
          <edit-profile
            .saveProfileLabel=${u("Create Profile")}
            .store=${this.store}
            @save-profile=${e=>this.createProfile(e.detail.profile)}
          ></edit-profile></div
      ></sl-card>
    `}};c.styles=H;$([z({context:P,subscribe:!0}),s()],c.prototype,"store",2);c=$([j(),E("create-profile")],c);export{c as CreateProfile};
