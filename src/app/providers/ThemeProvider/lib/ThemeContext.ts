import { createContext } from 'react';

export enum Theme {
    LIGHT='app_light_theme', DARK = 'app_dark_theme'
}

interface ThemeProps {
    theme?:string,
    setTheme? : (theme:Theme)=>void
}

export const ThemeContext = createContext<ThemeProps>({});
