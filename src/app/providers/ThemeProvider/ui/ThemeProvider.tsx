import {ReactElement, useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY} from "../index";
import {Theme, ThemeContext} from "app/providers/ThemeProvider/lib/ThemeContext";



export const ThemeProvider = ({children}: { children: ReactElement }) => {
    const [theme, setTheme] = useState(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT)

    const values = useMemo(() => ({theme, setTheme})
        , [theme])

    return (
        <ThemeContext.Provider value={values}> {children} </ThemeContext.Provider>
    )
}
