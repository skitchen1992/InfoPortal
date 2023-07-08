import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';
import { IUser, IUserState } from '../types/user';

const initialState: IUserState = {
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthUser: (state, action: PayloadAction<IUser>) => {
            state.authData = action.payload;
        },
        initAuthUser: (state) => {
            const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
