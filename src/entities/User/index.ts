import { User, UserSchema } from './model/types/user';
import { userReducer, userActions } from './model/slice/userSlice';
import { getUserAuthData} from './model/selectors/getUserAuthData';

export {
    userReducer,
    UserSchema,
    User,
    userActions,
    getUserAuthData
};
