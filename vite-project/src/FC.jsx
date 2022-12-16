import { useState } from "react";
const Firstfc=()=>{
    const [userName,setUserName]=useState("");
    return (
        <div>
            <input type="text"
            value={userName}
            onChange={(e)=>{setUserName(e.target.value)}}
            />
            <p>Name:{userName}</p>
        </div>
    )
}
export default Firstfc;