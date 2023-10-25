import { AppState } from 'app/providers/StoreProvider';
import { ARTICLE_TYPE, ARTICLE_VIEW } from 'entities/Article';
import { createSelector } from '@reduxjs/toolkit';
import { getArticles } from 'pages/Articles/model/slices/articlesPageSlice';
import { BIG_PAGE_LIMIT } from 'pages/Articles/model/consts/consts';
import { ARTICLE_SORT_FIELD } from 'entities/Article/model/types/IArticle';

export const getArticlesPageIsLoading = (state: AppState) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: AppState) => state.articlesPage?.error;
export const getArticlesPageHasData = (state: AppState) => state.articlesPage?.hasData || false;
export const getArticlesPageView = (state: AppState) => state.articlesPage?.view || ARTICLE_VIEW.SMALL;
export const getArticlesPageNumber = (state: AppState) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: AppState) => state.articlesPage?.limit || BIG_PAGE_LIMIT;
export const getArticlesPageHasMore = (state: AppState) => state.articlesPage?.hasMore;
export const getArticlesPageInited = (state: AppState) => state.articlesPage?._inited || false;
export const getArticlesPageOrder = (state: AppState) => state.articlesPage?.order ?? 'asc';
export const getArticlesPageSort = (state: AppState) => state.articlesPage?.sort ?? ARTICLE_SORT_FIELD.CREATED;
export const getArticlesPageSearch = (state: AppState) => state.articlesPage?.search ?? '';
export const getArticlesPageType = (state: AppState) => state.articlesPage?.type ?? ARTICLE_TYPE.ALL;

export const getArticlesStateSelector = createSelector([
    getArticles.selectAll,
    getArticlesPageIsLoading,
    getArticlesPageError,
    getArticlesPageHasData,
    getArticlesPageView,
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

export const getArticlesFiltersSelector = createSelector([
    getArticlesPageView,
    getArticlesPageOrder,
    getArticlesPageSort,
    getArticlesPageSearch,
    getArticlesPageType,
], (
    pageView,
    order,
    sort,
    search,
    type,
) => ({
    pageView,
    order,
    sort,
    search,
    type,
}));
