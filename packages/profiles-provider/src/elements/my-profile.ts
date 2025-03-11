import { consume } from '@lit/context';
import { mdiPencil } from '@mdi/js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import { sharedStyles, wrapPathInSvg } from '@tnesh-stack/elements';
import { SignalWatcher } from '@tnesh-stack/signals';
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { profilesProviderContext } from '../context.js';
import { ProfilesProvider } from '../profiles-provider.js';
import './profile-detail.js';

/**
 * @element my-profile
 */
@customElement('my-profile')
export class MyProfile extends SignalWatcher(LitElement) {
	/** Private properties */

	/**
	 * Profiles provider
	 */
	@consume({ context: profilesProviderContext, subscribe: true })
	@property()
	profilesProvider!: ProfilesProvider;

	render() {
		return html`
			<profile-detail .agentPubKey=${this.profilesProvider.myPubKey}>
				<sl-icon-button
					src="${wrapPathInSvg(mdiPencil)}"
					slot="action"
					@click=${() => {
						this.dispatchEvent(
							new CustomEvent('edit-profile-clicked', {
								bubbles: true,
								composed: true,
							}),
						);
					}}
				></sl-icon-button>
			</profile-detail>
		`;
	}

	static styles = [sharedStyles];
}
