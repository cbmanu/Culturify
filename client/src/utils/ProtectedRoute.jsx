/* eslint react/prop-types: 0 */
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};
