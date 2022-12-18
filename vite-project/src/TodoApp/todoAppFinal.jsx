import { useState } from "react";
import { v4 } from "uuid";
export const  TodoCompleteApp1 = ()=>{
    const [todoTitle,setTodoTitle]=useState("");
    const [todos,setTodos]=useState([]);
    const [editingTodo,setEditingTodo]=useState(null);
    const [newTodoTitle,setNewTodoTitle]=useState("");
    const _handleList=()=>{
        if(!todoTitle){
            return alert("chl be pgl");
        }
        
        setTodos((lastState) => [...lastState, { id: v4(), title: todoTitle }]);
         setTodoTitle("")
    }
    const _deleteListItem=(id)=>{
        setTodos((p)=>p.filter((item)=>item.id!==id))
    }
    const UpdateListItem=({id,title})=>{
        let myPromt=prompt("Enter Data for Update value",title);
        if(myPromt===title){return }
        setTodos((lastState)=>lastState.map((item)=>{
            if(item.id===id){
                item.title=myPromt;
            }
            return item;
            
        }))
        
    }
    const onEditTodo=(item)=>{
       
        setEditingTodo(item.id)
        setEditingTodo(item.title)
    }
    console.log("CurrentEdit: ", editingTodo);
    const updateTodo=()=>{
        setTodos((preStat)=>{
            return preStat.map((item)=>{
                if(item.title===editingTodo){
                    item.title=newTodoTitle;
                }
                return item;
            })
        })
    }
    return(
        <>
        <div>
            <input type="text"
            value={todoTitle}
            onChange={(e)=>{setTodoTitle(e.target.value)}} />
            <button onClick={_handleList}>cl</button>
        </div>
        <div>
        <ul>
            {
                todos.map((item)=>{
                    return (<li key={item.id}>
                        {item.title===editingTodo?(
                            <div>
                                <input type="text"
                                value={newTodoTitle}
                                onChange={(e)=>{setNewTodoTitle(e.target.value)}} />
                                <button onClick={updateTodo}>Update</button>
                            </div>
                        ):(
                            <div><p>{item.title}</p>
                            
                            <button onClick={()=>{UpdateListItem(item)}}>UpdateMe</button>
                    <button onClick={()=>{_deleteListItem(item.id)}} >Delete</button>
                    <button onClick={()=>onEditTodo(item)}>Edit</button></div>
                    )}
                    </li>);
                })}
        </ul>
        </div>
        </>
    )
}