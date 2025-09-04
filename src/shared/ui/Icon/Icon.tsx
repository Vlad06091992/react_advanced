import { classnames } from 'shared/lib/classnames';
import React, { memo } from 'react';
import styles from './Icon.module.scss';

export interface IconProps {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo(({ className, Svg }: IconProps) => (
    <Svg className={(classnames(className, [styles.icon]))} />
));
