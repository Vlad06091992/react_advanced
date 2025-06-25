import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { classnames } from 'shared/lib/classnames';
import { CommentsList } from 'entities/Comments';
import { Text } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { addCommentForArticle } from '../services/addCommentForArticle';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../model/selectors/comments';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    classname?: string

}

const initialReducers:ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ classname }: ArticleDetailsPageProps) => {
    const { t, i18n } = useTranslation('articles-details');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);

    if (commentsIsLoading) {
        debugger;
    }

    const onSendComment = useCallback((text:string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
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
            <div className={classnames(classname)}>
                <ArticleDetails articleId={id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentsList
                    comments={comments}
                    isLoading={commentsIsLoading}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
