import React, { useCallback, useEffect } from 'react';
import { useDynamicModuleLoad } from 'shared/hooks';
import { ReducersList } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import {
    fetchProfileData, profileActions, profileReducer, updateProfileData,
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

    const {
        isLoading, hasData, error, profile,
        infoList, readOnly,
    } = useAppSelector(selector);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <NoDataContainer isLoading={isLoading} hasData={hasData} error={error} loaderSize="large">
            <ProfileCard
                profile={profile}
                infoList={infoList}
                readOnly={readOnly}
                onEdit={onEdit}
                onCancel={onCancel}
                onSave={onSave}
            />
        </NoDataContainer>
    );
};

export default Profile;
