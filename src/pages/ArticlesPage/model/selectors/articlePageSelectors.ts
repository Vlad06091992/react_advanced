import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortFields, ArticlesViewMode, ArticleType } from 'entities/Article';

export const getArticlesPageError = (state:StateSchema) => state.articlesPage?.error;
export const getArticlesPageIsLoading = (state:StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlesPageViewMode = (state:StateSchema) => state.articlesPage?.viewMode || ArticlesViewMode.SMALL;
export const getArticlesPageNumber = (state:StateSchema) => state.articlesPage?.pageNumber || 1;
export const getArticlesPageSize = (state:StateSchema) => state.articlesPage?.pageSize || 9;
export const getArticlesPageIsInited = (state:StateSchema) => state.articlesPage?._inited || false;
export const getArticlesPageHasMore = (state:StateSchema) => state.articlesPage?.hasMore || false;

export const getArticlesPageSearchSubstr = (state:StateSchema) => state.articlesPage?.searchSubstr ?? '';
export const getArticlesPageSortOrder = (state:StateSchema) => state.articlesPage?.sortOrder ?? 'asc';
export const getArticlesPageSortBy = (state:StateSchema) => state.articlesPage?.sortBy ?? ArticleSortFields.CREATED;
export const getArticlesPageType = (state:StateSchema) => state.articlesPage?.type ?? ArticleType.ALL;
