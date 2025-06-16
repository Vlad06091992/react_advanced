import { memo, useEffect } from 'react';
import { classnames } from 'shared/lib/classnames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
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
    const data = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    debugger;

    useEffect(() => {
        dispatch(fetchArticleById(articleId));
    }, [dispatch, articleId]);

    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton classname={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton classname={cls.title} width={300} height={32} />
                <Skeleton classname={cls.skeleton} width={600} height={24} />
                <Skeleton classname={cls.skeleton} width="100%" height={200} />
                <Skeleton classname={cls.skeleton} width="100%" height={200} />
            </div>
        );
    } else if (error) {
        content = (<Text align={TextAlign.CENTER} theme={TextTheme.ERROR} title="Произошла ошибка при загрузке статьи" />);
    } else {
        content = (<div>Article Details</div>);
    }

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classnames(className)}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
