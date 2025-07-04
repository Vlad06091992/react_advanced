import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comments';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
    'articleDetailsPage/fetchCommentsByArticleId.ts',
    async (articleId, { extra, rejectWithValue }) => {
        if (!articleId) {
            return rejectWithValue('error');
        }

        try {
            const response = await extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user'
                }
            });
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(i18n.t('error'));
        }
    },
);
