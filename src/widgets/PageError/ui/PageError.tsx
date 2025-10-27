import React from 'react';
import { useTranslation } from 'react-i18next';
import { classnames } from '@/shared/lib/classnames';
import { Button } from '@/shared/ui/Button';
import styles from './PageError.module.scss';

interface NavbarProps {
    classname?: string
}

export const PageError = ({ classname }: NavbarProps) => {
    const { t } = useTranslation();

    const reload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classnames(classname, [styles.PageError])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reload}>{t('Перезагрузить страницу')}</Button>
        </div>
    );
};
