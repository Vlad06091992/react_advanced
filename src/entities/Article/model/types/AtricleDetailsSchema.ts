import { Article } from '../types/Article';

export interface ArticleDetailsSchema {
    data: Article | null;
    isLoading: boolean;
    error?: null | string;
}
