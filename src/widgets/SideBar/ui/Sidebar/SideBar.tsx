import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC } from 'react';
import { sideBarLinklist } from 'widgets/SideBar/model/LinkList';
import { SideBarItem } from 'widgets/SideBar';
import { useAppSelector } from 'app/providers/StoreProvider';
import { getSideBarCollapsed } from 'widgets/SideBar/model/selectors/getSideBarCollapsed/getSideBarCollapsed';
import cls from './SideBar.module.scss';

export const SideBar: FC = () => {
    const collapsed = useAppSelector(getSideBarCollapsed);

    return (
        <div data-testid="SideBar" className={classNames(cls.root, { [cls.collapsed]: collapsed }, [])}>
            <div className={classNames(cls.wrapBtn, { [cls.collapsed]: collapsed }, [])}>

                <div className={classNames(cls.links, {}, [])}>
                    {sideBarLinklist.map((item) => (
                        <SideBarItem
                            key={item.label}
                            routePath={item.routePath}
                            icon={item.icon}
                            collapsed={collapsed}
                            label={item.label}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
