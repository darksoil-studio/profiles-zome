import{_ as i}from"./tslib.es6.kHcLnhpD.js";import{S as a,s as n,n as s,c as l,t as p}from"./property.DW58LSP5.js";import{a as o,l as d}from"./chunk.AJ3ENQ5C.CWahIKAi.js";import"./holo-identicon.TaizM_pS.js";import"./chunk.H5RLO2CN.Cl6l8a4M.js";import"./chunk.G6R7BW5E.Bqo2lwOD.js";import"./display-error.euNRL-7Q.js";import{o as m,a as h}from"./style-map.DTEisfmL.js";import{x as r,i as u,r as g}from"./lit-element.BYH7MJbe.js";import{p as y}from"./context.Bem5hB17.js";import"./static.C4gJ75QQ.js";import"./if-defined.mwbAsAHa.js";import"./range.CeOrHCaV.js";import"./isIterateeCall.CSfPBF3e.js";import"./toFinite.CWHk3G1P.js";import"./isSymbol.XF-DE6V6.js";let t=class extends a(g){constructor(){super(...arguments),this.size=24}renderAvatar(e){return e.avatar?r`
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
