import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { HStack } from 'shared/ui/Stack';
import cls from './PageLoader.module.scss';

interface IProps {
    className?: string
}

export const PageLoader: FC<IProps> = (props) => {
    const { className } = props;
    return (
        <HStack justify="center" align="center" className={classNames(cls.root, {}, [className])}>
            <Loader size="large" />
        </HStack>
    );
};
