import {
    AnyAction, createEntityAdapter, createSlice, PayloadAction
} from '@reduxjs/toolkit';
import { Article, ArticlesViewMode } from 'entities/Article';
import { ArticlesPageSchema } from 'pages/ArticlePage/model/types/articlesPageSchema';
import { StateSchema } from 'app/providers/StoreProvider';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

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
        viewMode: ArticlesViewMode.SMALL

    }) || [],
    reducers: {
        setError: (state, action:PayloadAction<string>) => {
            state.error = action.payload;
        },
        setViewMode: (state, action:PayloadAction<ArticlesViewMode>) => {
            state.viewMode = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        initState: (state) => {
            state.viewMode = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticlesViewMode;
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
                articleAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticlesList.rejected, (state, action:AnyAction) => {
                state.isLoading = false;
                action.payload && (state.error = action.payload);
            });
    },
});

export const { actions: articlePageActions, reducer: articlesPageReducer } = articlePageSlice;
