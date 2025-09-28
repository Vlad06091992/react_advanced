import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

const ForbiddenPage = () => {
    const { t, i18n } = useTranslation('about');
    return (<Page>{t('Нет доступа к этой странице')}</Page>);
};

export default ForbiddenPage;
