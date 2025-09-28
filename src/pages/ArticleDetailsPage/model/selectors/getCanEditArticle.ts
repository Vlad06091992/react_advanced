import { createSelector } from 'reselect';
import { getUserAuthData } from '@/entities/User';
import { getArticleDetailsData } from '@/entities/Article';

export const getCanEditArticle = createSelector(getUserAuthData, getArticleDetailsData, (user, article) => {
    if (!user || !article) return false;
    return user?.id === article?.user?.id;
});
