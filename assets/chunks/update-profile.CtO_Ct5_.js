import{S as m,s as u,c as d,n as v,t as f}from"./property.DW58LSP5.js";import{a as n,s as h,w as y,l as g,c as $}from"./chunk.AJ3ENQ5C.CWahIKAi.js";import{n as b,o as x}from"./select-avatar.CLUq1RP9.js";import"./chunk.AYM4DUFB.s4vIXNqq.js";import{x as o,i as P,r as w}from"./lit-element.BYH7MJbe.js";import"./chunk.IEJHVVJE.DYJRSEEI.js";import"./display-error.euNRL-7Q.js";import{p as q}from"./context.BsQ5dAI1.js";import"./static.C4gJ75QQ.js";import"./if-defined.mwbAsAHa.js";import"./range.CeOrHCaV.js";import"./isIterateeCall.CSfPBF3e.js";import"./toFinite.CWHk3G1P.js";import"./isSymbol.XF-DE6V6.js";var S=Object.defineProperty,M=Object.getOwnPropertyDescriptor,c=(e,t,s,a)=>{for(var r=a>1?void 0:a?M(t,s):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(r=(a?l(t,s,r):l(r))||r);return a&&r&&S(t,s,r),r};let p=class extends m(w){async updateProfile(e,t){const s=this.shadowRoot.querySelector("sl-button");s.loading=!0;try{const a=t.name;delete t.name;const r=t.avatar;delete t.avatar;const i={fields:t,name:a,avatar:r};await this.store.client.updateProfile(e,i),this.dispatchEvent(new CustomEvent("profile-updated",{detail:{profile:i},bubbles:!0,composed:!0}))}catch(a){b(n("Error updating the profile.")),console.error(a)}s.loading=!1}myProfile(){const e=this.store.myProfile.get();return e.status!=="completed"?e:e.value?e.value.latestVersion.get():{status:"completed",value:void 0}}avatarMode(){return this.store.config.avatarMode==="avatar-required"||this.store.config.avatarMode==="avatar-optional"}renderField(e,t){return o`
			<sl-input
				name="${t.name}"
				.required=${t.required}
				.label=${t.label}
				.value=${e.entry.fields[t.name]||""}
			></sl-input>
		`}renderForm(e){return o`
			<form
				id="profile-form"
				class="column"
				style="gap: 16px; flex: 1"
				${x(t=>this.updateProfile(e.actionHash,t))}
			>
				<div class="row" style="justify-content: center; gap: 16px">
					${this.avatarMode()?o` <select-avatar
								name="avatar"
								.value=${e.entry.avatar||void 0}
								.required=${this.store.config.avatarMode==="avatar-required"}
							></select-avatar>`:o``}

					<sl-input
						name="name"
						.label=${n("Name")}
						required
						minLength="${this.store.config.minNicknameLength}"
						.value=${e.entry.name||""}
						.helpText=${n(h`Min. ${this.store.config.minNicknameLength} characters`)}
						style="flex: 1"
					></sl-input>
				</div>

				${this.store.config.additionalFields.map(t=>this.renderField(e,t))}

				<sl-button variant="primary" type="submit"
					>${n("Update Profile")}
				</sl-button>
			</form>
		`}render(){const e=this.myProfile();switch(e.status){case"pending":return o`<div
					class="column"
					style="align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem"></sl-spinner>
				</div>`;case"completed":return e.value?this.renderForm(e.value):o`<div
						class="column placeholder"
						style="flex: 1; align-items: center; justify-content: center; gap: 16px"
					>
						<sl-icon
							.src=${y($)}
							style="height: 64px; width: 64px;"
						></sl-icon>
						<span>${n("You haven't created a profile yet.")}</span>
					</div>`;case"error":return o`<display-error
					.headline=${n("Error fetching your profile")}
					.error=${e.error}
				></display-error>`}}static get styles(){return[u,P`
				:host {
					display: flex;
				}
			`]}};c([d({context:q,subscribe:!0}),v()],p.prototype,"store",2);p=c([g(),f("update-profile")],p);export{p as UpdateProfile};
