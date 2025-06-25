import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comments';
import { StateSchema } from 'app/providers/StoreProvider';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/services/fetchCommentsByArticleId';
import { ArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentSchema';

const commentsAdapter = createEntityAdapter<Comment>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (comment: Comment) => comment.id,
    // Keep the "all IDs" array sorted based on book titles
    // sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);

const ArticleDetailsCommentsSlice = createSlice({
    name: 'ArticleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
        ids: [],
        entities: {},
        error: null,
        isLoading: true,
    }),
    reducers: {
        // Can pass adapter functions directly as case reducers.  Because we're passing this
        // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
        bookAdded: commentsAdapter.addOne,
        booksReceived(state, action) {
            // Or, call them as "mutating" helpers in a case reducer
            commentsAdapter.setAll(state, action.payload.books);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state, action) => {
                state.error = null;
                state.isLoading = true;
                debugger;
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

export const { reducer: articleDetailsCommentsReducer, actions: articleDetailsCommentsActions } = ArticleDetailsCommentsSlice;
