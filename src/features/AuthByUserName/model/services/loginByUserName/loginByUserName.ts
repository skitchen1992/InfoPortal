import { createAsyncThunk } from '@reduxjs/toolkit';
import { IError } from 'features/AuthByUserName/model/types/loginSchema';
import { IUser, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUserName {
    userName: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<IUser, LoginByUserName, ThunkConfig<IError>>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.post<IUser>('/login', {
                username: authData.userName,
                password: authData.password,
            });

            if (!response.data) {
                throw new Error('User not found');
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));

            dispatch(userActions.setAuthUser(response.data));

            return response.data;
        } catch (error) {
            // @ts-ignore
            return rejectWithValue(error.response.data);
        }
    },
);
