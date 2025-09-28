import { createSelector } from 'reselect';
import { getUserAuthData } from '@/entities/User';
import { RouterPaths } from '@/shared/config/routerConfig/routerConfig';
import Main from '@/shared/assets/icons/main-20-20.svg';
import About from '@/shared/assets/icons/about-20-20.svg';
import Profile from '@/shared/assets/icons/profile-20-20.svg';
import Article from '@/shared/assets/icons/article-20-20.svg';
import { SidebarItemTypes } from '../../types/sidebar';

export const getSidebarItemsList = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemTypes[] = [
        { path: RouterPaths.main, text: 'Главная страница', Icon: Main },
        { path: RouterPaths.about, text: 'О сайте', Icon: About },

    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: RouterPaths.profile + userData.id, text: 'Профиль', Icon: Profile, authOnly: true
            },
            {
                path: RouterPaths.admin_panel, text: 'Админка', Icon: Profile, authOnly: true
            },
            {
                path: RouterPaths.articles, text: 'Статьи', Icon: Article, authOnly: true
            }
        );
    }

    return sidebarItemsList;
});
