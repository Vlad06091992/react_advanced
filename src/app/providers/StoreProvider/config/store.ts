import { configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from 'app/providers/StoreProvider';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { api } from 'shared/api/api';
import { NavigateFunction } from 'react-router/dist/lib/hooks';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import { CombinedState } from 'redux';

// ...

export function createReduxStore(initialState:StateSchema, asyncReducers:ReducersMapObject<StateSchema>, navigate: NavigateFunction) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const ExtraArg = {
        api,
        navigate,
    };
    const store = configureStore({
        // reducer: rootReducer,
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>, // для управления асинхронными редьюсерами
        preloadedState: initialState,
        devTools: __IS_DEV__,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: ExtraArg,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
