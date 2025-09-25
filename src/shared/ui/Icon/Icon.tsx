import { classnames } from 'shared/lib/classnames';
import React, { memo } from 'react';
import styles from './Icon.module.scss';

export interface IconProps {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    theme?: 'primary' | 'inverted';
}

export const Icon = memo(({ className, Svg, theme = 'primary' }: IconProps) => (
    <Svg className={(classnames(className, [styles.icon], { [styles.inverted]: theme === 'inverted' }))} />
));
