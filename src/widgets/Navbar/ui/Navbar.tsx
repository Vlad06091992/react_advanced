import React, { useState } from 'react';
import { classnames } from 'shared/lib/classnames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import styles from './Navbar.module.scss';

interface NavbarProps {
    classname?: string
}

export const Navbar = ({ classname }: NavbarProps) => {
    const [open, setOpen] = useState(false);

    const onShowModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    return (
        <div className={classnames(styles.navbar, [classname])}>
            <Button onClick={onShowModal} theme={ThemeButton.INVERTED_CLEAR}>Войти</Button>
            <LoginModal onClose={onCloseModal} isOpen={open} />
        </div>
    );
};
