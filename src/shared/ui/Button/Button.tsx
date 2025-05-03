import React, { ButtonHTMLAttributes, FC } from 'react';
import { classnames } from 'shared/lib/classnames';
import styles from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    INVERTED_BACKGROUND = 'invertedBackground',
}

export enum ButtonSize {
    M= 'size_m',
    L= 'size_l',
    XL= 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ThemeButton
    square?: boolean
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, size = ButtonSize.M, square, children, theme, ...restProps
    } = props;
    const mods:Record<string, boolean> = {
        [styles.square]: square,
        [styles[size]]: true,
    };

    return (
        <button
            className={classnames(className, [styles.Button, styles[theme]], mods, true)}
            {...restProps}
        >
            {children}
        </button>
    );
};
