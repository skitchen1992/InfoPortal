import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { ILoginSchema } from 'features/AuthByUserName';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<ILoginSchema> = { userName: '123' };
        expect(loginReducer(
            state as ILoginSchema,
            loginActions.setUserName('123123'),
        )).toEqual({ userName: '123123' });
    });

    test('test set password', () => {
        const state: DeepPartial<ILoginSchema> = { password: '123' };
        expect(loginReducer(
            state as ILoginSchema,
            loginActions.setPassword('123123'),
        )).toEqual({ password: '123123' });
    });
});
