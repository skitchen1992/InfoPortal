import {
    AnyAction, CombinedState, configureStore, Reducer, ReducersMapObject, ThunkDispatch,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { appReducer } from 'app/slice/appSlice';
import { profileReducer } from 'entities/Profile';
import { API } from 'shared/api/api';
import { saveScrollReducer } from 'features/SaveScroll';
import { AppState, ThunkExtraArguments } from './appState';

export function createReduxStore(
    initialState?: AppState,
    asyncReducers?: ReducersMapObject<AppState>,
) {
    const rootReducers: ReducersMapObject<AppState> = {
        ...asyncReducers,
        user: userReducer,
        app: appReducer,
        profile: profileReducer,
        savedScroll: saveScrollReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArgument: ThunkExtraArguments = {
        api: API,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<AppState>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch<T> = ThunkDispatch<T, any, AnyAction>;

export const useAppDispatch = () => useDispatch<AppDispatch<AppState>>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
