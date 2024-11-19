import{b as S,s as m,n as h,t as y,c as g,S as P,p as B}from"./context.DjmyCDNo.js";import{i as k,r as L,x as c,e as $,f as R,H as q}from"./lit-element.DlPO3IHk.js";import{_ as a}from"./tslib.es6.kHcLnhpD.js";import{r as b,a as n,w as A,l as C,h as E}from"./chunk.3EPZX5HE.BXys8FbU.js";import"./create-profile.D8W95q5y.js";import"./chunk.3HB7VQL2.OEG-58U8.js";import{a as I,n as D}from"./edit-profile.C8-9731P.js";import"./chunk.5KGB34TL.B0QFkn-N.js";import"./chunk.EHUQAWJK.C8ABczNb.js";import"./display-error.ILZb7JAF.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./static.BJ1mINyk.js";import"./if-defined.DksOYQzp.js";const x=S("linked_devices/store"),_=60*1e3;let v=class extends L{constructor(){super(...arguments),this.passcodeLength=4}firstUpdated(){setTimeout(()=>{var e;(e=this.shadowRoot.getElementById("input-0"))===null||e===void 0||e.focus()})}get passcode(){const e=Array.from(this.shadowRoot.querySelectorAll("sl-input")),t=Array.from(Array(this.passcodeLength)).map(()=>{});for(let i=0;i<e.length;i++){if(e[i].value==="")return;const s=parseInt(e[i].value,10);if(s>9)return;t[i]=s}return t}clearPasscode(){Array.from(this.shadowRoot.querySelectorAll("sl-input")).forEach(t=>t.value=""),setTimeout(()=>{var t;(t=this.shadowRoot.getElementById("input-0"))===null||t===void 0||t.focus()})}maybeDispatchEvent(){const e=this.passcode;e&&this.dispatchEvent(new CustomEvent("passcode-change",{bubbles:!0,composed:!0,detail:{passcode:e}}))}render(){return c`
			<div class="row">
				${Array.from(Array(this.passcodeLength)).map((e,t)=>c`<sl-input
							id="input-${t}"
							min="0"
							max="9"
							style="width: 4em"
							size="large"
							@keydown=${i=>{if(i.key==="Backspace"){if(i.target.value===""){const o=this.shadowRoot.getElementById(`input-${t-1}`);o&&(o.value=""),setTimeout(()=>{const l=this.shadowRoot.getElementById(`input-${t-1}`);l&&l.focus()})}this.maybeDispatchEvent()}}}
							@sl-input=${i=>{const s=i.target;if(!s.value.match(/^[0-9]$/g)){s.value="";return}const o=this.shadowRoot.getElementById(`input-${t+1}`);o&&o.focus(),this.maybeDispatchEvent()}}
						></sl-input>`)}
			</div>
		`}};v.styles=[m,k`
			sl-input::part(input) {
				text-align: center;
			}
		`];a([h()],v.prototype,"passcodeLength",void 0);v=a([y("passcode-input")],v);function T(){return Math.floor(Math.random()*10)}function f(r){const e=[];for(let t=0;t<r;t++)e.push(T());return e}let p=class extends P(L){constructor(){super(...arguments),this.recipientPasscode=[]}async firstUpdated(){this.recipientPasscode=f(this.store.config.linkDevicePasscodeLength),this.interval=setInterval(async()=>{this.recipientPasscode=f(this.store.config.linkDevicePasscodeLength),await this.store.client.clearLinkDevices(),await this.store.client.prepareLinkDevices(this.recipientPasscode)},_),await this.store.client.prepareLinkDevices(this.recipientPasscode),this.store.client.onSignal(e=>{"type"in e&&e.type==="LinkDevicesInitialized"&&(this.initializedLinkDevicesByRequestor=e.requestor)})}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.interval),this.store.client.clearLinkDevices()}async attemptLinkAgent(e,t){try{await this.store.client.requestLinkDevices(e,t),this.dispatchEvent(new CustomEvent("device-linked",{bubbles:!0,composed:!0,detail:{agentPubKey:e}})),I(n("Device linked successfully"))}catch(i){console.error(i),D(n("Incorrect passcode"))}this.shadowRoot.querySelector("passcode-input").clearPasscode()}renderRequestLinkAgent(e){return c`
			<div
				class="column"
				style="gap: 12px; align-items: center; justify-content: center; flex: 1"
			>
				<span class="title">${n("Device link request received")} </span>
				<span>${n("Enter the pass code from your other device:")} </span>
				<passcode-input
					.passcodeLength=${this.store.config.linkDevicePasscodeLength}
					@passcode-change=${t=>this.attemptLinkAgent(e,t.detail.passcode)}
				>
				</passcode-input>
			</div>
		`}render(){return this.initializedLinkDevicesByRequestor?this.renderRequestLinkAgent(this.initializedLinkDevicesByRequestor):c`<div
			class="column"
			style="gap: 12px; align-items: center; justify-content: center; flex: 1"
		>
			<span
				>${n("Enter this pass code in your other device (valid for one minute):")}
			</span>
			<span class="passcode">${this.recipientPasscode.join("")}</span>
		</div>`}};p.styles=[m,k`
			:host {
				display: flex;
				justify-content: center;
			}
			.passcode {
				font-family: Monospace, sans-serif;
				letter-spacing: 0.2rem;
				font-size: 3em;
			}
		`];a([g({context:x,subscribe:!0}),h()],p.prototype,"store",void 0);a([b()],p.prototype,"recipientPasscode",void 0);a([b()],p.prototype,"initializedLinkDevicesByRequestor",void 0);p=a([y("link-device-recipient")],p);let u=class extends P(L){async firstUpdated(){setTimeout(()=>{var e;(e=this.shadowRoot.getElementById("input-0"))===null||e===void 0||e.focus()}),this.store.client.onSignal(e=>{this.successfulRecipient&&(e.type!=="LinkCreated"||e.link_type!=="AgentToLinkedDevices"||$(R(e.action.hashed.content.target_address,q.AGENT))===$(this.successfulRecipient)&&(this.dispatchEvent(new CustomEvent("device-linked",{bubbles:!0,composed:!0,detail:{agentPubKey:this.successfulRecipient}})),I(n("Device linked successfully"))))})}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.interval),this.store.client.clearLinkDevices()}async maybeRequestLink(e){const i=(await this.store.client.getLinkingAgents()).map(s=>R(s.target,q.AGENT));for(const s of i)try{await this.store.client.initLinkDevices(s,e),this.requestorpasscode=f(this.store.config.linkDevicePasscodeLength),await this.store.client.prepareLinkDevices(this.requestorpasscode),this.interval=setInterval(async()=>{this.requestorpasscode=f(this.store.config.linkDevicePasscodeLength),await this.store.client.clearLinkDevices(),await this.store.client.prepareLinkDevices(this.requestorpasscode)},_),this.successfulRecipient=s}catch(o){console.error(o),o.toString().includes("Unauthorized")||(D(n("Error linking devices: please try again")),this.shadowRoot.querySelector("passcode-input").clearPasscode())}this.successfulRecipient||(D(n("Incorrect pass code")),this.shadowRoot.querySelector("passcode-input").clearPasscode())}renderNumber(){return c`<div
			class="column"
			style="gap: 12px; align-items: center; justify-content: center; flex: 1"
		>
			<span>${n("Enter this pass code in your other device:")} </span>
			<span class="passcode">${this.requestorpasscode.join("")}</span>
		</div>`}render(){return this.successfulRecipient?this.renderNumber():c`
			<div
				class="column"
				style="gap: 12px; align-items: center; justify-content: center; flex: 1"
			>
				<span>${n("Enter the pass code from your other device:")} </span>
				<passcode-input
					.passcodeLength=${this.store.config.linkDevicePasscodeLength}
					@passcode-change=${e=>this.maybeRequestLink(e.detail.passcode)}
				>
				</passcode-input>
			</div>
		`}};u.styles=[m,k`
			.passcode {
				font-family: Monospace, sans-serif;
				letter-spacing: 0.2rem;
				font-size: 3em;
			}
		`];a([g({context:x,subscribe:!0}),h()],u.prototype,"store",void 0);a([b()],u.prototype,"successfulRecipient",void 0);u=a([y("link-device-requestor")],u);var j=Object.defineProperty,z=Object.getOwnPropertyDescriptor,w=(r,e,t,i)=>{for(var s=i>1?void 0:i?z(e,t):e,o=r.length-1,l;o>=0;o--)(l=r[o])&&(s=(i?l(e,t,s):l(s))||s);return i&&s&&j(e,t,s),s};let d=class extends P(L){constructor(){super(...arguments),this.view="question"}renderContent(){return this.linkedDevicesStore?this.view==="create-profile"?c`
				<div class="column" style="align-items: start">
					<sl-button
						variant="text"
						@click=${()=>{this.view="question"}}
						style="margin-bottom: 12px"
					>
						<sl-icon
							slot="prefix"
							.src=${A(E)}
						></sl-icon>
						${n("Back")}</sl-button
					>
					<create-profile></create-profile>
				</div>
			`:this.view==="link-device"?c` <div class="column" style="align-items: start">
				<sl-button
					variant="text"
					@click=${()=>{this.view="question"}}
					style="margin-bottom: 12px"
				>
					<sl-icon slot="prefix" .src=${A(E)}></sl-icon>
					${n("Back")}</sl-button
				>
				<link-device-requestor
					@device-linked=${async r=>{const e=r.detail.agentPubKey,t=await this.store.client.getProfileForAgent(e);if(t.length>0){const s=t.sort((o,l)=>l.timestamp-o.timestamp)[0].target;await this.store.client.linkMyAgentToProfile(s)}}}
				></link-device-requestor>
			</div>`:c`
			<sl-card>
				<div class="column" style="gap: 12px">
					<span class="title"> ${n("Profile Setup")} </span>
					<span>
						${n("Have you already created a profile in this app?")}
					</span>

					<div class="row" style="gap: 12px">
						<sl-button @click=${()=>this.view="create-profile"}
							>${n("No, create a new profile")}
						</sl-button>
						<sl-button
							variant="primary"
							@click=${()=>this.view="link-device"}
							>${n("Yes! Link this device")}
						</sl-button>
					</div>
				</div>
			</sl-card>
		`:c` <create-profile></create-profile> `}renderPrompt(r){return r?c`<slot></slot>`:c`
			<div
				class="column"
				style="align-items: center; justify-content: center; flex: 1; padding-bottom: 10px;"
			>
				<div class="column" style="align-items: center;">
					<slot name="hero"></slot>
					${this.renderContent()}
				</div>
			</div>
		`}render(){const r=this.store.myProfile.get();switch(r.status){case"pending":return c`<div
					class="row"
					style="flex: 1; justify-content: center; align-items: center"
				>
					<sl-spinner style="font-size: 2rem"></sl-spinner>
				</div>`;case"error":return c`<display-error
					.headline=${n("Error fetching your profile.")}
					.error=${r.error}
				></display-error>`;case"completed":return this.renderPrompt(r.value!==void 0)}}};d.styles=[m,k`
			:host {
				display: flex;
				flex: 1;
			}
		`];w([g({context:B,subscribe:!0}),h()],d.prototype,"store",2);w([g({context:x,subscribe:!0}),h()],d.prototype,"linkedDevicesStore",2);w([b()],d.prototype,"view",2);d=w([C(),y("profile-prompt")],d);export{d as ProfilePrompt};
