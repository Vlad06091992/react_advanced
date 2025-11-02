import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPage = () => {
    const { t } = useTranslation('about');
    return (<Page>{t('Страница админа')}</Page>);
};

export default AdminPage;
