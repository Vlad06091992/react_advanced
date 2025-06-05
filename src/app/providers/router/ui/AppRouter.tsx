import React, { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

export const AppRouter = memo(() => {
    const isAuth = useSelector(getUserAuthData);

    // <Suspense fallback={<div>loading...</div>}>
    const routes = routerConfig.filter((r) => {
        if (r.authOnly && !isAuth) return false;
        return true;
    }).map((r) => (
        <Route key={r.path} path={r.path} element={r.element} />
    ));
    return (
        <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">
                <Routes>
                    {routes}
                </Routes>
            </div>
        </Suspense>
    );
});
