import React, { useContext, useState } from "react";
import { Todos } from "../App";
import TodoList from "./TodoList";

const TodoArea = () => {
  const { todos, setTodos } = useContext(Todos);
  const [input, setInput] = useState("");

  const setInputValue = (e) => {
    setInput(e.target.value);
  };

  const onClickSetTodo = () => {
    const newTodos = [...todos, input];
    setTodos(newTodos);
    setInput("");
  };

  return (
    <div>
      <input type="text" value={input} onChange={setInputValue} />
      <button onClick={onClickSetTodo}>追加</button>
      <ul>
        <TodoList />
      </ul>
    </div>
  );
};
export default TodoArea;
