import { classnames } from 'shared/lib/classnames';
import React, { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme;
}

export const Text: FC<TextProps> = ({
    className, title, text, theme,
}) => {
    const { t } = useTranslation();

    return (
        <div className={classnames(classnames(className, [styles[theme]]))}>
            {title && <p className={styles.title}>{title}</p>}
            <p className={styles.text}>{text}</p>
        </div>
    );
};
