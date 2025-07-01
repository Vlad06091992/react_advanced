import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageSize } from '../../selectors/articlePageSelectors';

interface FetchArticlesListProps {
    pageNumber:number,
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async ({ pageNumber = 1 }, { extra, rejectWithValue, getState }) => {
        const pageSize = getArticlesPageSize(getState());
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: pageSize,
                    _page: pageNumber,
                }
            });
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(i18n.t('error'));
        }
    },
);
