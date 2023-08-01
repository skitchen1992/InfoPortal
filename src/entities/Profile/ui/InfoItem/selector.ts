import { createSelector } from '@reduxjs/toolkit';
import { AppState } from 'app/providers/StoreProvider';
import { getProfileForm } from 'pages/Profile/ui/selector';
import { validateProfileData } from 'entities/Profile/model/services/validateProfileData';

const getField = (_state: AppState, field: string) => field;

const getError = createSelector([getField, getProfileForm], (field, form) => {
    const errors = validateProfileData(form);
    return errors.find((error) => error.field === field)?.error;
});

export default createSelector([getError], (error) => ({
    error,
}));
