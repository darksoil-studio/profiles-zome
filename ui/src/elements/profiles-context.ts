import { AppClient } from '@holochain/client';
import { consume, provide } from '@lit/context';
import { appClientContext } from '@tnesh-stack/elements';
import { SignalWatcher } from '@tnesh-stack/signals';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { profilesStoreContext } from '../context.js';
import { ProfilesClient } from '../profiles-client.js';
import { ProfilesStore } from '../profiles-store.js';

@customElement('profiles-context')
export class ProfilesContext extends SignalWatcher(LitElement) {
	@provide({ context: profilesStoreContext })
	@property({ type: Object })
	store!: ProfilesStore;

	@consume({ context: appClientContext, subscribe: true })
	client!: AppClient;

	@property()
	role!: string;

	@property()
	zome = 'profiles';

	connectedCallback() {
		super.connectedCallback();
		if (this.store) return;
		if (!this.role) {
			throw new Error(
				`<profiles-context> must have a role="YOUR_DNA_ROLE" property, eg: <profiles-context role="role1">`,
			);
		}
		if (!this.client) {
			throw new Error(
				`<profiles-context> must either:
				a) be placed inside <app-client-context>
					or 
				b) receive an AppClient property (eg. <profiles-context .client=\${client}>) 
					or 
				c) receive a store property (eg. <profiles-context .store=\${store}>)`,
			);
		}
		this.store = new ProfilesStore(
			new ProfilesClient(this.client, this.role, this.zome),
		);
	}

	render() {
		return html`<slot></slot>`;
	}

	static styles = css`
		:host {
			display: contents;
		}
	`;
}
