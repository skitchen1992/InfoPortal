import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IError } from 'features/AuthByUserName/model/types/loginSchema';
import { IProfile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<IError>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        try {
            const formData = getState().profile.form;

            const response = await extra.api.put<IProfile>(`/profile/${formData?.id}`, formData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            // @ts-ignore
            return rejectWithValue(error.response.message);
        }
    },
);
