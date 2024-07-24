import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Today from "./components/todayPage/Today";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCalendar } from "react-icons/fa6";
import { FaStickyNote } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Login from "./components/login/Login";
import Upcoming from "./components/upcoming/Upcoming";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((store) => store.todosReducer.today);
  return (
    <div className="w-full flex font-sans gap-10 items-center">
      <main>
        <aside className="w-[400px] h-[650px] ml-10 mt-6 rounded-[40px] bg-[#dcdcdc] p-5">
          <article className="flex justify-between items-center">
            <h1 className="text-[32px] font-bold">Menu</h1>
            <GiHamburgerMenu className="w-[25px] h-[25px]" />
          </article>
          <h3 className="text-[20px] font-bold">Tasks</h3>
          <ul>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                Start
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/upcoming"}
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                <MdOutlineKeyboardDoubleArrowRight />
                Upcoming
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/today"}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "4px",
                }}
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                <div className="flex items-center gap-1">
                  <GrMenu />
                  Today
                </div>
                <span className="w-[25px] h-[25px] bg-gray-400 text-black rounded-[50%] text-center items-center">
                  {todos.length}
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <FaCalendar />
                Calendar
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <FaStickyNote />
                Sticky Wall
              </NavLink>
            </li>
          </ul>
        </aside>
        <section></section>
      </main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/today" element={<Today />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/upcoming" element={<Upcoming />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
