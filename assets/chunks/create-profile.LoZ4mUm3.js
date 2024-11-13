import{i as _,x as d,r as I}from"./lit-element.DlPO3IHk.js";import{n,S as A,p as H,t as P}from"./context.DV-VVxul.js";import{w as z,q as E,u as O,e as w,_ as o,f as y,r as j,n as C,v as x,g as T,L as D,x as v,y as f,z as g,A as b,h as m,a as p,s as L,c as F,l as q}from"./routes.Ba3pFJcu.js";import{S as B}from"./chunk.3HB7VQL2.DYSbDUVY.js";import{H as S}from"./chunk.5KGB34TL.Cg_slLRU.js";import"./edit-profile.M1OkDEWf.js";function M(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function U(e,t="primary",i=E,s=3e3){const a=Object.assign(document.createElement("sl-alert"),{variant:t,closable:!0,duration:s,innerHTML:`
        <sl-icon src="${z(i)}" slot="icon"></sl-icon>
        ${M(e)}
      `});return document.body.append(a),a.toast()}function N(e){return U(e,"danger",O)}var W=_`
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
`,l=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),r=class extends T{constructor(){super(...arguments),this.hasSlotController=new S(this,"icon","suffix"),this.localize=new D(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,t="100%",i="0";this.countdownAnimation=e.animate([{width:t},{width:i}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await v(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=f(this,"alert.show",{dir:this.localize.dir()});await g(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await v(this.base);const{keyframes:e,options:t}=f(this,"alert.hide",{dir:this.localize.dir()});await g(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,b(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,b(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),l.parentElement===null&&document.body.append(l),l.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{l.removeChild(this),e(),l.querySelector("sl-alert")===null&&l.remove()},{once:!0})})}render(){return d`
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

        ${this.closable?d`
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

        ${this.countdown?d`
              <div
                class=${m({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};r.styles=[w,W];r.dependencies={"sl-icon-button":B};o([y('[part~="base"]')],r.prototype,"base",2);o([y(".alert__countdown-elapsed")],r.prototype,"countdownElement",2);o([n({type:Boolean,reflect:!0})],r.prototype,"open",2);o([n({type:Boolean,reflect:!0})],r.prototype,"closable",2);o([n({reflect:!0})],r.prototype,"variant",2);o([n({type:Number})],r.prototype,"duration",2);o([n({type:String,reflect:!0})],r.prototype,"countdown",2);o([j()],r.prototype,"remainingTime",2);o([C("open",{waitUntilFirstUpdate:!0})],r.prototype,"handleOpenChange",1);o([C("duration")],r.prototype,"handleDurationChange",1);x("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});x("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});r.define("sl-alert");var X=_`
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
`,k=class extends T{constructor(){super(...arguments),this.hasSlotController=new S(this,"footer","header","image")}render(){return d`
      <div
        part="base"
        class=${m({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};k.styles=[w,X];k.define("sl-card");var G=Object.defineProperty,J=Object.getOwnPropertyDescriptor,$=(e,t,i,s)=>{for(var a=s>1?void 0:s?J(t,i):t,h=e.length-1,u;h>=0;h--)(u=e[h])&&(a=(s?u(t,i,a):u(a))||a);return s&&a&&G(t,i,a),a};let c=class extends A(I){async createProfile(e){try{await this.store.client.createProfile(e),this.dispatchEvent(new CustomEvent("profile-created",{detail:{profile:e},bubbles:!0,composed:!0}))}catch(t){console.error(t),N(p("Error creating the profile"))}}render(){return d`
      <sl-card>
        <div class="column">
          <span
            class="title"
            style="margin-bottom: 16px; align-self: flex-start"
            >${p("Create Profile")}</span
          >
          <edit-profile
            .saveProfileLabel=${p("Create Profile")}
            .store=${this.store}
            @save-profile=${e=>this.createProfile(e.detail.profile)}
          ></edit-profile></div
      ></sl-card>
    `}};c.styles=L;$([F({context:H,subscribe:!0}),n()],c.prototype,"store",2);c=$([q(),P("create-profile")],c);const ee=Object.freeze(Object.defineProperty({__proto__:null,get CreateProfile(){return c}},Symbol.toStringTag,{value:"Module"}));export{N as a,ee as c,U as n};
