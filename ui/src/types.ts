import { ActionCommittedSignal } from '@tnesh-stack/utils';

export type ProfilesSignal = ActionCommittedSignal<EntryTypes, any>;

export type EntryTypes = { type: 'Profile' } & Profile;
