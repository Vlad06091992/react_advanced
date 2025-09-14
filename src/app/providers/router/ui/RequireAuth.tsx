import { useSelector } from 'react-redux';
import { getUserAuthData, UserRole } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RouterPaths } from 'shared/config/routerConfig/routerConfig';
import React, { useMemo } from 'react';

export const RequireAuth = ({ children, roles }: { children: React.ReactNode, roles?:UserRole[] }) => {
    const authData = useSelector(getUserAuthData);
    const location = useLocation();

    const userRoles = authData?.roles;

    const hasRequiredRoles = useMemo(() => {
        if (!roles?.includes(UserRole.ADMIN)) {
            return true;
        }

        return roles?.some((role) => userRoles?.includes(role));
    }, [userRoles, roles]);
    if (!authData) {
        return <Navigate to={RouterPaths.main} state={{ from: location }} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RouterPaths.forbidden} state={{ from: location }} replace />;
    }

    return <>{children}</>;
};
