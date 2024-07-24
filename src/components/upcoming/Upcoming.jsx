import { useEffect, useState } from "react";
import { FaRegSquareCheck } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addNewTodoUpcoming,
  deleteUpcoming,
  addUpcoming,
} from "../../store/todosSlice";
import { api } from "../../api";
import Tomorrow from "../tomorrow/Tomorrow";
import ThisWeek from "../thisWeek/Thisweek";

const Upcoming = () => {
  const todos = useSelector((store) => store.todosReducer.upcoming);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const [submitLoading, setSubmitLoading] = useState(false);

  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    async function fetchTodayTodos() {
      setLoading(true);
      setFetchError(null);
      try {
        const response = await api.get(`/today`);

        dispatch(addUpcoming(response.data));
      } catch (error) {
        console.error(error);
        setFetchError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTodayTodos();
  }, []);

  const addNewTodo = async (event) => {
    event.preventDefault();
    const id = todos.length ? Number(todos[todos.length - 1].id) + 1 : 1;

    const newTodo = {
      id: String(id),
      title: text,
      checked: false,
    };

    try {
      setSubmitLoading(true);
      await api.post("/today", newTodo);
      dispatch(addNewTodoUpcoming(newTodo));
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitLoading(false);
    }

    const newTodos = [...todos];
    newTodos.push(newTodo);
    localStorage.setItem("newTodo", JSON.stringify(newTodos));
    setText("");
  };

  const deleteTodos = async (id) => {
    setDeleteLoading(true);
    try {
      await api.delete(`/today/${id}`);
      dispatch(deleteUpcoming(id));
    } catch (error) {
      console.error(error);
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-[32px] font-bold">Upcoming</h1>
      <section className="w-[1000px] h-auto  border-2 border-solid border-black rounded-[40px] p-4">
        <h1 className="text-[32px] font-sans font-bold mb-3">Today</h1>
        <form
          onSubmit={(e) => {
            addNewTodo(e.target.value);
          }}
        >
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
            disabled={text === "" ? true : false}
          >
            +
          </button>
          {submitLoading ? (
            <p className="font-bold text-indigo-400">Adding Task...</p>
          ) : (
            ""
          )}
        </form>
        <h3 className="font-bold mb-2"> Tasks to do: {todos.length}</h3>
        <ul className="flex flex-col gap-3">
          {loading ? (
            <p>loading ...</p>
          ) : (
            todos.map((t) => {
              return (
                <li
                  key={t.id}
                  className="border-b-2 border-b-gray-500 mb-2 flex justify-between"
                >
                  <span>{t.title}</span>
                  <div className="buttons flex gap-3">
                    <button id="deleteBtn" onClick={() => deleteTodos(t.id)}>
                      <FaTrash />
                    </button>
                  </div>
                </li>
              );
            })
          )}
          {deleteLoading ? <b className="text-red-400">Delete Loading</b> : ""}
        </ul>
      </section>
      <div className="flex gap-5">
        <Tomorrow />
        <ThisWeek />
      </div>
    </main>
  );
};

export default Upcoming;
