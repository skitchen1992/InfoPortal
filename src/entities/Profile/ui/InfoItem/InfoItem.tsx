import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Typography } from 'shared/ui/Typography/Typography';
import cls from './InfoItem.module.scss';

interface IProps {
    className?: string
    label: string
    value?: string
}

export const InfoItem: FC<IProps> = (props) => {
    const { className, label, value } = props;

    const { t } = useTranslation('profile');

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <Typography variant="body1">
                {t(label)}
            </Typography>
            <Typography variant="body1">
                {value}
            </Typography>
        </div>
    );
};
