import { classnames } from 'shared/lib/classnames';
import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Icon.module.scss';

export interface IconProps {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo(({ className, Svg }: IconProps) => {
    const { t } = useTranslation();

    return (
        <Svg className={(classnames(className, [styles.icon]))} />
    );
});
