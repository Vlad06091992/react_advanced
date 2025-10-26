import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentFormSchema';

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
    }
});

export const { actions: addCommentFormActions, reducer: addCommentFormReducer } = addCommentFormSlice;
