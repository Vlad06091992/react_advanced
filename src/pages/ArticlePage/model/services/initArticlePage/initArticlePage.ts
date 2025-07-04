import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';
import { getArticlesPageIsInited } from '../../selectors/articlePageSelectors';

export const initArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initArticlePage',
    async (_, { getState, dispatch }) => {
        const isInited = getArticlesPageIsInited(getState());
        if (!isInited) {
            dispatch(articlePageActions.initState());
            dispatch(fetchArticlesList({ pageNumber: 1 }));
        }
    },
);
