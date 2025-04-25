// import { useTranslation } from 'react-i18next';

// import { useTranslation } from 'react-i18next';

import { useTranslation } from 'react-i18next';

const AboutPage = (props:any) => {
    const { t, i18n } = useTranslation('about');
    return (<div>{t('О сайте')}</div>);
};

export default AboutPage;
