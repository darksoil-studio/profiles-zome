import { AgentPubKey } from '@holochain/client';

export interface Profile {
	name: string;
	avatar: string | undefined;
	fields: Record<string, string>;
}

export interface User {
	agents: AgentPubKey[];
	profile: Profile;
}

export interface FieldConfig {
	name: string;
	label: string;
	required: boolean;
}

export interface ProfilesConfig {
	avatarMode: 'identicon' | 'avatar-required' | 'avatar-optional';
	additionalFields: FieldConfig[];
	minNicknameLength: number;
}
