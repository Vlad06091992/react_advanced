import { memo, useEffect } from 'react';
import { classnames } from 'shared/lib/classnames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById';
import { useSelector } from 'react-redux';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../model/selectors/getArticleDetails';
import { articleDetailsReducer } from '../../model/slice/ArticleDetailsSlice';

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
        content = (<div><Loader /></div>);
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
