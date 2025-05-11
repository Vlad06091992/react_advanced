import { createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';

const initialState = {} as UserSchema;

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // increment: (state) => {
        //     state.value += 1;
        // },
        // decrement: (state) => {
        //     state.value -= 1;
        // },
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
