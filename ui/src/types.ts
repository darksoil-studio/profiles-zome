import { Profile } from '@darksoil-studio/profiles-provider';
import { ActionCommittedSignal } from '@darksoil-studio/holochain-utils';

export type ProfilesSignal = ActionCommittedSignal<EntryTypes, any>;

export type EntryTypes = { type: 'Profile' } & Profile;
