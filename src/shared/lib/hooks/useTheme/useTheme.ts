import { useContext } from 'react';
import { Theme } from '../../../const/theme';
import { ThemeContext } from '../../../lib/context/ThemeContext';
// import { Theme, ThemeContext } from '@/shared/context/ThemeContext';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

interface UseThemeResult {
    theme:Theme,
    toggleTheme: ()=> void
}

export const useTheme = ():UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        let mode = Theme.LIGHT;

        switch (theme) {
        case Theme.DARK:
            mode = Theme.ORANGE;
            break;
        case Theme.ORANGE:
            mode = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            mode = Theme.DARK;
            break;
        default:
            mode = Theme.LIGHT;
        }
        setTheme?.(mode);

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, mode);
    };

    return { theme: theme || Theme.LIGHT, toggleTheme };
};
