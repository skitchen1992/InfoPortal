import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticleDetails } from 'pages/ArticleDetailsPage';
import { Articles } from 'pages/ArticlesPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';

export type IArticleParams = {
    articleId?: string;
}

export type IProfileParams = {
    profileId?: string;
}

export type AppRouterProps = RouteProps & {
    authOnly?: boolean;
}
export enum APP_ROUTES {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',

    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<APP_ROUTES, string> = {
    [APP_ROUTES.MAIN]: '/',
    [APP_ROUTES.ABOUT]: '/about',
    [APP_ROUTES.PROFILE]: '/profile', // + : profileId
    [APP_ROUTES.ARTICLES]: '/articles',
    [APP_ROUTES.ARTICLE_DETAILS]: '/articles', // + : articleId
    [APP_ROUTES.ARTICLE_CREATE]: '/articles/create',
    [APP_ROUTES.ARTICLE_EDIT]: '/articles/:articleId/edit', // + : articleId

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
        path: `${RoutePath.profile}/:profileId`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [APP_ROUTES.ARTICLES]: {
        path: RoutePath.articles,
        element: <Articles />,
        authOnly: true,
    },
    [APP_ROUTES.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}/:articleId`,
        element: <ArticleDetails />,
        authOnly: true,
    },
    [APP_ROUTES.ARTICLE_EDIT]: {
        path: `${RoutePath.article_edit}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [APP_ROUTES.ARTICLE_CREATE]: {
        path: `${RoutePath.article_create}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },

    [APP_ROUTES.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
