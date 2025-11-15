import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/paths';
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';

export const ArticleDetailsPageHeader = memo(() => {
    const { t } = useTranslation('about');
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleEdit(article?.id));
        }
    }, [article, navigate]);

    return (
        <HStack max justify="between">
            <Button onClick={onBackToList} theme={ThemeButton.OUTLINE}>
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <Button onClick={onEditArticle} theme={ThemeButton.OUTLINE}>
                    {t('Редактировать')}
                </Button>
            )}
        </HStack>
    );
});

// t('Редактировать')
