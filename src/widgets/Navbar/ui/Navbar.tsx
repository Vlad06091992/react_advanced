import React, { memo, useCallback, useState } from 'react';
import { classnames } from 'shared/lib/classnames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import styles from './Navbar.module.scss';

interface NavbarProps {
    classname?: string
}

export const Navbar = memo(({ classname }: NavbarProps) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const authData = useSelector(getUserAuthData);

    const onShowModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classnames(styles.navbar, [classname])}>
                <Button onClick={onLogout} theme={ThemeButton.INVERTED_CLEAR}>Выйти</Button>
            </div>
        );
    }

    return (
        <div className={classnames(styles.navbar, [classname])}>
            <Button onClick={onShowModal} theme={ThemeButton.INVERTED_CLEAR}>Войти</Button>
            { open && <LoginModal onClose={onCloseModal} isOpen={open} /> }
        </div>
    );
});
