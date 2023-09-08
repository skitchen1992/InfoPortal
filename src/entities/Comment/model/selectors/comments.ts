import { AppState } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { getArticleComments } from 'pages/ArticleDetails/model/slices/articleDetailsCommentsSlice';

export const getArticleDetailsIsLoading = (state: AppState) => state.articleDetailsComments?.isLoading || false;
export const getArticleDetailsError = (state: AppState) => state.articleDetailsComments?.error;
export const getArticleDetailsHasData = (state: AppState) => state.articleDetailsComments?.hasData || false;

export const getCommentsStateSelector = createSelector([
    getArticleComments.selectAll,
    getArticleDetailsIsLoading,
    getArticleDetailsError,
    getArticleDetailsHasData], (
    comments,
    isLoading,
    error,
    hasData,
) => ({
    comments,
    isLoading,
    error,
    hasData,
}));
