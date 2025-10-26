import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticleDetailsData } from '@/entities/Article';
import { addCommentFormActions } from '@/features/AddCommentForm';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>(
    'articlesDetailsPage/addCommentForArticle',
    async (commentText, thunkApi) => {
        const {
            extra, dispatch, rejectWithValue, getState
        } = thunkApi;

        try {
            const userAuthData = getUserAuthData(getState());
            const article = getArticleDetailsData(getState());

            if (!userAuthData || !commentText || !article) {
                return rejectWithValue('no data');
            }

            const data = {
                articleId: article.id,
                userId: userAuthData.id,
                text: commentText,
            };

            const response = await extra.api.post<Comment>('/comments', data);

            dispatch(addCommentFormActions.setText(''));
            dispatch(fetchCommentsByArticleId(article.id));
            return response.data;
        } catch (e) {
            return rejectWithValue('Не удалось авторизоваться');
        }
    },
);
