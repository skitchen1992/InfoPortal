import React, { FC } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/AuthByUserName/ui/LoginForm/LoginForm';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';

interface IProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal: FC<IProps> = (props) => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal isOpen={isOpen} onClose={onClose} className={classNames(cls.root, {}, [className])}>
            <LoginForm />
        </Modal>
    );
};
