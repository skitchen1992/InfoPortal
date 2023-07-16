import { AppState } from 'app/providers/StoreProvider';

export const getProfileData = (state: AppState) => state.profile?.data;
