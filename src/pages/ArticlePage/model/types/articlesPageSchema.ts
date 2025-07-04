import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticlesViewMode } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading: boolean;
    error?: null | string;
    viewMode: ArticlesViewMode | null
    // pagination settings
    pageNumber:number
    pageSize:number
    hasMore:boolean,
    _inited:boolean
}
