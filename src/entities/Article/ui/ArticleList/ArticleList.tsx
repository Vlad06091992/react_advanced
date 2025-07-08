import { useTranslation } from 'react-i18next';
import { classnames } from 'shared/lib/classnames';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { HTMLAttributeAnchorTarget } from 'react';
import { Article, ArticlesViewMode } from '../../model/types/Article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    viewMode?: ArticlesViewMode
    target?: HTMLAttributeAnchorTarget
}

// eslint-disable-next-line react/no-array-index-key
const getSkeletons = (viewMode:ArticlesViewMode) => new Array(viewMode === 'BIG' ? 3 : 9).fill(0).map((_, index) => <ArticleListItemSkeleton className={cls.card} key={index} viewMode={viewMode} />);

export const ArticleList = ({
    className, isLoading, articles, viewMode = ArticlesViewMode.SMALL, target
}: ArticleListProps) => {
    const { t, i18n } = useTranslation('about');

    const renderArticle = (article:Article) => <ArticleListItem target={target} key={article.id} className={cls.card} viewMode={viewMode} article={article} />;

    if (!isLoading && !articles?.length) {
        return (
            <div className={classnames(className, [cls[viewMode]], {})}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }
    return (
        <div className={classnames(className, [cls[viewMode]], {})}>
            {articles?.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(viewMode)}
        </div>
    );
};
