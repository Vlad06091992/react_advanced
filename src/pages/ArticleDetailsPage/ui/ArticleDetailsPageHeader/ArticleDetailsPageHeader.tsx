import { useTranslation } from 'react-i18next';
import { classnames } from 'shared/lib/classnames';
import { memo, useCallback } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { RouterPaths } from 'shared/config/routerConfig/routerConfig';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/getCanEditArticle';
import { getArticleDetailsData } from 'entities/Article';
import { HStack } from 'shared/ui/Stack';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string

}

export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
    const { t, i18n } = useTranslation('about');
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RouterPaths.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RouterPaths.articles}/${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <HStack max justify="between" className={classnames(cls.ArticleDetailsPageHeader)}>
            <Button onClick={onBackToList} theme={ThemeButton.OUTLINE}>
                {t('Назад к списку')}
            </Button>
            {canEdit
                && (
                    <Button onClick={onEditArticle} theme={ThemeButton.OUTLINE}>
                        {t('Редактировать')}
                    </Button>
                )}
        </HStack>
    );
});

// t('Редактировать')
