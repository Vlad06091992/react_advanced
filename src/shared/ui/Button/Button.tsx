import React, {ButtonHTMLAttributes, FC} from "react";
import {classnames} from "shared/lib/classnames";
import styles from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {className, children, theme = ThemeButton.CLEAR, ...restProps} = props
    return <button className={classnames(className,[styles.Button,styles[theme]],{})} {...restProps}>{children}</button>
}