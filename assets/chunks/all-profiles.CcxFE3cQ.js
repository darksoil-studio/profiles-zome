import{S as c,s as f,c as d,n as u,p as v,t as h}from"./context.C3X5h_YG.js";import{x as i,m as g,i as y,r as P}from"./lit-element.5UXQ_LNh.js";import"./display-error.2dck76_Y.js";import{j as x}from"./join-map.BVp59qhV.js";import{m as p,l as b}from"./chunk.3EPZX5HE.C5DcSmWt.js";import"./agent-avatar.Durc47Oq.js";import"./profile-list-item-skeleton.5o9T4hRj.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./style-map.CnbC7GLw.js";var $=Object.defineProperty,w=Object.getOwnPropertyDescriptor,m=(e,t,r,l)=>{for(var s=l>1?void 0:l?w(t,r):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(s=(l?n(t,r,s):n(s))||s);return l&&s&&$(t,r,s),s};let o=class extends c(P){initials(e){return e.split(" ").map(t=>t[0]).join("")}fireAgentSelected(e){e&&this.dispatchEvent(new CustomEvent("profile-selected",{bubbles:!0,composed:!0,detail:{profileHash:e}}))}renderList(e){return e.size===0?i`<span>${p("There are no created profiles yet")} ></span>`:i`
			<div style="min-width: 80px; flex: 1;" }>
				${Array.from(e.entries()).map(([t,r])=>i`
						<div
							class="row"
							style="align-items: center; margin-bottom: 16px; gap: 8px"
						>
							<agent-avatar
								.profileHash=${t}
								@click=${()=>this.fireAgentSelected(t)}
							>
							</agent-avatar
							><span> ${r==null?void 0:r.entry.nickname}</span>
						</div>
					`)}
			</div>
		`}allProfiles(){const e=this.store.allProfiles.get();return e.status!=="completed"?e:x(g(e.value,r=>r.latestVersion.get()))}render(){const e=this.allProfiles();switch(e.status){case"pending":return i`<div class="column center-content">
					<profile-list-item-skeleton> </profile-list-item-skeleton>
					<profile-list-item-skeleton> </profile-list-item-skeleton>
					<profile-list-item-skeleton> </profile-list-item-skeleton>
				</div>`;case"error":return i`<display-error
					.headline=${p("Error fetching the profiles for all agents")}
					.error=${e.error}
				></display-error>`;case"completed":return this.renderList(e.value)}}};o.styles=[f,y`
			:host {
				display: flex;
			}
		`];m([d({context:v,subscribe:!0}),u()],o.prototype,"store",2);o=m([b(),h("all-profiles")],o);export{o as AllProfiles};
