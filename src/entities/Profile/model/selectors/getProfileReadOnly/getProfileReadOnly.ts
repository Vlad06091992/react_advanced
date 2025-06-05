import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileReadOnly = (state: StateSchema) => state.profileData?.readonly;
