import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@/shared/ui/Button';

interface ThemeSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher = memo(({ short, className }:ThemeSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    return (
        <Button
            className={className}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
});
