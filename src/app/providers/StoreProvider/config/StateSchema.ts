import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { ReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { profileReducer, ProfileSchema } from 'entities/Profile';

export interface StateSchema {
    counter:CounterSchema,
    user:UserSchema,

    // Асинхронные редьюсеры
    loginData?:LoginSchema,
    profileData: ProfileSchema,
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
    reducerManager:ReducerManager
}
