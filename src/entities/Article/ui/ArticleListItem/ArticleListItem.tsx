import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import { useNavigate } from 'react-router';
import { classnames } from '@/shared/lib/classnames';
import { Text } from '@/shared/ui/Text/Text';
import { Icon } from '@/shared/ui/Icon/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/Card/Card';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import { AppLink } from '@/shared/ui/AppLink/AppLink';
import cls from './ArticleListItem.module.scss';
import { Article, ArticlesViewMode, ArticleTextBlock } from '../../model/types/Article';
import { RouterPaths } from '@/shared/const/paths';

interface ArticleListItemProps {
    className?: string
    article: Article
    viewMode?: ArticlesViewMode
    target?: HTMLAttributeAnchorTarget

}

export const ArticleListItem = ({
    className, article, viewMode = ArticlesViewMode.SMALL, target
}: ArticleListItemProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={article.views.toString()} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (viewMode === ArticlesViewMode.BIG) {
        const textBlock = article.blocks.find((b) => b.type === 'TEXT') as ArticleTextBlock;

        return (
            <div className={classnames(className, [cls[viewMode]], {})}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar src={article.user.avatar} size={30} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title} />
                    {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} /> }
                    <div className={cls.footer}>
                        <AppLink target={target} to={RouterPaths.article_details + article.id}>
                            <Button theme={ThemeButton.OUTLINE}>
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}

                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink target={target} to={RouterPaths.article_details + article.id}>
            <div className={classnames(className, [cls[viewMode]], {})}>

                <Card className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <img src={article.img} alt={article.title} className={cls.img} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <div className={cls.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text text={article.title} className={cls.title} />
                </Card>
            </div>
        </AppLink>
    );
};

// t('Редактировать')
