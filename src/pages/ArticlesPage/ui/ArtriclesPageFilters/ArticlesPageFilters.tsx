import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { classnames } from '@/shared/lib/classnames';
import {
    ArticleSortFields,
    ArticlesViewMode,
    ArticleType,
    SortOrder,
} from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';

import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useThrottle';

import { TabItem } from '@/shared/ui/Tabs';
import {
    getArticlesPageSearchSubstr,
    getArticlesPageSortBy,
    getArticlesPageSortOrder,
    getArticlesPageType,
    getArticlesPageViewMode,
} from '../../model/selectors/articlePageSelectors';
import { articlesPageActions } from '../../model/slices/articlePageSlice';
import cls from './ArtriclesPageFilters.module.scss';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';

export const ArticlesPageFilters = () => {
    const { t } = useTranslation('about');
    const dispatch = useAppDispatch();

    const viewMode = useSelector(getArticlesPageViewMode);
    const sortBy = useSelector(getArticlesPageSortBy);
    const sortOrder = useSelector(getArticlesPageSortOrder);
    const searchSubstr = useSelector(getArticlesPageSearchSubstr);
    const articleType = useSelector(getArticlesPageType);

    const fetchdata = useDebounce(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, 500);

    const onViewClick = useCallback(
        (viewMode: ArticlesViewMode) => {
            dispatch(articlesPageActions.setViewMode(viewMode));
            dispatch(articlesPageActions.setPage(1));
            fetchdata();
        },
        [dispatch, fetchdata],
    );

    const onChangeSortOrder = useCallback(
        (sortOrder: SortOrder) => {
            dispatch(articlesPageActions.setOrder(sortOrder));
            dispatch(articlesPageActions.setPage(1));
            fetchdata();
        },
        [dispatch, fetchdata],
    );

    const onChangeSortBy = useCallback(
        (sortField: ArticleSortFields) => {
            dispatch(articlesPageActions.setSortBy(sortField));
            dispatch(articlesPageActions.setPage(1));
            fetchdata();
        },
        [dispatch, fetchdata],
    );

    const onChangeSearchSubString = useCallback(
        (value: string) => {
            dispatch(articlesPageActions.setSearchSubString(value));
            dispatch(articlesPageActions.setPage(1));
            fetchdata();
        },
        [dispatch, fetchdata],
    );

    const onChangeArticleType = useCallback(
        (tab: TabItem) => {
            dispatch(
                articlesPageActions.setArticlesType(tab.value as ArticleType),
            );
            dispatch(articlesPageActions.setPage(1));
            fetchdata();
        },
        [dispatch, fetchdata],
    );

    return (
        <div className={classnames(cls.articlePageFilters)}>
            <div className={classnames(cls.sortWrapper)}>
                <ArticleSortSelector
                    sortOrder={sortOrder}
                    sortBy={sortBy}
                    onChangeSortOrder={onChangeSortOrder}
                    onChangeSortBy={onChangeSortBy}
                />
                <ArticleViewSelector
                    viewMode={viewMode}
                    onViewClick={onViewClick}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    value={searchSubstr}
                    onChange={onChangeSearchSubString}
                    placeholder={t('Поиск')}
                />
            </Card>
            <ArticleTypeTabs
                value={articleType}
                onChangeType={onChangeArticleType}
                className={cls.tabs}
            />
        </div>
    );
};

// t('Редактировать')
