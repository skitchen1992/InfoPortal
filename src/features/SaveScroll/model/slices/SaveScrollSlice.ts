import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISaveScrollState } from '../types/types';

const initialState: ISaveScrollState = {
    scroll: {},
};

export const saveScrollSlice = createSlice({
    name: 'save_scroll',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: saveScrollActions } = saveScrollSlice;
export const { reducer: saveScrollReducer } = saveScrollSlice;
