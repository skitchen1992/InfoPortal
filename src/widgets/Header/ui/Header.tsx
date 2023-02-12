import React, {FC} from 'react';
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {classNames} from "shared/lib/classNames";
import cls from "./Header.module.scss"
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface IProps {
    className?: string
}

export const Header: FC<IProps> = (props) => {
    const {className} = props

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <div className={classNames(cls.links, {}, [])}>
                <AppLink to={RoutePath.main}>Главная</AppLink>
                <AppLink to={RoutePath.about}>О сайте</AppLink>
            </div>
            <ThemeSwitcher/>
        </div>
    );
};
