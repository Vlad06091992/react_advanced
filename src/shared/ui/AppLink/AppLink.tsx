import { Link, LinkProps } from 'react-router-dom';
import React, { FC, memo, ReactNode } from 'react';
import { classnames } from 'shared/lib/classnames';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: string
    children?:ReactNode
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
    const {
        to, className, children, theme = AppLinkTheme.PRIMARY, ...restProps
    } = props;

    return (
        <Link to={to} className={classnames(className, [styles[theme]])} {...restProps}>
            {children}
        </Link>
    );
});
