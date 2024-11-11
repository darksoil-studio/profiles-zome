import{a as n,s as u,c as m,l as c}from"./routes.BYIrb7eu.js";import"./chunk.EHUQAWJK.eplQVy3s.js";import"./chunk.5KGB34TL.CMxz4LLm.js";import{x as a,i as d,r as v}from"./lit-element.C4EVzn6y.js";import"./display-error.yIKwlQGE.js";import{S as y,n as P,p as h,t as g}from"./context.Cbfo6AYk.js";import"./edit-profile.Cg6hscaT.js";import"./if-defined.CvF0r0fY.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./static.BbNfH_Y1.js";var x=Object.defineProperty,b=Object.getOwnPropertyDescriptor,f=(e,r,i,o)=>{for(var t=o>1?void 0:o?b(r,i):r,s=e.length-1,l;s>=0;s--)(l=e[s])&&(t=(o?l(r,i,t):l(t))||t);return o&&t&&x(r,i,t),t};let p=class extends y(v){async updateProfile(e,r){await this.store.client.updateProfile(e,r),this.dispatchEvent(new CustomEvent("profile-updated",{detail:{profile:r},bubbles:!0,composed:!0}))}myProfile(){const e=this.store.myProfile.get();return e.status!=="completed"?e:e.value?e.value.latestVersion.get():{status:"completed",value:void 0}}render(){const e=this.myProfile();switch(e.status){case"pending":return a`<div
					class="column"
					style="align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem"></sl-spinner>
				</div>`;case"completed":return a` <edit-profile
					.allowCancel=${!0}
					style="margin-top: 16px; flex: 1"
					.profile=${e.value}
					.saveProfileLabel=${n("Update Profile")}
					@save-profile=${r=>this.updateProfile(e.value.actionHash,r.detail.profile)}
				></edit-profile>`;case"error":return a`<display-error
					.headline=${n("Error fetching your profile")}
					.error=${e.error}
				></display-error>`}}static get styles(){return[u,d`
				:host {
					display: flex;
				}
			`]}};f([m({context:h,subscribe:!0}),P()],p.prototype,"store",2);p=f([c(),g("update-profile")],p);export{p as UpdateProfile};
