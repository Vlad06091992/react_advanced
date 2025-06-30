import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { ArticleList, ArticlesViewMode, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlePageActions, articlesPageReducer, getArticles } from 'pages/ArticlePage/model/slices/articlePageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from 'pages/ArticlePage/model/fetchArticlesList/fetchArticlesList';
import { useSelector } from 'react-redux';
import {
    getArticlesPageError,
    getArticlesPageIsLoadind,
    getArticlesPageViewMode
} from '../model/selectors/articlePageSelectors';

const initialReducer = {
    articlesPage: articlesPageReducer
};

const ArticlePage = () => {
    const { t, i18n } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const error = useSelector(getArticlesPageError);
    const isLoading = useSelector(getArticlesPageIsLoadind);
    const viewMode = useSelector(getArticlesPageViewMode);

    const onViewClick = (viewMode: ArticlesViewMode) => {
        dispatch(articlePageActions.setViewMode(viewMode));
    };

    useEffect(() => {
        dispatch(fetchArticlesList());
        dispatch(articlePageActions.initState());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducer} removeAfterUnmount>
            <div>
                <ArticleViewSelector viewMode={viewMode} onViewClick={onViewClick} />
                <ArticleList isLoading={isLoading} viewMode={viewMode} articles={articles} />

            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePage);
