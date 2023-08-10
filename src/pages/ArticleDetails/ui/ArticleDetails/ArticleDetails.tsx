import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetails.module.scss';

interface IProps {
    className?: string
}

const ArticleDetails: FC<IProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [className])}>
            ArticleDetails
        </div>
    );
};

export default memo(ArticleDetails);
