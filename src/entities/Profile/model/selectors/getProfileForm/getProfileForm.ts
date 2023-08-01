import { AppState } from 'app/providers/StoreProvider';

export const getProfileForm = (state: AppState) => state.profile?.form;
