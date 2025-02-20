import{S as f,s as g,n,c as d,p as m,t as y}from"./context.DzK0tg0I.js";import{m as v,l as c}from"./chunk.AJ3ENQ5C.9SmIBWW5.js";import"./holo-identicon.DsBMJyu4.js";import"./chunk.H5RLO2CN.BjICY543.js";import"./chunk.G6R7BW5E.B41jhnUh.js";import"./display-error.BiYNJWRJ.js";import{o as $,h as u}from"./style-map.Co6E1u6x.js";import{x as s,i as b,r as P}from"./lit-element.DEsU9Zn3.js";import"./static.DbTSaKL5.js";import"./if-defined.BPuz0jc1.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";var x=Object.defineProperty,z=Object.getOwnPropertyDescriptor,i=(e,a,l,o)=>{for(var t=o>1?void 0:o?z(a,l):a,p=e.length-1,h;p>=0;p--)(h=e[p])&&(t=(o?h(a,l,t):h(t))||t);return o&&t&&x(a,l,t),t};let r=class extends f(P){constructor(){super(...arguments),this.size=24}renderAvatar(e){return!e||!e.entry.fields.avatar?s` <div
				style=${$({position:"relative",height:`${this.size}px`,width:`${this.size}px`})}
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
			</div>`:s`
			<sl-avatar
				.image=${e.entry.fields.avatar}
				style="--size: ${this.size}px;"
			>
			</sl-avatar>
		`}renderProfile(e){return s`
			<div class="row" style="align-items: center">
				${this.renderAvatar(e)}
				<span style="margin-left: 8px">${e==null?void 0:e.entry.nickname}</span>
			</div>
		`}profile(){if(this.profileHash)return this.store.profiles.get(this.profileHash).latestVersion.get();if(this.agentPubKey){const e=this.store.profileForAgent.get(this.agentPubKey).get();return e.status!=="completed"?e:e.value===void 0?{status:"completed",value:void 0}:e.value.latestVersion.get()}else throw new Error("Either agentPubKey or profileHash needs to be defined for the agent-avatar element")}renderContent(){const e=this.profile();switch(e.status){case"pending":return s`<sl-skeleton effect="pulse"></sl-skeleton>`;case"completed":return this.renderProfile(e.value);case"error":return s`
					<display-error
						tooltip
						.headline=${v("Error fetching the agent's avatar")}
						.error=${e.error}
					></display-error>
				`}}render(){return s`
			<sl-tag pill style="display: inline-flex">${this.renderContent()}</sl-tag>
		`}};r.styles=[g,b`
			:host {
				display: inline-flex;
			}
		`];i([n(u("agent-pub-key"))],r.prototype,"agentPubKey",2);i([n(u("profile-hash"))],r.prototype,"profileHash",2);i([n({type:Number})],r.prototype,"size",2);i([d({context:m,subscribe:!0}),n()],r.prototype,"store",2);r=i([c(),y("agent-mention")],r);export{r as AgentMention};
