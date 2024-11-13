import{e as A,_ as u,f as b,n as S,v as z,g as E,L as F,A as L,x as T,y as O,z as D,h as N,k as ee,D as te,t as se,j as ie,S as ne,c as H,l as V,a as y,s as U,r as W}from"./routes.Ba3pFJcu.js";import{A as $,S as Y,h as oe,j as re,i as x,x as c,E as M,r as K,e as ae,c as le,t as j,s as ue,m as he}from"./lit-element.DlPO3IHk.js";import{S as B}from"./display-error.BNACcpJz.js";import{o as q}from"./if-defined.DksOYQzp.js";import{n as l,p as X,t as Q,S as G}from"./context.DV-VVxul.js";import{S as de,H as ce,g as pe,F as me}from"./chunk.5KGB34TL.Cg_slLRU.js";import{a as fe}from"./style-map.BuAmiDnJ.js";import"./profile-list-item-skeleton.BKdPNGIi.js";import"./agent-avatar.x-dZ_L2b.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";function ge(e,t){{const i=e.find(n=>n&&n.status==="error");if(i)return i}{const i=e.find(n=>n&&n.status==="pending");if(i)return i}return{status:"completed",value:e.filter(i=>i.status==="completed").map(i=>i.value)}}function be(e){return e!=null&&typeof e=="object"&&"then"in e&&typeof e.then=="function"}function R(e,t,s){const i=new Y.Computed(()=>{const r=[e,...s].map(h=>h.get());let a=r[0];if(a&&a.status){if(a.status==="error")return a;if(a.status==="pending")return a;a=a.value}try{return t(a,...r.slice(1).map(g=>g.value).reverse())}catch(h){return{status:"error",error:h}}});let n;const o=new $(()=>{const r=e.get();return n=void 0,r});return new $(()=>{o.get();const r=i.get();if(r&&r.get&&!r.has){const a=r.get();return a&&a.status?a:{status:"completed",value:a}}else if(be(r)){n||(n=oe(()=>r));const a=n.get();return a.status==="completed"&&a.value.status?a.value:a}else return r&&r.status?r:{status:"completed",value:r}})}function ve(e,t,s,i,n,o,r){let a=e;const h=a.get();(!h||!(typeof h=="object"&&"status"in h))&&(a=new $(()=>({status:"completed",value:e.get()})));const g=R(a,t,[]);return s?R(g,s,[a]):g}function ye(e,t){const s=Array.from(e.entries()).map(([o,r])=>r.status!=="completed"?r:{status:"completed",value:[o,r.value]}),i=ge(s);return i.status!=="completed"?i:{status:"completed",value:new re(i.value)}}var we=x`
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
`,I=new WeakMap;function J(e){let t=I.get(e);return t||(t=window.getComputedStyle(e,null),I.set(e,t)),t}function xe(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=J(e);return t.visibility!=="hidden"&&t.display!=="none"}function ke(e){const t=J(e),{overflowY:s,overflowX:i}=t;return s==="scroll"||i==="scroll"?!0:s!=="auto"||i!=="auto"?!1:e.scrollHeight>e.clientHeight&&s==="auto"||e.scrollWidth>e.clientWidth&&i==="auto"}function _e(e){const t=e.tagName.toLowerCase(),s=Number(e.getAttribute("tabindex"));return e.hasAttribute("tabindex")&&(isNaN(s)||s<=-1)||e.hasAttribute("disabled")||e.closest("[inert]")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!xe(e)?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:ke(e)}function Se(e){var t,s;const i=$e(e),n=(t=i[0])!=null?t:null,o=(s=i[i.length-1])!=null?s:null;return{start:n,end:o}}function Ce(e,t){var s;return((s=e.getRootNode({composed:!0}))==null?void 0:s.host)!==t}function $e(e){const t=new WeakMap,s=[];function i(n){if(n instanceof Element){if(n.hasAttribute("inert")||n.closest("[inert]")||t.has(n))return;t.set(n,!0),!s.includes(n)&&_e(n)&&s.push(n),n instanceof HTMLSlotElement&&Ce(n,e)&&n.assignedElements({flatten:!0}).forEach(o=>{i(o)}),n.shadowRoot!==null&&n.shadowRoot.mode==="open"&&i(n.shadowRoot)}for(const o of n.children)i(o)}return i(e),s.sort((n,o)=>{const r=Number(n.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-r})}var d=class extends E{constructor(){super(...arguments),this.localize=new F(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var s,i,n;const o=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?(n=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:n.activeElement:document.activeElement;(!this.containingElement||(o==null?void 0:o.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const s=t.getAllItems(),i=s[0],n=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(n),n.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(i=>Se(i).start);let s;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=t.button;break;default:s=t}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,L(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,L(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await T(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=O(this,"dropdown.show",{dir:this.localize.dir()});await D(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await T(this);const{keyframes:e,options:t}=O(this,"dropdown.hide",{dir:this.localize.dir()});await D(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return c`
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
        sync=${q(this.sync?this.sync:void 0)}
        class=${N({dropdown:!0,"dropdown--open":this.open})}
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
    `}};d.styles=[A,we];d.dependencies={"sl-popup":B};u([b(".dropdown")],d.prototype,"popup",2);u([b(".dropdown__trigger")],d.prototype,"trigger",2);u([b(".dropdown__panel")],d.prototype,"panel",2);u([l({type:Boolean,reflect:!0})],d.prototype,"open",2);u([l({reflect:!0})],d.prototype,"placement",2);u([l({type:Boolean,reflect:!0})],d.prototype,"disabled",2);u([l({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],d.prototype,"stayOpenOnSelect",2);u([l({attribute:!1})],d.prototype,"containingElement",2);u([l({type:Number})],d.prototype,"distance",2);u([l({type:Number})],d.prototype,"skidding",2);u([l({type:Boolean})],d.prototype,"hoist",2);u([l({reflect:!0})],d.prototype,"sync",2);u([S("open",{waitUntilFirstUpdate:!0})],d.prototype,"handleOpenChange",1);z("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});z("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});d.define("sl-dropdown");var Ae=x`
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
 */const w=(e,t)=>{var i;const s=e._$AN;if(s===void 0)return!1;for(const n of s)(i=n._$AO)==null||i.call(n,t,!1),w(n,t);return!0},_=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},Z=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Le(t)}};function Ee(e){this._$AN!==void 0?(_(this),this._$AM=e,Z(this)):this._$AM=e}function Pe(e,t=!1,s=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(i))for(let o=s;o<i.length;o++)w(i[o],!1),_(i[o]);else i!=null&&(w(i,!1),_(i));else w(this,e)}const Le=e=>{e.type==se.CHILD&&(e._$AP??(e._$AP=Pe),e._$AQ??(e._$AQ=Ee))};class Te extends ee{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,i){super._$AT(t,s,i),Z(this),this.isConnected=t._$AU}_$AO(t,s=!0){var i,n;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(n=this.disconnected)==null||n.call(this)),s&&(w(this,t),_(this))}setValue(t){if(te(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=()=>new De;class De{}const C=new WeakMap,Me=ie(class extends Te{render(e){return M}update(e,[t]){var i;const s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),M}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let s=C.get(t);s===void 0&&(s=new WeakMap,C.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=C.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Re=class{constructor(e,t){this.popupRef=Oe(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var i;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||(i=s.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),i=s==null?void 0:s.assignedElements({flatten:!0}).filter(g=>g.localName==="sl-menu")[0],n=getComputedStyle(this.host).direction==="rtl";if(!i)return;const{left:o,top:r,width:a,height:h}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${n?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${n?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${r+h}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const i of t.assignedElements())if(s=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let i=1;i!==s.length;++i)s[i].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((n,o)=>{var r;const a=(r=t.get(o))!=null?r:new CSSUnitValue(0,"px"),g=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return n-g.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=getComputedStyle(this.host).direction==="rtl";return this.isConnected?c`
      <sl-popup
        ${Me(this.popupRef)}
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
    `:c` <slot name="submenu" hidden></slot> `}},m=class extends E{constructor(){super(...arguments),this.localize=new F(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new ce(this,"submenu"),this.submenuController=new Re(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return pe(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return c`
      <div
        id="anchor"
        part="base"
        class=${N({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
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
    `}};m.styles=[A,Ae];m.dependencies={"sl-icon":ne,"sl-popup":B,"sl-spinner":de};u([b("slot:not([name])")],m.prototype,"defaultSlot",2);u([b(".menu-item")],m.prototype,"menuItem",2);u([l()],m.prototype,"type",2);u([l({type:Boolean,reflect:!0})],m.prototype,"checked",2);u([l()],m.prototype,"value",2);u([l({type:Boolean,reflect:!0})],m.prototype,"loading",2);u([l({type:Boolean,reflect:!0})],m.prototype,"disabled",2);u([S("checked")],m.prototype,"handleCheckedChange",1);u([S("disabled")],m.prototype,"handleDisabledChange",1);u([S("type")],m.prototype,"handleTypeChange",1);m.define("sl-menu-item");var Ie=x`
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
`,P=class extends E{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],s=e.composedPath(),i=s.find(a=>{var h;return t.includes(((h=a==null?void 0:a.getAttribute)==null?void 0:h.call(a,"role"))||"")});if(!i||s.find(a=>{var h;return((h=a==null?void 0:a.getAttribute)==null?void 0:h.call(a,"role"))==="menu"})!==this)return;const r=i;r.type==="checkbox"&&(r.checked=!r.checked),this.emit("sl-select",{detail:{item:r}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),s=this.getCurrentItem();let i=s?t.indexOf(s):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===e?"0":"-1")})}render(){return c`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};P.styles=[A,Ie];u([b("slot")],P.prototype,"defaultSlot",2);P.define("sl-menu");var ze=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,k=(e,t,s,i)=>{for(var n=i>1?void 0:i?Fe(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&ze(t,s,n),n};let v=class extends G(K){constructor(){super(...arguments),this._searchFilter=new Y.State(void 0),this.excludedProfiles=[],this._searchProfiles=ve(this._searchFilter,e=>this.store.client.searchProfiles(e),e=>{const t=ue(this.store.profiles,e);return ye(he(t,s=>s.latestVersion.get()))})}set searchFilter(e){this._searchFilter.set(e)}get searchFilter(){return this._searchFilter.get()}async onProfileSelected(e,t){this.dispatchEvent(new CustomEvent("profile-selected",{detail:{profileHash:e,profile:t},bubbles:!0,composed:!0}))}renderProfileList(){const e=this._searchFilter.get();if(!e||e.length<3)return c`<sl-menu-item disabled
				>${y("Enter at least 3 chars to search...")}</sl-menu-item
			>`;const t=this._searchProfiles.get();switch(t.status){case"pending":return Array.from(Array(3)).map(()=>c`
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
						.headline=${y("Error searching profiles")}
						.error=${t.error}
					></display-error>
				`;case"completed":{let s=Array.from(t.value.entries()),i=this.excludedProfiles.map(n=>n.toString());return s=s.filter(([n,o])=>!i.includes(n.toString())),s.length===0?c`<sl-menu-item disabled>
						${y("No nicknames match the filter")}
					</sl-menu-item>`:c`
					${s.map(([n,o])=>c`
							<sl-menu-item .value=${ae(n)}>
								<agent-avatar
									slot="prefix"
									.profileHash=${n}
									style="margin-right: 16px"
								></agent-avatar>
								${o==null?void 0:o.entry.nickname}
							</sl-menu-item>
						`)}
				`}}}render(){return c`
			<sl-dropdown
				id="dropdown"
				hoist
				style="flex: 1"
				.open=${q(this.open)}
			>
				<slot slot="trigger"></slot>
				<sl-menu
					@sl-select=${async e=>{const t=le(e.detail.item.value),s=await j(this.store.profiles.get(t).latestVersion);this.onProfileSelected(t,s)}}
				>
					${this.renderProfileList()}
				</sl-menu>
			</sl-dropdown>
		`}static get styles(){return[U,x`
				:host {
					display: flex;
				}
			`]}};k([l()],v.prototype,"open",2);k([H({context:X,subscribe:!0}),l()],v.prototype,"store",2);k([l()],v.prototype,"excludedProfiles",2);k([b("#dropdown")],v.prototype,"dropdown",2);v=k([V(),Q("search-profile-dropdown")],v);var Ne=Object.defineProperty,He=Object.getOwnPropertyDescriptor,f=(e,t,s,i)=>{for(var n=i>1?void 0:i?He(t,s):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(i?r(t,s,n):r(n))||n);return i&&n&&Ne(t,s,n),n};let p=class extends G(K){constructor(){super(...arguments),this.required=!1,this.disabled=!1,this.clearOnSelect=!1,this.excludedProfiles=[],this._controller=new me(this),this.searchFilter=""}reportValidity(){const e=this.required!==!1&&this.value===void 0;return e&&(this._textField.setCustomValidity("This field is required"),this._textField.reportValidity()),!e}async reset(){if(this.value=this.defaultValue,this.defaultValue){const e=await j(this.store.profiles.get(this.defaultValue).latestVersion);this._textField.value=(e==null?void 0:e.entry.nickname)||""}else this._textField.value=""}onProfileSelected(e,t){this.value=e,this.clearOnSelect?this._textField.value="":this._textField.value=t.entry.nickname,this.searchFilter=""}get _label(){let e=this.fieldLabel?this.fieldLabel:y("Search Profile");return this.required!==!1&&(e=`${e} *`),e}render(){return c`
			<div style="flex: 1; display: flex;">
				<search-profile-dropdown
					id="dropdown"
					.open=${this.searchFilter.length>=3}
					style="flex: 1"
					.excludedProfiles=${this.excludedProfiles}
					.searchFilter=${this.searchFilter}
					@profile-selected=${e=>this.onProfileSelected(e.detail.profileHash,e.detail.profile)}
				>
					<sl-input
						id="textfield"
						.label=${this._label}
						.placeholder=${y("At least 3 chars...")}
						@input=${e=>{this.searchFilter=e.target.value}}
					></sl-input>
				</search-profile-dropdown>
			</div>
		`}static get styles(){return[U,x`
				:host {
					display: flex;
				}
			`]}};f([l()],p.prototype,"name",2);f([l(fe("default-value"))],p.prototype,"defaultValue",2);f([l()],p.prototype,"required",2);f([l()],p.prototype,"disabled",2);f([W()],p.prototype,"value",2);f([l({type:Boolean,attribute:"clear-on-select"})],p.prototype,"clearOnSelect",2);f([H({context:X,subscribe:!0}),l()],p.prototype,"store",2);f([l()],p.prototype,"excludedProfiles",2);f([l({type:String,attribute:"field-label"})],p.prototype,"fieldLabel",2);f([b("#textfield")],p.prototype,"_textField",2);f([W()],p.prototype,"searchFilter",2);p=f([V(),Q("search-profile")],p);export{p as SearchProfile};
