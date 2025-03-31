import{_ as i}from"./tslib.es6.kHcLnhpD.js";import{S as a,s as p,n as s,c as l,t as n}from"./property.BN7dYdg1.js";import{m,l as d}from"./chunk.AJ3ENQ5C.vwbyVPfY.js";import{h as f}from"./style-map.HzHOOz7V.js";import{x as o,r as c}from"./lit-element.B42_yqfG.js";import{p as g}from"./context.CATpzCsC.js";import"./agent-avatar.Cln46BFC.js";import"./profile-list-item-skeleton.CjOuhNWV.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./holo-identicon.B4UZPcCe.js";import"./display-error.BW76oNwW.js";let e=class extends a(c){render(){var r;const t=this.profilesProvider.currentProfileForAgent.get(this.agentPubKey).get();switch(t.status){case"pending":return o`<profile-list-item-skeleton></profile-list-item-skeleton>`;case"completed":return o`
					<div class="row" style="align-items: center; gap: 8px">
						<agent-avatar .agentPubKey=${this.agentPubKey}></agent-avatar>
						<span>${(r=t.value)===null||r===void 0?void 0:r.name}</span>
					</div>
				`;case"error":return o`<display-error
					tooltip
					.headline=${m("Error fetching the profile.")}
					.error=${t.error}
				></display-error>`}}};e.styles=[p];i([s(f("agent-pub-key"))],e.prototype,"agentPubKey",void 0);i([l({context:g,subscribe:!0}),s()],e.prototype,"profilesProvider",void 0);e=i([d(),n("profile-list-item")],e);export{e as ProfileListItem};
