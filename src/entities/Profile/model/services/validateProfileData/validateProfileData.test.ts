import { COUNTRY, CURRENCY } from 'shared/consts/consts';
import { VALIDATE_PROFILE_ERROR } from 'entities/Profile/model/types/profile';
import { validateProfileData } from './validateProfileData';

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

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first_name: '', last_name: '' });

        expect(result).toEqual([
            { field: 'first_name', error: VALIDATE_PROFILE_ERROR.REQUIRED_FIRST_NAME },
            { field: 'last_name', error: VALIDATE_PROFILE_ERROR.REQUIRED_LAST_NAME },
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([
            { field: 'age', error: VALIDATE_PROFILE_ERROR.REQUIRED_AGE },
        ]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({
            ...data, first_name: '', last_name: '', age: undefined,
        });

        expect(result).toEqual([
            { field: 'first_name', error: VALIDATE_PROFILE_ERROR.REQUIRED_FIRST_NAME },
            { field: 'last_name', error: VALIDATE_PROFILE_ERROR.REQUIRED_LAST_NAME },
            { field: 'age', error: VALIDATE_PROFILE_ERROR.REQUIRED_AGE },
        ]);
    });
});
