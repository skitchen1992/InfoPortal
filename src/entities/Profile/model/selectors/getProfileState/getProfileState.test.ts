import { AppState } from 'app/providers/StoreProvider';
import { IProfileState } from 'entities/Profile/model/types/profile';
import { COUNTRY, CURRENCY } from 'shared/consts/consts';
import { getProfileState } from 'entities/Profile';

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

const state: IProfileState = {
    data,
    form: data,
    hasData: false,
    isLoading: false,
    error: null,
    readOnly: false,
    validationError: [],
};

const emptyState: IProfileState = {
    data: null,
    form: null,
    hasData: false,
    isLoading: false,
    error: null,
    readOnly: false,
    validationError: [],
};

describe('getProfileData', () => {
    it('should return the profile state from the app state', () => {
        const appState: DeepPartial<AppState> = {
            profile: {
                data,
                form: data,
                hasData: false,
                isLoading: false,
                error: null,
                readOnly: false,
                validationError: [],
            },
        };

        const profileState: IProfileState = getProfileState(appState as AppState);

        expect(profileState).toEqual(state);
    });

    it('should work with empty state', () => {
        const appState: DeepPartial<AppState> = {
            profile: {
                data: null,
                form: null,
                hasData: false,
                isLoading: false,
                error: null,
                readOnly: false,
                validationError: [],
            },
        };

        const profileState: IProfileState = getProfileState(appState as AppState);

        expect(profileState).toEqual(emptyState);
    });
});
