import { classNames } from 'shared/lib/classNames';
import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

interface IProps extends LinkProps {
    className?: string
}

export const AppLink: FC<IProps> = (props) => {
    const {
        className, to, children, ...othersProps
    } = props;
    return (
        <Link
            className={classNames(cls.root, {}, [className])}
            to={to}
            {...othersProps}
        >
            {children}
        </Link>
    );
};
