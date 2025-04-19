import { Link, LinkProps } from 'react-router-dom';
import React, { FC } from 'react';
import { classnames } from 'shared/lib/classnames';
import styles from './AppLink.module.scss';

export enum Theme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: string
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to, className, children, theme = Theme.PRIMARY, ...restProps
    } = props;

    return (
        <Link to={to} className={classnames(className, [styles[theme]])} {...restProps}>
            {children}
        </Link>
    );
};
