import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleRecommendationsError = (state:StateSchema) => state?.articleDetailsPage?.recommendations?.error || null;
export const getArticleRecommendationsIsLoading = (state:StateSchema) => state?.articleDetailsPage?.recommendations?.isLoading || false;
