import { Outlet, Navigate } from "react-router-dom";
export function ProtectedRoutes() {
  let auth = { token: false };
  return auth.token ? <Outlet /> : <Navigate to="/logIn" />;
}
