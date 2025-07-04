import {
    AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { StateSchema, StateSchemaKey } from './StateSchema';

export interface ReducerManager {
    getReducerMap: ()=>ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key:StateSchemaKey, reducer:Reducer)=>void,
    remove: (key:StateSchemaKey)=>void,
    getMountedreducers:() => Set<StateSchemaKey>,
}

export function createReducerManager(initialReducers:ReducersMapObject<StateSchema>):ReducerManager {
    const reducers = { ...initialReducers };
    const mountedReducers:Set<StateSchemaKey> = new Set();
    let combinedReducer = combineReducers(reducers);

    let keysToRemove:StateSchemaKey[] = [];

    return {
        getReducerMap: () => reducers,

        reduce: (state:StateSchema, action:AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key];
                });
                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },
        add: (key:StateSchemaKey, reducer:Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            mountedReducers.add(key);
            combinedReducer = combineReducers(reducers);
        },
        remove: (key:StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            mountedReducers.delete(key);
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
        getMountedreducers: () => mountedReducers
    };
}
