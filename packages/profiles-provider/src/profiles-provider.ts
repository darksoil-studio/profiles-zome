import { AgentPubKey } from '@holochain/client';
import { AsyncSignal } from '@tnesh-stack/signals';
import { MemoHoloHashMap } from '@tnesh-stack/utils';

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
