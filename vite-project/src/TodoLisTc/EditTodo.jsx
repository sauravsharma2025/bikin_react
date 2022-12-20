import InputBox from "./InputBox";
export const EditTodo = ({
  onEditTodo,
  newTodoTitle,
  setNewTodoTitle,
  updateTodo,
}) => {
  return (
    <li>
      <div>
        <InputBox
          value={newTodoTitle}
          placeholder="Enter new todo title"
          onChange={(key, value) => setNewTodoTitle(value)}
        />
        <button onClick={updateTodo}>Update</button>
      </div>
    </li>
  );
};
