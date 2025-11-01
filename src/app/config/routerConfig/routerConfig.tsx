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
import {
    getRouteAbout,
    getRouteAdminPanel,
    getRouteArticleCreate,
    getRouteArticleDetails,
    getRouteArticleEdit,
    getRouteArticles,
    getRouteForbidden,
    getRouteMain,
    getRouteNotFound,
    getRouteProfile
} from '@/shared/const/paths';
import { ArticleCreatePage } from '@/pages/ArticleCreatePage';

type AppRoutesProps = RouteProps & {
    authOnly?:boolean
    roles?:UserRole[]
}

export const routerConfig:AppRoutesProps[] = [
    {
        element: <AboutPage />,
        path: getRouteAbout()
    },
    {
        element: <ArticlesPage />,
        path: getRouteArticles(),
        authOnly: true
    },
    {
        element: <ArticleEditPage />,
        path: getRouteArticleEdit(':id'),
        authOnly: true
    },
    {
        element: <ArticleCreatePage />,
        path: getRouteArticleCreate(),
        authOnly: true
    },
    {
        element: <AdminPage />,
        path: getRouteAdminPanel(),
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER]
    },
    {
        element: <ArticleDetailsPage />,
        path: getRouteArticleDetails(':id'),
        authOnly: true
    },
    {
        element: <ProfilePage />,
        path: getRouteProfile(':id'),
        authOnly: true
    },
    {
        element: <MainPage />,
        path: getRouteMain(),
    },
    {
        element: <NotFoundPage />,
        path: getRouteNotFound()
    },
    {
        element: <ForbiddenPage />,
        path: getRouteForbidden()
    },
];
