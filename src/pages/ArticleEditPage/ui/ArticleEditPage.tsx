import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { useLocation } from 'react-router-dom';

const ArticleEditPage = () => {
    const { t, i18n } = useTranslation('about');
    const { pathname } = useLocation();
    const isEdit = pathname.includes('edit');

    return (
        <Page>
            {isEdit ? 'Редактирование статьи' : 'Создание статьи' }
        </Page>
    );
};

export default ArticleEditPage;
