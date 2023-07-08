import {
    AnyAction, configureStore, ReducersMapObject, ThunkDispatch,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { appReducer } from 'app/slice/appSlice';
import { profileReducer } from 'entities/Profile';
import { AppState } from './appState';

export function createReduxStore(initialState?: AppState, asyncReducers?: ReducersMapObject<AppState>) {
    const rootReducers : ReducersMapObject<AppState> = {
        ...asyncReducers,
        user: userReducer,
        app: appReducer,
        profile: profileReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<AppState>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch<T> = ThunkDispatch<T, any, AnyAction>;

export const useAppDispatch = () => useDispatch<AppDispatch<AppState>>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
