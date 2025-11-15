import { useLocation } from 'react-router-dom';
import { Page } from '@/widgets/Page';

const ArticleEditPage = () => {
    const { pathname } = useLocation();
    const isEdit = pathname.includes('edit');

    return (
        <Page data-testid="ArticleEditPage">
            {isEdit ? 'Редактирование статьи' : 'Создание статьи'}
        </Page>
    );
};

export default ArticleEditPage;
