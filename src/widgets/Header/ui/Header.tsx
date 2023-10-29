import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';
import { getUserAuthData, userActions } from 'entities/User';
import { IconButton } from 'shared/ui/IconButton/IconButton';
import { List } from 'phosphor-react';
import { appActions } from 'app/slice/appSlice';
import { getSideBarCollapsed } from 'widgets/SideBar/model/selectors/getSideBarCollapsed/getSideBarCollapsed';
import { HStack } from 'shared/ui/Stack';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { RoutePath } from 'app/providers/Router/routeConfig/routeConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';
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
    const collapsed = useAppSelector(getSideBarCollapsed);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const onButtonClick = useCallback(() => {
        dispatch(appActions.setCollapsedSideBar(!collapsed));
    }, [dispatch, collapsed]);

    return (
        <header className={classNames(cls.root, {}, [className])}>
            <IconButton data-testid="SideBarButton" onClick={onButtonClick}><List /></IconButton>

            <HStack gap="8">
                <ThemeSwitcher />
                <LangSwitcher />
                {
                    authData ? (
                        <Dropdown
                            direction="bottom left"
                            className={cls.dropdown}
                            items={[
                                {
                                    content: t('page.profile'),
                                    href: `${RoutePath.profile}/${authData.id}`,
                                },
                                {
                                    content: t('label.sign_out'),
                                    onClick: onLogout,
                                },
                            ]}
                            trigger={<Avatar alt="Avatar" size={30} src={authData.avatar} />}
                        />
                    ) : (
                        <Button onClick={onShowModal} className={cls.button}>
                            {t('label.sign_in')}
                        </Button>
                    )
                }
                {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
            </HStack>
        </header>
    );
};
