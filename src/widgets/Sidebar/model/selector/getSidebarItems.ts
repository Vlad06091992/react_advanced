import { createSelector } from 'reselect';
import { getUserAuthData } from '@/entities/User';
import {
    getRouteAbout,
    getRouteAdminPanel,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/paths';
import Main from '@/shared/assets/icons/main-20-20.svg';
import About from '@/shared/assets/icons/about-20-20.svg';
import Profile from '@/shared/assets/icons/profile-20-20.svg';
import Article from '@/shared/assets/icons/article-20-20.svg';
import { SidebarItemTypes } from '../../types/sidebar';

export const getSidebarItemsList = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemTypes[] = [
            { path: getRouteMain(), text: 'Главная страница', Icon: Main },
            { path: getRouteAbout(), text: 'О сайте', Icon: About },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData.id),
                    text: 'Профиль',
                    Icon: Profile,
                    authOnly: true,
                },
                {
                    path: getRouteAdminPanel(),
                    text: 'Админка',
                    Icon: Profile,
                    authOnly: true,
                },
                {
                    path: getRouteArticles(),
                    text: 'Статьи',
                    Icon: Article,
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
