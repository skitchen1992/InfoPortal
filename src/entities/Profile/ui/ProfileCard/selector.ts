import { createSelector } from '@reduxjs/toolkit';
import { getProfileData } from 'entities/Profile';

const getInfoList = createSelector(getProfileData, (profile) => [{ label: 'label.first_name', value: profile?.first_name },
    { label: 'label.last_name', value: profile?.last_name },
    { label: 'label.age', value: profile?.age },
    { label: 'label.city', value: profile?.city },
    { label: 'label.country', value: profile?.country },
    { label: 'label.currency', value: profile?.currency },
    { label: 'label.user_name', value: profile?.user_name }]);

export default createSelector([getProfileData, getInfoList], (profile, infoList) => ({
    profile,
    infoList,
}));
