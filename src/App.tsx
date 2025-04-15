import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";
import {HomePageLazy} from "./pages/HomePage/HomePage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";


export const App = () => {
    return (<div className='app'>hello world
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
