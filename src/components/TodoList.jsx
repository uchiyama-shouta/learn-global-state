import React, { useContext, memo } from "react";
import { Todos } from "../App";

const TodoList = memo(() => {
  const { todos, setTodos } = useContext(Todos);

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);

    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li onClick={() => deleteTodo(index)} key={todo}>
          {todo}
        </li>
      ))}
    </ul>
  );
});

export default TodoList;
