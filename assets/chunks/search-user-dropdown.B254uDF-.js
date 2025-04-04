import{_ as v}from"./tslib.es6.kHcLnhpD.js";import{n as h,c as W,t as Y,S as F,s as V}from"./property.BHALj7b8.js";import{f as _,_ as l,e as m,j as w,k as O,g as E,L as R,q as $,n as T,o as L,p as D,h as I,i as B,A as q,t as j,d as X,S as Q,l as G,a as x}from"./chunk.AJ3ENQ5C.BFgs73bB.js";import{A as C,S as z,h as J,i as k,x as c,E as P,r as Z}from"./lit-element.CuGozQnE.js";import{S as N}from"./display-error.CG6EGJy0.js";import{o as U}from"./if-defined._SvckkjQ.js";import{S as ee,H as te,g as se}from"./chunk.AYM4DUFB.Q-d1RIVt.js";import"./holo-identicon.D2LQz_RV.js";import{p as ie}from"./context.EJdwcjoM.js";import"./agent-avatar.Dbvuf-Hx.js";import"./profile-list-item-skeleton.XMTKtiJT.js";function ne(e){return e!=null&&typeof e=="object"&&"then"in e&&typeof e.then=="function"}function oe(e,t,s){const i=new z.Computed(()=>{const a=[e,...s].map(u=>u.get());let o=a[0];if(o&&o.status){if(o.status==="error")return o;if(o.status==="pending")return o;o=o.value}try{return t(o,...a.slice(1).map(f=>f.value).reverse())}catch(u){return{status:"error",error:u}}});let n;const r=new C(()=>{const a=e.get();return n=void 0,a});return new C(()=>{r.get();const a=i.get();if(a&&a.get&&!a.has){const o=a.get();return o&&o.status?o:{status:"completed",value:o}}else if(ne(a)){n||(n=J(()=>a));const o=n.get();return o.status==="completed"&&o.value.status?o.value:o}else return a&&a.status?a:{status:"completed",value:a}})}function re(e,t,s,i,n,r,a){let o=e;const u=o.get();return(!u||!(typeof u=="object"&&"status"in u))&&(o=new C(()=>({status:"completed",value:e.get()}))),oe(o,t,[])}var ae=k`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,M=new WeakMap;function H(e){let t=M.get(e);return t||(t=window.getComputedStyle(e,null),M.set(e,t)),t}function le(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=H(e);return t.visibility!=="hidden"&&t.display!=="none"}function ue(e){const t=H(e),{overflowY:s,overflowX:i}=t;return s==="scroll"||i==="scroll"?!0:s!=="auto"||i!=="auto"?!1:e.scrollHeight>e.clientHeight&&s==="auto"||e.scrollWidth>e.clientWidth&&i==="auto"}function he(e){const t=e.tagName.toLowerCase(),s=Number(e.getAttribute("tabindex"));return e.hasAttribute("tabindex")&&(isNaN(s)||s<=-1)||e.hasAttribute("disabled")||e.closest("[inert]")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!le(e)?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:ue(e)}function de(e){var t,s;const i=pe(e),n=(t=i[0])!=null?t:null,r=(s=i[i.length-1])!=null?s:null;return{start:n,end:r}}function ce(e,t){var s;return((s=e.getRootNode({composed:!0}))==null?void 0:s.host)!==t}function pe(e){const t=new WeakMap,s=[];function i(n){if(n instanceof Element){if(n.hasAttribute("inert")||n.closest("[inert]")||t.has(n))return;t.set(n,!0),!s.includes(n)&&he(n)&&s.push(n),n instanceof HTMLSlotElement&&ce(n,e)&&n.assignedElements({flatten:!0}).forEach(r=>{i(r)}),n.shadowRoot!==null&&n.shadowRoot.mode==="open"&&i(n.shadowRoot)}for(const r of n.children)i(r)}return i(e),s.sort((n,r)=>{const a=Number(n.getAttribute("tabindex"))||0;return(Number(r.getAttribute("tabindex"))||0)-a})}var d=class extends E{constructor(){super(...arguments),this.localize=new R(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var s,i,n;const r=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?(n=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:n.activeElement:document.activeElement;(!this.containingElement||(r==null?void 0:r.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const s=t.getAllItems(),i=s[0],n=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(n),n.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(i=>de(i).start);let s;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=t.button;break;default:s=t}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,$(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,$(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await T(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=L(this,"dropdown.show",{dir:this.localize.dir()});await D(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await T(this);const{keyframes:e,options:t}=L(this,"dropdown.hide",{dir:this.localize.dir()});await D(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return c`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${U(this.sync?this.sync:void 0)}
        class=${I({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};d.styles=[_,ae];d.dependencies={"sl-popup":N};l([m(".dropdown")],d.prototype,"popup",2);l([m(".dropdown__trigger")],d.prototype,"trigger",2);l([m(".dropdown__panel")],d.prototype,"panel",2);l([h({type:Boolean,reflect:!0})],d.prototype,"open",2);l([h({reflect:!0})],d.prototype,"placement",2);l([h({type:Boolean,reflect:!0})],d.prototype,"disabled",2);l([h({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],d.prototype,"stayOpenOnSelect",2);l([h({attribute:!1})],d.prototype,"containingElement",2);l([h({type:Number})],d.prototype,"distance",2);l([h({type:Number})],d.prototype,"skidding",2);l([h({type:Boolean})],d.prototype,"hoist",2);l([h({reflect:!0})],d.prototype,"sync",2);l([w("open",{waitUntilFirstUpdate:!0})],d.prototype,"handleOpenChange",1);O("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});O("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});d.define("sl-dropdown");var me=k`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=(e,t)=>{var i;const s=e._$AN;if(s===void 0)return!1;for(const n of s)(i=n._$AO)==null||i.call(n,t,!1),b(n,t);return!0},y=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},K=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),be(t)}};function fe(e){this._$AN!==void 0?(y(this),this._$AM=e,K(this)):this._$AM=e}function ge(e,t=!1,s=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(i))for(let r=s;r<i.length;r++)b(i[r],!1),y(i[r]);else i!=null&&(b(i,!1),y(i));else b(this,e)}const be=e=>{e.type==j.CHILD&&(e._$AP??(e._$AP=ge),e._$AQ??(e._$AQ=fe))};class ve extends B{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,i){super._$AT(t,s,i),K(this),this.isConnected=t._$AU}_$AO(t,s=!0){var i,n;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(n=this.disconnected)==null||n.call(this)),s&&(b(this,t),y(this))}setValue(t){if(q(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=()=>new we;class we{}const S=new WeakMap,ke=X(class extends ve{render(e){return P}update(e,[t]){var i;const s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),P}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let s=S.get(t);s===void 0&&(s=new WeakMap,S.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=S.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var xe=class{constructor(e,t){this.popupRef=ye(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var i;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||(i=s.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),i=s==null?void 0:s.assignedElements({flatten:!0}).filter(f=>f.localName==="sl-menu")[0],n=getComputedStyle(this.host).direction==="rtl";if(!i)return;const{left:r,top:a,width:o,height:u}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${n?r+o:r}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${a}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${n?r+o:r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${a+u}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const i of t.assignedElements())if(s=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let i=1;i!==s.length;++i)s[i].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((n,r)=>{var a;const o=(a=t.get(r))!=null?a:new CSSUnitValue(0,"px"),f=(o instanceof CSSUnitValue?o:new CSSUnitValue(0,"px")).to("px");return n-f.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=getComputedStyle(this.host).direction==="rtl";return this.isConnected?c`
      <sl-popup
        ${ke(this.popupRef)}
        placement=${e?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:c` <slot name="submenu" hidden></slot> `}},p=class extends E{constructor(){super(...arguments),this.localize=new R(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new te(this,"submenu"),this.submenuController=new xe(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return se(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return c`
      <div
        id="anchor"
        part="base"
        class=${I({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?c` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};p.styles=[_,me];p.dependencies={"sl-icon":Q,"sl-popup":N,"sl-spinner":ee};l([m("slot:not([name])")],p.prototype,"defaultSlot",2);l([m(".menu-item")],p.prototype,"menuItem",2);l([h()],p.prototype,"type",2);l([h({type:Boolean,reflect:!0})],p.prototype,"checked",2);l([h()],p.prototype,"value",2);l([h({type:Boolean,reflect:!0})],p.prototype,"loading",2);l([h({type:Boolean,reflect:!0})],p.prototype,"disabled",2);l([w("checked")],p.prototype,"handleCheckedChange",1);l([w("disabled")],p.prototype,"handleDisabledChange",1);l([w("type")],p.prototype,"handleTypeChange",1);p.define("sl-menu-item");var Se=k`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,A=class extends E{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],s=e.composedPath(),i=s.find(o=>{var u;return t.includes(((u=o==null?void 0:o.getAttribute)==null?void 0:u.call(o,"role"))||"")});if(!i||s.find(o=>{var u;return((u=o==null?void 0:o.getAttribute)==null?void 0:u.call(o,"role"))==="menu"})!==this)return;const a=i;a.type==="checkbox"&&(a.checked=!a.checked),this.emit("sl-select",{detail:{item:a}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),s=this.getCurrentItem();let i=s?t.indexOf(s):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===e?"0":"-1")})}render(){return c`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};A.styles=[_,Se];l([m("slot")],A.prototype,"defaultSlot",2);A.define("sl-menu");let g=class extends F(Z){constructor(){super(...arguments),this._searchFilter=new z.State(void 0),this.excludedUsers=[],this._searchProfiles=re(this._searchFilter,t=>this.profilesProvider.search(t))}set searchFilter(t){this._searchFilter.set(t)}get searchFilter(){return this._searchFilter.get()}focusFirstItem(){const t=this._searchProfiles.get();if(t.status!=="completed")return;let s=t.value;const i=[].concat(...this.excludedUsers.map(n=>n.map(r=>r.toString())));s=s.filter(n=>!n.agents.find(r=>i.includes(r.toString()))),s.length!==0&&this.shadowRoot.querySelector("sl-menu-item").focus()}async onUserSelected(t,s){this.dispatchEvent(new CustomEvent("user-selected",{detail:{agents:t,profile:s},bubbles:!0,composed:!0}))}renderProfileList(){const t=this._searchFilter.get();if(!t||t.length<3)return c`<sl-menu-item disabled
				>${x("Enter at least 3 chars to search...")}</sl-menu-item
			>`;const s=this._searchProfiles.get();switch(s.status){case"pending":return Array.from(Array(3)).map(()=>c`
						<sl-menu-item>
							<div class="row" style="display:flex; align-items: center">
								<sl-skeleton
									effect="sheen"
									slot="prefix"
									style="height: 32px; width: 32px; border-radius: 50%; margin: 8px"
								></sl-skeleton>
								<sl-skeleton
									effect="sheen"
									style="width: 100px; margin: 8px; border-radius: 12px"
								></sl-skeleton>
							</div>
						</sl-menu-item>
					`);case"error":return c`
					<display-error
						style="flex: 1; display:flex"
						tooltip
						.headline=${x("Error searching profiles")}
						.error=${s.error}
					></display-error>
				`;case"completed":{let i=s.value;const n=[].concat(...this.excludedUsers.map(r=>r.map(a=>a.toString())));return i=i.filter(r=>!r.agents.find(a=>n.includes(a.toString()))),i.length===0?c`<sl-menu-item disabled>
						${x("No nicknames match the filter")}
					</sl-menu-item>`:c`
					${i.map((r,a)=>{var o;return c`
							<sl-menu-item .value=${a}>
								<agent-avatar
									slot="prefix"
									.agentPubKey=${r.agents[0]}
									style="margin-right: 16px"
								></agent-avatar>
								${(o=r.profile)==null?void 0:o.name}
							</sl-menu-item>
						`})}
				`}}}render(){return c`
			<sl-dropdown
				id="dropdown"
				hoist
				style="flex: 1"
				.open=${U(this.open)}
			>
				<slot slot="trigger"></slot>
				<sl-menu
					@sl-select=${async t=>{const s=parseInt(t.detail.item.value),i=this._searchProfiles.get();if(i.status!=="completed")return;const n=i.value[s];this.onUserSelected(n.agents,n.profile)}}
				>
					${this.renderProfileList()}
				</sl-menu>
			</sl-dropdown>
		`}static get styles(){return[V,k`
				:host {
					display: flex;
				}
			`]}};v([h()],g.prototype,"open",void 0);v([W({context:ie,subscribe:!0}),h()],g.prototype,"profilesProvider",void 0);v([h()],g.prototype,"excludedUsers",void 0);v([m("#dropdown")],g.prototype,"dropdown",void 0);g=v([G(),Y("search-user-dropdown")],g);
