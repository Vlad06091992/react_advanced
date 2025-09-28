import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticleDetailsData } from '@/entities/Article/model/selectors/getArticleDetails';
import { addCommentFormActions } from '@/features/AddCommentForm/model/slices/addCommentFormSlice';
import { getAddCommentFormText } from '../selectors/addCommentFormSelectors';

export const sendComment = createAsyncThunk<
    Comment,
    void,
    ThunkConfig<string>
>(
    'addCommentForm/sendComment',
    async (_, thunkApi) => {
        const {
            extra, dispatch, rejectWithValue, getState
        } = thunkApi;

        try {
            const userAuthData = getUserAuthData(getState());
            const commentText = getAddCommentFormText(getState());
            const article = getArticleDetailsData(getState());
            // const commentError = getAddCommentFormError(getState());

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
            return response.data;
        } catch (e) {
            return rejectWithValue('Не удалось авторизоваться');
        }
    },
);
