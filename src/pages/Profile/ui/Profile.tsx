import React, { useCallback } from 'react';
import { useDynamicModuleLoad } from 'shared/hooks';
import { ReducersList } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import {
    fetchProfileData, profileActions, profileReducer, updateProfileData,
} from 'entities/Profile';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { NoDataContainer } from 'shared/ui/NoDataContainer/NoDataContainer';
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { IProfileParams } from 'app/providers/Router/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page/Page';
import selector from './selector';

const initialReducers: ReducersList = {
    profile: profileReducer,
};

const Profile = () => {
    const dispatch = useAppDispatch();
    const { profileId } = useParams<IProfileParams>();

    useDynamicModuleLoad({ reducers: initialReducers });

    const {
        isLoading, hasData, error, profile,
        infoList, readOnly, hasError, isEdit,
    } = useAppSelector(selector);

    useInitialEffect(() => {
        if (profileId) {
            dispatch(fetchProfileData(profileId));
        }
    });

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    const onChangeFormField = useCallback((value, field) => {
        dispatch(profileActions.updateProfile({ [field]: value }));
    }, [dispatch]);

    return (
        <Page>
            <NoDataContainer isLoading={isLoading} hasData={hasData} error={error} loaderSize="large">
                <ProfileCard
                    profile={profile}
                    infoList={infoList}
                    readOnly={readOnly}
                    onEdit={onEdit}
                    onCancel={onCancel}
                    onSave={onSave}
                    onChangeFormField={onChangeFormField}
                    hasError={hasError}
                    isEdit={isEdit}
                />
            </NoDataContainer>
        </Page>
    );
};

export default Profile;
