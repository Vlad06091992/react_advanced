import { useTranslation } from 'react-i18next';
import styles from './NotFound.module.scss';

export const NotFoundPage = (props:any) => {
    const { t, i18n } = useTranslation();
    return (
        <div className={styles.NotFoundPage}>{t('Страница не найдена')}</div>);
};
