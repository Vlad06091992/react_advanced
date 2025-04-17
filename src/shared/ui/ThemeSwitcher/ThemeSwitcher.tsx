import React, {FC} from "react";
import {useTheme, Theme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {Button, ThemeButton} from "shared/ui/Button/Button";


interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const {theme,toggleTheme} = useTheme()
    console.log(theme)
    return <Button theme={ThemeButton.CLEAR} onClick={toggleTheme}>
        {theme === Theme.LIGHT ? <LightIcon/> : <DarkIcon/>}
    </Button>
}