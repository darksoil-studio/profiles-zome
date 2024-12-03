import{n as t,S as v,s as m,c as b,p as f,t as y}from"./context.C3X5h_YG.js";import{d as z,_ as c,f as _,L as w,g as x,m as $,l as P}from"./chunk.3EPZX5HE.C5DcSmWt.js";import{o as k,a as d}from"./style-map.CnbC7GLw.js";import{i as h,x as r,r as C}from"./lit-element.5UXQ_LNh.js";import{S}from"./chunk.3HB7VQL2.C3Njm4zI.js";import"./display-error.2dck76_Y.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./static.C1tkqjMX.js";import"./if-defined.DjkTvaUx.js";var H=h`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,l=class extends _{constructor(){super(...arguments),this.localize=new w(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return r`
      <span
        part="base"
        class=${x({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?r`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};l.styles=[z,H];l.dependencies={"sl-icon-button":S};c([t({reflect:!0})],l.prototype,"variant",2);c([t({reflect:!0})],l.prototype,"size",2);c([t({type:Boolean,reflect:!0})],l.prototype,"pill",2);c([t({type:Boolean})],l.prototype,"removable",2);l.define("sl-tag");var K=Object.defineProperty,A=Object.getOwnPropertyDescriptor,o=(e,i,g,n)=>{for(var a=n>1?void 0:n?A(i,g):i,p=e.length-1,u;p>=0;p--)(u=e[p])&&(a=(n?u(i,g,a):u(a))||a);return n&&a&&K(i,g,a),a};let s=class extends v(C){constructor(){super(...arguments),this.size=24}renderAvatar(e){return!e||!e.entry.fields.avatar?r` <div
				style=${k({position:"relative",height:`${this.size}px`,width:`${this.size}px`})}
			>
				<agent-avatar
					.disableCopy=${!0}
					.disableTooltip=${!0}
					.agentPubKey=${this.agentPubKey}
					.profileHash=${this.profileHash}
					.size=${this.size}
					style="height: ${this.size}px"
				>
				</agent-avatar>
			</div>`:r`
			<sl-avatar
				.image=${e.entry.fields.avatar}
				style="--size: ${this.size}px;"
			>
			</sl-avatar>
		`}renderProfile(e){return r`
			<div class="row" style="align-items: center">
				${this.renderAvatar(e)}
				<span style="margin-left: 8px">${e==null?void 0:e.entry.nickname}</span>
			</div>
		`}profile(){if(this.profileHash)return this.store.profiles.get(this.profileHash).latestVersion.get();if(this.agentPubKey){const e=this.store.profileForAgent.get(this.agentPubKey).get();return e.status!=="completed"?e:e.value===void 0?{status:"completed",value:void 0}:e.value.latestVersion.get()}else throw new Error("Either agentPubKey or profileHash needs to be defined for the agent-avatar element")}renderContent(){const e=this.profile();switch(e.status){case"pending":return r`<sl-skeleton effect="pulse"></sl-skeleton>`;case"completed":return this.renderProfile(e.value);case"error":return r`
					<display-error
						tooltip
						.headline=${$("Error fetching the agent's avatar")}
						.error=${e.error}
					></display-error>
				`}}render(){return r`
			<sl-tag pill style="display: inline-flex">${this.renderContent()}</sl-tag>
		`}};s.styles=[m,h`
			:host {
				display: inline-flex;
			}
		`];o([t(d("agent-pub-key"))],s.prototype,"agentPubKey",2);o([t(d("profile-hash"))],s.prototype,"profileHash",2);o([t({type:Number})],s.prototype,"size",2);o([b({context:f,subscribe:!0}),t()],s.prototype,"store",2);s=o([P(),y("agent-mention")],s);export{s as AgentMention};
