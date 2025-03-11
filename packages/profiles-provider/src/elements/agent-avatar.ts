import { ActionHash, AgentPubKey } from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import { mdiAccountCircle } from '@mdi/js';
import '@shoelace-style/shoelace/dist/components/avatar/avatar.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/skeleton/skeleton.js';
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import {
	hashProperty,
	sharedStyles,
	wrapPathInSvg,
} from '@tnesh-stack/elements';
import '@tnesh-stack/elements/dist/elements/display-error.js';
import '@tnesh-stack/elements/dist/elements/holo-identicon.js';
import { SignalWatcher } from '@tnesh-stack/signals';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import { profilesProviderContext } from '../context.js';
import { ProfilesProvider } from '../profiles-provider.js';
import { Profile } from '../types.js';

@localized()
@customElement('agent-avatar')
export class AgentAvatar extends SignalWatcher(LitElement) {
	/** Public properties */

	/**
	 * The public key identifying the agent whose profile is going to be shown.
	 */
	@property(hashProperty('agent-pub-key'))
	agentPubKey!: AgentPubKey;

	/**
	 * Size of the avatar image in pixels.
	 */
	@property({ type: Number })
	size = 32;

	/**
	 * Disables showing the tooltip for the public key
	 */
	@property({ type: Boolean, attribute: 'disable-tooltip' })
	disableTooltip = false;

	/**
	 * Disable copying of the public key on click
	 */
	@property({ type: Boolean, attribute: 'disable-copy' })
	disableCopy = false;

	/** Dependencies */

	/**
	 * Profiles provider
	 */
	@consume({ context: profilesProviderContext, subscribe: true })
	@property()
	profilesProvider!: ProfilesProvider;

	private renderIdenticon() {
		if (!this.agentPubKey)
			return html`
				<sl-icon
					style=${styleMap({
						position: 'relative',
						height: `${this.size}px`,
						width: `${this.size}px`,
					})}
					.src=${wrapPathInSvg(mdiAccountCircle)}
				>
				</sl-icon>
			`;
		return html` <div
			style=${styleMap({
				position: 'relative',
				height: `${this.size}px`,
				width: `${this.size}px`,
			})}
		>
			<holo-identicon
				.disableCopy=${this.disableCopy}
				.disableTooltip=${this.disableTooltip}
				.hash=${this.agentPubKey}
				.size=${this.size}
			>
			</holo-identicon>
			<div class="badge"><slot name="badge"></slot></div>
		</div>`;
	}

	/**
	 * @internal
	 */
	timeout: any;

	private renderProfile(profile: Profile | undefined) {
		if (!profile || !profile.avatar) return this.renderIdenticon();

		const contents = html`
			<div
				style=${styleMap({
					cursor: this.disableCopy ? '' : 'pointer',
					position: 'relative',
					height: `${this.size}px`,
					width: `${this.size}px`,
				})}
			>
				<sl-avatar
					.image=${profile.avatar}
					style="--size: ${this.size}px; display: flex;"
					@click=${() =>
						this.dispatchEvent(
							new CustomEvent('profile-clicked', {
								composed: true,
								bubbles: true,
								detail: {
									agentPubKey: this.agentPubKey,
								},
							}),
						)}
				>
				</sl-avatar>
				<div class="badge"><slot name="badge"></slot></div>
			</div>
		`;

		return html`
			<sl-tooltip
				id="tooltip"
				placement="top"
				.trigger=${this.disableTooltip ? 'manual' : 'hover focus'}
				hoist
				.content=${profile.name}
			>
				${contents}
			</sl-tooltip>
		`;
	}

	render() {
		const profile = this.profilesProvider.currentProfileForAgent
			.get(this.agentPubKey)
			.get();

		switch (profile.status) {
			case 'pending':
				return html`<sl-skeleton
					effect="pulse"
					style="height: ${this.size}px; width: ${this.size}px"
				></sl-skeleton>`;
			case 'error':
				return html`
					<display-error
						tooltip
						.headline=${msg("Error fetching the user's profile.")}
						.error=${profile.error}
					></display-error>
				`;
			case 'completed':
				return this.renderProfile(profile.value);
		}
	}

	static styles = [
		sharedStyles,
		css`
			.badge {
				position: absolute;
				right: 0;
				bottom: 0;
			}
			:host {
				height: 32px;
			}
		`,
	];
}
