import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { AppState } from '../config/appState';

interface IProps {
    children?: ReactNode
    initialState?: DeepPartial<AppState>
}

export const StoreProvider: FC<IProps> = (props) => {
    const { children, initialState } = props;

    const store = createReduxStore(initialState as AppState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
