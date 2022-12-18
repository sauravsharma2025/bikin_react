import { useState } from "react";
import { v4 } from "uuid";

const TodoApp = () => {
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

  const onUpdateTodo = ({ id, title }) => {
    console.log(id, title);
    const newTitle = prompt("Update todo", title);
    if (newTitle === title) {
      return;
    }

    setTodos((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          item.title = newTitle;
        }
        return item;
      });
    });
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
        <input
          value={todoTitle}
          type="text"
          placeholder="Enter todo title"
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div>
        <h1>My Todos</h1>
        <ul>
          {todos.map((item) => {
            return (
              <li key={item.id}>
                {item.id === editingTodo ? (
                  <div>
                    <input
                      type={"text"}
                      value={newTodoTitle}
                      placeholder="Enter new todo title"
                      onChange={(e) => setNewTodoTitle(e.target.value)}
                    />

                    <button onClick={() => onUpdateTodo()}>Update</button>
                  </div>
                ) : (
                  <div>
                    <p>{item.title}</p>
                    <button onClick={() => onEditTodo(item)}>Edit</button>
                    <button onClick={() => onDeleteTodo(item.id)}>
                      Delete
                    </button>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoApp;
