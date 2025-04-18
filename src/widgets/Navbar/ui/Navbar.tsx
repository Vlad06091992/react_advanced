import React from "react";
import {classnames} from "shared/lib/classnames";
import styles from './Navbar.module.scss'
import {AppLink, Theme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    classname?: string
}

export const Navbar = ({classname}: NavbarProps) => {
    return (
        <div className={classnames(styles.navbar, [classname])}>
            <div className={styles.links}>
                <AppLink theme={Theme.PRIMARY} className={styles.links} to={'/'}>Главная страница</AppLink>
                <AppLink theme={Theme.PRIMARY} to={'/about'}>О сайте</AppLink>
            </div>

        </div>
    )
}