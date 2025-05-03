import React, { FC, useState } from 'react';
import { classnames } from 'shared/lib/classnames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared';
import { RouterPaths } from 'shared/config/routerConfig/routerConfig';
import About from 'shared/assets/icons/about-20-20.svg';
import Main from 'shared/assets/icons/main-20-20.svg';
import { useTranslation } from 'react-i18next';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t, i18n } = useTranslation();
    // return (<div>{t('Главная страница')}</div>);
    const onToggle = () => setCollapsed(!collapsed);
    return (
        <div
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

            <div className={styles.links}>
                <AppLink className={styles.link} theme={AppLinkTheme.SECONDARY} to={RouterPaths.main}>
                    <About className={styles.icon} />
                    <span className={styles.linkText}>{t('Главная страница')}</span>
                </AppLink>
                <AppLink className={styles.link} theme={AppLinkTheme.SECONDARY} to={RouterPaths.about}>
                    <Main className={styles.icon} />
               <span className={styles.linkText}>{t('О сайте')}</span>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={styles.langSwitcher} />
            </div>
        </div>
    );
};
