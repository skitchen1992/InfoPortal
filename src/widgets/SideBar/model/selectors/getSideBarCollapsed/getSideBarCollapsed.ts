import { AppState } from 'app/providers/StoreProvider/config/appState';

export const getSideBarCollapsed = (state: AppState) => state?.app.sidebarCollapsed;
