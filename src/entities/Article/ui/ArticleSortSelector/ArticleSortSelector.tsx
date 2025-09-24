import { memo, useMemo } from 'react';
import { classnames } from 'shared/lib/classnames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import cls from './ArticleSortSelector.module.scss';

import { ArticleSortFields, SortOrder } from '../../model/types/Article';
// импорт ниже образует кольцевую зависимость
// import { ArticleSortFields, SortOrder } from 'entities/Article';

export interface ArticleDetailsProps {
    className?: string
    sortOrder: SortOrder,
    sortBy: ArticleSortFields,
    onChangeSortOrder: (newOrder: SortOrder)=>void,
    onChangeSortBy: (sortField: ArticleSortFields)=>void,
}

export const ArticleSortSelector = memo(({
    className, sortBy, sortOrder, onChangeSortOrder, onChangeSortBy
}: ArticleDetailsProps) => {
    const { t, i18n } = useTranslation('about');
    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [{ content: t('возрастанию'), value: 'asc' }, { content: t('убыванию'), value: 'desc' }], []);
    const sortFieldOptions = useMemo<SelectOption<ArticleSortFields>[]>(() => [{ content: t('просмотрам'), value: ArticleSortFields.VIEWS }, { content: t('дате создания'), value: ArticleSortFields.CREATED }, { content: t('названию'), value: ArticleSortFields.TITLE }], []);

    // const onChangeSortOrderHandler = (value:string) => onChangeSortOrder(value as SortOrder);
    // const onChangeSortByField = (value:string) => onChangeSortBy(value as ArticleSortFields);
    return (
        <div className={classnames(cls.ArticleSortSelector)}>
            <Select<ArticleSortFields> value={sortBy} options={sortFieldOptions} label={t('по')} onChange={onChangeSortBy} />
            <Select<SortOrder> className={classnames(cls.order)} value={sortOrder} options={orderOptions} label="сортировать ПО" onChange={onChangeSortOrder} />
        </div>
    );
});
