import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface IProps {
    className?: string
}

export const LoginForm: FC<IProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <Input placeholder={t('label.login')} />
            <Input placeholder={t('label.password')} />
            <Button size="medium">
                {t('label.submit')}
            </Button>
        </div>
    );
};
