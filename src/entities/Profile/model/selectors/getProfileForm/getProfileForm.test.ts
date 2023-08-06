import { AppState } from 'app/providers/StoreProvider';
import { IProfile } from 'entities/Profile/model/types/profile';
import { COUNTRY, CURRENCY } from 'shared/consts/consts';
import { getProfileForm } from 'entities/Profile';

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

describe('getProfileForm', () => {
    it('should return the profile form state', () => {
        const appState: DeepPartial<AppState> = {
            profile: {
                form: data,
            },
        };

        const profileData: Nullable<IProfile> = getProfileForm(appState as AppState);

        expect(profileData).toEqual(data);
    });

    it('should work with empty state', () => {
        const appState: DeepPartial<AppState> = {
            profile: {
                form: null,
            },
        };

        const profileData: Nullable<IProfile> = getProfileForm(appState as AppState);

        expect(profileData).toBeNull();
    });
});
