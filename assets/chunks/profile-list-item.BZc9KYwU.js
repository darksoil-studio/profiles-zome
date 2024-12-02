import{S as m,s as u,n as f,c as g,p as c,t as v}from"./context.DjmyCDNo.js";import{a as y,l as d}from"./chunk.3EPZX5HE.BXys8FbU.js";import{a as h}from"./style-map.BkYQTBpM.js";import{x as n,r as P}from"./lit-element.DlPO3IHk.js";import"./agent-avatar.C25awtFW.js";import"./profile-list-item-skeleton.D56HKk89.js";import"./display-error.ILZb7JAF.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";var b=Object.defineProperty,w=Object.getOwnPropertyDescriptor,i=(e,t,a,s)=>{for(var r=s>1?void 0:s?w(t,a):t,l=e.length-1,p;l>=0;l--)(p=e[l])&&(r=(s?p(t,a,r):p(r))||r);return s&&r&&b(t,a,r),r};let o=class extends m(P){profile(){if(this.profileHash)return this.store.profiles.get(this.profileHash).latestVersion.get();if(this.agentPubKey){const e=this.store.profileForAgent.get(this.agentPubKey).get();return e.status!=="completed"?e:e.value===void 0?{status:"completed",value:void 0}:e.value.latestVersion.get()}else throw new Error("Either agentPubKey or profileHash needs to be defined for the agent-avatar element")}render(){var t;const e=this.profile();switch(e.status){case"pending":return n`<profile-list-item-skeleton></profile-list-item-skeleton>`;case"completed":return n`
					<div class="row" style="align-items: center; gap: 8px">
						<agent-avatar
							.profileHash=${this.profileHash}
							.agentPubKey=${this.agentPubKey}
						></agent-avatar>
						<span>${(t=e.value)==null?void 0:t.entry.nickname}</span>
					</div>
				`;case"error":return n`<display-error
					tooltip
					.headline=${y("Error fetching the profile")}
					.error=${e.error}
				></display-error>`}}};o.styles=[u];i([f(h("agent-pub-key"))],o.prototype,"agentPubKey",2);i([f(h("profile-hash"))],o.prototype,"profileHash",2);i([g({context:c,subscribe:!0}),f()],o.prototype,"store",2);o=i([d(),v("profile-list-item")],o);export{o as ProfileListItem};
