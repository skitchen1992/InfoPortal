import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IError } from 'features/AuthByUserName/model/types/loginSchema';
import { userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';

interface LoginByUserName {
    userName: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<any, LoginByUserName, { rejectValue: IError }>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<any>('http://localhost:8000/login', {
                username: authData.userName,
                password: authData.password,
            });

            if (!response.data) {
                throw new Error('User not found');
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthUser(response.data));
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    },
);
