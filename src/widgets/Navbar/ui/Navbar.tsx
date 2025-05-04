import React, { useState } from 'react';
import { classnames } from 'shared/lib/classnames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
    classname?: string
}

export const Navbar = ({ classname }: NavbarProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={classnames(styles.navbar, [classname])}>
            <Button onClick={() => setOpen(true)} theme={ThemeButton.INVERTED_CLEAR}>Войти</Button>
            <Modal onClose={() => setOpen(false)} isOpen={open}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Modal>
        </div>
    );
};
