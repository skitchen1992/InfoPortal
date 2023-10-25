import { AppState } from 'app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: AppState) => state.articleDetailsPage?.recommendations?.isLoading;
export const getArticleRecommendationsError = (state: AppState) => state.articleDetailsPage?.recommendations?.error;
export const getArticleRecommendationsHasData = (state: AppState) => state.articleDetailsPage?.recommendations?.hasData;
