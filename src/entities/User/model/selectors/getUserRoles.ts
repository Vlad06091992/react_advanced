import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from 'reselect';
import { UserRole } from '../consts/consts';

export const getUserRole = ((state:StateSchema) => state.user.authData?.roles);

export const isUserAdmin = createSelector(getUserRole, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
export const isUserManager = createSelector(getUserRole, (roles) => Boolean(roles?.includes(UserRole.MANAGER)));
export const isUserStandard = createSelector(getUserRole, (roles) => Boolean(roles?.includes(UserRole.USER)));
