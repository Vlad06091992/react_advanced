import { classnames } from 'shared/lib/classnames';
import React, { ReactNode, useCallback } from 'react';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem {
    value: string
    content: ReactNode
}

export interface TabProps {
    className: string,
    tabs: TabItem[],
    value: string,
    onTabClick: (tab:TabItem) => void
}

export const Tabs = (props: TabProps) => {
    const {
        className, tabs, onTabClick, value
    } = props;

    const clickHandler = useCallback((tab: TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classnames(cls.tabs, [className])}>

            {tabs.map((tab) => (
                <Card
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    className={cls.tab}
                    key={tab.value}
                    onClick={clickHandler(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};

// t('Редактировать')
