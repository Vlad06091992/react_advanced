import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsError = (state:StateSchema) => state?.articleDetailsComments?.error || null;
export const getArticleCommentsIsLoading = (state:StateSchema) => state?.articleDetailsComments?.isLoading || null;
