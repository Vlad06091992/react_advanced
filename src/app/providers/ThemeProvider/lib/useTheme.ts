import {useContext} from "react";
import {Theme, ThemeContext} from "app/providers/ThemeProvider/lib/ThemeContext";

interface UseThemeResult {
    theme:string,
    toggleTheme: ()=> void
}

export const useTheme = ():UseThemeResult =>{
    const { theme,setTheme} = useContext(ThemeContext)
    const toggleTheme = () => {
        let mode = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme( mode)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY,mode)
    }

    return {theme,toggleTheme}

}


export const LOCAL_STORAGE_THEME_KEY = 'theme';
