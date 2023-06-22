import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IError } from 'features/AuthByUserName/model/types/loginSchema';

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
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    },
);
