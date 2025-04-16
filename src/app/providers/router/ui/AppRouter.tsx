import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routerConfig} from "shared/config/routerConfig/routerConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                {routerConfig.map(r => (
                    <Route key={r.path} path={r.path} element={r.element}/>
                ))}
            </Routes>
        </Suspense>
    )
}

