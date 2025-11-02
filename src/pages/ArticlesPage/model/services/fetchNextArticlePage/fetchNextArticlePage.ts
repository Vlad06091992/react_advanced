import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNumber
} from '../../selectors/articlePageSelectors';

export const fetchNextArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlePage',
    async (_, { getState, dispatch }) => {
        const hasMore = getArticlesPageHasMore(getState());
        const pageNumber = getArticlesPageNumber(getState());
        const isLoading = getArticlesPageIsLoading(getState());
        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(pageNumber + 1));
            dispatch(fetchArticlesList({ replace: false }));
        }
    },
);
