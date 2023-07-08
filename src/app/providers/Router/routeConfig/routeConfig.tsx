import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/Main';
import { AboutPage } from 'pages/About';
import { NotFoundPage } from 'pages/NotFound';
import { ProfilePage } from 'pages/Profile';

export enum APP_ROUTES {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<APP_ROUTES, string> = {
    [APP_ROUTES.MAIN]: '/',
    [APP_ROUTES.ABOUT]: '/about',
    [APP_ROUTES.PROFILE]: '/profile',
    [APP_ROUTES.NOT_FOUND]: '*',
};

export const routeConfig: Record<APP_ROUTES, RouteProps> = {
    [APP_ROUTES.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [APP_ROUTES.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [APP_ROUTES.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
    },
    [APP_ROUTES.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
