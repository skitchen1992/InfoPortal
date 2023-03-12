import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Header.module.scss';

interface IProps {
    className?: string
}

export const Header: FC<IProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <div className={cls.actions}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
