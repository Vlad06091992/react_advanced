import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import styles from './NotFound.module.scss';

export const NotFoundPage = () => {
    const { t } = useTranslation();
    return (
        <Page>
            <div className={styles.NotFoundPage}>{t('Страница не найдена')}</div>
        </Page>
    );
};
