import { AppState } from 'app/providers/StoreProvider';
import { getProfileData } from 'entities/Profile';
import { IProfile } from 'entities/Profile/model/types/profile';
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

describe('getProfileData', () => {
    it('should return the login state from the app state', () => {
        const appState: DeepPartial<AppState> = {
            profile: {
                data,
            },
        };

        const profileData: Nullable<IProfile> = getProfileData(appState as AppState);

        expect(profileData).toEqual(data);
    });

    it('should work with empty state', () => {
        const appState: DeepPartial<AppState> = {
            profile: {
                data: null,
            },
        };

        const profileData: Nullable<IProfile> = getProfileData(appState as AppState);

        expect(profileData).toBeNull();
    });
});
