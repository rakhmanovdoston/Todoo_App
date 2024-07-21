import { useState } from "react";
import { FaRegSquareCheck } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
const init = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Walk the dog", completed: false },
  { id: 3, title: "Finish homework", completed: true },
  { id: 4, title: "Clean the kitchen", completed: false },
  { id: 5, title: "Read a book", completed: true },
];

const Today = () => {
  const [todos, setTodos] = useState(init);
  const [text, setText] = useState("");
  const [doneTasks, setDoneTasks] = useState([]);

  const deleteTodos = (id) => {
    const newTodos = todos.filter((t) => {
      return t.id !== id;
    });

    setTodos(newTodos);
  };

  const addNewTodo = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Date.now(),
      title: text,
      done: false,
    };

    const newTodos = [...todos];
    newTodos.push(newTodo);
    setTodos(newTodos);
    localStorage.setItem("newTodo", newTodos);
  };

  const checkBtn = (idTask) => {
    console.log(id);
    setTodos(todos.filter((t) => t.id !== idTask.id));
    setDoneTasks([...doneTasks, idTask]);

    // checkTodo.className = "checked"
  };

  return (
    <main className="">
      <h1 className="text-[32px] font-sans font-bold">Today</h1>
      <div className="w-[900px] h-[600px] rounded-[40px] border-2 border-solid border-black p-10">
        <h1 className="text-[32px] font-sans font-bold">Today</h1>
        <form onSubmit={addNewTodo}>
          <input
            type="text"
            placeholder="Add a new task"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
            className="w-full border-1 border-solid border-gray-500 h-[50px] p-[20px] rounded-[14px] -z-10 pl-[60px]"
          />
          <button
            className="button w-[32px] h-[32px] bg-transparent rounded-[50%] border-2 border-solid border-gray-500 text-center pb-2 text-[18px] font-bold z-30"
            onClick={addNewTodo}
            type="submit"
          >
            +
          </button>
        </form>
        <h3> Tasks to do: {todos.length}</h3>
        <ul>
          {todos.map((t) => {
            return (
              <li
                key={t.id}
                className="border-b-2 border-b-gray-500 mb-2 flex justify-between"
              >
                <span>{t.title}</span>
                <div className="buttons flex gap-3">
                  <button id="checkBtn" onClick={() => checkBtn()}>
                    <FaRegSquareCheck />
                  </button>
                  <button id="deleteBtn" onClick={() => deleteTodos(t.id)}>
                    <FaTrash />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <h3>Done Todos </h3>
        <ul id="doneTodos">
          {doneTasks.map((task) => {
            <li key={task.id}> {task.title} </li>;
          })}
        </ul>
      </div>
    </main>
  );
};

export default Today;
