import { AppState } from 'app/providers/StoreProvider';

export const getUserInitialized = (state: AppState) => state.user._initialized;
