import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDynamicModuleLoad } from 'shared/hooks';
import { ReducersList } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { profileReducer } from 'entities/Profile';

const initialReducers:ReducersList = {
    profile: profileReducer,
};

const Profile = () => {
    const { t } = useTranslation('main');
    useDynamicModuleLoad({ reducers: initialReducers, removeAfterUnmount: true });

    return (
        <div>
            {t('label.profile')}
        </div>
    );
};

export default Profile;
