import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { classnames } from '@/shared/lib/classnames';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleDetailsComments } from './ArticleDetailsComments/ArticleDetailsComments';
import { VStack } from '@/shared/ui/Stack';
import { articleDetailsPageReducer } from '../model/slice/index';
import { ArticleDetailsPageHeader } from '../ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleRating } from '@/features/ArticleRating';

interface ArticleDetailsPageProps {
    classname?: string;
}

const initialReducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ classname }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('articles-details');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classnames(classname)}>
                {t('Статья не найдена')}
            </div>
        );
    }

    // TODO переделать на VSTACK эту страницу

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <Page
                data-testid="ArticleDetailsPage"
                className={classnames(classname)}
            >
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails articleId={id} />
                    <ArticleRating articleId={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
