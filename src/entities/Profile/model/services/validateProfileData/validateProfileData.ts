import { IErrorField, IProfile, VALIDATE_PROFILE_ERROR } from '../../types/profile';

export const validateProfileData = (profile: Nullable<IProfile>): IErrorField[] => {
    if (!profile) {
        return [];
    }
    const {
        first_name,
        last_name,
        age,
        city,
    } = profile;

    const errors: IErrorField[] = [];

    if (!first_name) {
        errors.push({ field: 'first_name', error: VALIDATE_PROFILE_ERROR.REQUIRED_FIRST_NAME });
    }
    if (!last_name) {
        errors.push({ field: 'last_name', error: VALIDATE_PROFILE_ERROR.REQUIRED_LAST_NAME });
    }
    if (!age) {
        errors.push({ field: 'age', error: VALIDATE_PROFILE_ERROR.REQUIRED_AGE });
    }
    if (!city) {
        errors.push({ field: 'city', error: VALIDATE_PROFILE_ERROR.REQUIRED_CITY });
    }
    return errors;
};
