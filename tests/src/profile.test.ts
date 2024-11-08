import { toPromise, watch } from '@tnesh-stack/signals';
import { EntryRecord, retype } from '@tnesh-stack/utils';
import { encodeHashToBase64 } from '@holochain/client';
import { dhtSync, pause, runScenario } from '@holochain/tryorama';
import { assert, test } from 'vitest';

import { sampleProfile } from '../../ui/src/mocks.js';
import { Profile } from '../../ui/src/types.js';
import { setup } from './setup.js';

test('create Profile', async () => {
	await runScenario(async scenario => {
		const { alice, bob } = await setup(scenario);

		let agentsWithProfile = await toPromise(alice.store.allProfiles);
		assert.equal(agentsWithProfile.size, 0);
		watch(alice.store.allProfiles, () => {}); // store keepalive
		let myProfile = await toPromise(alice.store.myProfile);
		watch(alice.store.myProfile, () => {}); // store keepalive
		assert.notOk(myProfile);

		// Alice creates a Profile
		const profile: EntryRecord<Profile> =
			await alice.store.client.createProfile(
				await sampleProfile(alice.store.client),
			);
		assert.ok(profile);

		await pause(1000); // Difference in time between the create the processing of the signal

		agentsWithProfile = await toPromise(alice.store.allProfiles);
		assert.equal(agentsWithProfile.size, 1);

		const aliceProfile = await toPromise(alice.store.myProfile);
		assert.ok(aliceProfile);

		const agentsForProfile = await toPromise(
			alice.store.agentsForProfile.get(profile.actionHash),
		);
		assert.equal(agentsForProfile.length, 1);
		assert.equal(
			encodeHashToBase64(agentsForProfile[0]),
			encodeHashToBase64(alice.player.agentPubKey),
		);
	});
});
