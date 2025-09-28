import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '@/features/AuthByUsername/model/types/loginSchema';
import { loginByUsername } from '../services/loginByUsername';

const initialState:LoginSchema = {
    password: '',
    username: '',
    isLoading: false,
    error: null,
};

export const loginSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setUsername: (state, action:PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action:PayloadAction<string>) => {
            state.password = action.payload;
        },
        setError: (state, action:PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action:AnyAction) => {
                state.isLoading = false;
                action.payload && (state.error = action.payload);
            });
    },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
