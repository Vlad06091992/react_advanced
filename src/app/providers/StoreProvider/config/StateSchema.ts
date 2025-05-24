import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { ReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router/dist/lib/hooks';
import { AppDispatch } from 'app/providers/StoreProvider';

export interface StateSchema {
    counter:CounterSchema,
    user:UserSchema,

    // Асинхронные редьюсеры
    loginData?:LoginSchema,
    profileData?: ProfileSchema,
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
    reducerManager:ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate:NavigateFunction,
}

export interface ThunkConfig<T> { rejectValue: string; dispatch: AppDispatch; extra: ThunkExtraArg; state?: StateSchema}
