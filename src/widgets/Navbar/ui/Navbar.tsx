import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classnames } from '@/shared/lib/classnames';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { getRouteArticleCreate } from '@/shared/const/paths';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import styles from './Navbar.module.scss';

interface NavbarProps {
    classname?: string;
}

export const Navbar = memo(({ classname }: NavbarProps) => {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);

    const onShowModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    if (authData) {
        return (
            <header className={classnames(styles.navbar, [classname])}>
                <Text
                    theme={TextTheme.INVERTED}
                    className={classnames(styles.appName)}
                    title="react project"
                />
                <AppLink
                    className={styles.createBtn}
                    theme={AppLinkTheme.SECONDARY}
                    to={getRouteArticleCreate()}
                >
                    {t('Создать статью')}
                </AppLink>
                <HStack className={styles.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classnames(styles.navbar, [classname])}>
            <Button
                className={styles.loginBtn}
                onClick={onShowModal}
                theme={ThemeButton.INVERTED_CLEAR}
            >
                {t('Войти')}
            </Button>
            {open && <LoginModal onClose={onCloseModal} isOpen={open} />}
        </header>
    );
});
