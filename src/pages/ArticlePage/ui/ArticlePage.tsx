import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { ArticleList, ArticlesViewMode, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlePageActions, articlesPageReducer, getArticles } from 'pages/ArticlePage/model/slices/articlePageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from 'pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList';
import { useSelector } from 'react-redux';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlePage } from 'pages/ArticlePage/model/services/fetchNextArticlePage/fetchNextArticlePage';
import { getArticlesPageIsLoading, getArticlesPageViewMode } from '../model/selectors/articlePageSelectors';

const initialReducer = {
    articlesPage: articlesPageReducer
};

const ArticlePage = () => {
    const { t, i18n } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const viewMode = useSelector(getArticlesPageViewMode);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    const onViewClick = (viewMode: ArticlesViewMode) => {
        dispatch(articlePageActions.setViewMode(viewMode));
    };

    useEffect(() => {
        dispatch(articlePageActions.initState());
        dispatch(fetchArticlesList({ pageNumber: 1 }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducer} removeAfterUnmount>
            <Page onScrollEnd={onLoadNextPart}>
                <ArticleViewSelector viewMode={viewMode} onViewClick={onViewClick} />
                <ArticleList isLoading={isLoading} viewMode={viewMode} articles={articles} />

            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePage);
