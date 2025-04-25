import{_ as o}from"./tslib.es6.kHcLnhpD.js";import{S as p,s as d,n as l,c,t as m}from"./property.DW58LSP5.js";import{a,l as f}from"./chunk.AJ3ENQ5C.CWahIKAi.js";import"./holo-identicon.TaizM_pS.js";import{a as g}from"./style-map.DTEisfmL.js";import"./display-error.euNRL-7Q.js";import{x as r,r as u}from"./lit-element.BYH7MJbe.js";import{p as v}from"./context.Bem5hB17.js";import"./agent-avatar.BmnWbJVl.js";import"./range.CeOrHCaV.js";import"./isIterateeCall.CSfPBF3e.js";import"./toFinite.CWHk3G1P.js";import"./isSymbol.XF-DE6V6.js";let s=class extends p(u){getAdditionalFields(e){const t={};for(const[i,n]of Object.entries(e.fields))i!=="avatar"&&(t[i]=n);return t}renderAdditionalField(e,t){return r`
			<div class="column" style="margin-top: 16px">
				<span style="margin-bottom: 8px; ">
					<strong
						>${e.substring(0,1).toUpperCase()}${e.substring(1)}</strong
					></span
				>
				<span>${t}</span>
			</div>
		`}renderProfile(e){return e?r`
			<div class="column">
				<div class="row" style="align-items: center">
					<agent-avatar .agentPubKey=${this.agentPubKey}></agent-avatar>
					<span style="font-size: 16px; margin-left: 8px;"
						>${e.name}</span
					>

					<span style="flex: 1"></span>

					<slot name="action"></slot>
				</div>

				${Object.entries(this.getAdditionalFields(e)).filter(([,t])=>t!=="").map(([t,i])=>this.renderAdditionalField(t,i))}
			</div>
		`:r`<div
				class="column"
				style="align-items: center; justify-content: center; flex: 1;"
			>
				<span class="placeholder"
					>${a("This agent hasn't created a profile yet")}</span
				>
			</div>`}render(){const e=this.profilesProvider.currentProfileForAgent.get(this.agentPubKey).get();switch(e.status){case"pending":return r`
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

						${this.profilesProvider.config.additionalFields.map(()=>r`
								<sl-skeleton
									effect="pulse"
									style="width: 200px; margin-top: 16px;"
								></sl-skeleton>
							`)}
					</div>
				`;case"completed":return this.renderProfile(e.value);case"error":return r`<display-error
					.headline=${a("Error fetching the profile")}
					.error=${e.error}
				></display-error>`}}};s.styles=[d];o([l(g("agent-pub-key"))],s.prototype,"agentPubKey",void 0);o([c({context:v,subscribe:!0}),l()],s.prototype,"profilesProvider",void 0);s=o([f(),m("profile-detail")],s);export{s as ProfileDetail};
