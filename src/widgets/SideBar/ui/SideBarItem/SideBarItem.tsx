import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './SideBarItem.module.scss';

interface IProps {
    routePath: string;
    icon: React.ReactNode;
    collapsed: boolean;
    label: string;
}

export const SideBarItem = (props: IProps) => {
    const {
        routePath, icon, collapsed, label,
    } = props;

    const { t } = useTranslation();

    return (
        <AppLink to={routePath}>
            <div className={classNames(cls.link, {}, [])}>
                {icon}
                <div className={classNames(cls.label, { [cls.collapsed]: collapsed }, [])}>
                    {t(label)}
                </div>
            </div>
        </AppLink>
    );
};
