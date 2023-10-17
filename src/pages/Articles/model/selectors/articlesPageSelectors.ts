import { AppState } from 'app/providers/StoreProvider';
import { ARTICLE_VIEW } from 'entities/Article';
import { createSelector } from '@reduxjs/toolkit';
import { getArticles } from 'pages/Articles/model/slices/articlesPageSlice';

export const getArticlesPageIsLoading = (state: AppState) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: AppState) => state.articlesPage?.error;
export const getArticlesPageHasData = (state: AppState) => state.articlesPage?.hasData || false;
export const getArticlesPageView = (state: AppState) => state.articlesPage?.view || ARTICLE_VIEW.SMALL;

export const getArticlesStateSelector = createSelector([
    getArticles.selectAll,
    getArticlesPageIsLoading,
    getArticlesPageError,
    getArticlesPageHasData,
    getArticlesPageView], (
    articles,
    isLoading,
    error,
    hasData,
    pageView,
) => ({
    articles,
    isLoading,
    error,
    hasData,
    pageView,
}));
