import React, { FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface IProps {
    alt: string
    src?: string
    className?: string
    size?: number
}

export const Avatar: FC<IProps> = (props) => {
    const {
        alt, src = 'https://www.w3schools.com/howto/img_avatar.png', className, size,
    } = props;

    const styles = useMemo<React.CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img style={styles} className={classNames(cls.root, {}, [className])} src={src} alt={alt} />
    );
};
