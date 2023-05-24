import React from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const Main = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            {t('label.main')}
            <Input fullWidth />
        </div>
    );
};

export default Main;
