import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { ArticleList, ArticlesViewMode, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlePage } from 'pages/ArticlesPage/model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlePage } from 'pages/ArticlesPage/model/services/initArticlePage/initArticlePage';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArtriclesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';
import {
    getArticlesPageIsLoading,
    getArticlesPageViewMode
} from '../../model/selectors/articlePageSelectors';

import cls from './ArtriclesPage.module.scss';

const initialReducer = {
    articlesPage: articlesPageReducer
};

const ArticlesPage = () => {
    const { t, i18n } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const viewMode = useSelector(getArticlesPageViewMode);
    const [searchParams, setSearchParams] = useSearchParams();
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    useEffect(() => {
        dispatch(initArticlePage(searchParams));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducer} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart}>
                <ArticlesPageFilters />
                <ArticleList className={cls.list} isLoading={isLoading} viewMode={viewMode} articles={articles} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
