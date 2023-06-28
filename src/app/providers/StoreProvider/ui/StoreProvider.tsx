import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { AppState } from '../config/appState';

interface IProps {
    children?: ReactNode
    initialState?: DeepPartial<AppState>
    asyncReducers?: DeepPartial<ReducersMapObject<AppState>>
}

export const StoreProvider: FC<IProps> = (props) => {
    const { children, initialState, asyncReducers } = props;

    const store = createReduxStore(initialState as AppState, asyncReducers as ReducersMapObject<AppState>);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
