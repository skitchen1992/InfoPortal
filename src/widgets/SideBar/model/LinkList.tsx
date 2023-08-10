import React from 'react';
import {
    Article, House, ListDashes, UserCircle,
} from 'phosphor-react';
import { RoutePath } from 'app/providers/Router/routeConfig/routeConfig';

export interface ISideBarLinkList {
    routePath: string;
    icon: React.ReactNode;
    label: string;
    authOnly?: boolean;
}

export const sideBarLinklist: ISideBarLinkList[] = [
    {
        routePath: RoutePath.main,
        icon: <House size={26} />,
        label: 'page.main',
    },
    {
        routePath: RoutePath.about,
        icon: <ListDashes size={26} />,
        label: 'page.about',
    },
    {
        routePath: RoutePath.profile,
        icon: <UserCircle size={26} />,
        label: 'page.profile',
        authOnly: true,
    },
    {
        routePath: RoutePath.articles,
        icon: <Article size={26} />,
        label: 'page.articles',
        authOnly: true,
    },

];
