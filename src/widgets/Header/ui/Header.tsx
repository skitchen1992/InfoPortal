import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Header.module.scss';

interface IProps {
    className?: string
}

export const Header: FC<IProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <div className={cls.actions}>
                <ThemeSwitcher />
                <LangSwitcher />
                <Button onClick={onToggleModal} className={cls.button}>
                    {t('label.sign_in')}
                </Button>
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Modal>
            </div>
        </div>
    );
};
