import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppSelector } from 'app/providers/StoreProvider';
import { Typography } from 'shared/ui/Typography/Typography';
import { InfoItem } from 'entities/Profile/ui/InfoItem/InfoItem';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './ProfileCard.module.scss';
import selector from './selector';

interface IProps {
    className?: string
}

export const ProfileCard: FC<IProps> = (props) => {
    const { className } = props;

    const { profile, infoList } = useAppSelector(selector);
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <div className={classNames(cls.header, {}, [])}>
                <img className={classNames(cls.avatar, {}, [])} src={profile?.avatar} alt="Avatar" />
                <Typography variant="h1">
                    {[profile?.first_name, profile?.last_name].filter(Boolean).join(' ')}
                </Typography>
            </div>

            <div className={classNames(cls.info, {}, [])}>
                {infoList?.map((item) => <InfoItem key={item.label} label={item.label} value={item.value} />)}
            </div>
            <div className={classNames(cls.actions, {}, [])}>
                <Button size="large">
                    {t('label.edit')}
                </Button>
            </div>

        </div>
    );
};
