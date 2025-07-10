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
                <AppLink className={styles.createBtn} theme={AppLinkTheme.SECONDARY} to={RouterPaths.article_create}>Создать статью</AppLink>
                <Button className={styles.exitBtn} onClick={onLogout} theme={ThemeButton.INVERTED_CLEAR}>Выйти</Button>
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
