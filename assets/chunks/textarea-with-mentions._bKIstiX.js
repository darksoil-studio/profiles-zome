import{_ as t}from"./tslib.es6.kHcLnhpD.js";import{i as d,x as h,e as m,r as x}from"./lit-element.CuGozQnE.js";import{a as f,h as n,r as v,l as b}from"./chunk.AJ3ENQ5C.BFgs73bB.js";import{S as g,s as y,n as r,t as _}from"./property.BHALj7b8.js";import{F as w}from"./chunk.AYM4DUFB.Q-d1RIVt.js";import"./agent-mention.CpbpLPVE.js";import"./search-user-dropdown.B254uDF-.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./if-defined._SvckkjQ.js";import"./holo-identicon.D2LQz_RV.js";import"./display-error.CG6EGJy0.js";import"./style-map.FG-BVvAP.js";import"./chunk.H5RLO2CN.24xBCjvb.js";import"./chunk.G6R7BW5E.CMG7VnhJ.js";import"./static.C0deb9nV.js";import"./context.EJdwcjoM.js";import"./agent-avatar.Dbvuf-Hx.js";import"./profile-list-item-skeleton.XMTKtiJT.js";var k=d`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`;let e=class extends g(x){constructor(){super(...arguments),this._controller=new w(this),this.size="medium",this.filled=!1,this.label="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.required=!1,this.helpText=f("Press '@' to mention an agent."),this.hasFocus=!1}reportValidity(){const o=this.required!==!1&&this.value===void 0;return o&&this.shadowRoot.querySelector("input").setCustomValidity("This field is required"),!o}async reset(){this.value=this.defaultValue||""}get value(){return this.textarea?this.textarea.innerHTML.replaceAll("&nbsp;"," ").replaceAll(/<agent-mention agent-pub-key="([^"]*)"><\/agent-mention>/gm,"$1").replaceAll(/<div>/g,`
`).replaceAll(/<\/div>/g,"").replaceAll(/<br>/g,`
`).trim():""}set value(o){this.textarea.innerHTML=o.replace(/(uhCAk[^ ]*)/gm,'&nbsp;<agent-mention agent-pub-key="$1"></agent-mention>&nbsp;')}get dropdown(){return this.shadowRoot.querySelector("search-user-dropdown")}get textarea(){return this.shadowRoot.getElementById("textarea")}hideDropdown(){this.dropdown.searchFilter="",this.dropdown.open=!1}render(){const i=!!this.label,l=!!this.helpText;return h`
			<div
				part="form-control"
				class=${n({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":l})}
			>
				<label
					part="form-control-label"
					class="form-control__label"
					for="input"
					aria-hidden=${i?"false":"true"}
				>
					<slot name="label">${this.label}</slot>
				</label>

				<div part="form-control-input" class="form-control-input">
					<div
						part="base"
						class=${n({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
					>
						<div class="column">
							<div
								id="textarea"
								contenteditable
								@keydown=${a=>{console.log(a),this.dropdown.open?a.key==="Backspace"?(this.dropdown.searchFilter.length===0&&this.hideDropdown(),this.dropdown.searchFilter=this.dropdown.searchFilter.slice(0,this.dropdown.searchFilter.length-1)):a.key.startsWith("ArrowDown")?this.dropdown.focusFirstItem():a.key.match(/^\w$/gm)?this.dropdown.searchFilter+=a.key:this.hideDropdown():a.key==="@"&&(this.dropdown.open=!0,this.dropdown.searchFilter="")}}
							></div>
							<search-user-dropdown
								@user-selected=${a=>{const p=a.detail.agents,s=this.textarea.innerHTML.search(`@${this.dropdown.searchFilter}`),u=s+this.dropdown.searchFilter.length+1;this.textarea.innerHTML=this.textarea.innerHTML.slice(0,s)+`&nbsp;<agent-mention agent-pub-key=${m(p[0])}></agent-mention>&nbsp;`+this.textarea.innerHTML.slice(u),this.hideDropdown(),this.textarea.focus(),document.getSelection().selectAllChildren(this.textarea),document.getSelection().collapseToEnd()}}
								><div></div>
							</search-user-dropdown>
							<input style="display: none" />
						</div>
						<!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
						<div
							part="textarea-adjuster"
							class="textarea__size-adjuster"
							?hidden=${this.resize!=="auto"}
						></div>
					</div>
				</div>

				<div
					part="form-control-help-text"
					id="help-text"
					class="form-control__help-text"
					aria-hidden=${l?"false":"true"}
				>
					<slot name="help-text">${this.helpText}</slot>
				</div>
			</div>
		`}};e.styles=[d`
			#textarea {
				padding: 4px;
				min-height: 120px;
			}
		`,y,k];t([r()],e.prototype,"name",void 0);t([r({reflect:!0})],e.prototype,"size",void 0);t([r({type:Boolean,reflect:!0})],e.prototype,"filled",void 0);t([r()],e.prototype,"label",void 0);t([r()],e.prototype,"placeholder",void 0);t([r({type:Number})],e.prototype,"rows",void 0);t([r()],e.prototype,"resize",void 0);t([r({type:Boolean,reflect:!0})],e.prototype,"disabled",void 0);t([r({type:Boolean,reflect:!0})],e.prototype,"readonly",void 0);t([r({type:Boolean,reflect:!0})],e.prototype,"required",void 0);t([r({type:Number})],e.prototype,"minlength",void 0);t([r({type:Number})],e.prototype,"maxlength",void 0);t([r()],e.prototype,"helpText",void 0);t([v()],e.prototype,"hasFocus",void 0);t([r()],e.prototype,"defaultValue",void 0);e=t([b(),_("textarea-with-mentions")],e);export{e as TextareaWithMentions};
