import { AppState } from 'app/providers/StoreProvider/config/appState';
import { IUser } from 'entities/User';

export const getUserAuthData = (state: AppState): IUser => state.user.authData;
