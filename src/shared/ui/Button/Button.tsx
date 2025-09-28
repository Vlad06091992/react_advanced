import React, { ButtonHTMLAttributes, memo } from 'react';
import { classnames } from '@/shared/lib/classnames';
import styles from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    INVERTED_CLEAR = 'invertedClear',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outlineRed',
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
    disabled?: boolean
}

type Mods = Record<string, boolean | undefined>;

// использовать memo где есть children не очень хорошая идея иногда, в 37 уроке это объясняется на 23 минуте
export const Button = memo((props: ButtonProps) => {
    const {
        className, size = ButtonSize.M, square, children, theme = ThemeButton.OUTLINE, disabled = false, ...restProps
    } = props;
    const mods:Mods = {
        [styles.square]: square,
        [styles[size]]: true,
        [styles.disabled]: disabled,
    };

    return (
        <button
            type="button"
            disabled={disabled}
            className={classnames(className, [styles.Button, styles[theme]], mods)}
            {...restProps}
        >
            {children}
        </button>
    );
});
