import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const ArticleDetailsPage = () => {
    const { t, i18n } = useTranslation('articles');
    return (<div>{t('ArticleDetailsPage')}</div>);
};

export default memo(ArticleDetailsPage);
