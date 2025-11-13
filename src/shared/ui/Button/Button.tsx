import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react';
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
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
     */
    theme?: ThemeButton;
    /**
     * Флаг, делающий кнопку квадратной
     */
    square?: boolean;
    /**
     * Увеличивает кнопку на всю свободную ширину
     */
    fullWidth?: boolean;
    /**
     * Размер кнопки в соответствии с дизайн системой
     */
    size?: ButtonSize;
    /**
     * Флаг, отвечающий за работу кнопки
     */
    disabled?: boolean;
    /**
     * Содержимое кнопки
     */
    children?: ReactNode;
}

type Mods = Record<string, boolean | undefined>;

// использовать memo где есть children не очень хорошая идея иногда, в 37 уроке это объясняется на 23 минуте
export const Button = memo((props: ButtonProps) => {
    const {
        className,
        size = ButtonSize.M,
        square,
        children,
        theme = ThemeButton.OUTLINE,
        fullWidth,
        disabled = false,
        ...restProps
    } = props;
    const mods: Mods = {
        [styles.square]: square,
        [styles[size]]: true,
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth,
    };

    return (
        <button
            type="button"
            disabled={disabled}
            className={classnames(
                className,
                [styles.Button, styles[theme]],
                mods,
            )}
            {...restProps}
        >
            {children}
        </button>
    );
});
