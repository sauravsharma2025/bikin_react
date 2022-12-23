// import { useEffect } from "react";
// import { useState } from "react";
import { v4 } from "uuid";
// import InputBox from "./TodoLisTc/InputBox";
// export const TodoNew = () => {
//   const [todoTitle, setTodoTitle] = useState("");
//   const [todoList, setTodos] = useState([]);

//   const handleChange = (event) => {
//     setTodoTitle(event.target.value);
//   };
//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       setTodos((lastState) => [...lastState, { id: v4(), title: todoTitle }]);
//     }
//     return (
//       <>
//         <h1>Enter Text Here</h1>
//         <InputBox
//           type="text"
//           id="todoTitle"
//           name="todo"
//           onChange={(key, value) => handleChange(value)}
//           value={todoTitle}
//           onKeyDown={handleKeyDown}
//         />
//         <p>
//           {todoList.map((item) => {
//             return <h1>{item.title}</h1>;
//           })}
//         </p>
//       </>
//     );
//   };
// };
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [todoTitle, settodoTitle] = useState("");

  const [updated, setUpdated] = useState([]);

  const handleChange = (event) => {
    settodoTitle(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setUpdated((lastState) => [...lastState, { id: v4(), title: todoTitle }]);
      settodoTitle("");
    }
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(updated));
  }, [todoTitle]);

  return (
    <div>
      <input
        type="text"
        id="todoTitle"
        name="todoTitle"
        value={todoTitle}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <h2>todoTitle: {todoTitle}</h2>

      <h2>
        Updated:{" "}
        {updated.map((item) => {
          return <h1 key={item.id}>{item.title}</h1>;
        })}
      </h2>
    </div>
  );
}
