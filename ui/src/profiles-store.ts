import { ActionHash, AgentPubKey } from '@holochain/client';
import {
	AsyncComputed,
	collectionSignal,
	immutableEntrySignal,
	latestVersionOfEntrySignal,
	liveLinksSignal,
	mapCompleted,
	uniquify,
} from '@tnesh-stack/signals';
import { HashType, MemoHoloHashMap, retype, slice } from '@tnesh-stack/utils';

import { ProfilesConfig, defaultConfig } from './config.js';
import { ProfilesClient } from './profiles-client.js';

export class ProfilesStore {
	config: ProfilesConfig;

	constructor(
		public client: ProfilesClient,
		config: Partial<ProfilesConfig> = {},
	) {
		this.config = { ...defaultConfig, ...config };
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

	// Fetches the profile for the active agent
	myProfile = this.profileForAgent.get(this.client.client.myPubKey);
}
