import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import { Text, TextSize } from '@/shared/ui/Text';
import { classnames } from '@/shared/lib/classnames';
import { ArticlesViewMode } from '../../model/types/Article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string
    articles: any
    isLoading?: boolean
    virtualized?: boolean
    viewMode?: ArticlesViewMode
    target?: HTMLAttributeAnchorTarget
}

export const ArticleList = ({
    className,
    isLoading,
    articles,
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
};
