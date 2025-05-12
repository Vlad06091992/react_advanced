import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state, action) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
