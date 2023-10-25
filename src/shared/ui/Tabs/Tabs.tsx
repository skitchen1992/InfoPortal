import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import { Card } from 'shared/ui/Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className, tabs, onTabClick, value,
    } = props;

    const clickHandle = useCallback((tab: TabItem) => () => {
        if (tab.value !== value) {
            onTabClick(tab);
        }
    }, [onTabClick, value]);

    return (
        <div className={classNames(cls.root, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    key={tab.value}
                    onClick={clickHandle(tab)}
                    className={classNames(cls.tab, {}, [tab.value === value ? cls.selected : undefined])}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
