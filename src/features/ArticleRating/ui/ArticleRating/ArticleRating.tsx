import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRatingQuery, useSetArticleRatingMutation } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface ArticleRatingProps {
    className?: string
    articleId: string

}

export const ArticleRating = memo(({ className, articleId }: ArticleRatingProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRatingQuery({ articleId, userId: authData!.id });
    const [rateArticleMutation] = useSetArticleRatingMutation();

    const handleRateArticle = useCallback((starsCount:number, feedback?:string) => {
        try {
            rateArticleMutation({
                rate: starsCount,
                feedback,
                userId: authData!.id,
                articleId
            });
        } catch (e) {
            console.error(e);
        }
    }, [authData, articleId, rateArticleMutation]);

    const onAccept = useCallback((starsCount:number, feedback:string | undefined) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);
    const onCancel = useCallback((starsCount:number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={data?.[0]?.rate}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыва о статье, это поможет улучшить качество')}
            className={className}
            hasFeedback
        />
    );
});

// t('Редактировать')
