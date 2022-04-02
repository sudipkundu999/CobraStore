import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts";
import { notifyDefault } from "../utils";

export const PrivateRoute = () => {
  const { isUserLoggedIn } = useAuth();
  useEffect(
    () => !isUserLoggedIn && notifyDefault("Please Login to continue"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return isUserLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};
