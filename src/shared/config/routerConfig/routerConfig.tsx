// import {RouteProps} from "react-router-dom";
import { AboutPage } from 'pages/AboutPage';
import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';

enum RouterConfig {
    MAIN = 'main',
    ABOUT = 'about',
}

export const routerPaths = {
    [RouterConfig.MAIN]: '/',
    [RouterConfig.ABOUT]: '/about',
};

export const routerConfig:RouteProps[] = [
    { element: <AboutPage />, path: routerPaths[RouterConfig.ABOUT] },
    { element: <MainPage />, path: routerPaths[RouterConfig.MAIN] },
];
