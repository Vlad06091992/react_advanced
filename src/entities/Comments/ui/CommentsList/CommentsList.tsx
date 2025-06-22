import { memo } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classnames } from 'shared/lib/classnames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from 'entities/Comments/ui/CommentCard/CommentCard';
import { Comment } from 'entities/Comments/model/types/Comment';
import cls from './CommentsList.module.scss';

export interface CommentsListProps {
    className?:string
    isLoading:boolean;
    comments:Comment[]
}

export const CommentsList = memo(({ className, comments, isLoading } : CommentsListProps) => {
    const dispatch = useAppDispatch();
    const { t, i18n } = useTranslation();
    return (
        <div className={classnames(className)}>
            {comments?.length ? comments.map((comment) => <CommentCard isLoading={false} className={cls.comment} comment={comment} />) : <Text text={t('Комментариев отсутствуют')} />}
        </div>
    );
});
