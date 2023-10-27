import { FC, FunctionComponent, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';
import { Robot, Warning } from 'phosphor-react';
import { Typography } from 'shared/ui/Typography/Typography';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './NoDataContainer.module.scss';

const EmptyLayout: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className={cls.block}>
            <div>
                <Robot size={32} weight="bold" />
            </div>
            <Typography variant="body1">{t('label.no_data')}</Typography>
        </div>
    );
};

interface IProps {
    isLoading: boolean
    children: ReactNode
    hasData: boolean
    error?: string | null
    loaderSize?: 'small' | 'medium' | 'large'
    className?: string
    loader?: React.ReactNode;
    noDataContent?: React.ReactNode;
}

export const NoDataContainer: FC<IProps> = (props) => {
    const {
        isLoading,
        hasData,
        children,
        error,
        className,
        loaderSize,
        loader,
        noDataContent,
    } = props;

    const { t } = useTranslation();

    const loaderToRender = loader || <Loader size={loaderSize} />;
    const noDataToRender = noDataContent || <EmptyLayout />;

    return (
        <HStack align="center" max justify="center" className={classNames(cls.root, {}, [className])}>
            {isLoading && loaderToRender}

            {!isLoading && !error && hasData && children}

            {!isLoading && !hasData && !error && (noDataToRender) }

            {!isLoading && error
                && (
                    <VStack max justify="center">
                        <div>
                            <Warning size={32} weight="bold" />
                        </div>
                        <Typography variant="body1">{t('label.error')}</Typography>
                    </VStack>
                )}
        </HStack>
    );
};
