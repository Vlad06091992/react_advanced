import '../src/styles/index.scss'
import '../src/styles/reset.scss'
import {Link, Route, Routes} from "react-router-dom";
import React, {Suspense, useContext, useState} from "react";
import {HomePageLazy} from "./pages/HomePage/HomePage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {useTheme} from "./theme/useTheme";



export const App = () => {
    const {theme,toggleTheme} = useTheme()

    return (<div className={`app ${theme}`}>hello world
        <button onClick={toggleTheme}>setTheme</button>
        <Link to={'/'}>Главная страница</Link>
        <Link to={'/about'}>О сайте</Link>
        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                <Route path="/" element={<HomePageLazy/>}/>
                <Route path="/about" element={<AboutPageLazy/>}/>
            </Routes>
        </Suspense>
    </div>)
}
