import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import { Text, TextSize } from '@/shared/ui/Text';
import { classnames } from '@/shared/lib/classnames';
import {Article, ArticlesViewMode} from '../../model/types/Article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    virtualized?: boolean
    viewMode?: ArticlesViewMode
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticlesViewMode) => new Array(view === ArticlesViewMode.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} viewMode={view} />
    ));

export const ArticleList = ({
    className,
    isLoading,
    articles,
    target,
    viewMode = ArticlesViewMode.SMALL,
// eslint-disable-next-line consistent-return
}: ArticleListProps) => {
    const { t } = useTranslation('about');

    if (!isLoading && !articles?.length) {
        return (
            <div className={classnames(className, [cls[viewMode]], {})}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div
            className={classnames(cls.ArticleList, [className, cls[viewMode]])}
        >
            {articles.map((item) => (
                <ArticleListItem
                    article={item}
                    viewMode={viewMode}
                    target={target}
                    key={item.id}
                    className={cls.card}
                />
            ))}
            {isLoading && getSkeletons(viewMode)}
        </div>

    );
};
