import { useState } from "react";
import { v4 } from "uuid";

const TodoAppOptimize = () => {
  // Define state for todo title
  const [todoTitle, setTodoTitle] = useState("");
  // Define state for Todos
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState({});

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
        if (item.id === editing.id) {
          item.title = editing.title;
        }
        return item;
      });
    });
    setEditing({});
  };

  const onEditTodo = (item) => {
    setEditing(item);
  };

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
                {item.id === editing.id ? (
                  <div>
                    <input
                      type={"text"}
                      value={editing.title}
                      placeholder="Enter new todo title"
                      onChange={(e) =>
                        setEditing((prvstate) => {
                          return { ...prvstate, title: e.target.value };
                        })
                      }
                    />

                    <button onClick={updateTodo}>Update</button>
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

export default TodoAppOptimize;
