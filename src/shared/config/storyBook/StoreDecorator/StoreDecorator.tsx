import { Story } from '@storybook/react';
import { AppState } from 'app/providers/StoreProvider/config/appState';
import { StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { appReducer } from 'app/slice/appSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<AppState>> = {
    login: loginReducer,
    profile: profileReducer,
    app: appReducer,

};

// eslint-disable-next-line max-len
export const StoreDecorator = (state: DeepPartial<AppState>, asyncReducers?: DeepPartial<ReducersMapObject<AppState>>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
