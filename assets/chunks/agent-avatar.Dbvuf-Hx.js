import{_ as s}from"./tslib.es6.kHcLnhpD.js";import{S as l,s as p,n as o,c as n,t as d}from"./property.BHALj7b8.js";import{w as h,a as c,l as u,E as b}from"./chunk.AJ3ENQ5C.BFgs73bB.js";import"./holo-identicon.D2LQz_RV.js";import"./display-error.CG6EGJy0.js";import{o as r,a as g}from"./style-map.FG-BVvAP.js";import{x as i,i as m,r as y}from"./lit-element.CuGozQnE.js";import{p as v}from"./context.EJdwcjoM.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";let e=class extends l(y){constructor(){super(...arguments),this.size=32,this.disableTooltip=!1,this.disableCopy=!1}renderIdenticon(){return this.agentPubKey?i` <div
			style=${r({position:"relative",height:`${this.size}px`,width:`${this.size}px`})}
		>
			<holo-identicon
				.disableCopy=${this.disableCopy}
				.disableTooltip=${this.disableTooltip}
				.hash=${this.agentPubKey}
				.size=${this.size}
			>
			</holo-identicon>
			<div class="badge"><slot name="badge"></slot></div>
		</div>`:i`
				<sl-icon
					style=${r({position:"relative",height:`${this.size}px`,width:`${this.size}px`})}
					.src=${h(b)}
				>
				</sl-icon>
			`}renderProfile(t){if(!t||!t.avatar)return this.renderIdenticon();const a=i`
			<div
				style=${r({cursor:this.disableCopy?"":"pointer",position:"relative",height:`${this.size}px`,width:`${this.size}px`})}
			>
				<sl-avatar
					.image=${t.avatar}
					style="--size: ${this.size}px; display: flex;"
					@click=${()=>this.dispatchEvent(new CustomEvent("profile-clicked",{composed:!0,bubbles:!0,detail:{agentPubKey:this.agentPubKey}}))}
				>
				</sl-avatar>
				<div class="badge"><slot name="badge"></slot></div>
			</div>
		`;return i`
			<sl-tooltip
				id="tooltip"
				placement="top"
				.trigger=${this.disableTooltip?"manual":"hover focus"}
				hoist
				.content=${t.name}
			>
				${a}
			</sl-tooltip>
		`}render(){const t=this.profilesProvider.currentProfileForAgent.get(this.agentPubKey).get();switch(t.status){case"pending":return i`<sl-skeleton
					effect="pulse"
					style="height: ${this.size}px; width: ${this.size}px"
				></sl-skeleton>`;case"error":return i`
					<display-error
						tooltip
						.headline=${c("Error fetching the user's profile.")}
						.error=${t.error}
					></display-error>
				`;case"completed":return this.renderProfile(t.value)}}};e.styles=[p,m`
			.badge {
				position: absolute;
				right: 0;
				bottom: 0;
			}
			:host {
				height: 32px;
			}
		`];s([o(g("agent-pub-key"))],e.prototype,"agentPubKey",void 0);s([o({type:Number})],e.prototype,"size",void 0);s([o({type:Boolean,attribute:"disable-tooltip"})],e.prototype,"disableTooltip",void 0);s([o({type:Boolean,attribute:"disable-copy"})],e.prototype,"disableCopy",void 0);s([n({context:v,subscribe:!0}),o()],e.prototype,"profilesProvider",void 0);e=s([u(),d("agent-avatar")],e);export{e as AgentAvatar};
