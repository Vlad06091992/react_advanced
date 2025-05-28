import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const MainPage = (props:any) => {
    const { t, i18n } = useTranslation();

    const [value, setValue] = useState('');
    return (
        <div style={{ color: 'green' }}>
            <div>{t('Главная страница')}</div>
        </div>
    );
};

export default MainPage;
