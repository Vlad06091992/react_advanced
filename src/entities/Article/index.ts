// index.ts
export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export { ArticleList } from './ui/ArticleList/ArticleList';
export { ArticleTextBlockComponent } from './ui/ArticleTextBlockComponent/ArticleTextBlockComponent';

export type { Article, SortOrder } from './model/types/Article';

export {
    ArticleBlockType,
    ArticleSortFields,
    ArticlesViewMode,
    ArticleType,
} from './model/types/Article';

export type { ArticleDetailsSchema } from './model/types/AtricleDetailsSchema';

export { getArticleDetailsData } from './model/selectors/getArticleDetails';
export { articleDetailsReducer } from './model/slice/ArticleDetailsSlice';
export { fetchArticleById } from './model/services/fetchArticleById';
