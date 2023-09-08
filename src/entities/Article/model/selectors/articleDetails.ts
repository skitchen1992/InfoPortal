import { AppState } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getArticleDetailsData = (state: AppState) => state.articleDetails?.data;
export const getArticleDetailsIsLoading = (state: AppState) => state.articleDetails?.isLoading || false;
export const getArticleDetailsError = (state: AppState) => state.articleDetails?.error;
export const getArticleDetailsHasData = (state: AppState) => state.articleDetails?.hasData || false;

export const articleDetailsSelector = createSelector([
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticleDetailsError,
    getArticleDetailsHasData], (
    data,
    isLoading,
    error,
    hasData,
) => ({
    data,
    isLoading,
    error,
    hasData,
}));
