import React, { FC } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/AuthByUserName/ui/LoginForm/LoginForm';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface IProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal: FC<IProps> = (props) => {
    const { className, isOpen, onClose } = props;

    const { t } = useTranslation();

    return (
        <Modal
            isOpen={isOpen}
            title={t('label.authorization')}
            onClose={onClose}
            lazy
            className={classNames(null, {}, [className])}
        >
            <LoginForm />
        </Modal>
    );
};
