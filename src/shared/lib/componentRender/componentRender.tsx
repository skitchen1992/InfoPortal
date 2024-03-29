import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import { RoutePath } from 'app/providers/Router/routeConfig/routeConfig';
import { StoreProvider } from 'app/providers/StoreProvider';
import { AppState } from 'app/providers/StoreProvider/config/appState';

export interface RenderWithRouterOptions{
    route?: string
    initialState?: DeepPartial<AppState>
}

export function componentRender(component: ReactNode, options:RenderWithRouterOptions = {}) {
    const { route = RoutePath.main, initialState } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
        ,
    );
}
