import React, { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

export const AppRouter = memo(() => {
    const routes = routerConfig.map((r) => (
        <Route
            key={r.path}
            path={r.path}
            element={r.authOnly ? <RequireAuth roles={r.roles}>{r.element}</RequireAuth> : r.element}
        />
    ));

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes}
            </Routes>
        </Suspense>
    );
});
