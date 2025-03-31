import{n as d,S as I,s as A,c as H,t as z}from"./property.BN7dYdg1.js";import{d as w,_ as o,e as y,r as E,j as x,k as C,f as $,L as P,n as g,o as f,p as b,q as _,g as m,m as h,s as q,l as F}from"./chunk.AJ3ENQ5C.vwbyVPfY.js";import{S as O}from"./chunk.G6R7BW5E.BTu0RqBA.js";import{H as T}from"./chunk.AYM4DUFB.CHUL3aI4.js";import{i as v,x as i,r as j}from"./lit-element.B42_yqfG.js";import{n as D,o as L}from"./select-avatar.6PFAMze-.js";import{p as M}from"./context.CbUYBB3E.js";import"./static.C8OjZKDB.js";import"./if-defined.P92z7vbU.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";var N=v`
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
`,n=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),t=class extends ${constructor(){super(...arguments),this.hasSlotController=new T(this,"icon","suffix"),this.localize=new P(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,r="100%",s="0";this.countdownAnimation=e.animate([{width:r},{width:s}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await g(this.base),this.base.hidden=!1;const{keyframes:e,options:r}=f(this,"alert.show",{dir:this.localize.dir()});await b(this.base,e,r),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await g(this.base);const{keyframes:e,options:r}=f(this,"alert.hide",{dir:this.localize.dir()});await b(this.base,e,r),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,_(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,_(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),n.parentElement===null&&document.body.append(n),n.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{n.removeChild(this),e(),n.querySelector("sl-alert")===null&&n.remove()},{once:!0})})}render(){return i`
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

        ${this.closable?i`
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

        ${this.countdown?i`
              <div
                class=${m({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};t.styles=[w,N];t.dependencies={"sl-icon-button":O};o([y('[part~="base"]')],t.prototype,"base",2);o([y(".alert__countdown-elapsed")],t.prototype,"countdownElement",2);o([d({type:Boolean,reflect:!0})],t.prototype,"open",2);o([d({type:Boolean,reflect:!0})],t.prototype,"closable",2);o([d({reflect:!0})],t.prototype,"variant",2);o([d({type:Number})],t.prototype,"duration",2);o([d({type:String,reflect:!0})],t.prototype,"countdown",2);o([E()],t.prototype,"remainingTime",2);o([x("open",{waitUntilFirstUpdate:!0})],t.prototype,"handleOpenChange",1);o([x("duration")],t.prototype,"handleDurationChange",1);C("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});C("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});t.define("sl-alert");var B=v`
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
`,k=class extends ${constructor(){super(...arguments),this.hasSlotController=new T(this,"footer","header","image")}render(){return i`
      <div
        part="base"
        class=${m({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};k.styles=[w,B];k.define("sl-card");var U=Object.defineProperty,W=Object.getOwnPropertyDescriptor,S=(e,r,s,l)=>{for(var a=l>1?void 0:l?W(r,s):r,c=e.length-1,p;c>=0;c--)(p=e[c])&&(a=(l?p(r,s,a):p(a))||a);return l&&a&&U(r,s,a),a};let u=class extends I(j){async createProfile(e){const r=e.name;delete e.name;const s=e.avatar;delete e.avatar;const l={fields:e,name:r,avatar:s},a=this.shadowRoot.querySelector("sl-button");a.loading=!0;try{await this.store.client.createProfile(l),this.dispatchEvent(new CustomEvent("profile-created",{detail:{profile:l},bubbles:!0,composed:!0}))}catch(c){console.error(c),D(h("Error creating the profile."))}a.loading=!1}avatarMode(){return this.store.config.avatarMode==="avatar-required"||this.store.config.avatarMode==="avatar-optional"}renderField(e){return i`
			<sl-input
				name="${e.name}"
				.required=${e.required}
				.label=${e.label}
			></sl-input>
		`}renderForm(){return i`
			<form
				id="profile-form"
				class="column"
				style="gap: 16px; flex: 1"
				${L(e=>this.createProfile(e))}
			>
				<div class="row" style="justify-content: center; gap: 16px">
					${this.avatarMode()?i` <select-avatar
								name="avatar"
								.required=${this.store.config.avatarMode==="avatar-required"}
							></select-avatar>`:i``}

					<sl-input
						name="name"
						.label=${h("Name")}
						required
						minLength="${this.store.config.minNicknameLength}"
						.helpText=${h(q`Min. ${this.store.config.minNicknameLength} characters`)}
						style="flex: 1;"
					></sl-input>
				</div>

				${this.store.config.additionalFields.map(e=>this.renderField(e))}

				<sl-button variant="primary" type="submit"
					>${h("Create Profile")}
				</sl-button>
			</form>
		`}render(){return i`
			<sl-card>
				<div class="column" style="flex: 1">
					<span
						class="title"
						style="margin-bottom: 16px; align-self: flex-start"
						>${h("Create Profile")}</span
					>
					${this.renderForm()}
				</div></sl-card
			>
		`}};u.styles=[v`
			:host {
				display: flex;
			}
		`,...A];S([H({context:M,subscribe:!0}),d()],u.prototype,"store",2);u=S([F(),z("create-profile")],u);export{u as CreateProfile};
