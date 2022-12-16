import { useState } from "react";
const TimepassC = ()=>{
    const [profile,setProfile]=useState({
        name:"Saurav",
        city:"Ratlam",
        state:"MP",
    })
    const _handleInputChange=(e)=>{
        const {name,value}=e.target;
       setProfile((preState)=>{
        return{
            ...preState,[name]:value
        }
       })
    }
    return(
        <>
        <p>Name:{profile.name}</p>
        <input type="text" name="name" value={profile.name}
        onChange={_handleInputChange} />

        </>
    )
}
export default TimepassC;