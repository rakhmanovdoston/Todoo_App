import { createContext, useState } from "react";

export const UserContext = createContext(null);

function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export default function UserProvider({ children }) {
  const [user, setUser] = useState(getUser());

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
