import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  async function login() {
    setError(null);
    setLoading();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });
      if (!response.ok) {
        throw new Error(error);
      }

      const user = await response.json();
      setUser(user);
      saveUser(user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    login();
  }

  return (
    <div className="w-[600px] h-[600px] bg-white">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 items-center w-full h-full justify-center"
      >
        <h2 className="text-[32px] font-bold text-center">Sign In</h2>
        <div className="flex gap-3 pr-[80px]">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            value={userName}
            id="userName"
            required
            onChange={(e) => setUserName(e.target.value)}
            className="w-[300px] border-2 border-black border-solid rounded-md"
          />
        </div>
        <div className="flex gap-4 pr-[80px]">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-[300px] border-2 border-black border-solid rounded-md"
          />
        </div>

        {error && <p className="text-red-500">Error: {error.message}</p>}
        <div className="items-center">
          <button
            type="submit"
            disabled={loading}
            className="w-[300px] h-[50px] bg-green-500 text-white rounded-[10px]"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
