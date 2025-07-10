import { lazy } from 'react';

export const ArticleEditPageLazy = lazy(() => new Promise((res, rej) => {
    setTimeout(() => {
    // @ts-ignore

        res(import('./ArticleEditPage'));
    }, 500);
}));
