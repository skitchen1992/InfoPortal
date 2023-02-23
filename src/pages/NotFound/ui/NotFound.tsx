import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import cls from './NotFound.module.scss';

const NotFound: FC = () => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.root)}>
            {t('page.not_found')}
        </div>
    );
};

export default NotFound;
