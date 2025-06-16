import { Article } from 'entities/Article';

export interface ArticleDetailsSchema {
    data: Article | null;
    isLoading: boolean;
    error?: null | string;
}
