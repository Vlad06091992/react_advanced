import {
    AnyAction, createEntityAdapter, createSlice, PayloadAction
} from '@reduxjs/toolkit';
import {
    Article, ArticleSortFields, ArticlesViewMode, ArticleType, SortOrder
} from 'entities/Article';
import { StateSchema } from 'app/providers/StoreProvider';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

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
        _inited: false,
        sortBy: ArticleSortFields.CREATED,
        sortOrder: 'asc',
        searchSubstr: '',
        type: ArticleType.ALL

    }) || [],
    reducers: {
        setError: (state, action:PayloadAction<string>) => {
            state.error = action.payload;
        },
        setSearchSubString: (state, action:PayloadAction<string>) => {
            state.searchSubstr = action.payload;
        },
        setOrder: (state, action:PayloadAction<SortOrder>) => {
            state.sortOrder = action.payload;
        },
        setSortBy: (state, action:PayloadAction<ArticleSortFields>) => {
            state.sortBy = action.payload;
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
        setArticlesType: (state, action:PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        initState: (state) => {
            state.viewMode = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticlesViewMode;
            state.pageSize = state.viewMode === ArticlesViewMode.BIG ? 4 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = null;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    articleAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action:AnyAction) => {
                state.isLoading = false;

                if (action.meta.arg.replace) {
                    articleAdapter.setAll(state, action.payload);
                } else {
                    articleAdapter.addMany(state, action.payload);
                }

                state.hasMore = action.payload.length >= state.pageSize;
            })
            .addCase(fetchArticlesList.rejected, (state, action:AnyAction) => {
                state.isLoading = false;
                action.payload && (state.error = action.payload);
            });
    },
});

export const { actions: articlesPageActions, reducer: articlesPageReducer } = articlePageSlice;
