import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '../types/Article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'articleDetailsPage/fetchArticleById.ts',
    async (articleId, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`, {
                params: {
                    _expand: 'user'
                }
            });
            return response.data;
        } catch (e) {
            // eslint-disable-next-line
            console.log(e);
            return rejectWithValue(i18n.t('error'));
        }
    },
);
