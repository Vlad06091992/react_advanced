import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Page } from 'widgets/Page/Page';

const MainPage = (props:any) => {
    const { t, i18n } = useTranslation();

    const [value, setValue] = useState('');
    return (
        <Page>
            <div>{t('Главная страница')}</div>
        </Page>
    );
};

export default MainPage;
