import { lazy } from 'react';

export const ArticlesPageLazy = lazy(() => new Promise((res, rej) => {
    setTimeout(() => {
    // @ts-ignore

        res(import('pages/ArticlesPage/ui/ArticlesPage/ArticlesPage'));
    }, 500);
}));
