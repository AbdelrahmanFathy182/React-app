import { FaCheckCircle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

type TodoProp = {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  complete: (id: number) => void;
  deletex: (id: number) => void;
};

export default function TodoItem({ todo, complete, deletex }: TodoProp) {
  return (
    <div className="bg-purple-800 p-2 rounded-md flex justify-between items-center my-4 text-white">
      <p className={`${todo.completed === true ? "line-through" : ""}`}>
        {todo.text}
      </p>
      <div className="flex items-center gap-2 cursor-pointer">
        <FaCheckCircle
          onClick={() => complete(todo.id)}
          className="hover:text-teal-200"
        />
        <FaTrash
          onClick={() => deletex(todo.id)}
          className="hover:text-teal-200"
        />
      </div>
    </div>
  );
}
