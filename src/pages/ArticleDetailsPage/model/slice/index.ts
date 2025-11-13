import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from '../slice/articleDetailsCommentsSlice';
import { ArticleDetailsPageSchema } from '../types/index';

import { articleDetailsRecommendationsReducer } from '../../../ArticleDetailsPage/model/slice/articleDetailsRecommendationsSlice';

export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        comments: articleDetailsCommentsReducer,
        recommendations: articleDetailsRecommendationsReducer,
    });
