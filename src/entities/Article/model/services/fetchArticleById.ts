import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../types/Article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'articleDetails/fetchArticleById.ts',
    async (articleId, { extra, rejectWithValue, getState }) => {
        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`);
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(i18n.t('error'));
        }
    },
);
