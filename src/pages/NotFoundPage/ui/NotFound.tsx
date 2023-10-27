import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from 'shared/ui/Stack';
import { Typography } from 'shared/ui/Typography/Typography';
import cls from './NotFound.module.scss';

const NotFound: FC = () => {
    const { t } = useTranslation();
    return (
        <HStack max justify="center" className={classNames(cls.root)}>
            <Typography variant="h4">
                {t('page.not_found')}
            </Typography>
        </HStack>
    );
};

export default NotFound;
