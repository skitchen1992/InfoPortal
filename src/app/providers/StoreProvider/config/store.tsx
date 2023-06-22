import {
    AnyAction, configureStore, ReducersMapObject, ThunkDispatch,
} from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUserName';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { userReducer } from 'entities/User';
import { AppState } from './appState';

export function createReduxStore(initialState?: AppState) {
    const rootReducers : ReducersMapObject<AppState> = {
        user: userReducer,
        login: loginReducer,
    };

    return configureStore<AppState>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

export const useAppDispatch = () => useDispatch<TypedDispatch<AppState>>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
