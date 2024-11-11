import{a as _,n as h,t as y,S as L,p as C}from"./context.CWquvt77.js";import{i as f,r as g,x as a,e as R,g as q,H as A}from"./lit-element.BZvyF6on.js";import{_ as c}from"./tslib.es6.kHcLnhpD.js";import{p as B,q as T,c as k,r as x,a as r,w as E,s as j,l as z,A as I}from"./routes.C2u53c7R.js";import"./create-profile.B772Zynq.js";import"./chunk.3HB7VQL2.CbuTjYms.js";import"./chunk.5KGB34TL.B887gycj.js";import"./chunk.EHUQAWJK.CFpv79YY.js";import"./display-error.Dt2FmvDY.js";import"./range.CRHiLbae.js";import"./commonjsHelpers.D6yTTuv9.js";import"./toFinite.CFYyTVp8.js";import"./isSymbol.DnU6SLKZ.js";import"./edit-profile.BoZbO6jm.js";import"./static.DNJ2NJKo.js";import"./if-defined.BNGXSvnv.js";const $=_("linked_devices/store"),S=60*1e3,D=[f`
    .row {
      display: flex;
      flex-direction: row;
    }
    .column {
      display: flex;
      flex-direction: column;
    }
    .small-margin {
      margin-top: 6px;
    }
    .big-margin {
      margin-top: 23px;
    }

    .fill {
      flex: 1;
      height: 100%;
    }

    .title {
      font-size: 20px;
    }

    .center-content {
      align-items: center;
      justify-content: center;
    }

    .placeholder {
      color: var(--sl-color-gray-700);
    }

    .flex-scrollable-parent {
      position: relative;
      display: flex;
      flex: 1;
    }

    .flex-scrollable-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .flex-scrollable-x {
      max-width: 100%;
      overflow-x: auto;
    }
    .flex-scrollable-y {
      max-height: 100%;
      overflow-y: auto;
    }
    :host {
      color: var(--sl-color-neutral-1000);
    }

    sl-card {
      display: flex;
    }
    sl-card::part(base) {
      flex: 1;
    }
    sl-card::part(body) {
      display: flex;
      flex: 1;
    }
    sl-drawer::part(body) {
      display: flex;
    }
  `];function H(s){return`data:image/svg+xml;utf8,${M(s)}`}function M(s){return`<svg style='fill: currentColor' viewBox='0 0 24 24'><path d='${s}'></path></svg>`}function O(s){const e=document.createElement("div");return e.textContent=s,e.innerHTML}function P(s,e="primary",t=B,n=3e3){const i=Object.assign(document.createElement("sl-alert"),{variant:e,closable:!0,duration:n,innerHTML:`
        <sl-icon src="${H(t)}" slot="icon"></sl-icon>
        ${O(s)}
      `});return document.body.append(i),i.toast()}function w(s){return P(s,"danger",T)}let v=class extends g{constructor(){super(...arguments),this.passcodeLength=4}firstUpdated(){setTimeout(()=>{var e;(e=this.shadowRoot.getElementById("input-0"))===null||e===void 0||e.focus()})}get passcode(){const e=Array.from(this.shadowRoot.querySelectorAll("sl-input")),t=Array.from(Array(this.passcodeLength)).map(()=>{});for(let n=0;n<e.length;n++){if(e[n].value==="")return;const i=parseInt(e[n].value,10);if(i>9)return;t[n]=i}return t}clearPasscode(){Array.from(this.shadowRoot.querySelectorAll("sl-input")).forEach(t=>t.value=""),setTimeout(()=>{var t;(t=this.shadowRoot.getElementById("input-0"))===null||t===void 0||t.focus()})}maybeDispatchEvent(){const e=this.passcode;e&&this.dispatchEvent(new CustomEvent("passcode-change",{bubbles:!0,composed:!0,detail:{passcode:e}}))}render(){return a`
			<div class="row">
				${Array.from(Array(this.passcodeLength)).map((e,t)=>a`<sl-input
							id="input-${t}"
							min="0"
							max="9"
							style="width: 4em"
							size="large"
							@keydown=${n=>{if(n.key==="Backspace"){if(n.target.value===""){const o=this.shadowRoot.getElementById(`input-${t-1}`);o&&(o.value=""),setTimeout(()=>{const l=this.shadowRoot.getElementById(`input-${t-1}`);l&&l.focus()})}this.maybeDispatchEvent()}}}
							@sl-input=${n=>{const i=n.target;if(!i.value.match(/^[0-9]$/g)){i.value="";return}const o=this.shadowRoot.getElementById(`input-${t+1}`);o&&o.focus(),this.maybeDispatchEvent()}}
						></sl-input>`)}
			</div>
		`}};v.styles=[D,f`
			sl-input::part(input) {
				text-align: center;
			}
		`];c([h()],v.prototype,"passcodeLength",void 0);v=c([y("passcode-input")],v);function N(){return Math.floor(Math.random()*10)}function m(s){const e=[];for(let t=0;t<s;t++)e.push(N());return e}let p=class extends L(g){constructor(){super(...arguments),this.recipientPasscode=[]}async firstUpdated(){this.recipientPasscode=m(this.store.config.linkDevicePasscodeLength),this.interval=setInterval(async()=>{this.recipientPasscode=m(this.store.config.linkDevicePasscodeLength),await this.store.client.clearLinkDevices(),await this.store.client.prepareLinkDevices(this.recipientPasscode)},S),await this.store.client.prepareLinkDevices(this.recipientPasscode),this.store.client.onSignal(e=>{"type"in e&&e.type==="LinkDevicesInitialized"&&(this.initializedLinkDevicesByRequestor=e.requestor)})}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.interval),this.store.client.clearLinkDevices()}async attemptLinkAgent(e,t){try{await this.store.client.requestLinkDevices(e,t),this.dispatchEvent(new CustomEvent("device-linked",{bubbles:!0,composed:!0,detail:{agentPubKey:e}})),P(r("Device linked successfully"))}catch(n){console.error(n),w(r("Incorrect passcode"))}this.shadowRoot.querySelector("passcode-input").clearPasscode()}renderRequestLinkAgent(e){return a`
			<div
				class="column"
				style="gap: 12px; align-items: center; justify-content: center; flex: 1"
			>
				<span class="title">${r("Device link request received")} </span>
				<span>${r("Enter the pass code from your other device:")} </span>
				<passcode-input
					.passcodeLength=${this.store.config.linkDevicePasscodeLength}
					@passcode-change=${t=>this.attemptLinkAgent(e,t.detail.passcode)}
				>
				</passcode-input>
			</div>
		`}render(){return this.initializedLinkDevicesByRequestor?this.renderRequestLinkAgent(this.initializedLinkDevicesByRequestor):a`<div
			class="column"
			style="gap: 12px; align-items: center; justify-content: center; flex: 1"
		>
			<span
				>${r("Enter this pass code in your other device (valid for one minute):")}
			</span>
			<span class="passcode">${this.recipientPasscode.join("")}</span>
		</div>`}};p.styles=[D,f`
			:host {
				display: flex;
				justify-content: center;
			}
			.passcode {
				font-family: Monospace, sans-serif;
				letter-spacing: 0.2rem;
				font-size: 3em;
			}
		`];c([k({context:$,subscribe:!0}),h()],p.prototype,"store",void 0);c([x()],p.prototype,"recipientPasscode",void 0);c([x()],p.prototype,"initializedLinkDevicesByRequestor",void 0);p=c([y("link-devices-recipient")],p);let u=class extends L(g){async firstUpdated(){setTimeout(()=>{var e;(e=this.shadowRoot.getElementById("input-0"))===null||e===void 0||e.focus()}),this.store.client.onSignal(e=>{this.successfulRecipient&&(e.type!=="LinkCreated"||e.link_type!=="AgentToLinkedDevices"||R(q(e.action.hashed.content.target_address,A.AGENT))===R(this.successfulRecipient)&&(this.dispatchEvent(new CustomEvent("device-linked",{bubbles:!0,composed:!0,detail:{agentPubKey:this.successfulRecipient}})),P(r("Device linked successfully"))))})}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.interval),this.store.client.clearLinkDevices()}async maybeRequestLink(e){const n=(await this.store.client.getLinkingAgents()).map(i=>q(i.target,A.AGENT));for(const i of n)try{await this.store.client.initLinkDevices(i,e),this.requestorpasscode=m(this.store.config.linkDevicePasscodeLength),await this.store.client.prepareLinkDevices(this.requestorpasscode),this.interval=setInterval(async()=>{this.requestorpasscode=m(this.store.config.linkDevicePasscodeLength),await this.store.client.clearLinkDevices(),await this.store.client.prepareLinkDevices(this.requestorpasscode)},S),this.successfulRecipient=i}catch(o){console.error(o),o.toString().includes("Unauthorized")||(w(r("Error linking devices: please try again")),this.shadowRoot.querySelector("passcode-input").clearPasscode())}this.successfulRecipient||(w(r("Incorrect pass code")),this.shadowRoot.querySelector("passcode-input").clearPasscode())}renderNumber(){return a`<div
			class="column"
			style="gap: 12px; align-items: center; justify-content: center; flex: 1"
		>
			<span>${r("Enter this pass code in your other device:")} </span>
			<span class="passcode">${this.requestorpasscode.join("")}</span>
		</div>`}render(){return this.successfulRecipient?this.renderNumber():a`
			<div
				class="column"
				style="gap: 12px; align-items: center; justify-content: center; flex: 1"
			>
				<span>${r("Enter the pass code from your other device:")} </span>
				<passcode-input
					.passcodeLength=${this.store.config.linkDevicePasscodeLength}
					@passcode-change=${e=>this.maybeRequestLink(e.detail.passcode)}
				>
				</passcode-input>
			</div>
		`}};u.styles=[D,f`
			.passcode {
				font-family: Monospace, sans-serif;
				letter-spacing: 0.2rem;
				font-size: 3em;
			}
		`];c([k({context:$,subscribe:!0}),h()],u.prototype,"store",void 0);c([x()],u.prototype,"successfulRecipient",void 0);u=c([y("link-devices-requestor")],u);var U=Object.defineProperty,F=Object.getOwnPropertyDescriptor,b=(s,e,t,n)=>{for(var i=n>1?void 0:n?F(e,t):e,o=s.length-1,l;o>=0;o--)(l=s[o])&&(i=(n?l(e,t,i):l(i))||i);return n&&i&&U(e,t,i),i};let d=class extends L(g){constructor(){super(...arguments),this.view="question"}renderContent(){return this.linkedDevicesStore?this.view==="create-profile"?a`
				<div class="column" style="align-items: start">
					<sl-button
						variant="text"
						@click=${()=>{this.view="question"}}
						style="margin-bottom: 12px"
					>
						<sl-icon
							slot="prefix"
							.src=${E(I)}
						></sl-icon>
						${r("Back")}</sl-button
					>
					<create-profile></create-profile>
				</div>
			`:this.view==="link-device"?a` <div class="column" style="align-items: start">
				<sl-button
					variant="text"
					@click=${()=>{this.view="question"}}
					style="margin-bottom: 12px"
				>
					<sl-icon slot="prefix" .src=${E(I)}></sl-icon>
					${r("Back")}</sl-button
				>
				<link-devices-requestor
					@device-linked=${async s=>{const e=s.detail.agentPubKey,t=await this.store.client.getProfileForAgent(e);if(t.length>0){const i=t.sort((o,l)=>l.timestamp-o.timestamp)[0].target;await this.store.client.linkMyAgentToProfile(i)}}}
				></link-devices-requestor>
			</div>`:a`
			<sl-card>
				<div class="column" style="gap: 12px">
					<span class="title"> ${r("Profile Setup")} </span>
					<span>
						${r("Have you already created a profile in this app?")}
					</span>

					<div class="row" style="gap: 12px">
						<sl-button @click=${()=>this.view="create-profile"}
							>${r("No, create a new profile")}
						</sl-button>
						<sl-button
							variant="primary"
							@click=${()=>this.view="link-device"}
							>${r("Yes! Link this device")}
						</sl-button>
					</div>
				</div>
			</sl-card>
		`:a` <create-profile></create-profile> `}renderPrompt(s){return s?a`<slot></slot>`:a`
			<div
				class="column"
				style="align-items: center; justify-content: center; flex: 1; padding-bottom: 10px;"
			>
				<div class="column" style="align-items: center;">
					<slot name="hero"></slot>
					${this.renderContent()}
				</div>
			</div>
		`}render(){const s=this.store.myProfile.get();switch(s.status){case"pending":return a`<div
					class="row"
					style="flex: 1; justify-content: center; align-items: center"
				>
					<sl-spinner style="font-size: 2rem"></sl-spinner>
				</div>`;case"error":return a`<display-error
					.headline=${r("Error fetching your profile.")}
					.error=${s.error}
				></display-error>`;case"completed":return this.renderPrompt(s.value!==void 0)}}};d.styles=[j,f`
			:host {
				display: flex;
				flex: 1;
			}
		`];b([k({context:C,subscribe:!0}),h()],d.prototype,"store",2);b([k({context:$,subscribe:!0}),h()],d.prototype,"linkedDevicesStore",2);b([x()],d.prototype,"view",2);d=b([z(),y("profile-prompt")],d);export{d as ProfilePrompt};
