import { AgentPubKey } from '@holochain/client';
import { AsyncSignal } from '@darksoil-studio/holochain-signals';
import { MemoHoloHashMap } from '@darksoil-studio/holochain-utils';

import { Profile, ProfilesConfig, User } from './types.js';

export interface ProfilesProvider {
	config: ProfilesConfig;

	profilesArePublic: boolean;

	myPubKey: AgentPubKey;

	currentProfileForAgent: MemoHoloHashMap<
		AgentPubKey,
		AsyncSignal<Profile | undefined>
	>;

	search(nameFilter: string): Promise<Array<User>>;
}
