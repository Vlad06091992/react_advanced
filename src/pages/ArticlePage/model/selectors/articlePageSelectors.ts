import { StateSchema } from 'app/providers/StoreProvider';
import { ArticlesViewMode } from 'entities/Article';

export const getArticlesPageError = (state:StateSchema) => state.articlesPage?.error;
export const getArticlesPageIsLoadind = (state:StateSchema) => state.articlesPage?.isLoading;
export const getArticlesPageViewMode = (state:StateSchema) => state.articlesPage?.viewMode || ArticlesViewMode.SMALL;
