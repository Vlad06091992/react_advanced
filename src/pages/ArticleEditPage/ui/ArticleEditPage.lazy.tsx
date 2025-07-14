import { lazy } from 'react';

// export const ArticleEditPageLazy = lazy(() => new Promise((res, rej) => {
//     setTimeout(() => {
//     // @ts-ignore
//
//         res(import('./ArticleEditPage'));
//     }, 500);
// }));

export const ArticleEditPageLazy = lazy(() => import('./ArticleEditPage'));
