import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';
import cls from './SideBarItem.module.scss';
import { ISideBarLinkList } from '../../model/types/sidebar';

interface IProps {
    item: ISideBarLinkList
    collapsed: boolean;
}

export const SideBarItem = (props: IProps) => {
    const {
        collapsed, item,
    } = props;

    const { t } = useTranslation();
    const isAuth = useAppSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink to={item.routePath}>
            <HStack align="center" padding="4" gap="8" className={classNames(cls.link, {}, [])}>
                {item.icon}
                <div className={classNames('', { [cls.collapsed]: collapsed }, [])}>
                    {t(item.label)}
                </div>
            </HStack>
        </AppLink>
    );
};
