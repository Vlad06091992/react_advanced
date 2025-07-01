import { StateSchema } from 'app/providers/StoreProvider';
import { ArticlesViewMode } from 'entities/Article';
import { fetchNextArticlePage } from 'pages/ArticlePage/model/services/fetchNextArticlePage/fetchNextArticlePage';

export const getArticlesPageError = (state:StateSchema) => state.articlesPage?.error;
export const getArticlesPageIsLoading = (state:StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlesPageViewMode = (state:StateSchema) => state.articlesPage?.viewMode || ArticlesViewMode.SMALL;
export const getArticlesPageNumber = (state:StateSchema) => state.articlesPage?.pageNumber || 1;
export const getArticlesPageSize = (state:StateSchema) => state.articlesPage?.pageSize || 9;
export const getArticlesPageHasMore = (state:StateSchema) => state.articlesPage?.hasMore || false;
