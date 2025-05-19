import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import i18n from 'i18next';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

export interface LoginByUsernameProps {
    username:string
    password:string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async ({ password, username }, { extra, dispatch, rejectWithValue }) => {
        try {
            const response = await extra.api.post<User>('/login', { password, username });

            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            extra.navigate('/about');
            return response.data;
        } catch (e) {
            console.error(e);
            return rejectWithValue(i18n.t('Вы ввели неправильынй логин или пароль'));
        }
    },
);
