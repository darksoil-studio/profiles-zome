import{S as u,s as m,c,n as d,p as v,t as y}from"./context.DjmyCDNo.js";import{a as n,l as P}from"./chunk.3EPZX5HE.Di75AIhZ.js";import"./chunk.EHUQAWJK.1xE-PDaP.js";import"./chunk.5KGB34TL.BQU-5FUs.js";import{x as a,i as h,r as g}from"./lit-element.DlPO3IHk.js";import"./display-error.YjPgTlrJ.js";import"./edit-profile.DFArlDSL.js";import"./if-defined.DksOYQzp.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./static.BJ1mINyk.js";var x=Object.defineProperty,b=Object.getOwnPropertyDescriptor,f=(e,r,i,o)=>{for(var t=o>1?void 0:o?b(r,i):r,s=e.length-1,l;s>=0;s--)(l=e[s])&&(t=(o?l(r,i,t):l(t))||t);return o&&t&&x(r,i,t),t};let p=class extends u(g){async updateProfile(e,r){await this.store.client.updateProfile(e,r),this.dispatchEvent(new CustomEvent("profile-updated",{detail:{profile:r},bubbles:!0,composed:!0}))}myProfile(){const e=this.store.myProfile.get();return e.status!=="completed"?e:e.value?e.value.latestVersion.get():{status:"completed",value:void 0}}render(){const e=this.myProfile();switch(e.status){case"pending":return a`<div
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
				></display-error>`}}static get styles(){return[m,h`
				:host {
					display: flex;
				}
			`]}};f([c({context:v,subscribe:!0}),d()],p.prototype,"store",2);p=f([P(),y("update-profile")],p);export{p as UpdateProfile};
