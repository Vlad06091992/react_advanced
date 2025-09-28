import { EntityState } from '@reduxjs/toolkit';
import { Comment } from '@/entities/Comments';
import { Article } from '@/entities/Article';

export interface ArticleDetailsRecommendationsSchema extends EntityState<Article>{
    isLoading: boolean;
    error?: null | string;
}
