import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';
import { IArticleDetailsState } from '../types/IArticleDetailsState';

const initialState: IArticleDetailsState = {
    data: null,
    hasData: false,
    isLoading: false,
    error: null,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchArticleById.fulfilled, (
                state,
                action: PayloadAction<Article>,
            ) => {
                state.isLoading = false;
                state.error = null;
                state.hasData = Boolean(action.payload);
                state.data = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || null;
            });
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
