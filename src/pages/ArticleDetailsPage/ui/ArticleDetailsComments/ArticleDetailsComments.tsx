import { Suspense, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { AddCommentForm } from '@/features/AddCommentForm';
import { CommentsList } from '@/entities/Comments';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentForArticle } from '../../model/services/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import { classnames } from '@/shared/lib/classnames';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { VStack } from '@/shared/ui/Stack';

interface PropsArticleDetailsComments {
    id: string;
    className?:string
}

export const ArticleDetailsComments = ({ id, className }:PropsArticleDetailsComments) => {
    const { t } = useTranslation('articles-details');
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    }, [id, dispatch]);

    // надо будет запрос на создание комментариев сделать через rtk query и сделать инвалидацию запроса
    // const { data: comments = [], isLoading: commentsIsLoading } = useGetCommentsByArticleIdQuery(id);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    return (
        <VStack gap="16" className={classnames(className)}>
            <Text size={TextSize.L} className="" title={t('Комментарии')} />
            <Suspense fallback="Идет загрузка...">
                <AddCommentForm onSendComment={onSendComment} />
            </Suspense>
            <CommentsList
                comments={comments}
                isLoading={commentsIsLoading}
            />
        </VStack>

    );
};
