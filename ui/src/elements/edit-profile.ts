import { consume } from '@lit/context';
import { localized, msg, str } from '@lit/localize';
import '@shoelace-style/shoelace/dist/components/avatar/avatar.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import { onSubmit, sharedStyles } from '@tnesh-stack/elements';
import '@tnesh-stack/elements/dist/elements/select-avatar.js';
import { SignalWatcher } from '@tnesh-stack/signals';
import { EntryRecord } from '@tnesh-stack/utils';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { FieldConfig } from '../config.js';
import { profilesStoreContext } from '../context.js';
import { ProfilesStore } from '../profiles-store.js';
import { Profile } from '../types.js';

/**
 * @element edit-profile
 * @fires save-profile - Fired when the save profile button is clicked
 */
@localized()
@customElement('edit-profile')
export class EditProfile extends SignalWatcher(LitElement) {
	/**
	 * The profile to be edited.
	 */
	@property()
	profile: EntryRecord<Profile> | undefined;

	/**
	 * Label for the save profile button.
	 */
	@property({ type: String, attribute: 'save-profile-label' })
	saveProfileLabel: string | undefined;

	/**
	 * Profiles store for this element, not required if you embed this element inside a <profiles-context>
	 */
	@consume({ context: profilesStoreContext, subscribe: true })
	@property()
	store!: ProfilesStore;

	@property({ type: Boolean, attribute: 'allow-cancel' })
	allowCancel = false;

	/** Private properties */

	avatarMode() {
		return (
			this.store.config.avatarMode === 'avatar-required' ||
			this.store.config.avatarMode === 'avatar-optional'
		);
	}

	fireSaveProfile(fields: Record<string, string>) {
		const nickname = fields['nickname'];
		delete fields['nickname'];

		const profile: Profile = {
			fields,
			nickname,
		};

		this.dispatchEvent(
			new CustomEvent('save-profile', {
				detail: {
					profile,
				},
				bubbles: true,
				composed: true,
			}),
		);
	}

	fireCancel() {
		this.dispatchEvent(
			new CustomEvent('cancel-edit-profile', {
				bubbles: true,
				composed: true,
			}),
		);
	}

	renderField(fieldConfig: FieldConfig) {
		return html`
			<sl-input
				name="${fieldConfig.name}"
				.required=${fieldConfig.required}
				.label=${fieldConfig.label}
				.value=${this.profile?.entry.fields[fieldConfig.name] || ''}
				style="margin-bottom: 16px;"
			></sl-input>
		`;
	}

	render() {
		return html`
			<form
				id="profile-form"
				class="column"
				${onSubmit(fields => this.fireSaveProfile(fields))}
			>
				<div
					class="row"
					style="justify-content: center; align-self: start; margin-bottom: 16px"
				>
					${this.avatarMode()
						? html` <select-avatar
								name="avatar"
								.value=${this.profile?.entry.fields['avatar'] || undefined}
								.required=${this.store.config.avatarMode === 'avatar-required'}
							></select-avatar>`
						: html``}

					<sl-input
						name="nickname"
						.label=${msg('Nickname')}
						required
						minLength="${this.store.config.minNicknameLength}"
						.value=${this.profile?.entry.nickname || ''}
						.helpText=${msg(
							str`Min. ${this.store.config.minNicknameLength} characters`,
						)}
						style="margin-left: 16px;"
					></sl-input>
				</div>

				${this.store.config.additionalFields.map(field =>
					this.renderField(field),
				)}

				<div class="row" style="margin-top: 8px;">
					${this.allowCancel
						? html`
								<sl-button
									style="flex: 1; margin-right: 6px;"
									@click=${() => this.fireCancel()}
								>
									${msg('Cancel')}
								</sl-button>
							`
						: html``}

					<sl-button style="flex: 1;" variant="primary" type="submit"
						>${this.saveProfileLabel ?? msg('Save Profile')}
					</sl-button>
				</div>
			</form>
		`;
	}

	static styles = [sharedStyles];
}
