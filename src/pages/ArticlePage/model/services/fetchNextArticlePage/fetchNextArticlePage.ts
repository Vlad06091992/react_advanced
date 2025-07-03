import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNumber,
    getArticlesPageSize
} from '../../selectors/articlePageSelectors';

export const fetchNextArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlePage',
    async (_, { getState, dispatch }) => {
        const hasMore = getArticlesPageHasMore(getState());
        const pageNumber = getArticlesPageNumber(getState());
        const isLoading = getArticlesPageIsLoading(getState());
        if (hasMore && !isLoading) {
            dispatch(articlePageActions.setPage(pageNumber + 1));
            dispatch(fetchArticlesList({ pageNumber: pageNumber + 1 }));
        }
    },
);
