import { rtkApi } from 'shared/api/rtkApi';

const commentsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getCommentsByArticleId: build.query({
            query: (articleId: string) => ({
                url: '/comments',
                params: {
                    articleId,
                    _expand: 'user'
                }
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useGetCommentsByArticleIdQuery } = commentsApi;
