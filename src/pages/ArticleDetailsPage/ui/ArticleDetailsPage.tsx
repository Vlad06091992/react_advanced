import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import { classnames } from '@/shared/lib/classnames';
import { CommentsList } from '@/entities/Comments';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from '@/features/AddCommentForm';
import { Page } from '@/widgets/Page/Page';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleDetailsComments } from '@/pages/ArticleDetailsPage/ui/ArticleDetailsComments/ArticleDetailsComments';
import { VStack } from '@/shared/ui/Stack';
import { articleDetailsPageReducer } from '../model/slice/index';
import { ArticleDetailsPageHeader } from '../ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { fetchArticleRecommendations } from '../../ArticleDetailsPage/services/fetchArticleRecommendations';
import { addCommentForArticle } from '../services/addCommentForArticle';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import { getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    classname?: string
}

const initialReducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer
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
            <Page className={classnames(cls.articleDetailsPage, [classname])}>
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails articleId={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
