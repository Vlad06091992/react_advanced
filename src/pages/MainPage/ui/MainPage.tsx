import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <div>{t('Главная страница')}</div>
            fsdfsdfs
        </Page>
    );
};

export default MainPage;
