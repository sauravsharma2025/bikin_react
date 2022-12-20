import { useState } from "react";
export const InputFunc=()=>{
    const [textValue,setTextValue]= useState("");
   
    return(
        <>
        <input type="text"
        value={textValue}
        name={textValue}
        onChange={(e)=>setTextValue(e.target.value)} />
        
        </>
    
    )
   
}
