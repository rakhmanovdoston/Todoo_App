import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { UserContext } from "../../context/UserContext";

export default function ProtectedRoute() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return <Outlet />;
}
