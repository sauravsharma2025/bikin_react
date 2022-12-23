import { v4 } from "uuid";

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
