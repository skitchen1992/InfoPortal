import { AppState } from 'app/providers/StoreProvider';
import { ILoginSchema } from 'features/AuthByUserName';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
    it('should return the login state from the app state', () => {
        const appState: DeepPartial<AppState> = {
            login: {
                userName: 'example_user',
                password: 'example_password',
                isLoading: false,
                error: null,
            },
        };

        const loginState: ILoginSchema | undefined = getLoginState(appState as AppState);

        expect(loginState).toEqual({
            userName: 'example_user',
            password: 'example_password',
            isLoading: false,
            error: null,
        });
    });

    it('should return undefined if login state is not present in app state', () => {
        const appState: AppState = {
            user: { /* user schema data */ },
            // login state is not defined
        };

        const loginState: ILoginSchema | undefined = getLoginState(appState);

        expect(loginState).toBeUndefined();
    });
});
