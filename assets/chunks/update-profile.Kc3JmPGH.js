import{S as c,s as m,c as u,n as d,p as y,t as v}from"./context.C3X5h_YG.js";import{m as a,l as h}from"./chunk.3EPZX5HE.C5DcSmWt.js";import"./chunk.EHUQAWJK.CXaVkoM5.js";import"./chunk.5KGB34TL.DAqnK4Te.js";import{x as p,i as P,r as g}from"./lit-element.5UXQ_LNh.js";import{n as x}from"./edit-profile.D0flNjGr.js";import"./display-error.2dck76_Y.js";import"./if-defined.DjkTvaUx.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./static.C1tkqjMX.js";var b=Object.defineProperty,w=Object.getOwnPropertyDescriptor,f=(e,r,o,i)=>{for(var t=i>1?void 0:i?w(r,o):r,s=e.length-1,l;s>=0;s--)(l=e[s])&&(t=(i?l(r,o,t):l(t))||t);return i&&t&&b(r,o,t),t};let n=class extends c(g){async updateProfile(e,r){try{await this.store.client.updateProfile(e,r),this.dispatchEvent(new CustomEvent("profile-updated",{detail:{profile:r},bubbles:!0,composed:!0}))}catch(o){x(a("Error updating the profile.")),console.error(o)}}myProfile(){const e=this.store.myProfile.get();return e.status!=="completed"?e:e.value?e.value.latestVersion.get():{status:"completed",value:void 0}}render(){const e=this.myProfile();switch(e.status){case"pending":return p`<div
					class="column"
					style="align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem"></sl-spinner>
				</div>`;case"completed":return p` <edit-profile
					.allowCancel=${!0}
					style="margin-top: 16px; flex: 1"
					.profile=${e.value}
					.saveProfileLabel=${a("Update Profile")}
					@save-profile=${r=>this.updateProfile(e.value.actionHash,r.detail.profile)}
				></edit-profile>`;case"error":return p`<display-error
					.headline=${a("Error fetching your profile")}
					.error=${e.error}
				></display-error>`}}static get styles(){return[m,P`
				:host {
					display: flex;
				}
			`]}};f([u({context:y,subscribe:!0}),d()],n.prototype,"store",2);n=f([h(),v("update-profile")],n);export{n as UpdateProfile};
