import { memo } from 'react';
import { classnames } from '@/shared/lib/classnames';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { Notification } from '../../model/types/notification';
import styles from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?:string
    item:Notification

}

export const NotificationItem = memo(({ className, item }:NotificationItemProps) => {
    const content = (
        <Card theme={CardTheme.OUTLINED} className={classnames(className, [styles.notificationItem])}>
            <Text text={item.description} title={item.title} />
        </Card>
    );

    if (item.href) {
        return (
            <a className={styles.link} target="_blank" href={item.href} rel="noreferrer">
                {content}
            </a>
        );
    }

    return content;
});

// t('Редактировать')
