import './styles/index.scss';
import './styles/reset.scss';
import React, { Suspense, useEffect } from 'react';
import { classnames } from 'shared/lib/classnames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export const App = () => {
    const dispatch = useAppDispatch();
    const { theme } = useTheme();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classnames('app', [theme])}>
            <Suspense fallback="...">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
