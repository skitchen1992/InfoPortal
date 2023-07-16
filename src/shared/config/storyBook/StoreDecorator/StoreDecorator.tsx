import { Story } from '@storybook/react';
import { AppState } from 'app/providers/StoreProvider/config/appState';
import { StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { appReducer } from 'app/slice/appSlice';
import { ReducersList } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';

const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
    app: appReducer,

};

// eslint-disable-next-line max-len
export const StoreDecorator = (state: DeepPartial<AppState>, asyncReducers?: ReducersList) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
