import './styles/index.scss'
import './styles/reset.scss'
import React from "react";
import {classnames} from "shared/lib/classnames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router/ui/AppRouter";
import {Navbar} from "widgets/Navbar/ui/Navbar";

export const App = () => {
const {theme} = useTheme()
    return (
        <div className={classnames('app', [theme])}>
            <Navbar/>
            <AppRouter/>

        </div>)
}
