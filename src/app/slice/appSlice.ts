import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAppState {
    sidebarCollapsed: boolean;
}

const initialState: IAppState = {
    sidebarCollapsed: false,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setCollapsedSideBar: (state, action: PayloadAction<boolean>) => {
            state.sidebarCollapsed = action.payload;
        },

    },
});

export const { actions: appActions } = appSlice;
export const { reducer: appReducer } = appSlice;
