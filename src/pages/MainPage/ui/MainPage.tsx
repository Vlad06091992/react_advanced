import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';

const MainPage = (props:any) => {
    const { t, i18n } = useTranslation();

    const [value, setValue] = useState('');
    return (
        <div>
            <div>{t('Главная страница')}</div>
        </div>
    );
};

export default MainPage;
