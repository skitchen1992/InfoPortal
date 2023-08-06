import { AppState } from 'app/providers/StoreProvider';
import { IErrorForm, VALIDATE_PROFILE_ERROR } from 'entities/Profile/model/types/profile';
import { getProfileValidationErrors } from 'entities/Profile';

const data = [{ name: { field: 'first_name', error: VALIDATE_PROFILE_ERROR.REQUIRED_LAST_NAME } }];

describe('getProfileData', () => {
    it('should return the login state from the app state', () => {
        const appState: DeepPartial<AppState> = {
            profile: {
                validationError: [{ name: { field: 'first_name', error: VALIDATE_PROFILE_ERROR.REQUIRED_LAST_NAME } }],
            },
        };

        const errorForm: IErrorForm[] = getProfileValidationErrors(appState as AppState);

        expect(errorForm).toEqual(data);
    });

    it('should work with empty state', () => {
        const appState: DeepPartial<AppState> = {
            profile: {
                validationError: [],
            },
        };

        const errorForm: IErrorForm[] = getProfileValidationErrors(appState as AppState);

        expect(errorForm).toEqual([]);
    });
});
