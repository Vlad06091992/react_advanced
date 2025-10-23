import { RouteProps } from 'react-router-dom';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPage } from '@/pages/AdminPage';
import { UserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { RouterConfig, RouterPaths } from '../../const/paths';

type AppRoutesProps = RouteProps & {
    authOnly?:boolean
    roles?:UserRole[]
}

export const routerConfig:AppRoutesProps[] = [
    {
        element: <AboutPage />,
        path: RouterPaths[RouterConfig.ABOUT]
    },
    {
        element: <ArticlesPage />,
        path: `${RouterPaths[RouterConfig.ARTICLES]}`,
        authOnly: true
    },
    {
        element: <ArticleEditPage />,
        path: `${RouterPaths[RouterConfig.ARTICLE_EDIT]}`,
        authOnly: true
    },
    {
        element: <ArticleEditPage />,
        path: `${RouterPaths[RouterConfig.ARTICLE_CREATE]}`,
        authOnly: true
    },
    {
        element: <AdminPage />,
        path: `${RouterPaths[RouterConfig.ADMIN_PANEL]}`,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER]
    },
    {
        element: <ArticleDetailsPage />,
        path: `${RouterPaths[RouterConfig.ARTICLE_DETAILS]}:id`,
        authOnly: true
    },
    {
        element: <ProfilePage />,
        path: `${RouterPaths[RouterConfig.PROFILE]}:id`,
        authOnly: true
    },
    {
        element: <MainPage />,
        path: RouterPaths[RouterConfig.MAIN]
    },
    {
        element: <NotFoundPage />,
        path: RouterPaths[RouterConfig.NOT_FOUND]
    },
    {
        element: <ForbiddenPage />,
        path: RouterPaths[RouterConfig.FORBIDDEN]
    },
];
