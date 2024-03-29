import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Typography } from 'shared/ui/Typography/Typography';
import { InfoItem } from 'entities/Profile/ui/InfoItem/InfoItem';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { IProfile } from 'entities/Profile/model/types/profile';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { IInfo } from 'pages/ProfilePage/ui/selector';
import cls from './ProfileCard.module.scss';

interface IProps {
    readOnly?: boolean
    className?: string
    profile?: IProfile | null
    infoList?: IInfo[]
    onEdit?: () => void
    onCancel?: () => void
    onSave?: () => void
    onChangeFormField: (value: string, name?: string) => void
    hasError?: boolean
    isEdit?: boolean
}

export const ProfileCard: FC<IProps> = (props) => {
    const {
        className,
        profile,
        infoList,
        readOnly,
        onEdit,
        onCancel,
        onSave,
        onChangeFormField,
        hasError,
        isEdit,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <div className={classNames(cls.header, {}, [])}>
                <Avatar alt="Avatar" src={profile?.avatar} />
                <Typography variant="h1">
                    {[profile?.first_name, profile?.last_name].filter(Boolean).join(' ')}
                </Typography>
            </div>

            <div className={classNames(cls.info, {}, [])}>
                {infoList?.map((item) => (
                    <InfoItem
                        key={item.label}
                        item={item}
                        readOnly={readOnly}
                        onChangeFormField={onChangeFormField}
                    />
                ))}
            </div>
            <div className={classNames(cls.rootActions, {}, [])}>
                {isEdit
                && (
                    <>
                        {readOnly ? (
                            <Button size="large" onClick={onEdit}>
                                {t('label.edit')}
                            </Button>
                        ) : (
                            <div className={classNames(cls.actions, {}, [])}>
                                <Button size="large" variant="outlineError" onClick={onCancel}>
                                    {t('label.cancel')}
                                </Button>
                                <Button size="large" disabled={hasError} onClick={onSave}>
                                    {t('label.save')}
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
