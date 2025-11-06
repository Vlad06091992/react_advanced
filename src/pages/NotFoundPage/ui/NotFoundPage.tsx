import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import styles from './NotFound.module.scss';

export const NotFoundPage = () => {
    const { t } = useTranslation();
    return (
        <Page>
            <div data-testid="NotFoundPage" className={styles.NotFoundPage}>{t('Страница не найдена')}</div>
        </Page>
    );
};
