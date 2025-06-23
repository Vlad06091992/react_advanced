import { lazy } from 'react';

export const ArticlePageLazy = lazy(() => new Promise((res, rej) => {
    setTimeout(() => {
    // @ts-ignore

        res(import('./ArticlePage'));
    }, 500);
}));
