import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articleDetails/fetchArticlesList',
    async (_, { extra, rejectWithValue, getState }) => {
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user'
                }
            });
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(i18n.t('error'));
        }
    },
);
