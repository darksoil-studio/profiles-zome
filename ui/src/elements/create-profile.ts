import { FieldConfig, Profile } from '@darksoil-studio/profiles-provider';
import { consume } from '@lit/context';
import { localized, msg, str } from '@lit/localize';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/avatar/avatar.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import { notifyError, onSubmit, sharedStyles } from '@darksoil-studio/holochain-elements';
import '@darksoil-studio/holochain-elements/dist/elements/select-avatar.js';
import { SignalWatcher } from '@darksoil-studio/holochain-signals';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { profilesStoreContext } from '../context.js';
import { ProfilesStore } from '../profiles-store.js';

/**
 * A custom element that fires event on value change.
 *
 * @element create-profile
 * @fires profile-created - Fired after the profile has been created. Detail will have this shape: { profile: { nickname, fields } }
 */
@localized()
@customElement('create-profile')
export class CreateProfile extends SignalWatcher(LitElement) {
	/**
	 * Profiles store for this element, not required if you embed this element inside a <profiles-context>
	 */
	@consume({ context: profilesStoreContext, subscribe: true })
	@property()
	store!: ProfilesStore;

	/** Private properties */

	async createProfile(fields: Record<string, string>) {
		const name = fields['name'];
		delete fields['name'];
		const avatar = fields['avatar'];
		delete fields['avatar'];

		const profile: Profile = {
			fields,
			name,
			avatar,
		};
		const button = this.shadowRoot!.querySelector('sl-button')!;
		button.loading = true;
		try {
			await this.store.client.createProfile(profile);
			this.dispatchEvent(
				new CustomEvent('profile-created', {
					detail: {
						profile,
					},
					bubbles: true,
					composed: true,
				}),
			);
		} catch (e) {
			console.error(e);
			notifyError(msg('Error creating the profile.'));
		}
		button.loading = false;
	}

	avatarMode() {
		return (
			this.store.config.avatarMode === 'avatar-required' ||
			this.store.config.avatarMode === 'avatar-optional'
		);
	}

	renderField(fieldConfig: FieldConfig) {
		return html`
			<sl-input
				name="${fieldConfig.name}"
				.required=${fieldConfig.required}
				.label=${fieldConfig.label}
			></sl-input>
		`;
	}

	renderForm() {
		return html`
			<form
				id="profile-form"
				class="column"
				style="gap: 16px; flex: 1"
				${onSubmit(fields => this.createProfile(fields))}
			>
				<div class="row" style="justify-content: center; gap: 16px">
					${this.avatarMode()
						? html` <select-avatar
								name="avatar"
								.required=${this.store.config.avatarMode === 'avatar-required'}
							></select-avatar>`
						: html``}

					<sl-input
						name="name"
						.label=${msg('Name')}
						required
						minLength="${this.store.config.minNicknameLength}"
						.helpText=${msg(
							str`Min. ${this.store.config.minNicknameLength} characters`,
						)}
						style="flex: 1;"
					></sl-input>
				</div>

				${this.store.config.additionalFields.map(field =>
					this.renderField(field),
				)}

				<sl-button variant="primary" type="submit"
					>${msg('Create Profile')}
				</sl-button>
			</form>
		`;
	}

	render() {
		return html`
			<sl-card>
				<div class="column" style="flex: 1">
					<span
						class="title"
						style="margin-bottom: 16px; align-self: flex-start"
						>${msg('Create Profile')}</span
					>
					${this.renderForm()}
				</div></sl-card
			>
		`;
	}

	static styles = [
		css`
			:host {
				display: flex;
			}
		`,
		...sharedStyles,
	];
}
