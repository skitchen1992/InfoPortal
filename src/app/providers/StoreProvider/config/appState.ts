import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUserName';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

export interface AppState {
    user: IUserSchema;

    // async reducers
    login?: ILoginSchema;
}

export type AppStateKey = keyof AppState;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<AppState>;
    reduce: (state: AppState, action: AnyAction) => CombinedState<AppState>;
    add: (key: AppStateKey, reducer: Reducer) => void;
    remove: (key: AppStateKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<AppState> {
    reducerManager: ReducerManager
}
