import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { Article } from '@/entities/Article';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchArticleRecommendations = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>(
    'articleDetailsPage/fetchArticleRecommendations',
    async (_, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _limit: 4,
                },
            });
            return response.data;
        } catch (e) {
            return rejectWithValue(i18n.t('error'));
        }
    },
);
