import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { classnames } from 'shared/lib/classnames';

interface ArticleDetailsPageProps {
    classname?: string

}

const ArticleDetailsPage = ({ classname }:ArticleDetailsPageProps) => {
    const { t, i18n } = useTranslation('articles-details');
    const { id } = useParams<{id:string}>();

    if (!id) {
        return (
            <div className={classnames(classname)}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div className={classnames(classname)}>
            <ArticleDetails articleId={id} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
