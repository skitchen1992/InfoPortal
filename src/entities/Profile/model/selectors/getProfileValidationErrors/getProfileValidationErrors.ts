import { AppState } from 'app/providers/StoreProvider';

export const getProfileValidationErrors = (state: AppState) => state.profile?.validationError;
