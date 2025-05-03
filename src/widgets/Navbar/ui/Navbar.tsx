import React from 'react';
import { classnames } from 'shared/lib/classnames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
    classname?: string
}

export const Navbar = ({ classname }: NavbarProps) => (
    <div className={classnames(styles.navbar, [classname])}>
        <div className={styles.links}>

        </div>

    </div>
);
