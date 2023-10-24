import { AppState } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getSavedScroll = (state: AppState) => state.savedScroll.scroll;

export const getSavedScrollByPath = createSelector(
    getSavedScroll,
    (state: AppState, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
