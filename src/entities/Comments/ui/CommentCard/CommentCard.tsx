import { memo } from 'react';
import { classnames } from '@/shared/lib/classnames';
import { Comment } from '../../model/types/Comment';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { RouterPaths } from '@/shared/const/paths';
import { VStack } from '@/shared/ui/Stack';
import cls from './CommentCard.module.scss';

export interface CommentCardProps {
    className?:string
    comment?:Comment
    isLoading?:boolean | null
}

export const CommentCard = memo(({ className, comment, isLoading } : CommentCardProps) => {
    if (isLoading) {
        return (
            <div className={classnames(className, [cls.commentCard, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton border="50%" height={30} width={30} />
                    <Skeleton className={cls.username} height={16} width={100} />
                </div>
                <Skeleton className={cls.text} height={50} width="100%" />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    const { user } = comment;

    return (
        <VStack max gap="8" className={classnames(className, [cls.commentCard])}>
            <AppLink className={classnames(cls.header)} to={`${RouterPaths.profile}${user.id}`}>
                {user.avatar && <Avatar size={30} src={user.avatar} />}
                <Text className={cls.username} title={user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </VStack>
    );
});
