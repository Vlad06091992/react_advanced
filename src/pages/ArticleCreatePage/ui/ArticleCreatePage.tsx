import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const ArticleCreatePage = () => {
    const { t } = useTranslation('about');
    return (<Page>{t('ArticleCreatePage')}</Page>);
};

export default ArticleCreatePage;
