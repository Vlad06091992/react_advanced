import {
    ArticleDetailsRecommendationsSchema
} from '../../model/types/ArticleDetailsRecommendationsSchema';
import { ArticleDetailsCommentSchema } from '../../model/types/ArticleDetailsCommentSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentSchema,
    recommendations: ArticleDetailsRecommendationsSchema,
}
