import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/Main';
import { AboutPage } from 'pages/About';
import { NotFoundPage } from 'pages/NotFound';
import { ProfilePage } from 'pages/Profile';
import { ArticleDetails } from 'pages/ArticleDetails';
import { Articles } from 'pages/Articles';

export type IArticleParams = {
    articleId?: string;
}

export type AppRouterProps = RouteProps & {
    authOnly?: boolean;
}
export enum APP_ROUTES {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLE_DETAILS = 'article_details',
    ARTICLES = 'articles',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<APP_ROUTES, string> = {
    [APP_ROUTES.MAIN]: '/',
    [APP_ROUTES.ABOUT]: '/about',
    [APP_ROUTES.PROFILE]: '/profile',
    [APP_ROUTES.ARTICLE_DETAILS]: '/article_details', // + : articleId
    [APP_ROUTES.ARTICLES]: '/articles',
    [APP_ROUTES.NOT_FOUND]: '*',
};

export const routeConfig: Record<APP_ROUTES, AppRouterProps> = {
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
        authOnly: true,
    },
    [APP_ROUTES.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}/:articleId`,
        element: <ArticleDetails />,
        authOnly: true,
    },
    [APP_ROUTES.ARTICLES]: {
        path: RoutePath.articles,
        element: <Articles />,
        authOnly: true,
    },
    [APP_ROUTES.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
