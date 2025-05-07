import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const MainPage = (props:any) => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <div>{t('Главная страница')}</div>
            <Counter />
        </div>
    );
};

export default MainPage;
