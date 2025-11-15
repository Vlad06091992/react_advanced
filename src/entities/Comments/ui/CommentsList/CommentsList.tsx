import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classnames } from '@/shared/lib/classnames';
import { Text } from '@/shared/ui/Text';
import { CommentCard } from '../../ui/CommentCard/CommentCard';
import { Comment } from '../../model/types/Comment';
import { VStack } from '@/shared/ui/Stack';

export interface CommentsListProps {
    className?: string;
    isLoading?: boolean | null;
    comments: Comment[];
}

export const CommentsList = memo(
    ({ className, comments, isLoading }: CommentsListProps) => {
        const { t } = useTranslation();

        if (isLoading) {
            return (
                <VStack gap="16" className={classnames(className)}>
                    <CommentCard isLoading />
                    <CommentCard isLoading />
                    <CommentCard isLoading />
                </VStack>
            );
        }

        return (
            <VStack gap="16" className={classnames(className)}>
                {comments?.length ? (
                    comments.map((comment) => (
                        <CommentCard isLoading={isLoading} comment={comment} />
                    ))
                ) : (
                    <Text text={t('Комментарии отсутствуют')} />
                )}
            </VStack>
        );
    },
);
