import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC } from 'react';
import { SideBarItem } from 'widgets/SideBar';
import { useAppSelector } from 'app/providers/StoreProvider';
import { HStack, VStack } from 'shared/ui/Stack';
import selector from '../../model/selectors/selector';
import cls from './SideBar.module.scss';

export const SideBar: FC = () => {
    const { collapsed, sideBarItems } = useAppSelector(selector);

    return (
        <aside data-testid="SideBar" className={classNames(cls.root, { [cls.collapsed]: collapsed }, [])}>
            {sideBarItems.map((item) => (
                <SideBarItem
                    key={item.label}
                    item={item}
                    collapsed={collapsed}
                />
            ))}
        </aside>
    );
};
