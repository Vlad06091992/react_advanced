import { classnames } from 'shared/lib/classnames';
import { CSSProperties } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?:string
    height?:string | number
    width?:string | number
    border ?:string | number
}

export const Skeleton = (props:SkeletonProps) => {
    const {
        height, width, border, className
    } = props;
    const styles:CSSProperties = { height, width, borderRadius: border };

    return (<div style={styles} className={classnames(cls.Skeleton, [className])} />
    );
};
