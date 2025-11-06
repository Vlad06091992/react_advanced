import React, {
    CSSProperties, FC, memo, useMemo
} from 'react';
import { classnames } from '@/shared/lib/classnames';
import styles from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import UserIcon from '../../assets/icons/user-filled.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
    fallbackInverted?: boolean
}

export const Avatar: FC<AvatarProps> = memo((props: AvatarProps) => {
    const {
        className, src, size = 100, alt = 'аватар', fallbackInverted
    } = props;

    const memoStylesObj = useMemo<CSSProperties>(() => ({
        width: `${size}px`,
        height: `${size}px`
    }), [size]);

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = (
        <Icon
            theme={fallbackInverted ? 'inverted' : 'primary'}
            width={size}
            height={size}
            Svg={UserIcon}
        />
    );

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            alt={alt}
            style={memoStylesObj}
            src={src}
            className={classnames(styles.Avatar, [className])}
        />
    );
});
