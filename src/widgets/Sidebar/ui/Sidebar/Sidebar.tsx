import React, { memo, useState } from 'react';
import { classnames } from '@/shared/lib/classnames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { VStack } from '@/shared/ui/Stack';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItemsList } from '../../model/selector/getSidebarItems';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }:SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const isAuth = useSelector(getUserAuthData);
    const sidebarItemsList = useSelector(getSidebarItemsList);
    const onToggle = () => setCollapsed(!collapsed);
    return (
        <aside
            data-testid="sidebar"
            className={classnames(styles.Sidebar, [className], { [styles.collapsed]: collapsed })}
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

            <VStack role="navigation" gap="8" className={classnames(styles.links, [className])}>
                {sidebarItemsList.filter((s) => {
                    if (s.authOnly && !isAuth) return false;
                    return true;
                }).map((item) => (<SidebarItem key={item.text} collapsed={collapsed} item={item} />))}
            </VStack>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={styles.langSwitcher} />
            </div>
        </aside>
    );
});
