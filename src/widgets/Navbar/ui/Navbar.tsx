import React, { memo, useCallback, useState } from 'react';
import { classnames } from 'shared/lib/classnames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions
} from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RouterPaths } from 'shared/config/routerConfig/routerConfig';
import { Dropdown } from 'shared/ui/Popups/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from 'entities/Article/ui/ArticleDetails/ArticleDetails.module.scss';
import { HStack } from 'shared/ui/Stack';
import Notification from 'shared/assets/icons/notification-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups';
import styles from './Navbar.module.scss';

interface NavbarProps {
    classname?: string
}

export const Navbar = memo(({ classname }: NavbarProps) => {
    const [open, setOpen] = useState(false);
    const dispatch = useAppDispatch();

    const authData = useSelector(getUserAuthData);

    const onShowModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;
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
                <HStack className={cls.actions}>
                    <Popover
                        dropDownDirection="down-left"
                        trigger={(
                            <Button theme={ThemeButton.CLEAR}>
                                <Icon theme="inverted" Svg={Notification} />
                            </Button>
                        )}
                    >
                        popover
                    </Popover>

                    <Dropdown
                        dropDownDirection="down-left"
                        className={cls.dropdown}
                        items={[
                            {
                                content: 'Выйти',
                                onClick: onLogout
                            },
                            {
                                content: 'Профиль',
                                href: RouterPaths.profile + authData.id,
                            },
                            ...(isAdminPanelAvailable ? [{
                                content: 'Админка',
                                href: RouterPaths.admin_panel,
                            }] : [])
                        ]}
                        trigger={
                            <Avatar size={30} className={cls.avatar} src={authData?.avatar} />
                        }
                    />
                </HStack>

            </header>
        );
    }

    return (
        <header className={classnames(styles.navbar, [classname])}>
            <Button className={styles.loginBtn} onClick={onShowModal} theme={ThemeButton.INVERTED_CLEAR}>Войти</Button>
            { open && <LoginModal onClose={onCloseModal} isOpen={open} /> }
        </header>
    );
});
