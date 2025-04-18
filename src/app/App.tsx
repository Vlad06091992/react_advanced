import './styles/index.scss'
import './styles/reset.scss'
import React, {Suspense} from "react";
import {classnames} from "shared/lib/classnames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router/ui/AppRouter";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {useTranslation} from "react-i18next";

const MyComponent =() => {
  const { t, i18n } = useTranslation();

  const toggle = () => i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")

  return (
    <div>
        <button onClick={toggle}>{t('Перевод')}</button>
    <h1>{t('Тестовый перевод')}</h1>

    </div>
  )

}

export const App = () => {
    const {theme} = useTheme()
    return (
        <div className={classnames('app', [theme])}>
            <Suspense fallback={'...'}>
                <MyComponent/>
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>)
}
