import React, { memo } from 'react';
import { classnames } from '@/shared/lib/classnames';
import styles from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

export interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}
type HeaderTags = 'h1' | 'h2' | 'h3';

const titleTags: Record<TextSize, HeaderTags> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
    [TextSize.XL]: 'h1',
};

export const Text = memo(
    ({
        className,
        size = TextSize.M,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
    }: TextProps) => {
        const HeaderTag = titleTags[size];

        return (
            <div
                className={classnames(className, [
                    styles[theme],
                    styles[align],
                    styles[size],
                ])}
            >
                {title && (
                    <HeaderTag className={styles.title}>{title}</HeaderTag>
                )}
                <p className={styles.text}>{text}</p>
            </div>
        );
    },
);
