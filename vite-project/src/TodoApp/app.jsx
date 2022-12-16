import { useState } from "react";
import {v4} from "uuid";
export const TodoAppV1 =()=>{
  const [todoTitle,todoTitleFc]=useState("");
  const [todoList,todoListFc]=useState([]);
  const _handleTodo=()=>{
    if(!todoTitle){
        return alert("Hey Please Assign Some Task")
    }
    todoListFc((preState)=>[...preState,{title:todoTitle,id:v4()}])
    todoTitleFc("")
  
  } 
  const _handleDelete=(id)=>{
    todoListFc((preStateo)=>{
        return preStateo.filter((item)=>item.id !==id)
    })
  }
  const _updateList=(id)=>{
    const promtData = prompt("enter item");
    // todoListFc((preStat)=>{
    //     return preStat.filter((item,index)=>{
    //        if(preStat[index].id===id){
    //         item.title=promtData
    //        };
            // })
    // })
    const newEditId=todoList.find((currentElem)=>{
          if(currentElem.id===id){
            currentElem.title=promtData
            return todoList
          } 
    })
    
    console.log('SK@31',todoList);
  }
  return(
    <>
    <div>
        <input type="text"
        value={todoTitle}
        onChange={(e)=>{todoTitleFc(e.target.value)}} />
        <button onClick={_handleTodo}>Create Task</button>
      
    </div>
    <div>
        <ul>
            {todoList.map((item)=>{
                return <li onClick={()=>{_handleDelete(item.id)}} key={item.id}>{item.title}
                <button onClick={()=>{_updateList(item.id)}}>Update_Me</button>
                </li>
            })}
        </ul>
    </div>
    </>
  ) 
}