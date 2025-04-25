import './styles/index.scss';
import './styles/reset.scss';
import React, { Suspense, useEffect } from 'react';
import { classnames } from 'shared/lib/classnames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export const App = () => {
    const { theme } = useTheme();
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
