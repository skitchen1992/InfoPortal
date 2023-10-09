import React from 'react';

export interface ISideBarLinkList {
    routePath: string;
    icon: React.ReactNode;
    label: string;
    authOnly?: boolean;
}
