import './styles/index.scss'
import './styles/reset.scss'
import {Link, Route, Routes} from "react-router-dom";
import React, {Suspense, useContext, useState} from "react";
import {classnames} from "shared/lib/classnames";
import {useTheme} from "app/providers/ThemeProvider";
import {HomePage} from "pages/HomePage";
import {AboutPage} from "pages/AboutPage";
export const App = () => {
    const {theme,toggleTheme} = useTheme()

    return(
        <div className={classnames('app',[theme])}>hello world
        <button onClick={toggleTheme}>setTheme</button>
        <Link to={'/'}>Главная страница</Link>
        <Link to={'/about'}>О сайте</Link>
        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </Suspense>
    </div>)
}
