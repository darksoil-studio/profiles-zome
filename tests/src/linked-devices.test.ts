import { toPromise, watch } from '@darksoil-studio/holochain-signals';
import { EntryRecord } from '@darksoil-studio/holochain-utils';
import { LinkedDevicesStore } from '@darksoil-studio/linked-devices-zome';
import { encodeHashToBase64 } from '@holochain/client';
import { dhtSync, pause, runScenario } from '@holochain/tryorama';
import { assert, expect, test } from 'vitest';

import { Profile } from '../../packages/profiles-provider/src/types.js';
import { sampleProfile } from '../../ui/src/mocks.js';
import { setup } from './setup.js';

test('create Profile and link devices', async () => {
	await runScenario(async scenario => {
		const [alice, bob, carol] = await setup(scenario, 3);

		let agentsWithProfile = await toPromise(alice.store.allProfiles);
		assert.equal(agentsWithProfile.size, 0);
		let myProfile = await toPromise(alice.store.myProfile);
		assert.notOk(myProfile);

		// Alice creates their profile
		const profile: EntryRecord<Profile> =
			await alice.store.client.createProfile(sampleProfile());
		assert.ok(profile);

		await pause(1000); // Difference in time between the create the processing of the signal

		agentsWithProfile = await toPromise(alice.store.allProfiles);
		assert.equal(agentsWithProfile.size, 1);

		const aliceProfileStatus = await toPromise(alice.store.myProfile);
		let agentsForProfile = await toPromise(
			alice.store.agentsForProfile.get(profile.actionHash),
		);
		assert.equal(agentsForProfile.length, 1);
		assert.equal(
			encodeHashToBase64(agentsForProfile[0]),
			encodeHashToBase64(alice.player.agentPubKey),
		);

		// Bob can't link to Alice's profile yet because they haven't linked their devices
		await expect(() =>
			bob.store.client.linkMyAgentToProfile(profile.actionHash),
		).rejects.toThrowError();

		await linkDevices(alice.linkedDevicesStore, bob.linkedDevicesStore);

		// await dhtSync(
		// 	[alice.player, bob.player, carol.player],
		// 	alice.player.cells[0].cell_id[0],
		// 	500,
		// 	480_000,
		// ); // Difference in time between the create the processing of the signal
		await pause(15000);

		await bob.store.client.linkMyAgentToProfile(profile.actionHash);

		await pause(10000);

		agentsWithProfile = await toPromise(alice.store.allProfiles);
		assert.equal(agentsWithProfile.size, 1);

		// Wait for bob to pick up Alice's profile
		await waitUntil(async () => {
			const bobProfileStatus = await toPromise(bob.store.myProfile);
			return bobProfileStatus !== undefined;
		}, 20_000);

		const bobProfileStatus = await toPromise(bob.store.myProfile);

		const aliceLatestProfile = await toPromise(
			aliceProfileStatus.latestVersion,
		);

		const bobLatestProfile = await toPromise(bobProfileStatus.latestVersion);

		assert.deepEqual(aliceLatestProfile, bobLatestProfile);

		agentsForProfile = await toPromise(
			alice.store.agentsForProfile.get(profile.actionHash),
		);
		assert.equal(agentsForProfile.length, 2);
		assert.ok(
			agentsForProfile.find(
				a =>
					encodeHashToBase64(a) === encodeHashToBase64(bob.player.agentPubKey),
			),
		);

		/** Bob's device now links carol's **/

		await linkDevices(bob.linkedDevicesStore, carol.linkedDevicesStore);

		// await dhtSync(
		// 	[alice.player, bob.player, carol.player],
		// 	alice.player.cells[0].cell_id[0],
		// 	500,
		// 	120_000,
		// );
		await pause(15000);

		await carol.store.client.linkMyAgentToProfile(profile.actionHash);

		await pause(15000);

		agentsWithProfile = await toPromise(alice.store.allProfiles);
		assert.equal(agentsWithProfile.size, 1);

		await waitUntil(async () => {
			const carolProfileStatus = await toPromise(carol.store.myProfile);
			return carolProfileStatus !== undefined;
		}, 30_000); // Difference in time between the create the processing of the signal

		const carolProfileStatus = await toPromise(carol.store.myProfile);

		const carolLatestProfile = await toPromise(
			carolProfileStatus.latestVersion,
		);

		assert.deepEqual(carolLatestProfile, bobLatestProfile);

		agentsForProfile = await toPromise(
			alice.store.agentsForProfile.get(profile.actionHash),
		);
		assert.equal(agentsForProfile.length, 3);
		assert.ok(
			agentsForProfile.find(
				a =>
					encodeHashToBase64(a) ===
					encodeHashToBase64(carol.player.agentPubKey),
			),
		);
	});
});

async function waitUntil(condition: () => Promise<boolean>, timeout: number) {
	const start = Date.now();
	const isDone = await condition();
	if (isDone) return;
	if (timeout <= 0) throw new Error('timeout');
	await pause(1000);
	return waitUntil(condition, timeout - (Date.now() - start));
}

async function linkDevices(
	store1: LinkedDevicesStore,
	store2: LinkedDevicesStore,
) {
	const store1Passcode = [1, 3, 7, 2];
	const store2Passcode = [9, 3, 8, 4];

	await store1.client.prepareLinkDevicesRequestor(
		store2.client.client.myPubKey,
		store1Passcode,
	);
	await store2.client.prepareLinkDevicesRecipient(
		store1.client.client.myPubKey,
		store2Passcode,
	);

	await store1.client.requestLinkDevices(
		store2.client.client.myPubKey,
		store2Passcode,
	);
	await store2.client.acceptLinkDevices(
		store1.client.client.myPubKey,
		store1Passcode,
	);
}
