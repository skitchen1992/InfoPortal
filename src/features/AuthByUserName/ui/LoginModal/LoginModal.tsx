import React, { FC, Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

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
            className={classNames('', {}, [className])}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onClose={onClose} />
            </Suspense>

        </Modal>
    );
};
