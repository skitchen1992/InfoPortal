import { classNames } from 'shared/lib/classNames/classNames';
import React, { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    size?: 'small' | 'large' | 'medium'
    disabled?: boolean
    variant?: 'outline' | 'contained' | 'outlineError'
}

export const Button: FC<IProps> = (props) => {
    const {
        className, disabled, children, size = 'small', variant = 'contained', ...othersProps
    } = props;

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.root, {
                [cls.contained]: variant === 'contained',
                [cls.outline]: variant === 'outline',
                [cls.outlineError]: variant === 'outlineError',
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
