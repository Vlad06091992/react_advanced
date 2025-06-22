import { classnames } from 'shared/lib/classnames';
import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export enum TextAlign {
    LEFT='left',
    RIGHT='right',
    CENTER='center',
}

export interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text: FC<TextProps> = memo(({
    className, size = TextSize.M, title, text, theme = 'primary', align = TextAlign.LEFT
}) => {
    const { t } = useTranslation();

    return (
        <div className={(classnames(className, [styles[theme], styles[align], styles[size]]))}>
            {title && <p className={styles.title}>{title}</p>}
            <p className={styles.text}>{text}</p>
        </div>
    );
});
