import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'app/providers/Router/routeConfig/routeConfig';
import {
    Article, FolderSimplePlus, House, ListDashes, UserCircle,
} from 'phosphor-react';
import React from 'react';
import { ISideBarLinkList } from '../../types/sidebar';

const iconSize = 20;
export const getSideBarItems = createSelector([getUserAuthData], (userAuthData) => {
    const sideBarLinklist: ISideBarLinkList[] = [
        {
            routePath: RoutePath.main,
            icon: <House size={iconSize} />,
            label: 'page.main',
        },
        {
            routePath: RoutePath.about,
            icon: <ListDashes size={iconSize} />,
            label: 'page.about',
        },

    ];

    if (userAuthData?.id) {
        sideBarLinklist.push(
            {
                routePath: `${RoutePath.profile}/${userAuthData.id}`,
                icon: <UserCircle size={iconSize} />,
                label: 'page.profile',
                authOnly: true,
            },
            {
                routePath: RoutePath.articles,
                icon: <Article size={iconSize} />,
                label: 'page.articles',
                authOnly: true,
            },
            {
                routePath: RoutePath.article_create,
                icon: <FolderSimplePlus size={iconSize} />,
                label: 'page.create_article',
                authOnly: true,
            },
        );
    }
    return sideBarLinklist;
});
