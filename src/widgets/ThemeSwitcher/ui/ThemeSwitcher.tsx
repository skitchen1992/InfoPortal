import {classNames} from "shared/lib/classNames";
import cls from "./ThemeSwitcher.module.scss"
import React, {ButtonHTMLAttributes, FC} from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {Moon, Sun} from "phosphor-react";
import {THEME} from "app/providers/ThemeProvider/lib/ThemeContext";

const getIcon = (theme: THEME) => {
    switch (theme) {
        case THEME.DARK:
            return <Sun className={cls.icon}/>;
        case THEME.LIGHT:
            return <Moon className={cls.icon}/>
    }
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

export const ThemeSwitcher: FC<IProps> = (props) => {
    const {className, ...othersProps} = props

    const {theme, toggleTheme} = useTheme()

    return (
        <button className={classNames(cls.root, {}, [className])} onClick={toggleTheme} {...othersProps}>
            {getIcon(theme)}
        </button>
    );
};
