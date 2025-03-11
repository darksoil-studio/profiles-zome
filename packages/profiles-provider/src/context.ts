import { createContext } from '@lit/context';

import { ProfilesProvider } from './profiles-provider.js';

export const profilesProviderContext =
	createContext<ProfilesProvider>('ProfilesProvider');
