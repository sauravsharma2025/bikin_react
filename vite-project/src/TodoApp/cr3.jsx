import { useState } from "react";
export const CRV2=()=>{
    const [counter,setCounter]=useState(0);
    return(
        <div>
            <p>Counter:{counter}</p>
            <p>{counter%2===0?"odd":"Even"}</p>
            <button onClick={()=>{setCounter(counter+1)}}>Increase</button>
        </div>
    )
}