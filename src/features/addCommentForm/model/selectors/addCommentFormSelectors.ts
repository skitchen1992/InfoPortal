import { AppState } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getAddCommentFormText = (state: AppState) => state.addCommentForm?.text;
export const getAddCommentFormError = (state: AppState) => state.addCommentForm?.error;

export default createSelector([
    getAddCommentFormText,
    getAddCommentFormError,
], (
    text,
    error,
) => ({
    text,
    error,
}));
