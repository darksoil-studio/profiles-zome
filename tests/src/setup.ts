import {
	LinkedDevicesClient,
	LinkedDevicesStore,
} from '@darksoil-studio/linked-devices-zome';
import { AppClient, AppWebsocket } from '@holochain/client';
import { Player, Scenario, pause } from '@holochain/tryorama';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { ProfilesClient } from '../../ui/src/profiles-client.js';
import { ProfilesStore } from '../../ui/src/profiles-store.js';

export const appPath =
	dirname(fileURLToPath(import.meta.url)) + '/../../workdir/profiles-test.happ';

export async function setup(scenario: Scenario, numPlayers = 2) {
	const players = await scenario.addPlayersWithApps(
		Array.from(new Array(numPlayers)).fill({
			appBundleSource: { path: appPath },
		}),
	);
	const playersAndStores = await promiseAllSequential(
		players.map(p => () => setupStore(p)),
	);

	// Shortcut peer discovery through gossip and register all agents in every
	// conductor of the scenario.
	await scenario.shareAllAgents();

	return playersAndStores;
}
async function promiseAllSequential<T>(
	promises: Array<() => Promise<T>>,
): Promise<Array<T>> {
	const results: Array<T> = [];
	for (const promise of promises) {
		results.push(await promise());
	}
	return results;
}

async function setupStore(player: Player) {
	// patchCallZome(player.appWs as AppWebsocket);
	await player.conductor
		.adminWs()
		.authorizeSigningCredentials(player.cells[0].cell_id);
	const store = new ProfilesStore(
		new ProfilesClient(player.appWs as any, 'profiles-test'),
	);
	await store.client.getAllProfiles();
	return {
		store,
		linkedDevicesStore: new LinkedDevicesStore(
			new LinkedDevicesClient(player.appWs as any, 'profiles-test'),
		),
		player,
		startUp: async () => {
			await player.conductor.startUp();
			const port = await player.conductor.attachAppInterface();
			const issued = await player.conductor
				.adminWs()
				.issueAppAuthenticationToken({
					installed_app_id: player.appId,
				});
			const appWs = await player.conductor.connectAppWs(issued.token, port);
			patchCallZome(appWs);
			store.client.client = appWs;
		},
	};
}

export function patchCallZome(appWs: AppWebsocket) {
	const callZome = appWs.callZome;

	appWs.callZome = async req => {
		try {
			const result = await callZome(req);
			return result;
		} catch (e) {
			if (
				!e.toString().includes('Socket is not open') &&
				!e.toString().includes('ClientClosedWithPendingRequests')
			) {
				throw e;
			}
		}
	};
}
