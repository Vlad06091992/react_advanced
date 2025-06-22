import { memo } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classnames } from 'shared/lib/classnames';
import { Comment } from 'entities/Comments/model/types/Comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentCard.module.scss';

export interface CommentCardProps {
    className?:string
    comment:Comment
    isLoading:boolean
}

export const CommentCard = memo(({ className, comment, isLoading } : CommentCardProps) => {
    const { user, id, text } = comment;

    if (isLoading) {
        return (
            <div className={classnames(className, [cls.commentCard])}>
                <div className={cls.header}>
                    <Skeleton border="50%" height={30} width={30} />
                    <Skeleton className={cls.username} height={16} width={100} />
                </div>
                <Skeleton className={cls.text} height={50} width="100%" />
            </div>
        );
    }

    return (
        <div className={classnames(className, [cls.commentCard])}>
            <div className={cls.header}>
                {user.avatar && <Avatar size={30} src={user.avatar} />}
                <Text className={cls.username} title={user.username} />
            </div>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
});
