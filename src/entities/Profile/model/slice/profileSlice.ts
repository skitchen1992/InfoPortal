import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile, IProfileState } from 'entities/Profile/model/types/profile';

const initialState: IProfileState = {
    readonly: true,
    data: null,
    loading: false,
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
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
