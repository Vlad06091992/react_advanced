import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const AdminPage = () => {
    const { t, i18n } = useTranslation('about');
    return (<Page>{t('Страница админа')}</Page>);
};

export default AdminPage;
