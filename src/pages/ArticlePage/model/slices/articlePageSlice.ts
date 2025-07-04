import {
    AnyAction, createEntityAdapter, createSlice, PayloadAction
} from '@reduxjs/toolkit';
import { Article, ArticlesViewMode } from 'entities/Article';
import { ArticlesPageSchema } from 'pages/ArticlePage/model/types/articlesPageSchema';
import { StateSchema } from 'app/providers/StoreProvider';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { fetchArticlesList } from 'pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList';

const articleAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id
});

export const getArticles = articleAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articleAdapter.getInitialState()
);

export const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articleAdapter.getInitialState<ArticlesPageSchema>({
        ids: [],
        entities: {},
        error: null,
        isLoading: false,
        viewMode: ArticlesViewMode.SMALL,
        pageNumber: 1,
        pageSize: 5,
        hasMore: true,
        _inited: false

    }) || [],
    reducers: {
        setError: (state, action:PayloadAction<string>) => {
            state.error = action.payload;
        },
        setPage: (state, action:PayloadAction<number>) => {
            state.pageNumber = action.payload;
        },
        setLimit: (state, action:PayloadAction<number>) => {
            state.pageSize = action.payload;
        },
        setViewMode: (state, action:PayloadAction<ArticlesViewMode>) => {
            state.viewMode = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        initState: (state) => {
            state.viewMode = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticlesViewMode;
            state.pageSize = state.viewMode === ArticlesViewMode.BIG ? 4 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchArticlesList.fulfilled, (state, action:AnyAction) => {
                state.isLoading = false;
                articleAdapter.addMany(state, action.payload);
                state.hasMore = action.payload.length > 0;
            })
            .addCase(fetchArticlesList.rejected, (state, action:AnyAction) => {
                state.isLoading = false;
                action.payload && (state.error = action.payload);
            });
    },
});

export const { actions: articlePageActions, reducer: articlesPageReducer } = articlePageSlice;
