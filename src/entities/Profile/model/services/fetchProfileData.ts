import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IError } from 'features/AuthByUserName/model/types/loginSchema';
import { IProfile } from '../types/profile';

export const fetchProfileData = createAsyncThunk<IProfile, void, ThunkConfig<IError>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<IProfile>('/profile');

            return response.data;
        } catch (error) {
            // @ts-ignore
            return rejectWithValue(error.response.data);
        }
    },
);
