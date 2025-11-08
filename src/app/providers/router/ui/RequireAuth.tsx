import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import React, { useMemo } from 'react';
import { getUserAuthData, UserRole } from '@/entities/User';
import { getRouteForbidden, getRouteMain } from '@/shared/const/paths';

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
        return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;
    }

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};
