import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { VStack } from 'shared/ui/Stack';
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
        <VStack align="center" gap="8" justify="center" className={classNames(cls.root, {}, [className])}>
            <p className={cls.title}>{t('page.error')}</p>
            <Button onClick={reloadPage} size="large">
                {t('label.update_page')}
            </Button>
        </VStack>
    );
};
