import React, { memo, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Popover } from '@/shared/ui/Popups';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { NotificationList } from '@/entities/Notification';
import Notification from '@/shared/assets/icons/notification-20-20.svg';
import { Drawer } from '@/shared/ui/Drawer';
import styles from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string

}

export const NotificationButton = memo(({ className }: NotificationButtonProps) => {
    const [op, setOp] = useState(false);

    const onOpenDrawer = () => setOp(true);
    const onCloseDrawer = () => setOp(false);

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ThemeButton.CLEAR}>
            <Icon theme="inverted" Svg={Notification} />
        </Button>
    );
    return (
        <div>
            <BrowserView>
                <Popover
                    className={className}
                    dropDownDirection="down-left"
                    trigger={trigger}
                >
                    <NotificationList className={styles.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer onClose={onCloseDrawer} isOpen={op}><NotificationList /></Drawer>
            </MobileView>

        </div>

    );
});
