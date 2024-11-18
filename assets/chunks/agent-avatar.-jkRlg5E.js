import{S as u,s as g,n as a,c as b,p as f,t as y}from"./context.DjmyCDNo.js";import{w as v,a as m,l as $,c as P}from"./chunk.3EPZX5HE.Di75AIhZ.js";import{o as d,a as c}from"./style-map.CASpPoSj.js";import"./display-error.YjPgTlrJ.js";import{x as o,i as x,r as z}from"./lit-element.DlPO3IHk.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";var w=Object.defineProperty,C=Object.getOwnPropertyDescriptor,s=(e,r,n,l)=>{for(var i=l>1?void 0:l?C(r,n):r,p=e.length-1,h;p>=0;p--)(h=e[p])&&(i=(l?h(r,n,i):h(i))||i);return l&&i&&w(r,n,i),i};let t=class extends u(z){constructor(){super(...arguments),this.size=32,this.disableTooltip=!1,this.disableCopy=!1}renderIdenticon(){return this.agentPubKey?o` <div
			style=${d({position:"relative",height:`${this.size}px`,width:`${this.size}px`})}
		>
			<holo-identicon
				.disableCopy=${this.disableCopy}
				.disableTooltip=${this.disableTooltip}
				.hash=${this.agentPubKey}
				.size=${this.size}
			>
			</holo-identicon>
			<div class="badge"><slot name="badge"></slot></div>
		</div>`:o`
				<sl-icon
					style=${d({position:"relative",height:`${this.size}px`,width:`${this.size}px`})}
					.src=${v(P)}
				>
				</sl-icon>
			`}renderProfile(e){if(!e||!e.entry.fields.avatar)return this.renderIdenticon();const r=o`
			<div
				style=${d({cursor:this.disableCopy?"":"pointer",position:"relative",height:`${this.size}px`,width:`${this.size}px`})}
			>
				<sl-avatar
					.image=${e.entry.fields.avatar}
					style="--size: ${this.size}px;"
					@click=${()=>this.dispatchEvent(new CustomEvent("profile-clicked",{composed:!0,bubbles:!0,detail:{agentPubKey:this.agentPubKey}}))}
				>
				</sl-avatar>
				<div class="badge"><slot name="badge"></slot></div>
			</div>
		`;return o`
			<sl-tooltip
				id="tooltip"
				placement="top"
				.trigger=${this.disableTooltip?"manual":"hover focus"}
				hoist
				.content=${e.entry.nickname}
			>
				${r}
			</sl-tooltip>
		`}profile(){if(this.profileHash)return this.store.profiles.get(this.profileHash).latestVersion.get();if(this.agentPubKey){const e=this.store.profileForAgent.get(this.agentPubKey).get();return e.status!=="completed"?e:e.value===void 0?{status:"completed",value:void 0}:e.value.latestVersion.get()}else throw new Error("Either agentPubKey or profileHash needs to be defined for the agent-avatar element")}render(){if(this.store.config.avatarMode==="identicon")return this.renderIdenticon();const e=this.profile();switch(e.status){case"pending":return o`<sl-skeleton
					effect="pulse"
					style="height: ${this.size}px; width: ${this.size}px"
				></sl-skeleton>`;case"completed":return this.renderProfile(e.value);case"error":return o`
					<display-error
						tooltip
						.headline=${m("Error fetching the agent's avatar")}
						.error=${e.error}
					></display-error>
				`}}};t.styles=[g,x`
			.badge {
				position: absolute;
				right: 0;
				bottom: 0;
			}
			:host {
				height: 32px;
			}
		`];s([a(c("agent-pub-key"))],t.prototype,"agentPubKey",2);s([a(c("profile-hash"))],t.prototype,"profileHash",2);s([a({type:Number})],t.prototype,"size",2);s([a({type:Boolean,attribute:"disable-tooltip"})],t.prototype,"disableTooltip",2);s([a({type:Boolean,attribute:"disable-copy"})],t.prototype,"disableCopy",2);s([b({context:f,subscribe:!0}),a()],t.prototype,"store",2);t=s([$(),y("agent-avatar")],t);export{t as AgentAvatar};
