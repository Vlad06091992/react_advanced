import React, {FC, useState} from "react";
import {classnames} from "shared/lib/classnames";
import styles from './Sidebar.module.scss'
import * as trace_events from "trace_events";
import {ThemeSwitcher} from "widgets/ThemeSwitcher/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/LangSwitcher";

interface SidebarProps {
    className?: string
}


export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => setCollapsed(!collapsed);
    return (
        <div className={classnames(styles.Sidebar, [], {[styles.collapsed]: collapsed})}>
            <button onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={styles.langSwitcher}/>
            </div>
        </div>
    )

}