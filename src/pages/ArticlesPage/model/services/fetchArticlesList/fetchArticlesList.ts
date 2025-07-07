import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams';
import {
    getArticlesPageNumber,
    getArticlesPageSearchSubstr,
    getArticlesPageSize,
    getArticlesPageSortBy,
    getArticlesPageSortOrder, getArticlesPageType
} from '../../selectors/articlePageSelectors';

interface fetchArticlelistProps {
    replace?:boolean
}

export const fetchArticlesList = createAsyncThunk<Article[], fetchArticlelistProps, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (_, { extra, rejectWithValue, getState }) => {
        const pageSize = getArticlesPageSize(getState());

        const sortBy = getArticlesPageSortBy(getState());
        const sortOrder = getArticlesPageSortOrder(getState());
        const searchSubstr = getArticlesPageSearchSubstr(getState());
        const pageNumber = getArticlesPageNumber(getState());
        const articleType = getArticlesPageType(getState());

        try {
            addQueryParams({
                sort: sortBy, order: sortOrder, search: searchSubstr, type: articleType
            });
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: pageSize,
                    _page: pageNumber,
                    _sort: sortBy,
                    _order: sortOrder,
                    q: searchSubstr,
                    type: articleType === ArticleType.ALL ? undefined : articleType,

                }
            });
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(i18n.t('error'));
        }
    },
);
