import React, {FC} from "react";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";


interface ThemeSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const { t, i18n } = useTranslation();

  const toggle = () => i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")

  return (<Button className={className} theme={ThemeButton.CLEAR} onClick={toggle}>{t('Язык')}</Button>)
}