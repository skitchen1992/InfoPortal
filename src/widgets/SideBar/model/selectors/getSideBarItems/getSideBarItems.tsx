import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'app/providers/Router/routeConfig/routeConfig';
import {
    Article, House, ListDashes, UserCircle,
} from 'phosphor-react';
import React from 'react';
import { ISideBarLinkList } from '../../types/sidebar';

export const getSideBarItems = createSelector([getUserAuthData], (userAuthData) => {
    const sideBarLinklist: ISideBarLinkList[] = [
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

    ];

    if (userAuthData?.id) {
        sideBarLinklist.push(
            {
                routePath: `${RoutePath.profile}/${userAuthData.id}`,
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
        );
    }
    return sideBarLinklist;
});
