import React, { FC, memo, useState } from 'react';
import { classnames } from 'shared/lib/classnames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { getSidebarItemsList } from '../../model/selector/getSidebarItems';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const isAuth = useSelector(getUserAuthData);
    const sidebarItemsList = useSelector(getSidebarItemsList);
    const onToggle = () => setCollapsed(!collapsed);
    return (
        <menu
            data-testid="sidebar"
            className={classnames(styles.Sidebar, [], { [styles.collapsed]: collapsed })}
        >
            <Button
                size={ButtonSize.L}
                square
                theme={ThemeButton.INVERTED_BACKGROUND}
                className={styles.collapsedBtn}
                data-testid="sidebar_toggle_button"
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={classnames(styles.links, [className])}>
                {sidebarItemsList.filter((s) => {
                    if (s.authOnly && !isAuth) return false;
                    return true;
                }).map((item) => (<SidebarItem key={item.text} collapsed={collapsed} item={item} />))}
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={styles.langSwitcher} />
            </div>
        </menu>
    );
});
