import React, {FC, useState} from "react";
import {classnames} from "shared/lib/classnames";
import styles from './Sidebar.module.scss'
import * as trace_events from "trace_events";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";

interface SidebarProps {
    className?:string
}


export const Sidebar:FC<SidebarProps> = ({className}) => {
const [collapsed,setCollapsed] = useState(false)
    const onToggle = ()=>setCollapsed(!collapsed);
    return (
        <div className={classnames(styles.Sidebar, [],{[styles.collapsed]:collapsed})}>
            <button onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                           <ThemeSwitcher/>
            </div>
        </div>
    )

}