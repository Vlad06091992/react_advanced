import React, { FC, memo } from 'react';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/const/theme';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(() => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button theme={ThemeButton.CLEAR} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
});
