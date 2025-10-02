import React, {
    FC, HTMLAttributes, memo, ReactNode
} from 'react';
import { classnames } from '@/shared/lib/classnames';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: ReactNode,
    theme?: CardTheme;
    max?: boolean;
}

export const Card: FC<CardProps> = memo(({
    className, children, theme = CardTheme.NORMAL, max = false, ...otherProps
}:CardProps) => {
    const [, useHoverFuncs] = useHover();

    const mods = { [cls.max]: max };
    return (
        <div
            {...useHoverFuncs}
            className={classnames(cls.card, [className, cls[theme]], mods)}
            {...otherProps}
        >
            {children}
        </div>

    );
});
