/* eslint react/prop-types: 0 */

import { createContext, useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN, CREATE_USER } from "../graphql/users";
import { useNavigate } from "react-router-dom";

// Define the GraphQL login mutation

// Create the Auth Context
const AuthContext = createContext();
// Custom hook to use the Auth Context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);

  // Use the useMutation hook to call the login mutation
  const [loginMutation] = useMutation(LOGIN);
  const [createUserMutation] = useMutation(CREATE_USER);
  const login = async (login) => {
    try {
      const { data } = await loginMutation({
        variables: { email: login.email, password: login.password },
      });
      setToken(data.login.token);
      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
    }
  };
  const createUser = async (user) => {
    console.log(user);

    try {
      const { data } = await createUserMutation({
        variables: {
          email: user.email,
          password: user.password,
          age: user.age,
          username: user.username,
          interest: [],
        },
      });
      setToken(data.createUser.token);
      navigate("/");
    } catch (error) {
      console.error("Creating user failed", error);
    }
  };

  const logout = () => {
    setToken(null);
  };

  const value = {
    token,
    createUser,
    login,
    logout,
    isAuthenticated: !!token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
