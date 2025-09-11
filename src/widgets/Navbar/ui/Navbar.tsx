import React, { memo, useCallback, useState } from 'react';
import { classnames } from 'shared/lib/classnames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RouterPaths } from 'shared/config/routerConfig/routerConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from 'entities/Article/ui/ArticleDetails/ArticleDetails.module.scss';
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

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

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
                        }
                    ]}
                    trigger={
                        <Avatar size={30} className={cls.avatar} src={authData?.avatar} />
                    }
                />
            </header>
        );
    }

    return (
        <header className={classnames(styles.navbar, [classname])}>
            <Button onClick={onShowModal} theme={ThemeButton.INVERTED_CLEAR}>Войти</Button>
            { open && <LoginModal onClose={onCloseModal} isOpen={open} /> }
        </header>
    );
});
