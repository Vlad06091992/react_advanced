import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

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
    const dispatch = useDispatch();

    const store:ReduxStoreWithManager = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach((el:ReducersListEntry) => {
            const [reducerKey, reducer] = el;

            store.reducerManager.add(reducerKey, reducer);
            dispatch({ type: `@INIT ${reducerKey} reducer` });
            return () => {
                if (removeAfterUnmount) {
                    dispatch({ type: `@DESTROY ${reducerKey} reducer` });
                    store.reducerManager.remove(reducerKey);
                }
            };
        });
    }, []);

    return <>{children}</>;
};
