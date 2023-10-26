import { AppState } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { getArticleComments } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';

export const getArticleDetailsIsLoading = (state: AppState) => state.articleDetailsPage?.comments.isLoading || false;
export const getArticleDetailsError = (state: AppState) => state.articleDetailsPage?.comments?.error;
export const getArticleDetailsHasData = (state: AppState) => state.articleDetailsPage?.comments?.hasData || false;

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
