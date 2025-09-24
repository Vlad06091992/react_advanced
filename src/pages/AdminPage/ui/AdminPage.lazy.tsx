import { lazy } from 'react';

// export const AboutPageLazy = lazy(() => new Promise((res, rej) => {
//     setTimeout(() => {
//     // @ts-ignore
//
//         res(import('../ui/AboutPage'));
//     }, 500);
// }));

export const AdminPageLazy = lazy(() => import('./AdminPage'));
