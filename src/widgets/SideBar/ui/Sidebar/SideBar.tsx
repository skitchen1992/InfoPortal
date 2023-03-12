import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, useState } from 'react';
import { House, List, ListDashes } from 'phosphor-react';
import { IconButton } from 'shared/ui/IconButton/IconButton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import cls from './SideBar.module.scss';

interface IProps {
    className?: string
}

export const SideBar: FC<IProps> = (props) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div data-testid="SideBar" className={classNames(cls.root, { [cls.collapsed]: collapsed }, [className])}>
            <div className={classNames(cls.wrapBtn, { [cls.collapsed]: collapsed }, [className])}>
                <IconButton data-testid="SideBarButton" onClick={onToggle}><List /></IconButton>

                <div className={classNames(cls.links, {}, [])}>

                    <AppLink to={RoutePath.main}>
                        <div className={classNames(cls.link, {}, [])}>
                            <House size={26} />
                            <div className={classNames(cls.label, { [cls.collapsed]: collapsed }, [])}>
                                {t('page.main')}
                            </div>
                        </div>
                    </AppLink>

                    <AppLink to={RoutePath.about}>
                        <div className={classNames(cls.link, {}, [])}>
                            <ListDashes size={26} />
                            <div className={classNames(cls.label, { [cls.collapsed]: collapsed }, [])}>
                                {t('page.about')}
                            </div>
                        </div>
                    </AppLink>

                </div>
            </div>
        </div>
    );
};
