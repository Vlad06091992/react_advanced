import { lazy } from 'react';

// export const ArticlesPageLazy = lazy(() => new Promise((res, rej) => {
//     setTimeout(() => {
//     // @ts-ignore
//
//         res(import('../ArticlesPage/ArticlesPage'));
//     }, 500);
// }));

export const ArticlesPageLazy = lazy(() => import('../ArticlesPage/ArticlesPage'));
