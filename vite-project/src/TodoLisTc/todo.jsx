import { useState } from "react";
import { v4 } from "uuid";
import InputBox from "./InputBox";
import TodoItem from "./TodoItem";
import { DeleteFc } from "./DeleteFC";
import { EditTodo } from "./EditTodo";
const Todo51App = () => {
  // Define state for todo title
  const [todoTitle, setTodoTitle] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  // Define state for Todos
  const [todos, setTodos] = useState([]);

  // Method to add todo into list
  const handleAddTodo = () => {
    if (!todoTitle) {
      return alert("Please enter a todo title");
    }

    // Update the todo
    setTodos((lastState) => [...lastState, { id: v4(), title: todoTitle }]);
    setTodoTitle("");

    // Second way -> it may create stale closure issue with async to multi state
    //setTodos([...todos, todoTitle]);
  };

  const onDeleteTodo = (id) => {
    setTodos((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const updateTodo = () => {
    setTodos((prevState) => {
      return prevState.map((item) => {
        if (item.id === editingTodo) {
          item.title = newTodoTitle;
        }
        return item;
      });
    });

    setEditingTodo(null);
    setNewTodoTitle(null);
  };

  const onEditTodo = (item) => {
    setEditingTodo(item.id);
    setNewTodoTitle(item.title);
  };

  console.log("CurrentEdit: ", editingTodo);
  // Define return for JSX
  return (
    <>
      <div>
        <InputBox
          name="todo"
          onChange={(key, value) => setTodoTitle(value)}
          value={todoTitle}
        />

        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div>
        <h1>My Todos</h1>
        <ul>
          {todos.map((item) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                editingTodo={editingTodo}
                newTodoTitle={newTodoTitle}
                setNewTodoTitle={setNewTodoTitle}
                updateTodo={updateTodo}
                onEditTodo={onEditTodo}
                onDeleteTodo={onDeleteTodo}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Todo51App;