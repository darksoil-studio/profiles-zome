import { ActionCommittedSignal } from '@tnesh-stack/utils';

export type ProfilesSignal = ActionCommittedSignal<EntryTypes, any>;

export type EntryTypes = { type: 'Profile' } & Profile;

export interface Profile {
	nickname: string;
	fields: Record<string, string>;
}
