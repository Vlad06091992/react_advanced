import './styles/index.scss'
import './styles/reset.scss'
import React from "react";
import {classnames} from "shared/lib/classnames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router/ui/AppRouter";
import {Link} from "react-router-dom";

export const App = () => {
    const {theme,toggleTheme} = useTheme()

    return(
        <div className={classnames('app',[theme])}>hello world
            <button onClick={toggleTheme}>setTheme</button>
            <Link to={'/'}>Главная страница</Link>
            <Link to={'/about'}>О сайте</Link>
       <AppRouter/>

    </div>)
}
