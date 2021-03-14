import { createContext, useState } from "react";
import TodoArea from "./components/TodoArea";
import "./styles.css";

export const Todos = createContext();

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <Todos.Provider value={{ todos, setTodos }}>
      <TodoArea />
    </Todos.Provider>
  );
}
