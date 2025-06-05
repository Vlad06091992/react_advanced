import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

type AppRoutesProps = RouteProps & {
    authOnly?:boolean
}

enum RouterConfig {
    MAIN = 'main',
    PROFILE = 'profile',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}
export const RouterPaths = {
    [RouterConfig.MAIN]: '/',
    [RouterConfig.PROFILE]: '/profile',
    [RouterConfig.ABOUT]: '/about',
    [RouterConfig.NOT_FOUND]: '*',
};

export const routerConfig:AppRoutesProps[] = [
    { element: <AboutPage />, path: RouterPaths[RouterConfig.ABOUT] },
    { element: <ProfilePage />, path: RouterPaths[RouterConfig.PROFILE], authOnly: true },
    { element: <MainPage />, path: RouterPaths[RouterConfig.MAIN] },
    { element: <NotFoundPage />, path: RouterPaths[RouterConfig.NOT_FOUND] },
];
