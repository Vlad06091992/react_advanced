import { lazy } from 'react';

export const ProfilePageLazy = lazy(() => new Promise((res, rej) => {
    setTimeout(() => {
    // @ts-ignore

        res(import('./ProfilePage'));
    }, 500);
}));
