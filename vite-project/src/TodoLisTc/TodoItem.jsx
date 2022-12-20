import InputBox from "./InputBox";
import { DeleteFc } from "./DeleteFC";
import { EditTodo } from "./EditTodo";
const TodoItem = ({
  item,
  editingTodo,
  newTodoTitle,
  setNewTodoTitle,
  updateTodo,
  onEditTodo,
  onDeleteTodo,
}) => {
  if (item.id === editingTodo) {
    return (
     <EditTodo
     
     />
    );
  }

  return (
    <li>
      <div>
        <p>{item.title}</p>
        
        <DeleteFc
        onDeleteTodo={()=>onDeleteTodo(item.id)}
        />
        <button onClick={() => onEditTodo(item)}>Edit</button>
       
      </div>
    </li>
  );

};

export default TodoItem;