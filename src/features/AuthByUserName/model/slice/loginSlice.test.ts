import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { ILoginState } from 'features/AuthByUserName';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<ILoginState> = { userName: '123' };
        expect(loginReducer(
            state as ILoginState,
            loginActions.setUserName('123123'),
        )).toEqual({ userName: '123123' });
    });

    test('test set password', () => {
        const state: DeepPartial<ILoginState> = { password: '123' };
        expect(loginReducer(
            state as ILoginState,
            loginActions.setPassword('123123'),
        )).toEqual({ password: '123123' });
    });
});
