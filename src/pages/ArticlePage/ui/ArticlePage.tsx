import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const ArticlePage = () => {
    const { t, i18n } = useTranslation('article');
    return (<div>{t('ArticlePage')}</div>);
};

export default memo(ArticlePage);
