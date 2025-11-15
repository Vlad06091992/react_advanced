import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/Rating';

interface GetArticleRatingArg {
    userId: string;
    articleId: string;
}

interface RateArticleArg extends GetArticleRatingArg {
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Rating[], GetArticleRatingArg>({
            query: ({ userId, articleId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        setArticleRating: build.mutation<void, RateArticleArg>({
            query: (body) => ({
                url: '/article-ratings',
                method: 'POST',
                body,
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useGetArticleRatingQuery, useSetArticleRatingMutation } =
    articleRatingApi;
