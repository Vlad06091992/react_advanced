import { useTranslation } from 'react-i18next';
import { classnames } from 'shared/lib/classnames';

interface Cprops {
    classname?:string

}

export const C = ({ classname }:Cprops) => {
    const { t, i18n } = useTranslation('about');
    return (<div className={classnames(classname)}>{t('О сайте')}</div>);
};
