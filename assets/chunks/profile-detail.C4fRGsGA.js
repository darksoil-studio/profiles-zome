import{a as f,s as h,c as u,l as g}from"./routes.BYIrb7eu.js";import{a as c}from"./style-map.BsJQDmXk.js";import"./display-error.yIKwlQGE.js";import{x as o,r as m}from"./lit-element.C4EVzn6y.js";import{S as v,n as d,p as y,t as b}from"./context.Cbfo6AYk.js";import"./agent-avatar.DaaJ2eQk.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";var x=Object.defineProperty,P=Object.getOwnPropertyDescriptor,l=(e,t,r,i)=>{for(var s=i>1?void 0:i?P(t,r):t,n=e.length-1,p;n>=0;n--)(p=e[n])&&(s=(i?p(t,r,s):p(s))||s);return i&&s&&x(t,r,s),s};let a=class extends v(m){getAdditionalFields(e){const t={};for(const[r,i]of Object.entries(e.fields))r!=="avatar"&&(t[r]=i);return t}profile(){if(this.profileHash)return this.store.profiles.get(this.profileHash).latestVersion.get();if(this.agentPubKey){const e=this.store.profileForAgent.get(this.agentPubKey).get();return e.status!=="completed"?e:e.value===void 0?{status:"completed",value:void 0}:e.value.latestVersion.get()}else throw new Error("Either agentPubKey or profileHash needs to be defined for the agent-avatar element")}renderAdditionalField(e,t){return o`
			<div class="column" style="margin-top: 16px">
				<span style="margin-bottom: 8px; ">
					<strong
						>${e.substring(0,1).toUpperCase()}${e.substring(1)}</strong
					></span
				>
				<span>${t}</span>
			</div>
		`}renderProfile(e){return e?o`
			<div class="column">
				<div class="row" style="align-items: center">
					<agent-avatar
						.agentPubKey=${this.agentPubKey}
						.profileHash=${this.profileHash}
					></agent-avatar>
					<span style="font-size: 16px; margin-left: 8px;"
						>${e.entry.nickname}</span
					>

					<span style="flex: 1"></span>

					<slot name="action"></slot>
				</div>

				${Object.entries(this.getAdditionalFields(e.entry)).filter(([,t])=>t!=="").map(([t,r])=>this.renderAdditionalField(t,r))}
			</div>
		`:o`<div
				class="column"
				style="align-items: center; justify-content: center; flex: 1;"
			>
				<span class="placeholder"
					>${f("This agent hasn't created a profile yet")}</span
				>
			</div>`}render(){const e=this.profile();switch(e.status){case"pending":return o`
					<div class="column">
						<div class="row" style="align-items: center">
							<sl-skeleton
								effect="pulse"
								style="height: 32px; width: 32px; border-radius: 50%;"
							></sl-skeleton>
							<div>
								<sl-skeleton
									effect="pulse"
									style="width: 122px; margin-left: 8px;"
								></sl-skeleton>
							</div>
						</div>

						${this.store.config.additionalFields.map(()=>o`
								<sl-skeleton
									effect="pulse"
									style="width: 200px; margin-top: 16px;"
								></sl-skeleton>
							`)}
					</div>
				`;case"completed":return this.renderProfile(e.value);case"error":return o`<display-error
					.headline=${f("Error fetching the profile")}
					.error=${e.error}
				></display-error>`}}};a.styles=[h];l([d(c("agent-pub-key"))],a.prototype,"agentPubKey",2);l([d(c("profile-hash"))],a.prototype,"profileHash",2);l([u({context:y,subscribe:!0}),d()],a.prototype,"store",2);a=l([g(),b("profile-detail")],a);export{a as ProfileDetail};