import { classNames } from 'shared/lib/classNames';
import { FC } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface IProps {
    className?: string
}

export const PageLoader: FC<IProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.root, {}, [className])}>
            <Loader size="large" />
        </div>
    );
};
