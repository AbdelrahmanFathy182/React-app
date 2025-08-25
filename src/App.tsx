import { useState } from "react";
import "./App.css";

import TodoItem from "./Components/TodoItem";
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [Input, setInput] = useState("");
  const [Todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    if (!Input.trim) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: Input,
      completed: false,
    };

    setTodos((prevtodos) => [...prevtodos, newTodo]);
    setInput("");
  };

  const CompleteTodo = (id: number) => {
    setTodos(
      Todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };
  const deleteTodo = (id: number) => {
    setTodos(Todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="bg-purple-950 p-2 min-h-screen flex justify-center items-center">
        <div className="max-w-[500px] w-[90%] bg-slate-900 p-4">
          ,
          <h1 className="text-center text-white text-2xl rounded-md shadow-md">
            Todos for the day
          </h1>
          <div className="flex gap-2 justify-center my-8">
            <input
              value={Input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="add todo"
              className="flex-3 border-2 outline-none border-gray-500 text-white placeholder-grey-500 p-2 rounded-md focus:border-white"
            />
            <button
              onClick={addTodo}
              className="flex-1 bg bg-purple-800 cursor-pointer rounded-md text-sm hover:bg-purple-500 text-white"
            >
              Add todo
            </button>
          </div>
          <div>
            <h1 className="text-center text-white text-2xl rounded-md shadow-md">
              Todos
            </h1>
            {/* todo list */}
            {Todos.map((Todo) => {
              return (
                <TodoItem key={Todo.id} todo={Todo} complete={CompleteTodo} deletex={deleteTodo} />
              );
            })}
            {/* todo list */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
