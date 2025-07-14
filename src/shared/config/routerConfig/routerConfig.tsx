import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';
import { ArticleCreatePage } from 'pages/ArticleCreatePage';

type AppRoutesProps = RouteProps & {
    authOnly?:boolean
}

enum RouterConfig {
    MAIN = 'main',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    PROFILE = 'profile',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}
export const RouterPaths = {
    [RouterConfig.MAIN]: '/',
    [RouterConfig.PROFILE]: '/profile/', // +id
    [RouterConfig.ARTICLES]: '/articles',
    [RouterConfig.ARTICLE_DETAILS]: '/articles/', // +id
    [RouterConfig.ARTICLE_CREATE]: '/articles/create', // +id
    [RouterConfig.ARTICLE_EDIT]: '/articles/:id/edit', // +id
    [RouterConfig.ABOUT]: '/about',
    [RouterConfig.NOT_FOUND]: '*',
};

export const routerConfig:AppRoutesProps[] = [
    { element: <AboutPage />, path: RouterPaths[RouterConfig.ABOUT] },
    { element: <ArticlesPage />, path: `${RouterPaths[RouterConfig.ARTICLES]}`, authOnly: true },
    { element: <ArticleEditPage />, path: `${RouterPaths[RouterConfig.ARTICLE_EDIT]}`, authOnly: true },
    { element: <ArticleEditPage />, path: `${RouterPaths[RouterConfig.ARTICLE_CREATE]}`, authOnly: true },
    { element: <ArticleDetailsPage />, path: `${RouterPaths[RouterConfig.ARTICLE_DETAILS]}:id`, authOnly: true },
    { element: <ProfilePage />, path: `${RouterPaths[RouterConfig.PROFILE]}:id`, authOnly: true },
    { element: <MainPage />, path: RouterPaths[RouterConfig.MAIN] },
    { element: <NotFoundPage />, path: RouterPaths[RouterConfig.NOT_FOUND] },
];
