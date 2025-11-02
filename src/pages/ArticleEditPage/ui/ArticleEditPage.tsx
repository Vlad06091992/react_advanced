import { useLocation } from 'react-router-dom';
import { Page } from '@/widgets/Page';

const ArticleEditPage = () => {
    const { pathname } = useLocation();
    const isEdit = pathname.includes('edit');

    return (
        <Page>
            {isEdit ? 'Редактирование статьи' : 'Создание статьи' }
        </Page>
    );
};

export default ArticleEditPage;
