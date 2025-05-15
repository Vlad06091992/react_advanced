import { useTranslation } from 'react-i18next';
import { classnames } from 'shared/lib/classnames';
import { AppLink, AppLinkTheme } from 'shared';
import React, { memo } from 'react';
import styles from './SidebarItem.module.scss';
import { SidebarItemTypes } from '../../model/items';

interface SidebarItemProps {
    classname?:string
    item:SidebarItemTypes
    collapsed:boolean

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
