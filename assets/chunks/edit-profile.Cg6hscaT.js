import{i as z,j as A,e as F,S as B,_ as i,f as _,r as k,k as P,g as D,L as E,h as I,s as $,a as h,w as L,n as V,c as M,o as H,l as T}from"./routes.BYIrb7eu.js";import{S as q,a as O,H as j,v as U,F as W}from"./chunk.5KGB34TL.CMxz4LLm.js";import{i as X,r as C,x as c}from"./lit-element.C4EVzn6y.js";import{i as x,u as g}from"./static.BbNfH_Y1.js";import{o as p}from"./if-defined.CvF0r0fY.js";import{n as e,t as S,S as R,p as N}from"./context.Cbfo6AYk.js";function y(t){return typeof t=="string"&&t.split(",").length===39?new Uint8Array(t.split(",").map(o=>parseInt(o,10))):t}function w(t){const o=new FormData(t),n={};return o.forEach((a,r)=>{if(Reflect.has(n,r)){const s=n[r];Array.isArray(s)?s.push(y(a)):n[r]=[n[r],y(a)]}else n[r]=y(a)}),n}class G extends A{constructor(){super(...arguments),this.initialized=!1}update(o,n){this.initialized||(this.initialized=!0,o.element.addEventListener("update-form",r=>{this.listener&&o.element.removeEventListener("submit",this.listener),this.listener=s=>{s.preventDefault();const d=w(o.element);n[0](d)},o.element.addEventListener("submit",this.listener)})),setTimeout(()=>{this.listener&&o.element.removeEventListener("submit",this.listener),this.listener=a=>{a.preventDefault();const r=w(o.element);n[0](r)},o.element.addEventListener("submit",this.listener)},100)}render(o){return""}}const J=z(G);var K=X`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,l=class extends D{constructor(){super(...arguments),this.formControlController=new O(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new j(this,"[default]","prefix","suffix"),this.localize=new E(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:U}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),o=t?x`a`:x`button`;return g`
      <${o}
        part="base"
        class=${I({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${p(t?void 0:this.disabled)}
        type=${p(t?void 0:this.type)}
        title=${this.title}
        name=${p(t?void 0:this.name)}
        value=${p(t?void 0:this.value)}
        href=${p(t&&!this.disabled?this.href:void 0)}
        target=${p(t?this.target:void 0)}
        download=${p(t?this.download:void 0)}
        rel=${p(t?this.rel:void 0)}
        role=${p(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?g` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?g`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${o}>
    `}};l.styles=[F,K];l.dependencies={"sl-icon":B,"sl-spinner":q};i([_(".button")],l.prototype,"button",2);i([k()],l.prototype,"hasFocus",2);i([k()],l.prototype,"invalid",2);i([e()],l.prototype,"title",2);i([e({reflect:!0})],l.prototype,"variant",2);i([e({reflect:!0})],l.prototype,"size",2);i([e({type:Boolean,reflect:!0})],l.prototype,"caret",2);i([e({type:Boolean,reflect:!0})],l.prototype,"disabled",2);i([e({type:Boolean,reflect:!0})],l.prototype,"loading",2);i([e({type:Boolean,reflect:!0})],l.prototype,"outline",2);i([e({type:Boolean,reflect:!0})],l.prototype,"pill",2);i([e({type:Boolean,reflect:!0})],l.prototype,"circle",2);i([e()],l.prototype,"type",2);i([e()],l.prototype,"name",2);i([e()],l.prototype,"value",2);i([e()],l.prototype,"href",2);i([e()],l.prototype,"target",2);i([e()],l.prototype,"rel",2);i([e()],l.prototype,"download",2);i([e()],l.prototype,"form",2);i([e({attribute:"formaction"})],l.prototype,"formAction",2);i([e({attribute:"formenctype"})],l.prototype,"formEnctype",2);i([e({attribute:"formmethod"})],l.prototype,"formMethod",2);i([e({attribute:"formnovalidate",type:Boolean})],l.prototype,"formNoValidate",2);i([e({attribute:"formtarget"})],l.prototype,"formTarget",2);i([P("disabled",{waitUntilFirstUpdate:!0})],l.prototype,"handleDisabledChange",1);l.define("sl-button");function Q(t){let a=t.width,r=t.height;a>r?a>300&&(r=r*(300/a),a=300):r>300&&(a=a*(300/r),r=300);const s=document.createElement("canvas");return s.width=a,s.height=r,s.getContext("2d").drawImage(t,0,0,a,r),s.toDataURL()}var b=function(t,o,n,a){var r=arguments.length,s=r<3?o:a===null?a=Object.getOwnPropertyDescriptor(o,n):a,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,o,n,a);else for(var f=t.length-1;f>=0;f--)(d=t[f])&&(s=(r<3?d(s):r>3?d(o,n,s):d(o,n))||s);return r>3&&s&&Object.defineProperty(o,n,s),s};let u=class extends C{constructor(){super(...arguments),this.name="avatar",this.required=!1,this.shape="circle",this.disabled=!1,this.label=h("Avatar"),this._controller=new W(this)}reportValidity(){const o=this.required!==!1&&!this.value;return o&&(this._errorInput.setCustomValidity("Avatar is required"),this._errorInput.reportValidity()),!o}reset(){this.value=this.defaultValue}onAvatarUploaded(){if(this._avatarFilePicker.files&&this._avatarFilePicker.files[0]){const o=new FileReader;o.onload=n=>{var r;const a=new Image;a.crossOrigin="anonymous",a.onload=()=>{this.value=Q(a),this._avatarFilePicker.value=""},a.src=(r=n.target)==null?void 0:r.result,this.dispatchEvent(new CustomEvent("avatar-selected",{composed:!0,bubbles:!0,detail:{avatar:a.src}}))},o.readAsDataURL(this._avatarFilePicker.files[0])}}renderAvatar(){return this.value?c`
        <div
          class="column"
          style="align-items: center; height: 50px"
          @click=${()=>{this.value=void 0}}
        >
          <sl-tooltip .content=${h("Clear")}>
            <sl-avatar
              image="${this.value}"
              alt="Avatar"
              .shape=${this.shape}
              initials=""
            ></sl-avatar
          ></sl-tooltip>
        </div>
      `:c` <div class="column" style="align-items: center;">
        <sl-button
          .disabled=${this.disabled}
          variant="default"
          size="large"
          circle
          @click=${()=>this._avatarFilePicker.click()}
        >
          <sl-icon
            src="${L(V)}"
            .label=${h("Add avatar image")}
          ></sl-icon>
        </sl-button>
      </div>`}render(){return c`<input
        type="file"
        id="avatar-file-picker"
        style="display: none"
        @change=${this.onAvatarUploaded}
      />
      <div class="column" style="position: relative; align-items: center">
        <input
          id="error-input"
          style="position: absolute; z-index: -1; left: 50%; top: 30px; height: 0; width: 0"
        />
        ${this.label!==""?c`
              <span
                style="font-size: var(--sl-input-label-font-size-medium); margin-bottom: 4px"
                >${this.label}${this.required!==!1?" *":""}</span
              >
            `:c``}
        ${this.renderAvatar()}
      </div>`}};u.styles=$;b([e({attribute:"name"})],u.prototype,"name",void 0);b([e()],u.prototype,"required",void 0);b([e()],u.prototype,"shape",void 0);b([e()],u.prototype,"value",void 0);b([e()],u.prototype,"disabled",void 0);b([e()],u.prototype,"defaultValue",void 0);b([e()],u.prototype,"label",void 0);b([_("#avatar-file-picker")],u.prototype,"_avatarFilePicker",void 0);b([_("#error-input")],u.prototype,"_errorInput",void 0);u=b([S("select-avatar")],u);var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,m=(t,o,n,a)=>{for(var r=a>1?void 0:a?Z(o,n):o,s=t.length-1,d;s>=0;s--)(d=t[s])&&(r=(a?d(o,n,r):d(r))||r);return a&&r&&Y(o,n,r),r};let v=class extends R(C){constructor(){super(...arguments),this.allowCancel=!1}avatarMode(){return this.store.config.avatarMode==="avatar-required"||this.store.config.avatarMode==="avatar-optional"}fireSaveProfile(t){const o=t.nickname;delete t.nickname;const n={fields:t,nickname:o};this.dispatchEvent(new CustomEvent("save-profile",{detail:{profile:n},bubbles:!0,composed:!0}))}fireCancel(){this.dispatchEvent(new CustomEvent("cancel-edit-profile",{bubbles:!0,composed:!0}))}renderField(t){var o;return c`
			<sl-input
				name="${t.name}"
				.required=${t.required}
				.label=${t.label}
				.value=${((o=this.profile)==null?void 0:o.entry.fields[t.name])||""}
				style="margin-bottom: 16px;"
			></sl-input>
		`}render(){var t,o;return c`
			<form
				id="profile-form"
				class="column"
				${J(n=>this.fireSaveProfile(n))}
			>
				<div
					class="row"
					style="justify-content: center; align-self: start; margin-bottom: 16px"
				>
					${this.avatarMode()?c` <select-avatar
								name="avatar"
								.value=${((t=this.profile)==null?void 0:t.entry.fields.avatar)||void 0}
								.required=${this.store.config.avatarMode==="avatar-required"}
							></select-avatar>`:c``}

					<sl-input
						name="nickname"
						.label=${h("Nickname")}
						required
						minLength="${this.store.config.minNicknameLength}"
						.value=${((o=this.profile)==null?void 0:o.entry.nickname)||""}
						.helpText=${h(H`Min. ${this.store.config.minNicknameLength} characters`)}
						style="margin-left: 16px;"
					></sl-input>
				</div>

				${this.store.config.additionalFields.map(n=>this.renderField(n))}

				<div class="row" style="margin-top: 8px;">
					${this.allowCancel?c`
								<sl-button
									style="flex: 1; margin-right: 6px;"
									@click=${()=>this.fireCancel()}
								>
									${h("Cancel")}
								</sl-button>
							`:c``}

					<sl-button style="flex: 1;" variant="primary" type="submit"
						>${this.saveProfileLabel??h("Save Profile")}
					</sl-button>
				</div>
			</form>
		`}};v.styles=[$];m([e()],v.prototype,"profile",2);m([e({type:String,attribute:"save-profile-label"})],v.prototype,"saveProfileLabel",2);m([M({context:N,subscribe:!0}),e()],v.prototype,"store",2);m([e({type:Boolean,attribute:"allow-cancel"})],v.prototype,"allowCancel",2);v=m([T(),S("edit-profile")],v);
