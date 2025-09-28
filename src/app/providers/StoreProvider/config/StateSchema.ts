import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { ReducerManager } from '@/app/providers/StoreProvider/config/reducerManager';

import { AxiosInstance } from 'axios';
import { AppDispatch } from '@/app/providers/StoreProvider';
import { ArticleDetailsSchema } from '@/entities/Article';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { AddCommentFormSchema } from '@/features/AddCommentForm';
import { ArticlesPageSchema } from '@/pages/ArticlesPage/model/types/articlesPageSchema';
import { ScrollSaveSchema } from '@/features/ScrollSave/model/types/ScrollSaveSchema';
import { rtkApi } from '@/shared/api/rtkApi';
import { ProfileSchema } from '@/features/EditableProfileCard/model/types/profile';

export interface StateSchema {
    counter:CounterSchema,
    user:UserSchema,
    scrollSave:ScrollSaveSchema,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,

    // Асинхронные редьюсеры
    loginData?:LoginSchema,
    profileData?: ProfileSchema,
    articleDetails?: ArticleDetailsSchema,
    articleDetailsPage?: ArticleDetailsPageSchema,
    addCommentForm?: AddCommentFormSchema,
    articlesPage?: ArticlesPageSchema,
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
    reducerManager:ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> { rejectValue: T; dispatch: AppDispatch; extra: ThunkExtraArg; state: StateSchema}
