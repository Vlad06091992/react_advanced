import React, { memo, useState } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import Notification from 'shared/assets/icons/notification-20-20.svg';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';
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
                {/* шаг 4 - оборачиваем контекстом ту часть приложения, куда хотим прокинуть данные */}
                <AnimationProvider>
                    <Drawer onClose={onCloseDrawer} isOpen={op}><NotificationList /></Drawer>
                </AnimationProvider>
            </MobileView>

        </div>

    );
});
