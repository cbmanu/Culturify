/* eslint-disable react-refresh/only-export-components */
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LogIn } from "./pages/LogIn";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";
import { PostForm } from "./pages/PostForm";
import { AuthProvider } from "./context/auth";
import { ProtectedRoute } from "./utils/ProtectedRoute";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route
              path="/addPost"
              element={
                <ProtectedRoute>
                  <PostForm />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}
export default App;
