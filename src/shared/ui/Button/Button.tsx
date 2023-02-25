import { classNames } from 'shared/lib/classNames';
import React, { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    size?: 'small' | 'large' | 'medium'
}

export const Button: FC<IProps> = (props) => {
    const {
        className, children, size = 'small', ...othersProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.root, {
                [cls.small]: size === 'small',
                [cls.medium]: size === 'medium',
                [cls.large]: size === 'large',
            }, [className])}
            {...othersProps}
        >
            {children}
        </button>
    );
};
