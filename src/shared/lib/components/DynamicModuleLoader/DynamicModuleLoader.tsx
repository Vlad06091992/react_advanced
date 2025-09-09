import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

// export type ReducerList = Partial<Record<StateSchemaKey, Reducer>>
export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
}

export interface DynamicModuleLoaderProps {
    reducers: ReducerList
    children: ReactNode
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = ({
    children, reducers, removeAfterUnmount = true,
}: DynamicModuleLoaderProps) => {
    const dispatch = useAppDispatch();
    const store: ReduxStoreWithManager = useStore() as ReduxStoreWithManager;

    useEffect(
        () => {
            const mountedReducers = store.reducerManager.getMountedreducers();
            Object.entries(reducers).forEach(([reducerKey, reducer]) => {
                if (!mountedReducers.has(reducerKey as StateSchemaKey)) {
                    store.reducerManager.add(reducerKey as StateSchemaKey, reducer);
                    // диспатч ниже чисто для информативности о том, что редьюсер был добавлен
                    dispatch({ type: `@INIT ${reducerKey} reducer` });
                }
            });

            return () => {
                if (removeAfterUnmount) {
                    Object.entries(reducers).forEach(([name]) => {
                        store.reducerManager.remove(name as StateSchemaKey);
                        dispatch({ type: `@DESTROY ${name} reducer` });
                    });
                }
            };
        },
        []
    );

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};
