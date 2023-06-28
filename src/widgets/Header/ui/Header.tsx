import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Header.module.scss';

interface IProps {
    className?: string
}

export const Header: FC<IProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const authData = useAppSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <div className={cls.actions}>
                <ThemeSwitcher />
                <LangSwitcher />
                <Button onClick={authData ? onLogout : onShowModal} className={cls.button}>
                    {authData ? t('label.sign_out') : t('label.sign_in') }
                </Button>
                {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
            </div>
        </div>
    );
};
