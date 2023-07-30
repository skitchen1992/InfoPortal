import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProfile } from 'entities/Profile/model/types/profile';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IError } from 'features/AuthByUserName/model/types/loginSchema';

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<IError>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        try {
            const formData = getState().profile.form;

            const response = await extra.api.put<IProfile>('/profile', formData);

            return response.data;
        } catch (error) {
            // @ts-ignore
            return rejectWithValue(error.response.data);
        }
    },
);
