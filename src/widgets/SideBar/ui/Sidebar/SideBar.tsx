import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC } from 'react';
import { SideBarItem } from 'widgets/SideBar';
import { useAppSelector } from 'app/providers/StoreProvider';
import selector from '../../model/selectors/selector';
import cls from './SideBar.module.scss';

export const SideBar: FC = () => {
    const { collapsed, sideBarItems } = useAppSelector(selector);

    return (
        <menu data-testid="SideBar" className={classNames(cls.root, { [cls.collapsed]: collapsed }, [])}>
            <li className={classNames(cls.links, {}, [])}>
                {sideBarItems.map((item) => (
                    <SideBarItem
                        key={item.label}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </li>
        </menu>
    );
};
