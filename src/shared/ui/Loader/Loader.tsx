import { classNames } from 'shared/lib/classNames';
import { FC } from 'react';
import cls from './Loader.module.scss';

interface IProps {
    className?: string
    size?: 'small' | 'medium' | 'large'
}

export const Loader: FC<IProps> = (props) => {
    const { className, size = 'small' } = props;

    return (
        <span className={classNames(cls.loader, {
            [cls.sizeL]: size === 'small',
            [cls.sizeM]: size === 'medium',
            [cls.sizeL]: size === 'large',
        }, [className])}
        />
    );
};
