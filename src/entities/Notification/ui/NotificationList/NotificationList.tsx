import { memo } from 'react';
import { classnames } from '@/shared/lib/classnames';
import { VStack } from '@/shared/ui/Stack';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { Skeleton } from '@/shared/ui/Skeleton';
import { useGetNotificationsListQuery } from '../../api/notificationApi';

interface NotificationListProps {
    className?: string

}

export const NotificationList = memo(({ className }: NotificationListProps) => {
    const { data: notifications = [], isLoading } = useGetNotificationsListQuery(null, { pollingInterval: 15000 });

    if (isLoading) {
        return (
            <VStack
                className={classnames(className)}
                gap="16"
                max
            >
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
            </VStack>
        );
    }

    return (
        <VStack
            className={classnames(className)}
            gap="16"
            max
        >
            {notifications.map((n) => <NotificationItem key={n.id} item={n} />)}
        </VStack>
    );
});

// t('Редактировать')
