import React, {
    FC, HTMLAttributes, memo, ReactNode
} from 'react';
import { classnames } from 'shared/lib/classnames';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import cls from './Card.module.scss';

export enum CardTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: ReactNode
}

export const Card: FC<CardProps> = memo(({ className, children, ...otherProps }) => {
    const [isHover, useHoverFuncs] = useHover();

    return (
        <div
            {...useHoverFuncs}
            className={classnames(cls.card, [className])}
            {...otherProps}
        >
            {children}
        </div>

    );
});
