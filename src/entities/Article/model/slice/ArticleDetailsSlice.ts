import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticleById } from '../services/fetchArticleById';
import { Article } from '../types/Article';
import { ArticleDetailsSchema } from '../types/AtricleDetailsSchema';

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: null,
    data: null,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetailsPage',
    initialState,
    reducers: {
        // setReadonly: (state, action:PayloadAction<boolean>) => {
        //     state.readonly = action.payload;
        // },
        // updateProfile: (state, action:PayloadAction<Types>) => {
        //     state.formData = { ...state.data, ...action.payload };
        // },
        // cancelEdit: (state) => {
        //     state.readonly = true;
        //     state.formData = state.data;
        //     state.validateError = [];
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchArticleById.fulfilled, (state, action:PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailsActions, reducer: articleDetailsReducer } = articleDetailsSlice;
