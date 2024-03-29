import {
    AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import {
    AppState, AppStateKey, MountedReducers, ReducerManager,
} from './appState';

export function createReducerManager(initialReducers: ReducersMapObject<AppState>): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: AppStateKey[] = [];

    const mountedReducers: MountedReducers = {};

    return {
        getReducerMap: () => reducers,
        getMountedReducers: () => mountedReducers,

        reduce: (state: AppState, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };

                keysToRemove.forEach((key) => {
                    delete state[key];
                });

                keysToRemove = [];
            }

            return combinedReducer(state, action);
        },

        add: (key: AppStateKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            reducers[key] = reducer;

            mountedReducers[key] = true;

            combinedReducer = combineReducers(reducers);
        },

        remove: (key: AppStateKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];

            keysToRemove.push(key);

            mountedReducers[key] = false;

            combinedReducer = combineReducers(reducers);
        },
    };
}
