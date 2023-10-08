import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IError } from 'features/AuthByUserName/model/types/loginSchema';
import { IProfile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<IProfile, string, ThunkConfig<IError>>(
    'profile/fetchProfileData',
    async (profileId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<IProfile>(`/profile/${profileId}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            // @ts-ignore
            return rejectWithValue(error.response.data);
        }
    },
);
