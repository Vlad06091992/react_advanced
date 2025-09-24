import { StateSchema } from 'app/providers/StoreProvider';

export const getIsInitUser = ((state:StateSchema) => state.user.isInit);
