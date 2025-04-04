import{_ as o}from"./tslib.es6.kHcLnhpD.js";import{S as a,s as p,n as s,c as l,t as n}from"./property.BHALj7b8.js";import{a as m,l as f}from"./chunk.AJ3ENQ5C.BFgs73bB.js";import{a as c}from"./style-map.FG-BVvAP.js";import{x as t,r as d}from"./lit-element.CuGozQnE.js";import{p as g}from"./context.EJdwcjoM.js";import"./agent-avatar.Dbvuf-Hx.js";import"./profile-list-item-skeleton.XMTKtiJT.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./holo-identicon.D2LQz_RV.js";import"./display-error.CG6EGJy0.js";let e=class extends a(d){render(){var i;const r=this.profilesProvider.currentProfileForAgent.get(this.agentPubKey).get();switch(r.status){case"pending":return t`<profile-list-item-skeleton></profile-list-item-skeleton>`;case"completed":return t`
					<div class="row" style="align-items: center; gap: 8px">
						<agent-avatar .agentPubKey=${this.agentPubKey}></agent-avatar>
						<span>${(i=r.value)==null?void 0:i.name}</span>
					</div>
				`;case"error":return t`<display-error
					tooltip
					.headline=${m("Error fetching the profile.")}
					.error=${r.error}
				></display-error>`}}};e.styles=[p];o([s(c("agent-pub-key"))],e.prototype,"agentPubKey",void 0);o([l({context:g,subscribe:!0}),s()],e.prototype,"profilesProvider",void 0);e=o([f(),n("profile-list-item")],e);export{e as ProfileListItem};
