import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

// export type ReducerList = {
//     [name in StateSchemaKey]? : Reducer
// }
// аналог
export type ReducerList = Partial<Record<StateSchemaKey, Reducer>>
type ReducersListEntry = [StateSchemaKey, Reducer]

export interface DynamicModuleLoaderProps {
    reducers:ReducerList
    children:ReactNode
    removeAfterUnmount?:boolean
}

export const DynamicModuleLoader = ({
    children, reducers, removeAfterUnmount,
}:DynamicModuleLoaderProps) => {
    const dispatch = useAppDispatch();

    const store:ReduxStoreWithManager = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([reducerKey, reducer]) => {
            store.reducerManager.add(reducerKey as StateSchemaKey, reducer);
            // диспатч ниже чисто для информативности о том, что редьюсер был добавлен
            dispatch({ type: `@INIT ${reducerKey} reducer` });
            return () => {
                if (removeAfterUnmount) {
                    dispatch({ type: `@DESTROY ${reducerKey} reducer` });
                    store.reducerManager.remove(reducerKey as StateSchemaKey);
                }
            };
        });
    }, []);

    return <>{children}</>;
};
