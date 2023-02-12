import React, {FC} from 'react';
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {classNames} from "shared/lib/classNames";
import cls from "./Header.module.scss"
import {useTheme} from "app/providers/ThemeProvider";
import {AppLink} from "shared/ui/AppLink/AppLink";

interface IProps {
    className?: string
}

export const Header: FC<IProps> = (props) => {
    const {className} = props

    const {toggleTheme} = useTheme()

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <div className={classNames(cls.links, {}, [])}>
                <AppLink to={RoutePath.main}>Главная</AppLink>
                <AppLink  to={RoutePath.about}>О сайте</AppLink>
            </div>
            <button onClick={toggleTheme}>Change theme</button>
        </div>
    );
};
