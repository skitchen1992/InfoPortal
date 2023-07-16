import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile, IProfileState } from 'entities/Profile/model/types/profile';
import { fetchProfileData } from 'entities/Profile';

const initialState: IProfileState = {
    readonly: true,
    data: null,
    hasData: false,
    isLoading: false,
    error: null,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setAuthUser: (state, action: PayloadAction<IProfile>) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.error = null;
            state.isLoading = true;
        });
        builder.addCase(fetchProfileData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.hasData = Boolean(action.payload);
            state.data = action.payload;
        });
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload?.message || 'error';
        });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
