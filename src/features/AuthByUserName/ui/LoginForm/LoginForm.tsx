import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';

interface IProps {
    className?: string
}

export const LoginForm: FC<IProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <Button>
                {t('label.sign_in')}
            </Button>
        </div>
    );
};
