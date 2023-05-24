import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import { RoutePath } from 'app/providers/Router/routeConfig/routeConfig';
import { StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/stateSchema';

export interface RenderWithRouterOptions{
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export function componentRender(component: ReactNode, options:RenderWithRouterOptions = {}) {
    const { route = RoutePath.main, initialState } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
}
