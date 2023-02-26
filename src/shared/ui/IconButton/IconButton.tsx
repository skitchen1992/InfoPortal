import { classNames } from 'shared/lib/classNames/classNames';
import React, { ButtonHTMLAttributes, FC } from 'react';
import cls from './IconButton.module.scss';
import { Size } from './types';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    size?: Size
}

export const IconButton: FC<IProps> = (props) => {
    const {
        className, children, size = 'small', ...othersProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.root, {
                [cls.small]: size === 'small',
                [cls.large]: size === 'large',
            }, [className])}
            {...othersProps}
        >
            {children}
        </button>
    );
};
