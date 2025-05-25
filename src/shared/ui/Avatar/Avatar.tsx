import { Link, LinkProps } from 'react-router-dom';
import React, {
    CSSProperties,
    FC, memo, ReactNode, useMemo
} from 'react';
import { classnames } from 'shared/lib/classnames';
import styles from './Avatar.module.scss';

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?:string
}

export const Avatar: FC<AvatarProps> = memo((props:AvatarProps) => {
    const {
        className, src, size, alt = 'аватар'
    } = props;

    const memoStylesObj = useMemo<CSSProperties>(() => ({
        width: `${size}px`,
        height: `${size}px`
    }), [size]);

    return (<img alt={alt} style={memoStylesObj} src={src} className={classnames(styles.Avatar, [className])} />);
});
