import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';
import { AddCommentFormSchema } from 'features/AddCommentForm';

const initialState:AddCommentFormSchema = {
    text: '',
    error: null,
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setError: (state, action:PayloadAction<string>) => {
            state.error = action.payload;
        },
        setText: (state, action:PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUsername.pending, (state) => {
    //             state.error = null;
    //             state.isLoading = true;
    //         })
    //         .addCase(loginByUsername.fulfilled, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(loginByUsername.rejected, (state, action:AnyAction) => {
    //             state.isLoading = false;
    //             action.payload && (state.error = action.payload);
    //         });
    // },
});

export const { actions: addCommentFormActions, reducer: addCommentFormReducer } = addCommentFormSlice;
