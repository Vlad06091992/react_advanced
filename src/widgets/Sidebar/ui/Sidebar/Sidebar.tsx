import React, { FC, useState } from 'react';
import { classnames } from 'shared/lib/classnames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => setCollapsed(!collapsed);
    return (
        <div
            data-testid="sidebar"
            className={classnames(styles.Sidebar, [], { [styles.collapsed]: collapsed })}
        >
            <button data-testid="sidebar_toggle_button" onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.langSwitcher} />
            </div>
        </div>
    );
};
