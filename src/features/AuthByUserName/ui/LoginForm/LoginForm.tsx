import React, { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { Typography } from 'shared/ui/Typography/Typography';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface IProps {
    className?: string
    onClose: () => void
}

export const LoginForm: FC<IProps> = (props) => {
    const { className, onClose } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const {
        userName, password, error, isLoading,
    } = useAppSelector(getLoginState);

    const onChangeUserName = useCallback((value) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ userName, password })).then(() => {
            onClose();
        });
    }, [dispatch, userName, password, onClose]);

    return (
        <div className={classNames(cls.root, {}, [className])}>
            {error && <Typography variant="body1" color="error">{t(`label.error.${error}`)}</Typography>}
            <Input value={userName} disabled={isLoading} onChange={onChangeUserName} placeholder={t('label.login')} />
            <Input value={password} disabled={isLoading} onChange={onChangePassword} placeholder={t('label.password')} />
            <Button disabled={isLoading} onClick={onLoginClick} size="medium">
                {t('label.submit')}
            </Button>
        </div>
    );
};
