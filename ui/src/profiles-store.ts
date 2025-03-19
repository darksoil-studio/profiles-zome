import {
	Profile,
	ProfilesConfig,
	ProfilesProvider,
	User,
} from '@darksoil-studio/profiles-provider';
import { ActionHash, AgentPubKey, encodeHashToBase64 } from '@holochain/client';
import {
	AsyncComputed,
	collectionSignal,
	immutableEntrySignal,
	latestVersionOfEntrySignal,
	liveLinksSignal,
	mapCompleted,
	toPromise,
	uniquify,
} from '@tnesh-stack/signals';
import { HashType, MemoHoloHashMap, retype, slice } from '@tnesh-stack/utils';

import { defaultConfig } from './config.js';
import { ProfilesClient } from './profiles-client.js';
import { LocalStorageSignal } from './utils.js';

export class ProfilesStore implements ProfilesProvider {
	config: ProfilesConfig;

	profilesArePublic = true;

	constructor(
		public client: ProfilesClient,
		config: Partial<ProfilesConfig> = {},
	) {
		this.config = { ...defaultConfig, ...config };

		const unsubscribe = client.onSignal(signal => {
			if (!('type' in signal && signal.type === 'LinkCreated')) return;

			if (signal.link_type !== 'AgentToProfile') return;
			this.profileIntialized.set(true);
			unsubscribe();
		});
	}

	get myPubKey() {
		return this.client.client.myPubKey;
	}

	/**
	 * Fetches the profiles for all agents in the DHT
	 */
	allProfiles = mapCompleted(
		collectionSignal(
			this.client,
			() => this.client.getAllProfiles(),
			'PathToProfile',
		),
		links => {
			const profileTargets = links.map(l => l.target);
			return slice(this.profiles, profileTargets);
		},
	);

	private agentToProfileLinks = new MemoHoloHashMap((agent: AgentPubKey) =>
		liveLinksSignal(
			this.client,
			agent,
			() => this.client.getProfileForAgent(agent),
			'AgentToProfile',
		),
	);

	/**
	 * Fetches the profile for the given agent
	 */
	profileForAgent = new MemoHoloHashMap(
		(agent: AgentPubKey) =>
			new AsyncComputed(() => {
				const links = this.agentToProfileLinks.get(agent).get();

				if (links.status !== 'completed') return links;
				if (links.value.length === 0)
					return {
						status: 'completed',
						value: undefined,
					};

				// TODO: handle multiple links gracefully

				const latestLink = links.value.sort(
					(l1, l2) => l2.timestamp - l1.timestamp,
				)[0];
				const profileHash = latestLink.target;
				return {
					status: 'completed',
					value: this.profiles.get(profileHash),
				};
			}),
	);

	currentProfileForAgent = new MemoHoloHashMap(
		agent =>
			new AsyncComputed(() => {
				const profile = this.profileForAgent.get(agent).get();

				if (profile.status !== 'completed') return profile;

				if (!profile.value) {
					return {
						status: 'completed' as const,
						value: undefined,
					};
				}

				const latestVersion = profile.value.latestVersion.get();
				if (latestVersion.status !== 'completed') return latestVersion;
				return {
					status: 'completed',
					value: latestVersion.value.entry,
				};
			}),
	);

	async search(nameFilter: string): Promise<Array<User>> {
		const profilesHashes = await this.client.searchProfiles(nameFilter);

		return Promise.all(
			profilesHashes.map(async profileHash => {
				const profile = await toPromise(
					this.profiles.get(profileHash).latestVersion,
				);
				const agents = await toPromise(this.agentsForProfile.get(profileHash));

				return {
					agents,
					profile: profile.entry,
				};
			}),
		);
	}

	agentsForProfile = new MemoHoloHashMap((profileHash: ActionHash) =>
		mapCompleted(
			liveLinksSignal(
				this.client,
				profileHash,
				() => this.client.getAgentsForProfile(profileHash),
				'ProfileToAgent',
			),
			links => uniquify(links.map(l => retype(l.target, HashType.AGENT))),
		),
	);

	profiles = new MemoHoloHashMap((profileHash: ActionHash) => ({
		profileHash,
		latestVersion: latestVersionOfEntrySignal(this.client, () =>
			this.client.getLatestProfile(profileHash),
		),
		original: immutableEntrySignal(() =>
			this.client.getOriginalProfile(profileHash),
		),
	}));

	private profileIntialized = new LocalStorageSignal<boolean>(
		`profile-initialized/${this.client.roleName}/${encodeHashToBase64(this.client.client.myPubKey)}`,
	);

	// Fetches the profile for the active agent
	myProfile = new AsyncComputed(() => {
		if (!this.profileIntialized.get()) {
			return {
				status: 'completed',
				value: undefined,
			};
		}

		return this.profileForAgent.get(this.client.client.myPubKey).get();
	});
}
