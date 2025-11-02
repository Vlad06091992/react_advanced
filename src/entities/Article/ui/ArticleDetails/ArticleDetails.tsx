import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classnames } from '@/shared/lib/classnames';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import {
    Text, TextAlign, TextSize, TextTheme
} from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Avatar } from '@/shared/ui/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@/shared/ui/Icon';
import { ArticleBlock, ArticleBlockType } from '../../model/types/Article';
import { HStack } from '@/shared/ui/Stack';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../model/selectors/getArticleDetails';
import { articleDetailsReducer } from '../../model/slice/ArticleDetailsSlice';
import cls from './ArticleDetails.module.scss';

export interface ArticleDetailsProps {
    className?: string
    articleId: string
}

const initialReducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, articleId }: ArticleDetailsProps) => {
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        default:
            return null;
        }
    }, []);

    useEffect(() => {
        dispatch(fetchArticleById(articleId));
    }, [dispatch, articleId]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text align={TextAlign.CENTER} theme={TextTheme.ERROR} title="Произошла ошибка при загрузке статьи" />);
    } else {
        content = (
            <>
                <HStack align="center" max>
                    <Avatar size={200} className={cls.avatar} src={article?.img} />
                </HStack>
                <Text size={TextSize.L} className={cls.title} title={article?.title} text={article?.subtitle} />
                <div className={cls.ArticleInfo}>
                    <Icon Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </div>
                <HStack align="center" gap="16">
                    <Icon Svg={CalendarIcon} />
                    <Text text={article?.createdAt} />
                </HStack>

                {article?.blocks.map(renderBlock)}

            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classnames(className)}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
