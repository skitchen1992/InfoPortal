import { AppState } from 'app/providers/StoreProvider/config/appState';
import { createSelector } from '@reduxjs/toolkit';

export const getLoginState = (state: AppState) => state?.login;

export default createSelector([getLoginState], (state) => ({
    userName: state?.userName || '',
    password: state?.password || '',
    error: state?.error || null,
    isLoading: state?.isLoading || false,
}));
