import { v4 } from "uuid";

import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [todoTitle, settodoTitle] = useState("");

  const [updated, setUpdated] = useState([]);
  const [printPrev, setPrev] = useState([]);
  const handleChange = (event) => {
    settodoTitle(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setUpdated((lastState) => [...lastState, { id: v4(), title: todoTitle }]);
      if (localStorage.getItem("data")) {
        let x = true;
        if (x) {
          localStorage.setItem(
            "data",
            JSON.stringify([
              ...JSON.parse(localStorage.getItem("data")),
              todoTitle,
            ])
          );
        } else {
          console.log("SK@chutoya");
        }
      } else {
        localStorage.setItem("data", JSON.stringify([todoTitle]));
      }
      settodoTitle("");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("data")) {
      JSON.parse(localStorage.getItem("data")).map((item) => {
        return setPrev((pre) => [...pre, item]);
      });
    }
  }, []);
  console.log("SK@", printPrev.length);
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
        Last Data:{" "}
        {updated.map((item) => {
          return <h1 key={item.id}>{item.title}</h1>;
        })}
      </h2>
      <h3>
        {printPrev.map((it) => {
          return <h1>{it}</h1>;
        })}
      </h3>
    </div>
  );
}
