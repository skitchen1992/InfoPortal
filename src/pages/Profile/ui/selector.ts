import { createSelector } from '@reduxjs/toolkit';
import { getProfileData, getProfileState } from 'entities/Profile';
import { AppState } from 'app/providers/StoreProvider';

export interface IInfo {
    label: string;
    value?: string;
    field: string;
}

export const getProfileForm = (state: AppState) => state.profile.form;
export const getProfileValidationError = (state: AppState) => state.profile.validationError;

const getInfoList = createSelector(getProfileForm, (form): IInfo[] => [
    { label: 'label.first_name', value: form?.first_name, field: 'first_name' },
    { label: 'label.last_name', value: form?.last_name, field: 'last_name' },
    { label: 'label.age', value: form?.age, field: 'age' },
    { label: 'label.city', value: form?.city, field: 'city' },
    { label: 'label.user_name', value: form?.user_name, field: 'user_name' },
    { label: 'label.avatar', value: form?.avatar, field: 'avatar' },
    { label: 'label.country', value: form?.country, field: 'country' },
    { label: 'label.currency', value: form?.currency, field: 'currency' },
]);

const getHasError = createSelector(
    getProfileValidationError,
    (errorsForm) => Boolean(Object.values(errorsForm).find((error) => error?.error)),
);

export default createSelector([
    getProfileData,
    getProfileState,
    getInfoList,
    getHasError,
], (
    profile,
    state,
    infoList,
    hasError,
) => ({
    isLoading: state!.isLoading,
    hasData: state!.hasData,
    error: state?.error,
    readOnly: state!.readOnly,
    profile,
    infoList,
    hasError,
}));
