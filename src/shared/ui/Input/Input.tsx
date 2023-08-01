import React, { InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Typography } from 'shared/ui/Typography/Typography';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'readOnly'>

interface IProps extends HTMLInputProps {
    value?: string
    size?: 'small' | 'large' | 'medium'
    onChange?: (value: string, name?: string) => void
    disabled?: boolean
    loading?: boolean
    fullWidth?: boolean
    readOnly?: boolean
    name?: string
    error?: string
}

export const Input = memo((props: IProps) => {
    const {
        className,
        size = 'large',
        value,
        onChange,
        disabled = false,
        fullWidth = false,
        placeholder,
        readOnly,
        name,
        error,
        ...othersProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value, name);
    };

    const mods = {
        [cls.small]: size === 'small',
        [cls.medium]: size === 'medium',
        [cls.large]: size === 'large',
        [cls.readOnly]: readOnly,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
        [cls.error]: error,
    };

    return (
        <div className={classNames(cls.root, {}, [])}>
            <input
                value={value}
                onChange={onChangeHandler}
                disabled={disabled}
                placeholder={placeholder}
                readOnly={readOnly}
                className={classNames(cls.input, mods, [className])}
                {...othersProps}
            />
            {error && <Typography variant="body2" color="error">{error}</Typography>}
        </div>
    );
});
