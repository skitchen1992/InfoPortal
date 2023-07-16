import React, { useEffect } from 'react';
import { useDynamicModuleLoad } from 'shared/hooks';
import { ReducersList } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import {
    fetchProfileData, profileReducer,
} from 'entities/Profile';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { NoDataContainer } from 'shared/ui/NoDataContainer/NoDataContainer';
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import selector from '../selector/selector';

const initialReducers: ReducersList = {
    profile: profileReducer,
};

const Profile = () => {
    const dispatch = useAppDispatch();

    useDynamicModuleLoad({ reducers: initialReducers, removeAfterUnmount: true });

    const { isLoading, hasData, error } = useAppSelector(selector);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <NoDataContainer isLoading={isLoading} hasData={hasData} error={error} loaderSize="large">
            <ProfileCard />
        </NoDataContainer>
    );
};

export default Profile;
