import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { AppState } from 'app/providers/StoreProvider';
import { IArticle } from 'entities/Article';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
import {
    ArticleDetailsRecommendationsState,
} from '../types/ArticleDetailsRecommendationsSchema';

const recommendationsAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<AppState>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsPageRecommendationsSlice = createSlice({
    name: 'articleDetailsPageRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsState>({
        hasData: false,
        isLoading: false,
        error: null,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = null;
                state.isLoading = true;
                state.hasData = false;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.hasData = Boolean(state.ids.length) || Boolean(action.payload.length);
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.hasData = false;
                state.error = action.payload || 'error';
            });
    },
});

export const {
    reducer: articleDetailsPageRecommendationsReducer,
} = articleDetailsPageRecommendationsSlice;
