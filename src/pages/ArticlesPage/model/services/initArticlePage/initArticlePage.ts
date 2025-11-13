import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSortFields, ArticleType, SortOrder } from '@/entities/Article';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';
import { getArticlesPageIsInited } from '../../selectors/articlePageSelectors';

export const initArticlePage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'articlesPage/initArticlePage',
    async (searchParams, { getState, dispatch }) => {
        const isInited = getArticlesPageIsInited(getState());
        if (!isInited) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as ArticleSortFields;
            const searchFromUrl = searchParams.get('search');
            const typeFromUrl = searchParams.get('type') as ArticleType;

            if (orderFromUrl) {
                dispatch(articlesPageActions.setOrder(orderFromUrl));
            }
            if (sortFromUrl) {
                dispatch(articlesPageActions.setSortBy(sortFromUrl));
            }
            if (searchFromUrl) {
                dispatch(articlesPageActions.setSearchSubString(searchFromUrl));
            }

            if (typeFromUrl) {
                dispatch(articlesPageActions.setArticlesType(typeFromUrl));
            }

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({ replace: true }));
        }
    },
);
