import React, { memo } from 'react';
import { classnames } from '@/shared/lib/classnames';
import styles from './Icon.module.scss';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    theme?: 'primary' | 'inverted';
    width?: number;
}

export const Icon = memo(({
    className, Svg, theme = 'primary', ...rest
}: IconProps) => (
    <Svg className={(classnames(className, [styles.icon], { [styles.inverted]: theme === 'inverted' }))} {...rest} />
));
