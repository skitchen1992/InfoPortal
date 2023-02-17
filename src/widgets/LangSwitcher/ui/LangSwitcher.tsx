import React, {FC} from "react";
import {IconButton} from "shared/ui/IconButton/IconButton";
import {Translate} from "phosphor-react";
import {useTranslation} from "react-i18next";
import {LANG} from "./consts";
import cls from "./LangSwitcher.module.scss"
import {classNames} from "shared/lib/classNames";

interface IProps {
    className?: string
    classNameButton?: string
}

export const LangSwitcher: FC<IProps> = (props) => {
    const {className, classNameButton} = props
    const {i18n} = useTranslation()

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === LANG.RU ? LANG.EN : LANG.RU)
    }

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <IconButton className={classNameButton} onClick={toggleLang}>
                <Translate/>
            </IconButton>
            {i18n.language.toUpperCase()}
        </div>
    );
};
