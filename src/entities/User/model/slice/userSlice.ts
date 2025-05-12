import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { User, UserSchema } from '../types/user';

const initialState = {
    authData: null,
} as UserSchema;

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state, action: PayloadAction<User>) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

            if (user) {
                state.authData = JSON.parse(user);
            }
        },

        logout: (state, action: PayloadAction<User>) => {
             localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            state.authData = null;
        },
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
