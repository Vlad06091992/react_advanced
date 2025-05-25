import { useTranslation } from 'react-i18next';
import { classnames } from 'shared/lib/classnames';

interface CProps {
    classname?:string

}

export const C = ({ classname }:CProps) => {
    const { t, i18n } = useTranslation('about');
    return (<div className={classnames(classname)}>{t('О сайте')}</div>);
};

// t('Редактировать')
