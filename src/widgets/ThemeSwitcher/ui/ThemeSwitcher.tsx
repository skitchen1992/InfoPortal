import cls from "./ThemeSwitcher.module.scss"
import React, {FC} from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {Moon, Sun} from "phosphor-react";
import {THEME} from "app/providers/ThemeProvider/lib/ThemeContext";
import {IconButton} from "shared/ui/IconButton/IconButton";

const getIcon = (theme: THEME) => {
    switch (theme) {
        case THEME.DARK:
            return <Sun className={cls.icon}/>;
        case THEME.LIGHT:
            return <Moon className={cls.icon}/>
    }
}

interface IProps {
    className?: string
}

export const ThemeSwitcher: FC<IProps> = (props) => {
    const {className} = props

    const {theme, toggleTheme} = useTheme()

    return (
        <IconButton className={className} onClick={toggleTheme}>
            {getIcon(theme)}
        </IconButton>
    );
};
