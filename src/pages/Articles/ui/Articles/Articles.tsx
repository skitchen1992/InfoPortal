import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Articles.module.scss';

interface IProps {
    className?: string
}

const Articles: FC<IProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [className])}>
            Articles
        </div>
    );
};

export default memo(Articles);
