import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from '@/entities/Comments';
import { StateSchema } from '@/app/providers/StoreProvider';
import { fetchArticleById } from '@/entities/Article';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';
import { ArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentSchema';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment: Comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
);

const ArticleDetailsCommentsSlice = createSlice({
    name: 'ArticleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
        ids: [],
        entities: {},
        error: null,
        isLoading: false,
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action:PayloadAction<Comment[]>) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: articleDetailsCommentsReducer,
    actions: articleDetailsCommentsActions
} = ArticleDetailsCommentsSlice;
