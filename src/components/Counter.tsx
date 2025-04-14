import {useState} from "react";
import styles from './Counter.module.scss'

export const Counter = () => {

    let [v,setV] = useState(0)

    return (
        <div className={styles.color}>
            <h1  >value : {v}</h1>
            <button onClick={()=>setV(++v)}>add</button>
        </div>
    )
}
