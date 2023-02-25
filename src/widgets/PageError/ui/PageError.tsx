import { classNames } from 'shared/lib/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface IProps {
    className?: string
}

export const PageError: FC<IProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <p className={cls.title}>{t('page.error')}</p>
            <Button onClick={reloadPage} size="large">
                {t('label.update_page')}
            </Button>
        </div>
    );
};
