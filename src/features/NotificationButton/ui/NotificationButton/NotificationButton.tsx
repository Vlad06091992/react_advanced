import { classnames } from 'shared/lib/classnames';
import { Fragment, memo } from 'react';
import { RouterPaths } from 'shared/config/routerConfig/routerConfig';
import { Popover } from 'shared/ui/Popups';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import Notification from 'shared/assets/icons/notification-20-20.svg';
import styles from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?:string

}

export const NotificationButton = memo(({ className }:NotificationButtonProps) => (
    <Popover
        className={className}
        dropDownDirection="down-left"
        trigger={(
            <Button theme={ThemeButton.CLEAR}>
                <Icon theme="inverted" Svg={Notification} />
            </Button>
        )}
    >
        <NotificationList className={styles.notifications} />
    </Popover>
));
