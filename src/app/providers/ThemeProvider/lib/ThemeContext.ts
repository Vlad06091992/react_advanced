import { createContext } from 'react';

export enum Theme {
    LIGHT='light', DARK = 'dark'
}

interface ThemeProps {
    theme?:string,
    setTheme? : (theme:Theme)=>void
}

export const ThemeContext = createContext<ThemeProps>({});
