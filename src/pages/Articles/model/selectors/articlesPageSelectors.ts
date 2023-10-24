import { AppState } from 'app/providers/StoreProvider';
import { ARTICLE_VIEW } from 'entities/Article';
import { createSelector } from '@reduxjs/toolkit';
import { getArticles } from 'pages/Articles/model/slices/articlesPageSlice';
import { BIG_PAGE_LIMIT } from 'pages/Articles/model/consts/consts';

export const getArticlesPageIsLoading = (state: AppState) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: AppState) => state.articlesPage?.error;
export const getArticlesPageHasData = (state: AppState) => state.articlesPage?.hasData || false;
export const getArticlesPageView = (state: AppState) => state.articlesPage?.view || ARTICLE_VIEW.SMALL;
export const getArticlesPageNumber = (state: AppState) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: AppState) => state.articlesPage?.limit || BIG_PAGE_LIMIT;
export const getArticlesPageHasMore = (state: AppState) => state.articlesPage?.hasMore;
export const getArticlesPageInited = (state: AppState) => state.articlesPage?._inited || false;

export const getArticlesStateSelector = createSelector([
    getArticles.selectAll,
    getArticlesPageIsLoading,
    getArticlesPageError,
    getArticlesPageHasData,
    getArticlesPageView,
    getArticlesPageHasMore,
    getArticlesPageNumber,
    getArticlesPageInited,
], (
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
