import { User, UserSchema } from './model/types/user';
import { UserRole } from './model/consts/consts';
import { userReducer, userActions } from './model/slice/userSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData';
import { getIsInitUser } from './model/selectors/getIsInitUser';
import {
    getUserRole,
    isUserManager,
    isUserAdmin,
    isUserStandard,
} from './model/selectors/getUserRoles';

export {
    getUserRole,
    isUserManager,
    isUserAdmin,
    isUserStandard,
    UserRole,
    userReducer,
    userActions,
    getUserAuthData,
    getIsInitUser,
};

export type { UserSchema, User };
