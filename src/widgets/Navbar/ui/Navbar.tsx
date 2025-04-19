import React from 'react';
import { classnames } from 'shared/lib/classnames';
import { AppLink, Theme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
    classname?: string
}

export const Navbar = ({ classname }: NavbarProps) => (
    <div className={classnames(styles.navbar, [classname])}>
        <div className={styles.links}>
            <AppLink theme={Theme.PRIMARY} className={styles.links} to="/">Главная страница</AppLink>
            <AppLink theme={Theme.PRIMARY} to="/about">О сайте</AppLink>
        </div>

    </div>
);
