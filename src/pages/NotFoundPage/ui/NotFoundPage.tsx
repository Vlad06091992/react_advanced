import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
import styles from './NotFound.module.scss';

export const NotFoundPage = (props:any) => {
    const { t, i18n } = useTranslation();
    return (
        <Page>
            <div className={styles.NotFoundPage}>{t('Страница не найдена')}</div>
        </Page>
    );
};
