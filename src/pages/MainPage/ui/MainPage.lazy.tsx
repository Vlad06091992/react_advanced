import { lazy } from 'react';

export const MainPageLazy = lazy(() => new Promise((res, rej) => {
    setTimeout(() => {
    // @ts-ignore

        res(import('./MainPage'));
    }, 500);
}));
