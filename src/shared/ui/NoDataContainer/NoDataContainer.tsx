import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';
import { Robot, Warning } from 'phosphor-react';
import { Typography } from 'shared/ui/Typography/Typography';
import cls from './NoDataContainer.module.scss';

interface IProps {
    isLoading: boolean
    children: ReactNode
    hasData: boolean
    error?: string | null
    loaderSize?: 'small' | 'medium' | 'large'
    className?: string
}

export const NoDataContainer: FC<IProps> = (props) => {
    const {
        isLoading,
        hasData,
        children,
        error,
        className,
        loaderSize,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [className])}>
            {isLoading && <Loader size={loaderSize} />}

            {!isLoading && !error && children}

            {!isLoading && !hasData && !error
                && (
                    <div className={cls.block}>
                        <div>
                            <Robot size={32} weight="bold" />
                        </div>
                        <Typography variant="body1">{t('label.no_data')}</Typography>
                    </div>
                ) }
            {!isLoading && error
                && (
                    <div className={cls.block}>
                        <div>
                            <Warning size={32} weight="bold" />
                        </div>
                        <Typography variant="body1">{t('label.error')}</Typography>
                    </div>
                )}
        </div>
    );
};
