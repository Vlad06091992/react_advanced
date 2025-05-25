import React from 'react';
import { RouterPaths } from 'shared/config/routerConfig/routerConfig';
import About from 'shared/assets/icons/about-20-20.svg';
import Main from 'shared/assets/icons/main-20-20.svg';
import Profile from 'shared/assets/icons/profile-20-20.svg';

export interface SidebarItemTypes {
    path: string
    text: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const sidebarItemsList:SidebarItemTypes[] = [
    { path: RouterPaths.main, text: 'Главная страница', Icon: Main },
    { path: RouterPaths.about, text: 'О сайте', Icon: About },
    { path: RouterPaths.profile, text: 'Профиль', Icon: Profile },
];
