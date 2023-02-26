import React, { FC } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Header.module.scss';

interface IProps {
    className?: string
}

export const Header: FC<IProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <div className={classNames(cls.links, {}, [])}>
                <AppLink to={RoutePath.main}>
                    {t('page.main')}
                </AppLink>
                <AppLink to={RoutePath.about}>
                    {t('page.about')}
                </AppLink>
            </div>
            <div className={cls.actions}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
