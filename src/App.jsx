import { Routes, Route, Link } from "react-router-dom";
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

function App() {
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
              <Link className="flex items-center gap-1" to={"/"}>
                <MdOutlineKeyboardDoubleArrowRight />
                Upcoming
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-1" to={"/today"}>
                <GrMenu />
                Today
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-1">
                <FaCalendar />
                Calendar
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-1">
                <FaStickyNote />
                Sticky Wall
              </Link>
            </li>
          </ul>
        </aside>
        <section></section>
      </main>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/today" element={<Today />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
