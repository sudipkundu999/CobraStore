import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts";
import { notifyDefault } from "../utils";

export const RestrictedRoutes = () => {
  const { isUserLoggedIn } = useAuth();
  useEffect(
    () => isUserLoggedIn && notifyDefault("You're already logged in!"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return isUserLoggedIn ? <Navigate to="/products" replace /> : <Outlet />;
};
