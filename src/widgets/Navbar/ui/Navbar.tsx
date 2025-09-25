import React, { memo, useState } from 'react';
import { classnames } from 'shared/lib/classnames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RouterPaths } from 'shared/config/routerConfig/routerConfig';
import { HStack } from 'shared/ui/Stack';
import { NotificationButton } from 'features/NotificationButton/';
import { AvatarDropdown } from 'features/AvatarDropdown/ui/AvatarDropdown';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { NotificationList } from 'entities/Notification';
import styles from './Navbar.module.scss';

interface NavbarProps {
    classname?: string
}

export const Navbar = memo(({ classname }: NavbarProps) => {
    const [open, setOpen] = useState(false);

    const authData = useSelector(getUserAuthData);

    const onShowModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    if (authData) {
        return (
            <header className={classnames(styles.navbar, [classname])}>
                <Text theme={TextTheme.INVERTED} className={classnames(styles.appName)} title="react project" />
                <AppLink
                    className={styles.createBtn}
                    theme={AppLinkTheme.SECONDARY}
                    to={RouterPaths.article_create}
                >
                    Создать статью
                </AppLink>
                <HStack className={styles.actions}>

                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>

            </header>
        );
    }

    return (
        <header className={classnames(styles.navbar, [classname])}>
            <Button className={styles.loginBtn} onClick={onShowModal} theme={ThemeButton.INVERTED_CLEAR}>Войти</Button>
            {open && <LoginModal onClose={onCloseModal} isOpen={open} />}
        </header>
    );
});
