import React, { InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'>

interface IProps extends HTMLInputProps {
    value?: string
    size?: 'small' | 'large' | 'medium'
    onChange?: (value: string) => void
    disabled?: boolean
    loading?: boolean
    fullWidth?: boolean
}

export const Input = memo((props: IProps) => {
    const {
        className, size = 'large', value, onChange, disabled = false, fullWidth = false, placeholder, ...othersProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            value={value}
            onChange={onChangeHandler}
            disabled={disabled}
            placeholder={placeholder}
            className={classNames(cls.root, {
                [cls.small]: size === 'small',
                [cls.medium]: size === 'medium',
                [cls.large]: size === 'large',
                [cls.disabled]: disabled,
                [cls.fullWidth]: fullWidth,
            }, [className])}
            {...othersProps}
        />
    );
});
