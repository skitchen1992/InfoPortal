import React, { FC } from 'react';
import { IconButton } from 'shared/ui/IconButton/IconButton';
import { Translate } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from 'shared/ui/Stack';
import { LANG } from './consts';

interface IProps {
    className?: string
    classNameButton?: string
}

export const LangSwitcher: FC<IProps> = (props) => {
    const { className, classNameButton } = props;
    const { i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === LANG.RU ? LANG.EN : LANG.RU);
    };

    return (
        <HStack align="center" gap="8" className={classNames('', {}, [className])}>
            <IconButton className={classNameButton} onClick={toggleLang}>
                <Translate />
            </IconButton>
            {i18n?.language?.toUpperCase()}
        </HStack>
    );
};
