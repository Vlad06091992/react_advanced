import { lazy } from 'react';

// export const ArticleCreatePageLazy = lazy(() => new Promise((res, rej) => {
//     setTimeout(() => {
//     // @ts-ignore
//
//         res(import('./ArticleCreatePage'));
//     }, 500);
// }));

export const ArticleCreatePageLazy = lazy(() => import('./ArticleCreatePage'));
