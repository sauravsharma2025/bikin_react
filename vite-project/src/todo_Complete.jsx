import { useState } from "react";
export const TodoApp=()=>{
    const [todo,todoTitleFunc]=useState("");
    const [todoList,todoListFunc]=useState([])
    const handleBtn=()=>{
        if(!todo){
            alert("Not valid")
        }
        todoListFunc((preState)=>{
            return [...preState,todo]
        })
    }
    return(
        <>
        <div>
            <input type="text"
            value={todo}
            onChange={(e)=>{todoTitleFunc(e.target.value)}}
             />
             <button onClick={handleBtn}>ClickMe</button>
        </div>
        <div>
            <ul>
                {todoList.map((i,indx)=>{
                    return <li key={indx}>{i}</li>
                })}
            </ul>
        </div>
        </>
    )
}