import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { classnames } from 'shared/lib/classnames';
import { VStack } from 'shared/ui/Stack';
import {
    useGetArticleRecommendationsListQuery
} from '../../api/articleRecommendationsListApi';

// import cls from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data: articles = [], isLoading } = useGetArticleRecommendationsListQuery(4);

    return (
        <VStack gap="8" className={classnames('', [className], {})}>
            <Text size={TextSize.L} className="" title={t('Рекоммендации')} />
            <ArticleList
                target="_blank"
                className=""
                articles={articles}
                isLoading={isLoading}
            />
        </VStack>
    );
});
