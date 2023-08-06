import {
    IProfileState,
    profileActions, profileReducer, updateProfileData,
} from 'entities/Profile';
import { COUNTRY, CURRENCY } from 'shared/consts/consts';

const data = {
    first_name: 'Niki',
    last_name: 'Lav',
    age: '123',
    city: 'Dubai',
    country: COUNTRY.USA,
    currency: CURRENCY.EUR,
    user_name: 'admin',
    avatar: 'https://memepedia.ru/wp-content/uploads/2020/12/udivlennyj-bagz-banni-mem-shablon.jpg',
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<IProfileState> = { readOnly: false };
        expect(profileReducer(
            state as IProfileState,
            profileActions.setReadOnly(true),
        )).toEqual({ readOnly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<IProfileState> = { data, form: { user_name: '' } };

        expect(profileReducer(
            state as IProfileState,
            profileActions.cancelEdit(),
        )).toEqual({
            data,
            form: data,
            readOnly: true,
            validationError: [],
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<IProfileState> = { form: { user_name: '123' } };

        expect(profileReducer(
            state as IProfileState,
            profileActions.updateProfile({
                user_name: '123456',
            }),
        )).toEqual({
            form: { user_name: '123456' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<IProfileState> = {
            isLoading: false,
        };

        expect(profileReducer(
            state as IProfileState,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            error: null,
            validationError: [],
        });
    });

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<IProfileState> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as IProfileState,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            error: null,
            hasData: true,
            isLoading: false,
            readOnly: true,
            validationError: [],
            form: data,
            data,
        });
    });
});
