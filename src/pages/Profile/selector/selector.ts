import { createSelector } from '@reduxjs/toolkit';
import { getProfileData, getProfileState } from 'entities/Profile';

export default createSelector([getProfileData, getProfileState], (profile, state) => ({
    isLoading: state!.isLoading,
    hasData: state!.hasData,
    error: state?.error,
}));
