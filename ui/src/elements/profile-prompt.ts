import {
	LinkedDevicesStore,
	linkedDevicesStoreContext,
} from '@darksoil-studio/linked-devices-zome';
import '@darksoil-studio/linked-devices-zome/dist/elements/link-devices-requestor.js';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import { mdiArrowLeft } from '@mdi/js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import { sharedStyles, wrapPathInSvg } from '@tnesh-stack/elements';
import '@tnesh-stack/elements/dist/elements/display-error.js';
import { SignalWatcher } from '@tnesh-stack/signals';
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { profilesStoreContext } from '../context.js';
import { ProfilesStore } from '../profiles-store.js';
import './create-profile.js';

/**
 * @element profile-prompt
 * @slot default - The content of the app
 * @slot hero - Will be displayed above the create-profile form when the user is prompted with it
 */
@localized()
@customElement('profile-prompt')
export class ProfilePrompt extends SignalWatcher(LitElement) {
	/**
	 * Profiles store for this element, not required if you embed this element inside a `<profiles-context>`
	 */
	@consume({ context: profilesStoreContext, subscribe: true })
	@property()
	store!: ProfilesStore;

	/**
	 * @internal
	 */
	@consume({ context: linkedDevicesStoreContext, subscribe: true })
	@property()
	linkedDevicesStore: LinkedDevicesStore | undefined;

	/** Private properties */

	@state()
	private view: 'question' | 'create-profile' | 'link-device' = 'question';

	private renderContent() {
		if (!this.linkedDevicesStore) {
			return html` <create-profile></create-profile> `;
		}

		if (this.view === 'create-profile')
			return html`
				<div class="column" style="align-items: start">
					<sl-button
						variant="text"
						@click=${() => {
							this.view = 'question';
						}}
						style="margin-bottom: 12px"
					>
						<sl-icon
							slot="prefix"
							.src=${wrapPathInSvg(mdiArrowLeft)}
						></sl-icon>
						${msg('Back')}</sl-button
					>
					<create-profile></create-profile>
				</div>
			`;
		if (this.view === 'link-device')
			return html` <div class="column" style="align-items: start">
				<sl-button
					variant="text"
					@click=${() => {
						this.view = 'question';
					}}
					style="margin-bottom: 12px"
				>
					<sl-icon slot="prefix" .src=${wrapPathInSvg(mdiArrowLeft)}></sl-icon>
					${msg('Back')}</sl-button
				>
				<link-devices-requestor
					@device-linked=${async (e: CustomEvent) => {
						const linkedDevice = e.detail.agentPubKey;

						const profileForLinkedDeviceLinks =
							await this.store.client.getProfileForAgent(linkedDevice);

						if (profileForLinkedDeviceLinks.length > 0) {
							const latestLink = profileForLinkedDeviceLinks.sort(
								(l1, l2) => l2.timestamp - l1.timestamp,
							)[0];
							const profileForLinkedDevice = latestLink.target;
							await this.store.client.linkMyAgentToProfile(
								profileForLinkedDevice,
							);
						}
					}}
				></link-devices-requestor>
			</div>`;

		return html`
			<sl-card>
				<div class="column" style="gap: 12px">
					<span class="title"> ${msg('Profile Setup')} </span>
					<span>
						${msg('Have you already created a profile in this app?')}
					</span>

					<div class="row" style="gap: 12px">
						<sl-button @click=${() => (this.view = 'create-profile')}
							>${msg('No, create a new profile')}
						</sl-button>
						<sl-button
							variant="primary"
							@click=${() => (this.view = 'link-device')}
							>${msg('Yes! Link this device')}
						</sl-button>
					</div>
				</div>
			</sl-card>
		`;
	}

	private renderPrompt(myProfileExists: boolean) {
		if (myProfileExists) return html`<slot></slot>`;

		return html`
			<div
				class="column"
				style="align-items: center; justify-content: center; flex: 1; padding-bottom: 10px;"
			>
				<div class="column" style="align-items: center;">
					<slot name="hero"></slot>
					${this.renderContent()}
				</div>
			</div>
		`;
	}

	render() {
		const myProfile = this.store.myProfile.get();

		switch (myProfile.status) {
			case 'pending':
				return html`<div
					class="row"
					style="flex: 1; justify-content: center; align-items: center"
				>
					<sl-spinner style="font-size: 2rem"></sl-spinner>
				</div>`;
			case 'error':
				return html`<display-error
					.headline=${msg('Error fetching your profile.')}
					.error=${myProfile.error}
				></display-error>`;
			case 'completed':
				return this.renderPrompt(myProfile.value !== undefined);
		}
	}

	static styles = [
		sharedStyles,
		css`
			:host {
				display: flex;
				flex: 1;
			}
		`,
	];
}
