// import {RouteProps} from "react-router-dom";
import { AboutPage } from 'pages/AboutPage';
import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

enum RouterConfig {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}
export const routerPaths = {
    [RouterConfig.MAIN]: '/',
    [RouterConfig.ABOUT]: '/about',
    [RouterConfig.NOT_FOUND]: '*',
};

export const routerConfig:RouteProps[] = [
    { element: <AboutPage />, path: routerPaths[RouterConfig.ABOUT] },
    { element: <MainPage />, path: routerPaths[RouterConfig.MAIN] },
    { element: <NotFoundPage />, path: routerPaths[RouterConfig.NOT_FOUND] },
];
