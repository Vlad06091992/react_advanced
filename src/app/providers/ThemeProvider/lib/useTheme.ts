import { useContext } from 'react';
import { Theme, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

interface UseThemeResult {
    theme:Theme,
    toggleTheme: ()=> void
}

export const useTheme = ():UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        const mode = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme?.(mode);

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, mode);
    };

    return { theme: theme || Theme.LIGHT, toggleTheme };
};
