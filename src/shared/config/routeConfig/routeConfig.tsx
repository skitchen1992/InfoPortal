import { RouteProps } from 'react-router-dom';
import { FirstPage } from 'pages/Main';
import { SecondPage } from 'pages/About';

export enum APP_ROUTES {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePath: Record<APP_ROUTES, string> = {
    [APP_ROUTES.MAIN]: '/',
    [APP_ROUTES.ABOUT]: 'about',
};

export const routeConfig: Record<APP_ROUTES, RouteProps> = {
    [APP_ROUTES.MAIN]: {
        path: RoutePath.main,
        element: <FirstPage />,
    },
    [APP_ROUTES.ABOUT]: {
        path: RoutePath.about,
        element: <SecondPage />,
    },
};
