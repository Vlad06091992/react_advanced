import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { classnames } from 'shared/lib/classnames';
import { CommentsList } from 'entities/Comments';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router';
import { RouterPaths } from 'shared/config/routerConfig/routerConfig';
import { Page } from 'widgets/Page/Page';
import {
    getArticleRecommendationsError,
    getArticleRecommendationsIsLoading
} from 'pages/ArticleDetailsPage/model/selectors/recommendations';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slice';
import { ArticleDetailsPageHeader } from 'pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { fetchArticleRecommendations } from '../../ArticleDetailsPage/services/fetchArticleRecommendations';
import { addCommentForArticle } from '../services/addCommentForArticle';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../model/selectors/comments';
import { getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleRecommendations } from '../model/slice/articleDetailsRecommendationsSlice';

interface ArticleDetailsPageProps {
    classname?: string
}

const initialReducers:ReducerList = {
    articleDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage = ({ classname }: ArticleDetailsPageProps) => {
    const { t, i18n } = useTranslation('articles-details');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsError = useSelector(getArticleRecommendationsError);
    const commentsError = useSelector(getArticleCommentsError);

    const onSendComment = useCallback((text:string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    }, [id, dispatch]);
    if (!id) {
        return (
            <div className={classnames(classname)}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <Page className={classnames(cls.articleDetailsPage, [classname])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails articleId={id} />
                <Text size={TextSize.L} className={cls.commentTitle} title={t('Рекоммендации')} />
                <ArticleList target="_blank" className={cls.recommendations} articles={recommendations} isLoading={recommendationsIsLoading} />
                <Text size={TextSize.L} className={cls.commentTitle} title={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentsList
                    comments={comments}
                    isLoading={commentsIsLoading}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
