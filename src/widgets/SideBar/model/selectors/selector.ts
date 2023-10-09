import { createSelector } from '@reduxjs/toolkit';
import { getSideBarCollapsed } from 'widgets/SideBar/model/selectors/getSideBarCollapsed/getSideBarCollapsed';
import { getSideBarItems } from 'widgets/SideBar/model/selectors/getSideBarItems/getSideBarItems';

export default createSelector(
    [
        getSideBarCollapsed,
        getSideBarItems,
    ],
    (
        collapsed,
        sideBarItems,

    ) => ({
        collapsed,
        sideBarItems,
    }),
);
