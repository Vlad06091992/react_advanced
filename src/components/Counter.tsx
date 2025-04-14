import {useState} from "react";
import "./style.scss";

export const Counter = () => {

    let [v,setV] = useState(0)

    return (
        <div>
            <h1>value : {v}</h1>
            <button onClick={()=>setV(++v)}>add</button>
        </div>
    )
}
