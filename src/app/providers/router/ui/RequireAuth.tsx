import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { useLocation, Navigate } from 'react-router-dom';
import { RouterPaths } from 'shared/config/routerConfig/routerConfig';
import React, { JSX, ReactNode } from 'react';

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const isAuth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!isAuth) {
        return <Navigate to={RouterPaths.main} state={{ from: location }} replace />;
    }

    return <>{children}</>;
};
