import { lazy, Suspense } from 'react';
import { ArticleRatingProps } from './ArticleRating';
import { Skeleton } from '@/shared/ui/Skeleton';

export const ArticleRating = lazy(() => import('./ArticleRating'));
export const ArticleRatingLazy = (props: ArticleRatingProps) => (
    <Suspense fallback={<Skeleton width="100%" height={140} />}>
        <ArticleRating {...props} />
    </Suspense>
);
