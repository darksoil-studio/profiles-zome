import { dhtSync, pause, runScenario } from '@holochain/tryorama';
import { toPromise, watch } from '@darksoil-studio/holochain-signals';
import { EntryRecord } from '@darksoil-studio/holochain-utils';
import { assert, test } from 'vitest';

import { Profile } from '../../packages/profiles-provider/src/types.js';
import { sampleProfile } from '../../ui/src/mocks.js';
import { setup } from './setup.js';

test('create Profile and search', async () => {
	await runScenario(async scenario => {
		const [alice, bob] = await setup(scenario);

		let agentsWithProfile = await toPromise(alice.store.allProfiles);
		assert.equal(agentsWithProfile.size, 0);
		watch(alice.store.allProfiles, () => {}); // store keepalive
		let myProfile = await toPromise(alice.store.myProfile);
		assert.notOk(myProfile);

		// Alice creates a Post
		const profile: EntryRecord<Profile> =
			await alice.store.client.createProfile(
				sampleProfile({
					name: 'alice',
				}),
			);
		assert.ok(profile);

		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]); // Difference in time between the create the processing of the signal

		let profiles = await bob.store.client.searchProfiles('bob');
		assert.equal(profiles.length, 0);
		profiles = await bob.store.client.searchProfiles('ali');
		assert.equal(profiles.length, 1);
	});
});
