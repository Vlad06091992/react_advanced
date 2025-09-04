import React, { HTMLAttributes, memo, ReactNode } from 'react';
import { classnames } from 'shared/lib/classnames';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: ReactNode,
    theme?: CardTheme;
}

export const Card = memo(({
    className, children, theme = CardTheme.NORMAL, ...otherProps
}:CardProps) => {
    const [useHoverFuncs] = useHover();

    return (
        <div
            {...useHoverFuncs}
            className={classnames(cls.card, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>

    );
});
