import { FieldConfig, Profile } from '@darksoil-studio/profiles-provider';
import { ActionHash } from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg, str } from '@lit/localize';
import { mdiInformationOutline } from '@mdi/js';
import '@shoelace-style/shoelace/dist/components/avatar/avatar.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import {
	notifyError,
	onSubmit,
	sharedStyles,
	wrapPathInSvg,
} from '@darksoil-studio/holochain-elements';
import '@darksoil-studio/holochain-elements/dist/elements/display-error.js';
import '@darksoil-studio/holochain-elements/dist/elements/select-avatar.js';
import { AsyncResult, SignalWatcher } from '@darksoil-studio/holochain-signals';
import { EntryRecord } from '@darksoil-studio/holochain-utils';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { profilesStoreContext } from '../context.js';
import { ProfilesStore } from '../profiles-store.js';

/**
 * @element update-profile
 * @fires profile-updated - Fired after the profile has been created. Detail will have this shape: { profile: { nickname, fields } }
 */
@localized()
@customElement('update-profile')
export class UpdateProfile extends SignalWatcher(LitElement) {
	/**
	 * Profiles store for this element, not required if you embed this element inside a <profiles-context>
	 */
	@consume({ context: profilesStoreContext, subscribe: true })
	@property()
	store!: ProfilesStore;

	async updateProfile(
		previousProfileHash: ActionHash,
		fields: Record<string, string>,
	) {
		const button = this.shadowRoot!.querySelector('sl-button')!;
		button.loading = true;
		try {
			const name = fields['name'];
			delete fields['name'];
			const avatar = fields['avatar'];
			delete fields['avatar'];

			const profile: Profile = {
				fields,
				name,
				avatar,
			};
			await this.store.client.updateProfile(previousProfileHash, profile);

			this.dispatchEvent(
				new CustomEvent('profile-updated', {
					detail: {
						profile,
					},
					bubbles: true,
					composed: true,
				}),
			);
		} catch (e) {
			notifyError(msg('Error updating the profile.'));
			console.error(e);
		}
		button.loading = false;
	}

	private myProfile(): AsyncResult<EntryRecord<Profile> | undefined> {
		const myProfile = this.store.myProfile.get();
		if (myProfile.status !== 'completed') return myProfile;
		if (!myProfile.value) {
			return {
				status: 'completed',
				value: undefined,
			};
		}
		return myProfile.value.latestVersion.get();
	}

	avatarMode() {
		return (
			this.store.config.avatarMode === 'avatar-required' ||
			this.store.config.avatarMode === 'avatar-optional'
		);
	}

	renderField(profile: EntryRecord<Profile>, fieldConfig: FieldConfig) {
		return html`
			<sl-input
				name="${fieldConfig.name}"
				.required=${fieldConfig.required}
				.label=${fieldConfig.label}
				.value=${profile.entry.fields[fieldConfig.name] || ''}
			></sl-input>
		`;
	}

	renderForm(profile: EntryRecord<Profile>) {
		return html`
			<form
				id="profile-form"
				class="column"
				style="gap: 16px; flex: 1"
				${onSubmit(fields => this.updateProfile(profile.actionHash, fields))}
			>
				<div class="row" style="justify-content: center; gap: 16px">
					${this.avatarMode()
						? html` <select-avatar
								name="avatar"
								.value=${profile.entry.avatar || undefined}
								.required=${this.store.config.avatarMode === 'avatar-required'}
							></select-avatar>`
						: html``}

					<sl-input
						name="name"
						.label=${msg('Name')}
						required
						minLength="${this.store.config.minNicknameLength}"
						.value=${profile.entry.name || ''}
						.helpText=${msg(
							str`Min. ${this.store.config.minNicknameLength} characters`,
						)}
						style="flex: 1"
					></sl-input>
				</div>

				${this.store.config.additionalFields.map(field =>
					this.renderField(profile, field),
				)}

				<sl-button variant="primary" type="submit"
					>${msg('Update Profile')}
				</sl-button>
			</form>
		`;
	}

	render() {
		const myProfile = this.myProfile();

		switch (myProfile.status) {
			case 'pending':
				return html`<div
					class="column"
					style="align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem"></sl-spinner>
				</div>`;
			case 'completed':
				if (!myProfile.value) {
					return html`<div
						class="column placeholder"
						style="flex: 1; align-items: center; justify-content: center; gap: 16px"
					>
						<sl-icon
							.src=${wrapPathInSvg(mdiInformationOutline)}
							style="height: 64px; width: 64px;"
						></sl-icon>
						<span>${msg("You haven't created a profile yet.")}</span>
					</div>`;
				}
				return this.renderForm(myProfile.value);
			case 'error':
				return html`<display-error
					.headline=${msg('Error fetching your profile')}
					.error=${myProfile.error}
				></display-error>`;
		}
	}

	static get styles() {
		return [
			sharedStyles,
			css`
				:host {
					display: flex;
				}
			`,
		];
	}
}
