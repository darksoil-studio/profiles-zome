import { encodeHashToBase64 } from '@holochain/client';
import { dhtSync, pause, runScenario } from '@holochain/tryorama';
import { toPromise, watch } from '@tnesh-stack/signals';
import { EntryRecord, retype } from '@tnesh-stack/utils';
import { assert, test } from 'vitest';

import { Profile } from '../../packages/profiles/src/types.js';
import { sampleProfile } from '../../ui/src/mocks.js';
import { setup } from './setup.js';

test('create and update Profile', async () => {
	await runScenario(async scenario => {
		const [alice, bob] = await setup(scenario);

		let agentsWithProfile = await toPromise(alice.store.allProfiles);
		assert.equal(agentsWithProfile.size, 0);
		let myProfile = await toPromise(alice.store.myProfile);
		assert.notOk(myProfile);

		// Alice creates a Profile
		const profile: EntryRecord<Profile> =
			await alice.store.client.createProfile(sampleProfile({ name: 'alice' }));
		assert.ok(profile);

		await pause(3000); // Difference in time between the create the processing of the signal

		agentsWithProfile = await toPromise(alice.store.allProfiles);
		assert.equal(agentsWithProfile.size, 1);

		const aliceProfile = await toPromise(alice.store.myProfile);
		assert.ok(aliceProfile);
		let profileLatestVersion = await toPromise(aliceProfile.latestVersion);
		assert.equal(profileLatestVersion.entry.name, 'alice');

		const agentsForProfile = await toPromise(
			alice.store.agentsForProfile.get(profile.actionHash),
		);
		assert.equal(agentsForProfile.length, 1);
		assert.equal(
			encodeHashToBase64(agentsForProfile[0]),
			encodeHashToBase64(alice.player.agentPubKey),
		);

		await alice.store.client.updateProfile(
			profile.actionHash,
			sampleProfile({ name: 'alice2' }),
		);

		profileLatestVersion = await toPromise(aliceProfile.latestVersion);
		assert.equal(profileLatestVersion.entry.name, 'alice2');
	});
});
