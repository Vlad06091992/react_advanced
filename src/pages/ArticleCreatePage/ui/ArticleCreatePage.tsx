import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const ArticleCreatePage = () => {
    const { t } = useTranslation('about');
    return (<Page data-testid="ArticleCreatePage">{t('ArticleCreatePage')}</Page>);
};

export default ArticleCreatePage;
