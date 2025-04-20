import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

export const AppRouter = () => (
    // <Suspense fallback={<div>loading...</div>}>
    <Suspense fallback={<PageLoader />}>
        <div className="page-wrapper">
            <Routes>
                {routerConfig.map((r) => (
                    <Route key={r.path} path={r.path} element={r.element} />
                ))}
            </Routes>
        </div>
    </Suspense>
);
