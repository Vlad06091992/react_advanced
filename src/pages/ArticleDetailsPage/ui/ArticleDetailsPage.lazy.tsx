import { lazy } from 'react';

export const ArticleDetailsPageLazy = lazy(() => new Promise((res, rej) => {
    setTimeout(() => {
    // @ts-ignore

        res(import('./ArticleDetailsPage'));
    }, 500);
}));
