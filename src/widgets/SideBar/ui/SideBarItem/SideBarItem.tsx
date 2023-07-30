import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { ISideBarLinkList } from 'widgets/SideBar/model/LinkList';
import { useAppSelector } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import cls from './SideBarItem.module.scss';

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
            <div className={classNames(cls.link, {}, [])}>
                {item.icon}
                <div className={classNames(cls.label, { [cls.collapsed]: collapsed }, [])}>
                    {t(item.label)}
                </div>
            </div>
        </AppLink>
    );
};
