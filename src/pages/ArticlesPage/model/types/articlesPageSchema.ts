import { EntityState } from '@reduxjs/toolkit';
import {
    Article, ArticleSortFields, ArticlesViewMode, ArticleType, SortOrder
} from '@/entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading: boolean;
    error?: null | string;

    // pagination settings
    pageNumber:number
    pageSize:number
    hasMore:boolean,
    _inited:boolean
    // filters settings
    viewMode: ArticlesViewMode | null
    sortOrder: SortOrder
    sortBy: ArticleSortFields,
    searchSubstr: string,
    type:ArticleType

}
