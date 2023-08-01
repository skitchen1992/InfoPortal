import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile, IProfileState } from 'entities/Profile/model/types/profile';
import { fetchProfileData, updateProfileData } from 'entities/Profile';

const initialState: IProfileState = {
    readOnly: true,
    data: null,
    form: null,
    hasData: false,
    isLoading: false,
    error: null,
    validationError: [],
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setAuthUser: (state, action: PayloadAction<IProfile>) => {
            state.data = action.payload;
        },
        setReadOnly: (state, action: PayloadAction<boolean>) => {
            state.readOnly = action.payload;
        },
        cancelEdit: (state) => {
            state.readOnly = true;
            state.validationError = [];
            state.form = state.data;
        },
        updateProfile: (state, action: PayloadAction<IProfile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },

        setValidationError: (state, action: PayloadAction<any>) => {
            state.validationError = {
                ...state.validationError,
                [action.payload.field]: action.payload,
            };
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
            state.form = action.payload;
        });
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload?.message || 'error';
        });
        builder.addCase(updateProfileData.pending, (state) => {
            state.error = null;
            state.validationError = [];
            state.isLoading = true;
        });
        builder.addCase(updateProfileData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.validationError = [];
            state.hasData = Boolean(action.payload);
            state.data = action.payload;
            state.form = action.payload;
            state.readOnly = true;
        });
        builder.addCase(updateProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload?.message || 'error';
        });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
