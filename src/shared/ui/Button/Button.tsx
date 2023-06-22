import { classNames } from 'shared/lib/classNames/classNames';
import React, { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    size?: 'small' | 'large' | 'medium'
    disabled?: boolean
}

export const Button: FC<IProps> = (props) => {
    const {
        className, disabled, children, size = 'small', ...othersProps
    } = props;

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.root, {
                [cls.small]: size === 'small',
                [cls.medium]: size === 'medium',
                [cls.large]: size === 'large',
                [cls.disabled]: disabled,
            }, [className])}
            {...othersProps}
        >
            {children}
        </button>
    );
};
