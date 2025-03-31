import{_ as i}from"./tslib.es6.kHcLnhpD.js";import{S as a,s as n,n as s,c as l,t as p}from"./property.BN7dYdg1.js";import{m as o,l as d}from"./chunk.AJ3ENQ5C.vwbyVPfY.js";import"./holo-identicon.B4UZPcCe.js";import"./chunk.H5RLO2CN.ByVzwkPX.js";import"./chunk.G6R7BW5E.BTu0RqBA.js";import"./display-error.BW76oNwW.js";import{o as m,h}from"./style-map.HzHOOz7V.js";import{x as r,i as u,r as g}from"./lit-element.B42_yqfG.js";import{p as y}from"./context.CATpzCsC.js";import"./static.C8OjZKDB.js";import"./if-defined.P92z7vbU.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";let t=class extends a(g){constructor(){super(...arguments),this.size=24}renderAvatar(e){return e.avatar?r`
			<sl-avatar .image=${e.avatar} style="--size: ${this.size}px;">
			</sl-avatar>
		`:r` <div
				style=${m({position:"relative",height:`${this.size}px`,width:`${this.size}px`})}
			>
				<agent-avatar
					.disableCopy=${!0}
					.disableTooltip=${!0}
					.agentPubKey=${this.agentPubKey}
					.size=${this.size}
					style="height: ${this.size}px"
				>
				</agent-avatar>
			</div>`}renderProfile(e){return r`
			<div class="row" style="align-items: center">
				${this.renderAvatar(e)}
				<span style="margin-left: 8px">${e.name}</span>
			</div>
		`}renderContent(){const e=this.profilesProvider.currentProfileForAgent.get(this.agentPubKey).get();switch(e.status){case"pending":return r`<sl-skeleton effect="pulse"></sl-skeleton>`;case"completed":return e.value?this.renderProfile(e.value):r`
						<display-error
							tooltip
							.headline=${o("Error fetching the profile.")}
							.error=${o("Profile not found.")}
						></display-error>
					`;case"error":return r`
					<display-error
						tooltip
						.headline=${o("Error fetching the profile.")}
						.error=${e.error}
					></display-error>
				`}}render(){return r`
			<sl-tag pill style="display: inline-flex">${this.renderContent()}</sl-tag>
		`}};t.styles=[n,u`
			:host {
				display: inline-flex;
			}
		`];i([s(h("agent-pub-key"))],t.prototype,"agentPubKey",void 0);i([s({type:Number})],t.prototype,"size",void 0);i([l({context:y,subscribe:!0}),s()],t.prototype,"profilesProvider",void 0);t=i([d(),p("agent-mention")],t);export{t as AgentMention};
