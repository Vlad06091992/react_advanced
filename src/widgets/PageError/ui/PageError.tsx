import React from 'react';
import {classnames} from 'shared/lib/classnames';
import {useTranslation} from 'react-i18next';
import {Button} from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';

interface NavbarProps {
    classname?: string
}

export const PageError = ({ classname }: NavbarProps) => {
    const { t, i18n } = useTranslation();

    const reload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classnames('classname',[styles.PageError])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <button onClick={reload}>{t('Перезагрузить страницу')}</button>
        </div>
    );
};
