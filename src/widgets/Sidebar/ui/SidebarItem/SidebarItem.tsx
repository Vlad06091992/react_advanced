import { useTranslation } from 'react-i18next';
import { classnames } from 'shared/lib/classnames';
import React, { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './SidebarItem.module.scss';
import { SidebarItemTypes } from '../../types/sidebar';

interface SidebarItemProps {
    classname?:string
    item:SidebarItemTypes
    collapsed:boolean
    authOnly?:boolean

}

export const SidebarItem = memo(({ classname, item: { Icon, path, text }, collapsed }:SidebarItemProps) => {
    const { t, i18n } = useTranslation('about');
    return (
        <AppLink className={classnames(styles.link, [classname], { [styles.collapsed]: collapsed })} theme={AppLinkTheme.SECONDARY} to={path}>
            <Icon className={styles.icon} />
            <span className={styles.linkText}>{t(`${text}`)}</span>
        </AppLink>
    );
});
