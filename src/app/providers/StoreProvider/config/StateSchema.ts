import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { ReducerManager } from 'app/providers/StoreProvider/config/reducerManager';

export interface StateSchema {
    counter:CounterSchema,
    user:UserSchema,

    // Асинхронные редьюсеры
    loginData?:LoginSchema,
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
    reducerManager:ReducerManager
}
